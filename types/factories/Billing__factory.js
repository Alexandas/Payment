"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "provider",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "bills",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Billing",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "BillsTypedHashUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IProviders",
                name: "providers",
                type: "address",
            },
        ],
        name: "ProvidersUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IResourceAdaptor",
                name: "adaptor",
                type: "address",
            },
        ],
        name: "ResourceAdaptorUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IERC20Upgradeable",
                name: "token",
                type: "address",
            },
        ],
        name: "TokenUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "adaptor",
        outputs: [
            {
                internalType: "contract IResourceAdaptor",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "provider",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "provider",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "bills",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "expiration",
                type: "uint256",
            },
        ],
        name: "billsHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "billsTypedHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "decodeBills",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "indexBlock",
                        type: "uint256",
                    },
                    {
                        components: [
                            {
                                internalType: "enum ResourceData.ResourceType",
                                name: "resourceType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct IBilling.BillEntry[]",
                        name: "entries",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct IBilling.Bill[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "indexBlock",
                        type: "uint256",
                    },
                    {
                        components: [
                            {
                                internalType: "enum ResourceData.ResourceType",
                                name: "resourceType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct IBilling.BillEntry[]",
                        name: "entries",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct IBilling.Bill[]",
                name: "bills",
                type: "tuple[]",
            },
        ],
        name: "encodeBills",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "provider",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "bills",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "expiration",
                type: "uint256",
            },
        ],
        name: "hashTypedDataV4ForBills",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "matchResourceToToken",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "matchTokenToResource",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "providers",
        outputs: [
            {
                internalType: "contract IProviders",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "resourceDecimals",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "token",
        outputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tokenDecimals",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var Billing__factory = /** @class */ (function () {
    function Billing__factory() {
    }
    Billing__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Billing__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Billing__factory.abi = _abi;
    return Billing__factory;
}());
exports.Billing__factory = Billing__factory;
