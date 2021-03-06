/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IDstChainPaymentInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "decodeSourceChainMessage(bytes)": FunctionFragment;
    "getAmountOf(address,uint8,uint256)": FunctionFragment;
    "getValueOf(address,uint8,uint256)": FunctionFragment;
    "ipfsAllocations(address,bytes32,uint256,uint256)": FunctionFragment;
    "ipfsAlloctionsFee(address,bytes32,uint256,uint256)": FunctionFragment;
    "pay((address,uint64,bytes32,tuple[]))": FunctionFragment;
    "payFromSourceChain(address,uint256,bytes)": FunctionFragment;
    "priceOf(address,uint8)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "decodeSourceChainMessage",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOf",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getValueOf",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ipfsAllocations",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ipfsAlloctionsFee",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pay",
    values: [
      {
        provider: string;
        nonce: BigNumberish;
        account: BytesLike;
        payloads: { resourceType: BigNumberish; values: BigNumberish[] }[];
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "payFromSourceChain",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "priceOf",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decodeSourceChainMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getValueOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ipfsAllocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ipfsAlloctionsFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payFromSourceChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "priceOf", data: BytesLike): Result;

  events: {
    "Paid(address,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Paid"): EventFragment;
}

export type PaidEvent = TypedEvent<
  [
    string,
    [
      string,
      BigNumber,
      string,
      ([number, BigNumber[]] & { resourceType: number; values: BigNumber[] })[]
    ] & {
      provider: string;
      nonce: BigNumber;
      account: string;
      payloads: ([number, BigNumber[]] & {
        resourceType: number;
        values: BigNumber[];
      })[];
    }
  ] & {
    token: string;
    payload: [
      string,
      BigNumber,
      string,
      ([number, BigNumber[]] & { resourceType: number; values: BigNumber[] })[]
    ] & {
      provider: string;
      nonce: BigNumber;
      account: string;
      payloads: ([number, BigNumber[]] & {
        resourceType: number;
        values: BigNumber[];
      })[];
    };
  }
>;

