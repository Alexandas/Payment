// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';

abstract contract DstChainPaymentWrapper is OwnableUpgradeable {
	address public dstChainPayment;

	event DstChainPaymentUpdated(address dstChainPayment);

	modifier onlyDstChainPayment() {
		require(msg.sender == dstChainPayment, 'DstChainPaymentWrapper: caller is not dst chain payment');
		_;
	}

	function __Init_Dst_Chain_Payment(address _dstChainPayment) internal onlyInitializing {
		_setDstChainPayment(_dstChainPayment);
	}

	function setDstChainPayment(address _dstChainPayment) external onlyOwner {
		_setDstChainPayment(_dstChainPayment);
	}

	function _setDstChainPayment(address _dstChainPayment) internal {
		dstChainPayment = _dstChainPayment;
		emit DstChainPaymentUpdated(_dstChainPayment);
	}
}
