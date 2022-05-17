// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import './IAdaptorWrapper.sol';

/// @author Alexandas
/// @dev IPFS storage controller interface
interface IIPFSStorageController is IAdaptorWrapper {
	struct IPFSStorage {
		uint256 startTime;
		uint256 expiration;
		uint256 amount;
	}

	/// @dev emit when ipfs resource expanded
	/// @param account user account
	/// @param expandedStorageFee storage fee
	/// @param expandedExpirationFee expiration fee
	event Expanded(bytes32 account, uint256 expandedStorageFee, uint256 expandedExpirationFee);

	/// @dev expand ipfs resource
	/// @param account user account
	/// @param expandedStorageFee storage fee
	/// @param expandedExpirationFee expiration fee
	function expand(
		bytes32 account,
		uint256 expandedStorageFee,
		uint256 expandedExpirationFee
	) external;

	/// @dev return whether the account is expired
	/// @param account user account
	/// @return whether the account is expired
	function isExpired(bytes32 account) external view returns (bool);

	/// @dev ipfs resource start time
	/// @param account user account
	/// @return start time for ipfs resource
	function startTime(bytes32 account) external view returns (uint256);

	/// @dev return available expiration time for the account
	/// @param account user account
	/// @return available expiration time for the account
	function availableExpiration(bytes32 account) external view returns (uint256);

	/// @dev return total expiration time for the account
	/// @param account user account
	/// @return total expiration time for the account
	function expiration(bytes32 account) external view returns (uint256);

	/// @dev return when the account will expire
	/// @param account user account
	/// @return when the account will expire
	function expiredAt(bytes32 account) external view returns (uint256);

	/// @dev return ipfs storage amount for the account
	/// @param account user account
	/// @return ipfs storage amount for the account
	function balanceOf(bytes32 account) external view returns (uint256);

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
	) external view returns (uint256 expandedStorageFee, uint256 expandedExpirationFee);

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
	) external view returns (uint256 expandedStorage, uint256 expandedExpiration);
}
