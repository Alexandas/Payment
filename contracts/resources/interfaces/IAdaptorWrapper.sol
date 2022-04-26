// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../interfaces/IResourceAdaptor.sol';
import '../../libraries/ResourceData.sol';

interface IAdaptorWrapper {
	event ResourceAdaptorUpdated(IResourceAdaptor adaptor);

	event ResourceTypeUpdated(ResourceData.ResourceType resourceType);

	function adaptor() external view returns (IResourceAdaptor);

	function resourceType() external view returns (ResourceData.ResourceType);

	function price() external view returns (uint256);

	function getValueOf(uint256 amount) external view returns (uint256);

	function getAmountOf(uint256 value) external view returns (uint256);
}
