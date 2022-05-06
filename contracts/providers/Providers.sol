// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/utils/cryptography/SignatureCheckerUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '../interfaces/IProviders.sol';

contract Providers is IProviders, OwnableUpgradeable {
	mapping(address => bool) internal providers;

	mapping(address => address) public override wallets;

	modifier onlyProvider() {
		require(isProvider(msg.sender), 'Providers: caller is not a provider');
		_;
	}

	constructor(
		address owner,
		address[] memory _providers,
		address[] memory _wallets
	) initializer {
		_transferOwnership(owner);
		__Init_Providers_And_Wallets(_providers, _wallets);
	}

	function initialize(
		address owner,
		address[] memory _providers,
		address[] memory _wallets
	) external initializer {
		_transferOwnership(owner);
		__Init_Providers_And_Wallets(_providers, _wallets);
	}

	function __Init_Providers_And_Wallets(address[] memory _providers, address[] memory _wallets) internal onlyInitializing {
		require(_providers.length == _wallets.length, 'Providers: inconsistent length');
		for (uint256 i = 0; i < _providers.length; i++) {
			_addProvider(_providers[i], _wallets[i]);
		}
	}

	function setWallet(address wallet) external onlyProvider {
		_setWallet(msg.sender, wallet);
	}

	function _setWallet(address provider, address newWallet) internal {
		wallets[provider] = newWallet;
		emit ProviderUpdated(provider, newWallet);
	}

	function isProvider(address provider) public view override returns (bool) {
		return providers[provider];
	}

	function addProvider(address provider, address wallet) external onlyOwner {
		_addProvider(provider, wallet);
	}

	function removeProvider(address provider) external onlyOwner {
		_removeProvider(provider);
	}

	function _removeProvider(address provider) internal {
		require(isProvider(provider), 'Providers: nonexistent provider');
		emit RemoveProvider(provider);
		delete providers[provider];
	}

	function _addProvider(address provider, address wallet) internal {
		require(!isProvider(provider), 'Providers: provider existed');
		providers[provider] = true;
		wallets[provider] = wallet;

		emit ProviderUpdated(provider, wallet);
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
