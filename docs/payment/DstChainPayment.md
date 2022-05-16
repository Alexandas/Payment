# DstChainPayment



> Celer SGN source chain sender contract


## Functions
### initialize

> proxy initialize function


#### Declaration
```
function initialize(address owner,address pauser,contract IProviders providers,address messageReceiver,contract IERC20Upgradeable token) external initializer
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`owner` | address | contract owner
|`pauser` | address | contract pauser
|`providers` | contract IProviders | providers contract
|`messageReceiver` | address | message receiver contract address
|`token` | contract IERC20Upgradeable | token address

### payFromSourceChain

> pay from source chain only called by message receiver


#### Declaration
```
function payFromSourceChain(contract IERC20Upgradeable _token,uint256 dstAmount,bytes message) external onlyMessageReceiver whenNotPaused nonReentrant returns (uint256 value)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_token` | contract IERC20Upgradeable | token address
|`dstAmount` | uint256 | token amount
|`message` | bytes | payment payload message bytes

#### Returns:
| Type | Description |
| --- | --- |
|`value` | payment value
### setToken

> set token address


#### Declaration
```
function setToken(contract IERC20Upgradeable _token) external onlyOwner
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_token` | contract IERC20Upgradeable | token address


