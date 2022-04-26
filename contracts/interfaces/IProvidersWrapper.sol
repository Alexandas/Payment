// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../interfaces/IProviders.sol';

interface IProvidersWrapper {
	event ProvidersUpdated(IProviders providers);

	function providers() external view returns (IProviders);
}
