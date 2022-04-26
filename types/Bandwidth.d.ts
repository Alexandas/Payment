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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BandwidthInterface extends ethers.utils.Interface {
  functions: {
    "addToken(address,uint256)": FunctionFragment;
    "buy(bytes32,address,uint256)": FunctionFragment;
    "getValueOf(address,uint256)": FunctionFragment;
    "initialize(tuple[],address)": FunctionFragment;
    "owner()": FunctionFragment;
    "priceOf(address)": FunctionFragment;
    "removeToken(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resourceType()": FunctionFragment;
    "setPrice(address,uint256)": FunctionFragment;
    "tokenExists(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getValueOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [{ token: string; price: BigNumberish }[], string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "priceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "removeToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resourceType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tokenExists", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getValueOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resourceType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AddToken(address,uint256)": EventFragment;
    "Buy(address,bytes32,address,uint256,uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RemoveToken(address,uint256)": EventFragment;
    "SetPrice(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Buy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPrice"): EventFragment;
}

export type AddTokenEvent = TypedEvent<
  [string, BigNumber] & { _token: string; _price: BigNumber }
>;

export type BuyEvent = TypedEvent<
  [string, string, string, BigNumber, number] & {
    payer: string;
    account: string;
    token: string;
    amount: BigNumber;
    resourceType: number;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RemoveTokenEvent = TypedEvent<
  [string, BigNumber] & { _token: string; _price: BigNumber }
>;

export type SetPriceEvent = TypedEvent<
  [string, BigNumber] & { _token: string; _price: BigNumber }
>;

export class Bandwidth extends BaseContract {
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

  interface: BandwidthInterface;

  functions: {
    addToken(
      _token: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buy(
      account: BytesLike,
      token: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getValueOf(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { value: BigNumber }>;

    initialize(
      tokenPayloads: { token: string; price: BigNumberish }[],
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    priceOf(_token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    removeToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resourceType(overrides?: CallOverrides): Promise<[number]>;

    setPrice(
      _token: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenExists(_token: string, overrides?: CallOverrides): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addToken(
    _token: string,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buy(
    account: BytesLike,
    token: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getValueOf(
    token: string,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    tokenPayloads: { token: string; price: BigNumberish }[],
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  priceOf(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  removeToken(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resourceType(overrides?: CallOverrides): Promise<number>;

  setPrice(
    _token: string,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenExists(_token: string, overrides?: CallOverrides): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _token: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addToken(
      _token: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buy(
      account: BytesLike,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueOf(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      tokenPayloads: { token: string; price: BigNumberish }[],
      admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    priceOf(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeToken(_token: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resourceType(overrides?: CallOverrides): Promise<number>;

    setPrice(
      _token: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenExists(_token: string, overrides?: CallOverrides): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _token: string,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddToken(address,uint256)"(
      _token?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _token: string; _price: BigNumber }
    >;

    AddToken(
      _token?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _token: string; _price: BigNumber }
    >;

    "Buy(address,bytes32,address,uint256,uint8)"(
      payer?: null,
      account?: null,
      token?: null,
      amount?: null,
      resourceType?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, number],
      {
        payer: string;
        account: string;
        token: string;
        amount: BigNumber;
        resourceType: number;
      }
    >;

    Buy(
      payer?: null,
      account?: null,
      token?: null,
      amount?: null,
      resourceType?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, number],
      {
        payer: string;
        account: string;
        token: string;
        amount: BigNumber;
        resourceType: number;
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

    "RemoveToken(address,uint256)"(
      _token?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _token: string; _price: BigNumber }
    >;

    RemoveToken(
      _token?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _token: string; _price: BigNumber }
    >;

    "SetPrice(address,uint256)"(
      _token?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _token: string; _price: BigNumber }
    >;

    SetPrice(
      _token?: null,
      _price?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _token: string; _price: BigNumber }
    >;
  };

  estimateGas: {
    addToken(
      _token: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buy(
      account: BytesLike,
      token: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getValueOf(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      tokenPayloads: { token: string; price: BigNumberish }[],
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    priceOf(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resourceType(overrides?: CallOverrides): Promise<BigNumber>;

    setPrice(
      _token: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenExists(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addToken(
      _token: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buy(
      account: BytesLike,
      token: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getValueOf(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      tokenPayloads: { token: string; price: BigNumberish }[],
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOf(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resourceType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPrice(
      _token: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenExists(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _token: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
