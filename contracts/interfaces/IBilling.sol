// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
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

	event BillTypedHashUpdated(bytes32 hash);

	event TokenUpdated(IERC20Upgradeable token);

	event ResourceAdaptorUpdated(IResourceAdaptor adaptor);

	event Billing(address provider, uint64 nonce, bytes32 account, bytes bill, uint256 amount);

	function token() external view returns (IERC20Upgradeable);

	function adaptor() external view returns (IResourceAdaptor);

}
