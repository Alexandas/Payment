# HostingPaymentV2

> Buy, Renew and Upgrade a combo are supported for using a standard token(USDT, USDC, DAI).

## Globals

| Var | Type |
| --- | --- |
| nonces | mapping(bytes28 => uint256) |
| mints | bytes4 |
| Decimal | uint256 |
| MinExpiration | uint256 |
| MaxTotalExpiration | uint256 |

## Functions

### buy

> Buy a `combo` for `uuid`

#### Declaration

```
function buy(bytes28 uuid,uint256 tokenIndex,uint256 level,uint256 expiration_) external validateToken validateExpiration validateCustomCombo onlyUnlock returns (uint256 cost)
```

#### Args

| Arg | Type | Description |
| --- | --- | --- |
|`uuid` | bytes28 | uuid of the user.
|`tokenIndex` | uint256 | token index of tokens.
|`level` | uint256 | index of the `combos`
|`expiration_` | uint256 | exipration for the combo

#### Returns

| Type | Description |
| --- | --- |
|`cost` | how much token used.

### renew

> Renew a `combo` which owned of the user.

#### Declaration

```
function renew(uint256 nonce,bytes28 uuid,uint256 tokenIndex,uint256 expiration_) external validateNonce validateToken validateExpiration onlyUnlock returns (uint256 cost)
```

#### Args

| Arg | Type | Description |
| --- | --- | --- |
|`nonce` | uint256 | nonce of the renew count.
|`uuid` | bytes28 | uuid of the user.
|`tokenIndex` | uint256 | token index of tokens.
|`expiration_` | uint256 | exipration for the combo

#### Returns

| Type | Description |
| --- | --- |
|`cost` | how much token used.

### upgrade

> Upgrade a `combo` for `uuid`

#### Declaration

```
function upgrade(bytes28 uuid,uint256 tokenIndex,uint256 level,uint256 moreExpiration) external validateToken validateCustomCombo onlyUnlock returns (uint256 cost)
```

#### Args

| Arg | Type | Description |
| --- | --- | --- |
|`uuid` | bytes28 | uuid of the user.
|`tokenIndex` | uint256 | token index of tokens.
|`level` | uint256 | index of the `combos`
|`moreExpiration` | uint256 | more exipration for the combo exclude exchanged expiration from current level

#### Returns

| Type | Description |
| --- | --- |
|`cost` | how much token used.

### withdraw

> Exchange cost to the original decimal.

#### Declaration

```
function withdraw(contract IERC20 token,address to,uint256 value) external onlyOwner
```

#### Args

| Arg | Type | Description |
| --- | --- | --- |
|`token` | contract IERC20 | address of the ERC20 token.
|`to` | address | receiver.
|`value` | uint256 | withdrawal.

### setMinExpriation

> set the minimal expiration.

#### Declaration

```
function setMinExpriation() external onlyManager
```

### setMaxTotalExpriation

> set the max total expiration.

#### Declaration

```
function setMaxTotalExpriation() external onlyManager
```

### receive

> refactor receive fuctions.

#### Declaration

```
function receive() external
```

## Events

### Buy

> Emit buy event.
  
### Renew

> Emit Renew event.
  
### Upgrade

> Emit Upgrade event.
  