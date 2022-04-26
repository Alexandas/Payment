// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import './interfaces/IAdaptorWrapper.sol';
import '../libraries/ResourceData.sol';

abstract contract AdaptorWrapper is IAdaptorWrapper, OwnableUpgradeable {
	IResourceAdaptor public override adaptor;

	ResourceData.ResourceType public override resourceType;

	function __Init_Resource_Adaptor(IResourceAdaptor _adaptor) internal onlyInitializing {
		_setResourceAdaptor(_adaptor);
	}

	function __Init_Resource_Type(ResourceData.ResourceType _resourceType) internal onlyInitializing {
		_setResourceType(_resourceType);
	}

	function setResourceAdaptor(IResourceAdaptor _adaptor) external onlyOwner {
		_setResourceAdaptor(_adaptor);
	}

	function setResourceType(ResourceData.ResourceType _resourceType) external onlyOwner {
		_setResourceType(_resourceType);
	}

	function price() public view returns (uint256) {
		return adaptor.priceOf(resourceType);
	}

	function getValueOf(uint256 amount) public view returns (uint256) {
		return adaptor.getValueOf(resourceType, amount);
	}

	function getAmountOf(uint256 value) public view returns (uint256) {
		return adaptor.getAmountOf(resourceType, value);
	}

	function _setResourceAdaptor(IResourceAdaptor _adaptor) internal {
		adaptor = _adaptor;
		emit ResourceAdaptorUpdated(_adaptor);
	}

	function _setResourceType(ResourceData.ResourceType _resourceType) internal {
		resourceType = _resourceType;
		emit ResourceTypeUpdated(_resourceType);
	}
}
