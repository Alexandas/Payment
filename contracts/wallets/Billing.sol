// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol';

import '../providers/ProvidersWrapper.sol';
import '../interfaces/IBilling.sol';
import '../resources/interfaces/IResourceAdaptor.sol';
import '../payment/ResourcePayTokenWrapper.sol';

/// @author Alexandas
/// @dev Billing contract
abstract contract Billing is IBilling, ResourcePayTokenWrapper, ProvidersWrapper, EIP712Upgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	struct SpendPayload {
		address provider;
		uint64 nonce;
		bytes32 account;
		bytes bill;
		bytes signature;
	}

	/// @dev keccak256("Bills(address provider,uint64 nonce,bytes32 account,bytes bills,uint256 expiration)")
	bytes32 public override billsTypedHash;

	/// @dev resource adaptor contract address
	IResourceAdaptor public override adaptor;

	/// @dev initialize bills type hash
	/// @param types bills types
	function __Init_Bills_Typed_Hash(string memory types) internal onlyInitializing {
		_setBillsTypedHash(keccak256(bytes(types)));
	}

	/// @dev initialize resource adaptor
	/// @param _adaptor resource adaptor contract address
	function __Init_Resource_Adaptor(IResourceAdaptor _adaptor) internal onlyInitializing {
		_setResourceAdaptor(_adaptor);
	}

	/// @dev return hash for bills
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param bills user bills
	/// @param expiration bills expiration
	/// @return bills hash
	function billsHash(
		address provider,
		uint64 nonce,
		bytes32 account,
		bytes memory bills,
		uint256 expiration
	) public view returns (bytes32) {
		return keccak256(abi.encode(billsTypedHash, provider, nonce, account, keccak256(bills), expiration));
	}

	/// @dev return hash typed v4 for sign
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param bills user bills
	/// @return bills hash typed v4
	function hashTypedDataV4ForBills(
		address provider,
		uint64 nonce,
		bytes32 account,
		bytes memory bills,
		uint256 expiration
	) public view returns (bytes32) {
		return _hashTypedDataV4(billsHash(provider, nonce, account, bills, expiration));
	}

	/// @dev encode bill to bytes
	/// @param bills user bills
	/// @return bills bytes
	function encodeBills(Bill[] memory bills) external pure returns (bytes memory) {
		return abi.encode(bills);
	}

	/// @dev decode bill bytes to user bill
	/// @param data bill bytes
	/// @return user bills
	function decodeBills(bytes memory data) external pure returns (Bill[] memory) {
		return abi.decode(data, (Bill[]));
	}

	function _setResourceAdaptor(IResourceAdaptor _adaptor) internal {
		require(address(_adaptor) != address(0), 'Billing: zero address');
		adaptor = _adaptor;
		emit ResourceAdaptorUpdated(_adaptor);
	}

	function _validateBills(bytes memory data) internal view returns (uint256 value) {
		Bill[] memory bills = abi.decode(data, (Bill[]));
		require(bills.length > 0, 'Billing: empty bill payloads');
		for (uint256 i = 0; i < bills.length; i++) {
			Bill memory bill = bills[i];
			require(bill.entries.length > 0, 'Billing: empty bill entry');
			for (uint256 j = 0; j < bill.entries.length; j++) {
				BillEntry memory entry = bill.entries[i];
				uint256 billing = adaptor.getValueAt(entry.resourceType, entry.amount, bill.indexBlock);
				value = value.add(billing);
			}
		}
	}

	function _spend(
		Payload memory payload,
		bytes memory signature
	) internal returns (uint256 amount) {
		require(payload.expiration > block.timestamp, 'Billing: tx expired');
		require(providers.isProvider(msg.sender), 'Billing: caller is not a provider');
		bytes32 hash = hashTypedDataV4ForBills(payload.provider, payload.nonce, payload.account, payload.bills, payload.expiration);
		require(providers.isValidSignature(payload.provider, hash, signature), 'Billing: invalid signature');
		if (payload.bills.length > 0) {
			uint256 balance = balanceOf(payload.provider, payload.account);
			amount = matchResourceToToken(_validateBills(payload.bills));
			require(balance >= amount, 'Billing: insufficient balance');
		}

		emit Billing(payload.provider, payload.nonce, payload.account, payload.bills, amount);
	}

	function _setBillsTypedHash(bytes32 hash) internal {
		billsTypedHash = hash;
		emit BillsTypedHashUpdated(hash);
	}

	function balanceOf(address provider, bytes32 account) public view virtual returns (uint256);
}
