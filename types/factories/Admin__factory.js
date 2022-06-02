"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
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
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "changeProxyAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
        ],
        name: "getProxyAdmin",
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
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
        ],
        name: "getProxyImplementation",
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
        name: "renounceOwnership",
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
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "upgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "upgradeAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5060405161097738038061097783398101604081905261002f916100cc565b61003833610047565b61004181610047565b506100f5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006001600160a01b0382165b92915050565b6100b381610097565b81146100be57600080fd5b50565b80516100a4816100aa565b6000602082840312156100e1576100e1600080fd5b60006100ed84846100c1565b949350505050565b610873806101046000396000f3fe60806040526004361061007b5760003560e01c80639623609d1161004e5780639623609d1461010b57806399a88ec41461011e578063f2fde38b1461013e578063f3b7dead1461015e57600080fd5b8063204e1c7a14610080578063715018a6146100b65780637eff275e146100cd5780638da5cb5b146100ed575b600080fd5b34801561008c57600080fd5b506100a061009b3660046104ba565b61017e565b6040516100ad91906104ea565b60405180910390f35b3480156100c257600080fd5b506100cb610204565b005b3480156100d957600080fd5b506100cb6100e836600461050c565b610243565b3480156100f957600080fd5b506000546001600160a01b03166100a0565b6100cb610119366004610644565b6102cf565b34801561012a57600080fd5b506100cb61013936600461050c565b610360565b34801561014a57600080fd5b506100cb6101593660046106af565b6103b6565b34801561016a57600080fd5b506100a06101793660046104ba565b610412565b6000806000836001600160a01b0316604051610199906106e4565b600060405180830381855afa9150503d80600081146101d4576040519150601f19603f3d011682016040523d82523d6000602084013e6101d9565b606091505b5091509150816101e857600080fd5b808060200190518101906101fc91906106fa565b949350505050565b6000546001600160a01b031633146102375760405162461bcd60e51b815260040161022e9061071b565b60405180910390fd5b610241600061042d565b565b6000546001600160a01b0316331461026d5760405162461bcd60e51b815260040161022e9061071b565b6040516308f2839760e41b81526001600160a01b03831690638f283970906102999084906004016104ea565b600060405180830381600087803b1580156102b357600080fd5b505af11580156102c7573d6000803e3d6000fd5b505050505050565b6000546001600160a01b031633146102f95760405162461bcd60e51b815260040161022e9061071b565b60405163278f794360e11b81526001600160a01b03841690634f1ef28690349061032990869086906004016107b7565b6000604051808303818588803b15801561034257600080fd5b505af1158015610356573d6000803e3d6000fd5b5050505050505050565b6000546001600160a01b0316331461038a5760405162461bcd60e51b815260040161022e9061071b565b604051631b2ce7f360e11b81526001600160a01b03831690633659cfe6906102999084906004016104ea565b6000546001600160a01b031633146103e05760405162461bcd60e51b815260040161022e9061071b565b6001600160a01b0381166104065760405162461bcd60e51b815260040161022e906107d7565b61040f8161042d565b50565b6000806000836001600160a01b031660405161019990610832565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006001600160a01b0382165b92915050565b600061048a8261047d565b6104a481610490565b811461040f57600080fd5b803561048a8161049b565b6000602082840312156104cf576104cf600080fd5b60006101fc84846104af565b6104e48161047d565b82525050565b6020810161048a82846104db565b6104a48161047d565b803561048a816104f8565b6000806040838503121561052257610522600080fd5b600061052e85856104af565b925050602061053f85828601610501565b9150509250929050565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff8211171561058557610585610549565b6040525050565b600061059760405190565b90506105a3828261055f565b919050565b600067ffffffffffffffff8211156105c2576105c2610549565b601f19601f83011660200192915050565b82818337506000910152565b60006105f26105ed846105a8565b61058c565b90508281526020810184848401111561060d5761060d600080fd5b6106188482856105d3565b509392505050565b600082601f83011261063457610634600080fd5b81356101fc8482602086016105df565b60008060006060848603121561065c5761065c600080fd5b600061066886866104af565b935050602061067986828701610501565b925050604084013567ffffffffffffffff81111561069957610699600080fd5b6106a586828701610620565b9150509250925092565b6000602082840312156106c4576106c4600080fd5b60006101fc8484610501565b635c60da1b60e01b815260005b5060040190565b600061048a826106d0565b805161048a816104f8565b60006020828403121561070f5761070f600080fd5b60006101fc84846106ef565b60208082528181019081527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408301526060820161048a565b60005b83811015610770578181015183820152602001610758565b8381111561077f576000848401525b50505050565b600061078f825190565b8084526020840193506107a6818560208601610755565b601f01601f19169290920192915050565b604081016107c582856104db565b81810360208301526101fc8184610785565b6020808252810161048a81602681527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160208201526564647265737360d01b604082015260600190565b6303e1469160e61b815260006106dd565b600061048a8261082156fea2646970667358221220c907b2a0d8a78a3f240260f2b52673cade520d57b9a5d9650a77d87b6ee4142e64736f6c63430008090033";
var Admin__factory = /** @class */ (function (_super) {
    __extends(Admin__factory, _super);
    function Admin__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    Admin__factory.prototype.deploy = function (owner, overrides) {
        return _super.prototype.deploy.call(this, owner, overrides || {});
    };
    Admin__factory.prototype.getDeployTransaction = function (owner, overrides) {
        return _super.prototype.getDeployTransaction.call(this, owner, overrides || {});
    };
    Admin__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Admin__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Admin__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Admin__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Admin__factory.bytecode = _bytecode;
    Admin__factory.abi = _abi;
    return Admin__factory;
}(ethers_1.ContractFactory));
exports.Admin__factory = Admin__factory;