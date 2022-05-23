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

interface ControllersWrapperInterface extends ethers.utils.Interface {
  functions: {
    "arStorageController()": FunctionFragment;
    "bandwidthController()": FunctionFragment;
    "buildingTimeController()": FunctionFragment;
    "ipfsStorageController()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setARStorageController(address)": FunctionFragment;
    "setBandwidthController(address)": FunctionFragment;
    "setBuildingTimeController(address)": FunctionFragment;
    "setIPFSStorageController(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "arStorageController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bandwidthController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buildingTimeController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ipfsStorageController",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setARStorageController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBandwidthController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBuildingTimeController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setIPFSStorageController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "arStorageController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bandwidthController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildingTimeController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ipfsStorageController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setARStorageController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBandwidthController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBuildingTimeController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIPFSStorageController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ARStorageControllerUpdated(address)": EventFragment;
    "BandwidthControllerUpdated(address)": EventFragment;
    "BuildingTimeControllerUpdated(address)": EventFragment;
    "IPFSStorageControllerUpdated(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ARStorageControllerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BandwidthControllerUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BuildingTimeControllerUpdated"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "IPFSStorageControllerUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type ARStorageControllerUpdatedEvent = TypedEvent<
  [string] & { _arStorageController: string }
>;

export type BandwidthControllerUpdatedEvent = TypedEvent<
  [string] & { _bandwidthController: string }
>;

export type BuildingTimeControllerUpdatedEvent = TypedEvent<
  [string] & { _buildingTimeController: string }
>;

export type IPFSStorageControllerUpdatedEvent = TypedEvent<
  [string] & { _ipfsStorageController: string }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class ControllersWrapper extends BaseContract {
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

  interface: ControllersWrapperInterface;

  functions: {
    arStorageController(overrides?: CallOverrides): Promise<[string]>;

    bandwidthController(overrides?: CallOverrides): Promise<[string]>;

    buildingTimeController(overrides?: CallOverrides): Promise<[string]>;

    ipfsStorageController(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setARStorageController(
      _arStorageController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBandwidthController(
      _bandwidthController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBuildingTimeController(
      _buildingTimeController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIPFSStorageController(
      _ipfsStorageController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  arStorageController(overrides?: CallOverrides): Promise<string>;

  bandwidthController(overrides?: CallOverrides): Promise<string>;

  buildingTimeController(overrides?: CallOverrides): Promise<string>;

  ipfsStorageController(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setARStorageController(
    _arStorageController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBandwidthController(
    _bandwidthController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBuildingTimeController(
    _buildingTimeController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIPFSStorageController(
    _ipfsStorageController: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    arStorageController(overrides?: CallOverrides): Promise<string>;

    bandwidthController(overrides?: CallOverrides): Promise<string>;

    buildingTimeController(overrides?: CallOverrides): Promise<string>;

    ipfsStorageController(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setARStorageController(
      _arStorageController: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBandwidthController(
      _bandwidthController: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBuildingTimeController(
      _buildingTimeController: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setIPFSStorageController(
      _ipfsStorageController: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ARStorageControllerUpdated(address)"(
      _arStorageController?: null
    ): TypedEventFilter<[string], { _arStorageController: string }>;

    ARStorageControllerUpdated(
      _arStorageController?: null
    ): TypedEventFilter<[string], { _arStorageController: string }>;

    "BandwidthControllerUpdated(address)"(
      _bandwidthController?: null
    ): TypedEventFilter<[string], { _bandwidthController: string }>;

    BandwidthControllerUpdated(
      _bandwidthController?: null
    ): TypedEventFilter<[string], { _bandwidthController: string }>;

    "BuildingTimeControllerUpdated(address)"(
      _buildingTimeController?: null
    ): TypedEventFilter<[string], { _buildingTimeController: string }>;

    BuildingTimeControllerUpdated(
      _buildingTimeController?: null
    ): TypedEventFilter<[string], { _buildingTimeController: string }>;

    "IPFSStorageControllerUpdated(address)"(
      _ipfsStorageController?: null
    ): TypedEventFilter<[string], { _ipfsStorageController: string }>;

    IPFSStorageControllerUpdated(
      _ipfsStorageController?: null
    ): TypedEventFilter<[string], { _ipfsStorageController: string }>;

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
  };

  estimateGas: {
    arStorageController(overrides?: CallOverrides): Promise<BigNumber>;

    bandwidthController(overrides?: CallOverrides): Promise<BigNumber>;

    buildingTimeController(overrides?: CallOverrides): Promise<BigNumber>;

    ipfsStorageController(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setARStorageController(
      _arStorageController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBandwidthController(
      _bandwidthController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBuildingTimeController(
      _buildingTimeController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIPFSStorageController(
      _ipfsStorageController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    arStorageController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bandwidthController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buildingTimeController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ipfsStorageController(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setARStorageController(
      _arStorageController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBandwidthController(
      _bandwidthController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBuildingTimeController(
      _buildingTimeController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIPFSStorageController(
      _ipfsStorageController: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
