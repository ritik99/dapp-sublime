/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PriceOracle } from "../PriceOracle";

export class PriceOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PriceOracle> {
    return super.deploy(overrides || {}) as Promise<PriceOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PriceOracle {
    return super.attach(address) as PriceOracle;
  }
  connect(signer: Signer): PriceOracle__factory {
    return super.connect(signer) as PriceOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceOracle {
    return new Contract(address, _abi, signerOrProvider) as PriceOracle;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "priceOracle",
        type: "address",
      },
    ],
    name: "ChainlinkFeedUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token2",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "feedId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "UniswapFeedUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "uniswapPriceAveragingPeriod",
        type: "uint32",
      },
    ],
    name: "UniswapPriceAveragingPeriodUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "chainlinkFeedAddresses",
    outputs: [
      {
        internalType: "uint64",
        name: "decimals",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "address",
        name: "token2",
        type: "address",
      },
    ],
    name: "doesFeedExist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "num",
        type: "address",
      },
      {
        internalType: "address",
        name: "den",
        type: "address",
      },
    ],
    name: "getChainlinkLatestPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "num",
        type: "address",
      },
      {
        internalType: "address",
        name: "den",
        type: "address",
      },
    ],
    name: "getLatestPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "num",
        type: "address",
      },
      {
        internalType: "address",
        name: "den",
        type: "address",
      },
    ],
    name: "getUniswapLatestPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "priceOracle",
        type: "address",
      },
    ],
    name: "setChainlinkFeedAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "address",
        name: "token2",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "setUniswapFeedAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_uniswapPriceAveragingPeriod",
        type: "uint32",
      },
    ],
    name: "setUniswapPriceAveragingPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "uniswapPools",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611bc9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806387a37f431161008c578063c4d66de811610066578063c4d66de814610283578063f2fde38b146102a9578063f37eace8146102cf578063fa6fc430146102fd576100cf565b806387a37f43146101fb5780638da5cb5b1461024d5780638f8bb82214610255576100cf565b80630393e8d5146100d45780630626a92b1461010d57806310603c1114610147578063252a62c11461018e578063633defbd146101b1578063715018a6146101f3575b600080fd5b6100f1600480360360208110156100ea57600080fd5b503561032b565b604080516001600160a01b039092168252519081900360200190f35b6101456004803603606081101561012357600080fd5b506001600160a01b038135811691602081013582169160409091013516610346565b005b6101756004803603604081101561015d57600080fd5b506001600160a01b0381358116916020013516610424565b6040805192835260208301919091528051918290030190f35b610145600480360360208110156101a457600080fd5b503563ffffffff166104a6565b6101df600480360360408110156101c757600080fd5b506001600160a01b0381358116916020013516610556565b604080519115158252519081900360200190f35b6101456105f8565b6102216004803603602081101561021157600080fd5b50356001600160a01b03166106a4565b6040805167ffffffffffffffff90931683526001600160a01b0390911660208301528051918290030190f35b6100f16106d2565b6101756004803603604081101561026b57600080fd5b506001600160a01b03813581169160200135166106e2565b6101456004803603602081101561029957600080fd5b50356001600160a01b0316610762565b610145600480360360208110156102bf57600080fd5b50356001600160a01b0316610816565b610175600480360360408110156102e557600080fd5b506001600160a01b0381358116916020013516610919565b6101456004803603604081101561031357600080fd5b506001600160a01b0381358116916020013516610bd2565b6068602052600090815260409020546001600160a01b031681565b61034e610d75565b6001600160a01b031661035f6106d2565b6001600160a01b0316146103a8576040805162461bcd60e51b81526020600482018190526024820152600080516020611b74833981519152604482015290519081900360640190fd5b60006103b48484610d79565b60008181526068602090815260409182902080546001600160a01b0319166001600160a01b03878116918217909255835185815293519495509387821693918916927f2a74ffdf59cac90e9d1f660dffbf82ada64e214ee5aaa96586d4cb00e7bcc947928290030190a450505050565b6000806000806104348686610919565b9092509050801561044957909250905061049f565b61045386866106e2565b9092509050801561046857909250905061049f565b60405162461bcd60e51b8152600401808060200182810382526036815260200180611aef6036913960400191505060405180910390fd5b9250929050565b6104ae610d75565b6001600160a01b03166104bf6106d2565b6001600160a01b031614610508576040805162461bcd60e51b81526020600482018190526024820152600080516020611b74833981519152604482015290519081900360640190fd5b6065805463ffffffff831663ffffffff19909116811790915560408051918252517fce1655e980fdd46c169857872ec226a0882674591ab7a135c66e1126dc8e47d89181900360200190a150565b6001600160a01b038281166000908152606660205260408120549091600160401b90910416158015906105a957506001600160a01b03828116600090815260666020526040902054600160401b90041615155b156105b6575060016105f2565b60006105c28484610d79565b6000818152606860205260409020549091506001600160a01b0316156105ec5760019150506105f2565b60009150505b92915050565b610600610d75565b6001600160a01b03166106116106d2565b6001600160a01b03161461065a576040805162461bcd60e51b81526020600482018190526024820152600080516020611b74833981519152604482015290519081900360640190fd5b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b60666020526000908152604090205467ffffffffffffffff811690600160401b90046001600160a01b031682565b6033546001600160a01b03165b90565b60008060006106f18585610d79565b6000818152606860205260409020549091506001600160a01b03168061071f5760008093509350505061049f565b60655460009061073690839063ffffffff16610e31565b90506000610753826c0c9f2c9cd04674edea40000000898b611131565b98601e98509650505050505050565b600054610100900460ff168061077b575061077b611223565b80610789575060005460ff16155b6107c45760405162461bcd60e51b815260040180806020018281038252602e815260200180611b25602e913960400191505060405180910390fd5b600054610100900460ff161580156107ef576000805460ff1961ff0019909116610100171660011790555b6107f7611234565b61080082610816565b8015610812576000805461ff00191690555b5050565b61081e610d75565b6001600160a01b031661082f6106d2565b6001600160a01b031614610878576040805162461bcd60e51b81526020600482018190526024820152600080516020611b74833981519152604482015290519081900360640190fd5b6001600160a01b0381166108bd5760405162461bcd60e51b8152600401808060200182810382526026815260200180611ac96026913960400191505060405180910390fd5b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b600080610924611a06565b506001600160a01b0380851660009081526066602090815260409182902082518084019093525467ffffffffffffffff81168352600160401b900490921691810191909152610971611a06565b506001600160a01b0380851660009081526066602090815260409182902082518084019093525467ffffffffffffffff81168352600160401b900483168282015283015190911615806109cf575060208101516001600160a01b0316155b156109e25760008093509350505061049f565b60008083602001516001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b158015610a2257600080fd5b505afa158015610a36573d6000803e3d6000fd5b505050506040513d60a0811015610a4c57600080fd5b506020908101519084015160408051633fabe5a360e21b815290519294506001600160a01b039091169163feaf968c9160048082019260a092909190829003018186803b158015610a9c57600080fd5b505afa158015610ab0573d6000803e3d6000fd5b505050506040513d60a0811015610ac657600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050509091929350909150905050809150506000610bc2606760008b6001600160a01b03166001600160a01b0316815260200190815260200160002054600a0a610bbc606760008c6001600160a01b03166001600160a01b0316815260200190815260200160002054600a0a610bb6896000015167ffffffffffffffff16600a0a610bbc88610bbc6c0c9f2c9cd04674edea40000000610bb68e6000015167ffffffffffffffff16600a0a8e6112e690919063ffffffff16565b906112e6565b90611346565b99601e9950975050505050505050565b610bda610d75565b6001600160a01b0316610beb6106d2565b6001600160a01b031614610c34576040805162461bcd60e51b81526020600482018190526024820152600080516020611b74833981519152604482015290519081900360640190fd5b6000816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610c6f57600080fd5b505afa158015610c83573d6000803e3d6000fd5b505050506040513d6020811015610c9957600080fd5b505160408051808201825260ff9092168083526001600160a01b0380861660208581019182528883166000908152606690915293909320935184549351909116600160401b0268010000000000000000600160e01b031967ffffffffffffffff9290921667ffffffffffffffff199094169390931716919091179091559050610d21836113ad565b6001600160a01b0380851660008181526067602052604080822060ff9590951690945592519185169290917f3be680563c528780d5a9cd763a27b4a48ab5f9dc10e4083a2fa55b6fc5ff33e69190a3505050565b3390565b6000816001600160a01b0316836001600160a01b03161015610de357828260405160200180836001600160a01b031660601b8152601401826001600160a01b031660601b8152601401925050506040516020818303038152906040528051906020012090506105f2565b818360405160200180836001600160a01b031660601b8152601401826001600160a01b031660601b8152601401925050506040516020818303038152906040528051906020012090506105f2565b600063ffffffff8216610e70576040805162461bcd60e51b8152602060048201526002602482015261042560f41b604482015290519081900360640190fd5b60408051600280825260608083018452926020830190803683370190505090508281600081518110610e9e57fe5b602002602001019063ffffffff16908163ffffffff1681525050600081600181518110610ec757fe5b63ffffffff90921660209283029190910182015260405163883bdbfd60e01b8152600481018281528351602483015283516060936001600160a01b0389169363883bdbfd9387939092839260440191858201910280838360005b83811015610f39578181015183820152602001610f21565b505050509050019250505060006040518083038186803b158015610f5c57600080fd5b505afa158015610f70573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040908152811015610f9957600080fd5b8101908080516040519392919084640100000000821115610fb957600080fd5b908301906020820185811115610fce57600080fd5b8251866020820283011164010000000082111715610feb57600080fd5b82525081516020918201928201910280838360005b83811015611018578181015183820152602001611000565b505050509050016040526020018051604051939291908464010000000082111561104157600080fd5b90830190602082018581111561105657600080fd5b825186602082028301116401000000008211171561107357600080fd5b82525081516020918201928201910280838360005b838110156110a0578181015183820152602001611088565b505050509050016040525050505090506000816000815181106110bf57fe5b6020026020010151826001815181106110d457fe5b60200260200101510390508463ffffffff168160060b816110f157fe5b05935060008160060b12801561111b57508463ffffffff168160060b8161111457fe5b0760060b15155b1561112857600019909301925b50505092915050565b60008061113d86611486565b90506001600160801b036001600160a01b038216116111ac576001600160a01b038082168002908481169086161061118c57611187600160c01b876001600160801b0316836117b8565b6111a4565b6111a481876001600160801b0316600160c01b6117b8565b92505061121a565b60006111c66001600160a01b03831680600160401b6117b8565b9050836001600160a01b0316856001600160a01b0316106111fe576111f9600160801b876001600160801b0316836117b8565b611216565b61121681876001600160801b0316600160801b6117b8565b9250505b50949350505050565b600061122e30611867565b15905090565b600054610100900460ff168061124d575061124d611223565b8061125b575060005460ff16155b6112965760405162461bcd60e51b815260040180806020018281038252602e815260200180611b25602e913960400191505060405180910390fd5b600054610100900460ff161580156112c1576000805460ff1961ff0019909116610100171660011790555b6112c961186d565b6112d161190d565b80156112e3576000805461ff00191690555b50565b6000826112f5575060006105f2565b8282028284828161130257fe5b041461133f5760405162461bcd60e51b8152600401808060200182810382526021815260200180611b536021913960400191505060405180910390fd5b9392505050565b600080821161139c576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816113a557fe5b049392505050565b60006001600160a01b0382166113c557506012611481565b816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156113fe57600080fd5b505afa92505050801561142357506040513d602081101561141e57600080fd5b505160015b61147e5761142f611a23565b8061143a5750611444565b6000915050611481565b3d80801561146e576040519150601f19603f3d011682016040523d82523d6000602084013e611473565b606091505b506000915050611481565b90505b919050565b60008060008360020b1261149d578260020b6114a5565b8260020b6000035b9050620d89e88111156114e3576040805162461bcd60e51b81526020600482015260016024820152601560fa1b604482015290519081900360640190fd5b6000600182166114f757600160801b611509565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561153d576ffff97272373d413259a46990580e213a0260801c5b600482161561155c576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b600882161561157b576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b601082161561159a576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156115b9576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156115d8576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156115f7576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611617576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615611637576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615611657576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615611677576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615611697576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156116b7576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156116d7576f70d869a156d2a1b890bb3df62baf32f70260801c5b6180008216156116f7576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611718576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615611738576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615611757576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615611774576b048a170391f7dc42444e8fa20260801c5b60008460020b131561178f57806000198161178b57fe5b0490505b6401000000008106156117a35760016117a6565b60005b60ff16602082901c0192505050919050565b60008080600019858709868602925082811090839003039050806117ee57600084116117e357600080fd5b50829004905061133f565b8084116117fa57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b3b151590565b600054610100900460ff16806118865750611886611223565b80611894575060005460ff16155b6118cf5760405162461bcd60e51b815260040180806020018281038252602e815260200180611b25602e913960400191505060405180910390fd5b600054610100900460ff161580156112d1576000805460ff1961ff00199091166101001716600117905580156112e3576000805461ff001916905550565b600054610100900460ff16806119265750611926611223565b80611934575060005460ff16155b61196f5760405162461bcd60e51b815260040180806020018281038252602e815260200180611b25602e913960400191505060405180910390fd5b600054610100900460ff1615801561199a576000805460ff1961ff0019909116610100171660011790555b60006119a4610d75565b603380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35080156112e3576000805461ff001916905550565b604080518082019091526000808252602082015290565b60e01c90565b600060443d1015611a33576106df565b600481823e6308c379a0611a478251611a1d565b14611a51576106df565b6040513d600319016004823e80513d67ffffffffffffffff8160248401118184111715611a8157505050506106df565b82840192508251915080821115611a9b57505050506106df565b503d83016020828401011115611ab3575050506106df565b601f01601f191681016020016040529150509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737350726963654f7261636c653a3a6765744c61746573745072696365202d205072696365204665656420646f65736e2774206578697374496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a264697066735822122044698e7fefe7a33f22464181f0a786cef75dd91df36cf9988235bc9a866dd28064736f6c63430007000033";