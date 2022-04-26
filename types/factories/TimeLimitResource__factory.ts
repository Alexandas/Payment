/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TimeLimitResource,
  TimeLimitResourceInterface,
} from "../TimeLimitResource";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20Upgradeable",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "AddToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "payer",
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
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum ResourceData.ResourceType",
        name: "resourceType",
        type: "uint8",
      },
    ],
    name: "Buy",
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
        internalType: "contract IERC20Upgradeable",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "RemoveToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20Upgradeable",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "SetPrice",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20Upgradeable",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct Resource.TokenPayload[]",
        name: "tokenPayloads",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "enum ResourceData.ResourceType",
        name: "resourceType",
        type: "uint8",
      },
    ],
    name: "__Init_Resource",
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
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "open",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiration",
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
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "getValueOf",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "priceOf",
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
        internalType: "contract IERC20Upgradeable",
        name: "_token",
        type: "address",
      },
    ],
    name: "removeToken",
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
        internalType: "contract IERC20Upgradeable",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
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
    name: "tokenExists",
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
        internalType: "contract IERC20Upgradeable",
        name: "_token",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506110ae806100206000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c80638da5cb5b1161008c578063b95ed06f11610066578063b95ed06f14610205578063d9caed1214610218578063f2fde38b1461022b578063f7d221901461023e57600080fd5b80638da5cb5b146101b4578063af81c5b9146101cf578063b33f78ca146101e257600080fd5b80635eee8ae3116100c85780635eee8ae31461013c5780635fa7b5841461014f578063715018a6146101625780638909aa3f1461016a57600080fd5b8062e4768b146100ee5780634b826074146101035780634cc98e4014610129575b600080fd5b6101016100fc366004610ba3565b610258565b005b610116610111366004610bcf565b610299565b6040519081526020015b60405180910390f35b610116610137366004610c0c565b61030c565b61010161014a366004610cd0565b610392565b61010161015d366004610dc7565b6103d9565b61010161040f565b610199610178366004610de4565b60676020526000908152604090208054600182015460029092015490919083565b60408051938452602084019290925290820152606001610120565b6033546040516001600160a01b039091168152602001610120565b6101016101dd366004610ba3565b610445565b6101f56101f0366004610dc7565b610479565b6040519015158152602001610120565b610116610213366004610dc7565b610496565b610101610226366004610dfd565b6104d9565b610101610239366004610dc7565b610517565b60655461024b9060ff1681565b6040516101209190610e76565b6033546001600160a01b0316331461028b5760405162461bcd60e51b815260040161028290610e84565b60405180910390fd5b61029582826105af565b5050565b60006102a684848461030c565b90506102bd6001600160a01b03851633308461062d565b6065546040517f6cc8d0d37173600eefc9a183183553f97e1e72b1f4c35df3a82a93ec672b1c61916102fc913391899189918991899160ff1690610eb9565b60405180910390a1949350505050565b600061031784610479565b6103735760405162461bcd60e51b815260206004820152602760248201527f4f6e6554696d655265736f757263653a20746f6b656e206973206e6f742073756044820152661c1c1bdc9d195960ca1b6064820152608401610282565b61038a826103848561038488610496565b9061069e565b949350505050565b600054610100900460ff166103b95760405162461bcd60e51b815260040161028290610ef3565b6103c2836106b3565b6103cb8161073c565b6103d48261078a565b505050565b6033546001600160a01b031633146104035760405162461bcd60e51b815260040161028290610e84565b61040c816107dc565b50565b6033546001600160a01b031633146104395760405162461bcd60e51b815260040161028290610e84565b610443600061078a565b565b6033546001600160a01b0316331461046f5760405162461bcd60e51b815260040161028290610e84565b610295828261086c565b6001600160a01b0316600090815260666020526040902054151590565b60006104a182610479565b6104bd5760405162461bcd60e51b815260040161028290610f3e565b506001600160a01b031660009081526066602052604090205490565b6033546001600160a01b031633146105035760405162461bcd60e51b815260040161028290610e84565b6103d46001600160a01b038416838361090c565b6033546001600160a01b031633146105415760405162461bcd60e51b815260040161028290610e84565b6001600160a01b0381166105a65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610282565b61040c8161078a565b6105b882610479565b6105d45760405162461bcd60e51b815260040161028290610f3e565b6001600160a01b038216600081815260666020908152604091829020849055815192835282018390527f95dce27040c59c8b1c445b284f81a3aaae6eecd7d08d5c7684faee64cdb514a191015b60405180910390a15050565b6040516001600160a01b03808516602483015283166044820152606481018290526106989085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261093c565b50505050565b60006106aa8284610f8b565b90505b92915050565b600054610100900460ff166106da5760405162461bcd60e51b815260040161028290610ef3565b60005b81518110156102955761072a8282815181106106fb576106fb610faa565b60200260200101516000015183838151811061071957610719610faa565b60200260200101516020015161086c565b8061073481610fc0565b9150506106dd565b600054610100900460ff166107635760405162461bcd60e51b815260040161028290610ef3565b6065805482919060ff1916600183600481111561078257610782610e3e565b021790555050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6107e581610479565b6108015760405162461bcd60e51b815260040161028290610f3e565b6001600160a01b038116600081815260666020908152604091829020548251938452908301527f67f5552e5abc48ba6305130450943fa23b76a0b6eb18c29d3eea39559139fc5a910160405180910390a16001600160a01b0316600090815260666020526040812055565b61087582610479565b156108bb5760405162461bcd60e51b81526020600482015260166024820152755265736f757263653a20746f6b656e2065787369747360501b6044820152606401610282565b6001600160a01b038216600081815260666020908152604091829020849055815192835282018390527fe1bea1af9b1d1aede8b7fa043080de8690470a8ae61449360b3d0c0bf8104b469101610621565b6040516001600160a01b0383166024820152604481018290526103d490849063a9059cbb60e01b90606401610661565b6000610991826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610a0e9092919063ffffffff16565b8051909150156103d457808060200190518101906109af9190610fdb565b6103d45760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610282565b606061038a8484600085610a24565b9392505050565b606082471015610a855760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610282565b6001600160a01b0385163b610adc5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610282565b600080866001600160a01b03168587604051610af89190611029565b60006040518083038185875af1925050503d8060008114610b35576040519150601f19603f3d011682016040523d82523d6000602084013e610b3a565b606091505b5091509150610b4a828286610b55565b979650505050505050565b60608315610b64575081610a1d565b825115610b745782518084602001fd5b8160405162461bcd60e51b81526004016102829190611045565b6001600160a01b038116811461040c57600080fd5b60008060408385031215610bb657600080fd5b8235610bc181610b8e565b946020939093013593505050565b60008060008060808587031215610be557600080fd5b843593506020850135610bf781610b8e565b93969395505050506040820135916060013590565b600080600060608486031215610c2157600080fd5b8335610c2c81610b8e565b95602085013595506040909401359392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610c7a57610c7a610c41565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610ca957610ca9610c41565b604052919050565b8035610cbc81610b8e565b919050565b803560058110610cbc57600080fd5b600080600060608486031215610ce557600080fd5b833567ffffffffffffffff80821115610cfd57600080fd5b818601915086601f830112610d1157600080fd5b8135602082821115610d2557610d25610c41565b610d33818360051b01610c80565b828152818101935060069290921b840181019189831115610d5357600080fd5b938101935b82851015610d9f576040858b031215610d715760008081fd5b610d79610c57565b8535610d8481610b8e565b81528583013583820152845260409094019392810192610d58565b9650610dac888201610cb1565b955050505050610dbe60408501610cc1565b90509250925092565b600060208284031215610dd957600080fd5b8135610a1d81610b8e565b600060208284031215610df657600080fd5b5035919050565b600080600060608486031215610e1257600080fd5b8335610e1d81610b8e565b92506020840135610e2d81610b8e565b929592945050506040919091013590565b634e487b7160e01b600052602160045260246000fd5b60058110610e7257634e487b7160e01b600052602160045260246000fd5b9052565b602081016106ad8284610e54565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b0387811682526020820187905285166040820152606081018490526080810183905260c08101610b4a60a0830184610e54565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6020808252601b908201527f5265736f757263653a206e6f6e6578697374656e7420746f6b656e0000000000604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610fa557610fa5610f75565b500290565b634e487b7160e01b600052603260045260246000fd5b6000600019821415610fd457610fd4610f75565b5060010190565b600060208284031215610fed57600080fd5b81518015158114610a1d57600080fd5b60005b83811015611018578181015183820152602001611000565b838111156106985750506000910152565b6000825161103b818460208701610ffd565b9190910192915050565b6020815260008251806020840152611064816040850160208701610ffd565b601f01601f1916919091016040019291505056fea264697066735822122071c6e060866688e34788ffcc932271f8697ceac34ffb71433391168b0c8753d264736f6c63430008090033";

export class TimeLimitResource__factory extends ContractFactory {
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
  ): Promise<TimeLimitResource> {
    return super.deploy(overrides || {}) as Promise<TimeLimitResource>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TimeLimitResource {
    return super.attach(address) as TimeLimitResource;
  }
  connect(signer: Signer): TimeLimitResource__factory {
    return super.connect(signer) as TimeLimitResource__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeLimitResourceInterface {
    return new utils.Interface(_abi) as TimeLimitResourceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeLimitResource {
    return new Contract(address, _abi, signerOrProvider) as TimeLimitResource;
  }
}