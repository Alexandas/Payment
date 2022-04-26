// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '../interfaces/IBilling.sol';
import '../resources/interfaces/IResourceAdaptor.sol';
import './ProvidersWrapper.sol';

abstract contract Billing is IBilling, ProvidersWrapper {
	using SafeMathUpgradeable for uint256;

	IResourceAdaptor public override adaptor;

	function __Init_Resource_Adaptor(IResourceAdaptor _adaptor) internal onlyInitializing {
		_setResourceAdaptor(_adaptor);
	}

	function _setResourceAdaptor(IResourceAdaptor _adaptor) internal {
		adaptor = _adaptor;
		emit ResourceAdaptorUpdated(_adaptor);
	}

	function _validateBill(bytes memory bill) internal view returns (uint256 value) {
		Bill memory bills = abi.decode(bill, (Bill));
		for (uint256 i = 0; i < bills.payloads.length; i++) {
			BillPayload memory payload = bills.payloads[i];
			for (uint256 j = 0; j < payload.entries.length; j++) {
				BillEntry memory entry = payload.entries[i];
				uint256 billing = entry.amount.mul(adaptor.getValueAt(entry.resourceType, entry.amount, payload.indexBlock));
				value = value.add(billing);
			}
		}
		require(value == bills.totalValue, 'FundWallet: invalid bill');
	}

	function encodeBill(Bill memory bills) external pure returns (bytes memory) {
		return abi.encode(bills);
	}

	function decodeBill(bytes memory message) external pure returns (Bill memory) {
		return abi.decode(message, (Bill));
	}
}
