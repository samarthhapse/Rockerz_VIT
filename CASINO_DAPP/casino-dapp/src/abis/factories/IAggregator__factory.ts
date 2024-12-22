/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAggregator, IAggregatorInterface } from "../IAggregator";

const _abi = [
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IAggregator__factory {
  static readonly abi = _abi;
  static createInterface(): IAggregatorInterface {
    return new utils.Interface(_abi) as IAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAggregator {
    return new Contract(address, _abi, signerOrProvider) as IAggregator;
  }
}