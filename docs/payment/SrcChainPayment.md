# SrcChainPayment



> source chain payment contract

## Globals
| Var | Type |
| --- | --- |
| messageSender | contract IMessageSender |

## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address pauser,contract IMessageSender _messageSender,contract IERC20Upgradeable token) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`pauser` | address | contract pauser
|`_messageSender` | contract IMessageSender | messageSender address
|`token` | contract IERC20Upgradeable | token address

### pay

> pay from source chain


#### Declaration
```
function pay(address provider,uint64 nonce,bytes32 account,struct ResourceData.Payload[] payloads,uint32 maxSlippage) external whenNotPaused nonReentrant returns (bytes32 transferId)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`nonce` | uint64 | nonce
|`account` | bytes32 | sender
|`payloads` | struct ResourceData.Payload[] | payment payloads
|`maxSlippage` | uint32 | maxSlippage in cBridge

#### Returns:
| Type | Description |
| --- | --- |
|`transferId` | token transfer id in cBridge
### setMessageSender

> update message sender


#### Declaration
```
function setMessageSender(contract IMessageSender _messageSender) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_messageSender` | contract IMessageSender | message sender address

### setToken

> update token


#### Declaration
```
function setToken(contract IERC20Upgradeable _token) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_token` | contract IERC20Upgradeable | token address


## Events

### MessageSenderUpdated

> emit when message sender updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`messageSender` | contract IMessageSender |  | messageSender address
### Paid

> emit when user paid on src chain

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`nonce` | uint64 |  | nonce
|`account` | bytes32 |  | sender
|`payloads` | struct ResourceData.Payload[] |  | payment payloads
|`maxSlippage` | uint32 |  | maxSlippage in cBridge
