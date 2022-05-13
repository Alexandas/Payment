// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '../interfaces/IProviders.sol';

/// @author Alexandas
/// @dev providers wrapper interface
interface IProvidersWrapper {

	/// @dev emit when providers contract updated
	/// @param providers providers contract
	event ProvidersUpdated(IProviders providers);

	/// @dev return providers contract address
	function providers() external view returns (IProviders);
}
