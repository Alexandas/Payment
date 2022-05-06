// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../../libraries/ResourceData.sol';

interface IResourceAdaptor {

	function priceAt(ResourceData.ResourceType resourceType, uint256 _indexBlock) external view returns (uint256);

	function getValueAt(
		ResourceData.ResourceType resourceType,
		uint256 amount,
		uint256 _indexBlock
	) external view returns (uint256);

	function getAmountAt(
		ResourceData.ResourceType resourceType,
		uint256 value,
		uint256 _indexBlock
	) external view returns (uint256);

	function priceOf(ResourceData.ResourceType resourceType) external view returns (uint256);

	function getValueOf(ResourceData.ResourceType resourceType, uint256 amount) external view returns (uint256);

	function getAmountOf(ResourceData.ResourceType resourceType, uint256 value) external view returns (uint256);
}
