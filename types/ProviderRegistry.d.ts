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

interface ProviderRegistryInterface extends ethers.utils.Interface {
  functions: {
    "addProvider(address)": FunctionFragment;
    "addWallet(address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "isProvider(address)": FunctionFragment;
    "isValidSignature(address,bytes32,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "providerWallet(address)": FunctionFragment;
    "providerWalletExists(address)": FunctionFragment;
    "removeProvider(address)": FunctionFragment;
    "removeWallet(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "router()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addProvider", values: [string]): string;
  encodeFunctionData(functionFragment: "addWallet", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "isProvider", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "providerWallet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "providerWalletExists",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeProvider",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWallet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addWallet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isProvider", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "providerWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "providerWalletExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddProivderWallet(address,address)": EventFragment;
    "AddProvider(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RemoveProvider(address)": EventFragment;
    "RemoveProviderWallet(address,address)": EventFragment;
    "RouterUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddProivderWallet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddProvider"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveProvider"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveProviderWallet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterUpdated"): EventFragment;
}

export type AddProivderWalletEvent = TypedEvent<
  [string, string] & { provider: string; wallet: string }
>;

export type AddProviderEvent = TypedEvent<[string] & { provider: string }>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RemoveProviderEvent = TypedEvent<[string] & { provider: string }>;

export type RemoveProviderWalletEvent = TypedEvent<
  [string, string] & { provider: string; wallet: string }
>;

export type RouterUpdatedEvent = TypedEvent<[string] & { router: string }>;

export class ProviderRegistry extends BaseContract {
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

  interface: ProviderRegistryInterface;

  functions: {
    addProvider(
      provider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addWallet(
      wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      owner: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isProvider(provider: string, overrides?: CallOverrides): Promise<[boolean]>;

    isValidSignature(
      provider: string,
      hash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    providerWallet(
      provider: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    providerWalletExists(
      provider: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeProvider(
      provider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeWallet(
      wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addProvider(
    provider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addWallet(
    wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    owner: string,
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isProvider(provider: string, overrides?: CallOverrides): Promise<boolean>;

  isValidSignature(
    provider: string,
    hash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  providerWallet(provider: string, overrides?: CallOverrides): Promise<string>;

  providerWalletExists(
    provider: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeProvider(
    provider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeWallet(
    wallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addProvider(provider: string, overrides?: CallOverrides): Promise<void>;

    addWallet(wallet: string, overrides?: CallOverrides): Promise<void>;

    initialize(
      owner: string,
      router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isProvider(provider: string, overrides?: CallOverrides): Promise<boolean>;

    isValidSignature(
      provider: string,
      hash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    providerWallet(
      provider: string,
      overrides?: CallOverrides
    ): Promise<string>;

    providerWalletExists(
      provider: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeProvider(provider: string, overrides?: CallOverrides): Promise<void>;

    removeWallet(wallet: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddProivderWallet(address,address)"(
      provider?: null,
      wallet?: null
    ): TypedEventFilter<[string, string], { provider: string; wallet: string }>;

    AddProivderWallet(
      provider?: null,
      wallet?: null
    ): TypedEventFilter<[string, string], { provider: string; wallet: string }>;

    "AddProvider(address)"(
      provider?: null
    ): TypedEventFilter<[string], { provider: string }>;

    AddProvider(
      provider?: null
    ): TypedEventFilter<[string], { provider: string }>;

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

    "RemoveProvider(address)"(
      provider?: null
    ): TypedEventFilter<[string], { provider: string }>;

    RemoveProvider(
      provider?: null
    ): TypedEventFilter<[string], { provider: string }>;

    "RemoveProviderWallet(address,address)"(
      provider?: null,
      wallet?: null
    ): TypedEventFilter<[string, string], { provider: string; wallet: string }>;

    RemoveProviderWallet(
      provider?: null,
      wallet?: null
    ): TypedEventFilter<[string, string], { provider: string; wallet: string }>;

    "RouterUpdated(address)"(
      router?: null
    ): TypedEventFilter<[string], { router: string }>;

    RouterUpdated(
      router?: null
    ): TypedEventFilter<[string], { router: string }>;
  };

  estimateGas: {
    addProvider(
      provider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addWallet(
      wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      owner: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isProvider(provider: string, overrides?: CallOverrides): Promise<BigNumber>;

    isValidSignature(
      provider: string,
      hash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    providerWallet(
      provider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    providerWalletExists(
      provider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeProvider(
      provider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeWallet(
      wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addProvider(
      provider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addWallet(
      wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      owner: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isProvider(
      provider: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidSignature(
      provider: string,
      hash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    providerWallet(
      provider: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    providerWalletExists(
      provider: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeProvider(
      provider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeWallet(
      wallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
