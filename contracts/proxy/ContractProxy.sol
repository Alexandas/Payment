// SPDX-License-Identifier: UNLICENSE
pragma solidity >=0.8.0;

import '@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol';

/// @author Alexandas
/// @dev proxy contract
contract ContractProxy is TransparentUpgradeableProxy {
	constructor(
		address logic,
		address admin,
		bytes memory data
	) TransparentUpgradeableProxy(logic, admin, data) {}
}
