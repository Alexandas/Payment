// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import 'sgn-v2-contracts/contracts/message/libraries/MsgDataTypes.sol';

interface IMessageSender {
	function receiver() external view returns (address);

	function dstChainId() external view returns (uint64);

	function calcFee(bytes memory message) external view returns (uint256);

	function messageId(
		MsgDataTypes.RouteInfo calldata route,
		uint64 dstChainId,
		bytes calldata message
	) external view returns (bytes32);

	function sendMessageWithTransfer(
		address token,
		uint256 amount,
		uint64 nonce,
		uint32 maxSlippage,
		bytes memory message,
		MsgDataTypes.BridgeSendType bridgeSendType
	) external payable returns (bytes32);
}
