// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';

/// @author Alexandas
/// @dev dst chain payment wrapper
abstract contract DstChainPaymentWrapper is OwnableUpgradeable {
	/// @dev dst chain payment contract address
	address public dstChainPayment;

	/// @dev emit when dst chain payment contract address updated
	/// @param dstChainPayment dst chain payment contract address
	event DstChainPaymentUpdated(address dstChainPayment);

	modifier onlyDstChainPayment() {
		require(msg.sender == dstChainPayment, 'DstChainPaymentWrapper: caller is not dst chain payment');
		_;
	}

	/// @dev initialize dst chain payment contract address
	/// @param _dstChainPayment dst chain payment contract address
	function __Init_Dst_Chain_Payment(address _dstChainPayment) internal onlyInitializing {
		_setDstChainPayment(_dstChainPayment);
	}

	/// @dev update dst chain payment contract address
	/// @param _dstChainPayment dst chain payment contract address
	function setDstChainPayment(address _dstChainPayment) external onlyOwner {
		_setDstChainPayment(_dstChainPayment);
	}

	function _setDstChainPayment(address _dstChainPayment) internal {
		dstChainPayment = _dstChainPayment;
		emit DstChainPaymentUpdated(_dstChainPayment);
	}
}
