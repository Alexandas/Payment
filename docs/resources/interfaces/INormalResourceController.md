# INormalResourceController



> normal resource controller interface


## Functions
### expand

> expand user's normal resource balance


#### Declaration
```
function expand(bytes32 account,uint256 value) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account
|`value` | uint256 | token value in resource decimals(18)

### balanceOf

> resource balance


#### Declaration
```
function balanceOf(bytes32 account) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`balance` | of the account

## Events

### Expanded

> emit when resource expanded

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`account` | bytes32 |  | user account
|`value` | uint256 |  | token value for resource decimals
