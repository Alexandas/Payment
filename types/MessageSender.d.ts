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

interface MessageSenderInterface extends ethers.utils.Interface {
  functions: {
    "computeMessageOnlyId((address,address,uint64,bytes32),uint64,bytes)": FunctionFragment;
    "messageBus()": FunctionFragment;
    "owner()": FunctionFragment;
    "sendMessage(address,uint64,bytes)": FunctionFragment;
    "setMessageBus(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "computeMessageOnlyId",
    values: [
      {
        sender: string;
        receiver: string;
        srcChainId: BigNumberish;
        srcTxHash: BytesLike;
      },
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "messageBus",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMessageBus",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeMessageOnlyId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messageBus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMessageBus",
    data: BytesLike
  ): Result;
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

export class MessageSender extends BaseContract {
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

  interface: MessageSenderInterface;

  functions: {
    computeMessageOnlyId(
      _route: {
        sender: string;
        receiver: string;
        srcChainId: BigNumberish;
        srcTxHash: BytesLike;
      },
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    messageBus(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  computeMessageOnlyId(
    _route: {
      sender: string;
      receiver: string;
      srcChainId: BigNumberish;
      srcTxHash: BytesLike;
    },
    _dstChainId: BigNumberish,
    _message: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  messageBus(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  sendMessage(
    _receiver: string,
    _dstChainId: BigNumberish,
    _message: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMessageBus(
    _messageBus: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    computeMessageOnlyId(
      _route: {
        sender: string;
        receiver: string;
        srcChainId: BigNumberish;
        srcTxHash: BytesLike;
      },
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    messageBus(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setMessageBus(
      _messageBus: string,
      overrides?: CallOverrides
    ): Promise<void>;

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
    computeMessageOnlyId(
      _route: {
        sender: string;
        receiver: string;
        srcChainId: BigNumberish;
        srcTxHash: BytesLike;
      },
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    messageBus(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    computeMessageOnlyId(
      _route: {
        sender: string;
        receiver: string;
        srcChainId: BigNumberish;
        srcTxHash: BytesLike;
      },
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    messageBus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendMessage(
      _receiver: string,
      _dstChainId: BigNumberish,
      _message: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMessageBus(
      _messageBus: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
