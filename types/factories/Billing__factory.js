"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
                internalType: "bytes",
                name: "bills",
                type: "bytes",
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
                name: "nonce",
                type: "uint64",
            },
        ],
        name: "Billing",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "BillingTypesHashUpdated",
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
                internalType: "contract IRouter",
                name: "router",
                type: "address",
            },
        ],
        name: "RouterUpdated",
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
                name: "provider",
                type: "address",
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
        name: "billingTypesHash",
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
                internalType: "bytes",
                name: "bills",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "timeout",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
        ],
        name: "hashBillingTypes",
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
                internalType: "bytes",
                name: "bills",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "timeout",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
        ],
        name: "hashTypedDataV4ForBills",
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
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "version",
                type: "string",
            },
            {
                internalType: "string",
                name: "billingTypes",
                type: "string",
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
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
        ],
        name: "nonceExists",
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
                name: "provider",
                type: "address",
            },
            {
                internalType: "bytes32",
                name: "account",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "bills",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "timeout",
                type: "uint256",
            },
            {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "spend",
        outputs: [
            {
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
        ],
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
var _bytecode = "0x608060405234801561001057600080fd5b506125aa806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063851981d21161008c578063c025303e11610066578063c025303e14610188578063de7c8e58146101a8578063f2fde38b146101bb578063f887ea40146101ce57600080fd5b8063851981d2146101495780638da5cb5b1461015c57806393563a951461017557600080fd5b806308277dda146100d457806317a6020b146100e957806360bcb0ce14610112578063699256f41461011b57806370a082311461012e578063715018a614610141575b600080fd5b6100e76100e23660046114ed565b6101ee565b005b6100fc6100f73660046115de565b61028a565b60405161010991906116a4565b60405180910390f35b6100fc60cc5481565b6100e76101293660046116b2565b610593565b6100fc61013c3660046116ef565b610641565b6100e7610771565b6100fc610157366004611710565b6107a7565b6033546001600160a01b0316604051610109919061179e565b6100e76101833660046117ac565b6107ef565b61019b6101963660046117fc565b610860565b604051610109919061184a565b6100fc6101b6366004611710565b6109b7565b6100e76101c93660046116ef565b6109d8565b60cb546101e1906001600160a01b031681565b604051610109919061186c565b60006101fa6001610a34565b90508015610212576000805461ff0019166101001790555b61021b86610ac1565b6102258585610b13565b61022e83610b48565b61023782610b7f565b8015610282576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498906102799060019061188e565b60405180910390a15b505050505050565b6000600260995414156102b85760405162461bcd60e51b81526004016102af906118d3565b60405180910390fd5b600260995560cb546040805163e70b7acb60e01b815290516000926001600160a01b03169163e70b7acb916004808301926020929190829003018186803b15801561030257600080fd5b505afa158015610316573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033a91906118ee565b9050336001600160a01b038216146103645760405162461bcd60e51b81526004016102af90611955565b6000846001600160401b03161161038d5760405162461bcd60e51b81526004016102af90611992565b4285116103ac5760405162461bcd60e51b81526004016102af906119cc565b6001600160a01b038816600090815260cd602090815260408083208a845282528083206001600160401b038816845290915290205460ff16156104015760405162461bcd60e51b81526004016102af90611a08565b600061041089898989896109b7565b905060cb60009054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561046057600080fd5b505afa158015610474573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049891906118ee565b6001600160a01b031663238a4d1e8a83876040518463ffffffff1660e01b81526004016104c793929190611a7a565b602060405180830381600087803b1580156104e157600080fd5b505af11580156104f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105199190611aba565b6105355760405162461bcd60e51b81526004016102af90611b0f565b61054189898988610baf565b92507fb23a1eee6a70af817a758fd091feb704a6bd3edc57e7fa7d2f8a5bfa58949298898989868960405161057a959493929190611b2e565b60405180910390a1505060016099559695505050505050565b6033546001600160a01b031633146105bd5760405162461bcd60e51b81526004016102af90611ba9565b6040516000906001600160a01b0384169083156108fc0290849084818181858888f193505050509050806106035760405162461bcd60e51b81526004016102af90611c05565b7f2c876ecb97b3c6854f2488d373403f903eacb800e51c159a5c0c7a9c857e48278383604051610634929190611c15565b60405180910390a1505050565b60cb54604080516314b47ed960e31b815290516000926001600160a01b03169163a5a3f6c8916004808301926020929190829003018186803b15801561068657600080fd5b505afa15801561069a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106be91906118ee565b6001600160a01b0316636b074a07836040518263ffffffff1660e01b81526004016106e9919061179e565b60206040518083038186803b15801561070157600080fd5b505afa158015610715573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107399190611aba565b6107555760405162461bcd60e51b81526004016102af90611c64565b506001600160a01b0316600090815260ce602052604090205490565b6033546001600160a01b0316331461079b5760405162461bcd60e51b81526004016102af90611ba9565b6107a56000610ac1565b565b600060cc548686868051906020012086866040516020016107cd96959493929190611c74565b6040516020818303038152906040528051906020012090505b95945050505050565b6033546001600160a01b031633146108195760405162461bcd60e51b81526004016102af90611ba9565b61082d6001600160a01b0384168383610ccc565b7f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b639883838360405161063493929190611cc3565b60cb54604080516350e420e560e11b815290516000926001600160a01b03169163a1c841ca916004808301926020929190829003018186803b1580156108a557600080fd5b505afa1580156108b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108dd91906118ee565b6001600160a01b0316632d52976485856040518363ffffffff1660e01b815260040161090a929190611ceb565b60206040518083038186803b15801561092257600080fd5b505afa158015610936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095a9190611aba565b6109765760405162461bcd60e51b81526004016102af90611c64565b506001600160a01b038316600090815260cd6020908152604080832085845282528083206001600160401b038516845290915290205460ff165b9392505050565b60006109ce6109c987878787876107a7565b610d27565b9695505050505050565b6033546001600160a01b03163314610a025760405162461bcd60e51b81526004016102af90611ba9565b6001600160a01b038116610a285760405162461bcd60e51b81526004016102af90611d3c565b610a3181610ac1565b50565b60008054610100900460ff1615610a7b578160ff166001148015610a575750303b155b610a735760405162461bcd60e51b81526004016102af90611d97565b506000919050565b60005460ff808416911610610aa25760405162461bcd60e51b81526004016102af90611d97565b506000805460ff191660ff92909216919091179055600190565b919050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610b3a5760405162461bcd60e51b81526004016102af90611def565b610b448282610d40565b5050565b600054610100900460ff16610b6f5760405162461bcd60e51b81526004016102af90611def565b610a318180519060200120610d81565b600054610100900460ff16610ba65760405162461bcd60e51b81526004016102af90611def565b610a3181610dc1565b60008060cb60009054906101000a90046001600160a01b03166001600160a01b031663c24126766040518163ffffffff1660e01b815260040160206040518083038186803b158015610c0057600080fd5b505afa158015610c14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3891906118ee565b9050610c448685610e32565b9150610c508183611041565b6001600160a01b038716600090815260ce6020526040902054909250610c76908361109f565b6001600160a01b03909616600090815260ce602090815260408083209890985560cd81528782209682529586528681206001600160401b03909416815292909452939020805460ff191660011790555090919050565b610d228363a9059cbb60e01b8484604051602401610ceb929190611ceb565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526110ab565b505050565b6000610d3a610d3461113a565b83611176565b92915050565b600054610100900460ff16610d675760405162461bcd60e51b81526004016102af90611def565b815160209283012081519190920120606591909155606655565b60cc8190556040517fcf56a45f18d68202ed136bed985143964e07246be70e444cc5d94d670de61f5390610db69083906116a4565b60405180910390a150565b6001600160a01b038116610de75760405162461bcd60e51b81526004016102af90611e33565b60cb80546001600160a01b0319166001600160a01b0383161790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090610db690839061186c565b60008082806020019051810190610e49919061203d565b90506000815111610e6c5760405162461bcd60e51b81526004016102af906120ab565b60005b8151811015611039576000828281518110610e8c57610e8c6120bb565b60200260200101519050600081602001515111610ebb5760405162461bcd60e51b81526004016102af90612105565b60005b81602001515181101561102457600082602001518481518110610ee357610ee36120bb565b60200260200101519050600060cb60009054906101000a90046001600160a01b03166001600160a01b03166337187fc36040518163ffffffff1660e01b815260040160206040518083038186803b158015610f3d57600080fd5b505afa158015610f51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7591906118ee565b825160208401518651604051630ace4d5d60e41b81526001600160a01b03949094169363ace4d5d093610fb1938f939192909190600401612159565b60206040518083038186803b158015610fc957600080fd5b505afa158015610fdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611001919061218e565b905061100d878261109f565b96505050808061101c906121c5565b915050610ebe565b50508080611031906121c5565b915050610e6f565b505092915050565b60008061104d846111a9565b90506012808211611080576110776110658284611242565b61107090600a6122ee565b859061124e565b92505050610d3a565b6107e661108d8383611242565b61109890600a6122ee565b859061125a565b60006109b082846122fd565b6000611100826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112669092919063ffffffff16565b805190915015610d22578080602001905181019061111e9190611aba565b610d225760405162461bcd60e51b81526004016102af9061235c565b60006111717f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61116960655490565b606654611275565b905090565b6000828260405160200161118b929190612372565b60405160208183030381529060405280519060200120905092915050565b6000806000836001600160a01b03166040516111c4906123a3565b600060405180830381855afa9150503d80600081146111ff576040519150601f19603f3d011682016040523d82523d6000602084013e611204565b606091505b5091509150816112265760405162461bcd60e51b81526004016102af906123ec565b8080602001905181019061123a919061218e565b949350505050565b60006109b082846123fc565b60006109b08284612429565b60006109b0828461243d565b606061123a84846000856112af565b6000838383463060405160200161129095949392919061245c565b6040516020818303038152906040528051906020012090509392505050565b6060824710156112d15760405162461bcd60e51b81526004016102af906124e1565b6001600160a01b0385163b6112f85760405162461bcd60e51b81526004016102af90612525565b600080866001600160a01b031685876040516113149190612557565b60006040518083038185875af1925050503d8060008114611351576040519150601f19603f3d011682016040523d82523d6000602084013e611356565b606091505b5091509150611366828286611371565b979650505050505050565b606083156113805750816109b0565b8251156113905782518084602001fd5b8160405162461bcd60e51b81526004016102af9190612563565b60006001600160a01b038216610d3a565b6113c4816113aa565b8114610a3157600080fd5b8035610d3a816113bb565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b0382111715611415576114156113da565b6040525050565b600061142760405190565b9050610abc82826113f0565b60006001600160401b0382111561144c5761144c6113da565b601f19601f83011660200192915050565b82818337506000910152565b600061147c61147784611433565b61141c565b90508281526020810184848401111561149757611497600080fd5b6114a284828561145d565b509392505050565b600082601f8301126114be576114be600080fd5b813561123a848260208601611469565b6000610d3a826113aa565b6113c4816114ce565b8035610d3a816114d9565b600080600080600060a0868803121561150857611508600080fd5b600061151488886113cf565b95505060208601356001600160401b0381111561153357611533600080fd5b61153f888289016114aa565b94505060408601356001600160401b0381111561155e5761155e600080fd5b61156a888289016114aa565b93505060608601356001600160401b0381111561158957611589600080fd5b611595888289016114aa565b92505060806115a6888289016114e2565b9150509295509295909350565b806113c4565b8035610d3a816115b3565b6001600160401b0381166113c4565b8035610d3a816115c4565b60008060008060008060c087890312156115fa576115fa600080fd5b600061160689896113cf565b965050602061161789828a016115b9565b95505060408701356001600160401b0381111561163657611636600080fd5b61164289828a016114aa565b945050606061165389828a016115b9565b935050608061166489828a016115d3565b92505060a08701356001600160401b0381111561168357611683600080fd5b61168f89828a016114aa565b9150509295509295509295565b805b82525050565b60208101610d3a828461169c565b600080604083850312156116c8576116c8600080fd5b60006116d485856113cf565b92505060206116e5858286016115b9565b9150509250929050565b60006020828403121561170457611704600080fd5b600061123a84846113cf565b600080600080600060a0868803121561172b5761172b600080fd5b600061173788886113cf565b9550506020611748888289016115b9565b94505060408601356001600160401b0381111561176757611767600080fd5b611773888289016114aa565b9350506060611784888289016115b9565b92505060806115a6888289016115d3565b61169e816113aa565b60208101610d3a8284611795565b6000806000606084860312156117c4576117c4600080fd5b60006117d086866114e2565b93505060206117e1868287016113cf565b92505060406117f2868287016115b9565b9150509250925092565b60008060006060848603121561181457611814600080fd5b600061182086866113cf565b9350506020611831868287016115b9565b92505060406117f2868287016115d3565b80151561169e565b60208101610d3a8284611842565b6000610d3a826114ce565b61169e81611858565b60208101610d3a8284611863565b600060ff8216610d3a565b61169e8161187a565b60208101610d3a8284611885565b601f81526000602082017f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00815291505b5060200190565b60208082528101610d3a8161189c565b8051610d3a816114d9565b60006020828403121561190357611903600080fd5b600061123a84846118e3565b602681526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742066756e81526519081c1bdbdb60d21b602082015291505b5060400190565b60208082528101610d3a8161190f565b601681526000602082017542696c6c696e673a20696e76616c6964206e6f6e636560501b815291506118cc565b60208082528101610d3a81611965565b601381526000602082017242696c6c696e673a207478206578706972657360681b815291506118cc565b60208082528101610d3a816119a2565b601581526000602082017442696c6c696e673a206e6f6e63652065786973747360581b815291506118cc565b60208082528101610d3a816119dc565b60005b83811015611a33578181015183820152602001611a1b565b83811115611a42576000848401525b50505050565b6000611a52825190565b808452602084019350611a69818560208601611a18565b601f01601f19169290920192915050565b60608101611a888286611795565b611a95602083018561169c565b81810360408301526107e68184611a48565b8015156113c4565b8051610d3a81611aa7565b600060208284031215611acf57611acf600080fd5b600061123a8484611aaf565b601a81526000602082017f42696c6c696e673a20696e76616c6964207369676e6174757265000000000000815291506118cc565b60208082528101610d3a81611adb565b6001600160401b03811661169e565b60a08101611b3c8288611795565b611b49602083018761169c565b8181036040830152611b5b8186611a48565b9050611b6a606083018561169c565b6109ce6080830184611b1f565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260006118cc565b60208082528101610d3a81611b77565b602f81526000602082017f4f776e6572576974686472617761626c653a207769746864726177206e61746981526e1d99481d1bdad95b8819985a5b1959608a1b6020820152915061194e565b60208082528101610d3a81611bb9565b60408101611c238285611863565b6109b0602083018461169c565b601d81526000602082017f42696c6c696e673a206e6f6e6578697374656e742070726f7669646572000000815291506118cc565b60208082528101610d3a81611c30565b60c08101611c82828961169c565b611c8f6020830188611795565b611c9c604083018761169c565b611ca9606083018661169c565b611cb6608083018561169c565b61136660a0830184611b1f565b60608101611cd18286611863565b611cde6020830185611795565b61123a604083018461169c565b60408101611c238285611795565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b6020820152915061194e565b60208082528101610d3a81611cf9565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b6020820152915061194e565b60208082528101610d3a81611d4c565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b6020820152915061194e565b60208082528101610d3a81611da7565b601b81526000602082017f526f75746572577261707065723a207a65726f20616464726573730000000000815291506118cc565b60208082528101610d3a81611dff565b60006001600160401b03821115611e5c57611e5c6113da565b5060209081020190565b8051610d3a816115b3565b60058110610a3157600080fd5b8051610d3a81611e71565b600060408284031215611e9e57611e9e600080fd5b611ea8604061141c565b90506000611eb68484611e7e565b8252506020611ec784848301611e66565b60208301525092915050565b6000611ee161147784611e43565b83815290506020810160408402830185811115611f0057611f00600080fd5b835b81811015611f265780611f158882611e89565b845250602090920191604001611f02565b5050509392505050565b600082601f830112611f4457611f44600080fd5b815161123a848260208601611ed3565b600060408284031215611f6957611f69600080fd5b611f73604061141c565b90506000611f818484611e66565b82525060208201516001600160401b03811115611fa057611fa0600080fd5b611ec784828501611f30565b6000611fba61147784611e43565b83815290506020808201908402830185811115611fd957611fd9600080fd5b835b81811015611f265780516001600160401b03811115611ffc57611ffc600080fd5b8086016120098982611f54565b8552505060209283019201611fdb565b600082601f83011261202d5761202d600080fd5b815161123a848260208601611fac565b60006020828403121561205257612052600080fd5b81516001600160401b0381111561206b5761206b600080fd5b61123a84828501612019565b601c81526000602082017f42696c6c696e673a20656d7074792062696c6c207061796c6f61647300000000815291506118cc565b60208082528101610d3a81612077565b634e487b7160e01b600052603260045260246000fd5b601981526000602082017f42696c6c696e673a20656d7074792062696c6c20656e74727900000000000000815291506118cc565b60208082528101610d3a816120d1565b634e487b7160e01b600052602160045260246000fd5b60058110610a3157610a31612115565b80610abc8161212b565b6000610d3a8261213b565b61169e81612145565b608081016121678287611795565b6121746020830186612150565b612181604083018561169c565b6107e6606083018461169c565b6000602082840312156121a3576121a3600080fd5b600061123a8484611e66565b634e487b7160e01b600052601160045260246000fd5b60006000198214156121d9576121d96121af565b5060010190565b80825b600185111561221f578086048111156121fe576121fe6121af565b600185161561220c57908102905b80026122188560011c90565b94506121e3565b94509492505050565b600082612237575060016109b0565b81612244575060006109b0565b816001811461225a576002811461226457612291565b60019150506109b0565b60ff841115612275576122756121af565b8360020a91508482111561228b5761228b6121af565b506109b0565b5060208310610133831016604e8410600b84101617156122c4575081810a838111156122bf576122bf6121af565b6109b0565b6122d184848460016121e0565b925090508184048111156122e7576122e76121af565b0292915050565b60006109b06000198484612228565b60008219821115612310576123106121af565b500190565b602a81526000602082017f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b6020820152915061194e565b60208082528101610d3a81612315565b8061169e565b61190160f01b81526002016000612389828561236c565b602082019150612399828461236c565b5060200192915050565b63313ce56760e01b8152600060048201610d3a565b601b81526000602082017f5265736f75726365446174613a20696e76616c696420746f6b656e0000000000815291506118cc565b60208082528101610d3a816123b8565b60008282101561240e5761240e6121af565b500390565b634e487b7160e01b600052601260045260246000fd5b60008261243857612438612413565b500490565b6000816000190483118215151615612457576124576121af565b500290565b60a0810161246a828861169c565b612477602083018761169c565b612484604083018661169c565b612491606083018561169c565b6109ce6080830184611795565b602681526000602082017f416464726573733a20696e73756666696369656e742062616c616e636520666f8152651c8818d85b1b60d21b6020820152915061194e565b60208082528101610d3a8161249e565b601d81526000602082017f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000815291506118cc565b60208082528101610d3a816124f1565b600061253f825190565b61254d818560208601611a18565b9290920192915050565b60006109b08284612535565b602080825281016109b08184611a4856fea26469706673582212203dc41cddc7609c0fcae8c200133b31e1e212256b9b9af029b0b53962e563ce3e64736f6c63430008090033";
var Billing__factory = /** @class */ (function (_super) {
    __extends(Billing__factory, _super);
    function Billing__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    Billing__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Billing__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Billing__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Billing__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Billing__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Billing__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Billing__factory.bytecode = _bytecode;
    Billing__factory.abi = _abi;
    return Billing__factory;
}(ethers_1.ContractFactory));
exports.Billing__factory = Billing__factory;
