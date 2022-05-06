// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '../libraries/ResourceData.sol';

interface IDstChainPayment {

	struct PaymentPayload {
		address provider;
		uint64 nonce;
		bytes32 account;
		ResourceData.Payload[] payloads;
	}

	event TokenUpdated(IERC20Upgradeable token);

	event Paid(address payer, IERC20Upgradeable token, PaymentPayload payload);

	event ProvidetWithdraw(address provider, IERC20Upgradeable token, address to, uint256 value);

	function payFromSourceChain(
		IERC20Upgradeable token,
		uint256 amount,
		bytes calldata message
	) external returns (uint256 value);

	function pay(PaymentPayload memory payload) external returns (uint256 value);

}
