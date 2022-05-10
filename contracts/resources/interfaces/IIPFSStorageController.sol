// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import './IAdaptorWrapper.sol';

interface IIPFSStorageController is IAdaptorWrapper {
	struct IPFSStorage {
		uint256 startTime;
		uint256 expiration;
		uint256 amount;
	}

	event Expanded(bytes32 account, uint256 expandedStorageFee, uint256 expandedExpirationFee);

	function expand(
		bytes32 account,
		uint256 expandedStorageFee,
		uint256 expandedExpirationFee
	) external;

	function isExpired(bytes32 account) external view returns (bool);

	function startTime(bytes32 account) external view returns (uint256);

	function availableExpiration(bytes32 account) external view returns (uint256);

	function expiration(bytes32 account) external view returns (uint256);

	function expiredAt(bytes32 account) external view returns (uint256);

	function balanceOf(bytes32 account) external view returns (uint256);

	function expandedFee(
		bytes32 account,
		uint256 expandedStorage,
		uint256 expandedExpiration
	) external view returns (uint256 expandedStorageFee, uint256 expandedExpirationFee);

	function expansions(
		bytes32 account,
		uint256 expandedStorageFee,
		uint256 expandedExpirationFee
	) external view returns (uint256 expandedStorage, uint256 expandedExpiration);
}
