const CONTRACT_DATA = {
  "contracts": {
    "BatchGrant": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "initialAdmin",
              "type": "address"
            }
          ],
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
              "name": "token",
              "type": "address"
            }
          ],
          "name": "SafeERC20FailedOperation",
          "type": "error"
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
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051610ce4380380610ce483398101604081905261002e916100e8565b6100385f8261003f565b5050610115565b5f828152602081815260408083206001600160a01b038516845290915281205460ff166100df575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100973390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100e2565b505f5b92915050565b5f602082840312156100f8575f5ffd5b81516001600160a01b038116811461010e575f5ffd5b9392505050565b610bc2806101225f395ff3fe60806040526004361061009d575f3560e01c806336568abe1161006257806336568abe146101775780637402c05a1461019657806391d14854146101b5578063a217fddf146101d4578063d547741f146101e7578063f8b7fabf14610206575f5ffd5b806301ffc9a7146100a857806315270ace146100dc578063227a7558146100fd578063248a9ca31461011c5780632f2ff15d14610158575f5ffd5b366100a457005b5f5ffd5b3480156100b3575f5ffd5b506100c76100c2366004610956565b610219565b60405190151581526020015b60405180910390f35b3480156100e7575f5ffd5b506100fb6100f63660046109e0565b61024f565b005b348015610108575f5ffd5b506100fb610117366004610a62565b6102ef565b348015610127575f5ffd5b5061014a610136366004610ace565b5f9081526020819052604090206001015490565b6040519081526020016100d3565b348015610163575f5ffd5b506100fb610172366004610ae5565b6103fe565b348015610182575f5ffd5b506100fb610191366004610ae5565b610428565b3480156101a1575f5ffd5b506100fb6101b03660046109e0565b610460565b3480156101c0575f5ffd5b506100c76101cf366004610ae5565b610500565b3480156101df575f5ffd5b5061014a5f81565b3480156101f2575f5ffd5b506100fb610201366004610ae5565b610528565b6100fb610214366004610a62565b61054c565b5f6001600160e01b03198216637965db0b60e01b148061024957506301ffc9a760e01b6001600160e01b03198316145b92915050565b8281146102775760405162461bcd60e51b815260040161026e90610b13565b60405180910390fd5b5f5b838110156102e7576102df3386868481811061029757610297610b3e565b90506020020160208101906102ac9190610b52565b8585858181106102be576102be610b3e565b90506020020135896001600160a01b03166106da909392919063ffffffff16565b600101610279565b505050505050565b5f6102f981610710565b8382146103185760405162461bcd60e51b815260040161026e90610b13565b5f5b848110156102e7575f86868381811061033557610335610b3e565b905060200201602081019061034a9190610b52565b6001600160a01b031685858481811061036557610365610b3e565b905060200201356040515f6040518083038185875af1925050503d805f81146103a9576040519150601f19603f3d011682016040523d82523d5f602084013e6103ae565b606091505b50509050806103f55760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b604482015260640161026e565b5060010161031a565b5f8281526020819052604090206001015461041881610710565b610422838361071d565b50505050565b6001600160a01b03811633146104515760405163334bd91960e11b815260040160405180910390fd5b61045b82826107ac565b505050565b5f61046a81610710565b8382146104895760405162461bcd60e51b815260040161026e90610b13565b5f5b848110156104f7576104ef8686838181106104a8576104a8610b3e565b90506020020160208101906104bd9190610b52565b8585848181106104cf576104cf610b3e565b90506020020135896001600160a01b03166108159092919063ffffffff16565b60010161048b565b50505050505050565b5f918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b5f8281526020819052604090206001015461054281610710565b61042283836107ac565b82811461056b5760405162461bcd60e51b815260040161026e90610b13565b5f805b848110156105a45783838281811061058857610588610b3e565b905060200201358261059a9190610b6d565b915060010161056e565b508034146105f45760405162461bcd60e51b815260206004820152601960248201527f496e636f72726563742045544820616d6f756e742073656e7400000000000000604482015260640161026e565b5f5b848110156102e7575f86868381811061061157610611610b3e565b90506020020160208101906106269190610b52565b6001600160a01b031685858481811061064157610641610b3e565b905060200201356040515f6040518083038185875af1925050503d805f8114610685576040519150601f19603f3d011682016040523d82523d5f602084013e61068a565b606091505b50509050806106d15760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b604482015260640161026e565b506001016105f6565b6106e884848484600161084a565b61042257604051635274afe760e01b81526001600160a01b038516600482015260240161026e565b61071a81336108b7565b50565b5f6107288383610500565b6107a5575f838152602081815260408083206001600160a01b03861684529091529020805460ff1916600117905561075d3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610249565b505f610249565b5f6107b78383610500565b156107a5575f838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610249565b61082283838360016108f4565b61045b57604051635274afe760e01b81526001600160a01b038416600482015260240161026e565b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f511483166108a657838315161561089a573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b6108c18282610500565b6108f05760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161026e565b5050565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f5114831661094a57838315161561093e573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b5f60208284031215610966575f5ffd5b81356001600160e01b03198116811461097d575f5ffd5b9392505050565b6001600160a01b038116811461071a575f5ffd5b5f5f83601f8401126109a8575f5ffd5b50813567ffffffffffffffff8111156109bf575f5ffd5b6020830191508360208260051b85010111156109d9575f5ffd5b9250929050565b5f5f5f5f5f606086880312156109f4575f5ffd5b85356109ff81610984565b9450602086013567ffffffffffffffff811115610a1a575f5ffd5b610a2688828901610998565b909550935050604086013567ffffffffffffffff811115610a45575f5ffd5b610a5188828901610998565b969995985093965092949392505050565b5f5f5f5f60408587031215610a75575f5ffd5b843567ffffffffffffffff811115610a8b575f5ffd5b610a9787828801610998565b909550935050602085013567ffffffffffffffff811115610ab6575f5ffd5b610ac287828801610998565b95989497509550505050565b5f60208284031215610ade575f5ffd5b5035919050565b5f5f60408385031215610af6575f5ffd5b823591506020830135610b0881610984565b809150509250929050565b6020808252601190820152704d69736d6174636865642061727261797360781b604082015260600190565b634e487b7160e01b5f52603260045260245ffd5b5f60208284031215610b62575f5ffd5b813561097d81610984565b8082018082111561024957634e487b7160e01b5f52601160045260245ffdfea2646970667358221220d004a8fac63b1842383aa6e0ec7b71a46b931f733ef0cfda7be68d72499c106a64736f6c634300081c0033"
    },
    "BragNFT": {
      "abi": [
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
          "name": "ReentrancyGuardReentrantCall",
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
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x6080604052600d80546001600160a01b0316607d60a21b179055348015610024575f5ffd5b506040516146e63803806146e6833981016040819052610043916101de565b60405180604001604052806007815260200166109c9859d3919560ca1b8152506040518060400160405280600781526020016610949051d3919560ca1b815250815f908161009191906102af565b50600161009e82826102af565b50505060016100b76100b46100f260201b60201c565b90565b556100c25f84610116565b50600a80546001600160a01b0319166001600160a01b039390931692909217909155600b55506064600955610369565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0090565b5f8281526007602090815260408083206001600160a01b038516845290915281205460ff166101ba575f8381526007602090815260408083206001600160a01b03861684529091529020805460ff191660011790556101723390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016101bd565b505f5b92915050565b80516001600160a01b03811681146101d9575f5ffd5b919050565b5f5f5f606084860312156101f0575f5ffd5b6101f9846101c3565b9250610207602085016101c3565b9150604084015190509250925092565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061023f57607f821691505b60208210810361025d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156102aa57805f5260205f20601f840160051c810160208510156102885750805b601f840160051c820191505b818110156102a7575f8155600101610294565b50505b505050565b81516001600160401b038111156102c8576102c8610217565b6102dc816102d6845461022b565b84610263565b6020601f82116001811461030e575f83156102f75750848201515b5f19600385901b1c1916600184901b1784556102a7565b5f84815260208120601f198516915b8281101561033d578785015182556020948501946001909201910161031d565b508482101561035a57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b614370806103765f395ff3fe60806040526004361061022b575f3560e01c80636f8b44b011610129578063b88d4fde116100a8578063d547741f1161006d578063d547741f146106dd578063d5abeb01146106fc578063da183afb14610711578063e985e9c51461073c578063f0f442601461075b575f5ffd5b8063b88d4fde1461064e578063c63172471461066d578063c87b56dd1461068c578063d3933c1c146106ab578063d435b3a3146106be575f5ffd5b806395d89b41116100ee57806395d89b41146105e057806396d8f4f3146105f4578063a217fddf14610609578063a22cb4651461061c578063a6719b3a1461063b575f5ffd5b80636f8b44b01461052657806370a082311461054557806381ddcc1f1461056457806383943dc8146105a257806391d14854146105c1575f5ffd5b8063248a9ca3116101b557806342842e0e1161017a57806342842e0e1461048b57806360758c18146104aa57806361d027b3146104c95780636352211e146104e857806364cb7e9c14610507575f5ffd5b8063248a9ca3146103c25780632a55205a146103f05780632eb9313e1461042e5780632f2ff15d1461044d57806336568abe1461046c575f5ffd5b80630fd973ce116101fb5780630fd973ce146103405780631653441c1461035357806318160ddd1461036657806319bcef6d1461038457806323b872dd146103a3575f5ffd5b806301ffc9a71461029557806306fdde03146102c9578063081812fc146102ea578063095ea7b314610321575f5ffd5b366102915761023861077a565b610279336040518060400160405280600f81526020016e2234b932b1ba103237b730ba34b7b760891b81525060405180602001604052805f8152505f610795565b61028f60015f51602061431b5f395f51905f5255565b005b5f5ffd5b3480156102a0575f5ffd5b506102b46102af366004613687565b610abf565b60405190151581526020015b60405180910390f35b3480156102d4575f5ffd5b506102dd610ae9565b6040516102c091906136d0565b3480156102f5575f5ffd5b506103096103043660046136e2565b610b78565b6040516001600160a01b0390911681526020016102c0565b34801561032c575f5ffd5b5061028f61033b36600461370d565b610b9f565b61028f61034e366004613774565b610bae565b61028f6103613660046137f4565b610c45565b348015610371575f5ffd5b506008545b6040519081526020016102c0565b34801561038f575f5ffd5b5061028f61039e36600461385e565b610cdb565b3480156103ae575f5ffd5b5061028f6103bd366004613879565b610d08565b3480156103cd575f5ffd5b506103766103dc3660046136e2565b5f9081526007602052604090206001015490565b3480156103fb575f5ffd5b5061040f61040a3660046138b7565b610d8b565b604080516001600160a01b0390931683526020830191909152016102c0565b348015610439575f5ffd5b5061028f61044836600461385e565b610dd5565b348015610458575f5ffd5b5061028f6104673660046138d7565b610e02565b348015610477575f5ffd5b5061028f6104863660046138d7565b610e26565b348015610496575f5ffd5b5061028f6104a5366004613879565b610e5e565b3480156104b5575f5ffd5b5061028f6104c4366004613905565b610e78565b3480156104d4575f5ffd5b50600a54610309906001600160a01b031681565b3480156104f3575f5ffd5b506103096105023660046136e2565b610eff565b348015610512575f5ffd5b506102dd6105213660046136e2565b610f09565b348015610531575f5ffd5b5061028f6105403660046136e2565b610fa0565b348015610550575f5ffd5b5061037661055f36600461385e565b610fb0565b34801561056f575f5ffd5b50600d5461058a90600160a01b90046001600160601b031681565b6040516001600160601b0390911681526020016102c0565b3480156105ad575f5ffd5b50600d54610309906001600160a01b031681565b3480156105cc575f5ffd5b506102b46105db3660046138d7565b610ff5565b3480156105eb575f5ffd5b506102dd61101f565b3480156105ff575f5ffd5b50610376600b5481565b348015610614575f5ffd5b506103765f81565b348015610627575f5ffd5b5061028f61063636600461393f565b61102e565b61028f610649366004613972565b611039565b348015610659575f5ffd5b5061028f610668366004613a93565b6110d3565b348015610678575f5ffd5b5061028f6106873660046136e2565b6110eb565b348015610697575f5ffd5b506102dd6106a63660046136e2565b6110fb565b61028f6106b9366004613b3a565b61142d565b3480156106c9575f5ffd5b50600c54610309906001600160a01b031681565b3480156106e8575f5ffd5b5061028f6106f73660046138d7565b6114a9565b348015610707575f5ffd5b5061037660095481565b34801561071c575f5ffd5b5061037661072b3660046136e2565b600e6020525f908152604090205481565b348015610747575f5ffd5b506102b4610756366004613bb8565b6114cd565b348015610766575f5ffd5b5061028f61077536600461385e565b6114fa565b61078261157d565b60025f51602061431b5f395f51905f5255565b600c546001600160a01b03166107f25760405162461bcd60e51b815260206004820152601860248201527f5265636569707420636f6e7472616374206e6f7420736574000000000000000060448201526064015b60405180910390fd5b600b5434101561083d5760405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b60448201526064016107e9565b600954600854106108855760405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b60448201526064016107e9565b600880545f918261089583613bf8565b91905055905081156108be575f818152600f602052604090206108b88482613c8c565b506108cf565b8251156108cf576108cf81846115ae565b600c546040516334ff261960e21b81525f916001600160a01b03169063d3fc98649061090390339034908a90600401613d46565b6020604051808303815f875af115801561091f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109439190613d75565b5f838152600e60205260409020819055905061095f86836115fd565b600d546001600160a01b0316156109cf57600d546040516340c10f1960e01b81523360048201523460248201526001600160a01b03909116906340c10f19906044015f604051808303815f87803b1580156109b8575f5ffd5b505af11580156109ca573d5f5f3e3d5ffd5b505050505b600a546040515f916001600160a01b03169034908381818185875af1925050503d805f8114610a19576040519150601f19603f3d011682016040523d82523d5f602084013e610a1e565b606091505b5050905080610a6f5760405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c6564000000000060448201526064016107e9565b336001600160a01b03167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858a604051610aae9493929190613d8c565b60405180910390a250505050505050565b5f6001600160e01b0319821663152a902d60e11b1480610ae35750610ae382611616565b92915050565b60605f8054610af790613c10565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2390613c10565b8015610b6e5780601f10610b4557610100808354040283529160200191610b6e565b820191905f5260205f20905b815481529060010190602001808311610b5157829003601f168201915b5050505050905090565b5f610b828261163a565b505f828152600460205260409020546001600160a01b0316610ae3565b610baa828233611672565b5050565b610bb661077a565b610c288585858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284375f9201829052509250610795915050565b610c3e60015f51602061431b5f395f51905f5255565b5050505050565b610c4d61077a565b610cbf3385858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284375f9201829052509250610795915050565b610cd560015f51602061431b5f395f51905f5255565b50505050565b5f610ce58161167f565b50600c80546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038216610d3157604051633250574960e11b81525f60048201526024016107e9565b5f610d3d83833361168c565b9050836001600160a01b0316816001600160a01b031614610cd5576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016107e9565b600d545f908190819061271090610db290600160a01b90046001600160601b031686613dba565b610dbc9190613dd1565b600a546001600160a01b031693509150505b9250929050565b5f610ddf8161167f565b50600d80546001600160a01b0319166001600160a01b0392909216919091179055565b5f82815260076020526040902060010154610e1c8161167f565b610cd5838361177e565b6001600160a01b0381163314610e4f5760405163334bd91960e11b815260040160405180910390fd5b610e59828261180f565b505050565b610e5983838360405180602001604052805f8152506110d3565b5f610e828161167f565b612710826001600160601b03161115610ed65760405162461bcd60e51b81526020600482015260166024820152754665652063616e6e6f7420657863656564203130302560501b60448201526064016107e9565b50600d80546001600160601b03909216600160a01b026001600160a01b03909216919091179055565b5f610ae38261163a565b600f6020525f908152604090208054610f2190613c10565b80601f0160208091040260200160405190810160405280929190818152602001828054610f4d90613c10565b8015610f985780601f10610f6f57610100808354040283529160200191610f98565b820191905f5260205f20905b815481529060010190602001808311610f7b57829003601f168201915b505050505081565b5f610faa8161167f565b50600955565b5f6001600160a01b038216610fda576040516322718ad960e21b81525f60048201526024016107e9565b506001600160a01b03165f9081526003602052604090205490565b5f9182526007602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060018054610af790613c10565b610baa33838361187a565b61104161077a565b6110b58686868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284375f92019190915250879250610795915050565b6110cb60015f51602061431b5f395f51905f5255565b505050505050565b6110de848484610d08565b610cd53385858585611941565b5f6110f58161167f565b50600b55565b60606111068261163a565b505f828152600e60209081526040808320548151928301909152918152600c546001600160a01b0316156111a857600c5460405163b63e6ac360e01b8152600481018490526001600160a01b039091169063b63e6ac3906024015f60405180830381865afa92505050801561119c57506040513d5f823e601f3d908101601f191682016040526111999190810190613df0565b60015b156111a8576060015190505b5f848152600f602052604081208054606092839290916111c790613c10565b80601f01602080910402602001604051908101604052809291908181526020018280546111f390613c10565b801561123e5780601f106112155761010080835404028352916020019161123e565b820191905f5260205f20905b81548152906001019060200180831161122157829003601f168201915b505050505090505f8151111561129f5761125781611a60565b156112975780915061127161126c8886612486565b6124f2565b6040516020016112819190613ed6565b6040516020818303038152906040529250611330565b809250611330565b5f6112a9886124fe565b8051909150156112ff576112bc81611a60565b156112f7578092506112d161126c8987612486565b6040516020016112e19190613ed6565b604051602081830303815290604052935061132e565b80935061132e565b61130c61126c8987612486565b60405160200161131c9190613ed6565b60405160208183030381529060405293505b505b60408051602081019091525f81528251156113705761134e8361257f565b60405160200161135e9190613f07565b60405160208183030381529060405290505b5f6113fd61137d8a612968565b5f8851116113995760405180602001604052805f8152506113c2565b6113a28861257f565b6040516020016113b29190613f30565b6040516020818303038152906040525b6113cb8861257f565b856113d58b61257f565b6040516020016113e9959493929190613f46565b6040516020818303038152906040526124f2565b9050806040516020016114109190614047565b604051602081830303815290604052975050505050505050919050565b61143561077a565b610c283386868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284375f92019190915250879250610795915050565b5f828152600760205260409020600101546114c38161167f565b610cd5838361180f565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f6115048161167f565b6001600160a01b03821661155a5760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642074726561737572792061646472657373000000000000000060448201526064016107e9565b50600a80546001600160a01b0319166001600160a01b0392909216919091179055565b5f51602061431b5f395f51905f52546002036115ac57604051633ee5aeb560e01b815260040160405180910390fd5b565b5f8281526006602052604090206115c58282613c8c565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b610baa828260405180602001604052805f8152506129f7565b5f6001600160e01b03198216637965db0b60e01b1480610ae35750610ae382612a0e565b5f818152600260205260408120546001600160a01b031680610ae357604051637e27328960e01b8152600481018490526024016107e9565b610e598383836001612a32565b6116898133612b36565b50565b5f828152600260205260408120546001600160a01b03908116908316156116b8576116b8818486612b6f565b6001600160a01b038116156116f2576116d35f855f5f612a32565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615611720576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f6117898383610ff5565b611808575f8381526007602090815260408083206001600160a01b03861684529091529020805460ff191660011790556117c03390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610ae3565b505f610ae3565b5f61181a8383610ff5565b15611808575f8381526007602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610ae3565b6001600160a01b0383166118a35760405163a9fbf51f60e01b81525f60048201526024016107e9565b6001600160a01b0382166118d557604051630b61174360e31b81526001600160a01b03831660048201526024016107e9565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15610c3e57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290611983908890889087908790600401614078565b6020604051808303815f875af19250505080156119bd575060408051601f3d908101601f191682019092526119ba918101906140aa565b60015b611a24573d8080156119ea576040519150601f19603f3d011682016040523d82523d5f602084013e6119ef565b606091505b5080515f03611a1c57604051633250574960e11b81526001600160a01b03851660048201526024016107e9565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b146110cb57604051633250574960e11b81526001600160a01b03851660048201526024016107e9565b80515f9082906004811015611a7857505f9392505050565b600b8110611f9857815f81518110611a9257611a926140c5565b6020910101516001600160f81b031916601960fa1b148015611ad9575081600181518110611ac257611ac26140c5565b6020910101516001600160f81b031916606160f81b145b8015611b0a575081600281518110611af357611af36140c5565b6020910101516001600160f81b031916601d60fa1b145b8015611b3b575081600381518110611b2457611b246140c5565b6020910101516001600160f81b031916606160f81b145b8015611b6c575081600481518110611b5557611b556140c5565b6020910101516001600160f81b031916601d60f91b145b15611f985781600581518110611b8457611b846140c5565b6020910101516001600160f81b031916606160f81b148015611bcb575081600681518110611bb457611bb46140c5565b6020910101516001600160f81b031916607560f81b145b8015611bfc575081600781518110611be557611be56140c5565b6020910101516001600160f81b031916601960fa1b145b8015611c2d575081600881518110611c1657611c166140c5565b6020910101516001600160f81b031916606960f81b145b8015611c5e575081600981518110611c4757611c476140c5565b6020910101516001600160f81b031916606f60f81b145b8015611c8f575081600a81518110611c7857611c786140c5565b6020910101516001600160f81b031916602f60f81b145b15611c9e575060019392505050565b81600581518110611cb157611cb16140c5565b6020910101516001600160f81b031916603b60f91b148015611cf8575081600681518110611ce157611ce16140c5565b6020910101516001600160f81b031916606960f81b145b8015611d29575081600781518110611d1257611d126140c5565b6020910101516001600160f81b031916601960fa1b145b8015611d5a575081600881518110611d4357611d436140c5565b6020910101516001600160f81b031916606560f81b145b8015611d8b575081600981518110611d7457611d746140c5565b6020910101516001600160f81b031916606f60f81b145b8015611dbc575081600a81518110611da557611da56140c5565b6020910101516001600160f81b031916602f60f81b145b15611dcb575060019392505050565b600e8110158015611e01575081600581518110611dea57611dea6140c5565b6020910101516001600160f81b031916606960f81b145b8015611e32575081600681518110611e1b57611e1b6140c5565b6020910101516001600160f81b031916606d60f81b145b8015611e63575081600781518110611e4c57611e4c6140c5565b6020910101516001600160f81b031916606160f81b145b8015611e94575081600881518110611e7d57611e7d6140c5565b6020910101516001600160f81b031916606760f81b145b8015611ec5575081600981518110611eae57611eae6140c5565b6020910101516001600160f81b031916606560f81b145b8015611ef6575081600a81518110611edf57611edf6140c5565b6020910101516001600160f81b031916602f60f81b145b8015611f27575081600b81518110611f1057611f106140c5565b6020910101516001600160f81b031916606760f81b145b8015611f58575081600c81518110611f4157611f416140c5565b6020910101516001600160f81b031916606960f81b145b8015611f89575081600d81518110611f7257611f726140c5565b6020910101516001600160f81b031916603360f91b145b15611f98575060019392505050565b81611fa46004836140d9565b81518110611fb457611fb46140c5565b01602001516001600160f81b031916601760f91b0361237d575f61200183611fdd6003856140d9565b81518110611fed57611fed6140c5565b01602001516001600160f81b031916612bd3565b90505f61201384611fdd6002866140d9565b90505f61202585611fdd6001876140d9565b9050606d60f81b6001600160f81b031984161480156120515750600760fc1b6001600160f81b03198316145b801561206a5750603360f81b6001600160f81b03198216145b1561207c575060019695505050505050565b607760f81b6001600160f81b031984161480156120a65750606160f81b6001600160f81b03198316145b80156120bf5750603b60f91b6001600160f81b03198216145b156120d1575060019695505050505050565b606f60f81b6001600160f81b031984161480156120fb5750606760f81b6001600160f81b03198316145b80156121145750606760f81b6001600160f81b03198216145b15612126575060019695505050505050565b606d60f81b6001600160f81b031984161480156121505750600d60fa1b6001600160f81b03198316145b80156121695750606160f81b6001600160f81b03198216145b1561217b575060019695505050505050565b606160f81b6001600160f81b031984161480156121a55750606160f81b6001600160f81b03198316145b80156121be5750606360f81b6001600160f81b03198216145b156121d0575060019695505050505050565b606d60f81b6001600160f81b031984161480156121fa5750600760fc1b6001600160f81b03198316145b80156122135750600d60fa1b6001600160f81b03198216145b15612225575060019695505050505050565b606d60f81b6001600160f81b0319841614801561224f5750606f60f81b6001600160f81b03198316145b80156122685750603b60f91b6001600160f81b03198216145b1561227a575060019695505050505050565b606f60f81b6001600160f81b031984161480156122a45750606760f81b6001600160f81b03198316145b80156122bd5750603b60f91b6001600160f81b03198216145b156122cf575060019695505050505050565b606d60f81b6001600160f81b031984161480156122f95750600d60fa1b6001600160f81b03198316145b80156123125750603b60f91b6001600160f81b03198216145b15612324575060019695505050505050565b606760f81b6001600160f81b0319841614801561234e5750606960f81b6001600160f81b03198316145b80156123675750603360f91b6001600160f81b03198216145b15612379575060019695505050505050565b5050505b600581101580156123bc5750816123956005836140d9565b815181106123a5576123a56140c5565b6020910101516001600160f81b031916601760f91b145b1561247d575f6123d183611fdd6004856140d9565b90505f6123e384611fdd6003866140d9565b90505f6123f585611fdd6002876140d9565b90505f61240786611fdd6001886140d9565b9050607760f81b6001600160f81b031985161480156124335750606560f81b6001600160f81b03198416145b801561244c5750603160f91b6001600160f81b03198316145b80156124655750606d60f81b6001600160f81b03198216145b1561247857506001979650505050505050565b505050505b505f9392505050565b60605f5f8351116124be5761249a84612968565b6040516020016124aa91906140ec565b6040516020818303038152906040526124c7565b6124c783612c0f565b9050806040516020016124da9190614109565b60405160208183030381529060405291505092915050565b6060610ae3825f6131fb565b60606125098261163a565b505f61251f60408051602081019091525f815290565b90505f61252b8461337a565b905081515f0361253c579392505050565b80511561256e5781816040516020016125569291906142da565b60405160208183030381529060405292505050919050565b61257784613419565b949350505050565b805160609082905f805b82811015612637578381815181106125a3576125a36140c5565b6020910101516001600160f81b031916601160f91b14806125e857508381815181106125d1576125d16140c5565b6020910101516001600160f81b031916601760fa1b145b156125ff57816125f781613bf8565b92505061262f565b6020848281518110612613576126136140c5565b016020015160f81c101561262f5761262c6005836142ee565b91505b600101612589565b50805f036126485750929392505050565b5f61265382846142ee565b6001600160401b0381111561266a5761266a613a01565b6040519080825280601f01601f191660200182016040528015612694576020820181803683370190505b5090505f805b8481101561295c575f8682815181106126b5576126b56140c5565b016020015160f81c905060228114806126d157508060ff16605c145b1561274b57601760fa1b84846126e681613bf8565b9550815181106126f8576126f86140c5565b60200101906001600160f81b03191690815f1a9053508060f81b84848061271e90613bf8565b955081518110612730576127306140c5565b60200101906001600160f81b03191690815f1a905350612953565b60208160ff16101561291a57601760fa1b848461276781613bf8565b955081518110612779576127796140c5565b60200101906001600160f81b03191690815f1a905350607560f81b848461279f81613bf8565b9550815181106127b1576127b16140c5565b60200101906001600160f81b03191690815f1a905350600360fc1b84846127d781613bf8565b9550815181106127e9576127e96140c5565b60200101906001600160f81b03191690815f1a905350600360fc1b848461280f81613bf8565b955081518110612821576128216140c5565b60200101906001600160f81b03191690815f1a9053506040805180820190915260108082526f181899199a1a9b1b9c1cb0b131b232b360811b60208301528190600f600485901c16908110612878576128786140c5565b01602001516001600160f81b031916858561289281613bf8565b9650815181106128a4576128a46140c5565b60200101906001600160f81b03191690815f1a9053508082600f1660ff16815181106128d2576128d26140c5565b01602001516001600160f81b03191685856128ec81613bf8565b9650815181106128fe576128fe6140c5565b60200101906001600160f81b03191690815f1a90535050612953565b8060f81b84848061292a90613bf8565b95508151811061293c5761293c6140c5565b60200101906001600160f81b03191690815f1a9053505b5060010161269a565b50909695505050505050565b60605f6129748361348a565b60010190505f816001600160401b0381111561299257612992613a01565b6040519080825280601f01601f1916602001820160405280156129bc576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846129c657509392505050565b612a018383613561565b610e59335f858585611941565b5f6001600160e01b03198216632483248360e11b1480610ae35750610ae3826135c2565b8080612a4657506001600160a01b03821615155b15612b07575f612a558461163a565b90506001600160a01b03831615801590612a815750826001600160a01b0316816001600160a01b031614155b8015612a945750612a9281846114cd565b155b15612abd5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016107e9565b8115612b055783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b612b408282610ff5565b610baa5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016107e9565b612b7a838383613611565b610e59576001600160a01b038316612ba857604051637e27328960e01b8152600481018290526024016107e9565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016107e9565b5f604160f883901c10801590612bee5750605a60f883901c11155b15612c0b57612c0260f883901c6020614301565b60f81b92915050565b5090565b805160609082905f805b82811015612d4157838181518110612c3357612c336140c5565b01602001516001600160f81b031916601360f91b03612c5e57612c576004836142ee565b9150612d39565b838181518110612c7057612c706140c5565b01602001516001600160f81b031916600f60fa1b03612c9457612c576003836142ee565b838181518110612ca657612ca66140c5565b01602001516001600160f81b031916601f60f91b03612cca57612c576003836142ee565b838181518110612cdc57612cdc6140c5565b01602001516001600160f81b031916601160f91b03612d0057612c576005836142ee565b838181518110612d1257612d126140c5565b01602001516001600160f81b031916602760f81b03612d3957612d366005836142ee565b91505b600101612c19565b50805f03612d525750929392505050565b5f612d5d82846142ee565b6001600160401b03811115612d7457612d74613a01565b6040519080825280601f01601f191660200182016040528015612d9e576020820181803683370190505b5090505f805b8481101561295c575f868281518110612dbf57612dbf6140c5565b01602001516001600160f81b0319169050601360f91b819003612ef957601360f91b8484612dec81613bf8565b955081518110612dfe57612dfe6140c5565b60200101906001600160f81b03191690815f1a905350606160f81b8484612e2481613bf8565b955081518110612e3657612e366140c5565b60200101906001600160f81b03191690815f1a905350606d60f81b8484612e5c81613bf8565b955081518110612e6e57612e6e6140c5565b60200101906001600160f81b03191690815f1a905350600760fc1b8484612e9481613bf8565b955081518110612ea657612ea66140c5565b60200101906001600160f81b03191690815f1a905350603b60f81b8484612ecc81613bf8565b955081518110612ede57612ede6140c5565b60200101906001600160f81b03191690815f1a9053506131f2565b6001600160f81b03198116600f60fa1b03612f8e57601360f91b8484612f1e81613bf8565b955081518110612f3057612f306140c5565b60200101906001600160f81b03191690815f1a905350601b60fa1b8484612f5681613bf8565b955081518110612f6857612f686140c5565b60200101906001600160f81b03191690815f1a905350601d60fa1b8484612e9481613bf8565b6001600160f81b03198116601f60f91b03612feb57601360f91b8484612fb381613bf8565b955081518110612fc557612fc56140c5565b60200101906001600160f81b03191690815f1a905350606760f81b8484612f5681613bf8565b6001600160f81b03198116601160f91b036130b857601360f91b848461301081613bf8565b955081518110613022576130226140c5565b60200101906001600160f81b03191690815f1a905350607160f81b848461304881613bf8565b95508151811061305a5761305a6140c5565b60200101906001600160f81b03191690815f1a905350607560f81b848461308081613bf8565b955081518110613092576130926140c5565b60200101906001600160f81b03191690815f1a905350606f60f81b8484612f5681613bf8565b6001600160f81b03198116602760f81b036131bd57601360f91b84846130dd81613bf8565b9550815181106130ef576130ef6140c5565b60200101906001600160f81b03191690815f1a905350606160f81b848461311581613bf8565b955081518110613127576131276140c5565b60200101906001600160f81b03191690815f1a905350600760fc1b848461314d81613bf8565b95508151811061315f5761315f6140c5565b60200101906001600160f81b03191690815f1a905350606f60f81b848461318581613bf8565b955081518110613197576131976140c5565b60200101906001600160f81b03191690815f1a905350607360f81b8484612e9481613bf8565b8084846131c981613bf8565b9550815181106131db576131db6140c5565b60200101906001600160f81b03191690815f1a9053505b50600101612da4565b606082515f03613219575060408051602081019091525f8152610ae3565b5f826132495760038451600261322f91906142ee565b6132399190613dd1565b613244906004613dba565b61326e565b6003845160046132599190613dba565b6132649060026142ee565b61326e9190613dd1565b905060405191507f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f5261067083027f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f18603f526020820181810185865187016020810180515f82525b8284101561332c576003840193508351603f8160121c16518753600187019650603f81600c1c16518753600187019650603f8160061c16518753600187019650603f8116518753506001860195506132d9565b90525085905061336d5760038651066001811461335057600281146133635761336b565b603d6001840353603d600284035361336b565b603d60018403535b505b9183525060405292915050565b5f81815260066020526040902080546060919061339690613c10565b80601f01602080910402602001604051908101604052809291908181526020018280546133c290613c10565b801561340d5780601f106133e45761010080835404028352916020019161340d565b820191905f5260205f20905b8154815290600101906020018083116133f057829003601f168201915b50505050509050919050565b60606134248261163a565b505f61343a60408051602081019091525f815290565b90505f8151116134585760405180602001604052805f815250613483565b8061346284612968565b6040516020016134739291906142da565b6040516020818303038152906040525b9392505050565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106134c85772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106134f4576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061351257662386f26fc10000830492506010015b6305f5e100831061352a576305f5e100830492506008015b612710831061353e57612710830492506004015b60648310613550576064830492506002015b600a8310610ae35760010192915050565b6001600160a01b03821661358a57604051633250574960e11b81525f60048201526024016107e9565b5f61359683835f61168c565b90506001600160a01b03811615610e59576040516339e3563760e11b81525f60048201526024016107e9565b5f6001600160e01b031982166380ac58cd60e01b14806135f257506001600160e01b03198216635b5e139f60e01b145b80610ae357506301ffc9a760e01b6001600160e01b0319831614610ae3565b5f6001600160a01b038316158015906125775750826001600160a01b0316846001600160a01b0316148061364a575061364a84846114cd565b806125775750505f908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b031981168114611689575f5ffd5b5f60208284031215613697575f5ffd5b813561348381613672565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61348360208301846136a2565b5f602082840312156136f2575f5ffd5b5035919050565b6001600160a01b0381168114611689575f5ffd5b5f5f6040838503121561371e575f5ffd5b8235613729816136f9565b946020939093013593505050565b5f5f83601f840112613747575f5ffd5b5081356001600160401b0381111561375d575f5ffd5b602083019150836020828501011115610dce575f5ffd5b5f5f5f5f5f60608688031215613788575f5ffd5b8535613793816136f9565b945060208601356001600160401b038111156137ad575f5ffd5b6137b988828901613737565b90955093505060408601356001600160401b038111156137d7575f5ffd5b6137e388828901613737565b969995985093965092949392505050565b5f5f5f5f60408587031215613807575f5ffd5b84356001600160401b0381111561381c575f5ffd5b61382887828801613737565b90955093505060208501356001600160401b03811115613846575f5ffd5b61385287828801613737565b95989497509550505050565b5f6020828403121561386e575f5ffd5b8135613483816136f9565b5f5f5f6060848603121561388b575f5ffd5b8335613896816136f9565b925060208401356138a6816136f9565b929592945050506040919091013590565b5f5f604083850312156138c8575f5ffd5b50508035926020909101359150565b5f5f604083850312156138e8575f5ffd5b8235915060208301356138fa816136f9565b809150509250929050565b5f60208284031215613915575f5ffd5b81356001600160601b0381168114613483575f5ffd5b8035801515811461393a575f5ffd5b919050565b5f5f60408385031215613950575f5ffd5b823561395b816136f9565b91506139696020840161392b565b90509250929050565b5f5f5f5f5f5f60808789031215613987575f5ffd5b8635613992816136f9565b955060208701356001600160401b038111156139ac575f5ffd5b6139b889828a01613737565b90965094505060408701356001600160401b038111156139d6575f5ffd5b6139e289828a01613737565b90945092506139f590506060880161392b565b90509295509295509295565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b0381118282101715613a3757613a37613a01565b60405290565b604051601f8201601f191681016001600160401b0381118282101715613a6557613a65613a01565b604052919050565b5f6001600160401b03821115613a8557613a85613a01565b50601f01601f191660200190565b5f5f5f5f60808587031215613aa6575f5ffd5b8435613ab1816136f9565b93506020850135613ac1816136f9565b92506040850135915060608501356001600160401b03811115613ae2575f5ffd5b8501601f81018713613af2575f5ffd5b8035613b05613b0082613a6d565b613a3d565b818152886020838501011115613b19575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f5f5f5f60608688031215613b4e575f5ffd5b85356001600160401b03811115613b63575f5ffd5b613b6f88828901613737565b90965094505060208601356001600160401b03811115613b8d575f5ffd5b613b9988828901613737565b9094509250613bac90506040870161392b565b90509295509295909350565b5f5f60408385031215613bc9575f5ffd5b8235613bd4816136f9565b915060208301356138fa816136f9565b634e487b7160e01b5f52601160045260245ffd5b5f60018201613c0957613c09613be4565b5060010190565b600181811c90821680613c2457607f821691505b602082108103613c4257634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115610e5957805f5260205f20601f840160051c81016020851015613c6d5750805b601f840160051c820191505b81811015610c3e575f8155600101613c79565b81516001600160401b03811115613ca557613ca5613a01565b613cb981613cb38454613c10565b84613c48565b6020601f821160018114613ceb575f8315613cd45750848201515b5f19600385901b1c1916600184901b178455610c3e565b5f84815260208120601f198516915b82811015613d1a5787850151825560209485019460019092019101613cfa565b5084821015613d3757868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b60018060a01b0384168152826020820152606060408201525f613d6c60608301846136a2565b95945050505050565b5f60208284031215613d85575f5ffd5b5051919050565b848152836020820152826040820152608060608201525f613db060808301846136a2565b9695505050505050565b8082028115828204841417610ae357610ae3613be4565b5f82613deb57634e487b7160e01b5f52601260045260245ffd5b500490565b5f60208284031215613e00575f5ffd5b81516001600160401b03811115613e15575f5ffd5b820160808185031215613e26575f5ffd5b613e2e613a15565b8151613e39816136f9565b8152602082810151908201526040808301519082015260608201516001600160401b03811115613e67575f5ffd5b80830192505084601f830112613e7b575f5ffd5b8151613e89613b0082613a6d565b818152866020838601011115613e9d575f5ffd5b8160208501602083015e5f918101602001919091526060820152949350505050565b5f81518060208401855e5f93019283525090919050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c00000000000081525f613483601a830184613ebf565b741116101130b734b6b0ba34b7b72fbab936111d101160591b81525f6134836015830184613ebf565b6101d160f51b81525f6134836002830184613ebf565b727b226e616d65223a2022427261674e4654202360681b81525f613f6d6013830188613ebf565b7f222c20226465736372697074696f6e223a2022427261672e436861726974792081526b111bdb985d1a5bdb8813919560a21b6020820152613fb2602c820188613ebf565b6c1116101134b6b0b3b2911d101160991b81529050613fdd613fd7600d830188613ebf565b86613ebf565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a815275101126b2b9b9b0b3b2911610113b30b63ab2911d101160511b6020820152905061402e6036820185613ebf565b63227d5d7d60e01b815260040198975050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081525f613483601d830184613ebf565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90613db0908301846136a2565b5f602082840312156140ba575f5ffd5b815161348381613672565b634e487b7160e01b5f52603260045260245ffd5b81810381811115610ae357610ae3613be4565b68427261674e4654202360b81b81525f6134836009830184613ebf565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323081527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d223020302033353020333530604082015261111f60f11b60608201527f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e7460628201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060828201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60a282015261329f60f11b60c28201527f3c726563742077696474683d223130302522206865696768743d22313030252260c482015271103334b6361e91119b199b1b33189110179f60711b60e48201527f3c7465787420783d223530252220793d223530252220636c6173733d2262617360f682019081527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465610116830152723c3a16b0b731b437b91e9136b4b2323632911f60691b6101368301525f906101498301613d6c6142c18287613ebf565b6c1e17ba32bc3a1f1e17b9bb339f60991b8152600d0190565b5f6125776142e88386613ebf565b84613ebf565b80820180821115610ae357610ae3613be4565b60ff8181168382160190811115610ae357610ae3613be456fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220cef2d68d03c1e748a6eb0cd57f1d9e7548f2f5062a03387f22b76f018a1db20e64736f6c634300081c0033"
    },
    "BragToken": {
      "abi": [
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
          "name": "InvalidShortString",
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
          "inputs": [
            {
              "internalType": "string",
              "name": "str",
              "type": "string"
            }
          ],
          "name": "StringTooLong",
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
        }
      ],
      "bytecode": "0x610180604052348015610010575f5ffd5b50604051612e51380380612e5183398101604081905261002f9161097c565b6040518060400160405280600a815260200169213930b3902a37b5b2b760b11b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600a815260200169213930b3902a37b5b2b760b11b815250604051806040016040528060048152602001634252414760e01b81525081600390816100bc9190610a52565b5060046100c98282610a52565b506100d991508390506005610233565b610120526100e8816006610233565b61014052815160208084019190912060e052815190820120610100524660a05261017460e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250818110156101df5760405162461bcd60e51b8152602060048201526024808201527f4d617820737570706c79206d757374206265203e3d20696e697469616c20737560448201526370706c7960e01b60648201526084015b60405180910390fd5b6101608190526101ef5f84610265565b5061021a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a684610265565b50811561022b5761022b8383610310565b505050610bdc565b5f60208351101561024e5761024783610348565b905061025f565b816102598482610a52565b5060ff90505b92915050565b5f828152600b602090815260408083206001600160a01b038516845290915281205460ff16610309575f838152600b602090815260408083206001600160a01b03861684529091529020805460ff191660011790556102c13390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161025f565b505f61025f565b6001600160a01b0382166103395760405163ec442f0560e01b81525f60048201526024016101d6565b6103445f8383610385565b5050565b5f5f829050601f81511115610372578260405163305a27a960e01b81526004016101d69190610b0c565b805161037d82610b41565b179392505050565b610390838383610395565b505050565b6103a08383836103fb565b6001600160a01b0383166103f0575f6103b860025490565b90506001600160d01b03808211156103ed57604051630e58ae9360e11b815260048101839052602481018290526044016101d6565b50505b610390838383610521565b6001600160a01b038316610425578060025f82825461041a9190610b78565b909155506104959050565b6001600160a01b0383165f90815260208190526040902054818110156104775760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016101d6565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166104b1576002805482900390556104cf565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161051491815260200190565b60405180910390a3505050565b6001600160a01b03831661054f5761054c600a610ba86105a960201b17610547846105bb565b6105f2565b50505b6001600160a01b03821661057857610575600a610bb361062760201b17610547846105bb565b50505b6001600160a01b038381165f9081526008602052604080822054858416835291205461039092918216911683610632565b5f6105b48284610b8b565b9392505050565b5f6001600160d01b038211156105ee576040516306dfcc6560e41b815260d06004820152602481018390526044016101d6565b5090565b5f8061061a6105ff610782565b61061261060b88610790565b868860201c565b8791906107d7565b915091505b935093915050565b5f6105b48284610baa565b816001600160a01b0316836001600160a01b03161415801561065357505f81115b15610390576001600160a01b038316156106eb576001600160a01b0383165f908152600960209081526040822082916106999190610627901b610bb317610547866105bb565b6001600160d01b031691506001600160d01b03169150846001600160a01b03165f516020612e315f395f51905f5283836040516106e0929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610390576001600160a01b0382165f9081526009602090815260408220829161072c91906105a9901b610ba817610547866105bb565b6001600160d01b031691506001600160d01b03169150836001600160a01b03165f516020612e315f395f51905f528383604051610773929190918252602082015260400190565b60405180910390a25050505050565b5f61078b6107e4565b905090565b80545f9080156107cf576107b6836107a9600184610bc9565b5f91825260209091200190565b54660100000000000090046001600160d01b03166105b4565b5f9392505050565b5f8061061a8585856107ee565b5f61078b4361094a565b82545f90819080156108ed575f61080a876107a9600185610bc9565b805490915065ffffffffffff80821691660100000000000090046001600160d01b031690881682111561085057604051632520601d60e01b815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff160361088c57825465ffffffffffff1666010000000000006001600160d01b038916021783556108df565b6040805180820190915265ffffffffffff808a1682526001600160d01b03808a1660208085019182528d54600181018f555f8f815291909120945191519092166601000000000000029216919091179101555b945085935061061f92505050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a815291822095519251909316660100000000000002919093161792019190915590508161061f565b5f65ffffffffffff8211156105ee576040516306dfcc6560e41b815260306004820152602481018390526044016101d6565b5f5f5f6060848603121561098e575f5ffd5b83516001600160a01b03811681146109a4575f5ffd5b602085015160409095015190969495509392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806109e357607f821691505b602082108103610a0157634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561039057805f5260205f20601f840160051c81016020851015610a2c5750805b601f840160051c820191505b81811015610a4b575f8155600101610a38565b5050505050565b81516001600160401b03811115610a6b57610a6b6109bb565b610a7f81610a7984546109cf565b84610a07565b6020601f821160018114610ab1575f8315610a9a5750848201515b5f19600385901b1c1916600184901b178455610a4b565b5f84815260208120601f198516915b82811015610ae05787850151825560209485019460019092019101610ac0565b5084821015610afd57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b80516020808301519190811015610a01575f1960209190910360031b1b16919050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561025f5761025f610b64565b6001600160d01b03818116838216019081111561025f5761025f610b64565b6001600160d01b03828116828216039081111561025f5761025f610b64565b8181038181111561025f5761025f610b64565b60805160a05160c05160e051610100516101205161014051610160516121f3610c3e5f395f81816104e9015261075801525f61112001525f6110f301525f610e1201525f610dea01525f610d4501525f610d6f01525f610d9901526121f35ff3fe608060405234801561000f575f5ffd5b5060043610610208575f3560e01c806370a082311161011f578063a217fddf116100a9578063d539139311610079578063d5391393146104aa578063d547741f146104d1578063d5abeb01146104e4578063dd62ed3e1461050b578063f1127ed814610543575f5ffd5b8063a217fddf1461046a578063a9059cbb14610471578063c3cda52014610484578063d505accf14610497575f5ffd5b80638e539e8c116100ef5780638e539e8c1461040a57806391d148541461041d57806391ddadf41461043057806395d89b411461044f5780639ab24eb014610457575f5ffd5b806370a08231146103a157806379cc6790146103c95780637ecebe00146103dc57806384b0196e146103ef575f5ffd5b80633644e515116101a057806342966c681161017057806342966c68146103085780634bf5d7e91461031b578063587cde1e146103235780635c19a95c146103665780636fcfff4514610379575f5ffd5b80633644e515146102c757806336568abe146102cf5780633a46b1a8146102e257806340c10f19146102f5575f5ffd5b806323b872dd116101db57806323b872dd1461026e578063248a9ca3146102815780632f2ff15d146102a3578063313ce567146102b8575f5ffd5b806301ffc9a71461020c57806306fdde0314610234578063095ea7b31461024957806318160ddd1461025c575b5f5ffd5b61021f61021a366004611dce565b610582565b60405190151581526020015b60405180910390f35b61023c6105b8565b60405161022b9190611e23565b61021f610257366004611e50565b610648565b6002545b60405190815260200161022b565b61021f61027c366004611e78565b61065f565b61026061028f366004611eb2565b5f908152600b602052604090206001015490565b6102b66102b1366004611ec9565b610682565b005b6040516012815260200161022b565b6102606106ac565b6102b66102dd366004611ec9565b6106ba565b6102606102f0366004611e50565b6106f2565b6102b6610303366004611e50565b61072c565b6102b6610316366004611eb2565b6107dc565b61023c6107e9565b61034e610331366004611ef3565b6001600160a01b039081165f908152600860205260409020541690565b6040516001600160a01b03909116815260200161022b565b6102b6610374366004611ef3565b610861565b61038c610387366004611ef3565b610870565b60405163ffffffff909116815260200161022b565b6102606103af366004611ef3565b6001600160a01b03165f9081526020819052604090205490565b6102b66103d7366004611e50565b61087a565b6102606103ea366004611ef3565b61088f565b6103f7610899565b60405161022b9796959493929190611f0c565b610260610418366004611eb2565b6108db565b61021f61042b366004611ec9565b6108ff565b610438610929565b60405165ffffffffffff909116815260200161022b565b61023c610932565b610260610465366004611ef3565b610941565b6102605f81565b61021f61047f366004611e50565b610961565b6102b6610492366004611fb2565b61096e565b6102b66104a5366004612006565b610a2a565b6102607f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102b66104df366004611ec9565b610b60565b6102607f000000000000000000000000000000000000000000000000000000000000000081565b61026061051936600461206c565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b610556610551366004612094565b610b84565b60408051825165ffffffffffff1681526020928301516001600160d01b0316928101929092520161022b565b5f6001600160e01b03198216637965db0b60e01b14806105b257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546105c7906120d1565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906120d1565b801561063e5780601f106106155761010080835404028352916020019161063e565b820191905f5260205f20905b81548152906001019060200180831161062157829003601f168201915b5050505050905090565b5f33610655818585610bbe565b5060019392505050565b5f3361066c858285610bcb565b610677858585610c41565b506001949350505050565b5f828152600b602052604090206001015461069c81610c9e565b6106a68383610ca8565b50505050565b5f6106b5610d39565b905090565b6001600160a01b03811633146106e35760405163334bd91960e11b815260040160405180910390fd5b6106ed8282610e62565b505050565b5f61071c6106ff83610ecd565b6001600160a01b0385165f90815260096020526040902090610f1b565b6001600160d01b03169392505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661075681610c9e565b7f00000000000000000000000000000000000000000000000000000000000000008261078160025490565b61078b919061211d565b11156107d25760405162461bcd60e51b815260206004820152601160248201527045786365656473206d6178537570706c7960781b60448201526064015b60405180910390fd5b6106ed8383610fcb565b6107e63382610fff565b50565b60606107f3611033565b65ffffffffffff16610803610929565b65ffffffffffff1614610829576040516301bfc1c560e61b815260040160405180910390fd5b5060408051808201909152601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015290565b3361086c818361103d565b5050565b5f6105b2826110ae565b610885823383610bcb565b61086c8282610fff565b5f6105b2826110cf565b5f6060805f5f5f60606108aa6110ec565b6108b2611119565b604080515f80825260208201909252600f60f81b9b939a50919850469750309650945092509050565b5f6108f06108e883610ecd565b600a90610f1b565b6001600160d01b031692915050565b5f918252600b602090815260408084206001600160a01b0393909316845291905290205460ff1690565b5f6106b5611033565b6060600480546105c7906120d1565b6001600160a01b0381165f9081526009602052604081206108f090611146565b5f33610655818585610c41565b8342111561099257604051632341d78760e11b8152600481018590526024016107c9565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590525f90610a0b90610a039060a0016040516020818303038152906040528051906020012061117d565b8585856111a9565b9050610a1781876111d5565b610a21818861103d565b50505050505050565b83421115610a4e5760405163313c898160e11b8152600481018590526024016107c9565b5f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610a998c6001600160a01b03165f90815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090505f610af38261117d565b90505f610b02828787876111a9565b9050896001600160a01b0316816001600160a01b031614610b49576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016107c9565b610b548a8a8a610bbe565b50505050505050505050565b5f828152600b6020526040902060010154610b7a81610c9e565b6106a68383610e62565b604080518082019091525f8082526020820152610ba18383611227565b9392505050565b5f610ba18284612130565b5f610ba1828461214f565b6106ed838383600161125b565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f198110156106a65781811015610c3357604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016107c9565b6106a684848484035f61125b565b6001600160a01b038316610c6a57604051634b637e8f60e11b81525f60048201526024016107c9565b6001600160a01b038216610c935760405163ec442f0560e01b81525f60048201526024016107c9565b6106ed83838361132d565b6107e68133611338565b5f610cb383836108ff565b610d32575f838152600b602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610cea3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016105b2565b505f6105b2565b5f306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610d9157507f000000000000000000000000000000000000000000000000000000000000000046145b15610dbb57507f000000000000000000000000000000000000000000000000000000000000000090565b6106b5604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b5f610e6d83836108ff565b15610d32575f838152600b602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016105b2565b5f5f610ed7610929565b90508065ffffffffffff168310610f1257604051637669fc0f60e11b81526004810184905265ffffffffffff821660248201526044016107c9565b610ba183611371565b81545f9081816005811115610f77575f610f34846113a7565b610f3e908561216e565b5f8881526020902090915081015465ffffffffffff9081169087161015610f6757809150610f75565b610f7281600161211d565b92505b505b5f610f84878785856114ff565b90508015610fbe57610fa887610f9b60018461216e565b5f91825260209091200190565b54600160301b90046001600160d01b0316610fc0565b5f5b979650505050505050565b6001600160a01b038216610ff45760405163ec442f0560e01b81525f60048201526024016107c9565b61086c5f838361132d565b6001600160a01b03821661102857604051634b637e8f60e11b81525f60048201526024016107c9565b61086c825f8361132d565b5f6106b543611371565b6001600160a01b038281165f8181526008602052604080822080548686166001600160a01b0319821681179092559151919094169392849290917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46106ed81836110a986611555565b611572565b6001600160a01b0381165f908152600960205260408120546105b2906116db565b6001600160a01b0381165f908152600760205260408120546105b2565b60606106b57f0000000000000000000000000000000000000000000000000000000000000000600561170b565b60606106b57f0000000000000000000000000000000000000000000000000000000000000000600661170b565b80545f9080156111755761115f83610f9b60018461216e565b54600160301b90046001600160d01b0316610ba1565b5f9392505050565b5f6105b2611189610d39565b8360405161190160f01b8152600281019290925260228201526042902090565b5f5f5f5f6111b9888888886117b4565b9250925092506111c9828261187c565b50909695505050505050565b6001600160a01b0382165f9081526007602052604090208054600181019091558181146106ed576040516301d4b62360e61b81526001600160a01b0384166004820152602481018290526044016107c9565b604080518082019091525f80825260208201526001600160a01b0383165f908152600960205260409020610ba19083611934565b6001600160a01b0384166112845760405163e602df0560e01b81525f60048201526024016107c9565b6001600160a01b0383166112ad57604051634a1406b160e11b81525f60048201526024016107c9565b6001600160a01b038085165f90815260016020908152604080832093871683529290522082905580156106a657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161131f91815260200190565b60405180910390a350505050565b6106ed8383836119a1565b61134282826108ff565b61086c5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016107c9565b5f65ffffffffffff8211156113a3576040516306dfcc6560e41b815260306004820152602481018390526044016107c9565b5090565b5f600182116113b4575090565b816001600160801b82106113cd5760809190911c9060401b5b6801000000000000000082106113e85760409190911c9060201b5b64010000000082106113ff5760209190911c9060101b5b6201000082106114145760109190911c9060081b5b61010082106114285760089190911c9060041b5b6010821061143b5760049190911c9060021b5b600482106114475760011b5b600302600190811c9081858161145f5761145f612181565b048201901c9050600181858161147757611477612181565b048201901c9050600181858161148f5761148f612181565b048201901c905060018185816114a7576114a7612181565b048201901c905060018185816114bf576114bf612181565b048201901c905060018185816114d7576114d7612181565b048201901c90506114f68185816114f0576114f0612181565b04821190565b90039392505050565b5f5b8183101561154d575f85815260209020838316600285851804019081015465ffffffffffff8681169116111561153957809250611547565b61154481600161211d565b93505b50611501565b509392505050565b6001600160a01b0381165f908152602081905260408120546105b2565b816001600160a01b0316836001600160a01b03161415801561159357505f81115b156106ed576001600160a01b0383161561163a576001600160a01b0383165f90815260096020526040812081906115d590610bb36115d086611a07565b611a3a565b6001600160d01b031691506001600160d01b03169150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161162f929190918252602082015260400190565b60405180910390a250505b6001600160a01b038216156106ed576001600160a01b0382165f908152600960205260408120819061167290610ba86115d086611a07565b6001600160d01b031691506001600160d01b03169150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516116cc929190918252602082015260400190565b60405180910390a25050505050565b5f63ffffffff8211156113a3576040516306dfcc6560e41b815260206004820152602481018390526044016107c9565b606060ff83146117255761171e83611a72565b90506105b2565b818054611731906120d1565b80601f016020809104026020016040519081016040528092919081815260200182805461175d906120d1565b80156117a85780601f1061177f576101008083540402835291602001916117a8565b820191905f5260205f20905b81548152906001019060200180831161178b57829003601f168201915b505050505090506105b2565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156117ed57505f91506003905082611872565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561183e573d5f5f3e3d5ffd5b5050604051601f1901519150506001600160a01b03811661186957505f925060019150829050611872565b92505f91508190505b9450945094915050565b5f82600381111561188f5761188f612195565b03611898575050565b60018260038111156118ac576118ac612195565b036118ca5760405163f645eedf60e01b815260040160405180910390fd5b60028260038111156118de576118de612195565b036118ff5760405163fce698f760e01b8152600481018290526024016107c9565b600382600381111561191357611913612195565b0361086c576040516335e2f38360e21b8152600481018290526024016107c9565b604080518082019091525f8082526020820152825f018263ffffffff1681548110611961576119616121a9565b5f9182526020918290206040805180820190915291015465ffffffffffff81168252600160301b90046001600160d01b0316918101919091529392505050565b6119ac838383611aaf565b6001600160a01b0383166119fc575f6119c460025490565b90506001600160d01b03808211156119f957604051630e58ae9360e11b815260048101839052602481018290526044016107c9565b50505b6106ed838383611bd5565b5f6001600160d01b038211156113a3576040516306dfcc6560e41b815260d06004820152602481018390526044016107c9565b5f5f611a65611a47610929565b611a5d611a5388611146565b868863ffffffff16565b879190611c4a565b915091505b935093915050565b60605f611a7e83611c57565b6040805160208082528183019092529192505f91906020820181803683375050509182525060208101929092525090565b6001600160a01b038316611ad9578060025f828254611ace919061211d565b90915550611b499050565b6001600160a01b0383165f9081526020819052604090205481811015611b2b5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016107c9565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b038216611b6557600280548290039055611b83565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611bc891815260200190565b60405180910390a3505050565b6001600160a01b038316611bf757611bf4600a610ba86115d084611a07565b50505b6001600160a01b038216611c1957611c16600a610bb36115d084611a07565b50505b6001600160a01b038381165f908152600860205260408082205485841683529120546106ed92918216911683611572565b5f80611a65858585611c7e565b5f60ff8216601f8111156105b257604051632cd44ac360e21b815260040160405180910390fd5b82545f9081908015611d74575f611c9a87610f9b60018561216e565b805490915065ffffffffffff80821691600160301b90046001600160d01b0316908816821115611cdd57604051632520601d60e01b815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff1603611d1657825465ffffffffffff16600160301b6001600160d01b03891602178355611d66565b6040805180820190915265ffffffffffff808a1682526001600160d01b03808a1660208085019182528d54600181018f555f8f81529190912094519151909216600160301b029216919091179101555b9450859350611a6a92505050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a815291822095519251909316600160301b029190931617920191909155905081611a6a565b5f60208284031215611dde575f5ffd5b81356001600160e01b031981168114610ba1575f5ffd5b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610ba16020830184611df5565b80356001600160a01b0381168114611e4b575f5ffd5b919050565b5f5f60408385031215611e61575f5ffd5b611e6a83611e35565b946020939093013593505050565b5f5f5f60608486031215611e8a575f5ffd5b611e9384611e35565b9250611ea160208501611e35565b929592945050506040919091013590565b5f60208284031215611ec2575f5ffd5b5035919050565b5f5f60408385031215611eda575f5ffd5b82359150611eea60208401611e35565b90509250929050565b5f60208284031215611f03575f5ffd5b610ba182611e35565b60ff60f81b8816815260e060208201525f611f2a60e0830189611df5565b8281036040840152611f3c8189611df5565b606084018890526001600160a01b038716608085015260a0840186905283810360c0850152845180825260208087019350909101905f5b81811015611f91578351835260209384019390920191600101611f73565b50909b9a5050505050505050505050565b803560ff81168114611e4b575f5ffd5b5f5f5f5f5f5f60c08789031215611fc7575f5ffd5b611fd087611e35565b95506020870135945060408701359350611fec60608801611fa2565b9598949750929560808101359460a0909101359350915050565b5f5f5f5f5f5f5f60e0888a03121561201c575f5ffd5b61202588611e35565b965061203360208901611e35565b9550604088013594506060880135935061204f60808901611fa2565b9699959850939692959460a0840135945060c09093013592915050565b5f5f6040838503121561207d575f5ffd5b61208683611e35565b9150611eea60208401611e35565b5f5f604083850312156120a5575f5ffd5b6120ae83611e35565b9150602083013563ffffffff811681146120c6575f5ffd5b809150509250929050565b600181811c908216806120e557607f821691505b60208210810361210357634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156105b2576105b2612109565b6001600160d01b0381811683821601908111156105b2576105b2612109565b6001600160d01b0382811682821603908111156105b2576105b2612109565b818103818111156105b2576105b2612109565b634e487b7160e01b5f52601260045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52603260045260245ffdfea26469706673582212200d785b848988f0c4887f2c215a220f44cb856bf0f9f3dfa936142a2071ad8bc964736f6c634300081c0033dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"
    },
    "DonationReceipt": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_initialOwner",
              "type": "address"
            }
          ],
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
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611bf9380380611bf983398101604081905261002e91610158565b6040518060400160405280600f81526020016e111bdb985d1a5bdb949958d95a5c1d608a1b8152506040518060400160405280600b81526020016a10949051d49150d152541560aa1b815250815f9081610088919061021d565b506001610095828261021d565b506100a491505f9050826100ab565b50506102d7565b5f8281526006602090815260408083206001600160a01b038516845290915281205460ff1661014f575f8381526006602090815260408083206001600160a01b03861684529091529020805460ff191660011790556101073390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610152565b505f5b92915050565b5f60208284031215610168575f5ffd5b81516001600160a01b038116811461017e575f5ffd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806101ad57607f821691505b6020821081036101cb57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561021857805f5260205f20601f840160051c810160208510156101f65750805b601f840160051c820191505b81811015610215575f8155600101610202565b50505b505050565b81516001600160401b0381111561023657610236610185565b61024a816102448454610199565b846101d1565b6020601f82116001811461027c575f83156102655750848201515b5f19600385901b1c1916600184901b178455610215565b5f84815260208120601f198516915b828110156102ab578785015182556020948501946001909201910161028b565b50848210156102c857868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b611915806102e45f395ff3fe608060405234801561000f575f5ffd5b5060043610610153575f3560e01c806391d14854116100bf578063c87b56dd11610079578063c87b56dd14610301578063cf456ae714610314578063d3fc986414610327578063d53913931461033a578063d547741f1461034e578063e985e9c514610361575f5ffd5b806391d148541461029957806395d89b41146102ac578063a217fddf146102b4578063a22cb465146102bb578063b63e6ac3146102ce578063b88d4fde146102ee575f5ffd5b8063248a9ca311610110578063248a9ca31461020a5780632f2ff15d1461023a57806336568abe1461024d57806342842e0e146102605780636352211e1461027357806370a0823114610286575f5ffd5b806301ffc9a71461015757806306fdde031461017f578063081812fc14610194578063095ea7b3146101bf5780630f7ee1ec146101d457806323b872dd146101f7575b5f5ffd5b61016a61016536600461136f565b610374565b60405190151581526020015b60405180910390f35b610187610384565b60405161017691906113b8565b6101a76101a23660046113ca565b610413565b6040516001600160a01b039091168152602001610176565b6101d26101cd3660046113fc565b61043a565b005b6101e76101e23660046113ca565b610449565b6040516101769493929190611424565b6101d261020536600461145a565b610503565b61022c6102183660046113ca565b5f9081526006602052604090206001015490565b604051908152602001610176565b6101d2610248366004611494565b610591565b6101d261025b366004611494565b6105b5565b6101d261026e36600461145a565b6105ed565b6101a76102813660046113ca565b610607565b61022c6102943660046114be565b610611565b61016a6102a7366004611494565b610656565b610187610680565b61022c5f81565b6101d26102c93660046114d7565b61068f565b6102e16102dc3660046113ca565b61069a565b6040516101769190611510565b6101d26102fc366004611564565b6107b2565b61018761030f3660046113ca565b6107ca565b6101d26103223660046114d7565b61083b565b61022c610335366004611641565b610879565b61022c5f5160206118c05f395f51905f5281565b6101d261035c366004611494565b6109b5565b61016a61036f3660046116c4565b6109d9565b5f61037e82610a06565b92915050565b60605f8054610392906116ec565b80601f01602080910402602001604051908101604052809291908181526020018280546103be906116ec565b80156104095780601f106103e057610100808354040283529160200191610409565b820191905f5260205f20905b8154815290600101906020018083116103ec57829003601f168201915b5050505050905090565b5f61041d82610a2a565b505f828152600460205260409020546001600160a01b031661037e565b610445828233610a62565b5050565b60086020525f908152604090208054600182015460028301546003840180546001600160a01b03909416949293919291610482906116ec565b80601f01602080910402602001604051908101604052809291908181526020018280546104ae906116ec565b80156104f95780601f106104d0576101008083540402835291602001916104f9565b820191905f5260205f20905b8154815290600101906020018083116104dc57829003601f168201915b5050505050905084565b6001600160a01b03821661053157604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f61053d838333610a6f565b9050836001600160a01b0316816001600160a01b03161461058b576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610528565b50505050565b5f828152600660205260409020600101546105ab81610b24565b61058b8383610b31565b6001600160a01b03811633146105de5760405163334bd91960e11b815260040160405180910390fd5b6105e88282610bc2565b505050565b6105e883838360405180602001604052805f8152506107b2565b5f61037e82610a2a565b5f6001600160a01b03821661063b576040516322718ad960e21b81525f6004820152602401610528565b506001600160a01b03165f9081526003602052604090205490565b5f9182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060018054610392906116ec565b610445338383610c2d565b6106cb60405180608001604052805f6001600160a01b031681526020015f81526020015f8152602001606081525090565b6106d482610a2a565b505f82815260086020908152604091829020825160808101845281546001600160a01b0316815260018201549281019290925260028101549282019290925260038201805491929160608401919061072b906116ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610757906116ec565b80156107a25780601f10610779576101008083540402835291602001916107a2565b820191905f5260205f20905b81548152906001019060200180831161078557829003601f168201915b5050505050815250509050919050565b6107bd848484610503565b61058b3385858585610cf4565b60606107d582610a2a565b505f6107eb60408051602081019091525f815290565b90505f8151116108095760405180602001604052805f815250610834565b8061081384610e1c565b60405160200161082492919061173b565b6040516020818303038152906040525b9392505050565b5f61084581610b24565b81156108625761058b5f5160206118c05f395f51905f5284610b31565b61058b5f5160206118c05f395f51905f5284610bc2565b5f5f5160206118c05f395f51905f5261089181610b24565b600780545f91826108a18361174f565b9190505590506040518060800160405280886001600160a01b0316815260200187815260200142815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505083815260086020908152604091829020845181546001600160a01b0319166001600160a01b039091161781559084015160018201559083015160028201556060830151909150600382019061095990826117b7565b509050506109678782610eac565b866001600160a01b0316817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea5886040516109a391815260200190565b60405180910390a39695505050505050565b5f828152600660205260409020600101546109cf81610b24565b61058b8383610bc2565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f6001600160e01b03198216637965db0b60e01b148061037e575061037e82610ec5565b5f818152600260205260408120546001600160a01b03168061037e57604051637e27328960e01b815260048101849052602401610528565b6105e88383836001610f14565b5f828152600260205260408120546001600160a01b03168015801590610a9d57506001600160a01b03851615155b15610b105760405162461bcd60e51b815260206004820152603d60248201527f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f60448201527f756e6420616e642063616e6e6f74206265207472616e736665727265640000006064820152608401610528565b610b1b858585611018565b95945050505050565b610b2e813361110a565b50565b5f610b3c8383610656565b610bbb575f8381526006602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610b733390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161037e565b505f61037e565b5f610bcd8383610656565b15610bbb575f8381526006602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161037e565b6001600160a01b038316610c565760405163a9fbf51f60e01b81525f6004820152602401610528565b6001600160a01b038216610c8857604051630b61174360e31b81526001600160a01b0383166004820152602401610528565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15610e1557604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610d36908890889087908790600401611872565b6020604051808303815f875af1925050508015610d70575060408051601f3d908101601f19168201909252610d6d918101906118a4565b60015b610dd7573d808015610d9d576040519150601f19603f3d011682016040523d82523d5f602084013e610da2565b606091505b5080515f03610dcf57604051633250574960e11b81526001600160a01b0385166004820152602401610528565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b14610e1357604051633250574960e11b81526001600160a01b0385166004820152602401610528565b505b5050505050565b60605f610e2883611143565b60010190505f8167ffffffffffffffff811115610e4757610e47611550565b6040519080825280601f01601f191660200182016040528015610e71576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610e7b57509392505050565b610445828260405180602001604052805f81525061121a565b5f6001600160e01b031982166380ac58cd60e01b1480610ef557506001600160e01b03198216635b5e139f60e01b145b8061037e57506301ffc9a760e01b6001600160e01b031983161461037e565b8080610f2857506001600160a01b03821615155b15610fe9575f610f3784610a2a565b90506001600160a01b03831615801590610f635750826001600160a01b0316816001600160a01b031614155b8015610f765750610f7481846109d9565b155b15610f9f5760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610528565b8115610fe75783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f828152600260205260408120546001600160a01b039081169083161561104457611044818486611231565b6001600160a01b0381161561107e5761105f5f855f5f610f14565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156110ac576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6111148282610656565b6104455760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610528565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106111815772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106111ad576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106111cb57662386f26fc10000830492506010015b6305f5e10083106111e3576305f5e100830492506008015b61271083106111f757612710830492506004015b60648310611209576064830492506002015b600a831061037e5760010192915050565b6112248383611295565b6105e8335f858585610cf4565b61123c8383836112f6565b6105e8576001600160a01b03831661126a57604051637e27328960e01b815260048101829052602401610528565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610528565b6001600160a01b0382166112be57604051633250574960e11b81525f6004820152602401610528565b5f6112ca83835f610a6f565b90506001600160a01b038116156105e8576040516339e3563760e11b81525f6004820152602401610528565b5f6001600160a01b038316158015906113525750826001600160a01b0316846001600160a01b0316148061132f575061132f84846109d9565b8061135257505f828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160e01b031981168114610b2e575f5ffd5b5f6020828403121561137f575f5ffd5b81356108348161135a565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610834602083018461138a565b5f602082840312156113da575f5ffd5b5035919050565b80356001600160a01b03811681146113f7575f5ffd5b919050565b5f5f6040838503121561140d575f5ffd5b611416836113e1565b946020939093013593505050565b60018060a01b0385168152836020820152826040820152608060608201525f611450608083018461138a565b9695505050505050565b5f5f5f6060848603121561146c575f5ffd5b611475846113e1565b9250611483602085016113e1565b929592945050506040919091013590565b5f5f604083850312156114a5575f5ffd5b823591506114b5602084016113e1565b90509250929050565b5f602082840312156114ce575f5ffd5b610834826113e1565b5f5f604083850312156114e8575f5ffd5b6114f1836113e1565b915060208301358015158114611505575f5ffd5b809150509250929050565b6020815260018060a01b03825116602082015260208201516040820152604082015160608201525f606083015160808084015261135260a084018261138a565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215611577575f5ffd5b611580856113e1565b935061158e602086016113e1565b925060408501359150606085013567ffffffffffffffff8111156115b0575f5ffd5b8501601f810187136115c0575f5ffd5b803567ffffffffffffffff8111156115da576115da611550565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561160957611609611550565b604052818152828201602001891015611620575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f5f5f60608587031215611654575f5ffd5b61165d856113e1565b935060208501359250604085013567ffffffffffffffff81111561167f575f5ffd5b8501601f8101871361168f575f5ffd5b803567ffffffffffffffff8111156116a5575f5ffd5b8760208284010111156116b6575f5ffd5b949793965060200194505050565b5f5f604083850312156116d5575f5ffd5b6116de836113e1565b91506114b5602084016113e1565b600181811c9082168061170057607f821691505b60208210810361171e57634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f6113526117498386611724565b84611724565b5f6001820161176c57634e487b7160e01b5f52601160045260245ffd5b5060010190565b601f8211156105e857805f5260205f20601f840160051c810160208510156117985750805b601f840160051c820191505b81811015610e15575f81556001016117a4565b815167ffffffffffffffff8111156117d1576117d1611550565b6117e5816117df84546116ec565b84611773565b6020601f821160018114611817575f83156118005750848201515b5f19600385901b1c1916600184901b178455610e15565b5f84815260208120601f198516915b828110156118465787850151825560209485019460019092019101611826565b508482101561186357868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906114509083018461138a565b5f602082840312156118b4575f5ffd5b81516108348161135a56fe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a26469706673582212206af20318050d68d93e1485542fa2e09e193d280d46ba480906590e994770881364736f6c634300081c0033"
    },
    "ExhibitRegistry": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "initialOwner",
              "type": "address"
            }
          ],
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161107638038061107683398101604081905261002e91610113565b6100385f8261006a565b506100637f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea098261006a565b5050610140565b5f828152602081815260408083206001600160a01b038516845290915281205460ff1661010a575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100c23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161010d565b505f5b92915050565b5f60208284031215610123575f5ffd5b81516001600160a01b0381168114610139575f5ffd5b9392505050565b610f298061014d5f395ff3fe608060405234801561000f575f5ffd5b50600436106100f0575f3560e01c8063a217fddf11610093578063d42b291c11610063578063d42b291c14610217578063d547741f1461022a578063d7bfe3861461023d578063e7705db614610268575f5ffd5b8063a217fddf146101af578063a622ee7c146101b6578063b9209e33146101d9578063ceb68c2314610204575f5ffd5b806336568abe116100ce57806336568abe1461016157806374d4e4911461017457806390229af71461017c57806391d148541461019c575f5ffd5b806301ffc9a7146100f4578063248a9ca31461011c5780632f2ff15d1461014c575b5f5ffd5b610107610102366004610ae2565b61028f565b60405190151581526020015b60405180910390f35b61013e61012a366004610b10565b5f9081526020819052604090206001015490565b604051908152602001610113565b61015f61015a366004610b42565b6102c5565b005b61015f61016f366004610b42565b6102ef565b60025461013e565b61018f61018a366004610b6c565b610327565b6040516101139190610be7565b6101076101aa366004610b42565b6104cd565b61013e5f81565b6101c96101c4366004610b6c565b6104f5565b6040516101139493929190610c47565b6101076101e7366004610b6c565b6001600160a01b03165f9081526001602052604090205460ff1690565b61015f610212366004610b6c565b610631565b61015f610225366004610cd0565b610705565b61015f610238366004610b42565b610954565b61025061024b366004610b10565b610978565b6040516001600160a01b039091168152602001610113565b61013e7f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0981565b5f6001600160e01b03198216637965db0b60e01b14806102bf57506301ffc9a760e01b6001600160e01b03198316145b92915050565b5f828152602081905260409020600101546102df816109a0565b6102e983836109ad565b50505050565b6001600160a01b03811633146103185760405163334bd91960e11b815260040160405180910390fd5b6103228282610a3c565b505050565b60408051608080820183525f80835260208084018290526060848601819052808501526001600160a01b038616825260018152908490208451928301909452835460ff80821615158452939492939184019161010090910416600481111561039157610391610b85565b60048111156103a2576103a2610b85565b81526020016001820180546103b690610d65565b80601f01602080910402602001604051908101604052809291908181526020018280546103e290610d65565b801561042d5780601f106104045761010080835404028352916020019161042d565b820191905f5260205f20905b81548152906001019060200180831161041057829003601f168201915b5050505050815260200160028201805461044690610d65565b80601f016020809104026020016040519081016040528092919081815260200182805461047290610d65565b80156104bd5780601f10610494576101008083540402835291602001916104bd565b820191905f5260205f20905b8154815290600101906020018083116104a057829003601f168201915b5050505050815250509050919050565b5f918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600160208190525f91825260409091208054918101805460ff8085169461010090041692919061052490610d65565b80601f016020809104026020016040519081016040528092919081815260200182805461055090610d65565b801561059b5780601f106105725761010080835404028352916020019161059b565b820191905f5260205f20905b81548152906001019060200180831161057e57829003601f168201915b5050505050908060020180546105b090610d65565b80601f01602080910402602001604051908101604052809291908181526020018280546105dc90610d65565b80156106275780601f106105fe57610100808354040283529160200191610627565b820191905f5260205f20905b81548152906001019060200180831161060a57829003601f168201915b5050505050905084565b7f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0961065b816109a0565b6001600160a01b0382165f9081526001602052604090205460ff166106bc5760405162461bcd60e51b815260206004820152601260248201527115985d5b1d081b9bdd081d995c9a599a595960721b60448201526064015b60405180910390fd5b6001600160a01b0382165f81815260016020526040808220805460ff19169055517fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a9190a25050565b7f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0961072f816109a0565b6001600160a01b0387166107775760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016106b3565b6001600160a01b0387165f9081526001602052604090205460ff166107e157600280546001810182555f919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0389161790555b604051806080016040528060011515815260200187600481111561080757610807610b85565b815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250604080516020601f8701819004810282018101909252858152918101919086908690819084018382808284375f9201829052509390945250506001600160a01b038a1681526001602090815260409091208351815490151560ff19821681178355928501519193509091839161ff001990911661ffff19909116176101008360048111156108d4576108d4610b85565b0217905550604082015160018201906108ed9082610dfc565b50606082015160028201906109029082610dfc565b50905050866001600160a01b03167f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec887878760405161094393929190610eb7565b60405180910390a250505050505050565b5f8281526020819052604090206001015461096e816109a0565b6102e98383610a3c565b60028181548110610987575f80fd5b5f918252602090912001546001600160a01b0316905081565b6109aa8133610aa5565b50565b5f6109b883836104cd565b610a35575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556109ed3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016102bf565b505f6102bf565b5f610a4783836104cd565b15610a35575f838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016102bf565b610aaf82826104cd565b610ade5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016106b3565b5050565b5f60208284031215610af2575f5ffd5b81356001600160e01b031981168114610b09575f5ffd5b9392505050565b5f60208284031215610b20575f5ffd5b5035919050565b80356001600160a01b0381168114610b3d575f5ffd5b919050565b5f5f60408385031215610b53575f5ffd5b82359150610b6360208401610b27565b90509250929050565b5f60208284031215610b7c575f5ffd5b610b0982610b27565b634e487b7160e01b5f52602160045260245ffd5b60058110610bb557634e487b7160e01b5f52602160045260245ffd5b9052565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081528151151560208201525f6020830151610c076040840182610b99565b50604083015160806060840152610c2160a0840182610bb9565b90506060840151601f19848303016080850152610c3e8282610bb9565b95945050505050565b8415158152610c596020820185610b99565b608060408201525f610c6e6080830185610bb9565b8281036060840152610c808185610bb9565b979650505050505050565b5f5f83601f840112610c9b575f5ffd5b50813567ffffffffffffffff811115610cb2575f5ffd5b602083019150836020828501011115610cc9575f5ffd5b9250929050565b5f5f5f5f5f5f60808789031215610ce5575f5ffd5b610cee87610b27565b9550602087013560058110610d01575f5ffd5b9450604087013567ffffffffffffffff811115610d1c575f5ffd5b610d2889828a01610c8b565b909550935050606087013567ffffffffffffffff811115610d47575f5ffd5b610d5389828a01610c8b565b979a9699509497509295939492505050565b600181811c90821680610d7957607f821691505b602082108103610d9757634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52604160045260245ffd5b601f82111561032257805f5260205f20601f840160051c81016020851015610dd65750805b601f840160051c820191505b81811015610df5575f8155600101610de2565b5050505050565b815167ffffffffffffffff811115610e1657610e16610d9d565b610e2a81610e248454610d65565b84610db1565b6020601f821160018114610e5c575f8315610e455750848201515b5f19600385901b1c1916600184901b178455610df5565b5f84815260208120601f198516915b82811015610e8b5787850151825560209485019460019092019101610e6b565b5084821015610ea857868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b610ec18185610b99565b60406020820152816040820152818360608301375f818301606090810191909152601f909201601f191601019291505056fea2646970667358221220e16e39834dee41ce9333eb77b86b193865215f35078fa9c3a74599819718ac4c64736f6c634300081c0033"
    },
    "ExhibitVault": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_registry",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "ReentrancyGuardReentrantCall",
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
      "bytecode": "0x6080604052348015600e575f5ffd5b5060405161255f38038061255f833981016040819052602b916072565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00555f80546001600160a01b0319166001600160a01b0392909216919091179055609d565b5f602082840312156081575f5ffd5b81516001600160a01b03811681146096575f5ffd5b9392505050565b6124b5806100aa5f395ff3fe608060405234801561000f575f5ffd5b506004361061011c575f3560e01c80637b103999116100a9578063c2fe51851161006e578063c2fe5185146102f0578063d6bd07ee14610303578063d742385814610316578063f07a380e14610329578063f23a6e611461033c575f5ffd5b80637b103999146102755780637b606fdc1461028757806381bd34d21461029a578063bc197c81146102ca578063c10e5153146102dd575f5ffd5b80632ff1d0f9116100ef5780632ff1d0f9146101c1578063358d48d9146101d457806335f81b87146101e7578063380ff999146101fa5780636f39becd1461022a575f5ffd5b806301ffc9a714610120578063025f75ac14610148578063041261961461015d578063150b7a0214610195575b5f5ffd5b61013361012e366004611a2a565b61034f565b60405190151581526020015b60405180910390f35b61015b610156366004611ab6565b610385565b005b61018761016b366004611b65565b600360209081525f928352604080842090915290825290205481565b60405190815260200161013f565b6101a86101a3366004611c73565b610447565b6040516001600160e01b0319909116815260200161013f565b61015b6101cf366004611cda565b610742565b61015b6101e2366004611d0c565b610762565b61015b6101f5366004611d76565b6107f2565b610187610208366004611dc4565b600460209081525f938452604080852082529284528284209052825290205481565b61025d610238366004611b65565b600160209081525f92835260408084209091529082529020546001600160a01b031681565b6040516001600160a01b03909116815260200161013f565b5f5461025d906001600160a01b031681565b61015b610295366004611e03565b610816565b6101876102a8366004611dc4565b600260209081525f938452604080852082529284528284209052825290205481565b6101a86102d8366004611f1e565b6108cc565b61015b6102eb366004611fce565b610c68565b61015b6102fe36600461204f565b610cf4565b61015b610311366004612094565b610d10565b61015b610324366004611dc4565b610d25565b61015b610337366004611b65565b610d39565b6101a861034a3660046120db565b610d57565b5f6001600160e01b03198216630271189760e51b148061037f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b61038d611085565b858414801561039b57508382145b6103c05760405162461bcd60e51b81526004016103b790612132565b60405180910390fd5b5f5b868110156104355761042d8888838181106103df576103df61215d565b90506020020160208101906103f49190612171565b8787848181106104065761040661215d565b9050602002013586868581811061041f5761041f61215d565b90506020020135855f6110b3565b6001016103c2565b5061043e6113bc565b50505050505050565b5f610450611085565b5f6001600160a01b038516156104665784610468565b855b83519091505f9060200361051c575f5460405163b9209e3360e01b81526001600160a01b0388811660048301529091169063b9209e3390602401602060405180830381865afa1580156104bd573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104e191906121a0565b1561050157838060200190518101906104fa91906121b9565b91506105ca565b8380602001905181019061051591906121d4565b90506105ca565b83516040036105ca575f5460405163b9209e3360e01b81526001600160a01b0388811660048301529091169063b9209e3390602401602060405180830381865afa15801561056c573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061059091906121a0565b156105b357838060200190518101906105a991906121eb565b90925090506105ca565b838060200190518101906105c791906121d4565b90505b335f908152600160209081526040808320888452909152812080546001600160a01b0319166001600160a01b03851617905581610607575f610611565b610611824261222b565b335f9081526003602090815260408083208a845290915290205490915081111561065257335f90815260036020908152604080832089845290915290208190555b5f80546040516390229af760e01b81523060048201526001600160a01b03909116906390229af7906024015f60405180830381865afa158015610697573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526106be919081019061228b565b604090810151335f818152600360209081528482208c835290528390205492519193506001600160a01b038716928a927f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad39161071c91879190612376565b60405180910390a4630a85bd0160e11b94505050505061073a6113bc565b949350505050565b61074a611085565b6107558383836113e2565b61075d6113bc565b505050565b61076a611085565b8281146107895760405162461bcd60e51b81526004016103b790612132565b5f5b838110156107e3576107db8585838181106107a8576107a861215d565b90506020020160208101906107bd9190612171565b8484848181106107cf576107cf61215d565b90506020020135611601565b60010161078b565b506107ec6113bc565b50505050565b6107fa611085565b61080785858585856110b3565b61080f6113bc565b5050505050565b61081e611085565b848314801561082c57508281145b6108485760405162461bcd60e51b81526004016103b790612132565b5f5b858110156108bb576108b38787838181106108675761086761215d565b905060200201602081019061087c9190612171565b86868481811061088e5761088e61215d565b905060200201358585858181106108a7576108a761215d565b905060200201356113e2565b60010161084a565b506108c46113bc565b505050505050565b5f6108d5611085565b5f6001600160a01b038616156108eb57856108ed565b865b83519091505f906020036109a1575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015610942573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061096691906121a0565b15610986578380602001905181019061097f91906121b9565b9150610a4f565b8380602001905181019061099a91906121d4565b9050610a4f565b8351604003610a4f575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa1580156109f1573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a1591906121a0565b15610a385783806020019051810190610a2e91906121eb565b9092509050610a4f565b83806020019051810190610a4c91906121d4565b90505b5f5f8211610a5d575f610a67565b610a67824261222b565b5f80546040516390229af760e01b815230600482015292935090916001600160a01b03909116906390229af7906024015f60405180830381865afa158015610ab1573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610ad8919081019061228b565b604001519050335f5b8951811015610c47575f8a8281518110610afd57610afd61215d565b602002602001015190505f8a8381518110610b1a57610b1a61215d565b6020908102919091018101516001600160a01b038087165f9081526002845260408082208783528552808220928d168252919093528220805491935083929091610b6590849061222b565b90915550506001600160a01b038085165f9081526004602090815260408083208684528252808320938c1683529290522054861115610bce576001600160a01b038085165f9081526004602090815260408083208684528252808320938c168352929052208690555b6001600160a01b038481165f8181526004602090815260408083208784528252808320948d1680845294909152908190205490518592917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3591610c359187918c9190612397565b60405180910390a45050600101610ae1565b5063bc197c8160e01b95505050505050610c5f6113bc565b95945050505050565b610c70611085565b838214610c8f5760405162461bcd60e51b81526004016103b790612132565b5f5b84811015610ceb57610ce3868683818110610cae57610cae61215d565b9050602002016020810190610cc39190612171565b858584818110610cd557610cd561215d565b90506020020135845f611767565b600101610c91565b5061080f6113bc565b610cfc611085565b610d0884848484611767565b6107ec6113bc565b610d18611085565b610d08848484845f6110b3565b610d2d611085565b6107558383835f611767565b610d41611085565b610d4b8282611601565b610d536113bc565b5050565b5f610d60611085565b5f6001600160a01b03861615610d765785610d78565b865b83519091505f90602003610e2c575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015610dcd573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610df191906121a0565b15610e115783806020019051810190610e0a91906121b9565b9150610eda565b83806020019051810190610e2591906121d4565b9050610eda565b8351604003610eda575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015610e7c573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ea091906121a0565b15610ec35783806020019051810190610eb991906121eb565b9092509050610eda565b83806020019051810190610ed791906121d4565b90505b335f90815260026020908152604080832089845282528083206001600160a01b038616845290915281208054879290610f1490849061222b565b909155505f905081610f26575f610f30565b610f30824261222b565b335f9081526004602090815260408083208b845282528083206001600160a01b0388168452909152902054909150811115610f9357335f9081526004602090815260408083208a845282528083206001600160a01b038716845290915290208190555b5f80546040516390229af760e01b81523060048201526001600160a01b03909116906390229af7906024015f60405180830381865afa158015610fd8573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610fff919081019061228b565b604090810151335f818152600460209081528482208d835281528482206001600160a01b038a16808452915290849020549351929450928b927f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3591611067918d918891612397565b60405180910390a463f23a6e6160e01b945050505050610c5f6113bc565b61108d6119e6565b60027f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b6001600160a01b0385165f90815260026020908152604080832087845282528083203384529091529020548311156111245760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016103b7565b5f5460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa15801561116b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061118f91906121a0565b6111d65760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b60448201526064016103b7565b6001600160a01b0385165f90815260046020908152604080832087845282528083203384529091529020544210156112205760405162461bcd60e51b81526004016103b7906123bf565b6001600160a01b0385165f90815260026020908152604080832087845282528083203384529091528120805485929061125a9084906123f6565b90915550506001600160a01b0385165f908152600260209081526040808320878452825280832033845290915281205490036112bc576001600160a01b0385165f90815260046020908152604080832087845282528083203384529091528120555b606081156112ed5760408051336020820152908101839052606001604051602081830303815290604052905061130a565b604080513360208201520160405160208183030381529060405290505b604051637921219560e11b81526001600160a01b0387169063f242432a9061133e90309087908a908a908890600401612409565b5f604051808303815f87803b158015611355575f5ffd5b505af1158015611367573d5f5f3e3d5ffd5b5050604080518781526001600160a01b0387811660208301523394508993508a16917fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1910160405180910390a4505050505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b6001600160a01b0383165f90815260026020908152604080832085845282528083203384529091529020548111156114535760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016103b7565b6001600160a01b0383165f908152600460209081526040808320858452825280832033845290915290205442101561149d5760405162461bcd60e51b81526004016103b7906123bf565b6001600160a01b0383165f9081526002602090815260408083208584528252808320338452909152812080548392906114d79084906123f6565b90915550506001600160a01b0383165f90815260026020908152604080832085845282528083203384529091528120549003611539576001600160a01b0383165f90815260046020908152604080832085845282528083203384529091528120555b604051637921219560e11b8152306004820152336024820152604481018390526064810182905260a060848201525f60a48201526001600160a01b0384169063f242432a9060c4015f604051808303815f87803b158015611598575f5ffd5b505af11580156115aa573d5f5f3e3d5ffd5b50505050336001600160a01b031682846001600160a01b03167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f9846040516115f491815260200190565b60405180910390a4505050565b6001600160a01b038281165f9081526001602090815260408083208584529091529020541633146116645760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b60448201526064016103b7565b6001600160a01b0382165f9081526003602090815260408083208484529091529020544210156116a65760405162461bcd60e51b81526004016103b7906123bf565b6001600160a01b0382165f8181526001602090815260408083208584529091529081902080546001600160a01b031916905551632142170760e11b8152306004820152336024820152604481018390526342842e0e906064015f604051808303815f87803b158015611716575f5ffd5b505af1158015611728573d5f5f3e3d5ffd5b50506040513392508391506001600160a01b038516907f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06905f90a45050565b6001600160a01b038481165f9081526001602090815260408083208784529091529020541633146117ca5760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b60448201526064016103b7565b5f5460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa158015611811573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061183591906121a0565b61187c5760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b60448201526064016103b7565b6001600160a01b0384165f9081526003602090815260408083208684529091529020544210156118be5760405162461bcd60e51b81526004016103b7906123bf565b6001600160a01b0384165f908152600160209081526040808320868452909152902080546001600160a01b03191690556060811561191f5760408051336020820152908101839052606001604051602081830303815290604052905061193c565b604080513360208201520160405160208183030381529060405290505b604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde9061196e90309087908990879060040161244d565b5f604051808303815f87803b158015611985575f5ffd5b505af1158015611997573d5f5f3e3d5ffd5b50506040516001600160a01b0386811682523393508792508816907f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d799060200160405180910390a45050505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0054600203611a2857604051633ee5aeb560e01b815260040160405180910390fd5b565b5f60208284031215611a3a575f5ffd5b81356001600160e01b031981168114611a51575f5ffd5b9392505050565b5f5f83601f840112611a68575f5ffd5b5081356001600160401b03811115611a7e575f5ffd5b6020830191508360208260051b8501011115611a98575f5ffd5b9250929050565b6001600160a01b0381168114611ab3575f5ffd5b50565b5f5f5f5f5f5f5f6080888a031215611acc575f5ffd5b87356001600160401b03811115611ae1575f5ffd5b611aed8a828b01611a58565b90985096505060208801356001600160401b03811115611b0b575f5ffd5b611b178a828b01611a58565b90965094505060408801356001600160401b03811115611b35575f5ffd5b611b418a828b01611a58565b9094509250506060880135611b5581611a9f565b8091505092959891949750929550565b5f5f60408385031215611b76575f5ffd5b8235611b8181611a9f565b946020939093013593505050565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b0381118282101715611bc557611bc5611b8f565b60405290565b604051601f8201601f191681016001600160401b0381118282101715611bf357611bf3611b8f565b604052919050565b5f6001600160401b03821115611c1357611c13611b8f565b50601f01601f191660200190565b5f82601f830112611c30575f5ffd5b8135611c43611c3e82611bfb565b611bcb565b818152846020838601011115611c57575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215611c86575f5ffd5b8435611c9181611a9f565b93506020850135611ca181611a9f565b92506040850135915060608501356001600160401b03811115611cc2575f5ffd5b611cce87828801611c21565b91505092959194509250565b5f5f5f60608486031215611cec575f5ffd5b8335611cf781611a9f565b95602085013595506040909401359392505050565b5f5f5f5f60408587031215611d1f575f5ffd5b84356001600160401b03811115611d34575f5ffd5b611d4087828801611a58565b90955093505060208501356001600160401b03811115611d5e575f5ffd5b611d6a87828801611a58565b95989497509550505050565b5f5f5f5f5f60a08688031215611d8a575f5ffd5b8535611d9581611a9f565b945060208601359350604086013592506060860135611db381611a9f565b949793965091946080013592915050565b5f5f5f60608486031215611dd6575f5ffd5b8335611de181611a9f565b9250602084013591506040840135611df881611a9f565b809150509250925092565b5f5f5f5f5f5f60608789031215611e18575f5ffd5b86356001600160401b03811115611e2d575f5ffd5b611e3989828a01611a58565b90975095505060208701356001600160401b03811115611e57575f5ffd5b611e6389828a01611a58565b90955093505060408701356001600160401b03811115611e81575f5ffd5b611e8d89828a01611a58565b979a9699509497509295939492505050565b5f82601f830112611eae575f5ffd5b81356001600160401b03811115611ec757611ec7611b8f565b8060051b611ed760208201611bcb565b91825260208185018101929081019086841115611ef2575f5ffd5b6020860192505b83831015611f14578235825260209283019290910190611ef9565b9695505050505050565b5f5f5f5f5f60a08688031215611f32575f5ffd5b8535611f3d81611a9f565b94506020860135611f4d81611a9f565b935060408601356001600160401b03811115611f67575f5ffd5b611f7388828901611e9f565b93505060608601356001600160401b03811115611f8e575f5ffd5b611f9a88828901611e9f565b92505060808601356001600160401b03811115611fb5575f5ffd5b611fc188828901611c21565b9150509295509295909350565b5f5f5f5f5f60608688031215611fe2575f5ffd5b85356001600160401b03811115611ff7575f5ffd5b61200388828901611a58565b90965094505060208601356001600160401b03811115612021575f5ffd5b61202d88828901611a58565b909450925050604086013561204181611a9f565b809150509295509295909350565b5f5f5f5f60808587031215612062575f5ffd5b843561206d81611a9f565b935060208501359250604085013561208481611a9f565b9396929550929360600135925050565b5f5f5f5f608085870312156120a7575f5ffd5b84356120b281611a9f565b9350602085013592506040850135915060608501356120d081611a9f565b939692955090935050565b5f5f5f5f5f60a086880312156120ef575f5ffd5b85356120fa81611a9f565b9450602086013561210a81611a9f565b9350604086013592506060860135915060808601356001600160401b03811115611fb5575f5ffd5b6020808252601190820152704d69736d6174636865642061727261797360781b604082015260600190565b634e487b7160e01b5f52603260045260245ffd5b5f60208284031215612181575f5ffd5b8135611a5181611a9f565b8051801515811461219b575f5ffd5b919050565b5f602082840312156121b0575f5ffd5b611a518261218c565b5f602082840312156121c9575f5ffd5b8151611a5181611a9f565b5f602082840312156121e4575f5ffd5b5051919050565b5f5f604083850312156121fc575f5ffd5b825161220781611a9f565b6020939093015192949293505050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561037f5761037f612217565b5f82601f83011261224d575f5ffd5b815161225b611c3e82611bfb565b81815284602083860101111561226f575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f6020828403121561229b575f5ffd5b81516001600160401b038111156122b0575f5ffd5b8201608081850312156122c1575f5ffd5b6122c9611ba3565b6122d28261218c565b8152602082015160ff811681146122e7575f5ffd5b602082015260408201516001600160401b03811115612304575f5ffd5b6123108682850161223e565b60408301525060608201516001600160401b0381111561232e575f5ffd5b61233a8682850161223e565b606083015250949350505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b604081525f6123886040830185612348565b90508260208301529392505050565b838152606060208201525f6123af6060830185612348565b9050826040830152949350505050565b6020808252601a908201527f45786869626974696f6e206e6f74207965742065787069726564000000000000604082015260600190565b8181038181111561037f5761037f612217565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f9061244290830184612348565b979650505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90611f149083018461234856fea264697066735822122093661aecd7820562f179c27b92fde2c38b4ebc4b21865aa7c41a03388b797d1064736f6c634300081c0033"
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
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610540380380610540833981016040819052602b916074565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560a0565b80516001600160a01b0381168114606f575f5ffd5b919050565b5f5f604083850312156084575f5ffd5b608b83605a565b9150609760208401605a565b90509250929050565b610493806100ad5f395ff3fe608060405260043610610041575f3560e01c8063150b7a021461004c5780631afed87514610089578063abc8c7af146100aa578063d56d229d146100e0575f5ffd5b3661004857005b5f5ffd5b348015610057575f5ffd5b5061006b610066366004610363565b6100ff565b6040516001600160e01b031990911681526020015b60405180910390f35b348015610094575f5ffd5b506100a86100a33660046103fc565b610174565b005b3480156100b5575f5ffd5b505f546100c8906001600160a01b031681565b6040516001600160a01b039091168152602001610080565b3480156100eb575f5ffd5b506001546100c8906001600160a01b031681565b5f805460015460405163016295ab60e21b81526001600160a01b0391821660048201526024810187905291169063058a56ac906044015f604051808303815f87803b15801561014c575f5ffd5b505af115801561015e573d5f5f3e3d5ffd5b50630a85bd0160e11b9998505050505050505050565b5f5f5f9054906101000a90046001600160a01b03166001600160a01b0316633013ce296040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101c4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e8919061041c565b6040516323b872dd60e01b8152336004820152306024820152604481018490529091506001600160a01b038216906323b872dd906064016020604051808303815f875af115801561023b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061025f919061043e565b505f5460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490529082169063095ea7b3906044016020604051808303815f875af11580156102af573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102d3919061043e565b505f5460018054604051636c4c557960e11b81526001600160a01b039182166004820152602481018790526044810192909252606482018590529091169063d898aaf2906084015f604051808303815f87803b158015610331575f5ffd5b505af1158015610343573d5f5f3e3d5ffd5b50505050505050565b6001600160a01b0381168114610360575f5ffd5b50565b5f5f5f5f5f60808688031215610377575f5ffd5b85356103828161034c565b945060208601356103928161034c565b935060408601359250606086013567ffffffffffffffff8111156103b4575f5ffd5b8601601f810188136103c4575f5ffd5b803567ffffffffffffffff8111156103da575f5ffd5b8860208284010111156103eb575f5ffd5b959894975092955050506020019190565b5f5f6040838503121561040d575f5ffd5b50508035926020909101359150565b5f6020828403121561042c575f5ffd5b81516104378161034c565b9392505050565b5f6020828403121561044e575f5ffd5b81518015158114610437575f5ffdfea2646970667358221220efb90a23ecb3596c395621d029ca89c7c720496ff351a19f399302f1fda4687764736f6c634300081c0033"
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
        }
      ],
      "bytecode": "0x60a060405234801561000f575f5ffd5b5060405161209238038061209283398101604081905261002e9161014d565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556001600160a01b03818116608052600380546001600160a01b0319169184169190911790556100815f83610089565b50505061017e565b5f828152602081815260408083206001600160a01b038516845290915281205460ff16610129575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100e13390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161012c565b505f5b92915050565b80516001600160a01b0381168114610148575f5ffd5b919050565b5f5f6040838503121561015e575f5ffd5b61016783610132565b915061017560208401610132565b90509250929050565b608051611ebd6101d55f395f81816101a50152818161043901528181610c3601528181610c7201528181610ca601528181610e6e015281816110e9015281816111360152818161150901526116dd0152611ebd5ff3fe608060405234801561000f575f5ffd5b506004361061011c575f3560e01c806355363724116100a9578063cddc1bc11161006e578063cddc1bc114610274578063d3f494cc14610287578063d547741f146102de578063d898aaf2146102f1578063e74b981b14610304575f5ffd5b80635536372414610221578063787dce3d1461023457806391d1485414610247578063a217fddf1461025a578063c7fff71914610261575f5ffd5b80633013ce29116100ef5780633013ce29146101a057806335659fb8146101df57806336568abe146101e85780633bbb2806146101fb578063469048401461020e575f5ffd5b806301ffc9a714610120578063058a56ac14610148578063248a9ca31461015d5780632f2ff15d1461018d575b5f5ffd5b61013361012e366004611b12565b610317565b60405190151581526020015b60405180910390f35b61015b610156366004611b54565b61034d565b005b61017f61016b366004611b7e565b5f9081526020819052604090206001015490565b60405190815260200161013f565b61015b61019b366004611b95565b6104b2565b6101c77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161013f565b61017f60025481565b61015b6101f6366004611b95565b6104dc565b61015b610209366004611bc3565b610514565b6003546101c7906001600160a01b031681565b61015b61022f366004611c4a565b610d35565b61015b610242366004611b7e565b610eef565b610133610255366004611b95565b610f7f565b61017f5f81565b61015b61026f366004611cb6565b610fa7565b61015b610282366004611bc3565b6111cd565b6102c3610295366004611bc3565b600160208181525f948552604080862082529385528385209052908352912080549181015460029091015483565b6040805193845260208401929092529082015260600161013f565b61015b6102ec366004611b95565b61158c565b61015b6102ff366004611cb6565b6115b0565b61015b610312366004611cee565b6117b2565b5f6001600160e01b03198216637965db0b60e01b148061034757506301ffc9a760e01b6001600160e01b03198316145b92915050565b61035561184e565b6001600160a01b0382165f908152600160208181526040808420858552825280842033855282529283902083516060810185528154808252938201549281019290925260020154928101929092526103f45760405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f66666572000000000060448201526064015b60405180910390fd5b6001600160a01b038084165f908152600160208181526040808420878552825280842033808652925283208381559182018390556002909101919091558251610460927f0000000000000000000000000000000000000000000000000000000000000000169190611869565b604051339083906001600160a01b038616907f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d0905f90a4506104ae60015f516020611e685f395f51905f5255565b5050565b5f828152602081905260409020600101546104cc8161189e565b6104d683836118ab565b50505050565b6001600160a01b03811633146105055760405163334bd91960e11b815260040160405180910390fd5b61050f828261193a565b505050565b61051c61184e565b6001600160a01b038084165f90815260016020818152604080842087855282528084209486168452938152918390208351606081018552815480825292820154938101939093526002015492820192909252906105b35760405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b60448201526064016103eb565b6001600160a01b038085165f818152600160208181526040808420898552825280842095881684529490528382208281559081018290556002015590516301ffc9a760e01b81526301ffc9a790610612906380ac58cd90600401611d09565b602060405180830381865afa15801561062d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106519190611d21565b156108d15780602001516001146106aa5760405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e7420310060448201526064016103eb565b6040516331a9108f60e11b815260048101849052849033906001600160a01b03831690636352211e90602401602060405180830381865afa1580156106f1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107159190611d40565b6001600160a01b0316146107655760405162461bcd60e51b8152602060048201526017602482015276165bdd48191bc81b9bdd081bdddb881d1a1a5cc8139195604a1b60448201526064016103eb565b60405163e985e9c560e01b81523360048201523060248201526001600160a01b0382169063e985e9c590604401602060405180830381865afa1580156107ad573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107d19190611d21565b8061084b575060405163020604bf60e21b81526004810185905230906001600160a01b0383169063081812fc90602401602060405180830381865afa15801561081c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108409190611d40565b6001600160a01b0316145b6108675760405162461bcd60e51b81526004016103eb90611d5b565b604051632142170760e11b81523360048201526001600160a01b038481166024830152604482018690528216906342842e0e906064015b5f604051808303815f87803b1580156108b5575f5ffd5b505af11580156108c7573d5f5f3e3d5ffd5b5050505050610b1a565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a7906109019063d9b67a2690600401611d09565b602060405180830381865afa15801561091c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109409190611d21565b15610adb576020810151604051627eeac760e11b8152336004820152602481018590528591906001600160a01b0383169062fdd58e90604401602060405180830381865afa158015610994573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109b89190611da0565b10156109fd5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016103eb565b60405163e985e9c560e01b81523360048201523060248201526001600160a01b0382169063e985e9c590604401602060405180830381865afa158015610a45573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a699190611d21565b610a855760405162461bcd60e51b81526004016103eb90611d5b565b6020820151604051637921219560e11b81523360048201526001600160a01b03858116602483015260448201879052606482019290925260a060848201525f60a48201529082169063f242432a9060c40161089e565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b60448201526064016103eb565b5f612710600254835f0151610b2f9190611dcb565b610b399190611de2565b825160405163152a902d60e11b81526004810187905260248101919091529091505f9081906001600160a01b03881690632a55205a906044016040805180830381865afa925050508015610baa575060408051601f3d908101601f19168201909252610ba791810190611e01565b60015b15610bc8576001600160a01b03821615610bc5578093508192505b50505b8351610bd48385611e2d565b1115610bea578351610be7908490611e40565b91505b5f8284865f0151610bfb9190611e40565b610c059190611e40565b90505f84118015610c2057506003546001600160a01b031615155b15610c5f57600354610c5f906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911686611869565b8215610c9957610c996001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168385611869565b610ccd6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383611869565b84516020808701516040805193845291830152339189916001600160a01b038c16917f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a3910160405180910390a4505050505061050f60015f516020611e685f395f51905f5255565b610d3d61184e565b828114610d805760405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b60448201526064016103eb565b5f5b83811015610ed8575f858583818110610d9d57610d9d611e53565b9050602002016020810190610db29190611cee565b90505f848484818110610dc757610dc7611e53565b6001600160a01b0385165f9081526001602081815260408084209482029690960135808452938152858320338452815291859020855160608101875281548082529282015493810193909352600201549482019490945290935091159050610ecd576001600160a01b038084165f908152600160208181526040808420878552825280842033808652925283208381559182018390556002909101919091558251610e95927f0000000000000000000000000000000000000000000000000000000000000000169190611869565b604051339083906001600160a01b038616907f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d0905f90a45b505050600101610d82565b506104d660015f516020611e685f395f51905f5255565b5f610ef98161189e565b6103e8821115610f435760405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b60448201526064016103eb565b60028290556040518281527fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de409060200160405180910390a15050565b5f918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610faf61184e565b6001600160a01b0384165f90815260016020908152604080832086845282528083203384529091529020805461101e5760405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b60448201526064016103eb565b5f821161106d5760405162461bcd60e51b815260206004820181905260248201527f4e6577207072696365206d7573742062652067726561746572207468616e203060448201526064016103eb565b5f83116110c65760405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b60648201526084016103eb565b8054808311156111165761111133306110df8487611e40565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169291906119a3565b61115d565b8083101561115d5761115d3361112c8584611e40565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611869565b828255600182018490554260028301556040805184815260208101869052339187916001600160a01b038a16917ffe240e6b60fba78dcf5eae78fca1a9b6ceaf51429c5036812d6b4f2f0a2dfada910160405180910390a450506104d660015f516020611e685f395f51905f5255565b6111d561184e565b6001600160a01b038084165f908152600160208181526040808420878552825280842094861684529381529183902083516060810185528154808252928201549381019390935260020154928201929092529061126c5760405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b60448201526064016103eb565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a79061129c906380ac58cd90600401611d09565b602060405180830381865afa1580156112b7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112db9190611d21565b1561139e576040516331a9108f60e11b81526004810184905233906001600160a01b03861690636352211e90602401602060405180830381865afa158015611325573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113499190611d40565b6001600160a01b0316146113995760405162461bcd60e51b8152602060048201526017602482015276165bdd48191bc81b9bdd081bdddb881d1a1a5cc8139195604a1b60448201526064016103eb565b6114c7565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a7906113ce9063d9b67a2690600401611d09565b602060405180830381865afa1580156113e9573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061140d9190611d21565b15610adb576020810151604051627eeac760e11b8152336004820152602481018590526001600160a01b0386169062fdd58e90604401602060405180830381865afa15801561145e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114829190611da0565b10156113995760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016103eb565b6001600160a01b038085165f908152600160208181526040808420888552825280842087861685529091528220828155908101829055600201558151611531917f000000000000000000000000000000000000000000000000000000000000000016908490611869565b6040513381526001600160a01b038084169185918716907f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd309060200160405180910390a45061050f60015f516020611e685f395f51905f5255565b5f828152602081905260409020600101546115a68161189e565b6104d6838361193a565b6115b861184e565b5f81116116125760405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b60648201526084016103eb565b5f82116116615760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064016103eb565b6001600160a01b0384165f9081526001602090815260408083208684528252808320338452909152902054156116d05760405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b60448201526064016103eb565b6117056001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330846119a3565b604080516060810182528281526020808201858152428385019081526001600160a01b0389165f81815260018086528782208b8352865287822033808452908752918890209651875593519386019390935590516002909401939093558351858152918201869052928692917f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf7910160405180910390a46104d660015f516020611e685f395f51905f5255565b5f6117bc8161189e565b6001600160a01b0382166118045760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016103eb565b600380546001600160a01b0319166001600160a01b0384169081179091556040517f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc2905f90a25050565b6118566119d9565b60025f516020611e685f395f51905f5255565b6118768383836001611a0a565b61050f57604051635274afe760e01b81526001600160a01b03841660048201526024016103eb565b6118a88133611a6c565b50565b5f6118b68383610f7f565b611933575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556118eb3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610347565b505f610347565b5f6119458383610f7f565b15611933575f838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610347565b6119b1848484846001611aa5565b6104d657604051635274afe760e01b81526001600160a01b03851660048201526024016103eb565b5f516020611e685f395f51905f5254600203611a0857604051633ee5aeb560e01b815260040160405180910390fd5b565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f51148316611a60578383151615611a54573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b611a768282610f7f565b6104ae5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016103eb565b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f51148316611b01578383151615611af5573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b5f60208284031215611b22575f5ffd5b81356001600160e01b031981168114611b39575f5ffd5b9392505050565b6001600160a01b03811681146118a8575f5ffd5b5f5f60408385031215611b65575f5ffd5b8235611b7081611b40565b946020939093013593505050565b5f60208284031215611b8e575f5ffd5b5035919050565b5f5f60408385031215611ba6575f5ffd5b823591506020830135611bb881611b40565b809150509250929050565b5f5f5f60608486031215611bd5575f5ffd5b8335611be081611b40565b9250602084013591506040840135611bf781611b40565b809150509250925092565b5f5f83601f840112611c12575f5ffd5b50813567ffffffffffffffff811115611c29575f5ffd5b6020830191508360208260051b8501011115611c43575f5ffd5b9250929050565b5f5f5f5f60408587031215611c5d575f5ffd5b843567ffffffffffffffff811115611c73575f5ffd5b611c7f87828801611c02565b909550935050602085013567ffffffffffffffff811115611c9e575f5ffd5b611caa87828801611c02565b95989497509550505050565b5f5f5f5f60808587031215611cc9575f5ffd5b8435611cd481611b40565b966020860135965060408601359560600135945092505050565b5f60208284031215611cfe575f5ffd5b8135611b3981611b40565b60e09190911b6001600160e01b031916815260200190565b5f60208284031215611d31575f5ffd5b81518015158114611b39575f5ffd5b5f60208284031215611d50575f5ffd5b8151611b3981611b40565b60208082526025908201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656040820152641c8813919560da1b606082015260800190565b5f60208284031215611db0575f5ffd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b808202811582820484141761034757610347611db7565b5f82611dfc57634e487b7160e01b5f52601260045260245ffd5b500490565b5f5f60408385031215611e12575f5ffd5b8251611e1d81611b40565b6020939093015192949293505050565b8082018082111561034757610347611db7565b8181038181111561034757610347611db7565b634e487b7160e01b5f52603260045260245ffdfe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220bfe65a564f2d4f1e0c736b5a0ee20475fe37126c16341df53de930a896476bd364736f6c634300081c0033"
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
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610354380380610354833981016040819052602b91604e565b5f80546001600160a01b0319166001600160a01b03929092169190911790556079565b5f60208284031215605d575f5ffd5b81516001600160a01b03811681146072575f5ffd5b9392505050565b6102ce806100865f395ff3fe608060405260043610610036575f3560e01c8063150b7a021461004157806351e361671461007e5780639e5faafc146100b4575f5ffd5b3661003d57005b5f5ffd5b34801561004c575f5ffd5b5061006061005b366004610203565b6100be565b6040516001600160e01b031990911681526020015b60405180910390f35b348015610089575f5ffd5b505f5461009c906001600160a01b031681565b6040516001600160a01b039091168152602001610075565b6100bc610160565b005b5f80546040516334e4cf0760e21b81526060600482015260076064820152663932b2b73a32b960c91b608482015260a0602482015260a48101839052604481018390526001600160a01b039091169063d3933c1c9067016345785d8a00009060c4015f604051808303818588803b158015610137575f5ffd5b505af1158015610149573d5f5f3e3d5ffd5b50630a85bd0160e11b9a9950505050505050505050565b5f80546040516334e4cf0760e21b815260606004820152600660648201526561747461636b60d01b608482015260a0602482015260a4810183905260448101929092526001600160a01b03169063d3933c1c90349060c4015f604051808303818588803b1580156101cf575f5ffd5b505af11580156101e1573d5f5f3e3d5ffd5b5050505050565b80356001600160a01b03811681146101fe575f5ffd5b919050565b5f5f5f5f5f60808688031215610217575f5ffd5b610220866101e8565b945061022e602087016101e8565b935060408601359250606086013567ffffffffffffffff811115610250575f5ffd5b8601601f81018813610260575f5ffd5b803567ffffffffffffffff811115610276575f5ffd5b886020828401011115610287575f5ffd5b95989497509295505050602001919056fea264697066735822122031e77d9371c3dbd877a40a2a725a4d5618855fa46b81c6114ee643bdd248cc9664736f6c634300081c0033"
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
          "inputs": [],
          "name": "ExecutionFailed",
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
      "bytecode": "0x60a060405234801561000f575f5ffd5b506040516122d93803806122d983398101604081905261002e916102be565b5f8351116100785760405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b60448201526064015b60405180910390fd5b5f82118015610088575082518211155b6100c85760405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b604482015260640161006f565b6001600160a01b0381166101135760405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b604482015260640161006f565b5f5b83518110156101d8575f848281518110610131576101316103a4565b602002602001015190505f6001600160a01b0316816001600160a01b03160361018c5760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b604482015260640161006f565b6101965f82610226565b156101cf576040516001600160a01b038216907f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3905f90a25b50600101610115565b5060028290556001600160a01b0381166080526040518281527f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa9060200160405180910390a15050506103b8565b5f61023a836001600160a01b038416610243565b90505b92915050565b5f81815260018301602052604081205461028857508154600181810184555f84815260208082209093018490558454848252828601909352604090209190915561023d565b505f61023d565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b03811681146102b9575f5ffd5b919050565b5f5f5f606084860312156102d0575f5ffd5b83516001600160401b038111156102e5575f5ffd5b8401601f810186136102f5575f5ffd5b80516001600160401b0381111561030e5761030e61028f565b604051600582901b90603f8201601f191681016001600160401b038111828210171561033c5761033c61028f565b604052918252602081840181019290810189841115610359575f5ffd5b6020850194505b8385101561037f57610371856102a3565b815260209485019401610360565b506020880151909650945061039b9250506040860190506102a3565b90509250925092565b634e487b7160e01b5f52603260045260245ffd5b608051611ee66103f35f395f81816103fa01528181610ac701528181610ddd01528181610ee501528181610f5401526110aa0152611ee65ff3fe60806040526004361061013e575f3560e01c80633e1b0812116100b3578063a0e67e2b1161006d578063a0e67e2b146103c0578063b0d691fe146103e1578063bc197c8114610424578063d087d2881461044f578063da35c66414610463578063f23a6e6114610478575f5ffd5b80633e1b08121461031057806342cde4e81461032f5780635d35a3d914610344578063694e80c3146103635780637065cb481461038257806374420f4c146103a1575f5ffd5b80631626ba7e116101045780631626ba7e1461021f578063173825d91461023e57806319822f7c1461025d5780632358d5a81461028a5780632f54bf6e146102d25780633b8ba862146102f1575f5ffd5b8062efa89514610149578063013cf08b1461016a57806301ffc9a7146101a55780630d61b519146101d4578063150b7a02146101e7575f5ffd5b3661014557005b5f5ffd5b348015610154575f5ffd5b50610168610163366004611669565b6104a3565b005b348015610175575f5ffd5b50610189610184366004611689565b6105b4565b60405161019c97969594939291906116a0565b60405180910390f35b3480156101b0575f5ffd5b506101c46101bf36600461171d565b610691565b604051901515815260200161019c565b6101686101e2366004611689565b6106c7565b3480156101f2575f5ffd5b5061020661020136600461180e565b610834565b6040516001600160e01b0319909116815260200161019c565b34801561022a575f5ffd5b506102066102393660046118b5565b610845565b348015610249575f5ffd5b506101686102583660046118fc565b610876565b348015610268575f5ffd5b5061027c610277366004611915565b61094d565b60405190815260200161019c565b348015610295575f5ffd5b506101c46102a4366004611963565b5f8281526004602090815260408083206001600160a01b038516845260050190915290205460ff1692915050565b3480156102dd575f5ffd5b506101c46102ec3660046118fc565b61097a565b3480156102fc575f5ffd5b5061027c61030b36600461198d565b610985565b34801561031b575f5ffd5b5061027c61032a3660046119e9565b610ac4565b34801561033a575f5ffd5b5061027c60025481565b34801561034f575f5ffd5b5061016861035e366004611669565b610b5d565b34801561036e575f5ffd5b5061016861037d366004611689565b610ca6565b34801561038d575f5ffd5b5061016861039c3660046118fc565b610d35565b3480156103ac575f5ffd5b506101686103bb36600461198d565b610ddb565b3480156103cb575f5ffd5b506103d4610f37565b60405161019c9190611a0f565b3480156103ec575f5ffd5b506040516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016815260200161019c565b34801561042f575f5ffd5b5061020661043e366004611ad9565b63bc197c8160e01b95945050505050565b34801561045a575f5ffd5b5061027c610f47565b34801561046e575f5ffd5b5061027c60055481565b348015610483575f5ffd5b50610206610492366004611b85565b63f23a6e6160e01b95945050505050565b5f6104ad82610f51565b905060055483106104d15760405163635e873760e01b815260040160405180910390fd5b5f838152600460205260409020600381015460ff161561050457604051630dc1019760e01b815260040160405180910390fd5b6003810154610100900460ff161561052f57604051632583715b60e11b815260040160405180910390fd5b60038101546001600160a01b038381166201000090920416148015906105555750333014155b1561057357604051637d1b73b960e01b815260040160405180910390fd5b60038101805461ff00191661010017905560405184907f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e9905f90a250505050565b60046020525f90815260409020805460018201546002830180546001600160a01b039093169391926105e590611bd8565b80601f016020809104026020016040519081016040528092919081815260200182805461061190611bd8565b801561065c5780601f106106335761010080835404028352916020019161065c565b820191905f5260205f20905b81548152906001019060200180831161063f57829003601f168201915b505050506003830154600490930154919260ff8082169361010083049091169250620100009091046001600160a01b03169087565b5f6001600160e01b03198216630271189760e51b14806106c157506301ffc9a760e01b6001600160e01b03198316145b92915050565b60055481106106e95760405163635e873760e01b815260040160405180910390fd5b5f818152600460205260409020600381015460ff161561071c57604051630dc1019760e01b815260040160405180910390fd5b6003810154610100900460ff161561074757604051632583715b60e11b815260040160405180910390fd5b6002548160040154101561076e576040516359fa4a9360e01b815260040160405180910390fd5b60038101805460ff191660019081179091558154908201546040515f926001600160a01b031691906107a4906002860190611c10565b5f6040518083038185875af1925050503d805f81146107de576040519150601f19603f3d011682016040523d82523d5f602084013e6107e3565b606091505b505090508061080557604051632b3f6d1160e21b815260040160405180910390fd5b60405183907fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b67905f90a2505050565b630a85bd0160e11b5b949350505050565b5f610851848484610fa4565b156108645750630b135d3f60e11b61086f565b506001600160e01b03195b9392505050565b33301461089d57604051637cf8632b60e01b81523360048201526024015b60405180910390fd5b6108a75f82611082565b6108c4576040516330cd747160e01b815260040160405180910390fd5b6002546108d05f611096565b10156108ef5760405163aabd5a0960e01b815260040160405180910390fd5b6108f85f611096565b5f036109175760405163aabd5a0960e01b815260040160405180910390fd5b6040516001600160a01b038216907f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da905f90a250565b5f61095661109f565b5f61096f858561096a610100830183611c81565b6110f7565b905061083d83611250565b5f6106c18183611273565b5f8161099861099382610f51565b611294565b5f6109a284610f51565b600580549192505f9190826109b683611cd7565b909155505f81815260046020526040902080546001600160a01b0319166001600160a01b038c16178155600181018a9055909150600281016109f9888a83611d3b565b5060038101805462010000600160b01b031916620100006001600160a01b0386169081029190911790915560405183907f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c7681290610a5c908e908e908e908e90611df4565b60405180910390a36001600160a01b0383165f818152600583016020526040808220805460ff1916600190811790915560048501555184917f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a9976891a35098975050505050505050565b5f7f0000000000000000000000000000000000000000000000000000000000000000604051631aab3f0d60e11b81523060048201526001600160c01b03841660248201526001600160a01b0391909116906335567e1a90604401602060405180830381865afa158015610b39573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106c19190611e3b565b80610b6a61099382610f51565b5f610b7483610f51565b90506005548410610b985760405163635e873760e01b815260040160405180910390fd5b5f848152600460205260409020600381015460ff1615610bcb57604051630dc1019760e01b815260040160405180910390fd5b6003810154610100900460ff1615610bf657604051632583715b60e11b815260040160405180910390fd5b6001600160a01b0382165f90815260058201602052604090205460ff1615610c315760405163080fc0bd60e11b815260040160405180910390fd5b6001600160a01b0382165f9081526005820160205260408120805460ff1916600117905560048201805491610c6583611cd7565b90915550506040516001600160a01b0383169086907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a99768905f90a35050505050565b333014610cc857604051637cf8632b60e01b8152336004820152602401610894565b801580610cdc5750610cd95f611096565b81115b15610cfa5760405163aabd5a0960e01b815260040160405180910390fd5b60028190556040518181527f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa9060200160405180910390a150565b333014610d5757604051637cf8632b60e01b8152336004820152602401610894565b6001600160a01b038116610d7e576040516349e27cff60e01b815260040160405180910390fd5b610d885f826112bb565b610da55760405163600acf0760e11b815260040160405180910390fd5b6040516001600160a01b038216907f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3905f90a250565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610e3357600254600114610e2e5760405163aabd5a0960e01b815260040160405180910390fd5b610e66565b333014610e6657610e4333611294565b600254600114610e665760405163aabd5a0960e01b815260040160405180910390fd5b5f856001600160a01b0316858585604051610e82929190611e52565b5f6040518083038185875af1925050503d805f8114610ebc576040519150601f19603f3d011682016040523d82523d5f602084013e610ec1565b606091505b5050905080610ee357604051632b3f6d1160e21b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610f2f575f82815260036020526040902080546001600160a01b03191690555b505050505050565b6060610f425f6112cf565b905090565b5f610f425f610ac4565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610f9d57505f908152600360205260409020546001600160a01b031690565b5033919050565b5f5f610fe58585858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506112db92505050565b9050610ff15f82611273565b1561100057600191505061086f565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f908152601c869052603c902061106d9085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506112db92505050565b90506110795f82611273565b95945050505050565b5f61086f836001600160a01b038416611303565b5f6106c1825490565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681146110f457604051637cf8632b60e01b81526001600160a01b0382166004820152602401610894565b50565b5f5f5f6111398686868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506113e692505050565b5090925090505f81600381111561115257611152611e61565b14158061116657506111645f83611273565b155b15611215577f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f908152601c879052603c90206111d89086868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506113e692505050565b5090925090505f8160038111156111f1576111f1611e61565b14158061120557506112035f83611273565b155b156112155760019250505061083d565b506020958601355f90815260039096526040862080546001600160a01b0319166001600160a01b039290921691909117905550929392505050565b80156110f45761126f338260405180602001604052805f81525061142f565b5050565b6001600160a01b0381165f908152600183016020526040812054151561086f565b61129e5f82611273565b6110f4576040516330cd747160e01b815260040160405180910390fd5b5f61086f836001600160a01b038416611444565b60605f61086f83611490565b5f5f5f5f6112e986866113e6565b9250925092506112f982826114e9565b5090949350505050565b5f81815260018301602052604081205480156113dd575f611325600183611e75565b85549091505f9061133890600190611e75565b9050808214611397575f865f01828154811061135657611356611e88565b905f5260205f200154905080875f01848154811061137657611376611e88565b5f918252602080832090910192909255918252600188019052604090208390555b85548690806113a8576113a8611e9c565b600190038181905f5260205f20015f90559055856001015f8681526020019081526020015f205f9055600193505050506106c1565b5f9150506106c1565b5f5f5f835160410361141d576020840151604085015160608601515f1a61140f888285856115a1565b955095509550505050611428565b505081515f91506002905b9250925092565b5f5f5f83516020850186885af1949350505050565b5f81815260018301602052604081205461148957508154600181810184555f8481526020808220909301849055845484825282860190935260409020919091556106c1565b505f6106c1565b6060815f018054806020026020016040519081016040528092919081815260200182805480156114dd57602002820191905f5260205f20905b8154815260200190600101908083116114c9575b50505050509050919050565b5f8260038111156114fc576114fc611e61565b03611505575050565b600182600381111561151957611519611e61565b036115375760405163f645eedf60e01b815260040160405180910390fd5b600282600381111561154b5761154b611e61565b0361156c5760405163fce698f760e01b815260048101829052602401610894565b600382600381111561158057611580611e61565b0361126f576040516335e2f38360e21b815260048101829052602401610894565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156115da57505f9150600390508261165f565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561162b573d5f5f3e3d5ffd5b5050604051601f1901519150506001600160a01b03811661165657505f92506001915082905061165f565b92505f91508190505b9450945094915050565b5f5f6040838503121561167a575f5ffd5b50508035926020909101359150565b5f60208284031215611699575f5ffd5b5035919050565b60018060a01b038816815286602082015260e060408201525f86518060e0840152806020890161010085015e5f6101008285010152610100601f19601f8301168401019150508515156060830152841515608083015261170b60a08301856001600160a01b03169052565b8260c083015298975050505050505050565b5f6020828403121561172d575f5ffd5b81356001600160e01b03198116811461086f575f5ffd5b80356001600160a01b038116811461175a575f5ffd5b919050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b038111828210171561179b5761179b61175f565b604052919050565b5f82601f8301126117b2575f5ffd5b81356001600160401b038111156117cb576117cb61175f565b6117de601f8201601f1916602001611773565b8181528460208386010111156117f2575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215611821575f5ffd5b61182a85611744565b935061183860208601611744565b92506040850135915060608501356001600160401b03811115611859575f5ffd5b611865878288016117a3565b91505092959194509250565b5f5f83601f840112611881575f5ffd5b5081356001600160401b03811115611897575f5ffd5b6020830191508360208285010111156118ae575f5ffd5b9250929050565b5f5f5f604084860312156118c7575f5ffd5b8335925060208401356001600160401b038111156118e3575f5ffd5b6118ef86828701611871565b9497909650939450505050565b5f6020828403121561190c575f5ffd5b61086f82611744565b5f5f5f60608486031215611927575f5ffd5b83356001600160401b0381111561193c575f5ffd5b8401610120818703121561194e575f5ffd5b95602085013595506040909401359392505050565b5f5f60408385031215611974575f5ffd5b8235915061198460208401611744565b90509250929050565b5f5f5f5f5f608086880312156119a1575f5ffd5b6119aa86611744565b94506020860135935060408601356001600160401b038111156119cb575f5ffd5b6119d788828901611871565b96999598509660600135949350505050565b5f602082840312156119f9575f5ffd5b81356001600160c01b038116811461086f575f5ffd5b602080825282518282018190525f918401906040840190835b81811015611a4f5783516001600160a01b0316835260209384019390920191600101611a28565b509095945050505050565b5f82601f830112611a69575f5ffd5b81356001600160401b03811115611a8257611a8261175f565b8060051b611a9260208201611773565b91825260208185018101929081019086841115611aad575f5ffd5b6020860192505b83831015611acf578235825260209283019290910190611ab4565b9695505050505050565b5f5f5f5f5f60a08688031215611aed575f5ffd5b611af686611744565b9450611b0460208701611744565b935060408601356001600160401b03811115611b1e575f5ffd5b611b2a88828901611a5a565b93505060608601356001600160401b03811115611b45575f5ffd5b611b5188828901611a5a565b92505060808601356001600160401b03811115611b6c575f5ffd5b611b78888289016117a3565b9150509295509295909350565b5f5f5f5f5f60a08688031215611b99575f5ffd5b611ba286611744565b9450611bb060208701611744565b9350604086013592506060860135915060808601356001600160401b03811115611b6c575f5ffd5b600181811c90821680611bec57607f821691505b602082108103611c0a57634e487b7160e01b5f52602260045260245ffd5b50919050565b5f5f8354611c1d81611bd8565b600182168015611c345760018114611c4957611c76565b60ff1983168652811515820286019350611c76565b865f5260205f205f5b83811015611c6e57815488820152600190910190602001611c52565b505081860193505b509195945050505050565b5f5f8335601e19843603018112611c96575f5ffd5b8301803591506001600160401b03821115611caf575f5ffd5b6020019150368190038213156118ae575f5ffd5b634e487b7160e01b5f52601160045260245ffd5b5f60018201611ce857611ce8611cc3565b5060010190565b601f821115611d3657805f5260205f20601f840160051c81016020851015611d145750805b601f840160051c820191505b81811015611d33575f8155600101611d20565b50505b505050565b6001600160401b03831115611d5257611d5261175f565b611d6683611d608354611bd8565b83611cef565b5f601f841160018114611d97575f8515611d805750838201355b5f19600387901b1c1916600186901b178355611d33565b5f83815260208120601f198716915b82811015611dc65786850135825560209485019460019092019101611da6565b5086821015611de2575f1960f88860031b161c19848701351681555b505060018560011b0183555050505050565b6001600160a01b0385168152602081018490526060604082018190528101829052818360808301375f818301608090810191909152601f909201601f191601019392505050565b5f60208284031215611e4b575f5ffd5b5051919050565b818382375f9101908152919050565b634e487b7160e01b5f52602160045260245ffd5b818103818111156106c1576106c1611cc3565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52603160045260245ffdfea2646970667358221220712c2eb24c41551310f646b67007950a20dee7a534c9aa3f12a04bdb7fc35b3d64736f6c634300081c0033"
    },
    "TreasuryFactory": {
      "abi": [
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
        }
      ],
      "bytecode": "0x6080604052348015600e575f5ffd5b506126cc8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c806389ac7d8b14610038578063c70d2a0314610067575b5f5ffd5b61004b610046366004610208565b61007a565b6040516001600160a01b03909116815260200160405180910390f35b61004b610075366004610208565b6100fd565b5f5f6040518060200161008c906101cc565b601f1982820381018352601f9091011660408190526100b390889088908890602001610337565b60408051601f19818403018152908290526100d19291602001610380565b60405160208183030381529060405290506100f3838280519060200120610187565b9695505050505050565b5f5f8286868660405161010f906101cc565b61011b93929190610337565b8190604051809103905ff5905080158015610138573d5f5f3e3d5ffd5b509050806001600160a01b03167fb5cc75a3ec5831cf7ae127c1015a65f6f9168790072deb73f8345f14acd50e9b878760405161017692919061039c565b60405180910390a295945050505050565b5f61019383833061019a565b9392505050565b5f604051836040820152846020820152828152600b8101905060ff8153605590206001600160a01b0316949350505050565b6122d9806103be83390190565b634e487b7160e01b5f52604160045260245ffd5b80356001600160a01b0381168114610203575f5ffd5b919050565b5f5f5f5f6080858703121561021b575f5ffd5b843567ffffffffffffffff811115610231575f5ffd5b8501601f81018713610241575f5ffd5b803567ffffffffffffffff81111561025b5761025b6101d9565b8060051b604051601f19603f830116810181811067ffffffffffffffff82111715610288576102886101d9565b60405291825260208184018101929081018a8411156102a5575f5ffd5b6020850194505b838510156102cb576102bd856101ed565b8152602094850194016102ac565b509650505050602085013592506102e4604086016101ed565b9396929550929360600135925050565b5f8151808452602084019350602083015f5b8281101561032d5781516001600160a01b0316865260209586019590910190600101610306565b5093949350505050565b606081525f61034960608301866102f4565b6020830194909452506001600160a01b0391909116604090910152919050565b5f81518060208401855e5f93019283525090919050565b5f61039461038e8386610369565b84610369565b949350505050565b604081525f6103ae60408301856102f4565b9050826020830152939250505056fe60a060405234801561000f575f5ffd5b506040516122d93803806122d983398101604081905261002e916102be565b5f8351116100785760405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b60448201526064015b60405180910390fd5b5f82118015610088575082518211155b6100c85760405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b604482015260640161006f565b6001600160a01b0381166101135760405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b604482015260640161006f565b5f5b83518110156101d8575f848281518110610131576101316103a4565b602002602001015190505f6001600160a01b0316816001600160a01b03160361018c5760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b604482015260640161006f565b6101965f82610226565b156101cf576040516001600160a01b038216907f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3905f90a25b50600101610115565b5060028290556001600160a01b0381166080526040518281527f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa9060200160405180910390a15050506103b8565b5f61023a836001600160a01b038416610243565b90505b92915050565b5f81815260018301602052604081205461028857508154600181810184555f84815260208082209093018490558454848252828601909352604090209190915561023d565b505f61023d565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b03811681146102b9575f5ffd5b919050565b5f5f5f606084860312156102d0575f5ffd5b83516001600160401b038111156102e5575f5ffd5b8401601f810186136102f5575f5ffd5b80516001600160401b0381111561030e5761030e61028f565b604051600582901b90603f8201601f191681016001600160401b038111828210171561033c5761033c61028f565b604052918252602081840181019290810189841115610359575f5ffd5b6020850194505b8385101561037f57610371856102a3565b815260209485019401610360565b506020880151909650945061039b9250506040860190506102a3565b90509250925092565b634e487b7160e01b5f52603260045260245ffd5b608051611ee66103f35f395f81816103fa01528181610ac701528181610ddd01528181610ee501528181610f5401526110aa0152611ee65ff3fe60806040526004361061013e575f3560e01c80633e1b0812116100b3578063a0e67e2b1161006d578063a0e67e2b146103c0578063b0d691fe146103e1578063bc197c8114610424578063d087d2881461044f578063da35c66414610463578063f23a6e6114610478575f5ffd5b80633e1b08121461031057806342cde4e81461032f5780635d35a3d914610344578063694e80c3146103635780637065cb481461038257806374420f4c146103a1575f5ffd5b80631626ba7e116101045780631626ba7e1461021f578063173825d91461023e57806319822f7c1461025d5780632358d5a81461028a5780632f54bf6e146102d25780633b8ba862146102f1575f5ffd5b8062efa89514610149578063013cf08b1461016a57806301ffc9a7146101a55780630d61b519146101d4578063150b7a02146101e7575f5ffd5b3661014557005b5f5ffd5b348015610154575f5ffd5b50610168610163366004611669565b6104a3565b005b348015610175575f5ffd5b50610189610184366004611689565b6105b4565b60405161019c97969594939291906116a0565b60405180910390f35b3480156101b0575f5ffd5b506101c46101bf36600461171d565b610691565b604051901515815260200161019c565b6101686101e2366004611689565b6106c7565b3480156101f2575f5ffd5b5061020661020136600461180e565b610834565b6040516001600160e01b0319909116815260200161019c565b34801561022a575f5ffd5b506102066102393660046118b5565b610845565b348015610249575f5ffd5b506101686102583660046118fc565b610876565b348015610268575f5ffd5b5061027c610277366004611915565b61094d565b60405190815260200161019c565b348015610295575f5ffd5b506101c46102a4366004611963565b5f8281526004602090815260408083206001600160a01b038516845260050190915290205460ff1692915050565b3480156102dd575f5ffd5b506101c46102ec3660046118fc565b61097a565b3480156102fc575f5ffd5b5061027c61030b36600461198d565b610985565b34801561031b575f5ffd5b5061027c61032a3660046119e9565b610ac4565b34801561033a575f5ffd5b5061027c60025481565b34801561034f575f5ffd5b5061016861035e366004611669565b610b5d565b34801561036e575f5ffd5b5061016861037d366004611689565b610ca6565b34801561038d575f5ffd5b5061016861039c3660046118fc565b610d35565b3480156103ac575f5ffd5b506101686103bb36600461198d565b610ddb565b3480156103cb575f5ffd5b506103d4610f37565b60405161019c9190611a0f565b3480156103ec575f5ffd5b506040516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016815260200161019c565b34801561042f575f5ffd5b5061020661043e366004611ad9565b63bc197c8160e01b95945050505050565b34801561045a575f5ffd5b5061027c610f47565b34801561046e575f5ffd5b5061027c60055481565b348015610483575f5ffd5b50610206610492366004611b85565b63f23a6e6160e01b95945050505050565b5f6104ad82610f51565b905060055483106104d15760405163635e873760e01b815260040160405180910390fd5b5f838152600460205260409020600381015460ff161561050457604051630dc1019760e01b815260040160405180910390fd5b6003810154610100900460ff161561052f57604051632583715b60e11b815260040160405180910390fd5b60038101546001600160a01b038381166201000090920416148015906105555750333014155b1561057357604051637d1b73b960e01b815260040160405180910390fd5b60038101805461ff00191661010017905560405184907f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e9905f90a250505050565b60046020525f90815260409020805460018201546002830180546001600160a01b039093169391926105e590611bd8565b80601f016020809104026020016040519081016040528092919081815260200182805461061190611bd8565b801561065c5780601f106106335761010080835404028352916020019161065c565b820191905f5260205f20905b81548152906001019060200180831161063f57829003601f168201915b505050506003830154600490930154919260ff8082169361010083049091169250620100009091046001600160a01b03169087565b5f6001600160e01b03198216630271189760e51b14806106c157506301ffc9a760e01b6001600160e01b03198316145b92915050565b60055481106106e95760405163635e873760e01b815260040160405180910390fd5b5f818152600460205260409020600381015460ff161561071c57604051630dc1019760e01b815260040160405180910390fd5b6003810154610100900460ff161561074757604051632583715b60e11b815260040160405180910390fd5b6002548160040154101561076e576040516359fa4a9360e01b815260040160405180910390fd5b60038101805460ff191660019081179091558154908201546040515f926001600160a01b031691906107a4906002860190611c10565b5f6040518083038185875af1925050503d805f81146107de576040519150601f19603f3d011682016040523d82523d5f602084013e6107e3565b606091505b505090508061080557604051632b3f6d1160e21b815260040160405180910390fd5b60405183907fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b67905f90a2505050565b630a85bd0160e11b5b949350505050565b5f610851848484610fa4565b156108645750630b135d3f60e11b61086f565b506001600160e01b03195b9392505050565b33301461089d57604051637cf8632b60e01b81523360048201526024015b60405180910390fd5b6108a75f82611082565b6108c4576040516330cd747160e01b815260040160405180910390fd5b6002546108d05f611096565b10156108ef5760405163aabd5a0960e01b815260040160405180910390fd5b6108f85f611096565b5f036109175760405163aabd5a0960e01b815260040160405180910390fd5b6040516001600160a01b038216907f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da905f90a250565b5f61095661109f565b5f61096f858561096a610100830183611c81565b6110f7565b905061083d83611250565b5f6106c18183611273565b5f8161099861099382610f51565b611294565b5f6109a284610f51565b600580549192505f9190826109b683611cd7565b909155505f81815260046020526040902080546001600160a01b0319166001600160a01b038c16178155600181018a9055909150600281016109f9888a83611d3b565b5060038101805462010000600160b01b031916620100006001600160a01b0386169081029190911790915560405183907f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c7681290610a5c908e908e908e908e90611df4565b60405180910390a36001600160a01b0383165f818152600583016020526040808220805460ff1916600190811790915560048501555184917f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a9976891a35098975050505050505050565b5f7f0000000000000000000000000000000000000000000000000000000000000000604051631aab3f0d60e11b81523060048201526001600160c01b03841660248201526001600160a01b0391909116906335567e1a90604401602060405180830381865afa158015610b39573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106c19190611e3b565b80610b6a61099382610f51565b5f610b7483610f51565b90506005548410610b985760405163635e873760e01b815260040160405180910390fd5b5f848152600460205260409020600381015460ff1615610bcb57604051630dc1019760e01b815260040160405180910390fd5b6003810154610100900460ff1615610bf657604051632583715b60e11b815260040160405180910390fd5b6001600160a01b0382165f90815260058201602052604090205460ff1615610c315760405163080fc0bd60e11b815260040160405180910390fd5b6001600160a01b0382165f9081526005820160205260408120805460ff1916600117905560048201805491610c6583611cd7565b90915550506040516001600160a01b0383169086907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a99768905f90a35050505050565b333014610cc857604051637cf8632b60e01b8152336004820152602401610894565b801580610cdc5750610cd95f611096565b81115b15610cfa5760405163aabd5a0960e01b815260040160405180910390fd5b60028190556040518181527f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa9060200160405180910390a150565b333014610d5757604051637cf8632b60e01b8152336004820152602401610894565b6001600160a01b038116610d7e576040516349e27cff60e01b815260040160405180910390fd5b610d885f826112bb565b610da55760405163600acf0760e11b815260040160405180910390fd5b6040516001600160a01b038216907f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3905f90a250565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610e3357600254600114610e2e5760405163aabd5a0960e01b815260040160405180910390fd5b610e66565b333014610e6657610e4333611294565b600254600114610e665760405163aabd5a0960e01b815260040160405180910390fd5b5f856001600160a01b0316858585604051610e82929190611e52565b5f6040518083038185875af1925050503d805f8114610ebc576040519150601f19603f3d011682016040523d82523d5f602084013e610ec1565b606091505b5050905080610ee357604051632b3f6d1160e21b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610f2f575f82815260036020526040902080546001600160a01b03191690555b505050505050565b6060610f425f6112cf565b905090565b5f610f425f610ac4565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610f9d57505f908152600360205260409020546001600160a01b031690565b5033919050565b5f5f610fe58585858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506112db92505050565b9050610ff15f82611273565b1561100057600191505061086f565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f908152601c869052603c902061106d9085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506112db92505050565b90506110795f82611273565b95945050505050565b5f61086f836001600160a01b038416611303565b5f6106c1825490565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681146110f457604051637cf8632b60e01b81526001600160a01b0382166004820152602401610894565b50565b5f5f5f6111398686868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506113e692505050565b5090925090505f81600381111561115257611152611e61565b14158061116657506111645f83611273565b155b15611215577f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f908152601c879052603c90206111d89086868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506113e692505050565b5090925090505f8160038111156111f1576111f1611e61565b14158061120557506112035f83611273565b155b156112155760019250505061083d565b506020958601355f90815260039096526040862080546001600160a01b0319166001600160a01b039290921691909117905550929392505050565b80156110f45761126f338260405180602001604052805f81525061142f565b5050565b6001600160a01b0381165f908152600183016020526040812054151561086f565b61129e5f82611273565b6110f4576040516330cd747160e01b815260040160405180910390fd5b5f61086f836001600160a01b038416611444565b60605f61086f83611490565b5f5f5f5f6112e986866113e6565b9250925092506112f982826114e9565b5090949350505050565b5f81815260018301602052604081205480156113dd575f611325600183611e75565b85549091505f9061133890600190611e75565b9050808214611397575f865f01828154811061135657611356611e88565b905f5260205f200154905080875f01848154811061137657611376611e88565b5f918252602080832090910192909255918252600188019052604090208390555b85548690806113a8576113a8611e9c565b600190038181905f5260205f20015f90559055856001015f8681526020019081526020015f205f9055600193505050506106c1565b5f9150506106c1565b5f5f5f835160410361141d576020840151604085015160608601515f1a61140f888285856115a1565b955095509550505050611428565b505081515f91506002905b9250925092565b5f5f5f83516020850186885af1949350505050565b5f81815260018301602052604081205461148957508154600181810184555f8481526020808220909301849055845484825282860190935260409020919091556106c1565b505f6106c1565b6060815f018054806020026020016040519081016040528092919081815260200182805480156114dd57602002820191905f5260205f20905b8154815260200190600101908083116114c9575b50505050509050919050565b5f8260038111156114fc576114fc611e61565b03611505575050565b600182600381111561151957611519611e61565b036115375760405163f645eedf60e01b815260040160405180910390fd5b600282600381111561154b5761154b611e61565b0361156c5760405163fce698f760e01b815260048101829052602401610894565b600382600381111561158057611580611e61565b0361126f576040516335e2f38360e21b815260048101829052602401610894565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156115da57505f9150600390508261165f565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa15801561162b573d5f5f3e3d5ffd5b5050604051601f1901519150506001600160a01b03811661165657505f92506001915082905061165f565b92505f91508190505b9450945094915050565b5f5f6040838503121561167a575f5ffd5b50508035926020909101359150565b5f60208284031215611699575f5ffd5b5035919050565b60018060a01b038816815286602082015260e060408201525f86518060e0840152806020890161010085015e5f6101008285010152610100601f19601f8301168401019150508515156060830152841515608083015261170b60a08301856001600160a01b03169052565b8260c083015298975050505050505050565b5f6020828403121561172d575f5ffd5b81356001600160e01b03198116811461086f575f5ffd5b80356001600160a01b038116811461175a575f5ffd5b919050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b038111828210171561179b5761179b61175f565b604052919050565b5f82601f8301126117b2575f5ffd5b81356001600160401b038111156117cb576117cb61175f565b6117de601f8201601f1916602001611773565b8181528460208386010111156117f2575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215611821575f5ffd5b61182a85611744565b935061183860208601611744565b92506040850135915060608501356001600160401b03811115611859575f5ffd5b611865878288016117a3565b91505092959194509250565b5f5f83601f840112611881575f5ffd5b5081356001600160401b03811115611897575f5ffd5b6020830191508360208285010111156118ae575f5ffd5b9250929050565b5f5f5f604084860312156118c7575f5ffd5b8335925060208401356001600160401b038111156118e3575f5ffd5b6118ef86828701611871565b9497909650939450505050565b5f6020828403121561190c575f5ffd5b61086f82611744565b5f5f5f60608486031215611927575f5ffd5b83356001600160401b0381111561193c575f5ffd5b8401610120818703121561194e575f5ffd5b95602085013595506040909401359392505050565b5f5f60408385031215611974575f5ffd5b8235915061198460208401611744565b90509250929050565b5f5f5f5f5f608086880312156119a1575f5ffd5b6119aa86611744565b94506020860135935060408601356001600160401b038111156119cb575f5ffd5b6119d788828901611871565b96999598509660600135949350505050565b5f602082840312156119f9575f5ffd5b81356001600160c01b038116811461086f575f5ffd5b602080825282518282018190525f918401906040840190835b81811015611a4f5783516001600160a01b0316835260209384019390920191600101611a28565b509095945050505050565b5f82601f830112611a69575f5ffd5b81356001600160401b03811115611a8257611a8261175f565b8060051b611a9260208201611773565b91825260208185018101929081019086841115611aad575f5ffd5b6020860192505b83831015611acf578235825260209283019290910190611ab4565b9695505050505050565b5f5f5f5f5f60a08688031215611aed575f5ffd5b611af686611744565b9450611b0460208701611744565b935060408601356001600160401b03811115611b1e575f5ffd5b611b2a88828901611a5a565b93505060608601356001600160401b03811115611b45575f5ffd5b611b5188828901611a5a565b92505060808601356001600160401b03811115611b6c575f5ffd5b611b78888289016117a3565b9150509295509295909350565b5f5f5f5f5f60a08688031215611b99575f5ffd5b611ba286611744565b9450611bb060208701611744565b9350604086013592506060860135915060808601356001600160401b03811115611b6c575f5ffd5b600181811c90821680611bec57607f821691505b602082108103611c0a57634e487b7160e01b5f52602260045260245ffd5b50919050565b5f5f8354611c1d81611bd8565b600182168015611c345760018114611c4957611c76565b60ff1983168652811515820286019350611c76565b865f5260205f205f5b83811015611c6e57815488820152600190910190602001611c52565b505081860193505b509195945050505050565b5f5f8335601e19843603018112611c96575f5ffd5b8301803591506001600160401b03821115611caf575f5ffd5b6020019150368190038213156118ae575f5ffd5b634e487b7160e01b5f52601160045260245ffd5b5f60018201611ce857611ce8611cc3565b5060010190565b601f821115611d3657805f5260205f20601f840160051c81016020851015611d145750805b601f840160051c820191505b81811015611d33575f8155600101611d20565b50505b505050565b6001600160401b03831115611d5257611d5261175f565b611d6683611d608354611bd8565b83611cef565b5f601f841160018114611d97575f8515611d805750838201355b5f19600387901b1c1916600186901b178355611d33565b5f83815260208120601f198716915b82811015611dc65786850135825560209485019460019092019101611da6565b5086821015611de2575f1960f88860031b161c19848701351681555b505060018560011b0183555050505050565b6001600160a01b0385168152602081018490526060604082018190528101829052818360808301375f818301608090810191909152601f909201601f191601019392505050565b5f60208284031215611e4b575f5ffd5b5051919050565b818382375f9101908152919050565b634e487b7160e01b5f52602160045260245ffd5b818103818111156106c1576106c1611cc3565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52603160045260245ffdfea2646970667358221220712c2eb24c41551310f646b67007950a20dee7a534c9aa3f12a04bdb7fc35b3d64736f6c634300081c0033a26469706673582212206b7a21821ef13d059e1a93b780705078c8f6a8aa876c6694934d19546937a44164736f6c634300081c0033"
    }
  },
  "deployments": {
    "31337": {
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
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
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
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