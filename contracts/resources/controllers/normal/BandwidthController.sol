// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './NormalResourceController.sol';

/// @author Alexandas
/// @dev Bandwidth controller controller
contract BandwidthController is NormalResourceController {

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param dstChainPayment dst chain payment contract address
	/// @param adaptor resource adaptor contract address
	function initialize(
		address owner, 		
		address dstChainPayment,
		IResourceAdaptor adaptor
	) external initializer {
		__Init_Normal_Resource_Controller(owner, dstChainPayment, adaptor, ResourceData.ResourceType.Bandwidth);
	}
}
