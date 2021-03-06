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

interface IBridgeInterface extends ethers.utils.Interface {
  functions: {
    "relay(bytes,bytes[],address[],uint256[])": FunctionFragment;
    "send(address,address,uint256,uint64,uint64,uint32)": FunctionFragment;
    "transfers(bytes32)": FunctionFragment;
    "verifySigs(bytes,bytes[],address[],uint256[])": FunctionFragment;
    "withdraw(bytes,bytes[],address[],uint256[])": FunctionFragment;
    "withdraws(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "relay",
    values: [BytesLike, BytesLike[], string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transfers",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySigs",
    values: [BytesLike, BytesLike[], string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BytesLike, BytesLike[], string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraws",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "relay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifySigs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraws", data: BytesLike): Result;

  events: {};
}

export class IBridge extends BaseContract {
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

  interface: IBridgeInterface;

  functions: {
    relay(
      _relayRequest: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    send(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChainId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transfers(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifySigs(
      _msg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    withdraw(
      _wdmsg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraws(
      withdrawId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  relay(
    _relayRequest: BytesLike,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  send(
    _receiver: string,
    _token: string,
    _amount: BigNumberish,
    _dstChainId: BigNumberish,
    _nonce: BigNumberish,
    _maxSlippage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transfers(transferId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  verifySigs(
    _msg: BytesLike,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<void>;

  withdraw(
    _wdmsg: BytesLike,
    _sigs: BytesLike[],
    _signers: string[],
    _powers: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraws(withdrawId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    relay(
      _relayRequest: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    send(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChainId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transfers(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifySigs(
      _msg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _wdmsg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    withdraws(
      withdrawId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    relay(
      _relayRequest: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    send(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChainId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transfers(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifySigs(
      _msg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _wdmsg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraws(
      withdrawId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    relay(
      _relayRequest: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    send(
      _receiver: string,
      _token: string,
      _amount: BigNumberish,
      _dstChainId: BigNumberish,
      _nonce: BigNumberish,
      _maxSlippage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transfers(
      transferId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifySigs(
      _msg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _wdmsg: BytesLike,
      _sigs: BytesLike[],
      _signers: string[],
      _powers: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraws(
      withdrawId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
