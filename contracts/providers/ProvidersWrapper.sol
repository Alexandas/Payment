// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '../access/Pauser.sol';
import '../interfaces/IProvidersWrapper.sol';

abstract contract ProvidersWrapper is IProvidersWrapper, Pauser {
	IProviders public override providers;

	function __Init_Providers(IProviders _providers) internal onlyInitializing {
		_setProviders(_providers);
	}

	function _setProviders(IProviders _providers) internal {
		providers = _providers;
		emit ProvidersUpdated(_providers);
	}
}
