"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDstChainPayment__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IERC20Upgradeable",
                name: "token",
                type: "address",
            },
            {
                components: [
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
                        components: [
                            {
                                internalType: "enum ResourceData.ResourceType",
                                name: "resourceType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256[]",
                                name: "values",
                                type: "uint256[]",
                            },
                        ],
                        internalType: "struct ResourceData.Payload[]",
                        name: "payloads",
                        type: "tuple[]",
                    },
                ],
                indexed: false,
                internalType: "struct IDstChainPayment.PaymentPayload",
                name: "payload",
                type: "tuple",
            },
        ],
        name: "Paid",
        type: "event",
    },
    {
        inputs: [
            {
                components: [
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
                        components: [
                            {
                                internalType: "enum ResourceData.ResourceType",
                                name: "resourceType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256[]",
                                name: "values",
                                type: "uint256[]",
                            },
                        ],
                        internalType: "struct ResourceData.Payload[]",
                        name: "payloads",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct IDstChainPayment.PaymentPayload",
                name: "payload",
                type: "tuple",
            },
        ],
        name: "pay",
        outputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "message",
                type: "bytes",
            },
        ],
        name: "payFromSourceChain",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IDstChainPayment__factory = /** @class */ (function () {
    function IDstChainPayment__factory() {
    }
    IDstChainPayment__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IDstChainPayment__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IDstChainPayment__factory.abi = _abi;
    return IDstChainPayment__factory;
}());
exports.IDstChainPayment__factory = IDstChainPayment__factory;
