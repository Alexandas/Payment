"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IIPFSStorageController__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expandedStorageFee",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expandedExpirationFee",
                type: "uint256",
            },
        ],
        name: "Expanded",
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
                internalType: "enum ResourceData.ResourceType",
                name: "resourceType",
                type: "uint8",
            },
        ],
        name: "ResourceTypeUpdated",
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
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
        ],
        name: "availableExpiration",
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
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "expandedStorageFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "expandedExpirationFee",
                type: "uint256",
            },
        ],
        name: "expand",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "expandedStorage",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "expandedExpiration",
                type: "uint256",
            },
        ],
        name: "expandedFee",
        outputs: [
            {
                internalType: "uint256",
                name: "expandedStorageFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "expandedExpirationFee",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "expandedStorageFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "expandedExpirationFee",
                type: "uint256",
            },
        ],
        name: "expansions",
        outputs: [
            {
                internalType: "uint256",
                name: "expandedStorage",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "expandedExpiration",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
        ],
        name: "expiration",
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
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
        ],
        name: "expiredAt",
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
        name: "getAmountOf",
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
                name: "amount",
                type: "uint256",
            },
        ],
        name: "getValueOf",
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
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
        ],
        name: "isExpired",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "price",
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
        name: "resourceType",
        outputs: [
            {
                internalType: "enum ResourceData.ResourceType",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
        ],
        name: "startTime",
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
var IIPFSStorageController__factory = /** @class */ (function () {
    function IIPFSStorageController__factory() {
    }
    IIPFSStorageController__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IIPFSStorageController__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IIPFSStorageController__factory.abi = _abi;
    return IIPFSStorageController__factory;
}());
exports.IIPFSStorageController__factory = IIPFSStorageController__factory;