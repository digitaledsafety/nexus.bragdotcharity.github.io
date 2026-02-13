const CONTRACT_DATA = {
  "contracts": {
    "BatchGrant": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_usdc",
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
              "name": "token",
              "type": "address"
            }
          ],
          "name": "SafeERC20FailedOperation",
          "type": "error"
        },
        {
          "inputs": [],
          "name": "USDC",
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
          "name": "distributeUSDC",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x60a0604052348015600e575f5ffd5b506040516103ea3803806103ea833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b6080516103666100845f395f8181603d015261012801526103665ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c806389a3027114610038578063b792eca11461007b575b5f5ffd5b61005f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61008e610089366004610283565b610090565b005b8281146100d85760405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b60448201526064015b60405180910390fd5b5f5b8381101561016857610160338686848181106100f8576100f86102ef565b905060200201602081019061010d9190610303565b85858581811061011f5761011f6102ef565b905060200201357f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661016f909392919063ffffffff16565b6001016100da565b5050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526101c99085906101cf565b50505050565b5f5f60205f8451602086015f885af1806101ee576040513d5f823e3d81fd5b50505f513d91508115610205578060011415610212565b6001600160a01b0384163b155b156101c957604051635274afe760e01b81526001600160a01b03851660048201526024016100cf565b5f5f83601f84011261024b575f5ffd5b50813567ffffffffffffffff811115610262575f5ffd5b6020830191508360208260051b850101111561027c575f5ffd5b9250929050565b5f5f5f5f60408587031215610296575f5ffd5b843567ffffffffffffffff8111156102ac575f5ffd5b6102b88782880161023b565b909550935050602085013567ffffffffffffffff8111156102d7575f5ffd5b6102e38782880161023b565b95989497509550505050565b634e487b7160e01b5f52603260045260245ffd5b5f60208284031215610313575f5ffd5b81356001600160a01b0381168114610329575f5ffd5b939250505056fea26469706673582212209972cf1a27e1489c8a0089ad0c79bf134f0b5f8386cfc459192c00fa4e7a958c64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051612d18380380612d1883398101604081905261002e9161015f565b8260405180604001604052806007815260200166109c9859d3919560ca1b8152506040518060400160405280600781526020016610949051d3919560ca1b815250815f908161007d9190610230565b50600161008a8282610230565b5050506001600160a01b0381166100ba57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6100c3816100f3565b506001600855600a80546001600160a01b0319166001600160a01b039390931692909217909155600b55506102ea565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b80516001600160a01b038116811461015a575f5ffd5b919050565b5f5f5f60608486031215610171575f5ffd5b61017a84610144565b925061018860208501610144565b9150604084015190509250925092565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806101c057607f821691505b6020821081036101de57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561022b57805f5260205f20601f840160051c810160208510156102095750805b601f840160051c820191505b81811015610228575f8155600101610215565b50505b505050565b81516001600160401b0381111561024957610249610198565b61025d8161025784546101ac565b846101e4565b6020601f82116001811461028f575f83156102785750848201515b5f19600385901b1c1916600184901b178455610228565b5f84815260208120601f198516915b828110156102be578785015182556020948501946001909201910161029e565b50848210156102db57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b612a21806102f75f395ff3fe6080604052600436106101c5575f3560e01c806383943dc8116100f2578063c631724711610092578063da183afb11610062578063da183afb146104dc578063e985e9c514610507578063f0f4426014610526578063f2fde38b14610545575f5ffd5b8063c63172471461046c578063c87b56dd1461048b578063d3933c1c146104aa578063d435b3a3146104bd575f5ffd5b806396d8f4f3116100cd57806396d8f4f314610406578063a22cb4651461041b578063a6719b3a1461043a578063b88d4fde1461044d575f5ffd5b806383943dc8146103b65780638da5cb5b146103d557806395d89b41146103f2575f5ffd5b806323b872dd116101685780636352211e116101385780636352211e1461033757806364cb7e9c1461035657806370a0823114610375578063715018a6146103a2575f5ffd5b806323b872dd146102bb5780632eb9313e146102da57806342842e0e146102f957806361d027b314610318575f5ffd5b8063095ea7b3116101a3578063095ea7b3146102555780630fd973ce146102765780631653441c1461028957806319bcef6d1461029c575f5ffd5b806301ffc9a7146101c957806306fdde03146101fd578063081812fc1461021e575b5f5ffd5b3480156101d4575f5ffd5b506101e86101e3366004611ceb565b610564565b60405190151581526020015b60405180910390f35b348015610208575f5ffd5b5061021161058e565b6040516101f49190611d34565b348015610229575f5ffd5b5061023d610238366004611d46565b61061d565b6040516001600160a01b0390911681526020016101f4565b348015610260575f5ffd5b5061027461026f366004611d71565b610644565b005b610274610284366004611ddf565b610653565b610274610297366004611e5f565b61067a565b3480156102a7575f5ffd5b506102746102b6366004611ec9565b6106a0565b3480156102c6575f5ffd5b506102746102d5366004611ee4565b6106ca565b3480156102e5575f5ffd5b506102746102f4366004611ec9565b610752565b348015610304575f5ffd5b50610274610313366004611ee4565b61077c565b348015610323575f5ffd5b50600a5461023d906001600160a01b031681565b348015610342575f5ffd5b5061023d610351366004611d46565b61079b565b348015610361575f5ffd5b50610211610370366004611d46565b6107a5565b348015610380575f5ffd5b5061039461038f366004611ec9565b61083c565b6040519081526020016101f4565b3480156103ad575f5ffd5b50610274610881565b3480156103c1575f5ffd5b50600d5461023d906001600160a01b031681565b3480156103e0575f5ffd5b506007546001600160a01b031661023d565b3480156103fd575f5ffd5b50610211610894565b348015610411575f5ffd5b50610394600b5481565b348015610426575f5ffd5b50610274610435366004611f36565b6108a3565b610274610448366004611f69565b6108ae565b348015610458575f5ffd5b5061027461046736600461208a565b6108d6565b348015610477575f5ffd5b50610274610486366004611d46565b6108ee565b348015610496575f5ffd5b506102116104a5366004611d46565b6108fb565b6102746104b8366004612131565b610b57565b3480156104c8575f5ffd5b50600c5461023d906001600160a01b031681565b3480156104e7575f5ffd5b506103946104f6366004611d46565b600e6020525f908152604090205481565b348015610512575f5ffd5b506101e86105213660046121af565b610b6d565b348015610531575f5ffd5b50610274610540366004611ec9565b610b9a565b348015610550575f5ffd5b5061027461055f366004611ec9565b610c1a565b5f6001600160e01b03198216632483248360e11b1480610588575061058882610c57565b92915050565b60605f805461059c906121e6565b80601f01602080910402602001604051908101604052809291908181526020018280546105c8906121e6565b80156106135780601f106105ea57610100808354040283529160200191610613565b820191905f5260205f20905b8154815290600101906020018083116105f657829003601f168201915b5050505050905090565b5f61062782610ca6565b505f828152600460205260409020546001600160a01b0316610588565b61064f828233610cde565b5050565b61065b610ceb565b61066985858585855f610d15565b6106736001600855565b5050505050565b610682610ceb565b61069033858585855f610d15565b61069a6001600855565b50505050565b6106a861102d565b600c80546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0382166106f857604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f61070483833361105a565b9050836001600160a01b0316816001600160a01b03161461069a576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016106ef565b61075a61102d565b600d80546001600160a01b0319166001600160a01b0392909216919091179055565b61079683838360405180602001604052805f8152506108d6565b505050565b5f61058882610ca6565b600f6020525f9081526040902080546107bd906121e6565b80601f01602080910402602001604051908101604052809291908181526020018280546107e9906121e6565b80156108345780601f1061080b57610100808354040283529160200191610834565b820191905f5260205f20905b81548152906001019060200180831161081757829003601f168201915b505050505081565b5f6001600160a01b038216610866576040516322718ad960e21b81525f60048201526024016106ef565b506001600160a01b03165f9081526003602052604090205490565b61088961102d565b6108925f61114e565b565b60606001805461059c906121e6565b61064f33838361119f565b6108b6610ceb565b6108c4868686868686610d15565b6108ce6001600855565b505050505050565b6108e18484846106ca565b61069a338585858561123d565b6108f661102d565b600b55565b606061090682610ca6565b505f828152600e60209081526040808320548151928301909152918152600c546001600160a01b0316156109a857600c5460405163b63e6ac360e01b8152600481018490526001600160a01b039091169063b63e6ac3906024015f60405180830381865afa92505050801561099c57506040513d5f823e601f3d908101601f19168201604052610999919081019061221e565b60015b156109a8576060015190505b5f848152600f60205260408120805460609291906109c5906121e6565b80601f01602080910402602001604051908101604052809291908181526020018280546109f1906121e6565b8015610a3c5780601f10610a1357610100808354040283529160200191610a3c565b820191905f5260205f20905b815481529060010190602001808311610a1f57829003601f168201915b505050505090505f81511115610a5457809150610aa6565b5f610a5e8761135c565b805190915015610a7057809250610aa4565b610a82610a7d8886611467565b6114cc565b604051602001610a929190612304565b60405160208183030381529060405292505b505b5f610b29610ab3886114f2565b5f865111610acf5760405180602001604052805f815250610af8565b610ad886611581565b604051602001610ae89190612335565b6040516020818303038152906040525b85610b0288611581565b604051602001610b15949392919061234b565b6040516020818303038152906040526114cc565b905080604051602001610b3c9190612442565b60405160208183030381529060405295505050505050919050565b610b5f610ceb565b610669338686868686610d15565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b610ba261102d565b6001600160a01b038116610bf85760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642074726561737572792061646472657373000000000000000060448201526064016106ef565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b610c2261102d565b6001600160a01b038116610c4b57604051631e4fbdf760e01b81525f60048201526024016106ef565b610c548161114e565b50565b5f6001600160e01b031982166380ac58cd60e01b1480610c8757506001600160e01b03198216635b5e139f60e01b145b8061058857506301ffc9a760e01b6001600160e01b0319831614610588565b5f818152600260205260408120546001600160a01b03168061058857604051637e27328960e01b8152600481018490526024016106ef565b610796838383600161176d565b600260085403610d0e57604051633ee5aeb560e01b815260040160405180910390fd5b6002600855565b600c546001600160a01b0316610d6d5760405162461bcd60e51b815260206004820152601860248201527f5265636569707420636f6e7472616374206e6f7420736574000000000000000060448201526064016106ef565b600b54341015610db85760405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b60448201526064016106ef565b600980545f9182610dc883612487565b9190505590508115610df2575f818152600f60205260409020610dec8486836124e3565b50610e37565b8215610e3757610e378185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061187192505050565b600c546040516334ff261960e21b81525f916001600160a01b03169063d3fc986490610e6d90339034908c908c906004016125c4565b6020604051808303815f875af1158015610e89573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ead91906125f5565b5f838152600e602052604090208190559050610ec988836118c0565b600d546001600160a01b031615610f3957600d546040516340c10f1960e01b81523360048201523460248201526001600160a01b03909116906340c10f19906044015f604051808303815f87803b158015610f22575f5ffd5b505af1158015610f34573d5f5f3e3d5ffd5b505050505b600a546040515f916001600160a01b03169034908381818185875af1925050503d805f8114610f83576040519150601f19603f3d011682016040523d82523d5f602084013e610f88565b606091505b5050905080610fd95760405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c6564000000000060448201526064016106ef565b336001600160a01b03167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858c8c60405161101a95949392919061260c565b60405180910390a2505050505050505050565b6007546001600160a01b031633146108925760405163118cdaa760e01b81523360048201526024016106ef565b5f828152600260205260408120546001600160a01b0390811690831615611086576110868184866118d9565b6001600160a01b038116156110c0576110a15f855f5f61176d565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b038516156110ee576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a490505b9392505050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b0382166111d157604051630b61174360e31b81526001600160a01b03831660048201526024016106ef565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561067357604051630a85bd0160e11b81526001600160a01b0384169063150b7a029061127f90889088908790879060040161263c565b6020604051808303815f875af19250505080156112b9575060408051601f3d908101601f191682019092526112b69181019061266e565b60015b611320573d8080156112e6576040519150601f19603f3d011682016040523d82523d5f602084013e6112eb565b606091505b5080515f0361131857604051633250574960e11b81526001600160a01b03851660048201526024016106ef565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b146108ce57604051633250574960e11b81526001600160a01b03851660048201526024016106ef565b606061136782610ca6565b505f8281526006602052604081208054611380906121e6565b80601f01602080910402602001604051908101604052809291908181526020018280546113ac906121e6565b80156113f75780601f106113ce576101008083540402835291602001916113f7565b820191905f5260205f20905b8154815290600101906020018083116113da57829003601f168201915b505050505090505f61141360408051602081019091525f815290565b905080515f03611424575092915050565b81511561145657808260405160200161143e929190612689565b60405160208183030381529060405292505050919050565b61145f8461193d565b949350505050565b60605f5f83511161149f5761147b846114f2565b60405160200161148b919061269d565b6040516020818303038152906040526114a1565b825b9050806040516020016114b491906126ba565b60405160208183030381529060405291505092915050565b6060610588826040518060600160405280604081526020016129ac6040913960016119ad565b60605f6114fe83611b26565b60010190505f816001600160401b0381111561151c5761151c611ff8565b6040519080825280601f01601f191660200182016040528015611546576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461155057509392505050565b805160609082905f805b82811015611605578381815181106115a5576115a5612894565b6020910101516001600160f81b031916601160f91b14806115ea57508381815181106115d3576115d3612894565b6020910101516001600160f81b031916601760fa1b145b156115fd57816115f981612487565b9250505b60010161158b565b50805f036116165750929392505050565b5f61162182846128a8565b6001600160401b0381111561163857611638611ff8565b6040519080825280601f01601f191660200182016040528015611662576020820181803683370190505b5090505f805b848110156117615785818151811061168257611682612894565b6020910101516001600160f81b031916601160f91b14806116c757508581815181106116b0576116b0612894565b6020910101516001600160f81b031916601760fa1b145b1561170557601760fa1b83836116dc81612487565b9450815181106116ee576116ee612894565b60200101906001600160f81b03191690815f1a9053505b85818151811061171757611717612894565b01602001516001600160f81b031916838361173181612487565b94508151811061174357611743612894565b60200101906001600160f81b03191690815f1a905350600101611668565b50909695505050505050565b808061178157506001600160a01b03821615155b15611842575f61179084610ca6565b90506001600160a01b038316158015906117bc5750826001600160a01b0316816001600160a01b031614155b80156117cf57506117cd8184610b6d565b155b156117f85760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016106ef565b81156118405783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f82815260066020526040902061188882826128bb565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b61064f828260405180602001604052805f815250611bfd565b6118e4838383611c14565b610796576001600160a01b03831661191257604051637e27328960e01b8152600481018290526024016106ef565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016106ef565b606061194882610ca6565b505f61195e60408051602081019091525f815290565b90505f81511161197c5760405180602001604052805f815250611147565b80611986846114f2565b604051602001611997929190612689565b6040516020818303038152906040529392505050565b606083515f036119cb575060408051602081019091525f8152611147565b5f826119fb576003855160046119e19190612975565b6119ec9060026128a8565b6119f6919061298c565b611a20565b600385516002611a0b91906128a8565b611a15919061298c565b611a20906004612975565b90505f816001600160401b03811115611a3b57611a3b611ff8565b6040519080825280601f01601f191660200182016040528015611a65576020820181803683370190505b509050600185016020820187885189016020810180515f82525b82841015611ada576003840193508351603f8160121c168701518653600186019550603f81600c1c168701518653600186019550603f8160061c168701518653600186019550603f8116870151865350600185019450611a7f565b90525050851561176157600388510660018114611afe5760028114611b1157611b19565b603d6001830353603d6002830353611b19565b603d60018303535b5050909695505050505050565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310611b645772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611b90576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310611bae57662386f26fc10000830492506010015b6305f5e1008310611bc6576305f5e100830492506008015b6127108310611bda57612710830492506004015b60648310611bec576064830492506002015b600a83106105885760010192915050565b611c078383611c75565b610796335f85858561123d565b5f6001600160a01b0383161580159061145f5750826001600160a01b0316846001600160a01b03161480611c4d5750611c4d8484610b6d565b8061145f5750505f908152600460205260409020546001600160a01b03908116911614919050565b6001600160a01b038216611c9e57604051633250574960e11b81525f60048201526024016106ef565b5f611caa83835f61105a565b90506001600160a01b03811615610796576040516339e3563760e11b81525f60048201526024016106ef565b6001600160e01b031981168114610c54575f5ffd5b5f60208284031215611cfb575f5ffd5b813561114781611cd6565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6111476020830184611d06565b5f60208284031215611d56575f5ffd5b5035919050565b6001600160a01b0381168114610c54575f5ffd5b5f5f60408385031215611d82575f5ffd5b8235611d8d81611d5d565b946020939093013593505050565b5f5f83601f840112611dab575f5ffd5b5081356001600160401b03811115611dc1575f5ffd5b602083019150836020828501011115611dd8575f5ffd5b9250929050565b5f5f5f5f5f60608688031215611df3575f5ffd5b8535611dfe81611d5d565b945060208601356001600160401b03811115611e18575f5ffd5b611e2488828901611d9b565b90955093505060408601356001600160401b03811115611e42575f5ffd5b611e4e88828901611d9b565b969995985093965092949392505050565b5f5f5f5f60408587031215611e72575f5ffd5b84356001600160401b03811115611e87575f5ffd5b611e9387828801611d9b565b90955093505060208501356001600160401b03811115611eb1575f5ffd5b611ebd87828801611d9b565b95989497509550505050565b5f60208284031215611ed9575f5ffd5b813561114781611d5d565b5f5f5f60608486031215611ef6575f5ffd5b8335611f0181611d5d565b92506020840135611f1181611d5d565b929592945050506040919091013590565b80358015158114611f31575f5ffd5b919050565b5f5f60408385031215611f47575f5ffd5b8235611f5281611d5d565b9150611f6060208401611f22565b90509250929050565b5f5f5f5f5f5f60808789031215611f7e575f5ffd5b8635611f8981611d5d565b955060208701356001600160401b03811115611fa3575f5ffd5b611faf89828a01611d9b565b90965094505060408701356001600160401b03811115611fcd575f5ffd5b611fd989828a01611d9b565b9094509250611fec905060608801611f22565b90509295509295509295565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b038111828210171561202e5761202e611ff8565b60405290565b604051601f8201601f191681016001600160401b038111828210171561205c5761205c611ff8565b604052919050565b5f6001600160401b0382111561207c5761207c611ff8565b50601f01601f191660200190565b5f5f5f5f6080858703121561209d575f5ffd5b84356120a881611d5d565b935060208501356120b881611d5d565b92506040850135915060608501356001600160401b038111156120d9575f5ffd5b8501601f810187136120e9575f5ffd5b80356120fc6120f782612064565b612034565b818152886020838501011115612110575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f5f5f5f60608688031215612145575f5ffd5b85356001600160401b0381111561215a575f5ffd5b61216688828901611d9b565b90965094505060208601356001600160401b03811115612184575f5ffd5b61219088828901611d9b565b90945092506121a3905060408701611f22565b90509295509295909350565b5f5f604083850312156121c0575f5ffd5b82356121cb81611d5d565b915060208301356121db81611d5d565b809150509250929050565b600181811c908216806121fa57607f821691505b60208210810361221857634e487b7160e01b5f52602260045260245ffd5b50919050565b5f6020828403121561222e575f5ffd5b81516001600160401b03811115612243575f5ffd5b820160808185031215612254575f5ffd5b61225c61200c565b815161226781611d5d565b8152602082810151908201526040808301519082015260608201516001600160401b03811115612295575f5ffd5b80830192505084601f8301126122a9575f5ffd5b81516122b76120f782612064565b8181528660208386010111156122cb575f5ffd5b8160208501602083015e5f918101602001919091526060820152949350505050565b5f81518060208401855e5f93019283525090919050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c00000000000081525f611147601a8301846122ed565b6101d160f51b81525f61114760028301846122ed565b727b226e616d65223a2022427261674e4654202360681b81525f61237260138301876122ed565b7f222c20226465736372697074696f6e223a2022427261672e436861726974792081526b111bdb985d1a5bdb8813919560a21b60208201526123b7602c8201876122ed565b6c1116101134b6b0b3b2911d101160991b815290506123d9600d8201866122ed565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a815275101126b2b9b9b0b3b2911610113b30b63ab2911d101160511b6020820152905061242a60368201856122ed565b63227d5d7d60e01b8152600401979650505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081525f611147601d8301846122ed565b634e487b7160e01b5f52601160045260245ffd5b5f6001820161249857612498612473565b5060010190565b601f82111561079657805f5260205f20601f840160051c810160208510156124c45750805b601f840160051c820191505b81811015610673575f81556001016124d0565b6001600160401b038311156124fa576124fa611ff8565b61250e8361250883546121e6565b8361249f565b5f601f84116001811461253f575f85156125285750838201355b5f19600387901b1c1916600186901b178355610673565b5f83815260208120601f198716915b8281101561256e578685013582556020948501946001909201910161254e565b508682101561258a575f1960f88860031b161c19848701351681555b505060018560011b0183555050505050565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b60018060a01b0385168152836020820152606060408201525f6125eb60608301848661259c565b9695505050505050565b5f60208284031215612605575f5ffd5b5051919050565b858152846020820152836040820152608060608201525f61263160808301848661259c565b979650505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906125eb90830184611d06565b5f6020828403121561267e575f5ffd5b815161114781611cd6565b5f61145f61269783866122ed565b846122ed565b68427261674e4654202360b81b81525f61114760098301846122ed565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323081527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d223020302033353020333530604082015261111f60f11b60608201527f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e7460628201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060828201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60a282015261329f60f11b60c28201527f3c726563742077696474683d223130302522206865696768743d22313030252260c482015271103334b6361e91119b199b1b33189110179f60711b60e48201527f3c7465787420783d223530252220793d223530252220636c6173733d2262617360f682019081527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465610116830152723c3a16b0b731b437b91e9136b4b2323632911f60691b6101368301525f90610149830161288b61287282876122ed565b6c1e17ba32bc3a1f1e17b9bb339f60991b8152600d0190565b95945050505050565b634e487b7160e01b5f52603260045260245ffd5b8082018082111561058857610588612473565b81516001600160401b038111156128d4576128d4611ff8565b6128e8816128e284546121e6565b8461249f565b6020601f82116001811461291a575f83156129035750848201515b5f19600385901b1c1916600184901b178455610673565b5f84815260208120601f198516915b828110156129495787850151825560209485019460019092019101612929565b508482101561296657868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b808202811582820484141761058857610588612473565b5f826129a657634e487b7160e01b5f52601260045260245ffd5b50049056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220b164171fd3adda33e4b54b6038244ed6d2eb867f677ac361d9ae24db0f84f03c64736f6c634300081c0033"
    },
    "BragToken": {
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
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
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
      "bytecode": "0x610160604052348015610010575f5ffd5b5060405161232638038061232683398101604081905261002f9161027d565b806040518060400160405280600a815260200169213930b3902a37b5b2b760b11b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600a815260200169213930b3902a37b5b2b760b11b815250604051806040016040528060048152602001634252414760e01b81525081600390816100bd9190610342565b5060046100ca8282610342565b506100da915083905060056101bd565b610120526100e98160066101bd565b61014052815160208084019190912060e052815190820120610100524660a05261017560e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506001600160a01b0381166101ad57604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b6101b6816101ef565b5050610454565b5f6020835110156101d8576101d183610240565b90506101e9565b816101e38482610342565b5060ff90505b92915050565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f5f829050601f8151111561026a578260405163305a27a960e01b81526004016101a491906103fc565b805161027582610431565b179392505050565b5f6020828403121561028d575f5ffd5b81516001600160a01b03811681146102a3575f5ffd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806102d257607f821691505b6020821081036102f057634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561033d57805f5260205f20601f840160051c8101602085101561031b5750805b601f840160051c820191505b8181101561033a575f8155600101610327565b50505b505050565b81516001600160401b0381111561035b5761035b6102aa565b61036f8161036984546102be565b846102f6565b6020601f8211600181146103a1575f831561038a5750848201515b5f19600385901b1c1916600184901b17845561033a565b5f84815260208120601f198516915b828110156103d057878501518255602094850194600190920191016103b0565b50848210156103ed57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156102f0575f1960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051611e816104a55f395f610dd701525f610daa01525f610aea01525f610ac201525f610a1d01525f610a4701525f610a710152611e815ff3fe608060405234801561000f575f5ffd5b50600436106101a1575f3560e01c8063715018a6116100f35780639ab24eb011610093578063d505accf1161006e578063d505accf146103b2578063dd62ed3e146103c5578063f1127ed8146103fd578063f2fde38b1461043c575f5ffd5b80639ab24eb014610379578063a9059cbb1461038c578063c3cda5201461039f575f5ffd5b80638da5cb5b116100ce5780638da5cb5b1461032e5780638e539e8c1461033f57806391ddadf41461035257806395d89b4114610371575f5ffd5b8063715018a6146102f85780637ecebe001461030057806384b0196e14610313575f5ffd5b80633a46b1a81161015e578063587cde1e11610139578063587cde1e146102525780635c19a95c146102955780636fcfff45146102a857806370a08231146102d0575f5ffd5b80633a46b1a81461022257806340c10f19146102355780634bf5d7e91461024a575f5ffd5b806306fdde03146101a5578063095ea7b3146101c357806318160ddd146101e657806323b872dd146101f8578063313ce5671461020b5780633644e5151461021a575b5f5ffd5b6101ad61044f565b6040516101ba9190611ab3565b60405180910390f35b6101d66101d1366004611ae0565b6104df565b60405190151581526020016101ba565b6002545b6040519081526020016101ba565b6101d6610206366004611b08565b6104f8565b604051601281526020016101ba565b6101ea61051b565b6101ea610230366004611ae0565b610529565b610248610243366004611ae0565b610563565b005b6101ad610579565b61027d610260366004611b42565b6001600160a01b039081165f908152600860205260409020541690565b6040516001600160a01b0390911681526020016101ba565b6102486102a3366004611b42565b6105f1565b6102bb6102b6366004611b42565b6105fc565b60405163ffffffff90911681526020016101ba565b6101ea6102de366004611b42565b6001600160a01b03165f9081526020819052604090205490565b610248610606565b6101ea61030e366004611b42565b610619565b61031b610623565b6040516101ba9796959493929190611b5b565b600b546001600160a01b031661027d565b6101ea61034d366004611bf1565b610665565b61035a610689565b60405165ffffffffffff90911681526020016101ba565b6101ad610692565b6101ea610387366004611b42565b6106a1565b6101d661039a366004611ae0565b6106c1565b6102486103ad366004611c18565b6106ce565b6102486103c0366004611c6c565b61078f565b6101ea6103d3366004611cd2565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b61041061040b366004611d03565b6108c5565b60408051825165ffffffffffff1681526020928301516001600160d01b031692810192909252016101ba565b61024861044a366004611b42565b6108e9565b60606003805461045e90611d40565b80601f016020809104026020016040519081016040528092919081815260200182805461048a90611d40565b80156104d55780601f106104ac576101008083540402835291602001916104d5565b820191905f5260205f20905b8154815290600101906020018083116104b857829003601f168201915b5050505050905090565b5f336104ec818585610926565b60019150505b92915050565b5f33610505858285610938565b6105108585856109b4565b506001949350505050565b5f610524610a11565b905090565b5f61055361053683610b3a565b6001600160a01b0385165f90815260096020526040902090610b88565b6001600160d01b03169392505050565b61056b610c38565b6105758282610c65565b5050565b6060610583610c99565b65ffffffffffff16610593610689565b65ffffffffffff16146105b9576040516301bfc1c560e61b815260040160405180910390fd5b5060408051808201909152601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015290565b336105758183610ca3565b5f6104f282610d14565b61060e610c38565b6106175f610d35565b565b5f6104f282610d86565b5f6060805f5f5f6060610634610da3565b61063c610dd0565b604080515f80825260208201909252600f60f81b9b939a50919850469750309650945092509050565b5f61067a61067283610b3a565b600a90610b88565b6001600160d01b031692915050565b5f610524610c99565b60606004805461045e90611d40565b6001600160a01b0381165f90815260096020526040812061067a90610dfd565b5f336104ec8185856109b4565b834211156106f757604051632341d78760e11b8152600481018590526024015b60405180910390fd5b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590525f90610770906107689060a00160405160208183030381529060405280519060200120610e34565b858585610e60565b905061077c8187610e8c565b6107868188610ca3565b50505050505050565b834211156107b35760405163313c898160e11b8152600481018590526024016106ee565b5f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886107fe8c6001600160a01b03165f90815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090505f61085882610e34565b90505f61086782878787610e60565b9050896001600160a01b0316816001600160a01b0316146108ae576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016106ee565b6108b98a8a8a610926565b50505050505050505050565b604080518082019091525f80825260208201526108e28383610ede565b9392505050565b6108f1610c38565b6001600160a01b03811661091a57604051631e4fbdf760e01b81525f60048201526024016106ee565b61092381610d35565b50565b6109338383836001610f12565b505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f198110156109ae57818110156109a057604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016106ee565b6109ae84848484035f610f12565b50505050565b6001600160a01b0383166109dd57604051634b637e8f60e11b81525f60048201526024016106ee565b6001600160a01b038216610a065760405163ec442f0560e01b81525f60048201526024016106ee565b610933838383610fe4565b5f306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610a6957507f000000000000000000000000000000000000000000000000000000000000000046145b15610a9357507f000000000000000000000000000000000000000000000000000000000000000090565b610524604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b5f5f610b44610689565b90508065ffffffffffff168310610b7f57604051637669fc0f60e11b81526004810184905265ffffffffffff821660248201526044016106ee565b6108e283610fef565b81545f9081816005811115610be4575f610ba184611025565b610bab9085611d8c565b5f8881526020902090915081015465ffffffffffff9081169087161015610bd457809150610be2565b610bdf816001611d9f565b92505b505b5f610bf18787858561117d565b90508015610c2b57610c1587610c08600184611d8c565b5f91825260209091200190565b54600160301b90046001600160d01b0316610c2d565b5f5b979650505050505050565b600b546001600160a01b031633146106175760405163118cdaa760e01b81523360048201526024016106ee565b6001600160a01b038216610c8e5760405163ec442f0560e01b81525f60048201526024016106ee565b6105755f8383610fe4565b5f61052443610fef565b6001600160a01b038281165f8181526008602052604080822080548686166001600160a01b0319821681179092559151919094169392849290917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46109338183610d0f866111dc565b6111f9565b6001600160a01b0381165f908152600960205260408120546104f290611362565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b0381165f908152600760205260408120546104f2565b60606105247f00000000000000000000000000000000000000000000000000000000000000006005611392565b60606105247f00000000000000000000000000000000000000000000000000000000000000006006611392565b80545f908015610e2c57610e1683610c08600184611d8c565b54600160301b90046001600160d01b03166108e2565b5f9392505050565b5f6104f2610e40610a11565b8360405161190160f01b8152600281019290925260228201526042902090565b5f5f5f5f610e708888888861143b565b925092509250610e808282611503565b50909695505050505050565b6001600160a01b0382165f908152600760205260409020805460018101909155818114610933576040516301d4b62360e61b81526001600160a01b0384166004820152602481018290526044016106ee565b604080518082019091525f80825260208201526001600160a01b0383165f9081526009602052604090206108e290836115bb565b6001600160a01b038416610f3b5760405163e602df0560e01b81525f60048201526024016106ee565b6001600160a01b038316610f6457604051634a1406b160e11b81525f60048201526024016106ee565b6001600160a01b038085165f90815260016020908152604080832093871683529290522082905580156109ae57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610fd691815260200190565b60405180910390a350505050565b610933838383611628565b5f65ffffffffffff821115611021576040516306dfcc6560e41b815260306004820152602481018390526044016106ee565b5090565b5f60018211611032575090565b816001600160801b821061104b5760809190911c9060401b5b6801000000000000000082106110665760409190911c9060201b5b640100000000821061107d5760209190911c9060101b5b6201000082106110925760109190911c9060081b5b61010082106110a65760089190911c9060041b5b601082106110b95760049190911c9060021b5b600482106110c55760011b5b600302600190811c908185816110dd576110dd611db2565b048201901c905060018185816110f5576110f5611db2565b048201901c9050600181858161110d5761110d611db2565b048201901c9050600181858161112557611125611db2565b048201901c9050600181858161113d5761113d611db2565b048201901c9050600181858161115557611155611db2565b048201901c905061117481858161116e5761116e611db2565b04821190565b90039392505050565b5f5b818310156111d4575f611192848461168e565b5f8781526020902090915065ffffffffffff86169082015465ffffffffffff1611156111c0578092506111ce565b6111cb816001611d9f565b93505b5061117f565b509392505050565b6001600160a01b0381165f908152602081905260408120546104f2565b816001600160a01b0316836001600160a01b03161415801561121a57505f81115b15610933576001600160a01b038316156112c1576001600160a01b0383165f908152600960205260408120819061125c906116a8611257866116b3565b6116e6565b6001600160d01b031691506001600160d01b03169150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516112b6929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610933576001600160a01b0382165f90815260096020526040812081906112f99061171e611257866116b3565b6001600160d01b031691506001600160d01b03169150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611353929190918252602082015260400190565b60405180910390a25050505050565b5f63ffffffff821115611021576040516306dfcc6560e41b815260206004820152602481018390526044016106ee565b606060ff83146113ac576113a583611729565b90506104f2565b8180546113b890611d40565b80601f01602080910402602001604051908101604052809291908181526020018280546113e490611d40565b801561142f5780601f106114065761010080835404028352916020019161142f565b820191905f5260205f20905b81548152906001019060200180831161141257829003601f168201915b505050505090506104f2565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561147457505f915060039050826114f9565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156114c5573d5f5f3e3d5ffd5b5050604051601f1901519150506001600160a01b0381166114f057505f9250600191508290506114f9565b92505f91508190505b9450945094915050565b5f82600381111561151657611516611dc6565b0361151f575050565b600182600381111561153357611533611dc6565b036115515760405163f645eedf60e01b815260040160405180910390fd5b600282600381111561156557611565611dc6565b036115865760405163fce698f760e01b8152600481018290526024016106ee565b600382600381111561159a5761159a611dc6565b03610575576040516335e2f38360e21b8152600481018290526024016106ee565b604080518082019091525f8082526020820152825f018263ffffffff16815481106115e8576115e8611dda565b5f9182526020918290206040805180820190915291015465ffffffffffff81168252600160301b90046001600160d01b0316918101919091529392505050565b611633838383611766565b6001600160a01b038316611683575f61164b60025490565b90506001600160d01b038082111561168057604051630e58ae9360e11b815260048101839052602481018290526044016106ee565b50505b61093383838361188c565b5f61169c6002848418611dee565b6108e290848416611d9f565b5f6108e28284611e0d565b5f6001600160d01b03821115611021576040516306dfcc6560e41b815260d06004820152602481018390526044016106ee565b5f5f6117116116f3610689565b6117096116ff88610dfd565b868863ffffffff16565b879190611901565b915091505b935093915050565b5f6108e28284611e2c565b60605f6117358361190e565b6040805160208082528183019092529192505f91906020820181803683375050509182525060208101929092525090565b6001600160a01b038316611790578060025f8282546117859190611d9f565b909155506118009050565b6001600160a01b0383165f90815260208190526040902054818110156117e25760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016106ee565b6001600160a01b0384165f9081526020819052604090209082900390555b6001600160a01b03821661181c5760028054829003905561183a565b6001600160a01b0382165f9081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161187f91815260200190565b60405180910390a3505050565b6001600160a01b0383166118ae576118ab600a61171e611257846116b3565b50505b6001600160a01b0382166118d0576118cd600a6116a8611257846116b3565b50505b6001600160a01b038381165f90815260086020526040808220548584168352912054610933929182169116836111f9565b5f80611711858585611935565b5f60ff8216601f8111156104f257604051632cd44ac360e21b815260040160405180910390fd5b82545f9081908015611a2b575f61195187610c08600185611d8c565b805490915065ffffffffffff80821691600160301b90046001600160d01b031690881682111561199457604051632520601d60e01b815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff16036119cd57825465ffffffffffff16600160301b6001600160d01b03891602178355611a1d565b6040805180820190915265ffffffffffff808a1682526001600160d01b03808a1660208085019182528d54600181018f555f8f81529190912094519151909216600160301b029216919091179101555b945085935061171692505050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a815291822095519251909316600160301b029190931617920191909155905081611716565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6108e26020830184611a85565b80356001600160a01b0381168114611adb575f5ffd5b919050565b5f5f60408385031215611af1575f5ffd5b611afa83611ac5565b946020939093013593505050565b5f5f5f60608486031215611b1a575f5ffd5b611b2384611ac5565b9250611b3160208501611ac5565b929592945050506040919091013590565b5f60208284031215611b52575f5ffd5b6108e282611ac5565b60ff60f81b8816815260e060208201525f611b7960e0830189611a85565b8281036040840152611b8b8189611a85565b606084018890526001600160a01b038716608085015260a0840186905283810360c0850152845180825260208087019350909101905f5b81811015611be0578351835260209384019390920191600101611bc2565b50909b9a5050505050505050505050565b5f60208284031215611c01575f5ffd5b5035919050565b803560ff81168114611adb575f5ffd5b5f5f5f5f5f5f60c08789031215611c2d575f5ffd5b611c3687611ac5565b95506020870135945060408701359350611c5260608801611c08565b9598949750929560808101359460a0909101359350915050565b5f5f5f5f5f5f5f60e0888a031215611c82575f5ffd5b611c8b88611ac5565b9650611c9960208901611ac5565b95506040880135945060608801359350611cb560808901611c08565b9699959850939692959460a0840135945060c09093013592915050565b5f5f60408385031215611ce3575f5ffd5b611cec83611ac5565b9150611cfa60208401611ac5565b90509250929050565b5f5f60408385031215611d14575f5ffd5b611d1d83611ac5565b9150602083013563ffffffff81168114611d35575f5ffd5b809150509250929050565b600181811c90821680611d5457607f821691505b602082108103611d7257634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b818103818111156104f2576104f2611d78565b808201808211156104f2576104f2611d78565b634e487b7160e01b5f52601260045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b5f82611e0857634e487b7160e01b5f52601260045260245ffd5b500490565b6001600160d01b0382811682821603908111156104f2576104f2611d78565b6001600160d01b0381811683821601908111156104f2576104f2611d7856fea26469706673582212207473c1af899f08bcde2d9aaf30ada34d92eb3470455c38c1f7eaaf601df5e12064736f6c634300081c0033"
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
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "minters",
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
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516119f03803806119f083398101604081905261002e91610127565b806040518060400160405280600f81526020016e111bdb985d1a5bdb949958d95a5c1d608a1b8152506040518060400160405280600b81526020016a10949051d49150d152541560aa1b815250815f908161008991906101ec565b50600161009682826101ec565b5050506001600160a01b0381166100c657604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6100cf816100d6565b50506102a6565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f60208284031215610137575f5ffd5b81516001600160a01b038116811461014d575f5ffd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061017c57607f821691505b60208210810361019a57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156101e757805f5260205f20601f840160051c810160208510156101c55750805b601f840160051c820191505b818110156101e4575f81556001016101d1565b50505b505050565b81516001600160401b0381111561020557610205610154565b610219816102138454610168565b846101a0565b6020601f82116001811461024b575f83156102345750848201515b5f19600385901b1c1916600184901b1784556101e4565b5f84815260208120601f198516915b8281101561027a578785015182556020948501946001909201910161025a565b508482101561029757868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b61173d806102b35f395ff3fe608060405234801561000f575f5ffd5b5060043610610132575f3560e01c80638da5cb5b116100b4578063c87b56dd11610079578063c87b56dd14610297578063cf456ae7146102aa578063d3fc9864146102bd578063e985e9c5146102d0578063f2fde38b146102e3578063f46eccc4146102f6575f5ffd5b80638da5cb5b1461023857806395d89b4114610249578063a22cb46514610251578063b63e6ac314610264578063b88d4fde14610284575f5ffd5b806323b872dd116100fa57806323b872dd146101d657806342842e0e146101e95780636352211e146101fc57806370a082311461020f578063715018a614610230575f5ffd5b806301ffc9a71461013657806306fdde031461015e578063081812fc14610173578063095ea7b31461019e5780630f7ee1ec146101b3575b5f5ffd5b6101496101443660046111d8565b610318565b60405190151581526020015b60405180910390f35b610166610369565b6040516101559190611221565b610186610181366004611233565b6103f8565b6040516001600160a01b039091168152602001610155565b6101b16101ac366004611265565b61041f565b005b6101c66101c1366004611233565b61042e565b604051610155949392919061128d565b6101b16101e43660046112c3565b6104e8565b6101b16101f73660046112c3565b610576565b61018661020a366004611233565b610595565b61022261021d3660046112fd565b61059f565b604051908152602001610155565b6101b16105e4565b6006546001600160a01b0316610186565b6101666105f7565b6101b161025f366004611316565b610606565b610277610272366004611233565b610611565b604051610155919061134f565b6101b16102923660046113a3565b610729565b6101666102a5366004611233565b610741565b6101b16102b8366004611316565b6107b2565b6102226102cb366004611480565b6107e4565b6101496102de366004611503565b610965565b6101b16102f13660046112fd565b610992565b6101496103043660046112fd565b60096020525f908152604090205460ff1681565b5f6001600160e01b031982166380ac58cd60e01b148061034857506001600160e01b03198216635b5e139f60e01b145b8061036357506301ffc9a760e01b6001600160e01b03198316145b92915050565b60605f805461037790611534565b80601f01602080910402602001604051908101604052809291908181526020018280546103a390611534565b80156103ee5780601f106103c5576101008083540402835291602001916103ee565b820191905f5260205f20905b8154815290600101906020018083116103d157829003601f168201915b5050505050905090565b5f610402826109cf565b505f828152600460205260409020546001600160a01b0316610363565b61042a828233610a07565b5050565b60086020525f908152604090208054600182015460028301546003840180546001600160a01b0390941694929391929161046790611534565b80601f016020809104026020016040519081016040528092919081815260200182805461049390611534565b80156104de5780601f106104b5576101008083540402835291602001916104de565b820191905f5260205f20905b8154815290600101906020018083116104c157829003601f168201915b5050505050905084565b6001600160a01b03821661051657604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f610522838333610a14565b9050836001600160a01b0316816001600160a01b031614610570576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161050d565b50505050565b61059083838360405180602001604052805f815250610729565b505050565b5f610363826109cf565b5f6001600160a01b0382166105c9576040516322718ad960e21b81525f600482015260240161050d565b506001600160a01b03165f9081526003602052604090205490565b6105ec610ac9565b6105f55f610af6565b565b60606001805461037790611534565b61042a338383610b47565b61064260405180608001604052805f6001600160a01b031681526020015f81526020015f8152602001606081525090565b61064b826109cf565b505f82815260086020908152604091829020825160808101845281546001600160a01b031681526001820154928101929092526002810154928201929092526003820180549192916060840191906106a290611534565b80601f01602080910402602001604051908101604052809291908181526020018280546106ce90611534565b80156107195780601f106106f057610100808354040283529160200191610719565b820191905f5260205f20905b8154815290600101906020018083116106fc57829003601f168201915b5050505050815250509050919050565b6107348484846104e8565b6105703385858585610be5565b606061074c826109cf565b505f61076260408051602081019091525f815290565b90505f8151116107805760405180602001604052805f8152506107ab565b8061078a84610d0d565b60405160200161079b929190611583565b6040516020818303038152906040525b9392505050565b6107ba610ac9565b6001600160a01b03919091165f908152600960205260409020805460ff1916911515919091179055565b335f9081526009602052604081205460ff166108425760405162461bcd60e51b815260206004820152601f60248201527f4e6f7420617574686f72697a656420746f206d696e7420726563656970747300604482015260640161050d565b600780545f918261085283611597565b9190505590506040518060800160405280876001600160a01b0316815260200186815260200142815260200185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505083815260086020908152604091829020845181546001600160a01b0319166001600160a01b039091161781559084015160018201559083015160028201556060830151909150600382019061090a90826115ff565b509050506109188682610d9d565b856001600160a01b0316817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea58760405161095491815260200190565b60405180910390a395945050505050565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b61099a610ac9565b6001600160a01b0381166109c357604051631e4fbdf760e01b81525f600482015260240161050d565b6109cc81610af6565b50565b5f818152600260205260408120546001600160a01b03168061036357604051637e27328960e01b81526004810184905260240161050d565b6105908383836001610db6565b5f828152600260205260408120546001600160a01b03168015801590610a4257506001600160a01b03851615155b15610ab55760405162461bcd60e51b815260206004820152603d60248201527f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f60448201527f756e6420616e642063616e6e6f74206265207472616e73666572726564000000606482015260840161050d565b610ac0858585610eba565b95945050505050565b6006546001600160a01b031633146105f55760405163118cdaa760e01b815233600482015260240161050d565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b038216610b7957604051630b61174360e31b81526001600160a01b038316600482015260240161050d565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15610d0657604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610c279088908890879087906004016116ba565b6020604051808303815f875af1925050508015610c61575060408051601f3d908101601f19168201909252610c5e918101906116ec565b60015b610cc8573d808015610c8e576040519150601f19603f3d011682016040523d82523d5f602084013e610c93565b606091505b5080515f03610cc057604051633250574960e11b81526001600160a01b038516600482015260240161050d565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b14610d0457604051633250574960e11b81526001600160a01b038516600482015260240161050d565b505b5050505050565b60605f610d1983610fac565b60010190505f8167ffffffffffffffff811115610d3857610d3861138f565b6040519080825280601f01601f191660200182016040528015610d62576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610d6c57509392505050565b61042a828260405180602001604052805f815250611083565b8080610dca57506001600160a01b03821615155b15610e8b575f610dd9846109cf565b90506001600160a01b03831615801590610e055750826001600160a01b0316816001600160a01b031614155b8015610e185750610e168184610965565b155b15610e415760405163a9fbf51f60e01b81526001600160a01b038416600482015260240161050d565b8115610e895783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f828152600260205260408120546001600160a01b0390811690831615610ee657610ee681848661109a565b6001600160a01b03811615610f2057610f015f855f5f610db6565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615610f4e576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610fea5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611016576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061103457662386f26fc10000830492506010015b6305f5e100831061104c576305f5e100830492506008015b612710831061106057612710830492506004015b60648310611072576064830492506002015b600a83106103635760010192915050565b61108d83836110fe565b610590335f858585610be5565b6110a583838361115f565b610590576001600160a01b0383166110d357604051637e27328960e01b81526004810182905260240161050d565b60405163177e802f60e01b81526001600160a01b03831660048201526024810182905260440161050d565b6001600160a01b03821661112757604051633250574960e11b81525f600482015260240161050d565b5f61113383835f610a14565b90506001600160a01b03811615610590576040516339e3563760e11b81525f600482015260240161050d565b5f6001600160a01b038316158015906111bb5750826001600160a01b0316846001600160a01b0316148061119857506111988484610965565b806111bb57505f828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160e01b0319811681146109cc575f5ffd5b5f602082840312156111e8575f5ffd5b81356107ab816111c3565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6107ab60208301846111f3565b5f60208284031215611243575f5ffd5b5035919050565b80356001600160a01b0381168114611260575f5ffd5b919050565b5f5f60408385031215611276575f5ffd5b61127f8361124a565b946020939093013593505050565b60018060a01b0385168152836020820152826040820152608060608201525f6112b960808301846111f3565b9695505050505050565b5f5f5f606084860312156112d5575f5ffd5b6112de8461124a565b92506112ec6020850161124a565b929592945050506040919091013590565b5f6020828403121561130d575f5ffd5b6107ab8261124a565b5f5f60408385031215611327575f5ffd5b6113308361124a565b915060208301358015158114611344575f5ffd5b809150509250929050565b6020815260018060a01b03825116602082015260208201516040820152604082015160608201525f60608301516080808401526111bb60a08401826111f3565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f608085870312156113b6575f5ffd5b6113bf8561124a565b93506113cd6020860161124a565b925060408501359150606085013567ffffffffffffffff8111156113ef575f5ffd5b8501601f810187136113ff575f5ffd5b803567ffffffffffffffff8111156114195761141961138f565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156114485761144861138f565b60405281815282820160200189101561145f575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f5f5f60608587031215611493575f5ffd5b61149c8561124a565b935060208501359250604085013567ffffffffffffffff8111156114be575f5ffd5b8501601f810187136114ce575f5ffd5b803567ffffffffffffffff8111156114e4575f5ffd5b8760208284010111156114f5575f5ffd5b949793965060200194505050565b5f5f60408385031215611514575f5ffd5b61151d8361124a565b915061152b6020840161124a565b90509250929050565b600181811c9082168061154857607f821691505b60208210810361156657634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f6111bb611591838661156c565b8461156c565b5f600182016115b457634e487b7160e01b5f52601160045260245ffd5b5060010190565b601f82111561059057805f5260205f20601f840160051c810160208510156115e05750805b601f840160051c820191505b81811015610d06575f81556001016115ec565b815167ffffffffffffffff8111156116195761161961138f565b61162d816116278454611534565b846115bb565b6020601f82116001811461165f575f83156116485750848201515b5f19600385901b1c1916600184901b178455610d06565b5f84815260208120601f198516915b8281101561168e578785015182556020948501946001909201910161166e565b50848210156116ab57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906112b9908301846111f3565b5f602082840312156116fc575f5ffd5b81516107ab816111c356fea26469706673582212201c17c1f6be05e74c72f1a809ce84c257c3a9e3d3ca8569cd46e18c1490ae16ed64736f6c634300081c0033"
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
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610d42380380610d42833981016040819052602b9160b4565b806001600160a01b038116605857604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b605f816065565b505060df565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121560c3575f5ffd5b81516001600160a01b038116811460d8575f5ffd5b9392505050565b610c56806100ec5f395ff3fe608060405234801561000f575f5ffd5b506004361061009b575f3560e01c8063b9209e3311610063578063b9209e3314610126578063ceb68c2314610161578063d42b291c14610174578063d7bfe38614610187578063f2fde38b1461019a575f5ffd5b8063715018a61461009f57806374d4e491146100a95780638da5cb5b146100bf57806390229af7146100e3578063a622ee7c14610103575b5f5ffd5b6100a76101ad565b005b6002546040519081526020015b60405180910390f35b5f546001600160a01b03165b6040516001600160a01b0390911681526020016100b6565b6100f66100f136600461087a565b6101c0565b6040516100b691906108fc565b61011661011136600461087a565b610366565b6040516100b6949392919061095c565b61015161013436600461087a565b6001600160a01b03165f9081526001602052604090205460ff1690565b60405190151581526020016100b6565b6100a761016f36600461087a565b6104a2565b6100a76101823660046109e5565b610553565b6100cb610195366004610a7a565b61077f565b6100a76101a836600461087a565b6107a7565b6101b56107e4565b6101be5f610810565b565b60408051608080820183525f80835260208084018290526060848601819052808501526001600160a01b038616825260018152908490208451928301909452835460ff80821615158452939492939184019161010090910416600481111561022a5761022a61089a565b600481111561023b5761023b61089a565b815260200160018201805461024f90610a91565b80601f016020809104026020016040519081016040528092919081815260200182805461027b90610a91565b80156102c65780601f1061029d576101008083540402835291602001916102c6565b820191905f5260205f20905b8154815290600101906020018083116102a957829003601f168201915b505050505081526020016002820180546102df90610a91565b80601f016020809104026020016040519081016040528092919081815260200182805461030b90610a91565b80156103565780601f1061032d57610100808354040283529160200191610356565b820191905f5260205f20905b81548152906001019060200180831161033957829003601f168201915b5050505050815250509050919050565b600160208190525f91825260409091208054918101805460ff8085169461010090041692919061039590610a91565b80601f01602080910402602001604051908101604052809291908181526020018280546103c190610a91565b801561040c5780601f106103e35761010080835404028352916020019161040c565b820191905f5260205f20905b8154815290600101906020018083116103ef57829003601f168201915b50505050509080600201805461042190610a91565b80601f016020809104026020016040519081016040528092919081815260200182805461044d90610a91565b80156104985780601f1061046f57610100808354040283529160200191610498565b820191905f5260205f20905b81548152906001019060200180831161047b57829003601f168201915b5050505050905084565b6104aa6107e4565b6001600160a01b0381165f9081526001602052604090205460ff1661050b5760405162461bcd60e51b815260206004820152601260248201527115985d5b1d081b9bdd081d995c9a599a595960721b60448201526064015b60405180910390fd5b6001600160a01b0381165f81815260016020526040808220805460ff19169055517fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a9190a250565b61055b6107e4565b6001600160a01b0386166105a35760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606401610502565b6001600160a01b0386165f9081526001602052604090205460ff1661060d57600280546001810182555f919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0388161790555b60405180608001604052806001151581526020018660048111156106335761063361089a565b815260200185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250604080516020601f8601819004810282018101909252848152918101919085908590819084018382808284375f9201829052509390945250506001600160a01b03891681526001602090815260409091208351815490151560ff19821681178355928501519193509091839161ff001990911661ffff19909116176101008360048111156107005761070061089a565b0217905550604082015160018201906107199082610b29565b506060820151600282019061072e9082610b29565b50905050856001600160a01b03167f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec886868660405161076f93929190610be4565b60405180910390a2505050505050565b6002818154811061078e575f80fd5b5f918252602090912001546001600160a01b0316905081565b6107af6107e4565b6001600160a01b0381166107d857604051631e4fbdf760e01b81525f6004820152602401610502565b6107e181610810565b50565b5f546001600160a01b031633146101be5760405163118cdaa760e01b8152336004820152602401610502565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b0381168114610875575f5ffd5b919050565b5f6020828403121561088a575f5ffd5b6108938261085f565b9392505050565b634e487b7160e01b5f52602160045260245ffd5b600581106108ca57634e487b7160e01b5f52602160045260245ffd5b9052565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081528151151560208201525f602083015161091c60408401826108ae565b5060408301516080606084015261093660a08401826108ce565b90506060840151601f1984830301608085015261095382826108ce565b95945050505050565b841515815261096e60208201856108ae565b608060408201525f61098360808301856108ce565b828103606084015261099581856108ce565b979650505050505050565b5f5f83601f8401126109b0575f5ffd5b50813567ffffffffffffffff8111156109c7575f5ffd5b6020830191508360208285010111156109de575f5ffd5b9250929050565b5f5f5f5f5f5f608087890312156109fa575f5ffd5b610a038761085f565b9550602087013560058110610a16575f5ffd5b9450604087013567ffffffffffffffff811115610a31575f5ffd5b610a3d89828a016109a0565b909550935050606087013567ffffffffffffffff811115610a5c575f5ffd5b610a6889828a016109a0565b979a9699509497509295939492505050565b5f60208284031215610a8a575f5ffd5b5035919050565b600181811c90821680610aa557607f821691505b602082108103610ac357634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52604160045260245ffd5b601f821115610b2457805f5260205f20601f840160051c81016020851015610b025750805b601f840160051c820191505b81811015610b21575f8155600101610b0e565b50505b505050565b815167ffffffffffffffff811115610b4357610b43610ac9565b610b5781610b518454610a91565b84610add565b6020601f821160018114610b89575f8315610b725750848201515b5f19600385901b1c1916600184901b178455610b21565b5f84815260208120601f198516915b82811015610bb85787850151825560209485019460019092019101610b98565b5084821015610bd557868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b610bee81856108ae565b60406020820152816040820152818360608301375f818301606090810191909152601f909201601f191601019291505056fea26469706673582212208cf1773480150c0cc0856dc8461be5f242aa7a6b13dff93040751046ed05a9e264736f6c634300081c0033"
    },
    "ExhibitVault": {
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611ebe380380611ebe83398101604081905261002e916100fa565b816001600160a01b03811661005c57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006581610090565b5060018055600280546001600160a01b0319166001600160a01b03929092169190911790555061012b565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100f5575f5ffd5b919050565b5f5f6040838503121561010b575f5ffd5b610114836100df565b9150610122602084016100df565b90509250929050565b611d86806101385f395ff3fe608060405234801561000f575f5ffd5b5060043610610111575f3560e01c806381bd34d21161009e578063d6bd07ee1161006e578063d6bd07ee146102c5578063d7423858146102d8578063f07a380e146102eb578063f23a6e61146102fe578063f2fde38b14610311575f5ffd5b806381bd34d21461025f5780638da5cb5b1461028f578063bc197c811461029f578063c2fe5185146102b2575f5ffd5b806335f81b87116100e457806335f81b87146101b6578063380ff999146101c95780636f39becd146101f9578063715018a6146102445780637b1039991461024c575f5ffd5b806301ffc9a714610115578063041261961461013d578063150b7a02146101755780632ff1d0f9146101a1575b5f5ffd5b61012861012336600461159a565b610324565b60405190151581526020015b60405180910390f35b61016761014b3660046115dc565b600560209081525f928352604080842090915290825290205481565b604051908152602001610134565b6101886101833660046116ed565b61035a565b6040516001600160e01b03199091168152602001610134565b6101b46101af366004611755565b610581565b005b6101b46101c4366004611787565b6107b6565b6101676101d73660046117d5565b600660209081525f938452604080852082529284528284209052825290205481565b61022c6102073660046115dc565b600360209081525f92835260408084209091529082529020546001600160a01b031681565b6040516001600160a01b039091168152602001610134565b6101b46107db565b60025461022c906001600160a01b031681565b61016761026d3660046117d5565b600460209081525f938452604080852082529284528284209052825290205481565b5f546001600160a01b031661022c565b6101886102ad366004611894565b6107ee565b6101b46102c0366004611947565b610b0c565b6101b46102d336600461198c565b610b2f565b6101b46102e63660046117d5565b610b44565b6101b46102f93660046115dc565b610b61565b61018861030c3660046119d3565b610ced565b6101b461031f366004611a2b565b610f1b565b5f6001600160e01b03198216630271189760e51b148061035457506301ffc9a760e01b6001600160e01b03198316145b92915050565b5f610363610f58565b815184905f906020036104175760025460405163b9209e3360e01b81526001600160a01b0388811660048301529091169063b9209e3390602401602060405180830381865afa1580156103b8573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103dc9190611a5a565b156103fc57838060200190518101906103f59190611a73565b915061043a565b838060200190518101906104109190611a8e565b905061043a565b835160400361043a57838060200190518101906104349190611aa5565b90925090505b335f908152600360209081526040808320888452909152812080546001600160a01b0319166001600160a01b03851617905581610477575f610481565b6104818242611ae5565b335f9081526005602090815260408083208a845290915280822083905560025490516390229af760e01b815230600482015292935090916001600160a01b03909116906390229af7906024015f60405180830381865afa1580156104e7573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261050e9190810190611b45565b604001519050836001600160a01b031687336001600160a01b03167f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad3848660405161055a929190611c33565b60405180910390a4630a85bd0160e11b94505050505061057960018055565b949350505050565b610589610f58565b6001600160a01b0383165f90815260046020908152604080832085845282528083203384529091529020548111156105ff5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064015b60405180910390fd5b6001600160a01b0383165f90815260066020908152604080832085845282528083203384529091529020544210156106495760405162461bcd60e51b81526004016105f690611c54565b6001600160a01b0383165f908152600460209081526040808320858452825280832033845290915281208054839290610683908490611c8b565b90915550506001600160a01b0383165f908152600460209081526040808320858452825280832033845290915281205490036106e5576001600160a01b0383165f90815260066020908152604080832085845282528083203384529091528120555b604051637921219560e11b8152306004820152336024820152604481018390526064810182905260a060848201525f60a48201526001600160a01b0384169063f242432a9060c4015f604051808303815f87803b158015610744575f5ffd5b505af1158015610756573d5f5f3e3d5ffd5b50505050336001600160a01b031682846001600160a01b03167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f9846040516107a091815260200190565b60405180910390a46107b160018055565b505050565b6107be610f58565b6107cb8585858585610f82565b6107d460018055565b5050505050565b6107e361128c565b6107ec5f6112b8565b565b5f6107f7610f58565b815185905f906020036108ab5760025460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa15801561084c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108709190611a5a565b1561089057838060200190518101906108899190611a73565b91506108ce565b838060200190518101906108a49190611a8e565b90506108ce565b83516040036108ce57838060200190518101906108c89190611aa5565b90925090505b5f5f82116108dc575f6108e6565b6108e68242611ae5565b6002546040516390229af760e01b81523060048201529192505f916001600160a01b03909116906390229af7906024015f60405180830381865afa158015610930573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526109579190810190611b45565b6040015190505f5b8851811015610aea5787818151811061097a5761097a611c9e565b602002602001015160045f336001600160a01b03166001600160a01b031681526020019081526020015f205f8b84815181106109b8576109b8611c9e565b602002602001015181526020019081526020015f205f876001600160a01b03166001600160a01b031681526020019081526020015f205f8282546109fc9190611ae5565b9091555050335f9081526006602052604081208a518592908c9085908110610a2657610a26611c9e565b602002602001015181526020019081526020015f205f876001600160a01b03166001600160a01b031681526020019081526020015f2081905550846001600160a01b0316898281518110610a7c57610a7c611c9e565b6020026020010151336001600160a01b03167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358b8581518110610ac157610ac1611c9e565b60200260200101518688604051610ada93929190611cb2565b60405180910390a460010161095f565b5063bc197c8160e01b5b945050505050610b0360018055565b95945050505050565b610b14610f58565b610b2084848484611307565b610b2960018055565b50505050565b610b37610f58565b610b20848484845f610f82565b610b4c610f58565b610b588383835f611307565b6107b160018055565b610b69610f58565b6001600160a01b038281165f908152600360209081526040808320858452909152902054163314610bcc5760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b60448201526064016105f6565b6001600160a01b0382165f908152600560209081526040808320848452909152902054421015610c0e5760405162461bcd60e51b81526004016105f690611c54565b6001600160a01b0382165f818152600360209081526040808320858452825280832080546001600160a01b0319169055838352600582528083208584529091528082209190915551632142170760e11b8152306004820152336024820152604481018390526342842e0e906064015f604051808303815f87803b158015610c93575f5ffd5b505af1158015610ca5573d5f5f3e3d5ffd5b50506040513392508391506001600160a01b038516907f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06905f90a4610ce960018055565b5050565b5f610cf6610f58565b815185905f90602003610daa5760025460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015610d4b573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d6f9190611a5a565b15610d8f5783806020019051810190610d889190611a73565b9150610dcd565b83806020019051810190610da39190611a8e565b9050610dcd565b8351604003610dcd5783806020019051810190610dc79190611aa5565b90925090505b335f90815260046020908152604080832089845282528083206001600160a01b038616845290915281208054879290610e07908490611ae5565b909155505f905081610e19575f610e23565b610e238242611ae5565b335f9081526006602090815260408083208b845282528083206001600160a01b038881168552925280832084905560025490516390229af760e01b815230600482015293945091929116906390229af7906024015f60405180830381865afa158015610e91573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610eb89190810190611b45565b604001519050836001600160a01b031688336001600160a01b03167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358a8587604051610f0693929190611cb2565b60405180910390a463f23a6e6160e01b610af4565b610f2361128c565b6001600160a01b038116610f4c57604051631e4fbdf760e01b81525f60048201526024016105f6565b610f55816112b8565b50565b600260015403610f7b57604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b6001600160a01b0385165f9081526004602090815260408083208784528252808320338452909152902054831115610ff35760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016105f6565b60025460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa15801561103b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061105f9190611a5a565b6110a65760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b60448201526064016105f6565b6001600160a01b0385165f90815260066020908152604080832087845282528083203384529091529020544210156110f05760405162461bcd60e51b81526004016105f690611c54565b6001600160a01b0385165f90815260046020908152604080832087845282528083203384529091528120805485929061112a908490611c8b565b90915550506001600160a01b0385165f9081526004602090815260408083208784528252808320338452909152812054900361118c576001600160a01b0385165f90815260066020908152604080832087845282528083203384529091528120555b606081156111bd576040805133602082015290810183905260600160405160208183030381529060405290506111da565b604080513360208201520160405160208183030381529060405290505b604051637921219560e11b81526001600160a01b0387169063f242432a9061120e90309087908a908a908890600401611cda565b5f604051808303815f87803b158015611225575f5ffd5b505af1158015611237573d5f5f3e3d5ffd5b5050604080518781526001600160a01b0387811660208301523394508993508a16917fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1910160405180910390a4505050505050565b5f546001600160a01b031633146107ec5760405163118cdaa760e01b81523360048201526024016105f6565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038481165f90815260036020908152604080832087845290915290205416331461136a5760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b60448201526064016105f6565b60025460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa1580156113b2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113d69190611a5a565b61141d5760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b60448201526064016105f6565b6001600160a01b0384165f90815260056020908152604080832086845290915290205442101561145f5760405162461bcd60e51b81526004016105f690611c54565b6001600160a01b0384165f818152600360209081526040808320878452825280832080546001600160a01b031916905592825260058152828220868352905290812055606081156114d3576040805133602082015290810183905260600160405160208183030381529060405290506114f0565b604080513360208201520160405160208183030381529060405290505b604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde90611522903090879089908790600401611d1e565b5f604051808303815f87803b158015611539575f5ffd5b505af115801561154b573d5f5f3e3d5ffd5b50506040516001600160a01b0386811682523393508792508816907f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d799060200160405180910390a45050505050565b5f602082840312156115aa575f5ffd5b81356001600160e01b0319811681146115c1575f5ffd5b9392505050565b6001600160a01b0381168114610f55575f5ffd5b5f5f604083850312156115ed575f5ffd5b82356115f8816115c8565b946020939093013593505050565b634e487b7160e01b5f52604160045260245ffd5b6040516080810167ffffffffffffffff8111828210171561163d5761163d611606565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561166c5761166c611606565b604052919050565b5f67ffffffffffffffff82111561168d5761168d611606565b50601f01601f191660200190565b5f82601f8301126116aa575f5ffd5b81356116bd6116b882611674565b611643565b8181528460208386010111156116d1575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215611700575f5ffd5b843561170b816115c8565b9350602085013561171b816115c8565b925060408501359150606085013567ffffffffffffffff81111561173d575f5ffd5b6117498782880161169b565b91505092959194509250565b5f5f5f60608486031215611767575f5ffd5b8335611772816115c8565b95602085013595506040909401359392505050565b5f5f5f5f5f60a0868803121561179b575f5ffd5b85356117a6816115c8565b9450602086013593506040860135925060608601356117c4816115c8565b949793965091946080013592915050565b5f5f5f606084860312156117e7575f5ffd5b83356117f2816115c8565b9250602084013591506040840135611809816115c8565b809150509250925092565b5f82601f830112611823575f5ffd5b813567ffffffffffffffff81111561183d5761183d611606565b8060051b61184d60208201611643565b91825260208185018101929081019086841115611868575f5ffd5b6020860192505b8383101561188a57823582526020928301929091019061186f565b9695505050505050565b5f5f5f5f5f60a086880312156118a8575f5ffd5b85356118b3816115c8565b945060208601356118c3816115c8565b9350604086013567ffffffffffffffff8111156118de575f5ffd5b6118ea88828901611814565b935050606086013567ffffffffffffffff811115611906575f5ffd5b61191288828901611814565b925050608086013567ffffffffffffffff81111561192e575f5ffd5b61193a8882890161169b565b9150509295509295909350565b5f5f5f5f6080858703121561195a575f5ffd5b8435611965816115c8565b935060208501359250604085013561197c816115c8565b9396929550929360600135925050565b5f5f5f5f6080858703121561199f575f5ffd5b84356119aa816115c8565b9350602085013592506040850135915060608501356119c8816115c8565b939692955090935050565b5f5f5f5f5f60a086880312156119e7575f5ffd5b85356119f2816115c8565b94506020860135611a02816115c8565b93506040860135925060608601359150608086013567ffffffffffffffff81111561192e575f5ffd5b5f60208284031215611a3b575f5ffd5b81356115c1816115c8565b80518015158114611a55575f5ffd5b919050565b5f60208284031215611a6a575f5ffd5b6115c182611a46565b5f60208284031215611a83575f5ffd5b81516115c1816115c8565b5f60208284031215611a9e575f5ffd5b5051919050565b5f5f60408385031215611ab6575f5ffd5b8251611ac1816115c8565b6020939093015192949293505050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561035457610354611ad1565b5f82601f830112611b07575f5ffd5b8151611b156116b882611674565b818152846020838601011115611b29575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f60208284031215611b55575f5ffd5b815167ffffffffffffffff811115611b6b575f5ffd5b820160808185031215611b7c575f5ffd5b611b8461161a565b611b8d82611a46565b8152602082015160ff81168114611ba2575f5ffd5b6020820152604082015167ffffffffffffffff811115611bc0575f5ffd5b611bcc86828501611af8565b604083015250606082015167ffffffffffffffff811115611beb575f5ffd5b611bf786828501611af8565b606083015250949350505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b604081525f611c456040830185611c05565b90508260208301529392505050565b6020808252601a908201527f45786869626974696f6e206e6f74207965742065787069726564000000000000604082015260600190565b8181038181111561035457610354611ad1565b634e487b7160e01b5f52603260045260245ffd5b838152606060208201525f611cca6060830185611c05565b9050826040830152949350505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f90611d1390830184611c05565b979650505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061188a90830184611c0556fea2646970667358221220ebc5b279c5255b7864ce4e97539b78862aba6b3807525de6c1bd6d59d795013164736f6c634300081c0033"
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
            }
          ],
          "name": "createOffer",
          "outputs": [],
          "stateMutability": "payable",
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
      "bytecode": "0x6080604052348015600e575f5ffd5b5060405161037a38038061037a833981016040819052602b916074565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560a0565b80516001600160a01b0381168114606f575f5ffd5b919050565b5f5f604083850312156084575f5ffd5b608b83605a565b9150609760208401605a565b90509250929050565b6102cd806100ad5f395ff3fe608060405260043610610041575f3560e01c8063150b7a021461004c578063a269993d14610089578063abc8c7af1461009e578063d56d229d146100d4575f5ffd5b3661004857005b5f5ffd5b348015610057575f5ffd5b5061006b6100663660046101eb565b6100f3565b6040516001600160e01b031990911681526020015b60405180910390f35b61009c610097366004610280565b610168565b005b3480156100a9575f5ffd5b505f546100bc906001600160a01b031681565b6040516001600160a01b039091168152602001610080565b3480156100df575f5ffd5b506001546100bc906001600160a01b031681565b5f805460015460405163016295ab60e21b81526001600160a01b0391821660048201526024810187905291169063058a56ac906044015f604051808303815f87803b158015610140575f5ffd5b505af1158015610152573d5f5f3e3d5ffd5b50630a85bd0160e11b9998505050505050505050565b5f5460015460405163746538d960e01b81526001600160a01b0391821660048201526024810184905291169063746538d99034906044015f604051808303818588803b1580156101b6575f5ffd5b505af11580156101c8573d5f5f3e3d5ffd5b505050505050565b80356001600160a01b03811681146101e6575f5ffd5b919050565b5f5f5f5f5f608086880312156101ff575f5ffd5b610208866101d0565b9450610216602087016101d0565b935060408601359250606086013567ffffffffffffffff811115610238575f5ffd5b8601601f81018813610248575f5ffd5b803567ffffffffffffffff81111561025e575f5ffd5b88602082840101111561026f575f5ffd5b959894975092955050506020019190565b5f60208284031215610290575f5ffd5b503591905056fea2646970667358221220a223da24f5acca4f4d49af6baea2a33eb9f1a3a2fffff99b5b3b0e89806d6c1c64736f6c634300081c0033"
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
              "name": "seller",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "price",
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
            }
          ],
          "name": "createOffer",
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
              "name": "timestamp",
              "type": "uint256"
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
      "bytecode": "0x60a0604052348015600e575f5ffd5b50604051610c86380380610c86833981016040819052602b916036565b60015f55608052604c565b5f602082840312156045575f5ffd5b5051919050565b608051610c1c61006a5f395f818160bc01526105470152610c1c5ff3fe608060405260043610610054575f3560e01c8063058a56ac14610058578063746538d91461007957806399652de71461008c578063a6a3b5b4146100ab578063aa1a8411146100f1578063b1b9e78d14610163575b5f5ffd5b348015610063575f5ffd5b50610077610072366004610b56565b610182565b005b610077610087366004610b56565b610338565b348015610097575f5ffd5b506100776100a6366004610b56565b6104a5565b3480156100b6575f5ffd5b506100de7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b3480156100fc575f5ffd5b5061013e61010b366004610b56565b600160208181525f938452604080852090915291835291208054918101546002909101546001600160a01b039092169183565b604080516001600160a01b0390941684526020840192909252908201526060016100e8565b34801561016e575f5ffd5b5061007761017d366004610b56565b6106ec565b61018a610b17565b6001600160a01b038083165f908152600160208181526040808420868552825292839020835160608101855281549095168086529281015491850191909152600201549183019190915233146102275760405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f66666572000000000060448201526064015b60405180910390fd5b6001600160a01b0383165f908152600160208181526040808420868552825280842080546001600160a01b0319168155928301849055600290920183905583015190513391908381818185875af1925050503d805f81146102a3576040519150601f19603f3d011682016040523d82523d5f602084013e6102a8565b606091505b50509050806102f25760405162461bcd60e51b81526020600482015260166024820152751499599d5b99081d1bc8189d5e595c8819985a5b195960521b604482015260640161021e565b604051339084906001600160a01b038716907f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d0905f90a4505061033460015f55565b5050565b610340610b17565b5f341161039a5760405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b606482015260840161021e565b6001600160a01b038281165f90815260016020908152604080832085845290915290205416156104035760405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b604482015260640161021e565b6040805160608101825233808252346020808401828152428587019081526001600160a01b038981165f81815260018087528a82208c83528752908a9020985189546001600160a01b031916931692909217885592519087015551600290950194909455935190815290928492917fd46a008cac1cb5ec453d4928e646f936b6d11b8ec6b488f00a55bd90eda74a73910160405180910390a461033460015f55565b6104ad610b17565b6001600160a01b038083165f908152600160208181526040808420868552825292839020835160608101855281549095168086529281015491850191909152600201549183019190915233146105455760405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f666665720000000000604482015260640161021e565b7f000000000000000000000000000000000000000000000000000000000000000081604001516105759190610b80565b4211156105c45760405162461bcd60e51b815260206004820152601960248201527f526566756e6420706572696f6420686173206578706972656400000000000000604482015260640161021e565b6001600160a01b0383165f908152600160208181526040808420868552825280842080546001600160a01b0319168155928301849055600290920183905583015190513391908381818185875af1925050503d805f8114610640576040519150601f19603f3d011682016040523d82523d5f602084013e610645565b606091505b505090508061068f5760405162461bcd60e51b81526020600482015260166024820152751499599d5b99081d1bc8189d5e595c8819985a5b195960521b604482015260640161021e565b336001600160a01b031683856001600160a01b03167f6b2d7d3541d77e4ba894942103bb7bff8611a2fe5a6c6660870f0c15ab75c2d385602001516040516106d991815260200190565b60405180910390a4505061033460015f55565b6106f4610b17565b6001600160a01b038083165f90815260016020818152604080842086855282529283902083516060810185528154909516808652928101549185019190915260020154918301919091526107825760405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b604482015260640161021e565b6040516331a9108f60e11b815260048101839052839033906001600160a01b03831690636352211e90602401602060405180830381865afa1580156107c9573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107ed9190610ba5565b6001600160a01b0316146108435760405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e4654000000000000000000604482015260640161021e565b60405163e985e9c560e01b81523360048201523060248201526001600160a01b0382169063e985e9c590604401602060405180830381865afa15801561088b573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108af9190610bc7565b80610929575060405163020604bf60e21b81526004810184905230906001600160a01b0383169063081812fc90602401602060405180830381865afa1580156108fa573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061091e9190610ba5565b6001600160a01b0316145b6109835760405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b606482015260840161021e565b6001600160a01b038481165f90815260016020818152604080842088855290915280832080546001600160a01b031916815591820183905560029091019190915583519051632142170760e11b8152336004820152908216602482015260448101859052908216906342842e0e906064015f604051808303815f87803b158015610a0b575f5ffd5b505af1158015610a1d573d5f5f3e3d5ffd5b5050505060208201516040515f9133918381818185875af1925050503d805f8114610a63576040519150601f19603f3d011682016040523d82523d5f602084013e610a68565b606091505b5050905080610ab95760405162461bcd60e51b815260206004820152601960248201527f5472616e7366657220746f2073656c6c6572206661696c656400000000000000604482015260640161021e565b336001600160a01b031684866001600160a01b03167fa994d1bf7c4f40ea558b18bf79efbc7bc38b5d5f72aa2fec5a69cdb31be161328660200151604051610b0391815260200190565b60405180910390a450505061033460015f55565b60025f5403610b3957604051633ee5aeb560e01b815260040160405180910390fd5b60025f55565b6001600160a01b0381168114610b53575f5ffd5b50565b5f5f60408385031215610b67575f5ffd5b8235610b7281610b3f565b946020939093013593505050565b80820180821115610b9f57634e487b7160e01b5f52601160045260245ffd5b92915050565b5f60208284031215610bb5575f5ffd5b8151610bc081610b3f565b9392505050565b5f60208284031215610bd7575f5ffd5b81518015158114610bc0575f5ffdfea26469706673582212202e64391b1a55fe84a2e60cd1b70697f1c47ab4a65dd2536e6ee06aa59c00bc7e64736f6c634300081c0033"
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
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610bfd380380610bfd833981016040819052602b9160b4565b806001600160a01b038116605857604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b605f816065565b505060df565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121560c3575f5ffd5b81516001600160a01b038116811460d8575f5ffd5b9392505050565b610b11806100ec5f395ff3fe6080604052600436106100a8575f3560e01c80638da5cb5b116100625780638da5cb5b1461019d5780639ebd9115146101c3578063b61d27f6146101e2578063bc197c811461020e578063f23a6e6114610239578063f2fde38b14610264575f5ffd5b806301ffc9a7146100b3578063150b7a02146100e7578063256451ac1461012a5780634782f7791461014b578063715018a61461016a5780637b9f76b51461017e575f5ffd5b366100af57005b5f5ffd5b3480156100be575f5ffd5b506100d26100cd36600461066b565b610283565b60405190151581526020015b60405180910390f35b3480156100f2575f5ffd5b5061011161010136600461075e565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016100de565b348015610135575f5ffd5b506101496101443660046107c6565b6102b9565b005b348015610156575f5ffd5b5061014961016536600461080d565b61033e565b348015610175575f5ffd5b50610149610428565b348015610189575f5ffd5b50610149610198366004610837565b61043b565b3480156101a8575f5ffd5b505f546040516001600160a01b0390911681526020016100de565b3480156101ce575f5ffd5b506101496101dd366004610876565b6104ab565b3480156101ed575f5ffd5b506102016101fc366004610891565b6104fa565b6040516100de9190610916565b348015610219575f5ffd5b506101116102283660046109c1565b63bc197c8160e01b95945050505050565b348015610244575f5ffd5b50610111610253366004610a74565b63f23a6e6160e01b95945050505050565b34801561026f575f5ffd5b5061014961027e366004610876565b6105b3565b5f6001600160e01b03198216630271189760e51b14806102b357506301ffc9a760e01b6001600160e01b03198316145b92915050565b6102c16105f0565b604051637921219560e11b81523060048201526001600160a01b038281166024830152604482018590526064820184905260a060848301525f60a483015285169063f242432a9060c4015f604051808303815f87803b158015610322575f5ffd5b505af1158015610334573d5f5f3e3d5ffd5b5050505050505050565b6103466105f0565b478111156103925760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064015b60405180910390fd5b5f826001600160a01b0316826040515f6040518083038185875af1925050503d805f81146103db576040519150601f19603f3d011682016040523d82523d5f602084013e6103e0565b606091505b50509050806104235760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606401610389565b505050565b6104306105f0565b6104395f61061c565b565b6104436105f0565b604051632142170760e11b81523060048201526001600160a01b038281166024830152604482018490528416906342842e0e906064015f604051808303815f87803b158015610490575f5ffd5b505af11580156104a2573d5f5f3e3d5ffd5b50505050505050565b6104b36105f0565b47806103925760405162461bcd60e51b81526020600482015260166024820152754e6f2062616c616e636520746f20776974686472617760501b6044820152606401610389565b60606105046105f0565b5f5f866001600160a01b0316868686604051610521929190610acc565b5f6040518083038185875af1925050503d805f811461055b576040519150601f19603f3d011682016040523d82523d5f602084013e610560565b606091505b5091509150816105a95760405162461bcd60e51b8152602060048201526014602482015273115e1d195c9b985b0818d85b1b0819985a5b195960621b6044820152606401610389565b9695505050505050565b6105bb6105f0565b6001600160a01b0381166105e457604051631e4fbdf760e01b81525f6004820152602401610389565b6105ed8161061c565b50565b5f546001600160a01b031633146104395760405163118cdaa760e01b8152336004820152602401610389565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121561067b575f5ffd5b81356001600160e01b031981168114610692575f5ffd5b9392505050565b6001600160a01b03811681146105ed575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff811182821017156106ea576106ea6106ad565b604052919050565b5f82601f830112610701575f5ffd5b813567ffffffffffffffff81111561071b5761071b6106ad565b61072e601f8201601f19166020016106c1565b818152846020838601011115610742575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215610771575f5ffd5b843561077c81610699565b9350602085013561078c81610699565b925060408501359150606085013567ffffffffffffffff8111156107ae575f5ffd5b6107ba878288016106f2565b91505092959194509250565b5f5f5f5f608085870312156107d9575f5ffd5b84356107e481610699565b93506020850135925060408501359150606085013561080281610699565b939692955090935050565b5f5f6040838503121561081e575f5ffd5b823561082981610699565b946020939093013593505050565b5f5f5f60608486031215610849575f5ffd5b833561085481610699565b925060208401359150604084013561086b81610699565b809150509250925092565b5f60208284031215610886575f5ffd5b813561069281610699565b5f5f5f5f606085870312156108a4575f5ffd5b84356108af81610699565b935060208501359250604085013567ffffffffffffffff8111156108d1575f5ffd5b8501601f810187136108e1575f5ffd5b803567ffffffffffffffff8111156108f7575f5ffd5b876020828401011115610908575f5ffd5b949793965060200194505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b5f82601f83011261095a575f5ffd5b813567ffffffffffffffff811115610974576109746106ad565b8060051b610984602082016106c1565b9182526020818501810192908101908684111561099f575f5ffd5b6020860192505b838310156105a95782358252602092830192909101906109a6565b5f5f5f5f5f60a086880312156109d5575f5ffd5b85356109e081610699565b945060208601356109f081610699565b9350604086013567ffffffffffffffff811115610a0b575f5ffd5b610a178882890161094b565b935050606086013567ffffffffffffffff811115610a33575f5ffd5b610a3f8882890161094b565b925050608086013567ffffffffffffffff811115610a5b575f5ffd5b610a67888289016106f2565b9150509295509295909350565b5f5f5f5f5f60a08688031215610a88575f5ffd5b8535610a9381610699565b94506020860135610aa381610699565b93506040860135925060608601359150608086013567ffffffffffffffff811115610a5b575f5ffd5b818382375f910190815291905056fea2646970667358221220e407ef56741d29fd919e8b61677ef4672c6a3fad9e8d5246730fac0ea32aa39f64736f6c634300081c0033"
    }
  },
  "deployments": {
    "31337": {
      "DonationReceipt": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "ExhibitRegistry": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "NFTMarketplace": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
    },
    "chain-31337": {
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      "NFTMarketplace": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "Treasury": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "BragNFT": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
    }
  }
};