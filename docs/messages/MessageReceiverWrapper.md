# MessageReceiverWrapper



> dst chain message receiver wrapper

## Globals
| Var | Type |
| --- | --- |
| messageReceiver | address |

## Functions
### setMessageReceiver

> set messageReceiver contract address


#### Declaration
```
function setMessageReceiver(address _messageReceiver) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_messageReceiver` | address | message receiver contract address


## Events

### MessageReceiverUpdated

> emit when message receiver updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`messageReceiver` | address |  | message receiver contract address
