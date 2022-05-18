"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersWrapper__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
];
var ProvidersWrapper__factory = /** @class */ (function () {
    function ProvidersWrapper__factory() {
    }
    ProvidersWrapper__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ProvidersWrapper__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ProvidersWrapper__factory.abi = _abi;
    return ProvidersWrapper__factory;
}());
exports.ProvidersWrapper__factory = ProvidersWrapper__factory;
