// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

import './interfaces/IResourceAdaptor.sol';

/// @author Alexandas
/// @dev Resource adaptor contract
contract ResourceAdaptor is IResourceAdaptor, OwnableUpgradeable {
	using SafeMathUpgradeable for uint256;

	/// @dev return current price index block
	uint256 public indexBlock;

	/// @dev return all resource price
	mapping(ResourceData.ResourceType => mapping(uint256 => uint256)) internal priceTraces;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param adaptors price adaptors
	function initialize(address owner, PriceAdaptor[] memory adaptors) external initializer {
		_transferOwnership(owner);
		__Init_Price_Adaptors(adaptors);
	}

	/// @dev initialize price adaptors
	/// @param adaptors price adaptors
	function __Init_Price_Adaptors(PriceAdaptor[] memory adaptors) internal onlyInitializing {
		_setPriceAdaptors(adaptors);
	}

	/// @dev update price adaptors
	/// @param adaptors price adaptors
	function setPriceAdaptors(PriceAdaptor[] memory adaptors) external onlyOwner {
		_setPriceAdaptors(adaptors);
	}

	function _setPriceAdaptors(PriceAdaptor[] memory adaptors) internal {
		require(adaptors.length > 0, 'ResourceAdaptor: invalid pricers');
		for (uint256 i = 0; i < adaptors.length; i++) {
			uint256 _price = adaptors[i].price;
			require(_price > 0, 'ResourceAdaptor: invalid price');
			priceTraces[adaptors[i].resourceType][block.number] = _price;
		}
		indexBlock = block.number;
		emit PriceAdaptorsUpdated(adaptors);
	}

	/// @dev get price for resource at a specific block
	/// @param resourceType resource type
	/// @param _indexBlock block number
	/// @return price for resource at a specific block
	function priceAt(ResourceData.ResourceType resourceType, uint256 _indexBlock) public view override returns (uint256) {
		require(priceTraces[resourceType][_indexBlock] != 0, 'ResourceAdaptor: invalid indexBlock');
		return priceTraces[resourceType][_indexBlock];
	}

	/// @dev get value for `amount` resource at a specific block
	/// @param resourceType resource type
	/// @param amount resource amount
	/// @param _indexBlock block number
	/// @return token value in resource decimals(18)
	function getValueAt(
		ResourceData.ResourceType resourceType,
		uint256 amount,
		uint256 _indexBlock
	) public view override returns (uint256) {
		return priceAt(resourceType, _indexBlock).mul(amount);
	}

	/// @dev get amount resource with value at a specific block
	/// @param resourceType resource type
	/// @param value token value
	/// @param _indexBlock block numer
	/// @return resource amount
	function getAmountAt(
		ResourceData.ResourceType resourceType,
		uint256 value,
		uint256 _indexBlock
	) public view override returns (uint256) {
		return value.div(priceAt(resourceType, _indexBlock));
	}

	/// @dev return resource price
	/// @param resourceType resource type
	/// @return resource price
	function priceOf(ResourceData.ResourceType resourceType) public view override returns (uint256) {
		return priceAt(resourceType, indexBlock);
	}

	/// @dev return value of amount resource
	/// @param resourceType resource type
	/// @param amount resource amount
	/// @return token value in resource decimals(18)
	function getValueOf(ResourceData.ResourceType resourceType, uint256 amount) public view override returns (uint256) {
		return priceOf(resourceType).mul(amount);
	}

	/// @dev return resource amount with value
	/// @param resourceType resource type
	/// @param value token value in resource decimals(18)
	/// @return resource amount
	function getAmountOf(ResourceData.ResourceType resourceType, uint256 value) public view override returns (uint256) {
		return value.div(priceOf(resourceType));
	}
}
