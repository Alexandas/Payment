# ContentTracer



> IPFS content tracer

## Globals
| Var | Type |
| --- | --- |
| controller | contract IIPFSStorageController |
| defaultExpiration | uint256 |
| contentSizes | mapping(address => mapping(bytes32 => mapping(string => uint256))) |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,contract IProviders providers,contract IIPFSStorageController controller,uint256 defaultExpiration) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`providers` | contract IProviders | providers contract address
|`controller` | contract IIPFSStorageController | ipfs storage controller
|`defaultExpiration` | uint256 | ipfs content default expiration

### setController

> update ipfs storage controller


#### Declaration
```
function setController(contract IIPFSStorageController _controller) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_controller` | contract IIPFSStorageController | ipfs storage controller

### setDefaultExpiration

> update ipfs content default expiration


#### Declaration
```
function setDefaultExpiration(uint256 expiration) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`expiration` | uint256 | ipfs content default expiration

### insertMult

> insert multiple ipfs content for accounts


#### Declaration
```
function insertMult(bytes32[] accounts,string[] contents,uint256[] sizes) external onlyProvider
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`accounts` | bytes32[] | array of user account
|`contents` | string[] | array of ipfs contents
|`sizes` | uint256[] | array of ipfs content size

### removeMult

> remove ipfs content


#### Declaration
```
function removeMult(bytes32[] accounts,string[] contents) external onlyProvider
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`accounts` | bytes32[] | array of user account
|`contents` | string[] | array of ipfs contents


## Events

### ControllerUpdated

> emit when ipfs storage controller updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`controller` | contract IIPFSStorageController |  | ipfs storage controller
### DefaultExpirationUpdated

> emit when default expiration updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`expiration` | uint256 |  | default ipfs content expiration
### Insert

> emit when ipfs content inserted

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`content` | string |  | ipfs content
|`size` | uint256 |  | ipfs content size
|`expiration` | uint256 |  | ipfs content expiration
### Remove

> emit when ipfs content removed

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`content` | string |  | ipfs content
