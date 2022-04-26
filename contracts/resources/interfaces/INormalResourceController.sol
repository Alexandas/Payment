// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './IAdaptorWrapper.sol';

interface INormalResourceController is IAdaptorWrapper {
	event Expanded(bytes32 account, uint256 value);

	function expand(bytes32 account, uint256 value) external;

	function balanceOf(bytes32 account) external view returns (uint256);
}
