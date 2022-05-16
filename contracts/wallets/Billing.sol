// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/cryptography/draft-EIP712Upgradeable.sol';

import '../providers/ProvidersWrapper.sol';
import '../interfaces/IBilling.sol';
import '../resources/interfaces/IResourceAdaptor.sol';

/// @author Alexandas
/// @dev Billing contract
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

	/// @dev keccak256("Bill(address provider,uint64 nonce,bytes32 account,bytes bill)")
	bytes32 public override billTypedHash;

	/// @dev token address
	IERC20Upgradeable public override token;

	/// @dev resource adaptor contract address
	IResourceAdaptor public override adaptor;

	/// @dev initialize bill type hash
	/// @param types bill types
	function __Init_Bill_Typed_Hash(string memory types) internal onlyInitializing {
		_setBillTypedHash(keccak256(bytes(types)));
	}

	/// @dev initialize resource adaptor
	/// @param _adaptor resource adaptor contract address
	function __Init_Resource_Adaptor(IResourceAdaptor _adaptor) internal onlyInitializing {
		_setResourceAdaptor(_adaptor);
	}

	/// @dev return hash for bill
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param bill user bill
	/// @return bill hash
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

	/// @dev return hash typed v4 for sign
	/// @param provider provider address
	/// @param nonce nonce
	/// @param account user account
	/// @param bill user bill
	/// @return bill hash typed v4
	function hashTypedDataV4ForBill(
		address provider,
		uint64 nonce,
		bytes32 account, 
		bytes memory bill
	) public view returns(bytes32) {
		return _hashTypedDataV4(billHash(provider, nonce, account, bill));
	}

	/// @dev return resource token value in token decimals(6) 
	/// @param amount token amount
	/// @return value token value
	function matchTokenDecimals(uint256 amount) internal view returns (uint256 value) {
		return amount.div(10**12);
	}

	/// @dev encode bill to bytes
	/// @param bill user bill
	/// @return bill bytes
	function encodeBill(Bill memory bill) external pure returns (bytes memory) {
		return abi.encode(bill);
	}

	/// @dev decode bill bytes to user bill
	/// @param data bill bytes
	/// @return user bill
	function decodeBill(bytes memory data) external pure returns (Bill memory) {
		return abi.decode(data, (Bill));
	}

	function _setToken(IERC20Upgradeable _token) internal {
		token = _token;
		emit TokenUpdated(_token);
	}

	function _setResourceAdaptor(IResourceAdaptor _adaptor) internal {
		adaptor = _adaptor;
		emit ResourceAdaptorUpdated(_adaptor);
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
		}

		emit Billing(provider, nonce, account, bill, amount);
	}

	function _setBillTypedHash(bytes32 hash) internal {
		billTypedHash = hash;
		emit BillTypedHashUpdated(hash);
	}

	function balanceOf(address provider, bytes32 account) public view virtual returns (uint256);


}
