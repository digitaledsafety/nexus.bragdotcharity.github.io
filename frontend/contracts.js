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
      "bytecode": "0x6080604052348015600e575f5ffd5b5061031b8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610029575f3560e01c806315270ace1461002d575b5f5ffd5b61004061003b36600461022d565b610042565b005b82811461008a5760405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b60448201526064015b60405180910390fd5b5f5b838110156100fa576100f2338686848181106100aa576100aa6102af565b90506020020160208101906100bf91906102c3565b8585858181106100d1576100d16102af565b90506020020135896001600160a01b0316610102909392919063ffffffff16565b60010161008c565b505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261015c908590610162565b50505050565b5f5f60205f8451602086015f885af180610181576040513d5f823e3d81fd5b50505f513d915081156101985780600114156101a5565b6001600160a01b0384163b155b1561015c57604051635274afe760e01b81526001600160a01b0385166004820152602401610081565b6001600160a01b03811681146101e2575f5ffd5b50565b5f5f83601f8401126101f5575f5ffd5b50813567ffffffffffffffff81111561020c575f5ffd5b6020830191508360208260051b8501011115610226575f5ffd5b9250929050565b5f5f5f5f5f60608688031215610241575f5ffd5b853561024c816101ce565b9450602086013567ffffffffffffffff811115610267575f5ffd5b610273888289016101e5565b909550935050604086013567ffffffffffffffff811115610292575f5ffd5b61029e888289016101e5565b969995985093965092949392505050565b634e487b7160e01b5f52603260045260245ffd5b5f602082840312156102d3575f5ffd5b81356102de816101ce565b939250505056fea26469706673582212204616a0832706531746e4812372e05ec19556d63ca03f1bc455f419b98591a3db64736f6c634300081c0033"
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
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516133fc3803806133fc83398101604081905261002e91610194565b60405180604001604052806007815260200166109c9859d3919560ca1b8152506040518060400160405280600781526020016610949051d3919560ca1b815250815f908161007c9190610265565b5060016100898282610265565b505060016008555061009b5f846100cc565b50600b80546001600160a01b0319166001600160a01b039390931692909217909155600c5550612710600a5561031f565b5f8281526007602090815260408083206001600160a01b038516845290915281205460ff16610170575f8381526007602090815260408083206001600160a01b03861684529091529020805460ff191660011790556101283390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610173565b505f5b92915050565b80516001600160a01b038116811461018f575f5ffd5b919050565b5f5f5f606084860312156101a6575f5ffd5b6101af84610179565b92506101bd60208501610179565b9150604084015190509250925092565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806101f557607f821691505b60208210810361021357634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561026057805f5260205f20601f840160051c8101602085101561023e5750805b601f840160051c820191505b8181101561025d575f815560010161024a565b50505b505050565b81516001600160401b0381111561027e5761027e6101cd565b6102928161028c84546101e1565b84610219565b6020601f8211600181146102c4575f83156102ad5750848201515b5f19600385901b1c1916600184901b17845561025d565b5f84815260208120601f198516915b828110156102f357878501518255602094850194600190920191016102d3565b508482101561031057868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6130d08061032c5f395ff3fe60806040526004361061020a575f3560e01c806370a0823111610113578063c63172471161009d578063d547741f1161006d578063d547741f14610615578063d5abeb0114610634578063da183afb14610649578063e985e9c514610674578063f0f4426014610693575f5ffd5b8063c6317247146105a5578063c87b56dd146105c4578063d3933c1c146105e3578063d435b3a3146105f6575f5ffd5b806396d8f4f3116100e357806396d8f4f31461052c578063a217fddf14610541578063a22cb46514610554578063a6719b3a14610573578063b88d4fde14610586575f5ffd5b806370a08231146104bb57806383943dc8146104da57806391d14854146104f957806395d89b4114610518575f5ffd5b8063248a9ca31161019457806342842e0e1161016457806342842e0e1461042057806361d027b31461043f5780636352211e1461045e57806364cb7e9c1461047d5780636f8b44b01461049c575f5ffd5b8063248a9ca3146103955780632eb9313e146103c35780632f2ff15d146103e257806336568abe14610401575f5ffd5b80630fd973ce116101da5780630fd973ce146103135780631653441c1461032657806318160ddd1461033957806319bcef6d1461035757806323b872dd14610376575f5ffd5b806301ffc9a71461026857806306fdde031461029c578063081812fc146102bd578063095ea7b3146102f4575f5ffd5b36610264576102176106b2565b610258336040518060400160405280600f81526020016e2234b932b1ba103237b730ba34b7b760891b81525060405180602001604052805f8152505f6106dc565b6102626001600855565b005b5f5ffd5b348015610273575f5ffd5b50610287610282366004612432565b610a06565b60405190151581526020015b60405180910390f35b3480156102a7575f5ffd5b506102b0610a16565b604051610293919061247b565b3480156102c8575f5ffd5b506102dc6102d736600461248d565b610aa5565b6040516001600160a01b039091168152602001610293565b3480156102ff575f5ffd5b5061026261030e3660046124b8565b610acc565b610262610321366004612526565b610adb565b6102626103343660046125a6565b610b66565b348015610344575f5ffd5b506009545b604051908152602001610293565b348015610362575f5ffd5b50610262610371366004612610565b610bf0565b348015610381575f5ffd5b5061026261039036600461262b565b610c1d565b3480156103a0575f5ffd5b506103496103af36600461248d565b5f9081526007602052604090206001015490565b3480156103ce575f5ffd5b506102626103dd366004612610565b610ca0565b3480156103ed575f5ffd5b506102626103fc366004612669565b610ccd565b34801561040c575f5ffd5b5061026261041b366004612669565b610cf1565b34801561042b575f5ffd5b5061026261043a36600461262b565b610d29565b34801561044a575f5ffd5b50600b546102dc906001600160a01b031681565b348015610469575f5ffd5b506102dc61047836600461248d565b610d43565b348015610488575f5ffd5b506102b061049736600461248d565b610d4d565b3480156104a7575f5ffd5b506102626104b636600461248d565b610de4565b3480156104c6575f5ffd5b506103496104d5366004612610565b610df4565b3480156104e5575f5ffd5b50600e546102dc906001600160a01b031681565b348015610504575f5ffd5b50610287610513366004612669565b610e39565b348015610523575f5ffd5b506102b0610e63565b348015610537575f5ffd5b50610349600c5481565b34801561054c575f5ffd5b506103495f81565b34801561055f575f5ffd5b5061026261056e3660046126ab565b610e72565b6102626105813660046126de565b610e7d565b348015610591575f5ffd5b506102626105a03660046127ff565b610f0b565b3480156105b0575f5ffd5b506102626105bf36600461248d565b610f23565b3480156105cf575f5ffd5b506102b06105de36600461248d565b610f33565b6102626105f13660046128a6565b611255565b348015610601575f5ffd5b50600d546102dc906001600160a01b031681565b348015610620575f5ffd5b5061026261062f366004612669565b6112d1565b34801561063f575f5ffd5b50610349600a5481565b348015610654575f5ffd5b5061034961066336600461248d565b600f6020525f908152604090205481565b34801561067f575f5ffd5b5061028761068e366004612924565b6112f5565b34801561069e575f5ffd5b506102626106ad366004612610565b611322565b6002600854036106d557604051633ee5aeb560e01b815260040160405180910390fd5b6002600855565b600d546001600160a01b03166107395760405162461bcd60e51b815260206004820152601860248201527f5265636569707420636f6e7472616374206e6f7420736574000000000000000060448201526064015b60405180910390fd5b600c543410156107845760405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606401610730565b600a54600954106107cc5760405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606401610730565b600980545f91826107dc83612964565b9190505590508115610805575f8181526010602052604090206107ff84826129f8565b50610816565b8251156108165761081681846113a5565b600d546040516334ff261960e21b81525f916001600160a01b03169063d3fc98649061084a90339034908a90600401612ab2565b6020604051808303815f875af1158015610866573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061088a9190612ae1565b5f838152600f6020526040902081905590506108a686836113f4565b600e546001600160a01b03161561091657600e546040516340c10f1960e01b81523360048201523460248201526001600160a01b03909116906340c10f19906044015f604051808303815f87803b1580156108ff575f5ffd5b505af1158015610911573d5f5f3e3d5ffd5b505050505b600b546040515f916001600160a01b03169034908381818185875af1925050503d805f8114610960576040519150601f19603f3d011682016040523d82523d5f602084013e610965565b606091505b50509050806109b65760405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606401610730565b336001600160a01b03167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858a6040516109f59493929190612af8565b60405180910390a250505050505050565b5f610a108261140d565b92915050565b60605f8054610a249061297c565b80601f0160208091040260200160405190810160405280929190818152602001828054610a509061297c565b8015610a9b5780601f10610a7257610100808354040283529160200191610a9b565b820191905f5260205f20905b815481529060010190602001808311610a7e57829003601f168201915b5050505050905090565b5f610aaf82611431565b505f828152600460205260409020546001600160a01b0316610a10565b610ad7828233611469565b5050565b610ae36106b2565b610b558585858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284375f92018290525092506106dc915050565b610b5f6001600855565b5050505050565b610b6e6106b2565b610be03385858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284375f92018290525092506106dc915050565b610bea6001600855565b50505050565b5f610bfa81611476565b50600d80546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038216610c4657604051633250574960e11b81525f6004820152602401610730565b5f610c52838333611483565b9050836001600160a01b0316816001600160a01b031614610bea576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610730565b5f610caa81611476565b50600e80546001600160a01b0319166001600160a01b0392909216919091179055565b5f82815260076020526040902060010154610ce781611476565b610bea8383611577565b6001600160a01b0381163314610d1a5760405163334bd91960e11b815260040160405180910390fd5b610d248282611608565b505050565b610d2483838360405180602001604052805f815250610f0b565b5f610a1082611431565b60106020525f908152604090208054610d659061297c565b80601f0160208091040260200160405190810160405280929190818152602001828054610d919061297c565b8015610ddc5780601f10610db357610100808354040283529160200191610ddc565b820191905f5260205f20905b815481529060010190602001808311610dbf57829003601f168201915b505050505081565b5f610dee81611476565b50600a55565b5f6001600160a01b038216610e1e576040516322718ad960e21b81525f6004820152602401610730565b506001600160a01b03165f9081526003602052604090205490565b5f9182526007602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060018054610a249061297c565b610ad7338383611673565b610e856106b2565b610ef98686868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284375f920191909152508792506106dc915050565b610f036001600855565b505050505050565b610f16848484610c1d565b610bea3385858585611711565b5f610f2d81611476565b50600c55565b6060610f3e82611431565b505f828152600f60209081526040808320548151928301909152918152600d546001600160a01b031615610fe057600d5460405163b63e6ac360e01b8152600481018490526001600160a01b039091169063b63e6ac3906024015f60405180830381865afa925050508015610fd457506040513d5f823e601f3d908101601f19168201604052610fd19190810190612b26565b60015b15610fe0576060015190505b5f848152601060205260408120805460609283929091610fff9061297c565b80601f016020809104026020016040519081016040528092919081815260200182805461102b9061297c565b80156110765780601f1061104d57610100808354040283529160200191611076565b820191905f5260205f20905b81548152906001019060200180831161105957829003601f168201915b505050505090505f815111156110d75761108f81611830565b156110cf578091506110a96110a48886611a5f565b611ac4565b6040516020016110b99190612c0c565b6040516020818303038152906040529250611168565b809250611168565b5f6110e188611aea565b805190915015611137576110f481611830565b1561112f578092506111096110a48987611a5f565b6040516020016111199190612c0c565b6040516020818303038152906040529350611166565b809350611166565b6111446110a48987611a5f565b6040516020016111549190612c0c565b60405160208183030381529060405293505b505b60408051602081019091525f81528251156111a0578260405160200161118e9190612c3d565b60405160208183030381529060405290505b5f6112256111ad8a611bf5565b5f8851116111c95760405180602001604052805f8152506111f2565b6111d288611c84565b6040516020016111e29190612c66565b6040516020818303038152906040525b87856111fd8b611c84565b604051602001611211959493929190612c7c565b604051602081830303815290604052611ac4565b9050806040516020016112389190612d7d565b604051602081830303815290604052975050505050505050919050565b61125d6106b2565b610b553386868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284375f920191909152508792506106dc915050565b5f828152600760205260409020600101546112eb81611476565b610bea8383611608565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f61132c81611476565b6001600160a01b0382166113825760405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606401610730565b50600b80546001600160a01b0319166001600160a01b0392909216919091179055565b5f8281526006602052604090206113bc82826129f8565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b610ad7828260405180602001604052805f815250611e70565b5f6001600160e01b03198216637965db0b60e01b1480610a105750610a1082611e87565b5f818152600260205260408120546001600160a01b031680610a1057604051637e27328960e01b815260048101849052602401610730565b610d248383836001611eab565b6114808133611faf565b50565b5f828152600260205260408120546001600160a01b03908116908316156114af576114af818486611fe8565b6001600160a01b038116156114e9576114ca5f855f5f611eab565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615611517576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a490505b9392505050565b5f6115828383610e39565b611601575f8381526007602090815260408083206001600160a01b03861684529091529020805460ff191660011790556115b93390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610a10565b505f610a10565b5f6116138383610e39565b15611601575f8381526007602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610a10565b6001600160a01b0382166116a557604051630b61174360e31b81526001600160a01b0383166004820152602401610730565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15610b5f57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290611753908890889087908790600401612dae565b6020604051808303815f875af192505050801561178d575060408051601f3d908101601f1916820190925261178a91810190612de0565b60015b6117f4573d8080156117ba576040519150601f19603f3d011682016040523d82523d5f602084013e6117bf565b606091505b5080515f036117ec57604051633250574960e11b81526001600160a01b0385166004820152602401610730565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b14610f0357604051633250574960e11b81526001600160a01b0385166004820152602401610730565b5f5f829050600b8151101561184757505f92915050565b805f8151811061185957611859612dfb565b6020910101516001600160f81b031916601960fa1b1480156118a057508060018151811061188957611889612dfb565b6020910101516001600160f81b031916606160f81b145b80156118d15750806002815181106118ba576118ba612dfb565b6020910101516001600160f81b031916601d60fa1b145b80156119025750806003815181106118eb576118eb612dfb565b6020910101516001600160f81b031916606160f81b145b801561193357508060048151811061191c5761191c612dfb565b6020910101516001600160f81b031916601d60f91b145b801561196457508060058151811061194d5761194d612dfb565b6020910101516001600160f81b031916606160f81b145b801561199557508060068151811061197e5761197e612dfb565b6020910101516001600160f81b031916607560f81b145b80156119c65750806007815181106119af576119af612dfb565b6020910101516001600160f81b031916601960fa1b145b80156119f75750806008815181106119e0576119e0612dfb565b6020910101516001600160f81b031916606960f81b145b8015611a28575080600981518110611a1157611a11612dfb565b6020910101516001600160f81b031916606f60f81b145b8015611570575080600a81518110611a4257611a42612dfb565b6020910101516001600160f81b031916602f60f81b149392505050565b60605f5f835111611a9757611a7384611bf5565b604051602001611a839190612e0f565b604051602081830303815290604052611a99565b825b905080604051602001611aac9190612e2c565b60405160208183030381529060405291505092915050565b6060610a108260405180606001604052806040815260200161305b60409139600161204c565b6060611af582611431565b505f8281526006602052604081208054611b0e9061297c565b80601f0160208091040260200160405190810160405280929190818152602001828054611b3a9061297c565b8015611b855780601f10611b5c57610100808354040283529160200191611b85565b820191905f5260205f20905b815481529060010190602001808311611b6857829003601f168201915b505050505090505f611ba160408051602081019091525f815290565b905080515f03611bb2575092915050565b815115611be4578082604051602001611bcc929190612ffd565b60405160208183030381529060405292505050919050565b611bed846121c5565b949350505050565b60605f611c0183612235565b60010190505f816001600160401b03811115611c1f57611c1f61276d565b6040519080825280601f01601f191660200182016040528015611c49576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084611c5357509392505050565b805160609082905f805b82811015611d0857838181518110611ca857611ca8612dfb565b6020910101516001600160f81b031916601160f91b1480611ced5750838181518110611cd657611cd6612dfb565b6020910101516001600160f81b031916601760fa1b145b15611d005781611cfc81612964565b9250505b600101611c8e565b50805f03611d195750929392505050565b5f611d248284613011565b6001600160401b03811115611d3b57611d3b61276d565b6040519080825280601f01601f191660200182016040528015611d65576020820181803683370190505b5090505f805b84811015611e6457858181518110611d8557611d85612dfb565b6020910101516001600160f81b031916601160f91b1480611dca5750858181518110611db357611db3612dfb565b6020910101516001600160f81b031916601760fa1b145b15611e0857601760fa1b8383611ddf81612964565b945081518110611df157611df1612dfb565b60200101906001600160f81b03191690815f1a9053505b858181518110611e1a57611e1a612dfb565b01602001516001600160f81b0319168383611e3481612964565b945081518110611e4657611e46612dfb565b60200101906001600160f81b03191690815f1a905350600101611d6b565b50909695505050505050565b611e7a838361230c565b610d24335f858585611711565b5f6001600160e01b03198216632483248360e11b1480610a105750610a108261236d565b8080611ebf57506001600160a01b03821615155b15611f80575f611ece84611431565b90506001600160a01b03831615801590611efa5750826001600160a01b0316816001600160a01b031614155b8015611f0d5750611f0b81846112f5565b155b15611f365760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610730565b8115611f7e5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b611fb98282610e39565b610ad75760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610730565b611ff38383836123bc565b610d24576001600160a01b03831661202157604051637e27328960e01b815260048101829052602401610730565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610730565b606083515f0361206a575060408051602081019091525f8152611570565b5f8261209a576003855160046120809190613024565b61208b906002613011565b612095919061303b565b6120bf565b6003855160026120aa9190613011565b6120b4919061303b565b6120bf906004613024565b90505f816001600160401b038111156120da576120da61276d565b6040519080825280601f01601f191660200182016040528015612104576020820181803683370190505b509050600185016020820187885189016020810180515f82525b82841015612179576003840193508351603f8160121c168701518653600186019550603f81600c1c168701518653600186019550603f8160061c168701518653600186019550603f811687015186535060018501945061211e565b905250508515611e645760038851066001811461219d57600281146121b0576121b8565b603d6001830353603d60028303536121b8565b603d60018303535b5050909695505050505050565b60606121d082611431565b505f6121e660408051602081019091525f815290565b90505f8151116122045760405180602001604052805f815250611570565b8061220e84611bf5565b60405160200161221f929190612ffd565b6040516020818303038152906040529392505050565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106122735772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061229f576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106122bd57662386f26fc10000830492506010015b6305f5e10083106122d5576305f5e100830492506008015b61271083106122e957612710830492506004015b606483106122fb576064830492506002015b600a8310610a105760010192915050565b6001600160a01b03821661233557604051633250574960e11b81525f6004820152602401610730565b5f61234183835f611483565b90506001600160a01b03811615610d24576040516339e3563760e11b81525f6004820152602401610730565b5f6001600160e01b031982166380ac58cd60e01b148061239d57506001600160e01b03198216635b5e139f60e01b145b80610a1057506301ffc9a760e01b6001600160e01b0319831614610a10565b5f6001600160a01b03831615801590611bed5750826001600160a01b0316846001600160a01b031614806123f557506123f584846112f5565b80611bed5750505f908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b031981168114611480575f5ffd5b5f60208284031215612442575f5ffd5b81356115708161241d565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f611570602083018461244d565b5f6020828403121561249d575f5ffd5b5035919050565b6001600160a01b0381168114611480575f5ffd5b5f5f604083850312156124c9575f5ffd5b82356124d4816124a4565b946020939093013593505050565b5f5f83601f8401126124f2575f5ffd5b5081356001600160401b03811115612508575f5ffd5b60208301915083602082850101111561251f575f5ffd5b9250929050565b5f5f5f5f5f6060868803121561253a575f5ffd5b8535612545816124a4565b945060208601356001600160401b0381111561255f575f5ffd5b61256b888289016124e2565b90955093505060408601356001600160401b03811115612589575f5ffd5b612595888289016124e2565b969995985093965092949392505050565b5f5f5f5f604085870312156125b9575f5ffd5b84356001600160401b038111156125ce575f5ffd5b6125da878288016124e2565b90955093505060208501356001600160401b038111156125f8575f5ffd5b612604878288016124e2565b95989497509550505050565b5f60208284031215612620575f5ffd5b8135611570816124a4565b5f5f5f6060848603121561263d575f5ffd5b8335612648816124a4565b92506020840135612658816124a4565b929592945050506040919091013590565b5f5f6040838503121561267a575f5ffd5b82359150602083013561268c816124a4565b809150509250929050565b803580151581146126a6575f5ffd5b919050565b5f5f604083850312156126bc575f5ffd5b82356126c7816124a4565b91506126d560208401612697565b90509250929050565b5f5f5f5f5f5f608087890312156126f3575f5ffd5b86356126fe816124a4565b955060208701356001600160401b03811115612718575f5ffd5b61272489828a016124e2565b90965094505060408701356001600160401b03811115612742575f5ffd5b61274e89828a016124e2565b9094509250612761905060608801612697565b90509295509295509295565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b03811182821017156127a3576127a361276d565b60405290565b604051601f8201601f191681016001600160401b03811182821017156127d1576127d161276d565b604052919050565b5f6001600160401b038211156127f1576127f161276d565b50601f01601f191660200190565b5f5f5f5f60808587031215612812575f5ffd5b843561281d816124a4565b9350602085013561282d816124a4565b92506040850135915060608501356001600160401b0381111561284e575f5ffd5b8501601f8101871361285e575f5ffd5b803561287161286c826127d9565b6127a9565b818152886020838501011115612885575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f5f5f5f606086880312156128ba575f5ffd5b85356001600160401b038111156128cf575f5ffd5b6128db888289016124e2565b90965094505060208601356001600160401b038111156128f9575f5ffd5b612905888289016124e2565b9094509250612918905060408701612697565b90509295509295909350565b5f5f60408385031215612935575f5ffd5b8235612940816124a4565b9150602083013561268c816124a4565b634e487b7160e01b5f52601160045260245ffd5b5f6001820161297557612975612950565b5060010190565b600181811c9082168061299057607f821691505b6020821081036129ae57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115610d2457805f5260205f20601f840160051c810160208510156129d95750805b601f840160051c820191505b81811015610b5f575f81556001016129e5565b81516001600160401b03811115612a1157612a1161276d565b612a2581612a1f845461297c565b846129b4565b6020601f821160018114612a57575f8315612a405750848201515b5f19600385901b1c1916600184901b178455610b5f565b5f84815260208120601f198516915b82811015612a865787850151825560209485019460019092019101612a66565b5084821015612aa357868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b60018060a01b0384168152826020820152606060408201525f612ad8606083018461244d565b95945050505050565b5f60208284031215612af1575f5ffd5b5051919050565b848152836020820152826040820152608060608201525f612b1c608083018461244d565b9695505050505050565b5f60208284031215612b36575f5ffd5b81516001600160401b03811115612b4b575f5ffd5b820160808185031215612b5c575f5ffd5b612b64612781565b8151612b6f816124a4565b8152602082810151908201526040808301519082015260608201516001600160401b03811115612b9d575f5ffd5b80830192505084601f830112612bb1575f5ffd5b8151612bbf61286c826127d9565b818152866020838601011115612bd3575f5ffd5b8160208501602083015e5f918101602001919091526060820152949350505050565b5f81518060208401855e5f93019283525090919050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c00000000000081525f611570601a830184612bf5565b741116101130b734b6b0ba34b7b72fbab936111d101160591b81525f6115706015830184612bf5565b6101d160f51b81525f6115706002830184612bf5565b727b226e616d65223a2022427261674e4654202360681b81525f612ca36013830188612bf5565b7f222c20226465736372697074696f6e223a2022427261672e436861726974792081526b111bdb985d1a5bdb8813919560a21b6020820152612ce8602c820188612bf5565b6c1116101134b6b0b3b2911d101160991b81529050612d13612d0d600d830188612bf5565b86612bf5565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a815275101126b2b9b9b0b3b2911610113b30b63ab2911d101160511b60208201529050612d646036820185612bf5565b63227d5d7d60e01b815260040198975050505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081525f611570601d830184612bf5565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90612b1c9083018461244d565b5f60208284031215612df0575f5ffd5b81516115708161241d565b634e487b7160e01b5f52603260045260245ffd5b68427261674e4654202360b81b81525f6115706009830184612bf5565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323081527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d223020302033353020333530604082015261111f60f11b60608201527f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e7460628201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060828201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60a282015261329f60f11b60c28201527f3c726563742077696474683d223130302522206865696768743d22313030252260c482015271103334b6361e91119b199b1b33189110179f60711b60e48201527f3c7465787420783d223530252220793d223530252220636c6173733d2262617360f682019081527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465610116830152723c3a16b0b731b437b91e9136b4b2323632911f60691b6101368301525f906101498301612ad8612fe48287612bf5565b6c1e17ba32bc3a1f1e17b9bb339f60991b8152600d0190565b5f611bed61300b8386612bf5565b84612bf5565b80820180821115610a1057610a10612950565b8082028115828204841417610a1057610a10612950565b5f8261305557634e487b7160e01b5f52601260045260245ffd5b50049056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212203604439e0f1380e2b254c945d6c5bba81eca7a37456f6cc69a3985eeb4646f4764736f6c634300081c0033"
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
      "bytecode": "0x610180604052348015610010575f5ffd5b50604051612e93380380612e9383398101604081905261002f9161097c565b6040518060400160405280600a815260200169213930b3902a37b5b2b760b11b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600a815260200169213930b3902a37b5b2b760b11b815250604051806040016040528060048152602001634252414760e01b81525081600390816100bc9190610a52565b5060046100c98282610a52565b506100d991508390506005610233565b610120526100e8816006610233565b61014052815160208084019190912060e052815190820120610100524660a05261017460e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250818110156101df5760405162461bcd60e51b8152602060048201526024808201527f4d617820737570706c79206d757374206265203e3d20696e697469616c20737560448201526370706c7960e01b60648201526084015b60405180910390fd5b6101608190526101ef5f84610265565b5061021a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a684610265565b50811561022b5761022b8383610310565b505050610bdc565b5f60208351101561024e5761024783610348565b905061025f565b816102598482610a52565b5060ff90505b92915050565b5f828152600b602090815260408083206001600160a01b038516845290915281205460ff16610309575f838152600b602090815260408083206001600160a01b03861684529091529020805460ff191660011790556102c13390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161025f565b505f61025f565b6001600160a01b0382166103395760405163ec442f0560e01b81525f60048201526024016101d6565b6103445f8383610385565b5050565b5f5f829050601f81511115610372578260405163305a27a960e01b81526004016101d69190610b0c565b805161037d82610b41565b179392505050565b610390838383610395565b505050565b6103a08383836103fb565b6001600160a01b0383166103f0575f6103b860025490565b90506001600160d01b03808211156103ed57604051630e58ae9360e11b815260048101839052602481018290526044016101d6565b50505b610390838383610521565b6001600160a01b038316610425578060025f82825461041a9190610b78565b909155506104959050565b6001600160a01b0383165f90815260208190526040902054818110156104775760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016101d6565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b0382166104b1576002805482900390556104cf565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161051491815260200190565b60405180910390a3505050565b6001600160a01b03831661054f5761054c600a610ba86105a960201b17610547846105bb565b6105f2565b50505b6001600160a01b03821661057857610575600a610bb361062760201b17610547846105bb565b50505b6001600160a01b038381165f9081526008602052604080822054858416835291205461039092918216911683610632565b5f6105b48284610b8b565b9392505050565b5f6001600160d01b038211156105ee576040516306dfcc6560e41b815260d06004820152602481018390526044016101d6565b5090565b5f8061061a6105ff610782565b61061261060b88610790565b868860201c565b8791906107d7565b915091505b935093915050565b5f6105b48284610baa565b816001600160a01b0316836001600160a01b03161415801561065357505f81115b15610390576001600160a01b038316156106eb576001600160a01b0383165f908152600960209081526040822082916106999190610627901b610bb317610547866105bb565b6001600160d01b031691506001600160d01b03169150846001600160a01b03165f516020612e735f395f51905f5283836040516106e0929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610390576001600160a01b0382165f9081526009602090815260408220829161072c91906105a9901b610ba817610547866105bb565b6001600160d01b031691506001600160d01b03169150836001600160a01b03165f516020612e735f395f51905f528383604051610773929190918252602082015260400190565b60405180910390a25050505050565b5f61078b6107e4565b905090565b80545f9080156107cf576107b6836107a9600184610bc9565b5f91825260209091200190565b54660100000000000090046001600160d01b03166105b4565b5f9392505050565b5f8061061a8585856107ee565b5f61078b4361094a565b82545f90819080156108ed575f61080a876107a9600185610bc9565b805490915065ffffffffffff80821691660100000000000090046001600160d01b031690881682111561085057604051632520601d60e01b815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff160361088c57825465ffffffffffff1666010000000000006001600160d01b038916021783556108df565b6040805180820190915265ffffffffffff808a1682526001600160d01b03808a1660208085019182528d54600181018f555f8f815291909120945191519092166601000000000000029216919091179101555b945085935061061f92505050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a815291822095519251909316660100000000000002919093161792019190915590508161061f565b5f65ffffffffffff8211156105ee576040516306dfcc6560e41b815260306004820152602481018390526044016101d6565b5f5f5f6060848603121561098e575f5ffd5b83516001600160a01b03811681146109a4575f5ffd5b602085015160409095015190969495509392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806109e357607f821691505b602082108103610a0157634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561039057805f5260205f20601f840160051c81016020851015610a2c5750805b601f840160051c820191505b81811015610a4b575f8155600101610a38565b5050505050565b81516001600160401b03811115610a6b57610a6b6109bb565b610a7f81610a7984546109cf565b84610a07565b6020601f821160018114610ab1575f8315610a9a5750848201515b5f19600385901b1c1916600184901b178455610a4b565b5f84815260208120601f198516915b82811015610ae05787850151825560209485019460019092019101610ac0565b5084821015610afd57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b80516020808301519190811015610a01575f1960209190910360031b1b16919050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561025f5761025f610b64565b6001600160d01b03818116838216019081111561025f5761025f610b64565b6001600160d01b03828116828216039081111561025f5761025f610b64565b8181038181111561025f5761025f610b64565b60805160a05160c05160e05161010051610120516101405161016051612235610c3e5f395f81816104e9015261075801525f61112001525f6110f301525f610e1201525f610dea01525f610d4501525f610d6f01525f610d9901526122355ff3fe608060405234801561000f575f5ffd5b5060043610610208575f3560e01c806370a082311161011f578063a217fddf116100a9578063d539139311610079578063d5391393146104aa578063d547741f146104d1578063d5abeb01146104e4578063dd62ed3e1461050b578063f1127ed814610543575f5ffd5b8063a217fddf1461046a578063a9059cbb14610471578063c3cda52014610484578063d505accf14610497575f5ffd5b80638e539e8c116100ef5780638e539e8c1461040a57806391d148541461041d57806391ddadf41461043057806395d89b411461044f5780639ab24eb014610457575f5ffd5b806370a08231146103a157806379cc6790146103c95780637ecebe00146103dc57806384b0196e146103ef575f5ffd5b80633644e515116101a057806342966c681161017057806342966c68146103085780634bf5d7e91461031b578063587cde1e146103235780635c19a95c146103665780636fcfff4514610379575f5ffd5b80633644e515146102c757806336568abe146102cf5780633a46b1a8146102e257806340c10f19146102f5575f5ffd5b806323b872dd116101db57806323b872dd1461026e578063248a9ca3146102815780632f2ff15d146102a3578063313ce567146102b8575f5ffd5b806301ffc9a71461020c57806306fdde0314610234578063095ea7b31461024957806318160ddd1461025c575b5f5ffd5b61021f61021a366004611df1565b610582565b60405190151581526020015b60405180910390f35b61023c6105b8565b60405161022b9190611e46565b61021f610257366004611e73565b610648565b6002545b60405190815260200161022b565b61021f61027c366004611e9b565b61065f565b61026061028f366004611ed5565b5f908152600b602052604090206001015490565b6102b66102b1366004611eec565b610682565b005b6040516012815260200161022b565b6102606106ac565b6102b66102dd366004611eec565b6106ba565b6102606102f0366004611e73565b6106f2565b6102b6610303366004611e73565b61072c565b6102b6610316366004611ed5565b6107dc565b61023c6107e9565b61034e610331366004611f16565b6001600160a01b039081165f908152600860205260409020541690565b6040516001600160a01b03909116815260200161022b565b6102b6610374366004611f16565b610861565b61038c610387366004611f16565b610870565b60405163ffffffff909116815260200161022b565b6102606103af366004611f16565b6001600160a01b03165f9081526020819052604090205490565b6102b66103d7366004611e73565b61087a565b6102606103ea366004611f16565b61088f565b6103f7610899565b60405161022b9796959493929190611f2f565b610260610418366004611ed5565b6108db565b61021f61042b366004611eec565b6108ff565b610438610929565b60405165ffffffffffff909116815260200161022b565b61023c610932565b610260610465366004611f16565b610941565b6102605f81565b61021f61047f366004611e73565b610961565b6102b6610492366004611fd5565b61096e565b6102b66104a5366004612029565b610a2a565b6102607f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102b66104df366004611eec565b610b60565b6102607f000000000000000000000000000000000000000000000000000000000000000081565b61026061051936600461208f565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6105566105513660046120b7565b610b84565b60408051825165ffffffffffff1681526020928301516001600160d01b0316928101929092520161022b565b5f6001600160e01b03198216637965db0b60e01b14806105b257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546105c7906120f4565b80601f01602080910402602001604051908101604052809291908181526020018280546105f3906120f4565b801561063e5780601f106106155761010080835404028352916020019161063e565b820191905f5260205f20905b81548152906001019060200180831161062157829003601f168201915b5050505050905090565b5f33610655818585610bbe565b5060019392505050565b5f3361066c858285610bcb565b610677858585610c41565b506001949350505050565b5f828152600b602052604090206001015461069c81610c9e565b6106a68383610ca8565b50505050565b5f6106b5610d39565b905090565b6001600160a01b03811633146106e35760405163334bd91960e11b815260040160405180910390fd5b6106ed8282610e62565b505050565b5f61071c6106ff83610ecd565b6001600160a01b0385165f90815260096020526040902090610f1b565b6001600160d01b03169392505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661075681610c9e565b7f00000000000000000000000000000000000000000000000000000000000000008261078160025490565b61078b9190612140565b11156107d25760405162461bcd60e51b815260206004820152601160248201527045786365656473206d6178537570706c7960781b60448201526064015b60405180910390fd5b6106ed8383610fcb565b6107e63382610fff565b50565b60606107f3611033565b65ffffffffffff16610803610929565b65ffffffffffff1614610829576040516301bfc1c560e61b815260040160405180910390fd5b5060408051808201909152601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015290565b3361086c818361103d565b5050565b5f6105b2826110ae565b610885823383610bcb565b61086c8282610fff565b5f6105b2826110cf565b5f6060805f5f5f60606108aa6110ec565b6108b2611119565b604080515f80825260208201909252600f60f81b9b939a50919850469750309650945092509050565b5f6108f06108e883610ecd565b600a90610f1b565b6001600160d01b031692915050565b5f918252600b602090815260408084206001600160a01b0393909316845291905290205460ff1690565b5f6106b5611033565b6060600480546105c7906120f4565b6001600160a01b0381165f9081526009602052604081206108f090611146565b5f33610655818585610c41565b8342111561099257604051632341d78760e11b8152600481018590526024016107c9565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590525f90610a0b90610a039060a0016040516020818303038152906040528051906020012061117d565b8585856111a9565b9050610a1781876111d5565b610a21818861103d565b50505050505050565b83421115610a4e5760405163313c898160e11b8152600481018590526024016107c9565b5f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610a998c6001600160a01b03165f90815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090505f610af38261117d565b90505f610b02828787876111a9565b9050896001600160a01b0316816001600160a01b031614610b49576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016107c9565b610b548a8a8a610bbe565b50505050505050505050565b5f828152600b6020526040902060010154610b7a81610c9e565b6106a68383610e62565b604080518082019091525f8082526020820152610ba18383611227565b9392505050565b5f610ba18284612153565b5f610ba18284612172565b6106ed838383600161125b565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f198110156106a65781811015610c3357604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016107c9565b6106a684848484035f61125b565b6001600160a01b038316610c6a57604051634b637e8f60e11b81525f60048201526024016107c9565b6001600160a01b038216610c935760405163ec442f0560e01b81525f60048201526024016107c9565b6106ed83838361132d565b6107e68133611338565b5f610cb383836108ff565b610d32575f838152600b602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610cea3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016105b2565b505f6105b2565b5f306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610d9157507f000000000000000000000000000000000000000000000000000000000000000046145b15610dbb57507f000000000000000000000000000000000000000000000000000000000000000090565b6106b5604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b5f610e6d83836108ff565b15610d32575f838152600b602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016105b2565b5f5f610ed7610929565b90508065ffffffffffff168310610f1257604051637669fc0f60e11b81526004810184905265ffffffffffff821660248201526044016107c9565b610ba183611371565b81545f9081816005811115610f77575f610f34846113a7565b610f3e9085612191565b5f8881526020902090915081015465ffffffffffff9081169087161015610f6757809150610f75565b610f72816001612140565b92505b505b5f610f84878785856114ff565b90508015610fbe57610fa887610f9b600184612191565b5f91825260209091200190565b54600160301b90046001600160d01b0316610fc0565b5f5b979650505050505050565b6001600160a01b038216610ff45760405163ec442f0560e01b81525f60048201526024016107c9565b61086c5f838361132d565b6001600160a01b03821661102857604051634b637e8f60e11b81525f60048201526024016107c9565b61086c825f8361132d565b5f6106b543611371565b6001600160a01b038281165f8181526008602052604080822080548686166001600160a01b0319821681179092559151919094169392849290917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46106ed81836110a98661155e565b61157b565b6001600160a01b0381165f908152600960205260408120546105b2906116e4565b6001600160a01b0381165f908152600760205260408120546105b2565b60606106b57f00000000000000000000000000000000000000000000000000000000000000006005611714565b60606106b57f00000000000000000000000000000000000000000000000000000000000000006006611714565b80545f9080156111755761115f83610f9b600184612191565b54600160301b90046001600160d01b0316610ba1565b5f9392505050565b5f6105b2611189610d39565b8360405161190160f01b8152600281019290925260228201526042902090565b5f5f5f5f6111b9888888886117bd565b9250925092506111c98282611885565b50909695505050505050565b6001600160a01b0382165f9081526007602052604090208054600181019091558181146106ed576040516301d4b62360e61b81526001600160a01b0384166004820152602481018290526044016107c9565b604080518082019091525f80825260208201526001600160a01b0383165f908152600960205260409020610ba1908361193d565b6001600160a01b0384166112845760405163e602df0560e01b81525f60048201526024016107c9565b6001600160a01b0383166112ad57604051634a1406b160e11b81525f60048201526024016107c9565b6001600160a01b038085165f90815260016020908152604080832093871683529290522082905580156106a657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161131f91815260200190565b60405180910390a350505050565b6106ed8383836119aa565b61134282826108ff565b61086c5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016107c9565b5f65ffffffffffff8211156113a3576040516306dfcc6560e41b815260306004820152602481018390526044016107c9565b5090565b5f600182116113b4575090565b816001600160801b82106113cd5760809190911c9060401b5b6801000000000000000082106113e85760409190911c9060201b5b64010000000082106113ff5760209190911c9060101b5b6201000082106114145760109190911c9060081b5b61010082106114285760089190911c9060041b5b6010821061143b5760049190911c9060021b5b600482106114475760011b5b600302600190811c9081858161145f5761145f6121a4565b048201901c90506001818581611477576114776121a4565b048201901c9050600181858161148f5761148f6121a4565b048201901c905060018185816114a7576114a76121a4565b048201901c905060018185816114bf576114bf6121a4565b048201901c905060018185816114d7576114d76121a4565b048201901c90506114f68185816114f0576114f06121a4565b04821190565b90039392505050565b5f5b81831015611556575f6115148484611a10565b5f8781526020902090915065ffffffffffff86169082015465ffffffffffff16111561154257809250611550565b61154d816001612140565b93505b50611501565b509392505050565b6001600160a01b0381165f908152602081905260408120546105b2565b816001600160a01b0316836001600160a01b03161415801561159c57505f81115b156106ed576001600160a01b03831615611643576001600160a01b0383165f90815260096020526040812081906115de90610bb36115d986611a2a565b611a5d565b6001600160d01b031691506001600160d01b03169150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611638929190918252602082015260400190565b60405180910390a250505b6001600160a01b038216156106ed576001600160a01b0382165f908152600960205260408120819061167b90610ba86115d986611a2a565b6001600160d01b031691506001600160d01b03169150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516116d5929190918252602082015260400190565b60405180910390a25050505050565b5f63ffffffff8211156113a3576040516306dfcc6560e41b815260206004820152602481018390526044016107c9565b606060ff831461172e5761172783611a95565b90506105b2565b81805461173a906120f4565b80601f0160208091040260200160405190810160405280929190818152602001828054611766906120f4565b80156117b15780601f10611788576101008083540402835291602001916117b1565b820191905f5260205f20905b81548152906001019060200180831161179457829003601f168201915b505050505090506105b2565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156117f657505f9150600390508261187b565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611847573d5f5f3e3d5ffd5b5050604051601f1901519150506001600160a01b03811661187257505f92506001915082905061187b565b92505f91508190505b9450945094915050565b5f826003811115611898576118986121b8565b036118a1575050565b60018260038111156118b5576118b56121b8565b036118d35760405163f645eedf60e01b815260040160405180910390fd5b60028260038111156118e7576118e76121b8565b036119085760405163fce698f760e01b8152600481018290526024016107c9565b600382600381111561191c5761191c6121b8565b0361086c576040516335e2f38360e21b8152600481018290526024016107c9565b604080518082019091525f8082526020820152825f018263ffffffff168154811061196a5761196a6121cc565b5f9182526020918290206040805180820190915291015465ffffffffffff81168252600160301b90046001600160d01b0316918101919091529392505050565b6119b5838383611ad2565b6001600160a01b038316611a05575f6119cd60025490565b90506001600160d01b0380821115611a0257604051630e58ae9360e11b815260048101839052602481018290526044016107c9565b50505b6106ed838383611bf8565b5f611a1e60028484186121e0565b610ba190848416612140565b5f6001600160d01b038211156113a3576040516306dfcc6560e41b815260d06004820152602481018390526044016107c9565b5f5f611a88611a6a610929565b611a80611a7688611146565b868863ffffffff16565b879190611c6d565b915091505b935093915050565b60605f611aa183611c7a565b6040805160208082528183019092529192505f91906020820181803683375050509182525060208101929092525090565b6001600160a01b038316611afc578060025f828254611af19190612140565b90915550611b6c9050565b6001600160a01b0383165f9081526020819052604090205481811015611b4e5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016107c9565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b038216611b8857600280548290039055611ba6565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611beb91815260200190565b60405180910390a3505050565b6001600160a01b038316611c1a57611c17600a610ba86115d984611a2a565b50505b6001600160a01b038216611c3c57611c39600a610bb36115d984611a2a565b50505b6001600160a01b038381165f908152600860205260408082205485841683529120546106ed9291821691168361157b565b5f80611a88858585611ca1565b5f60ff8216601f8111156105b257604051632cd44ac360e21b815260040160405180910390fd5b82545f9081908015611d97575f611cbd87610f9b600185612191565b805490915065ffffffffffff80821691600160301b90046001600160d01b0316908816821115611d0057604051632520601d60e01b815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff1603611d3957825465ffffffffffff16600160301b6001600160d01b03891602178355611d89565b6040805180820190915265ffffffffffff808a1682526001600160d01b03808a1660208085019182528d54600181018f555f8f81529190912094519151909216600160301b029216919091179101555b9450859350611a8d92505050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a815291822095519251909316600160301b029190931617920191909155905081611a8d565b5f60208284031215611e01575f5ffd5b81356001600160e01b031981168114610ba1575f5ffd5b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610ba16020830184611e18565b80356001600160a01b0381168114611e6e575f5ffd5b919050565b5f5f60408385031215611e84575f5ffd5b611e8d83611e58565b946020939093013593505050565b5f5f5f60608486031215611ead575f5ffd5b611eb684611e58565b9250611ec460208501611e58565b929592945050506040919091013590565b5f60208284031215611ee5575f5ffd5b5035919050565b5f5f60408385031215611efd575f5ffd5b82359150611f0d60208401611e58565b90509250929050565b5f60208284031215611f26575f5ffd5b610ba182611e58565b60ff60f81b8816815260e060208201525f611f4d60e0830189611e18565b8281036040840152611f5f8189611e18565b606084018890526001600160a01b038716608085015260a0840186905283810360c0850152845180825260208087019350909101905f5b81811015611fb4578351835260209384019390920191600101611f96565b50909b9a5050505050505050505050565b803560ff81168114611e6e575f5ffd5b5f5f5f5f5f5f60c08789031215611fea575f5ffd5b611ff387611e58565b9550602087013594506040870135935061200f60608801611fc5565b9598949750929560808101359460a0909101359350915050565b5f5f5f5f5f5f5f60e0888a03121561203f575f5ffd5b61204888611e58565b965061205660208901611e58565b9550604088013594506060880135935061207260808901611fc5565b9699959850939692959460a0840135945060c09093013592915050565b5f5f604083850312156120a0575f5ffd5b6120a983611e58565b9150611f0d60208401611e58565b5f5f604083850312156120c8575f5ffd5b6120d183611e58565b9150602083013563ffffffff811681146120e9575f5ffd5b809150509250929050565b600181811c9082168061210857607f821691505b60208210810361212657634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156105b2576105b261212c565b6001600160d01b0381811683821601908111156105b2576105b261212c565b6001600160d01b0382811682821603908111156105b2576105b261212c565b818103818111156105b2576105b261212c565b634e487b7160e01b5f52601260045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b5f826121fa57634e487b7160e01b5f52601260045260245ffd5b50049056fea2646970667358221220292c0e5fe5842de27ab0615a1e1dc32d4c7f8a56ddb0e4fb5fec8e88eb48a46964736f6c634300081c0033dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611bd0380380611bd083398101604081905261002e91610158565b6040518060400160405280600f81526020016e111bdb985d1a5bdb949958d95a5c1d608a1b8152506040518060400160405280600b81526020016a10949051d49150d152541560aa1b815250815f9081610088919061021d565b506001610095828261021d565b506100a491505f9050826100ab565b50506102d7565b5f8281526006602090815260408083206001600160a01b038516845290915281205460ff1661014f575f8381526006602090815260408083206001600160a01b03861684529091529020805460ff191660011790556101073390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610152565b505f5b92915050565b5f60208284031215610168575f5ffd5b81516001600160a01b038116811461017e575f5ffd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806101ad57607f821691505b6020821081036101cb57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561021857805f5260205f20601f840160051c810160208510156101f65750805b601f840160051c820191505b81811015610215575f8155600101610202565b50505b505050565b81516001600160401b0381111561023657610236610185565b61024a816102448454610199565b846101d1565b6020601f82116001811461027c575f83156102655750848201515b5f19600385901b1c1916600184901b178455610215565b5f84815260208120601f198516915b828110156102ab578785015182556020948501946001909201910161028b565b50848210156102c857868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6118ec806102e45f395ff3fe608060405234801561000f575f5ffd5b5060043610610153575f3560e01c806391d14854116100bf578063c87b56dd11610079578063c87b56dd14610301578063cf456ae714610314578063d3fc986414610327578063d53913931461033a578063d547741f1461034e578063e985e9c514610361575f5ffd5b806391d148541461029957806395d89b41146102ac578063a217fddf146102b4578063a22cb465146102bb578063b63e6ac3146102ce578063b88d4fde146102ee575f5ffd5b8063248a9ca311610110578063248a9ca31461020a5780632f2ff15d1461023a57806336568abe1461024d57806342842e0e146102605780636352211e1461027357806370a0823114610286575f5ffd5b806301ffc9a71461015757806306fdde031461017f578063081812fc14610194578063095ea7b3146101bf5780630f7ee1ec146101d457806323b872dd146101f7575b5f5ffd5b61016a610165366004611346565b610374565b60405190151581526020015b60405180910390f35b610187610384565b604051610176919061138f565b6101a76101a23660046113a1565b610413565b6040516001600160a01b039091168152602001610176565b6101d26101cd3660046113d3565b61043a565b005b6101e76101e23660046113a1565b610449565b60405161017694939291906113fb565b6101d2610205366004611431565b610503565b61022c6102183660046113a1565b5f9081526006602052604090206001015490565b604051908152602001610176565b6101d261024836600461146b565b610591565b6101d261025b36600461146b565b6105b5565b6101d261026e366004611431565b6105ed565b6101a76102813660046113a1565b610607565b61022c610294366004611495565b610611565b61016a6102a736600461146b565b610656565b610187610680565b61022c5f81565b6101d26102c93660046114ae565b61068f565b6102e16102dc3660046113a1565b61069a565b60405161017691906114e7565b6101d26102fc36600461153b565b6107b2565b61018761030f3660046113a1565b6107ca565b6101d26103223660046114ae565b61083b565b61022c610335366004611618565b610879565b61022c5f5160206118975f395f51905f5281565b6101d261035c36600461146b565b6109b5565b61016a61036f36600461169b565b6109d9565b5f61037e82610a06565b92915050565b60605f8054610392906116c3565b80601f01602080910402602001604051908101604052809291908181526020018280546103be906116c3565b80156104095780601f106103e057610100808354040283529160200191610409565b820191905f5260205f20905b8154815290600101906020018083116103ec57829003601f168201915b5050505050905090565b5f61041d82610a2a565b505f828152600460205260409020546001600160a01b031661037e565b610445828233610a62565b5050565b60086020525f908152604090208054600182015460028301546003840180546001600160a01b03909416949293919291610482906116c3565b80601f01602080910402602001604051908101604052809291908181526020018280546104ae906116c3565b80156104f95780601f106104d0576101008083540402835291602001916104f9565b820191905f5260205f20905b8154815290600101906020018083116104dc57829003601f168201915b5050505050905084565b6001600160a01b03821661053157604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f61053d838333610a6f565b9050836001600160a01b0316816001600160a01b03161461058b576040516364283d7b60e01b81526001600160a01b0380861660048301526024820184905282166044820152606401610528565b50505050565b5f828152600660205260409020600101546105ab81610b24565b61058b8383610b31565b6001600160a01b03811633146105de5760405163334bd91960e11b815260040160405180910390fd5b6105e88282610bc2565b505050565b6105e883838360405180602001604052805f8152506107b2565b5f61037e82610a2a565b5f6001600160a01b03821661063b576040516322718ad960e21b81525f6004820152602401610528565b506001600160a01b03165f9081526003602052604090205490565b5f9182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060018054610392906116c3565b610445338383610c2d565b6106cb60405180608001604052805f6001600160a01b031681526020015f81526020015f8152602001606081525090565b6106d482610a2a565b505f82815260086020908152604091829020825160808101845281546001600160a01b0316815260018201549281019290925260028101549282019290925260038201805491929160608401919061072b906116c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610757906116c3565b80156107a25780601f10610779576101008083540402835291602001916107a2565b820191905f5260205f20905b81548152906001019060200180831161078557829003601f168201915b5050505050815250509050919050565b6107bd848484610503565b61058b3385858585610ccb565b60606107d582610a2a565b505f6107eb60408051602081019091525f815290565b90505f8151116108095760405180602001604052805f815250610834565b8061081384610df3565b604051602001610824929190611712565b6040516020818303038152906040525b9392505050565b5f61084581610b24565b81156108625761058b5f5160206118975f395f51905f5284610b31565b61058b5f5160206118975f395f51905f5284610bc2565b5f5f5160206118975f395f51905f5261089181610b24565b600780545f91826108a183611726565b9190505590506040518060800160405280886001600160a01b0316815260200187815260200142815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505083815260086020908152604091829020845181546001600160a01b0319166001600160a01b0390911617815590840151600182015590830151600282015560608301519091506003820190610959908261178e565b509050506109678782610e83565b866001600160a01b0316817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea5886040516109a391815260200190565b60405180910390a39695505050505050565b5f828152600660205260409020600101546109cf81610b24565b61058b8383610bc2565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f6001600160e01b03198216637965db0b60e01b148061037e575061037e82610e9c565b5f818152600260205260408120546001600160a01b03168061037e57604051637e27328960e01b815260048101849052602401610528565b6105e88383836001610eeb565b5f828152600260205260408120546001600160a01b03168015801590610a9d57506001600160a01b03851615155b15610b105760405162461bcd60e51b815260206004820152603d60248201527f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f60448201527f756e6420616e642063616e6e6f74206265207472616e736665727265640000006064820152608401610528565b610b1b858585610fef565b95945050505050565b610b2e81336110e1565b50565b5f610b3c8383610656565b610bbb575f8381526006602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610b733390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161037e565b505f61037e565b5f610bcd8383610656565b15610bbb575f8381526006602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161037e565b6001600160a01b038216610c5f57604051630b61174360e31b81526001600160a01b0383166004820152602401610528565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15610dec57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610d0d908890889087908790600401611849565b6020604051808303815f875af1925050508015610d47575060408051601f3d908101601f19168201909252610d449181019061187b565b60015b610dae573d808015610d74576040519150601f19603f3d011682016040523d82523d5f602084013e610d79565b606091505b5080515f03610da657604051633250574960e11b81526001600160a01b0385166004820152602401610528565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b14610dea57604051633250574960e11b81526001600160a01b0385166004820152602401610528565b505b5050505050565b60605f610dff8361111a565b60010190505f8167ffffffffffffffff811115610e1e57610e1e611527565b6040519080825280601f01601f191660200182016040528015610e48576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610e5257509392505050565b610445828260405180602001604052805f8152506111f1565b5f6001600160e01b031982166380ac58cd60e01b1480610ecc57506001600160e01b03198216635b5e139f60e01b145b8061037e57506301ffc9a760e01b6001600160e01b031983161461037e565b8080610eff57506001600160a01b03821615155b15610fc0575f610f0e84610a2a565b90506001600160a01b03831615801590610f3a5750826001600160a01b0316816001600160a01b031614155b8015610f4d5750610f4b81846109d9565b155b15610f765760405163a9fbf51f60e01b81526001600160a01b0384166004820152602401610528565b8115610fbe5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f828152600260205260408120546001600160a01b039081169083161561101b5761101b818486611208565b6001600160a01b03811615611055576110365f855f5f610eeb565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615611083576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6110eb8282610656565b6104455760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610528565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106111585772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611184576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106111a257662386f26fc10000830492506010015b6305f5e10083106111ba576305f5e100830492506008015b61271083106111ce57612710830492506004015b606483106111e0576064830492506002015b600a831061037e5760010192915050565b6111fb838361126c565b6105e8335f858585610ccb565b6112138383836112cd565b6105e8576001600160a01b03831661124157604051637e27328960e01b815260048101829052602401610528565b60405163177e802f60e01b81526001600160a01b038316600482015260248101829052604401610528565b6001600160a01b03821661129557604051633250574960e11b81525f6004820152602401610528565b5f6112a183835f610a6f565b90506001600160a01b038116156105e8576040516339e3563760e11b81525f6004820152602401610528565b5f6001600160a01b038316158015906113295750826001600160a01b0316846001600160a01b03161480611306575061130684846109d9565b8061132957505f828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160e01b031981168114610b2e575f5ffd5b5f60208284031215611356575f5ffd5b813561083481611331565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6108346020830184611361565b5f602082840312156113b1575f5ffd5b5035919050565b80356001600160a01b03811681146113ce575f5ffd5b919050565b5f5f604083850312156113e4575f5ffd5b6113ed836113b8565b946020939093013593505050565b60018060a01b0385168152836020820152826040820152608060608201525f6114276080830184611361565b9695505050505050565b5f5f5f60608486031215611443575f5ffd5b61144c846113b8565b925061145a602085016113b8565b929592945050506040919091013590565b5f5f6040838503121561147c575f5ffd5b8235915061148c602084016113b8565b90509250929050565b5f602082840312156114a5575f5ffd5b610834826113b8565b5f5f604083850312156114bf575f5ffd5b6114c8836113b8565b9150602083013580151581146114dc575f5ffd5b809150509250929050565b6020815260018060a01b03825116602082015260208201516040820152604082015160608201525f606083015160808084015261132960a0840182611361565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f6080858703121561154e575f5ffd5b611557856113b8565b9350611565602086016113b8565b925060408501359150606085013567ffffffffffffffff811115611587575f5ffd5b8501601f81018713611597575f5ffd5b803567ffffffffffffffff8111156115b1576115b1611527565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156115e0576115e0611527565b6040528181528282016020018910156115f7575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f5f5f6060858703121561162b575f5ffd5b611634856113b8565b935060208501359250604085013567ffffffffffffffff811115611656575f5ffd5b8501601f81018713611666575f5ffd5b803567ffffffffffffffff81111561167c575f5ffd5b87602082840101111561168d575f5ffd5b949793965060200194505050565b5f5f604083850312156116ac575f5ffd5b6116b5836113b8565b915061148c602084016113b8565b600181811c908216806116d757607f821691505b6020821081036116f557634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f61132961172083866116fb565b846116fb565b5f6001820161174357634e487b7160e01b5f52601160045260245ffd5b5060010190565b601f8211156105e857805f5260205f20601f840160051c8101602085101561176f5750805b601f840160051c820191505b81811015610dec575f815560010161177b565b815167ffffffffffffffff8111156117a8576117a8611527565b6117bc816117b684546116c3565b8461174a565b6020601f8211600181146117ee575f83156117d75750848201515b5f19600385901b1c1916600184901b178455610dec565b5f84815260208120601f198516915b8281101561181d57878501518255602094850194600190920191016117fd565b508482101561183a57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061142790830184611361565b5f6020828403121561188b575f5ffd5b81516108348161133156fe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a264697066735822122056c8b482297d004694f5084af8dc4713f2b5a8d861ea19f6345ff7b4556ffa4a64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161107638038061107683398101604081905261002e91610113565b6100385f8261006a565b506100637f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea098261006a565b5050610140565b5f828152602081815260408083206001600160a01b038516845290915281205460ff1661010a575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100c23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161010d565b505f5b92915050565b5f60208284031215610123575f5ffd5b81516001600160a01b0381168114610139575f5ffd5b9392505050565b610f298061014d5f395ff3fe608060405234801561000f575f5ffd5b50600436106100f0575f3560e01c8063a217fddf11610093578063d42b291c11610063578063d42b291c14610217578063d547741f1461022a578063d7bfe3861461023d578063e7705db614610268575f5ffd5b8063a217fddf146101af578063a622ee7c146101b6578063b9209e33146101d9578063ceb68c2314610204575f5ffd5b806336568abe116100ce57806336568abe1461016157806374d4e4911461017457806390229af71461017c57806391d148541461019c575f5ffd5b806301ffc9a7146100f4578063248a9ca31461011c5780632f2ff15d1461014c575b5f5ffd5b610107610102366004610ae2565b61028f565b60405190151581526020015b60405180910390f35b61013e61012a366004610b10565b5f9081526020819052604090206001015490565b604051908152602001610113565b61015f61015a366004610b42565b6102c5565b005b61015f61016f366004610b42565b6102ef565b60025461013e565b61018f61018a366004610b6c565b610327565b6040516101139190610be7565b6101076101aa366004610b42565b6104cd565b61013e5f81565b6101c96101c4366004610b6c565b6104f5565b6040516101139493929190610c47565b6101076101e7366004610b6c565b6001600160a01b03165f9081526001602052604090205460ff1690565b61015f610212366004610b6c565b610631565b61015f610225366004610cd0565b610705565b61015f610238366004610b42565b610954565b61025061024b366004610b10565b610978565b6040516001600160a01b039091168152602001610113565b61013e7f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0981565b5f6001600160e01b03198216637965db0b60e01b14806102bf57506301ffc9a760e01b6001600160e01b03198316145b92915050565b5f828152602081905260409020600101546102df816109a0565b6102e983836109ad565b50505050565b6001600160a01b03811633146103185760405163334bd91960e11b815260040160405180910390fd5b6103228282610a3c565b505050565b60408051608080820183525f80835260208084018290526060848601819052808501526001600160a01b038616825260018152908490208451928301909452835460ff80821615158452939492939184019161010090910416600481111561039157610391610b85565b60048111156103a2576103a2610b85565b81526020016001820180546103b690610d65565b80601f01602080910402602001604051908101604052809291908181526020018280546103e290610d65565b801561042d5780601f106104045761010080835404028352916020019161042d565b820191905f5260205f20905b81548152906001019060200180831161041057829003601f168201915b5050505050815260200160028201805461044690610d65565b80601f016020809104026020016040519081016040528092919081815260200182805461047290610d65565b80156104bd5780601f10610494576101008083540402835291602001916104bd565b820191905f5260205f20905b8154815290600101906020018083116104a057829003601f168201915b5050505050815250509050919050565b5f918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600160208190525f91825260409091208054918101805460ff8085169461010090041692919061052490610d65565b80601f016020809104026020016040519081016040528092919081815260200182805461055090610d65565b801561059b5780601f106105725761010080835404028352916020019161059b565b820191905f5260205f20905b81548152906001019060200180831161057e57829003601f168201915b5050505050908060020180546105b090610d65565b80601f01602080910402602001604051908101604052809291908181526020018280546105dc90610d65565b80156106275780601f106105fe57610100808354040283529160200191610627565b820191905f5260205f20905b81548152906001019060200180831161060a57829003601f168201915b5050505050905084565b7f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0961065b816109a0565b6001600160a01b0382165f9081526001602052604090205460ff166106bc5760405162461bcd60e51b815260206004820152601260248201527115985d5b1d081b9bdd081d995c9a599a595960721b60448201526064015b60405180910390fd5b6001600160a01b0382165f81815260016020526040808220805460ff19169055517fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a9190a25050565b7f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0961072f816109a0565b6001600160a01b0387166107775760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016106b3565b6001600160a01b0387165f9081526001602052604090205460ff166107e157600280546001810182555f919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0389161790555b604051806080016040528060011515815260200187600481111561080757610807610b85565b815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250604080516020601f8701819004810282018101909252858152918101919086908690819084018382808284375f9201829052509390945250506001600160a01b038a1681526001602090815260409091208351815490151560ff19821681178355928501519193509091839161ff001990911661ffff19909116176101008360048111156108d4576108d4610b85565b0217905550604082015160018201906108ed9082610dfc565b50606082015160028201906109029082610dfc565b50905050866001600160a01b03167f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec887878760405161094393929190610eb7565b60405180910390a250505050505050565b5f8281526020819052604090206001015461096e816109a0565b6102e98383610a3c565b60028181548110610987575f80fd5b5f918252602090912001546001600160a01b0316905081565b6109aa8133610aa5565b50565b5f6109b883836104cd565b610a35575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556109ed3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016102bf565b505f6102bf565b5f610a4783836104cd565b15610a35575f838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016102bf565b610aaf82826104cd565b610ade5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016106b3565b5050565b5f60208284031215610af2575f5ffd5b81356001600160e01b031981168114610b09575f5ffd5b9392505050565b5f60208284031215610b20575f5ffd5b5035919050565b80356001600160a01b0381168114610b3d575f5ffd5b919050565b5f5f60408385031215610b53575f5ffd5b82359150610b6360208401610b27565b90509250929050565b5f60208284031215610b7c575f5ffd5b610b0982610b27565b634e487b7160e01b5f52602160045260245ffd5b60058110610bb557634e487b7160e01b5f52602160045260245ffd5b9052565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081528151151560208201525f6020830151610c076040840182610b99565b50604083015160806060840152610c2160a0840182610bb9565b90506060840151601f19848303016080850152610c3e8282610bb9565b95945050505050565b8415158152610c596020820185610b99565b608060408201525f610c6e6080830185610bb9565b8281036060840152610c808185610bb9565b979650505050505050565b5f5f83601f840112610c9b575f5ffd5b50813567ffffffffffffffff811115610cb2575f5ffd5b602083019150836020828501011115610cc9575f5ffd5b9250929050565b5f5f5f5f5f5f60808789031215610ce5575f5ffd5b610cee87610b27565b9550602087013560058110610d01575f5ffd5b9450604087013567ffffffffffffffff811115610d1c575f5ffd5b610d2889828a01610c8b565b909550935050606087013567ffffffffffffffff811115610d47575f5ffd5b610d5389828a01610c8b565b979a9699509497509295939492505050565b600181811c90821680610d7957607f821691505b602082108103610d9757634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52604160045260245ffd5b601f82111561032257805f5260205f20601f840160051c81016020851015610dd65750805b601f840160051c820191505b81811015610df5575f8155600101610de2565b5050505050565b815167ffffffffffffffff811115610e1657610e16610d9d565b610e2a81610e248454610d65565b84610db1565b6020601f821160018114610e5c575f8315610e455750848201515b5f19600385901b1c1916600184901b178455610df5565b5f84815260208120601f198516915b82811015610e8b5787850151825560209485019460019092019101610e6b565b5084821015610ea857868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b610ec18185610b99565b60406020820152816040820152818360608301375f818301606090810191909152601f909201601f191601019291505056fea2646970667358221220e93b1081a0d808b56e5b21612b602e76649e69c93882c885072b40cd2de299b264736f6c634300081c0033"
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
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051611ce4380380611ce4833981016040819052602b916053565b60015f81905580546001600160a01b0319166001600160a01b0392909216919091179055607e565b5f602082840312156062575f5ffd5b81516001600160a01b03811681146077575f5ffd5b9392505050565b611c598061008b5f395ff3fe608060405234801561000f575f5ffd5b50600436106100f0575f3560e01c80637b10399911610093578063d6bd07ee11610063578063d6bd07ee1461028c578063d74238581461029f578063f07a380e146102b2578063f23a6e61146102c5575f5ffd5b80637b1039991461022357806381bd34d214610236578063bc197c8114610266578063c2fe518514610279575f5ffd5b80632ff1d0f9116100ce5780632ff1d0f91461018057806335f81b8714610195578063380ff999146101a85780636f39becd146101d8575f5ffd5b806301ffc9a7146100f4578063041261961461011c578063150b7a0214610154575b5f5ffd5b610107610102366004611485565b6102d8565b60405190151581526020015b60405180910390f35b61014661012a3660046114ca565b600460209081525f928352604080842090915290825290205481565b604051908152602001610113565b6101676101623660046115db565b61030e565b6040516001600160e01b03199091168152602001610113565b61019361018e366004611643565b610535565b005b6101936101a3366004611675565b61076a565b6101466101b63660046116c3565b600560209081525f938452604080852082529284528284209052825290205481565b61020b6101e63660046114ca565b600260209081525f92835260408084209091529082529020546001600160a01b031681565b6040516001600160a01b039091168152602001610113565b60015461020b906001600160a01b031681565b6101466102443660046116c3565b600360209081525f938452604080852082529284528284209052825290205481565b610167610274366004611782565b61078f565b610193610287366004611835565b610aad565b61019361029a36600461187a565b610ad0565b6101936102ad3660046116c3565b610ae5565b6101936102c03660046114ca565b610b02565b6101676102d33660046118c1565b610c92565b5f6001600160e01b03198216630271189760e51b148061030857506301ffc9a760e01b6001600160e01b03198316145b92915050565b5f610317610ec0565b815184905f906020036103cb5760015460405163b9209e3360e01b81526001600160a01b0388811660048301529091169063b9209e3390602401602060405180830381865afa15801561036c573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610390919061192d565b156103b057838060200190518101906103a99190611946565b91506103ee565b838060200190518101906103c49190611961565b90506103ee565b83516040036103ee57838060200190518101906103e89190611978565b90925090505b335f908152600260209081526040808320888452909152812080546001600160a01b0319166001600160a01b0385161790558161042b575f610435565b61043582426119b8565b335f9081526004602081815260408084208b855290915280832084905560015490516390229af760e01b8152309281019290925292935090916001600160a01b0316906390229af7906024015f60405180830381865afa15801561049b573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526104c29190810190611a18565b604001519050836001600160a01b031687336001600160a01b03167f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad3848660405161050e929190611b06565b60405180910390a4630a85bd0160e11b94505050505061052d60015f55565b949350505050565b61053d610ec0565b6001600160a01b0383165f90815260036020908152604080832085845282528083203384529091529020548111156105b35760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064015b60405180910390fd5b6001600160a01b0383165f90815260056020908152604080832085845282528083203384529091529020544210156105fd5760405162461bcd60e51b81526004016105aa90611b27565b6001600160a01b0383165f908152600360209081526040808320858452825280832033845290915281208054839290610637908490611b5e565b90915550506001600160a01b0383165f90815260036020908152604080832085845282528083203384529091528120549003610699576001600160a01b0383165f90815260056020908152604080832085845282528083203384529091528120555b604051637921219560e11b8152306004820152336024820152604481018390526064810182905260a060848201525f60a48201526001600160a01b0384169063f242432a9060c4015f604051808303815f87803b1580156106f8575f5ffd5b505af115801561070a573d5f5f3e3d5ffd5b50505050336001600160a01b031682846001600160a01b03167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f98460405161075491815260200190565b60405180910390a461076560015f55565b505050565b610772610ec0565b61077f8585858585610ee8565b61078860015f55565b5050505050565b5f610798610ec0565b815185905f9060200361084c5760015460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa1580156107ed573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610811919061192d565b15610831578380602001905181019061082a9190611946565b915061086f565b838060200190518101906108459190611961565b905061086f565b835160400361086f57838060200190518101906108699190611978565b90925090505b5f5f821161087d575f610887565b61088782426119b8565b6001546040516390229af760e01b81523060048201529192505f916001600160a01b03909116906390229af7906024015f60405180830381865afa1580156108d1573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526108f89190810190611a18565b6040015190505f5b8851811015610a8b5787818151811061091b5761091b611b71565b602002602001015160035f336001600160a01b03166001600160a01b031681526020019081526020015f205f8b848151811061095957610959611b71565b602002602001015181526020019081526020015f205f876001600160a01b03166001600160a01b031681526020019081526020015f205f82825461099d91906119b8565b9091555050335f9081526005602052604081208a518592908c90859081106109c7576109c7611b71565b602002602001015181526020019081526020015f205f876001600160a01b03166001600160a01b031681526020019081526020015f2081905550846001600160a01b0316898281518110610a1d57610a1d611b71565b6020026020010151336001600160a01b03167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358b8581518110610a6257610a62611b71565b60200260200101518688604051610a7b93929190611b85565b60405180910390a4600101610900565b5063bc197c8160e01b5b945050505050610aa460015f55565b95945050505050565b610ab5610ec0565b610ac1848484846111f2565b610aca60015f55565b50505050565b610ad8610ec0565b610ac1848484845f610ee8565b610aed610ec0565b610af98383835f6111f2565b61076560015f55565b610b0a610ec0565b6001600160a01b038281165f908152600260209081526040808320858452909152902054163314610b6d5760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b60448201526064016105aa565b6001600160a01b0382165f908152600460209081526040808320848452909152902054421015610baf5760405162461bcd60e51b81526004016105aa90611b27565b6001600160a01b0382165f818152600260209081526040808320858452825280832080546001600160a01b03191690558383526004808352818420868552909252808320929092559051632142170760e11b81523091810191909152336024820152604481018390526342842e0e906064015f604051808303815f87803b158015610c38575f5ffd5b505af1158015610c4a573d5f5f3e3d5ffd5b50506040513392508391506001600160a01b038516907f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06905f90a4610c8e60015f55565b5050565b5f610c9b610ec0565b815185905f90602003610d4f5760015460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015610cf0573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d14919061192d565b15610d345783806020019051810190610d2d9190611946565b9150610d72565b83806020019051810190610d489190611961565b9050610d72565b8351604003610d725783806020019051810190610d6c9190611978565b90925090505b335f90815260036020908152604080832089845282528083206001600160a01b038616845290915281208054879290610dac9084906119b8565b909155505f905081610dbe575f610dc8565b610dc882426119b8565b335f9081526005602090815260408083208b845282528083206001600160a01b038881168552925280832084905560015490516390229af760e01b815230600482015293945091929116906390229af7906024015f60405180830381865afa158015610e36573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610e5d9190810190611a18565b604001519050836001600160a01b031688336001600160a01b03167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358a8587604051610eab93929190611b85565b60405180910390a463f23a6e6160e01b610a95565b60025f5403610ee257604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b6001600160a01b0385165f9081526003602090815260408083208784528252808320338452909152902054831115610f595760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016105aa565b60015460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa158015610fa1573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fc5919061192d565b61100c5760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b60448201526064016105aa565b6001600160a01b0385165f90815260056020908152604080832087845282528083203384529091529020544210156110565760405162461bcd60e51b81526004016105aa90611b27565b6001600160a01b0385165f908152600360209081526040808320878452825280832033845290915281208054859290611090908490611b5e565b90915550506001600160a01b0385165f908152600360209081526040808320878452825280832033845290915281205490036110f2576001600160a01b0385165f90815260056020908152604080832087845282528083203384529091528120555b6060811561112357604080513360208201529081018390526060016040516020818303038152906040529050611140565b604080513360208201520160405160208183030381529060405290505b604051637921219560e11b81526001600160a01b0387169063f242432a9061117490309087908a908a908890600401611bad565b5f604051808303815f87803b15801561118b575f5ffd5b505af115801561119d573d5f5f3e3d5ffd5b5050604080518781526001600160a01b0387811660208301523394508993508a16917fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1910160405180910390a4505050505050565b6001600160a01b038481165f9081526002602090815260408083208784529091529020541633146112555760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b60448201526064016105aa565b60015460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa15801561129d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112c1919061192d565b6113085760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b60448201526064016105aa565b6001600160a01b0384165f90815260046020908152604080832086845290915290205442101561134a5760405162461bcd60e51b81526004016105aa90611b27565b6001600160a01b0384165f818152600260209081526040808320878452825280832080546001600160a01b031916905592825260048152828220868352905290812055606081156113be576040805133602082015290810183905260600160405160208183030381529060405290506113db565b604080513360208201520160405160208183030381529060405290505b604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde9061140d903090879089908790600401611bf1565b5f604051808303815f87803b158015611424575f5ffd5b505af1158015611436573d5f5f3e3d5ffd5b50506040516001600160a01b0386811682523393508792508816907f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d799060200160405180910390a45050505050565b5f60208284031215611495575f5ffd5b81356001600160e01b0319811681146114ac575f5ffd5b9392505050565b6001600160a01b03811681146114c7575f5ffd5b50565b5f5f604083850312156114db575f5ffd5b82356114e6816114b3565b946020939093013593505050565b634e487b7160e01b5f52604160045260245ffd5b6040516080810167ffffffffffffffff8111828210171561152b5761152b6114f4565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561155a5761155a6114f4565b604052919050565b5f67ffffffffffffffff82111561157b5761157b6114f4565b50601f01601f191660200190565b5f82601f830112611598575f5ffd5b81356115ab6115a682611562565b611531565b8181528460208386010111156115bf575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f608085870312156115ee575f5ffd5b84356115f9816114b3565b93506020850135611609816114b3565b925060408501359150606085013567ffffffffffffffff81111561162b575f5ffd5b61163787828801611589565b91505092959194509250565b5f5f5f60608486031215611655575f5ffd5b8335611660816114b3565b95602085013595506040909401359392505050565b5f5f5f5f5f60a08688031215611689575f5ffd5b8535611694816114b3565b9450602086013593506040860135925060608601356116b2816114b3565b949793965091946080013592915050565b5f5f5f606084860312156116d5575f5ffd5b83356116e0816114b3565b92506020840135915060408401356116f7816114b3565b809150509250925092565b5f82601f830112611711575f5ffd5b813567ffffffffffffffff81111561172b5761172b6114f4565b8060051b61173b60208201611531565b91825260208185018101929081019086841115611756575f5ffd5b6020860192505b8383101561177857823582526020928301929091019061175d565b9695505050505050565b5f5f5f5f5f60a08688031215611796575f5ffd5b85356117a1816114b3565b945060208601356117b1816114b3565b9350604086013567ffffffffffffffff8111156117cc575f5ffd5b6117d888828901611702565b935050606086013567ffffffffffffffff8111156117f4575f5ffd5b61180088828901611702565b925050608086013567ffffffffffffffff81111561181c575f5ffd5b61182888828901611589565b9150509295509295909350565b5f5f5f5f60808587031215611848575f5ffd5b8435611853816114b3565b935060208501359250604085013561186a816114b3565b9396929550929360600135925050565b5f5f5f5f6080858703121561188d575f5ffd5b8435611898816114b3565b9350602085013592506040850135915060608501356118b6816114b3565b939692955090935050565b5f5f5f5f5f60a086880312156118d5575f5ffd5b85356118e0816114b3565b945060208601356118f0816114b3565b93506040860135925060608601359150608086013567ffffffffffffffff81111561181c575f5ffd5b80518015158114611928575f5ffd5b919050565b5f6020828403121561193d575f5ffd5b6114ac82611919565b5f60208284031215611956575f5ffd5b81516114ac816114b3565b5f60208284031215611971575f5ffd5b5051919050565b5f5f60408385031215611989575f5ffd5b8251611994816114b3565b6020939093015192949293505050565b634e487b7160e01b5f52601160045260245ffd5b80820180821115610308576103086119a4565b5f82601f8301126119da575f5ffd5b81516119e86115a682611562565b8181528460208386010111156119fc575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f60208284031215611a28575f5ffd5b815167ffffffffffffffff811115611a3e575f5ffd5b820160808185031215611a4f575f5ffd5b611a57611508565b611a6082611919565b8152602082015160ff81168114611a75575f5ffd5b6020820152604082015167ffffffffffffffff811115611a93575f5ffd5b611a9f868285016119cb565b604083015250606082015167ffffffffffffffff811115611abe575f5ffd5b611aca868285016119cb565b606083015250949350505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b604081525f611b186040830185611ad8565b90508260208301529392505050565b6020808252601a908201527f45786869626974696f6e206e6f74207965742065787069726564000000000000604082015260600190565b81810381811115610308576103086119a4565b634e487b7160e01b5f52603260045260245ffd5b838152606060208201525f611b9d6060830185611ad8565b9050826040830152949350505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f90611be690830184611ad8565b979650505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061177890830184611ad856fea2646970667358221220d8220913d6c3e17e6052ba67d8477382890e20132f854508dd300c0bc033a15064736f6c634300081c0033"
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
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610540380380610540833981016040819052602b916074565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560a0565b80516001600160a01b0381168114606f575f5ffd5b919050565b5f5f604083850312156084575f5ffd5b608b83605a565b9150609760208401605a565b90509250929050565b610493806100ad5f395ff3fe608060405260043610610041575f3560e01c8063150b7a021461004c5780631afed87514610089578063abc8c7af146100aa578063d56d229d146100e0575f5ffd5b3661004857005b5f5ffd5b348015610057575f5ffd5b5061006b610066366004610363565b6100ff565b6040516001600160e01b031990911681526020015b60405180910390f35b348015610094575f5ffd5b506100a86100a33660046103fc565b610174565b005b3480156100b5575f5ffd5b505f546100c8906001600160a01b031681565b6040516001600160a01b039091168152602001610080565b3480156100eb575f5ffd5b506001546100c8906001600160a01b031681565b5f805460015460405163016295ab60e21b81526001600160a01b0391821660048201526024810187905291169063058a56ac906044015f604051808303815f87803b15801561014c575f5ffd5b505af115801561015e573d5f5f3e3d5ffd5b50630a85bd0160e11b9998505050505050505050565b5f5f5f9054906101000a90046001600160a01b03166001600160a01b0316633013ce296040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101c4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101e8919061041c565b6040516323b872dd60e01b8152336004820152306024820152604481018490529091506001600160a01b038216906323b872dd906064016020604051808303815f875af115801561023b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061025f919061043e565b505f5460405163095ea7b360e01b81526001600160a01b039182166004820152602481018490529082169063095ea7b3906044016020604051808303815f875af11580156102af573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102d3919061043e565b505f5460018054604051636c4c557960e11b81526001600160a01b039182166004820152602481018790526044810192909252606482018590529091169063d898aaf2906084015f604051808303815f87803b158015610331575f5ffd5b505af1158015610343573d5f5f3e3d5ffd5b50505050505050565b6001600160a01b0381168114610360575f5ffd5b50565b5f5f5f5f5f60808688031215610377575f5ffd5b85356103828161034c565b945060208601356103928161034c565b935060408601359250606086013567ffffffffffffffff8111156103b4575f5ffd5b8601601f810188136103c4575f5ffd5b803567ffffffffffffffff8111156103da575f5ffd5b8860208284010111156103eb575f5ffd5b959894975092955050506020019190565b5f5f6040838503121561040d575f5ffd5b50508035926020909101359150565b5f6020828403121561042c575f5ffd5b81516104378161034c565b9392505050565b5f6020828403121561044e575f5ffd5b81518015158114610437575f5ffdfea26469706673582212204680084d2621e0c3fe4b0903960782027acf3fe77eadd9db53b61e0cd5b194b764736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060408051602081019091525f8152339061002981610066565b506001600160a01b03811661005757604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006081610076565b50610219565b6002610072828261015f565b5050565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806100ef57607f821691505b60208210810361010d57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561015a57805f5260205f20601f840160051c810160208510156101385750805b601f840160051c820191505b81811015610157575f8155600101610144565b50505b505050565b81516001600160401b03811115610178576101786100c7565b61018c8161018684546100db565b84610113565b6020601f8211600181146101be575f83156101a75750848201515b5f19600385901b1c1916600184901b178455610157565b5f84815260208120601f198516915b828110156101ed57878501518255602094850194600190920191016101cd565b508482101561020a57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b61124b806102265f395ff3fe608060405234801561000f575f5ffd5b50600436106100b0575f3560e01c8063715018a61161006e578063715018a6146101655780638da5cb5b1461016d578063a22cb46514610188578063e985e9c51461019b578063f242432a146101ae578063f2fde38b146101c1575f5ffd5b8062fdd58e146100b457806301ffc9a7146100da5780630e89341c146100fd578063156e29f61461011d5780632eb2c2d6146101325780634e1273f414610145575b5f5ffd5b6100c76100c2366004610c08565b6101d4565b6040519081526020015b60405180910390f35b6100ed6100e8366004610c45565b6101fb565b60405190151581526020016100d1565b61011061010b366004610c67565b61024a565b6040516100d19190610cac565b61013061012b366004610cbe565b6102dc565b005b610130610140366004610e2c565b610303565b610158610153366004610edb565b61036f565b6040516100d19190610fd8565b61013061043a565b6003546040516001600160a01b0390911681526020016100d1565b610130610196366004610fea565b61044d565b6100ed6101a9366004611023565b61045c565b6101306101bc366004611054565b610489565b6101306101cf3660046110a8565b6104e8565b5f818152602081815260408083206001600160a01b03861684529091529020545b92915050565b5f6001600160e01b03198216636cdb3d1360e11b148061022b57506001600160e01b031982166303a24d0760e21b145b806101f557506301ffc9a760e01b6001600160e01b03198316146101f5565b606060028054610259906110c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610285906110c1565b80156102d05780601f106102a7576101008083540402835291602001916102d0565b820191905f5260205f20905b8154815290600101906020018083116102b357829003601f168201915b50505050509050919050565b6102e4610525565b6102fe83838360405180602001604052805f815250610552565b505050565b336001600160a01b03861681148015906103245750610322868261045c565b155b1561035a5760405163711bec9160e11b81526001600160a01b038083166004830152871660248201526044015b60405180910390fd5b61036786868686866105ad565b505050505050565b606081518351146103a05781518351604051635b05999160e01b815260048101929092526024820152604401610351565b5f835167ffffffffffffffff8111156103bb576103bb610cee565b6040519080825280602002602001820160405280156103e4578160200160208202803683370190505b5090505f5b84518110156104325760208082028601015161040d906020808402870101516101d4565b82828151811061041f5761041f6110f9565b60209081029190910101526001016103e9565b509392505050565b610442610525565b61044b5f610612565b565b610458338383610663565b5050565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b03861681148015906104aa57506104a8868261045c565b155b156104db5760405163711bec9160e11b81526001600160a01b03808316600483015287166024820152604401610351565b61036786868686866106f7565b6104f0610525565b6001600160a01b03811661051957604051631e4fbdf760e01b81525f6004820152602401610351565b61052281610612565b50565b6003546001600160a01b0316331461044b5760405163118cdaa760e01b8152336004820152602401610351565b6001600160a01b03841661057b57604051632bfa23e760e11b81525f6004820152602401610351565b604080516001808252602082018690528183019081526060820185905260808201909252906103675f87848487610783565b6001600160a01b0384166105d657604051632bfa23e760e11b81525f6004820152602401610351565b6001600160a01b0385166105fe57604051626a0d4560e21b81525f6004820152602401610351565b61060b8585858585610783565b5050505050565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b03821661068b5760405162ced3e160e81b81525f6004820152602401610351565b6001600160a01b038381165f81815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661072057604051632bfa23e760e11b81525f6004820152602401610351565b6001600160a01b03851661074857604051626a0d4560e21b81525f6004820152602401610351565b6040805160018082526020820186905281830190815260608201859052608082019092529061077a8787848487610783565b50505050505050565b61078f858585856107d6565b6001600160a01b0384161561060b57825133906001036107c857602084810151908401516107c18389898585896109e5565b5050610367565b610367818787878787610b06565b80518251146108055781518151604051635b05999160e01b815260048101929092526024820152604401610351565b335f5b8351811015610907576020818102858101820151908501909101516001600160a01b038816156108b9575f828152602081815260408083206001600160a01b038c16845290915290205481811015610893576040516303dee4c560e01b81526001600160a01b038a166004820152602481018290526044810183905260648101849052608401610351565b5f838152602081815260408083206001600160a01b038d16845290915290209082900390555b6001600160a01b038716156108fd575f828152602081815260408083206001600160a01b038b168452909152812080548392906108f790849061110d565b90915550505b5050600101610808565b5082516001036109875760208301515f906020840151909150856001600160a01b0316876001600160a01b0316846001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051610978929190918252602082015260400190565b60405180910390a4505061060b565b836001600160a01b0316856001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516109d692919061112c565b60405180910390a45050505050565b6001600160a01b0384163b156103675760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610a299089908990889088908890600401611159565b6020604051808303815f875af1925050508015610a63575060408051601f3d908101601f19168201909252610a609181019061119d565b60015b610aca573d808015610a90576040519150601f19603f3d011682016040523d82523d5f602084013e610a95565b606091505b5080515f03610ac257604051632bfa23e760e11b81526001600160a01b0386166004820152602401610351565b805160208201fd5b6001600160e01b0319811663f23a6e6160e01b1461077a57604051632bfa23e760e11b81526001600160a01b0386166004820152602401610351565b6001600160a01b0384163b156103675760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610b4a90899089908890889088906004016111b8565b6020604051808303815f875af1925050508015610b84575060408051601f3d908101601f19168201909252610b819181019061119d565b60015b610bb1573d808015610a90576040519150601f19603f3d011682016040523d82523d5f602084013e610a95565b6001600160e01b0319811663bc197c8160e01b1461077a57604051632bfa23e760e11b81526001600160a01b0386166004820152602401610351565b80356001600160a01b0381168114610c03575f5ffd5b919050565b5f5f60408385031215610c19575f5ffd5b610c2283610bed565b946020939093013593505050565b6001600160e01b031981168114610522575f5ffd5b5f60208284031215610c55575f5ffd5b8135610c6081610c30565b9392505050565b5f60208284031215610c77575f5ffd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610c606020830184610c7e565b5f5f5f60608486031215610cd0575f5ffd5b610cd984610bed565b95602085013595506040909401359392505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610d2b57610d2b610cee565b604052919050565b5f67ffffffffffffffff821115610d4c57610d4c610cee565b5060051b60200190565b5f82601f830112610d65575f5ffd5b8135610d78610d7382610d33565b610d02565b8082825260208201915060208360051b860101925085831115610d99575f5ffd5b602085015b83811015610db6578035835260209283019201610d9e565b5095945050505050565b5f82601f830112610dcf575f5ffd5b813567ffffffffffffffff811115610de957610de9610cee565b610dfc601f8201601f1916602001610d02565b818152846020838601011115610e10575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f5f60a08688031215610e40575f5ffd5b610e4986610bed565b9450610e5760208701610bed565b9350604086013567ffffffffffffffff811115610e72575f5ffd5b610e7e88828901610d56565b935050606086013567ffffffffffffffff811115610e9a575f5ffd5b610ea688828901610d56565b925050608086013567ffffffffffffffff811115610ec2575f5ffd5b610ece88828901610dc0565b9150509295509295909350565b5f5f60408385031215610eec575f5ffd5b823567ffffffffffffffff811115610f02575f5ffd5b8301601f81018513610f12575f5ffd5b8035610f20610d7382610d33565b8082825260208201915060208360051b850101925087831115610f41575f5ffd5b6020840193505b82841015610f6a57610f5984610bed565b825260209384019390910190610f48565b9450505050602083013567ffffffffffffffff811115610f88575f5ffd5b610f9485828601610d56565b9150509250929050565b5f8151808452602084019350602083015f5b82811015610fce578151865260209586019590910190600101610fb0565b5093949350505050565b602081525f610c606020830184610f9e565b5f5f60408385031215610ffb575f5ffd5b61100483610bed565b915060208301358015158114611018575f5ffd5b809150509250929050565b5f5f60408385031215611034575f5ffd5b61103d83610bed565b915061104b60208401610bed565b90509250929050565b5f5f5f5f5f60a08688031215611068575f5ffd5b61107186610bed565b945061107f60208701610bed565b93506040860135925060608601359150608086013567ffffffffffffffff811115610ec2575f5ffd5b5f602082840312156110b8575f5ffd5b610c6082610bed565b600181811c908216806110d557607f821691505b6020821081036110f357634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52603260045260245ffd5b808201808211156101f557634e487b7160e01b5f52601160045260245ffd5b604081525f61113e6040830185610f9e565b82810360208401526111508185610f9e565b95945050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f9061119290830184610c7e565b979650505050505050565b5f602082840312156111ad575f5ffd5b8151610c6081610c30565b6001600160a01b0386811682528516602082015260a0604082018190525f906111e390830186610f9e565b82810360608401526111f58186610f9e565b905082810360808401526112098185610c7e565b9897505050505050505056fea26469706673582212201db8424e204b9190e668b96f6aa7e58aa906d6b21a0efdd695cc96eae3e91eb764736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051806040016040528060098152602001684d6f636b205553444360b81b815250604051806040016040528060058152602001646d5553444360d81b815250816003908161005f919061010c565b50600461006c828261010c565b5050506101c6565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061009c57607f821691505b6020821081036100ba57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561010757805f5260205f20601f840160051c810160208510156100e55750805b601f840160051c820191505b81811015610104575f81556001016100f1565b50505b505050565b81516001600160401b0381111561012557610125610074565b610139816101338454610088565b846100c0565b6020601f82116001811461016b575f83156101545750848201515b5f19600385901b1c1916600184901b178455610104565b5f84815260208120601f198516915b8281101561019a578785015182556020948501946001909201910161017a565b50848210156101b757868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b610746806101d35f395ff3fe608060405234801561000f575f5ffd5b506004361061009b575f3560e01c806340c10f191161006357806340c10f191461011457806370a082311461012957806395d89b4114610151578063a9059cbb14610159578063dd62ed3e1461016c575f5ffd5b806306fdde031461009f578063095ea7b3146100bd57806318160ddd146100e057806323b872dd146100f2578063313ce56714610105575b5f5ffd5b6100a76101a4565b6040516100b491906105b6565b60405180910390f35b6100d06100cb366004610606565b610234565b60405190151581526020016100b4565b6002545b6040519081526020016100b4565b6100d061010036600461062e565b61024d565b604051601281526020016100b4565b610127610122366004610606565b610270565b005b6100e4610137366004610668565b6001600160a01b03165f9081526020819052604090205490565b6100a761027e565b6100d0610167366004610606565b61028d565b6100e461017a366004610688565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6060600380546101b3906106b9565b80601f01602080910402602001604051908101604052809291908181526020018280546101df906106b9565b801561022a5780601f106102015761010080835404028352916020019161022a565b820191905f5260205f20905b81548152906001019060200180831161020d57829003601f168201915b5050505050905090565b5f3361024181858561029a565b60019150505b92915050565b5f3361025a8582856102ac565b61026585858561032d565b506001949350505050565b61027a828261038a565b5050565b6060600480546101b3906106b9565b5f3361024181858561032d565b6102a783838360016103be565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811015610327578181101561031957604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61032784848484035f6103be565b50505050565b6001600160a01b03831661035657604051634b637e8f60e11b81525f6004820152602401610310565b6001600160a01b03821661037f5760405163ec442f0560e01b81525f6004820152602401610310565b6102a7838383610490565b6001600160a01b0382166103b35760405163ec442f0560e01b81525f6004820152602401610310565b61027a5f8383610490565b6001600160a01b0384166103e75760405163e602df0560e01b81525f6004820152602401610310565b6001600160a01b03831661041057604051634a1406b160e11b81525f6004820152602401610310565b6001600160a01b038085165f908152600160209081526040808320938716835292905220829055801561032757826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161048291815260200190565b60405180910390a350505050565b6001600160a01b0383166104ba578060025f8282546104af91906106f1565b9091555061052a9050565b6001600160a01b0383165f908152602081905260409020548181101561050c5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610310565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b03821661054657600280548290039055610564565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105a991815260200190565b60405180910390a3505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b0381168114610601575f5ffd5b919050565b5f5f60408385031215610617575f5ffd5b610620836105eb565b946020939093013593505050565b5f5f5f60608486031215610640575f5ffd5b610649846105eb565b9250610657602085016105eb565b929592945050506040919091013590565b5f60208284031215610678575f5ffd5b610681826105eb565b9392505050565b5f5f60408385031215610699575f5ffd5b6106a2836105eb565b91506106b0602084016105eb565b90509250929050565b600181811c908216806106cd57607f821691505b6020821081036106eb57634e487b7160e01b5f52602260045260245ffd5b50919050565b8082018082111561024757634e487b7160e01b5f52601160045260245ffdfea2646970667358221220246bdaf2f5460c81c4ffe800d5e4eae6cec5170195415261b2152120e02feb8264736f6c634300081c0033"
    },
    "NFTMarketplace": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_refundPeriod",
              "type": "uint256"
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
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "RefundRequested",
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
          "inputs": [],
          "name": "refundPeriod",
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
            }
          ],
          "name": "requestRefund",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x60c060405234801561000f575f5ffd5b5060405161114138038061114183398101604081905261002e91610049565b60015f556080919091526001600160a01b031660a052610083565b5f5f6040838503121561005a575f5ffd5b825160208401519092506001600160a01b0381168114610078575f5ffd5b809150509250929050565b60805160a05161107c6100c55f395f81816098015281816102b80152818161049f01528181610b510152610cf701525f818160ef01526103d3015261107c5ff3fe608060405234801561000f575f5ffd5b506004361061007a575f3560e01c8063a6a3b5b411610058578063a6a3b5b4146100ea578063aa1a84111461011f578063b1b9e78d14610192578063d898aaf2146101a5575f5ffd5b8063058a56ac1461007e5780633013ce291461009357806399652de7146100d7575b5f5ffd5b61009161008c366004610f22565b6101b8565b005b6100ba7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100916100e5366004610f22565b610325565b6101117f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100ce565b61016861012d366004610f22565b600160208181525f9384526040808520909152918352912080549181015460028201546003909201546001600160a01b039093169290919084565b604080516001600160a01b03909516855260208501939093529183015260608201526080016100ce565b6100916101a0366004610f22565b610523565b6100916101b3366004610f4c565b610bd0565b6101c0610dda565b6001600160a01b038083165f908152600160208181526040808420868552825292839020835160808101855281549095168086529281015491850191909152600281015492840192909252600390910154606083015233146102695760405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f66666572000000000060448201526064015b60405180910390fd5b6001600160a01b038084165f9081526001602081815260408084208785528252832080546001600160a01b0319168155918201839055600282018390556003909101919091558201516102e0917f000000000000000000000000000000000000000000000000000000000000000016903390610e02565b604051339083906001600160a01b038616907f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d0905f90a45061032160015f55565b5050565b61032d610dda565b6001600160a01b038083165f908152600160208181526040808420868552825292839020835160808101855281549095168086529281015491850191909152600281015492840192909252600390910154606083015233146103d15760405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606401610260565b7f000000000000000000000000000000000000000000000000000000000000000081606001516104019190610f84565b4211156104505760405162461bcd60e51b815260206004820152601960248201527f526566756e6420706572696f64206861732065787069726564000000000000006044820152606401610260565b6001600160a01b038084165f9081526001602081815260408084208785528252832080546001600160a01b0319168155918201839055600282018390556003909101919091558201516104c7917f000000000000000000000000000000000000000000000000000000000000000016903390610e02565b336001600160a01b031682846001600160a01b03167f6b2d7d3541d77e4ba894942103bb7bff8611a2fe5a6c6660870f0c15ab75c2d3846020015160405161051191815260200190565b60405180910390a45061032160015f55565b61052b610dda565b6001600160a01b038083165f90815260016020818152604080842086855282529283902083516080810185528154909516808652928101549185019190915260028101549284019290925260039091015460608301526105c55760405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606401610260565b6001600160a01b0383165f81815260016020818152604080842087855290915280832080546001600160a01b031916815591820183905560028201839055600390910191909155516301ffc9a760e01b81526380ac58cd60e01b60048201526301ffc9a790602401602060405180830381865afa158015610648573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061066c9190610fa9565b156108f55780604001516001146106c55760405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e742031006044820152606401610260565b6040516331a9108f60e11b815260048101839052839033906001600160a01b03831690636352211e90602401602060405180830381865afa15801561070c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107309190610fcf565b6001600160a01b0316146107865760405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606401610260565b60405163e985e9c560e01b81523360048201523060248201526001600160a01b0382169063e985e9c590604401602060405180830381865afa1580156107ce573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107f29190610fa9565b8061086c575060405163020604bf60e21b81526004810184905230906001600160a01b0383169063081812fc90602401602060405180830381865afa15801561083d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108619190610fcf565b6001600160a01b0316145b6108885760405162461bcd60e51b815260040161026090610fea565b8151604051632142170760e11b81523360048201526001600160a01b03918216602482015260448101859052908216906342842e0e906064015b5f604051808303815f87803b1580156108d9575f5ffd5b505af11580156108eb573d5f5f3e3d5ffd5b5050505050610b3e565b6040516301ffc9a760e01b8152636cdb3d1360e11b60048201526001600160a01b038416906301ffc9a790602401602060405180830381865afa15801561093e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109629190610fa9565b15610aff576040818101519051627eeac760e11b8152336004820152602481018490528491906001600160a01b0383169062fdd58e90604401602060405180830381865afa1580156109b6573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109da919061102f565b1015610a1f5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606401610260565b60405163e985e9c560e01b81523360048201523060248201526001600160a01b0382169063e985e9c590604401602060405180830381865afa158015610a67573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a8b9190610fa9565b610aa75760405162461bcd60e51b815260040161026090610fea565b81516040808401519051637921219560e11b81523360048201526001600160a01b03928316602482015260448101869052606481019190915260a060848201525f60a48201529082169063f242432a9060c4016108c2565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606401610260565b6020810151610b79906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016903390610e02565b336001600160a01b031682846001600160a01b03167f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a384602001518560400151604051610511929190918252602082015260400190565b610bd8610dda565b5f8111610c325760405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608401610260565b5f8211610c815760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610260565b6001600160a01b038481165f9081526001602090815260408083208784529091529020541615610cea5760405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606401610260565b610d1f6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084610e66565b6040805160808101825233808252602080830185815283850187815242606086019081526001600160a01b038b81165f81815260018088528a82208e83528852908a9020985189546001600160a01b03191693169290921788559351908701559051600286015551600390940193909355835185815290810186905290928692917f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf7910160405180910390a4610dd460015f55565b50505050565b60025f5403610dfc57604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b6040516001600160a01b03838116602483015260448201839052610e6191859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050610e9f565b505050565b6040516001600160a01b038481166024830152838116604483015260648201839052610dd49186918216906323b872dd90608401610e2f565b5f5f60205f8451602086015f885af180610ebe576040513d5f823e3d81fd5b50505f513d91508115610ed5578060011415610ee2565b6001600160a01b0384163b155b15610dd457604051635274afe760e01b81526001600160a01b0385166004820152602401610260565b6001600160a01b0381168114610f1f575f5ffd5b50565b5f5f60408385031215610f33575f5ffd5b8235610f3e81610f0b565b946020939093013593505050565b5f5f5f5f60808587031215610f5f575f5ffd5b8435610f6a81610f0b565b966020860135965060408601359560600135945092505050565b80820180821115610fa357634e487b7160e01b5f52601160045260245ffd5b92915050565b5f60208284031215610fb9575f5ffd5b81518015158114610fc8575f5ffd5b9392505050565b5f60208284031215610fdf575f5ffd5b8151610fc881610f0b565b60208082526025908201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656040820152641c8813919560da1b606082015260800190565b5f6020828403121561103f575f5ffd5b505191905056fea2646970667358221220c079aea813c6e98670c79a684a55e828844b47fa75141becac255712b62c81ac64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051610f51380380610f5183398101604081905261002e91610113565b6100385f8261006a565b506100637fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca98261006a565b5050610140565b5f828152602081815260408083206001600160a01b038516845290915281205460ff1661010a575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100c23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161010d565b505f5b92915050565b5f60208284031215610123575f5ffd5b81516001600160a01b0381168114610139575f5ffd5b9392505050565b610e048061014d5f395ff3fe6080604052600436106100f2575f3560e01c806391d1485411610087578063bc197c8111610057578063bc197c81146102ca578063d11a57ec146102f5578063d547741f14610315578063f23a6e6114610334575f5ffd5b806391d148541461024d5780639ebd91151461026c578063a217fddf1461028b578063b61d27f61461029e575f5ffd5b80632f2ff15d116100c25780632f2ff15d146101d157806336568abe146101f05780634782f7791461020f5780637b9f76b51461022e575f5ffd5b806301ffc9a7146100fd578063150b7a0214610131578063248a9ca314610174578063256451ac146101b0575f5ffd5b366100f957005b5f5ffd5b348015610108575f5ffd5b5061011c6101173660046108ef565b61035f565b60405190151581526020015b60405180910390f35b34801561013c575f5ffd5b5061015b61014b3660046109e2565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610128565b34801561017f575f5ffd5b506101a261018e366004610a4a565b5f9081526020819052604090206001015490565b604051908152602001610128565b3480156101bb575f5ffd5b506101cf6101ca366004610a61565b61036f565b005b3480156101dc575f5ffd5b506101cf6101eb366004610aa8565b610404565b3480156101fb575f5ffd5b506101cf61020a366004610aa8565b61042e565b34801561021a575f5ffd5b506101cf610229366004610ad6565b610466565b348015610239575f5ffd5b506101cf610248366004610b00565b61055b565b348015610258575f5ffd5b5061011c610267366004610aa8565b6105db565b348015610277575f5ffd5b506101cf610286366004610b3f565b610603565b348015610296575f5ffd5b506101a25f81565b3480156102a9575f5ffd5b506102bd6102b8366004610b5a565b610675565b6040516101289190610bdf565b3480156102d5575f5ffd5b5061015b6102e4366004610c94565b63bc197c8160e01b95945050505050565b348015610300575f5ffd5b506101a25f516020610daf5f395f51905f5281565b348015610320575f5ffd5b506101cf61032f366004610aa8565b610731565b34801561033f575f5ffd5b5061015b61034e366004610d47565b63f23a6e6160e01b95945050505050565b5f61036982610755565b92915050565b5f516020610daf5f395f51905f5261038681610779565b604051637921219560e11b81523060048201526001600160a01b038381166024830152604482018690526064820185905260a060848301525f60a483015286169063f242432a9060c4015f604051808303815f87803b1580156103e7575f5ffd5b505af11580156103f9573d5f5f3e3d5ffd5b505050505050505050565b5f8281526020819052604090206001015461041e81610779565b6104288383610786565b50505050565b6001600160a01b03811633146104575760405163334bd91960e11b815260040160405180910390fd5b6104618282610815565b505050565b5f516020610daf5f395f51905f5261047d81610779565b478211156104c95760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064015b60405180910390fd5b5f836001600160a01b0316836040515b5f6040518083038185875af1925050503d805f8114610513576040519150601f19603f3d011682016040523d82523d5f602084013e610518565b606091505b50509050806104285760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b60448201526064016104c0565b5f516020610daf5f395f51905f5261057281610779565b604051632142170760e11b81523060048201526001600160a01b038381166024830152604482018590528516906342842e0e906064015f604051808303815f87803b1580156105bf575f5ffd5b505af11580156105d1573d5f5f3e3d5ffd5b5050505050505050565b5f918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b5f516020610daf5f395f51905f5261061a81610779565b47806106615760405162461bcd60e51b81526020600482015260166024820152754e6f2062616c616e636520746f20776974686472617760501b60448201526064016104c0565b5f836001600160a01b0316826040516104d9565b60605f61068181610779565b5f5f876001600160a01b031687878760405161069e929190610d9f565b5f6040518083038185875af1925050503d805f81146106d8576040519150601f19603f3d011682016040523d82523d5f602084013e6106dd565b606091505b5091509150816107265760405162461bcd60e51b8152602060048201526014602482015273115e1d195c9b985b0818d85b1b0819985a5b195960621b60448201526064016104c0565b979650505050505050565b5f8281526020819052604090206001015461074b81610779565b6104288383610815565b5f6001600160e01b03198216637965db0b60e01b148061036957506103698261087e565b61078381336108b2565b50565b5f61079183836105db565b61080e575f838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556107c63390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610369565b505f610369565b5f61082083836105db565b1561080e575f838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610369565b5f6001600160e01b03198216630271189760e51b148061036957506301ffc9a760e01b6001600160e01b0319831614610369565b6108bc82826105db565b6108eb5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016104c0565b5050565b5f602082840312156108ff575f5ffd5b81356001600160e01b031981168114610916575f5ffd5b9392505050565b6001600160a01b0381168114610783575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561096e5761096e610931565b604052919050565b5f82601f830112610985575f5ffd5b813567ffffffffffffffff81111561099f5761099f610931565b6109b2601f8201601f1916602001610945565b8181528460208386010111156109c6575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f608085870312156109f5575f5ffd5b8435610a008161091d565b93506020850135610a108161091d565b925060408501359150606085013567ffffffffffffffff811115610a32575f5ffd5b610a3e87828801610976565b91505092959194509250565b5f60208284031215610a5a575f5ffd5b5035919050565b5f5f5f5f60808587031215610a74575f5ffd5b8435610a7f8161091d565b935060208501359250604085013591506060850135610a9d8161091d565b939692955090935050565b5f5f60408385031215610ab9575f5ffd5b823591506020830135610acb8161091d565b809150509250929050565b5f5f60408385031215610ae7575f5ffd5b8235610af28161091d565b946020939093013593505050565b5f5f5f60608486031215610b12575f5ffd5b8335610b1d8161091d565b9250602084013591506040840135610b348161091d565b809150509250925092565b5f60208284031215610b4f575f5ffd5b81356109168161091d565b5f5f5f5f60608587031215610b6d575f5ffd5b8435610b788161091d565b935060208501359250604085013567ffffffffffffffff811115610b9a575f5ffd5b8501601f81018713610baa575f5ffd5b803567ffffffffffffffff811115610bc0575f5ffd5b876020828401011115610bd1575f5ffd5b949793965060200194505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f82601f830112610c23575f5ffd5b813567ffffffffffffffff811115610c3d57610c3d610931565b8060051b610c4d60208201610945565b91825260208185018101929081019086841115610c68575f5ffd5b6020860192505b83831015610c8a578235825260209283019290910190610c6f565b9695505050505050565b5f5f5f5f5f60a08688031215610ca8575f5ffd5b8535610cb38161091d565b94506020860135610cc38161091d565b9350604086013567ffffffffffffffff811115610cde575f5ffd5b610cea88828901610c14565b935050606086013567ffffffffffffffff811115610d06575f5ffd5b610d1288828901610c14565b925050608086013567ffffffffffffffff811115610d2e575f5ffd5b610d3a88828901610976565b9150509295509295909350565b5f5f5f5f5f60a08688031215610d5b575f5ffd5b8535610d668161091d565b94506020860135610d768161091d565b93506040860135925060608601359150608086013567ffffffffffffffff811115610d2e575f5ffd5b818382375f910190815291905056fee1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca9a26469706673582212207a4b998e5e7240124dc4d3a4a6fdd694a9785f0c8c752970284fcef740c4575164736f6c634300081c0033"
    }
  },
  "deployments": {
    "31337": {
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    },
    "chain-31337": {
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
    }
  }
};