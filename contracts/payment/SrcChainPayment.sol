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

/// @author Alexandas
/// @dev source chain payment contract
contract SrcChainPayment is OwnerWithdrawable, Pauser, ResourPayloadTool, ReentrancyGuardUpgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	/// @dev message sender on src chain
	IMessageSender public messageSender;
	/// @dev token address
	IERC20Upgradeable public token;

	/// @dev emit when token updated
	/// @param token token address
	event TokenUpdated(IERC20Upgradeable token);

	/// @dev emit when message sender updated
	/// @param messageSender messageSender address
	event MessageSenderUpdated(IMessageSender messageSender);

	/// @dev emit when user paid on src chain
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account sender
	/// @param payloads payment payloads
	/// @param maxSlippage maxSlippage in cBridge
	event Paid(
		address provider,
		uint64 nonce,
		bytes32 account,
		ResourceData.Payload[] payloads,
		uint32 maxSlippage
	);

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param pauser contract pauser
	/// @param _messageSender messageSender address
	/// @param token token address
	function initialize(
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

	/// @dev initialize message sender
	/// @param _messageSender messageSender address
	function __Init_Message_Sender(IMessageSender _messageSender) internal onlyInitializing {
		_setMessageSender(_messageSender);
	}

	/// @dev initialize token
	/// @param token token address
	function __Init_Token(IERC20Upgradeable token) internal onlyInitializing {
		_setToken(token);
	}

	/// @dev pay from source chain
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account sender
	/// @param payloads payment payloads
	/// @param maxSlippage maxSlippage in cBridge
	/// @return transferId token transfer id in cBridge
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

	/// @dev update message sender
	/// @param _messageSender message sender address
	function setMessageSender(IMessageSender _messageSender) external onlyOwner {
		_setMessageSender(_messageSender);
	}

	function _setMessageSender(IMessageSender _messageSender) internal {
		messageSender = _messageSender;
		emit MessageSenderUpdated(_messageSender);
	}

	/// @dev update token
	/// @param _token token address
	function setToken(IERC20Upgradeable _token) external onlyOwner {
		_setToken(_token);
	}

	function _setToken(IERC20Upgradeable _token) internal {
		token = _token;
		emit TokenUpdated(token);
	}

	/// @dev match value to token decimals
	/// @param amount token amount with resource decimals(18)
	/// @return value token value
	function matchTokenDecimals(uint256 amount) internal view returns (uint256 value) {
		return amount.div(10**12);
	}

	/// @dev calculate message fee
	/// @param provider provider address
	/// @param nonce nonce 
	/// @param account user account
	/// @param payloads payment payloads
	/// @return value message fee
	function calcFee(address provider, uint64 nonce, bytes32 account, ResourceData.Payload[] memory payloads) public view returns(uint256 value) {
		return messageSender.calcFee(encodeMessage(provider, nonce, account, payloads));
	}

	/// @dev encode payment message
	/// @param provider provider address
	/// @param nonce nonce 
	/// @param account user account
	/// @param payloads payment payloads
	/// @return message message bytes
	function encodeMessage(address provider, uint64 nonce, bytes32 account, ResourceData.Payload[] memory payloads) public pure returns (bytes memory) {
		return abi.encode(provider, nonce, account, payloads);
	}

}
