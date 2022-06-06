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
exports.ContentTracer__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
                name: "count",
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
                name: "count",
                type: "uint256",
            },
        ],
        name: "Remove",
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
            {
                internalType: "uint256",
                name: "count",
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
            {
                internalType: "uint256[]",
                name: "counts",
                type: "uint256[]",
            },
        ],
        name: "insertMult",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
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
        name: "metas",
        outputs: [
            {
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "count",
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
var _bytecode = "0x608060405234801561001057600080fd5b50611d5c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063db17012511610071578063db17012514610186578063dbfd473714610199578063de47238c146101ac578063e65da1e7146101bf578063f2fde38b146101df578063f887ea40146101f257600080fd5b8063485cc955146100b9578063715018a6146100ce57806389512e17146100d65780638da5cb5b1461013a578063b7ab288314610153578063b840f92114610173575b600080fd5b6100cc6100c73660046110de565b610218565b005b6100cc61029e565b6101236100e4366004611228565b60656020908152600093845260408085208252928452919092208251808401830180519281529083019390920192909220919052805460019091015482565b60405161013192919061129a565b60405180910390f35b6033546001600160a01b031660405161013191906112be565b610166610161366004611228565b6102dd565b60405161013191906112d4565b6100cc61018136600461148a565b61032a565b6100cc610194366004611555565b610546565b6100cc6101a73660046115a2565b610673565b6100cc6101ba366004611614565b6107c3565b6101d26101cd366004611228565b610967565b604051610131919061167a565b6100cc6101ed366004611688565b610af7565b60005461020b906201000090046001600160a01b031681565b60405161013191906116d9565b60006102246001610b53565b9050801561023c576000805461ff0019166101001790555b61024583610be0565b61024e82610c32565b8015610299576000805461ff00191690556040517f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890610290906001906116fb565b60405180910390a15b505050565b6033546001600160a01b031633146102d15760405162461bcd60e51b81526004016102c89061173e565b60405180910390fd5b6102db6000610be0565b565b6001600160a01b0383166000908152606560209081526040808320858452909152808220905161030e90849061179c565b90815260405190819003602001902054151590505b9392505050565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561037957600080fd5b505afa15801561038d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b191906117b3565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906103e09033906004016112be565b60206040518083038186803b1580156103f857600080fd5b505afa15801561040c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043091906117e7565b61044c5760405162461bcd60e51b81526004016102c890611851565b835185511461046d5760405162461bcd60e51b81526004016102c8906118a6565b825185511461048e5760405162461bcd60e51b81526004016102c8906118a6565b81518551146104af5760405162461bcd60e51b81526004016102c8906118a6565b60005b855181101561053e5761052c338783815181106104d1576104d16118b6565b60200260200101518784815181106104eb576104eb6118b6565b6020026020010151878581518110610505576105056118b6565b602002602001015187868151811061051f5761051f6118b6565b6020026020010151610c62565b80610536816118e2565b9150506104b2565b505050505050565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561059557600080fd5b505afa1580156105a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cd91906117b3565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906105fc9033906004016112be565b60206040518083038186803b15801561061457600080fd5b505afa158015610628573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064c91906117e7565b6106685760405162461bcd60e51b81526004016102c890611851565b610299338484610efc565b81600081116106945760405162461bcd60e51b81526004016102c890611931565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b1580156106e357600080fd5b505afa1580156106f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071b91906117b3565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a079061074a9033906004016112be565b60206040518083038186803b15801561076257600080fd5b505afa158015610776573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079a91906117e7565b6107b65760405162461bcd60e51b81526004016102c890611851565b61053e3387878787610c62565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b15801561081257600080fd5b505afa158015610826573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084a91906117b3565b604051636b074a0760e01b81529091506001600160a01b03821690636b074a07906108799033906004016112be565b60206040518083038186803b15801561089157600080fd5b505afa1580156108a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c991906117e7565b6108e55760405162461bcd60e51b81526004016102c890611851565b81518351146109065760405162461bcd60e51b81526004016102c890611985565b60005b83518110156109615761094f33858381518110610928576109286118b6565b6020026020010151858481518110610942576109426118b6565b6020026020010151610efc565b80610959816118e2565b915050610909565b50505050565b60008060029054906101000a90046001600160a01b03166001600160a01b031663a5a3f6c86040518163ffffffff1660e01b815260040160206040518083038186803b1580156109b657600080fd5b505afa1580156109ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ee91906117b3565b6001600160a01b0316636b074a07856040518263ffffffff1660e01b8152600401610a1991906112be565b60206040518083038186803b158015610a3157600080fd5b505afa158015610a45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6991906117e7565b610a855760405162461bcd60e51b81526004016102c8906119d5565b610a908484846102dd565b610aac5760405162461bcd60e51b81526004016102c890611a24565b6001600160a01b0384166000908152606560209081526040808320868452909152908190209051610ade90849061179c565b9081526040519081900360200190205490509392505050565b6033546001600160a01b03163314610b215760405162461bcd60e51b81526004016102c89061173e565b6001600160a01b038116610b475760405162461bcd60e51b81526004016102c890611a77565b610b5081610be0565b50565b60008054610100900460ff1615610b9a578160ff166001148015610b765750303b155b610b925760405162461bcd60e51b81526004016102c890611ad2565b506000919050565b60005460ff808416911610610bc15760405162461bcd60e51b81526004016102c890611ad2565b506000805460ff191660ff92909216919091179055600190565b919050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610c595760405162461bcd60e51b81526004016102c890611b2a565b610b508161100a565b8160008111610c835760405162461bcd60e51b81526004016102c890611931565b60008060029054906101000a90046001600160a01b03166001600160a01b031663740e80616040518163ffffffff1660e01b815260040160206040518083038186803b158015610cd257600080fd5b505afa158015610ce6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0a91906117b3565b9050610d178787876102dd565b15610d345760405162461bcd60e51b81526004016102c890611b6e565b60405162f304db60e01b81526001600160a01b0382169062f304db90610d60908a908a90600401611b7e565b60206040518083038186803b158015610d7857600080fd5b505afa158015610d8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db091906117e7565b15610dcd5760405162461bcd60e51b81526004016102c890611bc0565b60408051808201825285815260208082018690526001600160a01b038a166000908152606582528381208a82529091528290209151909190610e1090889061179c565b908152602001604051809103902060008201518160000155602082015181600101559050507fd8be615b569e10ab81c7e1ad876540845a9ad057e7bf224af878656a43ccbae78787878787866001600160a01b03166328b214a48e8e6040518363ffffffff1660e01b8152600401610e89929190611b7e565b60206040518083038186803b158015610ea157600080fd5b505afa158015610eb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed99190611bdb565b604051610eeb96959493929190611c2e565b60405180910390a150505050505050565b610f078383836102dd565b610f235760405162461bcd60e51b81526004016102c890611a24565b6001600160a01b03831660009081526065602090815260408083208584529091528082209051610f5490849061179c565b90815260408051918290036020908101832083830183528054845260010154838201526001600160a01b038716600090815260658252828120878252909152819020905191925090610fa790849061179c565b908152604051908190036020908101822060008082556001909101558251908301517fededfe806a15f843a0e88eb73d17bdae19981e0402af0c2946a3d9834e66877b92610ffc928892889288929190611c8f565b60405180910390a150505050565b6001600160a01b0381166110305760405162461bcd60e51b81526004016102c890611d16565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc80906110829083906116d9565b60405180910390a150565b60006001600160a01b0382165b92915050565b6110a98161108d565b8114610b5057600080fd5b803561109a816110a0565b600061109a8261108d565b6110a9816110bf565b803561109a816110ca565b600080604083850312156110f4576110f4600080fd5b600061110085856110b4565b9250506020611111858286016110d3565b9150509250929050565b806110a9565b803561109a8161111b565b634e487b7160e01b600052604160045260246000fd5b601f19601f83011681018181106001600160401b03821117156111675761116761112c565b6040525050565b600061117960405190565b9050610bdb8282611142565b60006001600160401b0382111561119e5761119e61112c565b601f19601f83011660200192915050565b82818337506000910152565b60006111ce6111c984611185565b61116e565b9050828152602081018484840111156111e9576111e9600080fd5b6111f48482856111af565b509392505050565b600082601f83011261121057611210600080fd5b81356112208482602086016111bb565b949350505050565b60008060006060848603121561124057611240600080fd5b600061124c86866110b4565b935050602061125d86828701611121565b92505060408401356001600160401b0381111561127c5761127c600080fd5b611288868287016111fc565b9150509250925092565b805b82525050565b604081016112a88285611292565b6103236020830184611292565b6112948161108d565b6020810161109a82846112b5565b801515611294565b6020810161109a82846112cc565b60006001600160401b038211156112fb576112fb61112c565b5060209081020190565b60006113136111c9846112e2565b8381529050602080820190840283018581111561133257611332600080fd5b835b8181101561135657806113478882611121565b84525060209283019201611334565b5050509392505050565b600082601f83011261137457611374600080fd5b8135611220848260208601611305565b60006113926111c9846112e2565b838152905060208082019084028301858111156113b1576113b1600080fd5b835b818110156113565780356001600160401b038111156113d4576113d4600080fd5b8086016113e189826111fc565b85525050602092830192016113b3565b600082601f83011261140557611405600080fd5b8135611220848260208601611384565b60006114236111c9846112e2565b8381529050602080820190840283018581111561144257611442600080fd5b835b8181101561135657806114578882611121565b84525060209283019201611444565b600082601f83011261147a5761147a600080fd5b8135611220848260208601611415565b600080600080608085870312156114a3576114a3600080fd5b84356001600160401b038111156114bc576114bc600080fd5b6114c887828801611360565b94505060208501356001600160401b038111156114e7576114e7600080fd5b6114f3878288016113f1565b93505060408501356001600160401b0381111561151257611512600080fd5b61151e87828801611466565b92505060608501356001600160401b0381111561153d5761153d600080fd5b61154987828801611466565b91505092959194509250565b6000806040838503121561156b5761156b600080fd5b60006115778585611121565b92505060208301356001600160401b0381111561159657611596600080fd5b611111858286016111fc565b600080600080608085870312156115bb576115bb600080fd5b60006115c78787611121565b94505060208501356001600160401b038111156115e6576115e6600080fd5b6115f2878288016111fc565b935050604061160387828801611121565b925050606061154987828801611121565b6000806040838503121561162a5761162a600080fd5b82356001600160401b0381111561164357611643600080fd5b61164f85828601611360565b92505060208301356001600160401b0381111561166e5761166e600080fd5b611111858286016113f1565b6020810161109a8284611292565b60006020828403121561169d5761169d600080fd5b600061122084846110b4565b60006001600160a01b03821661109a565b600061109a826116a9565b600061109a826116ba565b611294816116c5565b6020810161109a82846116d0565b600060ff821661109a565b611294816116e7565b6020810161109a82846116f2565b60208082527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572910190815260005b5060200190565b6020808252810161109a81611709565b60005b83811015611769578181015183820152602001611751565b838111156109615750506000910152565b6000611784825190565b61179281856020860161174e565b9290920192915050565b6000610323828461177a565b805161109a816110ca565b6000602082840312156117c8576117c8600080fd5b600061122084846117a8565b8015156110a9565b805161109a816117d4565b6000602082840312156117fc576117fc600080fd5b600061122084846117dc565b602981526000602082017f526f75746572577261707065723a2063616c6c6572206973206e6f742074686581526810383937bb34b232b960b91b602082015291505b5060400190565b6020808252810161109a81611808565b602881526000602082017f436f6e74656e745472616365723a20496e76616c696420706172616d65746572815267103632b733ba341760c11b6020820152915061184a565b6020808252810161109a81611861565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156118f6576118f66118cc565b5060010190565b601981526000602082017f436f6e74656e745472616365723a207a65726f2073697a652e0000000000000081529150611737565b6020808252810161109a816118fd565b602781526000602082017f436f6e74656e745472616365723a20496e76616c696420706172616d65746572815266040d8cadccee8d60cb1b6020820152915061184a565b6020808252810161109a81611941565b602381526000602082017f436f6e74656e745472616365723a206e6f6e6578697374656e742070726f76698152623232b960e91b6020820152915061184a565b6020808252810161109a81611995565b602281526000602082017f436f6e74656e745472616365723a206e6f6e6578697374656e7420636f6e74658152611b9d60f21b6020820152915061184a565b6020808252810161109a816119e5565b602681526000602082017f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206181526564647265737360d01b6020820152915061184a565b6020808252810161109a81611a34565b602e81526000602082017f496e697469616c697a61626c653a20636f6e747261637420697320616c72656181526d191e481a5b9a5d1a585b1a5e995960921b6020820152915061184a565b6020808252810161109a81611a87565b602b81526000602082017f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206981526a6e697469616c697a696e6760a81b6020820152915061184a565b6020808252810161109a81611ae2565b601d81526000602082017f436f6e74656e745472616365723a20636f6e74656e742065786973747300000081529150611737565b6020808252810161109a81611b3a565b604081016112a882856112b5565b601e81526000602082017f436f6e74656e745472616365723a206163636f756e742065787069726564000081529150611737565b6020808252810161109a81611b8c565b805161109a8161111b565b600060208284031215611bf057611bf0600080fd5b60006112208484611bd0565b6000611c06825190565b808452602084019350611c1d81856020860161174e565b601f01601f19169290920192915050565b60c08101611c3c82896112b5565b611c496020830188611292565b8181036040830152611c5b8187611bfc565b9050611c6a6060830186611292565b611c776080830185611292565b611c8460a0830184611292565b979650505050505050565b60a08101611c9d82886112b5565b611caa6020830187611292565b8181036040830152611cbc8186611bfc565b9050611ccb6060830185611292565b611cd86080830184611292565b9695505050505050565b601b81526000602082017f526f75746572577261707065723a207a65726f2061646472657373000000000081529150611737565b6020808252810161109a81611ce256fea26469706673582212200ebb1040b1ab4346f53d2483a0824b925b222c76c4449d1c7e9952af74b5e81b64736f6c63430008090033";
var ContentTracer__factory = /** @class */ (function (_super) {
    __extends(ContentTracer__factory, _super);
    function ContentTracer__factory() {
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
    ContentTracer__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ContentTracer__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ContentTracer__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ContentTracer__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ContentTracer__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ContentTracer__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ContentTracer__factory.bytecode = _bytecode;
    ContentTracer__factory.abi = _abi;
    return ContentTracer__factory;
}(ethers_1.ContractFactory));
exports.ContentTracer__factory = ContentTracer__factory;
