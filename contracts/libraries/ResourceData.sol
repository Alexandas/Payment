// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

//// @title A title that should describe the contract/interface
/// @author Alexandas
/// @dev resource data library
library ResourceData {
	enum ResourceType {
		Null,
		BuildingTime,
		Bandwidth,
		ARStorage,
		IPFSStorage
	}

	struct Payload {
		ResourceData.ResourceType resourceType;
		uint256[] values;
	}
}