export class IDstChainPayment extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IDstChainPaymentInterface;

  functions: {
    balanceOf(
      provider: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decodeSourceChainMessage(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        string,
        ([number, BigNumber[]] & {
          resourceType: number;
          values: BigNumber[];
        })[]
      ] & {
        provider: string;
        nonce: BigNumber;
        account: string;
        payloads: ([number, BigNumber[]] & {
          resourceType: number;
          values: BigNumber[];
        })[];
      }
    >;

    getAmountOf(
      provider: string,
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getValueOf(
      provider: string,
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ipfsAllocations(
      provider: string,
      account: BytesLike,
      storageFee: BigNumberish,
      expirationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; expiration: BigNumber }
    >;

    ipfsAlloctionsFee(
      provider: string,
      account: BytesLike,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        storageFee: BigNumber;
        expirationFee: BigNumber;
      }
    >;

    pay(
      payload: {
        provider: string;
        nonce: BigNumberish;
        account: BytesLike;
        payloads: { resourceType: BigNumberish; values: BigNumberish[] }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    payFromSourceChain(
      _token: string,
      dstAmount: BigNumberish,
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    priceOf(
      provider: string,
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  balanceOf(provider: string, overrides?: CallOverrides): Promise<BigNumber>;

  decodeSourceChainMessage(
    message: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      BigNumber,
      string,
      ([number, BigNumber[]] & { resourceType: number; values: BigNumber[] })[]
    ] & {
      provider: string;
      nonce: BigNumber;
      account: string;
      payloads: ([number, BigNumber[]] & {
        resourceType: number;
        values: BigNumber[];
      })[];
    }
  >;

  getAmountOf(
    provider: string,
    resourceType: BigNumberish,
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getValueOf(
    provider: string,
    resourceType: BigNumberish,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ipfsAllocations(
    provider: string,
    account: BytesLike,
    storageFee: BigNumberish,
    expirationFee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; expiration: BigNumber }
  >;

  ipfsAlloctionsFee(
    provider: string,
    account: BytesLike,
    amount: BigNumberish,
    expiration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { storageFee: BigNumber; expirationFee: BigNumber }
  >;

  pay(
    payload: {
      provider: string;
      nonce: BigNumberish;
      account: BytesLike;
      payloads: { resourceType: BigNumberish; values: BigNumberish[] }[];
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  payFromSourceChain(
    _token: string,
    dstAmount: BigNumberish,
    message: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  priceOf(
    provider: string,
    resourceType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    balanceOf(provider: string, overrides?: CallOverrides): Promise<BigNumber>;

    decodeSourceChainMessage(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        string,
        ([number, BigNumber[]] & {
          resourceType: number;
          values: BigNumber[];
        })[]
      ] & {
        provider: string;
        nonce: BigNumber;
        account: string;
        payloads: ([number, BigNumber[]] & {
          resourceType: number;
          values: BigNumber[];
        })[];
      }
    >;

    getAmountOf(
      provider: string,
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueOf(
      provider: string,
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ipfsAllocations(
      provider: string,
      account: BytesLike,
      storageFee: BigNumberish,
      expirationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; expiration: BigNumber }
    >;

    ipfsAlloctionsFee(
      provider: string,
      account: BytesLike,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        storageFee: BigNumber;
        expirationFee: BigNumber;
      }
    >;

    pay(
      payload: {
        provider: string;
        nonce: BigNumberish;
        account: BytesLike;
        payloads: { resourceType: BigNumberish; values: BigNumberish[] }[];
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payFromSourceChain(
      _token: string,
      dstAmount: BigNumberish,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    priceOf(
      provider: string,
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Paid(address,tuple)"(
      token?: null,
      payload?: null
    ): TypedEventFilter<
      [
        string,
        [
          string,
          BigNumber,
          string,
          ([number, BigNumber[]] & {
            resourceType: number;
            values: BigNumber[];
          })[]
        ] & {
          provider: string;
          nonce: BigNumber;
          account: string;
          payloads: ([number, BigNumber[]] & {
            resourceType: number;
            values: BigNumber[];
          })[];
        }
      ],
      {
        token: string;
        payload: [
          string,
          BigNumber,
          string,
          ([number, BigNumber[]] & {
            resourceType: number;
            values: BigNumber[];
          })[]
        ] & {
          provider: string;
          nonce: BigNumber;
          account: string;
          payloads: ([number, BigNumber[]] & {
            resourceType: number;
            values: BigNumber[];
          })[];
        };
      }
    >;

    Paid(
      token?: null,
      payload?: null
    ): TypedEventFilter<
      [
        string,
        [
          string,
          BigNumber,
          string,
          ([number, BigNumber[]] & {
            resourceType: number;
            values: BigNumber[];
          })[]
        ] & {
          provider: string;
          nonce: BigNumber;
          account: string;
          payloads: ([number, BigNumber[]] & {
            resourceType: number;
            values: BigNumber[];
          })[];
        }
      ],
      {
        token: string;
        payload: [
          string,
          BigNumber,
          string,
          ([number, BigNumber[]] & {
            resourceType: number;
            values: BigNumber[];
          })[]
        ] & {
          provider: string;
          nonce: BigNumber;
          account: string;
          payloads: ([number, BigNumber[]] & {
            resourceType: number;
            values: BigNumber[];
          })[];
        };
      }
    >;
  };

  estimateGas: {
    balanceOf(provider: string, overrides?: CallOverrides): Promise<BigNumber>;

    decodeSourceChainMessage(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOf(
      provider: string,
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueOf(
      provider: string,
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ipfsAllocations(
      provider: string,
      account: BytesLike,
      storageFee: BigNumberish,
      expirationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ipfsAlloctionsFee(
      provider: string,
      account: BytesLike,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pay(
      payload: {
        provider: string;
        nonce: BigNumberish;
        account: BytesLike;
        payloads: { resourceType: BigNumberish; values: BigNumberish[] }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    payFromSourceChain(
      _token: string,
      dstAmount: BigNumberish,
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    priceOf(
      provider: string,
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      provider: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decodeSourceChainMessage(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountOf(
      provider: string,
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValueOf(
      provider: string,
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ipfsAllocations(
      provider: string,
      account: BytesLike,
      storageFee: BigNumberish,
      expirationFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ipfsAlloctionsFee(
      provider: string,
      account: BytesLike,
      amount: BigNumberish,
      expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pay(
      payload: {
        provider: string;
        nonce: BigNumberish;
        account: BytesLike;
        payloads: { resourceType: BigNumberish; values: BigNumberish[] }[];
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    payFromSourceChain(
      _token: string,
      dstAmount: BigNumberish,
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    priceOf(
      provider: string,
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
