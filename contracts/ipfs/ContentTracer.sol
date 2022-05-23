// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '../providers/ProvidersWrapper.sol';
import '../resources/interfaces/IIPFSStorageController.sol';

/// @author Alexandas
/// @dev IPFS content tracer
contract ContentTracer is ProvidersWrapper, OwnableUpgradeable {
	using SafeMathUpgradeable for uint256;

	/// @dev ipfs storage controller
	IIPFSStorageController public controller;

	struct ContentMeta {
		uint256 size;
		uint256 count;
	}

	/// @dev ipfs content content meta
	mapping(address => mapping(bytes32 => mapping(string => ContentMeta))) public metas;

	/// @dev emit when ipfs storage controller updated
	/// @param controller ipfs storage controller
	event ControllerUpdated(IIPFSStorageController controller);

	/// @dev emit when ipfs content inserted
	/// @param provider provider address
	/// @param account user account
	/// @param content ipfs content
	/// @param size ipfs content size
	/// @param count ipfs content count
	/// @param expiration ipfs content expiration
	event Insert(address provider, bytes32 account, string content, uint256 size, uint256 count, uint256 expiration);

	/// @dev emit when ipfs content removed
	/// @param provider provider address
	/// @param account user account
	/// @param content ipfs content
	/// @param size ipfs content size
	/// @param count ipfs content count
	event Remove(address provider, bytes32 account, string content, uint256 size, uint256 count);

	modifier onlyProvider() {
		require(providers.isProvider(msg.sender), 'ContentTracer: caller is not the provider');
		_;
	}

	modifier nonSize(uint256 size) {
		require(size > 0, 'ContentTracer: zero size.');
		_;
	}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param providers providers contract address
	/// @param controller ipfs storage controller
	function initialize(
		address owner,
		IProviders providers,
		IIPFSStorageController controller
	) external initializer {
		_transferOwnership(owner);
		__Init_Providers(providers);
		_setController(controller);
	}

	/// @dev update ipfs storage controller
	/// @param _controller ipfs storage controller
	function setController(IIPFSStorageController _controller) external onlyOwner {
		_setController(_controller);
	}

	function _setController(IIPFSStorageController _controller) internal {
		controller = _controller;
		emit ControllerUpdated(_controller);
	}

	/// @dev insert multiple ipfs content for accounts
	/// @param accounts array of user account
	/// @param contents array of ipfs contents
	/// @param sizes array of ipfs content size
	/// @param counts array of ipfs content count
	function insertMult(
		bytes32[] memory accounts,
		string[] memory contents,
		uint256[] memory sizes,
		uint256[] memory counts
	) external onlyProvider {
		require(accounts.length == contents.length, 'ContentTracer: Invalid parameter length.');
		require(accounts.length == sizes.length, 'ContentTracer: Invalid parameter length.');
		require(accounts.length == counts.length, 'ContentTracer: Invalid parameter length.');

		for (uint256 i = 0; i < accounts.length; i++) {
			_insert(msg.sender, accounts[i], contents[i], sizes[i], counts[i]);
		}
	}

	/// @dev insert ipfs content
	/// @param account user account
	/// @param content ipfs content
	/// @param size ipfs account size
	function insert(
		bytes32 account,
		string memory content,
		uint256 size,
		uint256 count
	) public nonSize(size) onlyProvider {
		_insert(msg.sender, account, content, size, count);
	}

	function _insert(
		address provider,
		bytes32 account,
		string memory content,
		uint256 size, 
		uint256 count
	) internal nonSize(size) {
		require(!exists(provider, account, content), 'ContentTracer: content exists');
		require(!controller.isExpired(account), 'ContentTracer: account expired');
		metas[provider][account][content] = ContentMeta(size, count);

		emit Insert(provider, account, content, size, count, controller.expiredAt(account));
	}

	/// @dev remove ipfs content
	/// @param accounts array of user account
	/// @param contents array of ipfs contents
	function removeMult(bytes32[] memory accounts, string[] memory contents) external onlyProvider {
		require(accounts.length == contents.length, 'ContentTracer: Invalid parameter length');
		for (uint256 i = 0; i < accounts.length; i++) {
			_remove(msg.sender, accounts[i], contents[i]);
		}
	}

	/// @dev remove ipfs content
	/// @param account user account
	/// @param content ipfs content
	function remove(bytes32 account, string memory content) public onlyProvider {
		_remove(msg.sender, account, content);
	}

	function _remove(
		address provider,
		bytes32 account,
		string memory content
	) internal {
		require(exists(provider, account, content), 'ContentTracer: nonexistent content');
		ContentMeta memory meta = metas[provider][account][content];
		delete metas[provider][account][content];

		emit Remove(provider, account, content, meta.size, meta.count);
	}

	/// @dev return whether ipfs content exists in provider
	/// @param provider provider address
	/// @param account user account
	/// @param content ipfs content
	/// @return ipfs ipfs content exists
	function exists(
		address provider,
		bytes32 account,
		string memory content
	) public view returns (bool) {
		return metas[provider][account][content].size != 0;
	}

	/// @dev return ipfs content size
	/// @param provider provider address
	/// @param account user account
	/// @param content ipfs content
	/// @return ipfs ipfs content size
	function size(
		address provider,
		bytes32 account,
		string memory content
	) public view returns (uint256) {
		require(providers.isProvider(provider), 'ContentTracer: nonexistent provider');
		require(exists(provider, account, content), 'ContentTracer: nonexistent content');
		return metas[provider][account][content].size;
	}
}
