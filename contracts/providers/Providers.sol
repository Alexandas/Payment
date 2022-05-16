// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/utils/cryptography/SignatureCheckerUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '../interfaces/IProviders.sol';

/// @author Alexandas
/// @dev providers contract
contract Providers is IProviders, OwnableUpgradeable {
	/// @dev all providers
	mapping(address => bool) internal providers;

	modifier onlyProvider() {
		require(isProvider(msg.sender), 'Providers: caller is not a provider');
		_;
	}

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param _providers providers
	function initialize(
		address owner,
		address[] memory _providers
	) external initializer {
		_transferOwnership(owner);
		__Init_Providers(_providers);
	}

	/// @dev initialize providers with wallets
	/// @param _providers providers
	function __Init_Providers(address[] memory _providers) internal onlyInitializing {
		require(_providers.length > 0, 'Providers: invalid length of providers');
		for (uint256 i = 0; i < _providers.length; i++) {
			_addProvider(_providers[i]);
		}
	}

	/// @dev return whether address is a provider
	/// @param provider address
	/// @return whether address is a provider
	function isProvider(address provider) public view override returns (bool) {
		return providers[provider];
	}

	/// @dev add a provider with wallet
	/// @param provider address
	function addProvider(address provider) external onlyOwner {
		_addProvider(provider);
	}

	/// @dev remove a provider
	/// @param provider address
	function removeProvider(address provider) external onlyOwner {
		_removeProvider(provider);
	}

	function _addProvider(address provider) internal {
		require(!isProvider(provider), 'Providers: provider existed');
		providers[provider] = true;

		emit AddProvider(provider);
	}

	function _removeProvider(address provider) internal {
		require(isProvider(provider), 'Providers: nonexistent provider');
		delete providers[provider];
	
		emit RemoveProvider(provider);
	}

	/// @dev return whether a valid signature
	/// @param provider address
	/// @param hash message hash
	/// @param signature provider signature for message hash
	/// @return whether signature is valid
	function isValidSignature(
		address provider,
		bytes32 hash,
		bytes memory signature
	) public view returns (bool) {
		require(isProvider(provider), 'Providers: nonexistent provider');
		return SignatureCheckerUpgradeable.isValidSignatureNow(provider, hash, signature);
	}
}
