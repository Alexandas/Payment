// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';

abstract contract MessageReceiverWrapper is OwnableUpgradeable {
	address public messageReceiver;

	event MessageReceiverUpdated(address messageReceiver);

	modifier onlyMessageReceiver() {
		require(msg.sender == messageReceiver, 'MessageReceiverWrapper: caller is not message receiver');
		_;
	}

	function __Init_Message_Receiver(address _messageReceiver) internal onlyInitializing {
		_setMessageReceiver(_messageReceiver);
	}

	function setMessageReceiver(address _messageReceiver) external onlyOwner {
		_setMessageReceiver(_messageReceiver);
	}

	function _setMessageReceiver(address _messageReceiver) internal {
		messageReceiver = _messageReceiver;
		emit MessageReceiverUpdated(_messageReceiver);
	}

}