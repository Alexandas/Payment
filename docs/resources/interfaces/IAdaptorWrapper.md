# IAdaptorWrapper



> resource adaptor interface


## Functions
### adaptor

> return resource adaptor contract address

#### Declaration
```
function adaptor() external returns (contract IResourceAdaptor)
```



### resourceType

> return resource type

#### Declaration
```
function resourceType() external returns (enum ResourceData.ResourceType)
```



### price

> return resource price

#### Declaration
```
function price() external returns (uint256)
```



### getValueOf

> calculate resource value for amount

#### Declaration
```
function getValueOf() external returns (uint256)
```



### getAmountOf

> calculate resource amount for value

#### Declaration
```
function getAmountOf() external returns (uint256)
```




## Events

### ResourceAdaptorUpdated

> emit when resource adaptor updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`adaptor` | contract IResourceAdaptor |  | resource adaptor contract address
### ResourceTypeUpdated

> emit when resource type updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`resourceType` | enum ResourceData.ResourceType |  | resource type
