# ControllersWrapper



> all resource controller wrapper contract

## Globals
| Var | Type |
| --- | --- |
| buildingTimeController | contract INormalResourceController |
| bandwidthController | contract INormalResourceController |
| arStorageController | contract INormalResourceController |
| ipfsStorageController | contract IIPFSStorageController |

## Functions
### setBuildingTimeController

> update building time controller contract


#### Declaration
```
function setBuildingTimeController(contract INormalResourceController _buildingTimeController) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_buildingTimeController` | contract INormalResourceController | building time controller contract

### setBandwidthController

> update bandwidth controller contract


#### Declaration
```
function setBandwidthController(contract INormalResourceController _bandwidthController) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_bandwidthController` | contract INormalResourceController | bandwidth controller contract

### setARStorageController

> update AR storage controller contract


#### Declaration
```
function setARStorageController(contract INormalResourceController _arStorageController) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_arStorageController` | contract INormalResourceController | AR storage controller contract

### setIPFSStorageController

> update ipfs storage controller contract


#### Declaration
```
function setIPFSStorageController(contract IIPFSStorageController _ipfsStorageController) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_ipfsStorageController` | contract IIPFSStorageController | IPFS storage controller contract


## Events

### BuildingTimeControllerUpdated

> emit when building time controller updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`_buildingTimeController` | contract INormalResourceController |  | building time controller contract
### BandwidthControllerUpdated

> emit when bandwidth controller updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`_bandwidthController` | contract INormalResourceController |  | bandwidth controller contract
### ARStorageControllerUpdated

> emit when AR storage controller updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`_arStorageController` | contract INormalResourceController |  | AR storage controller contract
### IPFSStorageControllerUpdated

> emit when ipfs storage controller updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`_ipfsStorageController` | contract IIPFSStorageController |  | IPFS storage controller contract
