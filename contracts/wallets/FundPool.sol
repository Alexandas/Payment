// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol';

import '../interfaces/IFundPool.sol';
import '../govers/RouterWrapper.sol';
import '../access/OwnerWithdrawable.sol';
import '../access/Pauser.sol';

/// @author Alexandas
/// @dev FundPool contract
contract FundPool is 
	IFundPool,
	OwnerWithdrawable,
	Pauser, 
	ReentrancyGuardUpgradeable,
	EIP712Upgradeable,
	RouterWrapper
{
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	/// @dev keccak256("Recharge(address provider,bytes32 account,uint256 amount)")
	bytes32 public override rechargeTypesHash;

	/// @dev account balances
	mapping(address => mapping(bytes32 => uint256)) internal balances;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param pauser contract pauser
	/// @param name EIP712 domain name
	/// @param version EIP712 domain version
	/// @param rechargeTypes recharge types
	/// @param router router contract address
	function initialize(
		address owner,
		address pauser,
		string memory name,
		string memory version,
		string memory rechargeTypes,
		IRouter router
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__EIP712_init(name, version);
		__Init_Recharge_Types_Hash(rechargeTypes);
		__Init_Router(router);
	}

	/// @dev initialize recharge typed hash
	/// @param types recharge types
	function __Init_Recharge_Types_Hash(string memory types) internal onlyInitializing {
		_setRechargeTypesHash(keccak256(bytes(types)));
	}

	/// @dev recharge for account
	/// @param provider provider address
	/// @param account user account
	/// @param amount token amount
	/// @param signature provider signature
	function recharge(
		address provider,
		bytes32 account,
		uint256 amount,
		bytes memory signature
	) external override whenNotPaused nonReentrant {
		require(amount > 0, 'FundPool: zero amount');
		require(router.ProviderController().walletOf(provider, account) != address(0), 'FundPool: nonexistent wallet');
		bytes32 hash = hashTypedDataV4ForRecharge(provider, account, amount);
		require(router.ProviderRegistry().isValidSignature(provider, hash, signature), 'FundPool: invalid signature');
		_recharge(provider, account, amount);
	}

	function _recharge(
		address provider,
		bytes32 account,
		uint256 amount
	) internal {
		balances[provider][account] = balances[provider][account].add(amount);
		router.Token().safeTransferFrom(msg.sender, address(this), amount);
		emit Recharged(provider, account, amount);
	}

	/// @dev spend bills for account
	/// @param provider provider address
	/// @param account user account
	/// @param bills billing data
	/// @param timeout tx timeout
	/// @param nonce billing nonce
	/// @param signature provider signature
	/// @return fee bills fee
	function spend(
		address provider, 
		bytes32 account, 
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory signature
	) external override whenNotPaused nonReentrant returns (uint256 fee) {
		require(bills.length > 0, 'FundPool: invalid bills');
		require(router.ProviderController().accountExists(provider, account), 'FundPool: nonexistent account');
		fee = _spend(provider, account, bills, timeout, nonce, signature);
	}

	function _spend(
		address provider, 
		bytes32 account, 
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory signature
	) internal returns (uint256 amount) {
		if (bills.length > 0) {
			IBilling billing = router.Billing();
			amount = billing.spend(provider, account, bills, timeout, nonce, signature);
			uint256 balance = balanceOf(provider, account);
			require(balance >= amount, 'FundPool: insufficient balance for billing fee');
			balances[provider][account] = balances[provider][account].sub(amount);
			router.Token().safeTransfer(address(billing), amount);
		}
		emit Spent(provider, account, amount);
	}

	/// @dev withdraw token for account
	/// @param provider provider address
	/// @param account user account
	/// @param bills billing data
	/// @param timeout tx timeout
	/// @param nonce billing nonce
	/// @param signature billing signature
	/// @param to token receiver
	/// @param amount token amount
	/// @param signature provider signature
	/// @return fee bill fee
	function withdraw(
		address provider, 
		bytes32 account, 
		bytes memory bills,
		uint256 timeout,
		uint64 nonce,
		bytes memory signature,
		address to,
		uint256 amount
	) external override whenNotPaused nonReentrant returns (uint256 fee) {
		IProviderController controller = router.ProviderController();
		require(controller.walletOf(provider, account) == msg.sender, 'FundPool: caller is not the wallet for the account');
		require(controller.accountExists(provider, account), 'FundPool: nonexistent account');
		fee = _spend(provider, account, bills, timeout, nonce, signature);
		require(balanceOf(provider, account) >= amount, 'FundPool: insufficient balance for withdrawal');
		balances[provider][account] = balances[provider][account].sub(amount);
		router.Token().safeTransfer(to, amount);
		emit Withdrawn(provider, account, to, amount);
	}

	/// @dev return wallet of the account
	/// @param provider provider address
	/// @param account user account
	/// @return wallet of the account
	function walletOf(address provider, bytes32 account) public view override returns (address) {
		return router.ProviderController().walletOf(provider, account);
	}

	/// @dev return recharge types hash
	/// @param provider provider address
	/// @param account user account
	/// @param amount token amount
	/// @return recharge types hash
	function hashRechargeTypes(
		address provider,
		bytes32 account,
		uint256 amount
	) public view returns (bytes32) {
		return keccak256(abi.encode(rechargeTypesHash, provider, account, amount));
	}

	/// @dev return hash typed data v4 for recharge
	/// @param provider provider address
	/// @param account user account
	/// @param amount token amount
	/// @return recharge hash typed data v4 for recharge
	function hashTypedDataV4ForRecharge(
		address provider,
		bytes32 account,
		uint256 amount
	) public view returns (bytes32) {
		return _hashTypedDataV4(hashRechargeTypes(provider, account, amount));
	}

	function _setRechargeTypesHash(bytes32 hash) internal {
		rechargeTypesHash = hash;
		emit RechargeTypesHashUpdated(hash);
	}

	/// @dev return balance of account
	/// @param provider provider address
	/// @param account user account
	/// @return balance of account account
	function balanceOf(address provider, bytes32 account) public view returns(uint256) {
		require(router.ProviderController().accountExists(provider, account), 'FundPool: nonexistent provider');
		return balances[provider][account];
	}
}
