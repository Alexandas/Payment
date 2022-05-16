// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

/// @author Alexandas
/// @dev source chain payment contract
abstract contract ResourcePayTokenWrapper is Initializable {
	using SafeMathUpgradeable for uint256;

	/// @dev token address
	IERC20Upgradeable public token;

	/// @dev emit when token updated
	/// @param token token address
	event TokenUpdated(IERC20Upgradeable token);

	/// @dev initialize token
	/// @param _token token address
	function __Init_Token(IERC20Upgradeable _token) internal onlyInitializing {
		_setToken(_token);
	}

	function _setToken(IERC20Upgradeable _token) internal {
		token = _token;
		emit TokenUpdated(token);
	}

	/// @dev match token amount to resource decimals
	/// @param value token amount with resource decimals
	/// @return resource value
	function matchTokenToResource(uint256 value) public view returns (uint256) {
		uint256 _tokenDecimals = tokenDecimals();
		uint256 _resourceDecimals = resourceDecimals();
		if (_tokenDecimals <= _resourceDecimals) {
			return value.mul(10**(_resourceDecimals.sub(_tokenDecimals)));
		}
		return value.div(10**(_tokenDecimals.sub(_resourceDecimals)));
	}

	/// @dev match value to token decimals
	/// @param value resource value
	/// @return token value
	function matchResourceToToken(uint256 value) public view returns (uint256) {
		uint256 _tokenDecimals = tokenDecimals();
		uint256 _resourceDecimals = resourceDecimals();
		if (_tokenDecimals <= _resourceDecimals) {
			return value.div(10**(_resourceDecimals.sub(_tokenDecimals)));
		}
		return value.mul(10**(_tokenDecimals.sub(_resourceDecimals)));
	}

	/// @dev return resource decimals
	/// @return resource decimals
	function resourceDecimals() public view returns (uint256) {
		return 18;
	}

	/// @dev return token decimals
	/// @return token decimals
	function tokenDecimals() public view returns (uint256) {
		// keccak256(bytes4('decimals()'))
		(bool success, bytes memory data) = address(token).staticcall(hex'313ce567');
		require(success, 'ResourcePayTokenWrapper: invalid token');
		return abi.decode(data, (uint256));
	}

}
