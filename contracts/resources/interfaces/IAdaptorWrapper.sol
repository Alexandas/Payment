// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../interfaces/IResourceAdaptor.sol';
import '../../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev resource adaptor interface
interface IAdaptorWrapper {

	/// @dev emit when resource adaptor updated
	/// @param adaptor resource adaptor contract address
	event ResourceAdaptorUpdated(IResourceAdaptor adaptor);

	/// @dev emit when resource type updated
	/// @param resourceType resource type
	event ResourceTypeUpdated(ResourceData.ResourceType resourceType);

	/// @dev return resource adaptor contract address
	function adaptor() external view returns (IResourceAdaptor);

	/// @dev return resource type
	function resourceType() external view returns (ResourceData.ResourceType);

	/// @dev return resource price
	function price() external view returns (uint256);

	/// @dev calculate resource value for amount
	function getValueOf(uint256 amount) external view returns (uint256);

	/// @dev calculate resource amount for value
	function getAmountOf(uint256 value) external view returns (uint256);
}
