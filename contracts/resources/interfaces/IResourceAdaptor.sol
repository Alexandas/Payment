// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev resource adpator interface
interface IResourceAdaptor {
	struct PriceAdaptor {
		ResourceData.ResourceType resourceType;
		uint256 price;
	}

	/// @dev emit when price updated
	/// @param adaptors price adaptors
	event PriceAdaptorsUpdated(PriceAdaptor[] adaptors);

	/// @dev get price for resource at a specific block
	/// @param resourceType resource type
	/// @param _indexBlock block number
	/// @return price for resource at a specific block
	function priceAt(ResourceData.ResourceType resourceType, uint256 _indexBlock) external view returns (uint256);

	/// @dev get value for `amount` resource at a specific block
	/// @param resourceType resource type
	/// @param amount resource amount
	/// @param _indexBlock block number
	/// @return token value in resource decimals(18)
	function getValueAt(
		ResourceData.ResourceType resourceType,
		uint256 amount,
		uint256 _indexBlock
	) external view returns (uint256);

	/// @dev get amount resource with value at a specific block
	/// @param resourceType resource type
	/// @param value token value
	/// @param _indexBlock block numer
	/// @return resource amount
	function getAmountAt(
		ResourceData.ResourceType resourceType,
		uint256 value,
		uint256 _indexBlock
	) external view returns (uint256);

	/// @dev return resource price
	/// @param resourceType resource type
	/// @return resource price
	function priceOf(ResourceData.ResourceType resourceType) external view returns (uint256);

	/// @dev return value of amount resource
	/// @param resourceType resource type
	/// @param amount resource amount
	/// @return token value in resource decimals(18)
	function getValueOf(ResourceData.ResourceType resourceType, uint256 amount) external view returns (uint256);

	/// @dev return resource amount with value
	/// @param resourceType resource type
	/// @param value token value in resource decimals(18)
	/// @return resource amount
	function getAmountOf(ResourceData.ResourceType resourceType, uint256 value) external view returns (uint256);
}
