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

	/// @dev return recharge typed hash
	bytes32 public rechargeTypedHash;

	/// @dev provider nonces for account
	mapping(address => mapping(bytes32 => mapping(uint64 => Purpose))) public nonces;

	/// @dev account wallet
	mapping(address => mapping(bytes32 => Wallet)) internal wallets;

	modifier onlyWalletOwner(address provider, bytes32 account) {
		require(wallets[provider][account].owner == msg.sender, 'FundWallet: caller is not wallet owner');
		_;
	}

	modifier nonNonce(address provider, bytes32 account, uint64 nonce) {
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
	/// @param billTypes bill types
	function initialize(
		address owner,
		address pauser,
		IResourceAdaptor adaptor,
		IProviders _providers,
		IERC20Upgradeable _token,
		string memory name,
		string memory version,
		string memory rechargeTypes,
		string memory billTypes
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Providers(_providers);
		__Init_Resource_Adaptor(adaptor);
		__Init_Token(_token);
		__EIP712_init(name, version);
		__Init_Recharge_Typed_Hash(rechargeTypes);
		__Init_Bill_Typed_Hash(billTypes);
	}

	/// @dev initialize recharge typed hash
	/// @param types recharge types hash
	function __Init_Recharge_Typed_Hash(string memory types) internal onlyInitializing {
		_setRechargeTypedHash(keccak256(bytes(types)));
	}

	/// @dev initialize token address
	/// @param _token token address
	function __Init_Token(IERC20Upgradeable _token) internal onlyInitializing {
		_setToken(_token);
	}

	/// @dev recharge for account
	/// @param provider provider address
	/// @param nonce nonce
	/// @param owner wallet owner
	/// @param account user account
	/// @param amount token amount
	/// @param signature provider signature
	function recharge(
		address provider,
		uint64 nonce,
		address owner,
		bytes32 account,
		uint256 amount,
		bytes memory signature
	) external override nonNonce(provider, account, nonce) whenNotPaused nonReentrant {
		require(amount > 0, 'FundWallet: zero amount');
		bytes32 hash = hashTypedDataV4ForRecharge(provider, nonce, owner, account, amount);
		require(providers.isValidSignature(provider, hash, signature), 'FundWallet: invalid signature');
		if (wallets[provider][account].owner == address(0)) {
			wallets[provider][account].owner = owner;
		}
		wallets[provider][account].amount = wallets[provider][account].amount.add(amount);
		token.safeTransferFrom(msg.sender, address(this), amount);
		_updateNonce(provider, account, nonce, Purpose.Recharge);
		emit Charge(provider, nonce, owner, account, amount);
	}

	/// @dev spend bill for account
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param bill bill bytes
	/// @param signature provider signature
	/// @param fee bill fee
	function spend(
		address provider,
		uint64 nonce,
		bytes32 account,
		bytes memory bill,
		bytes memory signature
	) external override nonNonce(provider, account, nonce) whenNotPaused nonReentrant returns (uint256 fee) {
		fee = _spend(provider, nonce, account, bill, signature);
		wallets[provider][account].amount = wallets[provider][account].amount.sub(fee);
		_updateNonce(provider, account, nonce, Purpose.Spend);

		emit Spend(provider, nonce, account, fee);
	}

	/// @dev withdraw token for account
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param to token receiver
	/// @param bill bill bytes
	/// @param signature provider signature
	/// @return amount token amount
	function withdraw(
		address provider,
		uint64 nonce,
		bytes32 account,
		address to,
		bytes memory bill,
		bytes memory signature
	) external override nonNonce(provider, account, nonce) onlyWalletOwner(provider, account) whenNotPaused nonReentrant returns (uint256 amount) {
		address p = provider;
		uint256 fee = _spend(p, nonce, account, bill, signature);
		amount = wallets[p][account].amount.sub(fee);
		wallets[p][account].amount = 0;
		token.safeTransfer(to, amount);
		_updateNonce(p, account, nonce, Purpose.Withdraw);

		emit Withdrawn(p, nonce, account, to, amount);
	}

	/// @dev transfer wallet owner for account
	/// @param provider provider address
	/// @param account user account
	/// @param newOwner new wallet owner for account
	/// @param signature provider signature
	function transferWalletOwner(
		address provider,
		bytes32 account,
		address newOwner,
		bytes memory signature
	) external override whenNotPaused onlyWalletOwner(provider, account) {
		bytes32 hash = keccak256(abi.encodePacked(provider, newOwner, account));
		require(providers.isValidSignature(provider, hash, signature), 'FundWallet: invalid signature');
		wallets[provider][account].owner = newOwner;

		emit WalletOwnerTransferred(provider, account, newOwner);
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

	/// @dev update bill typed hash
	/// @param types bill types
	function setBillTypedHash(string memory types) external onlyOwner {
		_setBillTypedHash(keccak256(bytes(types)));
	}

	/// @dev update token
	/// @param _token token address
	function setToken(IERC20Upgradeable _token) external onlyOwner {
		_setToken(_token);
	}

	/// @dev return recharge typed hash
	/// @param provider provider address
	/// @param nonce nonce
	/// @param owner wallet owner
	/// @param account user account
	/// @param amount token amount
	/// @return recharge typed hash
	function rechargeHash(
		address provider,
		uint64 nonce,
		address owner,
		bytes32 account,
		uint256 amount
	) public view returns (bytes32) {
		return keccak256(abi.encode(rechargeTypedHash, provider, nonce, owner, account, amount));
	}

	/// @dev return recharge hash typed v4
	/// @param provider provider address
	/// @param nonce nonce
	/// @param owner wallet owner
	/// @param account user account
	/// @param amount token amount
	/// @return recharge recharge hash typed v4
	function hashTypedDataV4ForRecharge(
		address provider,
		uint64 nonce,
		address owner,
		bytes32 account,
		uint256 amount
	) public view returns (bytes32) {
		return _hashTypedDataV4(rechargeHash(provider, nonce, owner, account, amount));
	}

	function _setRechargeTypedHash(bytes32 hash) internal {
		rechargeTypedHash = hash;
		emit RechargeTypedHashUpdated(hash);
	}

	function _updateNonce(address provider, bytes32 account, uint64 nonce, Purpose purpose) internal {
		nonces[provider][account][nonce] = purpose;

		emit NonceUpdated(provider, account, nonce, purpose);
	}
}
