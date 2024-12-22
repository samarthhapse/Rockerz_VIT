/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface ProfitsManagerInterface extends utils.Interface {
  functions: {
    "dailyLosses(address,uint256)": FunctionFragment;
    "dailyProfit(address,uint256)": FunctionFragment;
    "dayStartTimestamp(uint256)": FunctionFragment;
    "getDay(uint256)": FunctionFragment;
    "getDaysInMonth(uint8,uint16)": FunctionFragment;
    "getHour(uint256)": FunctionFragment;
    "getMinute(uint256)": FunctionFragment;
    "getMonth(uint256)": FunctionFragment;
    "getSecond(uint256)": FunctionFragment;
    "getWeekday(uint256)": FunctionFragment;
    "getYear(uint256)": FunctionFragment;
    "isLeapYear(uint16)": FunctionFragment;
    "leapYearsBefore(uint256)": FunctionFragment;
    "maxDailyProfit()": FunctionFragment;
    "maxWeeklyProfit()": FunctionFragment;
    "rouletteCA()": FunctionFragment;
    "toTimestamp(uint16,uint8,uint8,uint8,uint8)": FunctionFragment;
    "toTimestamp(uint16,uint8,uint8,uint8)": FunctionFragment;
    "toTimestamp(uint16,uint8,uint8)": FunctionFragment;
    "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)": FunctionFragment;
    "weekStartTimestamp(uint256)": FunctionFragment;
    "weeklyLosses(address,uint256)": FunctionFragment;
    "weeklyProfit(address,uint256)": FunctionFragment;
    "getUserDailyProfit(address)": FunctionFragment;
    "getUserWeeklyProfit(address)": FunctionFragment;
    "getUserDailyLosses(address)": FunctionFragment;
    "getUserWeeklyLosses(address)": FunctionFragment;
    "amountLeftForDailyMaxProfit(address)": FunctionFragment;
    "amountLeftForWeeklyMaxProfit(address)": FunctionFragment;
    "maxDailyProfitReached(address)": FunctionFragment;
    "maxWeeklyProfitReached(address)": FunctionFragment;
    "registerProfits(address,uint256)": FunctionFragment;
    "registerLosses(address,uint256)": FunctionFragment;
    "_setMaxDailyWeeklyProfit(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "dailyLosses"
      | "dailyProfit"
      | "dayStartTimestamp"
      | "getDay"
      | "getDaysInMonth"
      | "getHour"
      | "getMinute"
      | "getMonth"
      | "getSecond"
      | "getWeekday"
      | "getYear"
      | "isLeapYear"
      | "leapYearsBefore"
      | "maxDailyProfit"
      | "maxWeeklyProfit"
      | "rouletteCA"
      | "toTimestamp(uint16,uint8,uint8,uint8,uint8)"
      | "toTimestamp(uint16,uint8,uint8,uint8)"
      | "toTimestamp(uint16,uint8,uint8)"
      | "toTimestamp(uint16,uint8,uint8,uint8,uint8,uint8)"
      | "weekStartTimestamp"
      | "weeklyLosses"
      | "weeklyProfit"
      | "getUserDailyProfit"
      | "getUserWeeklyProfit"
      | "getUserDailyLosses"
      | "getUserWeeklyLosses"
      | "amountLeftForDailyMaxProfit"
      | "amountLeftForWeeklyMaxProfit"
      | "maxDailyProfitReached"
      | "maxWeeklyProfitReached"
      | "registerProfits"
      | "registerLosses"
      | "_setMaxDailyWeeklyProfit"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "dailyLosses",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dailyProfit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dayStartTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDaysInMonth",
    values: [BigNumberish, BigNumberish]
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
    functionFragment: "getMonth",
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
    functionFragment: "getYear",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isLeapYear",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "leapYearsBefore",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxDailyProfit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxWeeklyProfit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rouletteCA",
    values?: undefined
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
    functionFragment: "weekStartTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "weeklyLosses",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "weeklyProfit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserDailyProfit",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserWeeklyProfit",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserDailyLosses",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserWeeklyLosses",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "amountLeftForDailyMaxProfit",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "amountLeftForWeeklyMaxProfit",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxDailyProfitReached",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxWeeklyProfitReached",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerProfits",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerLosses",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_setMaxDailyWeeklyProfit",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "dailyLosses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dailyProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dayStartTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDaysInMonth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHour", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMinute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMonth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSecond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getWeekday", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getYear", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isLeapYear", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "leapYearsBefore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxDailyProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxWeeklyProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rouletteCA", data: BytesLike): Result;
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
    functionFragment: "weekStartTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "weeklyLosses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "weeklyProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserDailyProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserWeeklyProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserDailyLosses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserWeeklyLosses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "amountLeftForDailyMaxProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "amountLeftForWeeklyMaxProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxDailyProfitReached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxWeeklyProfitReached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerProfits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerLosses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_setMaxDailyWeeklyProfit",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ProfitsManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProfitsManagerInterface;

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
    dailyLosses(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    dailyProfit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    dayStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    getDay(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getDaysInMonth(
      month: BigNumberish,
      year: BigNumberish,
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

    getMonth(
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

    getYear(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    isLeapYear(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    leapYearsBefore(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxDailyProfit(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxWeeklyProfit(overrides?: CallOverrides): Promise<[BigNumber]>;

    rouletteCA(overrides?: CallOverrides): Promise<[string]>;

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

    weekStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    weeklyLosses(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    weeklyProfit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserDailyProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserWeeklyProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserDailyLosses(
      adr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserWeeklyLosses(
      adr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    amountLeftForDailyMaxProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    amountLeftForWeeklyMaxProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxDailyProfitReached(
      adr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxWeeklyProfitReached(
      adr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    registerProfits(
      adr: string,
      profitDollars: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    registerLosses(
      adr: string,
      lossesDollars: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    _setMaxDailyWeeklyProfit(
      _maxDailyProfit: BigNumberish,
      _maxWeeklyProfit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  dailyLosses(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  dailyProfit(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  dayStartTimestamp(
    _timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDay(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getDaysInMonth(
    month: BigNumberish,
    year: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getHour(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getMinute(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getMonth(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getSecond(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getWeekday(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getYear(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;

  isLeapYear(year: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  leapYearsBefore(
    year: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxDailyProfit(overrides?: CallOverrides): Promise<BigNumber>;

  maxWeeklyProfit(overrides?: CallOverrides): Promise<BigNumber>;

  rouletteCA(overrides?: CallOverrides): Promise<string>;

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

  weekStartTimestamp(
    _timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  weeklyLosses(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  weeklyProfit(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserDailyProfit(
    adr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserWeeklyProfit(
    adr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserDailyLosses(
    adr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserWeeklyLosses(
    adr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  amountLeftForDailyMaxProfit(
    adr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  amountLeftForWeeklyMaxProfit(
    adr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxDailyProfitReached(
    adr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxWeeklyProfitReached(
    adr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  registerProfits(
    adr: string,
    profitDollars: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  registerLosses(
    adr: string,
    lossesDollars: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  _setMaxDailyWeeklyProfit(
    _maxDailyProfit: BigNumberish,
    _maxWeeklyProfit: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    dailyLosses(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dailyProfit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dayStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDay(timestamp: BigNumberish, overrides?: CallOverrides): Promise<number>;

    getDaysInMonth(
      month: BigNumberish,
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getHour(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getMinute(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getMonth(
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

    getYear(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    isLeapYear(year: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    leapYearsBefore(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxDailyProfit(overrides?: CallOverrides): Promise<BigNumber>;

    maxWeeklyProfit(overrides?: CallOverrides): Promise<BigNumber>;

    rouletteCA(overrides?: CallOverrides): Promise<string>;

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

    weekStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weeklyLosses(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weeklyProfit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserDailyProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserWeeklyProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserDailyLosses(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserWeeklyLosses(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amountLeftForDailyMaxProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amountLeftForWeeklyMaxProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxDailyProfitReached(
      adr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxWeeklyProfitReached(
      adr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerProfits(
      adr: string,
      profitDollars: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerLosses(
      adr: string,
      lossesDollars: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _setMaxDailyWeeklyProfit(
      _maxDailyProfit: BigNumberish,
      _maxWeeklyProfit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    dailyLosses(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dailyProfit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dayStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDay(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDaysInMonth(
      month: BigNumberish,
      year: BigNumberish,
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

    getMonth(
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

    getYear(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isLeapYear(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    leapYearsBefore(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxDailyProfit(overrides?: CallOverrides): Promise<BigNumber>;

    maxWeeklyProfit(overrides?: CallOverrides): Promise<BigNumber>;

    rouletteCA(overrides?: CallOverrides): Promise<BigNumber>;

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

    weekStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weeklyLosses(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weeklyProfit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserDailyProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserWeeklyProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserDailyLosses(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserWeeklyLosses(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amountLeftForDailyMaxProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amountLeftForWeeklyMaxProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxDailyProfitReached(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxWeeklyProfitReached(
      adr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerProfits(
      adr: string,
      profitDollars: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    registerLosses(
      adr: string,
      lossesDollars: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    _setMaxDailyWeeklyProfit(
      _maxDailyProfit: BigNumberish,
      _maxWeeklyProfit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    dailyLosses(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dailyProfit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dayStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDay(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDaysInMonth(
      month: BigNumberish,
      year: BigNumberish,
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

    getMonth(
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

    getYear(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isLeapYear(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    leapYearsBefore(
      year: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxDailyProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxWeeklyProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rouletteCA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    weekStartTimestamp(
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    weeklyLosses(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    weeklyProfit(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserDailyProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserWeeklyProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserDailyLosses(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserWeeklyLosses(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    amountLeftForDailyMaxProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    amountLeftForWeeklyMaxProfit(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxDailyProfitReached(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxWeeklyProfitReached(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerProfits(
      adr: string,
      profitDollars: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    registerLosses(
      adr: string,
      lossesDollars: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    _setMaxDailyWeeklyProfit(
      _maxDailyProfit: BigNumberish,
      _maxWeeklyProfit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}