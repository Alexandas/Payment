/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAdaptorWrapper,
  IAdaptorWrapperInterface,
} from "../IAdaptorWrapper";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IResourceAdaptor",
        name: "adaptor",
        type: "address",
      },
    ],
    name: "ResourceAdaptorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum ResourceData.ResourceType",
        name: "resourceType",
        type: "uint8",
      },
    ],
    name: "ResourceTypeUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "adaptor",
    outputs: [
      {
        internalType: "contract IResourceAdaptor",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "getAmountOf",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getValueOf",
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
    name: "price",
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
];

export class IAdaptorWrapper__factory {
  static readonly abi = _abi;
  static createInterface(): IAdaptorWrapperInterface {
    return new utils.Interface(_abi) as IAdaptorWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAdaptorWrapper {
    return new Contract(address, _abi, signerOrProvider) as IAdaptorWrapper;
  }
}
