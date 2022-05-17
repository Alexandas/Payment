# IFundWallet



> FundWallet interface


## Functions
### rechargeTypedHash

> return recharge typed hash

#### Declaration
```
function rechargeTypedHash() external returns (bytes32)
```



### ownerOf

> return owner of account


#### Declaration
```
function ownerOf(address provider,bytes32 account) external returns (address)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`owner` | wallet owner for account
### transferWalletOwner

> transfer wallet owner for account


#### Declaration
```
function transferWalletOwner(address provider,bytes32 account,address newOwner) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`account` | bytes32 | user account
|`newOwner` | address | new wallet owner for account

### recharge

> recharge for account


#### Declaration
```
function recharge(address provider,uint64 nonce,bytes32 account,uint256 amount,bytes signature) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`nonce` | uint64 | nonce
|`account` | bytes32 | user account
|`amount` | uint256 | token amount
|`signature` | bytes | provider signature

### withdraw

> withdraw token for account


#### Declaration
```
function withdraw(address provider,uint64 nonce,bytes32 account,address to,uint256 amount,bytes bill,bytes signature) external returns (uint256 fee)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`nonce` | uint64 | nonce
|`account` | bytes32 | user account
|`to` | address | token receiver
|`amount` | uint256 | token amount
|`bill` | bytes | bill bytes
|`signature` | bytes | provider signature

#### Returns:
| Type | Description |
| --- | --- |
|`fee` | bill fee
### spend

> spend bill for account


#### Declaration
```
function spend(address provider,uint64 nonce,bytes32 account,bytes bill,bytes signature, fee) external returns (uint256 fee)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`provider` | address | provider address
|`nonce` | uint64 | nonce
|`account` | bytes32 | user account
|`bill` | bytes | bill bytes
|`signature` | bytes | provider signature
|`fee` |  | bill fee


## Events

### RechargeTypedHashUpdated

> emit when recharge type hash updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`hash` | bytes32 |  | recharge type hash
### NonceUpdated

> emit when nonce updated

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`nonce` | uint64 |  | nonce
|`purpose` | enum IFundWallet.Purpose |  | nonce used for
### WalletOwnerTransferred

> emit when wallet owner changed

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`account` | bytes32 |  | user account
|`newOwner` | address |  | new wallet owner for `account`
### Recharged

> emit when account recharged

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`nonce` | uint64 |  | nonce
|`account` | bytes32 |  | user account
|`amount` | uint256 |  | token amount
### Spent

> emit when bill finalized

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`nonce` | uint64 |  | nonce
|`account` | bytes32 |  | user account
|`fee` | uint256 |  | bill fee
### Withdrawn

> emit when user withdrawn

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`provider` | address |  | provider address
|`nonce` | uint64 |  | nonce
|`account` | bytes32 |  | user account
|`to` | address |  | token receiver
|`amount` | uint256 |  | token amount
