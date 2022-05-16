/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ContentTracer, ContentTracerInterface } from "../ContentTracer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IIPFSStorageController",
        name: "controller",
        type: "address",
      },
    ],
    name: "ControllerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "DefaultExpirationUpdated",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "Insert",
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
        internalType: "contract IProviders",
        name: "providers",
        type: "address",
      },
    ],
    name: "ProvidersUpdated",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "Remove",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "contentSizes",
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
    name: "controller",
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
    name: "defaultExpiration",
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
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "exists",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "contract IProviders",
        name: "providers",
        type: "address",
      },
      {
        internalType: "contract IIPFSStorageController",
        name: "controller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "defaultExpiration",
        type: "uint256",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
    ],
    name: "insert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "accounts",
        type: "bytes32[]",
      },
      {
        internalType: "string[]",
        name: "contents",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "sizes",
        type: "uint256[]",
      },
    ],
    name: "insertMult",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "accounts",
        type: "bytes32[]",
      },
      {
        internalType: "string[]",
        name: "contents",
        type: "string[]",
      },
    ],
    name: "removeMult",
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
        internalType: "contract IIPFSStorageController",
        name: "_controller",
        type: "address",
      },
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "setDefaultExpiration",
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
        internalType: "bytes32",
        name: "account",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "size",
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
  "0x608060405234801561001057600080fd5b506118ef806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063bed1706511610097578063e65da1e711610066578063e65da1e714610232578063f2fde38b14610245578063f77c479114610258578063f8401fe61461027857600080fd5b8063bed17065146101e6578063cf756fdf146101f9578063db1701251461020c578063de47238c1461021f57600080fd5b80638da5cb5b116100d35780638da5cb5b1461015457806392eefe9b1461016d578063b3ecfa3a14610180578063b7ab2883146101c657600080fd5b806351ae4cd3146101055780636b3bfae61461011a578063715018a61461013957806375667dbe14610141575b600080fd5b610118610113366004610d97565b610291565b005b61012360665481565b6040516101309190610dc8565b60405180910390f35b6101186102d0565b61011861014f36600461107b565b610306565b6033546001600160a01b03166040516101309190611135565b61011861017b366004611162565b610464565b61012361018e366004611197565b606760209081526000938452604080852082529284529190922082518084018301805192815290830193909201929092209190525481565b6101d96101d4366004611197565b610497565b6040516101309190611200565b6101186101f436600461120e565b6104e2565b61011861020736600461126f565b6105b0565b61011861021a3660046112d3565b61064a565b61011861022d36600461132b565b6106fa565b610123610240366004611197565b61081c565b610118610253366004611393565b61092f565b60655461026b906001600160a01b031681565b60405161013091906113c8565b60005461026b906201000090046001600160a01b031681565b6033546001600160a01b031633146102c45760405162461bcd60e51b81526004016102bb9061140b565b60405180910390fd5b6102cd81610988565b50565b6033546001600160a01b031633146102fa5760405162461bcd60e51b81526004016102bb9061140b565b61030460006109c8565b565b600054604051636b074a0760e01b8152620100009091046001600160a01b031690636b074a079061033b903390600401611135565b60206040518083038186803b15801561035357600080fd5b505afa158015610367573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038b919061142e565b6103a75760405162461bcd60e51b81526004016102bb90611498565b81518351146103c85760405162461bcd60e51b81526004016102bb906114ed565b80518351146103e95760405162461bcd60e51b81526004016102bb906114ed565b60005b835181101561045e5761044c3385838151811061040b5761040b6114fd565b6020026020010151858481518110610425576104256114fd565b602002602001015185858151811061043f5761043f6114fd565b6020026020010151610a1a565b8061045681611529565b9150506103ec565b50505050565b6033546001600160a01b0316331461048e5760405162461bcd60e51b81526004016102bb9061140b565b6102cd81610c01565b6001600160a01b038316600090815260676020908152604080832085845290915280822090516104c8908490611592565b908152604051908190036020019020541515949350505050565b80600081116105035760405162461bcd60e51b81526004016102bb906115d9565b600054604051636b074a0760e01b8152620100009091046001600160a01b031690636b074a0790610538903390600401611135565b60206040518083038186803b15801561055057600080fd5b505afa158015610564573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610588919061142e565b6105a45760405162461bcd60e51b81526004016102bb90611498565b61045e33858585610a1a565b600054610100900460ff166105cb5760005460ff16156105cf565b303b155b6105eb5760405162461bcd60e51b81526004016102bb90611634565b600054610100900460ff1615801561060d576000805461ffff19166101011790555b610616856109c8565b61061f84610c4c565b61062883610c01565b61063182610988565b8015610643576000805461ff00191690555b5050505050565b600054604051636b074a0760e01b8152620100009091046001600160a01b031690636b074a079061067f903390600401611135565b60206040518083038186803b15801561069757600080fd5b505afa1580156106ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cf919061142e565b6106eb5760405162461bcd60e51b81526004016102bb90611498565b6106f6338383610c7c565b5050565b600054604051636b074a0760e01b8152620100009091046001600160a01b031690636b074a079061072f903390600401611135565b60206040518083038186803b15801561074757600080fd5b505afa15801561075b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077f919061142e565b61079b5760405162461bcd60e51b81526004016102bb90611498565b80518251146107bc5760405162461bcd60e51b81526004016102bb906114ed565b60005b825181101561081757610805338483815181106107de576107de6114fd565b60200260200101518484815181106107f8576107f86114fd565b6020026020010151610c7c565b8061080f81611529565b9150506107bf565b505050565b60008054604051636b074a0760e01b8152620100009091046001600160a01b031690636b074a0790610852908790600401611135565b60206040518083038186803b15801561086a57600080fd5b505afa15801561087e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a2919061142e565b6108be5760405162461bcd60e51b81526004016102bb90611684565b6108c9848484610497565b6108e55760405162461bcd60e51b81526004016102bb906116d3565b6001600160a01b0384166000908152606760209081526040808320868452909152908190209051610917908490611592565b90815260200160405180910390205490509392505050565b6033546001600160a01b031633146109595760405162461bcd60e51b81526004016102bb9061140b565b6001600160a01b03811661097f5760405162461bcd60e51b81526004016102bb90611726565b6102cd816109c8565b60668190556040517f5a9799c5960287e61a9cc19f9c41ef3ee249ec2e469df615760c0075b1b487a3906109bd908390610dc8565b60405180910390a150565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8060008111610a3b5760405162461bcd60e51b81526004016102bb906115d9565b610a46858585610497565b15610a635760405162461bcd60e51b81526004016102bb9061176a565b6001600160a01b0385166000908152606760209081526040808320878452909152908190209051839190610a98908690611592565b908152604051908190036020018120919091556065546336d97f5960e11b82526000916001600160a01b0390911690636db2feb290610adb908890600401610dc8565b60206040518083038186803b158015610af357600080fd5b505afa158015610b07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2b919061142e565b610bb45760655460405163f74d561f60e01b81526001600160a01b039091169063f74d561f90610b5f908890600401610dc8565b60206040518083038186803b158015610b7757600080fd5b505afa158015610b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baf9190611785565b610bb8565b6066545b90507fbf3b73929b09508ab734523ae2e03136d123d7011074b0ea845fd26e8749ed2c8686868685604051610bf19594939291906117d8565b60405180910390a1505050505050565b606580546001600160a01b0319166001600160a01b0383161790556040517f1304018cfe79741dcf02ba6b61d39cc4757d59395d03224d9925c7aa83002146906109bd9083906113c8565b600054610100900460ff16610c735760405162461bcd60e51b81526004016102bb90611873565b6102cd81610d27565b610c87838383610497565b610ca35760405162461bcd60e51b81526004016102bb906116d3565b6001600160a01b0383166000908152606760209081526040808320858452909152908190209051610cd5908390611592565b9081526020016040518091039020600090557f20b2a0e9bd2cadc08b645e5d8c204c6d86d3c23817b100e0346846e77a88d7c9838383604051610d1a93929190611883565b60405180910390a1505050565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517fe63288198842f0dacdcbdc3f22dcd4e473d1f3cee7e10603ae6ddc3e667c5284906109bd9083906113c8565b805b81146102cd57600080fd5b8035610d9181610d79565b92915050565b600060208284031215610dac57610dac600080fd5b6000610db88484610d86565b949350505050565b805b82525050565b60208101610d918284610dc0565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610e1257610e12610dd6565b6040525050565b6000610e2460405190565b9050610e308282610dec565b919050565b600067ffffffffffffffff821115610e4f57610e4f610dd6565b5060209081020190565b6000610e6c610e6784610e35565b610e19565b83815290506020808201908402830185811115610e8b57610e8b600080fd5b835b81811015610eaf5780610ea08882610d86565b84525060209283019201610e8d565b5050509392505050565b600082601f830112610ecd57610ecd600080fd5b8135610db8848260208601610e59565b600067ffffffffffffffff821115610ef757610ef7610dd6565b601f19601f83011660200192915050565b82818337506000910152565b6000610f22610e6784610edd565b905082815260208101848484011115610f3d57610f3d600080fd5b610f48848285610f08565b509392505050565b600082601f830112610f6457610f64600080fd5b8135610db8848260208601610f14565b6000610f82610e6784610e35565b83815290506020808201908402830185811115610fa157610fa1600080fd5b835b81811015610eaf57803567ffffffffffffffff811115610fc557610fc5600080fd5b808601610fd28982610f50565b8552505060209283019201610fa3565b600082601f830112610ff657610ff6600080fd5b8135610db8848260208601610f74565b6000611014610e6784610e35565b8381529050602080820190840283018581111561103357611033600080fd5b835b81811015610eaf57806110488882610d86565b84525060209283019201611035565b600082601f83011261106b5761106b600080fd5b8135610db8848260208601611006565b60008060006060848603121561109357611093600080fd5b833567ffffffffffffffff8111156110ad576110ad600080fd5b6110b986828701610eb9565b935050602084013567ffffffffffffffff8111156110d9576110d9600080fd5b6110e586828701610fe2565b925050604084013567ffffffffffffffff81111561110557611105600080fd5b61111186828701611057565b9150509250925092565b60006001600160a01b038216610d91565b610dc28161111b565b60208101610d91828461112c565b6000610d918261111b565b610d7b81611143565b8035610d918161114e565b60006020828403121561117757611177600080fd5b6000610db88484611157565b610d7b8161111b565b8035610d9181611183565b6000806000606084860312156111af576111af600080fd5b60006111bb868661118c565b93505060206111cc86828701610d86565b925050604084013567ffffffffffffffff8111156111ec576111ec600080fd5b61111186828701610f50565b801515610dc2565b60208101610d9182846111f8565b60008060006060848603121561122657611226600080fd5b60006112328686610d86565b935050602084013567ffffffffffffffff81111561125257611252600080fd5b61125e86828701610f50565b925050604061111186828701610d86565b6000806000806080858703121561128857611288600080fd5b6000611294878761118c565b94505060206112a587828801611157565b93505060406112b687828801611157565b92505060606112c787828801610d86565b91505092959194509250565b600080604083850312156112e9576112e9600080fd5b60006112f58585610d86565b925050602083013567ffffffffffffffff81111561131557611315600080fd5b61132185828601610f50565b9150509250929050565b6000806040838503121561134157611341600080fd5b823567ffffffffffffffff81111561135b5761135b600080fd5b61136785828601610eb9565b925050602083013567ffffffffffffffff81111561138757611387600080fd5b61132185828601610fe2565b6000602082840312156113a8576113a8600080fd5b6000610db8848461118c565b6000610d9182611143565b610dc2816113b4565b60208101610d9182846113bf565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b60208082528101610d91816113d6565b801515610d7b565b8051610d918161141b565b60006020828403121561144357611443600080fd5b6000610db88484611423565b602981526000602082017f436f6e74656e745472616365723a2063616c6c6572206973206e6f742074686581526810383937bb34b232b960b91b602082015291505b5060400190565b60208082528101610d918161144f565b602881526000602082017f436f6e74656e745472616365723a20496e76616c696420706172616d65746572815267103632b733ba341760c11b60208201529150611491565b60208082528101610d91816114a8565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561153d5761153d611513565b5060010190565b60005b8381101561155f578181015183820152602001611547565b8381111561045e5750506000910152565b600061157a825190565b611588818560208601611544565b9290920192915050565b600061159e8284611570565b9392505050565b601981526000602082017f436f6e74656e745472616365723a207a65726f2073697a652e0000000000000081529150611404565b60208082528101610d91816115a5565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150611491565b60208082528101610d91816115e9565b602381526000602082017f436f6e74656e745472616365723a206e6f6e6578697374656e742070726f76698152623232b960e91b60208201529150611491565b60208082528101610d9181611644565b602281526000602082017f436f6e74656e745472616365723a206e6f6e6578697374656e7420636f6e74658152611b9d60f21b60208201529150611491565b60208082528101610d9181611694565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150611491565b60208082528101610d91816116e3565b601d81526000602082017f436f6e74656e745472616365723a20636f6e74656e742065786973747300000081529150611404565b60208082528101610d9181611736565b8051610d9181610d79565b60006020828403121561179a5761179a600080fd5b6000610db8848461177a565b60006117b0825190565b8084526020840193506117c7818560208601611544565b601f01601f19169290920192915050565b60a081016117e6828861112c565b6117f36020830187610dc0565b818103604083015261180581866117a6565b90506118146060830185610dc0565b6118216080830184610dc0565b9695505050505050565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b60208201529150611491565b60208082528101610d918161182b565b60608101611891828661112c565b61189e6020830185610dc0565b81810360408301526118b081846117a6565b9594505050505056fea26469706673582212201d21db6d7aedf0402addb85cd78c594afb14d2866acb87d0b847b579d5f8408f64736f6c63430008090033";

export class ContentTracer__factory extends ContractFactory {
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
  ): Promise<ContentTracer> {
    return super.deploy(overrides || {}) as Promise<ContentTracer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ContentTracer {
    return super.attach(address) as ContentTracer;
  }
  connect(signer: Signer): ContentTracer__factory {
    return super.connect(signer) as ContentTracer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContentTracerInterface {
    return new utils.Interface(_abi) as ContentTracerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContentTracer {
    return new Contract(address, _abi, signerOrProvider) as ContentTracer;
  }
}
