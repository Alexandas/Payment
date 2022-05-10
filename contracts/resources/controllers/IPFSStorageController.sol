// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '../AdaptorWrapper.sol';
import '../interfaces/IIPFSStorageController.sol';
import '../../payment/DstChainPaymentWrapper.sol';

contract IPFSStorageController is IIPFSStorageController, DstChainPaymentWrapper, AdaptorWrapper {
	using SafeMathUpgradeable for uint256;

	mapping(bytes32 => IPFSStorage) internal ipfsStorage;

	constructor() initializer {}

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

	function isExpired(bytes32 account) public view override returns (bool) {
		return block.timestamp > startTime(account).add(expiration(account));
	}

	function startTime(bytes32 account) public view override returns (uint256) {
		return ipfsStorage[account].startTime;
	}

	function availableExpiration(bytes32 account) public view override returns (uint256) {
		require(!isExpired(account), 'IPFSStorageController: account is expired.');
		return expiredAt(account).sub(block.timestamp);
	}

	function expiration(bytes32 account) public view override returns (uint256) {
		return ipfsStorage[account].expiration;
	}

	function expiredAt(bytes32 account) public view override returns (uint256) {
		return startTime(account).add(expiration(account));
	}

	function balanceOf(bytes32 account) public view override returns (uint256) {
		require(!isExpired(account), 'IPFSStorageController: account is expired.');
		return ipfsStorage[account].amount;
	}

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
