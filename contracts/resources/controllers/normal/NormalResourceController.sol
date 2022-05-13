// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '../../AdaptorWrapper.sol';
import '../../interfaces/INormalResourceController.sol';
import '../../../payment/DstChainPaymentWrapper.sol';

/// @author Alexandas
/// @dev Normal resource controller
abstract contract NormalResourceController is INormalResourceController, DstChainPaymentWrapper, AdaptorWrapper {
	using SafeMathUpgradeable for uint256;

	/// @dev resource balances for account 
	mapping(bytes32 => uint256) internal balances;

	constructor() initializer {}

	/// @dev proxy initialize function
	/// @param owner contract owner
	/// @param dstChainPayment dst chain payment contract address
	/// @param adaptor resource adaptor contract address
	function __Init_Normal_Resource_Controller(
		address owner,
		address dstChainPayment,
		IResourceAdaptor adaptor,
		ResourceData.ResourceType resourceType
	) internal onlyInitializing {
		_transferOwnership(owner);
		__Init_Dst_Chain_Payment(dstChainPayment);
		__Init_Resource_Adaptor(adaptor);
		__Init_Resource_Type(resourceType);
	}

	/// @dev expand user's normal resource balance
	/// @param account user account
	/// @param value token value in resource decimals(18)
	function expand(bytes32 account, uint256 value) external override onlyDstChainPayment {
		uint256 amount = getAmountOf(value);
		balances[account] = balances[account].add(amount);
		emit Expanded(account, value);
	}

	/// @dev resource balance
	/// @param account user account
	/// @return balance of the account
	function balanceOf(bytes32 account) public view override returns(uint256) {
		return balances[account];
	}
}
