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

interface BuildingTimeControllerInterface extends ethers.utils.Interface {
  functions: {
    "adaptor()": FunctionFragment;
    "balanceOf(bytes32)": FunctionFragment;
    "dstChainPayment()": FunctionFragment;
    "expand(bytes32,uint256)": FunctionFragment;
    "getAmountOf(uint256)": FunctionFragment;
    "getValueOf(uint256)": FunctionFragment;
    "initialize(address,address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "price()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resourceType()": FunctionFragment;
    "setDstChainPayment(address)": FunctionFragment;
    "setResourceAdaptor(address)": FunctionFragment;
    "setResourceType(uint8)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "adaptor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dstChainPayment",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "expand",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getValueOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resourceType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDstChainPayment",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setResourceAdaptor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setResourceType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "adaptor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dstChainPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "expand", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getValueOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resourceType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDstChainPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setResourceAdaptor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setResourceType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "DstChainPaymentUpdated(address)": EventFragment;
    "Expanded(bytes32,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ResourceAdaptorUpdated(address)": EventFragment;
    "ResourceTypeUpdated(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DstChainPaymentUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Expanded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ResourceAdaptorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ResourceTypeUpdated"): EventFragment;
}

export type DstChainPaymentUpdatedEvent = TypedEvent<
  [string] & { dstChainPayment: string }
>;

export type ExpandedEvent = TypedEvent<
  [string, BigNumber] & { account: string; value: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ResourceAdaptorUpdatedEvent = TypedEvent<
  [string] & { adaptor: string }
>;

export type ResourceTypeUpdatedEvent = TypedEvent<
  [number] & { resourceType: number }
>;

export class BuildingTimeController extends BaseContract {
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

  interface: BuildingTimeControllerInterface;

  functions: {
    adaptor(overrides?: CallOverrides): Promise<[string]>;

    balanceOf(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    dstChainPayment(overrides?: CallOverrides): Promise<[string]>;

    expand(
      account: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAmountOf(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getValueOf(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      owner: string,
      dstChainPayment: string,
      adaptor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resourceType(overrides?: CallOverrides): Promise<[number]>;

    setDstChainPayment(
      _dstChainPayment: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setResourceAdaptor(
      _adaptor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setResourceType(
      _resourceType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  adaptor(overrides?: CallOverrides): Promise<string>;

  balanceOf(account: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  dstChainPayment(overrides?: CallOverrides): Promise<string>;

  expand(
    account: BytesLike,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAmountOf(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getValueOf(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    owner: string,
    dstChainPayment: string,
    adaptor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resourceType(overrides?: CallOverrides): Promise<number>;

  setDstChainPayment(
    _dstChainPayment: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setResourceAdaptor(
    _adaptor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setResourceType(
    _resourceType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    adaptor(overrides?: CallOverrides): Promise<string>;

    balanceOf(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dstChainPayment(overrides?: CallOverrides): Promise<string>;

    expand(
      account: BytesLike,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOf(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueOf(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      owner: string,
      dstChainPayment: string,
      adaptor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resourceType(overrides?: CallOverrides): Promise<number>;

    setDstChainPayment(
      _dstChainPayment: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setResourceAdaptor(
      _adaptor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setResourceType(
      _resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DstChainPaymentUpdated(address)"(
      dstChainPayment?: null
    ): TypedEventFilter<[string], { dstChainPayment: string }>;

    DstChainPaymentUpdated(
      dstChainPayment?: null
    ): TypedEventFilter<[string], { dstChainPayment: string }>;

    "Expanded(bytes32,uint256)"(
      account?: null,
      value?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; value: BigNumber }
    >;

    Expanded(
      account?: null,
      value?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; value: BigNumber }
    >;

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

    "ResourceAdaptorUpdated(address)"(
      adaptor?: null
    ): TypedEventFilter<[string], { adaptor: string }>;

    ResourceAdaptorUpdated(
      adaptor?: null
    ): TypedEventFilter<[string], { adaptor: string }>;

    "ResourceTypeUpdated(uint8)"(
      resourceType?: null
    ): TypedEventFilter<[number], { resourceType: number }>;

    ResourceTypeUpdated(
      resourceType?: null
    ): TypedEventFilter<[number], { resourceType: number }>;
  };

  estimateGas: {
    adaptor(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dstChainPayment(overrides?: CallOverrides): Promise<BigNumber>;

    expand(
      account: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAmountOf(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueOf(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      owner: string,
      dstChainPayment: string,
      adaptor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resourceType(overrides?: CallOverrides): Promise<BigNumber>;

    setDstChainPayment(
      _dstChainPayment: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setResourceAdaptor(
      _adaptor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setResourceType(
      _resourceType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    adaptor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dstChainPayment(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    expand(
      account: BytesLike,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAmountOf(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValueOf(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      owner: string,
      dstChainPayment: string,
      adaptor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resourceType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDstChainPayment(
      _dstChainPayment: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setResourceAdaptor(
      _adaptor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setResourceType(
      _resourceType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
