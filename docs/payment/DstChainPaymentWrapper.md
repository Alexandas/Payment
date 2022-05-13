# DstChainPaymentWrapper



> dst chain payment wrapper

## Globals
| Var | Type |
| --- | --- |
| dstChainPayment | address |

## Functions
### setDstChainPayment

> update dst chain payment contract address


#### Declaration
```
function setDstChainPayment(address _dstChainPayment) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_dstChainPayment` | address | dst chain payment contract address


## Events

### DstChainPaymentUpdated

> emit when dst chain payment contract address updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`dstChainPayment` | address |  | dst chain payment contract address
