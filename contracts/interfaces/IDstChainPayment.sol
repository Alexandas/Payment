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
		ResourceData.ValuePayload[] payloads;
	}

	/// @dev emit when a user paid
	/// @param token token address
	/// @param payload payment payload
	event Paid(IERC20Upgradeable token, PaymentPayload payload);

	/// @dev pay from source chain only called by message receiver
	/// @param _token token address
	/// @param dstAmount token amount
	/// @param message payment payload message bytes
	function payFromSourceChain(
		IERC20Upgradeable _token,
		uint256 dstAmount,
		bytes calldata message
	) external;

	/// @dev pay on dst chain
	/// @param payload payment payload
	/// @return value payment value
	function pay(PaymentPayload memory payload) external returns(uint256 value);

	/// @dev decode source chain message
	/// @param message message bytes
	/// @return provider provider address
	/// @return nonce nonce
	/// @return account user account
	/// @return payloads payment payloads
	function decodeSourceChainMessage(bytes memory message)
		external
		view
		returns (
			address provider,
			uint64 nonce,
			bytes32 account,
			ResourceData.ValuePayload[] memory payloads
		);

	/// @dev calculate fee for ipfs storage and expiration
	/// @param provider provider address
	/// @param account user account
	/// @param amount ipfs storage amount
	/// @param expiration ipfs expiration(in seconds)
	/// @return storageFee ipfs storage fee
	/// @return expirationFee ipfs expiration fee
	function ipfsAlloctionsFee(
		address provider,
		bytes32 account,
		uint256 amount,
		uint256 expiration
	) external view returns (uint256 storageFee, uint256 expirationFee);

	/// @dev calculate ipfs storage and expiration with storage fee and expiration fee
	/// @param provider provider address
	/// @param account user account
	/// @param storageFee storage fee
	/// @param expirationFee expiration fee
	/// @return amount ipfs storage amount
	/// @return expiration ipfs expiration(in seconds)
	function ipfsAllocations(
		address provider,
		bytes32 account,
		uint256 storageFee,
		uint256 expirationFee
	) external view returns (uint256 amount, uint256 expiration);

	function balanceOf(address providerWallet) external view returns (uint256);

}
