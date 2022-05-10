// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

import 'sgn-v2-contracts/contracts/message/libraries/MsgDataTypes.sol';

import '../access/OwnerWithdrawable.sol';
import '../libraries/ResourceData.sol';
import '../interfaces/IDstChainPayment.sol';

contract MessageReceiver is OwnerWithdrawable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;
	using ResourceData for ResourceData.Payload[];

	enum ExecutionStatus {
		Fail,
		Success,
		Retry
	}

	IDstChainPayment public dstChainPayment;

	address public messageBus;

	address public executor;

	event DstChainPaymentUpdated(IDstChainPayment _dstChainPayment);

	event MessageBusUpdated(address messageBus);

	event ExecutorUpdated(address executor);

	event MessageWithTransferExecuted(address sender, IERC20Upgradeable token, uint256 amount, uint64 srcChainId, bytes message, address executor);

	event MessageWithTransferFailed(address sender, IERC20Upgradeable token, uint256 amount, uint64 srcChainId, bytes message, address executor, bytes error);

	event MessageWithTransferFallback(
		address _sender,
        address _token,
        uint256 _amount,
        uint64 _srcChainId,
        bytes _message,
        address executor
	);

	modifier onlyMessageBus() {
		require(msg.sender == messageBus, 'MessageReceiver: caller is not message bus');
		_;
	}

	constructor() initializer {}

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
        IERC20Upgradeable token,
        uint256 amount,
        uint64 srcChainId,
        bytes memory message,
        address _executor
    ) external payable onlyMessageBus returns (ExecutionStatus) {
		require(executor == _executor, 'MessageReceiver: invalid executor');
		token.safeApprove(address(dstChainPayment), amount);
		try dstChainPayment.payFromSourceChain(token, amount, message) {
			emit MessageWithTransferExecuted(sender, token, amount, srcChainId, message, _executor);
		} catch (bytes memory err) {
			emit MessageWithTransferFailed(sender, token, amount, srcChainId, message, _executor, err);
		}
		token.safeApprove(address(dstChainPayment), 0);
		return ExecutionStatus.Success;
    }

	function executeMessageWithTransferFallback(
        address _sender,
        address _token,
        uint256 _amount,
        uint64 _srcChainId,
        bytes memory _message,
        address executor
    ) external payable onlyMessageBus returns (ExecutionStatus) {
		emit MessageWithTransferFallback(_sender, _token, _amount, _srcChainId, _message, executor);
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

	function setDstChainPayment(IDstChainPayment _dstChainPayment) external onlyOwner {
		_setDstChainPayment(_dstChainPayment);
	}

	function _setDstChainPayment(IDstChainPayment _dstChainPayment) internal {
		dstChainPayment = _dstChainPayment;
		emit DstChainPaymentUpdated(_dstChainPayment);
	}

	function setMessageBus(address messageBus) external onlyOwner {
		_setMessageBus(messageBus);
	}

	function _setMessageBus(address _messageBus) internal {
		messageBus = _messageBus;
		emit MessageBusUpdated(messageBus);
	}

	function setExecutor(address _executor) external onlyOwner {
		_setExecutor(_executor);
	}

	function _setExecutor(address _executor) internal {
		executor = _executor;
		emit ExecutorUpdated(_executor);
	}

}
