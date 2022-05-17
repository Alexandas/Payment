// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './IBilling.sol';

/// @author Alexandas
/// @dev FundWallet interface
interface IFundWallet is IBilling {
	enum Purpose {
		Null,
		Recharge,
		Spend,
		Withdraw
	}

	struct Wallet {
		address owner;
		uint256 amount;
	}

	/// @dev emit when recharge type hash updated
	/// @param hash recharge type hash
	event RechargeTypedHashUpdated(bytes32 hash);

	/// @dev emit when nonce updated
	/// @param provider provider address
	/// @param account user account
	/// @param nonce nonce
	/// @param purpose nonce used for
	event NonceUpdated(address provider, bytes32 account, uint64 nonce, Purpose purpose);

	/// @dev emit when wallet owner changed
	/// @param provider provider address
	/// @param account user account
	/// @param newOwner new wallet owner for `account`
	event WalletOwnerTransferred(address provider, bytes32 account, address newOwner);

	/// @dev emit when account recharged
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param amount token amount
	event Recharged(address provider, uint64 nonce, bytes32 account, uint256 amount);

	/// @dev emit when bill finalized
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param fee bill fee
	event Spent(address provider, uint64 nonce, bytes32 account, uint256 fee);

	/// @dev emit when user withdrawn
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param to token receiver
	/// @param amount token amount
	event Withdrawn(address provider, uint64 nonce, bytes32 account, address to, uint256 amount);

	/// @dev return recharge typed hash
	function rechargeTypedHash() external view returns (bytes32);

	/// @dev return owner of account
	/// @param provider provider address
	/// @param account user account
	/// @return owner wallet owner for account
	function ownerOf(address provider, bytes32 account) external view returns (address);

	/// @dev transfer wallet owner for account
	/// @param provider provider address
	/// @param account user account
	/// @param newOwner new wallet owner for account
	function transferWalletOwner(
		address provider,
		bytes32 account,
		address newOwner
	) external;

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
	) external;

	/// @dev withdraw token for account
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param to token receiver
	/// @param amount token amount
	/// @param bill bill bytes
	/// @param signature provider signature
	/// @return fee bill fee
	function withdraw(
		address provider,
		uint64 nonce,
		bytes32 account,
		address to,
		uint256 amount,
		bytes memory bill,
		bytes memory signature
	) external returns (uint256 fee);

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
	) external returns (uint256 fee);
}
