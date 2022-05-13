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

interface ContentTracerInterface extends ethers.utils.Interface {
  functions: {
    "contentSizes(address,bytes32,string)": FunctionFragment;
    "controller()": FunctionFragment;
    "defaultExpiration()": FunctionFragment;
    "exists(address,bytes32,string)": FunctionFragment;
    "initialize(address,address,address,uint256)": FunctionFragment;
    "insert(bytes32,string,uint256)": FunctionFragment;
    "insertMult(bytes32[],string[],uint256[])": FunctionFragment;
    "owner()": FunctionFragment;
    "providers()": FunctionFragment;
    "remove(bytes32,string)": FunctionFragment;
    "removeMult(bytes32[],string[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setController(address)": FunctionFragment;
    "setDefaultExpiration(uint256)": FunctionFragment;
    "size(address,bytes32,string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "contentSizes",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultExpiration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exists",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "insert",
    values: [BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "insertMult",
    values: [BytesLike[], string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "providers", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMult",
    values: [BytesLike[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultExpiration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "size",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "contentSizes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "defaultExpiration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "insert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "insertMult", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "providers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeMult", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultExpiration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "size", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ControllerUpdated(address)": EventFragment;
    "DefaultExpirationUpdated(uint256)": EventFragment;
    "Insert(address,bytes32,string,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProvidersUpdated(address)": EventFragment;
    "Remove(address,bytes32,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ControllerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DefaultExpirationUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Insert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProvidersUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Remove"): EventFragment;
}

export type ControllerUpdatedEvent = TypedEvent<
  [string] & { controller: string }
>;

export type DefaultExpirationUpdatedEvent = TypedEvent<
  [BigNumber] & { expiration: BigNumber }
>;

export type InsertEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber] & {
    provider: string;
    account: string;
    content: string;
    size: BigNumber;
    expiration: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ProvidersUpdatedEvent = TypedEvent<
  [string] & { providers: string }
>;

export type RemoveEvent = TypedEvent<
  [string, string, string] & {
    provider: string;
    account: string;
    content: string;
  }
>;

export class ContentTracer extends BaseContract {
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

  interface: ContentTracerInterface;

  functions: {
    contentSizes(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    defaultExpiration(overrides?: CallOverrides): Promise<[BigNumber]>;

    exists(
      provider: string,
      account: BytesLike,
      content: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      owner: string,
      providers: string,
      controller: string,
      defaultExpiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    insert(
      account: BytesLike,
      content: string,
      size: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    insertMult(
      accounts: BytesLike[],
      contents: string[],
      sizes: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    providers(overrides?: CallOverrides): Promise<[string]>;

    remove(
      account: BytesLike,
      content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeMult(
      accounts: BytesLike[],
      contents: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDefaultExpiration(
      expiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    size(
      provider: string,
      account: BytesLike,
      content: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  contentSizes(
    arg0: string,
    arg1: BytesLike,
    arg2: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  controller(overrides?: CallOverrides): Promise<string>;

  defaultExpiration(overrides?: CallOverrides): Promise<BigNumber>;

  exists(
    provider: string,
    account: BytesLike,
    content: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    owner: string,
    providers: string,
    controller: string,
    defaultExpiration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  insert(
    account: BytesLike,
    content: string,
    size: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  insertMult(
    accounts: BytesLike[],
    contents: string[],
    sizes: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  providers(overrides?: CallOverrides): Promise<string>;

  remove(
    account: BytesLike,
    content: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeMult(
    accounts: BytesLike[],
    contents: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setController(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDefaultExpiration(
    expiration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  size(
    provider: string,
    account: BytesLike,
    content: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    contentSizes(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<string>;

    defaultExpiration(overrides?: CallOverrides): Promise<BigNumber>;

    exists(
      provider: string,
      account: BytesLike,
      content: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      owner: string,
      providers: string,
      controller: string,
      defaultExpiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    insert(
      account: BytesLike,
      content: string,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    insertMult(
      accounts: BytesLike[],
      contents: string[],
      sizes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    providers(overrides?: CallOverrides): Promise<string>;

    remove(
      account: BytesLike,
      content: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeMult(
      accounts: BytesLike[],
      contents: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setDefaultExpiration(
      expiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    size(
      provider: string,
      account: BytesLike,
      content: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ControllerUpdated(address)"(
      controller?: null
    ): TypedEventFilter<[string], { controller: string }>;

    ControllerUpdated(
      controller?: null
    ): TypedEventFilter<[string], { controller: string }>;

    "DefaultExpirationUpdated(uint256)"(
      expiration?: null
    ): TypedEventFilter<[BigNumber], { expiration: BigNumber }>;

    DefaultExpirationUpdated(
      expiration?: null
    ): TypedEventFilter<[BigNumber], { expiration: BigNumber }>;

    "Insert(address,bytes32,string,uint256,uint256)"(
      provider?: null,
      account?: null,
      content?: null,
      size?: null,
      expiration?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        provider: string;
        account: string;
        content: string;
        size: BigNumber;
        expiration: BigNumber;
      }
    >;

    Insert(
      provider?: null,
      account?: null,
      content?: null,
      size?: null,
      expiration?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        provider: string;
        account: string;
        content: string;
        size: BigNumber;
        expiration: BigNumber;
      }
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

    "ProvidersUpdated(address)"(
      providers?: null
    ): TypedEventFilter<[string], { providers: string }>;

    ProvidersUpdated(
      providers?: null
    ): TypedEventFilter<[string], { providers: string }>;

    "Remove(address,bytes32,string)"(
      provider?: null,
      account?: null,
      content?: null
    ): TypedEventFilter<
      [string, string, string],
      { provider: string; account: string; content: string }
    >;

    Remove(
      provider?: null,
      account?: null,
      content?: null
    ): TypedEventFilter<
      [string, string, string],
      { provider: string; account: string; content: string }
    >;
  };

  estimateGas: {
    contentSizes(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    defaultExpiration(overrides?: CallOverrides): Promise<BigNumber>;

    exists(
      provider: string,
      account: BytesLike,
      content: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      owner: string,
      providers: string,
      controller: string,
      defaultExpiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    insert(
      account: BytesLike,
      content: string,
      size: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    insertMult(
      accounts: BytesLike[],
      contents: string[],
      sizes: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    providers(overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      account: BytesLike,
      content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeMult(
      accounts: BytesLike[],
      contents: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDefaultExpiration(
      expiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    size(
      provider: string,
      account: BytesLike,
      content: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    contentSizes(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultExpiration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exists(
      provider: string,
      account: BytesLike,
      content: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      owner: string,
      providers: string,
      controller: string,
      defaultExpiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    insert(
      account: BytesLike,
      content: string,
      size: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    insertMult(
      accounts: BytesLike[],
      contents: string[],
      sizes: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    providers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      account: BytesLike,
      content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeMult(
      accounts: BytesLike[],
      contents: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDefaultExpiration(
      expiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    size(
      provider: string,
      account: BytesLike,
      content: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}