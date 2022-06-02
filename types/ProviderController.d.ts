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

interface ProviderControllerInterface extends ethers.utils.Interface {
  functions: {
    "accountExists(address,bytes32)": FunctionFragment;
    "addPauser(address)": FunctionFragment;
    "drip(bytes32,tuple[],uint256)": FunctionFragment;
    "dripMult(bytes32[],tuple[][],uint256)": FunctionFragment;
    "hashTypedDataV4ForWallet(address,bytes32,address)": FunctionFragment;
    "hashWalletTypes(address,bytes32,address)": FunctionFragment;
    "initWallet(address,bytes32,address,bytes)": FunctionFragment;
    "initialize(address,address,string,address)": FunctionFragment;
    "isPauser(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "pausers(address)": FunctionFragment;
    "registerAccount(bytes32,uint256)": FunctionFragment;
    "registerAndDripMult(bytes32[],tuple[][],uint256)": FunctionFragment;
    "registerMult(bytes32[],uint256)": FunctionFragment;
    "removePauser(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renouncePauser()": FunctionFragment;
    "router()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferWallet(address,bytes32,address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "walletExists(address,bytes32)": FunctionFragment;
    "walletOf(address,bytes32)": FunctionFragment;
    "walletTypesHash()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountExists",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
  encodeFunctionData(
    functionFragment: "drip",
    values: [
      BytesLike,
      { resourceType: BigNumberish; amounts: BigNumberish[] }[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dripMult",
    values: [
      BytesLike[],
      { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashTypedDataV4ForWallet",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hashWalletTypes",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initWallet",
    values: [string, BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "pausers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "registerAccount",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAndDripMult",
    values: [
      BytesLike[],
      { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerMult",
    values: [BytesLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removePauser",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renouncePauser",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferWallet",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "walletExists",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "walletOf",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "walletTypesHash",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accountExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "drip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dripMult", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashTypedDataV4ForWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashWalletTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initWallet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pausers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAndDripMult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerMult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renouncePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "walletExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "walletOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "walletTypesHash",
    data: BytesLike
  ): Result;

  events: {
    "AccountRegistered(address,bytes32)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "PauserAdded(address)": EventFragment;
    "PauserRemoved(address)": EventFragment;
    "ProviderDripped(address,bytes32)": EventFragment;
    "RouterUpdated(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "WalletTransferred(address,bytes32,address,address)": EventFragment;
    "WalletTypesHashUpdated(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProviderDripped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WalletTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WalletTypesHashUpdated"): EventFragment;
}

export type AccountRegisteredEvent = TypedEvent<
  [string, string] & { provider: string; account: string }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type PauserAddedEvent = TypedEvent<[string] & { account: string }>;

export type PauserRemovedEvent = TypedEvent<[string] & { account: string }>;

export type ProviderDrippedEvent = TypedEvent<
  [string, string] & { provider: string; account: string }
>;

export type RouterUpdatedEvent = TypedEvent<[string] & { router: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type WalletTransferredEvent = TypedEvent<
  [string, string, string, string] & {
    provider: string;
    account: string;
    from: string;
    to: string;
  }
>;

export type WalletTypesHashUpdatedEvent = TypedEvent<
  [string] & { hash: string }
>;

export class ProviderController extends BaseContract {
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

  interface: ProviderControllerInterface;

  functions: {
    accountExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    drip(
      account: BytesLike,
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hashTypedDataV4ForWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hashWalletTypes(
      provider: string,
      account: BytesLike,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      owner: string,
      pauser: string,
      walletTypes: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pausers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    registerAccount(
      account: BytesLike,
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerAndDripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerMult(
      accounts: BytesLike[],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removePauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renouncePauser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferWallet(
      provider: string,
      account: BytesLike,
      newWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    walletExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    walletOf(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    walletTypesHash(overrides?: CallOverrides): Promise<[string]>;
  };

  accountExists(
    provider: string,
    account: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  addPauser(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  drip(
    account: BytesLike,
    payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[],
    timeout: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dripMult(
    accounts: BytesLike[],
    payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
    timeout: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hashTypedDataV4ForWallet(
    provider: string,
    account: BytesLike,
    wallet: string,
    overrides?: CallOverrides
  ): Promise<string>;

  hashWalletTypes(
    provider: string,
    account: BytesLike,
    wallet: string,
    overrides?: CallOverrides
  ): Promise<string>;

  initWallet(
    provider: string,
    account: BytesLike,
    wallet: string,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    owner: string,
    pauser: string,
    walletTypes: string,
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pausers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  registerAccount(
    account: BytesLike,
    timeout: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerAndDripMult(
    accounts: BytesLike[],
    payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
    timeout: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerMult(
    accounts: BytesLike[],
    timeout: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removePauser(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renouncePauser(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferWallet(
    provider: string,
    account: BytesLike,
    newWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  walletExists(
    provider: string,
    account: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  walletOf(
    provider: string,
    account: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  walletTypesHash(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accountExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    addPauser(account: string, overrides?: CallOverrides): Promise<void>;

    drip(
      account: BytesLike,
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[],
      timeout: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    dripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      timeout: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    hashTypedDataV4ForWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    hashWalletTypes(
      provider: string,
      account: BytesLike,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<string>;

    initWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      owner: string,
      pauser: string,
      walletTypes: string,
      router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pausers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    registerAccount(
      account: BytesLike,
      timeout: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerAndDripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      timeout: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerMult(
      accounts: BytesLike[],
      timeout: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removePauser(account: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renouncePauser(overrides?: CallOverrides): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferWallet(
      provider: string,
      account: BytesLike,
      newWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    walletExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    walletOf(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    walletTypesHash(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AccountRegistered(address,bytes32)"(
      provider?: null,
      account?: null
    ): TypedEventFilter<
      [string, string],
      { provider: string; account: string }
    >;

    AccountRegistered(
      provider?: null,
      account?: null
    ): TypedEventFilter<
      [string, string],
      { provider: string; account: string }
    >;

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

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "PauserAdded(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    PauserAdded(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    "PauserRemoved(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    PauserRemoved(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    "ProviderDripped(address,bytes32)"(
      provider?: null,
      account?: null
    ): TypedEventFilter<
      [string, string],
      { provider: string; account: string }
    >;

    ProviderDripped(
      provider?: null,
      account?: null
    ): TypedEventFilter<
      [string, string],
      { provider: string; account: string }
    >;

    "RouterUpdated(address)"(
      router?: null
    ): TypedEventFilter<[string], { router: string }>;

    RouterUpdated(
      router?: null
    ): TypedEventFilter<[string], { router: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "WalletTransferred(address,bytes32,address,address)"(
      provider?: null,
      account?: null,
      from?: null,
      to?: null
    ): TypedEventFilter<
      [string, string, string, string],
      { provider: string; account: string; from: string; to: string }
    >;

    WalletTransferred(
      provider?: null,
      account?: null,
      from?: null,
      to?: null
    ): TypedEventFilter<
      [string, string, string, string],
      { provider: string; account: string; from: string; to: string }
    >;

    "WalletTypesHashUpdated(bytes32)"(
      hash?: null
    ): TypedEventFilter<[string], { hash: string }>;

    WalletTypesHashUpdated(
      hash?: null
    ): TypedEventFilter<[string], { hash: string }>;
  };

  estimateGas: {
    accountExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    drip(
      account: BytesLike,
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hashTypedDataV4ForWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashWalletTypes(
      provider: string,
      account: BytesLike,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      owner: string,
      pauser: string,
      walletTypes: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pausers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    registerAccount(
      account: BytesLike,
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerAndDripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerMult(
      accounts: BytesLike[],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removePauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renouncePauser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferWallet(
      provider: string,
      account: BytesLike,
      newWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    walletExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    walletOf(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    walletTypesHash(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    drip(
      account: BytesLike,
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hashTypedDataV4ForWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashWalletTypes(
      provider: string,
      account: BytesLike,
      wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initWallet(
      provider: string,
      account: BytesLike,
      wallet: string,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      owner: string,
      pauser: string,
      walletTypes: string,
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isPauser(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pausers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerAccount(
      account: BytesLike,
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerAndDripMult(
      accounts: BytesLike[],
      payloads: { resourceType: BigNumberish; amounts: BigNumberish[] }[][],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerMult(
      accounts: BytesLike[],
      timeout: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removePauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renouncePauser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferWallet(
      provider: string,
      account: BytesLike,
      newWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    walletExists(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    walletOf(
      provider: string,
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    walletTypesHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}