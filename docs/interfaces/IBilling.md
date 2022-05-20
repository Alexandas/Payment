# IBilling



> Billing interface


## Functions
### billsTypedHash

> get bills types hash


#### Declaration
```
function billsTypedHash() external returns (bytes32)
```


#### Returns:
| Type | Description |
| --- | --- |
|`type` | hash for bills
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

### BillsTypedHashUpdated

> emit when BillTypedHash updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`hash` | bytes32 |  | BillTypedHash
### ResourceAdaptorUpdated

> emit when resource adaptor updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`adaptor` | contract IResourceAdaptor |  | resource adaptor address
### Billing

> emit when bills finalized

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`nonce` | uint64 |  | nonce
|`account` | bytes32 |  | user account
|`bills` | bytes |  | bills data
|`amount` | uint256 |  | fee
