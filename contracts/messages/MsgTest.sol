// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import 'sgn-v2-contracts/contracts/message/framework/MessageSenderApp.sol';
import 'sgn-v2-contracts/contracts/message/framework/MessageReceiverApp.sol';

/** @title Application to test message with transfer refund flow */
contract MsgTest is MessageSenderApp, MessageReceiverApp {
    using SafeERC20 for IERC20;
    uint64 public nonce;

    event MessageReceivedWithTransfer(
        address _sender,
        address _token,
        uint256 _amount,
        uint64 _srcChainId,
        bytes _message,
        address executor
    );
    event MessageWithTransferRefund(address _token, uint256 _amount, bytes _message, address executor);
    event MessageReceived(address _sender, uint64 _srcChainId, bytes _message, address executor);

    constructor(address _messageBus) {
        messageBus = _messageBus;
    }

    function sendMessageWithTransfer(
        address _receiver,
        address _token,
        uint256 _amount,
        uint64 _dstChainId,
        uint32 _maxSlippage,
        bytes calldata _message,
        MsgDataTypes.BridgeSendType _bridgeSendType
    ) external payable {
        IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        bytes memory message = abi.encode(msg.sender, _message);
        sendMessageWithTransfer(
            _receiver,
            _token,
            _amount,
            _dstChainId,
            nonce,
            _maxSlippage,
            message,
            _bridgeSendType,
            msg.value
        );
        nonce++;
    }

    function executeMessageWithTransfer(
        address _sender,
        address _token,
        uint256 _amount,
        uint64 _srcChainId,
        bytes memory _message,
        address executor
    ) external payable override onlyMessageBus returns (ExecutionStatus) {
        emit MessageReceivedWithTransfer(_sender, _token, _amount, _srcChainId, _message, executor);
        return ExecutionStatus.Success;
    }

    function executeMessageWithTransferRefund(
        address _token,
        uint256 _amount,
        bytes calldata _message,
        address executor
    ) external payable override onlyMessageBus returns (ExecutionStatus) {

        emit MessageWithTransferRefund( _token, _amount, _message, executor);
        return ExecutionStatus.Success;
    }

    function sendMessage(
        address _receiver,
        uint64 _dstChainId,
        bytes calldata _message
    ) external payable {
        bytes memory message = abi.encode(nonce, _message);
        nonce++;
        sendMessage(_receiver, _dstChainId, message, msg.value);
    }

    function executeMessage(
        address _sender,
        uint64 _srcChainId,
        bytes calldata _message,
        address executor
    ) external payable override onlyMessageBus returns (ExecutionStatus) {
        emit MessageReceived(_sender, _srcChainId, _message, executor);
        return ExecutionStatus.Success;
    }

    function drainToken(address _token, uint256 _amount) external onlyOwner {
        IERC20(_token).safeTransfer(msg.sender, _amount);
    }
}
