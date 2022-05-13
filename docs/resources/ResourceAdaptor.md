# ResourceAdaptor



> Resource adaptor contract

## Globals
| Var | Type |
| --- | --- |
| indexBlock | uint256 |
| priceTraces | mapping(enum ResourceData.ResourceType => mapping(uint256 => uint256)) |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,struct IResourceAdaptor.PriceAdaptor[] adaptors) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`adaptors` | struct IResourceAdaptor.PriceAdaptor[] | price adaptors

### setPriceAdaptors

> update price adaptors


#### Declaration
```
function setPriceAdaptors(struct IResourceAdaptor.PriceAdaptor[] adaptors) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`adaptors` | struct IResourceAdaptor.PriceAdaptor[] | price adaptors


