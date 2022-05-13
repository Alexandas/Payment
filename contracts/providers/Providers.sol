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
	/// @dev provider wallet
	mapping(address => address) public override wallets;

	modifier onlyProvider() {
		require(isProvider(msg.sender), 'Providers: caller is not a provider');
		_;
	}

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param _providers providers
	/// @param _wallets wallets for providers
	function initialize(
		address owner,
		address[] memory _providers,
		address[] memory _wallets
	) external initializer {
		_transferOwnership(owner);
		__Init_Providers_And_Wallets(_providers, _wallets);
	}

	/// @dev initialize providers with wallets
	/// @param _providers providers
	/// @param _wallets wallets for providers
	function __Init_Providers_And_Wallets(address[] memory _providers, address[] memory _wallets) internal onlyInitializing {
		require(_providers.length == _wallets.length, 'Providers: inconsistent length');
		for (uint256 i = 0; i < _providers.length; i++) {
			_addProvider(_providers[i], _wallets[i]);
		}
	}

	/// @dev update wallet for provider
	/// @param wallet wallet for provider
	function setWallet(address wallet) external onlyProvider {
		_setWallet(msg.sender, wallet);
	}

	function _setWallet(address provider, address newWallet) internal {
		wallets[provider] = newWallet;
		emit ProviderUpdated(provider, newWallet);
	}

	/// @dev return whether address is a provider
	/// @param provider address
	/// @return whether address is a provider
	function isProvider(address provider) public view override returns (bool) {
		return providers[provider];
	}

	/// @dev add a provider with wallet
	/// @param provider address
	/// @param wallet wallet for provider
	function addProvider(address provider, address wallet) external onlyOwner {
		_addProvider(provider, wallet);
	}

	/// @dev remove a provider
	/// @param provider address
	function removeProvider(address provider) external onlyOwner {
		_removeProvider(provider);
	}

	function _addProvider(address provider, address wallet) internal {
		require(!isProvider(provider), 'Providers: provider existed');
		providers[provider] = true;
		wallets[provider] = wallet;

		emit ProviderUpdated(provider, wallet);
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
