/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface DateTimeInterface extends utils.Interface {
  functions: {
    "isLeapYear(uint16)": FunctionFragment;
    "leapYearsBefore(uint256)": FunctionFragment;
    "getDaysInMonth(uint8,uint16)": FunctionFragment;
    "getYear(uint256)": FunctionFragment;
    "getMonth(uint256)": FunctionFragment;
    "getDay(uint256)": FunctionFragment;
    "getHour(uint256)": FunctionFragment;
    "getMinute(uint256)": FunctionFragment;
    "getSecond(uint256)": FunctionFragment;
    "getWeekday(uint256)": FunctionFragment;
    "toTimestamp(uint16,uint8,uint8,uint8,uint8)": FunctionFragment;
    "toTimestamp(uint16,uint8,uint8,uint8)": FunctionFragment;
    "toTimestamp(uint16,uint8,uint8)": FunctionFragment;
    "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)": FunctionFragment;
    "dayStartTimestamp(uint256)": FunctionFragment;
    "weekStartTimestamp(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isLeapYear"
      | "leapYearsBefore"
      | "getDaysInMonth"
      | "getYear"
      | "getMonth"
      | "getDay"
      | "getHour"
      | "getMinute"
      | "getSecond"
      | "getWeekday"
      | "toTimestamp(uint16,uint8,uint8,uint8,uint8)"
      | "toTimestamp(uint16,uint8,uint8,uint8)"
      | "toTimestamp(uint16,uint8,uint8)"
      | "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"
      | "dayStartTimestamp"
      | "weekStartTimestamp"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isLeapYear",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "leapYearsBefore",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDaysInMonth",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getYear",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMonth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getHour",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSecond",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWeekday",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toTimestamp(uint16,uint8,uint8,uint8,uint8)",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "toTimestamp(uint16,uint8,uint8,uint8)",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toTimestamp(uint16,uint8,uint8)",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dayStartTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "weekStartTimestamp",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "isLeapYear", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "leapYearsBefore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDaysInMonth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getYear", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMonth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getHour", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMinute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSecond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getWeekday", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toTimestamp(uint16,uint8,uint8,uint8,uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toTimestamp(uint16,uint8,uint8,uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toTimestamp(uint16,uint8,uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dayStartTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "weekStartTimestamp",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DateTime extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DateTimeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isLeapYear(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    leapYearsBefore(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDaysInMonth(
      month: BigNumberish,
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getYear(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getMonth(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getDay(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getHour(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getMinute(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getSecond(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getWeekday(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    "toTimestamp(uint16,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    "toTimestamp(uint16,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      second: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    dayStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    weekStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;
  };

  isLeapYear(year: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  leapYearsBefore(
    year: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDaysInMonth(
    month: BigNumberish,
    year: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getYear(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getMonth(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getDay(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getHour(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getMinute(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getSecond(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getWeekday(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "toTimestamp(uint16,uint8,uint8,uint8,uint8)"(
    year: BigNumberish,
    month: BigNumberish,
    day: BigNumberish,
    hour: BigNumberish,
    minute: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "toTimestamp(uint16,uint8,uint8,uint8)"(
    year: BigNumberish,
    month: BigNumberish,
    day: BigNumberish,
    hour: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "toTimestamp(uint16,uint8,uint8)"(
    year: BigNumberish,
    month: BigNumberish,
    day: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"(
    year: BigNumberish,
    month: BigNumberish,
    day: BigNumberish,
    hour: BigNumberish,
    minute: BigNumberish,
    second: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  dayStartTimestamp(
    _timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  weekStartTimestamp(
    _timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    isLeapYear(year: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    leapYearsBefore(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDaysInMonth(
      month: BigNumberish,
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getYear(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getMonth(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getDay(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;

    getHour(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getMinute(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getSecond(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getWeekday(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      second: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dayStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weekStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    isLeapYear(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    leapYearsBefore(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDaysInMonth(
      month: BigNumberish,
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getYear(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMonth(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDay(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHour(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMinute(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSecond(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWeekday(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      second: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dayStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weekStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isLeapYear(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    leapYearsBefore(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDaysInMonth(
      month: BigNumberish,
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getYear(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMonth(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDay(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHour(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinute(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSecond(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWeekday(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toTimestamp(uint16,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toTimestamp(uint16,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"(
      year: BigNumberish,
      month: BigNumberish,
      day: BigNumberish,
      hour: BigNumberish,
      minute: BigNumberish,
      second: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dayStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    weekStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}