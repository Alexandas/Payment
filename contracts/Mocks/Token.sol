// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol';

contract Token is ERC20Upgradeable {
	constructor(address account) {
		_mint(account, 10 ** 30);
	}
}