// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import 'sgn-v2-contracts/contracts/message/framework/MessageSenderApp.sol';

contract MessageSender is MessageSenderApp {
	constructor(address _messageBus) {
		messageBus = _messageBus;
	}

	function sendMessage(
		address _receiver,
		uint64 _dstChainId,
		bytes calldata _message
	) external payable {
		sendMessage(_receiver, _dstChainId, _message, msg.value);
	}

	function computeMessageOnlyId(
		MsgDataTypes.RouteInfo calldata _route,
		uint64 _dstChainId,
		bytes calldata _message
	) public view returns (bytes32) {
		return
			keccak256(
				abi.encodePacked(MsgDataTypes.MsgType.MessageOnly, _route.sender, _route.receiver, _route.srcChainId, _route.srcTxHash, _dstChainId, _message)
			);
	}
}
