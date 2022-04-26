// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';

abstract contract Pauser is OwnableUpgradeable, PausableUpgradeable {
	mapping(address => bool) public pausers;

	event PauserAdded(address account);
	event PauserRemoved(address account);

	function __Init_Pauser(address account) internal onlyInitializing {
		_addPauser(account);
	}

	modifier onlyPauser() {
		require(isPauser(msg.sender), 'Pauser: Caller is not pauser');
		_;
	}

	function pause() public onlyPauser {
		_pause();
	}

	function unpause() public onlyPauser {
		_unpause();
	}

	function isPauser(address account) public view returns (bool) {
		return pausers[account];
	}

	function addPauser(address account) public onlyOwner {
		_addPauser(account);
	}

	function removePauser(address account) public onlyOwner {
		_removePauser(account);
	}

	function renouncePauser() public {
		_removePauser(msg.sender);
	}

	function _addPauser(address account) private {
		require(!isPauser(account), 'Pauser: Account is already pauser');
		pausers[account] = true;
		emit PauserAdded(account);
	}

	function _removePauser(address account) private {
		require(isPauser(account), 'Pauser: Account is not pauser');
		pausers[account] = false;
		emit PauserRemoved(account);
	}
}
