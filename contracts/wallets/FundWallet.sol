// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/interfaces/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';

import './Billing.sol';
import '../interfaces/IFundWallet.sol';

contract FundWallet is IFundWallet, Billing, ReentrancyGuardUpgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	IERC20Upgradeable public override token;

	mapping(uint256 => bool) public nonces;

	mapping(bytes32 => Wallet) internal wallets;

	constructor() initializer {}

	function initialize(
		address owner,
		address pauser,
		IProviders _providers,
		IERC20Upgradeable _token
	) external initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Providers(_providers);
		__Init_Token(_token);
	}

	function __Init_Token(IERC20Upgradeable _token) internal onlyInitializing {
		_setToken(_token);
	}

	function charge(
		address provider,
		uint256 nonce,
		address owner,
		bytes32 account,
		uint256 amount,
		bytes memory signature
	) external override whenNotPaused nonReentrant {
		bytes32 hash = keccak256(abi.encodePacked(provider, nonce, owner, account, amount));
		require(providers.isValidSignature(provider, hash, signature), 'ChargeWallet: invalid signature');
		if (wallets[account].owner == address(0)) {
			wallets[account].owner = owner;
		}
		wallets[account].amount = wallets[account].amount.add(amount);
		token.safeTransferFrom(msg.sender, address(this), amount);

		emit Charge(provider, nonce, owner, account, amount);
	}

	function spend(
		address provider,
		uint256 nonce,
		bytes32 account,
		address to,
		bytes memory bill,
		bytes memory signature
	) external override {
		require(providers.isProvider(msg.sender), 'FundWallet: caller is not a provider');
		bytes32 hash = keccak256(abi.encodePacked(provider, nonce, account, to, bill));

		require(wallets[account].amount > 0, 'FundWallet: insufficient balance');
		if (wallets[account].amount > fee) {
			wallets[account].amount = wallets[account].amount.sub(fee);
		} else {
			wallets[account].amount = 0;
		}

		emit Spend(account, wallets[account].amount > fee ? fee : wallets[account].amount);
	}

	function withdraw(
		address provider,
		uint256 nonce,
		bytes32 account,
		address to,
		bytes memory bill,
		bytes memory signature
	) external override nonNonce(nonce) onlyWalletOwner(account) whenNotPaused nonReentrant returns (uint256 amount) {
		bytes32 hash = keccak256(abi.encodePacked(provider, nonce, account, to, bill));
		require(providers.isValidSignature(provider, hash, signature), 'FundWallet: invalid signature');
		uint256 balance = balanceOf(account);
		uint256 value = _validateBill(bill);
		if (balance > value) {
			amount = balance.sub(value);
			wallets[account].amount = amount;
			token.safeTransfer(to, amount);
		} else {
			wallets[account].amount = 0;
		}

		emit Withdrawn(provider, nonce, account, to, amount);
	}

	function transferWalletOwner(bytes32 account, address newOwner) external override whenNotPaused onlyWalletOwner(account) {
		wallets[account].owner = newOwner;
		emit WalletOwnerTransferred(account, newOwner);
	}

	function ownerOf(bytes32 account) public view override returns (address) {
		return wallets[account].owner;
	}

	function balanceOf(bytes32 account) public view override returns (uint256) {
		return wallets[account].amount;
	}

	function _setToken(IERC20Upgradeable _token) internal {
		token = _token;
		emit TokenUpdated(_token);
	}

	modifier nonNonce(uint256 nonce) {
		require(nonces[nonce], 'FundWallet: nonce too low');
		_;
	}

	modifier onlyWalletOwner(bytes32 account) {
		require(wallets[account].owner == msg.sender, 'FundWallet: caller is not binding account');
		_;
	}
}
