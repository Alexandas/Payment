/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MessageReceiver,
  MessageReceiverInterface,
} from "../MessageReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_messageBus",
        type: "address",
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
        name: "messageBus",
        type: "address",
      },
    ],
    name: "MessageBusUpdated",
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
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessage",
    outputs: [
      {
        internalType: "enum IMessageReceiverApp.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessageWithTransfer",
    outputs: [
      {
        internalType: "enum IMessageReceiverApp.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessageWithTransferFallback",
    outputs: [
      {
        internalType: "enum IMessageReceiverApp.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "executeMessageWithTransferRefund",
    outputs: [
      {
        internalType: "enum IMessageReceiverApp.ExecutionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "executor",
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
    name: "message",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "messageBus",
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
    name: "sender",
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
        name: "_messageBus",
        type: "address",
      },
    ],
    name: "setMessageBus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "src",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
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
  "0x608060405234801561001057600080fd5b50604051610a47380380610a4783398101604081905261002f916100ad565b6100383361005d565b600180546001600160a01b0319166001600160a01b03929092169190911790556100dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100bf57600080fd5b81516001600160a01b03811681146100d657600080fd5b9392505050565b61095b806100ec6000396000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101835780639c649fdf146101a1578063a1a227fa146101b4578063c34c08e5146101d4578063e21f37ce146101f4578063f2fde38b1461021657600080fd5b80630bcb4982146100ac5780632e7dc6af146100d5578063547cad12146101165780635ab7afc61461013857806367e404ce1461014b5780637cd2bffc14610138575b600080fd5b6100bf6100ba3660046106b2565b610236565b6040516100cc9190610721565b60405180910390f35b3480156100e157600080fd5b506002546100fd90600160a01b900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016100cc565b34801561012257600080fd5b50610136610131366004610749565b610275565b005b6100bf610146366004610783565b610332565b34801561015757600080fd5b5060025461016b906001600160a01b031681565b6040516001600160a01b0390911681526020016100cc565b34801561018f57600080fd5b506000546001600160a01b031661016b565b6100bf6101af366004610813565b61036a565b3480156101c057600080fd5b5060015461016b906001600160a01b031681565b3480156101e057600080fd5b5060045461016b906001600160a01b031681565b34801561020057600080fd5b506102096103fc565b6040516100cc919061085e565b34801561022257600080fd5b50610136610231366004610749565b61048a565b6001546000906001600160a01b0316331461026c5760405162461bcd60e51b8152600401610263906108b3565b60405180910390fd5b95945050505050565b336102886000546001600160a01b031690565b6001600160a01b0316146102de5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610263565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f3f8223bcd8b3b875473e9f9e14e1ad075451a2b5ffd31591655da9a01516bf5e9060200160405180910390a150565b6001546000906001600160a01b0316331461035f5760405162461bcd60e51b8152600401610263906108b3565b979650505050505050565b6001546000906001600160a01b031633146103975760405162461bcd60e51b8152600401610263906108b3565b6002805467ffffffffffffffff8716600160a01b026001600160e01b03199091166001600160a01b038916171790556103d2600385856105b4565b5050600480546001600160a01b0383166001600160a01b0319909116179055600195945050505050565b60038054610409906108ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610435906108ea565b80156104825780601f1061045757610100808354040283529160200191610482565b820191906000526020600020905b81548152906001019060200180831161046557829003601f168201915b505050505081565b3361049d6000546001600160a01b031690565b6001600160a01b0316146104f35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610263565b6001600160a01b0381166105585760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610263565b61056181610564565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546105c0906108ea565b90600052602060002090601f0160209004810192826105e25760008555610628565b82601f106105fb5782800160ff19823516178555610628565b82800160010185558215610628579182015b8281111561062857823582559160200191906001019061060d565b50610634929150610638565b5090565b5b808211156106345760008155600101610639565b80356001600160a01b038116811461066457600080fd5b919050565b60008083601f84011261067b57600080fd5b50813567ffffffffffffffff81111561069357600080fd5b6020830191508360208285010111156106ab57600080fd5b9250929050565b6000806000806000608086880312156106ca57600080fd5b6106d38661064d565b945060208601359350604086013567ffffffffffffffff8111156106f657600080fd5b61070288828901610669565b909450925061071590506060870161064d565b90509295509295909350565b602081016003831061074357634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561075b57600080fd5b6107648261064d565b9392505050565b803567ffffffffffffffff8116811461066457600080fd5b600080600080600080600060c0888a03121561079e57600080fd5b6107a78861064d565b96506107b56020890161064d565b9550604088013594506107ca6060890161076b565b9350608088013567ffffffffffffffff8111156107e657600080fd5b6107f28a828b01610669565b9094509250610805905060a0890161064d565b905092959891949750929550565b60008060008060006080868803121561082b57600080fd5b6108348661064d565b94506108426020870161076b565b9350604086013567ffffffffffffffff8111156106f657600080fd5b600060208083528351808285015260005b8181101561088b5785810183015185820160400152820161086f565b8181111561089d576000604083870101525b50601f01601f1916929092016040019392505050565b60208082526019908201527f63616c6c6572206973206e6f74206d6573736167652062757300000000000000604082015260600190565b600181811c908216806108fe57607f821691505b6020821081141561091f57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220b932420f3b8e28285fa2123cd5694fe87a3a4954921e598872910a00ade106d564736f6c63430008090033";

export class MessageReceiver__factory extends ContractFactory {
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
    _messageBus: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MessageReceiver> {
    return super.deploy(
      _messageBus,
      overrides || {}
    ) as Promise<MessageReceiver>;
  }
  getDeployTransaction(
    _messageBus: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_messageBus, overrides || {});
  }
  attach(address: string): MessageReceiver {
    return super.attach(address) as MessageReceiver;
  }
  connect(signer: Signer): MessageReceiver__factory {
    return super.connect(signer) as MessageReceiver__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessageReceiverInterface {
    return new utils.Interface(_abi) as MessageReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MessageReceiver {
    return new Contract(address, _abi, signerOrProvider) as MessageReceiver;
  }
}
