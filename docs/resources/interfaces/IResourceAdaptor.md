# IResourceAdaptor



> resource adpator interface


## Functions
### priceAt

> get price for resource at a specific block


#### Declaration
```
function priceAt(enum ResourceData.ResourceType resourceType,uint256 _indexBlock) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`resourceType` | enum ResourceData.ResourceType | resource type
|`_indexBlock` | uint256 | block number

#### Returns:
| Type | Description |
| --- | --- |
|`price` | for resource at a specific block
### getValueAt

> get value for `amount` resource at a specific block


#### Declaration
```
function getValueAt(enum ResourceData.ResourceType resourceType,uint256 amount,uint256 _indexBlock) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`resourceType` | enum ResourceData.ResourceType | resource type
|`amount` | uint256 | resource amount
|`_indexBlock` | uint256 | block number

#### Returns:
| Type | Description |
| --- | --- |
|`token` | value in resource decimals(18)
### getAmountAt

> get amount resource with value at a specific block


#### Declaration
```
function getAmountAt(enum ResourceData.ResourceType resourceType,uint256 value,uint256 _indexBlock) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`resourceType` | enum ResourceData.ResourceType | resource type
|`value` | uint256 | token value
|`_indexBlock` | uint256 | block numer

#### Returns:
| Type | Description |
| --- | --- |
|`resource` | amount
### priceOf

> return resource price


#### Declaration
```
function priceOf(enum ResourceData.ResourceType resourceType) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`resourceType` | enum ResourceData.ResourceType | resource type

#### Returns:
| Type | Description |
| --- | --- |
|`resource` | price
### getValueOf

> return value of amount resource


#### Declaration
```
function getValueOf(enum ResourceData.ResourceType resourceType,uint256 amount) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`resourceType` | enum ResourceData.ResourceType | resource type
|`amount` | uint256 | resource amount

#### Returns:
| Type | Description |
| --- | --- |
|`token` | value in resource decimals(18)
### getAmountOf

> return resource amount with value


#### Declaration
```
function getAmountOf(enum ResourceData.ResourceType resourceType,uint256 value) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`resourceType` | enum ResourceData.ResourceType | resource type
|`value` | uint256 | token value in resource decimals(18)

#### Returns:
| Type | Description |
| --- | --- |
|`resource` | amount

## Events

### PriceAdaptorsUpdated

> emit when price updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`adaptors` | struct IResourceAdaptor.PriceAdaptor[] |  | price adaptors
