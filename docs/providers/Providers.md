# Providers



> providers contract

## Globals
| Var | Type |
| --- | --- |
| providers | mapping(address => bool) |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address[] _providers) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`_providers` | address[] | providers

### addProvider

> add a provider with wallet


#### Declaration
```
function addProvider(address provider) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address

### removeProvider

> remove a provider


#### Declaration
```
function removeProvider(address provider) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | address


