# IBilling



> Billing interface


## Functions
### billTypedHash

> get bill types hash


#### Declaration
```
function billTypedHash() external returns (bytes32)
```


#### Returns:
| Type | Description |
| --- | --- |
|`type` | hash for bill
### token

> get the pay token


#### Declaration
```
function token() external returns (contract IERC20Upgradeable)
```


#### Returns:
| Type | Description |
| --- | --- |
|`token` | address
### adaptor

> get the resource adaptor


#### Declaration
```
function adaptor() external returns (contract IResourceAdaptor)
```


#### Returns:
| Type | Description |
| --- | --- |
|`resource` | adaptor address

## Events

### BillTypedHashUpdated

> emit when BillTypedHash updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`hash` | bytes32 |  | BillTypedHash
### TokenUpdated

> emit when token updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`token` | contract IERC20Upgradeable |  | token address
### ResourceAdaptorUpdated

> emit when resource adaptor updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`adaptor` | contract IResourceAdaptor |  | resource adaptor address
### Billing

> emit when a bill finalized

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`nonce` | uint64 |  | nonce
|`account` | bytes32 |  | bill's account
|`bill` | bytes |  | bill info
|`amount` | uint256 |  | fee
