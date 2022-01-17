/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ICEther } from "../ICEther";

export class ICEther__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICEther {
    return new Contract(address, _abi, signerOrProvider) as ICEther;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenCollateral",
        type: "address",
      },
    ],
    name: "liquidateBorrow",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "repayBorrow",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "repayBorrowBehalf",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];