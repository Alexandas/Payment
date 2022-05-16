// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '../libraries/ResourceData.sol';

/// @author Alexandas
/// @dev resource payload tool contract
abstract contract ResourPayloadTool {
	using SafeMathUpgradeable for uint256;

	/// @dev convert source chain payment payload into dst chain payment payload
	/// @param dstAmount token amount
	/// @param payloads source chain payment payload
	/// @return newPayloads dst chain payment payload
	function _convertSourceChainPayloads(uint256 dstAmount, ResourceData.Payload[] memory payloads) internal pure returns (ResourceData.Payload[] memory newPayloads) {
		require(payloads.length > 0, 'ResourPayloadTool: invalid payload length');
		uint256 total = totalValue(payloads);
		require(total > 0, 'ResourPayloadTool: zero total value');
		for (uint256 i = 0; i < payloads.length; i++) {
			require(payloads[i].values.length > 0, 'ResourPayloadTool: invalid value length');
			for (uint256 j = 0; j < payloads[i].values.length; j++) {
				payloads[i].values[j] = payloads[i].values[j].mul(dstAmount).div(total);
			}
		}
		return payloads;
	}

	/// @dev payment payload total value
	/// @param payloads payment payloads
	/// @return value total value
	function totalValue(ResourceData.Payload[] memory payloads) public pure returns (uint256 value) {
		require(payloads.length > 0, 'ResourPayloadTool: invalid payloads length');
		for (uint256 i = 0; i < payloads.length; i++) {
			for (uint256 j = 0; j < payloads[i].values.length; j++) {
				value = value.add(payloads[i].values[j]);
			}
		}
	}

}
