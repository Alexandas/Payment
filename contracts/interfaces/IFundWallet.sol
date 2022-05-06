// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './IBilling.sol';

interface IFundWallet is IBilling {
	struct Wallet {
		address owner;
		uint256 amount;
	}

	event WalletOwnerTransferred(address provider, bytes32 account, address newOwner);

	event Charge(address provider, uint64 nonce, address owner, bytes32 account, uint256 amount);

	event Spend(address provider, uint64 nonce, bytes32 account, uint256 fee, uint256 balance);

	event Withdrawn(address provider, uint64 nonce, bytes32 account, address to, uint256 amount);

	function ownerOf(address provider, bytes32 account) external view returns (address);

	function transferWalletOwner(address provider, bytes32 account, address newOwner, bytes memory signature) external;

	function charge(
		address provider,
		uint64 nonce,
		address owner,
		bytes32 account,
		uint256 amount,
		bytes memory signature
	) external;

	function withdraw(
		address provider,
		uint64 nonce,
		bytes32 account,
		address to,
		bytes memory billMessage,
		bytes memory signature
	) external returns (uint256);

	function spend(
		address provider,
		uint64 nonce,
		bytes32 account,
		bytes memory bill,
		bytes memory signature
	) external returns (uint256 fee);

}
