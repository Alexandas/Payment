// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '../libraries/ResourceData.sol';
import '../resources/interfaces/IResourceAdaptor.sol';
import './IProvidersWrapper.sol';

/// @author Alexandas
/// @dev Billing interface
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
		uint256 expiration;
		uint256 totalValue;
		BillPayload[] payloads;
	}

	/// @dev emit when BillTypedHash updated
	/// @param hash BillTypedHash
	event BillTypedHashUpdated(bytes32 hash);

	/// @dev emit when resource adaptor updated
	/// @param adaptor resource adaptor address
	event ResourceAdaptorUpdated(IResourceAdaptor adaptor);

	/// @dev emit when a bill finalized
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account bill's account
	/// @param bill bill info
	/// @param amount fee
	event Billing(address provider, uint64 nonce, bytes32 account, bytes bill, uint256 amount);

	/// @dev get bill types hash
	/// @return type hash for bill
	function billTypedHash() external view returns (bytes32);

	/// @dev get the resource adaptor
	/// @return resource adaptor address
	function adaptor() external view returns (IResourceAdaptor);
}
