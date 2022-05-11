// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '../providers/ProvidersWrapper.sol';
import '../resources/interfaces/IIPFSStorageController.sol';

contract ContentTracer is ProvidersWrapper, OwnableUpgradeable {
	using SafeMathUpgradeable for uint256;

	IIPFSStorageController public controller;

	uint256 public defaultExpiration;

	mapping(address => mapping(bytes32 => mapping(string => uint256))) public contentSizes;

	event ControllerUpdated(IIPFSStorageController controller);

	event DefaultExpirationUpdated(uint256 expiration);

	event Insert(address provider, bytes32 account, string content, uint256 size, uint256 expiration);

	event Remove(address provider, bytes32 account, string content);

	modifier onlyProvider() {
		require(providers.isProvider(msg.sender), 'ContentTracer: caller is not the provider');
		_;
	}

	modifier nonSize(uint256 size) {
		require(size > 0, 'ContentTracer: zero size.');
		_;
	}

	function initialize(address owner, IProviders providers, IIPFSStorageController controller, uint256 defaultExpiration) external initializer {
		_transferOwnership(owner);
		__Init_Providers(providers);
		_setController(controller);
		_setDefaultExpiration(defaultExpiration);
	}

	function setController(IIPFSStorageController _controller) external onlyOwner {
		_setController(_controller);
	}

	function _setController(IIPFSStorageController _controller) internal {
		controller = _controller;
		emit ControllerUpdated(_controller);
	}

	function setDefaultExpiration(uint256 expiration) external onlyOwner {
		_setDefaultExpiration(expiration);
	}

	function _setDefaultExpiration(uint256 expiration) internal {
		defaultExpiration = expiration;
		emit DefaultExpirationUpdated(expiration);
	}

	function insertMult(
		bytes32[] memory accounts,
		string[] memory contents,
		uint256[] memory sizes
	) external onlyProvider {
		require(accounts.length == contents.length, 'ContentTracer: Invalid parameter length.');
		require(accounts.length == sizes.length, 'ContentTracer: Invalid parameter length.');

		for (uint256 i = 0; i < accounts.length; i++) {
			_insert(msg.sender, accounts[i], contents[i], sizes[i]);
		}
	}

	function insert(
		bytes32 account,
		string memory content,
		uint256 size
	) public nonSize(size) onlyProvider {
		_insert(msg.sender, account, content, size);
	}

	function _insert(
		address provider,
		bytes32 account,
		string memory content,
		uint256 size
	) internal nonSize(size) {
		require(!exists(provider, account, content), 'ContentTracer: content exists');
		contentSizes[provider][account][content] = size;
		uint256 expiration = controller.isExpired(account)? defaultExpiration : controller.expiredAt(account);

		emit Insert(provider, account, content, size, expiration);
	}

	function removeMult(
		bytes32[] memory accounts,
		string[] memory contents
	) external onlyProvider {
		require(accounts.length == contents.length, 'ContentTracer: Invalid parameter length.');
		for (uint256 i = 0; i < accounts.length; i++) {
			_remove(msg.sender, accounts[i], contents[i]);
		}
	}

	function remove(bytes32 account, string memory content) public onlyProvider {
		_remove(msg.sender, account, content);
	}

	function _remove(
		address provider,
		bytes32 account,
		string memory content
	) internal {
		require(exists(provider, account, content), 'ContentTracer: nonexistent content');
		delete contentSizes[provider][account][content];

		emit Remove(provider, account, content);
	}

	function exists(address provider, bytes32 account, string memory content) public view returns (bool) {
		return contentSizes[provider][account][content] != 0;
	}

	function size(address provider, bytes32 account, string memory content) public view returns (uint256) {
		require(providers.isProvider(provider), 'ContentTracer: nonexistent provider');
		require(exists(provider, account, content), 'ContentTracer: nonexistent content');
		return contentSizes[provider][account][content];
	}

}