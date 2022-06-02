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
exports.SrcChainPayment__factory = void 0;
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
                internalType: "contract IMessageSender",
                name: "messageSender",
                type: "address",
            },
        ],
        name: "MessageSenderUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "NativeWithdrawal",
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
                internalType: "address",
                name: "provider",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
            {
                indexed: false,
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
                indexed: false,
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "maxSlippage",
                type: "uint32",
            },
        ],
        name: "Paid",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "PauserAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "PauserRemoved",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
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
            {
                indexed: false,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Withdrawal",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addPauser",
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
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
        ],
        name: "calcFee",
        outputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "view",
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
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
        ],
        name: "encodeMessage",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "pauser",
                type: "address",
            },
            {
                internalType: "contract IMessageSender",
                name: "messageSender",
                type: "address",
            },
            {
                internalType: "contract IERC20Upgradeable",
                name: "token",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isPauser",
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
        name: "messageSender",
        outputs: [
            {
                internalType: "contract IMessageSender",
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
        inputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "ownerWithdrawERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "ownerWithdrawNative",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "pausers",
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
        inputs: [
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
                internalType: "struct ResourceData.ValuePayload[]",
                name: "payloads",
                type: "tuple[]",
            },
            {
                internalType: "uint32",
                name: "maxSlippage",
                type: "uint32",
            },
        ],
        name: "pay",
        outputs: [
            {
                internalType: "bytes32",
                name: "transferId",
                type: "bytes32",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "removePauser",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "renouncePauser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IMessageSender",
                name: "_messageSender",
                type: "address",
            },
        ],
        name: "setMessageSender",
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
        inputs: [],
        name: "token",
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
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b62000a081760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b61233480620001db6000396000f3fe60806040526004361061012a5760003560e01c806380f51c12116100ab57806393563a951161006f57806393563a9514610316578063bc67f83214610336578063d67bdd2514610356578063f2fde38b14610383578063f8c8765e146103a3578063fc0c546a146103c357600080fd5b806380f51c121461026b57806382dc1ec41461029b5780638456cb59146102bb5780638c22ea5d146102d05780638da5cb5b146102f057600080fd5b80635c975abb116100f25780635c975abb146101e9578063699256f4146102015780636b2c0f55146102215780636ef8d66d14610241578063715018a61461025657600080fd5b8063144fa6d71461012f578063201ce97c146101515780633f4ba83a1461017a57806346fbf68e1461018f5780635b45197d146101bc575b600080fd5b34801561013b57600080fd5b5061014f61014a3660046112f6565b6103e3565b005b61016461015f36600461157f565b610422565b604051610171919061161a565b60405180910390f35b34801561018657600080fd5b5061014f6105de565b34801561019b57600080fd5b506101af6101aa366004611628565b61060d565b6040516101719190611651565b3480156101c857600080fd5b506101dc6101d736600461165f565b61062b565b604051610171919061173c565b3480156101f557600080fd5b5060975460ff166101af565b34801561020d57600080fd5b5061014f61021c36600461174d565b61065e565b34801561022d57600080fd5b5061014f61023c366004611628565b61070c565b34801561024d57600080fd5b5061014f61073f565b34801561026257600080fd5b5061014f610748565b34801561027757600080fd5b506101af610286366004611628565b60c96020526000908152604090205460ff1681565b3480156102a757600080fd5b5061014f6102b6366004611628565b61077c565b3480156102c757600080fd5b5061014f6107af565b3480156102dc57600080fd5b506101646102eb36600461165f565b6107dc565b3480156102fc57600080fd5b506065546001600160a01b03166040516101719190611793565b34801561032257600080fd5b5061014f6103313660046117a1565b610871565b34801561034257600080fd5b5061014f6103513660046112f6565b6108e2565b34801561036257600080fd5b5060cb54610376906001600160a01b031681565b6040516101719190611805565b34801561038f57600080fd5b5061014f61039e366004611628565b610915565b3480156103af57600080fd5b5061014f6103be366004611813565b61096e565b3480156103cf57600080fd5b5060ca54610376906001600160a01b031681565b6065546001600160a01b031633146104165760405162461bcd60e51b815260040161040d906118a0565b60405180910390fd5b61041f81610a17565b50565b600061043060975460ff1690565b1561044d5760405162461bcd60e51b815260040161040d906118d7565b600260015414156104705760405162461bcd60e51b815260040161040d9061191b565b6002600155600061048084610a94565b60ca54909150610499906001600160a01b031682610b61565b60ca549091506104b4906001600160a01b0316333084610bca565b60cb5460ca546104d1916001600160a01b03918216911683610c28565b60cb5460ca546001600160a01b039182169163f718845391349116848a886104fb8e838e8e61062b565b60016040518863ffffffff1660e01b815260040161051e9695949392919061198b565b6020604051808303818588803b15801561053757600080fd5b505af115801561054b573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061057091906119ec565b60cb5460ca54919350610591916001600160a01b0390811691166000610c28565b7fc223cf6bda1a6d43dd56cef5d4b95b1a593f38f295323e7e59a30522bf49c1cf87878787876040516105c8959493929190611b36565b60405180910390a1506001805595945050505050565b6105e73361060d565b6106035760405162461bcd60e51b815260040161040d90611bbb565b61060b610cf0565b565b6001600160a01b0316600090815260c9602052604090205460ff1690565b6060848484846040516020016106449493929190611bcb565b60405160208183030381529060405290505b949350505050565b6065546001600160a01b031633146106885760405162461bcd60e51b815260040161040d906118a0565b6040516000906001600160a01b0384169083156108fc0290849084818181858888f193505050509050806106ce5760405162461bcd60e51b815260040161040d90611c54565b7f2c876ecb97b3c6854f2488d373403f903eacb800e51c159a5c0c7a9c857e482783836040516106ff929190611c64565b60405180910390a1505050565b6065546001600160a01b031633146107365760405162461bcd60e51b815260040161040d906118a0565b61041f81610d56565b61060b33610d56565b6065546001600160a01b031633146107725760405162461bcd60e51b815260040161040d906118a0565b61060b6000610dcb565b6065546001600160a01b031633146107a65760405162461bcd60e51b815260040161040d906118a0565b61041f81610e1d565b6107b83361060d565b6107d45760405162461bcd60e51b815260040161040d90611bbb565b61060b610e96565b60cb546000906001600160a01b0316635335dca26107fc8787878761062b565b6040518263ffffffff1660e01b8152600401610818919061173c565b60206040518083038186803b15801561083057600080fd5b505afa158015610844573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086891906119ec565b95945050505050565b6065546001600160a01b0316331461089b5760405162461bcd60e51b815260040161040d906118a0565b6108af6001600160a01b0384168383610eee565b7f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b63988383836040516106ff93929190611c7f565b6065546001600160a01b0316331461090c5760405162461bcd60e51b815260040161040d906118a0565b61041f81610f0d565b6065546001600160a01b0316331461093f5760405162461bcd60e51b815260040161040d906118a0565b6001600160a01b0381166109655760405162461bcd60e51b815260040161040d90611cea565b61041f81610dcb565b600061097a6001610f7e565b90508015610992576000805461ff0019166101001790555b61099b85610dcb565b6109a48461100b565b6109ad83611032565b6109b682611059565b8015610a01576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906109f890600190611d0e565b60405180910390a15b5050505050565b6001600160a01b03163b151590565b6001600160a01b038116610a3d5760405162461bcd60e51b815260040161040d90611d50565b60ca80546001600160a01b0319166001600160a01b0383169081179091556040517f5ba6b30cd4b2f9e9e67f4feb9b9df10d5da3b057598e6901b217b7d590345e3091610a8991611805565b60405180910390a150565b600080825111610ab65760405162461bcd60e51b815260040161040d90611da2565b60005b8251811015610b5b5760005b838281518110610ad757610ad7611db2565b60200260200101516020015151811015610b4857610b34848381518110610b0057610b00611db2565b6020026020010151602001518281518110610b1d57610b1d611db2565b60200260200101518461108090919063ffffffff16565b925080610b4081611dde565b915050610ac5565b5080610b5381611dde565b915050610ab9565b50919050565b600080610b6d84611093565b90506012808211610ba057610b97610b858284611124565b610b9090600a611f07565b8590611130565b92505050610bc4565b610bbf610bad8383611124565b610bb890600a611f07565b859061113c565b925050505b92915050565b610c22846323b872dd60e01b858585604051602401610beb93929190611f16565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611148565b50505050565b801580610cb05750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e90610c5e9030908690600401611f24565b60206040518083038186803b158015610c7657600080fd5b505afa158015610c8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cae91906119ec565b155b610ccc5760405162461bcd60e51b815260040161040d90611f92565b610ceb8363095ea7b360e01b8484604051602401610beb929190611fa2565b505050565b60975460ff16610d125760405162461bcd60e51b815260040161040d90611fdb565b6097805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610d4c9190611793565b60405180910390a1565b610d5f8161060d565b610d7b5760405162461bcd60e51b815260040161040d9061201f565b6001600160a01b038116600090815260c9602052604090819020805460ff19169055517fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90610a89908390611793565b606580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610e268161060d565b15610e435760405162461bcd60e51b815260040161040d9061206d565b6001600160a01b038116600090815260c9602052604090819020805460ff19166001179055517f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890610a89908390611793565b60975460ff1615610eb95760405162461bcd60e51b815260040161040d906118d7565b6097805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610d3f3390565b610ceb8363a9059cbb60e01b8484604051602401610beb929190611fa2565b6001600160a01b038116610f335760405162461bcd60e51b815260040161040d90611d50565b60cb80546001600160a01b0319166001600160a01b0383161790556040517fd3a626089875a97be3c9702fd526ab6e28bd30904def789b36b301f03afadcaf90610a89908390611805565b60008054610100900460ff1615610fc5578160ff166001148015610fa15750303b155b610fbd5760405162461bcd60e51b815260040161040d906120c8565b506000919050565b60005460ff808416911610610fec5760405162461bcd60e51b815260040161040d906120c8565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff166107a65760405162461bcd60e51b815260040161040d90612120565b600054610100900460ff1661090c5760405162461bcd60e51b815260040161040d90612120565b600054610100900460ff166104165760405162461bcd60e51b815260040161040d90612120565b600061108c8284612130565b9392505050565b6000806000836001600160a01b03166040516110ae90612148565b600060405180830381855afa9150503d80600081146110e9576040519150601f19603f3d011682016040523d82523d6000602084013e6110ee565b606091505b5091509150816111105760405162461bcd60e51b815260040161040d90612191565b8080602001905181019061065691906119ec565b600061108c82846121a1565b600061108c82846121ce565b600061108c82846121e2565b600061119d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111d79092919063ffffffff16565b805190915015610ceb57808060200190518101906111bb9190612214565b610ceb5760405162461bcd60e51b815260040161040d9061227c565b60606106568484600085856001600160a01b0385163b6112095760405162461bcd60e51b815260040161040d906122c0565b600080866001600160a01b0316858760405161122591906122f2565b60006040518083038185875af1925050503d8060008114611262576040519150601f19603f3d011682016040523d82523d6000602084013e611267565b606091505b5091509150611277828286611282565b979650505050505050565b6060831561129157508161108c565b8251156112a15782518084602001fd5b8160405162461bcd60e51b815260040161040d919061173c565b60006001600160a01b038216610bc4565b6000610bc4826112bb565b6112e0816112cc565b811461041f57600080fd5b8035610bc4816112d7565b60006020828403121561130b5761130b600080fd5b600061065684846112eb565b6112e0816112bb565b8035610bc481611317565b67ffffffffffffffff81166112e0565b8035610bc48161132b565b806112e0565b8035610bc481611346565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff8211171561139357611393611357565b6040525050565b60006113a560405190565b9050611006828261136d565b600067ffffffffffffffff8211156113cb576113cb611357565b5060209081020190565b6005811061041f57600080fd5b8035610bc4816113d5565b60006114006113fb846113b1565b61139a565b8381529050602080820190840283018581111561141f5761141f600080fd5b835b818110156114435780611434888261134c565b84525060209283019201611421565b5050509392505050565b600082601f83011261146157611461600080fd5b81356106568482602086016113ed565b60006040828403121561148657611486600080fd5b611490604061139a565b9050600061149e84846113e2565b825250602082013567ffffffffffffffff8111156114be576114be600080fd5b6114ca8482850161144d565b60208301525092915050565b60006114e46113fb846113b1565b8381529050602080820190840283018581111561150357611503600080fd5b835b8181101561144357803567ffffffffffffffff81111561152757611527600080fd5b8086016115348982611471565b8552505060209283019201611505565b600082601f83011261155857611558600080fd5b81356106568482602086016114d6565b63ffffffff81166112e0565b8035610bc481611568565b600080600080600060a0868803121561159a5761159a600080fd5b60006115a68888611320565b95505060206115b78882890161133b565b94505060406115c88882890161134c565b935050606086013567ffffffffffffffff8111156115e8576115e8600080fd5b6115f488828901611544565b925050608061160588828901611574565b9150509295509295909350565b805b82525050565b60208101610bc48284611612565b60006020828403121561163d5761163d600080fd5b60006106568484611320565b801515611614565b60208101610bc48284611649565b6000806000806080858703121561167857611678600080fd5b60006116848787611320565b94505060206116958782880161133b565b93505060406116a68782880161134c565b925050606085013567ffffffffffffffff8111156116c6576116c6600080fd5b6116d287828801611544565b91505092959194509250565b60005b838110156116f95781810151838201526020016116e1565b83811115610c225750506000910152565b6000611714825190565b80845260208401935061172b8185602086016116de565b601f01601f19169290920192915050565b6020808252810161108c818461170a565b6000806040838503121561176357611763600080fd5b600061176f8585611320565b92505060206117808582860161134c565b9150509250929050565b611614816112bb565b60208101610bc4828461178a565b6000806000606084860312156117b9576117b9600080fd5b60006117c586866112eb565b93505060206117d686828701611320565b92505060406117e78682870161134c565b9150509250925092565b6000610bc4826112cc565b611614816117f1565b60208101610bc482846117fc565b6000806000806080858703121561182c5761182c600080fd5b60006118388787611320565b945050602061184987828801611320565b935050604061185a878288016112eb565b92505060606116d2878288016112eb565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b60208082528101610bc48161186b565b601081526000602082016f14185d5cd8589b194e881c185d5cd95960821b81529150611899565b60208082528101610bc4816118b0565b601f81526000602082017f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081529150611899565b60208082528101610bc4816118e7565b67ffffffffffffffff8116611614565b63ffffffff8116611614565b634e487b7160e01b600052602160045260246000fd5b6007811061041f5761041f611947565b806110068161195d565b6000610bc48261196d565b61161481611977565b60c08101611999828961178a565b6119a66020830188611612565b6119b3604083018761192b565b6119c0606083018661193b565b81810360808301526119d2818561170a565b905061127760a0830184611982565b8051610bc481611346565b600060208284031215611a0157611a01600080fd5b600061065684846119e1565b6005811061041f5761041f611947565b8061100681611a0d565b6000610bc482611a1d565b61161481611a27565b6000611a478383611612565b505060200190565b6000611a59825190565b80845260209384019383018060005b83811015611a8d578151611a7c8882611a3b565b975060208301925050600101611a68565b509495945050505050565b80516000906040840190611aac8582611a32565b50602083015184820360208601526108688282611a4f565b600061108c8383611a98565b6000611ada825190565b80845260208401935083602082028501611af48560200190565b8060005b85811015611b295784840389528151611b118582611ac4565b94506020830160209a909a0199925050600101611af8565b5091979650505050505050565b60a08101611b44828861178a565b611b51602083018761192b565b611b5e6040830186611612565b8181036060830152611b708185611ad0565b9050611b7f608083018461193b565b9695505050505050565b60208082527f5061757365723a2063616c6c6572206973206e6f74207468652070617573657291019081526000611899565b60208082528101610bc481611b89565b60808101611bd9828761178a565b611be6602083018661192b565b611bf36040830185611612565b8181036060830152611b7f8184611ad0565b602f81526000602082017f4f776e6572576974686472617761626c653a207769746864726177206e61746981526e1d99481d1bdad95b8819985a5b1959608a1b602082015291505b5060400190565b60208082528101610bc481611c05565b60408101611c7282856117fc565b61108c6020830184611612565b60608101611c8d82866117fc565b611c9a602083018561178a565b6106566040830184611612565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150611c4d565b60208082528101610bc481611ca7565b600060ff8216610bc4565b61161481611cfa565b60208101610bc48284611d05565b601d81526000602082017f537263436861696e5061796d656e743a207a65726f206164647265737300000081529150611899565b60208082528101610bc481611d1c565b602581526000602082017f5265736f75726365446174613a20696e76616c6964207061796c6f616473206c8152640cadccee8d60db1b60208201529150611c4d565b60208082528101610bc481611d60565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611df257611df2611dc8565b5060010190565b80825b6001851115611e3857808604811115611e1757611e17611dc8565b6001851615611e2557908102905b8002611e318560011c90565b9450611dfc565b94509492505050565b600082611e505750600161108c565b81611e5d5750600061108c565b8160018114611e735760028114611e7d57611eaa565b600191505061108c565b60ff841115611e8e57611e8e611dc8565b8360020a915084821115611ea457611ea4611dc8565b5061108c565b5060208310610133831016604e8410600b8410161715611edd575081810a83811115611ed857611ed8611dc8565b61108c565b611eea8484846001611df9565b92509050818404811115611f0057611f00611dc8565b0292915050565b600061108c6000198484611e41565b60608101611c8d828661178a565b60408101611f32828561178a565b61108c602083018461178a565b603681526000602082017f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f81527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60208201529150611c4d565b60208082528101610bc481611f3f565b60408101611c72828561178a565b601481526000602082017314185d5cd8589b194e881b9bdd081c185d5cd95960621b81529150611899565b60208082528101610bc481611fb0565b601d81526000602082017f5061757365723a206163636f756e74206973206e6f742070617573657200000081529150611899565b60208082528101610bc481611feb565b602181526000602082017f5061757365723a206163636f756e7420697320616c72656164792070617573658152603960f91b60208201529150611c4d565b60208082528101610bc48161202f565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150611c4d565b60208082528101610bc48161207d565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150611c4d565b60208082528101610bc4816120d8565b6000821982111561214357612143611dc8565b500190565b63313ce56760e01b8152600060048201610bc4565b601b81526000602082017f5265736f75726365446174613a20696e76616c696420746f6b656e000000000081529150611899565b60208082528101610bc48161215d565b6000828210156121b3576121b3611dc8565b500390565b634e487b7160e01b600052601260045260246000fd5b6000826121dd576121dd6121b8565b500490565b60008160001904831182151516156121fc576121fc611dc8565b500290565b8015156112e0565b8051610bc481612201565b60006020828403121561222957612229600080fd5b60006106568484612209565b602a81526000602082017f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b60208201529150611c4d565b60208082528101610bc481612235565b601d81526000602082017f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081529150611899565b60208082528101610bc48161228c565b60006122da825190565b6122e88185602086016116de565b9290920192915050565b600061108c82846122d056fea26469706673582212205fe17c9fdc9bc8589ff4d87b41bcf3952d28e313633fa61768bd48f4b734c39e64736f6c63430008090033";
var SrcChainPayment__factory = /** @class */ (function (_super) {
    __extends(SrcChainPayment__factory, _super);
    function SrcChainPayment__factory() {
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
    SrcChainPayment__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    SrcChainPayment__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    SrcChainPayment__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SrcChainPayment__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SrcChainPayment__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SrcChainPayment__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SrcChainPayment__factory.bytecode = _bytecode;
    SrcChainPayment__factory.abi = _abi;
    return SrcChainPayment__factory;
}(ethers_1.ContractFactory));
exports.SrcChainPayment__factory = SrcChainPayment__factory;
