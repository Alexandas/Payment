"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IResourceAdaptor__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: "enum ResourceData.ResourceType",
                        name: "resourceType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct IResourceAdaptor.PriceAdaptor[]",
                name: "adaptors",
                type: "tuple[]",
            },
        ],
        name: "PriceAdaptorsUpdated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "enum ResourceData.ResourceType",
                name: "resourceType",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_indexBlock",
                type: "uint256",
            },
        ],
        name: "getAmountAt",
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
                internalType: "enum ResourceData.ResourceType",
                name: "resourceType",
                type: "uint8",
            },
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
                internalType: "enum ResourceData.ResourceType",
                name: "resourceType",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_indexBlock",
                type: "uint256",
            },
        ],
        name: "getValueAt",
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
                internalType: "enum ResourceData.ResourceType",
                name: "resourceType",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "_indexBlock",
                type: "uint256",
            },
        ],
        name: "priceAt",
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
                internalType: "enum ResourceData.ResourceType",
                name: "resourceType",
                type: "uint8",
            },
        ],
        name: "priceOf",
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
var IResourceAdaptor__factory = /** @class */ (function () {
    function IResourceAdaptor__factory() {
    }
    IResourceAdaptor__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IResourceAdaptor__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IResourceAdaptor__factory.abi = _abi;
    return IResourceAdaptor__factory;
}());
exports.IResourceAdaptor__factory = IResourceAdaptor__factory;
