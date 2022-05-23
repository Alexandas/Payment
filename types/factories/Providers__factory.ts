/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Providers, ProvidersInterface } from "../Providers";

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
        internalType: "address",
        name: "provider",
        type: "address",
      },
    ],
    name: "AddProvider",
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
    ],
    name: "RemoveProvider",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
    ],
    name: "addProvider",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address[]",
        name: "_providers",
        type: "address[]",
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
        name: "provider",
        type: "address",
      },
    ],
    name: "isProvider",
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
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
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
        internalType: "address",
        name: "provider",
        type: "address",
      },
    ],
    name: "removeProvider",
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
  "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b620003251760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b610fb980620001db6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638a355a571161005b5780638a355a57146100ff5780638da5cb5b14610112578063946d92041461012b578063f2fde38b1461013e57600080fd5b8063238a4d1e1461008d57806346e2577a146100b65780636b074a07146100cb578063715018a6146100f7575b600080fd5b6100a061009b3660046109d4565b610151565b6040516100ad9190610a49565b60405180910390f35b6100c96100c4366004610a57565b6101a7565b005b6100a06100d9366004610a57565b6001600160a01b031660009081526065602052604090205460ff1690565b6100c96101dd565b6100c961010d366004610a57565b610213565b6033546001600160a01b03166040516100ad9190610a81565b6100c9610139366004610b32565b610246565b6100c961014c366004610a57565b6102cc565b6001600160a01b03831660009081526065602052604081205460ff166101925760405162461bcd60e51b815260040161018990610bc1565b60405180910390fd5b61019d848484610334565b90505b9392505050565b6033546001600160a01b031633146101d15760405162461bcd60e51b815260040161018990610c03565b6101da81610480565b50565b6033546001600160a01b031633146102075760405162461bcd60e51b815260040161018990610c03565b6102116000610517565b565b6033546001600160a01b0316331461023d5760405162461bcd60e51b815260040161018990610c03565b6101da81610569565b600061025260016105f1565b9050801561026a576000805461ff0019166101001790555b61027383610517565b61027c8261067e565b80156102c7576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906102be90600190610c27565b60405180910390a15b505050565b6033546001600160a01b031633146102f65760405162461bcd60e51b815260040161018990610c03565b6001600160a01b03811661031c5760405162461bcd60e51b815260040161018990610c7b565b6101da81610517565b6001600160a01b03163b151590565b6000806000610343858561070a565b9092509050600081600481111561035c5761035c610c8b565b14801561037a5750856001600160a01b0316826001600160a01b0316145b1561038a576001925050506101a0565b600080876001600160a01b0316631626ba7e60e01b88886040516024016103b2929190610d09565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516103f09190610d4b565b600060405180830381855afa9150503d806000811461042b576040519150601f19603f3d011682016040523d82523d6000602084013e610430565b606091505b5091509150818015610443575080516020145b801561047457508051630b135d3f60e11b906104689083016020908101908401610d72565b6001600160e01b031916145b98975050505050505050565b6001600160a01b03811660009081526065602052604090205460ff16156104b95760405162461bcd60e51b815260040161018990610dc7565b6001600160a01b03811660009081526065602052604090819020805460ff19166001179055517f635a554d7028e977037c71e4fefb0d02f19e160c13f01f813a18d362b4605c6d9061050c908390610a81565b60405180910390a150565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03811660009081526065602052604090205460ff166105a15760405162461bcd60e51b815260040161018990610bc1565b6001600160a01b03811660009081526065602052604090819020805460ff19169055517f8ab468b9f8f57e82f33d9a1742c03768ff84410a4911e8647bfa6418268769049061050c908390610a81565b60008054610100900460ff1615610638578160ff1660011480156106145750303b155b6106305760405162461bcd60e51b815260040161018990610e22565b506000919050565b60005460ff80841691161061065f5760405162461bcd60e51b815260040161018990610e22565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff166106a55760405162461bcd60e51b815260040161018990610e7a565b60008151116106c65760405162461bcd60e51b815260040161018990610ecd565b60005b8151811015610706576106f48282815181106106e7576106e7610edd565b6020026020010151610480565b806106fe81610f09565b9150506106c9565b5050565b6000808251604114156107415760208301516040840151606085015160001a6107358782858561077a565b94509450505050610773565b82516040141561076b576020830151604084015161076086838361085a565b935093505050610773565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156107b15750600090506003610851565b8460ff16601b141580156107c957508460ff16601c14155b156107da5750600090506004610851565b6000600187878787604051600081526020016040526040516107ff9493929190610f2d565b6020604051602081039080840390855afa158015610821573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661084a57600060019250925050610851565b9150600090505b94509492505050565b6000806001600160ff1b0383168161087760ff86901c601b610f6b565b90506108858782888561077a565b935093505050935093915050565b60006001600160a01b0382165b92915050565b6108af81610893565b81146101da57600080fd5b80356108a0816108a6565b806108af565b80356108a0816108c5565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610912576109126108d6565b6040525050565b600061092460405190565b905061067982826108ec565b600067ffffffffffffffff82111561094a5761094a6108d6565b601f19601f83011660200192915050565b82818337506000910152565b600061097a61097584610930565b610919565b90508281526020810184848401111561099557610995600080fd5b6109a084828561095b565b509392505050565b600082601f8301126109bc576109bc600080fd5b81356109cc848260208601610967565b949350505050565b6000806000606084860312156109ec576109ec600080fd5b60006109f886866108ba565b9350506020610a09868287016108cb565b925050604084013567ffffffffffffffff811115610a2957610a29600080fd5b610a35868287016109a8565b9150509250925092565b8015155b82525050565b602081016108a08284610a3f565b600060208284031215610a6c57610a6c600080fd5b60006109cc84846108ba565b610a4381610893565b602081016108a08284610a78565b600067ffffffffffffffff821115610aa957610aa96108d6565b5060209081020190565b6000610ac161097584610a8f565b83815290506020808201908402830185811115610ae057610ae0600080fd5b835b81811015610b045780610af588826108ba565b84525060209283019201610ae2565b5050509392505050565b600082601f830112610b2257610b22600080fd5b81356109cc848260208601610ab3565b60008060408385031215610b4857610b48600080fd5b6000610b5485856108ba565b925050602083013567ffffffffffffffff811115610b7457610b74600080fd5b610b8085828601610b0e565b9150509250929050565b601f81526000602082017f50726f7669646572733a206e6f6e6578697374656e742070726f766964657200815291505b5060200190565b602080825281016108a081610b8a565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657291019081526000610bba565b602080825281016108a081610bd1565b600060ff82166108a0565b610a4381610c13565b602081016108a08284610c1e565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b602082015291505b5060400190565b602080825281016108a081610c35565b634e487b7160e01b600052602160045260246000fd5b80610a43565b60005b83811015610cc2578181015183820152602001610caa565b83811115610cd1576000848401525b50505050565b6000610ce1825190565b808452602084019350610cf8818560208601610ca7565b601f01601f19169290920192915050565b60408101610d178285610ca1565b818103602083015261019d8184610cd7565b6000610d33825190565b610d41818560208601610ca7565b9290920192915050565b60006101a08284610d29565b6001600160e01b031981166108af565b80516108a081610d57565b600060208284031215610d8757610d87600080fd5b60006109cc8484610d67565b601b81526000602082017f50726f7669646572733a2070726f76696465722065786973746564000000000081529150610bba565b602080825281016108a081610d93565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150610c74565b602080825281016108a081610dd7565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150610c74565b602080825281016108a081610e32565b602681526000602082017f50726f7669646572733a20696e76616c6964206c656e677468206f662070726f81526576696465727360d01b60208201529150610c74565b602080825281016108a081610e8a565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610f1d57610f1d610ef3565b5060010190565b60ff8116610a43565b60808101610f3b8287610ca1565b610f486020830186610f24565b610f556040830185610ca1565b610f626060830184610ca1565b95945050505050565b60008219821115610f7e57610f7e610ef3565b50019056fea264697066735822122078591ba2354dfd97e94c694f2368c4d44692e8847104e14884895e4fbfb6cb0964736f6c63430008090033";

export class Providers__factory extends ContractFactory {
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
  ): Promise<Providers> {
    return super.deploy(overrides || {}) as Promise<Providers>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Providers {
    return super.attach(address) as Providers;
  }
  connect(signer: Signer): Providers__factory {
    return super.connect(signer) as Providers__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProvidersInterface {
    return new utils.Interface(_abi) as ProvidersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Providers {
    return new Contract(address, _abi, signerOrProvider) as Providers;
  }
}
