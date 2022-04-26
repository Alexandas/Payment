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

interface IResourceAdaptorInterface extends ethers.utils.Interface {
  functions: {
    "getAmountAt(uint8,uint256,uint256)": FunctionFragment;
    "getAmountOf(uint8,uint256)": FunctionFragment;
    "getValueAt(uint8,uint256,uint256)": FunctionFragment;
    "getValueOf(uint8,uint256)": FunctionFragment;
    "priceAt(uint8,uint256)": FunctionFragment;
    "priceOf(uint8)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAmountAt",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOf",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getValueAt",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getValueOf",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceAt",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getAmountAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getValueAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getValueOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class IResourceAdaptor extends BaseContract {
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

  interface: IResourceAdaptorInterface;

  functions: {
    getAmountAt(
      resourceType: BigNumberish,
      value: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAmountOf(
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getValueAt(
      resourceType: BigNumberish,
      amount: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getValueOf(
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    priceAt(
      resourceType: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    priceOf(
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  getAmountAt(
    resourceType: BigNumberish,
    value: BigNumberish,
    _indexBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAmountOf(
    resourceType: BigNumberish,
    value: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getValueAt(
    resourceType: BigNumberish,
    amount: BigNumberish,
    _indexBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getValueOf(
    resourceType: BigNumberish,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  priceAt(
    resourceType: BigNumberish,
    _indexBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  priceOf(
    resourceType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getAmountAt(
      resourceType: BigNumberish,
      value: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOf(
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueAt(
      resourceType: BigNumberish,
      amount: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueOf(
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceAt(
      resourceType: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceOf(
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAmountAt(
      resourceType: BigNumberish,
      value: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountOf(
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueAt(
      resourceType: BigNumberish,
      amount: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueOf(
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceAt(
      resourceType: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceOf(
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmountAt(
      resourceType: BigNumberish,
      value: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountOf(
      resourceType: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValueAt(
      resourceType: BigNumberish,
      amount: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValueOf(
      resourceType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceAt(
      resourceType: BigNumberish,
      _indexBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceOf(
      resourceType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
