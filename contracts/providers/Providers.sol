// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/utils/cryptography/SignatureCheckerUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '../interfaces/IProviders.sol';

contract Providers is IProviders, OwnableUpgradeable {
	mapping(address => bool) internal providers;

	constructor() initializer {}

	function initialize(address owner, address[] memory _providers) external initializer {
		_transferOwnership(owner);
		__Init_Providers(_providers);
	}

	function __Init_Providers(address[] memory _providers) internal onlyInitializing {
		for (uint256 i = 0; i < _providers.length; i++) {
			_addProvider(_providers[i]);
		}
	}

	function isProvider(address provider) public view override returns (bool) {
		return providers[provider];
	}

	function addProvider(address provider) external onlyOwner {
		_addProvider(provider);
	}

	function removeProvider(address provider) external onlyOwner {
		_removeProvider(provider);
	}

	function _removeProvider(address provider) internal {
		require(isProvider(provider), 'Providers: nonexistent provider');
		emit RemoveProvider(provider);
		delete providers[provider];
	}

	function _addProvider(address provider) internal {
		require(!isProvider(provider), 'Providers: provider existed');
		providers[provider] = true;
		emit AddProvider(provider);
	}

	function isValidSignature(
		address provider,
		bytes32 hash,
		bytes memory signature
	) public view returns (bool) {
		require(isProvider(provider), 'Providers: nonexistent provider');
		return SignatureCheckerUpgradeable.isValidSignatureNow(provider, hash, signature);
	}
}
