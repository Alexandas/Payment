/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ResourPayloadTool,
  ResourPayloadToolInterface,
} from "../ResourPayloadTool";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ResourceData.ResourceType",
            name: "resourceType",
            type: "uint8",
          },
          {
            internalType: "uint256[]",
            name: "values",
            type: "uint256[]",
          },
        ],
        internalType: "struct ResourceData.Payload[]",
        name: "payloads",
        type: "tuple[]",
      },
    ],
    name: "totalValue",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class ResourPayloadTool__factory {
  static readonly abi = _abi;
  static createInterface(): ResourPayloadToolInterface {
    return new utils.Interface(_abi) as ResourPayloadToolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ResourPayloadTool {
    return new Contract(address, _abi, signerOrProvider) as ResourPayloadTool;
  }
}
