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
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IDstChainPayment",
        name: "_dstChainPayment",
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
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "ExecutorUpdated",
    type: "event",
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
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
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
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "MessageWithTransferExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
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
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "error",
        type: "bytes",
      },
    ],
    name: "MessageWithTransferFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_srcChainId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "MessageWithTransferFallback",
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
    inputs: [],
    name: "dstChainPayment",
    outputs: [
      {
        internalType: "contract IDstChainPayment",
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
        name: "sender",
        type: "address",
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
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "message",
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
        internalType: "enum MessageReceiver.ExecutionStatus",
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
        name: "executor",
        type: "address",
      },
    ],
    name: "executeMessageWithTransferFallback",
    outputs: [
      {
        internalType: "enum MessageReceiver.ExecutionStatus",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_messageBus",
        type: "address",
      },
      {
        internalType: "address",
        name: "_executor",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "srcChainId",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "srcTxHash",
            type: "bytes32",
          },
        ],
        internalType: "struct MsgDataTypes.RouteInfo",
        name: "route",
        type: "tuple",
      },
      {
        internalType: "uint64",
        name: "dstChainId",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "messageId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IDstChainPayment",
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
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "setExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "messageBus",
        type: "address",
      },
    ],
    name: "setMessageBus",
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
  "0x60806040523480156200001157600080fd5b50600054610100900460ff166200002f5760005460ff161562000039565b620000396200009e565b620000615760405162461bcd60e51b81526004016200005890620000cb565b60405180910390fd5b600054610100900460ff1615801562000084576000805461ffff19166101011790555b801562000097576000805461ff00191690555b5062000124565b6000620000b630620000bc60201b6200088a1760201c565b15905090565b6001600160a01b03163b151590565b602080825281016200011e81602e81527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160208201526d191e481a5b9a5d1a585b1a5e995960921b604082015260600190565b92915050565b6118e180620001346000396000f3fe6080604052600436106100e85760003560e01c80638da5cb5b1161008a578063c0c53b8b11610059578063c0c53b8b14610254578063c34c08e514610274578063f2fde38b14610294578063f60cfa59146102b457600080fd5b80638da5cb5b146101c057806393563a95146101e7578063a1a227fa14610207578063bb0248aa1461022757600080fd5b80635ab7afc6116100c65780635ab7afc61461014f578063699256f414610178578063715018a6146101985780637cd2bffc146101ad57600080fd5b80631c3c0ea8146100ed578063429aafd91461010f578063547cad121461012f575b600080fd5b3480156100f957600080fd5b5061010d610108366004610ccb565b6102e1565b005b34801561011b57600080fd5b5061010d61012a366004610d0b565b610320565b34801561013b57600080fd5b5061010d61014a366004610ccb565b610353565b61016261015d366004610e53565b610386565b60405161016f9190610f42565b60405180910390f35b34801561018457600080fd5b5061010d610193366004610f50565b610401565b3480156101a457600080fd5b5061010d6104af565b6101626101bb366004610f8d565b6104e5565b3480156101cc57600080fd5b506033546001600160a01b03165b60405161016f9190610fcf565b3480156101f357600080fd5b5061010d610202366004610fdd565b6106bf565b34801561021357600080fd5b506066546101da906001600160a01b031681565b34801561023357600080fd5b5061024761024236600461109a565b610730565b60405161016f919061110e565b34801561026057600080fd5b5061010d61026f36600461111c565b6107a1565b34801561028057600080fd5b506067546101da906001600160a01b031681565b3480156102a057600080fd5b5061010d6102af366004610ccb565b610831565b3480156102c057600080fd5b506065546102d4906001600160a01b031681565b60405161016f9190611192565b6033546001600160a01b031633146103145760405162461bcd60e51b815260040161030b906111d5565b60405180910390fd5b61031d81610899565b50565b6033546001600160a01b0316331461034a5760405162461bcd60e51b815260040161030b906111d5565b61031d816108ef565b6033546001600160a01b0316331461037d5760405162461bcd60e51b815260040161030b906111d5565b61031d8161093a565b6066546000906001600160a01b031633146103b35760405162461bcd60e51b815260040161030b9061122f565b7fa0b35e480a2add0100f918632470cc8260628f0e8e277690f77da458ff8f4ab78787878787876040516103ec969594939291906112ad565b60405180910390a15060019695505050505050565b6033546001600160a01b0316331461042b5760405162461bcd60e51b815260040161030b906111d5565b6040516000906001600160a01b0384169083156108fc0290849084818181858888f193505050509050806104715760405162461bcd60e51b815260040161030b90611345565b7f2c876ecb97b3c6854f2488d373403f903eacb800e51c159a5c0c7a9c857e482783836040516104a2929190611355565b60405180910390a1505050565b6033546001600160a01b031633146104d95760405162461bcd60e51b815260040161030b906111d5565b6104e36000610986565b565b6066546000906001600160a01b031633146105125760405162461bcd60e51b815260040161030b9061122f565b6067546001600160a01b0383811691161461053f5760405162461bcd60e51b815260040161030b906113ae565b606554610559906001600160a01b038881169116876109d8565b606554604051631dfbd4cf60e21b81526001600160a01b03909116906377ef533c9061058d908990899088906004016113be565b602060405180830381600087803b1580156105a757600080fd5b505af19250505080156105d7575060408051601f3d908101601f191682019092526105d4918101906113ff565b60015b610654573d808015610605576040519150601f19603f3d011682016040523d82523d6000602084013e61060a565b606091505b507f3538e4460f392ef0ea71ed8ac3c3ddd96cdb41831e212d8fe3a145e1956e85d5888888888888876040516106469796959493929190611420565b60405180910390a150610697565b507fa2ea2fb459fe24fd2d3083215ee27cdee6cd1773cd34d407ce9a5f910409ccfe87878787878760405161068e96959493929190611495565b60405180910390a15b6065546106b2906001600160a01b03888116911660006109d8565b5060019695505050505050565b6033546001600160a01b031633146106e95760405162461bcd60e51b815260040161030b906111d5565b6106fd6001600160a01b0384168383610ad7565b7f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b63988383836040516104a2939291906114b0565b600060016107416020870187610ccb565b6107516040880160208901610ccb565b6107616060890160408a016114d8565b8860600135888888604051602001610780989796959493929190611595565b6040516020818303038152906040528051906020012090505b949350505050565b600054610100900460ff166107bc5760005460ff16156107c0565b303b155b6107dc5760405162461bcd60e51b815260040161030b9061165b565b600054610100900460ff161580156107fe576000805461ffff19166101011790555b61080784610986565b6108108361093a565b61081982610899565b801561082b576000805461ff00191690555b50505050565b6033546001600160a01b0316331461085b5760405162461bcd60e51b815260040161030b906111d5565b6001600160a01b0381166108815760405162461bcd60e51b815260040161030b906116ae565b61031d81610986565b6001600160a01b03163b151590565b606780546001600160a01b0319166001600160a01b0383161790556040517fd9436ef9ce00ffeabc5da2489701502d3bd1a5ed7b254a1981fc5ffef9828e11906108e4908390610fcf565b60405180910390a150565b606580546001600160a01b0319166001600160a01b0383161790556040517ff2071e1b38ab3c561fb5d090a912ad00d911946da5f417b4eac46024a2f6ed60906108e4908390611192565b606680546001600160a01b0319166001600160a01b0383169081179091556040517f3f8223bcd8b3b875473e9f9e14e1ad075451a2b5ffd31591655da9a01516bf5e916108e491610fcf565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b801580610a605750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e90610a0e90309086906004016116be565b60206040518083038186803b158015610a2657600080fd5b505afa158015610a3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5e91906113ff565b155b610a7c5760405162461bcd60e51b815260040161030b9061172c565b610ad28363095ea7b360e01b8484604051602401610a9b92919061173c565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610af6565b505050565b610ad28363a9059cbb60e01b8484604051602401610a9b92919061173c565b6000610b4b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610b859092919063ffffffff16565b805190915015610ad25780806020019051810190610b69919061175d565b610ad25760405162461bcd60e51b815260040161030b906117c5565b6060610b948484600085610b9e565b90505b9392505050565b606082471015610bc05760405162461bcd60e51b815260040161030b90611818565b6001600160a01b0385163b610be75760405162461bcd60e51b815260040161030b9061185c565b600080866001600160a01b03168587604051610c03919061188e565b60006040518083038185875af1925050503d8060008114610c40576040519150601f19603f3d011682016040523d82523d6000602084013e610c45565b606091505b5091509150610c55828286610c60565b979650505050505050565b60608315610c6f575081610b97565b825115610c7f5782518084602001fd5b8160405162461bcd60e51b815260040161030b919061189a565b60006001600160a01b0382165b92915050565b610cb581610c99565b811461031d57600080fd5b8035610ca681610cac565b600060208284031215610ce057610ce0600080fd5b60006107998484610cc0565b6000610ca682610c99565b610cb581610cec565b8035610ca681610cf7565b600060208284031215610d2057610d20600080fd5b60006107998484610d00565b80610cb5565b8035610ca681610d2c565b67ffffffffffffffff8116610cb5565b8035610ca681610d3d565b634e487b7160e01b600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff82111715610d9457610d94610d58565b6040525050565b6000610da660405190565b9050610db28282610d6e565b919050565b600067ffffffffffffffff821115610dd157610dd1610d58565b601f19601f83011660200192915050565b82818337506000910152565b6000610e01610dfc84610db7565b610d9b565b905082815260208101848484011115610e1c57610e1c600080fd5b610e27848285610de2565b509392505050565b600082601f830112610e4357610e43600080fd5b8135610799848260208601610dee565b60008060008060008060c08789031215610e6f57610e6f600080fd5b6000610e7b8989610cc0565b9650506020610e8c89828a01610cc0565b9550506040610e9d89828a01610d32565b9450506060610eae89828a01610d4d565b935050608087013567ffffffffffffffff811115610ece57610ece600080fd5b610eda89828a01610e2f565b92505060a0610eeb89828a01610cc0565b9150509295509295509295565b634e487b7160e01b600052602160045260246000fd5b6003811061031d5761031d610ef8565b80610db281610f0e565b6000610ca682610f1e565b610f3c81610f28565b82525050565b60208101610ca68284610f33565b60008060408385031215610f6657610f66600080fd5b6000610f728585610cc0565b9250506020610f8385828601610d32565b9150509250929050565b60008060008060008060c08789031215610fa957610fa9600080fd5b6000610fb58989610cc0565b9650506020610e8c89828a01610d00565b610f3c81610c99565b60208101610ca68284610fc6565b600080600060608486031215610ff557610ff5600080fd5b60006110018686610d00565b935050602061101286828701610cc0565b925050604061102386828701610d32565b9150509250925092565b60006080828403121561104257611042600080fd5b50919050565b60008083601f84011261105d5761105d600080fd5b50813567ffffffffffffffff81111561107857611078600080fd5b60208301915083600182028301111561109357611093600080fd5b9250929050565b60008060008060c085870312156110b3576110b3600080fd5b60006110bf878761102d565b94505060806110d087828801610d4d565b93505060a085013567ffffffffffffffff8111156110f0576110f0600080fd5b6110fc87828801611048565b95989497509550505050565b80610f3c565b60208101610ca68284611108565b60008060006060848603121561113457611134600080fd5b60006111408686610cc0565b935050602061115186828701610cc0565b925050604061102386828701610cc0565b60006001600160a01b038216610ca6565b6000610ca682611162565b6000610ca682611173565b610f3c8161117e565b60208101610ca68284611189565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b60208082528101610ca6816111a0565b602a81526000602082017f4d65737361676552656365697665723a2063616c6c6572206973206e6f74206d8152696573736167652062757360b01b602082015291505b5060400190565b60208082528101610ca6816111e5565b67ffffffffffffffff8116610f3c565b60005b8381101561126a578181015183820152602001611252565b8381111561082b5750506000910152565b6000611285825190565b80845260208401935061129c81856020860161124f565b601f01601f19169290920192915050565b60c081016112bb8289610fc6565b6112c86020830188610fc6565b6112d56040830187611108565b6112e2606083018661123f565b81810360808301526112f4818561127b565b9050610c5560a0830184610fc6565b602581526000602082017f5061796d656e743a207769746864726177206e617469766520746f6b656e2066815264185a5b195960da1b60208201529150611228565b60208082528101610ca681611303565b604081016113638285611189565b610b976020830184611108565b602181526000602082017f4d65737361676552656365697665723a20696e76616c6964206578656375746f8152603960f91b60208201529150611228565b60208082528101610ca681611370565b606081016113cc8286611189565b6113d96020830185611108565b81810360408301526113eb818461127b565b95945050505050565b8051610ca681610d2c565b60006020828403121561141457611414600080fd5b600061079984846113f4565b60e0810161142e828a610fc6565b61143b6020830189611189565b6114486040830188611108565b611455606083018761123f565b8181036080830152611467818661127b565b905061147660a0830185610fc6565b81810360c0830152611488818461127b565b9998505050505050505050565b60c081016114a38289610fc6565b6112c86020830188611189565b606081016114be8286611189565b6114cb6020830185610fc6565b6107996040830184611108565b6000602082840312156114ed576114ed600080fd5b60006107998484610d4d565b6002811061031d5761031d610ef8565b80610db2816114f9565b6000610ca682611509565b6000610ca68260f81b90565b610f3c61153682611513565b61151e565b6000610ca68260601b90565b6000610ca68261153b565b610f3c61155e82610c99565b611547565b6000610ca68260c01b90565b610f3c67ffffffffffffffff8216611563565b600061158f838584610de2565b50500190565b60006115a1828b61152a565b6001820191506115b1828a611552565b6014820191506115c18289611552565b6014820191506115d1828861156f565b6008820191506115e18287611108565b6020820191506115f1828661156f565b600882019150611602828486611582565b9a9950505050505050505050565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b60208201529150611228565b60208082528101610ca681611610565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b60208201529150611228565b60208082528101610ca68161166b565b604081016116cc8285610fc6565b610b976020830184610fc6565b603681526000602082017f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f81527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60208201529150611228565b60208082528101610ca6816116d9565b604081016113638285610fc6565b801515610cb5565b8051610ca68161174a565b60006020828403121561177257611772600080fd5b60006107998484611752565b602a81526000602082017f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b60208201529150611228565b60208082528101610ca68161177e565b602681526000602082017f416464726573733a20696e73756666696369656e742062616c616e636520666f8152651c8818d85b1b60d21b60208201529150611228565b60208082528101610ca6816117d5565b601d81526000602082017f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000815291506111ce565b60208082528101610ca681611828565b6000611876825190565b61188481856020860161124f565b9290920192915050565b6000610b97828461186c565b60208082528101610b97818461127b56fea26469706673582212201ca8e020660f8c73764af680c804d317c4f8ab734e27668ed9af1d588d1f3dfe64736f6c63430008090033";

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MessageReceiver> {
    return super.deploy(overrides || {}) as Promise<MessageReceiver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
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
