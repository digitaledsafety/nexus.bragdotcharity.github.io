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
      "bytecode": "0x60808060405234601557610239908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c6315270ace14610025575f80fd5b34610174576060366003190112610174576004356001600160a01b038116918282036101745760243567ffffffffffffffff81116101745761006b9036906004016101ae565b60449391933567ffffffffffffffff81116101745761008e9036906004016101ae565b91909382820361017857505f5b8181106100a457005b6100af8183886101df565b356001600160a01b03811690819003610174576100cd8285886101df565b35906040519160208301916323b872dd60e01b8352336024850152604484015260648301526064825260a082019082821067ffffffffffffffff831117610160576020925f92604052519082885af115610155575f513d61014c5750863b155b6101395760010161009b565b86635274afe760e01b5f5260045260245ffd5b6001141561012d565b6040513d5f823e3d90fd5b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b62461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b9181601f840112156101745782359167ffffffffffffffff8311610174576020808501948460051b01011161017457565b91908110156101ef5760051b0190565b634e487b7160e01b5f52603260045260245ffdfea264697066735822122026b8faa6450443cac2a6b72febc8fda6cf28cdff0328787f2bd8de031572444b64736f6c634300081c0033"
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
      "bytecode": "0x60806040523461037357612e936060813803918261001c81610377565b938492833981010312610373576100328161039c565b9060406100416020830161039c565b9101519061004f6040610377565b926007845266109c9859d3919560ca1b602085015261006e6040610377565b600781526610949051d3919560ca1b6020820152845190946001600160401b03821161027a575f5490600182811c92168015610369575b602083101461025c5781601f8493116102fc575b50602090601f8311600114610299575f9261028e575b50508160011b915f199060031b1c1916175f555b83516001600160401b03811161027a57600154600181811c91168015610270575b602082101461025c57601f81116101f9575b506020601f82116001146101905781906101529495965f92610185575b50508160011b915f199060031b1c1916176001555b60016008556103b0565b50600a80546001600160a01b0319166001600160a01b0392909216919091179055600b55604051612a39908161043a8239f35b015190505f80610133565b601f1982169560015f52815f20965f5b8181106101e1575091610152959697918460019594106101c9575b505050811b01600155610148565b01515f1960f88460031b161c191690555f80806101bb565b838301518955600190980197602093840193016101a0565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f830160051c81019160208410610252575b601f0160051c01905b8181106102475750610116565b5f815560010161023a565b9091508190610231565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610104565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100cf565b5f8080528281209350601f198516905b8181106102e457509084600195949392106102cc575b505050811b015f556100e3565b01515f1960f88460031b161c191690555f80806102bf565b929360206001819287860151815501950193016102a9565b5f80529091507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f840160051c8101916020851061035f575b90601f859493920160051c01905b81811061035157506100b9565b5f8155849350600101610344565b9091508190610336565b91607f16916100a5565b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761027a57604052565b51906001600160a01b038216820361037357565b6001600160a01b0381165f9081525f516020612e735f395f51905f52602052604090205460ff16610434576001600160a01b03165f8181525f516020612e735f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe6080806040526004361015610012575f80fd5b5f3560e01c90816301ffc9a7146110865750806306fdde0314610fe4578063081812fc14610fa8578063095ea7b314610ebe5780630fd973ce14610e575780631653441c14610df857806319bcef6d14610db557806323b872dd14610d9e578063248a9ca314610d6b5780632eb9313e14610d285780632f2ff15d14610cea57806336568abe14610ca657806342842e0e14610c7757806361d027b314610c4f5780636352211e14610c1f57806364cb7e9c14610bf557806370a0823114610ba457806383943dc814610b7c57806391d1485414610b3357806395d89b4114610a5557806396d8f4f314610a38578063a217fddf14610a1e578063a22cb46514610983578063a6719b3a14610912578063b88d4fde146108a7578063c631724714610886578063c87b56dd14610376578063d3933c1c14610305578063d435b3a3146102dd578063d547741f14610298578063da183afb1461026e578063e985e9c5146102175763f0f4426014610187575f80fd5b34610213576020366003190112610213576101a0611149565b6101a8611d06565b6001600160a01b031680156101ce576001600160601b0360a01b600a541617600a555f80f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b5f80fd5b3461021357604036600319011261021357610230611149565b61023861115f565b9060018060a01b03165f52600560205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610213576020366003190112610213576004355f52600e602052602060405f2054604051908152f35b34610213576040366003190112610213576102db6004356102b761115f565b906102d66102d1825f526007602052600160405f20015490565b611d55565b611eda565b005b34610213575f36600319011261021357600c546040516001600160a01b039091168152602090f35b6060366003190112610213576004356001600160401b03811161021357610330903690600401611175565b6024356001600160401b0381116102135761034f903690600401611175565b906044359283151584036102135761036f946103696114f5565b336119a6565b6001600855005b3461021357602036600319011261021357600435610393816114c1565b50805f52600e60205260405f2054602080926040516103b28382611214565b5f8152600c546001600160a01b03169384610747575b508293508290816060845f52600f82526103e460405f20611235565b8051909190156106f157826103f88361244d565b156106e95750508180610463603a610418610413888b612179565b6123c1565b6040519384917f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000828401528051918291018484015e81015f838201520301601f198101835282611214565b955b6040516104728382611214565b5f8152928051610692575b5061048790612665565b84519096901561067857816104da816104d460226104a48a6127ad565b6040519384916101d160f51b828401528051918291018484015e81015f838201520301601f198101835282611214565b966127ad565b95604051998a99727b226e616d65223a2022427261674e4654202360681b828c015280519182910160338c015e890190603382017f222c20226465736372697074696f6e223a2022427261672e43686172697479209052605382016b111bdb985d1a5bdb8813919560a21b9052805192839101605f83015e01603301906c1116101134b6b0b3b2911d101160991b602c830152805192839101603983015e01602c0190600d82015f8152815193849201905e01600d01907f222c202261747472696275746573223a205b7b2274726169745f74797065223a825275101126b2b9b9b0b3b2911610113b30b63ab2911d101160511b83830152805192839101603683015e0163227d5d7d60e01b603682015203603601601b19810182526004016106039082611214565b61060c906123c1565b6040517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000084820152815190938492829101603d84015e8101603d81015f905203603d01601f19810183526106609083611214565b604051918183928352820161067491611125565b0390f35b816104da6040516106898382611214565b5f8152966127ad565b6104879193506106e260358492604051938491741116101130b734b6b0ba34b7b72fbab936111d101160591b828401528051918291018484015e81015f838201520301601f198101835282611214565b929061047d565b909195610465565b90506106fc85612149565b80519091901561073157826107108361244d565b156106e9575050818061072b603a610418610413888b612179565b95610465565b9050818061072b603a610418610413888b612179565b5f9060246040518097819363b63e6ac360e01b835260048301525afa5f9481610789575b50908394849261077d575b50906103c8565b60609150015186610776565b94509092503d805f863e61079d8186611214565b8401938581860312610213578051906001600160401b0382116102135701926080848603126102135760405193608085018581106001600160401b038211176108725760405280516001600160a01b03811681036102135785528681015187860152604081015160408601526060810151906001600160401b03821161021357019185601f8401121561021357825194610836866112d5565b966108446040519889611214565b8688528887860101116102135787965f88888199828099018386015e8301015260608201529550909161076b565b634e487b7160e01b5f52604160045260245ffd5b346102135760203660031901126102135761089f611d06565b600435600b55005b34610213576080366003190112610213576108c0611149565b6108c861115f565b90604435606435926001600160401b0384116102135736602385011215610213576109006102db9436906024816004013591016112f0565b9261090c838383611326565b3361206c565b608036600319011261021357610926611149565b6024356001600160401b03811161021357610945903690600401611175565b6044356001600160401b03811161021357610964903690600401611175565b916064359384151585036102135761036f9561097e6114f5565b6119a6565b346102135760403660031901126102135761099c611149565b60243590811515809203610213576001600160a01b0316908115610a0b57335f52600560205260405f20825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b34610213575f3660031901126102135760206040515f8152f35b34610213575f366003190112610213576020600b54604051908152f35b34610213575f366003190112610213576040515f600154610a75816111dc565b8084529060018116908115610b0f5750600114610ab1575b61067483610a9d81850382611214565b604051918291602083526020830190611125565b60015f9081527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b808210610af557509091508101602001610a9d610a8d565b919260018160209254838588010152019101909291610add565b60ff191660208086019190915291151560051b84019091019150610a9d9050610a8d565b3461021357604036600319011261021357610b4c61115f565b6004355f52600760205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610213575f36600319011261021357600d546040516001600160a01b039091168152602090f35b34610213576020366003190112610213576001600160a01b03610bc5611149565b168015610be2575f526003602052602060405f2054604051908152f35b6322718ad960e21b5f525f60045260245ffd5b34610213576020366003190112610213576004355f52600f602052610674610a9d60405f20611235565b34610213576020366003190112610213576020610c3d6004356114c1565b6040516001600160a01b039091168152f35b34610213575f36600319011261021357600a546040516001600160a01b039091168152602090f35b34610213576102db610c88366111a2565b9060405192610c98602085611214565b5f845261090c838383611326565b3461021357604036600319011261021357610cbf61115f565b336001600160a01b03821603610cdb576102db90600435611eda565b63334bd91960e11b5f5260045ffd5b34610213576040366003190112610213576102db600435610d0961115f565b90610d236102d1825f526007602052600160405f20015490565b611e4e565b3461021357602036600319011261021357610d41611149565b610d49611d06565b600d80546001600160a01b0319166001600160a01b0392909216919091179055005b34610213576020366003190112610213576020610d966004355f526007602052600160405f20015490565b604051908152f35b34610213576102db610daf366111a2565b91611326565b3461021357602036600319011261021357610dce611149565b610dd6611d06565b600c80546001600160a01b0319166001600160a01b0392909216919091179055005b6040366003190112610213576004356001600160401b03811161021357610e23903690600401611175565b602435916001600160401b03831161021357610e4661036f933690600401611175565b929091610e516114f5565b336115d5565b606036600319011261021357610e6b611149565b6024356001600160401b03811161021357610e8a903690600401611175565b91604435926001600160401b03841161021357610eae61036f943690600401611175565b939092610eb96114f5565b6115d5565b3461021357604036600319011261021357610ed7611149565b602435610ee3816114c1565b33151580610f95575b80610f68575b610f555781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff1615610ef2565b506001600160a01b038116331415610eec565b3461021357602036600319011261021357600435610fc5816114c1565b505f526004602052602060018060a01b0360405f205416604051908152f35b34610213575f366003190112610213576040515f5f54611003816111dc565b8084529060018116908115610b0f575060011461102a5761067483610a9d81850382611214565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b80821061106c57509091508101602001610a9d610a8d565b919260018160209254838588010152019101909291611054565b34610213576020366003190112610213576004359063ffffffff60e01b821680920361021357602091637965db0b60e01b81149081156110c8575b5015158152f35b632483248360e11b8114915081156110e2575b50836110c1565b6380ac58cd60e01b811491508115611114575b8115611103575b50836110db565b6301ffc9a760e01b149050836110fc565b635b5e139f60e01b811491506110f5565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361021357565b602435906001600160a01b038216820361021357565b9181601f84011215610213578235916001600160401b038311610213576020838186019501011161021357565b6060906003190112610213576004356001600160a01b038116810361021357906024356001600160a01b0381168103610213579060443590565b90600182811c9216801561120a575b60208310146111f657565b634e487b7160e01b5f52602260045260245ffd5b91607f16916111eb565b90601f801991011681019081106001600160401b0382111761087257604052565b9060405191825f825492611248846111dc565b80845293600181169081156112b3575060011461126f575b5061126d92500383611214565b565b90505f9291925260205f20905f915b81831061129757505090602061126d928201015f611260565b602091935080600191548385890101520191019091849261127e565b90506020925061126d94915060ff191682840152151560051b8201015f611260565b6001600160401b03811161087257601f01601f191660200190565b9291926112fc826112d5565b9161130a6040519384611214565b829481845281830111610213578281602093845f960137010152565b6001600160a01b03909116919082156114ae575f828152600260205260409020546001600160a01b031692829033151580611419575b50846113e6575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b03168083036113ce57505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f198154019055611363565b9091508061145d575b1561142f5782905f61135c565b828461144757637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b50338414801561148c575b8061142257505f838152600460205260409020546001600160a01b03163314611422565b505f84815260056020908152604080832033845290915290205460ff16611468565b633250574960e11b5f525f60045260245ffd5b5f818152600260205260409020546001600160a01b03169081156114e3575090565b637e27328960e01b5f5260045260245ffd5b600260085414611506576002600855565b633ee5aeb560e01b5f5260045ffd5b5f1981146115235760010190565b634e487b7160e01b5f52601160045260245ffd5b601f821161154457505050565b5f5260205f20906020601f840160051c8301931061157c575b601f0160051c01905b818110611571575050565b5f8155600101611566565b909150819061155d565b908060209392818452848401375f828201840152601f01601f1916010190565b3d156115d0573d906115b7826112d5565b916115c56040519384611214565b82523d5f602084013e565b606090565b919392909260018060a01b03600c54161561196157600b543410611923576009549161160083611515565b60095581611815575b5050600c546040516334ff261960e21b815233600482015234602482015260606044820152929060209084906001600160a01b0316815f8161164f606482018c8c611586565b03925af19283156117c3575f936117e1575b50815f52600e6020528260405f205560405161167e602082611214565b5f81526001600160a01b038216156114ae576001600160a01b036116a28484611d8f565b166117ce57826116b29233611f5e565b600d546001600160a01b03168061177a575b505f8080803460018060a01b03600a54165af16116df6115a6565b5015611735576117307feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f37793604051938493348552602085015260408401526080606084015233956080840191611586565b0390a2565b60405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606490fd5b803b15610213576040516340c10f1960e01b8152336004820152346024820152905f908290604490829084905af180156117c357156116c4575f6117bd91611214565b5f6116c4565b6040513d5f823e3d90fd5b6339e3563760e11b5f525f60045260245ffd5b9092506020813d60201161180d575b816117fd60209383611214565b810103126102135751915f611661565b3d91506117f0565b6118209136916112f0565b815f52600660205260405f20908051906001600160401b038211610872576118528261184c85546111dc565b85611537565b602090601f83116001146118c05761188192915f91836118b5575b50508160011b915f199060031b1c19161790565b90555b7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce76020604051838152a15f80611609565b015190505f8061186d565b90601f19831691845f52815f20925f5b81811061190b57509084600195949392106118f3575b505050811b019055611884565b01515f1960f88460031b161c191690555f80806118e6565b929360206001819287860151815501950193016118d0565b60405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b60405162461bcd60e51b815260206004820152601860248201527f5265636569707420636f6e7472616374206e6f742073657400000000000000006044820152606490fd5b600c5492959194909391925f9291906001600160a01b03161561196157600b54341061192357600954936119d985611515565b60095515611bfc57835f52600f60205260405f20916001600160401b03821161087257611a0a8261184c85546111dc565b5f90601f8311600114611b9857611a3792915f9183611b8d5750508160011b915f199060031b1c19161790565b90555b600c546040516334ff261960e21b815233600482015234602482015260606044820152939060209085906001600160a01b0316815f81611a7e606482018d8d611586565b03925af19384156117c3575f94611b59575b50825f52600e6020528360405f2055604051611aad602082611214565b5f81526001600160a01b038216156114ae576001600160a01b03611ad18584611d8f565b166117ce5783611ae19233611f5e565b600d546001600160a01b031680611b0d575b508080803460018060a01b03600a54165af16116df6115a6565b803b15610213576040516340c10f1960e01b8152336004820152346024820152905f908290604490829084905af180156117c35715611af357611b5291505f90611214565b5f5f611af3565b9093506020813d602011611b85575b81611b7560209383611214565b810103126102135751925f611a90565b3d9150611b68565b013590505f8061186d565b601f19831691845f5260205f20925f5b818110611be45750908460019594939210611bcb575b505050811b019055611a3a565b01355f19600384901b60f8161c191690555f8080611bbe565b91936020600181928787013581550195019201611ba8565b9081611c0a575b5050611a3a565b611c159136916112f0565b825f52600660205260405f20908051906001600160401b03821161087257611c418261184c85546111dc565b602090601f8311600114611ca357611c6f92915f91836118b55750508160011b915f199060031b1c19161790565b90555b7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce76020604051848152a15f80611c03565b90601f19831691845f52815f20925f5b818110611cee5750908460019594939210611cd6575b505050811b019055611c72565b01515f1960f88460031b161c191690555f8080611cc9565b92936020600181928786015181550195019301611cb3565b335f9081527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df602052604090205460ff1615611d3e57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260076020908152604080832033845290915290205460ff1615611d795750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f828152600260205260409020546001600160a01b0316919082611e1b575b6001600160a01b031680611e03575b815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a490565b805f52600360205260405f2060018154019055611dbd565b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f198154019055611dae565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff16611ed4575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff1615611ed4575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b9291813b611f6d575b50505050565b604051630a85bd0160e11b81526001600160a01b0394851660048201525f60248201526044810191909152608060648201529216919060209082908190611fb8906084830190611125565b03815f865af15f9181612027575b50611ff45750611fd46115a6565b80519081611fef5782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b0161201557505f808080611f67565b633250574960e11b5f5260045260245ffd5b9091506020813d602011612064575b8161204360209383611214565b8101031261021357516001600160e01b03198116810361021357905f611fc6565b3d9150612036565b823b61207a575b5050505050565b604051630a85bd0160e11b81526001600160a01b0391821660048201529181166024830152604482019390935260806064820152911691602090829081906120c6906084830190611125565b03815f865af15f9181612104575b506120e25750611fd46115a6565b6001600160e01b03191663757a42ff60e11b0161201557505f80808080612073565b9091506020813d602011612141575b8161212060209383611214565b8101031261021357516001600160e01b03198116810361021357905f6120d4565b3d9150612113565b612152816114c1565b505f52600660205261216660405f20611235565b5f604051612175602082611214565b5290565b600d61016960209361237193815115155f1461237457505b604080517f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f3230878201527f30302f73766722207072657365727665417370656374526174696f3d22784d69918101919091527f6e594d696e206d656574222076696577426f783d223020302033353020333530606082015261111f60f11b60808201527f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e7460828201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060a28201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60c282015261329f60f11b60e28201527f3c726563742077696474683d223130302522206865696768743d22313030252260e482015271103334b6361e91119b199b1b33189110179f60711b6101048201527f3c7465787420783d223530252220793d223530252220636c6173733d226261736101168201527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465610136820152723c3a16b0b731b437b91e9136b4b2323632911f60691b6101568201528151909586928291018484015e81016c1e17ba32bc3a1f1e17b9bb339f60991b838201520301601219810184520182611214565b90565b85915060296123856123bc92612665565b60405193849168427261674e4654202360b81b828401528051918291018484015e81015f838201520301601f198101835282611214565b612191565b604051612371916123d3606083611214565b604082527f4142434445464748494a4b4c4d4e4f505152535455565758595a61626364656660208301527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f604083015261290b565b908151811015612439570160200190565b634e487b7160e01b5f52603260045260245ffd5b8051600b8110611ed457156124395760208101516001600160f81b031916601960fa1b14908161260c575b816125e5575b816125be575b81612597575b81612570575b81612549575b81612522575b816124fb575b816124d4575b816124b1575090565b80915051600a101561243957602a01516001600160f81b031916602f60f81b1490565b80915051600910156124395760298101516001600160f81b031916606f60f81b14906124a8565b80915051600810156124395760288101516001600160f81b031916606960f81b14906124a2565b80915051600710156124395760278101516001600160f81b031916601960fa1b149061249c565b80915051600610156124395760268101516001600160f81b031916607560f81b1490612496565b80915051600510156124395760258101516001600160f81b031916606160f81b1490612490565b80915051600410156124395760248101516001600160f81b031916601d60f91b149061248a565b80915051600310156124395760238101516001600160f81b031916606160f81b1490612484565b80915051600210156124395760228101516001600160f81b031916601d60fa1b149061247e565b80915051600110156124395760218101516001600160f81b031916606160f81b1490612478565b9061263d826112d5565b61264a6040519182611214565b828152809261265b601f19916112d5565b0190602036910137565b805f9172184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b82101561278a575b806d04ee2d6d415b85acef8100000000600a92101561276f575b662386f26fc1000081101561275b575b6305f5e10081101561274a575b61271081101561273b575b606481101561272d575b1015612722575b600a60216126ea60018501612633565b938401015b5f1901916f181899199a1a9b1b9c1cb0b131b232b360811b8282061a835304801561271d57600a90916126ef565b505090565b6001909101906126da565b6064600291049301926126d3565b612710600491049301926126c9565b6305f5e100600891049301926126be565b662386f26fc10000601091049301926126b1565b6d04ee2d6d415b85acef8100000000602091049301926126a1565b506040915072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8104612687565b9081515f5f5b8281106128a7575080156128a357810190818111611523576127d4826112d5565b916127e26040519384611214565b8083526127f1601f19916112d5565b013660208401375f5f5b82811061280a57509193505050565b600190601160f91b6001600160f81b0319612825838a612428565b5116148015612882575b612867575b6001600160f81b03196128478289612428565b51169261286061285682611515565b945f1a9187612428565b53016127fb565b605c61287c61287585611515565b9487612428565b53612834565b50601760fa1b6001600160f81b031961289b838a612428565b51161461282f565b5050565b601160f91b6001600160f81b03196128bf8388612428565b51161480156128ea575b6128d6575b6001016127b3565b906128e2600191611515565b9190506128ce565b50601760fa1b6001600160f81b03196129038388612428565b5116146128c9565b9190918051156129ec578051600281018091116115235760039004600281901b906001600160fe1b038116036115235761294490612633565b90602082019080815182019560208701908151925f83525b88811061299e575050600393949596505251068060011461298c57600214612982575090565b603d905f19015390565b50603d90815f19820153600119015390565b600360049199969901986001603f8b5182828260121c16870101518453828282600c1c16870101518385015382828260061c168701015160028501531684010151600382015301949761295c565b5090506040516129fd602082611214565b5f81529056fea2646970667358221220bdfc95c230c7cd7bc057dc9d1de3feefbdb735061def626197c4f8e9cb150a4264736f6c634300081c00336d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df"
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
      "bytecode": "0x6101806040523461007d5761001b6100156100ce565b916101c0565b6040516122329081610e6a82396080518161158e015260a0518161164b015260c05181611558015260e051816115dd01526101005181611603015261012051816109a2015261014051816109cb01526101605181818161066b0152610fce0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b601f909101601f19168101906001600160401b038211908210176100b857604052565b610081565b604051906100cc604083610095565b565b61313c90606082380392836040519485926100e98285610095565b83398101031261007d578151906001600160a01b038216820361007d576040602084015193015191929190565b60405190610125604083610095565b60048252565b6040519061013a604083610095565b60018252565b6040519061014f604083610095565b600a825269213930b3902a37b5b2b760b11b6020830152565b1561016f57565b60405162461bcd60e51b8152602060048201526024808201527f4d617820737570706c79206d757374206265203e3d20696e697469616c20737560448201526370706c7960e01b6064820152608490fd5b916101c9610140565b6101d1610140565b906101da610116565b90634252414760e01b60208301526101f061012b565b603160f81b60208201908152845190949193916001600160401b0382116100b85761022582610220600354610367565b61039f565b602090601f83116001146102e05791806102599261026195945f926102d5575b50508160011b915f199060031b1c19161790565b60035561043e565b61026a816106d4565b61012052610277826107c9565b610140526020815191012060e052519020610100524660a0526102986108bb565b6080523060c0526102ab82821015610168565b610160526102b882610517565b506102c28261058d565b50806102cc575050565b6100cc91610628565b015190505f80610245565b60035f52601f19831691907fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b925f5b81811061034f575091600193918561026197969410610337575b505050811b0160035561043e565b01515f1960f88460031b161c191690555f8080610329565b9293602060018192878601518155019501930161030f565b90600182811c92168015610395575b602083101461038157565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610376565b601f81116103ab575050565b60035f5260205f20906020601f840160051c830193106103e5575b601f0160051c01905b8181106103da575050565b5f81556001016103cf565b90915081906103c6565b601f82116103fc57505050565b5f5260205f20906020601f840160051c83019310610434575b601f0160051c01905b818110610429575050565b5f815560010161041e565b9091508190610415565b80519091906001600160401b0381116100b85761046781610460600454610367565b60046103ef565b602092601f821160011461049b57610496929382915f926102d55750508160011b915f199060031b1c19161790565b600455565b60045f52601f198216937f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b915f5b8681106104ff57508360019596106104e7575b505050811b01600455565b01515f1960f88460031b161c191690555f80806104dc565b919260206001819286850151815501940192016104c9565b6001600160a01b0381165f9081525f5160206130dc5f395f51905f52602052604090205460ff16610588576001600160a01b03165f8181525f5160206130dc5f395f51905f5260205260408120805460ff191660011790553391905f51602061309c5f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f5160206130fc5f395f51905f52602052604090205460ff16610588576001600160a01b0381165f9081525f5160206130fc5f395f51905f5260205260409020805460ff1916600117905533906001600160a01b03167f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a65f51602061309c5f395f51905f525f80a4600190565b91906001600160a01b03831680156106c1576002548281018091116106bc576002555f81815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254926001600160d01b038085116106a557506100cc929350610998565b630e58ae9360e11b5f52600485905260245260445ffd5b610984565b63ec442f0560e01b5f525f60045260245ffd5b908151602081105f146106ef5750906106ec90610919565b90565b6001600160401b0381116100b8576107138161070c600554610367565b60056103ef565b602092601f821160011461074a57610742929382915f926102d55750508160011b915f199060031b1c19161790565b60055560ff90565b60055f52601f198216937f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0915f5b8681106107b15750836001959610610799575b505050811b0160055560ff90565b01515f1960f88460031b161c191690555f808061078b565b91926020600181928685015181550194019201610778565b908151602081105f146107e15750906106ec90610919565b6001600160401b0381116100b857610805816107fe600654610367565b60066103ef565b602092601f821160011461083c57610834929382915f926102d55750508160011b915f199060031b1c19161790565b60065560ff90565b60065f52601f198216937ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f915f5b8681106108a3575083600195961061088b575b505050811b0160065560ff90565b01515f1960f88460031b161c191690555f808061087d565b9192602060018192868501518155019401920161086a565b60e051610100516040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815261091360c082610095565b51902090565b601f815111610944576020815191015160208210610935571790565b5f198260200360031b1b161790565b604460209160405192839163305a27a960e01b83528160048401528051918291826024860152018484015e5f828201840152601f01601f19168101030190fd5b634e487b7160e01b5f52601160045260245ffd5b906109a281610a97565b9165ffffffffffff4311610a7f57600a5480610a4957506109dc6109cc6100cc945f5b6001610e0d565b65ffffffffffff4316600a610d37565b50506001600160a01b03168015610a31575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116610bc6565b610a42610a3d83610a97565b610ac8565b50506109ee565b92835f198101116106bc57600a5f525f5160206130bc5f395f51905f52909301546100cc936109dc916109cc919060301c6109c5565b6306dfcc6560e41b5f5260306004524360245260445ffd5b6001600160d01b038111610ab1576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b65ffffffffffff4311610a7f57600a5480610af257506109cc610aee915f5b6002610e0d565b9091565b805f198101116106bc57600a5f525f5160206130bc5f395f51905f520154610aee916109cc9160301c610ae7565b65ffffffffffff4311610a7f57805480610b545750610b44610aee925f6002610e0d565b9065ffffffffffff431690610d37565b805f198101116106bc575f82815260209020015f190154610aee92610b449160301c610ae7565b65ffffffffffff4311610a7f57805480610b9f5750610b44610aee925f6001610e0d565b805f198101116106bc575f82815260209020015f190154610aee92610b449160301c6109c5565b6001600160a01b03808316939291908116908185141580610cb9575b610bee575b5050505050565b81610c5f575b505082610c03575b8080610be7565b6001600160a01b03165f9081526009602052604090205f51602061311c5f395f51905f5291610c3c91610c369091610a97565b90610b7b565b604080516001600160d01b039384168152919092166020820152a25f8080610bfc565b6001600160a01b03165f9081526009602052604090205f51602061311c5f395f51905f5290610c9790610c9186610a97565b90610b20565b604080516001600160d01b039384168152919092166020820152a25f80610bf4565b50831515610be2565b5f198101919082116106bc57565b908154680100000000000000008110156100b85760018101808455811015610d23575f9283526020928390208251929093015160301b65ffffffffffff191665ffffffffffff9290921691909117910155565b634e487b7160e01b5f52603260045260245ffd5b80549293928015610de357610d4e610d5991610cc2565b825f5260205f200190565b8054603081901c9365ffffffffffff91821692918116808411610dd457879303610da05750610d9c92509065ffffffffffff82549181199060301b169116179055565b9190565b915050610d9c91610dc0610db26100bd565b65ffffffffffff9093168352565b6001600160d01b0386166020830152610cd0565b632520601d60e01b5f5260045ffd5b5090610e0891610df4610db26100bd565b6001600160d01b0385166020830152610cd0565b5f9190565b91909180600114610e4f57600214610e3357634e487b7160e01b5f52605160045260245ffd5b6001600160d01b03908116918116919091039081116106bc5790565b506001600160d01b03918216908216019081116106bc579056fe60806040526004361015610011575f80fd5b5f3560e01c806301ffc9a71461024457806306fdde031461023f578063095ea7b31461023a57806318160ddd1461023557806323b872dd14610230578063248a9ca31461022b5780632f2ff15d14610226578063313ce567146102215780633644e5151461021c57806336568abe146102175780633a46b1a81461021257806340c10f191461020d57806342966c68146102085780634bf5d7e914610203578063587cde1e146101fe5780635c19a95c146101f95780636fcfff45146101f457806370a08231146101ef57806379cc6790146101ea5780637ecebe00146101e557806384b0196e146101e05780638e539e8c146101db57806391d14854146101d657806391ddadf4146101d157806395d89b41146101cc5780639ab24eb0146101c7578063a217fddf146101c2578063a9059cbb146101bd578063c3cda520146101b8578063d505accf146101b3578063d5391393146101ae578063d547741f146101a9578063d5abeb01146101a4578063dd62ed3e1461019f5763f1127ed81461019a575f80fd5b611048565b610ff1565b610fb7565b610f79565b610f3f565b610e1b565b610d0c565b610cc6565b610cac565b610c65565b610bc0565b610b95565b610b46565b610a87565b61098a565b610952565b610922565b6108ea565b610888565b610866565b610826565b610796565b610779565b610638565b610553565b61050f565b6104f5565b6104da565b610495565b610462565b61042a565b61040d565b6103dc565b6102d6565b3461029a57602036600319011261029a5760043563ffffffff60e01b811680910361029a57602090637965db0b60e01b8114908115610289575b506040519015158152f35b6301ffc9a760e01b1490505f61027e565b5f80fd5b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060206102d392818152019061029e565b90565b3461029a575f36600319011261029a576040515f6003546102f68161110e565b808452906001811690811561038c575060011461032e575b61032a8361031e818503826111fc565b604051918291826102c2565b0390f35b60035f9081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b939250905b8082106103725750909150810160200161031e61030e565b91926001816020925483858801015201910190929161035a565b60ff191660208086019190915291151560051b8401909101915061031e905061030e565b600435906001600160a01b038216820361029a57565b602435906001600160a01b038216820361029a57565b3461029a57604036600319011261029a576104026103f86103b0565b6024359033611948565b602060405160018152f35b3461029a575f36600319011261029a576020600254604051908152f35b3461029a57606036600319011261029a576104026104466103b0565b61044e6103c6565b6044359161045d833383611262565b611330565b3461029a57602036600319011261029a57602061048d6004355f52600b602052600160405f20015490565b604051908152f35b3461029a57604036600319011261029a576104d86004356104b46103c6565b906104d36104ce825f52600b602052600160405f20015490565b61148b565b6114c5565b005b3461029a575f36600319011261029a57602060405160128152f35b3461029a575f36600319011261029a57602061048d611555565b3461029a57604036600319011261029a5760043561052b6103c6565b336001600160a01b03821603610544576104d891611671565b63334bd91960e11b5f5260045ffd5b3461029a57604036600319011261029a5761056c6103b0565b6001600160a01b03165f90815260096020526040902061058d6024356116f9565b8154905f8291600584116105e0575b6105a7935084611b68565b90816105c557505060205f5b6040516001600160d01b039091168152f35b6105d0602092611732565b905f52815f20015460301c6105b3565b91926105eb81611a0a565b8103908111610633576105a793855f5265ffffffffffff8260205f2001541665ffffffffffff8516105f1461062157509161059c565b92915061062d9061121e565b9061059c565b6110fa565b3461029a57604036600319011261029a576106516103b0565b60243561065c61141c565b600254818101809111610633577f000000000000000000000000000000000000000000000000000000000000000010610740576001600160a01b038216801561072d576106b36106ae8360025461122c565b600255565b6001600160a01b0383165f90815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254916001600160d01b03808411610716576104d88383611fdc565b630e58ae9360e11b5f52600484905260245260445ffd5b63ec442f0560e01b5f525f60045260245ffd5b60405162461bcd60e51b815260206004820152601160248201527045786365656473206d6178537570706c7960781b6044820152606490fd5b3461029a57602036600319011261029a576104d860043533611740565b3461029a575f36600319011261029a576107af436119bd565b65ffffffffffff806107c0436119bd565b169116036108175761032a6040516107d96040826111fc565b601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015260405191829160208352602083019061029e565b6301bfc1c560e61b5f5260045ffd5b3461029a57602036600319011261029a576001600160a01b036108476103b0565b165f526008602052602060018060a01b0360405f205416604051908152f35b3461029a57602036600319011261029a576104d86108826103b0565b33611868565b3461029a57602036600319011261029a576001600160a01b036108a96103b0565b165f52600960205260405f205463ffffffff81116108d35760405163ffffffff9091168152602090f35b6306dfcc6560e41b5f52602060045260245260445ffd5b3461029a57602036600319011261029a57602061048d6109086103b0565b6001600160a01b03165f9081526020819052604090205490565b3461029a57604036600319011261029a576104d861093e6103b0565b6024359061094d823383611262565b611740565b3461029a57602036600319011261029a576001600160a01b036109736103b0565b165f526007602052602060405f2054604051908152f35b3461029a575f36600319011261029a57610a2e6109c67f0000000000000000000000000000000000000000000000000000000000000000611cee565b6109ef7f0000000000000000000000000000000000000000000000000000000000000000611d4e565b60206040516109fe82826111fc565b5f815281610a3c81830194601f198301368737604051978897600f60f81b895260e0858a015260e089019061029e565b90878203604089015261029e565b914660608701523060808701525f60a087015285830360c087015251918281520192915f5b828110610a7057505050500390f35b835185528695509381019392810192600101610a61565b3461029a57602036600319011261029a57610aa36004356116f9565b600a54905f829160058411610af2575b610abf9350600a611b68565b80610ad057506040515f8152602090f35b610aed610ade602092611732565b600a5f52825f20015460301c90565b6105b3565b9192610afd81611a0a565b810390811161063357610abf93600a5f5265ffffffffffff8260205f2001541665ffffffffffff8516105f14610b34575091610ab3565b929150610b409061121e565b90610ab3565b3461029a57604036600319011261029a57602060ff610b89600435610b696103c6565b905f52600b845260405f209060018060a01b03165f5260205260405f2090565b54166040519015158152f35b3461029a575f36600319011261029a576020610bb0436119bd565b65ffffffffffff60405191168152f35b3461029a575f36600319011261029a576040515f600454610be08161110e565b808452906001811690811561038c5750600114610c075761032a8361031e818503826111fc565b60045f9081527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b939250905b808210610c4b5750909150810160200161031e61030e565b919260018160209254838588010152019101909291610c33565b3461029a57602036600319011261029a576001600160a01b03610c866103b0565b165f526009602052602060018060d01b03610ca360405f206118e9565b16604051908152f35b3461029a575f36600319011261029a5760206040515f8152f35b3461029a57604036600319011261029a57610402610ce26103b0565b6024359033611330565b6064359060ff8216820361029a57565b6084359060ff8216820361029a57565b3461029a5760c036600319011261029a57610d256103b0565b60243590604435610d34610cec565b6084359060a43592804211610e095791610db99391610dab610db09460405160208101917fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf835260018060a01b038a1660408301528a6060830152608082015260808152610da360a0826111fc565b519020611913565b611d85565b90929192611e30565b6001600160a01b0381165f908152600760205260409020805460018101909155809303610dea576104d89250611868565b90506301d4b62360e61b5f5260018060a01b031660045260245260445ffd5b632341d78760e11b5f5260045260245ffd5b3461029a5760e036600319011261029a57610e346103b0565b610e3c6103c6565b6044359060643592610e4c610cfc565b60a43560c43590864211610f2c576001600160a01b0384165f908152600760205260409020805460018101909155610ef19390610eec909860405160208101917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9835260018060a01b0389169b8c604084015260018060a01b038b1660608401528b608084015260a083015260c082015260c08152610da360e0826111fc565b611939565b936001600160a01b03851603610f0b576104d89350611948565b6325c0072360e11b5f526001600160a01b038085166004521660245260445ffd5b8663313c898160e11b5f5260045260245ffd5b3461029a575f36600319011261029a5760206040517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b3461029a57604036600319011261029a576104d8600435610f986103c6565b90610fb26104ce825f52600b602052600160405f20015490565b611671565b3461029a575f36600319011261029a5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b3461029a57604036600319011261029a57602061103f61100f6103b0565b6110176103c6565b6001600160a01b039182165f9081526001855260408082209290931681526020919091522090565b54604051908152f35b3461029a57604036600319011261029a576110616103b0565b6024359063ffffffff8216820361029a5761032a916110b09161108261124a565b5061108b61124a565b506001600160a01b03165f9081526009602052604090206110aa61124a565b50611eac565b50604051906110be826111db565b5465ffffffffffff811680835260309190911c60209283019081526040805192835290516001600160d01b031692820192909252918291820190565b634e487b7160e01b5f52601160045260245ffd5b90600182811c9216801561113c575b602083101461112857565b634e487b7160e01b5f52602260045260245ffd5b91607f169161111d565b5f92918154916111558361110e565b80835292600181169081156111aa575060011461117157505050565b5f9081526020812093945091925b838310611190575060209250010190565b60018160209294939454838587010152019101919061117f565b915050602093945060ff929192191683830152151560051b010190565b634e487b7160e01b5f52604160045260245ffd5b6040810190811067ffffffffffffffff8211176111f757604052565b6111c7565b90601f8019910116810190811067ffffffffffffffff8211176111f757604052565b906001820180921161063357565b9190820180921161063357565b604051906112486040836111fc565b565b60405190611257826111db565b5f6020838281520152565b6001600160a01b039081165f81815260016020908152604080832094861683529390529190912091929091545f19811061129d575b50505050565b81811061130f5782156112fc576001600160a01b038416156112e9576112df925f526001602052039160405f209060018060a01b03165f5260205260405f2090565b555f808080611297565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b83637dc7a0d960e11b5f5260018060a01b031660045260245260445260645ffd5b6001600160a01b038116939291908415611409576001600160a01b038216801561072d576001600160a01b0382165f90815260208190526040902054958487106113e357846112489697036113948460018060a01b03165f525f60205260405f2090565b556001600160a01b0384165f9081526020819052604090208054860190556040518581527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a3612055565b63391434e360e21b5f526001600160a01b0383166004526024879052604485905260645ffd5b634b637e8f60e11b5f525f60045260245ffd5b335f9081527ff70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8602052604090205460ff161561145457565b63e2517d3f60e01b5f52336004527f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660245260445ffd5b5f818152600b6020908152604080832033845290915290205460ff16156114af5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff1661154f575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916600117905533916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b50505f90565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161480611648575b156115b0577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815261164260c0826111fc565b51902090565b507f00000000000000000000000000000000000000000000000000000000000000004614611587565b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff161561154f575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916905533916001600160a01b0316907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4600190565b65ffffffffffff611709436119bd565b168082101561171c57506102d3906119bd565b90637669fc0f60e11b5f5260045260245260445ffd5b5f1981019190821161063357565b6001600160a01b038116908115611409576001600160a01b0381165f90815260208190526040902054838110611843579061179284611248959493039160018060a01b03165f525f60205260405f2090565b5581600254036002555f817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180602081018782520390a3801561182b575b6117e46117df83611ed5565b611fa7565b50505f908152600860205260408120549080527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7546001600160a01b039081169116611bcc565b61183c61183783611ed5565b611f72565b50506117d3565b63391434e360e21b5f526001600160a01b03909116600452602452604482905260645ffd5b6001600160a01b038181165f81815260086020526040812080548685166001600160a01b031982168117909255611248969416946118e39390928691907f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9080a46001600160a01b03165f9081526020819052604090205490565b91611bcc565b805490816118f75750505f90565b815f19810111610633575f525f199060205f2001015460301c90565b60429061191e611555565b906040519161190160f01b8352600283015260228201522090565b916102d39391610db093611d85565b6001600160a01b03169081156112fc576001600160a01b0381169283156112e957806119b07f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92593855f52600160205260405f209060018060a01b03165f5260205260405f2090565b55604051908152602090a3565b65ffffffffffff81116119d55765ffffffffffff1690565b6306dfcc6560e41b5f52603060045260245260445ffd5b81156119f6570490565b634e487b7160e01b5f52601260045260245ffd5b60018111156102d357806001600160801b821015611b2b575b611ad1611ac7611abd611ab3611aa9611a9f611a8e611ad89760048a600160401b611add9c1015611b1e575b640100000000811015611b11575b62010000811015611b04575b610100811015611af7575b6010811015611aea575b1015611ae2575b60030260011c90565b611a98818b6119ec565b0160011c90565b611a98818a6119ec565b611a9881896119ec565b611a9881886119ec565b611a9881876119ec565b611a9881866119ec565b80936119ec565b821190565b900390565b60011b611a85565b60041c9160021b91611a7e565b60081c9160041b91611a74565b60101c9160081b91611a69565b60201c9160101b91611a5d565b60401c9160201b91611a4f565b5050611add611ad8611ad1611ac7611abd611ab3611aa9611a9f611a8e611b528a60801c90565b9850600160401b9750611a239650505050505050565b91905b838210611b785750505090565b9091928083169080841860011c820180921161063357845f5265ffffffffffff8260205f2001541665ffffffffffff8416105f14611bba5750925b9190611b6b565b939250611bc69061121e565b91611bb3565b6001600160a01b03808316939291908116908185141580611ce5575b611bf4575b5050505050565b81611c78575b505082611c09575b8080611bed565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72491611c5591611c4f9091611ed5565b90611f3e565b604080516001600160d01b039384168152919092166020820152a25f8080611c02565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72490611cc390611cbd86611ed5565b90611f06565b604080516001600160d01b039384168152919092166020820152a25f80611bfa565b50831515611be8565b60ff8114611d345760ff811690601f8211611d255760405191611d126040846111fc565b6020808452838101919036833783525290565b632cd44ac360e21b5f5260045ffd5b506040516102d381611d47816005611146565b03826111fc565b60ff8114611d725760ff811690601f8211611d255760405191611d126040846111fc565b506040516102d381611d47816006611146565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611e07579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15611dfc575f516001600160a01b03811615611df257905f905f90565b505f906001905f90565b6040513d5f823e3d90fd5b5050505f9160039190565b60041115611e1c57565b634e487b7160e01b5f52602160045260245ffd5b611e3981611e12565b80611e42575050565b611e4b81611e12565b60018103611e625763f645eedf60e01b5f5260045ffd5b611e6b81611e12565b60028103611e86575063fce698f760e01b5f5260045260245ffd5b80611e92600392611e12565b14611e9a5750565b6335e2f38360e21b5f5260045260245ffd5b8054821015611ec1575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b6001600160d01b038111611eef576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b90611f10436119bd565b90611f1a836118e9565b6001600160d01b03918216908216039190821161063357611f3a92612126565b9091565b90611f48436119bd565b90611f52836118e9565b6001600160d01b03918216908216019190821161063357611f3a92612126565b611f7b436119bd565b90611f86600a6118e9565b6001600160d01b039182169082160190811161063357611f3a91600a612126565b611fb0436119bd565b90611fbb600a6118e9565b6001600160d01b039182169082160390811161063357611f3a91600a612126565b9061124891611fed61183783611ed5565b50506001600160a01b03168015612042575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116611bcc565b61204e6117df83611ed5565b5050611fff565b61124892916001600160a01b039091169081156120b8575b6001600160a01b03169081156120a5575b5f90815260086020526040808220549282529020546001600160a01b039081169116611bcc565b6120b16117df84611ed5565b505061207e565b6120c461183784611ed5565b505061206d565b8054600160401b8110156111f7576120e891600182018155611eac565b61211357815160209092015160301b65ffffffffffff191665ffffffffffff92909216919091179055565b634e487b7160e01b5f525f60045260245ffd5b805492939280156121d25761213d61214891611732565b825f5260205f200190565b8054603081901c9365ffffffffffff918216929181168084116121c35787930361218f575061218b92509065ffffffffffff82549181199060301b169116179055565b9190565b91505061218b916121af6121a1611239565b65ffffffffffff9093168352565b6001600160d01b03861660208301526120cb565b632520601d60e01b5f5260045ffd5b50906121f7916121e36121a1611239565b6001600160d01b03851660208301526120cb565b5f919056fea2646970667358221220724a99f39883839b8a6caeea4e751a074b4678b88aa32240c1a40d4f5766ec9a64736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0dc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a7df7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76f70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"
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
      "bytecode": "0x60806040523461033e57611c296020813803918261001c81610342565b93849283398101031261033e57516001600160a01b038116810361033e576100446040610342565b90600f82526e111bdb985d1a5bdb949958d95a5c1d608a1b602083015261006b6040610342565b600b81526a10949051d49150d152541560aa1b602082015282519091906001600160401b038111610252575f54600181811c91168015610334575b602082101461023457601f81116102d2575b506020601f821160011461027157819293945f92610266575b50508160011b915f199060031b1c1916175f555b8151916001600160401b03831161025257600154600181811c91168015610248575b602082101461023457601f81116101d1575b50602090601f84116001146101695761014e93915f918361015e575b50508160011b915f199060031b1c191617600155610367565b5060405161181890816103f18239f35b015190505f80610135565b90601f1984169160015f52815f20925f5b8181106101b9575091600193918661014e9794106101a1575b505050811b01600155610367565b01515f1960f88460031b161c191690555f8080610193565b9293602060018192878601518155019501930161017a565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f850160051c8101916020861061022a575b601f0160051c01905b81811061021f5750610119565b5f8155600101610212565b9091508190610209565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610107565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100d1565b601f198216905f8052805f20915f5b8181106102ba575095836001959697106102a2575b505050811b015f556100e5565b01515f1960f88460031b161c191690555f8080610295565b9192602060018192868b015181550194019201610280565b5f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f830160051c8101916020841061032a575b601f0160051c01905b81811061031f57506100b8565b5f8155600101610312565b9091508190610309565b90607f16906100a6565b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761025257604052565b6001600160a01b0381165f9081525f516020611c095f395f51905f52602052604090205460ff166103eb576001600160a01b03165f8181525f516020611c095f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a714610ed55750806306fdde0314610e33578063081812fc14610df7578063095ea7b314610d0d5780630f7ee1ec14610ca657806323b872dd14610c8f578063248a9ca314610c5c5780632f2ff15d14610c1e57806336568abe14610bda57806342842e0e14610bab5780636352211e14610b7b57806370a0823114610b2a57806391d1485414610ae157806395d89b4114610a03578063a217fddf146109e9578063a22cb46514610961578063b63e6ac314610896578063b88d4fde14610828578063c87b56dd146107cf578063cf456ae71461075c578063d3fc9864146101f0578063d5391393146101c8578063d547741f146101805763e985e9c514610126575f80fd5b3461017d57604036600319011261017d576040610141610f7e565b9161014a610f94565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b80fd5b503461017d57604036600319011261017d576101c46004356101a0610f94565b906101bf6101ba825f526006602052600160405f20015490565b6113f9565b6115e8565b5080f35b503461017d578060031936011261017d5760206040515f5160206117c35f395f51905f528152f35b503461017d57606036600319011261017d5761020a610f7e565b60443560243567ffffffffffffffff821161075857366023830112156107585781600401359367ffffffffffffffff851161017d57366024868501011161017d57335f9081525f5160206117a35f395f51905f52602052604090205460ff161561073457600754925f1984146107205760018401600755600360405161028f81610fe2565b6001600160a01b038716808252602082018681524260408401908152919990946102bd913691602401611159565b60608301908152878652600860205260408620925183546001600160a01b0319166001600160a01b03919091161783559351600183015551600282015591518051919092019167ffffffffffffffff821161070c57819061031e8454610faa565b601f81116106bc575b50602090601f831160011461065a57859261064f575b50508160011b915f199060031b1c19161790555b602093604051916103628684611012565b808352861561063b575f8581526002875260409020546001600160a01b0316151580610633575b6105c8575f8581526002875260409020546001600160a01b03168015159081610597575b885f526003885260405f2060018154019055865f526002885260405f20896bffffffffffffffffffffffff60a01b8254161790558689827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a45061058357503b610449575b50817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea5848693604051908152a3604051908152f35b836104829160405180938192630a85bd0160e11b83523360048401525f6024840152876044840152608060648401526084830190610f5a565b03815f895af15f918161053f575b506104e7575050503d5f146104df573d906104aa8261113d565b916104b86040519384611012565b82523d5f8284013e5b815191826104dc5783633250574960e11b5f5260045260245ffd5b01fd5b6060906104c1565b929391926001600160e01b03191663757a42ff60e11b0161052c577f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea593929193610414565b50633250574960e11b5f5260045260245ffd5b9091508481813d831161057c575b6105578183611012565b8101031261057857516001600160e01b03198116810361057857905f610490565b5f80fd5b503d61054d565b6339e3563760e11b81526004819052602490fd5b5f8781526004602052604080822080546001600160a01b031916905582825260038a52902080545f190190556103ad565b60405162461bcd60e51b815260048101879052603d60248201527f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f60448201527f756e6420616e642063616e6e6f74206265207472616e736665727265640000006064820152608490fd5b506001610389565b633250574960e11b81526004819052602490fd5b015190505f8061033d565b8486528186209250601f198416865b8181106106a4575090846001959493921061068c575b505050811b019055610351565b01515f1960f88460031b161c191690555f808061067f565b92936020600181928786015181550195019301610669565b90915083855260208520601f840160051c81019160208510610702575b90601f859493920160051c01905b8181106106f45750610327565b8681558493506001016106e7565b90915081906106d9565b634e487b7160e01b84526041600452602484fd5b634e487b7160e01b82526011600452602482fd5b63e2517d3f60e01b5f52336004525f5160206117c35f395f51905f5260245260445ffd5b8380fd5b503461017d5761076b3661110e565b335f9081527f54cdd369e4e8a8515e52ca72ec816c2101831ad1f18bf44102ed171459c9b4f8602052604090205460ff16156107b857156107af576101c490611433565b6101c490611557565b63e2517d3f60e01b5f52336004525f60245260445ffd5b34610578576020366003190112610578576107eb6004356113c5565b505f6040516107fb602082611012565b5261082460405161080d602082611012565b5f8152604051918291602083526020830190610f5a565b0390f35b3461057857608036600319011261057857610841610f7e565b610849610f94565b906044356064359267ffffffffffffffff8411610578573660238501121561057857610882610894943690602481600401359101611159565b9261088e83838361118f565b3361166c565b005b34610578576020366003190112610578576004356060806040516108b981610fe2565b5f81525f60208201525f604082015201526108d3816113c5565b505f52600860205260405f206040516108eb81610fe2565b81546001600160a01b031681526001820154602082019081526002830154604083019081529092610824919061092390600301611034565b90606084019182526040519485946020865260018060a01b0390511660208601525160408501525160608401525160808084015260a0830190610f5a565b346105785761096f3661110e565b6001600160a01b039091169081156109d657335f52600560205260405f20825f5260205260405f209015159060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b34610578575f3660031901126105785760206040515f8152f35b34610578575f366003190112610578576040515f600154610a2381610faa565b8084529060018116908115610abd5750600114610a5f575b61082483610a4b81850382611012565b604051918291602083526020830190610f5a565b60015f9081527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b808210610aa357509091508101602001610a4b610a3b565b919260018160209254838588010152019101909291610a8b565b60ff191660208086019190915291151560051b84019091019150610a4b9050610a3b565b3461057857604036600319011261057857610afa610f94565b6004355f52600660205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610578576020366003190112610578576001600160a01b03610b4b610f7e565b168015610b68575f526003602052602060405f2054604051908152f35b6322718ad960e21b5f525f60045260245ffd5b34610578576020366003190112610578576020610b996004356113c5565b6040516001600160a01b039091168152f35b3461057857610894610bbc366110d4565b9060405192610bcc602085611012565b5f845261088e83838361118f565b3461057857604036600319011261057857610bf3610f94565b336001600160a01b03821603610c0f57610894906004356115e8565b63334bd91960e11b5f5260045ffd5b3461057857604036600319011261057857610894600435610c3d610f94565b90610c576101ba825f526006602052600160405f20015490565b6114cb565b34610578576020366003190112610578576020610c876004355f526006602052600160405f20015490565b604051908152f35b3461057857610894610ca0366110d4565b9161118f565b34610578576020366003190112610578576004355f52600860205260405f2060018060a01b03815416610824600183015492610ce9600360028301549201611034565b90604051948594855260208501526040840152608060608401526080830190610f5a565b3461057857604036600319011261057857610d26610f7e565b602435610d32816113c5565b33151580610de4575b80610db7575b610da45781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff1615610d41565b506001600160a01b038116331415610d3b565b3461057857602036600319011261057857600435610e14816113c5565b505f526004602052602060018060a01b0360405f205416604051908152f35b34610578575f366003190112610578576040515f5f54610e5281610faa565b8084529060018116908115610abd5750600114610e795761082483610a4b81850382611012565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b808210610ebb57509091508101602001610a4b610a3b565b919260018160209254838588010152019101909291610ea3565b34610578576020366003190112610578576004359063ffffffff60e01b821680920361057857602091637965db0b60e01b8114908115610f17575b5015158152f35b6380ac58cd60e01b811491508115610f49575b8115610f38575b5083610f10565b6301ffc9a760e01b14905083610f31565b635b5e139f60e01b81149150610f2a565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361057857565b602435906001600160a01b038216820361057857565b90600182811c92168015610fd8575b6020831014610fc457565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610fb9565b6080810190811067ffffffffffffffff821117610ffe57604052565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff821117610ffe57604052565b9060405191825f82549261104784610faa565b80845293600181169081156110b2575060011461106e575b5061106c92500383611012565b565b90505f9291925260205f20905f915b81831061109657505090602061106c928201015f61105f565b602091935080600191548385890101520191019091849261107d565b90506020925061106c94915060ff191682840152151560051b8201015f61105f565b6060906003190112610578576004356001600160a01b038116810361057857906024356001600160a01b0381168103610578579060443590565b6040906003190112610578576004356001600160a01b0381168103610578579060243580151581036105785790565b67ffffffffffffffff8111610ffe57601f01601f191660200190565b9291926111658261113d565b916111736040519384611012565b829481845281830111610578578281602093845f960137010152565b6001600160a01b03909116919082156113b2575f828152600260205260409020546001600160a01b03161515806113aa575b61133f575f828152600260205260409020546001600160a01b0316928290331515806112aa575b5084611277575b805f52600360205260405f2060018154019055815f52600260205260405f20816bffffffffffffffffffffffff60a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b031680830361125f57505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f1981540190556111ef565b909150806112ee575b156112c05782905f6111e8565b82846112d857637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b50338414801561131d575b806112b357505f838152600460205260409020546001600160a01b031633146112b3565b505f84815260056020908152604080832033845290915290205460ff166112f9565b60405162461bcd60e51b815260206004820152603d60248201527f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f60448201527f756e6420616e642063616e6e6f74206265207472616e736665727265640000006064820152608490fd5b5060016111c1565b633250574960e11b5f525f60045260245ffd5b5f818152600260205260409020546001600160a01b03169081156113e7575090565b637e27328960e01b5f5260045260245ffd5b5f81815260066020908152604080832033845290915290205460ff161561141d5750565b63e2517d3f60e01b5f523360045260245260445ffd5b6001600160a01b0381165f9081525f5160206117a35f395f51905f52602052604090205460ff166114c6576001600160a01b03165f8181525f5160206117a35f395f51905f5260205260408120805460ff191660011790553391905f5160206117c35f395f51905f52907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b505f90565b5f8181526006602090815260408083206001600160a01b038616845290915290205460ff16611551575f8181526006602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b6001600160a01b0381165f9081525f5160206117a35f395f51905f52602052604090205460ff16156114c6576001600160a01b03165f8181525f5160206117a35f395f51905f5260205260408120805460ff191690553391905f5160206117c35f395f51905f52907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b5f8181526006602090815260408083206001600160a01b038616845290915290205460ff1615611551575f8181526006602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b823b61167a575b5050505050565b604051630a85bd0160e11b81526001600160a01b0391821660048201529181166024830152604482019390935260806064820152911691602090829081906116c6906084830190610f5a565b03815f865af15f918161175d575b5061172957503d15611722573d6116ea8161113d565b906116f86040519283611012565b81523d5f602083013e5b8051908161171d5782633250574960e11b5f5260045260245ffd5b602001fd5b6060611702565b6001600160e01b03191663757a42ff60e11b0161174b57505f80808080611673565b633250574960e11b5f5260045260245ffd5b9091506020813d60201161179a575b8161177960209383611012565b8101031261057857516001600160e01b03198116810361057857905f6116d4565b3d915061176c56fe3195c024b2ddd6d9b8f6c836aa52f67fe69376c8903d009b80229b3ce4425f519f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a264697066735822122051bb57325165583212b6bd055398442ecfa7dce3b48a7a4546b152e45fd22b9964736f6c634300081c003354cdd369e4e8a8515e52ca72ec816c2101831ad1f18bf44102ed171459c9b4f8"
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
      "bytecode": "0x60803461007257601f610fcf38819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007257516001600160a01b0381168103610072578061005c6100629261008a565b50610100565b50604051610ddb90816101948239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381165f9081525f516020610faf5f395f51905f52602052604090205460ff166100fb576001600160a01b03165f8181525f516020610faf5f395f51905f5260205260408120805460ff191660011790553391905f516020610f6f5f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f516020610f8f5f395f51905f52602052604090205460ff166100fb576001600160a01b03165f8181525f516020610f8f5f395f51905f5260205260408120805460ff191660011790553391907f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea09905f516020610f6f5f395f51905f529080a460019056fe6080806040526004361015610012575f80fd5b5f3560e01c90816301ffc9a71461098457508063248a9ca3146109525780632f2ff15d1461091557806336568abe146108d157806374d4e491146108b457806390229af7146107cb57806391d1485414610783578063a217fddf14610769578063a622ee7c146106d6578063b9209e3314610699578063ceb68c23146105e5578063d42b291c14610185578063d547741f14610141578063d7bfe386146100ff5763e7705db6146100c1575f80fd5b346100fb575f3660031901126100fb5760206040517f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea098152f35b5f80fd5b346100fb5760203660031901126100fb576004356002548110156100fb57610128602091610b78565b905460405160039290921b1c6001600160a01b03168152f35b346100fb5760403660031901126100fb576101836004356101606109d7565b9061017e610179825f525f602052600160405f20015490565b610c65565b610d25565b005b346100fb5760803660031901126100fb5761019e6109ed565b60243560058110156100fb5760443567ffffffffffffffff81116100fb576101ca903690600401610b4a565b60649291923567ffffffffffffffff81116100fb576101ed903690600401610b4a565b9390946101f8610bf6565b6001600160a01b03169384156105ae57845f52600160205260ff60405f20541615610569575b6040519061022b82610a6c565b6001825261025b6020830197610241878a610ba4565b61024c368787610bb0565b92604085019384523691610bb0565b9660608301978852865f52600160205260405f209251151560ff8019855416911617835551600581101561055557825461ff00191660089190911b61ff0016178255518051600183019167ffffffffffffffff821161048a576102be8354610a34565b601f8111610510575b50602090601f83116001146104a9576002949392915f918361049e575b50508160011b915f199060031b1c19161790555b01945194855167ffffffffffffffff811161048a576103178254610a34565b601f8111610445575b506020601f82116001146103b757928492826060969361038598967f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec89a9b5f926103ac575b50508160011b915f199060031b1c19161790555b60405195868095610a03565b60406020850152816040850152848401375f828201840152601f01601f19168101030190a2005b015190508b80610365565b601f19821697835f52815f20985f5b81811061042d5750837f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec8999a61038599979489979460609a9760019510610415575b505050811b019055610379565b01515f1960f88460031b161c191690558b8080610408565b838301518b556001909a0199602093840193016103c6565b825f5260205f20601f830160051c81019160208410610480575b601f0160051c01905b8181106104755750610320565b5f8155600101610468565b909150819061045f565b634e487b7160e01b5f52604160045260245ffd5b015190508a806102e4565b90601f19831691845f52815f20925f5b8181106104f85750916001939185600298979694106104e0575b505050811b0190556102f8565b01515f1960f88460031b161c191690558a80806104d3565b929360206001819287860151815501950193016104b9565b835f5260205f20601f840160051c8101916020851061054b575b601f0160051c01905b81811061054057506102c7565b5f8155600101610533565b909150819061052a565b634e487b7160e01b5f52602160045260245ffd5b6002546801000000000000000081101561048a5780600161058d9201600255610b78565b81546001600160a01b0360039290921b91821b19169087901b17905561021e565b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b346100fb5760203660031901126100fb576105fe6109ed565b610606610bf6565b6001600160a01b03165f8181526001602052604090205460ff161561065f57805f52600160205260405f2060ff1981541690557fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a5f80a2005b60405162461bcd60e51b815260206004820152601260248201527115985d5b1d081b9bdd081d995c9a599a595960721b6044820152606490fd5b346100fb5760203660031901126100fb576001600160a01b036106ba6109ed565b165f526001602052602060ff60405f2054166040519015158152f35b346100fb5760203660031901126100fb576001600160a01b036106f76109ed565b165f52600160205261074660405f20610765815491610757610727600261072060018501610aaa565b9301610aaa565b91604051958560ff8897161515875260ff602088019160081c16610a03565b608060408601526080850190610a10565b908382036060850152610a10565b0390f35b346100fb575f3660031901126100fb5760206040515f8152f35b346100fb5760403660031901126100fb5761079c6109d7565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346100fb5760203660031901126100fb576107e46109ed565b6060806040516107f381610a6c565b5f81525f6020820152816040820152015260018060a01b03165f52600160205260405f2060405161082381610a6c565b61076582549260ff84161515835261084560ff602085019560081c1685610ba4565b6108a1610867600261085960018501610aaa565b936040870194855201610aaa565b916060850192835261088f604051968796602088525115156020880152516040870190610a03565b516080606086015260a0850190610a10565b9051838203601f19016080850152610a10565b346100fb575f3660031901126100fb576020600254604051908152f35b346100fb5760403660031901126100fb576108ea6109d7565b336001600160a01b038216036109065761018390600435610d25565b63334bd91960e11b5f5260045ffd5b346100fb5760403660031901126100fb576101836004356109346109d7565b9061094d610179825f525f602052600160405f20015490565b610c9d565b346100fb5760203660031901126100fb57602061097c6004355f525f602052600160405f20015490565b604051908152f35b346100fb5760203660031901126100fb576004359063ffffffff60e01b82168092036100fb57602091637965db0b60e01b81149081156109c6575b5015158152f35b6301ffc9a760e01b149050836109bf565b602435906001600160a01b03821682036100fb57565b600435906001600160a01b03821682036100fb57565b9060058210156105555752565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b90600182811c92168015610a62575b6020831014610a4e57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610a43565b6080810190811067ffffffffffffffff82111761048a57604052565b90601f8019910116810190811067ffffffffffffffff82111761048a57604052565b9060405191825f825492610abd84610a34565b8084529360018116908115610b285750600114610ae4575b50610ae292500383610a88565b565b90505f9291925260205f20905f915b818310610b0c575050906020610ae2928201015f610ad5565b6020919350806001915483858901015201910190918492610af3565b905060209250610ae294915060ff191682840152151560051b8201015f610ad5565b9181601f840112156100fb5782359167ffffffffffffffff83116100fb57602083818601950101116100fb57565b600254811015610b905760025f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b60058210156105555752565b92919267ffffffffffffffff821161048a5760405191610bda601f8201601f191660200184610a88565b8294818452818301116100fb578281602093845f960137010152565b335f9081527f1da0b5176dfe03406af5a6eed66ca01dda9b45ac4da671c3fa379cb93717ef81602052604090205460ff1615610c2e57565b63e2517d3f60e01b5f52336004527f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0960245260445ffd5b5f8181526020818152604080832033845290915290205460ff1615610c875750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16610d1f575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615610d1f575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a460019056fea264697066735822122050f2d659903546714f419e1df4198039677828e905020b3dded1aac049c89bf064736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d1da0b5176dfe03406af5a6eed66ca01dda9b45ac4da671c3fa379cb93717ef81ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034607057601f611a9838819003918201601f19168301916001600160401b03831184841017607457808492602094604052833981010312607057516001600160a01b0381169081900360705760015f5560018060a01b03196001541617600155604051611a0f90816100898239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a7146115065750806304126196146114c2578063150b7a02146112555780632ff1d0f9146110a657806335f81b8714610ec0578063380ff99914610e775780636f39becd14610e2b5780637b10399914610e0257806381bd34d214610db9578063bc197c8114610aaf578063c2fe51851461090b578063d6bd07ee146106ac578063d7423858146104be578063f07a380e146103735763f23a6e61146100c3575f80fd5b346103705760a0366003190112610370576100dc611559565b506100e561156f565b606435919060443560843567ffffffffffffffff81116102c35761010d9036906004016115ed565b61011561196f565b8284938251602081145f14610330575060015460405163b9209e3360e01b81526001600160a01b0392831660048201529160209183916024918391165afa9081156103255786916102e7575b50156102c757506020818051810103126102c3576001600160a01b039061018a906020016116d5565b16915b3384526003602052604084208285526020526040842060018060a01b0384165f5260205260405f206101c0868254611713565b905580156102bb576101d29042611713565b935b3384526005602052604084208285526020526040842060018060a01b0384165f526020528460405f205560248460018060a01b0360015416604051928380926390229af760e01b82523060048301525afa9081156102b0579560407f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3592600198889161028e575b500151946102786040519283928a8060a01b031697339684611911565b0390a45560405163f23a6e6160e01b8152602090f35b6102aa91503d808a833e6102a2818361159b565b81019061177a565b5f61025b565b6040513d87823e3d90fd5b5082936101d4565b8380fd5b9250602081519181808201938492010103126102e3575161018d565b5f80fd5b90506020813d60201161031d575b816103026020938361159b565b810103126103195761031390611706565b5f610161565b8580fd5b3d91506102f5565b6040513d88823e3d90fd5b90506040819593929514610346575b505061018d565b92935061035c92810160209081019250016116e9565b6001600160a01b0390911691905f8061033f565b80fd5b50346103705760403660031901126103705761038d611559565b6024359061039961196f565b60018060a01b0316908183526002602052604083208184526020526103cb60018060a01b036040852054163314611933565b8183526004602052604083208184526020526103ed6040842054421015611890565b818352600260205260408320818452602052604083206bffffffffffffffffffffffff60a01b8154169055818352600460205260408320818452602052826040812055813b156104af5782604051632142170760e11b8152306004820152336024820152826044820152818160648183885af180156104b35761049a575b505033917f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c068480a46001815580f35b816104a49161159b565b6104af57825f61046b565b8280fd5b6040513d84823e3d90fd5b5034610370576104cd36611633565b916104d661196f565b60018060a01b031680845260026020526040842082855260205261050760018060a01b036040862054163314611933565b60015460405163b9209e3360e01b81526001600160a01b039485166004820181905294909160209183916024918391165afa80156102b057859061066d575b610550915061198d565b8084526004602052604084208285526020526105726040852054421015611890565b808452600260205260408420828552602052604084206bffffffffffffffffffffffff60a01b815416905580845260046020526040842082855260205283604081205583604051336020820152602081526105ce60408261159b565b823b15610669578161060e9160405180938192635c46a7ef60e11b8352306004840152896024840152886044840152608060648401526084830190611829565b038183875af180156104b357610654575b50506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a46001815580f35b8161065e9161159b565b6102c357835f61061f565b5080fd5b506020813d6020116106a4575b816106876020938361159b565b810103126106a05761069b61055091611706565b610546565b8480fd5b3d915061067a565b5034610370576080366003190112610370576106c6611559565b602435604435916106d5611585565b906106de61196f565b6001600160a01b03168085526003602090815260408087208588528252808720335f90815292529020549091906107179085111561184d565b60015460405163b9209e3360e01b81526001600160a01b039283166004820181905292909160209183916024918391165afa80156103255786906108d0575b610760915061198d565b8185526005602090815260408087208588528252808720335f908152925290205461078d90421015611890565b8185526003602052604085208386526020526040852060018060a01b0333165f5260205260405f206107c08582546118dc565b90558185526003602090815260408087208588528252808720335f9081529252902054156108a8575b846040513360208201526020815261080260408261159b565b833b1561066957816108489160405180938192637921219560e11b83523060048401528760248401528960448401528a606484015260a0608484015260a4830190611829565b038183885af180156104b357610893575b505060405193845260208401527fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd160403394a46001815580f35b8161089d9161159b565b6106a057845f610859565b8185526005602090815260408087208588528252808720335f908152925290208590556107e9565b506020813d602011610903575b816108ea6020938361159b565b81010312610319576108fe61076091611706565b610756565b3d91506108dd565b503461037057608036600319011261037057610925611559565b6044356001600160a01b03811691602435918390036102c357836064359161094b61196f565b60018060a01b03169182825260026020526040822084835260205261097d60018060a01b036040842054163314611933565b60015460405163b9209e3360e01b81526004810187905290602090829060249082906001600160a01b03165afa8015610aa4578390610a69575b6109c1915061198d565b8282526004602052604082208483526020526109e36040832054421015611890565b828252600260209081526040808420868552825280842080546001600160a01b03191690558484526004825280842086855290915282208290558015610a4b5760408051336020820152908101919091526105ce81606081015b03601f19810183528261159b565b5060405133602082015260208152610a6460408261159b565b6105ce565b506020813d602011610a9c575b81610a836020938361159b565b810103126104af57610a976109c191611706565b6109b7565b3d9150610a76565b6040513d85823e3d90fd5b50346103705760a036600319011261037057610ac9611559565b50610ad261156f565b9060443567ffffffffffffffff811161066957610af390369060040161166d565b60643567ffffffffffffffff81116104af57610b1390369060040161166d565b60843567ffffffffffffffff81116102c357610b339036906004016115ed565b93610b3c61196f565b8084918651602081145f14610d7a575060015460405163b9209e3360e01b81526001600160a01b0392831660048201529160209183916024918391165afa908115610325578691610d40575b5015610d2157506020858051810103126102c3576024946001600160a01b0390610bb4906020016116d5565b16905b8015610d1a57610bc79042611713565b6001546040516390229af760e01b815230600482015296869188919082906001600160a01b03165afa9586156102b0576001966040918791610d00575b50015193855b8151811015610ceb5780610c1f8992876118e9565b51338952600360205260408920610c3683866118e9565b518a5260205260408920838060a01b0387165f52602052610c5c60405f20918254611713565b9055338852600560205260408820610c7482856118e9565b51895260205260408820828060a01b0386165f526020528360405f205586610c9c82856118e9565b51610ca783896118e9565b517f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3560405180610ce28a898060a01b038d1697339684611911565b0390a401610c0a565b87875560405163bc197c8160e01b8152602090f35b610d1491503d8089833e6102a2818361159b565b5f610c04565b5083610bc7565b9050602085519581808201978892010103126102e35760249451610bb7565b90506020813d602011610d72575b81610d5b6020938361159b565b8101031261031957610d6c90611706565b5f610b88565b3d9150610d4e565b602497915060408194939414610d92575b5050610bb7565b610da69350810160209081019250016116e9565b6001600160a01b03909116905f80610d8b565b5034610370576040610dca36611633565b939160018060a01b031682526003602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346103705780600319360112610370576001546040516001600160a01b039091168152602090f35b5034610370576040366003190112610370576020906001600160a01b03610e50611559565b168152600282526040812060243582528252604060018060a01b0391205416604051908152f35b5034610370576040610e8836611633565b939160018060a01b031682526005602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346103705760a036600319011261037057610eda611559565b60243560443591610ee9611585565b8460843592610ef661196f565b6001600160a01b03168082526003602090815260408084208785528252808420335f9081529252902054909390610f2f9087111561184d565b60015460405163b9209e3360e01b81526001600160a01b039485166004820181905294909160209183916024918391165afa8015610aa457839061106b575b610f78915061198d565b8382526005602090815260408084208785528252808420335f9081529252902054610fa590421015611890565b8382526003602052604082208583526020526040822060018060a01b0333165f5260205260405f20610fd88782546118dc565b90558382526003602090815260408084208785528252808420335f908152925290205415611043575b80156110255760408051336020820152908101919091526108028160608101610a3d565b506040513360208201526020815261103e60408261159b565b610802565b8382526005602090815260408084208785528252808420335f90815292529020829055611001565b506020813d60201161109e575b816110856020938361159b565b810103126104af57611099610f7891611706565b610f6e565b3d9150611078565b50346102e35760603660031901126102e3576110c0611559565b602435604435916110cf61196f565b6001600160a01b03165f81815260036020908152604080832085845282528083203384529091529020546111059084111561184d565b5f818152600560209081526040808320858452825280832033845290915290205461113290421015611890565b805f52600360205260405f20825f5260205260405f2060018060a01b0333165f5260205260405f206111658482546118dc565b90555f81815260036020908152604080832085845282528083203384529091529020541561122f575b803b156102e357604051637921219560e11b815230600482015233602482015282604482015283606482015260a060848201525f60a48201525f8160c48183865af180156112245761120f575b506040519283527fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a46001815580f35b61121c9194505f9061159b565b5f925f6111db565b6040513d5f823e3d90fd5b5f818152600560209081526040808320858452825280832033845290915281205561118e565b346102e35760803660031901126102e35761126e611559565b5061127761156f565b60443560643567ffffffffffffffff81116102e35761129a9036906004016115ed565b6112a261196f565b825f938251602081145f14611482575060015460405163b9209e3360e01b81526001600160a01b0392831660048201529160209183916024918391165afa908115611224575f91611448575b501561142c57506020818051810103126102e3576001600160a01b0390611317906020016116d5565b16915b335f908152600260209081526040808320858452909152902080546001600160a01b0319166001600160a01b03909416938417905580156114255761135f9042611713565b335f52600460205260405f20825f526020528060405f205560245f60018060a01b0360015416604051928380926390229af760e01b82523060048301525afa908115611224577f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad3916040915f9161140b575b5001516113e960405191604083526040830190611829565b9260208201528033930390a460015f55604051630a85bd0160e11b8152602090f35b61141f91503d805f833e6102a2818361159b565b866113d1565b505f61135f565b9250602081519181808201938492010103126102e3575161131a565b90506020813d60201161147a575b816114636020938361159b565b810103126102e35761147490611706565b856112ee565b3d9150611456565b90506040819593929514611498575b505061131a565b9293506114ae92810160209081019250016116e9565b6001600160a01b0390911691908380611491565b346102e35760403660031901126102e3576001600160a01b036114e3611559565b165f52600460205260405f206024355f52602052602060405f2054604051908152f35b346102e35760203660031901126102e3576004359063ffffffff60e01b82168092036102e357602091630271189760e51b8114908115611548575b5015158152f35b6301ffc9a760e01b14905083611541565b600435906001600160a01b03821682036102e357565b602435906001600160a01b03821682036102e357565b606435906001600160a01b03821682036102e357565b90601f8019910116810190811067ffffffffffffffff8211176115bd57604052565b634e487b7160e01b5f52604160045260245ffd5b67ffffffffffffffff81116115bd57601f01601f191660200190565b81601f820112156102e357803590611604826115d1565b92611612604051948561159b565b828452602083830101116102e357815f926020809301838601378301015290565b60609060031901126102e3576004356001600160a01b03811681036102e35790602435906044356001600160a01b03811681036102e35790565b9080601f830112156102e35781359167ffffffffffffffff83116115bd578260051b90604051936116a1602084018661159b565b84526020808501928201019283116102e357602001905b8282106116c55750505090565b81358152602091820191016116b8565b51906001600160a01b03821682036102e357565b91908260409103126102e3576020611700836116d5565b92015190565b519081151582036102e357565b9190820180921161172057565b634e487b7160e01b5f52601160045260245ffd5b81601f820112156102e35780519061174b826115d1565b92611759604051948561159b565b828452602083830101116102e357815f9260208093018386015e8301015290565b6020818303126102e35780519067ffffffffffffffff82116102e357016080818303126102e357604051916080830183811067ffffffffffffffff8211176115bd576040526117c882611706565b8352602082015160ff811681036102e3576020840152604082015167ffffffffffffffff81116102e357816117fe918401611734565b6040840152606082015167ffffffffffffffff81116102e3576118219201611734565b606082015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b1561185457565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b1561189757565b60405162461bcd60e51b815260206004820152601a60248201527f45786869626974696f6e206e6f742079657420657870697265640000000000006044820152606490fd5b9190820391821161172057565b80518210156118fd5760209160051b010190565b634e487b7160e01b5f52603260045260245ffd5b93929161192e906040928652606060208701526060860190611829565b930152565b1561193a57565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b60025f541461197e5760025f55565b633ee5aeb560e01b5f5260045ffd5b1561199457565b60405162461bcd60e51b815260206004820152601860248201527f44657374696e6174696f6e206e6f7420766572696669656400000000000000006044820152606490fdfea2646970667358221220592f002b434f69cb381339011da477e34a8341f690a23f97ea30e202e351c77664736f6c634300081c0033"
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
      "bytecode": "0x608034608557601f6104e338819003918201601f19168301916001600160401b038311848410176089578084926040948552833981010312608557604b6020604583609d565b9201609d565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560405161043290816100b18239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b038216820360855756fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146102a2575080631afed875146100a2578063abc8c7af1461007b5763d56d229d0361000f57346100785780600319360112610078576001546040516001600160a01b039091168152602090f35b80fd5b5034610078578060031936011261007857546040516001600160a01b039091168152602090f35b5034610078576040366003190112610078578054604051633013ce2960e01b815282916024359190602090829060049082906001600160a01b03165afa90811561022b57839161025c575b506040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03919091169060208160648187865af1801561025157610173926020928592610236575b50855460405163095ea7b360e01b81526001600160a01b039091166004820152602481019290925290928391908290879082906044820190565b03925af1801561022b576101fe575b5081546001546001600160a01b0391821692911690823b156101f95760848492836040519586948593636c4c557960e11b8552600485015260043560248501526001604485015260648401525af180156101ee576101dd5750f35b816101e7916103ae565b6100785780f35b6040513d84823e3d90fd5b505050fd5b61021f9060203d602011610224575b61021781836103ae565b8101906103e4565b610182565b503d61020d565b6040513d85823e3d90fd5b61024c90843d86116102245761021781836103ae565b610139565b6040513d86823e3d90fd5b90506020813d60201161029a575b81610277602093836103ae565b8101031261029657516001600160a01b0381168103610296575f6100ed565b5050fd5b3d915061026a565b3461037e57608036600319011261037e576102bb610382565b506102c4610398565b5060643567ffffffffffffffff811161037e573660238201121561037e57806004013567ffffffffffffffff811161037e573691016024011161037e575f546001546001600160a01b039182169116813b1561037e5763016295ab60e21b83526001600160a01b031660048301526044803560248401525f91839190829084905af1801561037357610363575b604051630a85bd0160e11b8152602090f35b5f61036d916103ae565b5f610351565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b038216820361037e57565b602435906001600160a01b038216820361037e57565b90601f8019910116810190811067ffffffffffffffff8211176103d057604052565b634e487b7160e01b5f52604160045260245ffd5b9081602091031261037e5751801515810361037e579056fea2646970667358221220fa06afc034c147477efab726794956b55d8b3f498a33551b6f69ae32687a148b64736f6c634300081c0033"
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
      "bytecode": "0x6080346101315760208101906001600160401b0382118183101761011d575f9160405252600254600181811c91168015610113575b60208210146100ff57601f81116100b7575b505f60025533156100a45760038054336001600160a01b03198216811790925560405191906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a36110c890816101368239f35b631e4fbdf760e01b5f525f60045260245ffd5b60025f52601f0160051c7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101905b8181106100f45750610046565b5f81556001016100e7565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610034565b634e487b7160e01b5f52604160045260245ffd5b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c8062fdd58e146100d357806301ffc9a7146100ce5780630e89341c146100c9578063156e29f6146100c45780632eb2c2d6146100bf5780634e1273f4146100ba578063715018a6146100b55780638da5cb5b146100b0578063a22cb465146100ab578063e985e9c5146100a6578063f242432a146100a15763f2fde38b1461009c575f80fd5b610a2b565b610937565b6108db565b610825565b6107fd565b6107a2565b6106e1565b610610565b610310565b61021c565b610176565b61011c565b600435906001600160a01b03821682036100ee57565b5f80fd5b602435906001600160a01b03821682036100ee57565b35906001600160a01b03821682036100ee57565b346100ee5760403660031901126100ee57602061015b61013a6100d8565b6024355f525f835260405f209060018060a01b03165f5260205260405f2090565b54604051908152f35b6001600160e01b03198116036100ee57565b346100ee5760203660031901126100ee57602060043561019581610164565b63ffffffff60e01b16636cdb3d1360e11b81149081156101d3575b81156101c2575b506040519015158152f35b6301ffc9a760e01b1490505f6101b7565b6303a24d0760e21b811491506101b0565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060206102199281815201906101e4565b90565b346100ee5760203660031901126100ee576040515f6002548060011c9060018116908115610306575b6020831082146102f25782855260208501919081156102d95750600114610287575b6102838461027781860382610512565b60405191829182610208565b0390f35b60025f9081529250907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8184106102c55750500161027782610267565b8054848401526020909301926001016102b2565b60ff191682525090151560051b01905061027782610267565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610245565b346100ee5760603660031901126100ee576103296100d8565b602435604435610337610beb565b602091604051916103488484610512565b5f83526001600160a01b038516156104eb5761038160405192600184526020840152604083019160018352606084015260808301604052565b819491518151908181036104d65750506001600160a01b03821693841515935f5b875181101561040f578086868a868060019660051b80930101519189010151926103d0575b505050016103a2565b610405916103e86103fd925f525f60205260405f2090565b9060018060a01b03165f5260205260405f2090565b918254610de8565b90555f86816103c7565b5093869560018751145f1461049b575f838801517fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f626104668688015160405191829133958360209093929193604081019481520152565b0390a45b61047057005b845160010361048d578061048b950151910151915f33610ff4565b005b50909261048b935f33610ec5565b5f6040517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb3391806104ce898d83610e09565b0390a461046a565b635b05999160e01b5f5260045260245260445ffd5b632bfa23e760e11b5f525f60045260245ffd5b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff82111761053457604052565b6104fe565b67ffffffffffffffff81116105345760051b60200190565b9080601f830112156100ee57813561056881610539565b926105766040519485610512565b81845260208085019260051b8201019283116100ee57602001905b82821061059e5750505090565b8135815260209182019101610591565b67ffffffffffffffff811161053457601f01601f191660200190565b81601f820112156100ee578035906105e1826105ae565b926105ef6040519485610512565b828452602083830101116100ee57815f926020809301838601378301015290565b346100ee5760a03660031901126100ee576106296100d8565b6106316100f2565b9060443567ffffffffffffffff81116100ee57610652903690600401610551565b60643567ffffffffffffffff81116100ee57610672903690600401610551565b906084359367ffffffffffffffff85116100ee5761069761048b9536906004016105ca565b93610ab1565b90602080835192838152019201905f5b8181106106ba5750505090565b82518452602093840193909201916001016106ad565b90602061021992818152019061069d565b346100ee5760403660031901126100ee5760043567ffffffffffffffff81116100ee57366023820112156100ee5780600401359061071e82610539565b9161072c6040519384610512565b8083526024602084019160051b830101913683116100ee57602401905b82821061078a578360243567ffffffffffffffff81116100ee576102839161077861077e923690600401610551565b90610b37565b604051918291826106d0565b6020809161079784610108565b815201910190610749565b346100ee575f3660031901126100ee576107ba610beb565b600380546001600160a01b031981169091555f906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b346100ee575f3660031901126100ee576003546040516001600160a01b039091168152602090f35b346100ee5760403660031901126100ee5761083e6100d8565b6024358015158082036100ee576001600160a01b0383169283156108c957335f9081526001602090815260408083206001600160a01b039094168352929052209060ff801983541691161790557f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31604051806108c4339482919091602081019215159052565b0390a3005b62ced3e160e81b5f525f60045260245ffd5b346100ee5760403660031901126100ee57602060ff61092b6108fb6100d8565b6109036100f2565b6001600160a01b039182165f9081526001865260408082209290931681526020919091522090565b54166040519015158152f35b346100ee5760a03660031901126100ee576109506100d8565b6109586100f2565b604435906064359260843567ffffffffffffffff81116100ee576109809036906004016105ca565b926001600160a01b0382163381141580610a08575b6109f2576001600160a01b038416156104eb57156109e05761048b946109d860405192600184526020840152604083019160018352606084015260808301604052565b929091610c12565b626a0d4560e21b5f525f60045260245ffd5b63711bec9160e11b5f523360045260245260445ffd5b505f81815260016020908152604080832033845290915290205460ff1615610995565b346100ee5760203660031901126100ee57610a446100d8565b610a4c610beb565b6001600160a01b03168015610a9e57600380546001600160a01b0319811683179091556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b631e4fbdf760e01b5f525f60045260245ffd5b939291906001600160a01b0385163381141580610aec575b6109f2576001600160a01b038216156104eb57156109e057610aea94610c12565b565b505f81815260016020908152604080832033845290915290205460ff1615610ac9565b8051821015610b235760209160051b010190565b634e487b7160e01b5f52603260045260245ffd5b91909180518351808203610bd6575050805190610b5382610539565b91610b616040519384610512565b808352610b70601f1991610539565b013660208401375f5b8151811015610bcf5780610bbe60019260051b60208082870101519189010151905f918252602082815260408084206001600160a01b03909316845291905290205490565b610bc88286610b0f565b5201610b79565b5090925050565b635b05999160e01b5f5260045260245260445ffd5b6003546001600160a01b03163303610bff57565b63118cdaa760e01b5f523360045260245ffd5b94939290919384518251908181036104d65750506001600160a01b038681169586151595918516801515939192905f5b8451811015610d1b578060051b90898988602080868b010151958c01015192610c9a575b93600194610c78575b50505001610c42565b610c90916103e86103fd925f525f60205260405f2090565b90555f8981610c6f565b50509091610cb38d6103e8835f525f60205260405f2090565b54828110610ce4578291898f610cdb600197968f9503916103e8855f525f60205260405f2090565b55909450610c66565b6040516303dee4c560e01b81526001600160a01b038f16600482015260248101919091526044810183905260648101829052608490fd5b5091989593929790965060018851145f14610dae5760208881015186820151604080519283529282015233917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291a45b610d77575b5050505050565b8451600103610d9d57602080610d939601519201519233610ff4565b5f80808080610d70565b610da994919233610ec5565b610d93565b6040517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb339180610de0898d83610e09565b0390a4610d6b565b91908201809211610df557565b634e487b7160e01b5f52601160045260245ffd5b9091610e206102199360408452604084019061069d565b91602081840391015261069d565b908160209103126100ee575161021981610164565b6001600160a01b0391821681529116602082015260a0604082018190526102199491939192610e889291610e7a919086019061069d565b90848203606086015261069d565b9160808184039101526101e4565b3d15610ec0573d90610ea7826105ae565b91610eb56040519384610512565b82523d5f602084013e565b606090565b9091949293853b610ed9575b505050505050565b602093610efb91604051968795869563bc197c8160e01b875260048701610e43565b03815f6001600160a01b0387165af15f9181610f8a575b50610f4c5750610f20610e96565b8051919082610f4557632bfa23e760e11b5f526001600160a01b03821660045260245ffd5b6020915001fd5b6001600160e01b0319166343e6837f60e01b01610f6f57505f8080808080610ed1565b632bfa23e760e11b5f526001600160a01b031660045260245ffd5b610fad91925060203d602011610fb4575b610fa58183610512565b810190610e2e565b905f610f12565b503d610f9b565b6001600160a01b039182168152911660208201526040810191909152606081019190915260a060808201819052610219929101906101e4565b9091949293853b61100757505050505050565b60209361102991604051968795869563f23a6e6160e01b875260048701610fbb565b03815f6001600160a01b0387165af15f9181611071575b5061104e5750610f20610e96565b6001600160e01b031916630dc5919f60e01b01610f6f57505f8080808080610ed1565b61108b91925060203d602011610fb457610fa58183610512565b905f61104056fea2646970667358221220d28f338ea57af1c4c29f6832e4341a0c39ad7c375f8254643ebb98c0105d51e264736f6c634300081c0033"
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
      "bytecode": "0x60806040523461031457604080519081016001600160401b0381118282101761022757604090815260098252684d6f636b205553444360b81b602083015280519081016001600160401b038111828210176102275760405260058152646d5553444360d81b602082015281516001600160401b03811161022757600354600181811c9116801561030a575b602082101461020957601f81116102a7575b50602092601f821160011461024657928192935f9261023b575b50508160011b915f199060031b1c1916176003555b80516001600160401b03811161022757600454600181811c9116801561021d575b602082101461020957601f81116101a6575b50602091601f8211600114610146579181925f9261013b575b50508160011b915f199060031b1c1916176004555b6040516106a190816103198239f35b015190505f80610117565b601f1982169260045f52805f20915f5b85811061018e57508360019510610176575b505050811b0160045561012c565b01515f1960f88460031b161c191690555f8080610168565b91926020600181928685015181550194019201610156565b60045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c810191602084106101ff575b601f0160051c01905b8181106101f457506100fe565b5f81556001016101e7565b90915081906101de565b634e487b7160e01b5f52602260045260245ffd5b90607f16906100ec565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100b6565b601f1982169360035f52805f20915f5b86811061028f5750836001959610610277575b505050811b016003556100cb565b01515f1960f88460031b161c191690555f8080610269565b91926020600181928685015181550194019201610256565b60035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c81019160208410610300575b601f0160051c01905b8181106102f5575061009c565b5f81556001016102e8565b90915081906102df565b90607f169061008a565b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c90816306fdde031461049c57508063095ea7b31461041a57806318160ddd146103fd57806323b872dd1461031e578063313ce5671461030357806340c10f191461026157806370a082311461022a57806395d89b411461010f578063a9059cbb146100de5763dd62ed3e1461008a575f80fd5b346100da5760403660031901126100da576100a3610595565b6100ab6105ab565b6001600160a01b039182165f908152600160209081526040808320949093168252928352819020549051908152f35b5f80fd5b346100da5760403660031901126100da576101046100fa610595565b60243590336105c1565b602060405160018152f35b346100da575f3660031901126100da576040515f6004548060011c90600181168015610220575b60208310811461020c578285529081156101f0575060011461019b575b50819003601f01601f191681019067ffffffffffffffff821181831017610187576101838291826040528261056b565b0390f35b634e487b7160e01b5f52604160045260245ffd5b905060045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5f905b8282106101da57506020915082010182610153565b60018160209254838588010152019101906101c5565b90506020925060ff191682840152151560051b82010182610153565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610136565b346100da5760203660031901126100da576001600160a01b0361024b610595565b165f525f602052602060405f2054604051908152f35b346100da5760403660031901126100da5761027a610595565b6001600160a01b031660243581156102f057600254908082018092116102dc5760207fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef915f9360025584845283825260408420818154019055604051908152a3005b634e487b7160e01b5f52601160045260245ffd5b63ec442f0560e01b5f525f60045260245ffd5b346100da575f3660031901126100da57602060405160128152f35b346100da5760603660031901126100da57610337610595565b61033f6105ab565b6001600160a01b0382165f818152600160209081526040808320338452909152902054909260443592915f19811061037d575b5061010493506105c1565b8381106103e25784156103cf5733156103bc57610104945f52600160205260405f2060018060a01b0333165f526020528360405f209103905584610372565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b8390637dc7a0d960e11b5f523360045260245260445260645ffd5b346100da575f3660031901126100da576020600254604051908152f35b346100da5760403660031901126100da57610433610595565b6024359033156103cf576001600160a01b03169081156103bc57335f52600160205260405f20825f526020528060405f20556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b346100da575f3660031901126100da575f6003548060011c90600181168015610561575b60208310811461020c578285529081156101f0575060011461050c5750819003601f01601f191681019067ffffffffffffffff821181831017610187576101838291826040528261056b565b905060035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5f905b82821061054b57506020915082010182610153565b6001816020925483858801015201910190610536565b91607f16916104c0565b602060409281835280519182918282860152018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b03821682036100da57565b602435906001600160a01b03821682036100da57565b6001600160a01b0316908115610658576001600160a01b03169182156102f057815f525f60205260405f205481811061063f57817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f525f825260405f20818154019055604051908152a3565b8263391434e360e21b5f5260045260245260445260645ffd5b634b637e8f60e11b5f525f60045260245ffdfea2646970667358221220d35825392051ab0df79029def8a7cbc55b025340f2d03ea53c6dcc771d3fa68f64736f6c634300081c0033"
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
      "bytecode": "0x60c0346100a657601f610f6038819003918201601f19168301916001600160401b038311848410176100aa5780849260409485528339810103126100a65780516020909101516001600160a01b03811691908290036100a65760015f5560805260a052604051610ea190816100bf82396080518181816109500152610a03015260a0518181816101000152818161047401528181610a6901528181610b2f0152610c1d0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60806040526004361015610011575f80fd5b5f5f3560e01c8063058a56ac14610b5e5780633013ce2914610b1a57806399652de714610973578063a6a3b5b414610939578063aa1a8411146108cb578063b1b9e78d1461029e5763d898aaf214610067575f80fd5b3461029b57608036600319011261029b57610080610c6d565b60243560443560643592610092610db2565b831561024b578115610206576001600160a01b03908116808652600160209081526040808820868952909152862054909291166101ca576040516323b872dd60e01b602082015233602482015230604482015260648082018690528152610124906100fe608482610cb3565b7f0000000000000000000000000000000000000000000000000000000000000000610e13565b60405161013081610c83565b338152600360208201868152604083018481526060840191428352868a52600160205260408a20888b5260205260408a209460018060a01b039051166bffffffffffffffffffffffff60a01b8654161785555160018501555160028401555191015560405193845260208401527f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf760403394a46001815580f35b60405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606490fd5b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b60405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608490fd5b80fd5b5034610783576040366003190112610783576102b8610c6d565b602435906102c4610db2565b60018060a01b031690815f52600160205260405f20815f5260205260405f20916040516102f081610c83565b83546001600160a01b0316808252600185015460208301908152600286015460408401908152600390960154606084015291901561088e57825f52600160205260405f20845f5260205261035860405f2060035f918281558260018201558260028201550155565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa908115610778575f9161086f575b501561065a576001855103610615576040516331a9108f60e11b815260048101859052602081602481875afa90811561060a5787916105eb575b50336001600160a01b03909116036105a65760405163e985e9c560e01b8152336004820152306024820152869190602081604481885afa90811561056c578391610577575b5080156104fb575b61041990610d39565b516001600160a01b0316833b156104f757604051632142170760e11b81523360048201526001600160a01b0391909116602482015260448101859052818160648183885af180156104ec576104d3575b50505b6104988151337f0000000000000000000000000000000000000000000000000000000000000000610dd0565b51925160405193845260208401527f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a360403394a46001815580f35b816104dd91610cb3565b6104e857845f610469565b8480fd5b6040513d84823e3d90fd5b5080fd5b5060405163020604bf60e21b815260048101869052602081602481885afa801561056c5761041991849161053d575b506001600160a01b031630149050610410565b61055f915060203d602011610565575b6105578183610cb3565b810190610d93565b5f61052a565b503d61054d565b6040513d85823e3d90fd5b610599915060203d60201161059f575b6105918183610cb3565b810190610d21565b5f610408565b503d610587565b60405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606490fd5b610604915060203d602011610565576105578183610cb3565b5f6103c3565b6040513d89823e3d90fd5b60405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e742031006044820152606490fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481875afa908115610778575f91610850575b501561081457604051627eeac760e11b815233600482015260248101859052602081604481875afa908115610778575f916107e2575b508551116107a65760405163e985e9c560e01b8152336004820152306024820152602081604481875afa801561077857610702915f91610787575b50610d39565b5184516001600160a01b0390911690833b156107835760405191637921219560e11b83523360048401526024830152846044830152606482015260a060848201525f60a48201525f8160c48183875af1801561077857610763575b5061046c565b6107709195505f90610cb3565b5f935f61075d565b6040513d5f823e3d90fd5b5f80fd5b6107a0915060203d60201161059f576105918183610cb3565b5f6106fc565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b90506020813d60201161080c575b816107fd60209383610cb3565b8101031261078357515f6106c1565b3d91506107f0565b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606490fd5b610869915060203d60201161059f576105918183610cb3565b5f61068b565b610888915060203d60201161059f576105918183610cb3565b5f610389565b60405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606490fd5b34610783576040366003190112610783576001600160a01b036108ec610c6d565b165f52600160205260405f206024355f52602052608060405f2060018060a01b03815416906001810154906003600282015491015491604051938452602084015260408301526060820152f35b34610783575f3660031901126107835760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b346107835760403660031901126107835761098c610c6d565b60243590610998610db2565b60018060a01b031690815f52600160205260405f20815f5260205260405f206040516109c381610c83565b81546001600160a01b0316808252600183015460208301908152600284015460408401526003909301546060909201918252610a00903314610cd5565b517f00000000000000000000000000000000000000000000000000000000000000008101809111610b06574211610ac157825f52600160205260405f20825f52602052610a6160405f2060035f918281558260018201558260028201550155565b610a8d8151337f0000000000000000000000000000000000000000000000000000000000000000610dd0565b51916040519283527f6b2d7d3541d77e4ba894942103bb7bff8611a2fe5a6c6660870f0c15ab75c2d360203394a460015f55005b60405162461bcd60e51b815260206004820152601960248201527f526566756e6420706572696f64206861732065787069726564000000000000006044820152606490fd5b634e487b7160e01b5f52601160045260245ffd5b34610783575f366003190112610783576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461078357604036600319011261078357610b77610c6d565b60243590610b83610db2565b60018060a01b031690815f52600160205260405f20815f52602052610c4160405f20610be9604051610bb481610c83565b60018060a01b038354169081815260606003600186015495602084019687526002810154604085015201549101523314610cd5565b835f52600160205260405f20835f52602052610c1960405f2060035f918281558260018201558260028201550155565b51337f0000000000000000000000000000000000000000000000000000000000000000610dd0565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a460015f55005b600435906001600160a01b038216820361078357565b6080810190811067ffffffffffffffff821117610c9f57604052565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff821117610c9f57604052565b15610cdc57565b60405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606490fd5b90816020910312610783575180151581036107835790565b15610d4057565b60405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b6064820152608490fd5b9081602091031261078357516001600160a01b03811681036107835790565b60025f5414610dc15760025f55565b633ee5aeb560e01b5f5260045ffd5b60405163a9059cbb60e01b60208201526001600160a01b03929092166024830152604480830193909352918152610e1191610e0c606483610cb3565b610e13565b565b905f602091828151910182855af115610778575f513d610e6257506001600160a01b0381163b155b610e425750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b60011415610e3b56fea2646970667358221220c009353044b7d26b482118071a2083d6a392a04f6c89e656b756a8c6397212eb64736f6c634300081c0033"
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
      "bytecode": "0x60803461007257601f610d3338819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007257516001600160a01b0381168103610072578061005c6100629261008a565b50610100565b50604051610b3f90816101948239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381165f9081525f516020610d135f395f51905f52602052604090205460ff166100fb576001600160a01b03165f8181525f516020610d135f395f51905f5260205260408120805460ff191660011790553391905f516020610cd35f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f516020610cf35f395f51905f52602052604090205460ff166100fb576001600160a01b03165f8181525f516020610cf35f395f51905f5260205260408120805460ff191660011790553391907fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca9905f516020610cd35f395f51905f529080a460019056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c90816301ffc9a71461075457508063150b7a02146106fe578063248a9ca3146106cc578063256451ac146106185780632f2ff15d146105da57806336568abe146105955780634782f7791461050e5780637b9f76b51461046a57806391d14854146104215780639ebd911514610392578063a217fddf14610376578063b61d27f61461024a578063bc197c81146101b1578063d11a57ec14610176578063d547741f1461012f5763f23a6e610361000f573461012c5760a036600319011261012c576100ed6107c1565b506100f66107d7565b5060843567ffffffffffffffff811161012a5761011790369060040161083f565b5060405163f23a6e6160e01b8152602090f35b505b80fd5b503461012c57604036600319011261012c5761017260043561014f6107d7565b9061016d610168825f525f602052600160405f20015490565b6109c9565b610a89565b5080f35b503461012c578060031936011261012c5760206040517fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca98152f35b503461012c5760a036600319011261012c576101cb6107c1565b506101d46107d7565b5060443567ffffffffffffffff811161012a576101f5903690600401610885565b5060643567ffffffffffffffff811161012a57610216903690600401610885565b5060843567ffffffffffffffff811161012a5761023790369060040161083f565b5060405163bc197c8160e01b8152602090f35b503461012c57606036600319011261012c576102646107c1565b906044359167ffffffffffffffff831161012a573660238401121561012a57826004013567ffffffffffffffff81116103725736602482860101116103725782805260208381526040808520335f908152925290205460ff161561035a57906024839483859460405193849301833781018481520391602435905af16102e86108ed565b901561031e576040906020825193849282845280519283918282870152018585015e828201840152601f01601f19168101030190f35b60405162461bcd60e51b8152602060048201526014602482015273115e1d195c9b985b0818d85b1b0819985a5b195960621b6044820152606490fd5b63e2517d3f60e01b8352336004526024839052604483fd5b8280fd5b503461012c578060031936011261012c57602090604051908152f35b503461012c57602036600319011261012c576103ac6107c1565b6103b461095a565b4780156103e3576103e09183918291829182916001600160a01b03165af16103da6108ed565b5061091c565b80f35b60405162461bcd60e51b81526020600482015260166024820152754e6f2062616c616e636520746f20776974686472617760501b6044820152606490fd5b503461012c57604036600319011261012c57604061043d6107d7565b91600435815280602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b503461012c57606036600319011261012c57806104856107c1565b6044356001600160a01b038116919082900361050a576104a361095a565b6001600160a01b031690813b1561050a578291606483926040519485938492632142170760e11b8452306004850152602484015260243560448401525af180156104ff576104ee5750f35b816104f8916107ed565b61012c5780f35b6040513d84823e3d90fd5b5050fd5b503461012c57604036600319011261012c576105286107c1565b60243561053361095a565b478111610559576103e09183918291829182916001600160a01b03165af16103da6108ed565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b503461012c57604036600319011261012c576105af6107d7565b336001600160a01b038216036105cb5761017290600435610a89565b63334bd91960e11b8252600482fd5b503461012c57604036600319011261012c576101726004356105fa6107d7565b90610613610168825f525f602052600160405f20015490565b610a01565b50346106c85760803660031901126106c8576106326107c1565b6064356001600160a01b03811691908290036106c85761065061095a565b6001600160a01b031690813b156106c8575f9160c483926040519485938492637921219560e11b845230600485015260248401526024356044840152604435606484015260a060848401528160a48401525af180156106bd576106b1575080f35b61001a91505f906107ed565b6040513d5f823e3d90fd5b5f80fd5b346106c85760203660031901126106c85760206106f66004355f525f602052600160405f20015490565b604051908152f35b346106c85760803660031901126106c8576107176107c1565b506107206107d7565b5060643567ffffffffffffffff81116106c85761074190369060040161083f565b50604051630a85bd0160e11b8152602090f35b346106c85760203660031901126106c8576004359063ffffffff60e01b82168092036106c857602091637965db0b60e01b8114908115610796575b5015158152f35b630271189760e51b8114915081156107b0575b508361078f565b6301ffc9a760e01b149050836107a9565b600435906001600160a01b03821682036106c857565b602435906001600160a01b03821682036106c857565b90601f8019910116810190811067ffffffffffffffff82111761080f57604052565b634e487b7160e01b5f52604160045260245ffd5b67ffffffffffffffff811161080f57601f01601f191660200190565b81601f820112156106c85780359061085682610823565b9261086460405194856107ed565b828452602083830101116106c857815f926020809301838601378301015290565b9080601f830112156106c85781359167ffffffffffffffff831161080f578260051b90604051936108b960208401866107ed565b84526020808501928201019283116106c857602001905b8282106108dd5750505090565b81358152602091820191016108d0565b3d15610917573d906108fe82610823565b9161090c60405193846107ed565b82523d5f602084013e565b606090565b1561092357565b60405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606490fd5b335f9081527f9e5c930214a7bc8a78d251e617445bcdba028aed2ede5828cc6cd6c8261656f5602052604090205460ff161561099257565b63e2517d3f60e01b5f52336004527fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca960245260445ffd5b5f8181526020818152604080832033845290915290205460ff16156109eb5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16610a83575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615610a83575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a460019056fea26469706673582212201156e5a96b775cb6c70475f97e65a7efe46cbd0f4ff9f33588f3c6311c205b1264736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9e5c930214a7bc8a78d251e617445bcdba028aed2ede5828cc6cd6c8261656f5ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
    }
  },
  "deployments": {
    "31337": {
      "DonationReceipt": "0xefa3bD3d38e6a9758ca442BD9d2E3a9775353B39",
      "ExhibitRegistry": "0xB10107eAFFE09dE04D1Ad99061966EBb23d3CA5C",
      "NFTMarketplace": "0x114E51AAB744D1613CeB743EaA35971436D30642",
      "Treasury": "0x08Ad1AEac40AB60d8b78F09C766036da72A96Bcb",
      "BragNFT": "0xc4FC03D903c80652F78E174f1F2acB8215A1e072",
      "BragToken": "0xACB140C88864bb08aD7552E690A3574f18139db2"
    },
    "chain-31337": {
      "BragToken": "0xACB140C88864bb08aD7552E690A3574f18139db2",
      "DonationReceipt": "0xefa3bD3d38e6a9758ca442BD9d2E3a9775353B39",
      "ExhibitRegistry": "0xB10107eAFFE09dE04D1Ad99061966EBb23d3CA5C",
      "NFTMarketplace": "0x114E51AAB744D1613CeB743EaA35971436D30642",
      "Treasury": "0x08Ad1AEac40AB60d8b78F09C766036da72A96Bcb",
      "BragNFT": "0xc4FC03D903c80652F78E174f1F2acB8215A1e072"
    }
  }
};