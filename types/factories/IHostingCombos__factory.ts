/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IHostingCombos,
  IHostingCombosInterface,
} from "../IHostingCombos";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes28",
        name: "to",
        type: "bytes28",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "bandwidth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buildingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerMonth",
            type: "uint256",
          },
          {
            internalType: "bytes28",
            name: "to",
            type: "bytes28",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct IHostingCombos.Combo",
        name: "combo",
        type: "tuple",
      },
    ],
    name: "AddCombo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes28",
        name: "to",
        type: "bytes28",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "bandwidth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buildingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerMonth",
            type: "uint256",
          },
          {
            internalType: "bytes28",
            name: "to",
            type: "bytes28",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct IHostingCombos.Combo",
        name: "combo",
        type: "tuple",
      },
    ],
    name: "UpdateCombo",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bandwidth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buildingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerMonth",
            type: "uint256",
          },
          {
            internalType: "bytes28",
            name: "to",
            type: "bytes28",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct IHostingCombos.Combo",
        name: "combo",
        type: "tuple",
      },
    ],
    name: "addCombo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "comboLength",
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
        name: "level",
        type: "uint256",
      },
    ],
    name: "combos",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bandwidth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buildingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerMonth",
            type: "uint256",
          },
          {
            internalType: "bytes28",
            name: "to",
            type: "bytes28",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct IHostingCombos.Combo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiration_",
        type: "uint256",
      },
    ],
    name: "getComboCost",
    outputs: [
      {
        internalType: "uint256",
        name: "cost",
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
        name: "level",
        type: "uint256",
      },
    ],
    name: "isCustom",
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
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "bandwidth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buildingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerMonth",
            type: "uint256",
          },
          {
            internalType: "bytes28",
            name: "to",
            type: "bytes28",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct IHostingCombos.Combo",
        name: "combo",
        type: "tuple",
      },
    ],
    name: "updateCombo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IHostingCombos__factory {
  static readonly abi = _abi;
  static createInterface(): IHostingCombosInterface {
    return new utils.Interface(_abi) as IHostingCombosInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IHostingCombos {
    return new Contract(address, _abi, signerOrProvider) as IHostingCombos;
  }
}
