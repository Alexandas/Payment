# AdaptorWrapper



> Resource adaptor wrapper contract

## Globals
| Var | Type |
| --- | --- |
| adaptor | contract IResourceAdaptor |
| resourceType | enum ResourceData.ResourceType |

## Functions
### setResourceAdaptor

> update resource adaptor contract


#### Declaration
```
function setResourceAdaptor(contract IResourceAdaptor _adaptor) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_adaptor` | contract IResourceAdaptor | resource adaptor contract

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


