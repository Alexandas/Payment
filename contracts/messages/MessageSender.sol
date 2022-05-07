// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import 'sgn-v2-contracts/contracts/message/interfaces/IMessageBus.sol';
import 'sgn-v2-contracts/contracts/message/libraries/MessageSenderLib.sol';

import '../interfaces/IMessageSender.sol';

contract MessageSender is IMessageSender, OwnableUpgradeable {
	using SafeERC20Upgradeable for IERC20Upgradeable;

	enum ExecutionStatus {
		Fail,
		Success,
		Retry
	}

	address public srcChainPayment;

	address public messageBus;

	address public override receiver;

	uint64 public override dstChainId;

	event SrcChainPaymentUpdated(address payment);

	event MessageBusUpdated(address messageBus);

	event ReceiverUpdated(address receiver);

	event DstChainIdUpdated(uint64 dstChainId);

	event MessageWithTransferRefund(address token, uint256 amount, bytes message, address executor);

	modifier onlyMessageBus() {
		require(msg.sender == messageBus, 'MessageReceiver: caller is not message bus');
		_;
	}

	modifier onlySrcChainPayment() {
		require(msg.sender == srcChainPayment, 'MessageSender: caller is not payment contract');
		_;
	}

	constructor(
		address owner,
		address _messageBus,
		address _receiver,
		uint64 _dstChainId
	) initializer {
		_transferOwnership(owner);
		_setMessageBus(_messageBus);
		_setReceiver(_receiver);
		_setDstChainId(_dstChainId);
	}

	function initialize(
		address owner,
		address _messageBus,
		address _receiver,
		uint64 _dstChainId
	) external initializer {
		_transferOwnership(owner);
		_setMessageBus(_messageBus);
		_setReceiver(_receiver);
		_setDstChainId(_dstChainId);
	}

	function sendMessageWithTransfer(
		address token,
		uint256 amount,
		uint64 nonce,
		uint32 maxSlippage,
		bytes memory message,
		MsgDataTypes.BridgeSendType bridgeSendType
	) external payable onlySrcChainPayment returns (bytes32) {
		IERC20Upgradeable(token).transferFrom(msg.sender, address(this), amount);
		MessageSenderLib.sendMessageWithTransfer(receiver, token, amount, dstChainId, nonce, maxSlippage, message, bridgeSendType, messageBus, msg.value);
	}

	function executeMessageWithTransferRefund(
        address _token,
        uint256 _amount,
        bytes calldata _message,
        address executor
    ) external payable onlyMessageBus returns (ExecutionStatus) {
		emit MessageWithTransferRefund(_token, _amount, _message, executor);
        return ExecutionStatus.Success;
    }

	function setSrcChainPayment(address _payment) external onlyOwner {
		_setSrcChainPayment(_payment);
	}

	function _setSrcChainPayment(address _payment) internal {
		srcChainPayment = _payment;
		emit SrcChainPaymentUpdated(_payment);
	}

	function setMessageBus(address messageBus) external onlyOwner {
		_setMessageBus(messageBus);
	}

	function _setMessageBus(address _messageBus) internal {
		messageBus = _messageBus;
		emit MessageBusUpdated(messageBus);
	}

	function setDstChainId(uint64 dstChainId) external onlyOwner {
		_setDstChainId(dstChainId);
	}

	function _setDstChainId(uint64 _dstChainId) internal {
		dstChainId = _dstChainId;
		emit DstChainIdUpdated(_dstChainId);
	}

	function setReceiver(address _receiver) external onlyOwner {
		_setReceiver(_receiver);
	}

	function _setReceiver(address _receiver) internal {
		receiver = _receiver;
		emit ReceiverUpdated(_receiver);
	}

	function calcFee(bytes memory message) public view override returns (uint256) {
		return IMessageBus(messageBus).calcFee(message);
	}

	function messageId(
		MsgDataTypes.RouteInfo calldata route,
		uint64 dstChainId,
		bytes calldata message
	) external view override returns (bytes32) {
		return
			keccak256(abi.encodePacked(MsgDataTypes.MsgType.MessageOnly, route.sender, route.receiver, route.srcChainId, route.srcTxHash, dstChainId, message));
	}

}
