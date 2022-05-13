/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SrcChainPayment,
  SrcChainPaymentInterface,
} from "../SrcChainPayment";

const _abi = [
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
        internalType: "struct ResourceData.Payload[]",
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
        internalType: "struct ResourceData.Payload[]",
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
        internalType: "struct ResourceData.Payload[]",
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
        name: "_messageSender",
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
        internalType: "struct ResourceData.Payload[]",
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

const _bytecode =
  "0x60806040523480156200001157600080fd5b50600054610100900460ff166200002f5760005460ff161562000039565b620000396200009e565b620000615760405162461bcd60e51b81526004016200005890620000cb565b60405180910390fd5b600054610100900460ff1615801562000084576000805461ffff19166101011790555b801562000097576000805461ff00191690555b5062000124565b6000620000b630620000bc60201b62000af31760201c565b15905090565b6001600160a01b03163b151590565b602080825281016200011e81602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b92915050565b611fa780620001346000396000f3fe6080604052600436106101355760003560e01c806382dc1ec4116100ab578063bb3711111161006f578063bb37111114610341578063bc67f83214610361578063d67bdd2514610381578063f2fde38b146103ae578063f8c8765e146103ce578063fc0c546a146103ee57600080fd5b806382dc1ec4146102a65780638456cb59146102c65780638c22ea5d146102db5780638da5cb5b146102fb57806393563a951461032157600080fd5b80635c975abb116100fd5780635c975abb146101f4578063699256f41461020c5780636b2c0f551461022c5780636ef8d66d1461024c578063715018a61461026157806380f51c121461027657600080fd5b8063144fa6d71461013a578063201ce97c1461015c5780633f4ba83a1461018557806346fbf68e1461019a5780635b45197d146101c7575b600080fd5b34801561014657600080fd5b5061015a610155366004611140565b61040e565b005b61016f61016a3660046113ce565b61044d565b60405161017c9190611469565b60405180910390f35b34801561019157600080fd5b5061015a6105fc565b3480156101a657600080fd5b506101ba6101b5366004611477565b61062b565b60405161017c91906114a0565b3480156101d357600080fd5b506101e76101e23660046114ae565b610649565b60405161017c919061158b565b34801561020057600080fd5b5060655460ff166101ba565b34801561021857600080fd5b5061015a61022736600461159c565b61067c565b34801561023857600080fd5b5061015a610247366004611477565b61072a565b34801561025857600080fd5b5061015a61075d565b34801561026d57600080fd5b5061015a610766565b34801561028257600080fd5b506101ba610291366004611477565b60976020526000908152604090205460ff1681565b3480156102b257600080fd5b5061015a6102c1366004611477565b61079a565b3480156102d257600080fd5b5061015a6107cd565b3480156102e757600080fd5b5061016f6102f63660046114ae565b6107fa565b34801561030757600080fd5b506033546001600160a01b031660405161017c91906115e2565b34801561032d57600080fd5b5061015a61033c3660046115f0565b61088f565b34801561034d57600080fd5b5061016f61035c366004611640565b610900565b34801561036d57600080fd5b5061015a61037c366004611140565b6109cd565b34801561038d57600080fd5b5060ca546103a1906001600160a01b031681565b60405161017c919061168f565b3480156103ba57600080fd5b5061015a6103c9366004611477565b610a00565b3480156103da57600080fd5b5061015a6103e936600461169d565b610a59565b3480156103fa57600080fd5b5060cb546103a1906001600160a01b031681565b6033546001600160a01b031633146104415760405162461bcd60e51b81526004016104389061172a565b60405180910390fd5b61044a81610b02565b50565b600061045b60655460ff1690565b156104785760405162461bcd60e51b815260040161043890611761565b6002609854141561049b5760405162461bcd60e51b8152600401610438906117a5565b600260985560006104ab84610900565b90506104b681610b59565b60cb549091506104d1906001600160a01b0316333084610b70565b60ca5460cb546104ee916001600160a01b03918216911683610bce565b60ca5460cb546001600160a01b039182169163f718845391349116848a886105188e838e8e610649565b60016040518863ffffffff1660e01b815260040161053b96959493929190611815565b6020604051808303818588803b15801561055457600080fd5b505af1158015610568573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061058d9190611876565b60ca5460cb549193506105ae916001600160a01b0390811691166000610bce565b7fc223cf6bda1a6d43dd56cef5d4b95b1a593f38f295323e7e59a30522bf49c1cf87878787876040516105e59594939291906119c0565b60405180910390a150600160985595945050505050565b6106053361062b565b6106215760405162461bcd60e51b815260040161043890611a45565b610629610c96565b565b6001600160a01b031660009081526097602052604090205460ff1690565b6060848484846040516020016106629493929190611a55565b60405160208183030381529060405290505b949350505050565b6033546001600160a01b031633146106a65760405162461bcd60e51b81526004016104389061172a565b6040516000906001600160a01b0384169083156108fc0290849084818181858888f193505050509050806106ec5760405162461bcd60e51b815260040161043890611ad4565b7f2c876ecb97b3c6854f2488d373403f903eacb800e51c159a5c0c7a9c857e4827838360405161071d929190611ae4565b60405180910390a1505050565b6033546001600160a01b031633146107545760405162461bcd60e51b81526004016104389061172a565b61044a81610cfc565b61062933610cfc565b6033546001600160a01b031633146107905760405162461bcd60e51b81526004016104389061172a565b6106296000610d71565b6033546001600160a01b031633146107c45760405162461bcd60e51b81526004016104389061172a565b61044a81610dc3565b6107d63361062b565b6107f25760405162461bcd60e51b815260040161043890611a45565b610629610e3c565b60ca546000906001600160a01b0316635335dca261081a87878787610649565b6040518263ffffffff1660e01b8152600401610836919061158b565b60206040518083038186803b15801561084e57600080fd5b505afa158015610862573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108869190611876565b95945050505050565b6033546001600160a01b031633146108b95760405162461bcd60e51b81526004016104389061172a565b6108cd6001600160a01b0384168383610e94565b7f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b639883838360405161071d93929190611aff565b6000808251116109225760405162461bcd60e51b815260040161043890611b6e565b60005b82518110156109c75760005b83828151811061094357610943611b7e565b602002602001015160200151518110156109b4576109a084838151811061096c5761096c611b7e565b602002602001015160200151828151811061098957610989611b7e565b602002602001015184610eb390919063ffffffff16565b9250806109ac81611baa565b915050610931565b50806109bf81611baa565b915050610925565b50919050565b6033546001600160a01b031633146109f75760405162461bcd60e51b81526004016104389061172a565b61044a81610ec6565b6033546001600160a01b03163314610a2a5760405162461bcd60e51b81526004016104389061172a565b6001600160a01b038116610a505760405162461bcd60e51b815260040161043890611c08565b61044a81610d71565b600054610100900460ff16610a745760005460ff1615610a78565b303b155b610a945760405162461bcd60e51b815260040161043890611c63565b600054610100900460ff16158015610ab6576000805461ffff19166101011790555b610abf85610d71565b610ac884610f11565b610ad183610f38565b610ada82610f5f565b8015610aec576000805461ff00191690555b5050505050565b6001600160a01b03163b151590565b60cb80546001600160a01b0319166001600160a01b0383169081179091556040517f5ba6b30cd4b2f9e9e67f4feb9b9df10d5da3b057598e6901b217b7d590345e3091610b4e9161168f565b60405180910390a150565b6000610b6a8264e8d4a51000610f86565b92915050565b610bc8846323b872dd60e01b858585604051602401610b9193929190611c73565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610f92565b50505050565b801580610c565750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e90610c049030908690600401611c81565b60206040518083038186803b158015610c1c57600080fd5b505afa158015610c30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c549190611876565b155b610c725760405162461bcd60e51b815260040161043890611cef565b610c918363095ea7b360e01b8484604051602401610b91929190611cff565b505050565b60655460ff16610cb85760405162461bcd60e51b815260040161043890611d38565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610cf291906115e2565b60405180910390a1565b610d058161062b565b610d215760405162461bcd60e51b815260040161043890611d7c565b6001600160a01b03811660009081526097602052604090819020805460ff19169055517fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90610b4e9083906115e2565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610dcc8161062b565b15610de95760405162461bcd60e51b815260040161043890611dca565b6001600160a01b03811660009081526097602052604090819020805460ff19166001179055517f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890610b4e9083906115e2565b60655460ff1615610e5f5760405162461bcd60e51b815260040161043890611761565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ce53390565b610c918363a9059cbb60e01b8484604051602401610b91929190611cff565b6000610ebf8284611dda565b9392505050565b60ca80546001600160a01b0319166001600160a01b0383161790556040517fd3a626089875a97be3c9702fd526ab6e28bd30904def789b36b301f03afadcaf90610b4e90839061168f565b600054610100900460ff166107c45760405162461bcd60e51b815260040161043890611e3a565b600054610100900460ff166109f75760405162461bcd60e51b815260040161043890611e3a565b600054610100900460ff166104415760405162461bcd60e51b815260040161043890611e3a565b6000610ebf8284611e60565b6000610fe7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166110219092919063ffffffff16565b805190915015610c9157808060200190518101906110059190611e87565b610c915760405162461bcd60e51b815260040161043890611eef565b60606106748484600085856001600160a01b0385163b6110535760405162461bcd60e51b815260040161043890611f33565b600080866001600160a01b0316858760405161106f9190611f65565b60006040518083038185875af1925050503d80600081146110ac576040519150601f19603f3d011682016040523d82523d6000602084013e6110b1565b606091505b50915091506110c18282866110cc565b979650505050505050565b606083156110db575081610ebf565b8251156110eb5782518084602001fd5b8160405162461bcd60e51b8152600401610438919061158b565b60006001600160a01b038216610b6a565b6000610b6a82611105565b61112a81611116565b811461044a57600080fd5b8035610b6a81611121565b60006020828403121561115557611155600080fd5b60006106748484611135565b61112a81611105565b8035610b6a81611161565b67ffffffffffffffff811661112a565b8035610b6a81611175565b8061112a565b8035610b6a81611190565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff821117156111dd576111dd6111a1565b6040525050565b60006111ef60405190565b90506111fb82826111b7565b919050565b600067ffffffffffffffff82111561121a5761121a6111a1565b5060209081020190565b6005811061044a57600080fd5b8035610b6a81611224565b600061124f61124a84611200565b6111e4565b8381529050602080820190840283018581111561126e5761126e600080fd5b835b8181101561129257806112838882611196565b84525060209283019201611270565b5050509392505050565b600082601f8301126112b0576112b0600080fd5b813561067484826020860161123c565b6000604082840312156112d5576112d5600080fd5b6112df60406111e4565b905060006112ed8484611231565b825250602082013567ffffffffffffffff81111561130d5761130d600080fd5b6113198482850161129c565b60208301525092915050565b600061133361124a84611200565b8381529050602080820190840283018581111561135257611352600080fd5b835b8181101561129257803567ffffffffffffffff81111561137657611376600080fd5b80860161138389826112c0565b8552505060209283019201611354565b600082601f8301126113a7576113a7600080fd5b8135610674848260208601611325565b63ffffffff811661112a565b8035610b6a816113b7565b600080600080600060a086880312156113e9576113e9600080fd5b60006113f5888861116a565b955050602061140688828901611185565b945050604061141788828901611196565b935050606086013567ffffffffffffffff81111561143757611437600080fd5b61144388828901611393565b9250506080611454888289016113c3565b9150509295509295909350565b805b82525050565b60208101610b6a8284611461565b60006020828403121561148c5761148c600080fd5b6000610674848461116a565b801515611463565b60208101610b6a8284611498565b600080600080608085870312156114c7576114c7600080fd5b60006114d3878761116a565b94505060206114e487828801611185565b93505060406114f587828801611196565b925050606085013567ffffffffffffffff81111561151557611515600080fd5b61152187828801611393565b91505092959194509250565b60005b83811015611548578181015183820152602001611530565b83811115610bc85750506000910152565b6000611563825190565b80845260208401935061157a81856020860161152d565b601f01601f19169290920192915050565b60208082528101610ebf8184611559565b600080604083850312156115b2576115b2600080fd5b60006115be858561116a565b92505060206115cf85828601611196565b9150509250929050565b61146381611105565b60208101610b6a82846115d9565b60008060006060848603121561160857611608600080fd5b60006116148686611135565b93505060206116258682870161116a565b925050604061163686828701611196565b9150509250925092565b60006020828403121561165557611655600080fd5b813567ffffffffffffffff81111561166f5761166f600080fd5b61067484828501611393565b6000610b6a82611116565b6114638161167b565b60208101610b6a8284611686565b600080600080608085870312156116b6576116b6600080fd5b60006116c2878761116a565b94505060206116d38782880161116a565b93505060406116e487828801611135565b925050606061152187828801611135565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b60208082528101610b6a816116f5565b601081526000602082016f14185d5cd8589b194e881c185d5cd95960821b81529150611723565b60208082528101610b6a8161173a565b601f81526000602082017f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081529150611723565b60208082528101610b6a81611771565b67ffffffffffffffff8116611463565b63ffffffff8116611463565b634e487b7160e01b600052602160045260246000fd5b6007811061044a5761044a6117d1565b806111fb816117e7565b6000610b6a826117f7565b61146381611801565b60c0810161182382896115d9565b6118306020830188611461565b61183d60408301876117b5565b61184a60608301866117c5565b818103608083015261185c8185611559565b90506110c160a083018461180c565b8051610b6a81611190565b60006020828403121561188b5761188b600080fd5b6000610674848461186b565b6005811061044a5761044a6117d1565b806111fb81611897565b6000610b6a826118a7565b611463816118b1565b60006118d18383611461565b505060200190565b60006118e3825190565b80845260209384019383018060005b8381101561191757815161190688826118c5565b9750602083019250506001016118f2565b509495945050505050565b8051600090604084019061193685826118bc565b506020830151848203602086015261088682826118d9565b6000610ebf8383611922565b6000611964825190565b8084526020840193508360208202850161197e8560200190565b8060005b858110156119b3578484038952815161199b858261194e565b94506020830160209a909a0199925050600101611982565b5091979650505050505050565b60a081016119ce82886115d9565b6119db60208301876117b5565b6119e86040830186611461565b81810360608301526119fa818561195a565b9050611a0960808301846117c5565b9695505050505050565b60208082527f5061757365723a2063616c6c6572206973206e6f74207468652070617573657291019081526000611723565b60208082528101610b6a81611a13565b60808101611a6382876115d9565b611a7060208301866117b5565b611a7d6040830185611461565b8181036060830152611a09818461195a565b602581526000602082017f5061796d656e743a207769746864726177206e617469766520746f6b656e2066815264185a5b195960da1b602082015291505b5060400190565b60208082528101610b6a81611a8f565b60408101611af28285611686565b610ebf6020830184611461565b60608101611b0d8286611686565b611b1a60208301856115d9565b6106746040830184611461565b602a81526000602082017f5265736f75725061796c6f6164546f6f6c3a20696e76616c6964207061796c6f8152690c2c8e640d8cadccee8d60b31b60208201529150611acd565b60208082528101610b6a81611b27565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611bbe57611bbe611b94565b5060010190565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150611acd565b60208082528101610b6a81611bc5565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150611acd565b60208082528101610b6a81611c18565b60608101611b0d82866115d9565b60408101611c8f82856115d9565b610ebf60208301846115d9565b603681526000602082017f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f81527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60208201529150611acd565b60208082528101610b6a81611c9c565b60408101611af282856115d9565b601481526000602082017314185d5cd8589b194e881b9bdd081c185d5cd95960621b81529150611723565b60208082528101610b6a81611d0d565b601d81526000602082017f5061757365723a206163636f756e74206973206e6f742070617573657200000081529150611723565b60208082528101610b6a81611d48565b602181526000602082017f5061757365723a206163636f756e7420697320616c72656164792070617573658152603960f91b60208201529150611acd565b60208082528101610b6a81611d8c565b60008219821115611ded57611ded611b94565b500190565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150611acd565b60208082528101610b6a81611df2565b634e487b7160e01b600052601260045260246000fd5b600082611e6f57611e6f611e4a565b500490565b80151561112a565b8051610b6a81611e74565b600060208284031215611e9c57611e9c600080fd5b60006106748484611e7c565b602a81526000602082017f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b60208201529150611acd565b60208082528101610b6a81611ea8565b601d81526000602082017f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081529150611723565b60208082528101610b6a81611eff565b6000611f4d825190565b611f5b81856020860161152d565b9290920192915050565b6000610ebf8284611f4356fea2646970667358221220b3592249eb80f72981eff5e9dcb5b888d3a88e7d215f95f73eed3ec81f95838664736f6c63430008090033";

export class SrcChainPayment__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SrcChainPayment> {
    return super.deploy(overrides || {}) as Promise<SrcChainPayment>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SrcChainPayment {
    return super.attach(address) as SrcChainPayment;
  }
  connect(signer: Signer): SrcChainPayment__factory {
    return super.connect(signer) as SrcChainPayment__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SrcChainPaymentInterface {
    return new utils.Interface(_abi) as SrcChainPaymentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SrcChainPayment {
    return new Contract(address, _abi, signerOrProvider) as SrcChainPayment;
  }
}
