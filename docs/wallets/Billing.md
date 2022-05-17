# Billing



> Billing contract

## Globals
| Var | Type |
| --- | --- |
| billTypedHash | bytes32 |
| adaptor | contract IResourceAdaptor |

## Functions
### encodeBill

> encode bill to bytes


#### Declaration
```
function encodeBill(struct IBilling.Bill bill) external returns (bytes)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`bill` | struct IBilling.Bill | user bill

#### Returns:
| Type | Description |
| --- | --- |
|`bill` | bytes
### decodeBill

> decode bill bytes to user bill


#### Declaration
```
function decodeBill(bytes data) external returns (struct IBilling.Bill)
```

#### Args:
| Arg | Type | Description |
| --- | --- | --- |
|`data` | bytes | bill bytes

#### Returns:
| Type | Description |
| --- | --- |
|`user` | bill

