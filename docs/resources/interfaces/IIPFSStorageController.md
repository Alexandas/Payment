# IIPFSStorageController



> IPFS storage controller interface


## Functions
### expand

> expand ipfs resource


#### Declaration
```
function expand(bytes32 account,uint256 expandedStorageFee,uint256 expandedExpirationFee) external
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account
|`expandedStorageFee` | uint256 | storage fee
|`expandedExpirationFee` | uint256 | expiration fee

### isExpired

> return whether the account is expired


#### Declaration
```
function isExpired(bytes32 account) external returns (bool)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`whether` | the account is expired
### startTime

> ipfs resource start time


#### Declaration
```
function startTime(bytes32 account) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`start` | time for ipfs resource
### availableExpiration

> return available expiration time for the account


#### Declaration
```
function availableExpiration(bytes32 account) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`available` | expiration time for the account
### expiration

> return total expiration time for the account


#### Declaration
```
function expiration(bytes32 account) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`total` | expiration time for the account
### expiredAt

> return when the account will expire


#### Declaration
```
function expiredAt(bytes32 account) external returns (uint256)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account

#### Returns:
| Type | Description |
| --- | --- |
|`when` | the account will expire
### balanceOf

> return ipfs storage amount for the account


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
|`ipfs` | storage amount for the account
### expandedFee

> calculate fee for storage and expiration


#### Declaration
```
function expandedFee(bytes32 account,uint256 expandedStorage,uint256 expandedExpiration) external returns (uint256 expandedStorageFee, uint256 expandedExpirationFee)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account
|`expandedStorage` | uint256 | storage amount
|`expandedExpiration` | uint256 |  expiration(in seconds)

#### Returns:
| Type | Description |
| --- | --- |
|`expandedStorageFee` | storage fee
|`expandedExpirationFee` | expiration fee
### expansions

> calculate fee for storage and expiration


#### Declaration
```
function expansions(bytes32 account,uint256 expandedStorageFee,uint256 expandedExpirationFee) external returns (uint256 expandedStorage, uint256 expandedExpiration)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`account` | bytes32 | user account
|`expandedStorageFee` | uint256 | storage fee
|`expandedExpirationFee` | uint256 | expiration fee

#### Returns:
| Type | Description |
| --- | --- |
|`expandedStorage` | storage amount
|`expandedExpiration` | expiration(in seconds)

## Events

### Expanded

> emit when ipfs resource expanded

  
#### Params:
| Param | Type | Indexed | Description |
| --- | --- | :---: | --- |
|`account` | bytes32 |  | user account
|`expandedStorageFee` | uint256 |  | storage fee
|`expandedExpirationFee` | uint256 |  | expiration fee
