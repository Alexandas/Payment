// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import 'sgn-v2-contracts/contracts/message/framework/MessageReceiverApp.sol';

contract MessageReceiver is MessageReceiverApp {
	address public sender;
	uint64 public src;
	bytes public message;
	address public executor;

	constructor(address _messageBus) {
		messageBus = _messageBus;
	}

	function executeMessage(
		address _sender,
		uint64 _srcChainId,
		bytes calldata _message,
		address _executor
	) external payable override onlyMessageBus returns (ExecutionStatus) {
		sender = _sender;
		src = _srcChainId;
		message = _message;
		executor = _executor;
		return ExecutionStatus.Success;
	}
}
