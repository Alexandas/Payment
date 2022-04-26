// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../libraries/ResourceData.sol';
import '../resources/interfaces/IResourceAdaptor.sol';
import './IProvidersWrapper.sol';

interface IBilling is IProvidersWrapper {
	struct BillEntry {
		ResourceData.ResourceType resourceType;
		uint256 amount;
	}

	struct BillPayload {
		uint256 indexBlock;
		BillEntry[] entries;
	}

	struct Bill {
		uint256 totalValue;
		BillPayload[] payloads;
	}

	event ResourceAdaptorUpdated(IResourceAdaptor adaptor);

	function adaptor() external view returns (IResourceAdaptor);
}
