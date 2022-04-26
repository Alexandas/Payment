// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import './IBilling.sol';

interface IFundWallet is IBilling {
	struct Wallet {
		address owner;
		uint256 amount;
	}

	event TokenUpdated(IERC20Upgradeable token);

	event WalletOwnerTransferred(bytes32 account, address newOwner);

	event Charge(address provider, uint256 nonce, address owner, bytes32 account, uint256 amount);

	event Spend(address provider, uint256 nonce, bytes32 account, uint256 fee);

	event Withdrawn(address provider, uint256 nonce, bytes32 account, address to, uint256 amount);

	function token() external view returns (IERC20Upgradeable);

	function ownerOf(bytes32 account) external view returns (address);

	function balanceOf(bytes32 account) external view returns (uint256);

	function transferWalletOwner(bytes32 account, address newOwner) external;

	function charge(
		address provider,
		uint256 nonce,
		address owner,
		bytes32 account,
		uint256 amount,
		bytes memory signature
	) external;

	function withdraw(
		address provider,
		uint256 nonce,
		bytes32 account,
		address to,
		bytes memory billMessage,
		bytes memory signature
	) external returns (uint256);
}
