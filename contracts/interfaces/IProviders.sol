// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

/// @author Alexandas
/// @dev providers interface
interface IProviders {

	/// @dev emit when provider is added
	/// @param provider provider address
	event AddProvider(address provider);

	/// @dev emit when provider removed
	/// @param provider provider address
	event RemoveProvider(address provider);

	/// @dev return whether address is a provider
	/// @param provider address
	function isProvider(address provider) external view returns (bool);

	/// @dev return whether a valid signature
	/// @param provider address
	/// @param hash message hash
	/// @param signature provider signature for message hash
	/// @return is valid signature
	function isValidSignature(
		address provider,
		bytes32 hash,
		bytes memory signature
	) external returns (bool);
}
