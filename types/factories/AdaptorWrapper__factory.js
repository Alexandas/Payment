"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptorWrapper__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
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
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "contract IResourceAdaptor",
                name: "_adaptor",
                type: "address",
            },
        ],
        name: "setResourceAdaptor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum ResourceData.ResourceType",
                name: "_resourceType",
                type: "uint8",
            },
        ],
        name: "setResourceType",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var AdaptorWrapper__factory = /** @class */ (function () {
    function AdaptorWrapper__factory() {
    }
    AdaptorWrapper__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    AdaptorWrapper__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    AdaptorWrapper__factory.abi = _abi;
    return AdaptorWrapper__factory;
}());
exports.AdaptorWrapper__factory = AdaptorWrapper__factory;