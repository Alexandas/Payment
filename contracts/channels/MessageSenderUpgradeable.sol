// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import 'sgn-v2-contracts/contracts/message/interfaces/IMessageBus.sol';
import 'sgn-v2-contracts/contracts/message/libraries/MessageSenderLib.sol';

import '../access/OperatorsUpgradeable.sol';
import '../interfaces/IMessageSender.sol';

contract MessageSenderUpgradeable is IMessageSender, OperatorsUpgradeable {
	using SafeERC20Upgradeable for IERC20Upgradeable;

	address public messageBus;

	address public override receiver;

	uint64 public override dstChainId;

	event MessageBusUpdated(address messageBus);

	event ReceiverUpdated(address receiver);

	event DstChainIdUpdated(uint64 dstChainId);

	constructor() initializer {}

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
	) external payable onlyOperator returns (bytes32) {
		IERC20Upgradeable(token).transferFrom(msg.sender, address(this), amount);
		MessageSenderLib.sendMessageWithTransfer(receiver, token, amount, dstChainId, nonce, maxSlippage, message, bridgeSendType, messageBus, msg.value);
	}

	function calcFee(bytes memory message) public view override returns (uint256) {
		return IMessageBus(messageBus).calcFee(message);
	}

	function setMessageBus(address messageBus) public onlyOwner {
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

	function messageId(
		MsgDataTypes.RouteInfo calldata route,
		uint64 dstChainId,
		bytes calldata message
	) external view override returns (bytes32) {
		return
			keccak256(abi.encodePacked(MsgDataTypes.MsgType.MessageOnly, route.sender, route.receiver, route.srcChainId, route.srcTxHash, dstChainId, message));
	}

	function getChainID() external view returns (uint64 id) {
		assembly {
			id := chainid()
		}
	}
}
