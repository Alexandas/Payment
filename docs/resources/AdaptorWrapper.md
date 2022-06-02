# AdaptorWrapper



> Resource adaptor wrapper contract

## Globals
| Var | Type |
| --- | --- |
| adaptor | contract IResourcePriceAdaptor |
| resourceType | enum ResourceData.ResourceType |

## Functions
### setResourcePriceAdaptor

> update resource adaptor contract


#### Declaration
```
function setResourcePriceAdaptor(contract IResourcePriceAdaptor _adaptor) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_adaptor` | contract IResourcePriceAdaptor | resource adaptor contract

### setResourceType

> update resource type


#### Declaration
```
function setResourceType(enum ResourceData.ResourceType _resourceType) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_resourceType` | enum ResourceData.ResourceType | resource type


