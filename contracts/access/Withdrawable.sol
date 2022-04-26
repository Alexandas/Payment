// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';

abstract contract Withdrawable is OwnableUpgradeable  {
	using SafeERC20Upgradeable for IERC20Upgradeable;

	event Withdrawal(IERC20Upgradeable token, address to, uint256 value);

	event NativeWithdrawal(address to, uint256 value);

	function withdraw(IERC20Upgradeable token, address to, uint256 value) external onlyOwner {
		token.safeTransfer(to, value);
		emit Withdrawal(token, to, value);
	}

	function withdrawNative(address payable to, uint256 value) external onlyOwner {
		bool success = to.send(value);
		require(success, 'Payment: withdraw native token failed');
		emit NativeWithdrawal(to, value);
	}

}
