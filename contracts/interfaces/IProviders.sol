// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

interface IProviders {

	event AddProvider(address provider);

	event RemoveProvider(address provider);

	function isProvider(address provider) external view returns(bool);

	function isValidSignature(address provider, bytes32 hash, bytes memory signature) external returns(bool);

}
