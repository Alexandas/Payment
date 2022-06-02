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

interface IRouterInterface extends ethers.utils.Interface {
  functions: {
    "ARStorageController()": FunctionFragment;
    "BandwidthController()": FunctionFragment;
    "Billing()": FunctionFragment;
    "BuildingTimeController()": FunctionFragment;
    "DstChainPayment()": FunctionFragment;
    "FundPool()": FunctionFragment;
    "Governance()": FunctionFragment;
    "IPFSStorageController()": FunctionFragment;
    "MessageReceiver()": FunctionFragment;
    "ProviderController()": FunctionFragment;
    "ProviderRegistry()": FunctionFragment;
    "ResourcePriceAdaptor()": FunctionFragment;
    "Token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ARStorageController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BandwidthController",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Billing", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "BuildingTimeController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DstChainPayment",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "FundPool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "Governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IPFSStorageController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MessageReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ProviderController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ProviderRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ResourcePriceAdaptor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "ARStorageController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BandwidthController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Billing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "BuildingTimeController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DstChainPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "FundPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "IPFSStorageController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MessageReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ProviderController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ProviderRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ResourcePriceAdaptor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Token", data: BytesLike): Result;

  events: {
    "ARStorageControllerUpdated(address)": EventFragment;
    "BandwidthControllerUpdated(address)": EventFragment;
    "BillingUpdated(address)": EventFragment;
    "BuildingTimeControllerUpdated(address)": EventFragment;
    "DstChainPaymentUpdated(address)": EventFragment;
    "FundPoolUpdated(address)": EventFragment;
    "GovernanceUpdated(address)": EventFragment;
    "IPFSStorageControllerUpdated(address)": EventFragment;
    "MessageReceiverUpdated(address)": EventFragment;
    "ProviderControllerUpdated(address)": EventFragment;
    "ProviderRegistryUpdated(address)": EventFragment;
    "ResourcePriceAdaptorUpdated(address)": EventFragment;
    "TokenUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ARStorageControllerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BandwidthControllerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BillingUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BuildingTimeControllerUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DstChainPaymentUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundPoolUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernanceUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "IPFSStorageControllerUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageReceiverUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProviderControllerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProviderRegistryUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ResourcePriceAdaptorUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUpdated"): EventFragment;
}

export type ARStorageControllerUpdatedEvent = TypedEvent<
  [string] & { arStorageController: string }
>;

export type BandwidthControllerUpdatedEvent = TypedEvent<
  [string] & { bandwidthController: string }
>;

export type BillingUpdatedEvent = TypedEvent<[string] & { billing: string }>;

export type BuildingTimeControllerUpdatedEvent = TypedEvent<
  [string] & { buildingTimeController: string }
>;

export type DstChainPaymentUpdatedEvent = TypedEvent<
  [string] & { dstChainPayment: string }
>;

export type FundPoolUpdatedEvent = TypedEvent<[string] & { fundPool: string }>;

export type GovernanceUpdatedEvent = TypedEvent<
  [string] & { governance: string }
>;

export type IPFSStorageControllerUpdatedEvent = TypedEvent<
  [string] & { ipfsStorageController: string }
>;

export type MessageReceiverUpdatedEvent = TypedEvent<
  [string] & { messageReceiver: string }
>;

export type ProviderControllerUpdatedEvent = TypedEvent<
  [string] & { providerController: string }
>;

export type ProviderRegistryUpdatedEvent = TypedEvent<
  [string] & { _providerRegistry: string }
>;

export type ResourcePriceAdaptorUpdatedEvent = TypedEvent<
  [string] & { resourcePriceAdaptor: string }
>;

export type TokenUpdatedEvent = TypedEvent<[string] & { token: string }>;

export class IRouter extends BaseContract {
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

  interface: IRouterInterface;

  functions: {
    ARStorageController(overrides?: CallOverrides): Promise<[string]>;

    BandwidthController(overrides?: CallOverrides): Promise<[string]>;

    Billing(overrides?: CallOverrides): Promise<[string]>;

    BuildingTimeController(overrides?: CallOverrides): Promise<[string]>;

    DstChainPayment(overrides?: CallOverrides): Promise<[string]>;

    FundPool(overrides?: CallOverrides): Promise<[string]>;

    Governance(overrides?: CallOverrides): Promise<[string]>;

    IPFSStorageController(overrides?: CallOverrides): Promise<[string]>;

    MessageReceiver(overrides?: CallOverrides): Promise<[string]>;

    ProviderController(overrides?: CallOverrides): Promise<[string]>;

    ProviderRegistry(overrides?: CallOverrides): Promise<[string]>;

    ResourcePriceAdaptor(overrides?: CallOverrides): Promise<[string]>;

    Token(overrides?: CallOverrides): Promise<[string]>;
  };

  ARStorageController(overrides?: CallOverrides): Promise<string>;

  BandwidthController(overrides?: CallOverrides): Promise<string>;

  Billing(overrides?: CallOverrides): Promise<string>;

  BuildingTimeController(overrides?: CallOverrides): Promise<string>;

  DstChainPayment(overrides?: CallOverrides): Promise<string>;

  FundPool(overrides?: CallOverrides): Promise<string>;

  Governance(overrides?: CallOverrides): Promise<string>;

  IPFSStorageController(overrides?: CallOverrides): Promise<string>;

  MessageReceiver(overrides?: CallOverrides): Promise<string>;

  ProviderController(overrides?: CallOverrides): Promise<string>;

  ProviderRegistry(overrides?: CallOverrides): Promise<string>;

