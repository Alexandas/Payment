// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';

import './Billing.sol';
import '../interfaces/IFundWallet.sol';
import '../access/OwnerWithdrawable.sol';

contract FundWallet is IFundWallet, Billing, OwnerWithdrawable, ReentrancyGuardUpgradeable {
	using SafeMathUpgradeable for uint256;
	using SafeERC20Upgradeable for IERC20Upgradeable;

	mapping(address => mapping(bytes32 => Wallet)) internal wallets;

	mapping(address => mapping(uint64 => bool)) internal nonces;

	modifier onlyWalletOwner(address provider, bytes32 account) {
		require(wallets[provider][account].owner == msg.sender, 'FundWallet: caller is not wallet owner');
		_;
	}

	modifier nonNonce(address provider, uint64 nonce) {
		require(!nonces[provider][nonce], 'FundWallet: invalid nonce');
		_;
	}

	constructor(
		address owner,
		address pauser,
		IProviders _providers,
		IERC20Upgradeable _token
	) initializer {
		_transferOwnership(owner);
		__Init_Pauser(pauser);
		__Init_Providers(_providers);
		__Init_Token(_token);
	}

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
		uint64 nonce,
		address owner,
		bytes32 account,
		uint256 amount,
		bytes memory signature
	) external override nonNonce(provider, nonce) whenNotPaused nonReentrant {
		bytes32 hash = keccak256(abi.encodePacked(provider, nonce, owner, account, amount));
		require(providers.isValidSignature(provider, hash, signature), 'FundWallet: invalid signature');
		if (wallets[provider][account].owner == address(0)) {
			wallets[provider][account].owner = owner;
		}
		wallets[provider][account].amount = wallets[provider][account].amount.add(amount);
		token.safeTransferFrom(msg.sender, address(this), amount);

		emit Charge(provider, nonce, owner, account, amount);
	}

	function spend(
		address provider,
		uint64 nonce,
		bytes32 account,
		bytes memory bill,
		bytes memory signature
	) external override nonNonce(provider, nonce) whenNotPaused nonReentrant returns (uint256 fee) {
		fee = _spend(provider, nonce, account, bill, signature);
		wallets[provider][account].amount = wallets[provider][account].amount.sub(fee);

		emit Spend(provider, nonce, account, fee, wallets[provider][account].amount);
	}

	function withdraw(
		address provider,
		uint64 nonce,
		bytes32 account,
		address to,
		bytes memory bill,
		bytes memory signature
	) external override nonNonce(provider, nonce) onlyWalletOwner(provider, account) whenNotPaused nonReentrant returns (uint256 amount) {
		uint256 fee = _spend(provider, nonce, account, bill, signature);
		amount = wallets[provider][account].amount.sub(fee);
		token.safeTransfer(to, amount);
		wallets[provider][account].amount = 0;

		emit Withdrawn(provider, nonce, account, to, amount);
	}

	function transferWalletOwner(address provider, bytes32 account, address newOwner, bytes memory signature) external override whenNotPaused onlyWalletOwner(provider, account) {
		bytes32 hash = keccak256(abi.encodePacked(provider, newOwner, account));
		require(providers.isValidSignature(provider, hash, signature), 'FundWallet: invalid signature');
		wallets[provider][account].owner = newOwner;

		emit WalletOwnerTransferred(provider, account, newOwner);
	}

	function ownerOf(address provider, bytes32 account) public view override returns (address) {
		return wallets[provider][account].owner;
	}

	function balanceOf(address provider, bytes32 account) public view override returns (uint256) {
		return wallets[provider][account].amount;
	}

	function setToken(IERC20Upgradeable _token) external onlyOwner {
		_setToken(_token);
	}

}
