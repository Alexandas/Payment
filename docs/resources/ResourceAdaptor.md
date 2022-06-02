# ResourcePriceAdaptor



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
function initialize(address owner,struct IResourcePriceAdaptor.PriceAdaptor[] adaptors) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`adaptors` | struct IResourcePriceAdaptor.PriceAdaptor[] | price adaptors

### setPriceAdaptors

> update price adaptors


#### Declaration
```
function setPriceAdaptors(struct IResourcePriceAdaptor.PriceAdaptor[] adaptors) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`adaptors` | struct IResourcePriceAdaptor.PriceAdaptor[] | price adaptors


