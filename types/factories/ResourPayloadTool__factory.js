"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourPayloadTool__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
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
        name: "totalValue",
        outputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var ResourPayloadTool__factory = /** @class */ (function () {
    function ResourPayloadTool__factory() {
    }
    ResourPayloadTool__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ResourPayloadTool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ResourPayloadTool__factory.abi = _abi;
    return ResourPayloadTool__factory;
}());
exports.ResourPayloadTool__factory = ResourPayloadTool__factory;