  ResourcePriceAdaptor(overrides?: CallOverrides): Promise<string>;

  Token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ARStorageController(overrides?: CallOverrides): Promise<string>;

    BandwidthController(overrides?: CallOverrides): Promise<string>;

    Billing(overrides?: CallOverrides): Promise<string>;

    BuildingTimeController(overrides?: CallOverrides): Promise<string>;

    DstChainPayment(overrides?: CallOverrides): Promise<string>;

    FundPool(overrides?: CallOverrides): Promise<string>;

    Governance(overrides?: CallOverrides): Promise<string>;

    IPFSStorageController(overrides?: CallOverrides): Promise<string>;

    MessageReceiver(overrides?: CallOverrides): Promise<string>;

    ProviderController(overrides?: CallOverrides): Promise<string>;

    ProviderRegistry(overrides?: CallOverrides): Promise<string>;

    ResourcePriceAdaptor(overrides?: CallOverrides): Promise<string>;

    Token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ARStorageControllerUpdated(address)"(
      arStorageController?: null
    ): TypedEventFilter<[string], { arStorageController: string }>;

    ARStorageControllerUpdated(
      arStorageController?: null
    ): TypedEventFilter<[string], { arStorageController: string }>;

    "BandwidthControllerUpdated(address)"(
      bandwidthController?: null
    ): TypedEventFilter<[string], { bandwidthController: string }>;

    BandwidthControllerUpdated(
      bandwidthController?: null
    ): TypedEventFilter<[string], { bandwidthController: string }>;

    "BillingUpdated(address)"(
      billing?: null
    ): TypedEventFilter<[string], { billing: string }>;

    BillingUpdated(
      billing?: null
    ): TypedEventFilter<[string], { billing: string }>;

    "BuildingTimeControllerUpdated(address)"(
      buildingTimeController?: null
    ): TypedEventFilter<[string], { buildingTimeController: string }>;

    BuildingTimeControllerUpdated(
      buildingTimeController?: null
    ): TypedEventFilter<[string], { buildingTimeController: string }>;

    "DstChainPaymentUpdated(address)"(
      dstChainPayment?: null
    ): TypedEventFilter<[string], { dstChainPayment: string }>;

    DstChainPaymentUpdated(
      dstChainPayment?: null
    ): TypedEventFilter<[string], { dstChainPayment: string }>;

    "FundPoolUpdated(address)"(
      fundPool?: null
    ): TypedEventFilter<[string], { fundPool: string }>;

    FundPoolUpdated(
      fundPool?: null
    ): TypedEventFilter<[string], { fundPool: string }>;

    "GovernanceUpdated(address)"(
      governance?: null
    ): TypedEventFilter<[string], { governance: string }>;

    GovernanceUpdated(
      governance?: null
    ): TypedEventFilter<[string], { governance: string }>;

    "IPFSStorageControllerUpdated(address)"(
      ipfsStorageController?: null
    ): TypedEventFilter<[string], { ipfsStorageController: string }>;

    IPFSStorageControllerUpdated(
      ipfsStorageController?: null
    ): TypedEventFilter<[string], { ipfsStorageController: string }>;

    "MessageReceiverUpdated(address)"(
      messageReceiver?: null
    ): TypedEventFilter<[string], { messageReceiver: string }>;

    MessageReceiverUpdated(
      messageReceiver?: null
    ): TypedEventFilter<[string], { messageReceiver: string }>;

    "ProviderControllerUpdated(address)"(
      providerController?: null
    ): TypedEventFilter<[string], { providerController: string }>;

    ProviderControllerUpdated(
      providerController?: null
    ): TypedEventFilter<[string], { providerController: string }>;

    "ProviderRegistryUpdated(address)"(
      _providerRegistry?: null
    ): TypedEventFilter<[string], { _providerRegistry: string }>;

    ProviderRegistryUpdated(
      _providerRegistry?: null
    ): TypedEventFilter<[string], { _providerRegistry: string }>;

    "ResourcePriceAdaptorUpdated(address)"(
      resourcePriceAdaptor?: null
    ): TypedEventFilter<[string], { resourcePriceAdaptor: string }>;

    ResourcePriceAdaptorUpdated(
      resourcePriceAdaptor?: null
    ): TypedEventFilter<[string], { resourcePriceAdaptor: string }>;

    "TokenUpdated(address)"(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    TokenUpdated(token?: null): TypedEventFilter<[string], { token: string }>;
  };

  estimateGas: {
    ARStorageController(overrides?: CallOverrides): Promise<BigNumber>;

    BandwidthController(overrides?: CallOverrides): Promise<BigNumber>;

    Billing(overrides?: CallOverrides): Promise<BigNumber>;

    BuildingTimeController(overrides?: CallOverrides): Promise<BigNumber>;

    DstChainPayment(overrides?: CallOverrides): Promise<BigNumber>;

    FundPool(overrides?: CallOverrides): Promise<BigNumber>;

    Governance(overrides?: CallOverrides): Promise<BigNumber>;

    IPFSStorageController(overrides?: CallOverrides): Promise<BigNumber>;

    MessageReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    ProviderController(overrides?: CallOverrides): Promise<BigNumber>;

    ProviderRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    ResourcePriceAdaptor(overrides?: CallOverrides): Promise<BigNumber>;

    Token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ARStorageController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    BandwidthController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Billing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BuildingTimeController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DstChainPayment(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FundPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    Governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    IPFSStorageController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MessageReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ProviderController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ProviderRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ResourcePriceAdaptor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
