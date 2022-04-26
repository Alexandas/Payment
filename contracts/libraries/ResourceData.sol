// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

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