const CONTRACT_DATA = {
  "contracts": {
    "BatchGrant": {
      "abi": [
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
        }
      ],
      "bytecode": "0x6080604052348015600e575f5ffd5b506103188061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610029575f3560e01c806315270ace1461002d575b5f5ffd5b61004061003b36600461022c565b610042565b005b82811461008a5760405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b60448201526064015b60405180910390fd5b5f5b838110156100fa576100f2338686848181106100aa576100aa6102ac565b90506020020160208101906100bf91906102c0565b8585858181106100d1576100d16102ac565b90506020020135896001600160a01b0316610102909392919063ffffffff16565b60010161008c565b505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261015c908590610162565b50505050565b5f5f60205f8451602086015f885af180610181576040513d5f823e3d81fd5b50505f513d915081156101985780600114156101a5565b6001600160a01b0384163b155b1561015c57604051635274afe760e01b81526001600160a01b0385166004820152602401610081565b6001600160a01b03811681146101e2575f5ffd5b50565b5f5f83601f8401126101f5575f5ffd5b5081356001600160401b0381111561020b575f5ffd5b6020830191508360208260051b8501011115610225575f5ffd5b9250929050565b5f5f5f5f5f60608688031215610240575f5ffd5b853561024b816101ce565b945060208601356001600160401b03811115610265575f5ffd5b610271888289016101e5565b90955093505060408601356001600160401b0381111561028f575f5ffd5b61029b888289016101e5565b969995985093965092949392505050565b634e487b7160e01b5f52603260045260245ffd5b5f602082840312156102d0575f5ffd5b81356102db816101ce565b939250505056fea2646970667358221220ef31e01a5c281a9e7691c2f60d3d7ea85b4899b888dab37e6440d68cd501204964736f6c634300081c0033"
    },
    "BragNFT": {
      "abi": [
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
              "name": "bragToken",
              "type": "address"
            }
          ],
          "name": "BragTokenUpdated",
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
              "indexed": false,
              "internalType": "uint256",
              "name": "minimumDonation",
              "type": "uint256"
            }
          ],
          "name": "MinimumDonationUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "receiptContract",
              "type": "address"
            }
          ],
          "name": "ReceiptContractUpdated",
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
              "name": "treasury",
              "type": "address"
            }
          ],
          "name": "TreasuryUpdated",
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
        }
      ],
      "bytecode": "0x"
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
      "bytecode": "0x610180604052348015610010575f5ffd5b50604051612dcb380380612dcb83398101604081905261002f91610983565b6040518060400160405280600a815260200169213930b3902a37b5b2b760b11b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600a815260200169213930b3902a37b5b2b760b11b815250604051806040016040528060048152602001634252414760e01b81525081600390816100bc9190610a59565b5060046100c98282610a59565b506100d991508390506005610233565b610120526100e8816006610233565b61014052815160208084019190912060e052815190820120610100524660a05261017460e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250818110156101df5760405162461bcd60e51b8152602060048201526024808201527f4d617820737570706c79206d757374206265203e3d20696e697469616c20737560448201526370706c7960e01b60648201526084015b60405180910390fd5b6101608190526101ef5f84610265565b5061021a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a684610265565b50811561022b5761022b8383610310565b505050610be3565b5f60208351101561024e5761024783610348565b905061025f565b816102598482610a59565b5060ff90505b92915050565b5f828152600b602090815260408083206001600160a01b038516845290915281205460ff16610309575f838152600b602090815260408083206001600160a01b03861684529091529020805460ff191660011790556102c13390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161025f565b505f61025f565b6001600160a01b0382166103395760405163ec442f0560e01b81525f60048201526024016101d6565b6103445f8383610385565b5050565b5f5f829050601f81511115610372578260405163305a27a960e01b81526004016101d69190610b13565b805161037d82610b48565b179392505050565b610390838383610395565b505050565b6103a08383836103fb565b6001600160a01b0383166103f0575f6103b860025490565b90506001600160d01b03808211156103ed57604051630e58ae9360e11b815260048101839052602481018290526044016101d6565b50505b610390838383610521565b6001600160a01b038316610425578060025f82825461041a9190610b7f565b909155506104959050565b6001600160a01b0383165f90815260208190526040902054818110156104775760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016101d6565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166104b1576002805482900390556104cf565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161051491815260200190565b60405180910390a3505050565b6001600160a01b03831661054f5761054c600a610aea61059360201b17610547846105a5565b6105dc565b50505b6001600160a01b03821661057857610575600a610af561061160201b17610547846105a5565b50505b6103906105848461061c565b61058d8461061c565b83610639565b5f61059e8284610b92565b9392505050565b5f6001600160d01b038211156105d8576040516306dfcc6560e41b815260d06004820152602481018390526044016101d6565b5090565b5f806106046105e9610789565b6105fc6105f588610797565b868860201c565b8791906107de565b915091505b935093915050565b5f61059e8284610bb1565b6001600160a01b039081165f908152600860205260409020541690565b816001600160a01b0316836001600160a01b03161415801561065a57505f81115b15610390576001600160a01b038316156106f2576001600160a01b0383165f908152600960209081526040822082916106a09190610611901b610af517610547866105a5565b6001600160d01b031691506001600160d01b03169150846001600160a01b03165f516020612dab5f395f51905f5283836040516106e7929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610390576001600160a01b0382165f908152600960209081526040822082916107339190610593901b610aea17610547866105a5565b6001600160d01b031691506001600160d01b03169150836001600160a01b03165f516020612dab5f395f51905f52838360405161077a929190918252602082015260400190565b60405180910390a25050505050565b5f6107926107eb565b905090565b80545f9080156107d6576107bd836107b0600184610bd0565b5f91825260209091200190565b54660100000000000090046001600160d01b031661059e565b5f9392505050565b5f806106048585856107f5565b5f61079243610951565b82545f90819080156108f4575f610811876107b0600185610bd0565b805490915065ffffffffffff80821691660100000000000090046001600160d01b031690881682111561085757604051632520601d60e01b815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff160361089357825465ffffffffffff1666010000000000006001600160d01b038916021783556108e6565b6040805180820190915265ffffffffffff808a1682526001600160d01b03808a1660208085019182528d54600181018f555f8f815291909120945191519092166601000000000000029216919091179101555b945085935061060992505050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a8152918220955192519093166601000000000000029190931617920191909155905081610609565b5f65ffffffffffff8211156105d8576040516306dfcc6560e41b815260306004820152602481018390526044016101d6565b5f5f5f60608486031215610995575f5ffd5b83516001600160a01b03811681146109ab575f5ffd5b602085015160409095015190969495509392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806109ea57607f821691505b602082108103610a0857634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561039057805f5260205f20601f840160051c81016020851015610a335750805b601f840160051c820191505b81811015610a52575f8155600101610a3f565b5050505050565b81516001600160401b03811115610a7257610a726109c2565b610a8681610a8084546109d6565b84610a0e565b6020601f821160018114610ab8575f8315610aa15750848201515b5f19600385901b1c1916600184901b178455610a52565b5f84815260208120601f198516915b82811015610ae75787850151825560209485019460019092019101610ac7565b5084821015610b0457868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b80516020808301519190811015610a08575f1960209190910360031b1b16919050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561025f5761025f610b6b565b6001600160d01b03818116838216019081111561025f5761025f610b6b565b6001600160d01b03828116828216039081111561025f5761025f610b6b565b8181038181111561025f5761025f610b6b565b60805160a05160c05160e05161010051610120516101405161016051612166610c455f395f8181610426015261066901525f61103f01525f61101201525f610d2901525f610d0101525f610c5c01525f610c8601525f610cb001526121665ff3fe608060405234801561000f575f5ffd5b506004361061019f575f3560e01c806301ffc9a7146101a357806306fdde03146101cb578063095ea7b3146101e057806318160ddd146101f357806323b872dd14610205578063248a9ca3146102185780632f2ff15d1461022b578063313ce567146102405780633644e5151461024f57806336568abe146102575780633a46b1a81461026a57806340c10f191461027d57806342966c68146102905780634bf5d7e9146102a3578063587cde1e146102ab5780635c19a95c146102cb5780636fcfff45146102de57806370a082311461030657806379cc6790146103195780637ecebe001461032c57806384b0196e1461033f5780638e539e8c1461035a57806391d148541461036d57806391ddadf41461038057806395d89b411461039f5780639ab24eb0146103a7578063a217fddf146103ba578063a9059cbb146103c1578063c3cda520146103d4578063d505accf146103e7578063d5391393146103fa578063d547741f1461040e578063d5abeb0114610421578063dd62ed3e14610448578063f1127ed81461045b575b5f5ffd5b6101b66101b1366004611c81565b61049a565b60405190151581526020015b60405180910390f35b6101d36104d0565b6040516101c29190611cd6565b6101b66101ee366004611d03565b610560565b6002545b6040519081526020016101c2565b6101b6610213366004611d2b565b610577565b6101f7610226366004611d65565b61059a565b61023e610239366004611d7c565b6105ae565b005b604051601281526020016101c2565b6101f76105d0565b61023e610265366004611d7c565b6105de565b6101f7610278366004611d03565b610616565b61023e61028b366004611d03565b610650565b61023e61029e366004611d65565b6106ed565b6101d36106fa565b6102be6102b9366004611da6565b610772565b6040516101c29190611dbf565b61023e6102d9366004611da6565b61078f565b6102f16102ec366004611da6565b61079e565b60405163ffffffff90911681526020016101c2565b6101f7610314366004611da6565b6107a8565b61023e610327366004611d03565b6107c2565b6101f761033a366004611da6565b6107d7565b6103476107e1565b6040516101c29796959493929190611dd3565b6101f7610368366004611d65565b610823565b6101b661037b366004611d7c565b610847565b610388610871565b60405165ffffffffffff90911681526020016101c2565b6101d361087a565b6101f76103b5366004611da6565b610889565b6101f75f81565b6101b66103cf366004611d03565b6108a9565b61023e6103e2366004611e79565b6108b6565b61023e6103f5366004611ecd565b610972565b6101f75f5160206120f15f395f51905f5281565b61023e61041c366004611d7c565b610a8b565b6101f77f000000000000000000000000000000000000000000000000000000000000000081565b6101f7610456366004611f33565b610aa7565b61046e610469366004611f5b565b610ad1565b60408051825165ffffffffffff1681526020928301516001600160d01b031692810192909252016101c2565b5f6001600160e01b03198216637965db0b60e01b14806104ca57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546104df90611f98565b80601f016020809104026020016040519081016040528092919081815260200182805461050b90611f98565b80156105565780601f1061052d57610100808354040283529160200191610556565b820191905f5260205f20905b81548152906001019060200180831161053957829003601f168201915b5050505050905090565b5f3361056d818585610b00565b5060019392505050565b5f33610584858285610b0d565b61058f858585610b58565b506001949350505050565b5f908152600b602052604090206001015490565b6105b78261059a565b6105c081610bb5565b6105ca8383610bbf565b50505050565b5f6105d9610c50565b905090565b6001600160a01b03811633146106075760405163334bd91960e11b815260040160405180910390fd5b6106118282610d79565b505050565b5f61064061062383610de4565b6001600160a01b0385165f90815260096020526040902090610e32565b6001600160d01b03169392505050565b5f5160206120f15f395f51905f5261066781610bb5565b7f00000000000000000000000000000000000000000000000000000000000000008261069260025490565b61069c9190611fe4565b11156106e35760405162461bcd60e51b815260206004820152601160248201527045786365656473206d6178537570706c7960781b60448201526064015b60405180910390fd5b6106118383610ee2565b6106f73382610f16565b50565b6060610704610f4a565b65ffffffffffff16610714610871565b65ffffffffffff161461073a576040516301bfc1c560e61b815260040160405180910390fd5b5060408051808201909152601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015290565b6001600160a01b039081165f908152600860205260409020541690565b3361079a8183610f54565b5050565b5f6104ca82610fcd565b6001600160a01b03165f9081526020819052604090205490565b6107cd823383610b0d565b61079a8282610f16565b5f6104ca82610fee565b5f6060805f5f5f60606107f261100b565b6107fa611038565b604080515f80825260208201909252600f60f81b9b939a50919850469750309650945092509050565b5f61083861083083610de4565b600a90610e32565b6001600160d01b031692915050565b5f918252600b602090815260408084206001600160a01b0393909316845291905290205460ff1690565b5f6105d9610f4a565b6060600480546104df90611f98565b6001600160a01b0381165f90815260096020526040812061083890611065565b5f3361056d818585610b58565b834211156108da57604051632341d78760e11b8152600481018590526024016106da565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590525f906109539061094b9060a0016040516020818303038152906040528051906020012061109c565b8585856110c8565b905061095f81876110f4565b6109698188610f54565b50505050505050565b834211156109965760405163313c898160e11b8152600481018590526024016106da565b5f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886109c48c611124565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090505f610a1e8261109c565b90505f610a2d828787876110c8565b9050896001600160a01b0316816001600160a01b031614610a74576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016106da565b610a7f8a8a8a610b00565b50505050505050505050565b610a948261059a565b610a9d81610bb5565b6105ca8383610d79565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b610ad9611c6b565b610ae38383611146565b9392505050565b5f610ae38284611ff7565b5f610ae38284612016565b610611838383600161116f565b5f610b188484610aa7565b90505f198110156105ca5781811015610b4a57828183604051637dc7a0d960e11b81526004016106da93929190612035565b6105ca84848484035f61116f565b6001600160a01b038316610b81575f604051634b637e8f60e11b81526004016106da9190611dbf565b6001600160a01b038216610baa575f60405163ec442f0560e01b81526004016106da9190611dbf565b610611838383611241565b6106f7813361124c565b5f610bca8383610847565b610c49575f838152600b602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610c013390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016104ca565b505f6104ca565b5f306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610ca857507f000000000000000000000000000000000000000000000000000000000000000046145b15610cd257507f000000000000000000000000000000000000000000000000000000000000000090565b6105d9604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b5f610d848383610847565b15610c49575f838152600b602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016104ca565b5f5f610dee610871565b90508065ffffffffffff168310610e2957604051637669fc0f60e11b81526004810184905265ffffffffffff821660248201526044016106da565b610ae383611277565b81545f9081816005811115610e8e575f610e4b846112a8565b610e559085612056565b5f8881526020902090915081015465ffffffffffff9081169087161015610e7e57809150610e8c565b610e89816001611fe4565b92505b505b5f610e9b878785856113fa565b90508015610ed557610ebf87610eb2600184612056565b5f91825260209091200190565b54600160301b90046001600160d01b0316610ed7565b5f5b979650505050505050565b6001600160a01b038216610f0b575f60405163ec442f0560e01b81526004016106da9190611dbf565b61079a5f8383611241565b6001600160a01b038216610f3f575f604051634b637e8f60e11b81526004016106da9190611dbf565b61079a825f83611241565b5f6105d943611277565b5f610f5e83610772565b6001600160a01b038481165f8181526008602052604080822080546001600160a01b031916888616908117909155905194955093928516927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46106118183610fc886611459565b611463565b6001600160a01b0381165f908152600960205260408120546104ca906115a6565b6001600160a01b0381165f908152600760205260408120546104ca565b60606105d97f000000000000000000000000000000000000000000000000000000000000000060056115d1565b60606105d97f000000000000000000000000000000000000000000000000000000000000000060066115d1565b80545f9080156110945761107e83610eb2600184612056565b54600160301b90046001600160d01b0316610ae3565b5f9392505050565b5f6104ca6110a8610c50565b8360405161190160f01b8152600281019290925260228201526042902090565b5f5f5f5f6110d88888888861167a565b9250925092506110e88282611738565b50909695505050505050565b5f6110fe83611124565b90508082146106115782816040516301d4b62360e61b81526004016106da929190612069565b6001600160a01b03165f90815260076020526040902080546001810190915590565b61114e611c6b565b6001600160a01b0383165f908152600960205260409020610ae390836117f0565b6001600160a01b038416611198575f60405163e602df0560e01b81526004016106da9190611dbf565b6001600160a01b0383166111c1575f604051634a1406b160e11b81526004016106da9190611dbf565b6001600160a01b038085165f90815260016020908152604080832093871683529290522082905580156105ca57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161123391815260200190565b60405180910390a350505050565b610611838383611852565b6112568282610847565b61079a57808260405163e2517d3f60e01b81526004016106da929190612069565b5f65ffffffffffff8211156112a4576030826040516306dfcc6560e41b81526004016106da929190612082565b5090565b5f600182116112b5575090565b816001600160801b82106112ce5760809190911c9060401b5b600160401b82106112e45760409190911c9060201b5b600160201b82106112fa5760209190911c9060101b5b62010000821061130f5760109190911c9060081b5b61010082106113235760089190911c9060041b5b601082106113365760049190911c9060021b5b600482106113425760011b5b600302600190811c9081858161135a5761135a612095565b048201901c9050600181858161137257611372612095565b048201901c9050600181858161138a5761138a612095565b048201901c905060018185816113a2576113a2612095565b048201901c905060018185816113ba576113ba612095565b048201901c905060018185816113d2576113d2612095565b048201901c90506113f18185816113eb576113eb612095565b04821190565b90039392505050565b5f5b81831015611451575f61140f84846118b8565b5f8781526020902090915065ffffffffffff86169082015465ffffffffffff16111561143d5780925061144b565b611448816001611fe4565b93505b506113fc565b509392505050565b5f6104ca826107a8565b816001600160a01b0316836001600160a01b03161415801561148457505f81115b15610611576001600160a01b03831615611518576001600160a01b0383165f90815260096020526040812081906114c690610af56114c1866118d2565b611900565b6001600160d01b031691506001600160d01b03169150846001600160a01b03165f5160206121115f395f51905f52838360405161150d929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610611576001600160a01b0382165f908152600960205260408120819061155090610aea6114c1866118d2565b6001600160d01b031691506001600160d01b03169150836001600160a01b03165f5160206121115f395f51905f528383604051611597929190918252602082015260400190565b60405180910390a25050505050565b5f63ffffffff8211156112a4576020826040516306dfcc6560e41b81526004016106da929190612082565b606060ff83146115eb576115e483611938565b90506104ca565b8180546115f790611f98565b80601f016020809104026020016040519081016040528092919081815260200182805461162390611f98565b801561166e5780601f106116455761010080835404028352916020019161166e565b820191905f5260205f20905b81548152906001019060200180831161165157829003601f168201915b505050505090506104ca565b5f80806fa2a8918ca85bafe22016d0b997e4df60600160ff1b038411156116a957505f9150600390508261172e565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156116fa573d5f5f3e3d5ffd5b5050604051601f1901519150506001600160a01b03811661172557505f92506001915082905061172e565b92505f91508190505b9450945094915050565b5f82600381111561174b5761174b6120a9565b03611754575050565b6001826003811115611768576117686120a9565b036117865760405163f645eedf60e01b815260040160405180910390fd5b600282600381111561179a5761179a6120a9565b036117bb5760405163fce698f760e01b8152600481018290526024016106da565b60038260038111156117cf576117cf6120a9565b0361079a576040516335e2f38360e21b8152600481018290526024016106da565b6117f8611c6b565b825f018263ffffffff1681548110611812576118126120bd565b5f9182526020918290206040805180820190915291015465ffffffffffff81168252600160301b90046001600160d01b0316918101919091529392505050565b61185d838383611975565b6001600160a01b0383166118ad575f61187560025490565b90506001600160d01b03808211156118aa57604051630e58ae9360e11b815260048101839052602481018290526044016106da565b50505b610611838383611a88565b5f6118c660028484186120d1565b610ae390848416611fe4565b5f6001600160d01b038211156112a45760d0826040516306dfcc6560e41b81526004016106da929190612082565b5f5f61192b61190d610871565b61192361191988611065565b868863ffffffff16565b879190611ae7565b915091505b935093915050565b60605f61194483611af4565b6040805160208082528183019092529192505f91906020820181803683375050509182525060208101929092525090565b6001600160a01b03831661199f578060025f8282546119949190611fe4565b909155506119fc9050565b6001600160a01b0383165f90815260208190526040902054818110156119de5783818360405163391434e360e21b81526004016106da93929190612035565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b038216611a1857600280548290039055611a36565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a7b91815260200190565b60405180910390a3505050565b6001600160a01b038316611aaa57611aa7600a610aea6114c1846118d2565b50505b6001600160a01b038216611acc57611ac9600a610af56114c1846118d2565b50505b610611611ad884610772565b611ae184610772565b83611463565b5f8061192b858585611b1b565b5f60ff8216601f8111156104ca57604051632cd44ac360e21b815260040160405180910390fd5b82545f9081908015611c11575f611b3787610eb2600185612056565b805490915065ffffffffffff80821691600160301b90046001600160d01b0316908816821115611b7a57604051632520601d60e01b815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff1603611bb357825465ffffffffffff16600160301b6001600160d01b03891602178355611c03565b6040805180820190915265ffffffffffff808a1682526001600160d01b03808a1660208085019182528d54600181018f555f8f81529190912094519151909216600160301b029216919091179101555b945085935061193092505050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a815291822095519251909316600160301b029190931617920191909155905081611930565b604080518082019091525f808252602082015290565b5f60208284031215611c91575f5ffd5b81356001600160e01b031981168114610ae3575f5ffd5b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610ae36020830184611ca8565b80356001600160a01b0381168114611cfe575f5ffd5b919050565b5f5f60408385031215611d14575f5ffd5b611d1d83611ce8565b946020939093013593505050565b5f5f5f60608486031215611d3d575f5ffd5b611d4684611ce8565b9250611d5460208501611ce8565b929592945050506040919091013590565b5f60208284031215611d75575f5ffd5b5035919050565b5f5f60408385031215611d8d575f5ffd5b82359150611d9d60208401611ce8565b90509250929050565b5f60208284031215611db6575f5ffd5b610ae382611ce8565b6001600160a01b0391909116815260200190565b60ff60f81b8816815260e060208201525f611df160e0830189611ca8565b8281036040840152611e038189611ca8565b606084018890526001600160a01b038716608085015260a0840186905283810360c0850152845180825260208087019350909101905f5b81811015611e58578351835260209384019390920191600101611e3a565b50909b9a5050505050505050505050565b803560ff81168114611cfe575f5ffd5b5f5f5f5f5f5f60c08789031215611e8e575f5ffd5b611e9787611ce8565b95506020870135945060408701359350611eb360608801611e69565b9598949750929560808101359460a0909101359350915050565b5f5f5f5f5f5f5f60e0888a031215611ee3575f5ffd5b611eec88611ce8565b9650611efa60208901611ce8565b95506040880135945060608801359350611f1660808901611e69565b9699959850939692959460a0840135945060c09093013592915050565b5f5f60408385031215611f44575f5ffd5b611f4d83611ce8565b9150611d9d60208401611ce8565b5f5f60408385031215611f6c575f5ffd5b611f7583611ce8565b9150602083013563ffffffff81168114611f8d575f5ffd5b809150509250929050565b600181811c90821680611fac57607f821691505b602082108103611fca57634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156104ca576104ca611fd0565b6001600160d01b0381811683821601908111156104ca576104ca611fd0565b6001600160d01b0382811682821603908111156104ca576104ca611fd0565b6001600160a01b039390931683526020830191909152604082015260600190565b818103818111156104ca576104ca611fd0565b6001600160a01b03929092168252602082015260400190565b60ff929092168252602082015260400190565b634e487b7160e01b5f52601260045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b5f826120eb57634e487b7160e01b5f52601260045260245ffd5b50049056fe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724a2646970667358221220961b9d31fe0bfd3f1556c21a6a34527b0c1e7924ecabb3ab0c5ddb0c53db1bb864736f6c634300081c0033dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611b90380380611b9083398101604081905261002e91610158565b6040518060400160405280600f81526020016e111bdb985d1a5bdb949958d95a5c1d608a1b8152506040518060400160405280600b81526020016a10949051d49150d152541560aa1b815250815f9081610088919061021d565b506001610095828261021d565b506100a491505f9050826100ab565b50506102d7565b5f8281526006602090815260408083206001600160a01b038516845290915281205460ff1661014f575f8381526006602090815260408083206001600160a01b03861684529091529020805460ff191660011790556101073390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610152565b505f5b92915050565b5f60208284031215610168575f5ffd5b81516001600160a01b038116811461017e575f5ffd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806101ad57607f821691505b6020821081036101cb57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561021857805f5260205f20601f840160051c810160208510156101f65750805b601f840160051c820191505b81811015610215575f8155600101610202565b50505b505050565b81516001600160401b0381111561023657610236610185565b61024a816102448454610199565b846101d1565b6020601f82116001811461027c575f83156102655750848201515b5f19600385901b1c1916600184901b178455610215565b5f84815260208120601f198516915b828110156102ab578785015182556020948501946001909201910161028b565b50848210156102c857868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6118ac806102e45f395ff3fe608060405234801561000f575f5ffd5b5060043610610126575f3560e01c806301ffc9a71461012a57806306fdde0314610152578063081812fc14610167578063095ea7b3146101875780630f7ee1ec1461019c57806323b872dd146101bf578063248a9ca3146101d25780632f2ff15d146101f357806336568abe1461020657806342842e0e146102195780636352211e1461022c57806370a082311461023f57806391d148541461025257806395d89b4114610265578063a217fddf1461026d578063a22cb46514610274578063b63e6ac314610287578063b88d4fde146102a7578063c87b56dd146102ba578063cf456ae7146102cd578063d3fc9864146102e0578063d5391393146102f3578063d547741f14610307578063e985e9c51461031a575b5f5ffd5b61013d6101383660046112df565b61032d565b60405190151581526020015b60405180910390f35b61015a61033d565b6040516101499190611328565b61017a61017536600461133a565b6103cc565b6040516101499190611351565b61019a610195366004611380565b6103e0565b005b6101af6101aa36600461133a565b6103ef565b60405161014994939291906113a8565b61019a6101cd3660046113de565b6104a9565b6101e56101e036600461133a565b61053b565b604051908152602001610149565b61019a610201366004611418565b61054f565b61019a610214366004611418565b61056b565b61019a6102273660046113de565b6105a3565b61017a61023a36600461133a565b6105bd565b6101e561024d366004611442565b6105c7565b61013d610260366004611418565b61060c565b61015a610636565b6101e55f81565b61019a61028236600461145b565b610645565b61029a61029536600461133a565b610650565b6040516101499190611494565b61019a6102b53660046114e8565b610768565b61015a6102c836600461133a565b610780565b61019a6102db36600461145b565b6107f1565b6101e56102ee3660046115c2565b61082f565b6101e55f5160206118575f395f51905f5281565b61019a610315366004611418565b61096b565b61013d610328366004611643565b610987565b5f610337826109b4565b92915050565b60605f805461034b9061166b565b80601f01602080910402602001604051908101604052809291908181526020018280546103779061166b565b80156103c25780601f10610399576101008083540402835291602001916103c2565b820191905f5260205f20905b8154815290600101906020018083116103a557829003601f168201915b5050505050905090565b5f6103d6826109d8565b5061033782610a0f565b6103eb828233610a29565b5050565b60086020525f908152604090208054600182015460028301546003840180546001600160a01b039094169492939192916104289061166b565b80601f01602080910402602001604051908101604052809291908181526020018280546104549061166b565b801561049f5780601f106104765761010080835404028352916020019161049f565b820191905f5260205f20905b81548152906001019060200180831161048257829003601f168201915b5050505050905084565b6001600160a01b0382166104db575f604051633250574960e11b81526004016104d29190611351565b60405180910390fd5b5f6104e7838333610a36565b9050836001600160a01b0316816001600160a01b031614610535576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016104d2565b50505050565b5f9081526006602052604090206001015490565b6105588261053b565b61056181610aea565b6105358383610af7565b6001600160a01b03811633146105945760405163334bd91960e11b815260040160405180910390fd5b61059e8282610b88565b505050565b61059e83838360405180602001604052805f815250610768565b5f610337826109d8565b5f6001600160a01b0382166105f1575f6040516322718ad960e21b81526004016104d29190611351565b506001600160a01b03165f9081526003602052604090205490565b5f9182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606001805461034b9061166b565b6103eb338383610bf3565b61068160405180608001604052805f6001600160a01b031681526020015f81526020015f8152602001606081525090565b61068a826109d8565b505f82815260086020908152604091829020825160808101845281546001600160a01b031681526001820154928101929092526002810154928201929092526003820180549192916060840191906106e19061166b565b80601f016020809104026020016040519081016040528092919081815260200182805461070d9061166b565b80156107585780601f1061072f57610100808354040283529160200191610758565b820191905f5260205f20905b81548152906001019060200180831161073b57829003601f168201915b5050505050815250509050919050565b6107738484846104a9565b6105353385858585610c88565b606061078b826109d8565b505f6107a160408051602081019091525f815290565b90505f8151116107bf5760405180602001604052805f8152506107ea565b806107c984610d9e565b6040516020016107da9291906116ba565b6040516020818303038152906040525b9392505050565b5f6107fb81610aea565b8115610818576105355f5160206118575f395f51905f5284610af7565b6105355f5160206118575f395f51905f5284610b88565b5f5f5160206118575f395f51905f5261084781610aea565b600780545f9182610857836116ce565b9190505590506040518060800160405280886001600160a01b0316815260200187815260200142815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505083815260086020908152604091829020845181546001600160a01b0319166001600160a01b039091161781559084015160018201559083015160028201556060830151909150600382019061090f9082611736565b5090505061091d8782610e2d565b866001600160a01b0316817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea58860405161095991815260200190565b60405180910390a39695505050505050565b6109748261053b565b61097d81610aea565b6105358383610b88565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f6001600160e01b03198216637965db0b60e01b1480610337575061033782610e46565b5f5f6109e383610e95565b90506001600160a01b03811661033757604051637e27328960e01b8152600481018490526024016104d2565b5f908152600460205260409020546001600160a01b031690565b61059e8383836001610eaf565b5f5f610a4184610e95565b90506001600160a01b03811615801590610a6357506001600160a01b03851615155b15610ad65760405162461bcd60e51b815260206004820152603d60248201527f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f60448201527f756e6420616e642063616e6e6f74206265207472616e7366657272656400000060648201526084016104d2565b610ae1858585610faa565b95945050505050565b610af48133611097565b50565b5f610b02838361060c565b610b81575f8381526006602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610b393390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610337565b505f610337565b5f610b93838361060c565b15610b81575f8381526006602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610337565b6001600160a01b038216610c1c5781604051630b61174360e31b81526004016104d29190611351565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15610d9757604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610cca9088908890879087906004016117f0565b6020604051808303815f875af1925050508015610d04575060408051601f3d908101601f19168201909252610d0191810190611822565b60015b610d62573d808015610d31576040519150601f19603f3d011682016040523d82523d5f602084013e610d36565b606091505b5080515f03610d5a5783604051633250574960e11b81526004016104d29190611351565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b14610d955783604051633250574960e11b81526004016104d29190611351565b505b5050505050565b60605f610daa836110c2565b60010190505f816001600160401b03811115610dc857610dc86114d4565b6040519080825280601f01601f191660200182016040528015610df2576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610dfc57509392505050565b6103eb828260405180602001604052805f815250611197565b5f6001600160e01b031982166380ac58cd60e01b1480610e7657506001600160e01b03198216635b5e139f60e01b145b8061033757506301ffc9a760e01b6001600160e01b0319831614610337565b5f908152600260205260409020546001600160a01b031690565b8080610ec357506001600160a01b03821615155b15610f7b575f610ed2846109d8565b90506001600160a01b03831615801590610efe5750826001600160a01b0316816001600160a01b031614155b8015610f115750610f0f8184610987565b155b15610f31578260405163a9fbf51f60e01b81526004016104d29190611351565b8115610f795783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f5f610fb584610e95565b90506001600160a01b03831615610fd157610fd18184866111ae565b6001600160a01b0381161561100b57610fec5f855f5f610eaf565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615611039576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6110a1828261060c565b6103eb57808260405163e2517d3f60e01b81526004016104d292919061183d565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106111005772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6904ee2d6d415b85acef8160201b831061112a576904ee2d6d415b85acef8160201b830492506020015b662386f26fc10000831061114857662386f26fc10000830492506010015b6305f5e1008310611160576305f5e100830492506008015b612710831061117457612710830492506004015b60648310611186576064830492506002015b600a83106103375760010192915050565b6111a18383611204565b61059e335f858585610c88565b6111b9838383611265565b61059e576001600160a01b0383166111e757604051637e27328960e01b8152600481018290526024016104d2565b818160405163177e802f60e01b81526004016104d292919061183d565b6001600160a01b03821661122d575f604051633250574960e11b81526004016104d29190611351565b5f61123983835f610a36565b90506001600160a01b0381161561059e575f6040516339e3563760e11b81526004016104d29190611351565b5f6001600160a01b038316158015906112c25750826001600160a01b0316846001600160a01b0316148061129e575061129e8484610987565b806112c25750826001600160a01b03166112b783610a0f565b6001600160a01b0316145b949350505050565b6001600160e01b031981168114610af4575f5ffd5b5f602082840312156112ef575f5ffd5b81356107ea816112ca565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6107ea60208301846112fa565b5f6020828403121561134a575f5ffd5b5035919050565b6001600160a01b0391909116815260200190565b80356001600160a01b038116811461137b575f5ffd5b919050565b5f5f60408385031215611391575f5ffd5b61139a83611365565b946020939093013593505050565b60018060a01b0385168152836020820152826040820152608060608201525f6113d460808301846112fa565b9695505050505050565b5f5f5f606084860312156113f0575f5ffd5b6113f984611365565b925061140760208501611365565b929592945050506040919091013590565b5f5f60408385031215611429575f5ffd5b8235915061143960208401611365565b90509250929050565b5f60208284031215611452575f5ffd5b6107ea82611365565b5f5f6040838503121561146c575f5ffd5b61147583611365565b915060208301358015158114611489575f5ffd5b809150509250929050565b6020815260018060a01b03825116602082015260208201516040820152604082015160608201525f60608301516080808401526112c260a08401826112fa565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f608085870312156114fb575f5ffd5b61150485611365565b935061151260208601611365565b92506040850135915060608501356001600160401b03811115611533575f5ffd5b8501601f81018713611543575f5ffd5b80356001600160401b0381111561155c5761155c6114d4565b604051601f8201601f19908116603f011681016001600160401b038111828210171561158a5761158a6114d4565b6040528181528282016020018910156115a1575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f5f5f606085870312156115d5575f5ffd5b6115de85611365565b93506020850135925060408501356001600160401b038111156115ff575f5ffd5b8501601f8101871361160f575f5ffd5b80356001600160401b03811115611624575f5ffd5b876020828401011115611635575f5ffd5b949793965060200194505050565b5f5f60408385031215611654575f5ffd5b61165d83611365565b915061143960208401611365565b600181811c9082168061167f57607f821691505b60208210810361169d57634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f6112c26116c883866116a3565b846116a3565b5f600182016116eb57634e487b7160e01b5f52601160045260245ffd5b5060010190565b601f82111561059e57805f5260205f20601f840160051c810160208510156117175750805b601f840160051c820191505b81811015610d97575f8155600101611723565b81516001600160401b0381111561174f5761174f6114d4565b6117638161175d845461166b565b846116f2565b6020601f821160018114611795575f831561177e5750848201515b5f19600385901b1c1916600184901b178455610d97565b5f84815260208120601f198516915b828110156117c457878501518255602094850194600190920191016117a4565b50848210156117e157868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906113d4908301846112fa565b5f60208284031215611832575f5ffd5b81516107ea816112ca565b6001600160a01b0392909216825260208201526040019056fe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a2646970667358221220b6f8aca0ce45e5ca7ca59939dbb964288a247eb71ec0e4951ba95ae40a1c9e1764736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161102138038061102183398101604081905261002e91610113565b6100385f8261006a565b506100637f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea098261006a565b5050610140565b5f828152602081815260408083206001600160a01b038516845290915281205460ff1661010a575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100c23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161010d565b505f5b92915050565b5f60208284031215610123575f5ffd5b81516001600160a01b0381168114610139575f5ffd5b9392505050565b610ed48061014d5f395ff3fe608060405234801561000f575f5ffd5b50600436106100c3575f3560e01c806301ffc9a7146100c7578063248a9ca3146100ef5780632f2ff15d1461011057806336568abe1461012557806374d4e4911461013857806390229af71461014057806391d1485414610160578063a217fddf14610173578063a622ee7c1461017a578063b9209e331461019d578063ceb68c23146101c8578063d42b291c146101db578063d547741f146101ee578063d7bfe38614610201578063e7705db61461022c575b5f5ffd5b6100da6100d5366004610a71565b610240565b60405190151581526020015b60405180910390f35b6101026100fd366004610a9f565b610276565b6040519081526020016100e6565b61012361011e366004610ad1565b61028a565b005b610123610133366004610ad1565b6102ac565b600254610102565b61015361014e366004610afb565b6102e4565b6040516100e69190610b76565b6100da61016e366004610ad1565b61048a565b6101025f81565b61018d610188366004610afb565b6104b2565b6040516100e69493929190610bd6565b6100da6101ab366004610afb565b6001600160a01b03165f9081526001602052604090205460ff1690565b6101236101d6366004610afb565b6105ee565b6101236101e9366004610c5e565b6106af565b6101236101fc366004610ad1565b6108eb565b61021461020f366004610a9f565b610907565b6040516001600160a01b0390911681526020016100e6565b6101025f516020610e7f5f395f51905f5281565b5f6001600160e01b03198216637965db0b60e01b148061027057506301ffc9a760e01b6001600160e01b03198316145b92915050565b5f9081526020819052604090206001015490565b61029382610276565b61029c8161092f565b6102a6838361093c565b50505050565b6001600160a01b03811633146102d55760405163334bd91960e11b815260040160405180910390fd5b6102df82826109cb565b505050565b60408051608080820183525f80835260208084018290526060848601819052808501526001600160a01b038616825260018152908490208451928301909452835460ff80821615158452939492939184019161010090910416600481111561034e5761034e610b14565b600481111561035f5761035f610b14565b815260200160018201805461037390610cf1565b80601f016020809104026020016040519081016040528092919081815260200182805461039f90610cf1565b80156103ea5780601f106103c1576101008083540402835291602001916103ea565b820191905f5260205f20905b8154815290600101906020018083116103cd57829003601f168201915b5050505050815260200160028201805461040390610cf1565b80601f016020809104026020016040519081016040528092919081815260200182805461042f90610cf1565b801561047a5780601f106104515761010080835404028352916020019161047a565b820191905f5260205f20905b81548152906001019060200180831161045d57829003601f168201915b5050505050815250509050919050565b5f918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600160208190525f91825260409091208054918101805460ff808516946101009004169291906104e190610cf1565b80601f016020809104026020016040519081016040528092919081815260200182805461050d90610cf1565b80156105585780601f1061052f57610100808354040283529160200191610558565b820191905f5260205f20905b81548152906001019060200180831161053b57829003601f168201915b50505050509080600201805461056d90610cf1565b80601f016020809104026020016040519081016040528092919081815260200182805461059990610cf1565b80156105e45780601f106105bb576101008083540402835291602001916105e4565b820191905f5260205f20905b8154815290600101906020018083116105c757829003601f168201915b5050505050905084565b5f516020610e7f5f395f51905f526106058161092f565b6001600160a01b0382165f9081526001602052604090205460ff166106665760405162461bcd60e51b815260206004820152601260248201527115985d5b1d081b9bdd081d995c9a599a595960721b60448201526064015b60405180910390fd5b6001600160a01b0382165f81815260016020526040808220805460ff19169055517fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a9190a25050565b5f516020610e7f5f395f51905f526106c68161092f565b6001600160a01b03871661070e5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161065d565b6001600160a01b0387165f9081526001602052604090205460ff1661077857600280546001810182555f919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0389161790555b604051806080016040528060011515815260200187600481111561079e5761079e610b14565b815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250604080516020601f8701819004810282018101909252858152918101919086908690819084018382808284375f9201829052509390945250506001600160a01b038a1681526001602090815260409091208351815490151560ff19821681178355928501519193509091839161ff001990911661ffff199091161761010083600481111561086b5761086b610b14565b0217905550604082015160018201906108849082610d88565b50606082015160028201906108999082610d88565b50905050866001600160a01b03167f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec88787876040516108da93929190610e42565b60405180910390a250505050505050565b6108f482610276565b6108fd8161092f565b6102a683836109cb565b60028181548110610916575f80fd5b5f918252602090912001546001600160a01b0316905081565b6109398133610a34565b50565b5f610947838361048a565b6109c4575f838152602081815260408083206001600160a01b03861684529091529020805460ff1916600117905561097c3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610270565b505f610270565b5f6109d6838361048a565b156109c4575f838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610270565b610a3e828261048a565b610a6d5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161065d565b5050565b5f60208284031215610a81575f5ffd5b81356001600160e01b031981168114610a98575f5ffd5b9392505050565b5f60208284031215610aaf575f5ffd5b5035919050565b80356001600160a01b0381168114610acc575f5ffd5b919050565b5f5f60408385031215610ae2575f5ffd5b82359150610af260208401610ab6565b90509250929050565b5f60208284031215610b0b575f5ffd5b610a9882610ab6565b634e487b7160e01b5f52602160045260245ffd5b60058110610b4457634e487b7160e01b5f52602160045260245ffd5b9052565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081528151151560208201525f6020830151610b966040840182610b28565b50604083015160806060840152610bb060a0840182610b48565b90506060840151601f19848303016080850152610bcd8282610b48565b95945050505050565b8415158152610be86020820185610b28565b608060408201525f610bfd6080830185610b48565b8281036060840152610c0f8185610b48565b979650505050505050565b5f5f83601f840112610c2a575f5ffd5b5081356001600160401b03811115610c40575f5ffd5b602083019150836020828501011115610c57575f5ffd5b9250929050565b5f5f5f5f5f5f60808789031215610c73575f5ffd5b610c7c87610ab6565b9550602087013560058110610c8f575f5ffd5b945060408701356001600160401b03811115610ca9575f5ffd5b610cb589828a01610c1a565b90955093505060608701356001600160401b03811115610cd3575f5ffd5b610cdf89828a01610c1a565b979a9699509497509295939492505050565b600181811c90821680610d0557607f821691505b602082108103610d2357634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52604160045260245ffd5b601f8211156102df57805f5260205f20601f840160051c81016020851015610d625750805b601f840160051c820191505b81811015610d81575f8155600101610d6e565b5050505050565b81516001600160401b03811115610da157610da1610d29565b610db581610daf8454610cf1565b84610d3d565b6020601f821160018114610de7575f8315610dd05750848201515b5f19600385901b1c1916600184901b178455610d81565b5f84815260208120601f198516915b82811015610e165787850151825560209485019460019092019101610df6565b5084821015610e3357868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b610e4c8185610b28565b60406020820152816040820152818360608301375f818301606090810191909152601f909201601f191601019291505056fe0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea09a264697066735822122044629f850285705a4376fcb8b47ba93a15aea0e098545afaeb346a0867479c6364736f6c634300081c0033"
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
              "internalType": "address",
              "name": "_registry",
              "type": "address"
            }
          ],
          "name": "setRegistry",
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611ea5380380611ea583398101604081905261002e916100d7565b60015f55338061005757604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006081610086565b50600280546001600160a01b0319166001600160a01b0392909216919091179055610104565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f602082840312156100e7575f5ffd5b81516001600160a01b03811681146100fd575f5ffd5b9392505050565b611d94806101115f395ff3fe608060405234801561000f575f5ffd5b50600436106100ef575f3560e01c806301ffc9a7146100f3578063041261961461011b578063150b7a02146101535780632ff1d0f91461017f57806335f81b8714610194578063380ff999146101a75780636f39becd146101d7578063715018a6146102175780637b1039991461021f57806381bd34d2146102325780638da5cb5b14610262578063a91ee0dc1461026a578063bc197c811461027d578063c2fe518514610290578063d6bd07ee146102a3578063d7423858146102b6578063f07a380e146102c9578063f23a6e61146102dc578063f2fde38b146102ef575b5f5ffd5b6101066101013660046114e3565b610302565b60405190151581526020015b60405180910390f35b610145610129366004611525565b600560209081525f928352604080842090915290825290205481565b604051908152602001610112565b610166610161366004611633565b610338565b6040516001600160e01b03199091168152602001610112565b61019261018d36600461169a565b610567565b005b6101926101a23660046116cc565b610779565b6101456101b536600461171a565b600660209081525f938452604080852082529284528284209052825290205481565b61020a6101e5366004611525565b600360209081525f92835260408084209091529082529020546001600160a01b031681565b6040516101129190611759565b61019261079e565b60025461020a906001600160a01b031681565b61014561024036600461171a565b600460209081525f938452604080852082529284528284209052825290205481565b61020a6107b1565b61019261027836600461176d565b6107c0565b61016661028b366004611807565b6107ea565b61019261029e3660046118b7565b610afd565b6101926102b13660046118fc565b610b20565b6101926102c436600461171a565b610b35565b6101926102d7366004611525565b610b52565b6101666102ea366004611943565b610cbe565b6101926102fd36600461176d565b610ee1565b5f6001600160e01b03198216630271189760e51b148061033257506301ffc9a760e01b6001600160e01b03198316145b92915050565b5f610341610f1e565b815184905f906020036103f85760025460405163b9209e3360e01b81526001600160a01b039091169063b9209e339061037e908990600401611759565b602060405180830381865afa158015610399573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103bd91906119ae565b156103dd57838060200190518101906103d691906119c7565b915061041b565b838060200190518101906103f191906119e2565b905061041b565b835160400361041b578380602001905181019061041591906119f9565b90925090505b335f908152600360209081526040808320888452909152812080546001600160a01b0319166001600160a01b03851617905581610458575f610462565b6104628242611a39565b335f9081526005602090815260408083208a845290915280822083905560025490516390229af760e01b815292935090916001600160a01b03909116906390229af7906104b3903090600401611759565b5f60405180830381865afa1580156104cd573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526104f49190810190611a99565b604001519050836001600160a01b031687336001600160a01b03167f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad38486604051610540929190611b84565b60405180910390a4630a85bd0160e11b94505050505061055f60015f55565b949350505050565b61056f610f1e565b6001600160a01b0383165f90815260046020908152604080832085845282528083203384529091529020548111156105c25760405162461bcd60e51b81526004016105b990611ba5565b60405180910390fd5b6001600160a01b0383165f908152600660209081526040808320858452825280832033845290915290205442101561060c5760405162461bcd60e51b81526004016105b990611bd3565b6001600160a01b0383165f908152600460209081526040808320858452825280832033845290915281208054839290610646908490611c07565b90915550506001600160a01b0383165f908152600460209081526040808320858452825280832033845290915281205490036106a8576001600160a01b0383165f90815260066020908152604080832085845282528083203384529091528120555b604051637921219560e11b8152306004820152336024820152604481018390526064810182905260a060848201525f60a48201526001600160a01b0384169063f242432a9060c4015f604051808303815f87803b158015610707575f5ffd5b505af1158015610719573d5f5f3e3d5ffd5b50505050336001600160a01b031682846001600160a01b03167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f98460405161076391815260200190565b60405180910390a461077460015f55565b505050565b610781610f1e565b61078e8585858585610f46565b61079760015f55565b5050505050565b6107a6611207565b6107af5f611239565b565b6001546001600160a01b031690565b6107c8611207565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b5f6107f3610f1e565b815185905f906020036108aa5760025460405163b9209e3360e01b81526001600160a01b039091169063b9209e3390610830908a90600401611759565b602060405180830381865afa15801561084b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061086f91906119ae565b1561088f578380602001905181019061088891906119c7565b91506108cd565b838060200190518101906108a391906119e2565b90506108cd565b83516040036108cd57838060200190518101906108c791906119f9565b90925090505b5f5f82116108db575f6108e5565b6108e58242611a39565b6002546040516390229af760e01b81529192505f916001600160a01b03909116906390229af79061091a903090600401611759565b5f60405180830381865afa158015610934573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261095b9190810190611a99565b6040015190505f5b8851811015610adb5787818151811061097e5761097e611c1a565b602002602001015160045f336001600160a01b03166001600160a01b031681526020019081526020015f205f8b84815181106109bc576109bc611c1a565b602002602001015181526020019081526020015f205f876001600160a01b03166001600160a01b031681526020019081526020015f205f828254610a009190611a39565b9091555050335f9081526006602052604081208a518592908c9085908110610a2a57610a2a611c1a565b602002602001015181526020019081526020015f205f876001600160a01b03166001600160a01b031681526020019081526020015f2081905550846001600160a01b0316898281518110610a8057610a80611c1a565b6020026020010151336001600160a01b03165f516020611d3f5f395f51905f528b8581518110610ab257610ab2611c1a565b60200260200101518688604051610acb93929190611c2e565b60405180910390a4600101610963565b5063bc197c8160e01b5b945050505050610af460015f55565b95945050505050565b610b05610f1e565b610b118484848461128a565b610b1a60015f55565b50505050565b610b28610f1e565b610b11848484845f610f46565b610b3d610f1e565b610b498383835f61128a565b61077460015f55565b610b5a610f1e565b6001600160a01b038281165f908152600360209081526040808320858452909152902054163314610b9d5760405162461bcd60e51b81526004016105b990611c56565b6001600160a01b0382165f908152600560209081526040808320848452909152902054421015610bdf5760405162461bcd60e51b81526004016105b990611bd3565b6001600160a01b0382165f818152600360209081526040808320858452825280832080546001600160a01b0319169055838352600582528083208584529091528082209190915551632142170760e11b8152306004820152336024820152604481018390526342842e0e906064015f604051808303815f87803b158015610c64575f5ffd5b505af1158015610c76573d5f5f3e3d5ffd5b50506040513392508391506001600160a01b038516907f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06905f90a4610cba60015f55565b5050565b5f610cc7610f1e565b815185905f90602003610d7e5760025460405163b9209e3360e01b81526001600160a01b039091169063b9209e3390610d04908a90600401611759565b602060405180830381865afa158015610d1f573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d4391906119ae565b15610d635783806020019051810190610d5c91906119c7565b9150610da1565b83806020019051810190610d7791906119e2565b9050610da1565b8351604003610da15783806020019051810190610d9b91906119f9565b90925090505b335f90815260046020908152604080832089845282528083206001600160a01b038616845290915281208054879290610ddb908490611a39565b909155505f905081610ded575f610df7565b610df78242611a39565b335f9081526006602090815260408083208b845282528083206001600160a01b038881168552925280832084905560025490516390229af760e01b815293945091929116906390229af790610e50903090600401611759565b5f60405180830381865afa158015610e6a573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610e919190810190611a99565b604001519050836001600160a01b031688336001600160a01b03165f516020611d3f5f395f51905f528a8587604051610ecc93929190611c2e565b60405180910390a463f23a6e6160e01b610ae5565b610ee9611207565b6001600160a01b038116610f12575f604051631e4fbdf760e01b81526004016105b99190611759565b610f1b81611239565b50565b60025f5403610f4057604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b6001600160a01b0385165f9081526004602090815260408083208784528252808320338452909152902054831115610f905760405162461bcd60e51b81526004016105b990611ba5565b60025460405163b9209e3360e01b81526001600160a01b039091169063b9209e3390610fc0908590600401611759565b602060405180830381865afa158015610fdb573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fff91906119ae565b61101b5760405162461bcd60e51b81526004016105b990611c7d565b6001600160a01b0385165f90815260066020908152604080832087845282528083203384529091529020544210156110655760405162461bcd60e51b81526004016105b990611bd3565b6001600160a01b0385165f90815260046020908152604080832087845282528083203384529091528120805485929061109f908490611c07565b90915550506001600160a01b0385165f90815260046020908152604080832087845282528083203384529091528120549003611101576001600160a01b0385165f90815260066020908152604080832087845282528083203384529091528120555b6060811561113257338260405160200161111c929190611caf565b6040516020818303038152906040529050611155565b336040516020016111439190611759565b60405160208183030381529060405290505b604051637921219560e11b81526001600160a01b0387169063f242432a9061118990309087908a908a908890600401611cc8565b5f604051808303815f87803b1580156111a0575f5ffd5b505af11580156111b2573d5f5f3e3d5ffd5b5050604080518781526001600160a01b0387811660208301523394508993508a16917fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1910160405180910390a4505050505050565b336112106107b1565b6001600160a01b0316146107af573360405163118cdaa760e01b81526004016105b99190611759565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b038481165f9081526003602090815260408083208784529091529020541633146112cd5760405162461bcd60e51b81526004016105b990611c56565b60025460405163b9209e3360e01b81526001600160a01b039091169063b9209e33906112fd908590600401611759565b602060405180830381865afa158015611318573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061133c91906119ae565b6113585760405162461bcd60e51b81526004016105b990611c7d565b6001600160a01b0384165f90815260056020908152604080832086845290915290205442101561139a5760405162461bcd60e51b81526004016105b990611bd3565b6001600160a01b0384165f818152600360209081526040808320878452825280832080546001600160a01b0319169055928252600581528282208683529052908120556060811561140e5733826040516020016113f8929190611caf565b6040516020818303038152906040529050611431565b3360405160200161141f9190611759565b60405160208183030381529060405290505b604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde90611463903090879089908790600401611d0c565b5f604051808303815f87803b15801561147a575f5ffd5b505af115801561148c573d5f5f3e3d5ffd5b50505050336001600160a01b031684866001600160a01b03167f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d79866040516114d49190611759565b60405180910390a45050505050565b5f602082840312156114f3575f5ffd5b81356001600160e01b03198116811461150a575f5ffd5b9392505050565b6001600160a01b0381168114610f1b575f5ffd5b5f5f60408385031215611536575f5ffd5b823561154181611511565b946020939093013593505050565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b03811182821017156115855761158561154f565b60405290565b604051601f8201601f191681016001600160401b03811182821017156115b3576115b361154f565b604052919050565b5f6001600160401b038211156115d3576115d361154f565b50601f01601f191660200190565b5f82601f8301126115f0575f5ffd5b81356116036115fe826115bb565b61158b565b818152846020838601011115611617575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215611646575f5ffd5b843561165181611511565b9350602085013561166181611511565b92506040850135915060608501356001600160401b03811115611682575f5ffd5b61168e878288016115e1565b91505092959194509250565b5f5f5f606084860312156116ac575f5ffd5b83356116b781611511565b95602085013595506040909401359392505050565b5f5f5f5f5f60a086880312156116e0575f5ffd5b85356116eb81611511565b94506020860135935060408601359250606086013561170981611511565b949793965091946080013592915050565b5f5f5f6060848603121561172c575f5ffd5b833561173781611511565b925060208401359150604084013561174e81611511565b809150509250925092565b6001600160a01b0391909116815260200190565b5f6020828403121561177d575f5ffd5b813561150a81611511565b5f82601f830112611797575f5ffd5b81356001600160401b038111156117b0576117b061154f565b8060051b6117c06020820161158b565b918252602081850181019290810190868411156117db575f5ffd5b6020860192505b838310156117fd5782358252602092830192909101906117e2565b9695505050505050565b5f5f5f5f5f60a0868803121561181b575f5ffd5b853561182681611511565b9450602086013561183681611511565b935060408601356001600160401b03811115611850575f5ffd5b61185c88828901611788565b93505060608601356001600160401b03811115611877575f5ffd5b61188388828901611788565b92505060808601356001600160401b0381111561189e575f5ffd5b6118aa888289016115e1565b9150509295509295909350565b5f5f5f5f608085870312156118ca575f5ffd5b84356118d581611511565b93506020850135925060408501356118ec81611511565b9396929550929360600135925050565b5f5f5f5f6080858703121561190f575f5ffd5b843561191a81611511565b93506020850135925060408501359150606085013561193881611511565b939692955090935050565b5f5f5f5f5f60a08688031215611957575f5ffd5b853561196281611511565b9450602086013561197281611511565b9350604086013592506060860135915060808601356001600160401b0381111561189e575f5ffd5b805180151581146119a9575f5ffd5b919050565b5f602082840312156119be575f5ffd5b61150a8261199a565b5f602082840312156119d7575f5ffd5b815161150a81611511565b5f602082840312156119f2575f5ffd5b5051919050565b5f5f60408385031215611a0a575f5ffd5b8251611a1581611511565b6020939093015192949293505050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561033257610332611a25565b5f82601f830112611a5b575f5ffd5b8151611a696115fe826115bb565b818152846020838601011115611a7d575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f60208284031215611aa9575f5ffd5b81516001600160401b03811115611abe575f5ffd5b820160808185031215611acf575f5ffd5b611ad7611563565b611ae08261199a565b8152602082015160ff81168114611af5575f5ffd5b602082015260408201516001600160401b03811115611b12575f5ffd5b611b1e86828501611a4c565b60408301525060608201516001600160401b03811115611b3c575f5ffd5b611b4886828501611a4c565b606083015250949350505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b604081525f611b966040830185611b56565b90508260208301529392505050565b602080825260149082015273496e73756666696369656e742062616c616e636560601b604082015260600190565b6020808252601a9082015279115e1a1a589a5d1a5bdb881b9bdd081e595d08195e1c1a5c995960321b604082015260600190565b8181038181111561033257610332611a25565b634e487b7160e01b5f52603260045260245ffd5b838152606060208201525f611c466060830185611b56565b9050826040830152949350505050565b6020808252600d908201526c2737ba103a34329037bbb732b960991b604082015260600190565b60208082526018908201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b604082015260600190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f90611d0190830184611b56565b979650505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906117fd90830184611b5656fe2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa35a2646970667358221220bc833278dc754367a7c6c8395ec4b2206d90e4aa1898f4d46f3b54730270b58c64736f6c634300081c0033"
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
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610557380380610557833981016040819052602b916074565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560a0565b80516001600160a01b0381168114606f575f5ffd5b919050565b5f5f604083850312156084575f5ffd5b608b83605a565b9150609760208401605a565b90509250929050565b6104aa806100ad5f395ff3fe608060405260043610610041575f3560e01c8063150b7a021461004c5780631afed87514610089578063abc8c7af146100aa578063d56d229d146100e0575f5ffd5b3661004857005b5f5ffd5b348015610057575f5ffd5b5061006b610066366004610363565b6100ff565b6040516001600160e01b031990911681526020015b60405180910390f35b348015610094575f5ffd5b506100a86100a33660046103fa565b610174565b005b3480156100b5575f5ffd5b505f546100c8906001600160a01b031681565b6040516001600160a01b039091168152602001610080565b3480156100eb575f5ffd5b506001546100c8906001600160a01b031681565b5f805460015460405163016295ab60e21b81526001600160a01b039283169263058a56ac9261013592911690889060040161041a565b5f604051808303815f87803b15801561014c575f5ffd5b505af115801561015e573d5f5f3e3d5ffd5b50630a85bd0160e11b9998505050505050505050565b5f5f5f9054906101000a90046001600160a01b03166001600160a01b0316633013ce296040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101c4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e89190610433565b6040516323b872dd60e01b8152336004820152306024820152604481018490529091506001600160a01b038216906323b872dd906064016020604051808303815f875af115801561023b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061025f9190610455565b505f5460405163095ea7b360e01b81526001600160a01b038381169263095ea7b3926102939290911690869060040161041a565b6020604051808303815f875af11580156102af573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102d39190610455565b505f5460018054604051636c4c557960e11b81526001600160a01b039182166004820152602481018790526044810192909252606482018590529091169063d898aaf2906084015f604051808303815f87803b158015610331575f5ffd5b505af1158015610343573d5f5f3e3d5ffd5b50505050505050565b6001600160a01b0381168114610360575f5ffd5b50565b5f5f5f5f5f60808688031215610377575f5ffd5b85356103828161034c565b945060208601356103928161034c565b93506040860135925060608601356001600160401b038111156103b3575f5ffd5b8601601f810188136103c3575f5ffd5b80356001600160401b038111156103d8575f5ffd5b8860208284010111156103e9575f5ffd5b959894975092955050506020019190565b5f5f6040838503121561040b575f5ffd5b50508035926020909101359150565b6001600160a01b03929092168252602082015260400190565b5f60208284031215610443575f5ffd5b815161044e8161034c565b9392505050565b5f60208284031215610465575f5ffd5b8151801515811461044e575f5ffdfea2646970667358221220019ce618dadc98764f1cb3cc85fcca659a0db94c26dd755a0c467ec654d1ab6e64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060408051602081019091525f8152339061002981610066565b506001600160a01b03811661005757604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006081610076565b50610219565b6002610072828261015f565b5050565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806100ef57607f821691505b60208210810361010d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561015a57805f5260205f20601f840160051c810160208510156101385750805b601f840160051c820191505b81811015610157575f8155600101610144565b50505b505050565b81516001600160401b03811115610178576101786100c7565b61018c8161018684546100db565b84610113565b6020601f8211600181146101be575f83156101a75750848201515b5f19600385901b1c1916600184901b178455610157565b5f84815260208120601f198516915b828110156101ed57878501518255602094850194600190920191016101cd565b508482101561020a57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b611264806102265f395ff3fe608060405234801561000f575f5ffd5b50600436106100a1575f3560e01c8062fdd58e146100a557806301ffc9a7146100cb5780630e89341c146100ee578063156e29f61461010e5780632eb2c2d6146101235780634e1273f414610136578063715018a6146101565780638da5cb5b1461015e578063a22cb46514610173578063e985e9c514610186578063f242432a14610199578063f2fde38b146101ac575b5f5ffd5b6100b86100b3366004610bfc565b6101bf565b6040519081526020015b60405180910390f35b6100de6100d9366004610c39565b6101e6565b60405190151581526020016100c2565b6101016100fc366004610c5b565b610235565b6040516100c29190610ca0565b61012161011c366004610cb2565b6102c7565b005b610121610131366004610e1d565b6102ee565b610149610144366004610ec9565b61034f565b6040516100c29190610fc4565b610121610415565b610166610428565b6040516100c29190610fd6565b610121610181366004610fea565b610437565b6100de610194366004611023565b610446565b6101216101a7366004611054565b610473565b6101216101ba3660046110a7565b6104c3565b5f818152602081815260408083206001600160a01b03861684529091529020545b92915050565b5f6001600160e01b03198216636cdb3d1360e11b148061021657506001600160e01b031982166303a24d0760e21b145b806101e057506301ffc9a760e01b6001600160e01b03198316146101e0565b606060028054610244906110c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610270906110c0565b80156102bb5780601f10610292576101008083540402835291602001916102bb565b820191905f5260205f20905b81548152906001019060200180831161029e57829003601f168201915b50505050509050919050565b6102cf610500565b6102e983838360405180602001604052805f815250610532565b505050565b336001600160a01b038616811480159061030f575061030d8682610446565b155b1561033a57808660405163711bec9160e11b81526004016103319291906110f8565b60405180910390fd5b6103478686868686610578565b505050505050565b606081518351146103805781518351604051635b05999160e01b815260048101929092526024820152604401610331565b5f83516001600160401b0381111561039a5761039a610ce2565b6040519080825280602002602001820160405280156103c3578160200160208202803683370190505b5090505f5b845181101561040d576103e86103de86836105dd565b6100b386846105dd565b8282815181106103fa576103fa611112565b60209081029190910101526001016103c8565b509392505050565b61041d610500565b6104265f6105eb565b565b6003546001600160a01b031690565b61044233838361063c565b5050565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b038616811480159061049457506104928682610446565b155b156104b657808660405163711bec9160e11b81526004016103319291906110f8565b61034786868686866106d0565b6104cb610500565b6001600160a01b0381166104f4575f604051631e4fbdf760e01b81526004016103319190610fd6565b6104fd816105eb565b50565b33610509610428565b6001600160a01b031614610426573360405163118cdaa760e01b81526004016103319190610fd6565b6001600160a01b03841661055b575f604051632bfa23e760e11b81526004016103319190610fd6565b5f5f6105678585610747565b915091506103475f8784848761076f565b6001600160a01b0384166105a1575f604051632bfa23e760e11b81526004016103319190610fd6565b6001600160a01b0385166105c9575f604051626a0d4560e21b81526004016103319190610fd6565b6105d6858585858561076f565b5050505050565b602090810291909101015190565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b038216610664575f60405162ced3e160e81b81526004016103319190610fd6565b6001600160a01b038381165f81815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166106f9575f604051632bfa23e760e11b81526004016103319190610fd6565b6001600160a01b038516610721575f604051626a0d4560e21b81526004016103319190610fd6565b5f5f61072d8585610747565b9150915061073e878784848761076f565b50505050505050565b6040805160018082526020820194909452808201938452606081019290925260808201905291565b61077b858585856107d2565b6001600160a01b038416156105d657825133906001036107c4575f6107a085826105dd565b90505f6107ad85826105dd565b90506107bd8389898585896109f4565b5050610347565b610347818787878787610b03565b80518251146108015781518151604051635b05999160e01b815260048101929092526024820152604401610331565b335f5b835181101561090b575f61081885836105dd565b90505f61082585846105dd565b90506001600160a01b038816156108bd575f828152602081815260408083206001600160a01b038c16845290915290205481811015610897576040516303dee4c560e01b81526001600160a01b038a166004820152602481018290526044810183905260648101849052608401610331565b5f838152602081815260408083206001600160a01b038d16845290915290209082900390555b6001600160a01b03871615610901575f828152602081815260408083206001600160a01b038b168452909152812080548392906108fb908490611126565b90915550505b5050600101610804565b508251600103610996575f61092084826105dd565b90505f61092d84826105dd565b9050856001600160a01b0316876001600160a01b0316846001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051610987929190918252602082015260400190565b60405180910390a450506105d6565b836001600160a01b0316856001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516109e5929190611145565b60405180910390a45050505050565b6001600160a01b0384163b156103475760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610a389089908990889088908890600401611172565b6020604051808303815f875af1925050508015610a72575060408051601f3d908101601f19168201909252610a6f918101906111b6565b60015b610ad0573d808015610a9f576040519150601f19603f3d011682016040523d82523d5f602084013e610aa4565b606091505b5080515f03610ac85784604051632bfa23e760e11b81526004016103319190610fd6565b805160208201fd5b6001600160e01b0319811663f23a6e6160e01b1461073e5784604051632bfa23e760e11b81526004016103319190610fd6565b6001600160a01b0384163b156103475760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610b4790899089908890889088906004016111d1565b6020604051808303815f875af1925050508015610b81575060408051601f3d908101601f19168201909252610b7e918101906111b6565b60015b610bae573d808015610a9f576040519150601f19603f3d011682016040523d82523d5f602084013e610aa4565b6001600160e01b0319811663bc197c8160e01b1461073e5784604051632bfa23e760e11b81526004016103319190610fd6565b80356001600160a01b0381168114610bf7575f5ffd5b919050565b5f5f60408385031215610c0d575f5ffd5b610c1683610be1565b946020939093013593505050565b6001600160e01b0319811681146104fd575f5ffd5b5f60208284031215610c49575f5ffd5b8135610c5481610c24565b9392505050565b5f60208284031215610c6b575f5ffd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610c546020830184610c72565b5f5f5f60608486031215610cc4575f5ffd5b610ccd84610be1565b95602085013595506040909401359392505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b0381118282101715610d1e57610d1e610ce2565b604052919050565b5f6001600160401b03821115610d3e57610d3e610ce2565b5060051b60200190565b5f82601f830112610d57575f5ffd5b8135610d6a610d6582610d26565b610cf6565b8082825260208201915060208360051b860101925085831115610d8b575f5ffd5b602085015b83811015610da8578035835260209283019201610d90565b5095945050505050565b5f82601f830112610dc1575f5ffd5b81356001600160401b03811115610dda57610dda610ce2565b610ded601f8201601f1916602001610cf6565b818152846020838601011115610e01575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f5f60a08688031215610e31575f5ffd5b610e3a86610be1565b9450610e4860208701610be1565b935060408601356001600160401b03811115610e62575f5ffd5b610e6e88828901610d48565b93505060608601356001600160401b03811115610e89575f5ffd5b610e9588828901610d48565b92505060808601356001600160401b03811115610eb0575f5ffd5b610ebc88828901610db2565b9150509295509295909350565b5f5f60408385031215610eda575f5ffd5b82356001600160401b03811115610eef575f5ffd5b8301601f81018513610eff575f5ffd5b8035610f0d610d6582610d26565b8082825260208201915060208360051b850101925087831115610f2e575f5ffd5b6020840193505b82841015610f5757610f4684610be1565b825260209384019390910190610f35565b945050505060208301356001600160401b03811115610f74575f5ffd5b610f8085828601610d48565b9150509250929050565b5f8151808452602084019350602083015f5b82811015610fba578151865260209586019590910190600101610f9c565b5093949350505050565b602081525f610c546020830184610f8a565b6001600160a01b0391909116815260200190565b5f5f60408385031215610ffb575f5ffd5b61100483610be1565b915060208301358015158114611018575f5ffd5b809150509250929050565b5f5f60408385031215611034575f5ffd5b61103d83610be1565b915061104b60208401610be1565b90509250929050565b5f5f5f5f5f60a08688031215611068575f5ffd5b61107186610be1565b945061107f60208701610be1565b9350604086013592506060860135915060808601356001600160401b03811115610eb0575f5ffd5b5f602082840312156110b7575f5ffd5b610c5482610be1565b600181811c908216806110d457607f821691505b6020821081036110f257634e487b7160e01b5f52602260045260245ffd5b50919050565b6001600160a01b0392831681529116602082015260400190565b634e487b7160e01b5f52603260045260245ffd5b808201808211156101e057634e487b7160e01b5f52601160045260245ffd5b604081525f6111576040830185610f8a565b82810360208401526111698185610f8a565b95945050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f906111ab90830184610c72565b979650505050505050565b5f602082840312156111c6575f5ffd5b8151610c5481610c24565b6001600160a01b0386811682528516602082015260a0604082018190525f906111fc90830186610f8a565b828103606084015261120e8186610f8a565b905082810360808401526112228185610c72565b9897505050505050505056fea2646970667358221220c4d5da3fcaa2c2dfcb329ff8e7f878d54501ecf79f16360fc7b569b50178d0e764736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051806040016040528060098152602001684d6f636b205553444360b81b815250604051806040016040528060058152602001646d5553444360d81b815250816003908161005f919061010c565b50600461006c828261010c565b5050506101c6565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061009c57607f821691505b6020821081036100ba57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561010757805f5260205f20601f840160051c810160208510156100e55750805b601f840160051c820191505b81811015610104575f81556001016100f1565b50505b505050565b81516001600160401b0381111561012557610125610074565b610139816101338454610088565b846100c0565b6020601f82116001811461016b575f83156101545750848201515b5f19600385901b1c1916600184901b178455610104565b5f84815260208120601f198516915b8281101561019a578785015182556020948501946001909201910161017a565b50848210156101b757868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b610737806101d35f395ff3fe608060405234801561000f575f5ffd5b506004361061008c575f3560e01c806306fdde0314610090578063095ea7b3146100ae57806318160ddd146100d157806323b872dd146100e3578063313ce567146100f657806340c10f191461010557806370a082311461011a57806395d89b4114610142578063a9059cbb1461014a578063dd62ed3e1461015d575b5f5ffd5b610098610170565b6040516100a59190610572565b60405180910390f35b6100c16100bc3660046105c2565b610200565b60405190151581526020016100a5565b6002545b6040519081526020016100a5565b6100c16100f13660046105ea565b610219565b604051601281526020016100a5565b6101186101133660046105c2565b61023c565b005b6100d5610128366004610624565b6001600160a01b03165f9081526020819052604090205490565b61009861024a565b6100c16101583660046105c2565b610259565b6100d561016b366004610644565b610266565b60606003805461017f90610675565b80601f01602080910402602001604051908101604052809291908181526020018280546101ab90610675565b80156101f65780601f106101cd576101008083540402835291602001916101f6565b820191905f5260205f20905b8154815290600101906020018083116101d957829003601f168201915b5050505050905090565b5f3361020d818585610290565b60019150505b92915050565b5f336102268582856102a2565b6102318585856102fc565b506001949350505050565b6102468282610359565b5050565b60606004805461017f90610675565b5f3361020d8185856102fc565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b61029d838383600161038d565b505050565b5f6102ad8484610266565b90505f198110156102f657818110156102e857828183604051637dc7a0d960e11b81526004016102df939291906106ad565b60405180910390fd5b6102f684848484035f61038d565b50505050565b6001600160a01b038316610325575f604051634b637e8f60e11b81526004016102df91906106ce565b6001600160a01b03821661034e575f60405163ec442f0560e01b81526004016102df91906106ce565b61029d83838361045f565b6001600160a01b038216610382575f60405163ec442f0560e01b81526004016102df91906106ce565b6102465f838361045f565b6001600160a01b0384166103b6575f60405163e602df0560e01b81526004016102df91906106ce565b6001600160a01b0383166103df575f604051634a1406b160e11b81526004016102df91906106ce565b6001600160a01b038085165f90815260016020908152604080832093871683529290522082905580156102f657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161045191815260200190565b60405180910390a350505050565b6001600160a01b038316610489578060025f82825461047e91906106e2565b909155506104e69050565b6001600160a01b0383165f90815260208190526040902054818110156104c85783818360405163391434e360e21b81526004016102df939291906106ad565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b03821661050257600280548290039055610520565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161056591815260200190565b60405180910390a3505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b03811681146105bd575f5ffd5b919050565b5f5f604083850312156105d3575f5ffd5b6105dc836105a7565b946020939093013593505050565b5f5f5f606084860312156105fc575f5ffd5b610605846105a7565b9250610613602085016105a7565b929592945050506040919091013590565b5f60208284031215610634575f5ffd5b61063d826105a7565b9392505050565b5f5f60408385031215610655575f5ffd5b61065e836105a7565b915061066c602084016105a7565b90509250929050565b600181811c9082168061068957607f821691505b6020821081036106a757634e487b7160e01b5f52602260045260245ffd5b50919050565b6001600160a01b039390931683526020830191909152604082015260600190565b6001600160a01b0391909116815260200190565b8082018082111561021357634e487b7160e01b5f52601160045260245ffdfea264697066735822122046d9e52b0303791257c7d5b6b4425e080bf35cbc17a7490112f59e76f33607f664736f6c634300081c0033"
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
              "indexed": false,
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
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
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
            }
          ],
          "name": "OfferRejected",
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
              "internalType": "address",
              "name": "buyer",
              "type": "address"
            },
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
        }
      ],
      "bytecode": "0x60a060405234801561000f575f5ffd5b5060405161134138038061134183398101604081905261002e91610043565b60015f556001600160a01b0316608052610070565b5f60208284031215610053575f5ffd5b81516001600160a01b0381168114610069575f5ffd5b9392505050565b60805161129e6100a35f395f8181607e01528181610277015281816108f601528181610ccd0152610e6e015261129e5ff3fe608060405234801561000f575f5ffd5b5060043610610060575f3560e01c8063058a56ac146100645780633013ce29146100795780633bbb2806146100b6578063cddc1bc1146100c9578063d3f494cc146100dc578063d898aaf214610156575b5f5ffd5b61007761007236600461107b565b610169565b005b6100a07f000000000000000000000000000000000000000000000000000000000000000081565b6040516100ad91906110a5565b60405180910390f35b6100776100c43660046110b9565b6102e3565b6100776100d73660046110b9565b610989565b61012c6100ea3660046110b9565b600160208181525f948552604080862082529385528385209052908352912080549181015460028201546003909201546001600160a01b039093169290919084565b604080516001600160a01b03909516855260208501939093529183015260608201526080016100ad565b6100776101643660046110f8565b610d3f565b610171610f59565b6001600160a01b038083165f908152600160208181526040808420868552825280842033808652908352938190208151608081018352815490961680875293810154928601929092526002820154908501526003015460608401521461021c5760405162461bcd60e51b815260206004820152601b60248201527a2cb7ba903234b2103737ba1036b0b5b2903a3434b99037b33332b960291b60448201526064015b60405180910390fd5b6001600160a01b038084165f90815260016020818152604080842087855282528084203380865290835290842080546001600160a01b0319168155928301849055600283018490556003909201929092559083015161029e927f0000000000000000000000000000000000000000000000000000000000000000169190610f81565b604051339083906001600160a01b038616907f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d0905f90a4506102df60015f55565b5050565b6102eb610f59565b6001600160a01b038084165f9081526001602081815260408084208785528252808420868616855282529283902083516080810185528154909516808652928101549185019190915260028101549284019290925260039091015460608301526103675760405162461bcd60e51b815260040161021390611130565b6001600160a01b038085165f8181526001602081815260408084208985528252808420958816845294905283822080546001600160a01b0319168155908101829055600281018290556003015590516301ffc9a760e01b81526301ffc9a7906103db906380ac58cd60e01b9060040161115f565b602060405180830381865afa1580156103f6573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061041a9190611174565b156106945780604001516001146104735760405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e742031006044820152606401610213565b6040516331a9108f60e11b815260048101849052849033906001600160a01b03831690636352211e90602401602060405180830381865afa1580156104ba573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104de919061119a565b6001600160a01b03161461052e5760405162461bcd60e51b8152602060048201526017602482015276165bdd48191bc81b9bdd081bdddb881d1a1a5cc8139195604a1b6044820152606401610213565b60405163e985e9c560e01b81526001600160a01b0382169063e985e9c59061055c90339030906004016111b5565b602060405180830381865afa158015610577573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061059b9190611174565b80610615575060405163020604bf60e21b81526004810185905230906001600160a01b0383169063081812fc90602401602060405180830381865afa1580156105e6573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061060a919061119a565b6001600160a01b0316145b6106315760405162461bcd60e51b8152600401610213906111cf565b8151604051632142170760e11b81526001600160a01b038316916342842e0e916106619133918990600401611214565b5f604051808303815f87803b158015610678575f5ffd5b505af115801561068a573d5f5f3e3d5ffd5b50505050506108e3565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a7906106c790636cdb3d1360e11b9060040161115f565b602060405180830381865afa1580156106e2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107069190611174565b156108a4576040808201519051627eeac760e11b81528591906001600160a01b0383169062fdd58e9061073f9033908990600401611238565b602060405180830381865afa15801561075a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061077e9190611251565b10156107c35760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606401610213565b60405163e985e9c560e01b81526001600160a01b0382169063e985e9c5906107f190339030906004016111b5565b602060405180830381865afa15801561080c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108309190611174565b61084c5760405162461bcd60e51b8152600401610213906111cf565b81516040808401519051637921219560e11b81523360048201526001600160a01b03928316602482015260448101879052606481019190915260a060848201525f60a48201529082169063f242432a9060c401610661565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606401610213565b602081015161091e906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016903390610f81565b80516020808301516040808501518151338152938401929092528201526001600160a01b03918216918591908716907f18759ab4f7dda6cfd8542baf23d265b852ceaf8df3487c95641339a456bbd5099060600160405180910390a45061098460015f55565b505050565b610991610f59565b6001600160a01b038084165f908152600160208181526040808420878552825280842086861685528252928390208351608081018552815490951680865292810154918501919091526002810154928401929092526003909101546060830152610a0d5760405162461bcd60e51b815260040161021390611130565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a790610a40906380ac58cd60e01b9060040161115f565b602060405180830381865afa158015610a5b573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a7f9190611174565b15610b40576040516331a9108f60e11b81526004810184905233906001600160a01b03861690636352211e90602401602060405180830381865afa158015610ac9573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aed919061119a565b6001600160a01b031614610b3b5760405162461bcd60e51b815260206004820152601560248201527413db9b1e481bdddb995c8818d85b881c995a9958dd605a1b6044820152606401610213565b610c71565b6040516301ffc9a760e01b81526001600160a01b038516906301ffc9a790610b7390636cdb3d1360e11b9060040161115f565b602060405180830381865afa158015610b8e573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bb29190611174565b156108a457604051627eeac760e11b81525f906001600160a01b0386169062fdd58e90610be59033908890600401611238565b602060405180830381865afa158015610c00573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c249190611251565b11610b3b5760405162461bcd60e51b815260206004820152601d60248201527f4f6e6c7920746f6b656e20686f6c646572732063616e2072656a6563740000006044820152606401610213565b6001600160a01b038085165f908152600160208181526040808420888552825280842087861685528252832080546001600160a01b031916815591820183905560028201839055600390910191909155825190830151610cf4927f0000000000000000000000000000000000000000000000000000000000000000169190610f81565b816001600160a01b031683856001600160a01b03167f4fdead5e3e5c28edddadbd84fdd82bec0667fea0ad948684c177659f7454d6e160405160405180910390a45061098460015f55565b610d47610f59565b5f8111610da15760405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608401610213565b5f8211610df05760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610213565b6001600160a01b038481165f90815260016020908152604080832087845282528083203384529091529020541615610e615760405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606401610213565b610e966001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084610fd9565b6040805160808101825233808252602080830185815283850187815242606086019081526001600160a01b038b81165f81815260018088528a82208e835288528a82208983528852908a9020985189546001600160a01b03191693169290921788559351908701559051600286015551600390940193909355835185815290810186905290928692917f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf7910160405180910390a4610f5360015f55565b50505050565b60025f5403610f7b57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b61098483846001600160a01b031663a9059cbb8585604051602401610fa7929190611238565b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611001565b610f5384856001600160a01b03166323b872dd868686604051602401610fa793929190611214565b5f5f60205f8451602086015f885af180611020576040513d5f823e3d81fd5b50505f513d91508115611037578060011415611044565b6001600160a01b0384163b155b15610f535783604051635274afe760e01b815260040161021391906110a5565b6001600160a01b0381168114611078575f5ffd5b50565b5f5f6040838503121561108c575f5ffd5b823561109781611064565b946020939093013593505050565b6001600160a01b0391909116815260200190565b5f5f5f606084860312156110cb575f5ffd5b83356110d681611064565b92506020840135915060408401356110ed81611064565b809150509250925092565b5f5f5f5f6080858703121561110b575f5ffd5b843561111681611064565b966020860135965060408601359560600135945092505050565b6020808252601590820152744e6f2076616c6964206f666665722065786973747360581b604082015260600190565b6001600160e01b031991909116815260200190565b5f60208284031215611184575f5ffd5b81518015158114611193575f5ffd5b9392505050565b5f602082840312156111aa575f5ffd5b815161119381611064565b6001600160a01b0392831681529116602082015260400190565b60208082526025908201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656040820152641c8813919560da1b606082015260800190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b5f60208284031215611261575f5ffd5b505191905056fea2646970667358221220275f6eb1c6232c2bdfa9612dd5e39b5c75d6246c988e47706e3338fd81e7df0864736f6c634300081c0033"
    },
    "Nexus": {
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
            },
            {
              "internalType": "uint256",
              "name": "_maxSupply",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_campaignId",
              "type": "string"
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
              "name": "bragToken",
              "type": "address"
            }
          ],
          "name": "BragTokenUpdated",
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
              "name": "maxSupply",
              "type": "uint256"
            }
          ],
          "name": "MaxSupplyUpdated",
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
              "indexed": false,
              "internalType": "uint256",
              "name": "minimumDonation",
              "type": "uint256"
            }
          ],
          "name": "MinimumDonationUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "receiptContract",
              "type": "address"
            }
          ],
          "name": "ReceiptContractUpdated",
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
              "name": "treasury",
              "type": "address"
            }
          ],
          "name": "TreasuryUpdated",
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
          "inputs": [],
          "name": "campaignId",
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
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051613b82380380613b8283398101604081905261002e916101c0565b60405180604001604052806007815260200166109c9859d3919560ca1b8152506040518060400160405280600781526020016610949051d3919560ca1b8152508686868484815f90816100819190610329565b50600161008e8282610329565b50506001600855506100a05f846100e4565b50600a80546001600160a01b0319166001600160a01b039390931692909217909155600b55505050601082905560116100d98282610329565b5050505050506103e3565b5f8281526007602090815260408083206001600160a01b038516845290915281205460ff16610188575f8381526007602090815260408083206001600160a01b03861684529091529020805460ff191660011790556101403390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161018b565b505f5b92915050565b80516001600160a01b03811681146101a7575f5ffd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f5f60a086880312156101d4575f5ffd5b6101dd86610191565b94506101eb60208701610191565b60408701516060880151608089015192965090945092506001600160401b03811115610215575f5ffd5b8601601f81018813610225575f5ffd5b80516001600160401b0381111561023e5761023e6101ac565b604051601f8201601f19908116603f011681016001600160401b038111828210171561026c5761026c6101ac565b6040528181528282016020018a1015610283575f5ffd5b8160208401602083015e5f602083830101528093505050509295509295909350565b600181811c908216806102b957607f821691505b6020821081036102d757634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561032457805f5260205f20601f840160051c810160208510156103025750805b601f840160051c820191505b81811015610321575f815560010161030e565b50505b505050565b81516001600160401b03811115610342576103426101ac565b6103568161035084546102a5565b846102dd565b6020601f821160018114610388575f83156103715750848201515b5f19600385901b1c1916600184901b178455610321565b5f84815260208120601f198516915b828110156103b75787850151825560209485019460019092019101610397565b50848210156103d457868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b613792806103f05f395ff3fe6080604052600436106101a9575f3560e01c806301ffc9a7146101ad57806306fdde03146101e1578063081812fc14610202578063095ea7b31461022e5780630fd973ce1461024f5780631653441c1461026257806318160ddd1461027557806319bcef6d1461029357806323b872dd146102b2578063248a9ca3146102d15780632eb9313e146102f05780632f2ff15d1461030f57806336568abe1461032e57806342842e0e1461034d57806361d027b31461036c5780636352211e1461038b57806364cb7e9c146103aa5780636f8b44b0146103c957806370a08231146103e857806383943dc8146104075780638ed5b0fc1461042657806391d148541461043a57806395d89b411461045957806396d8f4f31461046d578063a217fddf14610482578063a22cb46514610495578063a6719b3a146104b4578063b88d4fde146104c7578063c6317247146104e6578063c87b56dd14610505578063d3933c1c14610524578063d435b3a314610537578063d547741f14610556578063d5abeb0114610575578063da183afb1461058a578063e985e9c5146105b5578063f0f44260146105d4575b5f5ffd5b3480156101b8575f5ffd5b506101cc6101c73660046129bf565b6105f3565b60405190151581526020015b60405180910390f35b3480156101ec575f5ffd5b506101f5610603565b6040516101d89190612a08565b34801561020d575f5ffd5b5061022161021c366004612a1a565b610692565b6040516101d89190612a31565b348015610239575f5ffd5b5061024d610248366004612a59565b6106a6565b005b61024d61025d366004612ac7565b6106b5565b61024d610270366004612b47565b6106dc565b348015610280575f5ffd5b506009545b6040519081526020016101d8565b34801561029e575f5ffd5b5061024d6102ad366004612bb1565b610702565b3480156102bd575f5ffd5b5061024d6102cc366004612bcc565b610756565b3480156102dc575f5ffd5b506102856102eb366004612a1a565b6107e2565b3480156102fb575f5ffd5b5061024d61030a366004612bb1565b6107f6565b34801561031a575f5ffd5b5061024d610329366004612c0a565b61084a565b348015610339575f5ffd5b5061024d610348366004612c0a565b610866565b348015610358575f5ffd5b5061024d610367366004612bcc565b61089e565b348015610377575f5ffd5b50600a54610221906001600160a01b031681565b348015610396575f5ffd5b506102216103a5366004612a1a565b6108b8565b3480156103b5575f5ffd5b506101f56103c4366004612a1a565b6108c2565b3480156103d4575f5ffd5b5061024d6103e3366004612a1a565b610959565b3480156103f3575f5ffd5b50610285610402366004612bb1565b6109f2565b348015610412575f5ffd5b50600d54610221906001600160a01b031681565b348015610431575f5ffd5b506101f5610a37565b348015610445575f5ffd5b506101cc610454366004612c0a565b610a44565b348015610464575f5ffd5b506101f5610a6e565b348015610478575f5ffd5b50610285600b5481565b34801561048d575f5ffd5b506102855f81565b3480156104a0575f5ffd5b5061024d6104af366004612c4c565b610a7d565b61024d6104c2366004612c7f565b610a88565b3480156104d2575f5ffd5b5061024d6104e1366004612da0565b610ab0565b3480156104f1575f5ffd5b5061024d610500366004612a1a565b610ac8565b348015610510575f5ffd5b506101f561051f366004612a1a565b610b07565b61024d610532366004612e47565b610e32565b348015610542575f5ffd5b50600c54610221906001600160a01b031681565b348015610561575f5ffd5b5061024d610570366004612c0a565b610e48565b348015610580575f5ffd5b5061028560105481565b348015610595575f5ffd5b506102856105a4366004612a1a565b600e6020525f908152604090205481565b3480156105c0575f5ffd5b506101cc6105cf366004612ec5565b610e64565b3480156105df575f5ffd5b5061024d6105ee366004612bb1565b610e91565b5f6105fd82610f36565b92915050565b60605f805461061190612ef1565b80601f016020809104026020016040519081016040528092919081815260200182805461063d90612ef1565b80156106885780601f1061065f57610100808354040283529160200191610688565b820191905f5260205f20905b81548152906001019060200180831161066b57829003601f168201915b5050505050905090565b5f61069c82610f5a565b506105fd82610f91565b6106b1828233610fab565b5050565b6106bd610fb8565b6106cb85858585855f610fe2565b6106d56001600855565b5050505050565b6106e4610fb8565b6106f233858585855f610fe2565b6106fc6001600855565b50505050565b5f61070c8161104c565b600c80546001600160a01b0319166001600160a01b0384169081179091556040517ffeb2ed25b09ffb1e3c83898cbb83fb3fcf1846611528f60bc6a674791bbf13f9905f90a25050565b6001600160a01b038216610788575f604051633250574960e11b815260040161077f9190612a31565b60405180910390fd5b5f610794838333611059565b9050836001600160a01b0316816001600160a01b0316146106fc576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161077f565b5f9081526007602052604090206001015490565b5f6108008161104c565b600d80546001600160a01b0319166001600160a01b0384169081179091556040517f761214bc1f58462d6db97586e5200811c6120d5c35b37c37685d8f730790e518905f90a25050565b610853826107e2565b61085c8161104c565b6106fc8383611148565b6001600160a01b038116331461088f5760405163334bd91960e11b815260040160405180910390fd5b61089982826111d9565b505050565b61089983838360405180602001604052805f815250610ab0565b5f6105fd82610f5a565b600f6020525f9081526040902080546108da90612ef1565b80601f016020809104026020016040519081016040528092919081815260200182805461090690612ef1565b80156109515780601f1061092857610100808354040283529160200191610951565b820191905f5260205f20905b81548152906001019060200180831161093457829003601f168201915b505050505081565b5f6109638161104c565b6009548210156109b55760405162461bcd60e51b815260206004820152601f60248201527f4d617820737570706c792062656c6f772063757272656e7420737570706c7900604482015260640161077f565b60108290556040518281527f7810bd47de260c3e9ee10061cf438099dd12256c79485f12f94dbccc981e806c906020015b60405180910390a15050565b5f6001600160a01b038216610a1c575f6040516322718ad960e21b815260040161077f9190612a31565b506001600160a01b03165f9081526003602052604090205490565b601180546108da90612ef1565b5f9182526007602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606001805461061190612ef1565b6106b1338383611244565b610a90610fb8565b610a9e868686868686610fe2565b610aa86001600855565b505050505050565b610abb848484610756565b6106fc33858585856112d9565b5f610ad28161104c565b600b8290556040518281527f6c2aee5584f6ad7146d1ce25d800b9ee517cecee83447ff8b6b8e01792e83e58906020016109e6565b6060610b1282610f5a565b505f828152600e60209081526040808320548151928301909152918152600c546001600160a01b031615610bb457600c5460405163b63e6ac360e01b8152600481018490526001600160a01b039091169063b63e6ac3906024015f60405180830381865afa925050508015610ba857506040513d5f823e601f3d908101601f19168201604052610ba59190810190612f29565b60015b15610bb4576060015190505b5f848152600f60205260408120805460609283929091610bd390612ef1565b80601f0160208091040260200160405190810160405280929190818152602001828054610bff90612ef1565b8015610c4a5780601f10610c2157610100808354040283529160200191610c4a565b820191905f5260205f20905b815481529060010190602001808311610c2d57829003601f168201915b505050505090505f81511115610cab57610c63816113e6565b15610ca357809150610c7d610c788886611615565b61168a565b604051602001610c8d919061300f565b6040516020818303038152906040529250610d3c565b809250610d3c565b5f610cb5886116b0565b805190915015610d0b57610cc8816113e6565b15610d0357809250610cdd610c788987611615565b604051602001610ced919061300f565b6040516020818303038152906040529350610d3a565b809350610d3a565b610d18610c788987611615565b604051602001610d28919061300f565b60405160208183030381529060405293505b505b60408051602081019091525f8152825115610d745782604051602001610d62919061303d565b60405160208183030381529060405290505b5f610e02610d80610603565b610d898b6117bb565b5f895111610da55760405180602001604052805f815250610dce565b610dae8961184a565b604051602001610dbe9190613066565b6040516020818303038152906040525b8886610dd98c61184a565b604051602001610dee9695949392919061307c565b60405160208183030381529060405261168a565b905080604051602001610e15919061318d565b604051602081830303815290604052975050505050505050919050565b610e3a610fb8565b6106cb338686868686610fe2565b610e51826107e2565b610e5a8161104c565b6106fc83836111d9565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f610e9b8161104c565b6001600160a01b038216610eec5760405162461bcd60e51b8152602060048201526018602482015277496e76616c6964207472656173757279206164647265737360401b604482015260640161077f565b600a80546001600160a01b0319166001600160a01b0384169081179091556040517f7dae230f18360d76a040c81f050aa14eb9d6dc7901b20fc5d855e2a20fe814d1905f90a25050565b5f6001600160e01b03198216637965db0b60e01b14806105fd57506105fd82611a36565b5f5f610f6583611a5a565b90506001600160a01b0381166105fd57604051637e27328960e01b81526004810184905260240161077f565b5f908152600460205260409020546001600160a01b031690565b6108998383836001611a74565b600260085403610fdb57604051633ee5aeb560e01b815260040160405180910390fd5b6002600855565b6010541580610ff45750601054600954105b61103e5760405162461bcd60e51b815260206004820152601b60248201527a10d85b5c185a59db881b585e081cdd5c1c1b1e481c995858da1959602a1b604482015260640161077f565b610aa8868686868686611b6f565b6110568133611e81565b50565b5f5f61106484611a5a565b90506001600160a01b0383161561108057611080818486611eac565b6001600160a01b038116156110ba5761109b5f855f5f611a74565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156110e8576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a490505b9392505050565b5f6111538383610a44565b6111d2575f8381526007602090815260408083206001600160a01b03861684529091529020805460ff1916600117905561118a3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016105fd565b505f6105fd565b5f6111e48383610a44565b156111d2575f8381526007602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016105fd565b6001600160a01b03821661126d5781604051630b61174360e31b815260040161077f9190612a31565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b156106d557604051630a85bd0160e11b81526001600160a01b0384169063150b7a029061131b9088908890879087906004016131be565b6020604051808303815f875af1925050508015611355575060408051601f3d908101601f19168201909252611352918101906131fa565b60015b6113b3573d808015611382576040519150601f19603f3d011682016040523d82523d5f602084013e611387565b606091505b5080515f036113ab5783604051633250574960e11b815260040161077f9190612a31565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b14610aa85783604051633250574960e11b815260040161077f9190612a31565b5f5f829050600b815110156113fd57505f92915050565b805f8151811061140f5761140f613215565b6020910101516001600160f81b031916601960fa1b14801561145657508060018151811061143f5761143f613215565b6020910101516001600160f81b031916606160f81b145b801561148757508060028151811061147057611470613215565b6020910101516001600160f81b031916601d60fa1b145b80156114b85750806003815181106114a1576114a1613215565b6020910101516001600160f81b031916606160f81b145b80156114e95750806004815181106114d2576114d2613215565b6020910101516001600160f81b031916601d60f91b145b801561151a57508060058151811061150357611503613215565b6020910101516001600160f81b031916606160f81b145b801561154b57508060068151811061153457611534613215565b6020910101516001600160f81b031916607560f81b145b801561157c57508060078151811061156557611565613215565b6020910101516001600160f81b031916601960fa1b145b80156115ad57508060088151811061159657611596613215565b6020910101516001600160f81b031916606960f81b145b80156115de5750806009815181106115c7576115c7613215565b6020910101516001600160f81b031916606f60f81b145b8015611141575080600a815181106115f8576115f8613215565b6020910101516001600160f81b031916602f60f81b149392505050565b60605f5f83511161165657611628610603565b611631856117bb565b604051602001611642929190613229565b60405160208183030381529060405261165f565b61165f83611f02565b9050806040516020016116729190613252565b60405160208183030381529060405291505092915050565b60606105fd8260405180606001604052806040815260200161371d604091396001612560565b60606116bb82610f5a565b505f82815260066020526040812080546116d490612ef1565b80601f016020809104026020016040519081016040528092919081815260200182805461170090612ef1565b801561174b5780601f106117225761010080835404028352916020019161174b565b820191905f5260205f20905b81548152906001019060200180831161172e57829003601f168201915b505050505090505f61176760408051602081019091525f815290565b905080515f03611778575092915050565b8151156117aa578082604051602001611792929190613423565b60405160208183030381529060405292505050919050565b6117b3846126d9565b949350505050565b60605f6117c783612749565b60010190505f816001600160401b038111156117e5576117e5612d0e565b6040519080825280601f01601f19166020018201604052801561180f576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461181957509392505050565b805160609082905f805b828110156118ce5783818151811061186e5761186e613215565b6020910101516001600160f81b031916601160f91b14806118b3575083818151811061189c5761189c613215565b6020910101516001600160f81b031916601760fa1b145b156118c657816118c28161344b565b9250505b600101611854565b50805f036118df5750929392505050565b5f6118ea8284613463565b6001600160401b0381111561190157611901612d0e565b6040519080825280601f01601f19166020018201604052801561192b576020820181803683370190505b5090505f805b84811015611a2a5785818151811061194b5761194b613215565b6020910101516001600160f81b031916601160f91b1480611990575085818151811061197957611979613215565b6020910101516001600160f81b031916601760fa1b145b156119ce57601760fa1b83836119a58161344b565b9450815181106119b7576119b7613215565b60200101906001600160f81b03191690815f1a9053505b8581815181106119e0576119e0613215565b01602001516001600160f81b03191683836119fa8161344b565b945081518110611a0c57611a0c613215565b60200101906001600160f81b03191690815f1a905350600101611931565b50909695505050505050565b5f6001600160e01b03198216632483248360e11b14806105fd57506105fd8261281e565b5f908152600260205260409020546001600160a01b031690565b8080611a8857506001600160a01b03821615155b15611b40575f611a9784610f5a565b90506001600160a01b03831615801590611ac35750826001600160a01b0316816001600160a01b031614155b8015611ad65750611ad48184610e64565b155b15611af6578260405163a9fbf51f60e01b815260040161077f9190612a31565b8115611b3e5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b600c546001600160a01b0316611bc25760405162461bcd60e51b8152602060048201526018602482015277149958d95a5c1d0818dbdb9d1c9858dd081b9bdd081cd95d60421b604482015260640161077f565b600b54341015611c0d5760405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b604482015260640161077f565b600980545f9182611c1d8361344b565b9190505590508115611c47575f818152600f60205260409020611c418486836134ce565b50611c8c565b8215611c8c57611c8c8185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061286d92505050565b600c546040516334ff261960e21b81525f916001600160a01b03169063d3fc986490611cc290339034908c908c906004016135aa565b6020604051808303815f875af1158015611cde573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d0291906135d1565b5f838152600e602052604090208190559050611d1e88836128b5565b600d546001600160a01b031615611d8f57600d546040516340c10f1960e01b81526001600160a01b03909116906340c10f1990611d6190339034906004016135e8565b5f604051808303815f87803b158015611d78575f5ffd5b505af1158015611d8a573d5f5f3e3d5ffd5b505050505b600a546040515f916001600160a01b03169034908381818185875af1925050503d805f8114611dd9576040519150601f19603f3d011682016040523d82523d5f602084013e611dde565b606091505b5050905080611e2d5760405162461bcd60e51b815260206004820152601b60248201527a151c985b9cd9995c881d1bc81d1c99585cdd5c9e4819985a5b1959602a1b604482015260640161077f565b336001600160a01b03167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858c8c604051611e6e959493929190613601565b60405180910390a2505050505050505050565b611e8b8282610a44565b6106b157808260405163e2517d3f60e01b815260040161077f9291906135e8565b611eb78383836128ce565b610899576001600160a01b038316611ee557604051637e27328960e01b81526004810182905260240161077f565b818160405163177e802f60e01b815260040161077f9291906135e8565b805160609082905f805b8281101561203457838181518110611f2657611f26613215565b01602001516001600160f81b031916601360f91b03611f5157611f4a600483613463565b915061202c565b838181518110611f6357611f63613215565b01602001516001600160f81b031916600f60fa1b03611f8757611f4a600383613463565b838181518110611f9957611f99613215565b01602001516001600160f81b031916601f60f91b03611fbd57611f4a600383613463565b838181518110611fcf57611fcf613215565b01602001516001600160f81b031916601160f91b03611ff357611f4a600583613463565b83818151811061200557612005613215565b01602001516001600160f81b031916602760f81b0361202c57612029600583613463565b91505b600101611f0c565b50805f036120455750929392505050565b5f6120508284613463565b6001600160401b0381111561206757612067612d0e565b6040519080825280601f01601f191660200182016040528015612091576020820181803683370190505b5090505f805b84811015611a2a578581815181106120b1576120b1613215565b01602001516001600160f81b031916601360f91b036121e757601360f91b83836120da8161344b565b9450815181106120ec576120ec613215565b60200101906001600160f81b03191690815f1a905350606160f81b83836121128161344b565b94508151811061212457612124613215565b60200101906001600160f81b03191690815f1a905350606d60f81b838361214a8161344b565b94508151811061215c5761215c613215565b60200101906001600160f81b03191690815f1a905350600760fc1b83836121828161344b565b94508151811061219457612194613215565b60200101906001600160f81b03191690815f1a905350603b60f81b83836121ba8161344b565b9450815181106121cc576121cc613215565b60200101906001600160f81b03191690815f1a905350612558565b8581815181106121f9576121f9613215565b01602001516001600160f81b031916600f60fa1b0361229257601360f91b83836122228161344b565b94508151811061223457612234613215565b60200101906001600160f81b03191690815f1a905350601b60fa1b838361225a8161344b565b94508151811061226c5761226c613215565b60200101906001600160f81b03191690815f1a905350601d60fa1b83836121828161344b565b8581815181106122a4576122a4613215565b01602001516001600160f81b031916601f60f91b0361230557601360f91b83836122cd8161344b565b9450815181106122df576122df613215565b60200101906001600160f81b03191690815f1a905350606760f81b838361225a8161344b565b85818151811061231757612317613215565b01602001516001600160f81b031916601160f91b036123e857601360f91b83836123408161344b565b94508151811061235257612352613215565b60200101906001600160f81b03191690815f1a905350607160f81b83836123788161344b565b94508151811061238a5761238a613215565b60200101906001600160f81b03191690815f1a905350607560f81b83836123b08161344b565b9450815181106123c2576123c2613215565b60200101906001600160f81b03191690815f1a905350606f60f81b838361225a8161344b565b8581815181106123fa576123fa613215565b01602001516001600160f81b031916602760f81b0361250357601360f91b83836124238161344b565b94508151811061243557612435613215565b60200101906001600160f81b03191690815f1a905350606160f81b838361245b8161344b565b94508151811061246d5761246d613215565b60200101906001600160f81b03191690815f1a905350600760fc1b83836124938161344b565b9450815181106124a5576124a5613215565b60200101906001600160f81b03191690815f1a905350606f60f81b83836124cb8161344b565b9450815181106124dd576124dd613215565b60200101906001600160f81b03191690815f1a905350607360f81b83836121828161344b565b85818151811061251557612515613215565b01602001516001600160f81b031916838361252f8161344b565b94508151811061254157612541613215565b60200101906001600160f81b03191690815f1a9053505b600101612097565b606083515f0361257e575060408051602081019091525f8152611141565b5f826125ae576003855160046125949190613631565b61259f906002613463565b6125a99190613648565b6125d3565b6003855160026125be9190613463565b6125c89190613648565b6125d3906004613631565b90505f816001600160401b038111156125ee576125ee612d0e565b6040519080825280601f01601f191660200182016040528015612618576020820181803683370190505b509050600185016020820187885189016020810180515f82525b8284101561268d576003840193508351603f8160121c168701518653600186019550603f81600c1c168701518653600186019550603f8160061c168701518653600186019550603f8116870151865350600185019450612632565b905250508515611a2a576003885106600181146126b157600281146126c4576126cc565b603d6001830353603d60028303536126cc565b603d60018303535b5050909695505050505050565b60606126e482610f5a565b505f6126fa60408051602081019091525f815290565b90505f8151116127185760405180602001604052805f815250611141565b80612722846117bb565b604051602001612733929190613423565b6040516020818303038152906040529392505050565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106127875772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6904ee2d6d415b85acef8160201b83106127b1576904ee2d6d415b85acef8160201b830492506020015b662386f26fc1000083106127cf57662386f26fc10000830492506010015b6305f5e10083106127e7576305f5e100830492506008015b61271083106127fb57612710830492506004015b6064831061280d576064830492506002015b600a83106105fd5760010192915050565b5f6001600160e01b031982166380ac58cd60e01b148061284e57506001600160e01b03198216635b5e139f60e01b145b806105fd57506301ffc9a760e01b6001600160e01b03198316146105fd565b5f8281526006602052604090206128848282613667565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7906020016109e6565b6106b1828260405180602001604052805f815250612932565b5f6001600160a01b038316158015906117b35750826001600160a01b0316846001600160a01b0316148061290757506129078484610e64565b806117b35750826001600160a01b031661292083610f91565b6001600160a01b031614949350505050565b61293c8383612949565b610899335f8585856112d9565b6001600160a01b038216612972575f604051633250574960e11b815260040161077f9190612a31565b5f61297e83835f611059565b90506001600160a01b03811615610899575f6040516339e3563760e11b815260040161077f9190612a31565b6001600160e01b031981168114611056575f5ffd5b5f602082840312156129cf575f5ffd5b8135611141816129aa565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61114160208301846129da565b5f60208284031215612a2a575f5ffd5b5035919050565b6001600160a01b0391909116815260200190565b6001600160a01b0381168114611056575f5ffd5b5f5f60408385031215612a6a575f5ffd5b8235612a7581612a45565b946020939093013593505050565b5f5f83601f840112612a93575f5ffd5b5081356001600160401b03811115612aa9575f5ffd5b602083019150836020828501011115612ac0575f5ffd5b9250929050565b5f5f5f5f5f60608688031215612adb575f5ffd5b8535612ae681612a45565b945060208601356001600160401b03811115612b00575f5ffd5b612b0c88828901612a83565b90955093505060408601356001600160401b03811115612b2a575f5ffd5b612b3688828901612a83565b969995985093965092949392505050565b5f5f5f5f60408587031215612b5a575f5ffd5b84356001600160401b03811115612b6f575f5ffd5b612b7b87828801612a83565b90955093505060208501356001600160401b03811115612b99575f5ffd5b612ba587828801612a83565b95989497509550505050565b5f60208284031215612bc1575f5ffd5b813561114181612a45565b5f5f5f60608486031215612bde575f5ffd5b8335612be981612a45565b92506020840135612bf981612a45565b929592945050506040919091013590565b5f5f60408385031215612c1b575f5ffd5b823591506020830135612c2d81612a45565b809150509250929050565b80358015158114612c47575f5ffd5b919050565b5f5f60408385031215612c5d575f5ffd5b8235612c6881612a45565b9150612c7660208401612c38565b90509250929050565b5f5f5f5f5f5f60808789031215612c94575f5ffd5b8635612c9f81612a45565b955060208701356001600160401b03811115612cb9575f5ffd5b612cc589828a01612a83565b90965094505060408701356001600160401b03811115612ce3575f5ffd5b612cef89828a01612a83565b9094509250612d02905060608801612c38565b90509295509295509295565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b0381118282101715612d4457612d44612d0e565b60405290565b604051601f8201601f191681016001600160401b0381118282101715612d7257612d72612d0e565b604052919050565b5f6001600160401b03821115612d9257612d92612d0e565b50601f01601f191660200190565b5f5f5f5f60808587031215612db3575f5ffd5b8435612dbe81612a45565b93506020850135612dce81612a45565b92506040850135915060608501356001600160401b03811115612def575f5ffd5b8501601f81018713612dff575f5ffd5b8035612e12612e0d82612d7a565b612d4a565b818152886020838501011115612e26575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f5f5f5f60608688031215612e5b575f5ffd5b85356001600160401b03811115612e70575f5ffd5b612e7c88828901612a83565b90965094505060208601356001600160401b03811115612e9a575f5ffd5b612ea688828901612a83565b9094509250612eb9905060408701612c38565b90509295509295909350565b5f5f60408385031215612ed6575f5ffd5b8235612ee181612a45565b91506020830135612c2d81612a45565b600181811c90821680612f0557607f821691505b602082108103612f2357634e487b7160e01b5f52602260045260245ffd5b50919050565b5f60208284031215612f39575f5ffd5b81516001600160401b03811115612f4e575f5ffd5b820160808185031215612f5f575f5ffd5b612f67612d22565b8151612f7281612a45565b8152602082810151908201526040808301519082015260608201516001600160401b03811115612fa0575f5ffd5b80830192505084601f830112612fb4575f5ffd5b8151612fc2612e0d82612d7a565b818152866020838601011115612fd6575f5ffd5b8160208501602083015e5f918101602001919091526060820152949350505050565b5f81518060208401855e5f93019283525090919050565b7919185d184e9a5b5859d94bdcdd99cade1b5b0ed8985cd94d8d0b60321b81525f611141601a830184612ff8565b741116101130b734b6b0ba34b7b72fbab936111d101160591b81525f6111416015830184612ff8565b6101d160f51b81525f6111416002830184612ff8565b693d913730b6b2911d101160b11b81525f61309a600a830189612ff8565b61202360f01b81526130af6002820189612ff8565b90507f222c20226465736372697074696f6e223a2022436f6d6d656d6f72617469766581526c08111bdb985d1a5bdb88139195609a1b60208201526130f7602d820188612ff8565b6c1116101134b6b0b3b2911d101160991b8152905061312261311c600d830188612ff8565b86612ff8565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a815275101126b2b9b9b0b3b2911610113b30b63ab2911d101160511b602082015290506131736036820185612ff8565b63227d5d7d60e01b81526004019998505050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081525f611141601d830184612ff8565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906131f0908301846129da565b9695505050505050565b5f6020828403121561320a575f5ffd5b8151611141816129aa565b634e487b7160e01b5f52603260045260245ffd5b5f6132348285612ff8565b61202360f01b81526132496002820185612ff8565b95945050505050565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323081527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d223020302033353020333530604082015261111f60f11b60608201527f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e7460628201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060828201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60a282015261329f60f11b60c28201527f3c726563742077696474683d223130302522206865696768743d22313030252260c482015271103334b6361e91119b199b1b33189110179f60711b60e48201527f3c7465787420783d223530252220793d223530252220636c6173733d2262617360f682019081527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465610116830152723c3a16b0b731b437b91e9136b4b2323632911f60691b6101368301525f90610149830161324961340a8287612ff8565b6c1e17ba32bc3a1f1e17b9bb339f60991b8152600d0190565b5f6117b36134318386612ff8565b84612ff8565b634e487b7160e01b5f52601160045260245ffd5b5f6001820161345c5761345c613437565b5060010190565b808201808211156105fd576105fd613437565b601f82111561089957805f5260205f20601f840160051c8101602085101561349b5750805b601f840160051c820191505b818110156106d5575f81556001016134a7565b5f19600383901b1c191660019190911b1790565b6001600160401b038311156134e5576134e5612d0e565b6134f9836134f38354612ef1565b83613476565b5f601f841160018114613525575f85156135135750838201355b61351d86826134ba565b8455506106d5565b5f83815260208120601f198716915b828110156135545786850135825560209485019460019092019101613534565b5086821015613570575f1960f88860031b161c19848701351681555b505060018560011b0183555050505050565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b60018060a01b0385168152836020820152606060408201525f6131f0606083018486613582565b5f602082840312156135e1575f5ffd5b5051919050565b6001600160a01b03929092168252602082015260400190565b858152846020820152836040820152608060608201525f613626608083018486613582565b979650505050505050565b80820281158282048414176105fd576105fd613437565b5f8261366257634e487b7160e01b5f52601260045260245ffd5b500490565b81516001600160401b0381111561368057613680612d0e565b6136948161368e8454612ef1565b84613476565b6020601f8211600181146136c1575f83156136af5750848201515b6136b984826134ba565b8555506106d5565b5f84815260208120601f198516915b828110156136f057878501518255602094850194600190920191016136d0565b508482101561370d57868401515f19600387901b60f8161c191681555b50505050600190811b0190555056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212200d693553ca8df86cde61857b8c488b0a800c90837657ba5e70cd7b467755aee264736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051610f0f380380610f0f83398101604081905261002e91610113565b6100385f8261006a565b506100637fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca98261006a565b5050610140565b5f828152602081815260408083206001600160a01b038516845290915281205460ff1661010a575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100c23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161010d565b505f5b92915050565b5f60208284031215610123575f5ffd5b81516001600160a01b0381168114610139575f5ffd5b9392505050565b610dc28061014d5f395ff3fe6080604052600436106100c5575f3560e01c806301ffc9a7146100d0578063150b7a0214610104578063248a9ca314610147578063256451ac146101745780632f2ff15d1461019557806336568abe146101b45780634782f779146101d35780637b9f76b5146101f257806391d14854146102115780639ebd911514610230578063a217fddf1461024f578063b61d27f614610262578063bc197c811461028e578063d11a57ec146102b9578063d547741f146102d9578063f23a6e61146102f8575f5ffd5b366100cc57005b5f5ffd5b3480156100db575f5ffd5b506100ef6100ea3660046108b7565b610323565b60405190151581526020015b60405180910390f35b34801561010f575f5ffd5b5061012e61011e3660046109a8565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016100fb565b348015610152575f5ffd5b50610166610161366004610a0f565b610333565b6040519081526020016100fb565b34801561017f575f5ffd5b5061019361018e366004610a26565b610347565b005b3480156101a0575f5ffd5b506101936101af366004610a6d565b6103dc565b3480156101bf575f5ffd5b506101936101ce366004610a6d565b6103fe565b3480156101de575f5ffd5b506101936101ed366004610a9b565b610436565b3480156101fd575f5ffd5b5061019361020c366004610ac5565b61052b565b34801561021c575f5ffd5b506100ef61022b366004610a6d565b6105ab565b34801561023b575f5ffd5b5061019361024a366004610b04565b6105d3565b34801561025a575f5ffd5b506101665f81565b34801561026d575f5ffd5b5061028161027c366004610b1f565b610645565b6040516100fb9190610ba2565b348015610299575f5ffd5b5061012e6102a8366004610c56565b63bc197c8160e01b95945050505050565b3480156102c4575f5ffd5b506101665f516020610d6d5f395f51905f5281565b3480156102e4575f5ffd5b506101936102f3366004610a6d565b610701565b348015610303575f5ffd5b5061012e610312366004610d06565b63f23a6e6160e01b95945050505050565b5f61032d8261071d565b92915050565b5f9081526020819052604090206001015490565b5f516020610d6d5f395f51905f5261035e81610741565b604051637921219560e11b81523060048201526001600160a01b038381166024830152604482018690526064820185905260a060848301525f60a483015286169063f242432a9060c4015f604051808303815f87803b1580156103bf575f5ffd5b505af11580156103d1573d5f5f3e3d5ffd5b505050505050505050565b6103e582610333565b6103ee81610741565b6103f8838361074e565b50505050565b6001600160a01b03811633146104275760405163334bd91960e11b815260040160405180910390fd5b61043182826107dd565b505050565b5f516020610d6d5f395f51905f5261044d81610741565b478211156104995760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064015b60405180910390fd5b5f836001600160a01b0316836040515b5f6040518083038185875af1925050503d805f81146104e3576040519150601f19603f3d011682016040523d82523d5f602084013e6104e8565b606091505b50509050806103f85760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606401610490565b5f516020610d6d5f395f51905f5261054281610741565b604051632142170760e11b81523060048201526001600160a01b038381166024830152604482018590528516906342842e0e906064015f604051808303815f87803b15801561058f575f5ffd5b505af11580156105a1573d5f5f3e3d5ffd5b5050505050505050565b5f918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b5f516020610d6d5f395f51905f526105ea81610741565b47806106315760405162461bcd60e51b81526020600482015260166024820152754e6f2062616c616e636520746f20776974686472617760501b6044820152606401610490565b5f836001600160a01b0316826040516104a9565b60605f61065181610741565b5f5f876001600160a01b031687878760405161066e929190610d5d565b5f6040518083038185875af1925050503d805f81146106a8576040519150601f19603f3d011682016040523d82523d5f602084013e6106ad565b606091505b5091509150816106f65760405162461bcd60e51b8152602060048201526014602482015273115e1d195c9b985b0818d85b1b0819985a5b195960621b6044820152606401610490565b979650505050505050565b61070a82610333565b61071381610741565b6103f883836107dd565b5f6001600160e01b03198216637965db0b60e01b148061032d575061032d82610846565b61074b813361087a565b50565b5f61075983836105ab565b6107d6575f838152602081815260408083206001600160a01b03861684529091529020805460ff1916600117905561078e3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161032d565b505f61032d565b5f6107e883836105ab565b156107d6575f838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161032d565b5f6001600160e01b03198216630271189760e51b148061032d57506301ffc9a760e01b6001600160e01b031983161461032d565b61088482826105ab565b6108b35760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610490565b5050565b5f602082840312156108c7575f5ffd5b81356001600160e01b0319811681146108de575f5ffd5b9392505050565b6001600160a01b038116811461074b575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b0381118282101715610935576109356108f9565b604052919050565b5f82601f83011261094c575f5ffd5b81356001600160401b03811115610965576109656108f9565b610978601f8201601f191660200161090d565b81815284602083860101111561098c575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f608085870312156109bb575f5ffd5b84356109c6816108e5565b935060208501356109d6816108e5565b92506040850135915060608501356001600160401b038111156109f7575f5ffd5b610a038782880161093d565b91505092959194509250565b5f60208284031215610a1f575f5ffd5b5035919050565b5f5f5f5f60808587031215610a39575f5ffd5b8435610a44816108e5565b935060208501359250604085013591506060850135610a62816108e5565b939692955090935050565b5f5f60408385031215610a7e575f5ffd5b823591506020830135610a90816108e5565b809150509250929050565b5f5f60408385031215610aac575f5ffd5b8235610ab7816108e5565b946020939093013593505050565b5f5f5f60608486031215610ad7575f5ffd5b8335610ae2816108e5565b9250602084013591506040840135610af9816108e5565b809150509250925092565b5f60208284031215610b14575f5ffd5b81356108de816108e5565b5f5f5f5f60608587031215610b32575f5ffd5b8435610b3d816108e5565b93506020850135925060408501356001600160401b03811115610b5e575f5ffd5b8501601f81018713610b6e575f5ffd5b80356001600160401b03811115610b83575f5ffd5b876020828401011115610b94575f5ffd5b949793965060200194505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f82601f830112610be6575f5ffd5b81356001600160401b03811115610bff57610bff6108f9565b8060051b610c0f6020820161090d565b91825260208185018101929081019086841115610c2a575f5ffd5b6020860192505b83831015610c4c578235825260209283019290910190610c31565b9695505050505050565b5f5f5f5f5f60a08688031215610c6a575f5ffd5b8535610c75816108e5565b94506020860135610c85816108e5565b935060408601356001600160401b03811115610c9f575f5ffd5b610cab88828901610bd7565b93505060608601356001600160401b03811115610cc6575f5ffd5b610cd288828901610bd7565b92505060808601356001600160401b03811115610ced575f5ffd5b610cf98882890161093d565b9150509295509295909350565b5f5f5f5f5f60a08688031215610d1a575f5ffd5b8535610d25816108e5565b94506020860135610d35816108e5565b9350604086013592506060860135915060808601356001600160401b03811115610ced575f5ffd5b818382375f910190815291905056fee1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca9a2646970667358221220ea74d3e1babc424af7c862c7da9188aaa5f8c4cc713c7af7b5fb00f61b9b21f764736f6c634300081c0033"
    }
  },
  "deployments": {
    "31337": {
      "BragToken": "0x5133BBdfCCa3Eb4F739D599ee4eC45cBCD0E16c5",
      "DonationReceipt": "0x71089Ba41e478702e1904692385Be3972B2cBf9e",
      "ExhibitRegistry": "0x8F4ec854Dd12F1fe79500a1f53D0cbB30f9b6134",
      "Treasury": "0xC66AB83418C20A65C3f8e83B3d11c8C3a6097b6F",
      "NFTMarketplace": "0x12Bcb546bC60fF39F1Adfc7cE4605d5Bd6a6A876",
      "Nexus": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "BragNFT": "0xeF31027350Be2c7439C1b0BE022d49421488b72C"
    },
    "chain-31337": {
      "BragToken": "0x5133BBdfCCa3Eb4F739D599ee4eC45cBCD0E16c5",
      "DonationReceipt": "0x71089Ba41e478702e1904692385Be3972B2cBf9e",
      "ExhibitRegistry": "0x8F4ec854Dd12F1fe79500a1f53D0cbB30f9b6134",
      "Treasury": "0xC66AB83418C20A65C3f8e83B3d11c8C3a6097b6F",
      "NFTMarketplace": "0x12Bcb546bC60fF39F1Adfc7cE4605d5Bd6a6A876",
      "Nexus": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "BragNFT": "0xeF31027350Be2c7439C1b0BE022d49421488b72C"
    }
  }
};