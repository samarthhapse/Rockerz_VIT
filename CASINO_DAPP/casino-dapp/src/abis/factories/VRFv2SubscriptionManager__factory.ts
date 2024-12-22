/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VRFv2SubscriptionManager,
  VRFv2SubscriptionManagerInterface,
} from "../VRFv2SubscriptionManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_link_token_contract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_requestId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_subscriptionId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040527f08ba8f62ff6c40a58877a106147661db43bc58dabfb814793847a839aa03367f600255600380546001605060020a03191666010003001e848017905534801561004d57600080fd5b5060405161056238038061056283398101604081905261006c9161023b565b600160a060020a03828116608081905260008054600160a060020a0319908116909217905560018054909116918316919091179055600580547fffffffff0000000000000000000000000000000000000000ffffffffffffffff163368010000000000000000021790556100e76401000000006100ee810204565b505061029e565b60008054906101000a9004600160a060020a0316600160a060020a031663a21a23e46040518163ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004016020604051808303816000875af115801561015d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610181919061026e565b6005805467ffffffffffffffff19166001604060020a039290921691821790556000546040517f7341c10c0000000000000000000000000000000000000000000000000000000081526004810192909252306024830152600160a060020a031690637341c10c90604401600060405180830381600087803b15801561020557600080fd5b505af1158015610219573d6000803e3d6000fd5b50505050565b8051600160a060020a038116811461023657600080fd5b919050565b6000806040838503121561024e57600080fd5b6102578361021f565b91506102656020840161021f565b90509250929050565b60006020828403121561028057600080fd5b81516001604060020a038116811461029757600080fd5b9392505050565b6080516102a36102bf6000396000818160d8015261014001526102a36000f3fe608060405234801561001057600080fd5b506004361061005d577c010000000000000000000000000000000000000000000000000000000060003504631fe543e381146100625780638ac0002114610077578063e89e106a146100a9575b600080fd5b6100756100703660046101a4565b6100c0565b005b60055461008b9067ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020015b60405180910390f35b6100b260045481565b6040519081526020016100a0565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610171576040517f1cf993f400000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602482015260440160405180910390fd5b5050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156101b757600080fd5b8235915060208084013567ffffffffffffffff808211156101d757600080fd5b818601915086601f8301126101eb57600080fd5b8135818111156101fd576101fd610175565b838102604051601f19603f8301168101818110858211171561022157610221610175565b60405291825284820192508381018501918983111561023f57600080fd5b938501935b8285101561025d57843584529385019392850192610244565b809650505050505050925092905056fea2646970667358221220835401b4293b7db2bf00fbe892ac8940cad3a852ce17e3ef8d1a56d34d49eb3764736f6c634300080c0033";

type VRFv2SubscriptionManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFv2SubscriptionManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFv2SubscriptionManager__factory extends ContractFactory {
  constructor(...args: VRFv2SubscriptionManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _vrfCoordinator: string,
    _link_token_contract: string,
    overrides?: Overrides & { from?: string }
  ): Promise<VRFv2SubscriptionManager> {
    return super.deploy(
      _vrfCoordinator,
      _link_token_contract,
      overrides || {}
    ) as Promise<VRFv2SubscriptionManager>;
  }
  override getDeployTransaction(
    _vrfCoordinator: string,
    _link_token_contract: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _vrfCoordinator,
      _link_token_contract,
      overrides || {}
    );
  }
  override attach(address: string): VRFv2SubscriptionManager {
    return super.attach(address) as VRFv2SubscriptionManager;
  }
  override connect(signer: Signer): VRFv2SubscriptionManager__factory {
    return super.connect(signer) as VRFv2SubscriptionManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFv2SubscriptionManagerInterface {
    return new utils.Interface(_abi) as VRFv2SubscriptionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFv2SubscriptionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VRFv2SubscriptionManager;
  }
}