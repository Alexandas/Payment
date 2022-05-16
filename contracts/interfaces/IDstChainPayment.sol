// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev DstChainPayment interface
interface IDstChainPayment {

	struct PaymentPayload {
		address provider;
		uint64 nonce;
		bytes32 account;
		ResourceData.Payload[] payloads;
	}

	/// @dev emit when a user paid
	/// @param payer payer
	/// @param token token address
	/// @param payload payment payload
	event Paid(address payer, IERC20Upgradeable token, PaymentPayload payload);

	/// @dev pay from the source chain
	/// @param token token address
	/// @param amount token amount
	/// @param message payment payload message
	/// @return value token used
	function payFromSourceChain(
		IERC20Upgradeable token,
		uint256 amount,
		bytes calldata message
	) external returns (uint256 value);

	/// @dev pay on the dst chain
	/// @param payload payment payload
	/// @return value token used
	function pay(PaymentPayload memory payload) external returns (uint256 value);

}
