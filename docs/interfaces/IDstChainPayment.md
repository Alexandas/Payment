# IDstChainPayment



> DstChainPayment interface


## Functions
### payFromSourceChain

> pay from the source chain


#### Declaration
```
function payFromSourceChain(contract IERC20Upgradeable token,uint256 amount,bytes message) external returns (uint256 value)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`token` | contract IERC20Upgradeable | token address
|`amount` | uint256 | token amount
|`message` | bytes | payment payload message

#### Returns:
| Type | Description |
| --- | --- |
|`value` | token used
### pay

> pay on the dst chain


#### Declaration
```
function pay(struct IDstChainPayment.PaymentPayload payload) external returns (uint256 value)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`payload` | struct IDstChainPayment.PaymentPayload | payment payload

#### Returns:
| Type | Description |
| --- | --- |
|`value` | token used

## Events

### Paid

> emit when a user paid

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`payer` | address |  | payer
|`token` | contract IERC20Upgradeable |  | token address
|`payload` | struct IDstChainPayment.PaymentPayload |  | payment payload
