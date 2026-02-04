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
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516119de3803806119de83398101604081905261002e91610157565b8260405180604001604052806007815260200166109c9859d3919560ca1b815250604051806040016040528060048152602001634252414760e01b815250815f908161007a9190610228565b5060016100878282610228565b5050506001600160a01b0381166100b757604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b6100c0816100eb565b50600880546001600160a01b0319166001600160a01b039390931692909217909155600955506102e2565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b80516001600160a01b0381168114610152575f5ffd5b919050565b5f5f5f60608486031215610169575f5ffd5b6101728461013c565b92506101806020850161013c565b9150604084015190509250925092565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806101b857607f821691505b6020821081036101d657634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561022357805f5260205f20601f840160051c810160208510156102015750805b601f840160051c820191505b81811015610220575f815560010161020d565b50505b505050565b81516001600160401b0381111561024157610241610190565b6102558161024f84546101a4565b846101dc565b6020601f821160018114610287575f83156102705750848201515b5f19600385901b1c1916600184901b178455610220565b5f84815260208120601f198516915b828110156102b65787850151825560209485019460019092019101610296565b50848210156102d357868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6116ef806102ef5f395ff3fe608060405260043610610161575f3560e01c80638da5cb5b116100cd578063c631724711610087578063da183afb11610062578063da183afb146103f5578063e985e9c514610420578063f0f442601461043f578063f2fde38b1461045e575f5ffd5b8063c631724714610398578063c87b56dd146103b7578063d435b3a3146103d6575f5ffd5b80638da5cb5b1461030157806395d89b411461031e57806396d8f4f314610332578063a22cb46514610347578063b5aebc8014610366578063b88d4fde14610379575f5ffd5b80633a50d04a1161011e5780633a50d04a1461025057806342842e0e1461026357806361d027b3146102825780636352211e146102a157806370a08231146102c0578063715018a6146102ed575f5ffd5b806301ffc9a71461016557806306fdde0314610199578063081812fc146101ba578063095ea7b3146101f157806319bcef6d1461021257806323b872dd14610231575b5f5ffd5b348015610170575f5ffd5b5061018461017f36600461120f565b61047d565b60405190151581526020015b60405180910390f35b3480156101a4575f5ffd5b506101ad6104ce565b6040516101909190611258565b3480156101c5575f5ffd5b506101d96101d436600461126a565b61055d565b6040516001600160a01b039091168152602001610190565b3480156101fc575f5ffd5b5061021061020b36600461129c565b610584565b005b34801561021d575f5ffd5b5061021061022c3660046112c4565b610593565b34801561023c575f5ffd5b5061021061024b3660046112dd565b6105bd565b61021061025e36600461135c565b61064b565b34801561026e575f5ffd5b5061021061027d3660046112dd565b61065b565b34801561028d575f5ffd5b506008546101d9906001600160a01b031681565b3480156102ac575f5ffd5b506101d96102bb36600461126a565b610675565b3480156102cb575f5ffd5b506102df6102da3660046112c4565b61067f565b604051908152602001610190565b3480156102f8575f5ffd5b506102106106c4565b34801561030c575f5ffd5b506006546001600160a01b03166101d9565b348015610329575f5ffd5b506101ad6106d7565b34801561033d575f5ffd5b506102df60095481565b348015610352575f5ffd5b506102106103613660046113ab565b6106e6565b6102106103743660046113e4565b6106f1565b348015610384575f5ffd5b50610210610393366004611437565b6106fc565b3480156103a3575f5ffd5b506102106103b236600461126a565b610714565b3480156103c2575f5ffd5b506101ad6103d136600461126a565b610721565b3480156103e1575f5ffd5b50600a546101d9906001600160a01b031681565b348015610400575f5ffd5b506102df61040f36600461126a565b600b6020525f908152604090205481565b34801561042b575f5ffd5b5061018461043a366004611514565b610792565b34801561044a575f5ffd5b506102106104593660046112c4565b6107bf565b348015610469575f5ffd5b506102106104783660046112c4565b61083f565b5f6001600160e01b031982166380ac58cd60e01b14806104ad57506001600160e01b03198216635b5e139f60e01b145b806104c857506301ffc9a760e01b6001600160e01b03198316145b92915050565b60605f80546104dc90611545565b80601f016020809104026020016040519081016040528092919081815260200182805461050890611545565b80156105535780601f1061052a57610100808354040283529160200191610553565b820191905f5260205f20905b81548152906001019060200180831161053657829003601f168201915b5050505050905090565b5f6105678261087c565b505f828152600460205260409020546001600160a01b03166104c8565b61058f8282336108b4565b5050565b61059b6108c1565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0382166105eb57604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f6105f78383336108ee565b9050836001600160a01b0316816001600160a01b031614610645576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016105e2565b50505050565b6106568383836109e0565b505050565b61065683838360405180602001604052805f8152506106fc565b5f6104c88261087c565b5f6001600160a01b0382166106a9576040516322718ad960e21b81525f60048201526024016105e2565b506001600160a01b03165f9081526003602052604090205490565b6106cc6108c1565b6106d55f610c1f565b565b6060600180546104dc90611545565b61058f338383610c70565b61058f3383836109e0565b6107078484846105bd565b6106453385858585610d0e565b61071c6108c1565b600955565b606061072c8261087c565b505f61074260408051602081019091525f815290565b90505f8151116107605760405180602001604052805f81525061078b565b8061076a84610e36565b60405160200161077b929190611594565b6040516020818303038152906040525b9392505050565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b6107c76108c1565b6001600160a01b03811661081d5760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642074726561737572792061646472657373000000000000000060448201526064016105e2565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b6108476108c1565b6001600160a01b03811661087057604051631e4fbdf760e01b81525f60048201526024016105e2565b61087981610c1f565b50565b5f818152600260205260408120546001600160a01b0316806104c857604051637e27328960e01b8152600481018490526024016105e2565b6106568383836001610ec6565b6006546001600160a01b031633146106d55760405163118cdaa760e01b81523360048201526024016105e2565b5f828152600260205260408120546001600160a01b039081169083161561091a5761091a818486610fca565b6001600160a01b03811615610954576109355f855f5f610ec6565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615610982576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b600a546001600160a01b0316610a385760405162461bcd60e51b815260206004820152601860248201527f5265636569707420636f6e7472616374206e6f7420736574000000000000000060448201526064016105e2565b600954341015610a835760405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b60448201526064016105e2565b600780545f9182610a93836115a8565b919050559050610aa3848261102e565b600a546040516334ff261960e21b81525f916001600160a01b03169063d3fc986490610ad99033903490899089906004016115f4565b6020604051808303815f875af1158015610af5573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b199190611625565b5f838152600b6020526040808220839055600854905192935090916001600160a01b039091169034908381818185875af1925050503d805f8114610b78576040519150601f19603f3d011682016040523d82523d5f602084013e610b7d565b606091505b5050905080610bce5760405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c6564000000000060448201526064016105e2565b336001600160a01b03167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858989604051610c0f95949392919061163c565b60405180910390a2505050505050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6001600160a01b038216610ca257604051630b61174360e31b81526001600160a01b03831660048201526024016105e2565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b15610e2f57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610d5090889088908790879060040161166c565b6020604051808303815f875af1925050508015610d8a575060408051601f3d908101601f19168201909252610d879181019061169e565b60015b610df1573d808015610db7576040519150601f19603f3d011682016040523d82523d5f602084013e610dbc565b606091505b5080515f03610de957604051633250574960e11b81526001600160a01b03851660048201526024016105e2565b805160208201fd5b6001600160e01b03198116630a85bd0160e11b14610e2d57604051633250574960e11b81526001600160a01b03851660048201526024016105e2565b505b5050505050565b60605f610e4283611047565b60010190505f8167ffffffffffffffff811115610e6157610e61611423565b6040519080825280601f01601f191660200182016040528015610e8b576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610e9557509392505050565b8080610eda57506001600160a01b03821615155b15610f9b575f610ee98461087c565b90506001600160a01b03831615801590610f155750826001600160a01b0316816001600160a01b031614155b8015610f285750610f268184610792565b155b15610f515760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016105e2565b8115610f995783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610fd583838361111e565b610656576001600160a01b03831661100357604051637e27328960e01b8152600481018290526024016105e2565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016105e2565b61058f828260405180602001604052805f815250611182565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106110855772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106110b1576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106110cf57662386f26fc10000830492506010015b6305f5e10083106110e7576305f5e100830492506008015b61271083106110fb57612710830492506004015b6064831061110d576064830492506002015b600a83106104c85760010192915050565b5f6001600160a01b0383161580159061117a5750826001600160a01b0316846001600160a01b0316148061115757506111578484610792565b8061117a57505f828152600460205260409020546001600160a01b038481169116145b949350505050565b61118c8383611199565b610656335f858585610d0e565b6001600160a01b0382166111c257604051633250574960e11b81525f60048201526024016105e2565b5f6111ce83835f6108ee565b90506001600160a01b03811615610656576040516339e3563760e11b81525f60048201526024016105e2565b6001600160e01b031981168114610879575f5ffd5b5f6020828403121561121f575f5ffd5b813561078b816111fa565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f61078b602083018461122a565b5f6020828403121561127a575f5ffd5b5035919050565b80356001600160a01b0381168114611297575f5ffd5b919050565b5f5f604083850312156112ad575f5ffd5b6112b683611281565b946020939093013593505050565b5f602082840312156112d4575f5ffd5b61078b82611281565b5f5f5f606084860312156112ef575f5ffd5b6112f884611281565b925061130660208501611281565b929592945050506040919091013590565b5f5f83601f840112611327575f5ffd5b50813567ffffffffffffffff81111561133e575f5ffd5b602083019150836020828501011115611355575f5ffd5b9250929050565b5f5f5f6040848603121561136e575f5ffd5b61137784611281565b9250602084013567ffffffffffffffff811115611392575f5ffd5b61139e86828701611317565b9497909650939450505050565b5f5f604083850312156113bc575f5ffd5b6113c583611281565b9150602083013580151581146113d9575f5ffd5b809150509250929050565b5f5f602083850312156113f5575f5ffd5b823567ffffffffffffffff81111561140b575f5ffd5b61141785828601611317565b90969095509350505050565b634e487b7160e01b5f52604160045260245ffd5b5f5f5f5f6080858703121561144a575f5ffd5b61145385611281565b935061146160208601611281565b925060408501359150606085013567ffffffffffffffff811115611483575f5ffd5b8501601f81018713611493575f5ffd5b803567ffffffffffffffff8111156114ad576114ad611423565b604051601f8201601f19908116603f0116810167ffffffffffffffff811182821017156114dc576114dc611423565b6040528181528282016020018910156114f3575f5ffd5b816020840160208301375f6020838301015280935050505092959194509250565b5f5f60408385031215611525575f5ffd5b61152e83611281565b915061153c60208401611281565b90509250929050565b600181811c9082168061155957607f821691505b60208210810361157757634e487b7160e01b5f52602260045260245ffd5b50919050565b5f81518060208401855e5f93019283525090919050565b5f61117a6115a2838661157d565b8461157d565b5f600182016115c557634e487b7160e01b5f52601160045260245ffd5b5060010190565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b60018060a01b0385168152836020820152606060408201525f61161b6060830184866115cc565b9695505050505050565b5f60208284031215611635575f5ffd5b5051919050565b858152846020820152836040820152608060608201525f6116616080830184866115cc565b979650505050505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f9061161b9083018461122a565b5f602082840312156116ae575f5ffd5b815161078b816111fa56fea2646970667358221220187a7cad49ad2b9ecf8c6d34f586431b07aad1f5e15de3d712f31931621f335f64736f6c634300081c0033"
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
    "Exhibition": {
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
          "inputs": [],
          "name": "ReentrancyGuardReentrantCall",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "exhibitionId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            }
          ],
          "name": "Exhibited",
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
              "name": "exhibitionId",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "Reclaimed",
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
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "exhibit1155",
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
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "exhibit721",
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
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "exhibitions",
          "outputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
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
              "name": "expiry",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isERC1155",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "active",
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
              "name": "exhibitionId",
              "type": "uint256"
            }
          ],
          "name": "getExhibition",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
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
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "isERC1155",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "active",
                  "type": "bool"
                }
              ],
              "internalType": "struct Exhibition.ExhibitionInfo",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "exhibitionId",
              "type": "uint256"
            }
          ],
          "name": "reclaim",
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
        }
      ],
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051611096380380611096833981016040819052602b9160b8565b806001600160a01b038116605857604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b605f816069565b50506001805560e3565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121560c7575f5ffd5b81516001600160a01b038116811460dc575f5ffd5b9392505050565b610fa6806100f05f395ff3fe608060405234801561000f575f5ffd5b50600436106100b1575f3560e01c8063715018a61161006e578063715018a6146102735780638da5cb5b1461027b578063bc197c8114610295578063d18ff60d146102b4578063f23a6e6114610353578063f2fde38b14610372575f5ffd5b806301ffc9a7146100b55780630cbe4dba146100dd578063150b7a02146100fe5780632dabbeed1461012a5780633c58e54d1461013f578063552e612214610260575b5f5ffd5b6100c86100c3366004610b8a565b610385565b60405190151581526020015b60405180910390f35b6100f06100eb366004610bcc565b6103bb565b6040519081526020016100d4565b61011161010c366004610cad565b6105c0565b6040516001600160e01b031990911681526020016100d4565b61013d610138366004610d11565b6105d1565b005b6101fd61014d366004610d11565b6040805160e0810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c0810191909152505f90815260036020818152604092839020835160e08101855281546001600160a01b039081168252600183015416928101929092526002810154938201939093529082015460608201526004820154608082015260059091015460ff808216151560a084015261010090910416151560c082015290565b6040516100d4919081516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a08281015115159082015260c09182015115159181019190915260e00190565b6100f061026e366004610d28565b610844565b61013d610a98565b5f546040516001600160a01b0390911681526020016100d4565b6101116102a3366004610dde565b63bc197c8160e01b95945050505050565b61030f6102c2366004610d11565b600360208190525f91825260409091208054600182015460028301549383015460048401546005909401546001600160a01b03938416959390921693909160ff8082169161010090041687565b604080516001600160a01b0398891681529790961660208801529486019390935260608501919091526080840152151560a0830152151560c082015260e0016100d4565b610111610361366004610e8d565b63f23a6e6160e01b95945050505050565b61013d610380366004610ee1565b610aab565b5f6001600160e01b03198216630271189760e51b14806103b557506301ffc9a760e01b6001600160e01b03198316145b92915050565b5f6103c4610ae5565b5f82116104145760405162461bcd60e51b81526020600482015260196024820152784475726174696f6e206d75737420626520706f73697469766560381b60448201526064015b60405180910390fd5b604051632142170760e11b8152336004820152306024820152604481018490526001600160a01b038516906342842e0e906064015f604051808303815f87803b15801561045f575f5ffd5b505af1158015610471573d5f5f3e3d5ffd5b5050600280545f935091508261048683610f0e565b909155506040805160e0810182523381526001600160a01b038816602082015290810186905260016060820152909150608081016104c48542610f26565b81525f602080830182905260016040938401819052858352600380835292849020855181546001600160a01b03199081166001600160a01b039283161783558785015193830180549091169382169390931790925585850151600282015560608601519381019390935560808501516004840181905560a08601516005909401805460c09097015161ffff1990971694151561ff001916949094176101009615159690960295909517909255825188815290810193909352871691339184917fec0f8fed70f265f73b45dd74259056ae4acd043642455aa46d24f48df057fe9e910160405180910390a490506105b960018055565b9392505050565b630a85bd0160e11b5b949350505050565b6105d9610ae5565b5f8181526003602052604090206005810154610100900460ff166106375760405162461bcd60e51b815260206004820152601560248201527445786869626974696f6e206e6f742061637469766560581b604482015260640161040b565b80600401544210156106955760405162461bcd60e51b815260206004820152602160248201527f45786869626974696f6e20706572696f64206e6f7420796574206578706972656044820152601960fa1b606482015260840161040b565b80546001600160a01b03163314806106b657505f546001600160a01b031633145b6107025760405162461bcd60e51b815260206004820152601f60248201527f4f6e6c79206f776e6572206f722061646d696e2063616e207265636c61696d00604482015260640161040b565b60058101805461ff0019811690915560ff161561078e576001810154815460028301546003840154604051637921219560e11b81526001600160a01b039485169463f242432a9461075c9430949190921692600401610f39565b5f604051808303815f87803b158015610773575f5ffd5b505af1158015610785573d5f5f3e3d5ffd5b505050506107ff565b600181015481546002830154604051632142170760e11b81523060048201526001600160a01b03928316602482015260448101919091529116906342842e0e906064015f604051808303815f87803b1580156107e8575f5ffd5b505af11580156107fa573d5f5f3e3d5ffd5b505050505b80546040516001600160a01b039091169083907fad9cdcb2840b4617f049a64be1811ef181a6c0925da58f0a537a37c93052bdd3905f90a35061084160018055565b50565b5f61084d610ae5565b5f82116108985760405162461bcd60e51b81526020600482015260196024820152784475726174696f6e206d75737420626520706f73697469766560381b604482015260640161040b565b5f83116108e75760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f736974697665000000000000000000604482015260640161040b565b604051637921219560e11b81526001600160a01b0386169063f242432a90610919903390309089908990600401610f39565b5f604051808303815f87803b158015610930575f5ffd5b505af1158015610942573d5f5f3e3d5ffd5b5050600280545f935091508261095783610f0e565b9190505590506040518060e00160405280336001600160a01b03168152602001876001600160a01b03168152602001868152602001858152602001844261099e9190610f26565b81526001602080830182905260409283018290525f858152600380835290849020855181546001600160a01b039182166001600160a01b0319918216178355938701519482018054958216959094169490941790925584840151600283015560608501519082015560808401516004820181905560a08501516005909201805460c09096015115156101000261ff00199315159390931661ffff199096169590951791909117909355905190881691339184917fec0f8fed70f265f73b45dd74259056ae4acd043642455aa46d24f48df057fe9e91610a85918b8252602082015260400190565b60405180910390a490506105c960018055565b610aa0610b0f565b610aa95f610b3b565b565b610ab3610b0f565b6001600160a01b038116610adc57604051631e4fbdf760e01b81525f600482015260240161040b565b61084181610b3b565b600260015403610b0857604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b5f546001600160a01b03163314610aa95760405163118cdaa760e01b815233600482015260240161040b565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f60208284031215610b9a575f5ffd5b81356001600160e01b0319811681146105b9575f5ffd5b80356001600160a01b0381168114610bc7575f5ffd5b919050565b5f5f5f60608486031215610bde575f5ffd5b610be784610bb1565b95602085013595506040909401359392505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610c3957610c39610bfc565b604052919050565b5f82601f830112610c50575f5ffd5b813567ffffffffffffffff811115610c6a57610c6a610bfc565b610c7d601f8201601f1916602001610c10565b818152846020838601011115610c91575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215610cc0575f5ffd5b610cc985610bb1565b9350610cd760208601610bb1565b925060408501359150606085013567ffffffffffffffff811115610cf9575f5ffd5b610d0587828801610c41565b91505092959194509250565b5f60208284031215610d21575f5ffd5b5035919050565b5f5f5f5f60808587031215610d3b575f5ffd5b610d4485610bb1565b966020860135965060408601359560600135945092505050565b5f82601f830112610d6d575f5ffd5b813567ffffffffffffffff811115610d8757610d87610bfc565b8060051b610d9760208201610c10565b91825260208185018101929081019086841115610db2575f5ffd5b6020860192505b83831015610dd4578235825260209283019290910190610db9565b9695505050505050565b5f5f5f5f5f60a08688031215610df2575f5ffd5b610dfb86610bb1565b9450610e0960208701610bb1565b9350604086013567ffffffffffffffff811115610e24575f5ffd5b610e3088828901610d5e565b935050606086013567ffffffffffffffff811115610e4c575f5ffd5b610e5888828901610d5e565b925050608086013567ffffffffffffffff811115610e74575f5ffd5b610e8088828901610c41565b9150509295509295909350565b5f5f5f5f5f60a08688031215610ea1575f5ffd5b610eaa86610bb1565b9450610eb860208701610bb1565b93506040860135925060608601359150608086013567ffffffffffffffff811115610e74575f5ffd5b5f60208284031215610ef1575f5ffd5b6105b982610bb1565b634e487b7160e01b5f52601160045260245ffd5b5f60018201610f1f57610f1f610efa565b5060010190565b808201808211156103b5576103b5610efa565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a0608082018190525f9082015260c0019056fea2646970667358221220f8926bed5102319863e5d5caa9e87bfcabd8897f924d469818c3835a5616cc3064736f6c634300081c0033"
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
    "SummonRegistry": {
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
              "internalType": "enum SummonRegistry.LocationType",
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
              "internalType": "enum SummonRegistry.LocationType",
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
              "internalType": "enum SummonRegistry.LocationType",
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
      "bytecode": "0x6080604052348015600e575f5ffd5b50604051610b11380380610b11833981016040819052602b9160b4565b806001600160a01b038116605857604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b605f816065565b505060df565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121560c3575f5ffd5b81516001600160a01b038116811460d8575f5ffd5b9392505050565b610a25806100ec5f395ff3fe608060405234801561000f575f5ffd5b5060043610610090575f3560e01c8063b9209e3311610063578063b9209e33146100fb578063ceb68c2314610136578063d42b291c14610149578063d7bfe3861461015c578063f2fde38b1461016f575f5ffd5b8063715018a61461009457806374d4e4911461009e5780638da5cb5b146100b4578063a622ee7c146100d8575b5f5ffd5b61009c610182565b005b6002546040519081526020015b60405180910390f35b5f546001600160a01b03165b6040516001600160a01b0390911681526020016100ab565b6100eb6100e63660046106a9565b610195565b6040516100ab949392919061072b565b6101266101093660046106a9565b6001600160a01b03165f9081526001602052604090205460ff1690565b60405190151581526020016100ab565b61009c6101443660046106a9565b6102d1565b61009c6101573660046107b4565b610382565b6100c061016a366004610849565b6105ae565b61009c61017d3660046106a9565b6105d6565b61018a610613565b6101935f61063f565b565b600160208190525f91825260409091208054918101805460ff808516946101009004169291906101c490610860565b80601f01602080910402602001604051908101604052809291908181526020018280546101f090610860565b801561023b5780601f106102125761010080835404028352916020019161023b565b820191905f5260205f20905b81548152906001019060200180831161021e57829003601f168201915b50505050509080600201805461025090610860565b80601f016020809104026020016040519081016040528092919081815260200182805461027c90610860565b80156102c75780601f1061029e576101008083540402835291602001916102c7565b820191905f5260205f20905b8154815290600101906020018083116102aa57829003601f168201915b5050505050905084565b6102d9610613565b6001600160a01b0381165f9081526001602052604090205460ff1661033a5760405162461bcd60e51b815260206004820152601260248201527115985d5b1d081b9bdd081d995c9a599a595960721b60448201526064015b60405180910390fd5b6001600160a01b0381165f81815260016020526040808220805460ff19169055517fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a9190a250565b61038a610613565b6001600160a01b0386166103d25760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606401610331565b6001600160a01b0386165f9081526001602052604090205460ff1661043c57600280546001810182555f919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0388161790555b6040518060800160405280600115158152602001866004811115610462576104626106c9565b815260200185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505090825250604080516020601f8601819004810282018101909252848152918101919085908590819084018382808284375f9201829052509390945250506001600160a01b03891681526001602090815260409091208351815490151560ff19821681178355928501519193509091839161ff001990911661ffff199091161761010083600481111561052f5761052f6106c9565b02179055506040820151600182019061054890826108f8565b506060820151600282019061055d90826108f8565b50905050856001600160a01b03167f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec886868660405161059e939291906109b3565b60405180910390a2505050505050565b600281815481106105bd575f80fd5b5f918252602090912001546001600160a01b0316905081565b6105de610613565b6001600160a01b03811661060757604051631e4fbdf760e01b81525f6004820152602401610331565b6106108161063f565b50565b5f546001600160a01b031633146101935760405163118cdaa760e01b8152336004820152602401610331565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146106a4575f5ffd5b919050565b5f602082840312156106b9575f5ffd5b6106c28261068e565b9392505050565b634e487b7160e01b5f52602160045260245ffd5b600581106106f957634e487b7160e01b5f52602160045260245ffd5b9052565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b841515815261073d60208201856106dd565b608060408201525f61075260808301856106fd565b828103606084015261076481856106fd565b979650505050505050565b5f5f83601f84011261077f575f5ffd5b50813567ffffffffffffffff811115610796575f5ffd5b6020830191508360208285010111156107ad575f5ffd5b9250929050565b5f5f5f5f5f5f608087890312156107c9575f5ffd5b6107d28761068e565b95506020870135600581106107e5575f5ffd5b9450604087013567ffffffffffffffff811115610800575f5ffd5b61080c89828a0161076f565b909550935050606087013567ffffffffffffffff81111561082b575f5ffd5b61083789828a0161076f565b979a9699509497509295939492505050565b5f60208284031215610859575f5ffd5b5035919050565b600181811c9082168061087457607f821691505b60208210810361089257634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52604160045260245ffd5b601f8211156108f357805f5260205f20601f840160051c810160208510156108d15750805b601f840160051c820191505b818110156108f0575f81556001016108dd565b50505b505050565b815167ffffffffffffffff81111561091257610912610898565b610926816109208454610860565b846108ac565b6020601f821160018114610958575f83156109415750848201515b5f19600385901b1c1916600184901b1784556108f0565b5f84815260208120601f198516915b828110156109875787850151825560209485019460019092019101610967565b50848210156109a457868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6109bd81856106dd565b60406020820152816040820152818360608301375f818301606090810191909152601f909201601f191601019291505056fea26469706673582212204fd45e2c65e7bbd9b6d5852fc29082b032af7232caabfd4e60dce919d972d99364736f6c634300081c0033"
    },
    "SummonVault": {
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
          "name": "Summoned1155",
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
          "name": "Summoned721",
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
          "name": "Unsummoned1155",
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
          "name": "Unsummoned721",
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
              "internalType": "contract ISummonRegistry",
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161174438038061174483398101604081905261002e916100fa565b816001600160a01b03811661005c57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b61006581610090565b5060018055600280546001600160a01b0319166001600160a01b03929092169190911790555061012b565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100f5575f5ffd5b919050565b5f5f6040838503121561010b575f5ffd5b610114836100df565b9150610122602084016100df565b90509250929050565b61160c806101385f395ff3fe608060405234801561000f575f5ffd5b50600436106100fb575f3560e01c80638da5cb5b11610093578063e3aa594511610063578063e3aa594514610268578063f07a380e1461027b578063f23a6e611461028e578063f2fde38b146102a1575f5ffd5b80638da5cb5b1461021f578063bc197c811461022f578063d6bd07ee14610242578063d742385814610255575f5ffd5b8063715018a6116100ce578063715018a6146101b3578063736616e5146101bb5780637b103999146101ce57806381bd34d2146101e1575f5ffd5b806301ffc9a7146100ff578063150b7a02146101275780632ff1d0f9146101535780636f39becd14610168575b5f5ffd5b61011261010d36600461101c565b6102b4565b60405190151581526020015b60405180910390f35b61013a61013536600461110f565b6102ea565b6040516001600160e01b0319909116815260200161011e565b610166610161366004611177565b6103f7565b005b61019b6101763660046111a9565b600360209081525f92835260408084209091529082529020546001600160a01b031681565b6040516001600160a01b03909116815260200161011e565b61016661054c565b6101666101c93660046111d3565b61055f565b60025461019b906001600160a01b031681565b6102116101ef36600461122e565b600460209081525f938452604080852082529284528284209052825290205481565b60405190815260200161011e565b5f546001600160a01b031661019b565b61013a61023d3660046112e3565b61065c565b610166610250366004611396565b610837565b61016661026336600461122e565b610a50565b61016661027636600461122e565b610c48565b6101666102893660046111a9565b610cdf565b61013a61029c3660046113dd565b610e14565b6101666102af366004611435565b610f3a565b5f6001600160e01b03198216630271189760e51b14806102e457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60025460405163b9209e3360e01b81526001600160a01b0380861660048301525f92869291169063b9209e3390602401602060405180830381865afa158015610335573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103599190611450565b8015610366575082516020145b15610382578280602001905181019061037f919061146f565b90505b335f81815260036020908152604080832088845290915280822080546001600160a01b0319166001600160a01b03861690811790915590519092879290917fa349089d44ee0cba13ab0db2f1b5d165ea1ecc08bf03fbeca19528f3a8d6158e9190a4630a85bd0160e11b5b9695505050505050565b6103ff610f77565b6001600160a01b0383165f90815260046020908152604080832085845282528083203384529091529020548111156104525760405162461bcd60e51b81526004016104499061148a565b60405180910390fd5b6001600160a01b0383165f90815260046020908152604080832085845282528083203384529091528120805483929061048c9084906114cc565b9091555050604051637921219560e11b81526001600160a01b0384169063f242432a906104c39030903390879087906004016114df565b5f604051808303815f87803b1580156104da575f5ffd5b505af11580156104ec573d5f5f3e3d5ffd5b50505050336001600160a01b031682846001600160a01b03167faa34c4000e873f79481cfa2eb5c4240deebba80b6c80db2400bc381346bd476c8460405161053691815260200190565b60405180910390a461054760018055565b505050565b610554610fa1565b61055d5f610fcd565b565b610567610fa1565b6001600160a01b038086165f9081526004602090815260408083208884528252808320938616835292905220548311156105b35760405162461bcd60e51b81526004016104499061148a565b6001600160a01b038086165f9081526004602090815260408083208884528252808320938616835292905290812080548592906105f19084906114cc565b9091555050604051637921219560e11b81526001600160a01b0386169063f242432a906106289030908590899089906004016114df565b5f604051808303815f87803b15801561063f575f5ffd5b505af1158015610651573d5f5f3e3d5ffd5b505050505050505050565b60025460405163b9209e3360e01b81526001600160a01b0380871660048301525f92879291169063b9209e3390602401602060405180830381865afa1580156106a7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106cb9190611450565b80156106d8575082516020145b156106f457828060200190518101906106f1919061146f565b90505b5f5b85518110156108225784818151811061071157610711611516565b602002602001015160045f336001600160a01b03166001600160a01b031681526020019081526020015f205f88848151811061074f5761074f611516565b602002602001015181526020019081526020015f205f846001600160a01b03166001600160a01b031681526020019081526020015f205f828254610793919061152a565b92505081905550816001600160a01b03168682815181106107b6576107b6611516565b6020026020010151336001600160a01b03167fc6aeb16b3b1e633a76505aeab4fa027af5a0b07bbb7f887db0d5540f134b23e28885815181106107fb576107fb611516565b602002602001015160405161081291815260200190565b60405180910390a46001016106f6565b5063bc197c8160e01b5b979650505050505050565b61083f610f77565b6001600160a01b0384165f90815260046020908152604080832086845282528083203384529091529020548211156108895760405162461bcd60e51b81526004016104499061148a565b60025460405163b9209e3360e01b81526001600160a01b0383811660048301529091169063b9209e3390602401602060405180830381865afa1580156108d1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108f59190611450565b61093c5760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b6044820152606401610449565b6001600160a01b0384165f9081526004602090815260408083208684528252808320338452909152812080548492906109769084906114cc565b909155505060408051336020808301919091528251808303909101815281830192839052637921219560e11b9092526001600160a01b0386169163f242432a916109cb9130918691899189919060440161156b565b5f604051808303815f87803b1580156109e2575f5ffd5b505af11580156109f4573d5f5f3e3d5ffd5b5050604080518581526001600160a01b0385811660208301523394508793508816917fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1910160405180910390a4610a4a60018055565b50505050565b610a58610f77565b6001600160a01b038381165f908152600360209081526040808320868452909152902054163314610abb5760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606401610449565b60025460405163b9209e3360e01b81526001600160a01b0383811660048301529091169063b9209e3390602401602060405180830381865afa158015610b03573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b279190611450565b610b6e5760405162461bcd60e51b815260206004820152601860248201527711195cdd1a5b985d1a5bdb881b9bdd081d995c9a599a595960421b6044820152606401610449565b6001600160a01b0383165f81815260036020908152604080832086845282529182902080546001600160a01b0319169055815133818301528251808203909201825280830192839052635c46a7ef60e11b90925263b88d4fde91610bda913091869188916044016115a4565b5f604051808303815f87803b158015610bf1575f5ffd5b505af1158015610c03573d5f5f3e3d5ffd5b50506040516001600160a01b0384811682523393508592508616907f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7990602001610536565b610c50610fa1565b6001600160a01b038381165f8181526003602090815260408083208784529091529081902080546001600160a01b031916905551632142170760e11b8152306004820152918316602483015260448201849052906342842e0e906064015f604051808303815f87803b158015610cc4575f5ffd5b505af1158015610cd6573d5f5f3e3d5ffd5b50505050505050565b610ce7610f77565b6001600160a01b038281165f908152600360209081526040808320858452909152902054163314610d4a5760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606401610449565b6001600160a01b0382165f8181526003602090815260408083208584529091529081902080546001600160a01b031916905551632142170760e11b8152306004820152336024820152604481018390526342842e0e906064015f604051808303815f87803b158015610dba575f5ffd5b505af1158015610dcc573d5f5f3e3d5ffd5b50506040513392508391506001600160a01b038516907fc21cae409cff297c64f8c28b3373b843939c0228b3c1e11580a310cef0c819dc905f90a4610e1060018055565b5050565b60025460405163b9209e3360e01b81526001600160a01b0380871660048301525f92879291169063b9209e3390602401602060405180830381865afa158015610e5f573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e839190611450565b8015610e90575082516020145b15610eac5782806020019051810190610ea9919061146f565b90505b335f90815260046020908152604080832088845282528083206001600160a01b038516845290915281208054869290610ee690849061152a565b90915550506040518481526001600160a01b03821690869033907fc6aeb16b3b1e633a76505aeab4fa027af5a0b07bbb7f887db0d5540f134b23e29060200160405180910390a463f23a6e6160e01b61082c565b610f42610fa1565b6001600160a01b038116610f6b57604051631e4fbdf760e01b81525f6004820152602401610449565b610f7481610fcd565b50565b600260015403610f9a57604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b5f546001600160a01b0316331461055d5760405163118cdaa760e01b8152336004820152602401610449565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121561102c575f5ffd5b81356001600160e01b031981168114611043575f5ffd5b9392505050565b6001600160a01b0381168114610f74575f5ffd5b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561109b5761109b61105e565b604052919050565b5f82601f8301126110b2575f5ffd5b813567ffffffffffffffff8111156110cc576110cc61105e565b6110df601f8201601f1916602001611072565b8181528460208386010111156110f3575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f5f5f5f60808587031215611122575f5ffd5b843561112d8161104a565b9350602085013561113d8161104a565b925060408501359150606085013567ffffffffffffffff81111561115f575f5ffd5b61116b878288016110a3565b91505092959194509250565b5f5f5f60608486031215611189575f5ffd5b83356111948161104a565b95602085013595506040909401359392505050565b5f5f604083850312156111ba575f5ffd5b82356111c58161104a565b946020939093013593505050565b5f5f5f5f5f60a086880312156111e7575f5ffd5b85356111f28161104a565b9450602086013593506040860135925060608601356112108161104a565b915060808601356112208161104a565b809150509295509295909350565b5f5f5f60608486031215611240575f5ffd5b833561124b8161104a565b92506020840135915060408401356112628161104a565b809150509250925092565b5f82601f83011261127c575f5ffd5b813567ffffffffffffffff8111156112965761129661105e565b8060051b6112a660208201611072565b918252602081850181019290810190868411156112c1575f5ffd5b6020860192505b838310156103ed5782358252602092830192909101906112c8565b5f5f5f5f5f60a086880312156112f7575f5ffd5b85356113028161104a565b945060208601356113128161104a565b9350604086013567ffffffffffffffff81111561132d575f5ffd5b6113398882890161126d565b935050606086013567ffffffffffffffff811115611355575f5ffd5b6113618882890161126d565b925050608086013567ffffffffffffffff81111561137d575f5ffd5b611389888289016110a3565b9150509295509295909350565b5f5f5f5f608085870312156113a9575f5ffd5b84356113b48161104a565b9350602085013592506040850135915060608501356113d28161104a565b939692955090935050565b5f5f5f5f5f60a086880312156113f1575f5ffd5b85356113fc8161104a565b9450602086013561140c8161104a565b93506040860135925060608601359150608086013567ffffffffffffffff81111561137d575f5ffd5b5f60208284031215611445575f5ffd5b81356110438161104a565b5f60208284031215611460575f5ffd5b81518015158114611043575f5ffd5b5f6020828403121561147f575f5ffd5b81516110438161104a565b602080825260149082015273496e73756666696369656e742062616c616e636560601b604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b818103818111156102e4576102e46114b8565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a0608082018190525f9082015260c00190565b634e487b7160e01b5f52603260045260245ffd5b808201808211156102e4576102e46114b8565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f9061082c9083018461153d565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906103ed9083018461153d56fea2646970667358221220c99bbb350c8d2f260e870f089af158ff48f871ad62bd9d48f59091efa6a6524264736f6c634300081c0033"
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