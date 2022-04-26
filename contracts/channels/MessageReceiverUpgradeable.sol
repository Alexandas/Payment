// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import 'sgn-v2-contracts/contracts/message/libraries/MsgDataTypes.sol';
// import 'sgn-v2-contracts/contracts/message/interfaces/IMessageReceiverApp.sol';
import '../access/OperatorsUpgradeable.sol';

contract MessageReceiverUpgradeable is OperatorsUpgradeable {

	enum ExecutionStatus {
        Fail, 
        Success, 
        Retry
    }

	address public messageBus;

	address public executor;

	event MessageWithTransferExecuted(address sender, address token, uint256 amount, uint64 srcChainId, bytes message, address executor);

	event MessageBusUpdated(address messageBus);

	event ExecutorUpdated(address executor);

	constructor() initializer {}

	modifier onlyMessageBus() {
		require(msg.sender == messageBus, 'MessageReceiverUpgradeable: caller is not message bus');
		_;
	}

	function initialize(
		address owner,
		address _messageBus,
		address _executor
	) external initializer {
		_transferOwnership(owner);
		_setMessageBus(_messageBus);
		_setExecutor(_executor);
	}

	function executeMessageWithTransfer(
		address sender,
		address token,
		uint256 amount,
		uint64 srcChainId,
		bytes calldata message,
		address _executor
	) external payable onlyMessageBus returns (ExecutionStatus) {
		require(executor == _executor, 'MessageReceiverUpgradeable: invalid executor');
		emit MessageWithTransferExecuted(sender, token, amount, srcChainId, message, _executor);
		return ExecutionStatus.Success;
	}

	function messageId(
		MsgDataTypes.RouteInfo calldata route,
		uint64 dstChainId,
		bytes calldata message
	) public view returns (bytes32) {
		return
			keccak256(abi.encodePacked(MsgDataTypes.MsgType.MessageOnly, route.sender, route.receiver, route.srcChainId, route.srcTxHash, dstChainId, message));
	}

	function setMessageBus(address messageBus) public onlyOwner {
		_setMessageBus(messageBus);
	}

	function _setMessageBus(address _messageBus) internal {
		messageBus = _messageBus;
		emit MessageBusUpdated(messageBus);
	}

	function setExecutor(address _executor) public onlyOwner {
		_setExecutor(_executor);
	}

	function _setExecutor(address _executor) internal {
		executor = _executor;
		emit ExecutorUpdated(_executor);
	}

	function getChainID() external view returns (uint64 id) {
		assembly {
			id := chainid()
		}
	}
}
