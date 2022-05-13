// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';

import './interfaces/IAdaptorWrapper.sol';
import '../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev Resource adaptor wrapper contract
abstract contract AdaptorWrapper is IAdaptorWrapper, OwnableUpgradeable {
	/// @dev resource adaptor contract address
	IResourceAdaptor public override adaptor;

	/// @dev resource type
	ResourceData.ResourceType public override resourceType;

	/// @dev initialize resource adaptor contract
	/// @param _adaptor resource adaptor contract address
	function __Init_Resource_Adaptor(IResourceAdaptor _adaptor) internal onlyInitializing {
		_setResourceAdaptor(_adaptor);
	}

	/// @dev initialize resource type
	/// @param _resourceType resource type
	function __Init_Resource_Type(ResourceData.ResourceType _resourceType) internal onlyInitializing {
		_setResourceType(_resourceType);
	}

	/// @dev update resource adaptor contract
	/// @param _adaptor resource adaptor contract
	function setResourceAdaptor(IResourceAdaptor _adaptor) external onlyOwner {
		_setResourceAdaptor(_adaptor);
	}

	/// @dev update resource type
	/// @param _resourceType resource type
	function setResourceType(ResourceData.ResourceType _resourceType) external onlyOwner {
		_setResourceType(_resourceType);
	}

	/// @dev return resource price
	function price() public view returns (uint256) {
		return adaptor.priceOf(resourceType);
	}

	/// @dev calculate resource value for amount
	function getValueOf(uint256 amount) public view returns (uint256) {
		return adaptor.getValueOf(resourceType, amount);
	}

	/// @dev calculate resource amount for value
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
