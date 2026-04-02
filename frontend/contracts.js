const CONTRACT_DATA = {
  "contracts": {
    "BatchGrant": {
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
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
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
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610a24380380610a24833981016040819052602b9160b4565b806001600160a01b038116605857604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b605f816065565b505060df565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121560c3575f5ffd5b81516001600160a01b038116811460d8575f5ffd5b9392505050565b610938806100ec5f395ff3fe608060405260043610610071575f3560e01c80637402c05a1161004c5780637402c05a146100d05780638da5cb5b146100ef578063f2fde38b14610119578063f8b7fabf14610138575f5ffd5b806315270ace1461007c578063227a75581461009d578063715018a6146100bc575f5ffd5b3661007857005b5f5ffd5b348015610087575f5ffd5b5061009b61009636600461078e565b61014b565b005b3480156100a8575f5ffd5b5061009b6100b7366004610810565b6101eb565b3480156100c7575f5ffd5b5061009b6102ff565b3480156100db575f5ffd5b5061009b6100ea36600461078e565b610312565b3480156100fa575f5ffd5b505f54604080516001600160a01b039092168252519081900360200190f35b348015610124575f5ffd5b5061009b61013336600461087c565b6103a7565b61009b610146366004610810565b6103e4565b8281146101735760405162461bcd60e51b815260040161016a9061089e565b60405180910390fd5b5f5b838110156101e3576101db33868684818110610193576101936108c9565b90506020020160208101906101a8919061087c565b8585858181106101ba576101ba6108c9565b90506020020135896001600160a01b0316610572909392919063ffffffff16565b600101610175565b505050505050565b6101f36105ae565b8281146102125760405162461bcd60e51b815260040161016a9061089e565b5f5b838110156102f8575f85858381811061022f5761022f6108c9565b9050602002016020810190610244919061087c565b6001600160a01b031684848481811061025f5761025f6108c9565b905060200201356040515f6040518083038185875af1925050503d805f81146102a3576040519150601f19603f3d011682016040523d82523d5f602084013e6102a8565b606091505b50509050806102ef5760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b604482015260640161016a565b50600101610214565b5050505050565b6103076105ae565b6103105f6105da565b565b61031a6105ae565b8281146103395760405162461bcd60e51b815260040161016a9061089e565b5f5b838110156101e35761039f858583818110610358576103586108c9565b905060200201602081019061036d919061087c565b84848481811061037f5761037f6108c9565b90506020020135886001600160a01b03166106299092919063ffffffff16565b60010161033b565b6103af6105ae565b6001600160a01b0381166103d857604051631e4fbdf760e01b81525f600482015260240161016a565b6103e1816105da565b50565b8281146104035760405162461bcd60e51b815260040161016a9061089e565b5f805b8481101561043c57838382818110610420576104206108c9565b905060200201358261043291906108dd565b9150600101610406565b5080341461048c5760405162461bcd60e51b815260206004820152601960248201527f496e636f72726563742045544820616d6f756e742073656e7400000000000000604482015260640161016a565b5f5b848110156101e3575f8686838181106104a9576104a96108c9565b90506020020160208101906104be919061087c565b6001600160a01b03168585848181106104d9576104d96108c9565b905060200201356040515f6040518083038185875af1925050503d805f811461051d576040519150601f19603f3d011682016040523d82523d5f602084013e610522565b606091505b50509050806105695760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b604482015260640161016a565b5060010161048e565b610580848484846001610663565b6105a857604051635274afe760e01b81526001600160a01b038516600482015260240161016a565b50505050565b5f546001600160a01b031633146103105760405163118cdaa760e01b815233600482015260240161016a565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61063683838360016106d0565b61065e57604051635274afe760e01b81526001600160a01b038416600482015260240161016a565b505050565b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f511483166106bf5783831516156106b3573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f5114831661072657838315161561071a573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b6001600160a01b03811681146103e1575f5ffd5b5f5f83601f840112610756575f5ffd5b50813567ffffffffffffffff81111561076d575f5ffd5b6020830191508360208260051b8501011115610787575f5ffd5b9250929050565b5f5f5f5f5f606086880312156107a2575f5ffd5b85356107ad81610732565b9450602086013567ffffffffffffffff8111156107c8575f5ffd5b6107d488828901610746565b909550935050604086013567ffffffffffffffff8111156107f3575f5ffd5b6107ff88828901610746565b969995985093965092949392505050565b5f5f5f5f60408587031215610823575f5ffd5b843567ffffffffffffffff811115610839575f5ffd5b61084587828801610746565b909550935050602085013567ffffffffffffffff811115610864575f5ffd5b61087087828801610746565b95989497509550505050565b5f6020828403121561088c575f5ffd5b813561089781610732565b9392505050565b6020808252601190820152704d69736d6174636865642061727261797360781b604082015260600190565b634e487b7160e01b5f52603260045260245ffd5b808201808211156108fc57634e487b7160e01b5f52601160045260245ffd5b9291505056fea26469706673582212204327bc675d214fbcf175f171b198fe9d32267140ebfd10eceb7026ba739c1b2864736f6c634300081c0033"
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
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            }
          ],
          "name": "TokenFlagged",
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
              "name": "reporter",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "reason",
              "type": "string"
            }
          ],
          "name": "TokenReported",
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
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "flagged",
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
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "reason",
              "type": "string"
            }
          ],
          "name": "report",
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
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            }
          ],
          "name": "setFlagged",
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
      "bytecode": "0x6080604052600d80546001600160a01b0316607d60a21b179055348015610024575f5ffd5b50604051614a90380380614a90833981016040819052610043916101de565b60405180604001604052806007815260200166109c9859d3919560ca1b8152506040518060400160405280600781526020016610949051d3919560ca1b815250815f908161009191906102af565b50600161009e82826102af565b50505060016100b76100b46100f260201b60201c565b90565b556100c25f84610116565b50600a80546001600160a01b0319166001600160a01b039390931692909217909155600b55506064600955610369565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0090565b5f8281526007602090815260408083206001600160a01b038516845290915281205460ff166101ba575f8381526007602090815260408083206001600160a01b03861684529091529020805460ff191660011790556101723390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016101bd565b505f5b92915050565b80516001600160a01b03811681146101d9575f5ffd5b919050565b5f5f5f606084860312156101f0575f5ffd5b6101f9846101c3565b9250610207602085016101c3565b9150604084015190509250925092565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061023f57607f821691505b60208210810361025d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156102aa57805f5260205f20601f840160051c810160208510156102885750805b601f840160051c820191505b818110156102a7575f8155600101610294565b50505b505050565b81516001600160401b038111156102c8576102c8610217565b6102dc816102d6845461022b565b84610263565b6020601f82116001811461030e575f83156102f75750848201515b5f19600385901b1c1916600184901b1784556102a7565b5f84815260208120601f198516915b8281101561033d578785015182556020948501946001909201910161031d565b508482101561035a57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b61471a806103765f395ff3fe60806040526004361061024c575f3560e01c806381ddcc1f11610134578063b88d4fde116100b3578063d547741f11610078578063d547741f1461074b578063d5abeb011461076a578063da183afb1461077f578063e985e9c5146107aa578063f0f44260146107c9578063fa5b421b146107e8575f5ffd5b8063b88d4fde146106bc578063c6317247146106db578063c87b56dd146106fa578063d3933c1c14610719578063d435b3a31461072c575f5ffd5b80639e486db8116100f95780639e486db81461062a578063a217fddf14610649578063a22cb4651461065c578063a370c6681461067b578063a6719b3a146106a9575f5ffd5b806381ddcc1f1461058557806383943dc8146105c357806391d14854146105e257806395d89b411461060157806396d8f4f314610615575f5ffd5b80632a55205a116101cb57806360758c181161019057806360758c18146104cb57806361d027b3146104ea5780636352211e1461050957806364cb7e9c146105285780636f8b44b01461054757806370a0823114610566575f5ffd5b80632a55205a146104115780632eb9313e1461044f5780632f2ff15d1461046e57806336568abe1461048d57806342842e0e146104ac575f5ffd5b80631653441c116102115780631653441c1461037457806318160ddd1461038757806319bcef6d146103a557806323b872dd146103c4578063248a9ca3146103e3575f5ffd5b806301ffc9a7146102b657806306fdde03146102ea578063081812fc1461030b578063095ea7b3146103425780630fd973ce14610361575f5ffd5b366102b257610259610807565b61029a336040518060400160405280600f81526020016e2234b932b1ba103237b730ba34b7b760891b81525060405180602001604052805f8152505f610822565b6102b060015f5160206146c55f395f51905f5255565b005b5f5ffd5b3480156102c1575f5ffd5b506102d56102d0366004613661565b610b4c565b60405190151581526020015b60405180910390f35b3480156102f5575f5ffd5b506102fe610b76565b6040516102e191906136aa565b348015610316575f5ffd5b5061032a6103253660046136bc565b610c05565b6040516001600160a01b0390911681526020016102e1565b34801561034d575f5ffd5b506102b061035c3660046136e7565b610c2c565b6102b061036f36600461374e565b610c3b565b6102b06103823660046137ce565b610cd2565b348015610392575f5ffd5b506008545b6040519081526020016102e1565b3480156103b0575f5ffd5b506102b06103bf366004613838565b610d68565b3480156103cf575f5ffd5b506102b06103de366004613853565b610d95565b3480156103ee575f5ffd5b506103976103fd3660046136bc565b5f9081526007602052604090206001015490565b34801561041c575f5ffd5b5061043061042b366004613891565b610e18565b604080516001600160a01b0390931683526020830191909152016102e1565b34801561045a575f5ffd5b506102b0610469366004613838565b610e62565b348015610479575f5ffd5b506102b06104883660046138b1565b610e8f565b348015610498575f5ffd5b506102b06104a73660046138b1565b610eb3565b3480156104b7575f5ffd5b506102b06104c6366004613853565b610eeb565b3480156104d6575f5ffd5b506102b06104e53660046138df565b610f05565b3480156104f5575f5ffd5b50600a5461032a906001600160a01b031681565b348015610514575f5ffd5b5061032a6105233660046136bc565b610f8c565b348015610533575f5ffd5b506102fe6105423660046136bc565b610f96565b348015610552575f5ffd5b506102b06105613660046136bc565b61102d565b348015610571575f5ffd5b50610397610580366004613838565b61103d565b348015610590575f5ffd5b50600d546105ab90600160a01b90046001600160601b031681565b6040516001600160601b0390911681526020016102e1565b3480156105ce575f5ffd5b50600d5461032a906001600160a01b031681565b3480156105ed575f5ffd5b506102d56105fc3660046138b1565b611082565b34801561060c575f5ffd5b506102fe6110ac565b348015610620575f5ffd5b50610397600b5481565b348015610635575f5ffd5b506102b0610644366004613905565b6110bb565b348015610654575f5ffd5b506103975f81565b348015610667575f5ffd5b506102b0610676366004613960565b61110e565b348015610686575f5ffd5b506102d56106953660046136bc565b60106020525f908152604090205460ff1681565b6102b06106b7366004613993565b611119565b3480156106c7575f5ffd5b506102b06106d6366004613ab4565b6111b3565b3480156106e6575f5ffd5b506102b06106f53660046136bc565b6111cb565b348015610705575f5ffd5b506102fe6107143660046136bc565b6111db565b6102b0610727366004613b5b565b611577565b348015610737575f5ffd5b50600c5461032a906001600160a01b031681565b348015610756575f5ffd5b506102b06107653660046138b1565b6115f3565b348015610775575f5ffd5b5061039760095481565b34801561078a575f5ffd5b506103976107993660046136bc565b600e6020525f908152604090205481565b3480156107b5575f5ffd5b506102d56107c4366004613bd9565b611617565b3480156107d4575f5ffd5b506102b06107e3366004613838565b611644565b3480156107f3575f5ffd5b506102b0610802366004613c05565b6116c7565b61080f611732565b60025f5160206146c55f395f51905f5255565b600c546001600160a01b031661087f5760405162461bcd60e51b815260206004820152601860248201527f5265636569707420636f6e7472616374206e6f7420736574000000000000000060448201526064015b60405180910390fd5b600b543410156108ca5760405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606401610876565b600954600854106109125760405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606401610876565b600880545f918261092283613c3a565b919050559050811561094b575f818152600f602052604090206109458482613cce565b5061095c565b82511561095c5761095c8184611763565b600c546040516334ff261960e21b81525f916001600160a01b03169063d3fc98649061099090339034908a90600401613d88565b6020604051808303815f875af11580156109ac573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109d09190613db7565b5f838152600e6020526040902081905590506109ec86836117b2565b600d546001600160a01b031615610a5c57600d546040516340c10f1960e01b81523360048201523460248201526001600160a01b03909116906340c10f19906044015f604051808303815f87803b158015610a45575f5ffd5b505af1158015610a57573d5f5f3e3d5ffd5b505050505b600a546040515f916001600160a01b03169034908381818185875af1925050503d805f8114610aa6576040519150601f19603f3d011682016040523d82523d5f602084013e610aab565b606091505b5050905080610afc5760405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606401610876565b336001600160a01b03167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858a604051610b3b9493929190613dce565b60405180910390a250505050505050565b5f6001600160e01b0319821663152a902d60e11b1480610b705750610b70826117cb565b92915050565b60605f8054610b8490613c52565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb090613c52565b8015610bfb5780601f10610bd257610100808354040283529160200191610bfb565b820191905f5260205f20905b815481529060010190602001808311610bde57829003601f168201915b5050505050905090565b5f610c0f826117ef565b505f828152600460205260409020546001600160a01b0316610b70565b610c37828233611827565b5050565b610c43610807565b610cb58585858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284375f9201829052509250610822915050565b610ccb60015f5160206146c55f395f51905f5255565b5050505050565b610cda610807565b610d4c3385858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284375f9201829052509250610822915050565b610d6260015f5160206146c55f395f51905f5255565b50505050565b5f610d7281611834565b50600c80546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038216610dbe57604051633250574960e11b81525f6004820152602401610876565b5f610dca838333611841565b9050836001600160a01b0316816001600160a01b031614610d62576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610876565b600d545f908190819061271090610e3f90600160a01b90046001600160601b031686613dfc565b610e499190613e13565b600a546001600160a01b031693509150505b9250929050565b5f610e6c81611834565b50600d80546001600160a01b0319166001600160a01b0392909216919091179055565b5f82815260076020526040902060010154610ea981611834565b610d628383611933565b6001600160a01b0381163314610edc5760405163334bd91960e11b815260040160405180910390fd5b610ee682826119c4565b505050565b610ee683838360405180602001604052805f8152506111b3565b5f610f0f81611834565b612710826001600160601b03161115610f635760405162461bcd60e51b81526020600482015260166024820152754665652063616e6e6f7420657863656564203130302560501b6044820152606401610876565b50600d80546001600160601b03909216600160a01b026001600160a01b03909216919091179055565b5f610b70826117ef565b600f6020525f908152604090208054610fae90613c52565b80601f0160208091040260200160405190810160405280929190818152602001828054610fda90613c52565b80156110255780601f10610ffc57610100808354040283529160200191611025565b820191905f5260205f20905b81548152906001019060200180831161100857829003601f168201915b505050505081565b5f61103781611834565b50600955565b5f6001600160a01b038216611067576040516322718ad960e21b81525f6004820152602401610876565b506001600160a01b03165f9081526003602052604090205490565b5f9182526007602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060018054610b8490613c52565b6110c4836117ef565b50336001600160a01b0316837f925cec86c1a57bdbffb32c8f73614fbc9a554e38fea9175e39c6ffc4bbce20a28484604051611101929190613e32565b60405180910390a3505050565b610c37338383611a2f565b611121610807565b6111958686868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284375f92019190915250879250610822915050565b6111ab60015f5160206146c55f395f51905f5255565b505050505050565b6111be848484610d95565b610d623385858585611aee565b5f6111d581611834565b50600b55565b60606111e6826117ef565b505f8281526010602052604090205460ff161561126a575f61124061120a84611c0d565b61121b61121686611c9c565b611ccd565b60405160200161122c929190613e77565b604051602081830303815290604052611ccd565b9050806040516020016112539190613fa2565b604051602081830303815290604052915050919050565b5f828152600e60209081526040808320548151928301909152918152600c546001600160a01b03161561130b57600c5460405163b63e6ac360e01b8152600481018490526001600160a01b039091169063b63e6ac3906024015f60405180830381865afa9250505080156112ff57506040513d5f823e601f3d908101601f191682016040526112fc9190810190613fd3565b60015b1561130b576060015190505b5f848152600f6020526040812080546060928392909161132a90613c52565b80601f016020809104026020016040519081016040528092919081815260200182805461135690613c52565b80156113a15780601f10611378576101008083540402835291602001916113a1565b820191905f5260205f20905b81548152906001019060200180831161138457829003601f168201915b505050505090505f815111156113fd576113ba81611cd9565b156113f5578091506113cf6112168886612547565b6040516020016113df91906140a2565b604051602081830303815290604052925061148e565b80925061148e565b5f611407886125b3565b80519091501561145d5761141a81611cd9565b156114555780925061142f6112168987612547565b60405160200161143f91906140a2565b604051602081830303815290604052935061148c565b80935061148c565b61146a6112168987612547565b60405160200161147a91906140a2565b60405160208183030381529060405293505b505b60408051602081019091525f81528251156114ce576114ac83612634565b6040516020016114bc91906140d3565b60405160208183030381529060405290505b5f6115476114db8a611c0d565b5f8851116114f75760405180602001604052805f815250611520565b61150088612634565b60405160200161151091906140fc565b6040516020818303038152906040525b61152988612634565b856115338b612634565b60405160200161122c959493929190614112565b90508060405160200161155a9190613fa2565b604051602081830303815290604052975050505050505050919050565b61157f610807565b610cb53386868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284375f92019190915250879250610822915050565b5f8281526007602052604090206001015461160d81611834565b610d6283836119c4565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f61164e81611834565b6001600160a01b0382166116a45760405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606401610876565b50600a80546001600160a01b0319166001600160a01b0392909216919091179055565b5f6116d181611834565b6116da836117ef565b505f83815260106020908152604091829020805460ff1916851515908117909155915191825284917f2f56986d52566c29e6d9d6b158ffb24580e6d18a7b2f6d10689197be45156cad910160405180910390a2505050565b5f5160206146c55f395f51905f525460020361176157604051633ee5aeb560e01b815260040160405180910390fd5b565b5f82815260066020526040902061177a8282613cce565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b610c37828260405180602001604052805f815250612a1d565b5f6001600160e01b03198216637965db0b60e01b1480610b705750610b7082612a34565b5f818152600260205260408120546001600160a01b031680610b7057604051637e27328960e01b815260048101849052602401610876565b610ee68383836001612a58565b61183e8133612b5c565b50565b5f828152600260205260408120546001600160a01b039081169083161561186d5761186d818486612b95565b6001600160a01b038116156118a7576118885f855f5f612a58565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156118d5576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f61193e8383611082565b6119bd575f8381526007602090815260408083206001600160a01b03861684529091529020805460ff191660011790556119753390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610b70565b505f610b70565b5f6119cf8383611082565b156119bd575f8381526007602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610b70565b6001600160a01b038316611a585760405163a9fbf51f60e01b81525f6004820152602401610876565b6001600160a01b038216611a8a57604051630b61174360e31b81526001600160a01b0383166004820152602401610876565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319101611101565b6001600160a01b0383163b15610ccb57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290611b30908890889087908790600401614213565b6020604051808303815f875af1925050508015611b6a575060408051601f3d908101601f19168201909252611b6791810190614245565b60015b611bd1573d808015611b97576040519150601f19603f3d011682016040523d82523d5f602084013e611b9c565b606091505b5080515f03611bc957604051633250574960e11b81526001600160a01b0385166004820152602401610876565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b146111ab57604051633250574960e11b81526001600160a01b0385166004820152602401610876565b60605f611c1983612bf9565b60010190505f816001600160401b03811115611c3757611c37613a22565b6040519080825280601f01601f191660200182016040528015611c61576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084611c6b57509392505050565b6060611ca782611c0d565b604051602001611cb791906142e0565b6040516020818303038152906040529050919050565b6060610b70825f612cd0565b80515f9082906004811015611cf157505f9392505050565b600b811061205157815f81518110611d0b57611d0b614501565b6020910101516001600160f81b031916601960fa1b148015611d52575081600181518110611d3b57611d3b614501565b6020910101516001600160f81b031916606160f81b145b8015611d83575081600281518110611d6c57611d6c614501565b6020910101516001600160f81b031916601d60fa1b145b8015611db4575081600381518110611d9d57611d9d614501565b6020910101516001600160f81b031916606160f81b145b8015611de5575081600481518110611dce57611dce614501565b6020910101516001600160f81b031916601d60f91b145b156120515781600581518110611dfd57611dfd614501565b6020910101516001600160f81b031916606160f81b148015611e44575081600681518110611e2d57611e2d614501565b6020910101516001600160f81b031916607560f81b145b8015611e75575081600781518110611e5e57611e5e614501565b6020910101516001600160f81b031916601960fa1b145b8015611ea6575081600881518110611e8f57611e8f614501565b6020910101516001600160f81b031916606960f81b145b8015611ed7575081600981518110611ec057611ec0614501565b6020910101516001600160f81b031916606f60f81b145b8015611f08575081600a81518110611ef157611ef1614501565b6020910101516001600160f81b031916602f60f81b145b15611f17575060019392505050565b600b8110158015611f4d575081600581518110611f3657611f36614501565b6020910101516001600160f81b031916603b60f91b145b8015611f7e575081600681518110611f6757611f67614501565b6020910101516001600160f81b031916606960f81b145b8015611faf575081600781518110611f9857611f98614501565b6020910101516001600160f81b031916601960fa1b145b8015611fe0575081600881518110611fc957611fc9614501565b6020910101516001600160f81b031916606560f81b145b8015612011575081600981518110611ffa57611ffa614501565b6020910101516001600160f81b031916606f60f81b145b8015612042575081600a8151811061202b5761202b614501565b6020910101516001600160f81b031916602f60f81b145b15612051575060019392505050565b8161205d600483614515565b8151811061206d5761206d614501565b01602001516001600160f81b031916601760f91b0361240b575f82612093600384614515565b815181106120a3576120a3614501565b01602001516001600160f81b03191690505f836120c1600285614515565b815181106120d1576120d1614501565b01602001516001600160f81b03191690505f846120ef600186614515565b815181106120ff576120ff614501565b01602001516001600160f81b03199081169150606d60f81b9084161480156121345750600760fc1b6001600160f81b03198316145b801561214d5750603360f81b6001600160f81b03198216145b1561215f575060019695505050505050565b607760f81b6001600160f81b031984161480156121895750606160f81b6001600160f81b03198316145b80156121a25750603b60f91b6001600160f81b03198216145b156121b4575060019695505050505050565b606f60f81b6001600160f81b031984161480156121de5750606760f81b6001600160f81b03198316145b80156121f75750606760f81b6001600160f81b03198216145b15612209575060019695505050505050565b606d60f81b6001600160f81b031984161480156122335750600d60fa1b6001600160f81b03198316145b801561224c5750606160f81b6001600160f81b03198216145b1561225e575060019695505050505050565b606160f81b6001600160f81b031984161480156122885750606160f81b6001600160f81b03198316145b80156122a15750606360f81b6001600160f81b03198216145b156122b3575060019695505050505050565b606d60f81b6001600160f81b031984161480156122dd5750600760fc1b6001600160f81b03198316145b80156122f65750600d60fa1b6001600160f81b03198216145b15612308575060019695505050505050565b606d60f81b6001600160f81b031984161480156123325750606f60f81b6001600160f81b03198316145b801561234b5750603b60f91b6001600160f81b03198216145b1561235d575060019695505050505050565b606f60f81b6001600160f81b031984161480156123875750606760f81b6001600160f81b03198316145b80156123a05750603b60f91b6001600160f81b03198216145b156123b2575060019695505050505050565b606d60f81b6001600160f81b031984161480156123dc5750600d60fa1b6001600160f81b03198316145b80156123f55750603b60f91b6001600160f81b03198216145b15612407575060019695505050505050565b5050505b6005811015801561244a575081612423600583614515565b8151811061243357612433614501565b6020910101516001600160f81b031916601760f91b145b1561253e578161245b600483614515565b8151811061246b5761246b614501565b6020910101516001600160f81b031916607760f81b1480156124bb575081612494600383614515565b815181106124a4576124a4614501565b6020910101516001600160f81b031916606560f81b145b80156124f55750816124ce600283614515565b815181106124de576124de614501565b6020910101516001600160f81b031916603160f91b145b801561252f575081612508600183614515565b8151811061251857612518614501565b6020910101516001600160f81b031916606d60f81b145b1561253e575060019392505050565b505f9392505050565b60605f5f83511161257f5761255b84611c0d565b60405160200161256b9190614528565b604051602081830303815290604052612588565b61258883612e4f565b90508060405160200161259b9190614545565b60405160208183030381529060405291505092915050565b60606125be826117ef565b505f6125d460408051602081019091525f815290565b90505f6125e08461343b565b905081515f036125f1579392505050565b80511561262357818160405160200161260b92919061469d565b60405160208183030381529060405292505050919050565b61262c846134da565b949350505050565b805160609082905f805b828110156126ec5783818151811061265857612658614501565b6020910101516001600160f81b031916601160f91b148061269d575083818151811061268657612686614501565b6020910101516001600160f81b031916601760fa1b145b156126b457816126ac81613c3a565b9250506126e4565b60208482815181106126c8576126c8614501565b016020015160f81c10156126e4576126e16005836146b1565b91505b60010161263e565b50805f036126fd5750929392505050565b5f61270882846146b1565b6001600160401b0381111561271f5761271f613a22565b6040519080825280601f01601f191660200182016040528015612749576020820181803683370190505b5090505f805b84811015612a11575f86828151811061276a5761276a614501565b016020015160f81c9050602281148061278657508060ff16605c145b1561280057601760fa1b848461279b81613c3a565b9550815181106127ad576127ad614501565b60200101906001600160f81b03191690815f1a9053508060f81b8484806127d390613c3a565b9550815181106127e5576127e5614501565b60200101906001600160f81b03191690815f1a905350612a08565b60208160ff1610156129cf57601760fa1b848461281c81613c3a565b95508151811061282e5761282e614501565b60200101906001600160f81b03191690815f1a905350607560f81b848461285481613c3a565b95508151811061286657612866614501565b60200101906001600160f81b03191690815f1a905350600360fc1b848461288c81613c3a565b95508151811061289e5761289e614501565b60200101906001600160f81b03191690815f1a905350600360fc1b84846128c481613c3a565b9550815181106128d6576128d6614501565b60200101906001600160f81b03191690815f1a9053506040805180820190915260108082526f181899199a1a9b1b9c1cb0b131b232b360811b60208301528190600f600485901c1690811061292d5761292d614501565b01602001516001600160f81b031916858561294781613c3a565b96508151811061295957612959614501565b60200101906001600160f81b03191690815f1a9053508082600f1660ff168151811061298757612987614501565b01602001516001600160f81b03191685856129a181613c3a565b9650815181106129b3576129b3614501565b60200101906001600160f81b03191690815f1a90535050612a08565b8060f81b8484806129df90613c3a565b9550815181106129f1576129f1614501565b60200101906001600160f81b03191690815f1a9053505b5060010161274f565b50909695505050505050565b612a27838361353b565b610ee6335f858585611aee565b5f6001600160e01b03198216632483248360e11b1480610b705750610b708261359c565b8080612a6c57506001600160a01b03821615155b15612b2d575f612a7b846117ef565b90506001600160a01b03831615801590612aa75750826001600160a01b0316816001600160a01b031614155b8015612aba5750612ab88184611617565b155b15612ae35760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610876565b8115612b2b5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b612b668282611082565b610c375760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610876565b612ba08383836135eb565b610ee6576001600160a01b038316612bce57604051637e27328960e01b815260048101829052602401610876565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610876565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310612c375772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310612c63576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310612c8157662386f26fc10000830492506010015b6305f5e1008310612c99576305f5e100830492506008015b6127108310612cad57612710830492506004015b60648310612cbf576064830492506002015b600a8310610b705760010192915050565b606082515f03612cee575060408051602081019091525f8152610b70565b5f82612d1e57600384516002612d0491906146b1565b612d0e9190613e13565b612d19906004613dfc565b612d43565b600384516004612d2e9190613dfc565b612d399060026146b1565b612d439190613e13565b905060405191507f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f5261067083027f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f18603f526020820181810185865187016020810180515f82525b82841015612e01576003840193508351603f8160121c16518753600187019650603f81600c1c16518753600187019650603f8160061c16518753600187019650603f811651875350600186019550612dae565b905250859050612e4257600386510660018114612e255760028114612e3857612e40565b603d6001840353603d6002840353612e40565b603d60018403535b505b9183525060405292915050565b805160609082905f805b82811015612f8157838181518110612e7357612e73614501565b01602001516001600160f81b031916601360f91b03612e9e57612e976004836146b1565b9150612f79565b838181518110612eb057612eb0614501565b01602001516001600160f81b031916600f60fa1b03612ed457612e976003836146b1565b838181518110612ee657612ee6614501565b01602001516001600160f81b031916601f60f91b03612f0a57612e976003836146b1565b838181518110612f1c57612f1c614501565b01602001516001600160f81b031916601160f91b03612f4057612e976005836146b1565b838181518110612f5257612f52614501565b01602001516001600160f81b031916602760f81b03612f7957612f766005836146b1565b91505b600101612e59565b50805f03612f925750929392505050565b5f612f9d82846146b1565b6001600160401b03811115612fb457612fb4613a22565b6040519080825280601f01601f191660200182016040528015612fde576020820181803683370190505b5090505f805b84811015612a11575f868281518110612fff57612fff614501565b01602001516001600160f81b0319169050601360f91b81900361313957601360f91b848461302c81613c3a565b95508151811061303e5761303e614501565b60200101906001600160f81b03191690815f1a905350606160f81b848461306481613c3a565b95508151811061307657613076614501565b60200101906001600160f81b03191690815f1a905350606d60f81b848461309c81613c3a565b9550815181106130ae576130ae614501565b60200101906001600160f81b03191690815f1a905350600760fc1b84846130d481613c3a565b9550815181106130e6576130e6614501565b60200101906001600160f81b03191690815f1a905350603b60f81b848461310c81613c3a565b95508151811061311e5761311e614501565b60200101906001600160f81b03191690815f1a905350613432565b6001600160f81b03198116600f60fa1b036131ce57601360f91b848461315e81613c3a565b95508151811061317057613170614501565b60200101906001600160f81b03191690815f1a905350601b60fa1b848461319681613c3a565b9550815181106131a8576131a8614501565b60200101906001600160f81b03191690815f1a905350601d60fa1b84846130d481613c3a565b6001600160f81b03198116601f60f91b0361322b57601360f91b84846131f381613c3a565b95508151811061320557613205614501565b60200101906001600160f81b03191690815f1a905350606760f81b848461319681613c3a565b6001600160f81b03198116601160f91b036132f857601360f91b848461325081613c3a565b95508151811061326257613262614501565b60200101906001600160f81b03191690815f1a905350607160f81b848461328881613c3a565b95508151811061329a5761329a614501565b60200101906001600160f81b03191690815f1a905350607560f81b84846132c081613c3a565b9550815181106132d2576132d2614501565b60200101906001600160f81b03191690815f1a905350606f60f81b848461319681613c3a565b6001600160f81b03198116602760f81b036133fd57601360f91b848461331d81613c3a565b95508151811061332f5761332f614501565b60200101906001600160f81b03191690815f1a905350606160f81b848461335581613c3a565b95508151811061336757613367614501565b60200101906001600160f81b03191690815f1a905350600760fc1b848461338d81613c3a565b95508151811061339f5761339f614501565b60200101906001600160f81b03191690815f1a905350606f60f81b84846133c581613c3a565b9550815181106133d7576133d7614501565b60200101906001600160f81b03191690815f1a905350607360f81b84846130d481613c3a565b80848461340981613c3a565b95508151811061341b5761341b614501565b60200101906001600160f81b03191690815f1a9053505b50600101612fe4565b5f81815260066020526040902080546060919061345790613c52565b80601f016020809104026020016040519081016040528092919081815260200182805461348390613c52565b80156134ce5780601f106134a5576101008083540402835291602001916134ce565b820191905f5260205f20905b8154815290600101906020018083116134b157829003601f168201915b50505050509050919050565b60606134e5826117ef565b505f6134fb60408051602081019091525f815290565b90505f8151116135195760405180602001604052805f815250613534565b8061352384611c0d565b60405160200161125392919061469d565b9392505050565b6001600160a01b03821661356457604051633250574960e11b81525f6004820152602401610876565b5f61357083835f611841565b90506001600160a01b03811615610ee6576040516339e3563760e11b81525f6004820152602401610876565b5f6001600160e01b031982166380ac58cd60e01b14806135cc57506001600160e01b03198216635b5e139f60e01b145b80610b7057506301ffc9a760e01b6001600160e01b0319831614610b70565b5f6001600160a01b0383161580159061262c5750826001600160a01b0316846001600160a01b0316148061362457506136248484611617565b8061262c5750505f908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b03198116811461183e575f5ffd5b5f60208284031215613671575f5ffd5b81356135348161364c565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f613534602083018461367c565b5f602082840312156136cc575f5ffd5b5035919050565b6001600160a01b038116811461183e575f5ffd5b5f5f604083850312156136f8575f5ffd5b8235613703816136d3565b946020939093013593505050565b5f5f83601f840112613721575f5ffd5b5081356001600160401b03811115613737575f5ffd5b602083019150836020828501011115610e5b575f5ffd5b5f5f5f5f5f60608688031215613762575f5ffd5b853561376d816136d3565b945060208601356001600160401b03811115613787575f5ffd5b61379388828901613711565b90955093505060408601356001600160401b038111156137b1575f5ffd5b6137bd88828901613711565b969995985093965092949392505050565b5f5f5f5f604085870312156137e1575f5ffd5b84356001600160401b038111156137f6575f5ffd5b61380287828801613711565b90955093505060208501356001600160401b03811115613820575f5ffd5b61382c87828801613711565b95989497509550505050565b5f60208284031215613848575f5ffd5b8135613534816136d3565b5f5f5f60608486031215613865575f5ffd5b8335613870816136d3565b92506020840135613880816136d3565b929592945050506040919091013590565b5f5f604083850312156138a2575f5ffd5b50508035926020909101359150565b5f5f604083850312156138c2575f5ffd5b8235915060208301356138d4816136d3565b809150509250929050565b5f602082840312156138ef575f5ffd5b81356001600160601b0381168114613534575f5ffd5b5f5f5f60408486031215613917575f5ffd5b8335925060208401356001600160401b03811115613933575f5ffd5b61393f86828701613711565b9497909650939450505050565b8035801515811461395b575f5ffd5b919050565b5f5f60408385031215613971575f5ffd5b823561397c816136d3565b915061398a6020840161394c565b90509250929050565b5f5f5f5f5f5f608087890312156139a8575f5ffd5b86356139b3816136d3565b955060208701356001600160401b038111156139cd575f5ffd5b6139d989828a01613711565b90965094505060408701356001600160401b038111156139f7575f5ffd5b613a0389828a01613711565b9094509250613a1690506060880161394c565b90509295509295509295565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b0381118282101715613a5857613a58613a22565b60405290565b604051601f8201601f191681016001600160401b0381118282101715613a8657613a86613a22565b604052919050565b5f6001600160401b03821115613aa657613aa6613a22565b50601f01601f191660200190565b5f5f5f5f60808587031215613ac7575f5ffd5b8435613ad2816136d3565b93506020850135613ae2816136d3565b92506040850135915060608501356001600160401b03811115613b03575f5ffd5b8501601f81018713613b13575f5ffd5b8035613b26613b2182613a8e565b613a5e565b818152886020838501011115613b3a575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f5f5f5f60608688031215613b6f575f5ffd5b85356001600160401b03811115613b84575f5ffd5b613b9088828901613711565b90965094505060208601356001600160401b03811115613bae575f5ffd5b613bba88828901613711565b9094509250613bcd90506040870161394c565b90509295509295909350565b5f5f60408385031215613bea575f5ffd5b8235613bf5816136d3565b915060208301356138d4816136d3565b5f5f60408385031215613c16575f5ffd5b8235915061398a6020840161394c565b634e487b7160e01b5f52601160045260245ffd5b5f60018201613c4b57613c4b613c26565b5060010190565b600181811c90821680613c6657607f821691505b602082108103613c8457634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115610ee657805f5260205f20601f840160051c81016020851015613caf5750805b601f840160051c820191505b81811015610ccb575f8155600101613cbb565b81516001600160401b03811115613ce757613ce7613a22565b613cfb81613cf58454613c52565b84613c8a565b6020601f821160018114613d2d575f8315613d165750848201515b5f19600385901b1c1916600184901b178455610ccb565b5f84815260208120601f198516915b82811015613d5c5787850151825560209485019460019092019101613d3c565b5084821015613d7957868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b60018060a01b0384168152826020820152606060408201525f613dae606083018461367c565b95945050505050565b5f60208284031215613dc7575f5ffd5b5051919050565b848152836020820152826040820152608060608201525f613df2608083018461367c565b9695505050505050565b8082028115828204841417610b7057610b70613c26565b5f82613e2d57634e487b7160e01b5f52601260045260245ffd5b500490565b60208152816020820152818360408301375f818301604090810191909152601f909201601f19160101919050565b5f81518060208401855e5f93019283525090919050565b727b226e616d65223a2022427261674e4654202360681b81525f613e9e6013830185613e60565b7f205b464c41474745445d222c20226465736372697074696f6e223a202254686981527f7320636f6e74656e7420686173206265656e20666c616767656420666f72206d60208201527f6f6465726174696f6e20616e642069732068696464656e2e222c2022696d616760408201527f65223a2022646174613a696d6167652f7376672b786d6c3b6261736536342c006060820152613f40607f820185613e60565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a81527f20224d6f6465726174696f6e222c202276616c7565223a2022466c6167676564602082015263227d5d7d60e01b604082015260440195945050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081525f613534601d830184613e60565b5f60208284031215613fe3575f5ffd5b81516001600160401b03811115613ff8575f5ffd5b820160808185031215614009575f5ffd5b614011613a36565b815161401c816136d3565b8152602082810151908201526040808301519082015260608201516001600160401b0381111561404a575f5ffd5b80830192505084601f83011261405e575f5ffd5b815161406c613b2182613a8e565b818152866020838601011115614080575f5ffd5b8160208501602083015e5f918101602001919091526060820152949350505050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c00000000000081525f613534601a830184613e60565b741116101130b734b6b0ba34b7b72fbab936111d101160591b81525f6135346015830184613e60565b6101d160f51b81525f6135346002830184613e60565b727b226e616d65223a2022427261674e4654202360681b81525f6141396013830188613e60565b7f222c20226465736372697074696f6e223a2022427261672e436861726974792081526b111bdb985d1a5bdb8813919560a21b602082015261417e602c820188613e60565b6c1116101134b6b0b3b2911d101160991b815290506141a96141a3600d830188613e60565b86613e60565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a815275101126b2b9b9b0b3b2911610113b30b63ab2911d101160511b602082015290506141fa6036820185613e60565b63227d5d7d60e01b815260040198975050505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90613df29083018461367c565b5f60208284031215614255575f5ffd5b81516135348161364c565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323081527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d223020302033353020333530604082015261111f60f11b606082015260620190565b5f6142ea82614260565b7f3c7374796c653e2e62617365207b2066696c6c3a20236638373137313b20666f81527f6e742d66616d696c793a2073616e732d73657269663b20666f6e742d73697a6560208201527f3a20313670783b20666f6e742d7765696768743a20626f6c643b207d3c2f73746040820152633cb6329f60e11b60608201527f3c726563742077696474683d223130302522206865696768743d223130302522606482015271103334b6361e91119898989c191b9110179f60711b60848201527f3c7465787420783d223530252220793d223435252220636c6173733d2262617360968201527f652220646f6d696e616e742d626173656c696e653d226d6964646c652220746560b68201527f78742d616e63686f723d226d6964646c65223e436f6e74656e7420466c61676760d68201526832b21e17ba32bc3a1f60b91b60f68201527f3c7465787420783d223530252220793d223535252220636c6173733d2262617360ff82019081527f6522207374796c653d22666f6e742d73697a653a20313270783b2066696c6c3a61011f8301527f20233963613361663b2220646f6d696e616e742d626173656c696e653d226d6961013f8301527f64646c652220746578742d616e63686f723d226d6964646c65223e427261674e61015f830152634654202360e01b61017f8301529061018301613dae6144e88287613e60565b6c1e17ba32bc3a1f1e17b9bb339f60991b8152600d0190565b634e487b7160e01b5f52603260045260245ffd5b81810381811115610b7057610b70613c26565b68427261674e4654202360b81b81525f6135346009830184613e60565b5f61454f82614260565b7f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e7481527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060208201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c604082015261329f60f11b60608201527f3c726563742077696474683d223130302522206865696768743d223130302522606282015271103334b6361e91119b199b1b33189110179f60711b60828201527f3c7465787420783d223530252220793d223530252220636c6173733d2262617360948201527f652220646f6d696e616e742d626173656c696e653d226d6964646c652220746560b4820152723c3a16b0b731b437b91e9136b4b2323632911f60691b60d482015261467f60e7820185613e60565b6c1e17ba32bc3a1f1e17b9bb339f60991b8152600d01949350505050565b5f61262c6146ab8386613e60565b84613e60565b80820180821115610b7057610b70613c2656fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a264697066735822122003695a3e90e886c46a3a20e535bcb12b97547df7ff068779991751decd99d14d64736f6c634300081c0033"
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
      "bytecode": "0x6080604052348015600e575f5ffd5b506040516122e03803806122e0833981016040819052602b916072565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00555f80546001600160a01b0319166001600160a01b0392909216919091179055609d565b5f602082840312156081575f5ffd5b81516001600160a01b03811681146096575f5ffd5b9392505050565b612236806100aa5f395ff3fe608060405234801561000f575f5ffd5b5060043610610106575f3560e01c80637b1039991161009e578063c2fe51851161006e578063c2fe5185146102b4578063d6bd07ee146102c7578063d7423858146102da578063f07a380e146102ed578063f23a6e6114610300575f5ffd5b80637b1039991461024c57806381bd34d21461025e578063bc197c811461028e578063c10e5153146102a1575f5ffd5b80632ff1d0f9116100d95780632ff1d0f9146101ab57806335f81b87146101be578063380ff999146101d15780636f39becd14610201575f5ffd5b806301ffc9a71461010a578063025f75ac146101325780630412619614610147578063150b7a021461017f575b5f5ffd5b61011d6101183660046118dc565b610313565b60405190151581526020015b60405180910390f35b610145610140366004611968565b610349565b005b610171610155366004611a17565b600360209081525f928352604080842090915290825290205481565b604051908152602001610129565b61019261018d366004611b25565b61042b565b6040516001600160e01b03199091168152602001610129565b6101456101b9366004611b8c565b610726565b6101456101cc366004611bbe565b610955565b6101716101df366004611c0c565b600460209081525f938452604080852082529284528284209052825290205481565b61023461020f366004611a17565b600160209081525f92835260408084209091529082529020546001600160a01b031681565b6040516001600160a01b039091168152602001610129565b5f54610234906001600160a01b031681565b61017161026c366004611c0c565b600260209081525f938452604080852082529284528284209052825290205481565b61019261029c366004611cca565b610979565b6101456102af366004611d7a565b610d15565b6101456102c2366004611dfb565b610dc5565b6101456102d5366004611e40565b610de7565b6101456102e8366004611c0c565b610dfc565b6101456102fb366004611a17565b610e18565b61019261030e366004611e87565b610f8e565b5f6001600160e01b03198216630271189760e51b148061034357506301ffc9a760e01b6001600160e01b03198316145b92915050565b6103516112bc565b858414801561035f57508382145b6103a45760405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b60448201526064015b60405180910390fd5b5f5b86811015610419576104118888838181106103c3576103c3611ede565b90506020020160208101906103d89190611ef2565b8787848181106103ea576103ea611ede565b9050602002013586868581811061040357610403611ede565b90506020020135855f6112ea565b6001016103a6565b506104226115f3565b50505050505050565b5f6104346112bc565b5f6001600160a01b0385161561044a578461044c565b855b83519091505f90602003610500575f5460405163b9209e3360e01b81526001600160a01b0388811660048301529091169063b9209e3390602401602060405180830381865afa1580156104a1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104c59190611f21565b156104e557838060200190518101906104de9190611f3a565b91506105ae565b838060200190518101906104f99190611f55565b90506105ae565b83516040036105ae575f5460405163b9209e3360e01b81526001600160a01b0388811660048301529091169063b9209e3390602401602060405180830381865afa158015610550573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105749190611f21565b15610597578380602001905181019061058d9190611f6c565b90925090506105ae565b838060200190518101906105ab9190611f55565b90505b335f908152600160209081526040808320888452909152812080546001600160a01b0319166001600160a01b038516179055816105eb575f6105f5565b6105f58242611fac565b335f9081526003602090815260408083208a845290915290205490915081111561063657335f90815260036020908152604080832089845290915290208190555b5f80546040516390229af760e01b81523060048201526001600160a01b03909116906390229af7906024015f60405180830381865afa15801561067b573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526106a2919081019061200c565b604090810151335f818152600360209081528482208c835290528390205492519193506001600160a01b038716928a927f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad391610700918791906120f7565b60405180910390a4630a85bd0160e11b94505050505061071e6115f3565b949350505050565b61072e6112bc565b6001600160a01b0383165f908152600260209081526040808320858452825280832033845290915290205481111561079f5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b604482015260640161039b565b6001600160a01b0383165f90815260046020908152604080832085845282528083203384529091529020544210156107e95760405162461bcd60e51b815260040161039b90612118565b6001600160a01b0383165f90815260026020908152604080832085845282528083203384529091528120805483929061082390849061214f565b90915550506001600160a01b0383165f90815260026020908152604080832085845282528083203384529091528120549003610885576001600160a01b0383165f90815260046020908152604080832085845282528083203384529091528120555b604051637921219560e11b8152306004820152336024820152604481018390526064810182905260a060848201525f60a48201526001600160a01b0384169063f242432a9060c4015f604051808303815f87803b1580156108e4575f5ffd5b505af11580156108f6573d5f5f3e3d5ffd5b50505050336001600160a01b031682846001600160a01b03167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f98460405161094091815260200190565b60405180910390a46109506115f3565b505050565b61095d6112bc565b61096a85858585856112ea565b6109726115f3565b5050505050565b5f6109826112bc565b5f6001600160a01b03861615610998578561099a565b865b83519091505f90602003610a4e575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa1580156109ef573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a139190611f21565b15610a335783806020019051810190610a2c9190611f3a565b9150610afc565b83806020019051810190610a479190611f55565b9050610afc565b8351604003610afc575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015610a9e573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ac29190611f21565b15610ae55783806020019051810190610adb9190611f6c565b9092509050610afc565b83806020019051810190610af99190611f55565b90505b5f5f8211610b0a575f610b14565b610b148242611fac565b5f80546040516390229af760e01b815230600482015292935090916001600160a01b03909116906390229af7906024015f60405180830381865afa158015610b5e573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610b85919081019061200c565b604001519050335f5b8951811015610cf4575f8a8281518110610baa57610baa611ede565b602002602001015190505f8a8381518110610bc757610bc7611ede565b6020908102919091018101516001600160a01b038087165f9081526002845260408082208783528552808220928d168252919093528220805491935083929091610c12908490611fac565b90915550506001600160a01b038085165f9081526004602090815260408083208684528252808320938c1683529290522054861115610c7b576001600160a01b038085165f9081526004602090815260408083208684528252808320938c168352929052208690555b6001600160a01b038481165f8181526004602090815260408083208784528252808320948d1680845294909152908190205490518592917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3591610ce29187918c9190612162565b60405180910390a45050600101610b8e565b5063bc197c8160e01b95505050505050610d0c6115f3565b95945050505050565b610d1d6112bc565b838214610d605760405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b604482015260640161039b565b5f5b84811015610dbc57610db4868683818110610d7f57610d7f611ede565b9050602002016020810190610d949190611ef2565b858584818110610da657610da6611ede565b90506020020135845f611619565b600101610d62565b506109726115f3565b610dcd6112bc565b610dd984848484611619565b610de16115f3565b50505050565b610def6112bc565b610dd9848484845f6112ea565b610e046112bc565b610e108383835f611619565b6109506115f3565b610e206112bc565b6001600160a01b038281165f908152600160209081526040808320858452909152902054163314610e835760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b604482015260640161039b565b6001600160a01b0382165f908152600360209081526040808320848452909152902054421015610ec55760405162461bcd60e51b815260040161039b90612118565b6001600160a01b0382165f8181526001602090815260408083208584529091529081902080546001600160a01b031916905551632142170760e11b8152306004820152336024820152604481018390526342842e0e906064015f604051808303815f87803b158015610f35575f5ffd5b505af1158015610f47573d5f5f3e3d5ffd5b50506040513392508391506001600160a01b038516907f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06905f90a4610f8a6115f3565b5050565b5f610f976112bc565b5f6001600160a01b03861615610fad5785610faf565b865b83519091505f90602003611063575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015611004573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110289190611f21565b1561104857838060200190518101906110419190611f3a565b9150611111565b8380602001905181019061105c9190611f55565b9050611111565b8351604003611111575f5460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa1580156110b3573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110d79190611f21565b156110fa57838060200190518101906110f09190611f6c565b9092509050611111565b8380602001905181019061110e9190611f55565b90505b335f90815260026020908152604080832089845282528083206001600160a01b03861684529091528120805487929061114b908490611fac565b909155505f90508161115d575f611167565b6111678242611fac565b335f9081526004602090815260408083208b845282528083206001600160a01b03881684529091529020549091508111156111ca57335f9081526004602090815260408083208a845282528083206001600160a01b038716845290915290208190555b5f80546040516390229af760e01b81523060048201526001600160a01b03909116906390229af7906024015f60405180830381865afa15801561120f573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052611236919081019061200c565b604090810151335f818152600460209081528482208d835281528482206001600160a01b038a16808452915290849020549351929450928b927f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa359161129e918d918891612162565b60405180910390a463f23a6e6160e01b945050505050610d0c6115f3565b6112c4611898565b60027f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b6001600160a01b0385165f908152600260209081526040808320878452825280832033845290915290205483111561135b5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b604482015260640161039b565b5f5460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa1580156113a2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113c69190611f21565b61140d5760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b604482015260640161039b565b6001600160a01b0385165f90815260046020908152604080832087845282528083203384529091529020544210156114575760405162461bcd60e51b815260040161039b90612118565b6001600160a01b0385165f90815260026020908152604080832087845282528083203384529091528120805485929061149190849061214f565b90915550506001600160a01b0385165f908152600260209081526040808320878452825280832033845290915281205490036114f3576001600160a01b0385165f90815260046020908152604080832087845282528083203384529091528120555b6060811561152457604080513360208201529081018390526060016040516020818303038152906040529050611541565b604080513360208201520160405160208183030381529060405290505b604051637921219560e11b81526001600160a01b0387169063f242432a9061157590309087908a908a90889060040161218a565b5f604051808303815f87803b15801561158c575f5ffd5b505af115801561159e573d5f5f3e3d5ffd5b5050604080518781526001600160a01b0387811660208301523394508993508a16917fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1910160405180910390a4505050505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b6001600160a01b038481165f90815260016020908152604080832087845290915290205416331461167c5760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b604482015260640161039b565b5f5460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa1580156116c3573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116e79190611f21565b61172e5760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b604482015260640161039b565b6001600160a01b0384165f9081526003602090815260408083208684529091529020544210156117705760405162461bcd60e51b815260040161039b90612118565b6001600160a01b0384165f908152600160209081526040808320868452909152902080546001600160a01b0319169055606081156117d1576040805133602082015290810183905260600160405160208183030381529060405290506117ee565b604080513360208201520160405160208183030381529060405290505b604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde906118209030908790899087906004016121ce565b5f604051808303815f87803b158015611837575f5ffd5b505af1158015611849573d5f5f3e3d5ffd5b50506040516001600160a01b0386811682523393508792508816907f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d799060200160405180910390a45050505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00546002036118da57604051633ee5aeb560e01b815260040160405180910390fd5b565b5f602082840312156118ec575f5ffd5b81356001600160e01b031981168114611903575f5ffd5b9392505050565b5f5f83601f84011261191a575f5ffd5b5081356001600160401b03811115611930575f5ffd5b6020830191508360208260051b850101111561194a575f5ffd5b9250929050565b6001600160a01b0381168114611965575f5ffd5b50565b5f5f5f5f5f5f5f6080888a03121561197e575f5ffd5b87356001600160401b03811115611993575f5ffd5b61199f8a828b0161190a565b90985096505060208801356001600160401b038111156119bd575f5ffd5b6119c98a828b0161190a565b90965094505060408801356001600160401b038111156119e7575f5ffd5b6119f38a828b0161190a565b9094509250506060880135611a0781611951565b8091505092959891949750929550565b5f5f60408385031215611a28575f5ffd5b8235611a3381611951565b946020939093013593505050565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b0381118282101715611a7757611a77611a41565b60405290565b604051601f8201601f191681016001600160401b0381118282101715611aa557611aa5611a41565b604052919050565b5f6001600160401b03821115611ac557611ac5611a41565b50601f01601f191660200190565b5f82601f830112611ae2575f5ffd5b8135611af5611af082611aad565b611a7d565b818152846020838601011115611b09575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215611b38575f5ffd5b8435611b4381611951565b93506020850135611b5381611951565b92506040850135915060608501356001600160401b03811115611b74575f5ffd5b611b8087828801611ad3565b91505092959194509250565b5f5f5f60608486031215611b9e575f5ffd5b8335611ba981611951565b95602085013595506040909401359392505050565b5f5f5f5f5f60a08688031215611bd2575f5ffd5b8535611bdd81611951565b945060208601359350604086013592506060860135611bfb81611951565b949793965091946080013592915050565b5f5f5f60608486031215611c1e575f5ffd5b8335611c2981611951565b9250602084013591506040840135611c4081611951565b809150509250925092565b5f82601f830112611c5a575f5ffd5b81356001600160401b03811115611c7357611c73611a41565b8060051b611c8360208201611a7d565b91825260208185018101929081019086841115611c9e575f5ffd5b6020860192505b83831015611cc0578235825260209283019290910190611ca5565b9695505050505050565b5f5f5f5f5f60a08688031215611cde575f5ffd5b8535611ce981611951565b94506020860135611cf981611951565b935060408601356001600160401b03811115611d13575f5ffd5b611d1f88828901611c4b565b93505060608601356001600160401b03811115611d3a575f5ffd5b611d4688828901611c4b565b92505060808601356001600160401b03811115611d61575f5ffd5b611d6d88828901611ad3565b9150509295509295909350565b5f5f5f5f5f60608688031215611d8e575f5ffd5b85356001600160401b03811115611da3575f5ffd5b611daf8882890161190a565b90965094505060208601356001600160401b03811115611dcd575f5ffd5b611dd98882890161190a565b9094509250506040860135611ded81611951565b809150509295509295909350565b5f5f5f5f60808587031215611e0e575f5ffd5b8435611e1981611951565b9350602085013592506040850135611e3081611951565b9396929550929360600135925050565b5f5f5f5f60808587031215611e53575f5ffd5b8435611e5e81611951565b935060208501359250604085013591506060850135611e7c81611951565b939692955090935050565b5f5f5f5f5f60a08688031215611e9b575f5ffd5b8535611ea681611951565b94506020860135611eb681611951565b9350604086013592506060860135915060808601356001600160401b03811115611d61575f5ffd5b634e487b7160e01b5f52603260045260245ffd5b5f60208284031215611f02575f5ffd5b813561190381611951565b80518015158114611f1c575f5ffd5b919050565b5f60208284031215611f31575f5ffd5b61190382611f0d565b5f60208284031215611f4a575f5ffd5b815161190381611951565b5f60208284031215611f65575f5ffd5b5051919050565b5f5f60408385031215611f7d575f5ffd5b8251611f8881611951565b6020939093015192949293505050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561034357610343611f98565b5f82601f830112611fce575f5ffd5b8151611fdc611af082611aad565b818152846020838601011115611ff0575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f6020828403121561201c575f5ffd5b81516001600160401b03811115612031575f5ffd5b820160808185031215612042575f5ffd5b61204a611a55565b61205382611f0d565b8152602082015160ff81168114612068575f5ffd5b602082015260408201516001600160401b03811115612085575f5ffd5b61209186828501611fbf565b60408301525060608201516001600160401b038111156120af575f5ffd5b6120bb86828501611fbf565b606083015250949350505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b604081525f61210960408301856120c9565b90508260208301529392505050565b6020808252601a908201527f45786869626974696f6e206e6f74207965742065787069726564000000000000604082015260600190565b8181038181111561034357610343611f98565b838152606060208201525f61217a60608301856120c9565b9050826040830152949350505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f906121c3908301846120c9565b979650505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90611cc0908301846120c956fea264697066735822122033a18d704ba1ddc526d37b31fcbe243a87f41ee2179bb54fd0e733ee96c86b8f64736f6c634300081c0033"
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
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610540380380610540833981016040819052602b916074565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560a0565b80516001600160a01b0381168114606f575f5ffd5b919050565b5f5f604083850312156084575f5ffd5b608b83605a565b9150609760208401605a565b90509250929050565b610493806100ad5f395ff3fe608060405260043610610041575f3560e01c8063150b7a021461004c5780631afed87514610089578063abc8c7af146100aa578063d56d229d146100e0575f5ffd5b3661004857005b5f5ffd5b348015610057575f5ffd5b5061006b610066366004610363565b6100ff565b6040516001600160e01b031990911681526020015b60405180910390f35b348015610094575f5ffd5b506100a86100a33660046103fc565b610174565b005b3480156100b5575f5ffd5b505f546100c8906001600160a01b031681565b6040516001600160a01b039091168152602001610080565b3480156100eb575f5ffd5b506001546100c8906001600160a01b031681565b5f805460015460405163016295ab60e21b81526001600160a01b0391821660048201526024810187905291169063058a56ac906044015f604051808303815f87803b15801561014c575f5ffd5b505af115801561015e573d5f5f3e3d5ffd5b50630a85bd0160e11b9998505050505050505050565b5f5f5f9054906101000a90046001600160a01b03166001600160a01b0316633013ce296040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101c4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e8919061041c565b6040516323b872dd60e01b8152336004820152306024820152604481018490529091506001600160a01b038216906323b872dd906064016020604051808303815f875af115801561023b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061025f919061043e565b505f5460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490529082169063095ea7b3906044016020604051808303815f875af11580156102af573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102d3919061043e565b505f5460018054604051636c4c557960e11b81526001600160a01b039182166004820152602481018790526044810192909252606482018590529091169063d898aaf2906084015f604051808303815f87803b158015610331575f5ffd5b505af1158015610343573d5f5f3e3d5ffd5b50505050505050565b6001600160a01b0381168114610360575f5ffd5b50565b5f5f5f5f5f60808688031215610377575f5ffd5b85356103828161034c565b945060208601356103928161034c565b935060408601359250606086013567ffffffffffffffff8111156103b4575f5ffd5b8601601f810188136103c4575f5ffd5b803567ffffffffffffffff8111156103da575f5ffd5b8860208284010111156103eb575f5ffd5b959894975092955050506020019190565b5f5f6040838503121561040d575f5ffd5b50508035926020909101359150565b5f6020828403121561042c575f5ffd5b81516104378161034c565b9392505050565b5f6020828403121561044e575f5ffd5b81518015158114610437575f5ffdfea2646970667358221220cbd6a6452c24941600c75ca968273aa80fa0543cfd1a3681f9d2b0e7d570682164736f6c634300081c0033"
    },
    "MockERC1155": {
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
          "inputs": [],
          "name": "renounceOwnership",
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060408051602081019091525f8152339061002981610066565b506001600160a01b03811661005757604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006081610076565b50610219565b6002610072828261015f565b5050565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806100ef57607f821691505b60208210810361010d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561015a57805f5260205f20601f840160051c810160208510156101385750805b601f840160051c820191505b81811015610157575f8155600101610144565b50505b505050565b81516001600160401b03811115610178576101786100c7565b61018c8161018684546100db565b84610113565b6020601f8211600181146101be575f83156101a75750848201515b5f19600385901b1c1916600184901b178455610157565b5f84815260208120601f198516915b828110156101ed57878501518255602094850194600190920191016101cd565b508482101561020a57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b611260806102265f395ff3fe608060405234801561000f575f5ffd5b50600436106100b0575f3560e01c8063715018a61161006e578063715018a6146101655780638da5cb5b1461016d578063a22cb46514610188578063e985e9c51461019b578063f242432a146101d6578063f2fde38b146101e9575f5ffd5b8062fdd58e146100b457806301ffc9a7146100da5780630e89341c146100fd578063156e29f61461011d5780632eb2c2d6146101325780634e1273f414610145575b5f5ffd5b6100c76100c2366004610c1d565b6101fc565b6040519081526020015b60405180910390f35b6100ed6100e8366004610c5a565b610223565b60405190151581526020016100d1565b61011061010b366004610c7c565b610272565b6040516100d19190610cc1565b61013061012b366004610cd3565b610304565b005b610130610140366004610e41565b61032b565b610158610153366004610ef0565b61034a565b6040516100d19190610fed565b61013061041a565b6003546040516001600160a01b0390911681526020016100d1565b610130610196366004610fff565b61042d565b6100ed6101a9366004611038565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205460ff1690565b6101306101e4366004611069565b61043c565b6101306101f73660046110bd565b610452565b5f818152602081815260408083206001600160a01b03861684529091529020545b92915050565b5f6001600160e01b03198216636cdb3d1360e11b148061025357506001600160e01b031982166303a24d0760e21b145b8061021d57506301ffc9a760e01b6001600160e01b031983161461021d565b606060028054610281906110d6565b80601f01602080910402602001604051908101604052809291908181526020018280546102ad906110d6565b80156102f85780601f106102cf576101008083540402835291602001916102f8565b820191905f5260205f20905b8154815290600101906020018083116102db57829003601f168201915b50505050509050919050565b61030c61048f565b61032683838360405180602001604052805f8152506104bc565b505050565b610336335b86610520565b6103438585858585610598565b5050505050565b606081518351146103805781518351604051635b05999160e01b8152600481019290925260248201526044015b60405180910390fd5b5f835167ffffffffffffffff81111561039b5761039b610d03565b6040519080825280602002602001820160405280156103c4578160200160208202803683370190505b5090505f5b8451811015610412576020808202860101516103ed906020808402870101516101fc565b8282815181106103ff576103ff61110e565b60209081029190910101526001016103c9565b509392505050565b61042261048f565b61042b5f6105f8565b565b610438338383610649565b5050565b61044533610330565b6103438585858585610706565b61045a61048f565b6001600160a01b03811661048357604051631e4fbdf760e01b81525f6004820152602401610377565b61048c816105f8565b50565b6003546001600160a01b0316331461042b5760405163118cdaa760e01b8152336004820152602401610377565b6001600160a01b0384166104e557604051632bfa23e760e11b81525f6004820152602401610377565b604080516001808252602082018690528183019081526060820185905260808201909252906105185f8784848784610793565b505050505050565b816001600160a01b0316816001600160a01b03161415801561056757506001600160a01b038082165f9081526001602090815260408083209386168352929052205460ff16155b156104385760405163711bec9160e11b81526001600160a01b03808416600483015282166024820152604401610377565b6001600160a01b0384166105c157604051632bfa23e760e11b81525f6004820152602401610377565b6001600160a01b0385166105e957604051626a0d4560e21b81525f6004820152602401610377565b61034385858585856001610793565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b03831661067257604051631f18c42760e11b81525f6004820152602401610377565b6001600160a01b03821661069a5760405162ced3e160e81b81525f6004820152602401610377565b6001600160a01b038381165f81815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661072f57604051632bfa23e760e11b81525f6004820152602401610377565b6001600160a01b03851661075757604051626a0d4560e21b81525f6004820152602401610377565b6040805160018082526020820186905281830190815260608201859052608082019092529061078a87878484875f610793565b50505050505050565b61079f868686866107eb565b6001600160a01b03851615610518573381156107c8576107c38188888888886109fa565b61078a565b602085810151908501516107e0838a8a85858a610b1b565b505050505050505050565b805182511461081a5781518151604051635b05999160e01b815260048101929092526024820152604401610377565b335f5b835181101561091c576020818102858101820151908501909101516001600160a01b038816156108ce575f828152602081815260408083206001600160a01b038c168452909152902054818110156108a8576040516303dee4c560e01b81526001600160a01b038a166004820152602481018290526044810183905260648101849052608401610377565b5f838152602081815260408083206001600160a01b038d16845290915290209082900390555b6001600160a01b03871615610912575f828152602081815260408083206001600160a01b038b1684529091528120805483929061090c908490611122565b90915550505b505060010161081d565b50825160010361099c5760208301515f906020840151909150856001600160a01b0316876001600160a01b0316846001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62858560405161098d929190918252602082015260400190565b60405180910390a45050610343565b836001600160a01b0316856001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516109eb929190611141565b60405180910390a45050505050565b6001600160a01b0384163b156105185760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610a3e908990899088908890889060040161116e565b6020604051808303815f875af1925050508015610a78575060408051601f3d908101601f19168201909252610a75918101906111cb565b60015b610adf573d808015610aa5576040519150601f19603f3d011682016040523d82523d5f602084013e610aaa565b606091505b5080515f03610ad757604051632bfa23e760e11b81526001600160a01b0386166004820152602401610377565b805160208201fd5b6001600160e01b0319811663bc197c8160e01b1461078a57604051632bfa23e760e11b81526001600160a01b0386166004820152602401610377565b6001600160a01b0384163b156105185760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610b5f90899089908890889088906004016111e6565b6020604051808303815f875af1925050508015610b99575060408051601f3d908101601f19168201909252610b96918101906111cb565b60015b610bc6573d808015610aa5576040519150601f19603f3d011682016040523d82523d5f602084013e610aaa565b6001600160e01b0319811663f23a6e6160e01b1461078a57604051632bfa23e760e11b81526001600160a01b0386166004820152602401610377565b80356001600160a01b0381168114610c18575f5ffd5b919050565b5f5f60408385031215610c2e575f5ffd5b610c3783610c02565b946020939093013593505050565b6001600160e01b03198116811461048c575f5ffd5b5f60208284031215610c6a575f5ffd5b8135610c7581610c45565b9392505050565b5f60208284031215610c8c575f5ffd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610c756020830184610c93565b5f5f5f60608486031215610ce5575f5ffd5b610cee84610c02565b95602085013595506040909401359392505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610d4057610d40610d03565b604052919050565b5f67ffffffffffffffff821115610d6157610d61610d03565b5060051b60200190565b5f82601f830112610d7a575f5ffd5b8135610d8d610d8882610d48565b610d17565b8082825260208201915060208360051b860101925085831115610dae575f5ffd5b602085015b83811015610dcb578035835260209283019201610db3565b5095945050505050565b5f82601f830112610de4575f5ffd5b813567ffffffffffffffff811115610dfe57610dfe610d03565b610e11601f8201601f1916602001610d17565b818152846020838601011115610e25575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f5f60a08688031215610e55575f5ffd5b610e5e86610c02565b9450610e6c60208701610c02565b9350604086013567ffffffffffffffff811115610e87575f5ffd5b610e9388828901610d6b565b935050606086013567ffffffffffffffff811115610eaf575f5ffd5b610ebb88828901610d6b565b925050608086013567ffffffffffffffff811115610ed7575f5ffd5b610ee388828901610dd5565b9150509295509295909350565b5f5f60408385031215610f01575f5ffd5b823567ffffffffffffffff811115610f17575f5ffd5b8301601f81018513610f27575f5ffd5b8035610f35610d8882610d48565b8082825260208201915060208360051b850101925087831115610f56575f5ffd5b6020840193505b82841015610f7f57610f6e84610c02565b825260209384019390910190610f5d565b9450505050602083013567ffffffffffffffff811115610f9d575f5ffd5b610fa985828601610d6b565b9150509250929050565b5f8151808452602084019350602083015f5b82811015610fe3578151865260209586019590910190600101610fc5565b5093949350505050565b602081525f610c756020830184610fb3565b5f5f60408385031215611010575f5ffd5b61101983610c02565b91506020830135801515811461102d575f5ffd5b809150509250929050565b5f5f60408385031215611049575f5ffd5b61105283610c02565b915061106060208401610c02565b90509250929050565b5f5f5f5f5f60a0868803121561107d575f5ffd5b61108686610c02565b945061109460208701610c02565b93506040860135925060608601359150608086013567ffffffffffffffff811115610ed7575f5ffd5b5f602082840312156110cd575f5ffd5b610c7582610c02565b600181811c908216806110ea57607f821691505b60208210810361110857634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52603260045260245ffd5b8082018082111561021d57634e487b7160e01b5f52601160045260245ffd5b604081525f6111536040830185610fb3565b82810360208401526111658185610fb3565b95945050505050565b6001600160a01b0386811682528516602082015260a0604082018190525f9061119990830186610fb3565b82810360608401526111ab8186610fb3565b905082810360808401526111bf8185610c93565b98975050505050505050565b5f602082840312156111db575f5ffd5b8151610c7581610c45565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f9061121f90830184610c93565b97965050505050505056fea2646970667358221220b5a63cd170754d5c227f3040639f2ddf3451cc045792879770b85ee98a2f648164736f6c634300081c0033"
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
              "name": "_paymentToken",
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
          "inputs": [],
          "name": "renounceOwnership",
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
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x60a060405234801561000f575f5ffd5b50604051611ba6380380611ba683398101604081905261002e916100f3565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055338061007757604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b610080816100a4565b506001600160a01b0316608052600380546001600160a01b03191633179055610120565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f60208284031215610103575f5ffd5b81516001600160a01b0381168114610119575f5ffd5b9392505050565b608051611a3d6101695f395f81816101030152818161034c01528181610ae701528181610b2301528181610b5701528181610d240152818161118701526113370152611a3d5ff3fe608060405234801561000f575f5ffd5b50600436106100e5575f3560e01c8063787dce3d11610088578063d3f494cc11610063578063d3f494cc146101d0578063d898aaf214610227578063e74b981b1461023a578063f2fde38b1461024d575f5ffd5b8063787dce3d1461019a5780638da5cb5b146101ad578063cddc1bc1146101bd575f5ffd5b80633bbb2806116100c35780633bbb280614610159578063469048401461016c578063553637241461017f578063715018a614610192575f5ffd5b8063058a56ac146100e95780633013ce29146100fe57806335659fb814610142575b5f5ffd5b6100fc6100f73660046116f5565b610260565b005b6101257f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61014b60025481565b604051908152602001610139565b6100fc61016736600461171f565b6103c5565b600354610125906001600160a01b031681565b6100fc61018d3660046117a6565b610beb565b6100fc610dab565b6100fc6101a8366004611812565b610dbe565b5f546001600160a01b0316610125565b6100fc6101cb36600461171f565b610e4b565b61020c6101de36600461171f565b600160208181525f948552604080862082529385528385209052908352912080549181015460029091015483565b60408051938452602084019290925290820152606001610139565b6100fc610235366004611829565b61120a565b6100fc610248366004611861565b61140c565b6100fc61025b366004611861565b6114a5565b6102686114e2565b6001600160a01b0382165f908152600160208181526040808420858552825280842033855282529283902083516060810185528154808252938201549281019290925260020154928101929092526103075760405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f66666572000000000060448201526064015b60405180910390fd5b6001600160a01b038084165f908152600160208181526040808420878552825280842033808652925283208381559182018390556002909101919091558251610373927f00000000000000000000000000000000000000000000000000000000000000001691906114fd565b604051339083906001600160a01b038616907f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d0905f90a4506103c160015f5160206119e85f395f51905f5255565b5050565b6103cd6114e2565b6001600160a01b038084165f90815260016020818152604080842087855282528084209486168452938152918390208351606081018552815480825292820154938101939093526002015492820192909252906104645760405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b60448201526064016102fe565b6001600160a01b038085165f818152600160208181526040808420898552825280842095881684529490528382208281559081018290556002015590516301ffc9a760e01b81526301ffc9a7906104c3906380ac58cd90600401611883565b602060405180830381865afa1580156104de573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610502919061189b565b1561078257806020015160011461055b5760405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e7420310060448201526064016102fe565b6040516331a9108f60e11b815260048101849052849033906001600160a01b03831690636352211e90602401602060405180830381865afa1580156105a2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105c691906118ba565b6001600160a01b0316146106165760405162461bcd60e51b8152602060048201526017602482015276165bdd48191bc81b9bdd081bdddb881d1a1a5cc8139195604a1b60448201526064016102fe565b60405163e985e9c560e01b81523360048201523060248201526001600160a01b0382169063e985e9c590604401602060405180830381865afa15801561065e573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610682919061189b565b806106fc575060405163020604bf60e21b81526004810185905230906001600160a01b0383169063081812fc90602401602060405180830381865afa1580156106cd573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106f191906118ba565b6001600160a01b0316145b6107185760405162461bcd60e51b81526004016102fe906118d5565b604051632142170760e11b81523360048201526001600160a01b038481166024830152604482018690528216906342842e0e906064015b5f604051808303815f87803b158015610766575f5ffd5b505af1158015610778573d5f5f3e3d5ffd5b50505050506109cb565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a7906107b29063d9b67a2690600401611883565b602060405180830381865afa1580156107cd573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107f1919061189b565b1561098c576020810151604051627eeac760e11b8152336004820152602481018590528591906001600160a01b0383169062fdd58e90604401602060405180830381865afa158015610845573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610869919061191a565b10156108ae5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016102fe565b60405163e985e9c560e01b81523360048201523060248201526001600160a01b0382169063e985e9c590604401602060405180830381865afa1580156108f6573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061091a919061189b565b6109365760405162461bcd60e51b81526004016102fe906118d5565b6020820151604051637921219560e11b81523360048201526001600160a01b03858116602483015260448201879052606482019290925260a060848201525f60a48201529082169063f242432a9060c40161074f565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b60448201526064016102fe565b5f612710600254835f01516109e09190611945565b6109ea9190611962565b825160405163152a902d60e11b81526004810187905260248101919091529091505f9081906001600160a01b03881690632a55205a906044016040805180830381865afa925050508015610a5b575060408051601f3d908101601f19168201909252610a5891810190611981565b60015b15610a79576001600160a01b03821615610a76578093508192505b50505b8351610a8583856119ad565b1115610a9b578351610a989084906119c0565b91505b5f8284865f0151610aac91906119c0565b610ab691906119c0565b90505f84118015610ad157506003546001600160a01b031615155b15610b1057600354610b10906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169116866114fd565b8215610b4a57610b4a6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001683856114fd565b610b7e6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633836114fd565b84516020808701516040805193845291830152339189916001600160a01b038c16917f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a3910160405180910390a45050505050610be660015f5160206119e85f395f51905f5255565b505050565b610bf36114e2565b828114610c365760405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b60448201526064016102fe565b5f5b83811015610d8e575f858583818110610c5357610c536119d3565b9050602002016020810190610c689190611861565b90505f848484818110610c7d57610c7d6119d3565b6001600160a01b0385165f9081526001602081815260408084209482029690960135808452938152858320338452815291859020855160608101875281548082529282015493810193909352600201549482019490945290935091159050610d83576001600160a01b038084165f908152600160208181526040808420878552825280842033808652925283208381559182018390556002909101919091558251610d4b927f00000000000000000000000000000000000000000000000000000000000000001691906114fd565b604051339083906001600160a01b038616907f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d0905f90a45b505050600101610c38565b50610da560015f5160206119e85f395f51905f5255565b50505050565b610db3611532565b610dbc5f61155e565b565b610dc6611532565b6103e8811115610e105760405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b60448201526064016102fe565b60028190556040518181527fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de409060200160405180910390a150565b610e536114e2565b6001600160a01b038084165f9081526001602081815260408084208785528252808420948616845293815291839020835160608101855281548082529282015493810193909352600201549282019290925290610eea5760405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b60448201526064016102fe565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a790610f1a906380ac58cd90600401611883565b602060405180830381865afa158015610f35573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f59919061189b565b1561101c576040516331a9108f60e11b81526004810184905233906001600160a01b03861690636352211e90602401602060405180830381865afa158015610fa3573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc791906118ba565b6001600160a01b0316146110175760405162461bcd60e51b8152602060048201526017602482015276165bdd48191bc81b9bdd081bdddb881d1a1a5cc8139195604a1b60448201526064016102fe565b611145565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a79061104c9063d9b67a2690600401611883565b602060405180830381865afa158015611067573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061108b919061189b565b1561098c576020810151604051627eeac760e11b8152336004820152602481018590526001600160a01b0386169062fdd58e90604401602060405180830381865afa1580156110dc573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611100919061191a565b10156110175760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016102fe565b6001600160a01b038085165f9081526001602081815260408084208885528252808420878616855290915282208281559081018290556002015581516111af917f0000000000000000000000000000000000000000000000000000000000000000169084906114fd565b6040513381526001600160a01b038084169185918716907f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd309060200160405180910390a450610be660015f5160206119e85f395f51905f5255565b6112126114e2565b5f811161126c5760405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b60648201526084016102fe565b5f82116112bb5760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e203000000060448201526064016102fe565b6001600160a01b0384165f90815260016020908152604080832086845282528083203384529091529020541561132a5760405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b60448201526064016102fe565b61135f6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330846115ad565b604080516060810182528281526020808201858152428385019081526001600160a01b0389165f81815260018086528782208b8352865287822033808452908752918890209651875593519386019390935590516002909401939093558351858152918201869052928692917f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf7910160405180910390a4610da560015f5160206119e85f395f51905f5255565b611414611532565b6001600160a01b03811661145c5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016102fe565b600380546001600160a01b0319166001600160a01b0383169081179091556040517f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc2905f90a250565b6114ad611532565b6001600160a01b0381166114d657604051631e4fbdf760e01b81525f60048201526024016102fe565b6114df8161155e565b50565b6114ea6115e3565b60025f5160206119e85f395f51905f5255565b61150a8383836001611612565b610be657604051635274afe760e01b81526001600160a01b03841660048201526024016102fe565b5f546001600160a01b03163314610dbc5760405163118cdaa760e01b81523360048201526024016102fe565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6115bb848484846001611674565b610da557604051635274afe760e01b81526001600160a01b03851660048201526024016102fe565b5f5160206119e85f395f51905f5254600203610dbc57604051633ee5aeb560e01b815260040160405180910390fd5b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f5114831661166857838315161561165c573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b6040516323b872dd60e01b5f8181526001600160a01b038781166004528616602452604485905291602083606481808c5af1925060015f511483166116d05783831516156116c4573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b6001600160a01b03811681146114df575f5ffd5b5f5f60408385031215611706575f5ffd5b8235611711816116e1565b946020939093013593505050565b5f5f5f60608486031215611731575f5ffd5b833561173c816116e1565b9250602084013591506040840135611753816116e1565b809150509250925092565b5f5f83601f84011261176e575f5ffd5b50813567ffffffffffffffff811115611785575f5ffd5b6020830191508360208260051b850101111561179f575f5ffd5b9250929050565b5f5f5f5f604085870312156117b9575f5ffd5b843567ffffffffffffffff8111156117cf575f5ffd5b6117db8782880161175e565b909550935050602085013567ffffffffffffffff8111156117fa575f5ffd5b6118068782880161175e565b95989497509550505050565b5f60208284031215611822575f5ffd5b5035919050565b5f5f5f5f6080858703121561183c575f5ffd5b8435611847816116e1565b966020860135965060408601359560600135945092505050565b5f60208284031215611871575f5ffd5b813561187c816116e1565b9392505050565b60e09190911b6001600160e01b031916815260200190565b5f602082840312156118ab575f5ffd5b8151801515811461187c575f5ffd5b5f602082840312156118ca575f5ffd5b815161187c816116e1565b60208082526025908201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656040820152641c8813919560da1b606082015260800190565b5f6020828403121561192a575f5ffd5b5051919050565b634e487b7160e01b5f52601160045260245ffd5b808202811582820484141761195c5761195c611931565b92915050565b5f8261197c57634e487b7160e01b5f52601260045260245ffd5b500490565b5f5f60408385031215611992575f5ffd5b825161199d816116e1565b6020939093015192949293505050565b8082018082111561195c5761195c611931565b8181038181111561195c5761195c611931565b634e487b7160e01b5f52603260045260245ffdfe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a26469706673582212209c7006f8dd666ed7cb522dd4b2d645afaaf347b6c459a0075f41779aed6cd0d864736f6c634300081c0033"
    },
    "Treasury": {
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
          "inputs": [],
          "name": "TREASURY_ROLE",
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
            }
          ],
          "name": "execute",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ],
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
              "internalType": "address payable",
              "name": "to",
              "type": "address"
            }
          ],
          "name": "withdrawAllETH",
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
              "name": "to",
              "type": "address"
            }
          ],
          "name": "withdrawERC1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
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
          "name": "withdrawERC20",
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
              "name": "to",
              "type": "address"
            }
          ],
          "name": "withdrawERC721",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "withdrawETH",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161107b38038061107b83398101604081905261002e91610113565b6100385f8261006a565b506100637fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca98261006a565b5050610140565b5f828152602081815260408083206001600160a01b038516845290915281205460ff1661010a575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100c23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161010d565b505f5b92915050565b5f60208284031215610123575f5ffd5b81516001600160a01b0381168114610139575f5ffd5b9392505050565b610f2e8061014d5f395ff3fe6080604052600436106100fd575f3560e01c80637b9f76b511610092578063b61d27f611610062578063b61d27f6146102c8578063bc197c81146102f4578063d11a57ec1461031f578063d547741f1461033f578063f23a6e611461035e575f5ffd5b80637b9f76b51461025857806391d14854146102775780639ebd911514610296578063a217fddf146102b5575f5ffd5b80632f2ff15d116100cd5780632f2ff15d146101dc57806336568abe146101fb57806344004cc11461021a5780634782f77914610239575f5ffd5b806301ffc9a714610108578063150b7a021461013c578063248a9ca31461017f578063256451ac146101bb575f5ffd5b3661010457005b5f5ffd5b348015610113575f5ffd5b506101276101223660046109db565b610389565b60405190151581526020015b60405180910390f35b348015610147575f5ffd5b50610166610156366004610ace565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610133565b34801561018a575f5ffd5b506101ad610199366004610b36565b5f9081526020819052604090206001015490565b604051908152602001610133565b3480156101c6575f5ffd5b506101da6101d5366004610b4d565b610399565b005b3480156101e7575f5ffd5b506101da6101f6366004610b94565b61042e565b348015610206575f5ffd5b506101da610215366004610b94565b610458565b348015610225575f5ffd5b506101da610234366004610bc2565b610490565b348015610244575f5ffd5b506101da610253366004610c00565b6104bb565b348015610263575f5ffd5b506101da610272366004610c2a565b6105b0565b348015610282575f5ffd5b50610127610291366004610b94565b610630565b3480156102a1575f5ffd5b506101da6102b0366004610c69565b610658565b3480156102c0575f5ffd5b506101ad5f81565b3480156102d3575f5ffd5b506102e76102e2366004610c84565b6106ca565b6040516101339190610d09565b3480156102ff575f5ffd5b5061016661030e366004610dbe565b63bc197c8160e01b95945050505050565b34801561032a575f5ffd5b506101ad5f516020610ed95f395f51905f5281565b34801561034a575f5ffd5b506101da610359366004610b94565b610786565b348015610369575f5ffd5b50610166610378366004610e71565b63f23a6e6160e01b95945050505050565b5f610393826107aa565b92915050565b5f516020610ed95f395f51905f526103b0816107ce565b604051637921219560e11b81523060048201526001600160a01b038381166024830152604482018690526064820185905260a060848301525f60a483015286169063f242432a9060c4015f604051808303815f87803b158015610411575f5ffd5b505af1158015610423573d5f5f3e3d5ffd5b505050505050505050565b5f82815260208190526040902060010154610448816107ce565b61045283836107db565b50505050565b6001600160a01b03811633146104815760405163334bd91960e11b815260040160405180910390fd5b61048b828261086a565b505050565b5f516020610ed95f395f51905f526104a7816107ce565b6104526001600160a01b03851684846108d3565b5f516020610ed95f395f51905f526104d2816107ce565b4782111561051e5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064015b60405180910390fd5b5f836001600160a01b0316836040515b5f6040518083038185875af1925050503d805f8114610568576040519150601f19603f3d011682016040523d82523d5f602084013e61056d565b606091505b50509050806104525760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606401610515565b5f516020610ed95f395f51905f526105c7816107ce565b604051632142170760e11b81523060048201526001600160a01b038381166024830152604482018590528516906342842e0e906064015f604051808303815f87803b158015610614575f5ffd5b505af1158015610626573d5f5f3e3d5ffd5b5050505050505050565b5f918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b5f516020610ed95f395f51905f5261066f816107ce565b47806106b65760405162461bcd60e51b81526020600482015260166024820152754e6f2062616c616e636520746f20776974686472617760501b6044820152606401610515565b5f836001600160a01b03168260405161052e565b60605f6106d6816107ce565b5f5f876001600160a01b03168787876040516106f3929190610ec9565b5f6040518083038185875af1925050503d805f811461072d576040519150601f19603f3d011682016040523d82523d5f602084013e610732565b606091505b50915091508161077b5760405162461bcd60e51b8152602060048201526014602482015273115e1d195c9b985b0818d85b1b0819985a5b195960621b6044820152606401610515565b979650505050505050565b5f828152602081905260409020600101546107a0816107ce565b610452838361086a565b5f6001600160e01b03198216637965db0b60e01b1480610393575061039382610908565b6107d8813361093c565b50565b5f6107e68383610630565b610863575f838152602081815260408083206001600160a01b03861684529091529020805460ff1916600117905561081b3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610393565b505f610393565b5f6108758383610630565b15610863575f838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610393565b6108e08383836001610979565b61048b57604051635274afe760e01b81526001600160a01b0384166004820152602401610515565b5f6001600160e01b03198216630271189760e51b148061039357506301ffc9a760e01b6001600160e01b0319831614610393565b6109468282610630565b6109755760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610515565b5050565b60405163a9059cbb60e01b5f8181526001600160a01b038616600452602485905291602083604481808b5af1925060015f511483166109cf5783831516156109c3573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b5f602082840312156109eb575f5ffd5b81356001600160e01b031981168114610a02575f5ffd5b9392505050565b6001600160a01b03811681146107d8575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610a5a57610a5a610a1d565b604052919050565b5f82601f830112610a71575f5ffd5b813567ffffffffffffffff811115610a8b57610a8b610a1d565b610a9e601f8201601f1916602001610a31565b818152846020838601011115610ab2575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215610ae1575f5ffd5b8435610aec81610a09565b93506020850135610afc81610a09565b925060408501359150606085013567ffffffffffffffff811115610b1e575f5ffd5b610b2a87828801610a62565b91505092959194509250565b5f60208284031215610b46575f5ffd5b5035919050565b5f5f5f5f60808587031215610b60575f5ffd5b8435610b6b81610a09565b935060208501359250604085013591506060850135610b8981610a09565b939692955090935050565b5f5f60408385031215610ba5575f5ffd5b823591506020830135610bb781610a09565b809150509250929050565b5f5f5f60608486031215610bd4575f5ffd5b8335610bdf81610a09565b92506020840135610bef81610a09565b929592945050506040919091013590565b5f5f60408385031215610c11575f5ffd5b8235610c1c81610a09565b946020939093013593505050565b5f5f5f60608486031215610c3c575f5ffd5b8335610c4781610a09565b9250602084013591506040840135610c5e81610a09565b809150509250925092565b5f60208284031215610c79575f5ffd5b8135610a0281610a09565b5f5f5f5f60608587031215610c97575f5ffd5b8435610ca281610a09565b935060208501359250604085013567ffffffffffffffff811115610cc4575f5ffd5b8501601f81018713610cd4575f5ffd5b803567ffffffffffffffff811115610cea575f5ffd5b876020828401011115610cfb575f5ffd5b949793965060200194505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f82601f830112610d4d575f5ffd5b813567ffffffffffffffff811115610d6757610d67610a1d565b8060051b610d7760208201610a31565b91825260208185018101929081019086841115610d92575f5ffd5b6020860192505b83831015610db4578235825260209283019290910190610d99565b9695505050505050565b5f5f5f5f5f60a08688031215610dd2575f5ffd5b8535610ddd81610a09565b94506020860135610ded81610a09565b9350604086013567ffffffffffffffff811115610e08575f5ffd5b610e1488828901610d3e565b935050606086013567ffffffffffffffff811115610e30575f5ffd5b610e3c88828901610d3e565b925050608086013567ffffffffffffffff811115610e58575f5ffd5b610e6488828901610a62565b9150509295509295909350565b5f5f5f5f5f60a08688031215610e85575f5ffd5b8535610e9081610a09565b94506020860135610ea081610a09565b93506040860135925060608601359150608086013567ffffffffffffffff811115610e58575f5ffd5b818382375f910190815291905056fee1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca9a26469706673582212205d3d06e173e31e08fbde2b1b78f1effb81b1e519c02df753a6c0f2418be2569b64736f6c634300081c0033"
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