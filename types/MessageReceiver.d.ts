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

interface MessageReceiverInterface extends ethers.utils.Interface {
  functions: {
    "executeMessage(address,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransfer(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferFallback(address,address,uint256,uint64,bytes,address)": FunctionFragment;
    "executeMessageWithTransferRefund(address,uint256,bytes,address)": FunctionFragment;
    "executor()": FunctionFragment;
    "message()": FunctionFragment;
    "messageBus()": FunctionFragment;
    "owner()": FunctionFragment;
    "sender()": FunctionFragment;
    "setMessageBus(address)": FunctionFragment;
    "src()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "executeMessage",
    values: [string, BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransfer",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferFallback",
    values: [string, string, BigNumberish, BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageWithTransferRefund",
    values: [string, BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "executor", values?: undefined): string;
  encodeFunctionData(functionFragment: "message", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "messageBus",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "sender", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMessageBus",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "src", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransferFallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageWithTransferRefund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "executor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "message", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messageBus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMessageBus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "src", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "MessageBusUpdated(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageBusUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type MessageBusUpdatedEvent = TypedEvent<
  [string] & { messageBus: string }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class MessageReceiver extends BaseContract {
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

  interface: MessageReceiverInterface;

  functions: {
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executor(overrides?: CallOverrides): Promise<[string]>;

    message(overrides?: CallOverrides): Promise<[string]>;

    messageBus(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    sender(overrides?: CallOverrides): Promise<[string]>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    src(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  executeMessage(
    _sender: string,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransfer(
    _sender: string,
    _token: string,
    _amount: BigNumberish,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransferFallback(
    _sender: string,
    _token: string,
    _amount: BigNumberish,
    _srcChainId: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMessageWithTransferRefund(
    _token: string,
    _amount: BigNumberish,
    _message: BytesLike,
    _executor: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executor(overrides?: CallOverrides): Promise<string>;

  message(overrides?: CallOverrides): Promise<string>;

  messageBus(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  sender(overrides?: CallOverrides): Promise<string>;

  setMessageBus(
    _messageBus: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  src(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides
    ): Promise<number>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides
    ): Promise<number>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides
    ): Promise<number>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: CallOverrides
    ): Promise<number>;

    executor(overrides?: CallOverrides): Promise<string>;

    message(overrides?: CallOverrides): Promise<string>;

    messageBus(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    sender(overrides?: CallOverrides): Promise<string>;

    setMessageBus(
      _messageBus: string,
      overrides?: CallOverrides
    ): Promise<void>;

    src(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MessageBusUpdated(address)"(
      messageBus?: null
    ): TypedEventFilter<[string], { messageBus: string }>;

    MessageBusUpdated(
      messageBus?: null
    ): TypedEventFilter<[string], { messageBus: string }>;

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
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executor(overrides?: CallOverrides): Promise<BigNumber>;

    message(overrides?: CallOverrides): Promise<BigNumber>;

    messageBus(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    sender(overrides?: CallOverrides): Promise<BigNumber>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    src(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeMessage(
      _sender: string,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransfer(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferFallback(
      _sender: string,
      _token: string,
      _amount: BigNumberish,
      _srcChainId: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMessageWithTransferRefund(
      _token: string,
      _amount: BigNumberish,
      _message: BytesLike,
      _executor: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    message(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messageBus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    src(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
