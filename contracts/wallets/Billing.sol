// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol';

import '../providers/ProvidersWrapper.sol';
import '../interfaces/IBilling.sol';
import '../resources/interfaces/IResourceAdaptor.sol';

abstract contract Billing is IBilling, ProvidersWrapper, EIP712Upgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	struct SpendPayload {
		address provider;
		uint64 nonce;
		bytes32 account;
		bytes bill;
		bytes signature;
	}

	bytes32 public billTypedHash;

	IERC20Upgradeable public override token;

	IResourceAdaptor public override adaptor;

	function __Init_Bill_Typed_Hash(string memory types) internal onlyInitializing {
		_setBillTypedHash(keccak256(bytes(types)));
	}

	function __Init_Resource_Adaptor(IResourceAdaptor _adaptor) internal onlyInitializing {
		_setResourceAdaptor(_adaptor);
	}

	function _setToken(IERC20Upgradeable _token) internal {
		token = _token;
		emit TokenUpdated(_token);
	}

	function _setResourceAdaptor(IResourceAdaptor _adaptor) internal {
		adaptor = _adaptor;
		emit ResourceAdaptorUpdated(_adaptor);
	}

	function _spend(
		address provider,
		uint64 nonce,
		bytes32 account,
		bytes memory bill,
		bytes memory signature
	) internal returns (uint256 amount) {
		require(providers.isProvider(msg.sender), 'Billing: caller is not a provider');
		bytes32 hash = hashTypedDataV4ForBill(provider, nonce, account, bill);
		require(providers.isValidSignature(provider, hash, signature), 'Billing: invalid signature');
		if (bill.length > 0) {
			uint256 balance = balanceOf(provider, account);
			amount = matchTokenDecimals(_validateBill(bill));
			require(balance >= amount, 'Billing: insufficient balance');
			token.safeTransfer(providers.wallets(provider), amount);
		}
		emit Billing(provider, nonce, account, bill, amount);
	}

	function billHash(
		address provider, 
		uint64 nonce, 
		bytes32 account, 
		bytes memory bill
	) public view returns(bytes32) {
		return keccak256(
			abi.encode(
				billTypedHash,
				provider,
				nonce,
				account,
				keccak256(bill)
			)
		);
	}

	function hashTypedDataV4ForBill(
		address provider, 
		uint64 nonce, 
		bytes32 account, 
		bytes memory bill
	) public view returns(bytes32) {
		return _hashTypedDataV4(billHash(provider, nonce, account, bill));
	}

	function _validateBill(bytes memory bill) internal view returns (uint256 value) {
		Bill memory bills = abi.decode(bill, (Bill));
		require(bills.payloads.length > 0, 'Billing: empty bill payloads');
		for (uint256 i = 0; i < bills.payloads.length; i++) {
			BillPayload memory payload = bills.payloads[i];
			require(payload.entries.length > 0, 'Billing: empty bill payload entry');
			for (uint256 j = 0; j < payload.entries.length; j++) {
				BillEntry memory entry = payload.entries[i];
				uint256 billing = adaptor.getValueAt(entry.resourceType, entry.amount, payload.indexBlock);
				value = value.add(billing);
			}
		}
		require(value == bills.totalValue, 'Billing: invalid bill');
	}

	function balanceOf(address provider, bytes32 account) public view virtual returns (uint256);

	function encodeBill(Bill memory bills) external pure returns (bytes memory) {
		return abi.encode(bills);
	}

	function decodeBill(bytes memory message) external pure returns (Bill memory) {
		return abi.decode(message, (Bill));
	}

	function _setBillTypedHash(bytes32 hash) internal {
		billTypedHash = hash;
		emit BillTypedHashUpdated(hash);
	}

	function matchTokenDecimals(uint256 amount) internal view returns (uint256 value) {
		return amount.div(10**12);
	}

}
