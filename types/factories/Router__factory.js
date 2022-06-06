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
exports.Router__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract INormalResourceController",
                name: "arStorageController",
                type: "address",
            },
        ],
        name: "ARStorageControllerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract INormalResourceController",
                name: "bandwidthController",
                type: "address",
            },
        ],
        name: "BandwidthControllerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IBilling",
                name: "billing",
                type: "address",
            },
        ],
        name: "BillingUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract INormalResourceController",
                name: "buildingTimeController",
                type: "address",
            },
        ],
        name: "BuildingTimeControllerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IDstChainPayment",
                name: "dstChainPayment",
                type: "address",
            },
        ],
        name: "DstChainPaymentUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IFundPool",
                name: "fundPool",
                type: "address",
            },
        ],
        name: "FundPoolUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IGovernance",
                name: "governance",
                type: "address",
            },
        ],
        name: "GovernanceUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IIPFSStorageController",
                name: "ipfsStorageController",
                type: "address",
            },
        ],
        name: "IPFSStorageControllerUpdated",
        type: "event",
    },
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
                indexed: false,
                internalType: "address",
                name: "messageReceiver",
                type: "address",
            },
        ],
        name: "MessageReceiverUpdated",
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
                internalType: "contract IProviderController",
                name: "providerController",
                type: "address",
            },
        ],
        name: "ProviderControllerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IProviderRegistry",
                name: "_providerRegistry",
                type: "address",
            },
        ],
        name: "ProviderRegistryUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IResourcePriceAdaptor",
                name: "resourcePriceAdaptor",
                type: "address",
            },
        ],
        name: "ResourcePriceAdaptorUpdated",
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
        name: "ARStorageController",
        outputs: [
            {
                internalType: "contract INormalResourceController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "BandwidthController",
        outputs: [
            {
                internalType: "contract INormalResourceController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Billing",
        outputs: [
            {
                internalType: "contract IBilling",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "BuildingTimeController",
        outputs: [
            {
                internalType: "contract INormalResourceController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "DstChainPayment",
        outputs: [
            {
                internalType: "contract IDstChainPayment",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "FundPool",
        outputs: [
            {
                internalType: "contract IFundPool",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Governance",
        outputs: [
            {
                internalType: "contract IGovernance",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "IPFSStorageController",
        outputs: [
            {
                internalType: "contract IIPFSStorageController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MessageReceiver",
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
        name: "ProviderController",
        outputs: [
            {
                internalType: "contract IProviderController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ProviderRegistry",
        outputs: [
            {
                internalType: "contract IProviderRegistry",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ResourcePriceAdaptor",
        outputs: [
            {
                internalType: "contract IResourcePriceAdaptor",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Token",
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
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "contract INormalResourceController",
                name: "_arStorageController",
                type: "address",
            },
        ],
        name: "setARStorageController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract INormalResourceController",
                name: "_bandwidthController",
                type: "address",
            },
        ],
        name: "setBandwidthController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IBilling",
                name: "_billing",
                type: "address",
            },
        ],
        name: "setBilling",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract INormalResourceController",
                name: "_buildingTimeController",
                type: "address",
            },
        ],
        name: "setBuildingTimeController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IDstChainPayment",
                name: "_dstChainPayment",
                type: "address",
            },
        ],
        name: "setDstChainPayment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IFundPool",
                name: "_pool",
                type: "address",
            },
        ],
        name: "setFundPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IGovernance",
                name: "_governance",
                type: "address",
            },
        ],
        name: "setGovernance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IIPFSStorageController",
                name: "_ipfsStorageController",
                type: "address",
            },
        ],
        name: "setIPFSStorageController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_messageReceiver",
                type: "address",
            },
        ],
        name: "setMessageReceiver",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IProviderController",
                name: "_providerController",
                type: "address",
            },
        ],
        name: "setProviderController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IProviderRegistry",
                name: "_providerRegistry",
                type: "address",
            },
        ],
        name: "setProviderRegistry",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IResourcePriceAdaptor",
                name: "_resourcePriceAdaptor",
                type: "address",
            },
        ],
        name: "setResourcePriceAdaptor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "_token",
                type: "address",
            },
        ],
        name: "setToken",
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
var _bytecode = "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b62000d321760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b61109a80620001db6000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c8063914fd2c311610104578063c4d66de8116100a2578063ed1f63d311610071578063ed1f63d3146103e5578063f2fde38b146103f8578063f760660e1461040b578063f931ca561461041e57600080fd5b8063c4d66de814610399578063e20ce6eb146103ac578063e70b7acb146103bf578063e8437249146103d257600080fd5b8063a2d2f2db116100de578063a2d2f2db1461034d578063a5a3f6c814610360578063ab033ea914610373578063c24126761461038657600080fd5b8063914fd2c3146103145780639453911214610327578063a1c841ca1461033a57600080fd5b8063429aafd91161017c578063715018a61161014b578063715018a6146102d5578063740e8061146102dd5780637a7fa753146102f05780638da5cb5b1461030357600080fd5b8063429aafd9146102895780634540a85b1461029c57806364f401ab146102af5780636ebdff2c146102c257600080fd5b8063144fa6d7116101b8578063144fa6d71461023057806322b31aba1461024357806337187fc3146102635780633b8ccfb11461027657600080fd5b80630251d6c3146101df5780630db81c35146101f45780630efdf9ac14610207575b600080fd5b6101f26101ed366004610e58565b610431565b005b6101f2610202366004610e58565b6104e0565b60655461021a906001600160a01b031681565b6040516102279190610e90565b60405180910390f35b6101f261023e366004610e58565b61057b565b606a54610256906001600160a01b031681565b6040516102279190610ece565b606e54610256906001600160a01b031681565b6101f2610284366004610ef0565b610616565b6101f2610297366004610e58565b6106b1565b6101f26102aa366004610e58565b61074c565b6101f26102bd366004610e58565b6107e7565b6101f26102d0366004610e58565b610882565b6101f261091d565b606d54610256906001600160a01b031681565b6101f26102fe366004610e58565b610953565b6033546001600160a01b031661021a565b6101f2610322366004610e58565b6109ee565b606654610256906001600160a01b031681565b606854610256906001600160a01b031681565b606c54610256906001600160a01b031681565b606754610256906001600160a01b031681565b6101f2610381366004610e58565b610a89565b606954610256906001600160a01b031681565b6101f26103a7366004610ef0565b610b24565b607054610256906001600160a01b031681565b607154610256906001600160a01b031681565b6101f26103e0366004610e58565b610ba0565b606f54610256906001600160a01b031681565b6101f2610406366004610ef0565b610c3b565b6101f2610419366004610e58565b610c97565b606b54610256906001600160a01b031681565b6033546001600160a01b031633146104645760405162461bcd60e51b815260040161045b90610f46565b60405180910390fd5b6001600160a01b03811661048a5760405162461bcd60e51b815260040161045b90610f81565b606e80546001600160a01b0319166001600160a01b0383161790556040517fefc72b6a1e0750c490adba6e2fad3861ed80249e7e9db7fa88133536978e1618906104d5908390610ece565b60405180910390a150565b6033546001600160a01b0316331461050a5760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b0381166105305760405162461bcd60e51b815260040161045b90610f81565b607080546001600160a01b0319166001600160a01b0383161790556040517fc5d588a42a81fee76e7e80a4ef88ac097d4b28eecfd9ac79629ae06eb3eae4b8906104d5908390610ece565b6033546001600160a01b031633146105a55760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b0381166105cb5760405162461bcd60e51b815260040161045b90610f81565b606980546001600160a01b0319166001600160a01b0383161790556040517f5ba6b30cd4b2f9e9e67f4feb9b9df10d5da3b057598e6901b217b7d590345e30906104d5908390610ece565b6033546001600160a01b031633146106405760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b0381166106665760405162461bcd60e51b815260040161045b90610f81565b606580546001600160a01b0319166001600160a01b0383161790556040517fafe9b28ca24a54df8c44769c685f7b92824aae021cdfcaa4719d493571a23c4c906104d5908390610e90565b6033546001600160a01b031633146106db5760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b0381166107015760405162461bcd60e51b815260040161045b90610f81565b606f80546001600160a01b0319166001600160a01b0383161790556040517ff2071e1b38ab3c561fb5d090a912ad00d911946da5f417b4eac46024a2f6ed60906104d5908390610ece565b6033546001600160a01b031633146107765760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b03811661079c5760405162461bcd60e51b815260040161045b90610f81565b606d80546001600160a01b0319166001600160a01b0383161790556040517f7b091d9397a2f75213edeec1728b27a9d863f0f8aafb62fce0f1154f48f110f8906104d5908390610ece565b6033546001600160a01b031633146108115760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b0381166108375760405162461bcd60e51b815260040161045b90610f81565b606880546001600160a01b0319166001600160a01b0383161790556040517f7877ecbc56deb4477526760cc3ac4edd24b62cb61fdcb7d768432dbe4b1c9e48906104d5908390610ece565b6033546001600160a01b031633146108ac5760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b0381166108d25760405162461bcd60e51b815260040161045b90610f81565b607180546001600160a01b0319166001600160a01b0383161790556040517f3d4983d02f8bc19207842d9d88346943f300d7737b764cead01f10f3b9d23147906104d5908390610ece565b6033546001600160a01b031633146109475760405162461bcd60e51b815260040161045b90610f46565b6109516000610d41565b565b6033546001600160a01b0316331461097d5760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b0381166109a35760405162461bcd60e51b815260040161045b90610f81565b606b80546001600160a01b0319166001600160a01b0383161790556040517f100702071f8eb4f459f5f9dcf12bba9b3aeafa0eca6a018364f645558d792c37906104d5908390610ece565b6033546001600160a01b03163314610a185760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b038116610a3e5760405162461bcd60e51b815260040161045b90610f81565b606c80546001600160a01b0319166001600160a01b0383161790556040517f6a7e09ebc58179cd1c17c89209474e58d29e43b1bf78dd57f896e7be983220eb906104d5908390610ece565b6033546001600160a01b03163314610ab35760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b038116610ad95760405162461bcd60e51b815260040161045b90610f81565b606680546001600160a01b0319166001600160a01b0383161790556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab906104d5908390610ece565b6000610b306001610d93565b90508015610b48576000805461ff0019166101001790555b610b5182610d41565b8015610b9c576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890610b9390600190610fa5565b60405180910390a15b5050565b6033546001600160a01b03163314610bca5760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b038116610bf05760405162461bcd60e51b815260040161045b90610f81565b606a80546001600160a01b0319166001600160a01b0383161790556040517feb1b948f6c63784a1d91e42dd967c49aae87b1db36d3107e9b913963ae7cd039906104d5908390610ece565b6033546001600160a01b03163314610c655760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b038116610c8b5760405162461bcd60e51b815260040161045b90610ff9565b610c9481610d41565b50565b6033546001600160a01b03163314610cc15760405162461bcd60e51b815260040161045b90610f46565b6001600160a01b038116610ce75760405162461bcd60e51b815260040161045b90610f81565b606780546001600160a01b0319166001600160a01b0383161790556040517fb8f8a6768be726978fef2f5342ee7b1d0eead3b5cbb0c5d55c68f56271ca0eeb906104d5908390610ece565b6001600160a01b03163b151590565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff1615610dda578160ff166001148015610db65750303b155b610dd25760405162461bcd60e51b815260040161045b90611054565b506000919050565b60005460ff808416911610610e015760405162461bcd60e51b815260040161045b90611054565b506000805460ff191660ff92909216919091179055600190565b60006001600160a01b0382165b92915050565b6000610e2882610e1b565b610e4281610e2e565b8114610c9457600080fd5b8035610e2881610e39565b600060208284031215610e6d57610e6d600080fd5b6000610e798484610e4d565b949350505050565b610e8a81610e1b565b82525050565b60208101610e288284610e81565b60006001600160a01b038216610e28565b6000610e2882610e9e565b6000610e2882610eaf565b610e8a81610eba565b60208101610e288284610ec5565b610e4281610e1b565b8035610e2881610edc565b600060208284031215610f0557610f05600080fd5b6000610e798484610ee5565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b60208082528101610e2881610f11565b6014815260006020820173526f757465723a207a65726f206164647265737360601b81529150610f3f565b60208082528101610e2881610f56565b600060ff8216610e28565b610e8a81610f91565b60208101610e288284610f9c565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b602082015291505b5060400190565b60208082528101610e2881610fb3565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150610ff2565b60208082528101610e288161100956fea2646970667358221220d6945e765bd40e0990ab030c0d4b82da6de5693dfad969a1149f73113fd1e4af64736f6c63430008090033";
var Router__factory = /** @class */ (function (_super) {
    __extends(Router__factory, _super);
    function Router__factory() {
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
    Router__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Router__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Router__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Router__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Router__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Router__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Router__factory.bytecode = _bytecode;
    Router__factory.abi = _abi;
    return Router__factory;
}(ethers_1.ContractFactory));
exports.Router__factory = Router__factory;
