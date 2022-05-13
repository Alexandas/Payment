# IProviders



> providers interface


## Functions
### isProvider

> return whether address is a provider


#### Declaration
```
function isProvider(address provider) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### wallets

> return provider wallet


#### Declaration
```
function wallets(address provider) external returns (address)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### isValidSignature

> return whether a valid signature


#### Declaration
```
function isValidSignature(address provider,bytes32 hash,bytes signature) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address
|`hash` | bytes32 | message hash
|`signature` | bytes | provider signature for message hash

#### Returns:
| Type | Description |
| --- | --- |
|`is` | valid signature

## Events

### ProviderUpdated

> emit when provider updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`wallet` | address |  | provider wallet address
### RemoveProvider

> emit when provider removed

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
