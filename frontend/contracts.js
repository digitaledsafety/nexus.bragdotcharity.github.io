const CONTRACT_DATA = {
  "contracts": {
    "BatchGrant": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "name": "AddressEmptyCode",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "ERC1967InvalidImplementation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ERC1967NonPayable",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FailedCall",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidInitialization",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotInitializing",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "name": "SafeERC20FailedOperation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "UUPSUnauthorizedCallContext",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            }
          ],
          "name": "UUPSUnsupportedProxiableUUID",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
            }
          ],
          "name": "Initialized",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "UPGRADE_INTERFACE_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "distribute",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "distributeETH",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "distributeETHFromBalance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "distributeFromBalance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "initialAdmin",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proxiableUUID",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "upgradeToAndCall",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x60a060405230608052348015610013575f5ffd5b5061001c610021565b6100d3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100715760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b60805161132f6100f95f395f8181610a6101528181610a8a0152610bcd015261132f5ff3fe6080604052600436106100e7575f3560e01c806352d1902d11610087578063ad3cb1cc11610057578063ad3cb1cc14610249578063c4d66de814610286578063d547741f146102a5578063f8b7fabf146102c4575f5ffd5b806352d1902d146101e45780637402c05a146101f857806391d1485414610217578063a217fddf14610236575f5ffd5b8063248a9ca3116100c2578063248a9ca3146101665780632f2ff15d1461019357806336568abe146101b25780634f1ef286146101d1575f5ffd5b806301ffc9a7146100f257806315270ace14610126578063227a755814610147575f5ffd5b366100ee57005b5f5ffd5b3480156100fd575f5ffd5b5061011161010c366004610f5d565b6102d7565b60405190151581526020015b60405180910390f35b348015610131575f5ffd5b50610145610140366004610fe7565b61030d565b005b348015610152575f5ffd5b50610145610161366004611069565b6103ad565b348015610171575f5ffd5b506101856101803660046110d5565b6104bc565b60405190815260200161011d565b34801561019e575f5ffd5b506101456101ad3660046110ec565b6104dc565b3480156101bd575f5ffd5b506101456101cc3660046110ec565b6104fe565b6101456101df36600461112e565b610536565b3480156101ef575f5ffd5b50610185610555565b348015610203575f5ffd5b50610145610212366004610fe7565b610570565b348015610222575f5ffd5b506101116102313660046110ec565b610610565b348015610241575f5ffd5b506101855f81565b348015610254575f5ffd5b50610279604051806040016040528060058152602001640352e302e360dc1b81525081565b60405161011d91906111f4565b348015610291575f5ffd5b506101456102a0366004611229565b610646565b3480156102b0575f5ffd5b506101456102bf3660046110ec565b610748565b6101456102d2366004611069565b610764565b5f6001600160e01b03198216637965db0b60e01b148061030757506301ffc9a760e01b6001600160e01b03198316145b92915050565b8281146103355760405162461bcd60e51b815260040161032c90611244565b60405180910390fd5b5f5b838110156103a55761039d338686848181106103555761035561126f565b905060200201602081019061036a9190611229565b85858581811061037c5761037c61126f565b90506020020135896001600160a01b03166108f2909392919063ffffffff16565b600101610337565b505050505050565b5f6103b781610928565b8382146103d65760405162461bcd60e51b815260040161032c90611244565b5f5b848110156103a5575f8686838181106103f3576103f361126f565b90506020020160208101906104089190611229565b6001600160a01b03168585848181106104235761042361126f565b905060200201356040515f6040518083038185875af1925050503d805f8114610467576040519150601f19603f3d011682016040523d82523d5f602084013e61046c565b606091505b50509050806104b35760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b604482015260640161032c565b506001016103d8565b5f9081525f5160206112da5f395f51905f52602052604090206001015490565b6104e5826104bc565b6104ee81610928565b6104f88383610935565b50505050565b6001600160a01b03811633146105275760405163334bd91960e11b815260040160405180910390fd5b61053182826109dd565b505050565b61053e610a56565b61054782610afc565b6105518282610b06565b5050565b5f61055e610bc2565b505f5160206112ba5f395f51905f5290565b5f61057a81610928565b8382146105995760405162461bcd60e51b815260040161032c90611244565b5f5b84811015610607576105ff8686838181106105b8576105b861126f565b90506020020160208101906105cd9190611229565b8585848181106105df576105df61126f565b90506020020135896001600160a01b0316610c0b9092919063ffffffff16565b60010161059b565b50505050505050565b5f9182525f5160206112da5f395f51905f52602090815260408084206001600160a01b0393909316845291905290205460ff1690565b5f61064f610c40565b805490915060ff600160401b820416159067ffffffffffffffff165f811580156106765750825b90505f8267ffffffffffffffff1660011480156106925750303b155b9050811580156106a0575080155b156106be5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156106e857845460ff60401b1916600160401b1785555b6106f0610c68565b6106fa5f87610935565b5083156103a557845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b610751826104bc565b61075a81610928565b6104f883836109dd565b8281146107835760405162461bcd60e51b815260040161032c90611244565b5f805b848110156107bc578383828181106107a0576107a061126f565b90506020020135826107b29190611283565b9150600101610786565b5080341461080c5760405162461bcd60e51b815260206004820152601960248201527f496e636f72726563742045544820616d6f756e742073656e7400000000000000604482015260640161032c565b5f5b848110156103a5575f8686838181106108295761082961126f565b905060200201602081019061083e9190611229565b6001600160a01b03168585848181106108595761085961126f565b905060200201356040515f6040518083038185875af1925050503d805f811461089d576040519150601f19603f3d011682016040523d82523d5f602084013e6108a2565b606091505b50509050806108e95760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b604482015260640161032c565b5060010161080e565b610900848484846001610c70565b6104f857604051635274afe760e01b81526001600160a01b038516600482015260240161032c565b6109328133610cdd565b50565b5f5f5160206112da5f395f51905f5261094e8484610610565b6109cd575f848152602082815260408083206001600160a01b03871684529091529020805460ff191660011790556109833390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610307565b5f915050610307565b5092915050565b5f5f5160206112da5f395f51905f526109f68484610610565b156109cd575f848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a46001915050610307565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610adc57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610ad05f5160206112ba5f395f51905f52546001600160a01b031690565b6001600160a01b031614155b15610afa5760405163703e46dd60e11b815260040160405180910390fd5b565b5f61055181610928565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610b60575060408051601f3d908101601f19168201909252610b5d918101906112a2565b60015b610b8857604051634c9c8ce360e01b81526001600160a01b038316600482015260240161032c565b5f5160206112ba5f395f51905f528114610bb857604051632a87526960e21b81526004810182905260240161032c565b6105318383610d16565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610afa5760405163703e46dd60e11b815260040160405180910390fd5b610c188383836001610d6b565b61053157604051635274afe760e01b81526001600160a01b038416600482015260240161032c565b5f807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610307565b610afa610dcd565b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f51148316610ccc578383151615610cc0573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b610ce78282610610565b6105515760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161032c565b610d1f82610df2565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a2805115610d63576105318282610e55565b610551610eee565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316610dc1578383151615610db5573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b610dd5610f0d565b610afa57604051631afcd79f60e31b815260040160405180910390fd5b806001600160a01b03163b5f03610e2757604051634c9c8ce360e01b81526001600160a01b038216600482015260240161032c565b5f5160206112ba5f395f51905f5280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f610e628484610f26565b9050808015610e8357505f3d1180610e8357505f846001600160a01b03163b115b15610e9857610e90610f39565b915050610307565b8015610ec257604051639996b31560e01b81526001600160a01b038516600482015260240161032c565b3d15610ed557610ed0610f52565b6109d6565b60405163d6bda27560e01b815260040160405180910390fd5b3415610afa5760405163b398979f60e01b815260040160405180910390fd5b5f610f16610c40565b54600160401b900460ff16919050565b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b5f60208284031215610f6d575f5ffd5b81356001600160e01b031981168114610f84575f5ffd5b9392505050565b6001600160a01b0381168114610932575f5ffd5b5f5f83601f840112610faf575f5ffd5b50813567ffffffffffffffff811115610fc6575f5ffd5b6020830191508360208260051b8501011115610fe0575f5ffd5b9250929050565b5f5f5f5f5f60608688031215610ffb575f5ffd5b853561100681610f8b565b9450602086013567ffffffffffffffff811115611021575f5ffd5b61102d88828901610f9f565b909550935050604086013567ffffffffffffffff81111561104c575f5ffd5b61105888828901610f9f565b969995985093965092949392505050565b5f5f5f5f6040858703121561107c575f5ffd5b843567ffffffffffffffff811115611092575f5ffd5b61109e87828801610f9f565b909550935050602085013567ffffffffffffffff8111156110bd575f5ffd5b6110c987828801610f9f565b95989497509550505050565b5f602082840312156110e5575f5ffd5b5035919050565b5f5f604083850312156110fd575f5ffd5b82359150602083013561110f81610f8b565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f6040838503121561113f575f5ffd5b823561114a81610f8b565b9150602083013567ffffffffffffffff811115611165575f5ffd5b8301601f81018513611175575f5ffd5b803567ffffffffffffffff81111561118f5761118f61111a565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156111be576111be61111a565b6040528181528282016020018710156111d5575f5ffd5b816020840160208301375f602083830101528093505050509250929050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f60208284031215611239575f5ffd5b8135610f8481610f8b565b6020808252601190820152704d69736d6174636865642061727261797360781b604082015260600190565b634e487b7160e01b5f52603260045260245ffd5b8082018082111561030757634e487b7160e01b5f52601160045260245ffd5b5f602082840312156112b2575f5ffd5b505191905056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800a2646970667358221220927d63c6b2449ad6ce9fdb704b2342f78d1bc49b03b329823aa65f2622179cef64736f6c634300081c0033"
    },
    "BragNFT": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "name": "AddressEmptyCode",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "ERC1967InvalidImplementation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ERC1967NonPayable",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721IncorrectOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721InsufficientApproval",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOperator",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721NonexistentToken",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FailedCall",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidInitialization",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotInitializing",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ReentrancyGuardReentrantCall",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "UUPSUnauthorizedCallContext",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            }
          ],
          "name": "UUPSUnsupportedProxiableUUID",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromTokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_toTokenId",
              "type": "uint256"
            }
          ],
          "name": "BatchMetadataUpdate",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "donor",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "nftTokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "receiptTokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "name": "Donated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
            }
          ],
          "name": "Initialized",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "MetadataUpdate",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "UPGRADE_INTERFACE_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "bragToken",
          "outputs": [
            {
              "internalType": "contract IBragToken",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenURI_",
              "type": "string"
            }
          ],
          "name": "donate",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "media",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "onChain",
              "type": "bool"
            }
          ],
          "name": "donate",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tokenURI_",
              "type": "string"
            }
          ],
          "name": "donateTo",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "media",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "onChain",
              "type": "bool"
            }
          ],
          "name": "donateTo",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_initialOwner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_treasury",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_minimumDonation",
              "type": "uint256"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "maxSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "minimumDonation",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "nftToReceipt",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "onChainMedia",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proxiableUUID",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "receiptContract",
          "outputs": [
            {
              "internalType": "contract IDonationReceipt",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "royaltyFeeNumerator",
          "outputs": [
            {
              "internalType": "uint96",
              "name": "",
              "type": "uint96"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "salePrice",
              "type": "uint256"
            }
          ],
          "name": "royaltyInfo",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_bragToken",
              "type": "address"
            }
          ],
          "name": "setBragToken",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_maxSupply",
              "type": "uint256"
            }
          ],
          "name": "setMaxSupply",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_minimumDonation",
              "type": "uint256"
            }
          ],
          "name": "setMinimumDonation",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_receiptContract",
              "type": "address"
            }
          ],
          "name": "setReceiptContract",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint96",
              "name": "_feeNumerator",
              "type": "uint96"
            }
          ],
          "name": "setRoyaltyFeeNumerator",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_treasury",
              "type": "address"
            }
          ],
          "name": "setTreasury",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "treasury",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "upgradeToAndCall",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x60a060405230608052348015610013575f5ffd5b5060017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055610040610045565b6100f7565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100955760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100f45780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b608051614c1461011d5f395f8181611c2301528181611c4c0152611d8d0152614c145ff3fe608060405260043610610257575f3560e01c806364cb7e9c1161013f578063ad3cb1cc116100b3578063d435b3a311610078578063d435b3a314610750578063d547741f1461076f578063d5abeb011461078e578063da183afb146107a3578063e985e9c5146107ce578063f0f44260146107ed575f5ffd5b8063ad3cb1cc146106b0578063b88d4fde146106e0578063c6317247146106ff578063c87b56dd1461071e578063d3933c1c1461073d575f5ffd5b806391d148541161010457806391d148541461062357806395d89b411461064257806396d8f4f314610656578063a217fddf1461066b578063a22cb4651461067e578063a6719b3a1461069d575f5ffd5b806364cb7e9c146105695780636f8b44b01461058857806370a08231146105a757806381ddcc1f146105c657806383943dc814610604575f5ffd5b8063248a9ca3116101d657806342842e0e1161019b57806342842e0e146104c65780634f1ef286146104e557806352d1902d146104f857806360758c181461050c57806361d027b31461052b5780636352211e1461054a575f5ffd5b8063248a9ca31461040c5780632a55205a1461042b5780632eb9313e146104695780632f2ff15d1461048857806336568abe146104a7575f5ffd5b80631653441c1161021c5780631653441c1461037f5780631794bb3c1461039257806318160ddd146103b157806319bcef6d146103ce57806323b872dd146103ed575f5ffd5b806301ffc9a7146102c157806306fdde03146102f5578063081812fc14610316578063095ea7b31461034d5780630fd973ce1461036c575f5ffd5b366102bd5761026461080c565b6102a5336040518060400160405280600f81526020016e2234b932b1ba103237b730ba34b7b760891b81525060405180602001604052805f8152505f610827565b6102bb60015f516020614bbf5f395f51905f5255565b005b5f5ffd5b3480156102cc575f5ffd5b506102e06102db366004613e6d565b610b4f565b60405190151581526020015b60405180910390f35b348015610300575f5ffd5b50610309610b79565b6040516102ec9190613eb6565b348015610321575f5ffd5b50610335610330366004613ec8565b610c1a565b6040516001600160a01b0390911681526020016102ec565b348015610358575f5ffd5b506102bb610367366004613ef3565b610c2e565b6102bb61037a366004613f5a565b610c3d565b6102bb61038d366004613fda565b610cd4565b34801561039d575f5ffd5b506102bb6103ac366004614044565b610d6a565b3480156103bc575f5ffd5b505f545b6040519081526020016102ec565b3480156103d9575f5ffd5b506102bb6103e8366004614082565b610ef6565b3480156103f8575f5ffd5b506102bb610407366004614044565b610f23565b348015610417575f5ffd5b506103c0610426366004613ec8565b610fa6565b348015610436575f5ffd5b5061044a61044536600461409d565b610fc6565b604080516001600160a01b0390931683526020830191909152016102ec565b348015610474575f5ffd5b506102bb610483366004614082565b611010565b348015610493575f5ffd5b506102bb6104a23660046140bd565b61103d565b3480156104b2575f5ffd5b506102bb6104c13660046140bd565b611059565b3480156104d1575f5ffd5b506102bb6104e0366004614044565b611091565b6102bb6104f33660046141cf565b6110ab565b348015610503575f5ffd5b506103c06110c6565b348015610517575f5ffd5b506102bb61052636600461421b565b6110e1565b348015610536575f5ffd5b50600254610335906001600160a01b031681565b348015610555575f5ffd5b50610335610564366004613ec8565b611168565b348015610574575f5ffd5b50610309610583366004613ec8565b611172565b348015610593575f5ffd5b506102bb6105a2366004613ec8565b611209565b3480156105b2575f5ffd5b506103c06105c1366004614082565b611219565b3480156105d1575f5ffd5b506005546105ec90600160a01b90046001600160601b031681565b6040516001600160601b0390911681526020016102ec565b34801561060f575f5ffd5b50600554610335906001600160a01b031681565b34801561062e575f5ffd5b506102e061063d3660046140bd565b611271565b34801561064d575f5ffd5b506103096112a7565b348015610661575f5ffd5b506103c060035481565b348015610676575f5ffd5b506103c05f81565b348015610689575f5ffd5b506102bb610698366004614255565b6112e5565b6102bb6106ab366004614288565b6112f0565b3480156106bb575f5ffd5b50610309604051806040016040528060058152602001640352e302e360dc1b81525081565b3480156106eb575f5ffd5b506102bb6106fa366004614317565b61138a565b34801561070a575f5ffd5b506102bb610719366004613ec8565b6113a2565b348015610729575f5ffd5b50610309610738366004613ec8565b6113b2565b6102bb61074b36600461437e565b6116e2565b34801561075b575f5ffd5b50600454610335906001600160a01b031681565b34801561077a575f5ffd5b506102bb6107893660046140bd565b61175e565b348015610799575f5ffd5b506103c060015481565b3480156107ae575f5ffd5b506103c06107bd366004613ec8565b60066020525f908152604090205481565b3480156107d9575f5ffd5b506102e06107e83660046143fc565b61177a565b3480156107f8575f5ffd5b506102bb610807366004614082565b6117c6565b610814611849565b60025f516020614bbf5f395f51905f5255565b6004546001600160a01b03166108845760405162461bcd60e51b815260206004820152601860248201527f5265636569707420636f6e7472616374206e6f7420736574000000000000000060448201526064015b60405180910390fd5b6003543410156108cf5760405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b604482015260640161087b565b6001545f54106109165760405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b604482015260640161087b565b5f805481806109248361443c565b919050559050811561094d575f81815260076020526040902061094784826144d0565b5061095e565b82511561095e5761095e818461187a565b600480546040516334ff261960e21b81525f926001600160a01b039092169163d3fc98649161099391339134918b910161458a565b6020604051808303815f875af11580156109af573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109d391906145b9565b5f83815260066020526040902081905590506109ef86836118ec565b6005546001600160a01b031615610a5f576005546040516340c10f1960e01b81523360048201523460248201526001600160a01b03909116906340c10f19906044015f604051808303815f87803b158015610a48575f5ffd5b505af1158015610a5a573d5f5f3e3d5ffd5b505050505b6002546040515f916001600160a01b03169034908381818185875af1925050503d805f8114610aa9576040519150601f19603f3d011682016040523d82523d5f602084013e610aae565b606091505b5050905080610aff5760405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c65640000000000604482015260640161087b565b336001600160a01b03167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858a604051610b3e94939291906145d0565b60405180910390a250505050505050565b5f6001600160e01b0319821663152a902d60e11b1480610b735750610b7382611905565b92915050565b5f516020614b5f5f395f51905f528054606091908190610b9890614454565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc490614454565b8015610c0f5780601f10610be657610100808354040283529160200191610c0f565b820191905f5260205f20905b815481529060010190602001808311610bf257829003601f168201915b505050505091505090565b5f610c2482611929565b50610b7382611960565b610c39828233611999565b5050565b610c4561080c565b610cb78585858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284375f9201829052509250610827915050565b610ccd60015f516020614bbf5f395f51905f5255565b5050505050565b610cdc61080c565b610d4e3385858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284375f9201829052509250610827915050565b610d6460015f516020614bbf5f395f51905f5255565b50505050565b5f610d736119a6565b805490915060ff600160401b82041615906001600160401b03165f81158015610d995750825b90505f826001600160401b03166001148015610db45750303b155b905081158015610dc2575080155b15610de05760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610e0a57845460ff60401b1916600160401b1785555b610e5260405180604001604052806007815260200166109c9859d3919560ca1b8152506040518060400160405280600781526020016610949051d3919560ca1b8152506119ce565b610e5a6119e0565b610e626119e0565b610e6c5f896119e8565b50600280546001600160a01b0319166001600160a01b03898116919091179091556003879055606460015560058054909116607d60a21b1790558315610eec57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050505050565b5f610f0081611a90565b50600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038216610f4c57604051633250574960e11b81525f600482015260240161087b565b5f610f58838333611a9d565b9050836001600160a01b0316816001600160a01b031614610d64576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161087b565b5f9081525f516020614b9f5f395f51905f52602052604090206001015490565b6005545f908190819061271090610fed90600160a01b90046001600160601b0316866145fe565b610ff79190614615565b6002546001600160a01b031693509150505b9250929050565b5f61101a81611a90565b50600580546001600160a01b0319166001600160a01b0392909216919091179055565b61104682610fa6565b61104f81611a90565b610d6483836119e8565b6001600160a01b03811633146110825760405163334bd91960e11b815260040160405180910390fd5b61108c8282611b9f565b505050565b61108c83838360405180602001604052805f81525061138a565b6110b3611c18565b6110bc82611cbc565b610c398282611cc6565b5f6110cf611d82565b505f516020614b7f5f395f51905f5290565b5f6110eb81611a90565b612710826001600160601b0316111561113f5760405162461bcd60e51b81526020600482015260166024820152754665652063616e6e6f7420657863656564203130302560501b604482015260640161087b565b50600580546001600160601b03909216600160a01b026001600160a01b03909216919091179055565b5f610b7382611929565b60076020525f90815260409020805461118a90614454565b80601f01602080910402602001604051908101604052809291908181526020018280546111b690614454565b80156112015780601f106111d857610100808354040283529160200191611201565b820191905f5260205f20905b8154815290600101906020018083116111e457829003601f168201915b505050505081565b5f61121381611a90565b50600155565b5f5f516020614b5f5f395f51905f526001600160a01b038316611251576040516322718ad960e21b81525f600482015260240161087b565b6001600160a01b039092165f908152600390920160205250604090205490565b5f9182525f516020614b9f5f395f51905f52602090815260408084206001600160a01b0393909316845291905290205460ff1690565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930180546060915f516020614b5f5f395f51905f5291610b9890614454565b610c39338383611dcb565b6112f861080c565b61136c8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284375f92019190915250879250610827915050565b61138260015f516020614bbf5f395f51905f5255565b505050505050565b611395848484610f23565b610d643385858585611ea3565b5f6113ac81611a90565b50600355565b60606113bd82611929565b505f8281526006602090815260408083205481519283019091529181526004546001600160a01b03161561145d576004805460405163b63e6ac360e01b81529182018490526001600160a01b03169063b63e6ac3906024015f60405180830381865afa92505050801561145157506040513d5f823e601f3d908101601f1916820160405261144e9190810190614634565b60015b1561145d576060015190505b5f84815260076020526040812080546060928392909161147c90614454565b80601f01602080910402602001604051908101604052809291908181526020018280546114a890614454565b80156114f35780601f106114ca576101008083540402835291602001916114f3565b820191905f5260205f20905b8154815290600101906020018083116114d657829003601f168201915b505050505090505f815111156115545761150c81611fc2565b1561154c5780915061152661152188866129e8565b612a54565b604051602001611536919061471a565b60405160208183030381529060405292506115e5565b8092506115e5565b5f61155e88612a60565b8051909150156115b45761157181611fc2565b156115ac5780925061158661152189876129e8565b604051602001611596919061471a565b60405160208183030381529060405293506115e3565b8093506115e3565b6115c161152189876129e8565b6040516020016115d1919061471a565b60405160208183030381529060405293505b505b60408051602081019091525f81528251156116255761160383612ae1565b604051602001611613919061474b565b60405160208183030381529060405290505b5f6116b26116328a612eca565b5f88511161164e5760405180602001604052805f815250611677565b61165788612ae1565b6040516020016116679190614774565b6040516020818303038152906040525b61168088612ae1565b8561168a8b612ae1565b60405160200161169e95949392919061478a565b604051602081830303815290604052612a54565b9050806040516020016116c5919061488b565b604051602081830303815290604052975050505050505050919050565b6116ea61080c565b610cb73386868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284375f92019190915250879250610827915050565b61176782610fa6565b61177081611a90565b610d648383611b9f565b6001600160a01b039182165f9081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793056020908152604080832093909416825291909152205460ff1690565b5f6117d081611a90565b6001600160a01b0382166118265760405162461bcd60e51b815260206004820152601860248201527f496e76616c696420747265617375727920616464726573730000000000000000604482015260640161087b565b50600280546001600160a01b0319166001600160a01b0392909216919091179055565b5f516020614bbf5f395f51905f525460020361187857604051633ee5aeb560e01b815260040160405180910390fd5b565b5f8281527f0542a41881ee128a365a727b282c86fa859579490b9bb45aab8503648c8e7900602081905260409091206118b383826144d0565b506040518381527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a1505050565b610c39828260405180602001604052805f815250612f59565b5f6001600160e01b03198216637965db0b60e01b1480610b735750610b7382612f70565b5f5f61193483612f94565b90506001600160a01b038116610b7357604051637e27328960e01b81526004810184905260240161087b565b5f9081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930460205260409020546001600160a01b031690565b61108c8383836001612fcd565b5f807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610b73565b6119d66130e0565b610c398282613105565b6118786130e0565b5f5f516020614b9f5f395f51905f52611a018484611271565b611a80575f848152602082815260408083206001600160a01b03871684529091529020805460ff19166001179055611a363390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610b73565b5f915050610b73565b5092915050565b611a9a8133613135565b50565b5f5f516020614b5f5f395f51905f5281611ab685612f94565b90506001600160a01b03841615611ad257611ad281858761316e565b6001600160a01b03811615611b0e57611aed5f865f5f612fcd565b6001600160a01b0381165f908152600383016020526040902080545f190190555b6001600160a01b03861615611b3e576001600160a01b0386165f9081526003830160205260409020805460010190555b5f85815260028301602052604080822080546001600160a01b0319166001600160a01b038a811691821790925591518893918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a495945050505050565b5f5f516020614b9f5f395f51905f52611bb88484611271565b15611a80575f848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a46001915050610b73565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480611c9e57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611c925f516020614b7f5f395f51905f52546001600160a01b031690565b6001600160a01b031614155b156118785760405163703e46dd60e11b815260040160405180910390fd5b5f610c3981611a90565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611d20575060408051601f3d908101601f19168201909252611d1d918101906145b9565b60015b611d4857604051634c9c8ce360e01b81526001600160a01b038316600482015260240161087b565b5f516020614b7f5f395f51905f528114611d7857604051632a87526960e21b81526004810182905260240161087b565b61108c83836131d2565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146118785760405163703e46dd60e11b815260040160405180910390fd5b5f516020614b5f5f395f51905f526001600160a01b038416611e025760405163a9fbf51f60e01b81525f600482015260240161087b565b6001600160a01b038316611e3457604051630b61174360e31b81526001600160a01b038416600482015260240161087b565b6001600160a01b038481165f818152600584016020908152604080832094881680845294825291829020805460ff191687151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a350505050565b6001600160a01b0383163b15610ccd57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290611ee59088908890879087906004016148bc565b6020604051808303815f875af1925050508015611f1f575060408051601f3d908101601f19168201909252611f1c918101906148ee565b60015b611f86573d808015611f4c576040519150601f19603f3d011682016040523d82523d5f602084013e611f51565b606091505b5080515f03611f7e57604051633250574960e11b81526001600160a01b038516600482015260240161087b565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b1461138257604051633250574960e11b81526001600160a01b038516600482015260240161087b565b80515f9082906004811015611fda57505f9392505050565b600b81106124fa57815f81518110611ff457611ff4614909565b6020910101516001600160f81b031916601960fa1b14801561203b57508160018151811061202457612024614909565b6020910101516001600160f81b031916606160f81b145b801561206c57508160028151811061205557612055614909565b6020910101516001600160f81b031916601d60fa1b145b801561209d57508160038151811061208657612086614909565b6020910101516001600160f81b031916606160f81b145b80156120ce5750816004815181106120b7576120b7614909565b6020910101516001600160f81b031916601d60f91b145b156124fa57816005815181106120e6576120e6614909565b6020910101516001600160f81b031916606160f81b14801561212d57508160068151811061211657612116614909565b6020910101516001600160f81b031916607560f81b145b801561215e57508160078151811061214757612147614909565b6020910101516001600160f81b031916601960fa1b145b801561218f57508160088151811061217857612178614909565b6020910101516001600160f81b031916606960f81b145b80156121c05750816009815181106121a9576121a9614909565b6020910101516001600160f81b031916606f60f81b145b80156121f1575081600a815181106121da576121da614909565b6020910101516001600160f81b031916602f60f81b145b15612200575060019392505050565b8160058151811061221357612213614909565b6020910101516001600160f81b031916603b60f91b14801561225a57508160068151811061224357612243614909565b6020910101516001600160f81b031916606960f81b145b801561228b57508160078151811061227457612274614909565b6020910101516001600160f81b031916601960fa1b145b80156122bc5750816008815181106122a5576122a5614909565b6020910101516001600160f81b031916606560f81b145b80156122ed5750816009815181106122d6576122d6614909565b6020910101516001600160f81b031916606f60f81b145b801561231e575081600a8151811061230757612307614909565b6020910101516001600160f81b031916602f60f81b145b1561232d575060019392505050565b600e811015801561236357508160058151811061234c5761234c614909565b6020910101516001600160f81b031916606960f81b145b801561239457508160068151811061237d5761237d614909565b6020910101516001600160f81b031916606d60f81b145b80156123c55750816007815181106123ae576123ae614909565b6020910101516001600160f81b031916606160f81b145b80156123f65750816008815181106123df576123df614909565b6020910101516001600160f81b031916606760f81b145b801561242757508160098151811061241057612410614909565b6020910101516001600160f81b031916606560f81b145b8015612458575081600a8151811061244157612441614909565b6020910101516001600160f81b031916602f60f81b145b8015612489575081600b8151811061247257612472614909565b6020910101516001600160f81b031916606760f81b145b80156124ba575081600c815181106124a3576124a3614909565b6020910101516001600160f81b031916606960f81b145b80156124eb575081600d815181106124d4576124d4614909565b6020910101516001600160f81b031916603360f91b145b156124fa575060019392505050565b8161250660048361491d565b8151811061251657612516614909565b01602001516001600160f81b031916601760f91b036128df575f6125638361253f60038561491d565b8151811061254f5761254f614909565b01602001516001600160f81b031916613227565b90505f6125758461253f60028661491d565b90505f6125878561253f60018761491d565b9050606d60f81b6001600160f81b031984161480156125b35750600760fc1b6001600160f81b03198316145b80156125cc5750603360f81b6001600160f81b03198216145b156125de575060019695505050505050565b607760f81b6001600160f81b031984161480156126085750606160f81b6001600160f81b03198316145b80156126215750603b60f91b6001600160f81b03198216145b15612633575060019695505050505050565b606f60f81b6001600160f81b0319841614801561265d5750606760f81b6001600160f81b03198316145b80156126765750606760f81b6001600160f81b03198216145b15612688575060019695505050505050565b606d60f81b6001600160f81b031984161480156126b25750600d60fa1b6001600160f81b03198316145b80156126cb5750606160f81b6001600160f81b03198216145b156126dd575060019695505050505050565b606160f81b6001600160f81b031984161480156127075750606160f81b6001600160f81b03198316145b80156127205750606360f81b6001600160f81b03198216145b15612732575060019695505050505050565b606d60f81b6001600160f81b0319841614801561275c5750600760fc1b6001600160f81b03198316145b80156127755750600d60fa1b6001600160f81b03198216145b15612787575060019695505050505050565b606d60f81b6001600160f81b031984161480156127b15750606f60f81b6001600160f81b03198316145b80156127ca5750603b60f91b6001600160f81b03198216145b156127dc575060019695505050505050565b606f60f81b6001600160f81b031984161480156128065750606760f81b6001600160f81b03198316145b801561281f5750603b60f91b6001600160f81b03198216145b15612831575060019695505050505050565b606d60f81b6001600160f81b0319841614801561285b5750600d60fa1b6001600160f81b03198316145b80156128745750603b60f91b6001600160f81b03198216145b15612886575060019695505050505050565b606760f81b6001600160f81b031984161480156128b05750606960f81b6001600160f81b03198316145b80156128c95750603360f91b6001600160f81b03198216145b156128db575060019695505050505050565b5050505b6005811015801561291e5750816128f760058361491d565b8151811061290757612907614909565b6020910101516001600160f81b031916601760f91b145b156129df575f6129338361253f60048561491d565b90505f6129458461253f60038661491d565b90505f6129578561253f60028761491d565b90505f6129698661253f60018861491d565b9050607760f81b6001600160f81b031985161480156129955750606560f81b6001600160f81b03198416145b80156129ae5750603160f91b6001600160f81b03198316145b80156129c75750606d60f81b6001600160f81b03198216145b156129da57506001979650505050505050565b505050505b505f9392505050565b60605f5f835111612a20576129fc84612eca565b604051602001612a0c9190614930565b604051602081830303815290604052612a29565b612a2983613263565b905080604051602001612a3c919061494d565b60405160208183030381529060405291505092915050565b6060610b73825f61384f565b6060612a6b82611929565b505f612a8160408051602081019091525f815290565b90505f612a8d846139ce565b905081515f03612a9e579392505050565b805115612ad0578181604051602001612ab8929190614b1e565b60405160208183030381529060405292505050919050565b612ad984613a91565b949350505050565b805160609082905f805b82811015612b9957838181518110612b0557612b05614909565b6020910101516001600160f81b031916601160f91b1480612b4a5750838181518110612b3357612b33614909565b6020910101516001600160f81b031916601760fa1b145b15612b615781612b598161443c565b925050612b91565b6020848281518110612b7557612b75614909565b016020015160f81c1015612b9157612b8e600583614b32565b91505b600101612aeb565b50805f03612baa5750929392505050565b5f612bb58284614b32565b6001600160401b03811115612bcc57612bcc6140eb565b6040519080825280601f01601f191660200182016040528015612bf6576020820181803683370190505b5090505f805b84811015612ebe575f868281518110612c1757612c17614909565b016020015160f81c90506022811480612c3357508060ff16605c145b15612cad57601760fa1b8484612c488161443c565b955081518110612c5a57612c5a614909565b60200101906001600160f81b03191690815f1a9053508060f81b848480612c809061443c565b955081518110612c9257612c92614909565b60200101906001600160f81b03191690815f1a905350612eb5565b60208160ff161015612e7c57601760fa1b8484612cc98161443c565b955081518110612cdb57612cdb614909565b60200101906001600160f81b03191690815f1a905350607560f81b8484612d018161443c565b955081518110612d1357612d13614909565b60200101906001600160f81b03191690815f1a905350600360fc1b8484612d398161443c565b955081518110612d4b57612d4b614909565b60200101906001600160f81b03191690815f1a905350600360fc1b8484612d718161443c565b955081518110612d8357612d83614909565b60200101906001600160f81b03191690815f1a9053506040805180820190915260108082526f181899199a1a9b1b9c1cb0b131b232b360811b60208301528190600f600485901c16908110612dda57612dda614909565b01602001516001600160f81b0319168585612df48161443c565b965081518110612e0657612e06614909565b60200101906001600160f81b03191690815f1a9053508082600f1660ff1681518110612e3457612e34614909565b01602001516001600160f81b0319168585612e4e8161443c565b965081518110612e6057612e60614909565b60200101906001600160f81b03191690815f1a90535050612eb5565b8060f81b848480612e8c9061443c565b955081518110612e9e57612e9e614909565b60200101906001600160f81b03191690815f1a9053505b50600101612bfc565b50909695505050505050565b60605f612ed683613b02565b60010190505f816001600160401b03811115612ef457612ef46140eb565b6040519080825280601f01601f191660200182016040528015612f1e576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084612f2857509392505050565b612f638383613bd9565b61108c335f858585611ea3565b5f6001600160e01b03198216632483248360e11b1480610b735750610b7382613c3a565b5f9081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930260205260409020546001600160a01b031690565b5f516020614b5f5f395f51905f528180612fef57506001600160a01b03831615155b156130b0575f612ffe85611929565b90506001600160a01b0384161580159061302a5750836001600160a01b0316816001600160a01b031614155b801561303d575061303b818561177a565b155b156130665760405163a9fbf51f60e01b81526001600160a01b038516600482015260240161087b565b82156130ae5784866001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5f93845260040160205250506040902080546001600160a01b0319166001600160a01b0392909216919091179055565b6130e8613c89565b61187857604051631afcd79f60e31b815260040160405180910390fd5b61310d6130e0565b5f516020614b5f5f395f51905f528061312684826144d0565b5060018101610d6483826144d0565b61313f8282611271565b610c395760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161087b565b613179838383613ca2565b61108c576001600160a01b0383166131a757604051637e27328960e01b81526004810182905260240161087b565b60405163177e802f60e01b81526001600160a01b03831660048201526024810182905260440161087b565b6131db82613d06565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a280511561321f5761108c8282613d69565b610c39613e02565b5f604160f883901c108015906132425750605a60f883901c11155b1561325f5761325660f883901c6020614b45565b60f81b92915050565b5090565b805160609082905f805b828110156133955783818151811061328757613287614909565b01602001516001600160f81b031916601360f91b036132b2576132ab600483614b32565b915061338d565b8381815181106132c4576132c4614909565b01602001516001600160f81b031916600f60fa1b036132e8576132ab600383614b32565b8381815181106132fa576132fa614909565b01602001516001600160f81b031916601f60f91b0361331e576132ab600383614b32565b83818151811061333057613330614909565b01602001516001600160f81b031916601160f91b03613354576132ab600583614b32565b83818151811061336657613366614909565b01602001516001600160f81b031916602760f81b0361338d5761338a600583614b32565b91505b60010161326d565b50805f036133a65750929392505050565b5f6133b18284614b32565b6001600160401b038111156133c8576133c86140eb565b6040519080825280601f01601f1916602001820160405280156133f2576020820181803683370190505b5090505f805b84811015612ebe575f86828151811061341357613413614909565b01602001516001600160f81b0319169050601360f91b81900361354d57601360f91b84846134408161443c565b95508151811061345257613452614909565b60200101906001600160f81b03191690815f1a905350606160f81b84846134788161443c565b95508151811061348a5761348a614909565b60200101906001600160f81b03191690815f1a905350606d60f81b84846134b08161443c565b9550815181106134c2576134c2614909565b60200101906001600160f81b03191690815f1a905350600760fc1b84846134e88161443c565b9550815181106134fa576134fa614909565b60200101906001600160f81b03191690815f1a905350603b60f81b84846135208161443c565b95508151811061353257613532614909565b60200101906001600160f81b03191690815f1a905350613846565b6001600160f81b03198116600f60fa1b036135e257601360f91b84846135728161443c565b95508151811061358457613584614909565b60200101906001600160f81b03191690815f1a905350601b60fa1b84846135aa8161443c565b9550815181106135bc576135bc614909565b60200101906001600160f81b03191690815f1a905350601d60fa1b84846134e88161443c565b6001600160f81b03198116601f60f91b0361363f57601360f91b84846136078161443c565b95508151811061361957613619614909565b60200101906001600160f81b03191690815f1a905350606760f81b84846135aa8161443c565b6001600160f81b03198116601160f91b0361370c57601360f91b84846136648161443c565b95508151811061367657613676614909565b60200101906001600160f81b03191690815f1a905350607160f81b848461369c8161443c565b9550815181106136ae576136ae614909565b60200101906001600160f81b03191690815f1a905350607560f81b84846136d48161443c565b9550815181106136e6576136e6614909565b60200101906001600160f81b03191690815f1a905350606f60f81b84846135aa8161443c565b6001600160f81b03198116602760f81b0361381157601360f91b84846137318161443c565b95508151811061374357613743614909565b60200101906001600160f81b03191690815f1a905350606160f81b84846137698161443c565b95508151811061377b5761377b614909565b60200101906001600160f81b03191690815f1a905350600760fc1b84846137a18161443c565b9550815181106137b3576137b3614909565b60200101906001600160f81b03191690815f1a905350606f60f81b84846137d98161443c565b9550815181106137eb576137eb614909565b60200101906001600160f81b03191690815f1a905350607360f81b84846134e88161443c565b80848461381d8161443c565b95508151811061382f5761382f614909565b60200101906001600160f81b03191690815f1a9053505b506001016133f8565b606082515f0361386d575060408051602081019091525f8152610b73565b5f8261389d576003845160026138839190614b32565b61388d9190614615565b6138989060046145fe565b6138c2565b6003845160046138ad91906145fe565b6138b8906002614b32565b6138c29190614615565b905060405191507f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f5261067083027f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f18603f526020820181810185865187016020810180515f82525b82841015613980576003840193508351603f8160121c16518753600187019650603f81600c1c16518753600187019650603f8160061c16518753600187019650603f81165187535060018601955061392d565b9052508590506139c1576003865106600181146139a457600281146139b7576139bf565b603d6001840353603d60028403536139bf565b603d60018403535b505b9183525060405292915050565b5f8181527f0542a41881ee128a365a727b282c86fa859579490b9bb45aab8503648c8e79006020819052604090912080546060929190613a0d90614454565b80601f0160208091040260200160405190810160405280929190818152602001828054613a3990614454565b8015613a845780601f10613a5b57610100808354040283529160200191613a84565b820191905f5260205f20905b815481529060010190602001808311613a6757829003601f168201915b5050505050915050919050565b6060613a9c82611929565b505f613ab260408051602081019091525f815290565b90505f815111613ad05760405180602001604052805f815250613afb565b80613ada84612eca565b604051602001613aeb929190614b1e565b6040516020818303038152906040525b9392505050565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310613b405772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310613b6c576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310613b8a57662386f26fc10000830492506010015b6305f5e1008310613ba2576305f5e100830492506008015b6127108310613bb657612710830492506004015b60648310613bc8576064830492506002015b600a8310610b735760010192915050565b6001600160a01b038216613c0257604051633250574960e11b81525f600482015260240161087b565b5f613c0e83835f611a9d565b90506001600160a01b0381161561108c576040516339e3563760e11b81525f600482015260240161087b565b5f6001600160e01b031982166380ac58cd60e01b1480613c6a57506001600160e01b03198216635b5e139f60e01b145b80610b7357506301ffc9a760e01b6001600160e01b0319831614610b73565b5f613c926119a6565b54600160401b900460ff16919050565b5f6001600160a01b03831615801590612ad95750826001600160a01b0316846001600160a01b03161480613cdb5750613cdb848461177a565b80612ad95750826001600160a01b0316613cf483611960565b6001600160a01b031614949350505050565b806001600160a01b03163b5f03613d3b57604051634c9c8ce360e01b81526001600160a01b038216600482015260240161087b565b5f516020614b7f5f395f51905f5280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f613d768484613e21565b9050808015613d9757505f3d1180613d9757505f846001600160a01b03163b115b15613dac57613da4613e34565b915050610b73565b8015613dd657604051639996b31560e01b81526001600160a01b038516600482015260240161087b565b3d15613de957613de4613e4d565b611a89565b60405163d6bda27560e01b815260040160405180910390fd5b34156118785760405163b398979f60e01b815260040160405180910390fd5b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b6001600160e01b031981168114611a9a575f5ffd5b5f60208284031215613e7d575f5ffd5b8135613afb81613e58565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f613afb6020830184613e88565b5f60208284031215613ed8575f5ffd5b5035919050565b6001600160a01b0381168114611a9a575f5ffd5b5f5f60408385031215613f04575f5ffd5b8235613f0f81613edf565b946020939093013593505050565b5f5f83601f840112613f2d575f5ffd5b5081356001600160401b03811115613f43575f5ffd5b602083019150836020828501011115611009575f5ffd5b5f5f5f5f5f60608688031215613f6e575f5ffd5b8535613f7981613edf565b945060208601356001600160401b03811115613f93575f5ffd5b613f9f88828901613f1d565b90955093505060408601356001600160401b03811115613fbd575f5ffd5b613fc988828901613f1d565b969995985093965092949392505050565b5f5f5f5f60408587031215613fed575f5ffd5b84356001600160401b03811115614002575f5ffd5b61400e87828801613f1d565b90955093505060208501356001600160401b0381111561402c575f5ffd5b61403887828801613f1d565b95989497509550505050565b5f5f5f60608486031215614056575f5ffd5b833561406181613edf565b9250602084013561407181613edf565b929592945050506040919091013590565b5f60208284031215614092575f5ffd5b8135613afb81613edf565b5f5f604083850312156140ae575f5ffd5b50508035926020909101359150565b5f5f604083850312156140ce575f5ffd5b8235915060208301356140e081613edf565b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b0381118282101715614121576141216140eb565b60405290565b604051601f8201601f191681016001600160401b038111828210171561414f5761414f6140eb565b604052919050565b5f6001600160401b0382111561416f5761416f6140eb565b50601f01601f191660200190565b5f82601f83011261418c575f5ffd5b813561419f61419a82614157565b614127565b8181528460208386010111156141b3575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f604083850312156141e0575f5ffd5b82356141eb81613edf565b915060208301356001600160401b03811115614205575f5ffd5b6142118582860161417d565b9150509250929050565b5f6020828403121561422b575f5ffd5b81356001600160601b0381168114613afb575f5ffd5b80358015158114614250575f5ffd5b919050565b5f5f60408385031215614266575f5ffd5b823561427181613edf565b915061427f60208401614241565b90509250929050565b5f5f5f5f5f5f6080878903121561429d575f5ffd5b86356142a881613edf565b955060208701356001600160401b038111156142c2575f5ffd5b6142ce89828a01613f1d565b90965094505060408701356001600160401b038111156142ec575f5ffd5b6142f889828a01613f1d565b909450925061430b905060608801614241565b90509295509295509295565b5f5f5f5f6080858703121561432a575f5ffd5b843561433581613edf565b9350602085013561434581613edf565b92506040850135915060608501356001600160401b03811115614366575f5ffd5b6143728782880161417d565b91505092959194509250565b5f5f5f5f5f60608688031215614392575f5ffd5b85356001600160401b038111156143a7575f5ffd5b6143b388828901613f1d565b90965094505060208601356001600160401b038111156143d1575f5ffd5b6143dd88828901613f1d565b90945092506143f0905060408701614241565b90509295509295909350565b5f5f6040838503121561440d575f5ffd5b823561441881613edf565b915060208301356140e081613edf565b634e487b7160e01b5f52601160045260245ffd5b5f6001820161444d5761444d614428565b5060010190565b600181811c9082168061446857607f821691505b60208210810361448657634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561108c57805f5260205f20601f840160051c810160208510156144b15750805b601f840160051c820191505b81811015610ccd575f81556001016144bd565b81516001600160401b038111156144e9576144e96140eb565b6144fd816144f78454614454565b8461448c565b6020601f82116001811461452f575f83156145185750848201515b5f19600385901b1c1916600184901b178455610ccd565b5f84815260208120601f198516915b8281101561455e578785015182556020948501946001909201910161453e565b508482101561457b57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b60018060a01b0384168152826020820152606060408201525f6145b06060830184613e88565b95945050505050565b5f602082840312156145c9575f5ffd5b5051919050565b848152836020820152826040820152608060608201525f6145f46080830184613e88565b9695505050505050565b8082028115828204841417610b7357610b73614428565b5f8261462f57634e487b7160e01b5f52601260045260245ffd5b500490565b5f60208284031215614644575f5ffd5b81516001600160401b03811115614659575f5ffd5b82016080818503121561466a575f5ffd5b6146726140ff565b815161467d81613edf565b8152602082810151908201526040808301519082015260608201516001600160401b038111156146ab575f5ffd5b80830192505084601f8301126146bf575f5ffd5b81516146cd61419a82614157565b8181528660208386010111156146e1575f5ffd5b8160208501602083015e5f918101602001919091526060820152949350505050565b5f81518060208401855e5f93019283525090919050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c00000000000081525f613afb601a830184614703565b741116101130b734b6b0ba34b7b72fbab936111d101160591b81525f613afb6015830184614703565b6101d160f51b81525f613afb6002830184614703565b727b226e616d65223a2022427261674e4654202360681b81525f6147b16013830188614703565b7f222c20226465736372697074696f6e223a2022427261672e436861726974792081526b111bdb985d1a5bdb8813919560a21b60208201526147f6602c820188614703565b6c1116101134b6b0b3b2911d101160991b8152905061482161481b600d830188614703565b86614703565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a815275101126b2b9b9b0b3b2911610113b30b63ab2911d101160511b602082015290506148726036820185614703565b63227d5d7d60e01b815260040198975050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081525f613afb601d830184614703565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906145f490830184613e88565b5f602082840312156148fe575f5ffd5b8151613afb81613e58565b634e487b7160e01b5f52603260045260245ffd5b81810381811115610b7357610b73614428565b68427261674e4654202360b81b81525f613afb6009830184614703565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323081527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d223020302033353020333530604082015261111f60f11b60608201527f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e7460628201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060828201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60a282015261329f60f11b60c28201527f3c726563742077696474683d223130302522206865696768743d22313030252260c482015271103334b6361e91119b199b1b33189110179f60711b60e48201527f3c7465787420783d223530252220793d223530252220636c6173733d2262617360f682019081527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465610116830152723c3a16b0b731b437b91e9136b4b2323632911f60691b6101368301525f9061014983016145b0614b058287614703565b6c1e17ba32bc3a1f1e17b9bb339f60991b8152600d0190565b5f612ad9614b2c8386614703565b84614703565b80820180821115610b7357610b73614428565b60ff8181168382160190811115610b7357610b7361442856fe80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079300360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b6268009b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220e11aa1ea3eacdb09f5ff714946d955f4c9db103109a31884344f7a32c9b182d364736f6c634300081c0033"
    },
    "BragToken": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "name": "AddressEmptyCode",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "CheckpointUnorderedInsertion",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ECDSAInvalidSignature",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "name": "ECDSAInvalidSignatureLength",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "ECDSAInvalidSignatureS",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "ERC1967InvalidImplementation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ERC1967NonPayable",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "increasedSupply",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cap",
              "type": "uint256"
            }
          ],
          "name": "ERC20ExceededSafeSupply",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "allowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "name": "ERC20InsufficientAllowance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "name": "ERC20InsufficientBalance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidSpender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "ERC2612ExpiredSignature",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "signer",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC2612InvalidSigner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "timepoint",
              "type": "uint256"
            },
            {
              "internalType": "uint48",
              "name": "clock",
              "type": "uint48"
            }
          ],
          "name": "ERC5805FutureLookup",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ERC6372InconsistentClock",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FailedCall",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "currentNonce",
              "type": "uint256"
            }
          ],
          "name": "InvalidAccountNonce",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidInitialization",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotInitializing",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "bits",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "SafeCastOverflowedUintDowncast",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "UUPSUnauthorizedCallContext",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            }
          ],
          "name": "UUPSUnsupportedProxiableUUID",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            }
          ],
          "name": "VotesExpiredSignature",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "delegator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "fromDelegate",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "toDelegate",
              "type": "address"
            }
          ],
          "name": "DelegateChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "delegate",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "previousVotes",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newVotes",
              "type": "uint256"
            }
          ],
          "name": "DelegateVotesChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [],
          "name": "EIP712DomainChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
            }
          ],
          "name": "Initialized",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "CLOCK_MODE",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MINTER_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "UPGRADE_INTERFACE_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "burn",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "burnFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint32",
              "name": "pos",
              "type": "uint32"
            }
          ],
          "name": "checkpoints",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint48",
                  "name": "_key",
                  "type": "uint48"
                },
                {
                  "internalType": "uint208",
                  "name": "_value",
                  "type": "uint208"
                }
              ],
              "internalType": "struct Checkpoints.Checkpoint208",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "clock",
          "outputs": [
            {
              "internalType": "uint48",
              "name": "",
              "type": "uint48"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "delegatee",
              "type": "address"
            }
          ],
          "name": "delegate",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "delegatee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "delegateBySig",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "delegates",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "eip712Domain",
          "outputs": [
            {
              "internalType": "bytes1",
              "name": "fields",
              "type": "bytes1"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "version",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "verifyingContract",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "uint256[]",
              "name": "extensions",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "timepoint",
              "type": "uint256"
            }
          ],
          "name": "getPastTotalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "timepoint",
              "type": "uint256"
            }
          ],
          "name": "getPastVotes",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "getVotes",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "initialOwner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "initialSupply",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxSupply",
              "type": "uint256"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "maxSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "numCheckpoints",
          "outputs": [
            {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "permit",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proxiableUUID",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "upgradeToAndCall",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        }
      ],
      "bytecode": "0x60a060405230608052348015610013575f5ffd5b5061001c610021565b6100d3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100715760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b608051612e2e6100f95f395f8181611486015281816114af01526115f20152612e2e5ff3fe608060405260043610610228575f3560e01c806370a0823111610129578063a217fddf116100a8578063d53913931161006d578063d53913931461068b578063d547741f146106be578063d5abeb01146106dd578063dd62ed3e146106f1578063f1127ed814610710575f5ffd5b8063a217fddf146105eb578063a9059cbb146105fe578063ad3cb1cc1461061d578063c3cda5201461064d578063d505accf1461066c575f5ffd5b80638e539e8c116100ee5780638e539e8c1461054f57806391d148541461056e57806391ddadf41461058d57806395d89b41146105b85780639ab24eb0146105cc575f5ffd5b806370a08231146104ac57806379cc6790146104cb5780637a1ac61e146104ea5780637ecebe001461050957806384b0196e14610528575f5ffd5b806336568abe116101b55780634f1ef2861161017a5780634f1ef286146103fb57806352d1902d1461040e578063587cde1e146104225780635c19a95c146104595780636fcfff4514610478575f5ffd5b806336568abe1461036b5780633a46b1a81461038a57806340c10f19146103a957806342966c68146103c85780634bf5d7e9146103e7575f5ffd5b806323b872dd116101fb57806323b872dd146102dd578063248a9ca3146102fc5780632f2ff15d1461031b578063313ce5671461033c5780633644e51514610357575f5ffd5b806301ffc9a71461022c57806306fdde0314610260578063095ea7b31461028157806318160ddd146102a0575b5f5ffd5b348015610237575f5ffd5b5061024b61024636600461276b565b61075b565b60405190151581526020015b60405180910390f35b34801561026b575f5ffd5b50610274610791565b60405161025791906127c0565b34801561028c575f5ffd5b5061024b61029b3660046127ed565b610836565b3480156102ab575f5ffd5b507f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace02545b604051908152602001610257565b3480156102e8575f5ffd5b5061024b6102f7366004612815565b61084d565b348015610307575f5ffd5b506102cf61031636600461284f565b610870565b348015610326575f5ffd5b5061033a610335366004612866565b610890565b005b348015610347575f5ffd5b5060405160128152602001610257565b348015610362575f5ffd5b506102cf6108b2565b348015610376575f5ffd5b5061033a610385366004612866565b6108c0565b348015610395575f5ffd5b506102cf6103a43660046127ed565b6108f8565b3480156103b4575f5ffd5b5061033a6103c33660046127ed565b610943565b3480156103d3575f5ffd5b5061033a6103e236600461284f565b6109f3565b3480156103f2575f5ffd5b50610274610a00565b61033a6104093660046128a4565b610a78565b348015610419575f5ffd5b506102cf610a97565b34801561042d575f5ffd5b5061044161043c366004612968565b610ab2565b6040516001600160a01b039091168152602001610257565b348015610464575f5ffd5b5061033a610473366004612968565b610adb565b348015610483575f5ffd5b50610497610492366004612968565b610ae6565b60405163ffffffff9091168152602001610257565b3480156104b7575f5ffd5b506102cf6104c6366004612968565b610af0565b3480156104d6575f5ffd5b5061033a6104e53660046127ed565b610b20565b3480156104f5575f5ffd5b5061033a610504366004612981565b610b35565b348015610514575f5ffd5b506102cf610523366004612968565b610d58565b348015610533575f5ffd5b5061053c610d62565b60405161025797969594939291906129b1565b34801561055a575f5ffd5b506102cf61056936600461284f565b610da4565b348015610579575f5ffd5b5061024b610588366004612866565b610dd9565b348015610598575f5ffd5b506105a1610e0f565b60405165ffffffffffff9091168152602001610257565b3480156105c3575f5ffd5b50610274610e18565b3480156105d7575f5ffd5b506102cf6105e6366004612968565b610e56565b3480156105f6575f5ffd5b506102cf5f81565b348015610609575f5ffd5b5061024b6106183660046127ed565b610ea4565b348015610628575f5ffd5b50610274604051806040016040528060058152602001640352e302e360dc1b81525081565b348015610658575f5ffd5b5061033a610667366004612a57565b610eb1565b348015610677575f5ffd5b5061033a610686366004612aab565b610f6d565b348015610696575f5ffd5b506102cf7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b3480156106c9575f5ffd5b5061033a6106d8366004612866565b611086565b3480156106e8575f5ffd5b506102cf5f5481565b3480156106fc575f5ffd5b506102cf61070b366004612b11565b6110a2565b34801561071b575f5ffd5b5061072f61072a366004612b39565b6110eb565b60408051825165ffffffffffff1681526020928301516001600160d01b03169281019290925201610257565b5f6001600160e01b03198216637965db0b60e01b148061078b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60605f5f516020612d995f395f51905f525b90508060030180546107b490612b76565b80601f01602080910402602001604051908101604052809291908181526020018280546107e090612b76565b801561082b5780601f106108025761010080835404028352916020019161082b565b820191905f5260205f20905b81548152906001019060200180831161080e57829003601f168201915b505050505091505090565b5f3361084381858561110f565b5060019392505050565b5f3361085a85828561111c565b61086585858561117a565b506001949350505050565b5f9081525f516020612dd95f395f51905f52602052604090206001015490565b61089982610870565b6108a2816111d7565b6108ac83836111e1565b50505050565b5f6108bb611289565b905090565b6001600160a01b03811633146108e95760405163334bd91960e11b815260040160405180910390fd5b6108f38282611292565b505050565b5f5f516020612d795f395f51905f526109326109138461130b565b6001600160a01b0386165f908152600184016020526040902090611359565b6001600160d01b0316949350505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661096d816111d7565b5f54826109987f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025490565b6109a29190612bc2565b11156109e95760405162461bcd60e51b815260206004820152601160248201527045786365656473206d6178537570706c7960781b60448201526064015b60405180910390fd5b6108f38383611409565b6109fd338261143d565b50565b6060610a0a611471565b65ffffffffffff16610a1a610e0f565b65ffffffffffff1614610a40576040516301bfc1c560e61b815260040160405180910390fd5b5060408051808201909152601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015290565b610a8061147b565b610a8982611521565b610a93828261152b565b5050565b5f610aa06115e7565b505f516020612db95f395f51905f5290565b6001600160a01b039081165f9081525f516020612d795f395f51905f5260205260409020541690565b33610a938183611630565b5f61078b826116b7565b5f805f516020612d995f395f51905f525b6001600160a01b039093165f9081526020939093525050604090205490565b610b2b82338361111c565b610a93828261143d565b5f610b3e611706565b805490915060ff600160401b820416159067ffffffffffffffff165f81158015610b655750825b90505f8267ffffffffffffffff166001148015610b815750303b155b905081158015610b8f575080155b15610bad5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610bd757845460ff60401b1916600160401b1785555b610c1f6040518060400160405280600a815260200169213930b3902a37b5b2b760b11b815250604051806040016040528060048152602001634252414760e01b81525061172e565b610c27611740565b610c526040518060400160405280600a815260200169213930b3902a37b5b2b760b11b815250611748565b610c5a611740565b610c62611740565b86861015610cbe5760405162461bcd60e51b8152602060048201526024808201527f4d617820737570706c79206d757374206265203e3d20696e697469616c20737560448201526370706c7960e01b60648201526084016109e0565b5f868155610ccc90896111e1565b50610cf77f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6896111e1565b508615610d0857610d088888611409565b8315610d4e57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050505050565b5f61078b82611773565b5f6060805f5f5f6060610d7361177d565b610d7b6117ce565b604080515f80825260208201909252600f60f81b9b939a50919850469750309650945092509050565b5f5f516020612d795f395f51905f52610dc9610dbf8461130b565b6002830190611359565b6001600160d01b03169392505050565b5f9182525f516020612dd95f395f51905f52602090815260408084206001600160a01b0393909316845291905290205460ff1690565b5f6108bb611471565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0480546060915f516020612d995f395f51905f52916107b490612b76565b6001600160a01b0381165f9081527fe8b26c30fad74198956032a3533d903385d56dd795af560196f9c78d4af40d01602052604081205f516020612d795f395f51905f5290610dc9906117f7565b5f3361084381858561117a565b83421115610ed557604051632341d78760e11b8152600481018590526024016109e0565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590525f90610f4e90610f469060a0016040516020818303038152906040528051906020012061182e565b85858561185a565b9050610f5a8187611886565b610f648188611630565b50505050505050565b83421115610f915760405163313c898160e11b8152600481018590526024016109e0565b5f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610fbf8c6118c4565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090505f6110198261182e565b90505f6110288287878761185a565b9050896001600160a01b0316816001600160a01b03161461106f576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016109e0565b61107a8a8a8a61110f565b50505050505050505050565b61108f82610870565b611098816111d7565b6108ac8383611292565b6001600160a01b039182165f9081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace016020908152604080832093909416825291909152205490565b604080518082019091525f80825260208201526111088383611905565b9392505050565b6108f3838383600161196e565b5f61112784846110a2565b90505f198110156108ac578181101561116c57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016109e0565b6108ac84848484035f61196e565b6001600160a01b0383166111a357604051634b637e8f60e11b81525f60048201526024016109e0565b6001600160a01b0382166111cc5760405163ec442f0560e01b81525f60048201526024016109e0565b6108f3838383611a52565b6109fd8133611a5d565b5f5f516020612dd95f395f51905f526111fa8484610dd9565b611279575f848152602082815260408083206001600160a01b03871684529091529020805460ff1916600117905561122f3390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600191505061078b565b5f91505061078b565b5092915050565b5f6108bb611a96565b5f5f516020612dd95f395f51905f526112ab8484610dd9565b15611279575f848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4600191505061078b565b5f5f611315610e0f565b90508065ffffffffffff16831061135057604051637669fc0f60e11b81526004810184905265ffffffffffff821660248201526044016109e0565b61110883611b09565b81545f90818160058111156113b5575f61137284611b3f565b61137c9085612bd5565b5f8881526020902090915081015465ffffffffffff90811690871610156113a5578091506113b3565b6113b0816001612bc2565b92505b505b5f6113c287878585611c92565b905080156113fc576113e6876113d9600184612bd5565b5f91825260209091200190565b54600160301b90046001600160d01b03166113fe565b5f5b979650505050505050565b6001600160a01b0382166114325760405163ec442f0560e01b81525f60048201526024016109e0565b610a935f8383611a52565b6001600160a01b03821661146657604051634b637e8f60e11b81525f60048201526024016109e0565b610a93825f83611a52565b5f6108bb43611b09565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148061150157507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166114f55f516020612db95f395f51905f52546001600160a01b031690565b6001600160a01b031614155b1561151f5760405163703e46dd60e11b815260040160405180910390fd5b565b5f610a93816111d7565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611585575060408051601f3d908101601f1916820190925261158291810190612be8565b60015b6115ad57604051634c9c8ce360e01b81526001600160a01b03831660048201526024016109e0565b5f516020612db95f395f51905f5281146115dd57604051632a87526960e21b8152600481018290526024016109e0565b6108f38383611ce8565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461151f5760405163703e46dd60e11b815260040160405180910390fd5b5f516020612d795f395f51905f525f61164884610ab2565b6001600160a01b038581165f8181526020869052604080822080546001600160a01b031916898616908117909155905194955093928516927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46108ac81846116b287611d3d565b611d47565b6001600160a01b0381165f9081527fe8b26c30fad74198956032a3533d903385d56dd795af560196f9c78d4af40d0160205260408120545f516020612d795f395f51905f529061110890611ebd565b5f807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0061078b565b611736611eed565b610a938282611f12565b61151f611eed565b611750611eed565b6109fd81604051806040016040528060018152602001603160f81b815250611f62565b5f61078b82611fc5565b7fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10280546060917fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d100916107b490612b76565b60605f7fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1006107a3565b80545f90801561182657611810836113d9600184612bd5565b54600160301b90046001600160d01b0316611108565b5f9392505050565b5f61078b61183a611289565b8360405161190160f01b8152600281019290925260228201526042902090565b5f5f5f5f61186a88888888611fed565b92509250925061187a82826120b5565b50909695505050505050565b5f611890836118c4565b90508082146108f3576040516301d4b62360e61b81526001600160a01b0384166004820152602481018290526044016109e0565b6001600160a01b03165f9081527f5ab42ced628888259c08ac98db1eb0cf702fc1501344311d8b100cd1bfe4bb006020526040902080546001810190915590565b6040805180820182525f80825260208083018290526001600160a01b03861682527fe8b26c30fad74198956032a3533d903385d56dd795af560196f9c78d4af40d019052919091205f516020612d795f395f51905f5290611966908461216d565b949350505050565b5f516020612d995f395f51905f526001600160a01b0385166119a55760405163e602df0560e01b81525f60048201526024016109e0565b6001600160a01b0384166119ce57604051634a1406b160e11b81525f60048201526024016109e0565b6001600160a01b038086165f90815260018301602090815260408083209388168352929052208390558115611a4b57836001600160a01b0316856001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92585604051611a4291815260200190565b60405180910390a35b5050505050565b6108f38383836121da565b611a678282610dd9565b610a935760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016109e0565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611ac061225f565b611ac8612274565b60408051602081019490945283019190915260608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b5f65ffffffffffff821115611b3b576040516306dfcc6560e41b815260306004820152602481018390526044016109e0565b5090565b5f60018211611b4c575090565b816001600160801b8210611b655760809190911c9060401b5b600160401b8210611b7b5760409190911c9060201b5b6401000000008210611b925760209190911c9060101b5b620100008210611ba75760109190911c9060081b5b6101008210611bbb5760089190911c9060041b5b60108210611bce5760049190911c9060021b5b60048210611bda5760011b5b600302600190811c90818581611bf257611bf2612bff565b048201901c90506001818581611c0a57611c0a612bff565b048201901c90506001818581611c2257611c22612bff565b048201901c90506001818581611c3a57611c3a612bff565b048201901c90506001818581611c5257611c52612bff565b048201901c90506001818581611c6a57611c6a612bff565b048201901c9050611c89818581611c8357611c83612bff565b04821190565b90039392505050565b5f5b81831015611ce0575f85815260209020838316600285851804019081015465ffffffffffff86811691161115611ccc57809250611cda565b611cd7816001612bc2565b93505b50611c94565b509392505050565b611cf18261227d565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a2805115611d35576108f382826122e0565b610a93612379565b5f61078b82610af0565b5f516020612d795f395f51905f526001600160a01b0384811690841614801590611d7057505f82115b156108ac576001600160a01b03841615611e19576001600160a01b0384165f90815260018201602052604081208190611db490612398611daf876123a3565b6123d6565b6001600160d01b031691506001600160d01b03169150856001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611e0e929190918252602082015260400190565b60405180910390a250505b6001600160a01b038316156108ac576001600160a01b0383165f90815260018201602052604081208190611e539061240e611daf876123a3565b6001600160d01b031691506001600160d01b03169150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611ead929190918252602082015260400190565b60405180910390a2505050505050565b5f63ffffffff821115611b3b576040516306dfcc6560e41b815260206004820152602481018390526044016109e0565b611ef5612419565b61151f57604051631afcd79f60e31b815260040160405180910390fd5b611f1a611eed565b5f516020612d995f395f51905f527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace03611f538482612c57565b50600481016108ac8382612c57565b611f6a611eed565b7fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1007fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d102611fb68482612c57565b50600381016108ac8382612c57565b5f807f5ab42ced628888259c08ac98db1eb0cf702fc1501344311d8b100cd1bfe4bb00610b01565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561202657505f915060039050826120ab565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015612077573d5f5f3e3d5ffd5b5050604051601f1901519150506001600160a01b0381166120a257505f9250600191508290506120ab565b92505f91508190505b9450945094915050565b5f8260038111156120c8576120c8612d12565b036120d1575050565b60018260038111156120e5576120e5612d12565b036121035760405163f645eedf60e01b815260040160405180910390fd5b600282600381111561211757612117612d12565b036121385760405163fce698f760e01b8152600481018290526024016109e0565b600382600381111561214c5761214c612d12565b03610a93576040516335e2f38360e21b8152600481018290526024016109e0565b604080518082019091525f8082526020820152825f018263ffffffff168154811061219a5761219a612d26565b5f9182526020918290206040805180820190915291015465ffffffffffff81168252600160301b90046001600160d01b0316918101919091529392505050565b6121e5838383612432565b6001600160a01b038316612254575f61221c7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025490565b90506001600160d01b038082111561225157604051630e58ae9360e11b815260048101839052602481018290526044016109e0565b50505b6108f383838361256b565b5f61226861177d565b80519060200120905090565b5f6122686117ce565b806001600160a01b03163b5f036122b257604051634c9c8ce360e01b81526001600160a01b03821660048201526024016109e0565b5f516020612db95f395f51905f5280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f6122ed84846125dc565b905080801561230e57505f3d118061230e57505f846001600160a01b03163b115b156123235761231b6125ef565b91505061078b565b801561234d57604051639996b31560e01b81526001600160a01b03851660048201526024016109e0565b3d156123605761235b612608565b611282565b60405163d6bda27560e01b815260040160405180910390fd5b341561151f5760405163b398979f60e01b815260040160405180910390fd5b5f6111088284612d3a565b5f6001600160d01b03821115611b3b576040516306dfcc6560e41b815260d06004820152602481018390526044016109e0565b5f5f6124016123e3610e0f565b6123f96123ef886117f7565b868863ffffffff16565b879190612613565b915091505b935093915050565b5f6111088284612d59565b5f612422611706565b54600160401b900460ff16919050565b5f516020612d995f395f51905f526001600160a01b03841661246c5781816002015f8282546124619190612bc2565b909155506124dc9050565b6001600160a01b0384165f90815260208290526040902054828110156124be5760405163391434e360e21b81526001600160a01b038616600482015260248101829052604481018490526064016109e0565b6001600160a01b0385165f9081526020839052604090209083900390555b6001600160a01b0383166124fa576002810180548390039055612518565b6001600160a01b0383165f9081526020829052604090208054830190555b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161255d91815260200190565b60405180910390a350505050565b5f516020612d795f395f51905f526001600160a01b03841661259d5761259a8160020161240e611daf856123a3565b50505b6001600160a01b0383166125c1576125be81600201612398611daf856123a3565b50505b6108ac6125cd85610ab2565b6125d685610ab2565b84611d47565b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b5f8061240185858582545f9081908015612711575f612637876113d9600185612bd5565b805490915065ffffffffffff80821691600160301b90046001600160d01b031690881682111561267a57604051632520601d60e01b815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff16036126b357825465ffffffffffff16600160301b6001600160d01b03891602178355612703565b6040805180820190915265ffffffffffff808a1682526001600160d01b03808a1660208085019182528d54600181018f555f8f81529190912094519151909216600160301b029216919091179101555b945085935061240692505050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a815291822095519251909316600160301b029190931617920191909155905081612406565b5f6020828403121561277b575f5ffd5b81356001600160e01b031981168114611108575f5ffd5b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6111086020830184612792565b80356001600160a01b03811681146127e8575f5ffd5b919050565b5f5f604083850312156127fe575f5ffd5b612807836127d2565b946020939093013593505050565b5f5f5f60608486031215612827575f5ffd5b612830846127d2565b925061283e602085016127d2565b929592945050506040919091013590565b5f6020828403121561285f575f5ffd5b5035919050565b5f5f60408385031215612877575f5ffd5b82359150612887602084016127d2565b90509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f604083850312156128b5575f5ffd5b6128be836127d2565b9150602083013567ffffffffffffffff8111156128d9575f5ffd5b8301601f810185136128e9575f5ffd5b803567ffffffffffffffff81111561290357612903612890565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561293257612932612890565b604052818152828201602001871015612949575f5ffd5b816020840160208301375f602083830101528093505050509250929050565b5f60208284031215612978575f5ffd5b611108826127d2565b5f5f5f60608486031215612993575f5ffd5b61299c846127d2565b95602085013595506040909401359392505050565b60ff60f81b8816815260e060208201525f6129cf60e0830189612792565b82810360408401526129e18189612792565b606084018890526001600160a01b038716608085015260a0840186905283810360c0850152845180825260208087019350909101905f5b81811015612a36578351835260209384019390920191600101612a18565b50909b9a5050505050505050505050565b803560ff811681146127e8575f5ffd5b5f5f5f5f5f5f60c08789031215612a6c575f5ffd5b612a75876127d2565b95506020870135945060408701359350612a9160608801612a47565b9598949750929560808101359460a0909101359350915050565b5f5f5f5f5f5f5f60e0888a031215612ac1575f5ffd5b612aca886127d2565b9650612ad8602089016127d2565b95506040880135945060608801359350612af460808901612a47565b9699959850939692959460a0840135945060c09093013592915050565b5f5f60408385031215612b22575f5ffd5b612b2b836127d2565b9150612887602084016127d2565b5f5f60408385031215612b4a575f5ffd5b612b53836127d2565b9150602083013563ffffffff81168114612b6b575f5ffd5b809150509250929050565b600181811c90821680612b8a57607f821691505b602082108103612ba857634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561078b5761078b612bae565b8181038181111561078b5761078b612bae565b5f60208284031215612bf8575f5ffd5b5051919050565b634e487b7160e01b5f52601260045260245ffd5b601f8211156108f357805f5260205f20601f840160051c81016020851015612c385750805b601f840160051c820191505b81811015611a4b575f8155600101612c44565b815167ffffffffffffffff811115612c7157612c71612890565b612c8581612c7f8454612b76565b84612c13565b6020601f821160018114612cb7575f8315612ca05750848201515b5f19600385901b1c1916600184901b178455611a4b565b5f84815260208120601f198516915b82811015612ce65787850151825560209485019460019092019101612cc6565b5084821015612d0357868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b6001600160d01b03828116828216039081111561078b5761078b612bae565b6001600160d01b03818116838216019081111561078b5761078b612bae56fee8b26c30fad74198956032a3533d903385d56dd795af560196f9c78d4af40d0052c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800a2646970667358221220fda9bd0ccdd757866f5c2718891237bfdb998b19e8e192c999a01dfc5cc6cdbf64736f6c634300081c0033"
    },
    "DonationReceipt": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "name": "AddressEmptyCode",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "ERC1967InvalidImplementation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ERC1967NonPayable",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721IncorrectOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721InsufficientApproval",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOperator",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721NonexistentToken",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FailedCall",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidInitialization",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotInitializing",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "UUPSUnauthorizedCallContext",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            }
          ],
          "name": "UUPSUnsupportedProxiableUUID",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
            }
          ],
          "name": "Initialized",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "donor",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "ReceiptMinted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MINTER_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "UPGRADE_INTERFACE_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getReceipt",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "donor",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "message",
                  "type": "string"
                }
              ],
              "internalType": "struct IDonationReceipt.Receipt",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_initialOwner",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "name": "mint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proxiableUUID",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "receipts",
          "outputs": [
            {
              "internalType": "address",
              "name": "donor",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "minter",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            }
          ],
          "name": "setMinter",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "upgradeToAndCall",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        }
      ],
      "bytecode": "0x60a060405230608052348015610013575f5ffd5b5061001c610021565b6100d3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100715760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516122a56100f95f395f8181611080015281816110a901526111ec01526122a55ff3fe6080604052600436106101af575f3560e01c806391d14854116100e7578063c4d66de811610087578063d3fc986411610062578063d3fc9864146104da578063d5391393146104f9578063d547741f14610519578063e985e9c514610538575f5ffd5b8063c4d66de81461047d578063c87b56dd1461049c578063cf456ae7146104bb575f5ffd5b8063a22cb465116100c2578063a22cb465146103e3578063ad3cb1cc14610402578063b63e6ac314610432578063b88d4fde1461045e575f5ffd5b806391d148541461039d57806395d89b41146103bc578063a217fddf146103d0575f5ffd5b80632f2ff15d116101525780634f1ef2861161012d5780634f1ef2861461033857806352d1902d1461034b5780636352211e1461035f57806370a082311461037e575f5ffd5b80632f2ff15d146102db57806336568abe146102fa57806342842e0e14610319575f5ffd5b8063095ea7b31161018d578063095ea7b31461023f5780630f7ee1ec1461026057806323b872dd1461028f578063248a9ca3146102ae575f5ffd5b806301ffc9a7146101b357806306fdde03146101e7578063081812fc14610208575b5f5ffd5b3480156101be575f5ffd5b506101d26101cd366004611c2b565b610557565b60405190151581526020015b60405180910390f35b3480156101f2575f5ffd5b506101fb610567565b6040516101de9190611c74565b348015610213575f5ffd5b50610227610222366004611c86565b610608565b6040516001600160a01b0390911681526020016101de565b34801561024a575f5ffd5b5061025e610259366004611cb8565b61061c565b005b34801561026b575f5ffd5b5061027f61027a366004611c86565b61062b565b6040516101de9493929190611ce0565b34801561029a575f5ffd5b5061025e6102a9366004611d16565b6106e6565b3480156102b9575f5ffd5b506102cd6102c8366004611c86565b610774565b6040519081526020016101de565b3480156102e6575f5ffd5b5061025e6102f5366004611d50565b610794565b348015610305575f5ffd5b5061025e610314366004611d50565b6107b0565b348015610324575f5ffd5b5061025e610333366004611d16565b6107e8565b61025e610346366004611e19565b610802565b348015610356575f5ffd5b506102cd61081d565b34801561036a575f5ffd5b50610227610379366004611c86565b610838565b348015610389575f5ffd5b506102cd610398366004611e64565b610842565b3480156103a8575f5ffd5b506101d26103b7366004611d50565b61089a565b3480156103c7575f5ffd5b506101fb6108d0565b3480156103db575f5ffd5b506102cd5f81565b3480156103ee575f5ffd5b5061025e6103fd366004611e7d565b61090e565b34801561040d575f5ffd5b506101fb604051806040016040528060058152602001640352e302e360dc1b81525081565b34801561043d575f5ffd5b5061045161044c366004611c86565b610919565b6040516101de9190611eb6565b348015610469575f5ffd5b5061025e610478366004611ef6565b610a30565b348015610488575f5ffd5b5061025e610497366004611e64565b610a48565b3480156104a7575f5ffd5b506101fb6104b6366004611c86565b610b9f565b3480156104c6575f5ffd5b5061025e6104d5366004611e7d565b610c10565b3480156104e5575f5ffd5b506102cd6104f4366004611f5a565b610c4e565b348015610504575f5ffd5b506102cd5f5160206122305f395f51905f5281565b348015610524575f5ffd5b5061025e610533366004611d50565b610d8a565b348015610543575f5ffd5b506101d2610552366004611fdd565b610da6565b5f61056182610df2565b92915050565b5f5160206121f05f395f51905f52805460609190819061058690612005565b80601f01602080910402602001604051908101604052809291908181526020018280546105b290612005565b80156105fd5780601f106105d4576101008083540402835291602001916105fd565b820191905f5260205f20905b8154815290600101906020018083116105e057829003601f168201915b505050505091505090565b5f61061282610e16565b5061056182610e4d565b610627828233610e86565b5050565b600160208190525f918252604090912080549181015460028201546003830180546001600160a01b03909516949293919261066590612005565b80601f016020809104026020016040519081016040528092919081815260200182805461069190612005565b80156106dc5780601f106106b3576101008083540402835291602001916106dc565b820191905f5260205f20905b8154815290600101906020018083116106bf57829003601f168201915b5050505050905084565b6001600160a01b03821661071457604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f610720838333610e93565b9050836001600160a01b0316816001600160a01b03161461076e576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161070b565b50505050565b5f9081525f5160206122505f395f51905f52602052604090206001015490565b61079d82610774565b6107a681610f47565b61076e8383610f54565b6001600160a01b03811633146107d95760405163334bd91960e11b815260040160405180910390fd5b6107e38282610ffc565b505050565b6107e383838360405180602001604052805f815250610a30565b61080a611075565b6108138261111b565b6106278282611125565b5f6108266111e1565b505f5160206122105f395f51905f5290565b5f61056182610e16565b5f5f5160206121f05f395f51905f526001600160a01b03831661087a576040516322718ad960e21b81525f600482015260240161070b565b6001600160a01b039092165f908152600390920160205250604090205490565b5f9182525f5160206122505f395f51905f52602090815260408084206001600160a01b0393909316845291905290205460ff1690565b7f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930180546060915f5160206121f05f395f51905f529161058690612005565b61062733838361122a565b61094a60405180608001604052805f6001600160a01b031681526020015f81526020015f8152602001606081525090565b61095382610e16565b505f82815260016020818152604092839020835160808101855281546001600160a01b0316815292810154918301919091526002810154928201929092526003820180549192916060840191906109a990612005565b80601f01602080910402602001604051908101604052809291908181526020018280546109d590612005565b8015610a205780601f106109f757610100808354040283529160200191610a20565b820191905f5260205f20905b815481529060010190602001808311610a0357829003601f168201915b5050505050815250509050919050565b610a3b8484846106e6565b61076e3385858585611302565b5f610a51611428565b805490915060ff600160401b820416159067ffffffffffffffff165f81158015610a785750825b90505f8267ffffffffffffffff166001148015610a945750303b155b905081158015610aa2575080155b15610ac05760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610aea57845460ff60401b1916600160401b1785555b610b3e6040518060400160405280600f81526020016e111bdb985d1a5bdb949958d95a5c1d608a1b8152506040518060400160405280600b81526020016a10949051d49150d152541560aa1b815250611450565b610b46611462565b610b505f87610f54565b508315610b9757845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b6060610baa82610e16565b505f610bc060408051602081019091525f815290565b90505f815111610bde5760405180602001604052805f815250610c09565b80610be88461146a565b604051602001610bf9929190612054565b6040516020818303038152906040525b9392505050565b5f610c1a81610f47565b8115610c375761076e5f5160206122305f395f51905f5284610f54565b61076e5f5160206122305f395f51905f5284610ffc565b5f5f5160206122305f395f51905f52610c6681610f47565b5f80548180610c7483612068565b9190505590506040518060800160405280886001600160a01b0316815260200187815260200142815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505083815260016020818152604092839020855181546001600160a01b0319166001600160a01b03909116178155908501519181019190915590830151600282015560608301519091506003820190610d2e90826120d0565b50905050610d3c87826114fa565b866001600160a01b0316817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea588604051610d7891815260200190565b60405180910390a39695505050505050565b610d9382610774565b610d9c81610f47565b61076e8383610ffc565b6001600160a01b039182165f9081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab00793056020908152604080832093909416825291909152205460ff1690565b5f6001600160e01b03198216637965db0b60e01b1480610561575061056182611513565b5f5f610e2183611562565b90506001600160a01b03811661056157604051637e27328960e01b81526004810184905260240161070b565b5f9081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930460205260409020546001600160a01b031690565b6107e3838383600161159b565b5f5f610e9e84611562565b90506001600160a01b03811615801590610ec057506001600160a01b03851615155b15610f335760405162461bcd60e51b815260206004820152603d60248201527f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f60448201527f756e6420616e642063616e6e6f74206265207472616e73666572726564000000606482015260840161070b565b610f3e8585856116ae565b95945050505050565b610f5181336117b0565b50565b5f5f5160206122505f395f51905f52610f6d848461089a565b610fec575f848152602082815260408083206001600160a01b03871684529091529020805460ff19166001179055610fa23390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610561565b5f915050610561565b5092915050565b5f5f5160206122505f395f51905f52611015848461089a565b15610fec575f848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a46001915050610561565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806110fb57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166110ef5f5160206122105f395f51905f52546001600160a01b031690565b6001600160a01b031614155b156111195760405163703e46dd60e11b815260040160405180910390fd5b565b5f61062781610f47565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561117f575060408051601f3d908101601f1916820190925261117c9181019061218b565b60015b6111a757604051634c9c8ce360e01b81526001600160a01b038316600482015260240161070b565b5f5160206122105f395f51905f5281146111d757604051632a87526960e21b81526004810182905260240161070b565b6107e383836117e9565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146111195760405163703e46dd60e11b815260040160405180910390fd5b5f5160206121f05f395f51905f526001600160a01b0384166112615760405163a9fbf51f60e01b81525f600482015260240161070b565b6001600160a01b03831661129357604051630b61174360e31b81526001600160a01b038416600482015260240161070b565b6001600160a01b038481165f818152600584016020908152604080832094881680845294825291829020805460ff191687151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a350505050565b6001600160a01b0383163b1561142157604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906113449088908890879087906004016121a2565b6020604051808303815f875af192505050801561137e575060408051601f3d908101601f1916820190925261137b918101906121d4565b60015b6113e5573d8080156113ab576040519150601f19603f3d011682016040523d82523d5f602084013e6113b0565b606091505b5080515f036113dd57604051633250574960e11b81526001600160a01b038516600482015260240161070b565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b14610b9757604051633250574960e11b81526001600160a01b038516600482015260240161070b565b5050505050565b5f807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610561565b61145861183e565b6106278282611863565b61111961183e565b60605f61147683611893565b60010190505f8167ffffffffffffffff81111561149557611495611d7a565b6040519080825280601f01601f1916602001820160405280156114bf576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846114c957509392505050565b610627828260405180602001604052805f81525061196a565b5f6001600160e01b031982166380ac58cd60e01b148061154357506001600160e01b03198216635b5e139f60e01b145b8061056157506301ffc9a760e01b6001600160e01b0319831614610561565b5f9081527f80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab007930260205260409020546001600160a01b031690565b5f5160206121f05f395f51905f5281806115bd57506001600160a01b03831615155b1561167e575f6115cc85610e16565b90506001600160a01b038416158015906115f85750836001600160a01b0316816001600160a01b031614155b801561160b57506116098185610da6565b155b156116345760405163a9fbf51f60e01b81526001600160a01b038516600482015260240161070b565b821561167c5784866001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5f93845260040160205250506040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f5f5160206121f05f395f51905f52816116c785611562565b90506001600160a01b038416156116e3576116e3818587611981565b6001600160a01b0381161561171f576116fe5f865f5f61159b565b6001600160a01b0381165f908152600383016020526040902080545f190190555b6001600160a01b0386161561174f576001600160a01b0386165f9081526003830160205260409020805460010190555b5f85815260028301602052604080822080546001600160a01b0319166001600160a01b038a811691821790925591518893918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a495945050505050565b6117ba828261089a565b6106275760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161070b565b6117f2826119e5565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a2805115611836576107e38282611a48565b610627611ae1565b611846611b00565b61111957604051631afcd79f60e31b815260040160405180910390fd5b61186b61183e565b5f5160206121f05f395f51905f528061188484826120d0565b506001810161076e83826120d0565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106118d15772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106118fd576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061191b57662386f26fc10000830492506010015b6305f5e1008310611933576305f5e100830492506008015b612710831061194757612710830492506004015b60648310611959576064830492506002015b600a83106105615760010192915050565b6119748383611b19565b6107e3335f858585611302565b61198c838383611b7a565b6107e3576001600160a01b0383166119ba57604051637e27328960e01b81526004810182905260240161070b565b60405163177e802f60e01b81526001600160a01b03831660048201526024810182905260440161070b565b806001600160a01b03163b5f03611a1a57604051634c9c8ce360e01b81526001600160a01b038216600482015260240161070b565b5f5160206122105f395f51905f5280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f611a558484611bdf565b9050808015611a7657505f3d1180611a7657505f846001600160a01b03163b115b15611a8b57611a83611bf2565b915050610561565b8015611ab557604051639996b31560e01b81526001600160a01b038516600482015260240161070b565b3d15611ac857611ac3611c0b565b610ff5565b60405163d6bda27560e01b815260040160405180910390fd5b34156111195760405163b398979f60e01b815260040160405180910390fd5b5f611b09611428565b54600160401b900460ff16919050565b6001600160a01b038216611b4257604051633250574960e11b81525f600482015260240161070b565b5f611b4e83835f610e93565b90506001600160a01b038116156107e3576040516339e3563760e11b81525f600482015260240161070b565b5f6001600160a01b03831615801590611bd75750826001600160a01b0316846001600160a01b03161480611bb35750611bb38484610da6565b80611bd75750826001600160a01b0316611bcc83610e4d565b6001600160a01b0316145b949350505050565b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b6001600160e01b031981168114610f51575f5ffd5b5f60208284031215611c3b575f5ffd5b8135610c0981611c16565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610c096020830184611c46565b5f60208284031215611c96575f5ffd5b5035919050565b80356001600160a01b0381168114611cb3575f5ffd5b919050565b5f5f60408385031215611cc9575f5ffd5b611cd283611c9d565b946020939093013593505050565b60018060a01b0385168152836020820152826040820152608060608201525f611d0c6080830184611c46565b9695505050505050565b5f5f5f60608486031215611d28575f5ffd5b611d3184611c9d565b9250611d3f60208501611c9d565b929592945050506040919091013590565b5f5f60408385031215611d61575f5ffd5b82359150611d7160208401611c9d565b90509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f830112611d9d575f5ffd5b813567ffffffffffffffff811115611db757611db7611d7a565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715611de657611de6611d7a565b604052818152838201602001851015611dfd575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f60408385031215611e2a575f5ffd5b611e3383611c9d565b9150602083013567ffffffffffffffff811115611e4e575f5ffd5b611e5a85828601611d8e565b9150509250929050565b5f60208284031215611e74575f5ffd5b610c0982611c9d565b5f5f60408385031215611e8e575f5ffd5b611e9783611c9d565b915060208301358015158114611eab575f5ffd5b809150509250929050565b6020815260018060a01b03825116602082015260208201516040820152604082015160608201525f6060830151608080840152611bd760a0840182611c46565b5f5f5f5f60808587031215611f09575f5ffd5b611f1285611c9d565b9350611f2060208601611c9d565b925060408501359150606085013567ffffffffffffffff811115611f42575f5ffd5b611f4e87828801611d8e565b91505092959194509250565b5f5f5f5f60608587031215611f6d575f5ffd5b611f7685611c9d565b935060208501359250604085013567ffffffffffffffff811115611f98575f5ffd5b8501601f81018713611fa8575f5ffd5b803567ffffffffffffffff811115611fbe575f5ffd5b876020828401011115611fcf575f5ffd5b949793965060200194505050565b5f5f60408385031215611fee575f5ffd5b611ff783611c9d565b9150611d7160208401611c9d565b600181811c9082168061201957607f821691505b60208210810361203757634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f611bd7612062838661203d565b8461203d565b5f6001820161208557634e487b7160e01b5f52601160045260245ffd5b5060010190565b601f8211156107e357805f5260205f20601f840160051c810160208510156120b15750805b601f840160051c820191505b81811015611421575f81556001016120bd565b815167ffffffffffffffff8111156120ea576120ea611d7a565b6120fe816120f88454612005565b8461208c565b6020601f821160018114612130575f83156121195750848201515b5f19600385901b1c1916600184901b178455611421565b5f84815260208120601f198516915b8281101561215f578785015182556020948501946001909201910161213f565b508482101561217c57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b5f6020828403121561219b575f5ffd5b5051919050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90611d0c90830184611c46565b5f602082840312156121e4575f5ffd5b8151610c0981611c1656fe80bb2b638cc20bc4d0a60d66940f3ab4a00c1d7b313497ca82fb0b4ab0079300360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a602dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800a2646970667358221220191d12ddb3a083f6eba0f824b85c8989b4e3e31747b44eeb8630bf583d92fe1764736f6c634300081c0033"
    },
    "ExhibitRegistry": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "name": "AddressEmptyCode",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "ERC1967InvalidImplementation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ERC1967NonPayable",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FailedCall",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidInitialization",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotInitializing",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "UUPSUnauthorizedCallContext",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            }
          ],
          "name": "UUPSUnsupportedProxiableUUID",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
            }
          ],
          "name": "Initialized",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vault",
              "type": "address"
            }
          ],
          "name": "VaultRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "vault",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "enum ExhibitRegistry.LocationType",
              "name": "locationType",
              "type": "uint8"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "name": "VaultVerified",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "UPGRADE_INTERFACE_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "VERIFIER_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getVaultCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vault",
              "type": "address"
            }
          ],
          "name": "getVaultInfo",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "verified",
                  "type": "bool"
                },
                {
                  "internalType": "enum ExhibitRegistry.LocationType",
                  "name": "locationType",
                  "type": "uint8"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                }
              ],
              "internalType": "struct ExhibitRegistry.VaultInfo",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "initialOwner",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vault",
              "type": "address"
            }
          ],
          "name": "isVerified",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proxiableUUID",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vault",
              "type": "address"
            }
          ],
          "name": "removeVault",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "upgradeToAndCall",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "vaultAddresses",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "vaults",
          "outputs": [
            {
              "internalType": "bool",
              "name": "verified",
              "type": "bool"
            },
            {
              "internalType": "enum ExhibitRegistry.LocationType",
              "name": "locationType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "vault",
              "type": "address"
            },
            {
              "internalType": "enum ExhibitRegistry.LocationType",
              "name": "locationType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            }
          ],
          "name": "verifyVault",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x60a060405230608052348015610013575f5ffd5b5061001c610021565b6100d3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100715760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516116e56100f95f395f8181610d5901528181610d820152610ec501526116e55ff3fe608060405260043610610110575f3560e01c8063a217fddf1161009d578063ceb68c2311610062578063ceb68c2314610310578063d42b291c1461032f578063d547741f1461034e578063d7bfe3861461036d578063e7705db6146103a4575f5ffd5b8063a217fddf1461023b578063a622ee7c1461024e578063ad3cb1cc1461027d578063b9209e33146102ba578063c4d66de8146102f1575f5ffd5b80634f1ef286116100e35780634f1ef286146101b557806352d1902d146101c857806374d4e491146101dc57806390229af7146101f057806391d148541461021c575f5ffd5b806301ffc9a714610114578063248a9ca3146101485780632f2ff15d1461017557806336568abe14610196575b5f5ffd5b34801561011f575f5ffd5b5061013361012e366004611151565b6103c4565b60405190151581526020015b60405180910390f35b348015610153575f5ffd5b5061016761016236600461117f565b6103fa565b60405190815260200161013f565b348015610180575f5ffd5b5061019461018f3660046111b1565b61041a565b005b3480156101a1575f5ffd5b506101946101b03660046111b1565b61043c565b6101946101c33660046111ef565b610474565b3480156101d3575f5ffd5b50610167610493565b3480156101e7575f5ffd5b50600154610167565b3480156101fb575f5ffd5b5061020f61020a3660046112b3565b6104ae565b60405161013f919061132e565b348015610227575f5ffd5b506101336102363660046111b1565b610656565b348015610246575f5ffd5b506101675f81565b348015610259575f5ffd5b5061026d6102683660046112b3565b61068c565b60405161013f949392919061138e565b348015610288575f5ffd5b506102ad604051806040016040528060058152602001640352e302e360dc1b81525081565b60405161013f91906113d2565b3480156102c5575f5ffd5b506101336102d43660046112b3565b6001600160a01b03165f9081526020819052604090205460ff1690565b3480156102fc575f5ffd5b5061019461030b3660046112b3565b6107c7565b34801561031b575f5ffd5b5061019461032a3660046112b3565b6108e2565b34801561033a575f5ffd5b50610194610349366004611429565b6109a3565b348015610359575f5ffd5b506101946103683660046111b1565b610bdc565b348015610378575f5ffd5b5061038c61038736600461117f565b610bf8565b6040516001600160a01b03909116815260200161013f565b3480156103af575f5ffd5b506101675f5160206116905f395f51905f5281565b5f6001600160e01b03198216637965db0b60e01b14806103f457506301ffc9a760e01b6001600160e01b03198316145b92915050565b5f9081525f5160206116705f395f51905f52602052604090206001015490565b610423826103fa565b61042c81610c20565b6104368383610c2d565b50505050565b6001600160a01b03811633146104655760405163334bd91960e11b815260040160405180910390fd5b61046f8282610cd5565b505050565b61047c610d4e565b61048582610df4565b61048f8282610dfe565b5050565b5f61049c610eba565b505f5160206116505f395f51905f5290565b604080516080810182525f80825260208201526060918101829052818101919091526001600160a01b0382165f9081526020818152604091829020825160808101909352805460ff80821615158552919284019161010090910416600481111561051a5761051a6112cc565b600481111561052b5761052b6112cc565b815260200160018201805461053f906114be565b80601f016020809104026020016040519081016040528092919081815260200182805461056b906114be565b80156105b65780601f1061058d576101008083540402835291602001916105b6565b820191905f5260205f20905b81548152906001019060200180831161059957829003601f168201915b505050505081526020016002820180546105cf906114be565b80601f01602080910402602001604051908101604052809291908181526020018280546105fb906114be565b80156106465780601f1061061d57610100808354040283529160200191610646565b820191905f5260205f20905b81548152906001019060200180831161062957829003601f168201915b5050505050815250509050919050565b5f9182525f5160206116705f395f51905f52602090815260408084206001600160a01b0393909316845291905290205460ff1690565b5f602081905290815260409020805460018201805460ff80841694610100909404169291906106ba906114be565b80601f01602080910402602001604051908101604052809291908181526020018280546106e6906114be565b80156107315780601f1061070857610100808354040283529160200191610731565b820191905f5260205f20905b81548152906001019060200180831161071457829003601f168201915b505050505090806002018054610746906114be565b80601f0160208091040260200160405190810160405280929190818152602001828054610772906114be565b80156107bd5780601f10610794576101008083540402835291602001916107bd565b820191905f5260205f20905b8154815290600101906020018083116107a057829003601f168201915b5050505050905084565b5f6107d0610f03565b805490915060ff600160401b820416159067ffffffffffffffff165f811580156107f75750825b90505f8267ffffffffffffffff1660011480156108135750303b155b905081158015610821575080155b1561083f5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561086957845460ff60401b1916600160401b1785555b610871610f2b565b61087b5f87610c2d565b506108935f5160206116905f395f51905f5287610c2d565b5083156108da57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b5f5160206116905f395f51905f526108f981610c20565b6001600160a01b0382165f9081526020819052604090205460ff1661095a5760405162461bcd60e51b815260206004820152601260248201527115985d5b1d081b9bdd081d995c9a599a595960721b60448201526064015b60405180910390fd5b6001600160a01b0382165f81815260208190526040808220805460ff19169055517fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a9190a25050565b5f5160206116905f395f51905f526109ba81610c20565b6001600160a01b038716610a025760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606401610951565b6001600160a01b0387165f9081526020819052604090205460ff16610a6b576001805480820182555f919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0389161790555b6040518060800160405280600115158152602001876004811115610a9157610a916112cc565b815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250604080516020601f8701819004810282018101909252858152918101919086908690819084018382808284375f9201829052509390945250506001600160a01b038a168152602081815260409091208351815490151560ff19821681178355928501519193509091839161ff001990911661ffff1990911617610100836004811115610b5c57610b5c6112cc565b021790555060408201516001820190610b759082611541565b5060608201516002820190610b8a9082611541565b50905050866001600160a01b03167f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec8878787604051610bcb939291906115fc565b60405180910390a250505050505050565b610be5826103fa565b610bee81610c20565b6104368383610cd5565b60018181548110610c07575f80fd5b5f918252602090912001546001600160a01b0316905081565b610c2a8133610f33565b50565b5f5f5160206116705f395f51905f52610c468484610656565b610cc5575f848152602082815260408083206001600160a01b03871684529091529020805460ff19166001179055610c7b3390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019150506103f4565b5f9150506103f4565b5092915050565b5f5f5160206116705f395f51905f52610cee8484610656565b15610cc5575f848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a460019150506103f4565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610dd457507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610dc85f5160206116505f395f51905f52546001600160a01b031690565b6001600160a01b031614155b15610df25760405163703e46dd60e11b815260040160405180910390fd5b565b5f61048f81610c20565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610e58575060408051601f3d908101601f19168201909252610e5591810190611638565b60015b610e8057604051634c9c8ce360e01b81526001600160a01b0383166004820152602401610951565b5f5160206116505f395f51905f528114610eb057604051632a87526960e21b815260048101829052602401610951565b61046f8383610f6c565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610df25760405163703e46dd60e11b815260040160405180910390fd5b5f807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006103f4565b610df2610fc1565b610f3d8282610656565b61048f5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610951565b610f7582610fe6565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a2805115610fb95761046f8282611049565b61048f6110e2565b610fc9611101565b610df257604051631afcd79f60e31b815260040160405180910390fd5b806001600160a01b03163b5f0361101b57604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610951565b5f5160206116505f395f51905f5280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f611056848461111a565b905080801561107757505f3d118061107757505f846001600160a01b03163b115b1561108c5761108461112d565b9150506103f4565b80156110b657604051639996b31560e01b81526001600160a01b0385166004820152602401610951565b3d156110c9576110c4611146565b610cce565b60405163d6bda27560e01b815260040160405180910390fd5b3415610df25760405163b398979f60e01b815260040160405180910390fd5b5f61110a610f03565b54600160401b900460ff16919050565b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b5f60208284031215611161575f5ffd5b81356001600160e01b031981168114611178575f5ffd5b9392505050565b5f6020828403121561118f575f5ffd5b5035919050565b80356001600160a01b03811681146111ac575f5ffd5b919050565b5f5f604083850312156111c2575f5ffd5b823591506111d260208401611196565b90509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f60408385031215611200575f5ffd5b61120983611196565b9150602083013567ffffffffffffffff811115611224575f5ffd5b8301601f81018513611234575f5ffd5b803567ffffffffffffffff81111561124e5761124e6111db565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561127d5761127d6111db565b604052818152828201602001871015611294575f5ffd5b816020840160208301375f602083830101528093505050509250929050565b5f602082840312156112c3575f5ffd5b61117882611196565b634e487b7160e01b5f52602160045260245ffd5b600581106112fc57634e487b7160e01b5f52602160045260245ffd5b9052565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081528151151560208201525f602083015161134e60408401826112e0565b5060408301516080606084015261136860a0840182611300565b90506060840151601f198483030160808501526113858282611300565b95945050505050565b84151581526113a060208201856112e0565b608060408201525f6113b56080830185611300565b82810360608401526113c78185611300565b979650505050505050565b602081525f6111786020830184611300565b5f5f83601f8401126113f4575f5ffd5b50813567ffffffffffffffff81111561140b575f5ffd5b602083019150836020828501011115611422575f5ffd5b9250929050565b5f5f5f5f5f5f6080878903121561143e575f5ffd5b61144787611196565b955060208701356005811061145a575f5ffd5b9450604087013567ffffffffffffffff811115611475575f5ffd5b61148189828a016113e4565b909550935050606087013567ffffffffffffffff8111156114a0575f5ffd5b6114ac89828a016113e4565b979a9699509497509295939492505050565b600181811c908216806114d257607f821691505b6020821081036114f057634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561046f57805f5260205f20601f840160051c8101602085101561151b5750805b601f840160051c820191505b8181101561153a575f8155600101611527565b5050505050565b815167ffffffffffffffff81111561155b5761155b6111db565b61156f8161156984546114be565b846114f6565b6020601f8211600181146115a1575f831561158a5750848201515b5f19600385901b1c1916600184901b17845561153a565b5f84815260208120601f198516915b828110156115d057878501518255602094850194600190920191016115b0565b50848210156115ed57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b61160681856112e0565b60406020820152816040820152818360608301375f818301606090810191909152601f909201601f1916010192915050565b5f60208284031215611648575f5ffd5b505191905056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b6268000ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea09a26469706673582212203be0718844d8c3318f98c7d0315425949e1fb7ddfdc07f6e865976e90d96516e64736f6c634300081c0033"
    },
    "ExhibitVault": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "name": "AddressEmptyCode",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "ERC1967InvalidImplementation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ERC1967NonPayable",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FailedCall",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidInitialization",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotInitializing",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "OwnableInvalidOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "OwnableUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ReentrancyGuardReentrantCall",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "UUPSUnauthorizedCallContext",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            }
          ],
          "name": "UUPSUnsupportedProxiableUUID",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            }
          ],
          "name": "Exhibited1155",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "location",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            }
          ],
          "name": "Exhibited721",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
            }
          ],
          "name": "Initialized",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "Moved1155",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "Moved721",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Withdrawn1155",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "Withdrawn721",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "UPGRADE_INTERFACE_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "balances1155",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "nftContracts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "batchMove1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "nftContracts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "tokenIds",
              "type": "uint256[]"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "batchMove721",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "nftContracts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "tokenIds",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "batchWithdraw1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "nftContracts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "tokenIds",
              "type": "uint256[]"
            }
          ],
          "name": "batchWithdraw721",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "expiry1155",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "expiry721",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_registry",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_initialOwner",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "move1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "move1155WithDuration",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            }
          ],
          "name": "move721",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "destinationVault",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "move721WithDuration",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "onERC1155BatchReceived",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "onERC1155Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "owner721",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proxiableUUID",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "registry",
          "outputs": [
            {
              "internalType": "contract IExhibitRegistry",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "upgradeToAndCall",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "withdraw721",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x60a060405230608052348015610013575f5ffd5b5060017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055610040610045565b6100f7565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100955760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100f45780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b608051612df461011d5f395f8181611b8401528181611bad0152611cec0152612df45ff3fe60806040526004361061017b575f3560e01c80637b103999116100cd578063c10e515311610087578063d742385811610062578063d742385814610508578063f07a380e14610527578063f23a6e6114610546578063f2fde38b14610565575f5ffd5b8063c10e5153146104ab578063c2fe5185146104ca578063d6bd07ee146104e9575f5ffd5b80637b1039991461039a5780637b606fdc146103b857806381bd34d2146103d75780638da5cb5b14610413578063ad3cb1cc1461044f578063bc197c811461048c575f5ffd5b806335f81b87116101385780634f1ef286116101135780634f1ef2861461030857806352d1902d1461031b5780636f39becd1461032f578063715018a614610386575f5ffd5b806335f81b871461028e578063380ff999146102ad578063485cc955146102e9575f5ffd5b806301ffc9a71461017f578063025f75ac146101b357806304126196146101d4578063150b7a02146102185780632ff1d0f914610250578063358d48d91461026f575b5f5ffd5b34801561018a575f5ffd5b5061019e610199366004612297565b610584565b60405190151581526020015b60405180910390f35b3480156101be575f5ffd5b506101d26101cd366004612320565b6105ba565b005b3480156101df575f5ffd5b5061020a6101ee3660046123cf565b600360209081525f928352604080842090915290825290205481565b6040519081526020016101aa565b348015610223575f5ffd5b506102376102323660046124dd565b61068a565b6040516001600160e01b031990911681526020016101aa565b34801561025b575f5ffd5b506101d261026a366004612544565b610974565b34801561027a575f5ffd5b506101d2610289366004612576565b6109a2565b348015610299575f5ffd5b506101d26102a83660046125e0565b610a40565b3480156102b8575f5ffd5b5061020a6102c736600461262e565b600460209081525f938452604080852082529284528284209052825290205481565b3480156102f4575f5ffd5b506101d261030336600461266d565b610a72565b6101d26103163660046126a4565b610b83565b348015610326575f5ffd5b5061020a610ba2565b34801561033a575f5ffd5b5061036e6103493660046123cf565b600160209081525f92835260408084209091529082529020546001600160a01b031681565b6040516001600160a01b0390911681526020016101aa565b348015610391575f5ffd5b506101d2610bbd565b3480156103a5575f5ffd5b505f5461036e906001600160a01b031681565b3480156103c3575f5ffd5b506101d26103d23660046126f0565b610bd0565b3480156103e2575f5ffd5b5061020a6103f136600461262e565b600260209081525f938452604080852082529284528284209052825290205481565b34801561041e575f5ffd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031661036e565b34801561045a575f5ffd5b5061047f604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516101aa91906127ba565b348015610497575f5ffd5b506102376104a636600461284b565b610c94565b3480156104b6575f5ffd5b506101d26104c53660046128fb565b61101f565b3480156104d5575f5ffd5b506101d26104e436600461297c565b6110b9565b3480156104f4575f5ffd5b506101d26105033660046129c1565b6110e3565b348015610513575f5ffd5b506101d261052236600461262e565b6110f8565b348015610532575f5ffd5b506101d26105413660046123cf565b61110c565b348015610551575f5ffd5b50610237610560366004612a08565b611134565b348015610570575f5ffd5b506101d261057f366004612a5f565b61145a565b5f6001600160e01b03198216630271189760e51b14806105b457506301ffc9a760e01b6001600160e01b03198316145b92915050565b6105c2611497565b85841480156105d057508382145b6105f55760405162461bcd60e51b81526004016105ec90612a7a565b60405180910390fd5b5f5b8681101561066a5761066288888381811061061457610614612aa5565b90506020020160208101906106299190612a5f565b87878481811061063b5761063b612aa5565b9050602002013586868581811061065457610654612aa5565b90506020020135855f6114b2565b6001016105f7565b5061068160015f516020612d9f5f395f51905f5255565b50505050505050565b5f806001600160a01b038516156106a157846106a3565b855b83519091505f90602003610757575f5460405163b9209e3360e01b81526001600160a01b0388811660048301529091169063b9209e3390602401602060405180830381865afa1580156106f8573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061071c9190612acd565b1561073c57838060200190518101906107359190612ae6565b9150610805565b838060200190518101906107509190612b01565b9050610805565b8351604003610805575f5460405163b9209e3360e01b81526001600160a01b0388811660048301529091169063b9209e3390602401602060405180830381865afa1580156107a7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107cb9190612acd565b156107ee57838060200190518101906107e49190612b18565b9092509050610805565b838060200190518101906108029190612b01565b90505b335f908152600160209081526040808320888452909152812080546001600160a01b0319166001600160a01b03851617905581610842575f61084c565b61084c8242612b58565b335f9081526003602090815260408083208a845290915290205490915081111561088d57335f90815260036020908152604080832089845290915290208190555b5f80546040516390229af760e01b81523060048201526001600160a01b03909116906390229af7906024015f60405180830381865afa1580156108d2573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526108f99190810190612bb8565b604090810151335f818152600360209081528482208c835290528390205492519193506001600160a01b038716928a927f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad39161095791879190612c75565b60405180910390a4630a85bd0160e11b9998505050505050505050565b61097c611497565b6109878383836117bb565b61099d60015f516020612d9f5f395f51905f5255565b505050565b6109aa611497565b8281146109c95760405162461bcd60e51b81526004016105ec90612a7a565b5f5b83811015610a2357610a1b8585838181106109e8576109e8612aa5565b90506020020160208101906109fd9190612a5f565b848484818110610a0f57610a0f612aa5565b905060200201356119da565b6001016109cb565b50610a3a60015f516020612d9f5f395f51905f5255565b50505050565b610a48611497565b610a5585858585856114b2565b610a6b60015f516020612d9f5f395f51905f5255565b5050505050565b5f610a7b611b40565b805490915060ff600160401b82041615906001600160401b03165f81158015610aa15750825b90505f826001600160401b03166001148015610abc5750303b155b905081158015610aca575080155b15610ae85760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610b1257845460ff60401b1916600160401b1785555b610b1b86611b68565b5f80546001600160a01b0319166001600160a01b038916179055831561068157845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a150505050505050565b610b8b611b79565b610b9482611c1d565b610b9e8282611c25565b5050565b5f610bab611ce1565b505f516020612d7f5f395f51905f5290565b610bc5611d2a565b610bce5f611d85565b565b610bd8611497565b8483148015610be657508281145b610c025760405162461bcd60e51b81526004016105ec90612a7a565b5f5b85811015610c7557610c6d878783818110610c2157610c21612aa5565b9050602002016020810190610c369190612a5f565b868684818110610c4857610c48612aa5565b90506020020135858585818110610c6157610c61612aa5565b905060200201356117bb565b600101610c04565b50610c8c60015f516020612d9f5f395f51905f5255565b505050505050565b5f806001600160a01b03861615610cab5785610cad565b865b83519091505f90602003610d61575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015610d02573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d269190612acd565b15610d465783806020019051810190610d3f9190612ae6565b9150610e0f565b83806020019051810190610d5a9190612b01565b9050610e0f565b8351604003610e0f575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015610db1573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610dd59190612acd565b15610df85783806020019051810190610dee9190612b18565b9092509050610e0f565b83806020019051810190610e0c9190612b01565b90505b5f5f8211610e1d575f610e27565b610e278242612b58565b5f80546040516390229af760e01b815230600482015292935090916001600160a01b03909116906390229af7906024015f60405180830381865afa158015610e71573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610e989190810190612bb8565b604001519050335f5b8951811015611007575f8a8281518110610ebd57610ebd612aa5565b602002602001015190505f8a8381518110610eda57610eda612aa5565b6020908102919091018101516001600160a01b038087165f9081526002845260408082208783528552808220928d168252919093528220805491935083929091610f25908490612b58565b90915550506001600160a01b038085165f9081526004602090815260408083208684528252808320938c1683529290522054861115610f8e576001600160a01b038085165f9081526004602090815260408083208684528252808320938c168352929052208690555b6001600160a01b038481165f8181526004602090815260408083208784528252808320948d1680845294909152908190205490518592917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3591610ff59187918c9190612c96565b60405180910390a45050600101610ea1565b5063bc197c8160e01b9b9a5050505050505050505050565b611027611497565b8382146110465760405162461bcd60e51b81526004016105ec90612a7a565b5f5b848110156110a25761109a86868381811061106557611065612aa5565b905060200201602081019061107a9190612a5f565b85858481811061108c5761108c612aa5565b90506020020135845f611df5565b600101611048565b50610a6b60015f516020612d9f5f395f51905f5255565b6110c1611497565b6110cd84848484611df5565b610a3a60015f516020612d9f5f395f51905f5255565b6110eb611497565b6110cd848484845f6114b2565b611100611497565b6109878383835f611df5565b611114611497565b61111e82826119da565b610b9e60015f516020612d9f5f395f51905f5255565b5f806001600160a01b0386161561114b578561114d565b865b83519091505f90602003611201575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa1580156111a2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111c69190612acd565b156111e657838060200190518101906111df9190612ae6565b91506112af565b838060200190518101906111fa9190612b01565b90506112af565b83516040036112af575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015611251573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112759190612acd565b15611298578380602001905181019061128e9190612b18565b90925090506112af565b838060200190518101906112ac9190612b01565b90505b335f90815260026020908152604080832089845282528083206001600160a01b0386168452909152812080548792906112e9908490612b58565b909155505f9050816112fb575f611305565b6113058242612b58565b335f9081526004602090815260408083208b845282528083206001600160a01b038816845290915290205490915081111561136857335f9081526004602090815260408083208a845282528083206001600160a01b038716845290915290208190555b5f80546040516390229af760e01b81523060048201526001600160a01b03909116906390229af7906024015f60405180830381865afa1580156113ad573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526113d49190810190612bb8565b604090810151335f818152600460209081528482208d835281528482206001600160a01b038a16808452915290849020549351929450928b927f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa359161143c918d918891612c96565b60405180910390a463f23a6e6160e01b9a9950505050505050505050565b611462611d2a565b6001600160a01b03811661148b57604051631e4fbdf760e01b81525f60048201526024016105ec565b61149481611d85565b50565b61149f612074565b60025f516020612d9f5f395f51905f5255565b6001600160a01b0385165f90815260026020908152604080832087845282528083203384529091529020548311156115235760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016105ec565b5f5460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa15801561156a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061158e9190612acd565b6115d55760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b60448201526064016105ec565b6001600160a01b0385165f908152600460209081526040808320878452825280832033845290915290205442101561161f5760405162461bcd60e51b81526004016105ec90612cbe565b6001600160a01b0385165f908152600260209081526040808320878452825280832033845290915281208054859290611659908490612cf5565b90915550506001600160a01b0385165f908152600260209081526040808320878452825280832033845290915281205490036116bb576001600160a01b0385165f90815260046020908152604080832087845282528083203384529091528120555b606081156116ec57604080513360208201529081018390526060016040516020818303038152906040529050611709565b604080513360208201520160405160208183030381529060405290505b604051637921219560e11b81526001600160a01b0387169063f242432a9061173d90309087908a908a908890600401612d08565b5f604051808303815f87803b158015611754575f5ffd5b505af1158015611766573d5f5f3e3d5ffd5b5050604080518781526001600160a01b0387811660208301523394508993508a16917fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1910160405180910390a4505050505050565b6001600160a01b0383165f908152600260209081526040808320858452825280832033845290915290205481111561182c5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016105ec565b6001600160a01b0383165f90815260046020908152604080832085845282528083203384529091529020544210156118765760405162461bcd60e51b81526004016105ec90612cbe565b6001600160a01b0383165f9081526002602090815260408083208584528252808320338452909152812080548392906118b0908490612cf5565b90915550506001600160a01b0383165f90815260026020908152604080832085845282528083203384529091528120549003611912576001600160a01b0383165f90815260046020908152604080832085845282528083203384529091528120555b604051637921219560e11b8152306004820152336024820152604481018390526064810182905260a060848201525f60a48201526001600160a01b0384169063f242432a9060c4015f604051808303815f87803b158015611971575f5ffd5b505af1158015611983573d5f5f3e3d5ffd5b50505050336001600160a01b031682846001600160a01b03167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f9846040516119cd91815260200190565b60405180910390a4505050565b6001600160a01b038281165f908152600160209081526040808320858452909152902054163314611a3d5760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b60448201526064016105ec565b6001600160a01b0382165f908152600360209081526040808320848452909152902054421015611a7f5760405162461bcd60e51b81526004016105ec90612cbe565b6001600160a01b0382165f8181526001602090815260408083208584529091529081902080546001600160a01b031916905551632142170760e11b8152306004820152336024820152604481018390526342842e0e906064015f604051808303815f87803b158015611aef575f5ffd5b505af1158015611b01573d5f5f3e3d5ffd5b50506040513392508391506001600160a01b038516907f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06905f90a45050565b5f807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006105b4565b611b706120a3565b611494816120c8565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480611bff57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611bf35f516020612d7f5f395f51905f52546001600160a01b031690565b6001600160a01b031614155b15610bce5760405163703e46dd60e11b815260040160405180910390fd5b611494611d2a565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611c7f575060408051601f3d908101601f19168201909252611c7c91810190612b01565b60015b611ca757604051634c9c8ce360e01b81526001600160a01b03831660048201526024016105ec565b5f516020612d7f5f395f51905f528114611cd757604051632a87526960e21b8152600481018290526024016105ec565b61099d83836120d0565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610bce5760405163703e46dd60e11b815260040160405180910390fd5b33611d5c7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b031614610bce5760405163118cdaa760e01b81523360048201526024016105ec565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a3505050565b6001600160a01b038481165f908152600160209081526040808320878452909152902054163314611e585760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b60448201526064016105ec565b5f5460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa158015611e9f573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ec39190612acd565b611f0a5760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b60448201526064016105ec565b6001600160a01b0384165f908152600360209081526040808320868452909152902054421015611f4c5760405162461bcd60e51b81526004016105ec90612cbe565b6001600160a01b0384165f908152600160209081526040808320868452909152902080546001600160a01b031916905560608115611fad57604080513360208201529081018390526060016040516020818303038152906040529050611fca565b604080513360208201520160405160208183030381529060405290505b604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde90611ffc903090879089908790600401612d4c565b5f604051808303815f87803b158015612013575f5ffd5b505af1158015612025573d5f5f3e3d5ffd5b50506040516001600160a01b0386811682523393508792508816907f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d799060200160405180910390a45050505050565b5f516020612d9f5f395f51905f5254600203610bce57604051633ee5aeb560e01b815260040160405180910390fd5b6120ab612125565b610bce57604051631afcd79f60e31b815260040160405180910390fd5b6114626120a3565b6120d98261213e565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a280511561211d5761099d82826121a1565b610b9e612241565b5f61212e611b40565b54600160401b900460ff16919050565b806001600160a01b03163b5f0361217357604051634c9c8ce360e01b81526001600160a01b03821660048201526024016105ec565b5f516020612d7f5f395f51905f5280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f6121ae8484612260565b90508080156121cf57505f3d11806121cf57505f846001600160a01b03163b115b156121e4576121dc612273565b9150506105b4565b801561220e57604051639996b31560e01b81526001600160a01b03851660048201526024016105ec565b3d156122215761221c61228c565b61223a565b60405163d6bda27560e01b815260040160405180910390fd5b5092915050565b3415610bce5760405163b398979f60e01b815260040160405180910390fd5b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b5f602082840312156122a7575f5ffd5b81356001600160e01b0319811681146122be575f5ffd5b9392505050565b5f5f83601f8401126122d5575f5ffd5b5081356001600160401b038111156122eb575f5ffd5b6020830191508360208260051b8501011115612305575f5ffd5b9250929050565b6001600160a01b0381168114611494575f5ffd5b5f5f5f5f5f5f5f6080888a031215612336575f5ffd5b87356001600160401b0381111561234b575f5ffd5b6123578a828b016122c5565b90985096505060208801356001600160401b03811115612375575f5ffd5b6123818a828b016122c5565b90965094505060408801356001600160401b0381111561239f575f5ffd5b6123ab8a828b016122c5565b90945092505060608801356123bf8161230c565b8091505092959891949750929550565b5f5f604083850312156123e0575f5ffd5b82356123eb8161230c565b946020939093013593505050565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b038111828210171561242f5761242f6123f9565b60405290565b604051601f8201601f191681016001600160401b038111828210171561245d5761245d6123f9565b604052919050565b5f6001600160401b0382111561247d5761247d6123f9565b50601f01601f191660200190565b5f82601f83011261249a575f5ffd5b81356124ad6124a882612465565b612435565b8181528460208386010111156124c1575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f608085870312156124f0575f5ffd5b84356124fb8161230c565b9350602085013561250b8161230c565b92506040850135915060608501356001600160401b0381111561252c575f5ffd5b6125388782880161248b565b91505092959194509250565b5f5f5f60608486031215612556575f5ffd5b83356125618161230c565b95602085013595506040909401359392505050565b5f5f5f5f60408587031215612589575f5ffd5b84356001600160401b0381111561259e575f5ffd5b6125aa878288016122c5565b90955093505060208501356001600160401b038111156125c8575f5ffd5b6125d4878288016122c5565b95989497509550505050565b5f5f5f5f5f60a086880312156125f4575f5ffd5b85356125ff8161230c565b94506020860135935060408601359250606086013561261d8161230c565b949793965091946080013592915050565b5f5f5f60608486031215612640575f5ffd5b833561264b8161230c565b92506020840135915060408401356126628161230c565b809150509250925092565b5f5f6040838503121561267e575f5ffd5b82356126898161230c565b915060208301356126998161230c565b809150509250929050565b5f5f604083850312156126b5575f5ffd5b82356126c08161230c565b915060208301356001600160401b038111156126da575f5ffd5b6126e68582860161248b565b9150509250929050565b5f5f5f5f5f5f60608789031215612705575f5ffd5b86356001600160401b0381111561271a575f5ffd5b61272689828a016122c5565b90975095505060208701356001600160401b03811115612744575f5ffd5b61275089828a016122c5565b90955093505060408701356001600160401b0381111561276e575f5ffd5b61277a89828a016122c5565b979a9699509497509295939492505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6122be602083018461278c565b5f82601f8301126127db575f5ffd5b81356001600160401b038111156127f4576127f46123f9565b8060051b61280460208201612435565b9182526020818501810192908101908684111561281f575f5ffd5b6020860192505b83831015612841578235825260209283019290910190612826565b9695505050505050565b5f5f5f5f5f60a0868803121561285f575f5ffd5b853561286a8161230c565b9450602086013561287a8161230c565b935060408601356001600160401b03811115612894575f5ffd5b6128a0888289016127cc565b93505060608601356001600160401b038111156128bb575f5ffd5b6128c7888289016127cc565b92505060808601356001600160401b038111156128e2575f5ffd5b6128ee8882890161248b565b9150509295509295909350565b5f5f5f5f5f6060868803121561290f575f5ffd5b85356001600160401b03811115612924575f5ffd5b612930888289016122c5565b90965094505060208601356001600160401b0381111561294e575f5ffd5b61295a888289016122c5565b909450925050604086013561296e8161230c565b809150509295509295909350565b5f5f5f5f6080858703121561298f575f5ffd5b843561299a8161230c565b93506020850135925060408501356129b18161230c565b9396929550929360600135925050565b5f5f5f5f608085870312156129d4575f5ffd5b84356129df8161230c565b9350602085013592506040850135915060608501356129fd8161230c565b939692955090935050565b5f5f5f5f5f60a08688031215612a1c575f5ffd5b8535612a278161230c565b94506020860135612a378161230c565b9350604086013592506060860135915060808601356001600160401b038111156128e2575f5ffd5b5f60208284031215612a6f575f5ffd5b81356122be8161230c565b6020808252601190820152704d69736d6174636865642061727261797360781b604082015260600190565b634e487b7160e01b5f52603260045260245ffd5b80518015158114612ac8575f5ffd5b919050565b5f60208284031215612add575f5ffd5b6122be82612ab9565b5f60208284031215612af6575f5ffd5b81516122be8161230c565b5f60208284031215612b11575f5ffd5b5051919050565b5f5f60408385031215612b29575f5ffd5b8251612b348161230c565b6020939093015192949293505050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156105b4576105b4612b44565b5f82601f830112612b7a575f5ffd5b8151612b886124a882612465565b818152846020838601011115612b9c575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f60208284031215612bc8575f5ffd5b81516001600160401b03811115612bdd575f5ffd5b820160808185031215612bee575f5ffd5b612bf661240d565b612bff82612ab9565b8152602082015160ff81168114612c14575f5ffd5b602082015260408201516001600160401b03811115612c31575f5ffd5b612c3d86828501612b6b565b60408301525060608201516001600160401b03811115612c5b575f5ffd5b612c6786828501612b6b565b606083015250949350505050565b604081525f612c87604083018561278c565b90508260208301529392505050565b838152606060208201525f612cae606083018561278c565b9050826040830152949350505050565b6020808252601a908201527f45786869626974696f6e206e6f74207965742065787069726564000000000000604082015260600190565b818103818111156105b4576105b4612b44565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f90612d419083018461278c565b979650505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906128419083018461278c56fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220d2ad88263866f648062e500021eb0783dd54d6fd1638786f3ce869a9494e8e1764736f6c634300081c0033"
    },
    "IDonationReceipt": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getReceipt",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "donor",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "message",
                  "type": "string"
                }
              ],
              "internalType": "struct IDonationReceipt.Receipt",
              "name": "",
              "type": "tuple"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "name": "mint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x"
    },
    "MaliciousBuyer": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_marketplace",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_nftContract",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            }
          ],
          "name": "createOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "marketplace",
          "outputs": [
            {
              "internalType": "contract NFTMarketplace",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nftContract",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610540380380610540833981016040819052602b916074565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560a0565b80516001600160a01b0381168114606f575f5ffd5b919050565b5f5f604083850312156084575f5ffd5b608b83605a565b9150609760208401605a565b90509250929050565b610493806100ad5f395ff3fe608060405260043610610041575f3560e01c8063150b7a021461004c5780631afed87514610089578063abc8c7af146100aa578063d56d229d146100e0575f5ffd5b3661004857005b5f5ffd5b348015610057575f5ffd5b5061006b610066366004610363565b6100ff565b6040516001600160e01b031990911681526020015b60405180910390f35b348015610094575f5ffd5b506100a86100a33660046103fc565b610174565b005b3480156100b5575f5ffd5b505f546100c8906001600160a01b031681565b6040516001600160a01b039091168152602001610080565b3480156100eb575f5ffd5b506001546100c8906001600160a01b031681565b5f805460015460405163016295ab60e21b81526001600160a01b0391821660048201526024810187905291169063058a56ac906044015f604051808303815f87803b15801561014c575f5ffd5b505af115801561015e573d5f5f3e3d5ffd5b50630a85bd0160e11b9998505050505050505050565b5f5f5f9054906101000a90046001600160a01b03166001600160a01b0316633013ce296040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101c4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e8919061041c565b6040516323b872dd60e01b8152336004820152306024820152604481018490529091506001600160a01b038216906323b872dd906064016020604051808303815f875af115801561023b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061025f919061043e565b505f5460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490529082169063095ea7b3906044016020604051808303815f875af11580156102af573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102d3919061043e565b505f5460018054604051636c4c557960e11b81526001600160a01b039182166004820152602481018790526044810192909252606482018590529091169063d898aaf2906084015f604051808303815f87803b158015610331575f5ffd5b505af1158015610343573d5f5f3e3d5ffd5b50505050505050565b6001600160a01b0381168114610360575f5ffd5b50565b5f5f5f5f5f60808688031215610377575f5ffd5b85356103828161034c565b945060208601356103928161034c565b935060408601359250606086013567ffffffffffffffff8111156103b4575f5ffd5b8601601f810188136103c4575f5ffd5b803567ffffffffffffffff8111156103da575f5ffd5b8860208284010111156103eb575f5ffd5b959894975092955050506020019190565b5f5f6040838503121561040d575f5ffd5b50508035926020909101359150565b5f6020828403121561042c575f5ffd5b81516104378161034c565b9392505050565b5f6020828403121561044e575f5ffd5b81518015158114610437575f5ffdfea264697066735822122054334dfb656569d9cc6e14afc8a9cc2990bafcad0b61df8039da65094ee1a4f664736f6c634300081c0033"
    },
    "MockERC1155": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC1155InsufficientBalance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC1155InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "idsLength",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "valuesLength",
              "type": "uint256"
            }
          ],
          "name": "ERC1155InvalidArrayLength",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "ERC1155InvalidOperator",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC1155InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC1155InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC1155MissingApprovalForAll",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            }
          ],
          "name": "TransferBatch",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "TransferSingle",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "value",
              "type": "string"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "URI",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MINTER_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "accounts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            }
          ],
          "name": "balanceOfBatch",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "ids",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeBatchTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "uri",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b5060408051602081019091525f815261002781610063565b506100325f33610073565b5061005d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610073565b50610272565b600261006f82826101b8565b5050565b5f8281526003602090815260408083206001600160a01b038516845290915281205460ff16610117575f8381526003602090815260408083206001600160a01b03861684529091529020805460ff191660011790556100cf3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161011a565b505f5b92915050565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061014857607f821691505b60208210810361016657634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156101b357805f5260205f20601f840160051c810160208510156101915750805b601f840160051c820191505b818110156101b0575f815560010161019d565b50505b505050565b81516001600160401b038111156101d1576101d1610120565b6101e5816101df8454610134565b8461016c565b6020601f821160018114610217575f83156102005750848201515b5f19600385901b1c1916600184901b1784556101b0565b5f84815260208120601f198516915b828110156102465787850151825560209485019460019092019101610226565b508482101561026357868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6114878061027f5f395ff3fe608060405234801561000f575f5ffd5b50600436106100fa575f3560e01c80634e1273f411610093578063d539139311610063578063d539139314610224578063d547741f1461024b578063e985e9c51461025e578063f242432a14610299575f5ffd5b80634e1273f4146101d757806391d14854146101f7578063a217fddf1461020a578063a22cb46514610211575f5ffd5b8063248a9ca3116100ce578063248a9ca31461017c5780632eb2c2d61461019e5780632f2ff15d146101b157806336568abe146101c4575f5ffd5b8062fdd58e146100fe57806301ffc9a7146101245780630e89341c14610147578063156e29f614610167575b5f5ffd5b61011161010c366004610e3c565b6102ac565b6040519081526020015b60405180910390f35b610137610132366004610e79565b6102d3565b604051901515815260200161011b565b61015a610155366004610e9b565b6102dd565b60405161011b9190610ee0565b61017a610175366004610ef2565b61036f565b005b61011161018a366004610e9b565b5f9081526003602052604090206001015490565b61017a6101ac366004611060565b6103b9565b61017a6101bf36600461110f565b6103d8565b61017a6101d236600461110f565b6103fc565b6101ea6101e5366004611139565b610434565b60405161011b9190611236565b61013761020536600461110f565b610504565b6101115f81565b61017a61021f366004611248565b61052e565b6101117f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61017a61025936600461110f565b61053d565b61013761026c366004611281565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205460ff1690565b61017a6102a73660046112a9565b610561565b5f818152602081815260408083206001600160a01b03861684529091529020545b92915050565b5f6102cd82610577565b6060600280546102ec906112fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610318906112fd565b80156103635780601f1061033a57610100808354040283529160200191610363565b820191905f5260205f20905b81548152906001019060200180831161034657829003601f168201915b50505050509050919050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66103998161059b565b6103b384848460405180602001604052805f8152506105a8565b50505050565b6103c4335b8661060c565b6103d18585858585610684565b5050505050565b5f828152600360205260409020600101546103f28161059b565b6103b383836106e4565b6001600160a01b03811633146104255760405163334bd91960e11b815260040160405180910390fd5b61042f8282610775565b505050565b6060815183511461046a5781518351604051635b05999160e01b8152600481019290925260248201526044015b60405180910390fd5b5f835167ffffffffffffffff81111561048557610485610f22565b6040519080825280602002602001820160405280156104ae578160200160208202803683370190505b5090505f5b84518110156104fc576020808202860101516104d7906020808402870101516102ac565b8282815181106104e9576104e9611335565b60209081029190910101526001016104b3565b509392505050565b5f9182526003602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6105393383836107e0565b5050565b5f828152600360205260409020600101546105578161059b565b6103b38383610775565b61056a336103be565b6103d1858585858561089d565b5f6001600160e01b03198216637965db0b60e01b14806102cd57506102cd8261092a565b6105a58133610979565b50565b6001600160a01b0384166105d157604051632bfa23e760e11b81525f6004820152602401610461565b604080516001808252602082018690528183019081526060820185905260808201909252906106045f87848487846109b2565b505050505050565b816001600160a01b0316816001600160a01b03161415801561065357506001600160a01b038082165f9081526001602090815260408083209386168352929052205460ff16155b156105395760405163711bec9160e11b81526001600160a01b03808416600483015282166024820152604401610461565b6001600160a01b0384166106ad57604051632bfa23e760e11b81525f6004820152602401610461565b6001600160a01b0385166106d557604051626a0d4560e21b81525f6004820152602401610461565b6103d1858585858560016109b2565b5f6106ef8383610504565b61076e575f8381526003602090815260408083206001600160a01b03861684529091529020805460ff191660011790556107263390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016102cd565b505f6102cd565b5f6107808383610504565b1561076e575f8381526003602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016102cd565b6001600160a01b03831661080957604051631f18c42760e11b81525f6004820152602401610461565b6001600160a01b0382166108315760405162ced3e160e81b81525f6004820152602401610461565b6001600160a01b038381165f81815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166108c657604051632bfa23e760e11b81525f6004820152602401610461565b6001600160a01b0385166108ee57604051626a0d4560e21b81525f6004820152602401610461565b6040805160018082526020820186905281830190815260608201859052608082019092529061092187878484875f6109b2565b50505050505050565b5f6001600160e01b03198216636cdb3d1360e11b148061095a57506001600160e01b031982166303a24d0760e21b145b806102cd57506301ffc9a760e01b6001600160e01b03198316146102cd565b6109838282610504565b6105395760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610461565b6109be86868686610a0a565b6001600160a01b03851615610604573381156109e7576109e2818888888888610c19565b610921565b602085810151908501516109ff838a8a85858a610d3a565b505050505050505050565b8051825114610a395781518151604051635b05999160e01b815260048101929092526024820152604401610461565b335f5b8351811015610b3b576020818102858101820151908501909101516001600160a01b03881615610aed575f828152602081815260408083206001600160a01b038c16845290915290205481811015610ac7576040516303dee4c560e01b81526001600160a01b038a166004820152602481018290526044810183905260648101849052608401610461565b5f838152602081815260408083206001600160a01b038d16845290915290209082900390555b6001600160a01b03871615610b31575f828152602081815260408083206001600160a01b038b16845290915281208054839290610b2b908490611349565b90915550505b5050600101610a3c565b508251600103610bbb5760208301515f906020840151909150856001600160a01b0316876001600160a01b0316846001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051610bac929190918252602082015260400190565b60405180910390a450506103d1565b836001600160a01b0316856001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610c0a929190611368565b60405180910390a45050505050565b6001600160a01b0384163b156106045760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610c5d9089908990889088908890600401611395565b6020604051808303815f875af1925050508015610c97575060408051601f3d908101601f19168201909252610c94918101906113f2565b60015b610cfe573d808015610cc4576040519150601f19603f3d011682016040523d82523d5f602084013e610cc9565b606091505b5080515f03610cf657604051632bfa23e760e11b81526001600160a01b0386166004820152602401610461565b805160208201fd5b6001600160e01b0319811663bc197c8160e01b1461092157604051632bfa23e760e11b81526001600160a01b0386166004820152602401610461565b6001600160a01b0384163b156106045760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610d7e908990899088908890889060040161140d565b6020604051808303815f875af1925050508015610db8575060408051601f3d908101601f19168201909252610db5918101906113f2565b60015b610de5573d808015610cc4576040519150601f19603f3d011682016040523d82523d5f602084013e610cc9565b6001600160e01b0319811663f23a6e6160e01b1461092157604051632bfa23e760e11b81526001600160a01b0386166004820152602401610461565b80356001600160a01b0381168114610e37575f5ffd5b919050565b5f5f60408385031215610e4d575f5ffd5b610e5683610e21565b946020939093013593505050565b6001600160e01b0319811681146105a5575f5ffd5b5f60208284031215610e89575f5ffd5b8135610e9481610e64565b9392505050565b5f60208284031215610eab575f5ffd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610e946020830184610eb2565b5f5f5f60608486031215610f04575f5ffd5b610f0d84610e21565b95602085013595506040909401359392505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610f5f57610f5f610f22565b604052919050565b5f67ffffffffffffffff821115610f8057610f80610f22565b5060051b60200190565b5f82601f830112610f99575f5ffd5b8135610fac610fa782610f67565b610f36565b8082825260208201915060208360051b860101925085831115610fcd575f5ffd5b602085015b83811015610fea578035835260209283019201610fd2565b5095945050505050565b5f82601f830112611003575f5ffd5b813567ffffffffffffffff81111561101d5761101d610f22565b611030601f8201601f1916602001610f36565b818152846020838601011115611044575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f5f60a08688031215611074575f5ffd5b61107d86610e21565b945061108b60208701610e21565b9350604086013567ffffffffffffffff8111156110a6575f5ffd5b6110b288828901610f8a565b935050606086013567ffffffffffffffff8111156110ce575f5ffd5b6110da88828901610f8a565b925050608086013567ffffffffffffffff8111156110f6575f5ffd5b61110288828901610ff4565b9150509295509295909350565b5f5f60408385031215611120575f5ffd5b8235915061113060208401610e21565b90509250929050565b5f5f6040838503121561114a575f5ffd5b823567ffffffffffffffff811115611160575f5ffd5b8301601f81018513611170575f5ffd5b803561117e610fa782610f67565b8082825260208201915060208360051b85010192508783111561119f575f5ffd5b6020840193505b828410156111c8576111b784610e21565b8252602093840193909101906111a6565b9450505050602083013567ffffffffffffffff8111156111e6575f5ffd5b6111f285828601610f8a565b9150509250929050565b5f8151808452602084019350602083015f5b8281101561122c57815186526020958601959091019060010161120e565b5093949350505050565b602081525f610e9460208301846111fc565b5f5f60408385031215611259575f5ffd5b61126283610e21565b915060208301358015158114611276575f5ffd5b809150509250929050565b5f5f60408385031215611292575f5ffd5b61129b83610e21565b915061113060208401610e21565b5f5f5f5f5f60a086880312156112bd575f5ffd5b6112c686610e21565b94506112d460208701610e21565b93506040860135925060608601359150608086013567ffffffffffffffff8111156110f6575f5ffd5b600181811c9082168061131157607f821691505b60208210810361132f57634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52603260045260245ffd5b808201808211156102cd57634e487b7160e01b5f52601160045260245ffd5b604081525f61137a60408301856111fc565b828103602084015261138c81856111fc565b95945050505050565b6001600160a01b0386811682528516602082015260a0604082018190525f906113c0908301866111fc565b82810360608401526113d281866111fc565b905082810360808401526113e68185610eb2565b98975050505050505050565b5f60208284031215611402575f5ffd5b8151610e9481610e64565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f9061144690830184610eb2565b97965050505050505056fea264697066735822122092221d68ef550c3ddaa722fa8e54e962e7ae8ff981002af17424dc1d523edbe764736f6c634300081c0033"
    },
    "MockEntryPoint": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "opIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            }
          ],
          "name": "FailedOp",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "opIndex",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "inner",
              "type": "bytes"
            }
          ],
          "name": "FailedOpWithRevert",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
            }
          ],
          "name": "addStake",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "depositTo",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint192",
              "name": "",
              "type": "uint192"
            }
          ],
          "name": "getNonce",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "initCode",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes32",
                  "name": "accountGasLimits",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "preVerificationGas",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "gasFees",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes",
                  "name": "paymasterAndData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "internalType": "struct PackedUserOperation",
              "name": "userOp",
              "type": "tuple"
            }
          ],
          "name": "getUserOpHash",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "sender",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "nonce",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bytes",
                      "name": "initCode",
                      "type": "bytes"
                    },
                    {
                      "internalType": "bytes",
                      "name": "callData",
                      "type": "bytes"
                    },
                    {
                      "internalType": "bytes32",
                      "name": "accountGasLimits",
                      "type": "bytes32"
                    },
                    {
                      "internalType": "uint256",
                      "name": "preVerificationGas",
                      "type": "uint256"
                    },
                    {
                      "internalType": "bytes32",
                      "name": "gasFees",
                      "type": "bytes32"
                    },
                    {
                      "internalType": "bytes",
                      "name": "paymasterAndData",
                      "type": "bytes"
                    },
                    {
                      "internalType": "bytes",
                      "name": "signature",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct PackedUserOperation[]",
                  "name": "userOps",
                  "type": "tuple[]"
                },
                {
                  "internalType": "contract IAggregator",
                  "name": "aggregator",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "internalType": "struct IEntryPoint.UserOpsPerAggregator[]",
              "name": "",
              "type": "tuple[]"
            },
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "name": "handleAggregatedOps",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "initCode",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes32",
                  "name": "accountGasLimits",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "preVerificationGas",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "gasFees",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes",
                  "name": "paymasterAndData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "internalType": "struct PackedUserOperation[]",
              "name": "ops",
              "type": "tuple[]"
            },
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "name": "handleOps",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "unlockStake",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "name": "withdrawStake",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "withdrawTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x6080604052348015600e575f5ffd5b506108b18061001c5f395ff3fe60806040526004361061009a575f3560e01c8063765e827f11610062578063765e827f146101545780637ecebe0014610173578063b760faf91461019e578063bb9fe6bf146101ac578063c23a5cea146101b7578063dbed18e0146101d1575f5ffd5b80630396cb601461009e578063205c2878146100b157806322cdde4c146100cf57806335567e1a1461010057806370a0823114610135575b5f5ffd5b6100af6100ac366004610497565b50565b005b3480156100bc575f5ffd5b506100af6100cb3660046104d5565b5050565b3480156100da575f5ffd5b506100ee6100e93660046104ff565b6101f0565b60405190815260200160405180910390f35b34801561010b575f5ffd5b506100ee61011a366004610547565b506001600160a01b03165f9081526020819052604090205490565b348015610140575f5ffd5b506100ee61014f366004610589565b505f90565b34801561015f575f5ffd5b506100af61016e3660046105ec565b610223565b34801561017e575f5ffd5b506100ee61018d366004610589565b5f6020819052908152604090205481565b6100af6100ac366004610589565b3480156100af575f5ffd5b3480156101c2575f5ffd5b506100af6100ac366004610589565b3480156101dc575f5ffd5b506100af6101eb3660046105ec565b505050565b5f81304660405160200161020693929190610788565b604051602081830303815290604052805190602001209050919050565b5f5b82811015610491575f610255858584818110610243576102436107b5565b90506020028101906100e991906107c9565b90505f85858481811061026a5761026a6107b5565b905060200281019061027c91906107c9565b61028a906020810190610589565b6001600160a01b03168686858181106102a5576102a56107b5565b90506020028101906102b791906107c9565b835f6040516024016102cb939291906107e8565b60408051601f198184030181529181526020820180516001600160e01b03166306608bdf60e21b179052516103009190610813565b5f604051808303815f865af19150503d805f8114610339576040519150601f19603f3d011682016040523d82523d5f602084013e61033e565b606091505b50509050806103885760405162461bcd60e51b815260206004820152601160248201527015985b1a59185d1a5bdb8819985a5b1959607a1b60448201526064015b60405180910390fd5b85858481811061039a5761039a6107b5565b90506020028101906103ac91906107c9565b6103ba906020810190610589565b6001600160a01b03168686858181106103d5576103d56107b5565b90506020028101906103e791906107c9565b6103f5906060810190610829565b60405161040392919061086c565b5f604051808303815f865af19150503d805f811461043c576040519150601f19603f3d011682016040523d82523d5f602084013e610441565b606091505b505080915050806104875760405162461bcd60e51b815260206004820152601060248201526f115e1958dd5d1a5bdb8819985a5b195960821b604482015260640161037f565b5050600101610225565b50505050565b5f602082840312156104a7575f5ffd5b813563ffffffff811681146104ba575f5ffd5b9392505050565b6001600160a01b03811681146100ac575f5ffd5b5f5f604083850312156104e6575f5ffd5b82356104f1816104c1565b946020939093013593505050565b5f6020828403121561050f575f5ffd5b813567ffffffffffffffff811115610525575f5ffd5b820161012081850312156104ba575f5ffd5b8035610542816104c1565b919050565b5f5f60408385031215610558575f5ffd5b8235610563816104c1565b915060208301356001600160c01b038116811461057e575f5ffd5b809150509250929050565b5f60208284031215610599575f5ffd5b81356104ba816104c1565b5f5f83601f8401126105b4575f5ffd5b50813567ffffffffffffffff8111156105cb575f5ffd5b6020830191508360208260051b85010111156105e5575f5ffd5b9250929050565b5f5f5f604084860312156105fe575f5ffd5b833567ffffffffffffffff811115610614575f5ffd5b610620868287016105a4565b9094509250506020840135610634816104c1565b809150509250925092565b5f5f8335601e19843603018112610654575f5ffd5b830160208101925035905067ffffffffffffffff811115610673575f5ffd5b8036038213156105e5575f5ffd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b6106c3826106b683610537565b6001600160a01b03169052565b602081810135908301525f6106db604083018361063f565b61012060408601526106f261012086018284610681565b915050610702606084018461063f565b8583036060870152610715838284610681565b6080868101359088015260a0808701359088015260c08087013590880152925061074591505060e084018461063f565b85830360e0870152610758838284610681565b9250505061076a61010084018461063f565b85830361010087015261077e838284610681565b9695505050505050565b606081525f61079a60608301866106a9565b6001600160a01b039490941660208301525060400152919050565b634e487b7160e01b5f52603260045260245ffd5b5f823561011e198336030181126107de575f5ffd5b9190910192915050565b606081525f6107fa60608301866106a9565b905083602083015260ff83166040830152949350505050565b5f82518060208501845e5f920191825250919050565b5f5f8335601e1984360301811261083e575f5ffd5b83018035915067ffffffffffffffff821115610858575f5ffd5b6020019150368190038213156105e5575f5ffd5b818382375f910190815291905056fea2646970667358221220c07fb30e267b5785a9d0055d3d81305cb3c6c4692060d9841626060c414a458864736f6c634300081c0033"
    },
    "MockRoyaltyNFT": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721IncorrectOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721InsufficientApproval",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOperator",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721NonexistentToken",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "salePrice",
              "type": "uint256"
            }
          ],
          "name": "royaltyInfo",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint96",
              "name": "bps",
              "type": "uint96"
            }
          ],
          "name": "setRoyalty",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161135138038061135183398101604081905261002e916100ef565b81815f61003b83826101d8565b50600161004882826101d8565b5050505050610292565b634e487b7160e01b5f52604160045260245ffd5b5f82601f830112610075575f5ffd5b81516001600160401b0381111561008e5761008e610052565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100bc576100bc610052565b6040528181528382016020018510156100d3575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f60408385031215610100575f5ffd5b82516001600160401b03811115610115575f5ffd5b61012185828601610066565b602085015190935090506001600160401b0381111561013e575f5ffd5b61014a85828601610066565b9150509250929050565b600181811c9082168061016857607f821691505b60208210810361018657634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156101d357805f5260205f20601f840160051c810160208510156101b15750805b601f840160051c820191505b818110156101d0575f81556001016101bd565b50505b505050565b81516001600160401b038111156101f1576101f1610052565b610205816101ff8454610154565b8461018c565b6020601f821160018114610237575f83156102205750848201515b5f19600385901b1c1916600184901b1784556101d0565b5f84815260208120601f198516915b828110156102665787850151825560209485019460019092019101610246565b508482101561028357868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6110b28061029f5f395ff3fe608060405234801561000f575f5ffd5b50600436106100fb575f3560e01c80636352211e11610093578063a22cb46511610063578063a22cb46514610251578063b88d4fde14610264578063c87b56dd14610277578063e985e9c51461028a575f5ffd5b80636352211e146101e757806370a08231146101fa5780638f2fc60b1461021b57806395d89b4114610249575f5ffd5b806323b872dd116100ce57806323b872dd1461017c5780632a55205a1461018f57806340c10f19146101c157806342842e0e146101d4575f5ffd5b806301ffc9a7146100ff57806306fdde0314610127578063081812fc1461013c578063095ea7b314610167575b5f5ffd5b61011261010d366004610cc8565b61029d565b60405190151581526020015b60405180910390f35b61012f6102c7565b60405161011e9190610d11565b61014f61014a366004610d23565b610356565b6040516001600160a01b03909116815260200161011e565b61017a610175366004610d55565b61037d565b005b61017a61018a366004610d7d565b61038c565b6101a261019d366004610db7565b61041a565b604080516001600160a01b03909316835260208301919091520161011e565b61017a6101cf366004610d55565b61045f565b61017a6101e2366004610d7d565b610469565b61014f6101f5366004610d23565b610488565b61020d610208366004610dd7565b610492565b60405190815260200161011e565b61017a610229366004610df0565b6001600160601b0316600160a01b026001600160a01b0390911617600655565b61012f6104d7565b61017a61025f366004610e30565b6104e6565b61017a610272366004610e72565b6104f1565b61012f610285366004610d23565b610509565b610112610298366004610f4f565b61057a565b5f6001600160e01b0319821663152a902d60e11b14806102c157506102c1826105a7565b92915050565b60605f80546102d590610f80565b80601f016020809104026020016040519081016040528092919081815260200182805461030190610f80565b801561034c5780601f106103235761010080835404028352916020019161034c565b820191905f5260205f20905b81548152906001019060200180831161032f57829003601f168201915b5050505050905090565b5f610360826105f6565b505f828152600460205260409020546001600160a01b03166102c1565b61038882823361062e565b5050565b6001600160a01b0382166103ba57604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f6103c683833361063b565b9050836001600160a01b0316816001600160a01b031614610414576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103b1565b50505050565b6006545f9081906001600160a01b038116906127109061044a90600160a01b90046001600160601b031686610fb8565b6104549190610fdb565b915091509250929050565b610388828261072d565b61048383838360405180602001604052805f8152506104f1565b505050565b5f6102c1826105f6565b5f6001600160a01b0382166104bc576040516322718ad960e21b81525f60048201526024016103b1565b506001600160a01b03165f9081526003602052604090205490565b6060600180546102d590610f80565b61038833838361078e565b6104fc84848461038c565b6104143385858585610855565b6060610514826105f6565b505f61052a60408051602081019091525f815290565b90505f8151116105485760405180602001604052805f815250610573565b806105528461097d565b604051602001610563929190611011565b6040516020818303038152906040525b9392505050565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f6001600160e01b031982166380ac58cd60e01b14806105d757506001600160e01b03198216635b5e139f60e01b145b806102c157506301ffc9a760e01b6001600160e01b03198316146102c1565b5f818152600260205260408120546001600160a01b0316806102c157604051637e27328960e01b8152600481018490526024016103b1565b6104838383836001610a0d565b5f828152600260205260408120546001600160a01b039081169083161561066757610667818486610b11565b6001600160a01b038116156106a1576106825f855f5f610a0d565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156106cf576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6001600160a01b03821661075657604051633250574960e11b81525f60048201526024016103b1565b5f61076283835f61063b565b90506001600160a01b03811615610483576040516339e3563760e11b81525f60048201526024016103b1565b6001600160a01b0383166107b75760405163a9fbf51f60e01b81525f60048201526024016103b1565b6001600160a01b0382166107e957604051630b61174360e31b81526001600160a01b03831660048201526024016103b1565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561097657604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610897908890889087908790600401611025565b6020604051808303815f875af19250505080156108d1575060408051601f3d908101601f191682019092526108ce91810190611061565b60015b610938573d8080156108fe576040519150601f19603f3d011682016040523d82523d5f602084013e610903565b606091505b5080515f0361093057604051633250574960e11b81526001600160a01b03851660048201526024016103b1565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b1461097457604051633250574960e11b81526001600160a01b03851660048201526024016103b1565b505b5050505050565b60605f61098983610b75565b60010190505f8167ffffffffffffffff8111156109a8576109a8610e5e565b6040519080825280601f01601f1916602001820160405280156109d2576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846109dc57509392505050565b8080610a2157506001600160a01b03821615155b15610ae2575f610a30846105f6565b90506001600160a01b03831615801590610a5c5750826001600160a01b0316816001600160a01b031614155b8015610a6f5750610a6d818461057a565b155b15610a985760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103b1565b8115610ae05783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610b1c838383610c4c565b610483576001600160a01b038316610b4a57604051637e27328960e01b8152600481018290526024016103b1565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103b1565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610bb35772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610bdf576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610bfd57662386f26fc10000830492506010015b6305f5e1008310610c15576305f5e100830492506008015b6127108310610c2957612710830492506004015b60648310610c3b576064830492506002015b600a83106102c15760010192915050565b5f6001600160a01b03831615801590610ca85750826001600160a01b0316846001600160a01b03161480610c855750610c85848461057a565b80610ca857505f828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160e01b031981168114610cc5575f5ffd5b50565b5f60208284031215610cd8575f5ffd5b813561057381610cb0565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6105736020830184610ce3565b5f60208284031215610d33575f5ffd5b5035919050565b80356001600160a01b0381168114610d50575f5ffd5b919050565b5f5f60408385031215610d66575f5ffd5b610d6f83610d3a565b946020939093013593505050565b5f5f5f60608486031215610d8f575f5ffd5b610d9884610d3a565b9250610da660208501610d3a565b929592945050506040919091013590565b5f5f60408385031215610dc8575f5ffd5b50508035926020909101359150565b5f60208284031215610de7575f5ffd5b61057382610d3a565b5f5f60408385031215610e01575f5ffd5b610e0a83610d3a565b915060208301356001600160601b0381168114610e25575f5ffd5b809150509250929050565b5f5f60408385031215610e41575f5ffd5b610e4a83610d3a565b915060208301358015158114610e25575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215610e85575f5ffd5b610e8e85610d3a565b9350610e9c60208601610d3a565b925060408501359150606085013567ffffffffffffffff811115610ebe575f5ffd5b8501601f81018713610ece575f5ffd5b803567ffffffffffffffff811115610ee857610ee8610e5e565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610f1757610f17610e5e565b604052818152828201602001891015610f2e575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215610f60575f5ffd5b610f6983610d3a565b9150610f7760208401610d3a565b90509250929050565b600181811c90821680610f9457607f821691505b602082108103610fb257634e487b7160e01b5f52602260045260245ffd5b50919050565b80820281158282048414176102c157634e487b7160e01b5f52601160045260245ffd5b5f82610ff557634e487b7160e01b5f52601260045260245ffd5b500490565b5f81518060208401855e5f93019283525090919050565b5f610ca861101f8386610ffa565b84610ffa565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061105790830184610ce3565b9695505050505050565b5f60208284031215611071575f5ffd5b815161057381610cb056fea26469706673582212207340c7e6713d6eb15cf36448b3c7dee11155e2f101122e94eea74d62152cccb964736f6c634300081c0033"
    },
    "MockUSDC": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "allowance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "name": "ERC20InsufficientAllowance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "needed",
              "type": "uint256"
            }
          ],
          "name": "ERC20InsufficientBalance",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "ERC20InvalidSpender",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051806040016040528060098152602001684d6f636b205553444360b81b815250604051806040016040528060058152602001646d5553444360d81b815250816003908161005f919061010c565b50600461006c828261010c565b5050506101c6565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061009c57607f821691505b6020821081036100ba57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561010757805f5260205f20601f840160051c810160208510156100e55750805b601f840160051c820191505b81811015610104575f81556001016100f1565b50505b505050565b81516001600160401b0381111561012557610125610074565b610139816101338454610088565b846100c0565b6020601f82116001811461016b575f83156101545750848201515b5f19600385901b1c1916600184901b178455610104565b5f84815260208120601f198516915b8281101561019a578785015182556020948501946001909201910161017a565b50848210156101b757868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b610746806101d35f395ff3fe608060405234801561000f575f5ffd5b506004361061009b575f3560e01c806340c10f191161006357806340c10f191461011457806370a082311461012957806395d89b4114610151578063a9059cbb14610159578063dd62ed3e1461016c575f5ffd5b806306fdde031461009f578063095ea7b3146100bd57806318160ddd146100e057806323b872dd146100f2578063313ce56714610105575b5f5ffd5b6100a76101a4565b6040516100b491906105b6565b60405180910390f35b6100d06100cb366004610606565b610234565b60405190151581526020016100b4565b6002545b6040519081526020016100b4565b6100d061010036600461062e565b61024d565b604051601281526020016100b4565b610127610122366004610606565b610270565b005b6100e4610137366004610668565b6001600160a01b03165f9081526020819052604090205490565b6100a761027e565b6100d0610167366004610606565b61028d565b6100e461017a366004610688565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6060600380546101b3906106b9565b80601f01602080910402602001604051908101604052809291908181526020018280546101df906106b9565b801561022a5780601f106102015761010080835404028352916020019161022a565b820191905f5260205f20905b81548152906001019060200180831161020d57829003601f168201915b5050505050905090565b5f3361024181858561029a565b60019150505b92915050565b5f3361025a8582856102ac565b61026585858561032d565b506001949350505050565b61027a828261038a565b5050565b6060600480546101b3906106b9565b5f3361024181858561032d565b6102a783838360016103be565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811015610327578181101561031957604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61032784848484035f6103be565b50505050565b6001600160a01b03831661035657604051634b637e8f60e11b81525f6004820152602401610310565b6001600160a01b03821661037f5760405163ec442f0560e01b81525f6004820152602401610310565b6102a7838383610490565b6001600160a01b0382166103b35760405163ec442f0560e01b81525f6004820152602401610310565b61027a5f8383610490565b6001600160a01b0384166103e75760405163e602df0560e01b81525f6004820152602401610310565b6001600160a01b03831661041057604051634a1406b160e11b81525f6004820152602401610310565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561032757826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161048291815260200190565b60405180910390a350505050565b6001600160a01b0383166104ba578060025f8282546104af91906106f1565b9091555061052a9050565b6001600160a01b0383165f908152602081905260409020548181101561050c5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610310565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b03821661054657600280548290039055610564565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105a991815260200190565b60405180910390a3505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b0381168114610601575f5ffd5b919050565b5f5f60408385031215610617575f5ffd5b610620836105eb565b946020939093013593505050565b5f5f5f60608486031215610640575f5ffd5b610649846105eb565b9250610657602085016105eb565b929592945050506040919091013590565b5f60208284031215610678575f5ffd5b610681826105eb565b9392505050565b5f5f60408385031215610699575f5ffd5b6106a2836105eb565b91506106b0602084016105eb565b90509250929050565b600181811c908216806106cd57607f821691505b6020821081036106eb57634e487b7160e01b5f52602260045260245ffd5b50919050565b8082018082111561024757634e487b7160e01b5f52601160045260245ffdfea26469706673582212207cdac9222ab4658a3a6d165038ebf30ded70c591e55cb9d16822c5afd787fd5c64736f6c634300081c0033"
    },
    "NFTMarketplace": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "AccessControlBadConfirmation",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "neededRole",
              "type": "bytes32"
            }
          ],
          "name": "AccessControlUnauthorizedAccount",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "name": "AddressEmptyCode",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "ERC1967InvalidImplementation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ERC1967NonPayable",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FailedCall",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidInitialization",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotInitializing",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ReentrancyGuardReentrantCall",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "name": "SafeERC20FailedOperation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "UUPSUnauthorizedCallContext",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            }
          ],
          "name": "UUPSUnsupportedProxiableUUID",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "newRecipient",
              "type": "address"
            }
          ],
          "name": "FeeRecipientUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
            }
          ],
          "name": "Initialized",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "seller",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "OfferAccepted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            }
          ],
          "name": "OfferCanceled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "OfferCreated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "seller",
              "type": "address"
            }
          ],
          "name": "OfferRejected",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newPrice",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newAmount",
              "type": "uint256"
            }
          ],
          "name": "OfferUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newFeeBps",
              "type": "uint256"
            }
          ],
          "name": "ProtocolFeeUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "UPGRADE_INTERFACE_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            }
          ],
          "name": "acceptOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "cancelOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "nftContracts",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "tokenIds",
              "type": "uint256[]"
            }
          ],
          "name": "cancelOffers",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            }
          ],
          "name": "createOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "feeRecipient",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "initialAdmin",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_paymentToken",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "offers",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "paymentToken",
          "outputs": [
            {
              "internalType": "contract IERC20",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "protocolFeeBps",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proxiableUUID",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            }
          ],
          "name": "rejectOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "callerConfirmation",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_recipient",
              "type": "address"
            }
          ],
          "name": "setFeeRecipient",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_feeBps",
              "type": "uint256"
            }
          ],
          "name": "setProtocolFee",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newPrice",
              "type": "uint256"
            }
          ],
          "name": "updateOffer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "upgradeToAndCall",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        }
      ],
      "bytecode": "0x60a060405230608052348015610013575f5ffd5b5060017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055610040610045565b6100f7565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100955760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100f45780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b60805161260561011d5f395f8181611be501528181611c0e0152611d4f01526126055ff3fe60806040526004361061013c575f3560e01c806352d1902d116100b3578063c7fff7191161006d578063c7fff7191461037d578063cddc1bc11461039c578063d3f494cc146103bb578063d547741f14610420578063d898aaf21461043f578063e74b981b1461045e575f5ffd5b806352d1902d146102bc57806355363724146102d0578063787dce3d146102ef57806391d148541461030e578063a217fddf1461032d578063ad3cb1cc14610340575f5ffd5b806335659fb81161010457806335659fb81461021857806336568abe1461022d5780633bbb28061461024c578063469048401461026b578063485cc9551461028a5780634f1ef286146102a9575f5ffd5b806301ffc9a714610140578063058a56ac14610174578063248a9ca3146101955780632f2ff15d146101c25780633013ce29146101e1575b5f5ffd5b34801561014b575f5ffd5b5061015f61015a3660046120df565b61047d565b60405190151581526020015b60405180910390f35b34801561017f575f5ffd5b5061019361018e366004612121565b6104b3565b005b3480156101a0575f5ffd5b506101b46101af36600461214b565b6105f9565b60405190815260200161016b565b3480156101cd575f5ffd5b506101936101dc366004612162565b610619565b3480156101ec575f5ffd5b50600154610200906001600160a01b031681565b6040516001600160a01b03909116815260200161016b565b348015610223575f5ffd5b506101b460025481565b348015610238575f5ffd5b50610193610247366004612162565b61063b565b348015610257575f5ffd5b50610193610266366004612190565b610673565b348015610276575f5ffd5b50600354610200906001600160a01b031681565b348015610295575f5ffd5b506101936102a43660046121cf565b610e3c565b6101936102b736600461220f565b610f70565b3480156102c7575f5ffd5b506101b4610f8b565b3480156102db575f5ffd5b506101936102ea36600461231d565b610fa6565b3480156102fa575f5ffd5b5061019361030936600461214b565b611140565b348015610319575f5ffd5b5061015f610328366004612162565b6111d0565b348015610338575f5ffd5b506101b45f81565b34801561034b575f5ffd5b50610370604051806040016040528060058152602001640352e302e360dc1b81525081565b60405161016b9190612389565b348015610388575f5ffd5b506101936103973660046123be565b611206565b3480156103a7575f5ffd5b506101936103b6366004612190565b6113ee565b3480156103c6575f5ffd5b506104056103d5366004612190565b5f602081815293815260408082208552928152828120909352825290208054600182015460029092015490919083565b6040805193845260208401929092529082015260600161016b565b34801561042b575f5ffd5b5061019361043a366004612162565b611793565b34801561044a575f5ffd5b506101936104593660046123be565b6117af565b348015610469575f5ffd5b506101936104783660046123f6565b61198e565b5f6001600160e01b03198216637965db0b60e01b14806104ad57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6104bb611a2a565b6001600160a01b0382165f908152602081815260408083208484528252808320338452825291829020825160608101845281548082526001830154938201939093526002909101549281019290925261055b5760405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f66666572000000000060448201526064015b60405180910390fd5b6001600160a01b038084165f90815260208181526040808320868452825280832033808552925282208281556001808201849055600290910192909255835191546105a7931691611a45565b604051339083906001600160a01b038616907f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d0905f90a4506105f560015f5160206125b05f395f51905f5255565b5050565b5f9081525f5160206125905f395f51905f52602052604090206001015490565b610622826105f9565b61062b81611a7a565b6106358383611a87565b50505050565b6001600160a01b03811633146106645760405163334bd91960e11b815260040160405180910390fd5b61066e8282611b2f565b505050565b61067b611a2a565b6001600160a01b038084165f90815260208181526040808320868452825280832093851683529281529082902082516060810184528154808252600183015493820193909352600290910154928101929092526107125760405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606401610552565b6001600160a01b038085165f8181526020818152604080832088845282528083209487168352939052828120818155600181018290556002015590516301ffc9a760e01b81526301ffc9a790610770906380ac58cd90600401612411565b602060405180830381865afa15801561078b573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107af9190612429565b15610a2f5780602001516001146108085760405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e742031006044820152606401610552565b6040516331a9108f60e11b815260048101849052849033906001600160a01b03831690636352211e90602401602060405180830381865afa15801561084f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108739190612448565b6001600160a01b0316146108c35760405162461bcd60e51b8152602060048201526017602482015276165bdd48191bc81b9bdd081bdddb881d1a1a5cc8139195604a1b6044820152606401610552565b60405163e985e9c560e01b81523360048201523060248201526001600160a01b0382169063e985e9c590604401602060405180830381865afa15801561090b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061092f9190612429565b806109a9575060405163020604bf60e21b81526004810185905230906001600160a01b0383169063081812fc90602401602060405180830381865afa15801561097a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061099e9190612448565b6001600160a01b0316145b6109c55760405162461bcd60e51b815260040161055290612463565b604051632142170760e11b81523360048201526001600160a01b038481166024830152604482018690528216906342842e0e906064015b5f604051808303815f87803b158015610a13575f5ffd5b505af1158015610a25573d5f5f3e3d5ffd5b5050505050610c78565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a790610a5f9063d9b67a2690600401612411565b602060405180830381865afa158015610a7a573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a9e9190612429565b15610c39576020810151604051627eeac760e11b8152336004820152602481018590528591906001600160a01b0383169062fdd58e90604401602060405180830381865afa158015610af2573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b1691906124a8565b1015610b5b5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606401610552565b60405163e985e9c560e01b81523360048201523060248201526001600160a01b0382169063e985e9c590604401602060405180830381865afa158015610ba3573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bc79190612429565b610be35760405162461bcd60e51b815260040161055290612463565b6020820151604051637921219560e11b81523360048201526001600160a01b03858116602483015260448201879052606482019290925260a060848201525f60a48201529082169063f242432a9060c4016109fc565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606401610552565b5f612710600254835f0151610c8d91906124d3565b610c9791906124ea565b825160405163152a902d60e11b81526004810187905260248101919091529091505f9081906001600160a01b03881690632a55205a906044016040805180830381865afa925050508015610d08575060408051601f3d908101601f19168201909252610d0591810190612509565b60015b15610d26576001600160a01b03821615610d23578093508192505b50505b8351610d328385612535565b1115610d48578351610d45908490612548565b91505b5f8284865f0151610d599190612548565b610d639190612548565b90505f84118015610d7e57506003546001600160a01b031615155b15610da057600354600154610da0916001600160a01b03918216911686611a45565b8215610dbd57600154610dbd906001600160a01b03168385611a45565b600154610dd4906001600160a01b03163383611a45565b84516020808701516040805193845291830152339189916001600160a01b038c16917f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a3910160405180910390a4505050505061066e60015f5160206125b05f395f51905f5255565b5f610e45611ba8565b805490915060ff600160401b820416159067ffffffffffffffff165f81158015610e6c5750825b90505f8267ffffffffffffffff166001148015610e885750303b155b905081158015610e96575080155b15610eb45760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610ede57845460ff60401b1916600160401b1785555b610ee6611bd0565b600180546001600160a01b038089166001600160a01b03199283161790925560038054928a1692909116919091179055610f205f88611a87565b508315610f6757845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050565b610f78611bda565b610f8182611c7e565b6105f58282611c88565b5f610f94611d44565b505f5160206125705f395f51905f5290565b610fae611a2a565b828114610ff15760405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606401610552565b5f5b83811015611129575f85858381811061100e5761100e61255b565b905060200201602081019061102391906123f6565b90505f8484848181106110385761103861255b565b6001600160a01b0385165f908152602081815260408083209382029590950135808352928152848220338352815290849020845160608101865281548082526001830154938201939093526002909101549481019490945290935015905061111e576001600160a01b038084165f90815260208181526040808320868452825280832033808552925282208281556001808201849055600290910192909255835191546110e6931691611a45565b604051339083906001600160a01b038616907f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d0905f90a45b505050600101610ff3565b5061063560015f5160206125b05f395f51905f5255565b5f61114a81611a7a565b6103e88211156111945760405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b6044820152606401610552565b60028290556040518281527fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de409060200160405180910390a15050565b5f9182525f5160206125905f395f51905f52602090815260408084206001600160a01b0393909316845291905290205460ff1690565b61120e611a2a565b6001600160a01b0384165f9081526020818152604080832086845282528083203384529091529020805461127b5760405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606401610552565b5f82116112ca5760405162461bcd60e51b815260206004820181905260248201527f4e6577207072696365206d7573742062652067726561746572207468616e20306044820152606401610552565b5f83116113235760405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608401610552565b80548083111561135557611350333061133c8487612548565b6001546001600160a01b0316929190611d8d565b61137e565b8083101561137e5761137e3361136b8584612548565b6001546001600160a01b03169190611a45565b828255600182018490554260028301556040805184815260208101869052339187916001600160a01b038a16917ffe240e6b60fba78dcf5eae78fca1a9b6ceaf51429c5036812d6b4f2f0a2dfada910160405180910390a4505061063560015f5160206125b05f395f51905f5255565b6113f6611a2a565b6001600160a01b038084165f908152602081815260408083208684528252808320938516835292815290829020825160608101845281548082526001830154938201939093526002909101549281019290925261148d5760405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606401610552565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a7906114bd906380ac58cd90600401612411565b602060405180830381865afa1580156114d8573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114fc9190612429565b156115bf576040516331a9108f60e11b81526004810184905233906001600160a01b03861690636352211e90602401602060405180830381865afa158015611546573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061156a9190612448565b6001600160a01b0316146115ba5760405162461bcd60e51b8152602060048201526017602482015276165bdd48191bc81b9bdd081bdddb881d1a1a5cc8139195604a1b6044820152606401610552565b6116e8565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a7906115ef9063d9b67a2690600401612411565b602060405180830381865afa15801561160a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061162e9190612429565b15610c39576020810151604051627eeac760e11b8152336004820152602481018590526001600160a01b0386169062fdd58e90604401602060405180830381865afa15801561167f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116a391906124a8565b10156115ba5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606401610552565b6001600160a01b038085165f908152602081815260408083208784528252808320868516845290915281208181556001808201839055600290910191909155825190546117389216908490611a45565b6040513381526001600160a01b038084169185918716907f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd309060200160405180910390a45061066e60015f5160206125b05f395f51905f5255565b61179c826105f9565b6117a581611a7a565b6106358383611b2f565b6117b7611a2a565b5f81116118115760405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608401610552565b5f82116118605760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610552565b6001600160a01b0384165f908152602081815260408083208684528252808320338452909152902054156118cd5760405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606401610552565b6001546118e5906001600160a01b0316333084611d8d565b604080516060810182528281526020808201858152428385019081526001600160a01b0389165f8181528085528681208a825285528681203380835290865290879020955186559251600186015590516002909401939093558351858152918201869052928692917f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf7910160405180910390a461063560015f5160206125b05f395f51905f5255565b5f61199881611a7a565b6001600160a01b0382166119e05760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606401610552565b600380546001600160a01b0319166001600160a01b0384169081179091556040517f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc2905f90a25050565b611a32611dc3565b60025f5160206125b05f395f51905f5255565b611a528383836001611df2565b61066e57604051635274afe760e01b81526001600160a01b0384166004820152602401610552565b611a848133611e54565b50565b5f5f5160206125905f395f51905f52611aa084846111d0565b611b1f575f848152602082815260408083206001600160a01b03871684529091529020805460ff19166001179055611ad53390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019150506104ad565b5f9150506104ad565b5092915050565b5f5f5160206125905f395f51905f52611b4884846111d0565b15611b1f575f848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a460019150506104ad565b5f807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006104ad565b611bd8611e8d565b565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480611c6057507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611c545f5160206125705f395f51905f52546001600160a01b031690565b6001600160a01b031614155b15611bd85760405163703e46dd60e11b815260040160405180910390fd5b5f6105f581611a7a565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611ce2575060408051601f3d908101601f19168201909252611cdf918101906124a8565b60015b611d0a57604051634c9c8ce360e01b81526001600160a01b0383166004820152602401610552565b5f5160206125705f395f51905f528114611d3a57604051632a87526960e21b815260048101829052602401610552565b61066e8383611eb2565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614611bd85760405163703e46dd60e11b815260040160405180910390fd5b611d9b848484846001611f07565b61063557604051635274afe760e01b81526001600160a01b0385166004820152602401610552565b5f5160206125b05f395f51905f5254600203611bd857604051633ee5aeb560e01b815260040160405180910390fd5b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316611e48578383151615611e3c573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b611e5e82826111d0565b6105f55760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610552565b611e95611f74565b611bd857604051631afcd79f60e31b815260040160405180910390fd5b611ebb82611f8d565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a2805115611eff5761066e8282611ff0565b6105f5612089565b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f51148316611f63578383151615611f57573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b5f611f7d611ba8565b54600160401b900460ff16919050565b806001600160a01b03163b5f03611fc257604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610552565b5f5160206125705f395f51905f5280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f611ffd84846120a8565b905080801561201e57505f3d118061201e57505f846001600160a01b03163b115b156120335761202b6120bb565b9150506104ad565b801561205d57604051639996b31560e01b81526001600160a01b0385166004820152602401610552565b3d156120705761206b6120d4565b611b28565b60405163d6bda27560e01b815260040160405180910390fd5b3415611bd85760405163b398979f60e01b815260040160405180910390fd5b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b5f602082840312156120ef575f5ffd5b81356001600160e01b031981168114612106575f5ffd5b9392505050565b6001600160a01b0381168114611a84575f5ffd5b5f5f60408385031215612132575f5ffd5b823561213d8161210d565b946020939093013593505050565b5f6020828403121561215b575f5ffd5b5035919050565b5f5f60408385031215612173575f5ffd5b8235915060208301356121858161210d565b809150509250929050565b5f5f5f606084860312156121a2575f5ffd5b83356121ad8161210d565b92506020840135915060408401356121c48161210d565b809150509250925092565b5f5f604083850312156121e0575f5ffd5b82356121eb8161210d565b915060208301356121858161210d565b634e487b7160e01b5f52604160045260245ffd5b5f5f60408385031215612220575f5ffd5b823561222b8161210d565b9150602083013567ffffffffffffffff811115612246575f5ffd5b8301601f81018513612256575f5ffd5b803567ffffffffffffffff811115612270576122706121fb565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561229f5761229f6121fb565b6040528181528282016020018710156122b6575f5ffd5b816020840160208301375f602083830101528093505050509250929050565b5f5f83601f8401126122e5575f5ffd5b50813567ffffffffffffffff8111156122fc575f5ffd5b6020830191508360208260051b8501011115612316575f5ffd5b9250929050565b5f5f5f5f60408587031215612330575f5ffd5b843567ffffffffffffffff811115612346575f5ffd5b612352878288016122d5565b909550935050602085013567ffffffffffffffff811115612371575f5ffd5b61237d878288016122d5565b95989497509550505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f5f5f5f608085870312156123d1575f5ffd5b84356123dc8161210d565b966020860135965060408601359560600135945092505050565b5f60208284031215612406575f5ffd5b81356121068161210d565b60e09190911b6001600160e01b031916815260200190565b5f60208284031215612439575f5ffd5b81518015158114612106575f5ffd5b5f60208284031215612458575f5ffd5b81516121068161210d565b60208082526025908201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656040820152641c8813919560da1b606082015260800190565b5f602082840312156124b8575f5ffd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b80820281158282048414176104ad576104ad6124bf565b5f8261250457634e487b7160e01b5f52601260045260245ffd5b500490565b5f5f6040838503121561251a575f5ffd5b82516125258161210d565b6020939093015192949293505050565b808201808211156104ad576104ad6124bf565b818103818111156104ad576104ad6124bf565b634e487b7160e01b5f52603260045260245ffdfe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b6268009b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a264697066735822122019482d29580c1395c9ca491cb943d79353799e638a22245368cac55d5c020b3d64736f6c634300081c0033"
    },
    "ReentrantDonor": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_bragNFT",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "attack",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "bragNFT",
          "outputs": [
            {
              "internalType": "contract BragNFT",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610354380380610354833981016040819052602b91604e565b5f80546001600160a01b0319166001600160a01b03929092169190911790556079565b5f60208284031215605d575f5ffd5b81516001600160a01b03811681146072575f5ffd5b9392505050565b6102ce806100865f395ff3fe608060405260043610610036575f3560e01c8063150b7a021461004157806351e361671461007e5780639e5faafc146100b4575f5ffd5b3661003d57005b5f5ffd5b34801561004c575f5ffd5b5061006061005b366004610203565b6100be565b6040516001600160e01b031990911681526020015b60405180910390f35b348015610089575f5ffd5b505f5461009c906001600160a01b031681565b6040516001600160a01b039091168152602001610075565b6100bc610160565b005b5f80546040516334e4cf0760e21b81526060600482015260076064820152663932b2b73a32b960c91b608482015260a0602482015260a48101839052604481018390526001600160a01b039091169063d3933c1c9067016345785d8a00009060c4015f604051808303818588803b158015610137575f5ffd5b505af1158015610149573d5f5f3e3d5ffd5b50630a85bd0160e11b9a9950505050505050505050565b5f80546040516334e4cf0760e21b815260606004820152600660648201526561747461636b60d01b608482015260a0602482015260a4810183905260448101929092526001600160a01b03169063d3933c1c90349060c4015f604051808303818588803b1580156101cf575f5ffd5b505af11580156101e1573d5f5f3e3d5ffd5b5050505050565b80356001600160a01b03811681146101fe575f5ffd5b919050565b5f5f5f5f5f60808688031215610217575f5ffd5b610220866101e8565b945061022e602087016101e8565b935060408601359250606086013567ffffffffffffffff811115610250575f5ffd5b8601601f81018813610260575f5ffd5b803567ffffffffffffffff811115610276575f5ffd5b886020828401011115610287575f5ffd5b95989497509295505050602001919056fea26469706673582212203b1549247bbf1e095ead18de5c997916244ea0109d10822b86e86c89ad76a8db64736f6c634300081c0033"
    },
    "RevertingRoyaltyNFT": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_reverter",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721IncorrectOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721InsufficientApproval",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "approver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidApprover",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOperator",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidOwner",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidReceiver",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ERC721InvalidSender",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ERC721NonexistentToken",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "reverter",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "royaltyFee",
              "type": "uint256"
            }
          ],
          "name": "royaltyInfo",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161154338038061154383398101604081905261002e91610459565b60405180604001604052806009815260200168526576657274696e6760b81b815250604051806040016040528060038152602001622922ab60e91b815250815f908161007a919061051d565b506001610087828261051d565b5050600680546001600160a01b0319166001600160a01b038416179055506100af335f6100b5565b506105d7565b6001600160a01b0382166100e357604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f6100ef838383610120565b90506001600160a01b0381161561011b576040516339e3563760e11b81525f60048201526024016100da565b505050565b5f828152600260205260408120546001600160a01b039081169083161561014c5761014c818486610212565b6001600160a01b03811615610186576101675f858180610276565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156101b4576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b61021d838383610398565b61011b576001600160a01b03831661024b57604051637e27328960e01b8152600481018290526024016100da565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016100da565b808061028a57506001600160a01b03821615155b15610369575f6102998461041b565b90506001600160a01b038316158015906102c55750826001600160a01b0316816001600160a01b031614155b80156102f657506001600160a01b038082165f9081526005602090815260408083209387168352929052205460ff16155b1561031f5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016100da565b81156103675783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f6001600160a01b038316158015906104135750826001600160a01b0316846001600160a01b031614806103f057506001600160a01b038085165f9081526005602090815260408083209387168352929052205460ff165b8061041357505f828152600460205260409020546001600160a01b038481169116145b949350505050565b5f818152600260205260408120546001600160a01b03168061045357604051637e27328960e01b8152600481018490526024016100da565b92915050565b5f60208284031215610469575f5ffd5b81516001600160a01b038116811461047f575f5ffd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806104ae57607f821691505b6020821081036104cc57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561011b57805f5260205f20601f840160051c810160208510156104f75750805b601f840160051c820191505b81811015610516575f8155600101610503565b5050505050565b81516001600160401b0381111561053657610536610486565b61054a81610544845461049a565b846104d2565b6020601f82116001811461057c575f83156105655750848201515b5f19600385901b1c1916600184901b178455610516565b5f84815260208120601f198516915b828110156105ab578785015182556020948501946001909201910161058b565b50848210156105c857868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b610f5f806105e45f395ff3fe608060405234801561000f575f5ffd5b50600436106100f0575f3560e01c806342842e0e11610093578063a22cb46511610063578063a22cb46514610225578063b88d4fde14610238578063c87b56dd1461024b578063e985e9c51461025e575f5ffd5b806342842e0e146101d65780636352211e146101e957806370a08231146101fc57806395d89b411461021d575f5ffd5b8063095ea7b3116100ce578063095ea7b31461015c57806323b872dd146101715780632a55205a1461018457806335ff0103146101c3575f5ffd5b806301ffc9a7146100f457806306fdde031461011c578063081812fc14610131575b5f5ffd5b610107610102366004610bec565b610271565b60405190151581526020015b60405180910390f35b61012461029b565b6040516101139190610c35565b61014461013f366004610c47565b61032a565b6040516001600160a01b039091168152602001610113565b61016f61016a366004610c79565b610351565b005b61016f61017f366004610ca1565b610360565b6101a4610192366004610cdb565b6006546001600160a01b031692909150565b604080516001600160a01b039093168352602083019190915201610113565b600654610144906001600160a01b031681565b61016f6101e4366004610ca1565b6103ee565b6101446101f7366004610c47565b61040d565b61020f61020a366004610cfb565b610417565b604051908152602001610113565b61012461045c565b61016f610233366004610d14565b61046b565b61016f610246366004610d61565b610476565b610124610259366004610c47565b61048e565b61010761026c366004610e3e565b6104ff565b5f6001600160e01b0319821663152a902d60e11b148061029557506102958261052c565b92915050565b60605f80546102a990610e6f565b80601f01602080910402602001604051908101604052809291908181526020018280546102d590610e6f565b80156103205780601f106102f757610100808354040283529160200191610320565b820191905f5260205f20905b81548152906001019060200180831161030357829003601f168201915b5050505050905090565b5f6103348261057b565b505f828152600460205260409020546001600160a01b0316610295565b61035c8282336105b3565b5050565b6001600160a01b03821661038e57604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f61039a8383336105c0565b9050836001600160a01b0316816001600160a01b0316146103e8576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610385565b50505050565b61040883838360405180602001604052805f815250610476565b505050565b5f6102958261057b565b5f6001600160a01b038216610441576040516322718ad960e21b81525f6004820152602401610385565b506001600160a01b03165f9081526003602052604090205490565b6060600180546102a990610e6f565b61035c3383836106b2565b610481848484610360565b6103e83385858585610779565b60606104998261057b565b505f6104af60408051602081019091525f815290565b90505f8151116104cd5760405180602001604052805f8152506104f8565b806104d7846108a1565b6040516020016104e8929190610ebe565b6040516020818303038152906040525b9392505050565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f6001600160e01b031982166380ac58cd60e01b148061055c57506001600160e01b03198216635b5e139f60e01b145b8061029557506301ffc9a760e01b6001600160e01b0319831614610295565b5f818152600260205260408120546001600160a01b03168061029557604051637e27328960e01b815260048101849052602401610385565b6104088383836001610931565b5f828152600260205260408120546001600160a01b03908116908316156105ec576105ec818486610a35565b6001600160a01b03811615610626576106075f855f5f610931565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615610654576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6001600160a01b0383166106db5760405163a9fbf51f60e01b81525f6004820152602401610385565b6001600160a01b03821661070d57604051630b61174360e31b81526001600160a01b0383166004820152602401610385565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561089a57604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906107bb908890889087908790600401610ed2565b6020604051808303815f875af19250505080156107f5575060408051601f3d908101601f191682019092526107f291810190610f0e565b60015b61085c573d808015610822576040519150601f19603f3d011682016040523d82523d5f602084013e610827565b606091505b5080515f0361085457604051633250574960e11b81526001600160a01b0385166004820152602401610385565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b1461089857604051633250574960e11b81526001600160a01b0385166004820152602401610385565b505b5050505050565b60605f6108ad83610a99565b60010190505f8167ffffffffffffffff8111156108cc576108cc610d4d565b6040519080825280601f01601f1916602001820160405280156108f6576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461090057509392505050565b808061094557506001600160a01b03821615155b15610a06575f6109548461057b565b90506001600160a01b038316158015906109805750826001600160a01b0316816001600160a01b031614155b8015610993575061099181846104ff565b155b156109bc5760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610385565b8115610a045783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610a40838383610b70565b610408576001600160a01b038316610a6e57604051637e27328960e01b815260048101829052602401610385565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610385565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610ad75772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610b03576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610b2157662386f26fc10000830492506010015b6305f5e1008310610b39576305f5e100830492506008015b6127108310610b4d57612710830492506004015b60648310610b5f576064830492506002015b600a83106102955760010192915050565b5f6001600160a01b03831615801590610bcc5750826001600160a01b0316846001600160a01b03161480610ba95750610ba984846104ff565b80610bcc57505f828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160e01b031981168114610be9575f5ffd5b50565b5f60208284031215610bfc575f5ffd5b81356104f881610bd4565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6104f86020830184610c07565b5f60208284031215610c57575f5ffd5b5035919050565b80356001600160a01b0381168114610c74575f5ffd5b919050565b5f5f60408385031215610c8a575f5ffd5b610c9383610c5e565b946020939093013593505050565b5f5f5f60608486031215610cb3575f5ffd5b610cbc84610c5e565b9250610cca60208501610c5e565b929592945050506040919091013590565b5f5f60408385031215610cec575f5ffd5b50508035926020909101359150565b5f60208284031215610d0b575f5ffd5b6104f882610c5e565b5f5f60408385031215610d25575f5ffd5b610d2e83610c5e565b915060208301358015158114610d42575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215610d74575f5ffd5b610d7d85610c5e565b9350610d8b60208601610c5e565b925060408501359150606085013567ffffffffffffffff811115610dad575f5ffd5b8501601f81018713610dbd575f5ffd5b803567ffffffffffffffff811115610dd757610dd7610d4d565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610e0657610e06610d4d565b604052818152828201602001891015610e1d575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215610e4f575f5ffd5b610e5883610c5e565b9150610e6660208401610c5e565b90509250929050565b600181811c90821680610e8357607f821691505b602082108103610ea157634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f610bcc610ecc8386610ea7565b84610ea7565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90610f0490830184610c07565b9695505050505050565b5f60208284031215610f1e575f5ffd5b81516104f881610bd456fea2646970667358221220efbb7b2fe83fe8e4dd2cf98d980860b5c833102f08c3f7a94d43756d7a93ed4c64736f6c634300081c0033"
    },
    "Treasury": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "AccountUnauthorized",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            }
          ],
          "name": "AddressEmptyCode",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "AlreadyApproved",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "AlreadyCanceled",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "AlreadyExecuted",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "AlreadyOwner",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ECDSAInvalidSignature",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "name": "ECDSAInvalidSignatureLength",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "ECDSAInvalidSignatureS",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "ERC1967InvalidImplementation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ERC1967NonPayable",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ExecutionFailed",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "FailedCall",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidInitialization",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidOwner",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "InvalidThreshold",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotInitializing",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotOwner",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "NotProposer",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ProposalNotFound",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "ThresholdNotMet",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "UUPSUnauthorizedCallContext",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            }
          ],
          "name": "UUPSUnsupportedProxiableUUID",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "Approved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            }
          ],
          "name": "Canceled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            }
          ],
          "name": "Executed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "version",
              "type": "uint64"
            }
          ],
          "name": "Initialized",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "OwnerAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "OwnerRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "Proposed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "threshold",
              "type": "uint256"
            }
          ],
          "name": "ThresholdChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "UPGRADE_INTERFACE_VERSION",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "addOwner",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "name": "cancel",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newThreshold",
              "type": "uint256"
            }
          ],
          "name": "changeThreshold",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "entryPoint",
          "outputs": [
            {
              "internalType": "contract IEntryPoint",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "name": "execute",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            }
          ],
          "name": "executeProposal",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint192",
              "name": "key",
              "type": "uint192"
            }
          ],
          "name": "getNonce",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getNonce",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getOwners",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "hasApproved",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "initialOwners",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "initialThreshold",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "entryPointAddress",
              "type": "address"
            }
          ],
          "name": "initialize",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "isOwner",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "hash",
              "type": "bytes32"
            },
            {
              "internalType": "bytes",
              "name": "signature",
              "type": "bytes"
            }
          ],
          "name": "isValidSignature",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "name": "onERC1155BatchReceived",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "name": "onERC1155Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
          "name": "onERC721Received",
          "outputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proposalCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "proposals",
          "outputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bool",
              "name": "executed",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "canceled",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "approvalCount",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "name": "propose",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "proxiableUUID",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "removeOwner",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "threshold",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newImplementation",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "upgradeToAndCall",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "initCode",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "callData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes32",
                  "name": "accountGasLimits",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "preVerificationGas",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "gasFees",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes",
                  "name": "paymasterAndData",
                  "type": "bytes"
                },
                {
                  "internalType": "bytes",
                  "name": "signature",
                  "type": "bytes"
                }
              ],
              "internalType": "struct PackedUserOperation",
              "name": "userOp",
              "type": "tuple"
            },
            {
              "internalType": "bytes32",
              "name": "userOpHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "missingAccountFunds",
              "type": "uint256"
            }
          ],
          "name": "validateUserOp",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x60a060405230608052348015610013575f5ffd5b5061001c610021565b6100d3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100715760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b60805161274a6100f95f395f81816116440152818161166d01526117cd015261274a5ff3fe608060405260043610610197575f3560e01c80634f1ef286116100e7578063a0e67e2b11610087578063bc197c8111610062578063bc197c81146104e3578063d087d2881461050e578063da35c66414610522578063f23a6e6114610537575f5ffd5b8063a0e67e2b1461045e578063ad3cb1cc1461047f578063b0d691fe146104bc575f5ffd5b8063694e80c3116100c2578063694e80c3146103e25780637065cb481461040157806372483bf91461042057806374420f4c1461043f575f5ffd5b80634f1ef2861461039c57806352d1902d146103af5780635d35a3d9146103c3575f5ffd5b8063173825d9116101525780632f54bf6e1161012d5780632f54bf6e1461032a5780633b8ba862146103495780633e1b08121461036857806342cde4e814610387575f5ffd5b8063173825d91461029757806319822f7c146102b65780632358d5a8146102e3575f5ffd5b8062efa895146101a2578063013cf08b146101c357806301ffc9a7146101fe5780630d61b5191461022d578063150b7a02146102405780631626ba7e14610278575f5ffd5b3661019e57005b5f5ffd5b3480156101ad575f5ffd5b506101c16101bc366004611d8f565b610562565b005b3480156101ce575f5ffd5b506101e26101dd366004611daf565b610673565b6040516101f59796959493929190611df4565b60405180910390f35b348015610209575f5ffd5b5061021d610218366004611e49565b610750565b60405190151581526020016101f5565b6101c161023b366004611daf565b610786565b34801561024b575f5ffd5b5061025f61025a366004611f3a565b6108f3565b6040516001600160e01b031990911681526020016101f5565b348015610283575f5ffd5b5061025f610292366004611fe1565b610904565b3480156102a2575f5ffd5b506101c16102b1366004612028565b610935565b3480156102c1575f5ffd5b506102d56102d0366004612041565b610a0c565b6040519081526020016101f5565b3480156102ee575f5ffd5b5061021d6102fd36600461208f565b5f8281526005602081815260408084206001600160a01b0386168552909201905290205460ff1692915050565b348015610335575f5ffd5b5061021d610344366004612028565b610a39565b348015610354575f5ffd5b506102d56103633660046120b9565b610a44565b348015610373575f5ffd5b506102d5610382366004612115565b610b83565b348015610392575f5ffd5b506102d560025481565b6101c16103aa36600461213b565b610c0d565b3480156103ba575f5ffd5b506102d5610c2c565b3480156103ce575f5ffd5b506101c16103dd366004611d8f565b610c47565b3480156103ed575f5ffd5b506101c16103fc366004611daf565b610d90565b34801561040c575f5ffd5b506101c161041b366004612028565b610e1f565b34801561042b575f5ffd5b506101c161043a3660046121a7565b610ec5565b34801561044a575f5ffd5b506101c16104593660046120b9565b6111ae565b348015610469575f5ffd5b506104726112ce565b6040516101f5919061225c565b34801561048a575f5ffd5b506104af604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516101f591906122a7565b3480156104c7575f5ffd5b506003546040516001600160a01b0390911681526020016101f5565b3480156104ee575f5ffd5b5061025f6104fd36600461231e565b63bc197c8160e01b95945050505050565b348015610519575f5ffd5b506102d56112de565b34801561052d575f5ffd5b506102d560065481565b348015610542575f5ffd5b5061025f6105513660046123ca565b63f23a6e6160e01b95945050505050565b5f61056c826112e8565b905060065483106105905760405163635e873760e01b815260040160405180910390fd5b5f838152600560205260409020600381015460ff16156105c357604051630dc1019760e01b815260040160405180910390fd5b6003810154610100900460ff16156105ee57604051632583715b60e11b815260040160405180910390fd5b60038101546001600160a01b038381166201000090920416148015906106145750333014155b1561063257604051637d1b73b960e01b815260040160405180910390fd5b60038101805461ff00191661010017905560405184907f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e9905f90a250505050565b60056020525f90815260409020805460018201546002830180546001600160a01b039093169391926106a49061241d565b80601f01602080910402602001604051908101604052809291908181526020018280546106d09061241d565b801561071b5780601f106106f25761010080835404028352916020019161071b565b820191905f5260205f20905b8154815290600101906020018083116106fe57829003601f168201915b505050506003830154600490930154919260ff8082169361010083049091169250620100009091046001600160a01b03169087565b5f6001600160e01b03198216630271189760e51b148061078057506301ffc9a760e01b6001600160e01b03198316145b92915050565b60065481106107a85760405163635e873760e01b815260040160405180910390fd5b5f818152600560205260409020600381015460ff16156107db57604051630dc1019760e01b815260040160405180910390fd5b6003810154610100900460ff161561080657604051632583715b60e11b815260040160405180910390fd5b6002548160040154101561082d576040516359fa4a9360e01b815260040160405180910390fd5b60038101805460ff191660019081179091558154908201546040515f926001600160a01b03169190610863906002860190612455565b5f6040518083038185875af1925050503d805f811461089d576040519150601f19603f3d011682016040523d82523d5f602084013e6108a2565b606091505b50509050806108c457604051632b3f6d1160e21b815260040160405180910390fd5b60405183907fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b67905f90a2505050565b630a85bd0160e11b5b949350505050565b5f61091084848461132c565b156109235750630b135d3f60e11b61092e565b506001600160e01b03195b9392505050565b33301461095c57604051637cf8632b60e01b81523360048201526024015b60405180910390fd5b6109665f8261140a565b610983576040516330cd747160e01b815260040160405180910390fd5b60025461098f5f61141e565b10156109ae5760405163aabd5a0960e01b815260040160405180910390fd5b6109b75f61141e565b5f036109d65760405163aabd5a0960e01b815260040160405180910390fd5b6040516001600160a01b038216907f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da905f90a250565b5f610a15611427565b5f610a2e8585610a296101008301836124c6565b611479565b90506108fc836115d2565b5f61078081836115f1565b5f81610a57610a52826112e8565b611612565b5f610a61846112e8565b600680549192505f919082610a758361251c565b909155505f81815260056020526040902080546001600160a01b0319166001600160a01b038c16178155600181018a905590915060028101610ab8888a8361257f565b5060038101805462010000600160b01b031916620100006001600160a01b0386169081029190911790915560405183907f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c7681290610b1b908e908e908e908e90612638565b60405180910390a36001600160a01b0383165f818152600583016020526040808220805460ff1916600190811790915560048501555184917f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a9976891a35098975050505050505050565b5f610b966003546001600160a01b031690565b604051631aab3f0d60e11b81523060048201526001600160c01b03841660248201526001600160a01b0391909116906335567e1a90604401602060405180830381865afa158015610be9573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610780919061267f565b610c15611639565b610c1e826116df565b610c288282611701565b5050565b5f610c356117c2565b505f5160206126f55f395f51905f5290565b80610c54610a52826112e8565b5f610c5e836112e8565b90506006548410610c825760405163635e873760e01b815260040160405180910390fd5b5f848152600560205260409020600381015460ff1615610cb557604051630dc1019760e01b815260040160405180910390fd5b6003810154610100900460ff1615610ce057604051632583715b60e11b815260040160405180910390fd5b6001600160a01b0382165f90815260058201602052604090205460ff1615610d1b5760405163080fc0bd60e11b815260040160405180910390fd5b6001600160a01b0382165f9081526005820160205260408120805460ff1916600117905560048201805491610d4f8361251c565b90915550506040516001600160a01b0383169086907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a99768905f90a35050505050565b333014610db257604051637cf8632b60e01b8152336004820152602401610953565b801580610dc65750610dc35f61141e565b81115b15610de45760405163aabd5a0960e01b815260040160405180910390fd5b60028190556040518181527f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa9060200160405180910390a150565b333014610e4157604051637cf8632b60e01b8152336004820152602401610953565b6001600160a01b038116610e68576040516349e27cff60e01b815260040160405180910390fd5b610e725f8261180b565b610e8f5760405163600acf0760e11b815260040160405180910390fd5b6040516001600160a01b038216907f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3905f90a250565b5f610ece61181f565b805490915060ff600160401b82041615906001600160401b03165f81158015610ef45750825b90505f826001600160401b03166001148015610f0f5750303b155b905081158015610f1d575080155b15610f3b5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610f6557845460ff60401b1916600160401b1785555b5f885111610faa5760405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606401610953565b5f87118015610fba575087518711155b610ffa5760405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606401610953565b6001600160a01b0386166110455760405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606401610953565b5f5b885181101561110a575f89828151811061106357611063612696565b602002602001015190505f6001600160a01b0316816001600160a01b0316036110be5760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606401610953565b6110c85f8261180b565b15611101576040516001600160a01b038216907f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3905f90a25b50600101611047565b506002879055600380546001600160a01b0319166001600160a01b0388161790556040518781527f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa9060200160405180910390a183156111a457845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050505050565b6003546001600160a01b031633036111e8576002546001146111e35760405163aabd5a0960e01b815260040160405180910390fd5b61121b565b33301461121b576111f833611612565b60025460011461121b5760405163aabd5a0960e01b815260040160405180910390fd5b5f856001600160a01b03168585856040516112379291906126aa565b5f6040518083038185875af1925050503d805f8114611271576040519150601f19603f3d011682016040523d82523d5f602084013e611276565b606091505b505090508061129857604051632b3f6d1160e21b815260040160405180910390fd5b6003546001600160a01b031633036112c6575f82815260046020526040902080546001600160a01b03191690555b505050505050565b60606112d95f611847565b905090565b5f6112d95f610b83565b5f6112fb6003546001600160a01b031690565b6001600160a01b0316330361132557505f908152600460205260409020546001600160a01b031690565b5033919050565b5f5f61136d8585858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061185392505050565b90506113795f826115f1565b1561138857600191505061092e565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f908152601c869052603c90206113f59085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061185392505050565b90506114015f826115f1565b95945050505050565b5f61092e836001600160a01b03841661187b565b5f610780825490565b3361143a6003546001600160a01b031690565b6001600160a01b0316816001600160a01b03161461147657604051637cf8632b60e01b81526001600160a01b0382166004820152602401610953565b50565b5f5f5f6114bb8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061196592505050565b5090925090505f8160038111156114d4576114d46126b9565b1415806114e857506114e65f836115f1565b155b15611597577f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f908152601c879052603c902061155a9086868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061196592505050565b5090925090505f816003811115611573576115736126b9565b14158061158757506115855f836115f1565b155b15611597576001925050506108fc565b506020958601355f90815260049096526040862080546001600160a01b0319166001600160a01b039290921691909117905550929392505050565b801561147657610c28338260405180602001604052805f8152506119ae565b6001600160a01b0381165f908152600183016020526040812054151561092e565b61161c5f826115f1565b611476576040516330cd747160e01b815260040160405180910390fd5b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806116bf57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166116b35f5160206126f55f395f51905f52546001600160a01b031690565b6001600160a01b031614155b156116dd5760405163703e46dd60e11b815260040160405180910390fd5b565b33301461147657604051637cf8632b60e01b8152336004820152602401610953565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561175b575060408051601f3d908101601f191682019092526117589181019061267f565b60015b61178357604051634c9c8ce360e01b81526001600160a01b0383166004820152602401610953565b5f5160206126f55f395f51905f5281146117b357604051632a87526960e21b815260048101829052602401610953565b6117bd83836119c3565b505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146116dd5760405163703e46dd60e11b815260040160405180910390fd5b5f61092e836001600160a01b038416611a18565b5f807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610780565b60605f61092e83611a64565b5f5f5f5f6118618686611965565b9250925092506118718282611abd565b5090949350505050565b5f8181526001830160205260408120548015611955575f61189d6001836126cd565b85549091505f906118b0906001906126cd565b905080821461190f575f865f0182815481106118ce576118ce612696565b905f5260205f200154905080875f0184815481106118ee576118ee612696565b5f918252602080832090910192909255918252600188019052604090208390555b8554869080611920576119206126e0565b600190038181905f5260205f20015f90559055856001015f8681526020019081526020015f205f905560019350505050610780565b5f915050610780565b5092915050565b5f5f5f835160410361199c576020840151604085015160608601515f1a61198e88828585611b75565b9550955095505050506119a7565b505081515f91506002905b9250925092565b5f5f5f83516020850186885af1949350505050565b6119cc82611c3d565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a2805115611a10576117bd8282611ca0565b610c28611d39565b5f818152600183016020526040812054611a5d57508154600181810184555f848152602080822090930184905584548482528286019093526040902091909155610780565b505f610780565b6060815f01805480602002602001604051908101604052809291908181526020018280548015611ab157602002820191905f5260205f20905b815481526020019060010190808311611a9d575b50505050509050919050565b5f826003811115611ad057611ad06126b9565b03611ad9575050565b6001826003811115611aed57611aed6126b9565b03611b0b5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115611b1f57611b1f6126b9565b03611b405760405163fce698f760e01b815260048101829052602401610953565b6003826003811115611b5457611b546126b9565b03610c28576040516335e2f38360e21b815260048101829052602401610953565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115611bae57505f91506003905082611c33565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611bff573d5f5f3e3d5ffd5b5050604051601f1901519150506001600160a01b038116611c2a57505f925060019150829050611c33565b92505f91508190505b9450945094915050565b806001600160a01b03163b5f03611c7257604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610953565b5f5160206126f55f395f51905f5280546001600160a01b0319166001600160a01b0392909216919091179055565b60605f611cad8484611d58565b9050808015611cce57505f3d1180611cce57505f846001600160a01b03163b115b15611ce357611cdb611d6b565b915050610780565b8015611d0d57604051639996b31560e01b81526001600160a01b0385166004820152602401610953565b3d15611d2057611d1b611d84565b61195e565b60405163d6bda27560e01b815260040160405180910390fd5b34156116dd5760405163b398979f60e01b815260040160405180910390fd5b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b5f5f60408385031215611da0575f5ffd5b50508035926020909101359150565b5f60208284031215611dbf575f5ffd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b60018060a01b038816815286602082015260e060408201525f611e1a60e0830188611dc6565b95151560608301525092151560808401526001600160a01b039190911660a083015260c0909101529392505050565b5f60208284031215611e59575f5ffd5b81356001600160e01b03198116811461092e575f5ffd5b80356001600160a01b0381168114611e86575f5ffd5b919050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b0381118282101715611ec757611ec7611e8b565b604052919050565b5f82601f830112611ede575f5ffd5b81356001600160401b03811115611ef757611ef7611e8b565b611f0a601f8201601f1916602001611e9f565b818152846020838601011115611f1e575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215611f4d575f5ffd5b611f5685611e70565b9350611f6460208601611e70565b92506040850135915060608501356001600160401b03811115611f85575f5ffd5b611f9187828801611ecf565b91505092959194509250565b5f5f83601f840112611fad575f5ffd5b5081356001600160401b03811115611fc3575f5ffd5b602083019150836020828501011115611fda575f5ffd5b9250929050565b5f5f5f60408486031215611ff3575f5ffd5b8335925060208401356001600160401b0381111561200f575f5ffd5b61201b86828701611f9d565b9497909650939450505050565b5f60208284031215612038575f5ffd5b61092e82611e70565b5f5f5f60608486031215612053575f5ffd5b83356001600160401b03811115612068575f5ffd5b8401610120818703121561207a575f5ffd5b95602085013595506040909401359392505050565b5f5f604083850312156120a0575f5ffd5b823591506120b060208401611e70565b90509250929050565b5f5f5f5f5f608086880312156120cd575f5ffd5b6120d686611e70565b94506020860135935060408601356001600160401b038111156120f7575f5ffd5b61210388828901611f9d565b96999598509660600135949350505050565b5f60208284031215612125575f5ffd5b81356001600160c01b038116811461092e575f5ffd5b5f5f6040838503121561214c575f5ffd5b61215583611e70565b915060208301356001600160401b0381111561216f575f5ffd5b61217b85828601611ecf565b9150509250929050565b5f6001600160401b0382111561219d5761219d611e8b565b5060051b60200190565b5f5f5f606084860312156121b9575f5ffd5b83356001600160401b038111156121ce575f5ffd5b8401601f810186136121de575f5ffd5b80356121f16121ec82612185565b611e9f565b8082825260208201915060208360051b850101925088831115612212575f5ffd5b6020840193505b8284101561223b5761222a84611e70565b825260209384019390910190612219565b95505050506020840135915061225360408501611e70565b90509250925092565b602080825282518282018190525f918401906040840190835b8181101561229c5783516001600160a01b0316835260209384019390920191600101612275565b509095945050505050565b602081525f61092e6020830184611dc6565b5f82601f8301126122c8575f5ffd5b81356122d66121ec82612185565b8082825260208201915060208360051b8601019250858311156122f7575f5ffd5b602085015b838110156123145780358352602092830192016122fc565b5095945050505050565b5f5f5f5f5f60a08688031215612332575f5ffd5b61233b86611e70565b945061234960208701611e70565b935060408601356001600160401b03811115612363575f5ffd5b61236f888289016122b9565b93505060608601356001600160401b0381111561238a575f5ffd5b612396888289016122b9565b92505060808601356001600160401b038111156123b1575f5ffd5b6123bd88828901611ecf565b9150509295509295909350565b5f5f5f5f5f60a086880312156123de575f5ffd5b6123e786611e70565b94506123f560208701611e70565b9350604086013592506060860135915060808601356001600160401b038111156123b1575f5ffd5b600181811c9082168061243157607f821691505b60208210810361244f57634e487b7160e01b5f52602260045260245ffd5b50919050565b5f5f83546124628161241d565b600182168015612479576001811461248e576124bb565b60ff19831686528115158202860193506124bb565b865f5260205f205f5b838110156124b357815488820152600190910190602001612497565b505081860193505b509195945050505050565b5f5f8335601e198436030181126124db575f5ffd5b8301803591506001600160401b038211156124f4575f5ffd5b602001915036819003821315611fda575f5ffd5b634e487b7160e01b5f52601160045260245ffd5b5f6001820161252d5761252d612508565b5060010190565b601f8211156117bd57805f5260205f20601f840160051c810160208510156125595750805b601f840160051c820191505b81811015612578575f8155600101612565565b5050505050565b6001600160401b0383111561259657612596611e8b565b6125aa836125a4835461241d565b83612534565b5f601f8411600181146125db575f85156125c45750838201355b5f19600387901b1c1916600186901b178355612578565b5f83815260208120601f198716915b8281101561260a57868501358255602094850194600190920191016125ea565b5086821015612626575f1960f88860031b161c19848701351681555b505060018560011b0183555050505050565b6001600160a01b0385168152602081018490526060604082018190528101829052818360808301375f818301608090810191909152601f909201601f191601019392505050565b5f6020828403121561268f575f5ffd5b5051919050565b634e487b7160e01b5f52603260045260245ffd5b818382375f9101908152919050565b634e487b7160e01b5f52602160045260245ffd5b8181038181111561078057610780612508565b634e487b7160e01b5f52603160045260245ffdfe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220cb3f844d2e45dad626e30f08ba068cdbd32eb0fdc19eaa51ecb2669d10eadb0864736f6c634300081c0033"
    },
    "TreasuryFactory": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_implementation",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "treasury",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address[]",
              "name": "owners",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "threshold",
              "type": "uint256"
            }
          ],
          "name": "TreasuryCreated",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "owners",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "threshold",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "entryPoint",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "name": "createTreasury",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "owners",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "threshold",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "entryPoint",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "name": "getAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "implementation",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
      "bytecode": "0x60a0604052348015600e575f5ffd5b5060405161098c38038061098c833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b60805161090161008b5f395f818160480152818161012a01526101f701526109015ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c80635c60da1b1461004357806389ac7d8b14610086578063c70d2a0314610099575b5f5ffd5b61006a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61006a61009436600461031c565b6100ac565b61006a6100a736600461031c565b61019f565b5f5f6372483bf960e01b8686866040516024016100cb9392919061044b565b60408051601f19818403018152918152602080830180516001600160e01b03166001600160e01b031990951694909417909352519092505f9161010f9082016102e0565b601f1982820381018352601f909101166040819052610154907f000000000000000000000000000000000000000000000000000000000000000090859060200161047d565b60408051601f198184030181529082905261017292916020016104d8565b604051602081830303815290604052905061019484828051906020012061029b565b979650505050505050565b5f5f6372483bf960e01b8686866040516024016101be9392919061044b565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b03838183161783525050505090505f837f000000000000000000000000000000000000000000000000000000000000000083604051610223906102e0565b61022e92919061047d565b8190604051809103905ff590508015801561024b573d5f5f3e3d5ffd5b509050806001600160a01b03167fb5cc75a3ec5831cf7ae127c1015a65f6f9168790072deb73f8345f14acd50e9b88886040516102899291906104f4565b60405180910390a29695505050505050565b5f6102a78383306102ae565b9392505050565b5f604051836040820152846020820152828152600b8101905060ff8153605590206001600160a01b0316949350505050565b6103b68061051683390190565b634e487b7160e01b5f52604160045260245ffd5b80356001600160a01b0381168114610317575f5ffd5b919050565b5f5f5f5f6080858703121561032f575f5ffd5b843567ffffffffffffffff811115610345575f5ffd5b8501601f81018713610355575f5ffd5b803567ffffffffffffffff81111561036f5761036f6102ed565b8060051b604051601f19603f830116810181811067ffffffffffffffff8211171561039c5761039c6102ed565b60405291825260208184018101929081018a8411156103b9575f5ffd5b6020850194505b838510156103df576103d185610301565b8152602094850194016103c0565b509650505050602085013592506103f860408601610301565b9396929550929360600135925050565b5f8151808452602084019350602083015f5b828110156104415781516001600160a01b031686526020958601959091019060010161041a565b5093949350505050565b606081525f61045d6060830186610408565b6020830194909452506001600160a01b0391909116604090910152919050565b60018060a01b0383168152604060208201525f82518060408401528060208501606085015e5f606082850101526060601f19601f8301168401019150509392505050565b5f81518060208401855e5f93019283525090919050565b5f6104ec6104e683866104c1565b846104c1565b949350505050565b604081525f6105066040830185610408565b9050826020830152939250505056fe60806040526040516103b63803806103b683398101604081905261002291610238565b8051610041576040516330a289cf60e21b815260040160405180910390fd5b61004b8282610052565b5050610307565b61005b826100b0565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a28051156100a45761009f828261012b565b505050565b6100ac6101cc565b5050565b806001600160a01b03163b5f036100ea57604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60605f61013884846101ed565b905080801561015957505f3d118061015957505f846001600160a01b03163b115b1561016e57610166610200565b9150506101c6565b801561019857604051639996b31560e01b81526001600160a01b03851660048201526024016100e1565b3d156101ab576101a6610219565b6101c4565b60405163d6bda27560e01b815260040160405180910390fd5b505b92915050565b34156101eb5760405163b398979f60e01b815260040160405180910390fd5b565b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b634e487b7160e01b5f52604160045260245ffd5b5f5f60408385031215610249575f5ffd5b82516001600160a01b038116811461025f575f5ffd5b60208401519092506001600160401b0381111561027a575f5ffd5b8301601f8101851361028a575f5ffd5b80516001600160401b038111156102a3576102a3610224565b604051601f8201601f19908116603f011681016001600160401b03811182821017156102d1576102d1610224565b6040528181528282016020018710156102e8575f5ffd5b8160208401602083015e5f602083830101528093505050509250929050565b60a3806103135f395ff3fe6080604052600a600c565b005b60186014601a565b6050565b565b5f604b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b365f5f375f5f365f845af43d5f5f3e8080156069573d5ff35b3d5ffdfea2646970667358221220ff85ed1e8e7cb2ceabbf3368b5f76989dd1c21bc950f90122cf30c9b0f46a1ba64736f6c634300081c0033a26469706673582212208159b87b93a41cda564f80f4686d24dcf9b321e6c4e492419036df72093e63db64736f6c634300081c0033"
    }
  },
  "deployments": {
    "31337": {
      "BragToken": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "DonationReceipt": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      "ExhibitRegistry": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "Treasury": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "BragNFT": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "NFTMarketplace": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "BragNFTProxy": "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      "BragTokenProxy": "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      "DonationReceiptProxy": "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
      "ExhibitRegistryProxy": "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
      "NFTMarketplaceProxy": "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
      "TreasuryProxy": "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
      "BragNFTInstance": "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      "BragTokenInstance": "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      "DonationReceiptInstance": "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
      "ExhibitRegistryInstance": "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
      "NFTMarketplaceInstance": "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
      "TreasuryInstance": "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e"
    },
    "11155111": {
      "BragToken": "0x1111111111111111111111111111111111111111",
      "NFTMarketplace": "0x2222222222222222222222222222222222222222",
      "BragNFT": "0x3333333333333333333333333333333333333333",
      "ExhibitRegistry": "0x4444444444444444444444444444444444444444",
      "DonationReceipt": "0x5555555555555555555555555555555555555555",
      "Treasury": "0x6666666666666666666666666666666666666666"
    },
    "chain-31337": {
      "BragToken": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "DonationReceipt": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      "ExhibitRegistry": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "Treasury": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "BragNFT": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "NFTMarketplace": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "BragNFTProxy": "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      "BragTokenProxy": "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      "DonationReceiptProxy": "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
      "ExhibitRegistryProxy": "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
      "NFTMarketplaceProxy": "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
      "TreasuryProxy": "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
      "BragNFTInstance": "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      "BragTokenInstance": "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      "DonationReceiptInstance": "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
      "ExhibitRegistryInstance": "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
      "NFTMarketplaceInstance": "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
      "TreasuryInstance": "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e"
    },
    "chain-11155111": {
      "BragToken": "0x1111111111111111111111111111111111111111",
      "NFTMarketplace": "0x2222222222222222222222222222222222222222",
      "BragNFT": "0x3333333333333333333333333333333333333333",
      "ExhibitRegistry": "0x4444444444444444444444444444444444444444",
      "DonationReceipt": "0x5555555555555555555555555555555555555555",
      "Treasury": "0x6666666666666666666666666666666666666666"
    }
  }
};