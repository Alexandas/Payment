// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';

import '../resources/ControllersWrapper.sol';
import '../interfaces/IDstChainPayment.sol';
import '../providers/ProvidersWrapper.sol';
import '../messages/MessageReceiverWrapper.sol';
import '../access/OwnerWithdrawable.sol';
import '../access/Pauser.sol';

import './ResourPayloadTool.sol';

contract DstChainPayment is
	IDstChainPayment,
	ResourPayloadTool,
	MessageReceiverWrapper,
	ReentrancyGuardUpgradeable,
	ProvidersWrapper,
	ControllersWrapper,
	OwnerWithdrawable,
	Pauser
{
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	IERC20Upgradeable public token;

	mapping(address => uint256) public providerBalances;

	constructor() initializer {}

	function initialize(
		address owner,
		address pauser,
		IProviders providers,
		address messageReceiver,
		IERC20Upgradeable token
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Providers(providers);
		__Init_Message_Receiver(messageReceiver);
		__Init_Token(token);
	}

	function __Init_Token(IERC20Upgradeable _token) internal onlyInitializing {
		_setToken(_token);
	}

	function payFromSourceChain(
		IERC20Upgradeable _token,
		uint256 dstAmount,
		bytes calldata message
	) external override onlyMessageReceiver whenNotPaused nonReentrant returns (uint256 value) {
		require(token == _token, 'DstChainPayment: invalid token');
		(address provider, uint64 nonce, bytes32 account, ResourceData.Payload[] memory payloads) = decodeSourceChainMessage(message);
		PaymentPayload memory payload = PaymentPayload(provider, nonce, account, _convertSourceChainPayloads(matchResourceDecimals(dstAmount), payloads));
		_processPayloads(payload.account, payload.payloads, false);
		_pay(payload.provider, dstAmount);

		emit Paid(msg.sender, token, payload);
	}

	function pay(PaymentPayload memory payload) public override whenNotPaused nonReentrant returns (uint256 value) {
		value = _processPayloads(payload.account, payload.payloads, true);
		value = matchTokenDecimals(value);
		_pay(payload.provider, value);

		emit Paid(msg.sender, token, payload);
	}

	function _pay(address provider, uint256 amount) internal returns (uint256 value) {
		require(providers.isProvider(provider), 'DstChainPayment: nonexistent provider');
		token.safeTransferFrom(msg.sender, address(this), amount);
		providerBalances[provider] = providerBalances[provider].add(amount);
	}

	function _processPayloads(
		bytes32 account,
		ResourceData.Payload[] memory payloads,
		bool withValue
	) internal returns (uint256 value) {
		require(payloads.length > 0, 'DstChainPayment: invalid payloads');
		for (uint256 i = 0; i < payloads.length; i++) {
			ResourceData.Payload memory payload = payloads[i];
			if (payload.resourceType == ResourceData.ResourceType.BuildingTime) {
				require(payload.values.length == 1, 'DstChainPayment: invalid value length for BuildingTime');
				buildingTimeController.expand(account, payload.values[0]);
			} else if (payload.resourceType == ResourceData.ResourceType.ARStorage) {
				require(payload.values.length == 1, 'DstChainPayment: invalid value length for ARStorage');
				arStorageController.expand(account, payload.values[0]);
			} else if (payload.resourceType == ResourceData.ResourceType.Bandwidth) {
				require(payload.values.length == 1, 'DstChainPayment: invalid value length for Bandwidth');
				bandwidthController.expand(account, payload.values[0]);
			} else if (payload.resourceType == ResourceData.ResourceType.IPFSStorage) {
				require(payload.values.length == 2, 'DstChainPayment: invalid value length for IPFSStorage');
				ipfsStorageController.expand(account, payload.values[0], payload.values[1]);
			} else {
				revert('DstChainPayment: unknown resource type');
			}
			if (withValue) {
				for (uint256 j = 0; j < payload.values.length; j++) {
					value = value.add(payload.values[0]);
				}
			}
		}
	}

	function matchResourceDecimals(uint256 amount) internal view returns (uint256 value) {
		return amount.mul(10**12);
	}

	function matchTokenDecimals(uint256 amount) internal view returns (uint256 value) {
		return amount.div(10**12);
	}

	function setToken(IERC20Upgradeable _token) external onlyOwner {
		_setToken(_token);
	}

	function _setToken(IERC20Upgradeable _token) internal {
		token = _token;
		emit TokenUpdated(_token);
	}

	function convertSourceChainPayloads(uint256 amount, ResourceData.Payload[] memory payloads) public view returns (ResourceData.Payload[] memory) {
		return _convertSourceChainPayloads(amount, payloads);
	}

	function decodeSourceChainMessage(bytes memory message)
		public
		view
		returns (
			address provider,
			uint64 nonce,
			bytes32 account,
			ResourceData.Payload[] memory payloads
		)
	{
		(provider, nonce, account, payloads) = abi.decode(message, (address, uint64, bytes32, ResourceData.Payload[]));
	}
}
