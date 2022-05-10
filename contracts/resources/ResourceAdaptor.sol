// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

import './interfaces/IResourceAdaptor.sol';

contract ResourceAdaptor is IResourceAdaptor, OwnableUpgradeable {
	using SafeMathUpgradeable for uint256;

	struct PriceAdaptor {
		ResourceData.ResourceType resourceType;
		uint256 price;
	}

	uint256 public indexBlock;

	// type -> block -> price
	mapping(ResourceData.ResourceType => mapping(uint256 => uint256)) internal priceTraces;

	event SetPriceAdaptors(PriceAdaptor[] adaptors);

	constructor() initializer {}

	function initialize(
		address owner,
		PriceAdaptor[] memory adaptors
	) external initializer {
		_transferOwnership(owner);
		__Init_Price_Adaptors(adaptors);
	}

	function __Init_Price_Adaptors(PriceAdaptor[] memory adaptors) internal onlyInitializing {
		_setPriceAdaptors(adaptors);
	}

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
		emit SetPriceAdaptors(adaptors);
	}

	function priceAt(ResourceData.ResourceType resourceType, uint256 _indexBlock) public view override returns (uint256) {
		require(priceTraces[resourceType][_indexBlock] != 0, 'ResourceAdaptor: invalid indexBlock');
		return priceTraces[resourceType][_indexBlock];
	}

	function getValueAt(
		ResourceData.ResourceType resourceType,
		uint256 amount,
		uint256 _indexBlock
	) public view override returns (uint256) {
		return priceAt(resourceType, _indexBlock).mul(amount);
	}

	function getAmountAt(
		ResourceData.ResourceType resourceType,
		uint256 value,
		uint256 _indexBlock
	) public view override returns (uint256) {
		return value.div(priceAt(resourceType, _indexBlock));
	}

	function priceOf(ResourceData.ResourceType resourceType) public view override returns (uint256) {
		return priceAt(resourceType, indexBlock);
	}

	function getValueOf(ResourceData.ResourceType resourceType, uint256 amount) public view override returns (uint256) {
		return priceOf(resourceType).mul(amount);
	}

	function getAmountOf(ResourceData.ResourceType resourceType, uint256 value) public view override returns (uint256) {
		return value.div(priceOf(resourceType));
	}
}
