// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './IAdaptorWrapper.sol';

/// @author Alexandas
/// @dev normal resource controller interface
interface INormalResourceController is IAdaptorWrapper {
	/// @dev emit when resource expanded
	/// @param account user account
	/// @param value token value for resource decimals
	event Expanded(bytes32 account, uint256 value);

	/// @dev expand user's normal resource balance
	/// @param account user account
	/// @param value token value in resource decimals(18)
	function expand(bytes32 account, uint256 value) external;

	/// @dev resource balance
	/// @param account user account
	/// @return balance of the account
	function balanceOf(bytes32 account) external view returns (uint256);
}
