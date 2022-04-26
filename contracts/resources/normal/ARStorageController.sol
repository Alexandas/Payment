// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './NormalResourceController.sol';

contract ARStorageController is NormalResourceController {
	function initialize(address owner, IResourceAdaptor adaptor) external {
		__Init_Normal_Resource_Controller(owner, adaptor, ResourceData.ResourceType.ARStorage);
	}
}
