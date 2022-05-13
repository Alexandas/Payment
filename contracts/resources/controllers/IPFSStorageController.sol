// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '../AdaptorWrapper.sol';
import '../interfaces/IIPFSStorageController.sol';
import '../../payment/DstChainPaymentWrapper.sol';

/// @author Alexandas
/// @dev IPFS storage controller
contract IPFSStorageController is IIPFSStorageController, DstChainPaymentWrapper, AdaptorWrapper {
	using SafeMathUpgradeable for uint256;

	/// @dev ipfs storage for account
	mapping(bytes32 => IPFSStorage) internal ipfsStorage;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param dstChainPayment dst chain payment contract address
	/// @param adaptor resource adaptor contract address
	function initialize(
		address owner,
		address dstChainPayment,
		IResourceAdaptor adaptor
	) external initializer {
		_transferOwnership(owner);
		__Init_Dst_Chain_Payment(dstChainPayment);
		__Init_Resource_Adaptor(adaptor);
		__Init_Resource_Type(ResourceData.ResourceType.IPFSStorage);
	}

	/// @dev expand storage and expiration
	/// @param account user account
	/// @param expandedStorageFee storage fee
	/// @param expandedExpirationFee expiration fee
	function expand(
		bytes32 account,
		uint256 expandedStorageFee,
		uint256 expandedExpirationFee
	) external override onlyDstChainPayment {
		(uint256 expandedStorage, uint256 expandedExpiration) = expansions(account, expandedStorageFee, expandedExpirationFee);
		if (isExpired(account)) {
			ipfsStorage[account].startTime = block.timestamp;
			ipfsStorage[account].amount = expandedStorage;
			ipfsStorage[account].expiration = expandedExpiration;
		} else {
			ipfsStorage[account].amount = ipfsStorage[account].amount.add(expandedStorage);
			ipfsStorage[account].expiration = ipfsStorage[account].expiration.add(expandedExpiration);
		}

		emit Expanded(account, expandedStorageFee, expandedExpirationFee);
	}

	/// @dev return whether ipfs storage is expired for the account
	/// @param account user account
	/// @return whether ipfs storage is expired for the account
	function isExpired(bytes32 account) public view override returns (bool) {
		return block.timestamp > startTime(account).add(expiration(account));
	}

	/// @dev return ipfs storage start time for the account
	/// @param account user account
	/// @return start time for the account
	function startTime(bytes32 account) public view override returns (uint256) {
		return ipfsStorage[account].startTime;
	}

	/// @dev return available expiration time for the account
	/// @param account user account
	/// @return available expiration time for the account
	function availableExpiration(bytes32 account) public view override returns (uint256) {
		require(!isExpired(account), 'IPFSStorageController: account is expired.');
		return expiredAt(account).sub(block.timestamp);
	}

	/// @dev return total expiration time for the account
	/// @param account user account
	/// @return total expiration time for the account
	function expiration(bytes32 account) public view override returns (uint256) {
		return ipfsStorage[account].expiration;
	}

	/// @dev return when the account will expire
	/// @param account user account
	/// @return when the account will expire
	function expiredAt(bytes32 account) public view override returns (uint256) {
		return startTime(account).add(expiration(account));
	}

	/// @dev return ipfs storage amount for the account
	/// @param account user account
	/// @return ipfs storage amount for the account
	function balanceOf(bytes32 account) public view override returns (uint256) {
		require(!isExpired(account), 'IPFSStorageController: account is expired.');
		return ipfsStorage[account].amount;
	}

	/// @dev calculate fee for storage and expiration
	/// @param account user account
	/// @param expandedStorage storage amount
	/// @param expandedExpiration  expiration(in seconds)
	/// @return expandedStorageFee storage fee
	/// @return expandedExpirationFee expiration fee
	function expandedFee(
		bytes32 account,
		uint256 expandedStorage,
		uint256 expandedExpiration
	) public view override returns (uint256 expandedStorageFee, uint256 expandedExpirationFee) {
		if (isExpired(account)) {
			require(expandedStorage > 0 && expandedExpiration > 0, 'IPFSStorageController: invalid params with expired account');
			expandedStorageFee = getValueOf(expandedStorage);
			expandedExpirationFee = expandedStorage.mul(expandedExpiration);
		} else {
			require(expandedStorage > 0 || expandedExpiration > 0, 'IPFSStorageController: invalid params');
			expandedStorageFee = expandedStorage.mul(getValueOf(availableExpiration(account)));
			expandedExpirationFee = expandedExpiration.mul(getValueOf(balanceOf(account).add(expandedStorage)));
		}
	}

	/// @dev calculate fee for storage and expiration
	/// @param account user account
	/// @param expandedStorageFee storage fee
	/// @param expandedExpirationFee expiration fee
	/// @return expandedStorage storage amount
	/// @return expandedExpiration expiration(in seconds)
	function expansions(
		bytes32 account,
		uint256 expandedStorageFee,
		uint256 expandedExpirationFee
	) public view override returns (uint256 expandedStorage, uint256 expandedExpiration) {
		if (isExpired(account)) {
			require(expandedStorageFee > 0 && expandedExpirationFee > 0, 'IPFSStorageController: invalid params with expired account');
			expandedStorage = expandedStorageFee.div(price());
			expandedExpiration = expandedExpirationFee.div(expandedStorageFee);
		} else {
			require(expandedStorageFee > 0 || expandedExpirationFee > 0, 'IPFSStorageController: invalid params');
			expandedStorage = expandedStorageFee.div(getValueOf(availableExpiration(account)));
			expandedExpiration = expandedExpirationFee.div(getValueOf(balanceOf(account).add(expandedStorage)));
		}
	}
}
