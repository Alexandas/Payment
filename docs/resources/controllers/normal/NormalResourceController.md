# NormalResourceController



> Normal resource controller

## Globals
| Var | Type |
| --- | --- |
| balances | mapping(bytes32 => uint256) |

## Functions
### expand

> expand user's normal resource balance


#### Declaration
```
function expand(bytes32 account,uint256 value) external onlyDstChainPayment
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account
|`value` | uint256 | token value in resource decimals(18)


