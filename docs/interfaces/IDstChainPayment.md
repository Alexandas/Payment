# IDstChainPayment



> DstChainPayment interface


## Functions
### payFromSourceChain

> pay from source chain only called by message receiver


#### Declaration
```
function payFromSourceChain(contract IERC20Upgradeable _token,uint256 dstAmount,bytes message) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`_token` | contract IERC20Upgradeable | token address
|`dstAmount` | uint256 | token amount
|`message` | bytes | payment payload message bytes

### pay

> pay on dst chain


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
|`value` | payment value
### decodeSourceChainMessage

> decode source chain message


#### Declaration
```
function decodeSourceChainMessage(bytes message) external returns (address provider, uint64 nonce, bytes32 account, struct ResourceData.ValuePayload[] payloads)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`message` | bytes | message bytes

#### Returns:
| Type | Description |
| --- | --- |
|`provider` | provider address
|`nonce` | nonce
|`account` | user account
|`payloads` | payment payloads
### ipfsAlloctionsFee

> calculate fee for ipfs storage and expiration


#### Declaration
```
function ipfsAlloctionsFee(address provider,bytes32 account,uint256 amount,uint256 expiration) external returns (uint256 storageFee, uint256 expirationFee)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`amount` | uint256 | ipfs storage amount
|`expiration` | uint256 | ipfs expiration(in seconds)

#### Returns:
| Type | Description |
| --- | --- |
|`storageFee` | ipfs storage fee
|`expirationFee` | ipfs expiration fee
### ipfsAllocations

> calculate ipfs storage and expiration with storage fee and expiration fee


#### Declaration
```
function ipfsAllocations(address provider,bytes32 account,uint256 storageFee,uint256 expirationFee) external returns (uint256 amount, uint256 expiration)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`storageFee` | uint256 | storage fee
|`expirationFee` | uint256 | expiration fee

#### Returns:
| Type | Description |
| --- | --- |
|`amount` | ipfs storage amount
|`expiration` | ipfs expiration(in seconds)
### balanceOf



#### Declaration
```
function balanceOf() external returns (uint256)
```




## Events

### Paid

> emit when a user paid

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`token` | contract IERC20Upgradeable |  | token address
|`payload` | struct IDstChainPayment.PaymentPayload |  | payment payload
