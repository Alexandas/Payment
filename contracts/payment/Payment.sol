// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

import '../interfaces/IMessageSender.sol';
import '../libraries/ResourceData.sol';
import '../access/Withdrawable.sol';
import '../access/Pauser.sol';

contract Payment is Withdrawable, Pauser, ReentrancyGuardUpgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	IMessageSender public messageSender;

	address public destination;

	mapping(IERC20Upgradeable => bool) internal tokens;

	event AddToken(IERC20Upgradeable token);

	event RemoveToken(IERC20Upgradeable token);

	event MessageSenderUpdated(IMessageSender messageSender);

	function __Init_Message_Sender(IMessageSender _messageSender) internal onlyInitializing {
		messageSender = _messageSender;
	}

	function __Init_Destination(address _destination) internal onlyInitializing {
		destination = _destination;
	}

	function __Init_Tokens(IERC20Upgradeable[] memory tokens) internal onlyInitializing {
		for (uint256 i = 0; i < tokens.length; i++) {
			_addToken(tokens[i]);
		}
	}

	function setMessageSender(IMessageSender _messageSender) external onlyOwner {
		_setMessageSender(_messageSender);
	}

	function _setMessageSender(IMessageSender _messageSender) internal {
		messageSender = _messageSender;
		emit MessageSenderUpdated(_messageSender);
	}

	function setDestination(address _destination) external onlyOwner {
		destination = _destination;
	}

	function _setDestination(address _destination) internal {
		destination = _destination;
	}

	function addToken(IERC20Upgradeable token) external onlyOwner {
		_addToken(token);
	}

	function removeToken(IERC20Upgradeable token) external onlyOwner {
		_removeToken(token);
	}

	function _addToken(IERC20Upgradeable token) internal {
		require(!tokenExists(token), 'Payment: token exsits');
		tokens[token] = true;
		emit AddToken(token);
	}

	function _removeToken(IERC20Upgradeable token) internal {
		require(tokenExists(token), 'Payment: nonexistent token');
		emit RemoveToken(token);
		delete tokens[token];
	}

	function tokenExists(IERC20Upgradeable token) public view returns (bool) {
		return tokens[token];
	}

	function encodeMessage(bytes32 account, ResourceData.Payload[] memory payloads) public view returns (bytes memory) {
		return abi.encode(destination, account, payloads);
	}

	function decodeMessage(bytes memory message)
		public
		view
		returns (
			address destination,
			bytes32 account,
			ResourceData.Payload[] memory payloads
		)
	{
		(destination, account, payloads) = abi.decode(message, (address, bytes32, ResourceData.Payload[]));
	}

	function pay(
		bytes32 account,
		IERC20Upgradeable token,
		uint64 nonce,
		uint32 maxSlippage,
		ResourceData.Payload[] memory payloads
	) external payable whenNotPaused nonReentrant returns (bytes32 transferId) {
		require(tokenExists(token), 'Payment: nonexistent token');
		uint256 value = getValueOf(payloads);
		token.safeTransferFrom(msg.sender, address(this), value);
		token.safeIncreaseAllowance(address(messageSender), value);
		transferId = messageSender.sendMessageWithTransfer{ value: msg.value }(
			address(token),
			value,
			nonce,
			maxSlippage,
			encodeMessage(account, payloads),
			MsgDataTypes.BridgeSendType.Liquidity
		);
		token.safeDecreaseAllowance(address(messageSender), value);
	}

	function getValueOf(ResourceData.Payload[] memory payloads) public view returns (uint256 value) {
		for (uint256 i = 0; i < payloads.length; i++) {
			for (uint256 j = 0; j < payloads[i].values.length; j++) {
				value = value.add(payloads[i].values[j]);
			}
		}
	}
}
