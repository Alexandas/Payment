/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ContractProxy, ContractProxyInterface } from "../ContractProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620011af380380620011af833981016040819052620000349162000579565b82828282816200006660017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd62000603565b60008051602062001168833981519152146200008657620000866200061d565b6200009482826000620000fb565b50620000c4905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610462000603565b6000805160206200114883398151915214620000e457620000e46200061d565b620000ef8262000138565b505050505050620007e9565b62000106836200018a565b600082511180620001145750805b156200013357620001318383620001cc60201b6200025a1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f62000163620001fd565b826040516200017492919062000644565b60405180910390a1620001878162000236565b50565b6200019581620002b2565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620001f48383604051806060016040528060278152602001620011886027913962000310565b90505b92915050565b6000620002276000805160206200114883398151915260001b620003ba60201b620002021760201c565b546001600160a01b0316919050565b6001600160a01b038116620002685760405162461bcd60e51b81526004016200025f90620006a9565b60405180910390fd5b80620002916000805160206200114883398151915260001b620003ba60201b620002021760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b620002c881620003bd60201b620002881760201c565b620002e75760405162461bcd60e51b81526004016200025f9062000706565b80620002916000805160206200116883398151915260001b620003ba60201b620002021760201c565b60606001600160a01b0384163b6200033c5760405162461bcd60e51b81526004016200025f906200075c565b600080856001600160a01b03168560405162000359919062000793565b600060405180830381855af49150503d806000811462000396576040519150601f19603f3d011682016040523d82523d6000602084013e6200039b565b606091505b509092509050620003ae828286620003cc565b925050505b9392505050565b90565b6001600160a01b03163b151590565b60608315620003dd575081620003b3565b825115620003ee5782518084602001fd5b8160405162461bcd60e51b81526004016200025f9190620007d6565b60006001600160a01b038216620001f7565b62000427816200040a565b81146200018757600080fd5b8051620001f7816200041c565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b03821117156200047e576200047e62000440565b6040525050565b60006200049160405190565b90506200049f828262000456565b919050565b60006001600160401b03821115620004c057620004c062000440565b601f19601f83011660200192915050565b60005b83811015620004ee578181015183820152602001620004d4565b83811115620001315750506000910152565b6000620005176200051184620004a4565b62000485565b905082815260208101848484011115620005345762000534600080fd5b62000541848285620004d1565b509392505050565b600082601f8301126200055f576200055f600080fd5b81516200057184826020860162000500565b949350505050565b600080600060608486031215620005935762000593600080fd5b6000620005a1868662000433565b9350506020620005b48682870162000433565b92505060408401516001600160401b03811115620005d557620005d5600080fd5b620005e38682870162000549565b9150509250925092565b634e487b7160e01b600052601160045260246000fd5b600082821015620006185762000618620005ed565b500390565b634e487b7160e01b600052600160045260246000fd5b6200063e816200040a565b82525050565b6040810162000654828562000633565b620003b3602083018462000633565b602681526000602082017f455243313936373a206e65772061646d696e20697320746865207a65726f206181526564647265737360d01b602082015291505b5060400190565b60208082528101620001f78162000663565b602d81526000602082017f455243313936373a206e657720696d706c656d656e746174696f6e206973206e81526c1bdd08184818dbdb9d1c9858dd609a1b60208201529150620006a2565b60208082528101620001f781620006bb565b602681526000602082017f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f8152651b9d1c9858dd60d21b60208201529150620006a2565b60208082528101620001f78162000718565b600062000779825190565b62000789818560208601620004d1565b9290920192915050565b6000620003b382846200076e565b6000620007ac825190565b808452602084019350620007c5818560208601620004d1565b601f01601f19169290920192915050565b60208082528101620001f48184620007a1565b61094f80620007f96000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100855780635c60da1b146100985780638f283970146100c3578063f851a440146100e35761005d565b3661005d5761005b6100f8565b005b61005b6100f8565b34801561007157600080fd5b5061005b6100803660046105d7565b610112565b61005b610093366004610652565b610159565b3480156100a457600080fd5b506100ad6101ca565b6040516100ba91906106bd565b60405180910390f35b3480156100cf57600080fd5b5061005b6100de3660046105d7565b610205565b3480156100ef57600080fd5b506100ad61022f565b610100610297565b61011061010b6102d9565b6102e3565b565b61011a610307565b6001600160a01b0316336001600160a01b031614156101515761014e8160405180602001604052806000815250600061033a565b50565b61014e6100f8565b610161610307565b6001600160a01b0316336001600160a01b031614156101c2576101bd8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506001925061033a915050565b505050565b6101bd6100f8565b60006101d4610307565b6001600160a01b0316336001600160a01b031614156101fa576101f56102d9565b905090565b6102026100f8565b90565b61020d610307565b6001600160a01b0316336001600160a01b031614156101515761014e81610365565b6000610239610307565b6001600160a01b0316336001600160a01b031614156101fa576101f5610307565b606061027f83836040518060600160405280602781526020016108f3602791396103ae565b90505b92915050565b6001600160a01b03163b151590565b61029f610307565b6001600160a01b0316336001600160a01b031614156101105760405162461bcd60e51b81526004016102d0906106cb565b60405180910390fd5b60006101f561044e565b3660008037600080366000845af43d6000803e808015610302573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b61034383610476565b6000825111806103505750805b156101bd5761035f838361025a565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61038e610307565b8260405161039d929190610737565b60405180910390a161014e816104b6565b60606001600160a01b0384163b6103d75760405162461bcd60e51b81526004016102d090610798565b600080856001600160a01b0316856040516103f291906107f6565b600060405180830381855af49150503d806000811461042d576040519150601f19603f3d011682016040523d82523d6000602084013e610432565b606091505b5091509150610442828286610520565b925050505b9392505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc61032b565b61047f81610559565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b0381166104dc5760405162461bcd60e51b81526004016102d090610845565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060831561052f575081610447565b82511561053f5782518084602001fd5b8160405162461bcd60e51b81526004016102d09190610887565b6001600160a01b0381163b6105805760405162461bcd60e51b81526004016102d0906108e2565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6104ff565b60006001600160a01b038216610282565b6105c1816105a7565b811461014e57600080fd5b8035610282816105b8565b6000602082840312156105ec576105ec600080fd5b60006105f884846105cc565b949350505050565b60008083601f84011261061557610615600080fd5b50813567ffffffffffffffff81111561063057610630600080fd5b60208301915083600182028301111561064b5761064b600080fd5b9250929050565b60008060006040848603121561066a5761066a600080fd5b600061067686866105cc565b935050602084013567ffffffffffffffff81111561069657610696600080fd5b6106a286828701610600565b92509250509250925092565b6106b7816105a7565b82525050565b6020810161028282846106ae565b6020808252810161028281604281527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60208201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267604082015261195d60f21b606082015260800190565b6040810161074582856106ae565b61044760208301846106ae565b602681526000602082017f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f8152651b9d1c9858dd60d21b602082015291505b5060400190565b6020808252810161028281610752565b60005b838110156107c35781810151838201526020016107ab565b8381111561035f5750506000910152565b60006107de825190565b6107ec8185602086016107a8565b9290920192915050565b600061044782846107d4565b602681526000602082017f455243313936373a206e65772061646d696e20697320746865207a65726f206181526564647265737360d01b60208201529150610791565b6020808252810161028281610802565b600061085f825190565b8084526020840193506108768185602086016107a8565b601f01601f19169290920192915050565b6020808252810161027f8184610855565b602d81526000602082017f455243313936373a206e657720696d706c656d656e746174696f6e206973206e81526c1bdd08184818dbdb9d1c9858dd609a1b60208201529150610791565b602080825281016102828161089856fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a0ecfed38097fdfa324892801c8457be5730cea69ea5b3c5ce621ab3c3957df764736f6c63430008090033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

export class ContractProxy__factory extends ContractFactory {
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
    logic: string,
    admin: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractProxy> {
    return super.deploy(
      logic,
      admin,
      data,
      overrides || {}
    ) as Promise<ContractProxy>;
  }
  getDeployTransaction(
    logic: string,
    admin: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(logic, admin, data, overrides || {});
  }
  attach(address: string): ContractProxy {
    return super.attach(address) as ContractProxy;
  }
  connect(signer: Signer): ContractProxy__factory {
    return super.connect(signer) as ContractProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractProxyInterface {
    return new utils.Interface(_abi) as ContractProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractProxy {
    return new Contract(address, _abi, signerOrProvider) as ContractProxy;
  }
}