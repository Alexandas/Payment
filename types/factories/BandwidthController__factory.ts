/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BandwidthController,
  BandwidthControllerInterface,
} from "../BandwidthController";

const _abi = [
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
  "0x608060405234801561001057600080fd5b50600054610100900460ff1661002c5760005460ff1615610034565b6100346100d5565b61009b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff161580156100bd576000805461ffff19166101011790555b80156100cf576000805461ff00191690555b506100ff565b60006100ea306100f060201b6105221760201c565b15905090565b6001600160a01b03163b151590565b6108f68061010e6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636c7f15421161008c578063a035b1fe11610066578063a035b1fe146101a8578063c2cd9b2b146101b0578063f2fde38b146101c3578063f7d22190146101d657600080fd5b80636c7f15421461015b578063715018a61461017b5780638da5cb5b1461018357600080fd5b806306570749146100d45780630ab2b6b9146100fa5780634513f23d1461010d578063467aa8de14610122578063485cc95514610135578063691b2a6d14610148575b600080fd5b6100e76100e23660046106d9565b6101f7565b6040519081526020015b60405180910390f35b6100e76101083660046106d9565b61028b565b61012061011b366004610707565b6102c9565b005b610120610130366004610724565b610308565b610120610143366004610746565b610380565b61012061015636600461077f565b610390565b6100e76101693660046106d9565b60009081526066602052604090205490565b6101206103c3565b6033546001600160a01b03165b6040516001600160a01b0390911681526020016100f1565b6100e76103f9565b606554610190906001600160a01b031681565b6101206101d1366004610707565b61048a565b6065546101ea90600160a01b900460ff1681565b6040516100f191906107d8565b60655460405163a6170b5160e01b81526000916001600160a01b0381169163a6170b519161023591600160a01b90910460ff169086906004016107e6565b60206040518083038186803b15801561024d57600080fd5b505afa158015610261573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102859190610801565b92915050565b606554604051630d1f7d6360e31b81526000916001600160a01b038116916368fbeb189161023591600160a01b90910460ff169086906004016107e6565b6033546001600160a01b031633146102fc5760405162461bcd60e51b81526004016102f39061081a565b60405180910390fd5b61030581610531565b50565b6000610313826101f7565b60008481526066602052604090205490915061032f9082610586565b6000848152606660209081526040918290209290925580518581529182018490527fc94dc324f0c4f025f229aaac825915c9524860787daeb3d08728a9818b393915910160405180910390a1505050565b61038c82826002610599565b5050565b6033546001600160a01b031633146103ba5760405162461bcd60e51b81526004016102f39061081a565b610305816105e0565b6033546001600160a01b031633146103ed5760405162461bcd60e51b81526004016102f39061081a565b6103f76000610639565b565b60655460405163912397c360e01b81526000916001600160a01b0381169163912397c39161043591600160a01b90910460ff16906004016107d8565b60206040518083038186803b15801561044d57600080fd5b505afa158015610461573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104859190610801565b905090565b6033546001600160a01b031633146104b45760405162461bcd60e51b81526004016102f39061081a565b6001600160a01b0381166105195760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102f3565b61030581610639565b6001600160a01b03163b151590565b606580546001600160a01b0319166001600160a01b0383169081179091556040519081527fcb398744d70dd9f7eb9e1e65c9c74f4d3276143240e25316135eb6585db6c1c1906020015b60405180910390a150565b6000610592828461084f565b9392505050565b600054610100900460ff166105c05760405162461bcd60e51b81526004016102f390610875565b6105c983610639565b6105d28261068b565b6105db816106b2565b505050565b6065805482919060ff60a01b1916600160a01b836004811115610605576106056107a0565b02179055507ffd8efb560fb934faf6ee365a559c93f9a480bad1f14c5041d2cb8468296f87f08160405161057b91906107d8565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166102fc5760405162461bcd60e51b81526004016102f390610875565b600054610100900460ff166103ba5760405162461bcd60e51b81526004016102f390610875565b6000602082840312156106eb57600080fd5b5035919050565b6001600160a01b038116811461030557600080fd5b60006020828403121561071957600080fd5b8135610592816106f2565b6000806040838503121561073757600080fd5b50508035926020909101359150565b6000806040838503121561075957600080fd5b8235610764816106f2565b91506020830135610774816106f2565b809150509250929050565b60006020828403121561079157600080fd5b81356005811061059257600080fd5b634e487b7160e01b600052602160045260246000fd5b600581106107d457634e487b7160e01b600052602160045260246000fd5b9052565b6020810161028582846107b6565b604081016107f482856107b6565b8260208301529392505050565b60006020828403121561081357600080fd5b5051919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000821982111561087057634e487b7160e01b600052601160045260246000fd5b500190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212205eed67c3e851aec5c2fd1fb2f95807c6bf43c897f3b0bf106bd554a4e58d704364736f6c63430008090033";

export class BandwidthController__factory extends ContractFactory {
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
  ): Promise<BandwidthController> {
    return super.deploy(overrides || {}) as Promise<BandwidthController>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BandwidthController {
    return super.attach(address) as BandwidthController;
  }
  connect(signer: Signer): BandwidthController__factory {
    return super.connect(signer) as BandwidthController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BandwidthControllerInterface {
    return new utils.Interface(_abi) as BandwidthControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BandwidthController {
    return new Contract(address, _abi, signerOrProvider) as BandwidthController;
  }
}
