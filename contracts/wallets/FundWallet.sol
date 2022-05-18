// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';

import './Billing.sol';
import '../interfaces/IFundWallet.sol';
import '../access/OwnerWithdrawable.sol';
import '../access/Pauser.sol';

/// @author Alexandas
/// @dev FundWallet contract
contract FundWallet is IFundWallet, Billing, OwnerWithdrawable, Pauser, ReentrancyGuardUpgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	/// @dev keccak256("Recharge(address provider,uint64 nonce,bytes32 account,uint256 amount)")
	bytes32 public override rechargeTypedHash;

	/// @dev provider nonces for account
	mapping(address => mapping(bytes32 => mapping(uint64 => Purpose))) public nonces;

	/// @dev account wallet
	mapping(address => mapping(bytes32 => Wallet)) internal wallets;

	modifier onlyWalletOwner(address provider, bytes32 account) {
		require(wallets[provider][account].owner == msg.sender, 'FundWallet: caller is not wallet owner');
		_;
	}

	modifier nonNonce(
		address provider,
		bytes32 account,
		uint64 nonce
	) {
		require(nonces[provider][account][nonce] == Purpose.Null, 'FundWallet: invalid nonce');
		_;
	}

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param pauser contract pauser
	/// @param adaptor resource adaptor contract address
	/// @param _providers providers contract address
	/// @param _token token address
	/// @param name EIP712 domain name
	/// @param version EIP712 domain version
	/// @param rechargeTypes recharge types
	/// @param billsTypes bills types
	function initialize(
		address owner,
		address pauser,
		IResourceAdaptor adaptor,
		IProviders _providers,
		IERC20Upgradeable _token,
		string memory name,
		string memory version,
		string memory rechargeTypes,
		string memory billsTypes
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Providers(_providers);
		__Init_Resource_Adaptor(adaptor);
		__Init_Token(_token);
		__EIP712_init(name, version);
		__Init_Recharge_Typed_Hash(rechargeTypes);
		__Init_Bills_Typed_Hash(billsTypes);
	}

	/// @dev initialize recharge typed hash
	/// @param types recharge types
	function __Init_Recharge_Typed_Hash(string memory types) internal onlyInitializing {
		_setRechargeTypedHash(keccak256(bytes(types)));
	}

	/// @dev recharge for account
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param amount token amount
	/// @param signature provider signature
	function recharge(
		address provider,
		uint64 nonce,
		bytes32 account,
		uint256 amount,
		bytes memory signature
	) external override nonNonce(provider, account, nonce) whenNotPaused nonReentrant {
		if (ownerOf(provider, account) != address(0)) {
			require(ownerOf(provider, account) == msg.sender, 'FundWallet: caller is not the wallet owner');
		} else {
			_setWalletOwner(provider, account, msg.sender);
		}
		_recharge(provider, nonce, account, amount, signature);
	}

	function _recharge(
		address provider,
		uint64 nonce,
		bytes32 account,
		uint256 amount,
		bytes memory signature
	) internal {
		require(amount > 0, 'FundWallet: zero amount');
		bytes32 hash = hashTypedDataV4ForRecharge(provider, nonce, account, amount);
		require(providers.isValidSignature(provider, hash, signature), 'FundWallet: invalid signature');
		wallets[provider][account].amount = wallets[provider][account].amount.add(amount);
		token.safeTransferFrom(msg.sender, address(this), amount);
		_updateNonce(provider, account, nonce, Purpose.Recharge);

		emit Recharged(provider, nonce, account, amount);
	}

	/// @dev spend bills for account
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param bills bills bytes
	/// @param expiration tx expiration
	/// @param signature provider signature
	/// @param fee bills fee
	function spend(
		address provider,
		uint64 nonce,
		bytes32 account,
		bytes memory bills,
		uint256 expiration,
		bytes memory signature
	) external override nonNonce(provider, account, nonce) whenNotPaused nonReentrant returns (uint256 fee) {
		fee = _spend(Payload(provider, nonce, account, bills, expiration), signature);
		wallets[provider][account].amount = wallets[provider][account].amount.sub(fee);
		_updateNonce(provider, account, nonce, Purpose.Spend);

		emit Spent(provider, nonce, account, fee);
	}

	/// @dev withdraw token for account
	/// @param payload bill payload
	/// @param to token receiver
	/// @param amount token amount
	/// @param signature provider signature
	/// @return fee bill fee
	function withdraw(
		Payload memory payload,
		address to,
		uint256 amount,
		bytes memory signature
	) external override nonNonce(payload.provider, payload.account, payload.nonce) onlyWalletOwner(payload.provider, payload.account) whenNotPaused nonReentrant returns (uint256 fee) {
		fee = _spend(payload, signature);
		address provider = payload.provider;
		bytes32 account = payload.account;
		uint64 nonce = payload.nonce;
		uint256 left = wallets[provider][account].amount.sub(fee);
		address receiver = to;
		uint256 value = amount;
		require(left >= value, 'FundWallet: insufficient balance');
		wallets[provider][account].amount = left.sub(value);
		token.safeTransfer(receiver, value);
		_updateNonce(provider, account, nonce, Purpose.Withdraw);

		emit Withdrawn(provider, nonce, account, receiver, value);
	}

	/// @dev transfer wallet owner for account
	/// @param provider provider address
	/// @param account user account
	/// @param newOwner new wallet owner for account
	function transferWalletOwner(
		address provider,
		bytes32 account,
		address newOwner
	) external override whenNotPaused onlyWalletOwner(provider, account) {
		require(ownerOf(provider, account) != address(0), 'FundWallet: nonexistent wallet owner');
		require(newOwner != address(0), 'FundWallet: zero address');
		_setWalletOwner(provider, account, newOwner);
	}

	function _setWalletOwner(
		address provider,
		bytes32 account,
		address owner
	) internal {
		wallets[provider][account].owner = owner;
		emit WalletOwnerTransferred(provider, account, owner);
	}

	/// @dev return owner of account
	/// @param provider provider address
	/// @param account user account
	/// @return owner wallet owner for account
	function ownerOf(address provider, bytes32 account) public view override returns (address) {
		return wallets[provider][account].owner;
	}

	/// @dev return balance of account
	/// @param provider provider address
	/// @param account user account
	/// @return balance of account account
	function balanceOf(address provider, bytes32 account) public view override returns (uint256) {
		return wallets[provider][account].amount;
	}

	/// @dev update recharge typed hash
	/// @param types recharge types
	function setRechargeTypedHash(string memory types) external onlyOwner {
		_setRechargeTypedHash(keccak256(bytes(types)));
	}

	/// @dev update bills typed hash
	/// @param types bills types
	function setBillsTypedHash(string memory types) external onlyOwner {
		_setBillsTypedHash(keccak256(bytes(types)));
	}

	/// @dev update token
	/// @param _token token address
	function setToken(IERC20Upgradeable _token) external onlyOwner {
		_setToken(_token);
	}

	/// @dev return recharge typed hash
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param amount token amount
	/// @return recharge typed hash
	function rechargeHash(
		address provider,
		uint64 nonce,
		bytes32 account,
		uint256 amount
	) public view returns (bytes32) {
		return keccak256(abi.encode(rechargeTypedHash, provider, nonce, account, amount));
	}

	/// @dev return recharge hash typed v4
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param amount token amount
	/// @return recharge hash typed v4
	function hashTypedDataV4ForRecharge(
		address provider,
		uint64 nonce,
		bytes32 account,
		uint256 amount
	) public view returns (bytes32) {
		return _hashTypedDataV4(rechargeHash(provider, nonce, account, amount));
	}

	function _setRechargeTypedHash(bytes32 hash) internal {
		rechargeTypedHash = hash;
		emit RechargeTypedHashUpdated(hash);
	}

	function _updateNonce(
		address provider,
		bytes32 account,
		uint64 nonce,
		Purpose purpose
	) internal {
		nonces[provider][account][nonce] = purpose;
		emit NonceUpdated(provider, account, nonce, purpose);
	}
}
