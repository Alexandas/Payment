# Billing



> Billing contract

## Globals
| Var | Type |
| --- | --- |
| billsTypedHash | bytes32 |
| adaptor | contract IResourceAdaptor |

## Functions
### encodeBills

> encode bill to bytes


#### Declaration
```
function encodeBills(struct IBilling.Bill[] bills) external returns (bytes)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`bills` | struct IBilling.Bill[] | user bills

#### Returns:
| Type | Description |
| --- | --- |
|`bills` | bytes
### decodeBills

> decode bill bytes to user bill


#### Declaration
```
function decodeBills(bytes data) external returns (struct IBilling.Bill[])
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`data` | bytes | bill bytes

#### Returns:
| Type | Description |
| --- | --- |
|`user` | bills

