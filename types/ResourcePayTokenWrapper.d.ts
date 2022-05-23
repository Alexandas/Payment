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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ResourcePayTokenWrapperInterface extends ethers.utils.Interface {
  functions: {
    "matchResourceToToken(uint256)": FunctionFragment;
    "matchTokenToResource(uint256)": FunctionFragment;
    "resourceDecimals()": FunctionFragment;
    "token()": FunctionFragment;
    "tokenDecimals()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "matchResourceToToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "matchTokenToResource",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "resourceDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenDecimals",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "matchResourceToToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "matchTokenToResource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resourceDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenDecimals",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "TokenUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUpdated"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type TokenUpdatedEvent = TypedEvent<[string] & { token: string }>;

export class ResourcePayTokenWrapper extends BaseContract {
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

  interface: ResourcePayTokenWrapperInterface;

  functions: {
    matchResourceToToken(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    matchTokenToResource(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    resourceDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  matchResourceToToken(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  matchTokenToResource(
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  resourceDecimals(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenDecimals(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    matchResourceToToken(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    matchTokenToResource(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resourceDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenDecimals(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "TokenUpdated(address)"(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    TokenUpdated(token?: null): TypedEventFilter<[string], { token: string }>;
  };

  estimateGas: {
    matchResourceToToken(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    matchTokenToResource(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resourceDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenDecimals(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    matchResourceToToken(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    matchTokenToResource(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resourceDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
