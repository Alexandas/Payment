/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ARStorageController,
  ARStorageControllerInterface,
} from "../ARStorageController";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Expanded",
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
        internalType: "contract IResourceAdaptor",
        name: "adaptor",
        type: "address",
      },
    ],
    name: "ResourceAdaptorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum ResourceData.ResourceType",
        name: "resourceType",
        type: "uint8",
      },
    ],
    name: "ResourceTypeUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "adaptor",
    outputs: [
      {
        internalType: "contract IResourceAdaptor",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "dstChainPayment",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "expand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "dstChainPayment",
        type: "address",
      },
      {
        internalType: "contract IResourceAdaptor",
        name: "adaptor",
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
    name: "price",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "resourceType",
    outputs: [
      {
        internalType: "enum ResourceData.ResourceType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
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
        internalType: "contract IResourceAdaptor",
        name: "_adaptor",
        type: "address",
      },
    ],
    name: "setResourceAdaptor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum ResourceData.ResourceType",
        name: "_resourceType",
        type: "uint8",
      },
    ],
    name: "setResourceType",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50600054610100900460ff1661002c5760005460ff1615610034565b610034610093565b6100595760405162461bcd60e51b8152600401610050906100bd565b60405180910390fd5b600054610100900460ff1615801561007b576000805461ffff19166101011790555b801561008d576000805461ff00191690555b50610115565b60006100a8306100ae60201b6106031760201c565b15905090565b6001600160a01b03163b151590565b6020808252810161010f81602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b92915050565b610cca806101246000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063c2cd9b2b11610066578063c2cd9b2b146101e1578063f2fde38b14610201578063f60cfa5914610214578063f7d221901461022757600080fd5b8063715018a6146101a45780638da5cb5b146101ac578063a035b1fe146101c6578063c0c53b8b146101ce57600080fd5b80634513f23d116100d35780634513f23d1461014b578063467aa8de1461015e578063691b2a6d146101715780636c7f15421461018457600080fd5b806306570749146100fa5780630ab2b6b914610123578063429aafd914610136575b600080fd5b61010d610108366004610849565b610248565b60405161011a919061087a565b60405180910390f35b61010d610131366004610849565b6102dc565b6101496101443660046108ad565b61031a565b005b6101496101593660046108ed565b610359565b61014961016c36600461090e565b61038c565b61014961017f366004610963565b61042e565b61010d610192366004610849565b60009081526067602052604090205490565b610149610461565b6033546001600160a01b03165b60405161011a919061098d565b61010d610497565b6101496101dc36600461099b565b610528565b6066546101f4906001600160a01b031681565b60405161011a91906109ff565b61014961020f3660046108ad565b6105aa565b6065546101b9906001600160a01b031681565b60665461023b90600160a01b900460ff1681565b60405161011a9190610a56565b60665460405163a6170b5160e01b81526000916001600160a01b0381169163a6170b519161028691600160a01b90910460ff16908690600401610a64565b60206040518083038186803b15801561029e57600080fd5b505afa1580156102b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d69190610a8a565b92915050565b606654604051630d1f7d6360e31b81526000916001600160a01b038116916368fbeb189161028691600160a01b90910460ff16908690600401610a64565b6033546001600160a01b0316331461034d5760405162461bcd60e51b815260040161034490610aab565b60405180910390fd5b61035681610612565b50565b6033546001600160a01b031633146103835760405162461bcd60e51b815260040161034490610aab565b61035681610668565b6065546001600160a01b031633146103b65760405162461bcd60e51b815260040161034490610b42565b60006103c182610248565b6000848152606760205260409020549091506103dd90826106b3565b6000848152606760205260409081902091909155517fc94dc324f0c4f025f229aaac825915c9524860787daeb3d08728a9818b393915906104219085908590610b52565b60405180910390a1505050565b6033546001600160a01b031633146104585760405162461bcd60e51b815260040161034490610aab565b610356816106c6565b6033546001600160a01b0316331461048b5760405162461bcd60e51b815260040161034490610aab565b610495600061071f565b565b60665460405163912397c360e01b81526000916001600160a01b0381169163912397c3916104d391600160a01b90910460ff1690600401610a56565b60206040518083038186803b1580156104eb57600080fd5b505afa1580156104ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105239190610a8a565b905090565b600054610100900460ff166105435760005460ff1615610547565b303b155b6105635760405162461bcd60e51b815260040161034490610bab565b600054610100900460ff16158015610585576000805461ffff19166101011790555b6105928484846003610771565b80156105a4576000805461ff00191690555b50505050565b6033546001600160a01b031633146105d45760405162461bcd60e51b815260040161034490610aab565b6001600160a01b0381166105fa5760405162461bcd60e51b815260040161034490610bfe565b6103568161071f565b6001600160a01b03163b151590565b606580546001600160a01b0319166001600160a01b0383161790556040517ff2071e1b38ab3c561fb5d090a912ad00d911946da5f417b4eac46024a2f6ed609061065d90839061098d565b60405180910390a150565b606680546001600160a01b0319166001600160a01b0383161790556040517fcb398744d70dd9f7eb9e1e65c9c74f4d3276143240e25316135eb6585db6c1c19061065d9083906109ff565b60006106bf8284610c24565b9392505050565b6066805482919060ff60a01b1916600160a01b8360048111156106eb576106eb610a0d565b02179055507ffd8efb560fb934faf6ee365a559c93f9a480bad1f14c5041d2cb8468296f87f08160405161065d9190610a56565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166107985760405162461bcd60e51b815260040161034490610c84565b6107a18461071f565b6107aa836107bc565b6107b3826107e3565b6105a48161080a565b600054610100900460ff1661034d5760405162461bcd60e51b815260040161034490610c84565b600054610100900460ff166103835760405162461bcd60e51b815260040161034490610c84565b600054610100900460ff166104585760405162461bcd60e51b815260040161034490610c84565b805b811461035657600080fd5b80356102d681610831565b60006020828403121561085e5761085e600080fd5b600061086a848461083e565b949350505050565b805b82525050565b602081016102d68284610872565b60006001600160a01b0382166102d6565b61083381610888565b80356102d681610899565b6000602082840312156108c2576108c2600080fd5b600061086a84846108a2565b60006102d682610888565b610833816108ce565b80356102d6816108d9565b60006020828403121561090257610902600080fd5b600061086a84846108e2565b6000806040838503121561092457610924600080fd5b6000610930858561083e565b92505060206109418582860161083e565b9150509250929050565b6005811061035657600080fd5b80356102d68161094b565b60006020828403121561097857610978600080fd5b600061086a8484610958565b61087481610888565b602081016102d68284610984565b6000806000606084860312156109b3576109b3600080fd5b60006109bf86866108a2565b93505060206109d0868287016108a2565b92505060406109e1868287016108e2565b9150509250925092565b60006102d6826108ce565b610874816109eb565b602081016102d682846109f6565b634e487b7160e01b600052602160045260246000fd5b6005811061035657610356610a0d565b80610a3d81610a23565b919050565b60006102d682610a33565b61087481610a42565b602081016102d68284610a4d565b60408101610a728285610a4d565b6106bf6020830184610872565b80516102d681610831565b600060208284031215610a9f57610a9f600080fd5b600061086a8484610a7f565b60208082528181019081527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726040830152606082016102d6565b603781526000602082017f447374436861696e5061796d656e74577261707065723a2063616c6c6572206981527f73206e6f742064737420636861696e207061796d656e74000000000000000000602082015291505b5060400190565b602080825281016102d681610ae5565b60408101610a728285610872565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150610b3b565b602080825281016102d681610b60565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150610b3b565b602080825281016102d681610bbb565b634e487b7160e01b600052601160045260246000fd5b60008219821115610c3757610c37610c0e565b500190565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150610b3b565b602080825281016102d681610c3c56fea2646970667358221220d5a6de8fa8c8ae6f21da27595fb9c2d2004c6824d1562913ab99176255d9ed6f64736f6c63430008090033";

export class ARStorageController__factory extends ContractFactory {
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
  ): Promise<ARStorageController> {
    return super.deploy(overrides || {}) as Promise<ARStorageController>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ARStorageController {
    return super.attach(address) as ARStorageController;
  }
  connect(signer: Signer): ARStorageController__factory {
    return super.connect(signer) as ARStorageController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ARStorageControllerInterface {
    return new utils.Interface(_abi) as ARStorageControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ARStorageController {
    return new Contract(address, _abi, signerOrProvider) as ARStorageController;
  }
}
