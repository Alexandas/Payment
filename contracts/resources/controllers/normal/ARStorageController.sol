// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './NormalResourceController.sol';

contract ARStorageController is NormalResourceController {
	constructor(
		address owner, 		
		address dstChainPayment,
		IResourceAdaptor adaptor
	) initializer {
		__Init_Normal_Resource_Controller(owner, dstChainPayment, adaptor, ResourceData.ResourceType.ARStorage);
	}

	function initialize(
		address owner, 		
		address dstChainPayment,
		IResourceAdaptor adaptor
	) external initializer {
		__Init_Normal_Resource_Controller(owner, dstChainPayment, adaptor, ResourceData.ResourceType.ARStorage);
	}
}
