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

interface IBillingInterface extends ethers.utils.Interface {
  functions: {
    "adaptor()": FunctionFragment;
    "providers()": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "adaptor", values?: undefined): string;
  encodeFunctionData(functionFragment: "providers", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "adaptor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "providers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "Billing(address,uint64,bytes32,bytes,uint256)": EventFragment;
    "ProvidersUpdated(address)": EventFragment;
    "ResourceAdaptorUpdated(address)": EventFragment;
    "TokenUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Billing"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProvidersUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ResourceAdaptorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUpdated"): EventFragment;
}

export type BillingEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber] & {
    provider: string;
    nonce: BigNumber;
    account: string;
    bill: string;
    amount: BigNumber;
  }
>;

export type ProvidersUpdatedEvent = TypedEvent<
  [string] & { providers: string }
>;

export type ResourceAdaptorUpdatedEvent = TypedEvent<
  [string] & { adaptor: string }
>;

export type TokenUpdatedEvent = TypedEvent<[string] & { token: string }>;

export class IBilling extends BaseContract {
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

  interface: IBillingInterface;

  functions: {
    adaptor(overrides?: CallOverrides): Promise<[string]>;

    providers(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  adaptor(overrides?: CallOverrides): Promise<string>;

  providers(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    adaptor(overrides?: CallOverrides): Promise<string>;

    providers(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Billing(address,uint64,bytes32,bytes,uint256)"(
      provider?: null,
      nonce?: null,
      account?: null,
      bill?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber],
      {
        provider: string;
        nonce: BigNumber;
        account: string;
        bill: string;
        amount: BigNumber;
      }
    >;

    Billing(
      provider?: null,
      nonce?: null,
      account?: null,
      bill?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, string, string, BigNumber],
      {
        provider: string;
        nonce: BigNumber;
        account: string;
        bill: string;
        amount: BigNumber;
      }
    >;

    "ProvidersUpdated(address)"(
      providers?: null
    ): TypedEventFilter<[string], { providers: string }>;

    ProvidersUpdated(
      providers?: null
    ): TypedEventFilter<[string], { providers: string }>;

    "ResourceAdaptorUpdated(address)"(
      adaptor?: null
    ): TypedEventFilter<[string], { adaptor: string }>;

    ResourceAdaptorUpdated(
      adaptor?: null
    ): TypedEventFilter<[string], { adaptor: string }>;

    "TokenUpdated(address)"(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    TokenUpdated(token?: null): TypedEventFilter<[string], { token: string }>;
  };

  estimateGas: {
    adaptor(overrides?: CallOverrides): Promise<BigNumber>;

    providers(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    adaptor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    providers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
