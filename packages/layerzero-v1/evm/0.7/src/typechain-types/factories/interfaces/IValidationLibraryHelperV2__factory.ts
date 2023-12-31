/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IValidationLibraryHelperV2,
  IValidationLibraryHelperV2Interface,
} from "../../interfaces/IValidationLibraryHelperV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "sizeOfSrcAddress",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "ulnAddress",
        type: "bytes32",
      },
    ],
    name: "getPacket",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "srcChainId",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "dstChainId",
            type: "uint16",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "dstAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "srcAddress",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "ulnAddress",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes",
          },
        ],
        internalType: "struct LayerZeroPacket.Packet",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getProofType",
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
  {
    inputs: [],
    name: "getUtilsVersion",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hashRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "receiptSlotIndex",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "logIndex",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "proof",
        type: "bytes[]",
      },
    ],
    name: "getVerifyLog",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "contractAddress",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "topicZeroSig",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IValidationLibraryHelperV2.ULNLog",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class IValidationLibraryHelperV2__factory {
  static readonly abi = _abi;
  static createInterface(): IValidationLibraryHelperV2Interface {
    return new utils.Interface(_abi) as IValidationLibraryHelperV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IValidationLibraryHelperV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IValidationLibraryHelperV2;
  }
}
