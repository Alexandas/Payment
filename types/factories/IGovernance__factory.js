"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGovernance__factory = void 0;
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
        ],
        name: "GovernanceDrip",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "provider",
                type: "address",
            },
        ],
        name: "addProvider",
        outputs: [],
        stateMutability: "nonpayable",
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
                components: [
                    {
                        internalType: "enum ResourceData.ResourceType",
                        name: "resourceType",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]",
                    },
                ],
                internalType: "struct ResourceData.AmountPayload[]",
                name: "payloads",
                type: "tuple[]",
            },
        ],
        name: "drip",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "provider",
                type: "address",
            },
        ],
        name: "removeProvider",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IGovernance__factory = /** @class */ (function () {
    function IGovernance__factory() {
    }
    IGovernance__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IGovernance__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IGovernance__factory.abi = _abi;
    return IGovernance__factory;
}());
exports.IGovernance__factory = IGovernance__factory;