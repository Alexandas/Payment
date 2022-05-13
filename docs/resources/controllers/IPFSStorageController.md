# IPFSStorageController



> IPFS storage controller

## Globals
| Var | Type |
| --- | --- |
| ipfsStorage | mapping(bytes32 => struct IIPFSStorageController.IPFSStorage) |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address dstChainPayment,contract IResourceAdaptor adaptor) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`dstChainPayment` | address | dst chain payment contract address
|`adaptor` | contract IResourceAdaptor | resource adaptor contract address

### expand

> expand storage and expiration


#### Declaration
```
function expand(bytes32 account,uint256 expandedStorageFee,uint256 expandedExpirationFee) external onlyDstChainPayment
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account
|`expandedStorageFee` | uint256 | storage fee
|`expandedExpirationFee` | uint256 | expiration fee


