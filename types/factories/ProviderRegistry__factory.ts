/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ProviderRegistry,
  ProviderRegistryInterface,
} from "../ProviderRegistry";

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
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "AddProivderWallet",
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
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "RemoveProviderWallet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IRouter",
        name: "router",
        type: "address",
      },
    ],
    name: "RouterUpdated",
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
        name: "wallet",
        type: "address",
      },
    ],
    name: "addWallet",
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
        internalType: "contract IRouter",
        name: "router",
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
    name: "providerWallet",
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
    name: "providerWalletExists",
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
    ],
    name: "removeProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "removeWallet",
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
    name: "router",
    outputs: [
      {
        internalType: "contract IRouter",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060006200002060016200008e565b9050801562000039576000805461ff0019166101001790555b801562000087576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906200007e9060019062000168565b60405180910390a15b50620001cb565b60008054610100900460ff1615620000f7578160ff166001148015620000c75750620000c5306200013b60201b620007bc1760201c565b155b620000ef5760405162461bcd60e51b8152600401620000e69062000178565b60405180910390fd5b506000919050565b60005460ff808416911610620001215760405162461bcd60e51b8152600401620000e69062000178565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b600060ff82165b92915050565b62000162816200014a565b82525050565b6020810162000151828462000157565b602080825281016200015181602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b6116f180620001db6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638da5cb5b1161008c578063efeb5f1f11610066578063efeb5f1f146101c7578063f2fde38b146101da578063f887ea40146101ed578063f90cef781461021357600080fd5b80638da5cb5b1461016c578063a75fe8e114610186578063d82945191461019957600080fd5b8063238a4d1e146100d457806346e2577a146100fd578063485cc955146101125780636b074a0714610125578063715018a6146101515780638a355a5714610159575b600080fd5b6100e76100e2366004610fbb565b610226565b6040516100f49190611030565b60405180910390f35b61011061010b36600461103e565b61027c565b005b61011061012036600461107e565b61033a565b6100e761013336600461103e565b6001600160a01b031660009081526065602052604090205460ff1690565b6101106103c0565b61011061016736600461103e565b6103f6565b6033546001600160a01b03165b6040516100f491906110c4565b61011061019436600461103e565b6104b0565b6100e76101a736600461103e565b6001600160a01b0390811660009081526066602052604090205416151590565b6101106101d536600461103e565b6105dc565b6101106101e836600461103e565b610708565b600054610206906201000090046001600160a01b031681565b6040516100f49190611102565b61017961022136600461103e565b610764565b6001600160a01b03831660009081526065602052604081205460ff166102675760405162461bcd60e51b815260040161025e90611156565b60405180910390fd5b6102728484846107cb565b90505b9392505050565b60008060029054906101000a90046001600160a01b03166001600160a01b031663945391126040518163ffffffff1660e01b815260040160206040518083038186803b1580156102cb57600080fd5b505afa1580156102df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103039190611171565b9050336001600160a01b0382161461032d5760405162461bcd60e51b815260040161025e906111da565b61033682610917565b5050565b600061034660016109ae565b9050801561035e576000805461ff0019166101001790555b61036783610a3b565b61037082610a8d565b80156103bb576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906103b2906001906111fe565b60405180910390a15b505050565b6033546001600160a01b031633146103ea5760405162461bcd60e51b815260040161025e90611241565b6103f46000610a3b565b565b60008060029054906101000a90046001600160a01b03166001600160a01b031663945391126040518163ffffffff1660e01b815260040160206040518083038186803b15801561044557600080fd5b505afa158015610459573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047d9190611171565b9050336001600160a01b038216146104a75760405162461bcd60e51b815260040161025e906111da565b61033682610abd565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b1580156104ff57600080fd5b505afa158015610513573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105379190611171565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906105669033906004016110c4565b60206040518083038186803b15801561057e57600080fd5b505afa158015610592573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b69190611264565b6105d25760405162461bcd60e51b815260040161025e906112cb565b6103363383610b45565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561062b57600080fd5b505afa15801561063f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106639190611171565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906106929033906004016110c4565b60206040518083038186803b1580156106aa57600080fd5b505afa1580156106be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e29190611264565b6106fe5760405162461bcd60e51b815260040161025e906112cb565b6103363383610be0565b6033546001600160a01b031633146107325760405162461bcd60e51b815260040161025e90611241565b6001600160a01b0381166107585760405162461bcd60e51b815260040161025e9061131e565b61076181610a3b565b50565b6001600160a01b0380821660009081526066602052604081205490911661079d5760405162461bcd60e51b815260040161025e90611378565b506001600160a01b039081166000908152606660205260409020541690565b6001600160a01b03163b151590565b60008060006107da8585610c79565b909250905060008160048111156107f3576107f3611388565b1480156108115750856001600160a01b0316826001600160a01b0316145b1561082157600192505050610275565b600080876001600160a01b0316631626ba7e60e01b8888604051602401610849929190611406565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516108879190611448565b600060405180830381855afa9150503d80600081146108c2576040519150601f19603f3d011682016040523d82523d6000602084013e6108c7565b606091505b50915091508180156108da575080516020145b801561090b57508051630b135d3f60e11b906108ff908301602090810190840161146f565b6001600160e01b031916145b98975050505050505050565b6001600160a01b03811660009081526065602052604090205460ff16156109505760405162461bcd60e51b815260040161025e906114cf565b6001600160a01b03811660009081526065602052604090819020805460ff19166001179055517f635a554d7028e977037c71e4fefb0d02f19e160c13f01f813a18d362b4605c6d906109a39083906110c4565b60405180910390a150565b60008054610100900460ff16156109f5578160ff1660011480156109d15750303b155b6109ed5760405162461bcd60e51b815260040161025e9061152a565b506000919050565b60005460ff808416911610610a1c5760405162461bcd60e51b815260040161025e9061152a565b506000805460ff191660ff92909216919091179055600190565b919050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610ab45760405162461bcd60e51b815260040161025e90611582565b61076181610ce9565b6001600160a01b03811660009081526065602052604090205460ff16610af55760405162461bcd60e51b815260040161025e90611156565b6001600160a01b03811660009081526065602052604090819020805460ff19169055517f8ab468b9f8f57e82f33d9a1742c03768ff84410a4911e8647bfa641826876904906109a39083906110c4565b6001600160a01b0380831660009081526066602052604090205416610b7c5760405162461bcd60e51b815260040161025e90611378565b6001600160a01b0382166000908152606660205260409081902080546001600160a01b0319169055517f7a573913cf794a4333bbb2d808419316d0c2906f8d819634301a4125554067a990610bd49084908490611592565b60405180910390a15050565b6001600160a01b038083166000908152606660205260409020541615610c185760405162461bcd60e51b815260040161025e906115f2565b6001600160a01b038281166000908152606660205260409081902080546001600160a01b03191692841692909217909155517fc646d3d00ef6760114da08071b447acd4b21bf11a1f6d650d1d2f744da6bf8b990610bd49084908490611592565b600080825160411415610cb05760208301516040840151606085015160001a610ca487828585610d61565b94509450505050610ce2565b825160401415610cda5760208301516040840151610ccf868383610e41565b935093505050610ce2565b506000905060025b9250929050565b6001600160a01b038116610d0f5760405162461bcd60e51b815260040161025e90611636565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc80906109a3908390611102565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610d985750600090506003610e38565b8460ff16601b14158015610db057508460ff16601c14155b15610dc15750600090506004610e38565b600060018787878760405160008152602001604052604051610de6949392919061164f565b6020604051602081039080840390855afa158015610e08573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610e3157600060019250925050610e38565b9150600090505b94509492505050565b6000806001600160ff1b03831681610e5e60ff86901c601b6116a3565b9050610e6c87828885610d61565b935093505050935093915050565b60006001600160a01b0382165b92915050565b610e9681610e7a565b811461076157600080fd5b8035610e8781610e8d565b80610e96565b8035610e8781610eac565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610ef957610ef9610ebd565b6040525050565b6000610f0b60405190565b9050610a368282610ed3565b600067ffffffffffffffff821115610f3157610f31610ebd565b601f19601f83011660200192915050565b82818337506000910152565b6000610f61610f5c84610f17565b610f00565b905082815260208101848484011115610f7c57610f7c600080fd5b610f87848285610f42565b509392505050565b600082601f830112610fa357610fa3600080fd5b8135610fb3848260208601610f4e565b949350505050565b600080600060608486031215610fd357610fd3600080fd5b6000610fdf8686610ea1565b9350506020610ff086828701610eb2565b925050604084013567ffffffffffffffff81111561101057611010600080fd5b61101c86828701610f8f565b9150509250925092565b8015155b82525050565b60208101610e878284611026565b60006020828403121561105357611053600080fd5b6000610fb38484610ea1565b6000610e8782610e7a565b610e968161105f565b8035610e878161106a565b6000806040838503121561109457611094600080fd5b60006110a08585610ea1565b92505060206110b185828601611073565b9150509250929050565b61102a81610e7a565b60208101610e8782846110bb565b60006001600160a01b038216610e87565b6000610e87826110d2565b6000610e87826110e3565b61102a816110ee565b60208101610e8782846110f9565b602681526000602082017f50726f766964657252656769737472793a206e6f6e6578697374656e7420707281526537bb34b232b960d11b602082015291505b5060400190565b60208082528101610e8781611110565b8051610e878161106a565b60006020828403121561118657611186600080fd5b6000610fb38484611166565b602b81526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581526a20676f7665726e616e636560a81b6020820152915061114f565b60208082528101610e8781611192565b600060ff8216610e87565b61102a816111ea565b60208101610e8782846111f5565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b60208082528101610e878161120c565b801515610e96565b8051610e8781611251565b60006020828403121561127957611279600080fd5b6000610fb38484611259565b602981526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581526810383937bb34b232b960b91b6020820152915061114f565b60208082528101610e8781611285565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b6020820152915061114f565b60208082528101610e87816112db565b602d81526000602082017f50726f766964657252656769737472793a206e6f6e6578697374656e7420707281526c1bdd9a59195c881dd85b1b195d609a1b6020820152915061114f565b60208082528101610e878161132e565b634e487b7160e01b600052602160045260246000fd5b8061102a565b60005b838110156113bf5781810151838201526020016113a7565b838111156113ce576000848401525b50505050565b60006113de825190565b8084526020840193506113f58185602086016113a4565b601f01601f19169290920192915050565b60408101611414828561139e565b818103602083015261027281846113d4565b6000611430825190565b61143e8185602086016113a4565b9290920192915050565b60006102758284611426565b6001600160e01b03198116610e96565b8051610e8781611454565b60006020828403121561148457611484600080fd5b6000610fb38484611464565b602281526000602082017f50726f766964657252656769737472793a2070726f7669646572206578697374815261195960f21b6020820152915061114f565b60208082528101610e8781611490565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b6020820152915061114f565b60208082528101610e87816114df565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b6020820152915061114f565b60208082528101610e878161153a565b604081016115a082856110bb565b61027560208301846110bb565b602881526000602082017f50726f766964657252656769737472793a2070726f76696465722077616c6c65815267742065786973747360c01b6020820152915061114f565b60208082528101610e87816115ad565b601b81526000602082017f526f75746572577261707065723a207a65726f206164647265737300000000008152915061123a565b60208082528101610e8781611602565b60ff811661102a565b6080810161165d828761139e565b61166a6020830186611646565b611677604083018561139e565b611684606083018461139e565b95945050505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156116b6576116b661168d565b50019056fea2646970667358221220fec657068c77527127e8f57efbe383e044e66c51bb38aaee5cb5ab4fc06c2c1664736f6c63430008090033";

export class ProviderRegistry__factory extends ContractFactory {
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
  ): Promise<ProviderRegistry> {
    return super.deploy(overrides || {}) as Promise<ProviderRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProviderRegistry {
    return super.attach(address) as ProviderRegistry;
  }
  connect(signer: Signer): ProviderRegistry__factory {
    return super.connect(signer) as ProviderRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProviderRegistryInterface {
    return new utils.Interface(_abi) as ProviderRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProviderRegistry {
    return new Contract(address, _abi, signerOrProvider) as ProviderRegistry;
  }
}
