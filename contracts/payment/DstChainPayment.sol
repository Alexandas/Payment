// SPDX-License-Identifier: GPL-3.0-only

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';

import '../resources/ControllersWrapper.sol';
import '../interfaces/IDstChainPayment.sol';
import '../providers/ProvidersWrapper.sol';
import '../messages/MessageReceiverWrapper.sol';
import '../access/OwnerWithdrawable.sol';
import './ResourPayloadTool.sol';

contract DstChainPayment is
	IDstChainPayment,
	ResourPayloadTool,
	MessageReceiverWrapper,
	ReentrancyGuardUpgradeable,
	ProvidersWrapper,
	ControllersWrapper,
	OwnerWithdrawable
{
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	IERC20Upgradeable public token;

	mapping(address => uint256) public providerBalances;

	constructor(
		address owner,
		address pauser,
		IProviders providers,
		address messageReceiver,
		IERC20Upgradeable token
	) initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Providers(providers);
		__Init_Message_Receiver(messageReceiver);
		__Init_Token(token);
	}

	function Init_Payment(
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

	function convertSourceChainPayloads(uint256 amount, ResourceData.Payload[] memory payloads) public view returns (ResourceData.Payload[] memory) {
		return _convertSourceChainPayloads(amount, payloads);
	}

	function payFromSourceChain(
		IERC20Upgradeable _token,
		uint256 dstAmount,
		bytes calldata message
	) external override onlyMessageReceiver whenNotPaused nonReentrant returns (uint256 value) {
		require(token == _token, 'DstChainPayment: invalid token');
		(address provider, uint64 nonce, bytes32 account, ResourceData.Payload[] memory payloads) = decodeSourceChainMessage(message);
		PaymentPayload memory payload = PaymentPayload(provider, nonce, account, _convertSourceChainPayloads(matchResourceDecimals(dstAmount), payloads));
		return _pay(payload);
	}

	function pay(PaymentPayload memory payload) public override whenNotPaused nonReentrant returns (uint256 value) {
		return _pay(payload);
	}

	function _pay(PaymentPayload memory payload) internal returns (uint256 value) {
		require(providers.isProvider(payload.provider), 'DstChainPayment: nonexistent provider');
		value = _processPayloads(payload.account, payload.payloads);
		value = matchTokenDecimals(value);
		token.safeTransferFrom(msg.sender, address(this), value);
		providerBalances[payload.provider] = providerBalances[payload.provider].add(value);

		emit Paid(msg.sender, token, payload);
	}

	function _processPayloads(bytes32 account, ResourceData.Payload[] memory payloads) internal returns (uint256 value) {
		require(payloads.length > 0, 'DstChainPayment: invalid payloads');
		for (uint256 i = 0; i < payloads.length; i++) {
			ResourceData.Payload memory payload = payloads[i];
			if (payload.resourceType == ResourceData.ResourceType.BuildingTime) {
				value = value.add(_processNormalResource(buildingTimeController, account, payload));
			} else if (payload.resourceType == ResourceData.ResourceType.ARStorage) {
				value = value.add(_processNormalResource(arStorageController, account, payload));
			} else if (payload.resourceType == ResourceData.ResourceType.Bandwidth) {
				value = value.add(_processNormalResource(bandwidthController, account, payload));
			} else if (payload.resourceType == ResourceData.ResourceType.IPFSStorage) {
				value = value.add(_processIPFSStorage(ipfsStorageController, account, payload));
			} else {
				revert('DstChainPayment: unknown resource type');
			}
		}
	}

	function matchResourceDecimals(uint256 amount) internal view returns (uint256 value) {
		return amount.mul(10**12);
	}

	function matchTokenDecimals(uint256 amount) internal view returns (uint256 value) {
		return amount.div(10**12);
	}

	function _processNormalResource(
		INormalResourceController controller,
		bytes32 account,
		ResourceData.Payload memory payload
	) internal returns (uint256 value) {
		require(payload.values.length == 1, 'DstChainPayment: invalid token value length');
		return controller.expand(account, payload.values[0]);
	}

	function _processIPFSStorage(
		IIPFSStorageController controller,
		bytes32 account,
		ResourceData.Payload memory payload
	) internal returns (uint256 value) {
		require(payload.values.length == 2, 'DstChainPayment: invalid token value length');
		return controller.expand(account, payload.values[0], payload.values[1]);
	}

	function providerWithdraw(
		IERC20Upgradeable token,
		address to,
		uint256 value
	) external whenNotPaused nonReentrant {
		require(providers.isProvider(msg.sender), 'DstChainPayment: caller is not a provider');
		require(providerBalances[msg.sender] >= value, 'DstChainPayment: insufficient provider balance');
		providerBalances[msg.sender] = providerBalances[msg.sender].sub(value);
		token.safeTransfer(to, value);

		emit ProvidetWithdraw(msg.sender, token, to, value);
	}

	function setToken(IERC20Upgradeable _token) external onlyOwner {
		_setToken(_token);
	}

	function _setToken(IERC20Upgradeable _token) internal {
		token = _token;
		emit TokenUpdated(_token);
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
