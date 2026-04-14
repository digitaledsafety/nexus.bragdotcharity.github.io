const CONTRACT_DATA = {
  "contracts": {
    "IERC165": {
      "abi": [
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
        }
      ]
    },
    "IERC721": {
      "abi": [
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
        }
      ]
    },
    "IERC1155": {
      "abi": [
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
              "internalType": "uint256",
              "name": "id",
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
              "name": "amount",
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
        }
      ]
    },
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
      "bytecode": "0x60803461006857601f6109e838819003918201601f19168301916001600160401b0383118484101761006c5780849260209460405283398101031261006857516001600160a01b03811681036100685761005890610080565b506040516108be908161010a8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381165f9081525f5160206109c85f395f51905f52602052604090205460ff16610104576001600160a01b03165f8181525f5160206109c85f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f3560e01c90816301ffc9a71461047b5750806315270ace146103d0578063227a755814610382578063248a9ca3146103505780632f2ff15d1461032157806336568abe146102eb5780637402c05a1461021957806391d14854146101de578063a217fddf146101c4578063d547741f1461018c5763f8b7fabf146100a1575f61000f565b6100aa36610566565b906100b882849594146105da565b5f5f5b85811061015957503403610114575f5b8481106100d457005b8061010e5f8080806100f16100ec6001988d8d61061a565b61063e565b6100fc878b8b61061a565b35905af1610108610652565b506106b7565b016100cb565b60405162461bcd60e51b815260206004820152601960248201527f496e636f72726563742045544820616d6f756e742073656e74000000000000006044820152606490fd5b9061016582858561061a565b35810180911161017857906001016100bb565b634e487b7160e01b5f52601160045260245ffd5b346101c05761001a61019d366105b4565b906101bb6101b6825f525f602052600160405f20015490565b610748565b610808565b5f80fd5b346101c0575f3660031901126101c05760206040515f8152f35b346101c0576101ec366105b4565b905f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346101c057610227366104ff565b9290916102326106f9565b61023d8482146105da565b5f5b81811061024857005b6102566100ec82848661061a565b61026182878761061a565b60405163a9059cbb60e01b5f9081526001600160a01b03909316600452903560245290602090604481808b5af19060015f51148216156102ca575b604052156102ac5760010161023f565b635274afe760e01b5f9081526001600160a01b038716600452602490fd5b9060018115166102e257873b15153d1516169061029c565b503d5f823e3d90fd5b346101c0576102f9366105b4565b336001600160a01b038216036103125761001a91610808565b63334bd91960e11b5f5260045ffd5b346101c05761001a610332366105b4565b9061034b6101b6825f525f602052600160405f20015490565b610780565b346101c05760203660031901126101c057602061037a6004355f525f602052600160405f20015490565b604051908152f35b346101c05761039036610566565b9061039c9392936106f9565b6103a78285146105da565b5f5b8481106103b257005b806103ca5f8080806100f16100ec6001988d8d61061a565b016103a9565b346101c0576103de366104ff565b9290916103ec8482146105da565b5f5b8181106103f757005b6104056100ec82848661061a565b61041082878761061a565b6040516323b872dd60e01b5f908152336004526001600160a01b03909316602452903560445290602090606481808b5af19060015f5114821615610463575b6040525f606052156102ac576001016103ee565b9060018115166102e257873b15153d1516169061044f565b346101c05760203660031901126101c0576004359063ffffffff60e01b82168092036101c057602091637965db0b60e01b81149081156104bd575b5015158152f35b6301ffc9a760e01b149050836104b6565b9181601f840112156101c05782359167ffffffffffffffff83116101c0576020808501948460051b0101116101c057565b9060606003198301126101c0576004356001600160a01b03811681036101c0579160243567ffffffffffffffff81116101c0578161053f916004016104ce565b929092916044359067ffffffffffffffff82116101c057610562916004016104ce565b9091565b60406003198201126101c05760043567ffffffffffffffff81116101c05781610591916004016104ce565b929092916024359067ffffffffffffffff82116101c057610562916004016104ce565b60409060031901126101c057600435906024356001600160a01b03811681036101c05790565b156105e157565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b919081101561062a5760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036101c05790565b3d156106b2573d9067ffffffffffffffff821161069e5760405191601f8101601f19908116603f0116830167ffffffffffffffff81118482101761069e5760405282523d5f602084013e565b634e487b7160e01b5f52604160045260245ffd5b606090565b156106be57565b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff161561073157565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff161561076a5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16610802575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615610802575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a460019056fea2646970667358221220e4c9ca9461a92dac683e8c95a6fa5eeb8640b1cbcdd981da1f6a189bbc60b47d64736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
            },
            {
              "internalType": "address",
              "name": "_priceFeed",
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
          "inputs": [],
          "name": "ReentrancyGuardReentrantCall",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "name": "StringsInsufficientHexLength",
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
              "name": "usdValue",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tokenId",
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
          "name": "TopUp",
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
          "name": "ROYALTY_BPS",
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "isGlowing",
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
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "isTransferable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
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
          "name": "lastTopUpTimestamp",
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
          "inputs": [],
          "name": "nextTokenId",
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
          "name": "priceFeed",
          "outputs": [
            {
              "internalType": "contract AggregatorV3Interface",
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
          "inputs": [],
          "name": "royaltyRecipient",
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
              "name": "_priceFeed",
              "type": "address"
            }
          ],
          "name": "setPriceFeed",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_royaltyRecipient",
              "type": "address"
            }
          ],
          "name": "setRoyaltyRecipient",
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
              "internalType": "enum BragNFT.TaxStatus",
              "name": "status",
              "type": "uint8"
            }
          ],
          "name": "setTaxStatus",
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
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "taxRegistry",
          "outputs": [
            {
              "internalType": "address",
              "name": "originalDonor",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "usdValue",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "enum BragNFT.TaxStatus",
              "name": "status",
              "type": "uint8"
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
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "topUp",
          "outputs": [],
          "stateMutability": "payable",
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
      "bytecode": "0x6080604052346103c2576153976080813803918261001c816103c6565b9384928339810103126103c257610032816103eb565b9061003f602082016103eb565b6100506060604084015193016103eb565b9261005b60406103c6565b6007815266109c9859d3919560ca1b602082015261007960406103c6565b600781526610949051d3919560ca1b6020820152815190916001600160401b0382116102c9575f5490600182811c921680156103b8575b60208310146102ab5781601f84931161034b575b50602090601f83116001146102e8575f926102dd575b50508160011b915f199060031b1c1916175f555b8051906001600160401b0382116102c957600154600181811c911680156102bf575b60208210146102ab57601f8111610248575b50602090601f83116001146101df5761017d9392915f91836101d4575b50508160011b915f199060031b1c1916176001555b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556103ff565b50600a80546001600160a01b03199081166001600160a01b03938416908117909255600b80548216909217909155600c92909255600e805490921692169190911790556064600955604051614eee90816104898239f35b015190505f8061013f565b90601f1983169160015f52815f20925f5b818110610230575091600193918561017d97969410610218575b505050811b01600155610154565b01515f1960f88460031b161c191690555f808061020a565b929360206001819287860151815501950193016101f0565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f840160051c810191602085106102a1575b601f0160051c01905b8181106102965750610122565b5f8155600101610289565b9091508190610280565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610110565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100da565b5f8080528281209350601f198516905b818110610333575090846001959493921061031b575b505050811b015f556100ee565b01515f1960f88460031b161c191690555f808061030e565b929360206001819287860151815501950193016102f8565b5f80529091507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f840160051c810191602085106103ae575b90601f859493920160051c01905b8181106103a057506100c4565b5f8155849350600101610393565b9091508190610385565b91607f16916100b0565b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176102c957604052565b51906001600160a01b03821682036103c257565b6001600160a01b0381165f9081525f5160206153775f395f51905f52602052604090205460ff16610483576001600160a01b03165f8181525f5160206153775f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe60808060405260043610156105e3575b50361561001a575f80fd5b610022612cd7565b5f60408051906100328183612923565b600f82526e2234b932b1ba103237b730ba34b7b760891b602083015260209080519061005e8383612923565b5f8252600c5434106105a7576008549160095483101561056e5761008183612d0f565b600855600e545f91906001600160a01b0316806104d4575b5082516100a581612908565b338152858101838152428583019081525f60608401818152608085018b8152898352600f8b5291889020945185546001600160a01b0319166001600160a01b039190911617855592516001850155905160028401559051909160048210156104c05761011660049260038301612c8b565b0190518051906001600160401b0382116103f057819061013684546128d0565b601f8111610472575b508890601f831160011461040f575f92610404575b50508160011b915f199060031b1c19161790555b80516102bf575b50815161017c8582612923565b5f815233156102ac576001600160a01b036101978533613316565b16610299576101a89084333361356e565b600d546001600160a01b031680610226575b506101ed8680805f516020614e795f395f51905f5298993460018060a01b03600a54165af16101e7612c10565b50612c3f565b815193348552840152820152608060608201528061021033946080830190612803565b0390a260015f516020614e595f395f51905f5255005b803b156102955782516340c10f1960e01b8152336004820152346024820152905f908290604490829084905af196871561028b575f516020614e795f395f51905f529697610277575b9695506101ba565b505f61028291612923565b6101ed5f61026f565b83513d5f823e3d90fd5b5f80fd5b6339e3563760e11b5f525f60045260245ffd5b633250574960e11b5f525f60045260245ffd5b835f5260068552825f20908051906001600160401b0382116103f05781906102e784546128d0565b601f81116103a2575b508790601f831160011461033f575f92610334575b50508160011b915f199060031b1c19161790555b5f516020614e995f395f51905f52848351858152a15f61016f565b015190505f80610305565b5f8581528981209350601f198516905b8a82821061038c575050908460019594939210610374575b505050811b019055610319565b01515f1960f88460031b161c191690555f8080610367565b600185968293968601518155019501930161034f565b909150835f52875f20601f840160051c8101918985106103e6575b90601f859493920160051c01905b8181106103d857506102f0565b5f81558493506001016103cb565b90915081906103bd565b634e487b7160e01b5f52604160045260245ffd5b015190505f80610154565b5f8581528a81209350601f198516905b8b82821061045c575050908460019594939210610444575b505050811b019055610168565b01515f1960f88460031b161c191690555f8080610437565b600185968293968601518155019501930161041f565b909150835f52885f20601f840160051c8101918a85106104b6575b90601f859493920160051c01905b8181106104a8575061013f565b5f815584935060010161049b565b909150819061048d565b634e487b7160e01b5f52602160045260245ffd5b60a0600491855192838092633fabe5a360e21b82525afa5f9181610520575b5015610099575f81131561009957670de0b6b3a7640000919250610518903490612bfd565b04905f610099565b90915060a0813d60a011610566575b8161053c60a09383612923565b810103126102955761054d81612d1d565b5061055e6080888301519201612d1d565b50905f6104f3565b3d915061052f565b815162461bcd60e51b815260048101859052601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b5162461bcd60e51b8152600481018390526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b5f905f3560e01c90816301ffc9a7146127325750806302d95a521461270a57806306fdde0314612643578063081812fc14612607578063095ea7b31461251d5780630fd973ce1461201c5780631653441c14611a2c57806318160ddd1461154d57806323b872dd14611a14578063248a9ca3146119e05780632a55205a146119805780632eb9313e146119405780632f2ff15d1461190157806336568abe146118bc57806341e42f301461182657806342842e0e146117f657806349c657db146117d95780634c00de82146117b057806350017f3e146116cf57806361d027b3146116a65780636352211e1461167557806364cb7e9c1461164a5780636f8b44b01461162757806370a08231146115d4578063724e78da14611594578063741bef1a1461156b57806375794a3c1461154d57806383943dc814611524578063892e9c35146114fa578063916221aa146114b057806391a6262f1461148157806391d148541461143757806395d89b411461135457806396d8f4f314611336578063a217fddf1461131a578063a22cb46514611262578063a6719b3a146111de578063ab2a6f7014611148578063b88d4fde146110d5578063c6317247146110b2578063c87b56dd146109d5578063d3933c1c14610931578063d547741f146108e9578063d5abeb01146108cb578063e985e9c5146108735763f0f442600361000f5734610870576020366003190112610870576107fe612827565b6108066133d5565b6001600160a01b0316801561082b576001600160601b0360a01b600a541617600a5580f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b80fd5b503461087057604036600319011261087057604061088f612827565b9161089861283d565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346108705780600319360112610870576020600954604051908152f35b50346108705760403660031901126108705761092d60043561090961283d565b90610928610923825f526007602052600160405f20015490565b613424565b6134ea565b5080f35b506060366003190112610870576004356001600160401b0381116109d15761095d903690600401612869565b906024356001600160401b0381116109cd5761097d903690600401612869565b90916044359283151584036109c9576109a66109ae926109b59661099f612cd7565b36916129ff565b9236916129ff565b9033612d34565b60015f516020614e595f395f51905f525580f35b8580fd5b8380fd5b5080fd5b503461087057602036600319011261087057600435906109f482612ca3565b50818152600f60205260408120604051610a0d81612908565b81546001600160a01b031681526001820154602082015260028201546040820152600382015460608201929060ff16600481101561109e578352610a5390600401612944565b9160808201928352610a6485612a56565b9460608186526011602052610a7b60408720612944565b9081511561108d575b81511561106f57610a9482613c65565b156110675750926020610b00603a610ab5610ab089518761380c565b614cea565b6040519384917f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000828401528051918291018484015e81018a838201520301601f198101835282612923565b925b60209788604051610b138282612923565b89815296805161100a575b5050610b2a87516145b5565b92516001600160a01b03169182610b41602a6129e4565b93610b4f6040519586612923565b602a8552610b5d602a6129e4565b601f190136868e0137845115610ff65760308c860153845160011015610ff6576078602186015360295b60018111610f8d5750610f765750516004811015610f6257898088818099818e819b8f999b83809c81859f610bbc829e6147e3565b9015610f3f5781604051610bd1604082612923565b600381526259657360e81b82820152935b6040519e8f978189017f7b2274726169745f74797065223a20224d657373616765222c202276616c7565905263111d101160e11b60408a015280519182910160448a015e62089f4b60ea1b6044918901918201527f7b2274726169745f74797065223a20224f726967696e616c20446f6e6f72222c60478201526a10113b30b63ab2911d101160a91b60678201528151929091839101607283015e016044019062089f4b60ea1b602e830152603182017f7b2274726169745f74797065223a202254617820537461747573222c20227661905266363ab2911d101160c91b6051830152805192839101605883015e01602e019062089f4b60ea1b602a830152602d82017f7b2274726169745f74797065223a2022476c6f77696e67222c202276616c7565905263111d101160e11b604d830152805192839101605183015e01602a0161227d60f01b602782015203602701601d1981018952600201610d479089612923565b610d5090614898565b89515190999015610f2457610da06022610da693610d6f8694516145b5565b906040519485926101d160f51b828501528051918291018585015e820190838201520301601f198101835282612923565b926145b5565b91604051998a99727b226e616d65223a2022427261674e4654202360681b828c015280519182910160338c015e890190603382017f222c20226465736372697074696f6e223a2022427261672e4368617269747920905260538201754475616c2d537461746520436f6c6c65637469626c6560501b9052805192839101606983015e01603301906c1116101134b6b0b3b2911d101160991b6036830152805192839101604383015e0160360190600d8201888152815193849201905e01600d019071222c202261747472696275746573223a205b60701b8252805192839101601283015e0160128101615d7d60f01b905203601201601d1981018252600201610eaf9082612923565b610eb890614cea565b6040517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000008582015281519094859392829101603d85015e820190603d82015203603d01601f1981018352610f0c9083612923565b6040519181839283528201610f2091612803565b0390f35b5050610da6604051610f368382612923565b8b8152926145b5565b81604051610f4e604082612923565b60028152614e6f60f01b8282015293610be2565b634e487b7160e01b89526021600452602489fd5b63e22e27eb60e01b8a526004526014602452604489fd5b90600f81166010811015610fe2576f181899199a1a9b1b9c1cb0b131b232b360811b901a610fbb8388613c40565b5360041c908015610fce575f1901610b87565b634e487b7160e01b8c52601160045260248cfd5b634e487b7160e01b8d52603260045260248dfd5b634e487b7160e01b8b52603260045260248bfd5b61105f9192975061101c6035916145b5565b604051741116101130b734b6b0ba34b7b72fbab936111d101160591b858201528151909485928291018484015e81018b838201520301601f198101835282612923565b94885f610b1e565b939092610b02565b9390506020611087603a610ab5610ab089518761380c565b92610b02565b905061109882613759565b90610a84565b634e487b7160e01b85526021600452602485fd5b5034610870576020366003190112610870576110cc6133d5565b600435600c5580f35b5034610870576080366003190112610870576110ef612827565b6110f761283d565b90604435606435926001600160401b03841161114457366023850112156111445761112f6111419436906024816004013591016129ff565b9261113b838383612a75565b3361367c565b80f35b8480fd5b5034610870576020366003190112610870576004358152600f602052604081209060018060a01b03825416916001810154916002820154611193600460ff6003860154169401612944565b936040519586526020860152604085015260048210156111ca57508291610f2091606084015260a0608084015260a0830190612803565b634e487b7160e01b81526021600452602490fd5b506080366003190112610870576111f3612827565b6024356001600160401b03811161125e57611212903690600401612869565b916044356001600160401b03811161114457611232903690600401612869565b909260643593841515850361125a576109a6611254926109b59761099f612cd7565b91612d34565b8680fd5b8280fd5b50346108705760403660031901126108705761127c612827565b6024359081151580920361125e573315611306576001600160a01b03169081156112f257338352600560205260408320825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b630b61174360e31b83526004829052602483fd5b63a9fbf51f60e01b83526004839052602483fd5b5034610870578060031936011261087057602090604051908152f35b50346108705780600319360112610870576020600c54604051908152f35b5034610870578060031936011261087057604051908060015490611377826128d0565b808552916001811690811561141057506001146113b3575b610f208461139f81860382612923565b604051918291602083526020830190612803565b600181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b8082106113f65750909150810160200161139f8261138f565b9192600181602092548385880101520191019092916113dd565b60ff191660208087019190915292151560051b8501909201925061139f915083905061138f565b503461087057604036600319011261087057604061145361283d565b9160043581526007602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346108705760603660031901126108705761149b61283d565b506114a4612853565b50602060405160018152f35b503461087057604036600319011261087057600435602435600481101561125e57611141916114dd6133d5565b6114e681612ca3565b508352600f60205260036040842001612c8b565b50346108705760203660031901126108705760406020916004358152601083522054604051908152f35b5034610870578060031936011261087057600d546040516001600160a01b039091168152602090f35b50346108705780600319360112610870576020600854604051908152f35b5034610870578060031936011261087057600e546040516001600160a01b039091168152602090f35b5034610870576020366003190112610870576115ae612827565b6115b66133d5565b60018060a01b03166001600160601b0360a01b600e541617600e5580f35b5034610870576020366003190112610870576001600160a01b036115f6612827565b168015611613578160409160209352600383522054604051908152f35b6322718ad960e21b82526004829052602482fd5b5034610870576020366003190112610870576116416133d5565b60043560095580f35b50346108705760203660031901126108705761139f6040610f20926004358152601160205220612944565b5034610870576020366003190112610870576020611694600435612ca3565b6040516001600160a01b039091168152f35b5034610870578060031936011261087057600a546040516001600160a01b039091168152602090f35b506020366003190112610870576004356116e7612cd7565b6116f081612ca3565b5066016bcc41e90000341061176b57808252601060205242604083205561172a828080803460018060a01b03600a54165af16101e7612c10565b604051903482527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f516020614e595f395f51905f525580f35b60405162461bcd60e51b815260206004820152601a60248201527f546f702d757020726571756972657320302e30303034204554480000000000006044820152606490fd5b5034610870578060031936011261087057600b546040516001600160a01b039091168152602090f35b503461087057806003193601126108705760206040516103208152f35b50346108705761114161180836612896565b9060405192611818602085612923565b85845261113b838383612a75565b503461087057602036600319011261087057611840612827565b6118486133d5565b6001600160a01b0316801561186d576001600160601b0360a01b600b541617600b5580f35b60405162461bcd60e51b815260206004820152602160248201527f496e76616c696420726f79616c747920726563697069656e74206164647265736044820152607360f81b6064820152608490fd5b5034610870576040366003190112610870576118d661283d565b336001600160a01b038216036118f25761092d906004356134ea565b63334bd91960e11b8252600482fd5b50346108705760403660031901126108705761092d60043561192161283d565b9061193b610923825f526007602052600160405f20015490565b61345e565b50346108705760203660031901126108705761195a612827565b6119626133d5565b60018060a01b03166001600160601b0360a01b600d541617600d5580f35b5034610870576040366003190112610870576024359061032082029180830461032014901517156119cc57600b54604080516001600160a01b0390921682526127108404602083015290f35b634e487b7160e01b81526011600452602490fd5b5034610870576020366003190112610870576020611a0c6004355f526007602052600160405f20015490565b604051908152f35b503461087057611141611a2636612896565b91612a75565b506040366003190112610870576004356001600160401b0381116109d157611a58903690600401612869565b602435906001600160401b0382116109cd576109a6611a7e611a89933690600401612869565b94909261099f612cd7565b600c543410611fde5760085490600954821015611fa457611aa982612d0f565b600855600e548491906001600160a01b031680611f08575b50604051611ace81612908565b3381526020808201848152426040808501918252606085018a8152608086018a8152898c52600f909552908a20945185546001600160a01b0319166001600160a01b039190911617855591516001850155516002840155519091906004811015611ef45790611b4260049260038301612c8b565b0190518051906001600160401b038211611ee0578190611b6284546128d0565b601f8111611e90575b50602090601f8311600114611e2e578992611e23575b50508160011b915f199060031b1c19161790555b8051611cd8575b50604051611bab602082612923565b8481523315611cc4576001600160a01b03611bc68433613316565b16611cb057611bd79083333361356e565b600d5484906001600160a01b031680611c57575b5091611c188380805f516020614e795f395f51905f52963460018060a01b03600a54165af16101e7612c10565b60405191348352602083015260408201526080606082015280611c4033946080830190612803565b0390a260015f516020614e595f395f51905f525580f35b803b156109d1576040516340c10f1960e01b81523360048201523460248201529082908290604490829084905af18015611ca55715611beb5781611c9a91612923565b6109cd57835f611beb565b6040513d84823e3d90fd5b6339e3563760e11b85526004859052602485fd5b633250574960e11b85526004859052602485fd5b828552600660205260408520908051906001600160401b038211611e0f578190611d0284546128d0565b601f8111611dbf575b50602090601f8311600114611d5d578892611d52575b50508160011b915f199060031b1c19161790555b5f516020614e995f395f51905f526020604051848152a15f611b9c565b015190505f80611d21565b8489528189209250601f198416895b818110611da75750908460019594939210611d8f575b505050811b019055611d35565b01515f1960f88460031b161c191690555f8080611d82565b92936020600181928786015181550195019301611d6c565b90915083885260208820601f840160051c81019160208510611e05575b90601f859493920160051c01905b818110611df75750611d0b565b898155849350600101611dea565b9091508190611ddc565b634e487b7160e01b87526041600452602487fd5b015190505f80611b81565b848a52818a209250601f1984168a5b818110611e785750908460019594939210611e60575b505050811b019055611b95565b01515f1960f88460031b161c191690555f8080611e53565b92936020600181928786015181550195019301611e3d565b90915083895260208920601f840160051c81019160208510611ed6575b90601f859493920160051c01905b818110611ec85750611b6b565b8a8155849350600101611ebb565b9091508190611ead565b634e487b7160e01b88526041600452602488fd5b634e487b7160e01b88526021600452602488fd5b60a060049160405192838092633fabe5a360e21b82525afa869181611f55575b5015611ac15785811315611ac157670de0b6b3a7640000919250611f4d903490612bfd565b04905f611ac1565b90915060a0813d60a011611f9c575b81611f7160a09383612923565b8101031261125a57611f8281612d1d565b50611f94608060208301519201612d1d565b50905f611f28565b3d9150611f64565b60405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b50606036600319011261029557612031612827565b6024356001600160401b03811161029557612050903690600401612869565b604492919235906001600160401b0382116102955761208461207961208c933690600401612869565b95909261099f612cd7565b9336916129ff565b90600c543410611fde5760085490600954821015611fa4576120ad82612d0f565b600855600e545f93906001600160a01b031680612481575b506040516120d281612908565b33815260208082018681524260408085019182525f60608601818152608087018c81528a8352600f909652919020945185546001600160a01b0319166001600160a01b03919091161785559151600185015551600284015551909160048210156104c05761214560049260038301612c8b565b0190518051906001600160401b0382116103f057819061216584546128d0565b601f8111612431575b50602090601f83116001146123ce575f926123c3575b50508160011b915f199060031b1c19161790555b805161228b575b506040516121ae602082612923565b5f81526001600160a01b038216156102ac576001600160a01b036121d28484613316565b1661029957826121e2923361356e565b600d546001600160a01b031680612222575b50905f516020614e795f395f51905f5291611c18858080803460018060a01b03600a54165af16101e7612c10565b803b15610295576040516340c10f1960e01b8152336004820152346024820152905f908290604490829084905af1801561228057156121f4575f516020614e795f395f51905f52929194505f61227791612923565b5f9390916121f4565b6040513d5f823e3d90fd5b825f52600660205260405f20908051906001600160401b0382116103f05781906122b584546128d0565b601f8111612373575b50602090601f8311600114612310575f92612305575b50508160011b915f199060031b1c19161790555b5f516020614e995f395f51905f526020604051848152a15f61219f565b015190505f806122d4565b5f8581528281209350601f198516905b81811061235b5750908460019594939210612343575b505050811b0190556122e8565b01515f1960f88460031b161c191690555f8080612336565b92936020600181928786015181550195019301612320565b909150835f5260205f20601f840160051c810191602085106123b9575b90601f859493920160051c01905b8181106123ab57506122be565b5f815584935060010161239e565b9091508190612390565b015190505f80612184565b5f8581528281209350601f198516905b8181106124195750908460019594939210612401575b505050811b019055612198565b01515f1960f88460031b161c191690555f80806123f4565b929360206001819287860151815501950193016123de565b909150835f5260205f20601f840160051c81019160208510612477575b90601f859493920160051c01905b818110612469575061216e565b5f815584935060010161245c565b909150819061244e565b60a060049160405192838092633fabe5a360e21b82525afa5f91816124ce575b50156120c5575f8113156120c557670de0b6b3a76400009194506124c6903490612bfd565b04925f6120c5565b90915060a0813d60a011612515575b816124ea60a09383612923565b81010312610295576124fb81612d1d565b5061250d608060208301519201612d1d565b50905f6124a1565b3d91506124dd565b3461029557604036600319011261029557612536612827565b60243561254281612ca3565b331515806125f4575b806125c7575b6125b45781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff1615612551565b506001600160a01b03811633141561254b565b346102955760203660031901126102955760043561262481612ca3565b505f526004602052602060018060a01b0360405f205416604051908152f35b34610295575f366003190112610295576040515f5f54612662816128d0565b80845290600181169081156126e6575060011461268a575b610f208361139f81850382612923565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b8082106126cc5750909150810160200161139f61267a565b9192600181602092548385880101520191019092916126b4565b60ff191660208086019190915291151560051b8401909101915061139f905061267a565b34610295576020366003190112610295576020612728600435612a56565b6040519015158152f35b34610295576020366003190112610295576004359063ffffffff60e01b82168092036102955760209163152a902d60e11b81149081156127f2575b811561277b575b5015158152f35b637965db0b60e01b811491508115612795575b5083612774565b632483248360e11b8114915081156127af575b508361278e565b6380ac58cd60e01b8114915081156127e1575b81156127d0575b50836127a8565b6301ffc9a760e01b149050836127c9565b635b5e139f60e01b811491506127c2565b6391a6262f60e01b8114915061276d565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361029557565b602435906001600160a01b038216820361029557565b604435906001600160a01b038216820361029557565b9181601f84011215610295578235916001600160401b038311610295576020838186019501011161029557565b6060906003190112610295576004356001600160a01b038116810361029557906024356001600160a01b0381168103610295579060443590565b90600182811c921680156128fe575b60208310146128ea57565b634e487b7160e01b5f52602260045260245ffd5b91607f16916128df565b60a081019081106001600160401b038211176103f057604052565b90601f801991011681019081106001600160401b038211176103f057604052565b9060405191825f825492612957846128d0565b80845293600181169081156129c2575060011461297e575b5061297c92500383612923565b565b90505f9291925260205f20905f915b8183106129a657505090602061297c928201015f61296f565b602091935080600191548385890101520191019091849261298d565b90506020925061297c94915060ff191682840152151560051b8201015f61296f565b6001600160401b0381116103f057601f01601f191660200190565b929192612a0b826129e4565b91612a196040519384612923565b829481845281830111610295578281602093845f960137010152565b91908201809211612a4257565b634e487b7160e01b5f52601160045260245ffd5b5f52601060205260405f205462278d008101809111612a425742111590565b6001600160a01b03909116919082156102ac575f828152600260205260409020546001600160a01b031692829033151580612b68575b5084612b35575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b0316808303612b1d57505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f198154019055612ab2565b90915080612bac575b15612b7e5782905f612aab565b8284612b9657637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015612bdb575b80612b7157505f838152600460205260409020546001600160a01b03163314612b71565b505f84815260056020908152604080832033845290915290205460ff16612bb7565b81810292918115918404141715612a4257565b3d15612c3a573d90612c21826129e4565b91612c2f6040519384612923565b82523d5f602084013e565b606090565b15612c4657565b60405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606490fd5b9060048110156104c05760ff80198354169116179055565b5f818152600260205260409020546001600160a01b0316908115612cc5575090565b637e27328960e01b5f5260045260245ffd5b60025f516020614e595f395f51905f525414612d005760025f516020614e595f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b5f198114612a425760010190565b519069ffffffffffffffffffff8216820361029557565b91929092600c54925f933410611fde5760085491600954831015611fa457612d5b83612d0f565b600855600e545f94906001600160a01b03168061327a575b50604051612d8081612908565b33815260208082018781524260408085019182525f60608601818152608087018e81528b8352600f909652919020945185546001600160a01b0319166001600160a01b03919091161785559151600185015551600284015551909160048210156104c057612df360049260038301612c8b565b0190518051906001600160401b0382116103f0578190612e1384546128d0565b601f811161322a575b50602090601f83116001146131c7575f926131bc575b50508160011b915f199060031b1c19161790555b1561307757825f52601160205260405f20908051906001600160401b0382116103f0578190612e7584546128d0565b601f8111613027575b50602090601f8311600114612fc4575f92612fb9575b50508160011b915f199060031b1c19161790555b604051612eb6602082612923565b5f81526001600160a01b038216156102ac576001600160a01b03612eda8484613316565b166102995782612eea923361356e565b600d546001600160a01b031680612f55575b50612f288380805f516020614e795f395f51905f52963460018060a01b03600a54165af16101e7612c10565b60405191348352602083015260408201526080606082015280612f5033946080830190612803565b0390a2565b803b15610295576040516340c10f1960e01b8152336004820152346024820152905f908290604490829084905af1938415612280575f516020614e795f395f51905f5294612fa5575b9350612efc565b505f612fb091612923565b612f285f612f9e565b015190505f80612e94565b5f8581528281209350601f198516905b81811061300f5750908460019594939210612ff7575b505050811b019055612ea8565b01515f1960f88460031b161c191690555f8080612fea565b92936020600181928786015181550195019301612fd4565b909150835f5260205f20601f840160051c8101916020851061306d575b90601f859493920160051c01905b81811061305f5750612e7e565b5f8155849350600101613052565b9091508190613044565b8051613084575b50612ea8565b825f52600660205260405f20908051906001600160401b0382116103f05781906130ae84546128d0565b601f811161316c575b50602090601f8311600114613109575f926130fe575b50508160011b915f199060031b1c19161790555b5f516020614e995f395f51905f526020604051848152a15f61307e565b015190505f806130cd565b5f8581528281209350601f198516905b818110613154575090846001959493921061313c575b505050811b0190556130e1565b01515f1960f88460031b161c191690555f808061312f565b92936020600181928786015181550195019301613119565b909150835f5260205f20601f840160051c810191602085106131b2575b90601f859493920160051c01905b8181106131a457506130b7565b5f8155849350600101613197565b9091508190613189565b015190505f80612e32565b5f8581528281209350601f198516905b81811061321257509084600195949392106131fa575b505050811b019055612e46565b01515f1960f88460031b161c191690555f80806131ed565b929360206001819287860151815501950193016131d7565b909150835f5260205f20601f840160051c81019160208510613270575b90601f859493920160051c01905b8181106132625750612e1c565b5f8155849350600101613255565b9091508190613247565b60a060049160405192838092633fabe5a360e21b82525afa5f91816132c7575b5015612d73575f811315612d7357670de0b6b3a76400009195506132bf903490612bfd565b04935f612d73565b90915060a0813d60a01161330e575b816132e360a09383612923565b81010312610295576132f481612d1d565b50613306608060208301519201612d1d565b50905f61329a565b3d91506132d6565b5f828152600260205260409020546001600160a01b03169190826133a2575b6001600160a01b03168061338a575b815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a490565b805f52600360205260405f2060018154019055613344565b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f198154019055613335565b335f9081527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df602052604090205460ff161561340d57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260076020908152604080832033845290915290205460ff16156134485750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff166134e4575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff16156134e4575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b9291813b61357d575b50505050565b604051630a85bd0160e11b81526001600160a01b0394851660048201525f602482015260448101919091526080606482015292169190602090829081906135c8906084830190612803565b03815f865af15f9181613637575b5061360457506135e4612c10565b805190816135ff5782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b0161362557505f808080613577565b633250574960e11b5f5260045260245ffd5b9091506020813d602011613674575b8161365360209383612923565b8101031261029557516001600160e01b03198116810361029557905f6135d6565b3d9150613646565b823b61368a575b5050505050565b604051630a85bd0160e11b81526001600160a01b0391821660048201529181166024830152604482019390935260806064820152911691602090829081906136d6906084830190612803565b03815f865af15f9181613714575b506136f257506135e4612c10565b6001600160e01b03191663757a42ff60e11b0161362557505f80808080613683565b9091506020813d602011613751575b8161373060209383612923565b8101031261029557516001600160e01b03198116810361029557905f6136e4565b3d9150613723565b61376281612ca3565b506020906040516137738382612923565b5f8152815f526006835261378960405f20612944565b81511561380557808491516137c7575050506137a490612ca3565b505f6040516137b38382612923565b526137c16040519182612923565b5f815290565b613802935081906040519584879551918291018487015e8401908282015f8152815193849201905e01015f815203601f198101835282612923565b90565b9250505090565b601160536138029261381d81612a56565b855190959015613bf2576138319150614a00565b935b602094856040516138448282612923565b5f815291604051613856608082612923565b604981528281017f66696c6c3a2077686974653b20666f6e742d66616d696c793a2073616e732d7381527f657269663b20666f6e742d73697a653a20323070783b20666f6e742d776569676040830152856868743a20626f6c643b60b81b6060840152613ada575b600f9160828592603c97985f14613ab7576040516138dd604082612923565b601781527f3c672066696c7465723d2275726c2823676c6f7729223e00000000000000000085820152925b6040519d8e9a7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f3230828d01527f30302f73766722207072657365727665417370656374526174696f3d22784d6960408d01527f6e594d696e206d656574222076696577426f783d22302030203335302033353060608d015261111f60f11b60808d0152805191829101858d015e8a01906e01e39ba3cb6329f173130b9b2903d9608d1b84830152518092609183015e01019069103e9e17b9ba3cb6329f60b11b848301527f3c726563742077696474683d223130302522206865696768743d223130302522601983015271103334b6361e91119b199b1b33189110179f60711b6039830152805192839101604b83015e0101907f3c7465787420783d223530252220793d223530252220636c6173733d22626173848301527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465605c830152723c3a16b0b731b437b91e9136b4b2323632911f60691b607c830152805192839101608f83015e0101701e17ba32bc3a1f1e17b39f1e17b9bb339f60791b838201520301600e19810184520182612923565b604051613ac5604082612923565b60038152621e339f60e91b8582015292613908565b603c9450600f9160828592610100613af56040519182612923565b60c181527f3c646566733e3c66696c7465722069643d22676c6f772220783d222d32302522858201527f20793d222d323025222077696474683d223134302522206865696768743d223160408201527f343025223e3c6665476175737369616e426c757220737464446576696174696f60608201527f6e3d22352220726573756c743d22626c7572222f3e3c6665436f6d706f73697460808201527f6520696e3d22536f75726365477261706869632220696e323d22626c7572222060a08201527f6f70657261746f723d226f766572222f3e3c2f66696c7465723e3c2f6465667360c0820152601f60f91b60e0820152975092505091506138be565b50613c3a6029613c03602093614898565b60405193849168427261674e4654202360b81b828401528051918291018484015e81015f838201520301601f198101835282612923565b93613833565b908151811015613c51570160200190565b634e487b7160e01b5f52603260045260245ffd5b805190600482106134e457600b821015614131575b6003198201828111612a4257601760f91b6001600160f81b0319613c9e8385613c40565b511614613df4575b600583101580613dc5575b613cbd575b5050505f90565b613cdc906001600160f81b031990613cd59084613c40565b5116614e19565b906002198301838111612a4257613d01906001600160f81b031990613cd59084613c40565b926001198101818111612a4257613d26906001600160f81b031990613cd59085613c40565b915f198201918211612a4257613cd5613d449260ff60f81b92613c40565b6001600160f81b0319909216607760f81b149283613dad575b5082613d95575b5081613d7d575b50613d78575f8080613cb6565b600190565b6001600160f81b031916606d60f81b1490505f613d6b565b6001600160f81b031916603160f91b1491505f613d64565b6001600160f81b031916606560f81b1492505f613d5d565b506004198301838111612a4257601760f91b906001600160f81b031990613dec9085613c40565b511614613cb1565b6002198301838111612a4257613e18906001600160f81b031990613cd59085613c40565b6001198401848111612a4257613e3c906001600160f81b031990613cd59086613c40565b905f198501858111612a4257613e60906001600160f81b031990613cd59087613c40565b906001600160f81b031916606d60f81b8114808061411a575b80614103575b613fa857607760f81b8214806140ec575b806140d5575b613fa857606f60f81b821480806140be575b806140a7575b613fe2578180614090575b80614079575b613fe257606160f81b831480614062575b8061404b575b613fe2578180614034575b8061401d575b613fe2578180614006575b80613fef575b613fe25780613fcb575b80613fb4575b613fa85780613f91575b80613f7a575b613f6f57606760f81b149182613f57575b5081613f3f575b5015613ca6575b505050600190565b6001600160f81b031916603360f91b1490505f613f30565b6001600160f81b031916606960f81b1491505f613f29565b505050505050600190565b506001600160f81b03198216603b60f91b14613f18565b506001600160f81b03198316600d60fa1b14613f12565b50505050505050600190565b506001600160f81b03198316603b60f91b14613f08565b506001600160f81b03198416606760f81b14613f02565b5050505050505050600190565b506001600160f81b03198416603b60f91b14613ef8565b506001600160f81b03198516606f60f81b14613ef2565b506001600160f81b03198416600d60fa1b14613ee7565b506001600160f81b03198516600760fc1b14613ee1565b506001600160f81b03198416606360f81b14613ed6565b506001600160f81b03198516606160f81b14613ed0565b506001600160f81b03198416606160f81b14613ebf565b506001600160f81b03198516600d60fa1b14613eb9565b506001600160f81b03198416606760f81b14613eae565b506001600160f81b03198516606760f81b14613ea8565b506001600160f81b03198316603b60f91b14613e96565b506001600160f81b03198416606160f81b14613e90565b506001600160f81b03198316603360f81b14613e7f565b506001600160f81b03198416600760fc1b14613e79565b8115613c515760208101516001600160f81b031916601960fa1b148061455e575b80614539575b80614514575b806144ef575b15613c7a57805160051015613c51576025810180516001600160f81b031916606160f81b14806144ca575b806144a5575b80614480575b8061445b575b80614436575b613f3757815160051015613c515780516001600160f81b031916603b60f91b1480614411575b806143ec575b806143c7575b806143a2575b8061437d575b613f3757600e831015908161435a575b5080614335575b80614310575b806142eb575b806142c6575b806142a1575b8061427c575b80614257575b80614232575b15613c7a575050600190565b508051600d1015613c5157602d8101516001600160f81b031916603360f91b14614226565b508051600c1015613c5157602c8101516001600160f81b031916606960f81b14614220565b508051600b1015613c5157602b8101516001600160f81b031916606760f81b1461421a565b508051600a1015613c5157602a8101516001600160f81b031916602f60f81b14614214565b50805160091015613c515760298101516001600160f81b031916606560f81b1461420e565b50805160081015613c515760288101516001600160f81b031916606760f81b14614208565b50805160071015613c515760278101516001600160f81b031916606160f81b14614202565b50805160061015613c515760268101516001600160f81b031916606d60f81b146141fc565b9050815160051015613c5157516001600160f81b031916606960f81b145f6141f5565b508151600a1015613c5157602a8201516001600160f81b031916602f60f81b146141e5565b50815160091015613c515760298201516001600160f81b031916606f60f81b146141df565b50815160081015613c515760288201516001600160f81b031916606560f81b146141d9565b50815160071015613c515760278201516001600160f81b031916601960fa1b146141d3565b50815160061015613c515760268201516001600160f81b031916606960f81b146141cd565b508151600a1015613c5157602a8201516001600160f81b031916602f60f81b146141a7565b50815160091015613c515760298201516001600160f81b031916606f60f81b146141a1565b50815160081015613c515760288201516001600160f81b031916606960f81b1461419b565b50815160071015613c515760278201516001600160f81b031916601960fa1b14614195565b50815160061015613c515760268201516001600160f81b031916607560f81b1461418f565b50805160041015613c515760248101516001600160f81b031916601d60f91b14614164565b50805160031015613c515760238101516001600160f81b031916606160f81b1461415e565b50805160021015613c515760228101516001600160f81b031916601d60fa1b14614158565b50805160011015613c515760218101516001600160f81b031916606160f81b14614152565b9061458d826129e4565b61459a6040519182612923565b82815280926145ab601f19916129e4565b0190602036910137565b80515f5f5b82811061475657508015614751576145d56145da9183612a35565b614583565b915f5f915b8383106145ed575050505090565b6145f78382613c40565b51928360f81c602281148015614747575b15614652575082605c61462761462060019596612d0f565b9289613c40565b5361464861463482612d0f565b956001600160f81b0319165f1a9188613c40565b535b0191906145df565b6020811015614735576147168495605c61467861467160019798612d0f565b988b613c40565b53607561468761467189612d0f565b53603061469661467189612d0f565b5360306146a561467189612d0f565b536040906146b582519283612923565b601082526f181899199a1a9b1b9c1cb0b131b232b360811b60208301526001600160f81b0319906146e99060fc1c83613c40565b5116966147026146f882612d0f565b985f1a918b613c40565b536001600160f81b031992600f1690613c40565b51169361472f61472582612d0f565b955f1a9188613c40565b5361464a565b508261472f6146346001949592612d0f565b50605c8114614608565b505090565b90601160f91b6001600160f81b031961476f8487613c40565b51161480156147c2575b1561479157614789600191612d0f565b915b016145ba565b90602061479e8286613c40565b5160f81c106147b0575b60019061478b565b9060058101809111612a4257906147a8565b50601760fa1b6001600160f81b03196147db8487613c40565b511614614779565b60048110156104c0578015614872576001811461484b576002146148265760405161480f604082612923565b6007815266119b1859d9d95960ca1b602082015290565b604051614834604082612923565b600781526610db185a5b595960ca1b602082015290565b5060405161485a604082612923565b600881526715995c9a599a595960c21b602082015290565b50604051614881604082612923565b600781526650656e64696e6760c81b602082015290565b805f9172184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8210156149dd575b806d04ee2d6d415b85acef8100000000600a9210156149c2575b662386f26fc100008110156149ae575b6305f5e10081101561499d575b61271081101561498e575b6064811015614980575b1015614975575b600a6021600184019361491f856129e4565b9461492d6040519687612923565b80865261493c601f19916129e4565b013660208701378401015b5f1901916f181899199a1a9b1b9c1cb0b131b232b360811b8282061a835304801561475157600a9091614947565b60019091019061490d565b606460029104930192614906565b612710600491049301926148fc565b6305f5e100600891049301926148f1565b662386f26fc10000601091049301926148e4565b6d04ee2d6d415b85acef8100000000602091049301926148d4565b506040915072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b81046148ba565b80515f5f5b828110614be057508015614751576145d5614a209183612a35565b915f905f5b838110614a33575050505090565b6001600160f81b0319614a468284613c40565b5116601360f91b8103614ab057506001906026614a6c614a6586612d0f565b9588613c40565b536061614a7b614a6586612d0f565b53606d614a8a614a6586612d0f565b536070614a99614a6586612d0f565b53603b614aa8614a6586612d0f565b535b01614a25565b600f60fa1b8103614b0057506001906026614acd614a6586612d0f565b53606c614adc614a6586612d0f565b536074614aeb614a6586612d0f565b53603b614afa614a6586612d0f565b53614aaa565b601f60f91b8103614b2c57506001906026614b1d614a6586612d0f565b536067614adc614a6586612d0f565b601160f91b8103614b7657506001906026614b49614a6586612d0f565b536071614b58614a6586612d0f565b536075614b67614a6586612d0f565b53606f614adc614a6586612d0f565b602760f81b8103614bcf57506001906026614b93614a6586612d0f565b536061614ba2614a6586612d0f565b536070614bb1614a6586612d0f565b53606f614bc0614a6586612d0f565b536073614aeb614a6586612d0f565b9260019190614afa61472582612d0f565b90601360f91b6001600160f81b0319614bf98487613c40565b511603614c165760048101809111612a4257600190915b01614a05565b600f60fa1b6001600160f81b0319614c2e8487613c40565b511603614c495760038101809111612a425760019091614c10565b601f60f91b6001600160f81b0319614c618487613c40565b511603614c7c5760038101809111612a425760019091614c10565b601160f91b6001600160f81b0319614c948487613c40565b511603614caf5760058101809111612a425760019091614c10565b90602760f81b6001600160f81b0319614cc88387613c40565b511614614cd8575b600190614c10565b9060058101809111612a425790614cd0565b90815115614e0957815160028101809111612a425760039004600281901b91906001600160fe1b03811603612a4257604051917f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f603f52602083018480518101602081018051915f82525b808910614dcd5750602095969750906003929152510680600114614db857600214614dab575b50808452830101604052565b603d905f1901535f614d9f565b50603d90815f1982015360011901535f614d9f565b939760036004910198603f8a51818160121c165183538181600c1c16516001840153818160061c16516002840153165160038201530193614d79565b90506040516137c1602082612923565b8060f81c604181101580614e4d575b614e30575090565b602091500160ff8111612a425760f81b6001600160f81b03191690565b50605a811115614e2856fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00eb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f377f8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7a2646970667358221220bb136adb6700c8f279d0458f64c95940ee473a1c41ce13308f7232e9b6a7c64464736f6c634300081c00336d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df"
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
      "bytecode": "0x6101806040523461007d5761001b6100156100ce565b916101c0565b6040516122279081610e6a82396080518161158e015260a0518161164b015260c05181611558015260e051816115dd01526101005181611603015261012051816109a2015261014051816109cb01526101605181818161066b0152610fce0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b601f909101601f19168101906001600160401b038211908210176100b857604052565b610081565b604051906100cc604083610095565b565b61313190606082380392836040519485926100e98285610095565b83398101031261007d578151906001600160a01b038216820361007d576040602084015193015191929190565b60405190610125604083610095565b60048252565b6040519061013a604083610095565b60018252565b6040519061014f604083610095565b600a825269213930b3902a37b5b2b760b11b6020830152565b1561016f57565b60405162461bcd60e51b8152602060048201526024808201527f4d617820737570706c79206d757374206265203e3d20696e697469616c20737560448201526370706c7960e01b6064820152608490fd5b916101c9610140565b6101d1610140565b906101da610116565b90634252414760e01b60208301526101f061012b565b603160f81b60208201908152845190949193916001600160401b0382116100b85761022582610220600354610367565b61039f565b602090601f83116001146102e05791806102599261026195945f926102d5575b50508160011b915f199060031b1c19161790565b60035561043e565b61026a816106d4565b61012052610277826107c9565b610140526020815191012060e052519020610100524660a0526102986108bb565b6080523060c0526102ab82821015610168565b610160526102b882610517565b506102c28261058d565b50806102cc575050565b6100cc91610628565b015190505f80610245565b60035f52601f19831691907fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b925f5b81811061034f575091600193918561026197969410610337575b505050811b0160035561043e565b01515f1960f88460031b161c191690555f8080610329565b9293602060018192878601518155019501930161030f565b90600182811c92168015610395575b602083101461038157565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610376565b601f81116103ab575050565b60035f5260205f20906020601f840160051c830193106103e5575b601f0160051c01905b8181106103da575050565b5f81556001016103cf565b90915081906103c6565b601f82116103fc57505050565b5f5260205f20906020601f840160051c83019310610434575b601f0160051c01905b818110610429575050565b5f815560010161041e565b9091508190610415565b80519091906001600160401b0381116100b85761046781610460600454610367565b60046103ef565b602092601f821160011461049b57610496929382915f926102d55750508160011b915f199060031b1c19161790565b600455565b60045f52601f198216937f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b915f5b8681106104ff57508360019596106104e7575b505050811b01600455565b01515f1960f88460031b161c191690555f80806104dc565b919260206001819286850151815501940192016104c9565b6001600160a01b0381165f9081525f5160206130d15f395f51905f52602052604090205460ff16610588576001600160a01b03165f8181525f5160206130d15f395f51905f5260205260408120805460ff191660011790553391905f5160206130915f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f5160206130f15f395f51905f52602052604090205460ff16610588576001600160a01b0381165f9081525f5160206130f15f395f51905f5260205260409020805460ff1916600117905533906001600160a01b03167f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a65f5160206130915f395f51905f525f80a4600190565b91906001600160a01b03831680156106c1576002548281018091116106bc576002555f81815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254926001600160d01b038085116106a557506100cc929350610998565b630e58ae9360e11b5f52600485905260245260445ffd5b610984565b63ec442f0560e01b5f525f60045260245ffd5b908151602081105f146106ef5750906106ec90610919565b90565b6001600160401b0381116100b8576107138161070c600554610367565b60056103ef565b602092601f821160011461074a57610742929382915f926102d55750508160011b915f199060031b1c19161790565b60055560ff90565b60055f52601f198216937f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0915f5b8681106107b15750836001959610610799575b505050811b0160055560ff90565b01515f1960f88460031b161c191690555f808061078b565b91926020600181928685015181550194019201610778565b908151602081105f146107e15750906106ec90610919565b6001600160401b0381116100b857610805816107fe600654610367565b60066103ef565b602092601f821160011461083c57610834929382915f926102d55750508160011b915f199060031b1c19161790565b60065560ff90565b60065f52601f198216937ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f915f5b8681106108a3575083600195961061088b575b505050811b0160065560ff90565b01515f1960f88460031b161c191690555f808061087d565b9192602060018192868501518155019401920161086a565b60e051610100516040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815261091360c082610095565b51902090565b601f815111610944576020815191015160208210610935571790565b5f198260200360031b1b161790565b604460209160405192839163305a27a960e01b83528160048401528051918291826024860152018484015e5f828201840152601f01601f19168101030190fd5b634e487b7160e01b5f52601160045260245ffd5b906109a281610a97565b9165ffffffffffff4311610a7f57600a5480610a4957506109dc6109cc6100cc945f5b6001610e0d565b65ffffffffffff4316600a610d37565b50506001600160a01b03168015610a31575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116610bc6565b610a42610a3d83610a97565b610ac8565b50506109ee565b92835f198101116106bc57600a5f525f5160206130b15f395f51905f52909301546100cc936109dc916109cc919060301c6109c5565b6306dfcc6560e41b5f5260306004524360245260445ffd5b6001600160d01b038111610ab1576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b65ffffffffffff4311610a7f57600a5480610af257506109cc610aee915f5b6002610e0d565b9091565b805f198101116106bc57600a5f525f5160206130b15f395f51905f520154610aee916109cc9160301c610ae7565b65ffffffffffff4311610a7f57805480610b545750610b44610aee925f6002610e0d565b9065ffffffffffff431690610d37565b805f198101116106bc575f82815260209020015f190154610aee92610b449160301c610ae7565b65ffffffffffff4311610a7f57805480610b9f5750610b44610aee925f6001610e0d565b805f198101116106bc575f82815260209020015f190154610aee92610b449160301c6109c5565b6001600160a01b03808316939291908116908185141580610cb9575b610bee575b5050505050565b81610c5f575b505082610c03575b8080610be7565b6001600160a01b03165f9081526009602052604090205f5160206131115f395f51905f5291610c3c91610c369091610a97565b90610b7b565b604080516001600160d01b039384168152919092166020820152a25f8080610bfc565b6001600160a01b03165f9081526009602052604090205f5160206131115f395f51905f5290610c9790610c9186610a97565b90610b20565b604080516001600160d01b039384168152919092166020820152a25f80610bf4565b50831515610be2565b5f198101919082116106bc57565b908154680100000000000000008110156100b85760018101808455811015610d23575f9283526020928390208251929093015160301b65ffffffffffff191665ffffffffffff9290921691909117910155565b634e487b7160e01b5f52603260045260245ffd5b80549293928015610de357610d4e610d5991610cc2565b825f5260205f200190565b8054603081901c9365ffffffffffff91821692918116808411610dd457879303610da05750610d9c92509065ffffffffffff82549181199060301b169116179055565b9190565b915050610d9c91610dc0610db26100bd565b65ffffffffffff9093168352565b6001600160d01b0386166020830152610cd0565b632520601d60e01b5f5260045ffd5b5090610e0891610df4610db26100bd565b6001600160d01b0385166020830152610cd0565b5f9190565b91909180600114610e4f57600214610e3357634e487b7160e01b5f52605160045260245ffd5b6001600160d01b03908116918116919091039081116106bc5790565b506001600160d01b03918216908216019081116106bc579056fe60806040526004361015610011575f80fd5b5f3560e01c806301ffc9a71461024457806306fdde031461023f578063095ea7b31461023a57806318160ddd1461023557806323b872dd14610230578063248a9ca31461022b5780632f2ff15d14610226578063313ce567146102215780633644e5151461021c57806336568abe146102175780633a46b1a81461021257806340c10f191461020d57806342966c68146102085780634bf5d7e914610203578063587cde1e146101fe5780635c19a95c146101f95780636fcfff45146101f457806370a08231146101ef57806379cc6790146101ea5780637ecebe00146101e557806384b0196e146101e05780638e539e8c146101db57806391d14854146101d657806391ddadf4146101d157806395d89b41146101cc5780639ab24eb0146101c7578063a217fddf146101c2578063a9059cbb146101bd578063c3cda520146101b8578063d505accf146101b3578063d5391393146101ae578063d547741f146101a9578063d5abeb01146101a4578063dd62ed3e1461019f5763f1127ed81461019a575f80fd5b611048565b610ff1565b610fb7565b610f79565b610f3f565b610e1b565b610d0c565b610cc6565b610cac565b610c65565b610bc0565b610b95565b610b46565b610a87565b61098a565b610952565b610922565b6108ea565b610888565b610866565b610826565b610796565b610779565b610638565b610553565b61050f565b6104f5565b6104da565b610495565b610462565b61042a565b61040d565b6103dc565b6102d6565b3461029a57602036600319011261029a5760043563ffffffff60e01b811680910361029a57602090637965db0b60e01b8114908115610289575b506040519015158152f35b6301ffc9a760e01b1490505f61027e565b5f80fd5b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b9060206102d392818152019061029e565b90565b3461029a575f36600319011261029a576040515f6003546102f68161110e565b808452906001811690811561038c575060011461032e575b61032a8361031e818503826111fc565b604051918291826102c2565b0390f35b60035f9081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b939250905b8082106103725750909150810160200161031e61030e565b91926001816020925483858801015201910190929161035a565b60ff191660208086019190915291151560051b8401909101915061031e905061030e565b600435906001600160a01b038216820361029a57565b602435906001600160a01b038216820361029a57565b3461029a57604036600319011261029a576104026103f86103b0565b6024359033611948565b602060405160018152f35b3461029a575f36600319011261029a576020600254604051908152f35b3461029a57606036600319011261029a576104026104466103b0565b61044e6103c6565b6044359161045d833383611262565b611330565b3461029a57602036600319011261029a57602061048d6004355f52600b602052600160405f20015490565b604051908152f35b3461029a57604036600319011261029a576104d86004356104b46103c6565b906104d36104ce825f52600b602052600160405f20015490565b61148b565b6114c5565b005b3461029a575f36600319011261029a57602060405160128152f35b3461029a575f36600319011261029a57602061048d611555565b3461029a57604036600319011261029a5760043561052b6103c6565b336001600160a01b03821603610544576104d891611671565b63334bd91960e11b5f5260045ffd5b3461029a57604036600319011261029a5761056c6103b0565b6001600160a01b03165f90815260096020526040902061058d6024356116f9565b8154905f8291600584116105e0575b6105a7935084611b68565b90816105c557505060205f5b6040516001600160d01b039091168152f35b6105d0602092611732565b905f52815f20015460301c6105b3565b91926105eb81611a0a565b8103908111610633576105a793855f5265ffffffffffff8260205f2001541665ffffffffffff8516105f1461062157509161059c565b92915061062d9061121e565b9061059c565b6110fa565b3461029a57604036600319011261029a576106516103b0565b60243561065c61141c565b600254818101809111610633577f000000000000000000000000000000000000000000000000000000000000000010610740576001600160a01b038216801561072d576106b36106ae8360025461122c565b600255565b6001600160a01b0383165f90815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9190a3600254916001600160d01b03808411610716576104d88383611fd1565b630e58ae9360e11b5f52600484905260245260445ffd5b63ec442f0560e01b5f525f60045260245ffd5b60405162461bcd60e51b815260206004820152601160248201527045786365656473206d6178537570706c7960781b6044820152606490fd5b3461029a57602036600319011261029a576104d860043533611740565b3461029a575f36600319011261029a576107af436119bd565b65ffffffffffff806107c0436119bd565b169116036108175761032a6040516107d96040826111fc565b601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015260405191829160208352602083019061029e565b6301bfc1c560e61b5f5260045ffd5b3461029a57602036600319011261029a576001600160a01b036108476103b0565b165f526008602052602060018060a01b0360405f205416604051908152f35b3461029a57602036600319011261029a576104d86108826103b0565b33611868565b3461029a57602036600319011261029a576001600160a01b036108a96103b0565b165f52600960205260405f205463ffffffff81116108d35760405163ffffffff9091168152602090f35b6306dfcc6560e41b5f52602060045260245260445ffd5b3461029a57602036600319011261029a57602061048d6109086103b0565b6001600160a01b03165f9081526020819052604090205490565b3461029a57604036600319011261029a576104d861093e6103b0565b6024359061094d823383611262565b611740565b3461029a57602036600319011261029a576001600160a01b036109736103b0565b165f526007602052602060405f2054604051908152f35b3461029a575f36600319011261029a57610a2e6109c67f0000000000000000000000000000000000000000000000000000000000000000611ce3565b6109ef7f0000000000000000000000000000000000000000000000000000000000000000611d43565b60206040516109fe82826111fc565b5f815281610a3c81830194601f198301368737604051978897600f60f81b895260e0858a015260e089019061029e565b90878203604089015261029e565b914660608701523060808701525f60a087015285830360c087015251918281520192915f5b828110610a7057505050500390f35b835185528695509381019392810192600101610a61565b3461029a57602036600319011261029a57610aa36004356116f9565b600a54905f829160058411610af2575b610abf9350600a611b68565b80610ad057506040515f8152602090f35b610aed610ade602092611732565b600a5f52825f20015460301c90565b6105b3565b9192610afd81611a0a565b810390811161063357610abf93600a5f5265ffffffffffff8260205f2001541665ffffffffffff8516105f14610b34575091610ab3565b929150610b409061121e565b90610ab3565b3461029a57604036600319011261029a57602060ff610b89600435610b696103c6565b905f52600b845260405f209060018060a01b03165f5260205260405f2090565b54166040519015158152f35b3461029a575f36600319011261029a576020610bb0436119bd565b65ffffffffffff60405191168152f35b3461029a575f36600319011261029a576040515f600454610be08161110e565b808452906001811690811561038c5750600114610c075761032a8361031e818503826111fc565b60045f9081527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b939250905b808210610c4b5750909150810160200161031e61030e565b919260018160209254838588010152019101909291610c33565b3461029a57602036600319011261029a576001600160a01b03610c866103b0565b165f526009602052602060018060d01b03610ca360405f206118e9565b16604051908152f35b3461029a575f36600319011261029a5760206040515f8152f35b3461029a57604036600319011261029a57610402610ce26103b0565b6024359033611330565b6064359060ff8216820361029a57565b6084359060ff8216820361029a57565b3461029a5760c036600319011261029a57610d256103b0565b60243590604435610d34610cec565b6084359060a43592804211610e095791610db99391610dab610db09460405160208101917fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf835260018060a01b038a1660408301528a6060830152608082015260808152610da360a0826111fc565b519020611913565b611d7a565b90929192611e25565b6001600160a01b0381165f908152600760205260409020805460018101909155809303610dea576104d89250611868565b90506301d4b62360e61b5f5260018060a01b031660045260245260445ffd5b632341d78760e11b5f5260045260245ffd5b3461029a5760e036600319011261029a57610e346103b0565b610e3c6103c6565b6044359060643592610e4c610cfc565b60a43560c43590864211610f2c576001600160a01b0384165f908152600760205260409020805460018101909155610ef19390610eec909860405160208101917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9835260018060a01b0389169b8c604084015260018060a01b038b1660608401528b608084015260a083015260c082015260c08152610da360e0826111fc565b611939565b936001600160a01b03851603610f0b576104d89350611948565b6325c0072360e11b5f526001600160a01b038085166004521660245260445ffd5b8663313c898160e11b5f5260045260245ffd5b3461029a575f36600319011261029a5760206040517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b3461029a57604036600319011261029a576104d8600435610f986103c6565b90610fb26104ce825f52600b602052600160405f20015490565b611671565b3461029a575f36600319011261029a5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b3461029a57604036600319011261029a57602061103f61100f6103b0565b6110176103c6565b6001600160a01b039182165f9081526001855260408082209290931681526020919091522090565b54604051908152f35b3461029a57604036600319011261029a576110616103b0565b6024359063ffffffff8216820361029a5761032a916110b09161108261124a565b5061108b61124a565b506001600160a01b03165f9081526009602052604090206110aa61124a565b50611ea1565b50604051906110be826111db565b5465ffffffffffff811680835260309190911c60209283019081526040805192835290516001600160d01b031692820192909252918291820190565b634e487b7160e01b5f52601160045260245ffd5b90600182811c9216801561113c575b602083101461112857565b634e487b7160e01b5f52602260045260245ffd5b91607f169161111d565b5f92918154916111558361110e565b80835292600181169081156111aa575060011461117157505050565b5f9081526020812093945091925b838310611190575060209250010190565b60018160209294939454838587010152019101919061117f565b915050602093945060ff929192191683830152151560051b010190565b634e487b7160e01b5f52604160045260245ffd5b6040810190811067ffffffffffffffff8211176111f757604052565b6111c7565b90601f8019910116810190811067ffffffffffffffff8211176111f757604052565b906001820180921161063357565b9190820180921161063357565b604051906112486040836111fc565b565b60405190611257826111db565b5f6020838281520152565b6001600160a01b039081165f81815260016020908152604080832094861683529390529190912091929091545f19811061129d575b50505050565b81811061130f5782156112fc576001600160a01b038416156112e9576112df925f526001602052039160405f209060018060a01b03165f5260205260405f2090565b555f808080611297565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b83637dc7a0d960e11b5f5260018060a01b031660045260245260445260645ffd5b6001600160a01b038116939291908415611409576001600160a01b038216801561072d576001600160a01b0382165f90815260208190526040902054958487106113e357846112489697036113948460018060a01b03165f525f60205260405f2090565b556001600160a01b0384165f9081526020819052604090208054860190556040518581527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602090a361204a565b63391434e360e21b5f526001600160a01b0383166004526024879052604485905260645ffd5b634b637e8f60e11b5f525f60045260245ffd5b335f9081527ff70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8602052604090205460ff161561145457565b63e2517d3f60e01b5f52336004527f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660245260445ffd5b5f818152600b6020908152604080832033845290915290205460ff16156114af5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff1661154f575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916600117905533916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b50505f90565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161480611648575b156115b0577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815261164260c0826111fc565b51902090565b507f00000000000000000000000000000000000000000000000000000000000000004614611587565b5f818152600b602090815260408083206001600160a01b038616845290915290205460ff161561154f575f818152600b602090815260408083206001600160a01b03861684529091529020805460ff1916905533916001600160a01b0316907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4600190565b65ffffffffffff611709436119bd565b168082101561171c57506102d3906119bd565b90637669fc0f60e11b5f5260045260245260445ffd5b5f1981019190821161063357565b6001600160a01b038116908115611409576001600160a01b0381165f90815260208190526040902054838110611843579061179284611248959493039160018060a01b03165f525f60205260405f2090565b5581600254036002555f817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405180602081018782520390a3801561182b575b6117e46117df83611eca565b611f9c565b50505f908152600860205260408120549080527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7546001600160a01b039081169116611bc1565b61183c61183783611eca565b611f67565b50506117d3565b63391434e360e21b5f526001600160a01b03909116600452602452604482905260645ffd5b6001600160a01b038181165f81815260086020526040812080548685166001600160a01b031982168117909255611248969416946118e39390928691907f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9080a46001600160a01b03165f9081526020819052604090205490565b91611bc1565b805490816118f75750505f90565b815f19810111610633575f525f199060205f2001015460301c90565b60429061191e611555565b906040519161190160f01b8352600283015260228201522090565b916102d39391610db093611d7a565b6001600160a01b03169081156112fc576001600160a01b0381169283156112e957806119b07f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92593855f52600160205260405f209060018060a01b03165f5260205260405f2090565b55604051908152602090a3565b65ffffffffffff81116119d55765ffffffffffff1690565b6306dfcc6560e41b5f52603060045260245260445ffd5b81156119f6570490565b634e487b7160e01b5f52601260045260245ffd5b60018111156102d357806001600160801b821015611b2b575b611ad1611ac7611abd611ab3611aa9611a9f611a8e611ad89760048a600160401b611add9c1015611b1e575b640100000000811015611b11575b62010000811015611b04575b610100811015611af7575b6010811015611aea575b1015611ae2575b60030260011c90565b611a98818b6119ec565b0160011c90565b611a98818a6119ec565b611a9881896119ec565b611a9881886119ec565b611a9881876119ec565b611a9881866119ec565b80936119ec565b821190565b900390565b60011b611a85565b60041c9160021b91611a7e565b60081c9160041b91611a74565b60101c9160081b91611a69565b60201c9160101b91611a5d565b60401c9160201b91611a4f565b5050611add611ad8611ad1611ac7611abd611ab3611aa9611a9f611a8e611b528a60801c90565b9850600160401b9750611a239650505050505050565b905b838310611b775750505090565b90919280841860011c8185160190835f5265ffffffffffff8260205f2001541665ffffffffffff8416105f14611bb15750925b9190611b6a565b9350611bbc9061121e565b611baa565b6001600160a01b03808316939291908116908185141580611cda575b611be9575b5050505050565b81611c6d575b505082611bfe575b8080611be2565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72491611c4a91611c449091611eca565b90611f33565b604080516001600160d01b039384168152919092166020820152a25f8080611bf7565b6001600160a01b03165f9081526009602052604090207fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72490611cb890611cb286611eca565b90611efb565b604080516001600160d01b039384168152919092166020820152a25f80611bef565b50831515611bdd565b60ff8114611d295760ff811690601f8211611d1a5760405191611d076040846111fc565b6020808452838101919036833783525290565b632cd44ac360e21b5f5260045ffd5b506040516102d381611d3c816005611146565b03826111fc565b60ff8114611d675760ff811690601f8211611d1a5760405191611d076040846111fc565b506040516102d381611d3c816006611146565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611dfc579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15611df1575f516001600160a01b03811615611de757905f905f90565b505f906001905f90565b6040513d5f823e3d90fd5b5050505f9160039190565b60041115611e1157565b634e487b7160e01b5f52602160045260245ffd5b611e2e81611e07565b80611e37575050565b611e4081611e07565b60018103611e575763f645eedf60e01b5f5260045ffd5b611e6081611e07565b60028103611e7b575063fce698f760e01b5f5260045260245ffd5b80611e87600392611e07565b14611e8f5750565b6335e2f38360e21b5f5260045260245ffd5b8054821015611eb6575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b6001600160d01b038111611ee4576001600160d01b031690565b6306dfcc6560e41b5f5260d060045260245260445ffd5b90611f05436119bd565b90611f0f836118e9565b6001600160d01b03918216908216039190821161063357611f2f9261211b565b9091565b90611f3d436119bd565b90611f47836118e9565b6001600160d01b03918216908216019190821161063357611f2f9261211b565b611f70436119bd565b90611f7b600a6118e9565b6001600160d01b039182169082160190811161063357611f2f91600a61211b565b611fa5436119bd565b90611fb0600a6118e9565b6001600160d01b039182169082160390811161063357611f2f91600a61211b565b9061124891611fe261183783611eca565b50506001600160a01b03168015612037575b60086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7545f9182526040909120546001600160a01b039081169116611bc1565b6120436117df83611eca565b5050611ff4565b61124892916001600160a01b039091169081156120ad575b6001600160a01b031690811561209a575b5f90815260086020526040808220549282529020546001600160a01b039081169116611bc1565b6120a66117df84611eca565b5050612073565b6120b961183784611eca565b5050612062565b8054600160401b8110156111f7576120dd91600182018155611ea1565b61210857815160209092015160301b65ffffffffffff191665ffffffffffff92909216919091179055565b634e487b7160e01b5f525f60045260245ffd5b805492939280156121c75761213261213d91611732565b825f5260205f200190565b8054603081901c9365ffffffffffff918216929181168084116121b857879303612184575061218092509065ffffffffffff82549181199060301b169116179055565b9190565b915050612180916121a4612196611239565b65ffffffffffff9093168352565b6001600160d01b03861660208301526120c0565b632520601d60e01b5f5260045ffd5b50906121ec916121d8612196611239565b6001600160d01b03851660208301526120c0565b5f919056fea2646970667358221220953ba7c4a4aa50794cfc05b329003a4d4cf134b95ee0b5f79d8ad89b4ec3f9fb64736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0dc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a7df7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76f70e363b3d7895af770c4a138460777d52eebd3cb9962ccc6b58721f6127bbc8dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"
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
      "bytecode": "0x60803461007257601f610fcf38819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007257516001600160a01b0381168103610072578061005c6100629261008a565b50610100565b50604051610ddb90816101948239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381165f9081525f516020610faf5f395f51905f52602052604090205460ff166100fb576001600160a01b03165f8181525f516020610faf5f395f51905f5260205260408120805460ff191660011790553391905f516020610f6f5f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f516020610f8f5f395f51905f52602052604090205460ff166100fb576001600160a01b03165f8181525f516020610f8f5f395f51905f5260205260408120805460ff191660011790553391907f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea09905f516020610f6f5f395f51905f529080a460019056fe6080806040526004361015610012575f80fd5b5f3560e01c90816301ffc9a71461098457508063248a9ca3146109525780632f2ff15d1461091557806336568abe146108d157806374d4e491146108b457806390229af7146107cb57806391d1485414610783578063a217fddf14610769578063a622ee7c146106d6578063b9209e3314610699578063ceb68c23146105e5578063d42b291c14610185578063d547741f14610141578063d7bfe386146100ff5763e7705db6146100c1575f80fd5b346100fb575f3660031901126100fb5760206040517f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea098152f35b5f80fd5b346100fb5760203660031901126100fb576004356002548110156100fb57610128602091610b78565b905460405160039290921b1c6001600160a01b03168152f35b346100fb5760403660031901126100fb576101836004356101606109d7565b9061017e610179825f525f602052600160405f20015490565b610c65565b610d25565b005b346100fb5760803660031901126100fb5761019e6109ed565b60243560058110156100fb5760443567ffffffffffffffff81116100fb576101ca903690600401610b4a565b60649291923567ffffffffffffffff81116100fb576101ed903690600401610b4a565b9390946101f8610bf6565b6001600160a01b03169384156105ae57845f52600160205260ff60405f20541615610569575b6040519061022b82610a6c565b6001825261025b6020830197610241878a610ba4565b61024c368787610bb0565b92604085019384523691610bb0565b9660608301978852865f52600160205260405f209251151560ff8019855416911617835551600581101561055557825461ff00191660089190911b61ff0016178255518051600183019167ffffffffffffffff821161048a576102be8354610a34565b601f8111610510575b50602090601f83116001146104a9576002949392915f918361049e575b50508160011b915f199060031b1c19161790555b01945194855167ffffffffffffffff811161048a576103178254610a34565b601f8111610445575b506020601f82116001146103b757928492826060969361038598967f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec89a9b5f926103ac575b50508160011b915f199060031b1c19161790555b60405195868095610a03565b60406020850152816040850152848401375f828201840152601f01601f19168101030190a2005b015190508b80610365565b601f19821697835f52815f20985f5b81811061042d5750837f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec8999a61038599979489979460609a9760019510610415575b505050811b019055610379565b01515f1960f88460031b161c191690558b8080610408565b838301518b556001909a0199602093840193016103c6565b825f5260205f20601f830160051c81019160208410610480575b601f0160051c01905b8181106104755750610320565b5f8155600101610468565b909150819061045f565b634e487b7160e01b5f52604160045260245ffd5b015190508a806102e4565b90601f19831691845f52815f20925f5b8181106104f85750916001939185600298979694106104e0575b505050811b0190556102f8565b01515f1960f88460031b161c191690558a80806104d3565b929360206001819287860151815501950193016104b9565b835f5260205f20601f840160051c8101916020851061054b575b601f0160051c01905b81811061054057506102c7565b5f8155600101610533565b909150819061052a565b634e487b7160e01b5f52602160045260245ffd5b6002546801000000000000000081101561048a5780600161058d9201600255610b78565b81546001600160a01b0360039290921b91821b19169087901b17905561021e565b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b346100fb5760203660031901126100fb576105fe6109ed565b610606610bf6565b6001600160a01b03165f8181526001602052604090205460ff161561065f57805f52600160205260405f2060ff1981541690557fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a5f80a2005b60405162461bcd60e51b815260206004820152601260248201527115985d5b1d081b9bdd081d995c9a599a595960721b6044820152606490fd5b346100fb5760203660031901126100fb576001600160a01b036106ba6109ed565b165f526001602052602060ff60405f2054166040519015158152f35b346100fb5760203660031901126100fb576001600160a01b036106f76109ed565b165f52600160205261074660405f20610765815491610757610727600261072060018501610aaa565b9301610aaa565b91604051958560ff8897161515875260ff602088019160081c16610a03565b608060408601526080850190610a10565b908382036060850152610a10565b0390f35b346100fb575f3660031901126100fb5760206040515f8152f35b346100fb5760403660031901126100fb5761079c6109d7565b6004355f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b346100fb5760203660031901126100fb576107e46109ed565b6060806040516107f381610a6c565b5f81525f6020820152816040820152015260018060a01b03165f52600160205260405f2060405161082381610a6c565b61076582549260ff84161515835261084560ff602085019560081c1685610ba4565b6108a1610867600261085960018501610aaa565b936040870194855201610aaa565b916060850192835261088f604051968796602088525115156020880152516040870190610a03565b516080606086015260a0850190610a10565b9051838203601f19016080850152610a10565b346100fb575f3660031901126100fb576020600254604051908152f35b346100fb5760403660031901126100fb576108ea6109d7565b336001600160a01b038216036109065761018390600435610d25565b63334bd91960e11b5f5260045ffd5b346100fb5760403660031901126100fb576101836004356109346109d7565b9061094d610179825f525f602052600160405f20015490565b610c9d565b346100fb5760203660031901126100fb57602061097c6004355f525f602052600160405f20015490565b604051908152f35b346100fb5760203660031901126100fb576004359063ffffffff60e01b82168092036100fb57602091637965db0b60e01b81149081156109c6575b5015158152f35b6301ffc9a760e01b149050836109bf565b602435906001600160a01b03821682036100fb57565b600435906001600160a01b03821682036100fb57565b9060058210156105555752565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b90600182811c92168015610a62575b6020831014610a4e57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610a43565b6080810190811067ffffffffffffffff82111761048a57604052565b90601f8019910116810190811067ffffffffffffffff82111761048a57604052565b9060405191825f825492610abd84610a34565b8084529360018116908115610b285750600114610ae4575b50610ae292500383610a88565b565b90505f9291925260205f20905f915b818310610b0c575050906020610ae2928201015f610ad5565b6020919350806001915483858901015201910190918492610af3565b905060209250610ae294915060ff191682840152151560051b8201015f610ad5565b9181601f840112156100fb5782359167ffffffffffffffff83116100fb57602083818601950101116100fb57565b600254811015610b905760025f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b60058210156105555752565b92919267ffffffffffffffff821161048a5760405191610bda601f8201601f191660200184610a88565b8294818452818301116100fb578281602093845f960137010152565b335f9081527f1da0b5176dfe03406af5a6eed66ca01dda9b45ac4da671c3fa379cb93717ef81602052604090205460ff1615610c2e57565b63e2517d3f60e01b5f52336004527f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0960245260445ffd5b5f8181526020818152604080832033845290915290205460ff1615610c875750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16610d1f575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615610d1f575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a460019056fea26469706673582212207f6cda01b5946a2fec3603e75dec96556643c5e58e66fff135f36e7a54fad70d64736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d1da0b5176dfe03406af5a6eed66ca01dda9b45ac4da671c3fa379cb93717ef81ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034609357601f61235138819003918201601f19168301916001600160401b03831184841017609757808492602094604052833981010312609357516001600160a01b0381169081900360935760017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00555f80546001600160a01b0319169190911790556040516122a590816100ac8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a71461168b57508063025f75ac14611593578063041261961461154f578063150b7a02146111ec5780632ff1d0f9146111a8578063358d48d9146110fc57806335f81b8714610e5d578063380ff99914610e145780636f39becd14610dc85780637b10399914610da15780637b606fdc14610cb357806381bd34d214610c6a578063bc197c8114610867578063c10e5153146107ab578063c2fe518514610566578063d6bd07ee1461052b578063d74238581461050b578063f07a380e146104c95763f23a6e61146100ef575f80fd5b346104c65760a03660031901126104c657610108611724565b61011061173a565b60443591606435916084356001600160401b0381116104a8576101379036906004016117b6565b91610140611abf565b6001600160a01b03821691826104bf57505b85918351602081145f146103d85750865460405163b9209e3360e01b81526004810192909252602090829060249082906001600160a01b03165afa9081156103cd57879161038f575b501561036c5750602082805181010312610368576024916001600160a01b03906101c790602001611922565b16905b3386526002602052604086208587526020526040862060018060a01b0383165f5260205260405f206101fd858254611953565b905580156103615761020f9042611953565b3386526004602052604086208587526020526040862060018060a01b0383165f5260205260405f20548111610332575b5084546040516390229af760e01b815230600482015292869184919082906001600160a01b03165afa801561032757604080917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa35948891610305575b5001519533815260046020528181208682526020522060018060a01b0382165f5260205260405f2054906102df60405192839260018060a01b031697339684611a9d565b0390a460015f5160206122505f395f51905f525560405163f23a6e6160e01b8152602090f35b61032191503d808a833e6103198183611766565b8101906119ba565b5f61029b565b6040513d87823e3d90fd5b3386526004602052604086208587526020526040862060018060a01b0383165f5260205260405f20555f61023f565b508461020f565b8480fd5b90506020825192818082019485920101031261038b57602491516101ca565b5f80fd5b90506020813d6020116103c5575b816103aa60209383611766565b810103126103c1576103bb90611915565b5f61019b565b8680fd5b3d915061039d565b6040513d89823e3d90fd5b9192916040146103ed575b50602492506101ca565b865460405163b9209e3360e01b81526004810192909252909150602090829060249082906001600160a01b03165afa9081156104b4578691610476575b5015610459575061044681602080602494518301019101611936565b6001600160a01b03909116905b5f6103e3565b6020825192818082019485920101031261038b5760249151610453565b90506020813d6020116104ac575b8161049160209383611766565b810103126104a8576104a290611915565b5f61042a565b8580fd5b3d9150610484565b6040513d88823e3d90fd5b9050610152565b80fd5b50346104c65760403660031901126104c6576104f76104e6611724565b6104ee611abf565b60243590611fae565b60015f5160206122505f395f51905f525580f35b50346104c6576104f761051d366117fc565b91610526611abf565b6120a6565b50346104c65760803660031901126104c6576104f7610548611724565b61055061170e565b90610559611abf565b6044359060243590611bdf565b50346104c65760803660031901126104c657610580611724565b60243561058b611750565b918360643591610599611abf565b60018060a01b0316918282526001602052604082208483526020526105cb60018060a01b036040842054163314611f72565b815460405163b9209e3360e01b81526001600160a01b039687166004820181905296909160209183916024918391165afa80156107a0578390610761575b6106139150611b3a565b8282526003602052604082208483526020526106356040832054421015611b86565b828252600160209081526040808420868552909152822080546001600160a01b0319169055801561074357604080513360208201529081019190915261068881606081015b03601f198101835282611766565b823b1561073f57816106c89160405180938192635c46a7ef60e11b8352306004840152896024840152886044840152608060648401526084830190611a65565b038183875af180156107345761071b575b50506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a460015f5160206122505f395f51905f525580f35b8161072591611766565b61073057835f6106d9565b8380fd5b6040513d84823e3d90fd5b5080fd5b506040513360208201526020815261075c604082611766565b610688565b506020813d602011610798575b8161077b60209383611766565b810103126107945761078f61061391611915565b610609565b8280fd5b3d915061076e565b6040513d85823e3d90fd5b50346104c65760603660031901126104c6576004356001600160401b03811161073f576107dc9036906004016116de565b6024356001600160401b038111610730576107fb9036906004016116de565b610803611750565b9261080c611abf565b61081782821461189d565b855b818110610835578660015f5160206122505f395f51905f525580f35b806108618661084f61084a600195878c6118dd565b611901565b61085a84888a6118dd565b35906120a6565b01610819565b50346104c65760a03660031901126104c657610881611724565b9061088a61173a565b906044356001600160401b03811161073f576108aa903690600401611836565b926064356001600160401b038111610794576108ca903690600401611836565b906084356001600160401b038111610730576108ea9036906004016117b6565b906108f3611abf565b6001600160a01b0385169485610c6357505b83948251602081145f14610b915750845460405163b9209e3360e01b81526004810192909252602090829060249082906001600160a01b03165afa908115610327578591610b57575b5015610b3b5750602081805181010312610794576001600160a01b039061097790602001611922565b16925b8015610b345761098a9042611953565b82546040516390229af760e01b8152306004820152908490829060249082906001600160a01b03165afa908115610b2957906040918591610b0f575b50015192805b8651811015610aec57806109e260019289611a89565b516109ed8287611a89565b519033855260026020526040852081865260205260408520848060a01b038a165f5260205260405f20610a21838254611953565b905533855260046020526040852081865260205260408520848060a01b038a165f5260205260405f20548611610abe575b33855260046020526040852081865260205260408520848060a01b038a165f5260205260405f2054917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3560405180610ab58d898060a01b0316968d339684611a9d565b0390a4016109cc565b33855260046020526040852081865260205260408520848060a01b038a165f526020528560405f2055610a52565b60015f5160206122505f395f51905f525560405163bc197c8160e01b8152602090f35b610b2391503d8087833e6103198183611766565b5f6109c6565b6040513d86823e3d90fd5b508161098a565b93506020815191818082019384920101031261038b575161097a565b90506020813d602011610b89575b81610b7260209383611766565b8101031261036857610b8390611915565b5f61094e565b3d9150610b65565b91959291604014610ba4575b505061097a565b9092949150602060018060a01b038554169160246040518094819363b9209e3360e01b835260048301525afa908115610b29578491610c29575b5015610c0d575080602080610bf893518301019101611936565b6001600160a01b0390911692905b5f80610b9d565b92906020815191818082019384920101031261038b5751610c06565b90506020813d602011610c5b575b81610c4460209383611766565b8101031261073057610c5590611915565b5f610bde565b3d9150610c37565b9050610905565b50346104c6576040610c7b366117fc565b939160018060a01b031682526002602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346104c65760603660031901126104c6576004356001600160401b03811161073f57610ce49036906004016116de565b6024356001600160401b03811161073057610d039036906004016116de565b6044929192356001600160401b0381116104a857610d259036906004016116de565b919092610d30611abf565b81811480610d98575b610d429061189d565b865b818110610d60578760015f5160206122505f395f51905f525580f35b80610d92610d7461084a600194868c6118dd565b610d7f83878b6118dd565b35610d8b84898b6118dd565b3591611e01565b01610d44565b50818314610d39565b50346104c657806003193601126104c657546040516001600160a01b039091168152602090f35b50346104c65760403660031901126104c6576020906001600160a01b03610ded611724565b168152600182526040812060243582528252604060018060a01b0391205416604051908152f35b50346104c6576040610e25366117fc565b939160018060a01b031682526004602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b503461038b5760a036600319011261038b57610e77611724565b60243560443591610e8661170e565b60843591610e92611abf565b6001600160a01b03165f8181526002602090815260408083208784528252808320338452909152902054909290610ecb90861115611af7565b5f5460405163b9209e3360e01b81526001600160a01b039384166004820181905293909160209183916024918391165afa8015611072575f906110c1575b610f139150611b3a565b5f8381526004602090815260408083208784528252808320338452909152902054610f4090421015611b86565b825f52600260205260405f20845f5260205260405f2060018060a01b0333165f5260205260405f20610f73868254611bd2565b90555f83815260026020908152604080832087845282528083203384529091529020541561109b575b801561107d576040805133602082015290810191909152610fc0816060810161067a565b823b1561038b575f6110069160405180938192637921219560e11b835230600484015286602484015288604484015289606484015260a0608484015260a4830190611a65565b038183875af180156110725761105d575b5060405193845260208401527fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd160403394a460015f5160206122505f395f51905f525580f35b61106a9195505f90611766565b5f935f611017565b6040513d5f823e3d90fd5b5060405133602082015260208152611096604082611766565b610fc0565b5f8381526004602090815260408083208784528252808320338452909152812055610f9c565b506020813d6020116110f4575b816110db60209383611766565b8101031261038b576110ef610f1391611915565b610f09565b3d91506110ce565b3461038b57604036600319011261038b576004356001600160401b03811161038b5761112c9036906004016116de565b906024356001600160401b03811161038b5761114c9036906004016116de565b90611155611abf565b61116082851461189d565b5f5b84811061117c5760015f5160206122505f395f51905f5255005b806111a261119061084a60019489896118dd565b61119b8387876118dd565b3590611fae565b01611162565b3461038b57606036600319011261038b576111d96111c4611724565b6111cc611abf565b6044359060243590611e01565b60015f5160206122505f395f51905f5255005b3461038b57608036600319011261038b57611205611724565b61120d61173a565b90604435906064356001600160401b03811161038b576112319036906004016117b6565b9061123a611abf565b6001600160a01b038416938461154857505b5f938251602081145f1461147357505f5460405163b9209e3360e01b81526004810192909252602090829060249082906001600160a01b03165afa908115611072575f91611439575b501561141d575060208180518101031261038b576001600160a01b03906112be90602001611922565b16915b335f908152600160209081526040808320858452909152902080546001600160a01b0319166001600160a01b0390941693841790558015611416576113069042611953565b335f52600360205260405f20825f5260205260405f205481116113f9575b505f80546040516390229af760e01b81523060048201529190829060249082906001600160a01b03165afa8015611072576040915f916113df575b500151335f52600360205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad360405f2054916113b060405191604083526040830190611a65565b9260208201528033930390a460015f5160206122505f395f51905f5255604051630a85bd0160e11b8152602090f35b6113f391503d805f833e6103198183611766565b8461135f565b335f52600360205260405f20825f5260205260405f205582611324565b505f611306565b92506020815191818082019384920101031261038b57516112c1565b90506020813d60201161146b575b8161145460209383611766565b8101031261038b5761146590611915565b85611295565b3d9150611447565b91949291604014611486575b50506112c1565b5f5460405163b9209e3360e01b8152600481019290925291925090602090829060249082906001600160a01b03165afa908115611072575f9161150e575b50156114f4576114df91925060208082518301019101611936565b6001600160a01b0390911691905b838061147f565b6020815191818082019384920101031261038b57516114ed565b90506020813d602011611540575b8161152960209383611766565b8101031261038b5761153a90611915565b846114c4565b3d915061151c565b905061124c565b3461038b57604036600319011261038b576001600160a01b03611570611724565b165f52600360205260405f206024355f52602052602060405f2054604051908152f35b3461038b57608036600319011261038b576004356001600160401b03811161038b576115c39036906004016116de565b906024356001600160401b03811161038b576115e39036906004016116de565b9190926044356001600160401b03811161038b576116059036906004016116de565b949061160f61170e565b92611618611abf565b85811480611682575b61162a9061189d565b5f5b8181106116465760015f5160206122505f395f51905f5255005b8061167c86898b6116758561166d816116668f60019b8d61084a926118dd565b958d6118dd565b35928a6118dd565b3591611bdf565b0161162c565b50858714611621565b3461038b57602036600319011261038b576004359063ffffffff60e01b821680920361038b57602091630271189760e51b81149081156116cd575b5015158152f35b6301ffc9a760e01b149050836116c6565b9181601f8401121561038b578235916001600160401b03831161038b576020808501948460051b01011161038b57565b606435906001600160a01b038216820361038b57565b600435906001600160a01b038216820361038b57565b602435906001600160a01b038216820361038b57565b604435906001600160a01b038216820361038b57565b90601f801991011681019081106001600160401b0382111761178757604052565b634e487b7160e01b5f52604160045260245ffd5b6001600160401b03811161178757601f01601f191660200190565b81601f8201121561038b578035906117cd8261179b565b926117db6040519485611766565b8284526020838301011161038b57815f926020809301838601378301015290565b606090600319011261038b576004356001600160a01b038116810361038b5790602435906044356001600160a01b038116810361038b5790565b9080601f8301121561038b578135916001600160401b038311611787578260051b90604051936118696020840186611766565b845260208085019282010192831161038b57602001905b82821061188d5750505090565b8135815260209182019101611880565b156118a457565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156118ed5760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b038116810361038b5790565b5190811515820361038b57565b51906001600160a01b038216820361038b57565b919082604091031261038b57602061194d83611922565b92015190565b9190820180921161196057565b634e487b7160e01b5f52601160045260245ffd5b81601f8201121561038b5780519061198b8261179b565b926119996040519485611766565b8284526020838301011161038b57815f9260208093018386015e8301015290565b60208183031261038b578051906001600160401b03821161038b570160808183031261038b5760405191608083018381106001600160401b0382111761178757604052611a0682611915565b8352602082015160ff8116810361038b57602084015260408201516001600160401b03811161038b5781611a3b918401611974565b604084015260608201516001600160401b03811161038b57611a5d9201611974565b606082015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b80518210156118ed5760209160051b010190565b939291611aba906040928652606060208701526060860190611a65565b930152565b60025f5160206122505f395f51905f525414611ae85760025f5160206122505f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b15611afe57565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b15611b4157565b60405162461bcd60e51b815260206004820152601860248201527f44657374696e6174696f6e206e6f7420766572696669656400000000000000006044820152606490fd5b15611b8d57565b60405162461bcd60e51b815260206004820152601a60248201527f45786869626974696f6e206e6f742079657420657870697265640000000000006044820152606490fd5b9190820391821161196057565b6001600160a01b03165f818152600260209081526040808320858452825280832033845290915290205492939192909190611c1c90851115611af7565b5f5460405163b9209e3360e01b81526001600160a01b039283166004820181905292909160209183916024918391165afa8015611072575f90611dc6575b611c649150611b3a565b5f8281526004602090815260408083208684528252808320338452909152902054611c9190421015611b86565b815f52600260205260405f20835f5260205260405f2060018060a01b0333165f5260205260405f20611cc4858254611bd2565b90555f828152600260209081526040808320868452825280832033845290915290205415611da0575b60405133602082015260208152611d05604082611766565b823b1561038b575f611d4b9160405180938192637921219560e11b835230600484015286602484015288604484015289606484015260a0608484015260a4830190611a65565b038183875af1801561107257611d90575b5060405193845260208401527fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd160403394a4565b5f611d9a91611766565b5f611d5c565b5f8281526004602090815260408083208684528252808320338452909152812055611ced565b506020813d602011611df9575b81611de060209383611766565b8101031261038b57611df4611c6491611915565b611c5a565b3d9150611dd3565b6001600160a01b03165f8181526002602090815260408083208584528252808320338452909152902054611e3790841115611af7565b5f8181526004602090815260408083208584528252808320338452909152902054611e6490421015611b86565b805f52600260205260405f20825f5260205260405f2060018060a01b0333165f5260205260405f20611e97848254611bd2565b90555f818152600260209081526040808320858452825280832033845290915290205415611f4c575b803b1561038b57604051637921219560e11b815230600482015233602482015282604482015283606482015260a060848201525f60a48201525f8160c48183865af1801561107257611f3c575b506040519283527fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a4565b5f611f4691611766565b5f611f0d565b5f8181526004602090815260408083208584528252808320338452909152812055611ec0565b15611f7957565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b6001600160a01b039081165f818152600160209081526040808320868452909152812054909392611fe191163314611f72565b805f52600360205260405f20825f5260205261200360405f2054421015611b86565b805f52600160205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055803b1561038b57604051632142170760e11b8152306004820152336024820152604481018390525f8160648183865af1801561107257612091575b507f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06339380a4565b61209e9193505f90611766565b5f915f612069565b60018060a01b0316805f52600160205260405f20825f526020526120d760018060a01b0360405f2054163314611f72565b5f5460405163b9209e3360e01b81526001600160a01b039485166004820181905294909160209183916024918391165afa8015611072575f90612214575b61211f9150611b3a565b805f52600360205260405f20825f5260205261214160405f2054421015611b86565b805f52600160205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b815416905560405133602082015260208152612184604082611766565b813b1561038b575f6121c49160405180938192635c46a7ef60e11b8352306004840152886024840152876044840152608060648401526084830190611a65565b038183865af1801561107257612204575b506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a4565b5f61220e91611766565b5f6121d5565b506020813d602011612247575b8161222e60209383611766565b8101031261038b5761224261211f91611915565b612115565b3d915061222156fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a26469706673582212202161f74b149f693fb1daf50325442eb7e8fb3991e82ffe8ad6161784dc3eacfe64736f6c634300081c0033"
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
      "bytecode": "0x608034608557601f6104e338819003918201601f19168301916001600160401b038311848410176089578084926040948552833981010312608557604b6020604583609d565b9201609d565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560405161043290816100b18239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b038216820360855756fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146102a2575080631afed875146100a2578063abc8c7af1461007b5763d56d229d0361000f57346100785780600319360112610078576001546040516001600160a01b039091168152602090f35b80fd5b5034610078578060031936011261007857546040516001600160a01b039091168152602090f35b5034610078576040366003190112610078578054604051633013ce2960e01b815282916024359190602090829060049082906001600160a01b03165afa90811561022b57839161025c575b506040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03919091169060208160648187865af1801561025157610173926020928592610236575b50855460405163095ea7b360e01b81526001600160a01b039091166004820152602481019290925290928391908290879082906044820190565b03925af1801561022b576101fe575b5081546001546001600160a01b0391821692911690823b156101f95760848492836040519586948593636c4c557960e11b8552600485015260043560248501526001604485015260648401525af180156101ee576101dd5750f35b816101e7916103ae565b6100785780f35b6040513d84823e3d90fd5b505050fd5b61021f9060203d602011610224575b61021781836103ae565b8101906103e4565b610182565b503d61020d565b6040513d85823e3d90fd5b61024c90843d86116102245761021781836103ae565b610139565b6040513d86823e3d90fd5b90506020813d60201161029a575b81610277602093836103ae565b8101031261029657516001600160a01b0381168103610296575f6100ed565b5050fd5b3d915061026a565b3461037e57608036600319011261037e576102bb610382565b506102c4610398565b5060643567ffffffffffffffff811161037e573660238201121561037e57806004013567ffffffffffffffff811161037e573691016024011161037e575f546001546001600160a01b039182169116813b1561037e5763016295ab60e21b83526001600160a01b031660048301526044803560248401525f91839190829084905af1801561037357610363575b604051630a85bd0160e11b8152602090f35b5f61036d916103ae565b5f610351565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b038216820361037e57565b602435906001600160a01b038216820361037e57565b90601f8019910116810190811067ffffffffffffffff8211176103d057604052565b634e487b7160e01b5f52604160045260245ffd5b9081602091031261037e5751801515810361037e579056fea264697066735822122065a5f85dc1e239873bd06d802ad7b8a0892cf5710913495c9480229e1c5230c864736f6c634300081c0033"
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
      "bytecode": "0x6080346100e75760208101906001600160401b038211818310176100d3575f9160405252600254600181811c911680156100c9575b60208210146100b557601f811161006d575b5f600255610053336100eb565b5061005d33610161565b5060405161147a90816101f58239f35b60025f52601f0160051c7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101905b8181106100aa5750610046565b5f815560010161009d565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610034565b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b6001600160a01b0381165f9081525f5160206116af5f395f51905f52602052604090205460ff1661015c576001600160a01b03165f8181525f5160206116af5f395f51905f5260205260408120805460ff191660011790553391905f51602061166f5f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f51602061168f5f395f51905f52602052604090205460ff1661015c576001600160a01b03165f8181525f51602061168f5f395f51905f5260205260408120805460ff191660011790553391907f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6905f51602061166f5f395f51905f529080a460019056fe60806040526004361015610011575f80fd5b5f3560e01c8062fdd58e1461011357806301ffc9a71461010e5780630e89341c14610109578063156e29f614610104578063248a9ca3146100ff5780632eb2c2d6146100fa5780632f2ff15d146100f557806336568abe146100f05780634e1273f4146100eb57806391d14854146100e6578063a217fddf146100e1578063a22cb465146100dc578063d5391393146100d7578063d547741f146100d2578063e985e9c5146100cd5763f242432a146100c8575f80fd5b6109bc565b61096c565b61092e565b6108f4565b610827565b61080d565b6107be565b6106fd565b610675565b610632565b6105a5565b610460565b61036b565b610277565b6101b6565b61015c565b600435906001600160a01b038216820361012e57565b5f80fd5b602435906001600160a01b038216820361012e57565b35906001600160a01b038216820361012e57565b3461012e57604036600319011261012e57602061019b61017a610118565b6024355f525f835260405f209060018060a01b03165f5260205260405f2090565b54604051908152f35b6001600160e01b031981160361012e57565b3461012e57602036600319011261012e576004356101d3816101a4565b63ffffffff60e01b16637965db0b60e01b81149081156101fc575b506040519015158152602090f35b636cdb3d1360e11b81149150811561022e575b811561021d575b505f6101ee565b6301ffc9a760e01b1490505f610216565b6303a24d0760e21b8114915061020f565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b90602061027492818152019061023f565b90565b3461012e57602036600319011261012e576040515f6002548060011c9060018116908115610361575b60208310821461034d57828552602085019190811561033457506001146102e2575b6102de846102d2818603826104a7565b60405191829182610263565b0390f35b60025f9081529250907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b818410610320575050016102d2826102c2565b80548484015260209093019260010161030d565b60ff191682525090151560051b0190506102d2826102c2565b634e487b7160e01b5f52602260045260245ffd5b91607f16916102a0565b3461012e57606036600319011261012e57610384610118565b335f9081527f5562e70da342db81569f3094d36be279beaca7ad8e08f434ea188e79d2bfe10c6020526040902054604435916024359160ff161561042957604051916103d16020846104a7565b5f83526001600160a01b03821615610416576104149361040e60405192600184526020840152604083019160018352606084015260808301604052565b91610eb9565b005b632bfa23e760e11b5f525f60045260245ffd5b63e2517d3f60e01b5f52336004527f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660245260445ffd5b3461012e57602036600319011261012e57602061048b6004355f526003602052600160405f20015490565b604051908152f35b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff8211176104c957604052565b610493565b67ffffffffffffffff81116104c95760051b60200190565b9080601f8301121561012e5781356104fd816104ce565b9261050b60405194856104a7565b81845260208085019260051b82010192831161012e57602001905b8282106105335750505090565b8135815260209182019101610526565b67ffffffffffffffff81116104c957601f01601f191660200190565b81601f8201121561012e5780359061057682610543565b9261058460405194856104a7565b8284526020838301011161012e57815f926020809301838601378301015290565b3461012e5760a036600319011261012e576105be610118565b6105c6610132565b9060443567ffffffffffffffff811161012e576105e79036906004016104e6565b60643567ffffffffffffffff811161012e576106079036906004016104e6565b906084359367ffffffffffffffff851161012e5761062c61041495369060040161055f565b93610a73565b3461012e57604036600319011261012e57610414600435610651610132565b9061067061066b825f526003602052600160405f20015490565b610d01565b610da1565b3461012e57604036600319011261012e57600435610691610132565b336001600160a01b038216036106aa5761041491610e31565b63334bd91960e11b5f5260045ffd5b90602080835192838152019201905f5b8181106106d65750505090565b82518452602093840193909201916001016106c9565b9060206102749281815201906106b9565b3461012e57604036600319011261012e5760043567ffffffffffffffff811161012e573660238201121561012e5780600401359061073a826104ce565b9161074860405193846104a7565b8083526024602084019160051b8301019136831161012e57602401905b8282106107a6578360243567ffffffffffffffff811161012e576102de9161079461079a9236906004016104e6565b90610c4d565b604051918291826106ec565b602080916107b384610148565b815201910190610765565b3461012e57604036600319011261012e57602060ff6108016004356107e1610132565b905f526003845260405f209060018060a01b03165f5260205260405f2090565b54166040519015158152f35b3461012e575f36600319011261012e5760206040515f8152f35b3461012e57604036600319011261012e57610840610118565b602435801515810361012e5733156108e1576001600160a01b0382169182156108cf578161088c61089d92335f52600160205260405f209060018060a01b03165f5260205260405f2090565b9060ff801983541691151516179055565b604051901515815233907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190602090a3005b62ced3e160e81b5f525f60045260245ffd5b631f18c42760e11b5f525f60045260245ffd5b3461012e575f36600319011261012e5760206040517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b3461012e57604036600319011261012e5761041460043561094d610132565b9061096761066b825f526003602052600160405f20015490565b610e31565b3461012e57604036600319011261012e57602060ff61080161098c610118565b610994610132565b6001600160a01b039182165f9081526001865260408082209290931681526020919091522090565b3461012e5760a036600319011261012e576109d5610118565b6109dd610132565b604435906064359260843567ffffffffffffffff811161012e57610a0590369060040161055f565b92610a108233610d3b565b6001600160a01b03831615610416576001600160a01b03821615610a615761041494610a5960405192600184526020840152604083019160018352606084015260808301604052565b929091610fde565b626a0d4560e21b5f525f60045260245ffd5b92919094610a818433610d3b565b6001600160a01b038616948515610416576001600160a01b038516958615610a61578351855190818103610c105750505f5b8451811015610b7d578060051b6020808288010151918801015190610af889610ae3835f525f60205260405f2090565b9060018060a01b03165f5260205260405f2090565b54828110610b4657610b368c610ae385948d610b2860019998610b3e970391610ae3845f525f60205260405f2090565b555f525f60205260405f2090565b91825461119a565b905501610ab3565b6040516303dee4c560e01b81526001600160a01b038b16600482015260248101919091526044810183905260648101829052608490fd5b50610bd49697929795919560018551145f14610bd65760208581015187820151604080519283529282015233917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291a45b336113a6565b565b6040517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb339180610c088a8a836111bb565b0390a4610bce565b635b05999160e01b5f5260045260245260445ffd5b8051821015610c395760209160051b010190565b634e487b7160e01b5f52603260045260245ffd5b91909180518351808203610cec575050805190610c69826104ce565b91610c7760405193846104a7565b808352610c86601f19916104ce565b013660208401375f5b8151811015610ce55780610cd460019260051b60208082870101519189010151905f918252602082815260408084206001600160a01b03909316845291905290205490565b610cde8286610c25565b5201610c8f565b5090925050565b635b05999160e01b5f5260045260245260445ffd5b5f81815260036020908152604080832033845290915290205460ff1615610d255750565b63e2517d3f60e01b5f523360045260245260445ffd5b6001600160a01b0391821691811690828214159081610d73575b50610d5e575050565b63711bec9160e11b5f5260045260245260445ffd5b5f8481526001602090815260408083206001600160a01b0390941683529290522060ff91505416155f610d55565b5f8181526003602090815260408083206001600160a01b038616845290915290205460ff16610e2b575f8181526003602090815260408083206001600160a01b03861684529091529020805460ff1916600117905533916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b50505f90565b5f8181526003602090815260408083206001600160a01b038616845290915290205460ff1615610e2b575f8181526003602090815260408083206001600160a01b03861684529091529020805460ff1916905533916001600160a01b0316907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4600190565b909392918451815190818103610c105750506001600160a01b03821693841515935f5b8751811015610f2d578086868a60208060019660051b8093010151918901015192610f0b575b50505001610edc565b610f2391610ae3610b36925f525f60205260405f2090565b90555f8681610f02565b509390959460018651145f14610fa3576020868101518482015160408051928352928201525f9133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629190a45b610f86575b50505050565b602080610f9a950151910151915f3361125d565b5f808080610f80565b5f6040517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb339180610fd6888c836111bb565b0390a4610f7b565b9493929091938451825190818103610c105750506001600160a01b038681169586151595918516801515939192905f5b84518110156110e7578060051b90898988602080868b010151958c01015192611066575b93600194611044575b5050500161100e565b61105c91610ae3610b36925f525f60205260405f2090565b90555f898161103b565b5050909161107f8d610ae3835f525f60205260405f2090565b548281106110b0578291898f6110a7600197968f950391610ae3855f525f60205260405f2090565b55909450611032565b6040516303dee4c560e01b81526001600160a01b038f16600482015260248101919091526044810183905260648101829052608490fd5b5091989593929790965060018851145f146111605760208881015186820151604080519283529282015233917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291a45b611143575b5050505050565b602080611156960151920151923361125d565b5f8080808061113c565b6040517f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb339180611192898d836111bb565b0390a4611137565b919082018092116111a757565b634e487b7160e01b5f52601160045260245ffd5b90916111d2610274936040845260408401906106b9565b9160208184039101526106b9565b9081602091031261012e5751610274816101a4565b6001600160a01b039182168152911660208201526040810191909152606081019190915260a0608082018190526102749291019061023f565b3d15611258573d9061123f82610543565b9161124d60405193846104a7565b82523d5f602084013e565b606090565b9091949293853b611271575b505050505050565b60209361129391604051968795869563f23a6e6160e01b8752600487016111f5565b03815f6001600160a01b0387165af15f9181611322575b506112e457506112b861122e565b80519190826112dd57632bfa23e760e11b5f526001600160a01b03821660045260245ffd5b6020915001fd5b6001600160e01b031916630dc5919f60e01b0161130757505f8080808080611269565b632bfa23e760e11b5f526001600160a01b031660045260245ffd5b61134591925060203d60201161134c575b61133d81836104a7565b8101906111e0565b905f6112aa565b503d611333565b6001600160a01b0391821681529116602082015260a0604082018190526102749491939192611398929161138a91908601906106b9565b9084820360608601526106b9565b91608081840391015261023f565b9091949293853b6113b957505050505050565b6020936113db91604051968795869563bc197c8160e01b875260048701611353565b03815f6001600160a01b0387165af15f9181611423575b5061140057506112b861122e565b6001600160e01b0319166343e6837f60e01b0161130757505f8080808080611269565b61143d91925060203d60201161134c5761133d81836104a7565b905f6113f256fea2646970667358221220c8ac708989e1e97f59be0a9c2472051e9a6f23db2cb5375e9edab7d9125b4d5764736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5562e70da342db81569f3094d36be279beaca7ad8e08f434ea188e79d2bfe10c3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff"
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
      "bytecode": "0x6080806040523460155761066a908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c80630396cb601461037e578063205c28781461036557806322cdde4c1461031d57806335567e1a146102d557806370a08231146102b1578063765e827f1461011c5780637ecebe00146100e5578063b760faf9146100d1578063bb9fe6bf146100bf578063c23a5cea146100a65763dbed18e014610092575f80fd5b346100a2576100a0366103b1565b005b5f80fd5b346100a25760203660031901126100a2576100a061039b565b346100a2575f3660031901126100a257005b60203660031901126100a2576100a061039b565b346100a25760203660031901126100a2576001600160a01b0361010661039b565b165f525f602052602060405f2054604051908152f35b346100a25761012a366103b1565b50905f5b82811061013757005b5f8061014c6101478487876105aa565b61056d565b61015f61015a8588886105aa565b6105e1565b908261016c8689896105aa565b916101b2604051809261019860208301966306608bdf60e21b885260606024850152608484019061046b565b90604483015284606483015203601f198101835282610537565b51925af16101be6105f5565b5015610278576101d261015a8285856105aa565b6101dd8285856105aa565b606081013590601e19813603018212156100a257019081359167ffffffffffffffff83116100a2576020019082360382136100a257825f80949381946040519384928337810182815203925af16102326105f5565b50156102405760010161012e565b60405162461bcd60e51b815260206004820152601060248201526f115e1958dd5d1a5bdb8819985a5b195960821b6044820152606490fd5b60405162461bcd60e51b815260206004820152601160248201527015985b1a59185d1a5bdb8819985a5b1959607a1b6044820152606490fd5b346100a25760203660031901126100a2576102ca61039b565b5060206040515f8152f35b346100a25760403660031901126100a2576102ee61039b565b6024356001600160c01b038116036100a25760018060a01b03165f525f602052602060405f2054604051908152f35b346100a25760203660031901126100a25760043567ffffffffffffffff81116100a25761012060031982360301126100a25761035d60209160040161056d565b604051908152f35b346100a25760403660031901126100a2576100a061039b565b60203660031901126100a25760043563ffffffff8116036100a257005b600435906001600160a01b03821682036100a257565b9060406003198301126100a25760043567ffffffffffffffff81116100a25760040182601f820112156100a25780359267ffffffffffffffff84116100a2576020808301928560051b0101116100a25791906024356001600160a01b03811681036100a25790565b9035601e19823603018112156100a257016020813591019167ffffffffffffffff82116100a25781360383136100a257565b908060209392818452848401375f828201840152601f01601f1916010190565b8035916001600160a01b03831683036100a2576001600160a01b03909216825260208181013590830152610534916105256105196104e06104c56104b26040870187610419565b610120604088015261012087019161044b565b6104d26060870187610419565b90868303606088015261044b565b6080850135608085015260a085013560a085015260c085013560c085015261050b60e0860186610419565b9085830360e087015261044b565b92610100810190610419565b9161010081850391015261044b565b90565b90601f8019910116810190811067ffffffffffffffff82111761055957604052565b634e487b7160e01b5f52604160045260245ffd5b6040516105a48161058a602082019460608652608083019061046b565b30604083015246606083015203601f198101835282610537565b51902090565b91908110156105cd5760051b8101359061011e19813603018212156100a2570190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036100a25790565b3d1561062f573d9067ffffffffffffffff82116105595760405191610624601f8201601f191660200184610537565b82523d5f602084013e565b60609056fea26469706673582212204807b8b4192efd60296a9a4ba0d2735c48d699542ae069667396c6213571e7e664736f6c634300081c0033"
    },
    "MockPriceFeed": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "initialPrice",
              "type": "int256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "latestRoundData",
          "outputs": [
            {
              "internalType": "uint80",
              "name": "roundId",
              "type": "uint80"
            },
            {
              "internalType": "int256",
              "name": "answer",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "startedAt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "updatedAt",
              "type": "uint256"
            },
            {
              "internalType": "uint80",
              "name": "answeredInRound",
              "type": "uint80"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "newPrice",
              "type": "int256"
            }
          ],
          "name": "setPrice",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x608034604c57601f61011138819003918201601f19168301916001600160401b03831184841017605057808492602094604052833981010312604c57515f5560405160ac90816100658239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60808060405260043610156011575f80fd5b5f3560e01c8063f7a308061460605763feaf968c14602d575f80fd5b34605c575f366003190112605c5760a0905f545f825260208201525f60408201524260608201525f6080820152f35b5f80fd5b34605c576020366003190112605c576004355f5500fea26469706673582212208425c4ffef12714f611f9c793a7542e3010d9c110ccc950de0ee2e7461055f6564736f6c634300081c0033"
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
      "bytecode": "0x60806040523461030b57611033803803806100198161030f565b92833981019060408183031261030b5780516001600160401b03811161030b5782610045918301610334565b60208201519092906001600160401b03811161030b576100659201610334565b81516001600160401b038111610221575f54600181811c91168015610301575b602082101461020357601f811161029f575b50602092601f821160011461024057928192935f92610235575b50508160011b915f199060031b1c1916175f555b80516001600160401b03811161022157600154600181811c91168015610217575b602082101461020357601f81116101a0575b50602091601f8211600114610140579181925f92610135575b50508160011b915f199060031b1c1916176001555b604051610cad90816103868239f35b015190505f80610111565b601f1982169260015f52805f20915f5b85811061018857508360019510610170575b505050811b01600155610126565b01515f1960f88460031b161c191690555f8080610162565b91926020600181928685015181550194019201610150565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f830160051c810191602084106101f9575b601f0160051c01905b8181106101ee57506100f8565b5f81556001016101e1565b90915081906101d8565b634e487b7160e01b5f52602260045260245ffd5b90607f16906100e6565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100b1565b601f198216935f8052805f20915f5b868110610287575083600195961061026f575b505050811b015f556100c5565b01515f1960f88460031b161c191690555f8080610262565b9192602060018192868501518155019401920161024f565b5f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f830160051c810191602084106102f7575b601f0160051c01905b8181106102ec5750610097565b5f81556001016102df565b90915081906102d6565b90607f1690610085565b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761022157604052565b81601f8201121561030b578051906001600160401b03821161022157610363601f8301601f191660200161030f565b928284526020838301011161030b57815f9260208093018386015e830101529056fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a71461081a5750806306fdde0314610762578063081812fc14610726578063095ea7b31461063c57806323b872dd146106255780632a55205a146105c757806340c10f19146104c257806342842e0e146104995780636352211e1461046957806370a08231146104185780638f2fc60b146103cb57806395d89b41146102c3578063a22cb4651461020f578063b88d4fde14610185578063c87b56dd146101285763e985e9c5146100ce575f80fd5b346101255760403660031901126101255760406100e96108c3565b916100f26108d9565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b80fd5b3461018157602036600319011261018157610144600435610c43565b505f604051610154602082610929565b5261017d604051610166602082610929565b5f815260405191829160208352602083019061089f565b0390f35b5f80fd5b346101815760803660031901126101815761019e6108c3565b6101a66108d9565b6064359167ffffffffffffffff83116101815736602384011215610181578260040135916101d38361095f565b926101e16040519485610929565b8084523660248287010111610181576020815f92602461020d9801838801378501015260443591610b03565b005b34610181576040366003190112610181576102286108c3565b602435908115158092036101815733156102b0576001600160a01b031690811561029d57335f52600560205260405f20825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b63a9fbf51f60e01b5f525f60045260245ffd5b34610181575f366003190112610181576040515f6001548060011c906001811680156103c1575b6020831081146103ad57828552908115610389575060011461032b575b61017d8361031781850382610929565b60405191829160208352602083019061089f565b91905060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6915f905b80821061036f57509091508101602001610317610307565b919260018160209254838588010152019101909291610357565b60ff191660208086019190915291151560051b840190910191506103179050610307565b634e487b7160e01b5f52602260045260245ffd5b91607f16916102ea565b34610181576040366003190112610181576103e46108c3565b6024356001600160601b0381168103610181576001600160a01b0390911660a09190911b6001600160a01b03191617600655005b34610181576020366003190112610181576001600160a01b036104396108c3565b168015610456575f526003602052602060405f2054604051908152f35b6322718ad960e21b5f525f60045260245ffd5b34610181576020366003190112610181576020610487600435610c43565b6040516001600160a01b039091168152f35b346101815761020d6104aa366108ef565b90604051926104ba602085610929565b5f8452610b03565b34610181576040366003190112610181576104db6108c3565b6001600160a01b031660243581156105b4575f818152600260205260409020546001600160a01b03168015159290919083610581575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a45061056e57005b6339e3563760e11b5f525f60045260245ffd5b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f198154019055610511565b633250574960e11b5f525f60045260245ffd5b34610181576040366003190112610181576024356006548060a01c9182810292818404149015171561061157604080516001600160a01b0390921682526127109092046020820152f35b634e487b7160e01b5f52601160045260245ffd5b346101815761020d610636366108ef565b9161097b565b34610181576040366003190112610181576106556108c3565b60243561066181610c43565b33151580610713575b806106e6575b6106d35781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff1615610670565b506001600160a01b03811633141561066a565b346101815760203660031901126101815760043561074381610c43565b505f526004602052602060018060a01b0360405f205416604051908152f35b34610181575f366003190112610181576040515f5f548060011c90600181168015610810575b6020831081146103ad5782855290811561038957506001146107b45761017d8361031781850382610929565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b8082106107f657509091508101602001610317610307565b9192600181602092548385880101520191019092916107de565b91607f1691610788565b34610181576020366003190112610181576004359063ffffffff60e01b82168092036101815760209163152a902d60e11b811490811561085c575b5015158152f35b6380ac58cd60e01b81149150811561088e575b811561087d575b5083610855565b6301ffc9a760e01b14905083610876565b635b5e139f60e01b8114915061086f565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361018157565b602435906001600160a01b038216820361018157565b6060906003190112610181576004356001600160a01b038116810361018157906024356001600160a01b0381168103610181579060443590565b90601f8019910116810190811067ffffffffffffffff82111761094b57604052565b634e487b7160e01b5f52604160045260245ffd5b67ffffffffffffffff811161094b57601f01601f191660200190565b6001600160a01b03909116919082156105b4575f828152600260205260409020546001600160a01b031692829033151580610a6e575b5084610a3b575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b0316808303610a2357505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f1981540190556109b8565b90915080610ab2575b15610a845782905f6109b1565b8284610a9c57637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015610ae1575b80610a7757505f838152600460205260409020546001600160a01b03163314610a77565b505f84815260056020908152604080832033845290915290205460ff16610abd565b9291610b1081838661097b565b813b610b1d575b50505050565b604051630a85bd0160e11b81523360048201526001600160a01b0394851660248201526044810191909152608060648201529216919060209082908190610b6890608483019061089f565b03815f865af15f9181610bfe575b50610bcb57503d15610bc4573d610b8c8161095f565b90610b9a6040519283610929565b81523d5f602083013e5b80519081610bbf5782633250574960e11b5f5260045260245ffd5b602001fd5b6060610ba4565b6001600160e01b03191663757a42ff60e11b01610bec57505f808080610b17565b633250574960e11b5f5260045260245ffd5b9091506020813d602011610c3b575b81610c1a60209383610929565b8101031261018157516001600160e01b03198116810361018157905f610b76565b3d9150610c0d565b5f818152600260205260409020546001600160a01b0316908115610c65575090565b637e27328960e01b5f5260045260245ffdfea264697066735822122014ff614a93dbe4a2d4f841c587078c3e315477f0c472f45a1a0a8ab6553f081a64736f6c634300081c0033"
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
      "bytecode": "0x60806040523461031457604080519081016001600160401b0381118282101761022757604090815260098252684d6f636b205553444360b81b602083015280519081016001600160401b038111828210176102275760405260058152646d5553444360d81b602082015281516001600160401b03811161022757600354600181811c9116801561030a575b602082101461020957601f81116102a7575b50602092601f821160011461024657928192935f9261023b575b50508160011b915f199060031b1c1916176003555b80516001600160401b03811161022757600454600181811c9116801561021d575b602082101461020957601f81116101a6575b50602091601f8211600114610146579181925f9261013b575b50508160011b915f199060031b1c1916176004555b6040516106a190816103198239f35b015190505f80610117565b601f1982169260045f52805f20915f5b85811061018e57508360019510610176575b505050811b0160045561012c565b01515f1960f88460031b161c191690555f8080610168565b91926020600181928685015181550194019201610156565b60045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c810191602084106101ff575b601f0160051c01905b8181106101f457506100fe565b5f81556001016101e7565b90915081906101de565b634e487b7160e01b5f52602260045260245ffd5b90607f16906100ec565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100b6565b601f1982169360035f52805f20915f5b86811061028f5750836001959610610277575b505050811b016003556100cb565b01515f1960f88460031b161c191690555f8080610269565b91926020600181928685015181550194019201610256565b60035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c81019160208410610300575b601f0160051c01905b8181106102f5575061009c565b5f81556001016102e8565b90915081906102df565b90607f169061008a565b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c90816306fdde031461049c57508063095ea7b31461041a57806318160ddd146103fd57806323b872dd1461031e578063313ce5671461030357806340c10f191461026157806370a082311461022a57806395d89b411461010f578063a9059cbb146100de5763dd62ed3e1461008a575f80fd5b346100da5760403660031901126100da576100a3610595565b6100ab6105ab565b6001600160a01b039182165f908152600160209081526040808320949093168252928352819020549051908152f35b5f80fd5b346100da5760403660031901126100da576101046100fa610595565b60243590336105c1565b602060405160018152f35b346100da575f3660031901126100da576040515f6004548060011c90600181168015610220575b60208310811461020c578285529081156101f0575060011461019b575b50819003601f01601f191681019067ffffffffffffffff821181831017610187576101838291826040528261056b565b0390f35b634e487b7160e01b5f52604160045260245ffd5b905060045f527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5f905b8282106101da57506020915082010182610153565b60018160209254838588010152019101906101c5565b90506020925060ff191682840152151560051b82010182610153565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610136565b346100da5760203660031901126100da576001600160a01b0361024b610595565b165f525f602052602060405f2054604051908152f35b346100da5760403660031901126100da5761027a610595565b6001600160a01b031660243581156102f057600254908082018092116102dc5760207fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef915f9360025584845283825260408420818154019055604051908152a3005b634e487b7160e01b5f52601160045260245ffd5b63ec442f0560e01b5f525f60045260245ffd5b346100da575f3660031901126100da57602060405160128152f35b346100da5760603660031901126100da57610337610595565b61033f6105ab565b6001600160a01b0382165f818152600160209081526040808320338452909152902054909260443592915f19811061037d575b5061010493506105c1565b8381106103e25784156103cf5733156103bc57610104945f52600160205260405f2060018060a01b0333165f526020528360405f209103905584610372565b634a1406b160e11b5f525f60045260245ffd5b63e602df0560e01b5f525f60045260245ffd5b8390637dc7a0d960e11b5f523360045260245260445260645ffd5b346100da575f3660031901126100da576020600254604051908152f35b346100da5760403660031901126100da57610433610595565b6024359033156103cf576001600160a01b03169081156103bc57335f52600160205260405f20825f526020528060405f20556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b346100da575f3660031901126100da575f6003548060011c90600181168015610561575b60208310811461020c578285529081156101f0575060011461050c5750819003601f01601f191681019067ffffffffffffffff821181831017610187576101838291826040528261056b565b905060035f527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5f905b82821061054b57506020915082010182610153565b6001816020925483858801015201910190610536565b91607f16916104c0565b602060409281835280519182918282860152018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b03821682036100da57565b602435906001600160a01b03821682036100da57565b6001600160a01b0316908115610658576001600160a01b03169182156102f057815f525f60205260405f205481811061063f57817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92602092855f525f84520360405f2055845f525f825260405f20818154019055604051908152a3565b8263391434e360e21b5f5260045260245260445260645ffd5b634b637e8f60e11b5f525f60045260245ffdfea2646970667358221220df62e75cd00d503944b524f8c06c0555ef4b2babd6413a4809d330da1f2db4f164736f6c634300081c0033"
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
      "bytecode": "0x60a0346100fc57601f611d9938819003918201601f19168301916001600160401b038311848410176101005780849260409485528339810103126100fc5780610056602061004f6100a494610114565b9201610114565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556001600160a01b03908116608052600380546001600160a01b031916918316919091179055610128565b50604051611bc790816101b282396080518181816101ef01528181610557015281816107d60152818161086e01528181610b9c01528181610eb601528181610f2801528181610f66015281816113bd01526115160152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036100fc57565b6001600160a01b0381165f9081525f516020611d795f395f51905f52602052604090205460ff166101ac576001600160a01b03165f8181525f516020611d795f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a7146115b857508063058a56ac1461145b578063248a9ca3146114295780632f2ff15d146113ec5780633013ce29146113a857806335659fb81461138b57806336568abe146113455780633bbb280614610c5c5780634690484014610c335780635536372414610a62578063787dce3d146109cd57806391d1485414610984578063a217fddf14610968578063c7fff71914610764578063cddc1bc114610426578063d3f494cc146103c6578063d547741f1461037f578063d898aaf2146101925763e74b981b146100ef575f80fd5b3461018f57602036600319011261018f5761010861160b565b610110611979565b6001600160a01b0316801561015857600380546001600160a01b031916821790557f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc28280a280f35b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b80fd5b503461018f576101a1366116a2565b926101aa6118c0565b831561032f5781156102ea576001600160a01b03168085526001602090815260408087208588528252808720335f90815292529020549091906102ae576102138430337f0000000000000000000000000000000000000000000000000000000000000000611b08565b60405161021f816116d0565b8481526002602082018381526040830190428252858952600160205260408920878a526020526040892060018060a01b0333165f5260205260405f20935184555160018401555191015560405193845260208401527f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf760403394a460015f516020611b725f395f51905f525580f35b60405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606490fd5b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b60405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608490fd5b503461018f57604036600319011261018f576103c260043561039f611621565b906103bd6103b8825f525f602052600160405f20015490565b6119c8565b611a88565b5080f35b503461018f5760406103d736611637565b939160018060a01b031682526001602052828220908252602052209060018060a01b03165f52602052606060405f20805490600260018201549101549060405192835260208301526040820152f35b503461018f5761043536611637565b9161043e6118c0565b60018060a01b03168084526001602052604084208285526020526040842060018060a01b0384165f5260205260405f206040519061047b826116d0565b6104a08154808452600260018401549360208601948552015460408501521515611722565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa9081156106cf578791610745575b501561061757506040516331a9108f60e11b81526004810184905290602082602481865afa91821561060c5786926105c7575b5061057b9161051d906001600160a01b0316331461182f565b8286526001602052604086208487526020526040862060018060a01b0386165f526020525f600260408220828155826001820155015551847f00000000000000000000000000000000000000000000000000000000000000006118f8565b6040513381526001600160a01b03909316927f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd3090602090a460015f516020611b725f395f51905f525580f35b91506020823d602011610604575b816105e260209383611700565b810103126106005761051d6105f961057b9361181b565b9250610504565b8580fd5b3d91506105d5565b6040513d88823e3d90fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152909190602081602481875afa9081156106cf578791610716575b50156106da57604051627eeac760e11b815233600482015260248101859052602081604481875afa9081156106cf578791610697575b506106929061057b9351111561177e565b61051d565b90506020813d6020116106c7575b816106b260209383611700565b810103126106c3575161057b610681565b5f80fd5b3d91506106a5565b6040513d89823e3d90fd5b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606490fd5b610738915060203d60201161073e575b6107308183611700565b810190611766565b5f61064b565b503d610726565b61075e915060203d60201161073e576107308183611700565b5f6104d1565b503461018f57610773366116a2565b9261077c6118c0565b6001600160a01b03168085526001602090815260408087208588528252808720335f908152925290208054919291801561092c5785156108e857821561089957858181111561084e576107fa916107d29161187b565b30337f0000000000000000000000000000000000000000000000000000000000000000611b08565b84815581600182015560024291015560405193845260208401527ffe240e6b60fba78dcf5eae78fca1a9b6ceaf51429c5036812d6b4f2f0a2dfada60403394a460015f516020611b725f395f51905f525580f35b9080821061085e575b50506107fa565b6108929161086b9161187b565b337f00000000000000000000000000000000000000000000000000000000000000006118f8565b845f610857565b60405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4e6577207072696365206d7573742062652067726561746572207468616e20306044820152fd5b60405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606490fd5b503461018f578060031936011261018f57602090604051908152f35b503461018f57604036600319011261018f5760406109a0611621565b91600435815280602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b503461018f57602036600319011261018f576004356109ea611979565b6103e88111610a25576020817fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de4092600255604051908152a180f35b60405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b6044820152606490fd5b503461018f57604036600319011261018f5760043567ffffffffffffffff8111610c2f57610a94903690600401611671565b60243567ffffffffffffffff8111610c2b57610ab4903690600401611671565b9290610abe6118c0565b838303610bf2579091339190855b818110610ae8578660015f516020611b725f395f51905f525580f35b610af381838761189c565b356001600160a01b0381169190829003610bee57600191610b1582898761189c565b35818a528360205260408a20818b5260205260408a20875f5260205260405f2060405190610b42826116d0565b600281549182845287810154602085015201546040830152610b68575b50505001610acc565b610bc090838c528560205260408c20838d5260205260408c20895f526020525f6002604082208281558289820155015551337f00000000000000000000000000000000000000000000000000000000000000006118f8565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d08b80a45f8080610b5f565b8780fd5b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b8380fd5b5080fd5b503461018f578060031936011261018f576003546040516001600160a01b039091168152602090f35b50346106c357610c6b36611637565b91610c746118c0565b60018060a01b0316805f52600160205260405f20825f5260205260405f2060018060a01b0384165f5260205260405f209260405190610cb2826116d0565b610cd78554808452600260018801549760208601988952015460408501521515611722565b825f52600160205260405f20845f5260205260405f2060018060a01b0382165f526020525f60026040822082815582600182015501556040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa9081156112a9575f91611326575b50156111875760018551036111425785906040516331a9108f60e11b8152856004820152602081602481885afa80156110dd578390611107575b610d8d91506001600160a01b0316331461182f565b60405163e985e9c560e01b8152336004820152306024820152602081604481885afa9081156110dd5783916110e8575b508015611061575b610dce906117c1565b833b15610c2f57604051632142170760e11b81523360048201526001600160a01b03909116602482015260448101859052818160648183885af180156110565761103d575b50505b80516002549081810291818304149015171561102957612710900485869083516040519063152a902d60e11b82528760048301526024820152604081604481895afa808a928b92610fe3575b50610fc9575b5050808301808411610fb5579083610eda9493928651809111610fa4575b5081610e96610e9b92885161187b565b61187b565b9280151580610f90575b610f53575b5080610f22575b5050337f00000000000000000000000000000000000000000000000000000000000000006118f8565b51925160405193845260208401527f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a360403394a460015f516020611b725f395f51905f525580f35b610f4c917f00000000000000000000000000000000000000000000000000000000000000006118f8565b5f80610eb1565b600354610f8a91906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006118f8565b5f610eaa565b506003546001600160a01b03161515610ea5565b610fae925061187b565b825f610e86565b634e487b7160e01b89526011600452602489fd5b6001600160a01b03821615610e6857915091505f80610e68565b925090506040823d604011611021575b8161100060409383611700565b8101031261101d5760206110138361181b565b920151905f610e62565b8980fd5b3d9150610ff3565b634e487b7160e01b86526011600452602486fd5b8161104791611700565b61105257845f610e13565b8480fd5b6040513d84823e3d90fd5b5060405163020604bf60e21b815260048101869052602081602481885afa80156110dd57839061109e575b6001600160a01b031630149050610dc5565b506020813d6020116110d5575b816110b860209383611700565b810103126110d1576110cc610dce9161181b565b61108c565b8280fd5b3d91506110ab565b6040513d85823e3d90fd5b611101915060203d60201161073e576107308183611700565b5f610dbd565b506020813d60201161113a575b8161112160209383611700565b810103126110d157611135610d8d9161181b565b610d78565b3d9150611114565b60405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e742031006044820152606490fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481875afa9081156112a9575f91611307575b50156106da57604051627eeac760e11b815233600482015260248101859052602081604481875afa80156112a9575f906112d3575b6111fb91508651111561177e565b60405163e985e9c560e01b8152336004820152306024820152602081604481875afa80156112a957611234915f916112b4575b506117c1565b8451833b156106c357604051637921219560e11b81523360048201526001600160a01b03909216602483015260448201859052606482015260a060848201525f60a482018190528160c48183875af180156112a957611294575b50610e16565b6112a19195505f90611700565b5f935f61128e565b6040513d5f823e3d90fd5b6112cd915060203d60201161073e576107308183611700565b5f61122e565b506020813d6020116112ff575b816112ed60209383611700565b810103126106c3576111fb90516111ed565b3d91506112e0565b611320915060203d60201161073e576107308183611700565b5f6111b8565b61133f915060203d60201161073e576107308183611700565b5f610d3e565b346106c35760403660031901126106c35761135e611621565b336001600160a01b0382160361137c5761137a90600435611a88565b005b63334bd91960e11b5f5260045ffd5b346106c3575f3660031901126106c3576020600254604051908152f35b346106c3575f3660031901126106c3576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346106c35760403660031901126106c35761137a60043561140b611621565b906114246103b8825f525f602052600160405f20015490565b611a00565b346106c35760203660031901126106c35760206114536004355f525f602052600160405f20015490565b604051908152f35b346106c35760403660031901126106c35761147461160b565b602435906114806118c0565b6001600160a01b03165f8181526001602090815260408083208584528252808320338452909152908190209051919291906114ba826116d0565b60028154918284526001810154602085015201546040830152156115735761153a90835f52600160205260405f20835f5260205260405f2060018060a01b0333165f526020525f600260408220828155826001820155015551337f00000000000000000000000000000000000000000000000000000000000000006118f8565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a460015f516020611b725f395f51905f5255005b60405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606490fd5b346106c35760203660031901126106c3576004359063ffffffff60e01b82168092036106c357602091637965db0b60e01b81149081156115fa575b5015158152f35b6301ffc9a760e01b149050836115f3565b600435906001600160a01b03821682036106c357565b602435906001600160a01b03821682036106c357565b60609060031901126106c3576004356001600160a01b03811681036106c35790602435906044356001600160a01b03811681036106c35790565b9181601f840112156106c35782359167ffffffffffffffff83116106c3576020808501948460051b0101116106c357565b60809060031901126106c3576004356001600160a01b03811681036106c35790602435906044359060643590565b6060810190811067ffffffffffffffff8211176116ec57604052565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff8211176116ec57604052565b1561172957565b60405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606490fd5b908160209103126106c3575180151581036106c35790565b1561178557565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b156117c857565b60405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b6064820152608490fd5b51906001600160a01b03821682036106c357565b1561183657565b60405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606490fd5b9190820391821161188857565b634e487b7160e01b5f52601160045260245ffd5b91908110156118ac5760051b0190565b634e487b7160e01b5f52603260045260245ffd5b60025f516020611b725f395f51905f5254146118e95760025f516020611b725f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f5114821615611958575b604052156119385750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b90600181151661197057823b15153d1516169061192d565b503d5f823e3d90fd5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff16156119b157565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff16156119ea5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16611a82575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615611a82575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b6040516323b872dd60e01b5f9081526001600160a01b039384166004529290931660245260449390935260209060648180865af19060015f5114821615611b59575b6040525f606052156119385750565b90600181151661197057823b15153d15161690611b4a56fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220ab1c8fedcd7f589eb2a3b61465dcccab035205d0e40f2d8097a33768b02bc5c964736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034606f57601f61031c38819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b03191691909117905560405161029490816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146101035750806351e36167146100dc57639e5faafc0361000f57806003193601126100cb57805481906001600160a01b0316803b156100d9578160c491604051928380926334e4cf0760e21b825260606004830152600660648301526561747461636b60d01b608483015260a060248301528460a483015284604483015234905af180156100ce576100ba5750f35b816100c491610228565b6100cb5780f35b80fd5b6040513d84823e3d90fd5b50fd5b50346100cb57806003193601126100cb57546040516001600160a01b039091168152602090f35b346101f85760803660031901126101f85761011c6101fc565b50610125610212565b5060643567ffffffffffffffff81116101f857366023820112156101f857806004013567ffffffffffffffff81116101f857369101602401116101f8575f546001600160a01b0316803b156101f8578160c48167016345785d8a00005f946334e4cf0760e21b83526060600484015260076064840152663932b2b73a32b960c91b608484015260a060248401528560a48401528560448401525af180156101ed576101dd575b604051630a85bd0160e11b8152602090f35b5f6101e791610228565b5f6101cb565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b03821682036101f857565b602435906001600160a01b03821682036101f857565b90601f8019910116810190811067ffffffffffffffff82111761024a57604052565b634e487b7160e01b5f52604160045260245ffdfea2646970667358221220b3dd32e0e6cf81694707d2e445c67bf71a97ac746a1fc7b65cbfc8365d6141ab64736f6c634300081c0033"
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
      "bytecode": "0x60806040523461043c57610fee6020813803918261001c81610440565b93849283398101031261043c57516001600160a01b0381169081900361043c576100466040610440565b906009825268526576657274696e6760b81b60208301526100676040610440565b60038152622922ab60e91b602082015282519091906001600160401b038111610350575f54600181811c91168015610432575b602082101461033257601f81116103d0575b506020601f821160011461036f57819293945f92610364575b50508160011b915f199060031b1c1916175f555b81516001600160401b03811161035057600154600181811c91168015610346575b602082101461033257601f81116102cf575b50602092601f821160011461026e57928192935f92610263575b50508160011b915f199060031b1c1916176001555b600680546001600160a01b0319169190911790553315610250575f805260026020525f516020610fce5f395f51905f52546001600160a01b031680151580610208575b335f8181526003602090815260408083208054600101905582805260029091525f516020610fce5f395f51905f5280546001600160a01b0319168417905551939091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8380a46101f557610b6890816104668239f35b6339e3563760e11b5f525f60045260245ffd5b7f17ef568e3e12ab5b9c7254a8d58478811de00f9e6eb34345acd53bf8fd09d3ec80546001600160a01b03191690555f82815260036020526040902080545f1901905561017e565b633250574960e11b5f525f60045260245ffd5b015190505f80610126565b601f1982169360015f52805f20915f5b8681106102b7575083600195961061029f575b505050811b0160015561013b565b01515f1960f88460031b161c191690555f8080610291565b9192602060018192868501518155019401920161027e565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f830160051c81019160208410610328575b601f0160051c01905b81811061031d575061010c565b5f8155600101610310565b9091508190610307565b634e487b7160e01b5f52602260045260245ffd5b90607f16906100fa565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100c5565b601f198216905f8052805f20915f5b8181106103b8575095836001959697106103a0575b505050811b015f556100d9565b01515f1960f88460031b161c191690555f8080610393565b9192602060018192868b01518155019401920161037e565b5f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f830160051c81019160208410610428575b601f0160051c01905b81811061041d57506100ac565b5f8155600101610410565b9091508190610407565b90607f169061009a565b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176103505760405256fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a7146106b75750806306fdde03146105ff578063081812fc146105c3578063095ea7b3146104d957806323b872dd146104c25780632a55205a1461049257806335ff01031461046a57806342842e0e146104415780636352211e1461041157806370a08231146103c057806395d89b41146102b8578063a22cb46514610204578063b88d4fde1461017a578063c87b56dd1461011d5763e985e9c5146100c3575f80fd5b3461011a57604036600319011261011a5760406100de610760565b916100e7610776565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b80fd5b3461017657602036600319011261017657610139600435610afe565b505f6040516101496020826107c6565b5261017260405161015b6020826107c6565b5f815260405191829160208352602083019061073c565b0390f35b5f80fd5b3461017657608036600319011261017657610193610760565b61019b610776565b6064359167ffffffffffffffff83116101765736602384011215610176578260040135916101c8836107fc565b926101d660405194856107c6565b8084523660248287010111610176576020815f92602461020298018388013785010152604435916109be565b005b346101765760403660031901126101765761021d610760565b602435908115158092036101765733156102a5576001600160a01b031690811561029257335f52600560205260405f20825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b63a9fbf51f60e01b5f525f60045260245ffd5b34610176575f366003190112610176576040515f6001548060011c906001811680156103b6575b6020831081146103a25782855290811561037e5750600114610320575b6101728361030c818503826107c6565b60405191829160208352602083019061073c565b91905060015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6915f905b8082106103645750909150810160200161030c6102fc565b91926001816020925483858801015201910190929161034c565b60ff191660208086019190915291151560051b8401909101915061030c90506102fc565b634e487b7160e01b5f52602260045260245ffd5b91607f16916102df565b34610176576020366003190112610176576001600160a01b036103e1610760565b1680156103fe575f526003602052602060405f2054604051908152f35b6322718ad960e21b5f525f60045260245ffd5b3461017657602036600319011261017657602061042f600435610afe565b6040516001600160a01b039091168152f35b34610176576102026104523661078c565b90604051926104626020856107c6565b5f84526109be565b34610176575f366003190112610176576006546040516001600160a01b039091168152602090f35b3461017657604036600319011261017657600654604080516001600160a01b039092168252602435602083015290f35b34610176576102026104d33661078c565b91610818565b34610176576040366003190112610176576104f2610760565b6024356104fe81610afe565b331515806105b0575b80610583575b6105705781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff161561050d565b506001600160a01b038116331415610507565b34610176576020366003190112610176576004356105e081610afe565b505f526004602052602060018060a01b0360405f205416604051908152f35b34610176575f366003190112610176576040515f5f548060011c906001811680156106ad575b6020831081146103a25782855290811561037e5750600114610651576101728361030c818503826107c6565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b8082106106935750909150810160200161030c6102fc565b91926001816020925483858801015201910190929161067b565b91607f1691610625565b34610176576020366003190112610176576004359063ffffffff60e01b82168092036101765760209163152a902d60e11b81149081156106f9575b5015158152f35b6380ac58cd60e01b81149150811561072b575b811561071a575b50836106f2565b6301ffc9a760e01b14905083610713565b635b5e139f60e01b8114915061070c565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361017657565b602435906001600160a01b038216820361017657565b6060906003190112610176576004356001600160a01b038116810361017657906024356001600160a01b0381168103610176579060443590565b90601f8019910116810190811067ffffffffffffffff8211176107e857604052565b634e487b7160e01b5f52604160045260245ffd5b67ffffffffffffffff81116107e857601f01601f191660200190565b6001600160a01b03909116919082156109ab575f828152600260205260409020546001600160a01b031692829033151580610916575b50846108dd575b805f52600360205260405f2060018154019055815f52600260205260405f20816bffffffffffffffffffffffff60a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b03168083036108c557505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b815f52600460205260405f206bffffffffffffffffffffffff60a01b8154169055845f52600360205260405f205f198154019055610855565b9091508061095a575b1561092c5782905f61084e565b828461094457637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015610989575b8061091f57505f838152600460205260409020546001600160a01b0316331461091f565b505f84815260056020908152604080832033845290915290205460ff16610965565b633250574960e11b5f525f60045260245ffd5b92916109cb818386610818565b813b6109d8575b50505050565b604051630a85bd0160e11b81523360048201526001600160a01b0394851660248201526044810191909152608060648201529216919060209082908190610a2390608483019061073c565b03815f865af15f9181610ab9575b50610a8657503d15610a7f573d610a47816107fc565b90610a5560405192836107c6565b81523d5f602083013e5b80519081610a7a5782633250574960e11b5f5260045260245ffd5b602001fd5b6060610a5f565b6001600160e01b03191663757a42ff60e11b01610aa757505f8080806109d2565b633250574960e11b5f5260045260245ffd5b9091506020813d602011610af6575b81610ad5602093836107c6565b8101031261017657516001600160e01b03198116810361017657905f610a31565b3d9150610ac8565b5f818152600260205260409020546001600160a01b0316908115610b20575090565b637e27328960e01b5f5260045260245ffdfea26469706673582212204cb671c30a581e26e93da1aed221575dab2df5ee46afe838bd70eed399841f5964736f6c634300081c0033ac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b"
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
      "bytecode": "0x60a06040523461029a57611a7080380380610019816102b2565b928339810160608282031261029a5781516001600160401b03811161029a5782019080601f8301121561029a578151916001600160401b03831161029e578260051b9060208061006a8185016102b2565b80968152019282010192831161029a57602001905b8282106102825750505061009a6040602084015193016102d7565b815115610248578215158061023d575b15610204576001600160a01b03169182156101ca575f5b825181101561015c57600581901b8301602001516001600160a01b031690811561012757816100f16001936102eb565b6100fd575b50016100c1565b7f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a25f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600255608052604051908152a1604051611717908161035982396080518181816101c1015281816102eb015281816103e90152818161072901528181610abb01526112540152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b6020809161028f846102d7565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b0381118382101761029e57604052565b51906001600160a01b038216820361029a57565b805f52600160205260405f2054155f14610353575f546801000000000000000081101561029e5760018101805f5581101561033f5781905f805260205f2001555f54905f52600160205260405f2055600190565b634e487b7160e01b5f52603260045260245ffd5b505f9056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa89514610f41578063013cf08b14610e0657806301ffc9a714610db05780630d61b51914610c82578063150b7a0214610c2d5780631626ba7e14610bdc578063173825d914610b6057806319822f7c14610a835780632358d5a814610a375780632f54bf6e146109f55780633b8ba8621461076a5780633e1b0812146106e057806342cde4e8146106c35780635d35a3d9146105b3578063694e80c3146105505780637065cb48146104bc57806374420f4c146103d7578063a0e67e2b1461031a578063b0d691fe146102d6578063bc197c8114610241578063d087d28814610190578063da35c664146101735763f23a6e610361000e573461016f5760a036600319011261016f57610133611061565b5061013c611077565b506084356001600160401b03811161016f5761015c9036906004016110de565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b3461016f575f36600319011261016f576020600554604051908152f35b3461016f575f36600319011261016f57604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610236575f90610203575b604051908152602090f35b506020813d60201161022e575b8161021d60209383611040565b8101031261016f57602090516101f8565b3d9150610210565b6040513d5f823e3d90fd5b3461016f5760a036600319011261016f5761025a611061565b50610263611077565b506044356001600160401b03811161016f57610283903690600401611173565b506064356001600160401b03811161016f576102a3903690600401611173565b506084356001600160401b03811161016f576102c39036906004016110de565b5060405163bc197c8160e01b8152602090f35b3461016f575f36600319011261016f576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461016f575f36600319011261016f576040518060205f54928381520180925f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563905f5b8181106103c15750505081610376910382611040565b604051918291602083019060208452518091526040830191905f5b81811061039f575050500390f35b82516001600160a01b0316845285945060209384019390920191600101610391565b8254845260209093019260019283019201610360565b3461016f576103e536611129565b93337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614939291841561048b5760016002540361047c575f9384935b826040519384928337810185815203925af16104446111da565b501561046d5761045057005b5f90815260036020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b90913033036104a0575b905f9384939261042a565b91906104ab33611453565b60016002540361047c579091610495565b3461016f57602036600319011261016f576104d5611061565b30330361053d576001600160a01b0316801561052e576104f4816115a9565b1561051f577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b3461016f57602036600319011261016f5760043530330361053d57801580156105a9575b61047c576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600255604051908152a1005b505f548111610574565b3461016f576105dd6105c436610ff2565b6105d86105d382949394611251565b611453565b611251565b6005548210156106b457815f52600460205260405f20600381015460ff81166106a55760081c60ff1661069657600581019060018060a01b0383165f528160205260ff60405f2054166106875760049160018060a01b0384165f5260205260405f20600160ff1982541617905501610655815461122f565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b63635e873760e01b5f5260045ffd5b3461016f575f36600319011261016f576020600254604051908152f35b3461016f57602036600319011261016f576004356001600160c01b0381169081900361016f57604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610236575f9061020357604051908152602090f35b3461016f5761078d61077b36611129565b6105d86105d382979394969597611251565b6005549261079a8461122f565b6005555f84815260046020526040902080546001600160a01b0319166001600160a01b0383161781556001810187905592600284016001600160401b0382116109e1576107e78154611008565b601f811161099c575b50916020979186935f601f83116001146109075760019795938360049896937f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c76812956080945f916108fc575b505f19600384901b1c1916828c1b1790555b80600389019c8b8060a01b0389169d8e99815490620100008f60b01b039060101b1690620100008f60b01b0319161790556040519586948d8060a01b031685528f85015260606040850152816060850152848401375f828201840152601f01601f19168101030190a3845f5260058101865260405f208360ff19825416179055015560405191817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a38152f35b90508d01358f61083b565b89601f19841691835f528c5f20925f5b81811061098057509360809360019b99979387937f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c768129860049d9b9810610967575b5050508a82811b01905561084d565b01355f19600385901b60f8161c191690558e8d81610958565b9282013584558b98506001909301928c92918e01918e01610917565b815f5260205f20601f840160051c810191602085106109d7575b601f0160051c01905b8181106109cc57506107f0565b5f81556001016109bf565b90915081906109b6565b634e487b7160e01b5f52604160045260245ffd5b3461016f57602036600319011261016f576020610a2d6001600160a01b03610a1b611061565b165f52600160205260405f2054151590565b6040519015158152f35b3461016f57604036600319011261016f57610a50611077565b6004355f526004602052600560405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461016f57606036600319011261016f576004356001600160401b03811161016f5780360361012060031982011261016f57604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316330361053d57610104830135906022190181121561016f578201916004830135926001600160401b03841161016f5760240192803603841361016f57602093610b329260243590600401611333565b9080610b42575b50604051908152f35b5f8080809381604051610b558982611040565b52335af15082610b39565b3461016f57602036600319011261016f57610b79611061565b30330361053d576001600160a01b0316610b928161149a565b15610bcd575f54600254811061047c571561047c577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b3461016f57604036600319011261016f576024356001600160401b03811161016f57610c1a610c1160209236906004016110fc565b90600435611209565b6040516001600160e01b03199091168152f35b3461016f57608036600319011261016f57610c46611061565b50610c4f611077565b506064356001600160401b03811161016f57610c6f9036906004016110de565b50604051630a85bd0160e11b8152602090f35b602036600319011261016f576004356005548110156106b457805f52600460205260405f2060038101805460ff81166106a55760ff8160081c1661069657600483015460025411610da15760ff19166001908117909155815490820154604051600290930180546001600160a01b039390931693925f91610d0282611008565b9160018116908115610d8a5750600114610d58575b5050915f939181859403925af1610d2c6111da565b501561046d577fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b9091505f5260205f205f905b828210610d7657505082018183610d17565b600181602092548488015201910190610d64565b60ff19168652505080151502830190508183610d17565b6359fa4a9360e01b5f5260045ffd5b3461016f57602036600319011261016f5760043563ffffffff60e01b811680910361016f57602090630271189760e51b8114908115610df5575b506040519015158152f35b6301ffc9a760e01b14905082610dea565b3461016f57602036600319011261016f576004355f52600460205260405f2060018060a01b03815416600182015490600283016040515f94825492610e4a84611008565b9081845260208401946001811690815f14610f245750600114610eea575b5050610e7a8261010096970383611040565b60046003820154910154916040519687958652602086015260e060408601525180938160e08701528686015e5f84840186015260ff81811615156060860152600882901c161515608085015260101c6001600160a01b031660a084015260c0830152601f01601f19168101030190f35b9096505f5260205f205f905b878210610f0e575082016020019550610e7a82610e68565b6001816020925483858801015201910190610ef6565b60ff191686525050151560051b82016020019550610e7a82610e68565b3461016f57610f5a610f5236610ff2565b919091611251565b6005548210156106b457815f526004602052600360405f20019081549060ff82166106a55760ff8260081c1661069657601082901c6001600160a01b039081169116141580610fe8575b610fd95761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b5030331415610fa4565b604090600319011261016f576004359060243590565b90600182811c92168015611036575b602083101461102257565b634e487b7160e01b5f52602260045260245ffd5b91607f1691611017565b90601f801991011681019081106001600160401b038211176109e157604052565b600435906001600160a01b038216820361016f57565b602435906001600160a01b038216820361016f57565b6001600160401b0381116109e157601f01601f191660200190565b9291926110b48261108d565b916110c26040519384611040565b82948184528183011161016f578281602093845f960137010152565b9080601f8301121561016f578160206110f9933591016110a8565b90565b9181601f8401121561016f578235916001600160401b03831161016f576020838186019501011161016f57565b608060031982011261016f576004356001600160a01b038116810361016f579160243591604435906001600160401b03821161016f5761116b916004016110fc565b909160643590565b9080601f8301121561016f578135916001600160401b0383116109e1578260051b90604051936111a66020840186611040565b845260208085019282010192831161016f57602001905b8282106111ca5750505090565b81358152602091820191016111bd565b3d15611204573d906111eb8261108d565b916111f96040519384611040565b82523d5f602084013e565b606090565b9061121492916112a0565b611224576001600160e01b031990565b630b135d3f60e11b90565b5f19811461123d5760010190565b634e487b7160e01b5f52601160045260245ffd5b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461128657503390565b5f908152600360205260409020546001600160a01b031690565b906112e06112c46112bb6112b53687866110a8565b8561156f565b909291926115ff565b6001600160a01b03165f90815260016020526040902054151590565b61132b576110f9926113256112bb926112c4947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f209236916110a8565b9061156f565b505050600190565b919290926113456112b53684846110a8565b50949080956004811015611420571590811591611434575b50611398575b505050602001355f52600360205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b6113d593945090611325917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f209236916110a8565b50919080926004811015611420571590811591611401575b506113fa575f8080611363565b5050600190565b6001600160a01b03165f908152600160205260408120541591506113ed565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f9081526001602052604081205415915061135d565b6001600160a01b03165f9081526001602052604090205415610bcd57565b8054821015611486575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b5f818152600160205260409020548015611569575f19810181811161123d575f545f1981019190821161123d5781810361151d575b5050505f548015611509575f19016114e7815f611471565b8154905f199060031b1b191690555f555f5260016020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b61155361152d61153d935f611471565b90549060031b1c9283925f611471565b819391549060031b91821b915f19901b19161790565b90555f52600160205260405f20555f80806114cf565b50505f90565b815191906041830361159f576115989250602082015190606060408401519301515f1a9061165f565b9192909190565b50505f9160029190565b805f52600160205260405f2054155f146115fa575f54680100000000000000008110156109e1576115e461153d8260018594015f555f611471565b90555f54905f52600160205260405f2055600190565b505f90565b60048110156114205780611611575050565b600181036116285763f645eedf60e01b5f5260045ffd5b60028103611643575063fce698f760e01b5f5260045260245ffd5b60031461164d5750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084116116d6579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15610236575f516001600160a01b038116156116cc57905f905f90565b505f906001905f90565b5050505f916003919056fea26469706673582212202b660bb89b2c9aaa2f8d783c4430bc9fe1571843753468c30ee39b44ca51130564736f6c634300081c0033"
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
      "bytecode": "0x60808060405234601557611d9b908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806389ac7d8b146100f55763c70d2a031461002f575f80fd5b346100f15761003d366101d5565b9060409392935190611a708083019183831067ffffffffffffffff8411176100dd5786868594610071946102f687396102c8565b03905ff59182156100d257604080518181526020946001600160a01b03169384937fb5cc75a3ec5831cf7ae127c1015a65f6f9168790072deb73f8345f14acd50e9b9383926100c29184019061028c565b90878301520390a2604051908152f35b6040513d5f823e3d90fd5b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b346100f1576020600b61018461010a366101d5565b9390919286611a709161015360405196610126848601896101b3565b848852838801946102f6863961014560405197889286840195866102c8565b03601f1981018752866101b3565b60405194859383850197518091895e840190838201905f8252519283915e01015f815203601f1981018352826101b3565b51902090604051916040830152838201523081520160ff8153605590206040516001600160a01b039091168152f35b90601f8019910116810190811067ffffffffffffffff8211176100dd57604052565b60806003198201126100f15760043567ffffffffffffffff81116100f157816023820112156100f15780600401359167ffffffffffffffff83116100dd578260051b916040519361022960208501866101b3565b8452602460208501938201019182116100f157602401915b81831061026c57509192602435925090506044356001600160a01b03811681036100f1579060643590565b82356001600160a01b03811681036100f157815260209283019201610241565b90602080835192838152019201905f5b8181106102a95750505090565b82516001600160a01b031684526020938401939092019160010161029c565b9193926102df60409260608552606085019061028c565b60208401959095526001600160a01b031691015256fe60a06040523461029a57611a7080380380610019816102b2565b928339810160608282031261029a5781516001600160401b03811161029a5782019080601f8301121561029a578151916001600160401b03831161029e578260051b9060208061006a8185016102b2565b80968152019282010192831161029a57602001905b8282106102825750505061009a6040602084015193016102d7565b815115610248578215158061023d575b15610204576001600160a01b03169182156101ca575f5b825181101561015c57600581901b8301602001516001600160a01b031690811561012757816100f16001936102eb565b6100fd575b50016100c1565b7f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a25f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600255608052604051908152a1604051611717908161035982396080518181816101c1015281816102eb015281816103e90152818161072901528181610abb01526112540152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b6020809161028f846102d7565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b0381118382101761029e57604052565b51906001600160a01b038216820361029a57565b805f52600160205260405f2054155f14610353575f546801000000000000000081101561029e5760018101805f5581101561033f5781905f805260205f2001555f54905f52600160205260405f2055600190565b634e487b7160e01b5f52603260045260245ffd5b505f9056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa89514610f41578063013cf08b14610e0657806301ffc9a714610db05780630d61b51914610c82578063150b7a0214610c2d5780631626ba7e14610bdc578063173825d914610b6057806319822f7c14610a835780632358d5a814610a375780632f54bf6e146109f55780633b8ba8621461076a5780633e1b0812146106e057806342cde4e8146106c35780635d35a3d9146105b3578063694e80c3146105505780637065cb48146104bc57806374420f4c146103d7578063a0e67e2b1461031a578063b0d691fe146102d6578063bc197c8114610241578063d087d28814610190578063da35c664146101735763f23a6e610361000e573461016f5760a036600319011261016f57610133611061565b5061013c611077565b506084356001600160401b03811161016f5761015c9036906004016110de565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b3461016f575f36600319011261016f576020600554604051908152f35b3461016f575f36600319011261016f57604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610236575f90610203575b604051908152602090f35b506020813d60201161022e575b8161021d60209383611040565b8101031261016f57602090516101f8565b3d9150610210565b6040513d5f823e3d90fd5b3461016f5760a036600319011261016f5761025a611061565b50610263611077565b506044356001600160401b03811161016f57610283903690600401611173565b506064356001600160401b03811161016f576102a3903690600401611173565b506084356001600160401b03811161016f576102c39036906004016110de565b5060405163bc197c8160e01b8152602090f35b3461016f575f36600319011261016f576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461016f575f36600319011261016f576040518060205f54928381520180925f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563905f5b8181106103c15750505081610376910382611040565b604051918291602083019060208452518091526040830191905f5b81811061039f575050500390f35b82516001600160a01b0316845285945060209384019390920191600101610391565b8254845260209093019260019283019201610360565b3461016f576103e536611129565b93337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614939291841561048b5760016002540361047c575f9384935b826040519384928337810185815203925af16104446111da565b501561046d5761045057005b5f90815260036020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b90913033036104a0575b905f9384939261042a565b91906104ab33611453565b60016002540361047c579091610495565b3461016f57602036600319011261016f576104d5611061565b30330361053d576001600160a01b0316801561052e576104f4816115a9565b1561051f577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b3461016f57602036600319011261016f5760043530330361053d57801580156105a9575b61047c576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600255604051908152a1005b505f548111610574565b3461016f576105dd6105c436610ff2565b6105d86105d382949394611251565b611453565b611251565b6005548210156106b457815f52600460205260405f20600381015460ff81166106a55760081c60ff1661069657600581019060018060a01b0383165f528160205260ff60405f2054166106875760049160018060a01b0384165f5260205260405f20600160ff1982541617905501610655815461122f565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b63635e873760e01b5f5260045ffd5b3461016f575f36600319011261016f576020600254604051908152f35b3461016f57602036600319011261016f576004356001600160c01b0381169081900361016f57604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610236575f9061020357604051908152602090f35b3461016f5761078d61077b36611129565b6105d86105d382979394969597611251565b6005549261079a8461122f565b6005555f84815260046020526040902080546001600160a01b0319166001600160a01b0383161781556001810187905592600284016001600160401b0382116109e1576107e78154611008565b601f811161099c575b50916020979186935f601f83116001146109075760019795938360049896937f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c76812956080945f916108fc575b505f19600384901b1c1916828c1b1790555b80600389019c8b8060a01b0389169d8e99815490620100008f60b01b039060101b1690620100008f60b01b0319161790556040519586948d8060a01b031685528f85015260606040850152816060850152848401375f828201840152601f01601f19168101030190a3845f5260058101865260405f208360ff19825416179055015560405191817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a38152f35b90508d01358f61083b565b89601f19841691835f528c5f20925f5b81811061098057509360809360019b99979387937f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c768129860049d9b9810610967575b5050508a82811b01905561084d565b01355f19600385901b60f8161c191690558e8d81610958565b9282013584558b98506001909301928c92918e01918e01610917565b815f5260205f20601f840160051c810191602085106109d7575b601f0160051c01905b8181106109cc57506107f0565b5f81556001016109bf565b90915081906109b6565b634e487b7160e01b5f52604160045260245ffd5b3461016f57602036600319011261016f576020610a2d6001600160a01b03610a1b611061565b165f52600160205260405f2054151590565b6040519015158152f35b3461016f57604036600319011261016f57610a50611077565b6004355f526004602052600560405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461016f57606036600319011261016f576004356001600160401b03811161016f5780360361012060031982011261016f57604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316330361053d57610104830135906022190181121561016f578201916004830135926001600160401b03841161016f5760240192803603841361016f57602093610b329260243590600401611333565b9080610b42575b50604051908152f35b5f8080809381604051610b558982611040565b52335af15082610b39565b3461016f57602036600319011261016f57610b79611061565b30330361053d576001600160a01b0316610b928161149a565b15610bcd575f54600254811061047c571561047c577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b3461016f57604036600319011261016f576024356001600160401b03811161016f57610c1a610c1160209236906004016110fc565b90600435611209565b6040516001600160e01b03199091168152f35b3461016f57608036600319011261016f57610c46611061565b50610c4f611077565b506064356001600160401b03811161016f57610c6f9036906004016110de565b50604051630a85bd0160e11b8152602090f35b602036600319011261016f576004356005548110156106b457805f52600460205260405f2060038101805460ff81166106a55760ff8160081c1661069657600483015460025411610da15760ff19166001908117909155815490820154604051600290930180546001600160a01b039390931693925f91610d0282611008565b9160018116908115610d8a5750600114610d58575b5050915f939181859403925af1610d2c6111da565b501561046d577fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b9091505f5260205f205f905b828210610d7657505082018183610d17565b600181602092548488015201910190610d64565b60ff19168652505080151502830190508183610d17565b6359fa4a9360e01b5f5260045ffd5b3461016f57602036600319011261016f5760043563ffffffff60e01b811680910361016f57602090630271189760e51b8114908115610df5575b506040519015158152f35b6301ffc9a760e01b14905082610dea565b3461016f57602036600319011261016f576004355f52600460205260405f2060018060a01b03815416600182015490600283016040515f94825492610e4a84611008565b9081845260208401946001811690815f14610f245750600114610eea575b5050610e7a8261010096970383611040565b60046003820154910154916040519687958652602086015260e060408601525180938160e08701528686015e5f84840186015260ff81811615156060860152600882901c161515608085015260101c6001600160a01b031660a084015260c0830152601f01601f19168101030190f35b9096505f5260205f205f905b878210610f0e575082016020019550610e7a82610e68565b6001816020925483858801015201910190610ef6565b60ff191686525050151560051b82016020019550610e7a82610e68565b3461016f57610f5a610f5236610ff2565b919091611251565b6005548210156106b457815f526004602052600360405f20019081549060ff82166106a55760ff8260081c1661069657601082901c6001600160a01b039081169116141580610fe8575b610fd95761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b5030331415610fa4565b604090600319011261016f576004359060243590565b90600182811c92168015611036575b602083101461102257565b634e487b7160e01b5f52602260045260245ffd5b91607f1691611017565b90601f801991011681019081106001600160401b038211176109e157604052565b600435906001600160a01b038216820361016f57565b602435906001600160a01b038216820361016f57565b6001600160401b0381116109e157601f01601f191660200190565b9291926110b48261108d565b916110c26040519384611040565b82948184528183011161016f578281602093845f960137010152565b9080601f8301121561016f578160206110f9933591016110a8565b90565b9181601f8401121561016f578235916001600160401b03831161016f576020838186019501011161016f57565b608060031982011261016f576004356001600160a01b038116810361016f579160243591604435906001600160401b03821161016f5761116b916004016110fc565b909160643590565b9080601f8301121561016f578135916001600160401b0383116109e1578260051b90604051936111a66020840186611040565b845260208085019282010192831161016f57602001905b8282106111ca5750505090565b81358152602091820191016111bd565b3d15611204573d906111eb8261108d565b916111f96040519384611040565b82523d5f602084013e565b606090565b9061121492916112a0565b611224576001600160e01b031990565b630b135d3f60e11b90565b5f19811461123d5760010190565b634e487b7160e01b5f52601160045260245ffd5b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461128657503390565b5f908152600360205260409020546001600160a01b031690565b906112e06112c46112bb6112b53687866110a8565b8561156f565b909291926115ff565b6001600160a01b03165f90815260016020526040902054151590565b61132b576110f9926113256112bb926112c4947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f209236916110a8565b9061156f565b505050600190565b919290926113456112b53684846110a8565b50949080956004811015611420571590811591611434575b50611398575b505050602001355f52600360205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b6113d593945090611325917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f209236916110a8565b50919080926004811015611420571590811591611401575b506113fa575f8080611363565b5050600190565b6001600160a01b03165f908152600160205260408120541591506113ed565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f9081526001602052604081205415915061135d565b6001600160a01b03165f9081526001602052604090205415610bcd57565b8054821015611486575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b5f818152600160205260409020548015611569575f19810181811161123d575f545f1981019190821161123d5781810361151d575b5050505f548015611509575f19016114e7815f611471565b8154905f199060031b1b191690555f555f5260016020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b61155361152d61153d935f611471565b90549060031b1c9283925f611471565b819391549060031b91821b915f19901b19161790565b90555f52600160205260405f20555f80806114cf565b50505f90565b815191906041830361159f576115989250602082015190606060408401519301515f1a9061165f565b9192909190565b50505f9160029190565b805f52600160205260405f2054155f146115fa575f54680100000000000000008110156109e1576115e461153d8260018594015f555f611471565b90555f54905f52600160205260405f2055600190565b505f90565b60048110156114205780611611575050565b600181036116285763f645eedf60e01b5f5260045ffd5b60028103611643575063fce698f760e01b5f5260045260245ffd5b60031461164d5750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084116116d6579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15610236575f516001600160a01b038116156116cc57905f905f90565b505f906001905f90565b5050505f916003919056fea26469706673582212202b660bb89b2c9aaa2f8d783c4430bc9fe1571843753468c30ee39b44ca51130564736f6c634300081c0033a26469706673582212200647bfe583fd4009cc0e98cc7ba08ce450e7dd0cb6c5dffd98d2967a1913a2a964736f6c634300081c0033"
    }
  },
  "deployments": {
    "31337": {
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "MockPriceFeed": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
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
      "ExhibitRegistry": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "MockPriceFeed": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    },
    "chain-11155111": {
      "BragToken": "0x1111111111111111111111111111111111111111",
      "NFTMarketplace": "0x2222222222222222222222222222222222222222",
      "BragNFT": "0x3333333333333333333333333333333333333333",
      "ExhibitRegistry": "0x4444444444444444444444444444444444444444",
      "DonationReceipt": "0x5555555555555555555555555555555555555555",
      "Treasury": "0x6666666666666666666666666666666666666666"
    }
  },
  "externalCollections": [
    {
      "name": "Hypocycloids & Epicycloids",
      "address": "0x495f947276749ce646f68ac8c248420045cb7b5e",
      "type": "IERC1155",
      "tokens": [
        "77085256408163406308004197185999916350236004123346139875108148132909762478081",
        "77085256408163406308004197185999916350236004123346139875108148152700971778049",
        "77085256408163406308004197185999916350236004123346139875108148149402436894721",
        "77085256408163406308004197185999916350236004123346139875108148137307808989185"
      ]
    },
    {
      "name": "DESF Scratch Cats",
      "address": "0x495f947276749ce646f68ac8c248420045cb7b5e",
      "type": "IERC1155",
      "tokens": [
        "77085256408163406308004197185999916350236004123346139875108147956987902033921",
        "77085256408163406308004197185999916350236004123346139875108148066939064811521",
        "77085256408163406308004197185999916350236004123346139875108148101023925272577",
        "77085256408163406308004197185999916350236004123346139875108147965783995056129"
      ]
    }
  ]
};