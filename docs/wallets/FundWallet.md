# FundWallet



> FundWallet contract

## Globals
| Var | Type |
| --- | --- |
| rechargeTypedHash | bytes32 |
| nonces | mapping(address => mapping(bytes32 => mapping(uint64 => enum IFundWallet.Purpose))) |
| wallets | mapping(address => mapping(bytes32 => struct IFundWallet.Wallet)) |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address pauser,contract IResourceAdaptor adaptor,contract IProviders _providers,contract IERC20Upgradeable _token,string name,string version,string rechargeTypes,string billsTypes) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`pauser` | address | contract pauser
|`adaptor` | contract IResourceAdaptor | resource adaptor contract address
|`_providers` | contract IProviders | providers contract address
|`_token` | contract IERC20Upgradeable | token address
|`name` | string | EIP712 domain name
|`version` | string | EIP712 domain version
|`rechargeTypes` | string | recharge types
|`billsTypes` | string | bills types

### recharge

> recharge for account


#### Declaration
```
function recharge(address provider,uint64 nonce,bytes32 account,uint256 amount,bytes signature) external nonNonce whenNotPaused nonReentrant
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`nonce` | uint64 | nonce
|`account` | bytes32 | user account
|`amount` | uint256 | token amount
|`signature` | bytes | provider signature

### spend

> spend bills for account


#### Declaration
```
function spend(address provider,uint64 nonce,bytes32 account,bytes bills,uint256 expiration,bytes signature, fee) external nonNonce whenNotPaused nonReentrant returns (uint256 fee)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`nonce` | uint64 | nonce
|`account` | bytes32 | user account
|`bills` | bytes | bills bytes
|`expiration` | uint256 | tx expiration
|`signature` | bytes | provider signature
|`fee` |  | bills fee

### withdraw

> withdraw token for account


#### Declaration
```
function withdraw(struct IBilling.Payload payload,address to,uint256 amount,bytes signature) external nonNonce onlyWalletOwner whenNotPaused nonReentrant returns (uint256 fee)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`payload` | struct IBilling.Payload | bill payload
|`to` | address | token receiver
|`amount` | uint256 | token amount
|`signature` | bytes | provider signature

#### Returns:
| Type | Description |
| --- | --- |
|`fee` | bill fee
### transferWalletOwner

> transfer wallet owner for account


#### Declaration
```
function transferWalletOwner(address provider,bytes32 account,address newOwner) external whenNotPaused onlyWalletOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`newOwner` | address | new wallet owner for account

### setRechargeTypedHash

> update recharge typed hash


#### Declaration
```
function setRechargeTypedHash(string types) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`types` | string | recharge types

### setBillsTypedHash

> update bills typed hash


#### Declaration
```
function setBillsTypedHash(string types) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`types` | string | bills types

### setToken

> update token


#### Declaration
```
function setToken(contract IERC20Upgradeable _token) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_token` | contract IERC20Upgradeable | token address


