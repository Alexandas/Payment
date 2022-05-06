// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

import '../interfaces/IMessageSender.sol';
import '../access/OwnerWithdrawable.sol';
import '../access/Pauser.sol';
import './ResourPayloadTool.sol';

contract SrcChainPayment is OwnerWithdrawable, Pauser, ResourPayloadTool, ReentrancyGuardUpgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	IMessageSender public messageSender;

	IERC20Upgradeable public token;

	event TokenUpdated(IERC20Upgradeable token);

	event MessageSenderUpdated(IMessageSender messageSender);

	event Paid(
		address provider,
		uint64 nonce,
		bytes32 account,
		ResourceData.Payload[] payloads,
		uint32 maxSlippage
	);

	constructor(
		address owner,
		address pauser,
		IMessageSender _messageSender,
		IERC20Upgradeable token
	) initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Message_Sender(_messageSender);
		__Init_Token(token);
	}

	function Init_Payment(
		address owner,
		address pauser,
		IMessageSender _messageSender,
		IERC20Upgradeable token
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Message_Sender(_messageSender);
		__Init_Token(token);
	}

	function __Init_Message_Sender(IMessageSender _messageSender) internal onlyInitializing {
		_setMessageSender(_messageSender);
	}

	function __Init_Token(IERC20Upgradeable token) internal onlyInitializing {
		_setToken(token);
	}

	function pay(
		address provider,
		uint64 nonce,
		bytes32 account,
		ResourceData.Payload[] memory payloads,
		uint32 maxSlippage
	) external payable whenNotPaused nonReentrant returns (bytes32 transferId) {
		uint256 value = totalValue(payloads);
		value = matchTokenDecimals(value);
		token.safeTransferFrom(msg.sender, address(this), value);
		token.safeApprove(address(messageSender), value);
		transferId = messageSender.sendMessageWithTransfer{ value: msg.value }(
			address(token),
			value,
			nonce,
			maxSlippage,
			encodeMessage(provider, nonce, account, payloads),
			MsgDataTypes.BridgeSendType.Liquidity
		);
		token.safeApprove(address(messageSender), 0);

		emit Paid(provider, nonce, account, payloads, maxSlippage);
	}

	function setMessageSender(IMessageSender _messageSender) external onlyOwner {
		_setMessageSender(_messageSender);
	}

	function _setMessageSender(IMessageSender _messageSender) internal {
		messageSender = _messageSender;
		emit MessageSenderUpdated(_messageSender);
	}

	function setToken(IERC20Upgradeable _token) external onlyOwner {
		_setToken(_token);
	}

	function _setToken(IERC20Upgradeable _token) internal {
		token = _token;
		emit TokenUpdated(token);
	}

	function matchTokenDecimals(uint256 amount) internal view returns (uint256 value) {
		return amount.div(10**12);
	}

	function calcFee(address provider, uint64 nonce, bytes32 account, ResourceData.Payload[] memory payloads) public view returns(uint256 value) {
		return messageSender.calcFee(encodeMessage(provider, nonce, account, payloads));
	}

	function encodeMessage(address provider, uint64 nonce, bytes32 account, ResourceData.Payload[] memory payloads) public pure returns (bytes memory) {
		return abi.encode(provider, nonce, account, payloads);
	}

}
