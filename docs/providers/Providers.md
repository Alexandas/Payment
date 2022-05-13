# Providers



> providers contract

## Globals
| Var | Type |
| --- | --- |
| providers | mapping(address => bool) |
| wallets | mapping(address => address) |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address[] _providers,address[] _wallets) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`_providers` | address[] | providers
|`_wallets` | address[] | wallets for providers

### setWallet

> update wallet for provider


#### Declaration
```
function setWallet(address wallet) external onlyProvider
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`wallet` | address | wallet for provider

### addProvider

> add a provider with wallet


#### Declaration
```
function addProvider(address provider,address wallet) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address
|`wallet` | address | wallet for provider

### removeProvider

> remove a provider


#### Declaration
```
function removeProvider(address provider) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address


