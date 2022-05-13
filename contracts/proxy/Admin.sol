// SPDX-License-Identifier: UNLICENSE
pragma solidity >=0.8.0;

import '@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol';

/// @author Alexandas
/// @dev all proxy admin contract
contract Admin is ProxyAdmin {
	constructor(address owner) {
		_transferOwnership(owner);
	}
}
