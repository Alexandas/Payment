// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './NormalResourceController.sol';

contract BandwidthController is NormalResourceController {
	function initialize(
		address owner, 		
		address dstChainPayment,
		IResourceAdaptor adaptor
	) external initializer {
		__Init_Normal_Resource_Controller(owner, dstChainPayment, adaptor, ResourceData.ResourceType.Bandwidth);
	}
}
