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

interface ResourceAdaptorInterface extends ethers.utils.Interface {
  functions: {
    "getAmountAt(uint8,uint256,uint256)": FunctionFragment;
    "getAmountOf(uint8,uint256)": FunctionFragment;
    "getValueAt(uint8,uint256,uint256)": FunctionFragment;
    "getValueOf(uint8,uint256)": FunctionFragment;
    "indexBlock()": FunctionFragment;
    "initialize(address,tuple[])": FunctionFragment;
    "owner()": FunctionFragment;
    "priceAt(uint8,uint256)": FunctionFragment;
    "priceOf(uint8)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPriceAdaptors(tuple[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAmountAt",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOf",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getValueAt",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getValueOf",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "indexBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, { resourceType: BigNumberish; price: BigNumberish }[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceAt",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceAdaptors",
    values: [{ resourceType: BigNumberish; price: BigNumberish }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAmountAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getValueAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getValueOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "indexBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceAdaptors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PriceAdaptorsUpdated(tuple[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceAdaptorsUpdated"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PriceAdaptorsUpdatedEvent = TypedEvent<
  [([number, BigNumber] & { resourceType: number; price: BigNumber })[]] & {
    adaptors: ([number, BigNumber] & {
      resourceType: number;
      price: BigNumber;
    })[];
  }
>;

export class ResourceAdaptor extends BaseContract {
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

  interface: ResourceAdaptorInterface;

  functions: {
    getAmountAt(
      resourceType: BigNumberish,
      value: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAmountOf(
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getValueAt(
      resourceType: BigNumberish,
      amount: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getValueOf(
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    indexBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      owner: string,
      adaptors: { resourceType: BigNumberish; price: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    priceAt(
      resourceType: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    priceOf(
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPriceAdaptors(
      adaptors: { resourceType: BigNumberish; price: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAmountAt(
    resourceType: BigNumberish,
    value: BigNumberish,
    _indexBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAmountOf(
    resourceType: BigNumberish,
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getValueAt(
    resourceType: BigNumberish,
    amount: BigNumberish,
    _indexBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getValueOf(
    resourceType: BigNumberish,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  indexBlock(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    owner: string,
    adaptors: { resourceType: BigNumberish; price: BigNumberish }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  priceAt(
    resourceType: BigNumberish,
    _indexBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  priceOf(
    resourceType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPriceAdaptors(
    adaptors: { resourceType: BigNumberish; price: BigNumberish }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAmountAt(
      resourceType: BigNumberish,
      value: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOf(
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueAt(
      resourceType: BigNumberish,
      amount: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueOf(
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    indexBlock(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      owner: string,
      adaptors: { resourceType: BigNumberish; price: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    priceAt(
      resourceType: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceOf(
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPriceAdaptors(
      adaptors: { resourceType: BigNumberish; price: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "PriceAdaptorsUpdated(tuple[])"(
      adaptors?: null
    ): TypedEventFilter<
      [([number, BigNumber] & { resourceType: number; price: BigNumber })[]],
      {
        adaptors: ([number, BigNumber] & {
          resourceType: number;
          price: BigNumber;
        })[];
      }
    >;

    PriceAdaptorsUpdated(
      adaptors?: null
    ): TypedEventFilter<
      [([number, BigNumber] & { resourceType: number; price: BigNumber })[]],
      {
        adaptors: ([number, BigNumber] & {
          resourceType: number;
          price: BigNumber;
        })[];
      }
    >;
  };

  estimateGas: {
    getAmountAt(
      resourceType: BigNumberish,
      value: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOf(
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueAt(
      resourceType: BigNumberish,
      amount: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueOf(
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    indexBlock(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      owner: string,
      adaptors: { resourceType: BigNumberish; price: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    priceAt(
      resourceType: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceOf(
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPriceAdaptors(
      adaptors: { resourceType: BigNumberish; price: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmountAt(
      resourceType: BigNumberish,
      value: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountOf(
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValueAt(
      resourceType: BigNumberish,
      amount: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValueOf(
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    indexBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      owner: string,
      adaptors: { resourceType: BigNumberish; price: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceAt(
      resourceType: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceOf(
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPriceAdaptors(
      adaptors: { resourceType: BigNumberish; price: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
