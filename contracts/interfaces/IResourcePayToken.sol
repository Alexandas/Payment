// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';

/// @author Alexandas
/// @dev resource pay token interface
interface ResourcePayToken {

	/// @dev emit when token updated
	/// @param token token address
	event TokenUpdated(IERC20Upgradeable token);

	/// @dev token address
	function token() external view returns (IERC20Upgradeable);

	/// @dev match token amount to resource decimals
	/// @param value token amount with resource decimals
	/// @return resource value
	function matchTokenToResource(uint256 value) external view returns (uint256);

	/// @dev match value to token decimals
	/// @param value resource value
	/// @return token value
	function matchResourceToToken(uint256 value) external view returns (uint256);

	/// @dev return resource decimals
	/// @return resource decimals
	function decimals() external view returns (uint256);

	/// @dev return token decimals
	/// @return token decimals
	function tokenDecimals() external view returns (uint256);

}
