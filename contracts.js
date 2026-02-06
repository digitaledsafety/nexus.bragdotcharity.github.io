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
          "inputs": [],
          "name": "USDC",
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
      "bytecode": "0x60a0604052348015600e575f5ffd5b506040516103e23803806103e2833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b60805161035f6100835f395f8181603d015260e4015261035f5ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c806389a3027114610038578063b792eca11461007b575b5f5ffd5b61005f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61008e61008936600461025d565b610090565b005b8281146100d85760405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b60448201526064015b60405180910390fd5b5f5b8381101561020e577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166323b872dd33878785818110610124576101246102c9565b905060200201602081019061013991906102dd565b86868681811061014b5761014b6102c9565b6040516001600160e01b031960e088901b1681526001600160a01b039586166004820152949093166024850152506020909102013560448201526064016020604051808303815f875af11580156101a4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101c8919061030a565b6102065760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b60448201526064016100cf565b6001016100da565b5050505050565b5f5f83601f840112610225575f5ffd5b50813567ffffffffffffffff81111561023c575f5ffd5b6020830191508360208260051b8501011115610256575f5ffd5b9250929050565b5f5f5f5f60408587031215610270575f5ffd5b843567ffffffffffffffff811115610286575f5ffd5b61029287828801610215565b909550935050602085013567ffffffffffffffff8111156102b1575f5ffd5b6102bd87828801610215565b95989497509550505050565b634e487b7160e01b5f52603260045260245ffd5b5f602082840312156102ed575f5ffd5b81356001600160a01b0381168114610303575f5ffd5b9392505050565b5f6020828403121561031a575f5ffd5b81518015158114610303575f5ffdfea26469706673582212201b0c11870b196901bc8a16b169b415d6eccee07b8fa7b7ae1983f290901d766264736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611d0b380380611d0b83398101604081905261002e91610157565b8260405180604001604052806007815260200166109c9859d3919560ca1b815250604051806040016040528060048152602001634252414760e01b815250815f908161007a9190610228565b5060016100878282610228565b5050506001600160a01b0381166100b757604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6100c0816100eb565b50600980546001600160a01b0319166001600160a01b039390931692909217909155600a55506102e2565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b80516001600160a01b0381168114610152575f5ffd5b919050565b5f5f5f60608486031215610169575f5ffd5b6101728461013c565b92506101806020850161013c565b9150604084015190509250925092565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806101b857607f821691505b6020821081036101d657634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561022357805f5260205f20601f840160051c810160208510156102015750805b601f840160051c820191505b81811015610220575f815560010161020d565b50505b505050565b81516001600160401b0381111561024157610241610190565b6102558161024f84546101a4565b846101dc565b6020601f821160018114610287575f83156102705750848201515b5f19600385901b1c1916600184901b178455610220565b5f84815260208120601f198516915b828110156102b65787850151825560209485019460019092019101610296565b50848210156102d357868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b611a1c806102ef5f395ff3fe608060405260043610610161575f3560e01c8063715018a6116100cd578063c631724711610087578063da183afb11610062578063da183afb146103f5578063e985e9c514610420578063f0f442601461043f578063f2fde38b1461045e575f5ffd5b8063c631724714610398578063c87b56dd146103b7578063d435b3a3146103d6575f5ffd5b8063715018a6146103005780638da5cb5b1461031457806395d89b411461033157806396d8f4f314610345578063a22cb4651461035a578063b88d4fde14610379575f5ffd5b806319bcef6d1161011e57806319bcef6d1461023857806323b872dd1461025757806342842e0e1461027657806361d027b3146102955780636352211e146102b457806370a08231146102d3575f5ffd5b806301ffc9a71461016557806306fdde0314610199578063081812fc146101ba578063095ea7b3146101f15780630fd973ce146102125780631653441c14610225575b5f5ffd5b348015610170575f5ffd5b5061018461017f3660046113df565b61047d565b60405190151581526020015b60405180910390f35b3480156101a4575f5ffd5b506101ad6104a7565b6040516101909190611428565b3480156101c5575f5ffd5b506101d96101d436600461143a565b610536565b6040516001600160a01b039091168152602001610190565b3480156101fc575f5ffd5b5061021061020b36600461146c565b61055d565b005b6102106102203660046114d9565b61056c565b610210610233366004611559565b610580565b348015610243575f5ffd5b506102106102523660046115c5565b610593565b348015610262575f5ffd5b506102106102713660046115de565b6105bd565b348015610281575f5ffd5b506102106102903660046115de565b610645565b3480156102a0575f5ffd5b506009546101d9906001600160a01b031681565b3480156102bf575f5ffd5b506101d96102ce36600461143a565b610664565b3480156102de575f5ffd5b506102f26102ed3660046115c5565b61066e565b604051908152602001610190565b34801561030b575f5ffd5b506102106106b3565b34801561031f575f5ffd5b506007546001600160a01b03166101d9565b34801561033c575f5ffd5b506101ad6106c6565b348015610350575f5ffd5b506102f2600a5481565b348015610365575f5ffd5b50610210610374366004611618565b6106d5565b348015610384575f5ffd5b50610210610393366004611665565b6106e0565b3480156103a3575f5ffd5b506102106103b236600461143a565b6106f8565b3480156103c2575f5ffd5b506101ad6103d136600461143a565b610705565b3480156103e1575f5ffd5b50600b546101d9906001600160a01b031681565b348015610400575f5ffd5b506102f261040f36600461143a565b600c6020525f908152604090205481565b34801561042b575f5ffd5b5061018461043a366004611742565b610810565b34801561044a575f5ffd5b506102106104593660046115c5565b61083d565b348015610469575f5ffd5b506102106104783660046115c5565b6108bd565b5f6001600160e01b03198216632483248360e11b14806104a157506104a1826108fa565b92915050565b60605f80546104b590611773565b80601f01602080910402602001604051908101604052809291908181526020018280546104e190611773565b801561052c5780601f106105035761010080835404028352916020019161052c565b820191905f5260205f20905b81548152906001019060200180831161050f57829003601f168201915b5050505050905090565b5f61054082610949565b505f828152600460205260409020546001600160a01b03166104a1565b610568828233610981565b5050565b610579858585858561098e565b5050505050565b61058d338585858561098e565b50505050565b61059b610c14565b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0382166105eb57604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f6105f7838333610c41565b9050836001600160a01b0316816001600160a01b03161461058d576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016105e2565b61065f83838360405180602001604052805f8152506106e0565b505050565b5f6104a182610949565b5f6001600160a01b038216610698576040516322718ad960e21b81525f60048201526024016105e2565b506001600160a01b03165f9081526003602052604090205490565b6106bb610c14565b6106c45f610d33565b565b6060600180546104b590611773565b610568338383610d84565b6106eb8484846105bd565b61058d3385858585610e22565b610700610c14565b600a55565b606061071082610949565b505f828152600660205260408120805461072990611773565b80601f016020809104026020016040519081016040528092919081815260200182805461075590611773565b80156107a05780601f10610777576101008083540402835291602001916107a0565b820191905f5260205f20905b81548152906001019060200180831161078357829003601f168201915b505050505090505f6107bc60408051602081019091525f815290565b905080515f036107cd575092915050565b8151156107ff5780826040516020016107e79291906117c2565b60405160208183030381529060405292505050919050565b61080884610f49565b949350505050565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b610845610c14565b6001600160a01b03811661089b5760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642074726561737572792061646472657373000000000000000060448201526064016105e2565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b6108c5610c14565b6001600160a01b0381166108ee57604051631e4fbdf760e01b81525f60048201526024016105e2565b6108f781610d33565b50565b5f6001600160e01b031982166380ac58cd60e01b148061092a57506001600160e01b03198216635b5e139f60e01b145b806104a157506301ffc9a760e01b6001600160e01b03198316146104a1565b5f818152600260205260408120546001600160a01b0316806104a157604051637e27328960e01b8152600481018490526024016105e2565b61065f8383836001610fba565b600b546001600160a01b03166109e65760405162461bcd60e51b815260206004820152601860248201527f5265636569707420636f6e7472616374206e6f7420736574000000000000000060448201526064016105e2565b600a54341015610a315760405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b60448201526064016105e2565b600880545f9182610a41836117d6565b919050559050610a5186826110be565b8115610a9657610a968184848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506110d792505050565b600b546040516334ff261960e21b81525f916001600160a01b03169063d3fc986490610acc90339034908b908b90600401611822565b6020604051808303815f875af1158015610ae8573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b0c9190611853565b5f838152600c6020526040808220839055600954905192935090916001600160a01b039091169034908381818185875af1925050503d805f8114610b6b576040519150601f19603f3d011682016040523d82523d5f602084013e610b70565b606091505b5050905080610bc15760405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c6564000000000060448201526064016105e2565b336001600160a01b03167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858b8b604051610c0295949392919061186a565b60405180910390a25050505050505050565b6007546001600160a01b031633146106c45760405163118cdaa760e01b81523360048201526024016105e2565b5f828152600260205260408120546001600160a01b0390811690831615610c6d57610c6d818486611126565b6001600160a01b03811615610ca757610c885f855f5f610fba565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615610cd5576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b038216610db657604051630b61174360e31b81526001600160a01b03831660048201526024016105e2565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561057957604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610e6490889088908790879060040161189a565b6020604051808303815f875af1925050508015610e9e575060408051601f3d908101601f19168201909252610e9b918101906118cc565b60015b610f05573d808015610ecb576040519150601f19603f3d011682016040523d82523d5f602084013e610ed0565b606091505b5080515f03610efd57604051633250574960e11b81526001600160a01b03851660048201526024016105e2565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b14610f4157604051633250574960e11b81526001600160a01b03851660048201526024016105e2565b505050505050565b6060610f5482610949565b505f610f6a60408051602081019091525f815290565b90505f815111610f885760405180602001604052805f815250610fb3565b80610f928461118a565b604051602001610fa39291906117c2565b6040516020818303038152906040525b9392505050565b8080610fce57506001600160a01b03821615155b1561108f575f610fdd84610949565b90506001600160a01b038316158015906110095750826001600160a01b0316816001600160a01b031614155b801561101c575061101a8184610810565b155b156110455760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016105e2565b811561108d5783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610568828260405180602001604052805f81525061121a565b5f8281526006602052604090206110ee828261192b565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b611131838383611231565b61065f576001600160a01b03831661115f57604051637e27328960e01b8152600481018290526024016105e2565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016105e2565b60605f61119683611292565b60010190505f8167ffffffffffffffff8111156111b5576111b5611651565b6040519080825280601f01601f1916602001820160405280156111df576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846111e957509392505050565b6112248383611369565b61065f335f858585610e22565b5f6001600160a01b038316158015906108085750826001600160a01b0316846001600160a01b0316148061126a575061126a8484610810565b806108085750505f908152600460205260409020546001600160a01b03908116911614919050565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106112d05772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106112fc576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061131a57662386f26fc10000830492506010015b6305f5e1008310611332576305f5e100830492506008015b612710831061134657612710830492506004015b60648310611358576064830492506002015b600a83106104a15760010192915050565b6001600160a01b03821661139257604051633250574960e11b81525f60048201526024016105e2565b5f61139e83835f610c41565b90506001600160a01b0381161561065f576040516339e3563760e11b81525f60048201526024016105e2565b6001600160e01b0319811681146108f7575f5ffd5b5f602082840312156113ef575f5ffd5b8135610fb3816113ca565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f610fb360208301846113fa565b5f6020828403121561144a575f5ffd5b5035919050565b80356001600160a01b0381168114611467575f5ffd5b919050565b5f5f6040838503121561147d575f5ffd5b61148683611451565b946020939093013593505050565b5f5f83601f8401126114a4575f5ffd5b50813567ffffffffffffffff8111156114bb575f5ffd5b6020830191508360208285010111156114d2575f5ffd5b9250929050565b5f5f5f5f5f606086880312156114ed575f5ffd5b6114f686611451565b9450602086013567ffffffffffffffff811115611511575f5ffd5b61151d88828901611494565b909550935050604086013567ffffffffffffffff81111561153c575f5ffd5b61154888828901611494565b969995985093965092949392505050565b5f5f5f5f6040858703121561156c575f5ffd5b843567ffffffffffffffff811115611582575f5ffd5b61158e87828801611494565b909550935050602085013567ffffffffffffffff8111156115ad575f5ffd5b6115b987828801611494565b95989497509550505050565b5f602082840312156115d5575f5ffd5b610fb382611451565b5f5f5f606084860312156115f0575f5ffd5b6115f984611451565b925061160760208501611451565b929592945050506040919091013590565b5f5f60408385031215611629575f5ffd5b61163283611451565b915060208301358015158114611646575f5ffd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f60808587031215611678575f5ffd5b61168185611451565b935061168f60208601611451565b925060408501359150606085013567ffffffffffffffff8111156116b1575f5ffd5b8501601f810187136116c1575f5ffd5b803567ffffffffffffffff8111156116db576116db611651565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561170a5761170a611651565b604052818152828201602001891015611721575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215611753575f5ffd5b61175c83611451565b915061176a60208401611451565b90509250929050565b600181811c9082168061178757607f821691505b6020821081036117a557634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f6108086117d083866117ab565b846117ab565b5f600182016117f357634e487b7160e01b5f52601160045260245ffd5b5060010190565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b60018060a01b0385168152836020820152606060408201525f6118496060830184866117fa565b9695505050505050565b5f60208284031215611863575f5ffd5b5051919050565b858152846020820152836040820152608060608201525f61188f6080830184866117fa565b979650505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90611849908301846113fa565b5f602082840312156118dc575f5ffd5b8151610fb3816113ca565b601f82111561065f57805f5260205f20601f840160051c8101602085101561190c5750805b601f840160051c820191505b81811015610579575f8155600101611918565b815167ffffffffffffffff81111561194557611945611651565b611959816119538454611773565b846118e7565b6020601f82116001811461198b575f83156119745750848201515b5f19600385901b1c1916600184901b178455610579565b5f84815260208120601f198516915b828110156119ba578785015182556020948501946001909201910161199a565b50848210156119d757868401515f19600387901b60f8161c191681555b50505050600190811b0190555056fea26469706673582212204ae37ebcb99597bfb0984b173336eba479479b3467de42ef1dd8dafbb4a624cc64736f6c634300081c0033"
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
              "internalType": "struct DonationReceipt.Receipt",
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
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516119ec3803806119ec83398101604081905261002e91610123565b806040518060400160405280600f81526020016e111bdb985d1a5bdb949958d95a5c1d608a1b81525060405180604001604052806007815260200166149150d152541560ca1b815250815f908161008591906101e8565b50600161009282826101e8565b5050506001600160a01b0381166100c257604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6100cb816100d2565b50506102a2565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f60208284031215610133575f5ffd5b81516001600160a01b0381168114610149575f5ffd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061017857607f821691505b60208210810361019657634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156101e357805f5260205f20601f840160051c810160208510156101c15750805b601f840160051c820191505b818110156101e0575f81556001016101cd565b50505b505050565b81516001600160401b0381111561020157610201610150565b6102158161020f8454610164565b8461019c565b6020601f821160018114610247575f83156102305750848201515b5f19600385901b1c1916600184901b1784556101e0565b5f84815260208120601f198516915b828110156102765787850151825560209485019460019092019101610256565b508482101561029357868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b61173d806102af5f395ff3fe608060405234801561000f575f5ffd5b5060043610610132575f3560e01c80638da5cb5b116100b4578063c87b56dd11610079578063c87b56dd14610297578063cf456ae7146102aa578063d3fc9864146102bd578063e985e9c5146102d0578063f2fde38b146102e3578063f46eccc4146102f6575f5ffd5b80638da5cb5b1461023857806395d89b4114610249578063a22cb46514610251578063b63e6ac314610264578063b88d4fde14610284575f5ffd5b806323b872dd116100fa57806323b872dd146101d657806342842e0e146101e95780636352211e146101fc57806370a082311461020f578063715018a614610230575f5ffd5b806301ffc9a71461013657806306fdde031461015e578063081812fc14610173578063095ea7b31461019e5780630f7ee1ec146101b3575b5f5ffd5b6101496101443660046111d8565b610318565b60405190151581526020015b60405180910390f35b610166610369565b6040516101559190611221565b610186610181366004611233565b6103f8565b6040516001600160a01b039091168152602001610155565b6101b16101ac366004611265565b61041f565b005b6101c66101c1366004611233565b61042e565b604051610155949392919061128d565b6101b16101e43660046112c3565b6104e8565b6101b16101f73660046112c3565b610576565b61018661020a366004611233565b610595565b61022261021d3660046112fd565b61059f565b604051908152602001610155565b6101b16105e4565b6006546001600160a01b0316610186565b6101666105f7565b6101b161025f366004611316565b610606565b610277610272366004611233565b610611565b604051610155919061134f565b6101b16102923660046113a3565b610729565b6101666102a5366004611233565b610741565b6101b16102b8366004611316565b6107b2565b6102226102cb366004611480565b6107e4565b6101496102de366004611503565b610965565b6101b16102f13660046112fd565b610992565b6101496103043660046112fd565b60096020525f908152604090205460ff1681565b5f6001600160e01b031982166380ac58cd60e01b148061034857506001600160e01b03198216635b5e139f60e01b145b8061036357506301ffc9a760e01b6001600160e01b03198316145b92915050565b60605f805461037790611534565b80601f01602080910402602001604051908101604052809291908181526020018280546103a390611534565b80156103ee5780601f106103c5576101008083540402835291602001916103ee565b820191905f5260205f20905b8154815290600101906020018083116103d157829003601f168201915b5050505050905090565b5f610402826109cf565b505f828152600460205260409020546001600160a01b0316610363565b61042a828233610a07565b5050565b60086020525f908152604090208054600182015460028301546003840180546001600160a01b0390941694929391929161046790611534565b80601f016020809104026020016040519081016040528092919081815260200182805461049390611534565b80156104de5780601f106104b5576101008083540402835291602001916104de565b820191905f5260205f20905b8154815290600101906020018083116104c157829003601f168201915b5050505050905084565b6001600160a01b03821661051657604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f610522838333610a14565b9050836001600160a01b0316816001600160a01b031614610570576040516364283d7b60e01b81526001600160a01b038086166004830152602482018490528216604482015260640161050d565b50505050565b61059083838360405180602001604052805f815250610729565b505050565b5f610363826109cf565b5f6001600160a01b0382166105c9576040516322718ad960e21b81525f600482015260240161050d565b506001600160a01b03165f9081526003602052604090205490565b6105ec610ac9565b6105f55f610af6565b565b60606001805461037790611534565b61042a338383610b47565b61064260405180608001604052805f6001600160a01b031681526020015f81526020015f8152602001606081525090565b61064b826109cf565b505f82815260086020908152604091829020825160808101845281546001600160a01b031681526001820154928101929092526002810154928201929092526003820180549192916060840191906106a290611534565b80601f01602080910402602001604051908101604052809291908181526020018280546106ce90611534565b80156107195780601f106106f057610100808354040283529160200191610719565b820191905f5260205f20905b8154815290600101906020018083116106fc57829003601f168201915b5050505050815250509050919050565b6107348484846104e8565b6105703385858585610be5565b606061074c826109cf565b505f61076260408051602081019091525f815290565b90505f8151116107805760405180602001604052805f8152506107ab565b8061078a84610d0d565b60405160200161079b929190611583565b6040516020818303038152906040525b9392505050565b6107ba610ac9565b6001600160a01b03919091165f908152600960205260409020805460ff1916911515919091179055565b335f9081526009602052604081205460ff166108425760405162461bcd60e51b815260206004820152601f60248201527f4e6f7420617574686f72697a656420746f206d696e7420726563656970747300604482015260640161050d565b600780545f918261085283611597565b9190505590506040518060800160405280876001600160a01b0316815260200186815260200142815260200185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505083815260086020908152604091829020845181546001600160a01b0319166001600160a01b039091161781559084015160018201559083015160028201556060830151909150600382019061090a90826115ff565b509050506109188682610d9d565b856001600160a01b0316817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea58760405161095491815260200190565b60405180910390a395945050505050565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b61099a610ac9565b6001600160a01b0381166109c357604051631e4fbdf760e01b81525f600482015260240161050d565b6109cc81610af6565b50565b5f818152600260205260408120546001600160a01b03168061036357604051637e27328960e01b81526004810184905260240161050d565b6105908383836001610db6565b5f828152600260205260408120546001600160a01b03168015801590610a4257506001600160a01b03851615155b15610ab55760405162461bcd60e51b815260206004820152603d60248201527f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f60448201527f756e6420616e642063616e6e6f74206265207472616e73666572726564000000606482015260840161050d565b610ac0858585610eba565b95945050505050565b6006546001600160a01b031633146105f55760405163118cdaa760e01b815233600482015260240161050d565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b038216610b7957604051630b61174360e31b81526001600160a01b038316600482015260240161050d565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15610d0657604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610c279088908890879087906004016116ba565b6020604051808303815f875af1925050508015610c61575060408051601f3d908101601f19168201909252610c5e918101906116ec565b60015b610cc8573d808015610c8e576040519150601f19603f3d011682016040523d82523d5f602084013e610c93565b606091505b5080515f03610cc057604051633250574960e11b81526001600160a01b038516600482015260240161050d565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b14610d0457604051633250574960e11b81526001600160a01b038516600482015260240161050d565b505b5050505050565b60605f610d1983610fac565b60010190505f8167ffffffffffffffff811115610d3857610d3861138f565b6040519080825280601f01601f191660200182016040528015610d62576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610d6c57509392505050565b61042a828260405180602001604052805f815250611083565b8080610dca57506001600160a01b03821615155b15610e8b575f610dd9846109cf565b90506001600160a01b03831615801590610e055750826001600160a01b0316816001600160a01b031614155b8015610e185750610e168184610965565b155b15610e415760405163a9fbf51f60e01b81526001600160a01b038416600482015260240161050d565b8115610e895783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f828152600260205260408120546001600160a01b0390811690831615610ee657610ee681848661109a565b6001600160a01b03811615610f2057610f015f855f5f610db6565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615610f4e576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610fea5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611016576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061103457662386f26fc10000830492506010015b6305f5e100831061104c576305f5e100830492506008015b612710831061106057612710830492506004015b60648310611072576064830492506002015b600a83106103635760010192915050565b61108d83836110fe565b610590335f858585610be5565b6110a583838361115f565b610590576001600160a01b0383166110d357604051637e27328960e01b81526004810182905260240161050d565b60405163177e802f60e01b81526001600160a01b03831660048201526024810182905260440161050d565b6001600160a01b03821661112757604051633250574960e11b81525f600482015260240161050d565b5f61113383835f610a14565b90506001600160a01b03811615610590576040516339e3563760e11b81525f600482015260240161050d565b5f6001600160a01b038316158015906111bb5750826001600160a01b0316846001600160a01b0316148061119857506111988484610965565b806111bb57505f828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160e01b0319811681146109cc575f5ffd5b5f602082840312156111e8575f5ffd5b81356107ab816111c3565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6107ab60208301846111f3565b5f60208284031215611243575f5ffd5b5035919050565b80356001600160a01b0381168114611260575f5ffd5b919050565b5f5f60408385031215611276575f5ffd5b61127f8361124a565b946020939093013593505050565b60018060a01b0385168152836020820152826040820152608060608201525f6112b960808301846111f3565b9695505050505050565b5f5f5f606084860312156112d5575f5ffd5b6112de8461124a565b92506112ec6020850161124a565b929592945050506040919091013590565b5f6020828403121561130d575f5ffd5b6107ab8261124a565b5f5f60408385031215611327575f5ffd5b6113308361124a565b915060208301358015158114611344575f5ffd5b809150509250929050565b6020815260018060a01b03825116602082015260208201516040820152604082015160608201525f60608301516080808401526111bb60a08401826111f3565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f608085870312156113b6575f5ffd5b6113bf8561124a565b93506113cd6020860161124a565b925060408501359150606085013567ffffffffffffffff8111156113ef575f5ffd5b8501601f810187136113ff575f5ffd5b803567ffffffffffffffff8111156114195761141961138f565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156114485761144861138f565b60405281815282820160200189101561145f575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f5f5f60608587031215611493575f5ffd5b61149c8561124a565b935060208501359250604085013567ffffffffffffffff8111156114be575f5ffd5b8501601f810187136114ce575f5ffd5b803567ffffffffffffffff8111156114e4575f5ffd5b8760208284010111156114f5575f5ffd5b949793965060200194505050565b5f5f60408385031215611514575f5ffd5b61151d8361124a565b915061152b6020840161124a565b90509250929050565b600181811c9082168061154857607f821691505b60208210810361156657634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f6111bb611591838661156c565b8461156c565b5f600182016115b457634e487b7160e01b5f52601160045260245ffd5b5060010190565b601f82111561059057805f5260205f20601f840160051c810160208510156115e05750805b601f840160051c820191505b81811015610d06575f81556001016115ec565b815167ffffffffffffffff8111156116195761161961138f565b61162d816116278454611534565b846115bb565b6020601f82116001811461165f575f83156116485750848201515b5f19600385901b1c1916600184901b178455610d06565b5f84815260208120601f198516915b8281101561168e578785015182556020948501946001909201910161166e565b50848210156116ab57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906112b9908301846111f3565b5f602082840312156116fc575f5ffd5b81516107ab816111c356fea26469706673582212209ac5a1e55be3d1dbcfe686ef5e421b5dd0db18e99da51daaad19a2758af7199664736f6c634300081c0033"
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
              "name": "fromUser",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            }
          ],
          "name": "adminForceWithdraw1155",
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
          "name": "adminForceWithdraw721",
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161213f38038061213f83398101604081905261002e916100fa565b816001600160a01b03811661005c57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006581610090565b5060018055600280546001600160a01b0319166001600160a01b03929092169190911790555061012b565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100f5575f5ffd5b919050565b5f5f6040838503121561010b575f5ffd5b610114836100df565b9150610122602084016100df565b90509250929050565b612007806101385f395ff3fe608060405234801561000f575f5ffd5b5060043610610127575f3560e01c806381bd34d2116100a9578063d74238581161006e578063d742385814610301578063e3aa594514610314578063f07a380e14610327578063f23a6e611461033a578063f2fde38b1461034d575f5ffd5b806381bd34d2146102885780638da5cb5b146102b8578063bc197c81146102c8578063c2fe5185146102db578063d6bd07ee146102ee575f5ffd5b8063380ff999116100ef578063380ff999146101df5780636f39becd1461020f578063715018a61461025a578063736616e5146102625780637b10399914610275575f5ffd5b806301ffc9a71461012b5780630412619614610153578063150b7a021461018b5780632ff1d0f9146101b757806335f81b87146101cc575b5f5ffd5b61013e61013936600461175b565b610360565b60405190151581526020015b60405180910390f35b61017d61016136600461179d565b600560209081525f928352604080842090915290825290205481565b60405190815260200161014a565b61019e6101993660046118ae565b610396565b6040516001600160e01b0319909116815260200161014a565b6101ca6101c5366004611916565b6105ac565b005b6101ca6101da366004611948565b6107a8565b61017d6101ed366004611996565b600660209081525f938452604080852082529284528284209052825290205481565b61024261021d36600461179d565b600360209081525f92835260408084209091529082529020546001600160a01b031681565b6040516001600160a01b03909116815260200161014a565b6101ca6107cd565b6101ca6102703660046119d5565b6107e0565b600254610242906001600160a01b031681565b61017d610296366004611996565b600460209081525f938452604080852082529284528284209052825290205481565b5f546001600160a01b0316610242565b61019e6102d6366004611ab0565b610942565b6101ca6102e9366004611b63565b610c4f565b6101ca6102fc366004611ba8565b610c72565b6101ca61030f366004611996565b610c87565b6101ca610322366004611996565b610ca4565b6101ca61033536600461179d565b610d50565b61019e610348366004611bef565b610edc565b6101ca61035b366004611c47565b611103565b5f6001600160e01b03198216630271189760e51b148061039057506301ffc9a760e01b6001600160e01b03198316145b92915050565b80515f908490829060200361044c5760025460405163b9209e3360e01b81526001600160a01b0388811660048301529091169063b9209e3390602401602060405180830381865afa1580156103ed573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104119190611c76565b15610431578380602001905181019061042a9190611c8f565b915061046f565b838060200190518101906104459190611caa565b905061046f565b835160400361046f57838060200190518101906104699190611cc1565b90925090505b335f908152600360209081526040808320888452909152812080546001600160a01b0319166001600160a01b038516179055816104ac575f6104b6565b6104b68242611d01565b335f9081526005602090815260408083208a845290915280822083905560025490516390229af760e01b815230600482015292935090916001600160a01b03909116906390229af7906024015f60405180830381865afa15801561051c573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526105439190810190611d61565b604001519050836001600160a01b031687336001600160a01b03167f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad3848660405161058f929190611e4f565b60405180910390a4630a85bd0160e11b9998505050505050505050565b6105b4611140565b6001600160a01b0383165f90815260046020908152604080832085845282528083203384529091529020548111156106075760405162461bcd60e51b81526004016105fe90611e70565b60405180910390fd5b6001600160a01b0383165f90815260066020908152604080832085845282528083203384529091529020544210156106515760405162461bcd60e51b81526004016105fe90611e9e565b6001600160a01b0383165f90815260046020908152604080832085845282528083203384529091528120805483929061068b908490611ed5565b90915550506001600160a01b0383165f908152600460209081526040808320858452825280832033845290915281205490036106ed576001600160a01b0383165f90815260066020908152604080832085845282528083203384529091528120555b604051637921219560e11b81526001600160a01b0384169063f242432a9061071f903090339087908790600401611ee8565b5f604051808303815f87803b158015610736575f5ffd5b505af1158015610748573d5f5f3e3d5ffd5b50505050336001600160a01b031682846001600160a01b03167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f98460405161079291815260200190565b60405180910390a46107a360018055565b505050565b6107b0611140565b6107bd858585858561116a565b6107c660018055565b5050505050565b6107d561144d565b6107de5f611479565b565b6107e861144d565b6001600160a01b038086165f9081526004602090815260408083208884528252808320938616835292905220548311156108345760405162461bcd60e51b81526004016105fe90611e70565b6001600160a01b038086165f908152600460209081526040808320888452825280832093861683529290529081208054859290610872908490611ed5565b90915550506001600160a01b038086165f908152600460209081526040808320888452825280832093861683529290529081205490036108dc576001600160a01b038086165f90815260066020908152604080832088845282528083209386168352929052908120555b604051637921219560e11b81526001600160a01b0386169063f242432a9061090e903090859089908990600401611ee8565b5f604051808303815f87803b158015610925575f5ffd5b505af1158015610937573d5f5f3e3d5ffd5b505050505050505050565b80515f90859082906020036109f85760025460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015610999573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109bd9190611c76565b156109dd57838060200190518101906109d69190611c8f565b9150610a1b565b838060200190518101906109f19190611caa565b9050610a1b565b8351604003610a1b5783806020019051810190610a159190611cc1565b90925090505b5f5f8211610a29575f610a33565b610a338242611d01565b6002546040516390229af760e01b81523060048201529192505f916001600160a01b03909116906390229af7906024015f60405180830381865afa158015610a7d573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610aa49190810190611d61565b6040015190505f5b8851811015610c3757878181518110610ac757610ac7611f1f565b602002602001015160045f336001600160a01b03166001600160a01b031681526020019081526020015f205f8b8481518110610b0557610b05611f1f565b602002602001015181526020019081526020015f205f876001600160a01b03166001600160a01b031681526020019081526020015f205f828254610b499190611d01565b9091555050335f9081526006602052604081208a518592908c9085908110610b7357610b73611f1f565b602002602001015181526020019081526020015f205f876001600160a01b03166001600160a01b031681526020019081526020015f2081905550846001600160a01b0316898281518110610bc957610bc9611f1f565b6020026020010151336001600160a01b03167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358b8581518110610c0e57610c0e611f1f565b60200260200101518688604051610c2793929190611f33565b60405180910390a4600101610aac565b5063bc197c8160e01b5b9a9950505050505050505050565b610c57611140565b610c63848484846114c8565b610c6c60018055565b50505050565b610c7a611140565b610c63848484845f61116a565b610c8f611140565b610c9b8383835f6114c8565b6107a360018055565b610cac61144d565b6001600160a01b038381165f818152600360209081526040808320878452825280832080546001600160a01b0319169055838352600582528083208784529091528082209190915551632142170760e11b8152306004820152918316602483015260448201849052906342842e0e906064015f604051808303815f87803b158015610d35575f5ffd5b505af1158015610d47573d5f5f3e3d5ffd5b50505050505050565b610d58611140565b6001600160a01b038281165f908152600360209081526040808320858452909152902054163314610dbb5760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b60448201526064016105fe565b6001600160a01b0382165f908152600560209081526040808320848452909152902054421015610dfd5760405162461bcd60e51b81526004016105fe90611e9e565b6001600160a01b0382165f818152600360209081526040808320858452825280832080546001600160a01b0319169055838352600582528083208584529091528082209190915551632142170760e11b8152306004820152336024820152604481018390526342842e0e906064015f604051808303815f87803b158015610e82575f5ffd5b505af1158015610e94573d5f5f3e3d5ffd5b50506040513392508391506001600160a01b038516907f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06905f90a4610ed860018055565b5050565b80515f9085908290602003610f925760025460405163b9209e3360e01b81526001600160a01b0389811660048301529091169063b9209e3390602401602060405180830381865afa158015610f33573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f579190611c76565b15610f775783806020019051810190610f709190611c8f565b9150610fb5565b83806020019051810190610f8b9190611caa565b9050610fb5565b8351604003610fb55783806020019051810190610faf9190611cc1565b90925090505b335f90815260046020908152604080832089845282528083206001600160a01b038616845290915281208054879290610fef908490611d01565b909155505f905081611001575f61100b565b61100b8242611d01565b335f9081526006602090815260408083208b845282528083206001600160a01b038881168552925280832084905560025490516390229af760e01b815230600482015293945091929116906390229af7906024015f60405180830381865afa158015611079573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526110a09190810190611d61565b604001519050836001600160a01b031688336001600160a01b03167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358a85876040516110ee93929190611f33565b60405180910390a463f23a6e6160e01b610c41565b61110b61144d565b6001600160a01b03811661113457604051631e4fbdf760e01b81525f60048201526024016105fe565b61113d81611479565b50565b60026001540361116357604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b6001600160a01b0385165f90815260046020908152604080832087845282528083203384529091529020548311156111b45760405162461bcd60e51b81526004016105fe90611e70565b60025460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa1580156111fc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112209190611c76565b6112675760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b60448201526064016105fe565b6001600160a01b0385165f90815260066020908152604080832087845282528083203384529091529020544210156112b15760405162461bcd60e51b81526004016105fe90611e9e565b6001600160a01b0385165f9081526004602090815260408083208784528252808320338452909152812080548592906112eb908490611ed5565b90915550506001600160a01b0385165f9081526004602090815260408083208784528252808320338452909152812054900361134d576001600160a01b0385165f90815260066020908152604080832087845282528083203384529091528120555b6060811561137e5760408051336020820152908101839052606001604051602081830303815290604052905061139b565b604080513360208201520160405160208183030381529060405290505b604051637921219560e11b81526001600160a01b0387169063f242432a906113cf90309087908a908a908890600401611f5b565b5f604051808303815f87803b1580156113e6575f5ffd5b505af11580156113f8573d5f5f3e3d5ffd5b5050604080518781526001600160a01b0387811660208301523394508993508a16917fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1910160405180910390a4505050505050565b5f546001600160a01b031633146107de5760405163118cdaa760e01b81523360048201526024016105fe565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038481165f90815260036020908152604080832087845290915290205416331461152b5760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b60448201526064016105fe565b60025460405163b9209e3360e01b81526001600160a01b0384811660048301529091169063b9209e3390602401602060405180830381865afa158015611573573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115979190611c76565b6115de5760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b60448201526064016105fe565b6001600160a01b0384165f9081526005602090815260408083208684529091529020544210156116205760405162461bcd60e51b81526004016105fe90611e9e565b6001600160a01b0384165f818152600360209081526040808320878452825280832080546001600160a01b03191690559282526005815282822086835290529081205560608115611694576040805133602082015290810183905260600160405160208183030381529060405290506116b1565b604080513360208201520160405160208183030381529060405290505b604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde906116e3903090879089908790600401611f9f565b5f604051808303815f87803b1580156116fa575f5ffd5b505af115801561170c573d5f5f3e3d5ffd5b50506040516001600160a01b0386811682523393508792508816907f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d799060200160405180910390a45050505050565b5f6020828403121561176b575f5ffd5b81356001600160e01b031981168114611782575f5ffd5b9392505050565b6001600160a01b038116811461113d575f5ffd5b5f5f604083850312156117ae575f5ffd5b82356117b981611789565b946020939093013593505050565b634e487b7160e01b5f52604160045260245ffd5b6040516080810167ffffffffffffffff811182821017156117fe576117fe6117c7565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561182d5761182d6117c7565b604052919050565b5f67ffffffffffffffff82111561184e5761184e6117c7565b50601f01601f191660200190565b5f82601f83011261186b575f5ffd5b813561187e61187982611835565b611804565b818152846020838601011115611892575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f608085870312156118c1575f5ffd5b84356118cc81611789565b935060208501356118dc81611789565b925060408501359150606085013567ffffffffffffffff8111156118fe575f5ffd5b61190a8782880161185c565b91505092959194509250565b5f5f5f60608486031215611928575f5ffd5b833561193381611789565b95602085013595506040909401359392505050565b5f5f5f5f5f60a0868803121561195c575f5ffd5b853561196781611789565b94506020860135935060408601359250606086013561198581611789565b949793965091946080013592915050565b5f5f5f606084860312156119a8575f5ffd5b83356119b381611789565b92506020840135915060408401356119ca81611789565b809150509250925092565b5f5f5f5f5f60a086880312156119e9575f5ffd5b85356119f481611789565b945060208601359350604086013592506060860135611a1281611789565b91506080860135611a2281611789565b809150509295509295909350565b5f82601f830112611a3f575f5ffd5b813567ffffffffffffffff811115611a5957611a596117c7565b8060051b611a6960208201611804565b91825260208185018101929081019086841115611a84575f5ffd5b6020860192505b83831015611aa6578235825260209283019290910190611a8b565b9695505050505050565b5f5f5f5f5f60a08688031215611ac4575f5ffd5b8535611acf81611789565b94506020860135611adf81611789565b9350604086013567ffffffffffffffff811115611afa575f5ffd5b611b0688828901611a30565b935050606086013567ffffffffffffffff811115611b22575f5ffd5b611b2e88828901611a30565b925050608086013567ffffffffffffffff811115611b4a575f5ffd5b611b568882890161185c565b9150509295509295909350565b5f5f5f5f60808587031215611b76575f5ffd5b8435611b8181611789565b9350602085013592506040850135611b9881611789565b9396929550929360600135925050565b5f5f5f5f60808587031215611bbb575f5ffd5b8435611bc681611789565b935060208501359250604085013591506060850135611be481611789565b939692955090935050565b5f5f5f5f5f60a08688031215611c03575f5ffd5b8535611c0e81611789565b94506020860135611c1e81611789565b93506040860135925060608601359150608086013567ffffffffffffffff811115611b4a575f5ffd5b5f60208284031215611c57575f5ffd5b813561178281611789565b80518015158114611c71575f5ffd5b919050565b5f60208284031215611c86575f5ffd5b61178282611c62565b5f60208284031215611c9f575f5ffd5b815161178281611789565b5f60208284031215611cba575f5ffd5b5051919050565b5f5f60408385031215611cd2575f5ffd5b8251611cdd81611789565b6020939093015192949293505050565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561039057610390611ced565b5f82601f830112611d23575f5ffd5b8151611d3161187982611835565b818152846020838601011115611d45575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f60208284031215611d71575f5ffd5b815167ffffffffffffffff811115611d87575f5ffd5b820160808185031215611d98575f5ffd5b611da06117db565b611da982611c62565b8152602082015160ff81168114611dbe575f5ffd5b6020820152604082015167ffffffffffffffff811115611ddc575f5ffd5b611de886828501611d14565b604083015250606082015167ffffffffffffffff811115611e07575f5ffd5b611e1386828501611d14565b606083015250949350505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b604081525f611e616040830185611e21565b90508260208301529392505050565b602080825260149082015273496e73756666696369656e742062616c616e636560601b604082015260600190565b6020808252601a908201527f45786869626974696f6e206e6f74207965742065787069726564000000000000604082015260600190565b8181038181111561039057610390611ced565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a0608082018190525f9082015260c00190565b634e487b7160e01b5f52603260045260245ffd5b838152606060208201525f611f4b6060830185611e21565b9050826040830152949350505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f90611f9490830184611e21565b979650505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90611aa690830184611e2156fea264697066735822122008742db9eeba6e92817a7f888d33ab8d5df0cff0179095d1f5819e64d588ece064736f6c634300081c0033"
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
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newRefundPeriod",
              "type": "uint256"
            }
          ],
          "name": "updateRefundPeriod",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x608060405262093a806001553480156015575f5ffd5b50610a61806100235f395ff3fe60806040526004361061006e575f3560e01c8063a6a3b5b41161004c578063a6a3b5b4146100c5578063aa1a8411146100ed578063b1b9e78d1461015e578063dda0d76c1461017d575f5ffd5b8063058a56ac14610072578063746538d91461009357806399652de7146100a6575b5f5ffd5b34801561007d575f5ffd5b5061009161008c366004610984565b61019c565b005b6100916100a1366004610984565b6102d2565b3480156100b1575f5ffd5b506100916100c0366004610984565b61042e565b3480156100d0575f5ffd5b506100da60015481565b6040519081526020015b60405180910390f35b3480156100f8575f5ffd5b50610139610107366004610984565b5f6020818152928152604080822090935290815220805460018201546002909201546001600160a01b03909116919083565b604080516001600160a01b0390941684526020840192909252908201526060016100e4565b348015610169575f5ffd5b50610091610178366004610984565b6105cf565b348015610188575f5ffd5b506100916101973660046109ae565b600155565b6001600160a01b038083165f9081526020818152604080832085845282529182902082516060810184528154909416808552600182015492850192909252600201549183019190915233146102385760405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f66666572000000000060448201526064015b60405180910390fd5b6020810151604051339180156108fc02915f818181858888f19350505050158015610265573d5f5f3e3d5ffd5b506001600160a01b0383165f8181526020818152604080832086845290915280822080546001600160a01b031916815560018101839055600201829055513392859290917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d09190a4505050565b5f341161032c5760405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b606482015260840161022f565b6001600160a01b038281165f9081526020818152604080832085845290915290205416156103935760405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b604482015260640161022f565b6040805160608101825233808252346020808401828152428587019081526001600160a01b038981165f8181528086528981208b82528652899020975188546001600160a01b03191692169190911787559151600187015551600290950194909455935190815290928492917fd46a008cac1cb5ec453d4928e646f936b6d11b8ec6b488f00a55bd90eda74a73910160405180910390a45050565b6001600160a01b038083165f9081526020818152604080832085845282529182902082516060810184528154909416808552600182015492850192909252600201549183019190915233146104c55760405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f666665720000000000604482015260640161022f565b60015481604001516104d791906109c5565b4211156105265760405162461bcd60e51b815260206004820152601960248201527f526566756e6420706572696f6420686173206578706972656400000000000000604482015260640161022f565b6020810151604051339180156108fc02915f818181858888f19350505050158015610553573d5f5f3e3d5ffd5b506001600160a01b0383165f81815260208181526040808320868452825280832080546001600160a01b031916815560018101849055600201929092558381015191519182523392859290917f6b2d7d3541d77e4ba894942103bb7bff8611a2fe5a6c6660870f0c15ab75c2d3910160405180910390a4505050565b6001600160a01b038083165f9081526020818152604080832085845282529182902082516060810184528154909416808552600182015492850192909252600201549183019190915261065c5760405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b604482015260640161022f565b6040516331a9108f60e11b815260048101839052839033906001600160a01b03831690636352211e90602401602060405180830381865afa1580156106a3573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106c791906109ea565b6001600160a01b03161461071d5760405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e4654000000000000000000604482015260640161022f565b60405163e985e9c560e01b81523360048201523060248201526001600160a01b0382169063e985e9c590604401602060405180830381865afa158015610765573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107899190610a0c565b80610803575060405163020604bf60e21b81526004810184905230906001600160a01b0383169063081812fc90602401602060405180830381865afa1580156107d4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107f891906109ea565b6001600160a01b0316145b61085d5760405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b606482015260840161022f565b8151604051632142170760e11b81523360048201526001600160a01b03918216602482015260448101859052908216906342842e0e906064015f604051808303815f87803b1580156108ad575f5ffd5b505af11580156108bf573d5f5f3e3d5ffd5b50505050602082015160405133916108fc811502915f818181858888f193505050501580156108f0573d5f5f3e3d5ffd5b506001600160a01b0384165f81815260208181526040808320878452825280832080546001600160a01b031916815560018101849055600201929092558481015191519182523392869290917fa994d1bf7c4f40ea558b18bf79efbc7bc38b5d5f72aa2fec5a69cdb31be16132910160405180910390a450505050565b6001600160a01b0381168114610981575f5ffd5b50565b5f5f60408385031215610995575f5ffd5b82356109a08161096d565b946020939093013593505050565b5f602082840312156109be575f5ffd5b5035919050565b808201808211156109e457634e487b7160e01b5f52601160045260245ffd5b92915050565b5f602082840312156109fa575f5ffd5b8151610a058161096d565b9392505050565b5f60208284031215610a1c575f5ffd5b81518015158114610a05575f5ffdfea2646970667358221220ca9eae475206dc4ba745365ef8a220644d60f01444e68ac770bd8d9ae0b4fe4064736f6c634300081c0033"
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
  "deployments": {}
};