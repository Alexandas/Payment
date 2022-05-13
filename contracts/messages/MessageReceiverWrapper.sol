// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';

/// @author Alexandas
/// @dev dst chain message receiver wrapper
abstract contract MessageReceiverWrapper is OwnableUpgradeable {
	/// @dev message receiver contract address
	address public messageReceiver;

	/// @dev emit when message receiver updated
	/// @param messageReceiver message receiver contract address
	event MessageReceiverUpdated(address messageReceiver);

	modifier onlyMessageReceiver() {
		require(msg.sender == messageReceiver, 'MessageReceiverWrapper: caller is not message receiver');
		_;
	}

	/// @dev initialize messageReceiver contract address
	/// @param _messageReceiver message receiver contract address
	function __Init_Message_Receiver(address _messageReceiver) internal onlyInitializing {
		_setMessageReceiver(_messageReceiver);
	}

	/// @dev set messageReceiver contract address
	/// @param _messageReceiver message receiver contract address
	function setMessageReceiver(address _messageReceiver) external onlyOwner {
		_setMessageReceiver(_messageReceiver);
	}

	function _setMessageReceiver(address _messageReceiver) internal {
		messageReceiver = _messageReceiver;
		emit MessageReceiverUpdated(_messageReceiver);
	}

}