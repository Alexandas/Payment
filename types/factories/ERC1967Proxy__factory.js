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
exports.ERC1967Proxy__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_logic",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
var _bytecode = "0x60806040526040516200094a3803806200094a83398101604081905262000026916200042d565b6200005360017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd620004a2565b6000805160206200090383398151915214620000735762000073620004bc565b620000818282600062000089565b505062000602565b6200009483620000c6565b600082511180620000a25750805b15620000c157620000bf83836200010860201b620000291760201c565b505b505050565b620000d18162000139565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606200013083836040518060600160405280602781526020016200092360279139620001c1565b90505b92915050565b6200014f816200026b60201b620000551760201c565b620001775760405162461bcd60e51b81526004016200016e906200051f565b60405180910390fd5b80620001a06000805160206200090383398151915260001b6200027a60201b620000641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606001600160a01b0384163b620001ed5760405162461bcd60e51b81526004016200016e9062000575565b600080856001600160a01b0316856040516200020a9190620005ac565b600060405180830381855af49150503d806000811462000247576040519150601f19603f3d011682016040523d82523d6000602084013e6200024c565b606091505b5090925090506200025f8282866200027d565b925050505b9392505050565b6001600160a01b03163b151590565b90565b606083156200028e57508162000264565b8251156200029f5782518084602001fd5b8160405162461bcd60e51b81526004016200016e9190620005ef565b60006001600160a01b03821662000133565b620002d881620002bb565b8114620002e457600080fd5b50565b80516200013381620002cd565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b0382111715620003325762000332620002f4565b6040525050565b60006200034560405190565b90506200035382826200030a565b919050565b60006001600160401b03821115620003745762000374620002f4565b601f19601f83011660200192915050565b60005b83811015620003a257818101518382015260200162000388565b83811115620000bf5750506000910152565b6000620003cb620003c58462000358565b62000339565b905082815260208101848484011115620003e857620003e8600080fd5b620003f584828562000385565b509392505050565b600082601f830112620004135762000413600080fd5b815162000425848260208601620003b4565b949350505050565b60008060408385031215620004455762000445600080fd5b6000620004538585620002e7565b92505060208301516001600160401b03811115620004745762000474600080fd5b6200048285828601620003fd565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b600082821015620004b757620004b76200048c565b500390565b634e487b7160e01b600052600160045260246000fd5b602d81526000602082017f455243313936373a206e657720696d706c656d656e746174696f6e206973206e81526c1bdd08184818dbdb9d1c9858dd609a1b602082015291505b5060400190565b602080825281016200013381620004d2565b602681526000602082017f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f8152651b9d1c9858dd60d21b6020820152915062000518565b60208082528101620001338162000531565b600062000592825190565b620005a281856020860162000385565b9290920192915050565b600062000264828462000587565b6000620005c5825190565b808452602084019350620005de81856020860162000385565b601f01601f19169290920192915050565b60208082528101620001308184620005ba565b6102f180620006126000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e8383604051806060016040528060278152602001610295602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b60606001600160a01b0384163b6100f55760405162461bcd60e51b81526004016100ec906101a3565b60405180910390fd5b600080856001600160a01b0316856040516101109190610245565b600060405180830381855af49150503d806000811461014b576040519150601f19603f3d011682016040523d82523d6000602084013e610150565b606091505b509150915061016082828661016a565b9695505050505050565b6060831561017957508161004e565b8251156101895782518084602001fd5b8160405162461bcd60e51b81526004016100ec9190610283565b602080825281016101ed81602681527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6020820152651b9d1c9858dd60d21b604082015260600190565b92915050565b60005b8381101561020e5781810151838201526020016101f6565b8381111561021d576000848401525b50505050565b600061022d825190565b61023b8185602086016101f3565b9290920192915050565b600061004e8284610223565b600061025b825190565b8084526020840193506102728185602086016101f3565b601f01601f19169290920192915050565b6020808252810161004e818461025156fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208f46830de3acf1fa95c74536650404aec7b932e2c72975751f0fe59935fa52e164736f6c63430008090033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
var ERC1967Proxy__factory = /** @class */ (function (_super) {
    __extends(ERC1967Proxy__factory, _super);
    function ERC1967Proxy__factory() {
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
    ERC1967Proxy__factory.prototype.deploy = function (_logic, _data, overrides) {
        return _super.prototype.deploy.call(this, _logic, _data, overrides || {});
    };
    ERC1967Proxy__factory.prototype.getDeployTransaction = function (_logic, _data, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _logic, _data, overrides || {});
    };
    ERC1967Proxy__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC1967Proxy__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC1967Proxy__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC1967Proxy__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC1967Proxy__factory.bytecode = _bytecode;
    ERC1967Proxy__factory.abi = _abi;
    return ERC1967Proxy__factory;
}(ethers_1.ContractFactory));
exports.ERC1967Proxy__factory = ERC1967Proxy__factory;
