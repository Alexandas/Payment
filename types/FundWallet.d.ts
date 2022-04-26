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

interface FundWalletInterface extends ethers.utils.Interface {
  functions: {
    "addPauser(address)": FunctionFragment;
    "balanceOf(bytes32)": FunctionFragment;
    "billing()": FunctionFragment;
    "charge(address,uint256,address,bytes32,uint256,bytes)": FunctionFragment;
    "decodeBill(bytes)": FunctionFragment;
    "encodeBill(tuple[])": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "isPauser(address)": FunctionFragment;
    "nonces(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(bytes32)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "pausers(address)": FunctionFragment;
    "providers()": FunctionFragment;
    "removePauser(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renouncePauser()": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferWalletOwner(bytes32,address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "withdraw(address,uint256,bytes32,address,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "billing", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "charge",
    values: [string, BigNumberish, string, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeBill",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeBill",
    values: [
      {
        indexBlock: BigNumberish;
        payloads: { resourceType: BigNumberish; amount: BigNumberish }[];
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
  encodeFunctionData(
    functionFragment: "nonces",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "ownerOf", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "pausers", values: [string]): string;
  encodeFunctionData(functionFragment: "providers", values?: undefined): string;
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
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferWalletOwner",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, BytesLike, string, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "billing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "charge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decodeBill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encodeBill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pausers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "providers", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferWalletOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "BillingUpdated(address)": EventFragment;
    "Charge(address,uint256,address,bytes32,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "PauserAdded(address)": EventFragment;
    "PauserRemoved(address)": EventFragment;
    "ProvidesUpdated(address)": EventFragment;
    "Spend(address,uint256,bytes32,uint256)": EventFragment;
    "TokenUpdated(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "WalletOwnerTransferred(bytes32,address)": EventFragment;
    "Withdrawn(address,uint256,bytes32,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BillingUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Charge"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProvidesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Spend"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WalletOwnerTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type BillingUpdatedEvent = TypedEvent<[string] & { billing: string }>;

export type ChargeEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber] & {
    provider: string;
    nonce: BigNumber;
    owner: string;
    account: string;
    amount: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type PauserAddedEvent = TypedEvent<[string] & { account: string }>;

export type PauserRemovedEvent = TypedEvent<[string] & { account: string }>;

export type ProvidesUpdatedEvent = TypedEvent<[string] & { providers: string }>;

export type SpendEvent = TypedEvent<
  [string, BigNumber, string, BigNumber] & {
    provider: string;
    nonce: BigNumber;
    account: string;
    fee: BigNumber;
  }
>;

export type TokenUpdatedEvent = TypedEvent<[string] & { token: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type WalletOwnerTransferredEvent = TypedEvent<
  [string, string] & { account: string; newOwner: string }
>;

export type WithdrawnEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber] & {
    provider: string;
    nonce: BigNumber;
    account: string;
    to: string;
    amount: BigNumber;
  }
>;

export class FundWallet extends BaseContract {
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

  interface: FundWalletInterface;

  functions: {
    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    billing(overrides?: CallOverrides): Promise<[string]>;

    charge(
      provider: string,
      nonce: BigNumberish,
      owner: string,
      account: BytesLike,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decodeBill(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          BigNumber,
          ([number, BigNumber] & { resourceType: number; amount: BigNumber })[]
        ] & {
          indexBlock: BigNumber;
          payloads: ([number, BigNumber] & {
            resourceType: number;
            amount: BigNumber;
          })[];
        })[]
      ]
    >;

    encodeBill(
      bills: {
        indexBlock: BigNumberish;
        payloads: { resourceType: BigNumberish; amount: BigNumberish }[];
      }[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      owner: string,
      _token: string,
      _providers: string,
      _billing: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    nonces(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(account: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pausers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    providers(overrides?: CallOverrides): Promise<[string]>;

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

    token(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferWalletOwner(
      account: BytesLike,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      provider: string,
      nonce: BigNumberish,
      account: BytesLike,
      to: string,
      billMessage: BytesLike,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addPauser(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  billing(overrides?: CallOverrides): Promise<string>;

  charge(
    provider: string,
    nonce: BigNumberish,
    owner: string,
    account: BytesLike,
    amount: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decodeBill(
    message: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    ([
      BigNumber,
      ([number, BigNumber] & { resourceType: number; amount: BigNumber })[]
    ] & {
      indexBlock: BigNumber;
      payloads: ([number, BigNumber] & {
        resourceType: number;
        amount: BigNumber;
      })[];
    })[]
  >;

  encodeBill(
    bills: {
      indexBlock: BigNumberish;
      payloads: { resourceType: BigNumberish; amount: BigNumberish }[];
    }[],
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    owner: string,
    _token: string,
    _providers: string,
    _billing: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

  nonces(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOf(account: BytesLike, overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pausers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  providers(overrides?: CallOverrides): Promise<string>;

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

  token(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferWalletOwner(
    account: BytesLike,
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    provider: string,
    nonce: BigNumberish,
    account: BytesLike,
    to: string,
    billMessage: BytesLike,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addPauser(account: string, overrides?: CallOverrides): Promise<void>;

    balanceOf(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    billing(overrides?: CallOverrides): Promise<string>;

    charge(
      provider: string,
      nonce: BigNumberish,
      owner: string,
      account: BytesLike,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    decodeBill(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      ([
        BigNumber,
        ([number, BigNumber] & { resourceType: number; amount: BigNumber })[]
      ] & {
        indexBlock: BigNumber;
        payloads: ([number, BigNumber] & {
          resourceType: number;
          amount: BigNumber;
        })[];
      })[]
    >;

    encodeBill(
      bills: {
        indexBlock: BigNumberish;
        payloads: { resourceType: BigNumberish; amount: BigNumberish }[];
      }[],
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      owner: string,
      _token: string,
      _providers: string,
      _billing: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

    nonces(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(account: BytesLike, overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pausers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    providers(overrides?: CallOverrides): Promise<string>;

    removePauser(account: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renouncePauser(overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferWalletOwner(
      account: BytesLike,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    withdraw(
      provider: string,
      nonce: BigNumberish,
      account: BytesLike,
      to: string,
      billMessage: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "BillingUpdated(address)"(
      billing?: null
    ): TypedEventFilter<[string], { billing: string }>;

    BillingUpdated(
      billing?: null
    ): TypedEventFilter<[string], { billing: string }>;

    "Charge(address,uint256,address,bytes32,uint256)"(
      provider?: null,
      nonce?: null,
      owner?: null,
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber],
      {
        provider: string;
        nonce: BigNumber;
        owner: string;
        account: string;
        amount: BigNumber;
      }
    >;

    Charge(
      provider?: null,
      nonce?: null,
      owner?: null,
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber],
      {
        provider: string;
        nonce: BigNumber;
        owner: string;
        account: string;
        amount: BigNumber;
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

    "ProvidesUpdated(address)"(
      providers?: null
    ): TypedEventFilter<[string], { providers: string }>;

    ProvidesUpdated(
      providers?: null
    ): TypedEventFilter<[string], { providers: string }>;

    "Spend(address,uint256,bytes32,uint256)"(
      provider?: null,
      nonce?: null,
      account?: null,
      fee?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber],
      { provider: string; nonce: BigNumber; account: string; fee: BigNumber }
    >;

    Spend(
      provider?: null,
      nonce?: null,
      account?: null,
      fee?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber],
      { provider: string; nonce: BigNumber; account: string; fee: BigNumber }
    >;

    "TokenUpdated(address)"(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    TokenUpdated(token?: null): TypedEventFilter<[string], { token: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "WalletOwnerTransferred(bytes32,address)"(
      account?: null,
      newOwner?: null
    ): TypedEventFilter<
      [string, string],
      { account: string; newOwner: string }
    >;

    WalletOwnerTransferred(
      account?: null,
      newOwner?: null
    ): TypedEventFilter<
      [string, string],
      { account: string; newOwner: string }
    >;

    "Withdrawn(address,uint256,bytes32,address,uint256)"(
      provider?: null,
      nonce?: null,
      account?: null,
      to?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber],
      {
        provider: string;
        nonce: BigNumber;
        account: string;
        to: string;
        amount: BigNumber;
      }
    >;

    Withdrawn(
      provider?: null,
      nonce?: null,
      account?: null,
      to?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber],
      {
        provider: string;
        nonce: BigNumber;
        account: string;
        to: string;
        amount: BigNumber;
      }
    >;
  };

  estimateGas: {
    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    billing(overrides?: CallOverrides): Promise<BigNumber>;

    charge(
      provider: string,
      nonce: BigNumberish,
      owner: string,
      account: BytesLike,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decodeBill(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    encodeBill(
      bills: {
        indexBlock: BigNumberish;
        payloads: { resourceType: BigNumberish; amount: BigNumberish }[];
      }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      owner: string,
      _token: string,
      _providers: string,
      _billing: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    nonces(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(account: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pausers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    providers(overrides?: CallOverrides): Promise<BigNumber>;

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

    token(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferWalletOwner(
      account: BytesLike,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      provider: string,
      nonce: BigNumberish,
      account: BytesLike,
      to: string,
      billMessage: BytesLike,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    billing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    charge(
      provider: string,
      nonce: BigNumberish,
      owner: string,
      account: BytesLike,
      amount: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decodeBill(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encodeBill(
      bills: {
        indexBlock: BigNumberish;
        payloads: { resourceType: BigNumberish; amount: BigNumberish }[];
      }[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      owner: string,
      _token: string,
      _providers: string,
      _billing: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isPauser(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonces(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      account: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pausers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    providers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferWalletOwner(
      account: BytesLike,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      provider: string,
      nonce: BigNumberish,
      account: BytesLike,
      to: string,
      billMessage: BytesLike,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
