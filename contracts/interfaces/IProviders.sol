// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

interface IProviders {
	event ProviderUpdated(address provider, address wallet);

	event RemoveProvider(address provider);

	function isProvider(address provider) external view returns (bool);

	function wallets(address provider) external view returns (address);

	function isValidSignature(
		address provider,
		bytes32 hash,
		bytes memory signature
	) external returns (bool);
}
