// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '../interfaces/IProvidersWrapper.sol';

/// @author Alexandas
/// @dev providers wrapper contract
abstract contract ProvidersWrapper is IProvidersWrapper, Initializable {
	/// @dev providers contract address
	IProviders public override providers;

	/// @dev initialize providers contract
	/// @param _providers providers contract address
	function __Init_Providers(IProviders _providers) internal onlyInitializing {
		_setProviders(_providers);
	}

	function _setProviders(IProviders _providers) internal {
		providers = _providers;
		emit ProvidersUpdated(_providers);
	}
}
