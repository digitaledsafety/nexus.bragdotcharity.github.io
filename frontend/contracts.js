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
      "bytecode": "0x6080604052346103ac576141df6060813803918261001c816103b0565b9384928339810103126103ac57610032816103d5565b906040610041602083016103d5565b9101519061004f60406103b0565b926007845266109c9859d3919560ca1b602085015261006e60406103b0565b600781526610949051d3919560ca1b6020820152845190946001600160401b0382116102b3575f5490600182811c921680156103a2575b60208310146102955781601f849311610335575b50602090601f83116001146102d2575f926102c7575b50508160011b915f199060031b1c1916175f555b83516001600160401b0381116102b357600154600181811c911680156102a9575b602082101461029557601f8111610232575b506020601f82116001146101c95781906101869495965f926101be575b50508160011b915f199060031b1c1916176001555b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055600d80546001600160a01b0316607d60a21b1790556103e9565b50600a80546001600160a01b0319166001600160a01b0392909216919091179055600b556064600955604051613d4c90816104738239f35b015190505f80610133565b601f1982169560015f52815f20965f5b81811061021a57509161018695969791846001959410610202575b505050811b01600155610148565b01515f1960f88460031b161c191690555f80806101f4565b838301518955600190980197602093840193016101d9565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f830160051c8101916020841061028b575b601f0160051c01905b8181106102805750610116565b5f8155600101610273565b909150819061026a565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610104565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100cf565b5f8080528281209350601f198516905b81811061031d5750908460019594939210610305575b505050811b015f556100e3565b01515f1960f88460031b161c191690555f80806102f8565b929360206001819287860151815501950193016102e2565b5f80529091507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f840160051c81019160208510610398575b90601f859493920160051c01905b81811061038a57506100b9565b5f815584935060010161037d565b909150819061036f565b91607f16916100a5565b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176102b357604052565b51906001600160a01b03821682036103ac57565b6001600160a01b0381165f9081525f5160206141bf5f395f51905f52602052604090205460ff1661046d576001600160a01b03165f8181525f5160206141bf5f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561007a575b50361561001a575f80fd5b610022611c84565b6100676040516100336040826119b6565b600f81526e2234b932b1ba103237b730ba34b7b760891b60208201526040519061005e6020836119b6565b5f825233611d0d565b60015f516020613cf75f395f51905f5255005b5f905f3560e01c90816301ffc9a71461180e5750806306fdde0314611747578063081812fc1461170b578063095ea7b3146116215780630fd973ce146111235780631653441c146110bb57806318160ddd1461109d57806319bcef6d1461105d57806323b872dd14611045578063248a9ca3146110115780632a55205a14610fb05780632eb9313e14610f705780632f2ff15d14610f3157806336568abe14610eec57806342842e0e14610ebc57806360758c1814610e2157806361d027b314610df85780636352211e14610dc757806364cb7e9c14610d9c5780636f8b44b014610d7957806370a0823114610d2657806381ddcc1f14610d0557806383943dc814610cdc57806391d1485414610c9257806395d89b4114610baf57806396d8f4f314610b91578063a217fddf14610b75578063a22cb46514610abd578063a6719b3a14610a3d578063b88d4fde146109ce578063c6317247146109ab578063c87b56dd14610472578063d3933c1c146103ce578063d435b3a3146103a5578063d547741f1461035d578063d5abeb011461033f578063da183afb14610315578063e985e9c5146102bd5763f0f442600361000f57346102ba5760203660031901126102ba576102486118eb565b610250612444565b6001600160a01b03168015610275576001600160601b0360a01b600a541617600a5580f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b80fd5b50346102ba5760403660031901126102ba5760406102d96118eb565b916102e2611901565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346102ba5760203660031901126102ba5760406020916004358152600e83522054604051908152f35b50346102ba57806003193601126102ba576020600954604051908152f35b50346102ba5760403660031901126102ba576103a160043561037d611901565b9061039c610397825f526007602052600160405f20015490565b612493565b612618565b5080f35b50346102ba57806003193601126102ba57600c546040516001600160a01b039091168152602090f35b5060603660031901126102ba576004356001600160401b03811161046e576103fa903690600401611917565b906024356001600160401b03811161046a5761041a903690600401611917565b90916044359283151584036104665761044361044b926104529661043c611c84565b3691611a92565b923691611a92565b903361203d565b60015f516020613cf75f395f51905f525580f35b8580fd5b8380fd5b5080fd5b50346102ba5760203660031901126102ba576004359061049182611c50565b50818152600e6020526040812054906020916040516104b084826119b6565b8281529060018060a01b03600c5416908161085b575b5050829390838092816060828752600f82526104e4604088206119d7565b80519091901561080557826104f883612bab565b156107fd5750508180610563603a6105186105138a8961293a565b613b88565b6040519384917f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000828401528051918291018484015e81018c838201520301601f1981018352826119b6565b935b60405161057283826119b6565b89815292805161079e575b5061058790613736565b86519096901561078457816105dc816105d660228d6105a587613508565b906040519485926101d160f51b828501528051918291018585015e820190838201520301601f1981018352826119b6565b96613508565b916105e690613508565b95604051998a99727b226e616d65223a2022427261674e4654202360681b828c015280519182910160338c015e890190603382017f222c20226465736372697074696f6e223a2022427261672e43686172697479209052605382016b111bdb985d1a5bdb8813919560a21b9052805192839101605f83015e01603301906c1116101134b6b0b3b2911d101160991b602c830152805192839101603983015e01602c0190600d8201888152815193849201905e01600d01907f222c202261747472696275746573223a205b7b2274726169745f74797065223a825275101126b2b9b9b0b3b2911610113b30b63ab2911d101160511b83830152805192839101603683015e0163227d5d7d60e01b603682015203603601601b198101825260040161070f90826119b6565b61071890613b88565b6040517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000008582015281519094859392829101603d85015e820190603d82015203603d01601f198101835261076c90836119b6565b6040519181839283528201610780916118c7565b0390f35b816105dc60405161079583826119b6565b8b815296613508565b6105879193506107f660356107b38593613508565b604051741116101130b734b6b0ba34b7b72fbab936111d101160591b858201528151909485928291018484015e81018d838201520301601f1981018352826119b6565b929061057d565b909193610565565b905061081083612887565b805190919015610845578261082483612bab565b156107fd575050818061083f603a6105186105138a8961293a565b93610565565b9050818061083f603a6105186105138a8961293a565b839060246040518094819363b63e6ac360e01b835260048301525afa8391816108a3575b5084958593928492610897575b5095508192506104c6565b6060015192505f61088c565b9091503d8085833e6108b581836119b6565b81019085818303126109a7578051906001600160401b0382116104665701906080828203126109a75760405191608083018381106001600160401b038211176109935760405280516001600160a01b038116810361098f5783528681015187840152604081015160408401526060810151906001600160401b03821161098f570181601f820112156104665780519061094d82611a77565b9261095b60405194856119b6565b82845288838301011161098f579287989287898481999895828099018386015e83010152606082015293945091509561087f565b8680fd5b634e487b7160e01b87526041600452602487fd5b8480fd5b50346102ba5760203660031901126102ba576109c5612444565b600435600b5580f35b50346102ba5760803660031901126102ba576109e86118eb565b6109f0611901565b90604435606435926001600160401b0384116109a757366023850112156109a757610a28610a3a943690602481600401359101611a92565b92610a34838383611ac8565b336127aa565b80f35b5060803660031901126102ba57610a526118eb565b6024356001600160401b038111610ab957610a71903690600401611917565b916044356001600160401b0381116109a757610a91903690600401611917565b909260643593841515850361098f57610443610ab3926104529761043c611c84565b9161203d565b8280fd5b50346102ba5760403660031901126102ba57610ad76118eb565b60243590811515809203610ab9573315610b61576001600160a01b0316908115610b4d57338352600560205260408320825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b630b61174360e31b83526004829052602483fd5b63a9fbf51f60e01b83526004839052602483fd5b50346102ba57806003193601126102ba57602090604051908152f35b50346102ba57806003193601126102ba576020600b54604051908152f35b50346102ba57806003193601126102ba57604051908060015490610bd28261197e565b8085529160018116908115610c6b5750600114610c0e575b61078084610bfa818603826119b6565b6040519182916020835260208301906118c7565b600181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b808210610c5157509091508101602001610bfa82610bea565b919260018160209254838588010152019101909291610c38565b60ff191660208087019190915292151560051b85019092019250610bfa9150839050610bea565b50346102ba5760403660031901126102ba576040610cae611901565b9160043581526007602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346102ba57806003193601126102ba57600d546040516001600160a01b039091168152602090f35b50346102ba57806003193601126102ba576020600d5460a01c604051908152f35b50346102ba5760203660031901126102ba576001600160a01b03610d486118eb565b168015610d65578160409160209352600383522054604051908152f35b6322718ad960e21b82526004829052602482fd5b50346102ba5760203660031901126102ba57610d93612444565b60043560095580f35b50346102ba5760203660031901126102ba57610bfa6040610780926004358152600f602052206119d7565b50346102ba5760203660031901126102ba576020610de6600435611c50565b6040516001600160a01b039091168152f35b50346102ba57806003193601126102ba57600a546040516001600160a01b039091168152602090f35b50346102ba5760203660031901126102ba576004356001600160601b038116808203610ab95761271090610e53612444565b11610e7e57600d80546001600160a01b031660a09290921b6001600160a01b03191691909117905580f35b60405162461bcd60e51b81526020600482015260166024820152754665652063616e6e6f7420657863656564203130302560501b6044820152606490fd5b50346102ba57610a3a610ece36611944565b9060405192610ede6020856119b6565b858452610a34838383611ac8565b50346102ba5760403660031901126102ba57610f06611901565b336001600160a01b03821603610f22576103a190600435612618565b63334bd91960e11b8252600482fd5b50346102ba5760403660031901126102ba576103a1600435610f51611901565b90610f6b610397825f526007602052600160405f20015490565b61258c565b50346102ba5760203660031901126102ba57610f8a6118eb565b610f92612444565b60018060a01b03166001600160601b0360a01b600d541617600d5580f35b50346102ba5760403660031901126102ba57600d5460a01c60243581810292918115918404141715610ffd57600a54604080516001600160a01b0390921682526127108404602083015290f35b634e487b7160e01b81526011600452602490fd5b50346102ba5760203660031901126102ba57602061103d6004355f526007602052600160405f20015490565b604051908152f35b50346102ba57610a3a61105736611944565b91611ac8565b50346102ba5760203660031901126102ba576110776118eb565b61107f612444565b60018060a01b03166001600160601b0360a01b600c541617600c5580f35b50346102ba57806003193601126102ba576020600854604051908152f35b5060403660031901126102ba576004356001600160401b03811161046e576110e7903690600401611917565b906024356001600160401b03811161046a576104529261044361111161111c933690600401611917565b94909261043c611c84565b9033611d0d565b5060603660031901126113a7576111386118eb565b6024356001600160401b0381116113a757611157903690600401611917565b604492919235906001600160401b0382116113a75761118b611180611193933690600401611917565b95909261043c611c84565b933691611a92565b600c546001600160a01b0316156115dc57600b54341061159e5760085490600954821015611564576111c482611cbc565b6008558051611405575b50600c546040516334ff261960e21b815233600482015234602482015260606044820152929060209084906001600160a01b0316815f81611212606482018b6118c7565b03925af192831561139c575f936113d1575b50815f52600e6020528260405f20556040516112416020826119b6565b5f81526001600160a01b038216156113be576001600160a01b0361126584846124cd565b166113ab5782611275923361269c565b600d546001600160a01b03168061134e575b50838080803460018060a01b03600a54165af16112a2611cde565b5015611309577feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f37791604051913483526020830152604082015260806060820152806112f2339460808301906118c7565b0390a260015f516020613cf75f395f51905f525580f35b60405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606490fd5b803b156113a7576040516340c10f1960e01b8152336004820152346024820152905f908290604490829084905af1801561139c5715611287576113949194505f906119b6565b5f925f611287565b6040513d5f823e3d90fd5b5f80fd5b6339e3563760e11b5f525f60045260245ffd5b633250574960e11b5f525f60045260245ffd5b9092506020813d6020116113fd575b816113ed602093836119b6565b810103126113a75751915f611224565b3d91506113e0565b815f52600660205260405f20908051906001600160401b03821161155057819061142f845461197e565b601f8111611500575b50602090601f831160011461149d575f92611492575b50508160011b915f199060031b1c19161790555b7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce76020604051838152a15f6111ce565b015190505f8061144e565b5f8581528281209350601f198516905b8181106114e857509084600195949392106114d0575b505050811b019055611462565b01515f1960f88460031b161c191690555f80806114c3565b929360206001819287860151815501950193016114ad565b909150835f5260205f20601f840160051c81019160208510611546575b90601f859493920160051c01905b8181106115385750611438565b5f815584935060010161152b565b909150819061151d565b634e487b7160e01b5f52604160045260245ffd5b60405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b60405162461bcd60e51b815260206004820152601860248201527f5265636569707420636f6e7472616374206e6f742073657400000000000000006044820152606490fd5b346113a75760403660031901126113a75761163a6118eb565b60243561164681611c50565b331515806116f8575b806116cb575b6116b85781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff1615611655565b506001600160a01b03811633141561164f565b346113a75760203660031901126113a75760043561172881611c50565b505f526004602052602060018060a01b0360405f205416604051908152f35b346113a7575f3660031901126113a7576040515f5f546117668161197e565b80845290600181169081156117ea575060011461178e575b61078083610bfa818503826119b6565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b8082106117d057509091508101602001610bfa61177e565b9192600181602092548385880101520191019092916117b8565b60ff191660208086019190915291151560051b84019091019150610bfa905061177e565b346113a75760203660031901126113a7576004359063ffffffff60e01b82168092036113a75760209163152a902d60e11b8114908115611850575b5015158152f35b637965db0b60e01b81149150811561186a575b5083611849565b632483248360e11b811491508115611884575b5083611863565b6380ac58cd60e01b8114915081156118b6575b81156118a5575b508361187d565b6301ffc9a760e01b1490508361189e565b635b5e139f60e01b81149150611897565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b03821682036113a757565b602435906001600160a01b03821682036113a757565b9181601f840112156113a7578235916001600160401b0383116113a757602083818601950101116113a757565b60609060031901126113a7576004356001600160a01b03811681036113a757906024356001600160a01b03811681036113a7579060443590565b90600182811c921680156119ac575b602083101461199857565b634e487b7160e01b5f52602260045260245ffd5b91607f169161198d565b90601f801991011681019081106001600160401b0382111761155057604052565b9060405191825f8254926119ea8461197e565b8084529360018116908115611a555750600114611a11575b50611a0f925003836119b6565b565b90505f9291925260205f20905f915b818310611a39575050906020611a0f928201015f611a02565b6020919350806001915483858901015201910190918492611a20565b905060209250611a0f94915060ff191682840152151560051b8201015f611a02565b6001600160401b03811161155057601f01601f191660200190565b929192611a9e82611a77565b91611aac60405193846119b6565b8294818452818301116113a7578281602093845f960137010152565b6001600160a01b03909116919082156113be575f828152600260205260409020546001600160a01b031692829033151580611bbb575b5084611b88575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b0316808303611b7057505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f198154019055611b05565b90915080611bff575b15611bd15782905f611afe565b8284611be957637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015611c2e575b80611bc457505f838152600460205260409020546001600160a01b03163314611bc4565b505f84815260056020908152604080832033845290915290205460ff16611c0a565b5f818152600260205260409020546001600160a01b0316908115611c72575090565b637e27328960e01b5f5260045260245ffd5b60025f516020613cf75f395f51905f525414611cad5760025f516020613cf75f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b5f198114611cca5760010190565b634e487b7160e01b5f52601160045260245ffd5b3d15611d08573d90611cef82611a77565b91611cfd60405193846119b6565b82523d5f602084013e565b606090565b600c54919290916001600160a01b0316156115dc57600b54341061159e576008549060095482101561156457611d4282611cbc565b6008558051611ef2575b50600c546040516334ff261960e21b815233600482015234602482015260606044820152929060209084906001600160a01b0316815f81611d90606482018b6118c7565b03925af192831561139c575f93611ebe575b50815f52600e6020528260405f2055604051611dbf6020826119b6565b5f81526001600160a01b038216156113be576001600160a01b03611de384846124cd565b166113ab5782611df3923361269c565b600d546001600160a01b031680611e75575b505f8080803460018060a01b03600a54165af1611e20611cde565b5015611309577feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3779160405191348352602083015260408201526080606082015280611e70339460808301906118c7565b0390a2565b803b156113a7576040516340c10f1960e01b8152336004820152346024820152905f908290604490829084905af1801561139c5715611e05575f611eb8916119b6565b5f611e05565b9092506020813d602011611eea575b81611eda602093836119b6565b810103126113a75751915f611da2565b3d9150611ecd565b815f52600660205260405f20908051906001600160401b038211611550578190611f1c845461197e565b601f8111611fed575b50602090601f8311600114611f8a575f92611f7f575b50508160011b915f199060031b1c19161790555b7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce76020604051838152a15f611d4c565b015190505f80611f3b565b5f8581528281209350601f198516905b818110611fd55750908460019594939210611fbd575b505050811b019055611f4f565b01515f1960f88460031b161c191690555f8080611fb0565b92936020600181928786015181550195019301611f9a565b909150835f5260205f20601f840160051c81019160208510612033575b90601f859493920160051c01905b8181106120255750611f25565b5f8155849350600101612018565b909150819061200a565b600c549193909290915f91906001600160a01b0316156115dc57600b54341061159e57600854926009548410156115645761207784611cbc565b600855156122ec57825f52600f60205260405f20908051906001600160401b0382116115505781906120a9845461197e565b601f811161229c575b50602090601f8311600114612239575f9261222e575b50508160011b915f199060031b1c19161790555b600c546040516334ff261960e21b815233600482015234602482015260606044820152939060209085906001600160a01b0316815f8161211f606482018c6118c7565b03925af193841561139c575f946121fa575b50825f52600e6020528360405f205560405161214e6020826119b6565b5f81526001600160a01b038216156113be576001600160a01b0361217285846124cd565b166113ab5783612182923361269c565b600d546001600160a01b0316806121ae575b508080803460018060a01b03600a54165af1611e20611cde565b803b156113a7576040516340c10f1960e01b8152336004820152346024820152905f908290604490829084905af1801561139c5715612194576121f391505f906119b6565b5f5f612194565b9093506020813d602011612226575b81612216602093836119b6565b810103126113a75751925f612131565b3d9150612209565b015190505f806120c8565b5f8581528281209350601f198516905b818110612284575090846001959493921061226c575b505050811b0190556120dc565b01515f1960f88460031b161c191690555f808061225f565b92936020600181928786015181550195019301612249565b909150835f5260205f20601f840160051c810191602085106122e2575b90601f859493920160051c01905b8181106122d457506120b2565b5f81558493506001016122c7565b90915081906122b9565b80516122f9575b506120dc565b825f52600660205260405f20908051906001600160401b038211611550578190612323845461197e565b601f81116123f4575b50602090601f8311600114612391575f92612386575b50508160011b915f199060031b1c19161790555b7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce76020604051848152a15f6122f3565b015190505f80612342565b5f8581528281209350601f198516905b8181106123dc57509084600195949392106123c4575b505050811b019055612356565b01515f1960f88460031b161c191690555f80806123b7565b929360206001819287860151815501950193016123a1565b909150835f5260205f20601f840160051c8101916020851061243a575b90601f859493920160051c01905b81811061242c575061232c565b5f815584935060010161241f565b9091508190612411565b335f9081527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df602052604090205460ff161561247c57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260076020908152604080832033845290915290205460ff16156124b75750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f828152600260205260409020546001600160a01b0316919082612559575b6001600160a01b031680612541575b815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a490565b805f52600360205260405f20600181540190556124fb565b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f1981540190556124ec565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff16612612575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff1615612612575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b9291813b6126ab575b50505050565b604051630a85bd0160e11b81526001600160a01b0394851660048201525f602482015260448101919091526080606482015292169190602090829081906126f69060848301906118c7565b03815f865af15f9181612765575b506127325750612712611cde565b8051908161272d5782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b0161275357505f8080806126a5565b633250574960e11b5f5260045260245ffd5b9091506020813d6020116127a2575b81612781602093836119b6565b810103126113a757516001600160e01b0319811681036113a757905f612704565b3d9150612774565b823b6127b8575b5050505050565b604051630a85bd0160e11b81526001600160a01b0391821660048201529181166024830152604482019390935260806064820152911691602090829081906128049060848301906118c7565b03815f865af15f9181612842575b506128205750612712611cde565b6001600160e01b03191663757a42ff60e11b0161275357505f808080806127b1565b9091506020813d60201161287f575b8161285e602093836119b6565b810103126113a757516001600160e01b0319811681036113a757905f612812565b3d9150612851565b61289081611c50565b506020906040516128a183826119b6565b5f8152815f52600683526128b760405f206119d7565b81511561293357808491516128f5575050506128d290611c50565b505f6040516128e183826119b6565b526128ef60405191826119b6565b5f815290565b612930935081906040519584879551918291018487015e8401908282015f8152815193849201905e01015f815203601f1981018352826119b6565b90565b9250505090565b600d61016961293092602094805115155f14612b3a5761295a915061389e565b604080517f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f3230878201527f30302f73766722207072657365727665417370656374526174696f3d22784d69918101919091527f6e594d696e206d656574222076696577426f783d223020302033353020333530606082015261111f60f11b60808201527f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e7460828201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060a28201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60c282015261329f60f11b60e28201527f3c726563742077696474683d223130302522206865696768743d22313030252260e482015271103334b6361e91119b199b1b33189110179f60711b6101048201527f3c7465787420783d223530252220793d223530252220636c6173733d226261736101168201527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465610136820152723c3a16b0b731b437b91e9136b4b2323632911f60691b6101568201528151909586928291018484015e81016c1e17ba32bc3a1f1e17b9bb339f60991b8382015203016012198101845201826119b6565b50612b816029612b4a8793613736565b60405193849168427261674e4654202360b81b828401528051918291018484015e81015f838201520301601f1981018352826119b6565b61295a565b908151811015612b97570160200190565b634e487b7160e01b5f52603260045260245ffd5b8051906004821061261257600b821015613077575b6003198201828111611cca57601760f91b6001600160f81b0319612be48385612b86565b511614612d3a575b600583101580612d0b575b612c03575b5050505f90565b612c22906001600160f81b031990612c1b9084612b86565b5116613cb7565b906002198301838111611cca57612c47906001600160f81b031990612c1b9084612b86565b926001198101818111611cca57612c6c906001600160f81b031990612c1b9085612b86565b915f198201918211611cca57612c1b612c8a9260ff60f81b92612b86565b6001600160f81b0319909216607760f81b149283612cf3575b5082612cdb575b5081612cc3575b50612cbe575f8080612bfc565b600190565b6001600160f81b031916606d60f81b1490505f612cb1565b6001600160f81b031916603160f91b1491505f612caa565b6001600160f81b031916606560f81b1492505f612ca3565b506004198301838111611cca57601760f91b906001600160f81b031990612d329085612b86565b511614612bf7565b6002198301838111611cca57612d5e906001600160f81b031990612c1b9085612b86565b6001198401848111611cca57612d82906001600160f81b031990612c1b9086612b86565b905f198501858111611cca57612da6906001600160f81b031990612c1b9087612b86565b906001600160f81b031916606d60f81b81148080613060575b80613049575b612eee57607760f81b821480613032575b8061301b575b612eee57606f60f81b82148080613004575b80612fed575b612f28578180612fd6575b80612fbf575b612f2857606160f81b831480612fa8575b80612f91575b612f28578180612f7a575b80612f63575b612f28578180612f4c575b80612f35575b612f285780612f11575b80612efa575b612eee5780612ed7575b80612ec0575b612eb557606760f81b149182612e9d575b5081612e85575b5015612bec575b505050600190565b6001600160f81b031916603360f91b1490505f612e76565b6001600160f81b031916606960f81b1491505f612e6f565b505050505050600190565b506001600160f81b03198216603b60f91b14612e5e565b506001600160f81b03198316600d60fa1b14612e58565b50505050505050600190565b506001600160f81b03198316603b60f91b14612e4e565b506001600160f81b03198416606760f81b14612e48565b5050505050505050600190565b506001600160f81b03198416603b60f91b14612e3e565b506001600160f81b03198516606f60f81b14612e38565b506001600160f81b03198416600d60fa1b14612e2d565b506001600160f81b03198516600760fc1b14612e27565b506001600160f81b03198416606360f81b14612e1c565b506001600160f81b03198516606160f81b14612e16565b506001600160f81b03198416606160f81b14612e05565b506001600160f81b03198516600d60fa1b14612dff565b506001600160f81b03198416606760f81b14612df4565b506001600160f81b03198516606760f81b14612dee565b506001600160f81b03198316603b60f91b14612ddc565b506001600160f81b03198416606160f81b14612dd6565b506001600160f81b03198316603360f81b14612dc5565b506001600160f81b03198416600760fc1b14612dbf565b8115612b975760208101516001600160f81b031916601960fa1b14806134a4575b8061347f575b8061345a575b80613435575b15612bc057805160051015612b97576025810180516001600160f81b031916606160f81b1480613410575b806133eb575b806133c6575b806133a1575b8061337c575b612e7d57815160051015612b975780516001600160f81b031916603b60f91b1480613357575b80613332575b8061330d575b806132e8575b806132c3575b612e7d57600e83101590816132a0575b508061327b575b80613256575b80613231575b8061320c575b806131e7575b806131c2575b8061319d575b80613178575b15612bc0575050600190565b508051600d1015612b9757602d8101516001600160f81b031916603360f91b1461316c565b508051600c1015612b9757602c8101516001600160f81b031916606960f81b14613166565b508051600b1015612b9757602b8101516001600160f81b031916606760f81b14613160565b508051600a1015612b9757602a8101516001600160f81b031916602f60f81b1461315a565b50805160091015612b975760298101516001600160f81b031916606560f81b14613154565b50805160081015612b975760288101516001600160f81b031916606760f81b1461314e565b50805160071015612b975760278101516001600160f81b031916606160f81b14613148565b50805160061015612b975760268101516001600160f81b031916606d60f81b14613142565b9050815160051015612b9757516001600160f81b031916606960f81b145f61313b565b508151600a1015612b9757602a8201516001600160f81b031916602f60f81b1461312b565b50815160091015612b975760298201516001600160f81b031916606f60f81b14613125565b50815160081015612b975760288201516001600160f81b031916606560f81b1461311f565b50815160071015612b975760278201516001600160f81b031916601960fa1b14613119565b50815160061015612b975760268201516001600160f81b031916606960f81b14613113565b508151600a1015612b9757602a8201516001600160f81b031916602f60f81b146130ed565b50815160091015612b975760298201516001600160f81b031916606f60f81b146130e7565b50815160081015612b975760288201516001600160f81b031916606960f81b146130e1565b50815160071015612b975760278201516001600160f81b031916601960fa1b146130db565b50815160061015612b975760268201516001600160f81b031916607560f81b146130d5565b50805160041015612b975760248101516001600160f81b031916601d60f91b146130aa565b50805160031015612b975760238101516001600160f81b031916606160f81b146130a4565b50805160021015612b975760228101516001600160f81b031916601d60fa1b1461309e565b50805160011015612b975760218101516001600160f81b031916606160f81b14613098565b91908201809211611cca57565b906134e082611a77565b6134ed60405191826119b6565b82815280926134fe601f1991611a77565b0190602036910137565b80515f5f5b8281106136a9575080156136a45761352861352d91836134c9565b6134d6565b915f5f915b838310613540575050505090565b61354a8382612b86565b51928360f81c60228114801561369a575b156135a5575082605c61357a61357360019596611cbc565b9289612b86565b5361359b61358782611cbc565b956001600160f81b0319165f1a9188612b86565b535b019190613532565b6020811015613688576136698495605c6135cb6135c460019798611cbc565b988b612b86565b5360756135da6135c489611cbc565b5360306135e96135c489611cbc565b5360306135f86135c489611cbc565b53604090613608825192836119b6565b601082526f181899199a1a9b1b9c1cb0b131b232b360811b60208301526001600160f81b03199061363c9060fc1c83612b86565b51169661365561364b82611cbc565b985f1a918b612b86565b536001600160f81b031992600f1690612b86565b51169361368261367882611cbc565b955f1a9188612b86565b5361359d565b50826136826135876001949592611cbc565b50605c811461355b565b505090565b90601160f91b6001600160f81b03196136c28487612b86565b5116148015613715575b156136e4576136dc600191611cbc565b915b0161350d565b9060206136f18286612b86565b5160f81c10613703575b6001906136de565b9060058101809111611cca57906136fb565b50601760fa1b6001600160f81b031961372e8487612b86565b5116146136cc565b805f9172184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b82101561387b575b806d04ee2d6d415b85acef8100000000600a921015613860575b662386f26fc1000081101561384c575b6305f5e10081101561383b575b61271081101561382c575b606481101561381e575b1015613813575b600a602160018401936137bd85611a77565b946137cb60405196876119b6565b8086526137da601f1991611a77565b013660208701378401015b5f1901916f181899199a1a9b1b9c1cb0b131b232b360811b8282061a83530480156136a457600a90916137e5565b6001909101906137ab565b6064600291049301926137a4565b6127106004910493019261379a565b6305f5e1006008910493019261378f565b662386f26fc1000060109104930192613782565b6d04ee2d6d415b85acef810000000060209104930192613772565b506040915072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8104613758565b80515f5f5b828110613a7e575080156136a4576135286138be91836134c9565b915f905f5b8381106138d1575050505090565b6001600160f81b03196138e48284612b86565b5116601360f91b810361394e5750600190602661390a61390386611cbc565b9588612b86565b53606161391961390386611cbc565b53606d61392861390386611cbc565b53607061393761390386611cbc565b53603b61394661390386611cbc565b535b016138c3565b600f60fa1b810361399e5750600190602661396b61390386611cbc565b53606c61397a61390386611cbc565b53607461398961390386611cbc565b53603b61399861390386611cbc565b53613948565b601f60f91b81036139ca575060019060266139bb61390386611cbc565b53606761397a61390386611cbc565b601160f91b8103613a14575060019060266139e761390386611cbc565b5360716139f661390386611cbc565b536075613a0561390386611cbc565b53606f61397a61390386611cbc565b602760f81b8103613a6d57506001906026613a3161390386611cbc565b536061613a4061390386611cbc565b536070613a4f61390386611cbc565b53606f613a5e61390386611cbc565b53607361398961390386611cbc565b926001919061399861367882611cbc565b90601360f91b6001600160f81b0319613a978487612b86565b511603613ab45760048101809111611cca57600190915b016138a3565b600f60fa1b6001600160f81b0319613acc8487612b86565b511603613ae75760038101809111611cca5760019091613aae565b601f60f91b6001600160f81b0319613aff8487612b86565b511603613b1a5760038101809111611cca5760019091613aae565b601160f91b6001600160f81b0319613b328487612b86565b511603613b4d5760058101809111611cca5760019091613aae565b90602760f81b6001600160f81b0319613b668387612b86565b511614613b76575b600190613aae565b9060058101809111611cca5790613b6e565b90815115613ca757815160028101809111611cca5760039004600281901b91906001600160fe1b03811603611cca57604051917f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f603f52602083018480518101602081018051915f82525b808910613c6b5750602095969750906003929152510680600114613c5657600214613c49575b50808452830101604052565b603d905f1901535f613c3d565b50603d90815f1982015360011901535f613c3d565b939760036004910198603f8a51818160121c165183538181600c1c16516001840153818160061c16516002840153165160038201530193613c17565b90506040516128ef6020826119b6565b8060f81c604181101580613ceb575b613cce575090565b602091500160ff8111611cca5760f81b6001600160f81b03191690565b50605a811115613cc656fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a26469706673582212208d7c651793872d5d94f03912965899e47636639c618c9af26514f7facddf020c64736f6c634300081c00336d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df"
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
      "bytecode": "0x60806040523461033e57611c416020813803918261001c81610342565b93849283398101031261033e57516001600160a01b038116810361033e576100446040610342565b90600f82526e111bdb985d1a5bdb949958d95a5c1d608a1b602083015261006b6040610342565b600b81526a10949051d49150d152541560aa1b602082015282519091906001600160401b038111610252575f54600181811c91168015610334575b602082101461023457601f81116102d2575b506020601f821160011461027157819293945f92610266575b50508160011b915f199060031b1c1916175f555b8151916001600160401b03831161025257600154600181811c91168015610248575b602082101461023457601f81116101d1575b50602090601f84116001146101695761014e93915f918361015e575b50508160011b915f199060031b1c191617600155610367565b5060405161183090816103f18239f35b015190505f80610135565b90601f1984169160015f52815f20925f5b8181106101b9575091600193918661014e9794106101a1575b505050811b01600155610367565b01515f1960f88460031b161c191690555f8080610193565b9293602060018192878601518155019501930161017a565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f850160051c8101916020861061022a575b601f0160051c01905b81811061021f5750610119565b5f8155600101610212565b9091508190610209565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610107565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100d1565b601f198216905f8052805f20915f5b8181106102ba575095836001959697106102a2575b505050811b015f556100e5565b01515f1960f88460031b161c191690555f8080610295565b9192602060018192868b015181550194019201610280565b5f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f830160051c8101916020841061032a575b601f0160051c01905b81811061031f57506100b8565b5f8155600101610312565b9091508190610309565b90607f16906100a6565b5f80fd5b6040519190601f01601f191682016001600160401b0381118382101761025257604052565b6001600160a01b0381165f9081525f516020611c215f395f51905f52602052604090205460ff166103eb576001600160a01b03165f8181525f516020611c215f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a714610eed5750806306fdde0314610e4b578063081812fc14610e0f578063095ea7b314610d255780630f7ee1ec14610cbe57806323b872dd14610ca7578063248a9ca314610c745780632f2ff15d14610c3657806336568abe14610bf257806342842e0e14610bc35780636352211e14610b9357806370a0823114610b4257806391d1485414610af957806395d89b4114610a1b578063a217fddf14610a01578063a22cb46514610961578063b63e6ac314610896578063b88d4fde14610828578063c87b56dd146107cf578063cf456ae71461075c578063d3fc9864146101f0578063d5391393146101c8578063d547741f146101805763e985e9c514610126575f80fd5b3461017d57604036600319011261017d576040610141610f96565b9161014a610fac565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b80fd5b503461017d57604036600319011261017d576101c46004356101a0610fac565b906101bf6101ba825f526006602052600160405f20015490565b611411565b611600565b5080f35b503461017d578060031936011261017d5760206040515f5160206117db5f395f51905f528152f35b503461017d57606036600319011261017d5761020a610f96565b60443560243567ffffffffffffffff821161075857366023830112156107585781600401359367ffffffffffffffff851161017d57366024868501011161017d57335f9081525f5160206117bb5f395f51905f52602052604090205460ff161561073457600754925f1984146107205760018401600755600360405161028f81610ffa565b6001600160a01b038716808252602082018681524260408401908152919990946102bd913691602401611171565b60608301908152878652600860205260408620925183546001600160a01b0319166001600160a01b03919091161783559351600183015551600282015591518051919092019167ffffffffffffffff821161070c57819061031e8454610fc2565b601f81116106bc575b50602090601f831160011461065a57859261064f575b50508160011b915f199060031b1c19161790555b60209360405191610362868461102a565b808352861561063b575f8581526002875260409020546001600160a01b0316151580610633575b6105c8575f8581526002875260409020546001600160a01b03168015159081610597575b885f526003885260405f2060018154019055865f526002885260405f20896bffffffffffffffffffffffff60a01b8254161790558689827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a45061058357503b610449575b50817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea5848693604051908152a3604051908152f35b836104829160405180938192630a85bd0160e11b83523360048401525f6024840152876044840152608060648401526084830190610f72565b03815f895af15f918161053f575b506104e7575050503d5f146104df573d906104aa82611155565b916104b8604051938461102a565b82523d5f8284013e5b815191826104dc5783633250574960e11b5f5260045260245ffd5b01fd5b6060906104c1565b929391926001600160e01b03191663757a42ff60e11b0161052c577f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea593929193610414565b50633250574960e11b5f5260045260245ffd5b9091508481813d831161057c575b610557818361102a565b8101031261057857516001600160e01b03198116810361057857905f610490565b5f80fd5b503d61054d565b6339e3563760e11b81526004819052602490fd5b5f8781526004602052604080822080546001600160a01b031916905582825260038a52902080545f190190556103ad565b60405162461bcd60e51b815260048101879052603d60248201527f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f60448201527f756e6420616e642063616e6e6f74206265207472616e736665727265640000006064820152608490fd5b506001610389565b633250574960e11b81526004819052602490fd5b015190505f8061033d565b8486528186209250601f198416865b8181106106a4575090846001959493921061068c575b505050811b019055610351565b01515f1960f88460031b161c191690555f808061067f565b92936020600181928786015181550195019301610669565b90915083855260208520601f840160051c81019160208510610702575b90601f859493920160051c01905b8181106106f45750610327565b8681558493506001016106e7565b90915081906106d9565b634e487b7160e01b84526041600452602484fd5b634e487b7160e01b82526011600452602482fd5b63e2517d3f60e01b5f52336004525f5160206117db5f395f51905f5260245260445ffd5b8380fd5b503461017d5761076b36611126565b335f9081527f54cdd369e4e8a8515e52ca72ec816c2101831ad1f18bf44102ed171459c9b4f8602052604090205460ff16156107b857156107af576101c49061144b565b6101c49061156f565b63e2517d3f60e01b5f52336004525f60245260445ffd5b34610578576020366003190112610578576107eb6004356113dd565b505f6040516107fb60208261102a565b5261082460405161080d60208261102a565b5f8152604051918291602083526020830190610f72565b0390f35b3461057857608036600319011261057857610841610f96565b610849610fac565b906044356064359267ffffffffffffffff8411610578573660238501121561057857610882610894943690602481600401359101611171565b9261088e8383836111a7565b33611684565b005b34610578576020366003190112610578576004356060806040516108b981610ffa565b5f81525f60208201525f604082015201526108d3816113dd565b505f52600860205260405f206040516108eb81610ffa565b81546001600160a01b03168152600182015460208201908152600283015460408301908152909261082491906109239060030161104c565b90606084019182526040519485946020865260018060a01b0390511660208601525160408501525160608401525160808084015260a0830190610f72565b346105785761096f36611126565b9033156109ee576001600160a01b03169081156109db57335f52600560205260405f20825f5260205260405f209015159060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b50630b61174360e31b5f5260045260245ffd5b63a9fbf51f60e01b5f525f60045260245ffd5b34610578575f3660031901126105785760206040515f8152f35b34610578575f366003190112610578576040515f600154610a3b81610fc2565b8084529060018116908115610ad55750600114610a77575b61082483610a638185038261102a565b604051918291602083526020830190610f72565b60015f9081527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b808210610abb57509091508101602001610a63610a53565b919260018160209254838588010152019101909291610aa3565b60ff191660208086019190915291151560051b84019091019150610a639050610a53565b3461057857604036600319011261057857610b12610fac565b6004355f52600660205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610578576020366003190112610578576001600160a01b03610b63610f96565b168015610b80575f526003602052602060405f2054604051908152f35b6322718ad960e21b5f525f60045260245ffd5b34610578576020366003190112610578576020610bb16004356113dd565b6040516001600160a01b039091168152f35b3461057857610894610bd4366110ec565b9060405192610be460208561102a565b5f845261088e8383836111a7565b3461057857604036600319011261057857610c0b610fac565b336001600160a01b03821603610c275761089490600435611600565b63334bd91960e11b5f5260045ffd5b3461057857604036600319011261057857610894600435610c55610fac565b90610c6f6101ba825f526006602052600160405f20015490565b6114e3565b34610578576020366003190112610578576020610c9f6004355f526006602052600160405f20015490565b604051908152f35b3461057857610894610cb8366110ec565b916111a7565b34610578576020366003190112610578576004355f52600860205260405f2060018060a01b03815416610824600183015492610d0160036002830154920161104c565b90604051948594855260208501526040840152608060608401526080830190610f72565b3461057857604036600319011261057857610d3e610f96565b602435610d4a816113dd565b33151580610dfc575b80610dcf575b610dbc5781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff1615610d59565b506001600160a01b038116331415610d53565b3461057857602036600319011261057857600435610e2c816113dd565b505f526004602052602060018060a01b0360405f205416604051908152f35b34610578575f366003190112610578576040515f5f54610e6a81610fc2565b8084529060018116908115610ad55750600114610e915761082483610a638185038261102a565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b808210610ed357509091508101602001610a63610a53565b919260018160209254838588010152019101909291610ebb565b34610578576020366003190112610578576004359063ffffffff60e01b821680920361057857602091637965db0b60e01b8114908115610f2f575b5015158152f35b6380ac58cd60e01b811491508115610f61575b8115610f50575b5083610f28565b6301ffc9a760e01b14905083610f49565b635b5e139f60e01b81149150610f42565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b038216820361057857565b602435906001600160a01b038216820361057857565b90600182811c92168015610ff0575b6020831014610fdc57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610fd1565b6080810190811067ffffffffffffffff82111761101657604052565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff82111761101657604052565b9060405191825f82549261105f84610fc2565b80845293600181169081156110ca5750600114611086575b506110849250038361102a565b565b90505f9291925260205f20905f915b8183106110ae575050906020611084928201015f611077565b6020919350806001915483858901015201910190918492611095565b90506020925061108494915060ff191682840152151560051b8201015f611077565b6060906003190112610578576004356001600160a01b038116810361057857906024356001600160a01b0381168103610578579060443590565b6040906003190112610578576004356001600160a01b0381168103610578579060243580151581036105785790565b67ffffffffffffffff811161101657601f01601f191660200190565b92919261117d82611155565b9161118b604051938461102a565b829481845281830111610578578281602093845f960137010152565b6001600160a01b03909116919082156113ca575f828152600260205260409020546001600160a01b03161515806113c2575b611357575f828152600260205260409020546001600160a01b0316928290331515806112c2575b508461128f575b805f52600360205260405f2060018154019055815f52600260205260405f20816bffffffffffffffffffffffff60a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b031680830361127757505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f198154019055611207565b90915080611306575b156112d85782905f611200565b82846112f057637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b503384148015611335575b806112cb57505f838152600460205260409020546001600160a01b031633146112cb565b505f84815260056020908152604080832033845290915290205460ff16611311565b60405162461bcd60e51b815260206004820152603d60248201527f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f60448201527f756e6420616e642063616e6e6f74206265207472616e736665727265640000006064820152608490fd5b5060016111d9565b633250574960e11b5f525f60045260245ffd5b5f818152600260205260409020546001600160a01b03169081156113ff575090565b637e27328960e01b5f5260045260245ffd5b5f81815260066020908152604080832033845290915290205460ff16156114355750565b63e2517d3f60e01b5f523360045260245260445ffd5b6001600160a01b0381165f9081525f5160206117bb5f395f51905f52602052604090205460ff166114de576001600160a01b03165f8181525f5160206117bb5f395f51905f5260205260408120805460ff191660011790553391905f5160206117db5f395f51905f52907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b505f90565b5f8181526006602090815260408083206001600160a01b038616845290915290205460ff16611569575f8181526006602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b6001600160a01b0381165f9081525f5160206117bb5f395f51905f52602052604090205460ff16156114de576001600160a01b03165f8181525f5160206117bb5f395f51905f5260205260408120805460ff191690553391905f5160206117db5f395f51905f52907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b5f8181526006602090815260408083206001600160a01b038616845290915290205460ff1615611569575f8181526006602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b823b611692575b5050505050565b604051630a85bd0160e11b81526001600160a01b0391821660048201529181166024830152604482019390935260806064820152911691602090829081906116de906084830190610f72565b03815f865af15f9181611775575b5061174157503d1561173a573d61170281611155565b90611710604051928361102a565b81523d5f602083013e5b805190816117355782633250574960e11b5f5260045260245ffd5b602001fd5b606061171a565b6001600160e01b03191663757a42ff60e11b0161176357505f8080808061168b565b633250574960e11b5f5260045260245ffd5b9091506020813d6020116117b2575b816117916020938361102a565b8101031261057857516001600160e01b03198116810361057857905f6116ec565b3d915061178456fe3195c024b2ddd6d9b8f6c836aa52f67fe69376c8903d009b80229b3ce4425f519f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a26469706673582212204e78da82c11186da16d9413038cb876100de2e11bb5bcaf476ab490340dd938a64736f6c634300081c003354cdd369e4e8a8515e52ca72ec816c2101831ad1f18bf44102ed171459c9b4f8"
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
      "bytecode": "0x608034609357601f611fa838819003918201601f19168301916001600160401b03831184841017609757808492602094604052833981010312609357516001600160a01b0381169081900360935760017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00555f80546001600160a01b031916919091179055604051611efc90816100ac8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a71461114357508063025f75ac1461104b5780630412619614611007578063150b7a0214610e605780632ff1d0f914610e1c578063358d48d914610d7057806335f81b8714610acd578063380ff99914610a845780636f39becd14610a385780637b10399914610a115780637b606fdc1461092357806381bd34d2146108da578063bc197c811461068e578063c10e5153146105d2578063c2fe51851461038d578063d6bd07ee14610352578063d742385814610332578063f07a380e146102f05763f23a6e61146100ef575f80fd5b346102ed5760a03660031901126102ed576101086111dc565b6101106111f2565b906044359160643591608435906001600160401b0382116102eb5760249261013f61014d93369060040161126e565b91610148611546565b61189c565b3386526002602052604086208587526020526040862060018060a01b0383165f5260205260405f206101808582546113cd565b905580156102e45761019290426113cd565b3386526004602052604086208587526020526040862060018060a01b0383165f5260205260405f205481116102b5575b5084546040516390229af760e01b815230600482015292869184919082906001600160a01b03165afa80156102aa57604080917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa35948891610288575b5001519533815260046020528181208682526020522060018060a01b0382165f5260205260405f20549061026260405192839260018060a01b031697339684611524565b0390a460015f516020611ea75f395f51905f525560405163f23a6e6160e01b8152602090f35b6102a491503d808a833e61029c818361121e565b810190611441565b5f61021e565b6040513d87823e3d90fd5b3386526004602052604086208587526020526040862060018060a01b0383165f5260205260405f20555f6101c2565b5084610192565b855b80fd5b50346102ed5760403660031901126102ed5761031e61030d6111dc565b610315611546565b60243590611c05565b60015f516020611ea75f395f51905f525580f35b50346102ed5761031e610344366112b4565b9161034d611546565b611cfd565b50346102ed5760803660031901126102ed5761031e61036f6111dc565b6103776111c6565b90610380611546565b6044359060243590611666565b50346102ed5760803660031901126102ed576103a76111dc565b6024356103b2611208565b9183606435916103c0611546565b60018060a01b0316918282526001602052604082208483526020526103f260018060a01b036040842054163314611bc9565b815460405163b9209e3360e01b81526001600160a01b039687166004820181905296909160209183916024918391165afa80156105c7578390610588575b61043a91506115c1565b82825260036020526040822084835260205261045c604083205442101561160d565b828252600160209081526040808420868552909152822080546001600160a01b0319169055801561056a5760408051336020820152908101919091526104af81606081015b03601f19810183528261121e565b823b1561056657816104ef9160405180938192635c46a7ef60e11b83523060048401528960248401528860448401526080606484015260848301906114ec565b038183875af1801561055b57610542575b50506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a460015f516020611ea75f395f51905f525580f35b8161054c9161121e565b61055757835f610500565b8380fd5b6040513d84823e3d90fd5b5080fd5b506040513360208201526020815261058360408261121e565b6104af565b506020813d6020116105bf575b816105a26020938361121e565b810103126105bb576105b661043a916113ee565b610430565b8280fd5b3d9150610595565b6040513d85823e3d90fd5b50346102ed5760603660031901126102ed576004356001600160401b03811161056657610603903690600401611196565b6024356001600160401b03811161055757610622903690600401611196565b61062a611208565b92610633611546565b61063e828214611355565b855b81811061065c578660015f516020611ea75f395f51905f525580f35b8061068886610676610671600195878c611395565b6113b9565b61068184888a611395565b3590611cfd565b01610640565b50346102ed5760a03660031901126102ed576106a86111dc565b906106b16111f2565b906044356001600160401b038111610566576106d19036906004016112ee565b926064356001600160401b0381116105bb576106f19036906004016112ee565b926084356001600160401b038111610557579061013f6107169392369060040161126e565b90929080156108d35761072990426113cd565b82546040516390229af760e01b8152306004820152908490829060249082906001600160a01b03165afa9081156108c8579060409185916108ae575b50015192805b865181101561088b578061078160019289611510565b5161078c8287611510565b519033855260026020526040852081865260205260408520848060a01b038a165f5260205260405f206107c08382546113cd565b905533855260046020526040852081865260205260408520848060a01b038a165f5260205260405f2054861161085d575b33855260046020526040852081865260205260408520848060a01b038a165f5260205260405f2054917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa35604051806108548d898060a01b0316968d339684611524565b0390a40161076b565b33855260046020526040852081865260205260408520848060a01b038a165f526020528560405f20556107f1565b60015f516020611ea75f395f51905f525560405163bc197c8160e01b8152602090f35b6108c291503d8087833e61029c818361121e565b5f610765565b6040513d86823e3d90fd5b5081610729565b50346102ed5760406108eb366112b4565b939160018060a01b031682526002602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346102ed5760603660031901126102ed576004356001600160401b03811161056657610954903690600401611196565b6024356001600160401b03811161055757610973903690600401611196565b6044929192356001600160401b0381116102eb57610995903690600401611196565b9190926109a0611546565b81811480610a08575b6109b290611355565b865b8181106109d0578760015f516020611ea75f395f51905f525580f35b80610a026109e4610671600194868c611395565b6109ef83878b611395565b356109fb84898b611395565b3591611a58565b016109b4565b508183146109a9565b50346102ed57806003193601126102ed57546040516001600160a01b039091168152602090f35b50346102ed5760403660031901126102ed576020906001600160a01b03610a5d6111dc565b168152600182526040812060243582528252604060018060a01b0391205416604051908152f35b50346102ed576040610a95366112b4565b939160018060a01b031682526004602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b5034610ced5760a0366003190112610ced57610ae76111dc565b60243560443591610af66111c6565b60843591610b02611546565b6001600160a01b03165f8181526002602090815260408083208784528252808320338452909152902054909290610b3b9086111561157e565b5f5460405163b9209e3360e01b81526001600160a01b039384166004820181905293909160209183916024918391165afa8015610ce2575f90610d35575b610b8391506115c1565b5f8381526004602090815260408083208784528252808320338452909152902054610bb09042101561160d565b825f52600260205260405f20845f5260205260405f2060018060a01b0333165f5260205260405f20610be3868254611659565b90555f838152600260209081526040808320878452825280832033845290915290205415610d0f575b8015610cf1576040805133602082015290810191909152610c3081606081016104a1565b823b15610ced575f610c769160405180938192637921219560e11b835230600484015286602484015288604484015289606484015260a0608484015260a48301906114ec565b038183875af18015610ce257610ccd575b5060405193845260208401527fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd160403394a460015f516020611ea75f395f51905f525580f35b610cda9195505f9061121e565b5f935f610c87565b6040513d5f823e3d90fd5b5f80fd5b5060405133602082015260208152610d0a60408261121e565b610c30565b5f8381526004602090815260408083208784528252808320338452909152812055610c0c565b506020813d602011610d68575b81610d4f6020938361121e565b81010312610ced57610d63610b83916113ee565b610b79565b3d9150610d42565b34610ced576040366003190112610ced576004356001600160401b038111610ced57610da0903690600401611196565b906024356001600160401b038111610ced57610dc0903690600401611196565b90610dc9611546565b610dd4828514611355565b5f5b848110610df05760015f516020611ea75f395f51905f5255005b80610e16610e046106716001948989611395565b610e0f838787611395565b3590611c05565b01610dd6565b34610ced576060366003190112610ced57610e4d610e386111dc565b610e40611546565b6044359060243590611a58565b60015f516020611ea75f395f51905f5255005b34610ced576080366003190112610ced57610e796111dc565b610e816111f2565b60443591606435916001600160401b038311610ced5761013f610ea893369060040161126e565b335f908152600160209081526040808320868452909152902080546001600160a01b0319166001600160a01b039093169283179055909190801561100057610ef090426113cd565b335f52600360205260405f20825f5260205260405f20548111610fe3575b505f80546040516390229af760e01b81523060048201529190829060249082906001600160a01b03165afa8015610ce2576040915f91610fc9575b500151335f52600360205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad360405f205491610f9a604051916040835260408301906114ec565b9260208201528033930390a460015f516020611ea75f395f51905f5255604051630a85bd0160e11b8152602090f35b610fdd91503d805f833e61029c818361121e565b84610f49565b335f52600360205260405f20825f5260205260405f205582610f0e565b505f610ef0565b34610ced576040366003190112610ced576001600160a01b036110286111dc565b165f52600360205260405f206024355f52602052602060405f2054604051908152f35b34610ced576080366003190112610ced576004356001600160401b038111610ced5761107b903690600401611196565b906024356001600160401b038111610ced5761109b903690600401611196565b9190926044356001600160401b038111610ced576110bd903690600401611196565b94906110c76111c6565b926110d0611546565b8581148061113a575b6110e290611355565b5f5b8181106110fe5760015f516020611ea75f395f51905f5255005b8061113486898b61112d856111258161111e8f60019b8d61067192611395565b958d611395565b35928a611395565b3591611666565b016110e4565b508587146110d9565b34610ced576020366003190112610ced576004359063ffffffff60e01b8216809203610ced57602091630271189760e51b8114908115611185575b5015158152f35b6301ffc9a760e01b1490508361117e565b9181601f84011215610ced578235916001600160401b038311610ced576020808501948460051b010111610ced57565b606435906001600160a01b0382168203610ced57565b600435906001600160a01b0382168203610ced57565b602435906001600160a01b0382168203610ced57565b604435906001600160a01b0382168203610ced57565b90601f801991011681019081106001600160401b0382111761123f57604052565b634e487b7160e01b5f52604160045260245ffd5b6001600160401b03811161123f57601f01601f191660200190565b81601f82011215610ced5780359061128582611253565b92611293604051948561121e565b82845260208383010111610ced57815f926020809301838601378301015290565b6060906003190112610ced576004356001600160a01b0381168103610ced5790602435906044356001600160a01b0381168103610ced5790565b9080601f83011215610ced578135916001600160401b03831161123f578260051b9060405193611321602084018661121e565b8452602080850192820101928311610ced57602001905b8282106113455750505090565b8135815260209182019101611338565b1561135c57565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156113a55760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b0381168103610ced5790565b919082018092116113da57565b634e487b7160e01b5f52601160045260245ffd5b51908115158203610ced57565b81601f82011215610ced5780519061141282611253565b92611420604051948561121e565b82845260208383010111610ced57815f9260208093018386015e8301015290565b602081830312610ced578051906001600160401b038211610ced5701608081830312610ced5760405191608083018381106001600160401b0382111761123f5760405261148d826113ee565b8352602082015160ff81168103610ced57602084015260408201516001600160401b038111610ced57816114c29184016113fb565b604084015260608201516001600160401b038111610ced576114e492016113fb565b606082015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b80518210156113a55760209160051b010190565b9392916115419060409286526060602087015260608601906114ec565b930152565b60025f516020611ea75f395f51905f52541461156f5760025f516020611ea75f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b1561158557565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b156115c857565b60405162461bcd60e51b815260206004820152601860248201527f44657374696e6174696f6e206e6f7420766572696669656400000000000000006044820152606490fd5b1561161457565b60405162461bcd60e51b815260206004820152601a60248201527f45786869626974696f6e206e6f742079657420657870697265640000000000006044820152606490fd5b919082039182116113da57565b6001600160a01b03165f8181526002602090815260408083208584528252808320338452909152902054929391929091906116a39085111561157e565b5f5460405163b9209e3360e01b81526001600160a01b039283166004820181905292909160209183916024918391165afa8015610ce2575f9061184d575b6116eb91506115c1565b5f82815260046020908152604080832086845282528083203384529091529020546117189042101561160d565b815f52600260205260405f20835f5260205260405f2060018060a01b0333165f5260205260405f2061174b858254611659565b90555f828152600260209081526040808320868452825280832033845290915290205415611827575b6040513360208201526020815261178c60408261121e565b823b15610ced575f6117d29160405180938192637921219560e11b835230600484015286602484015288604484015289606484015260a0608484015260a48301906114ec565b038183875af18015610ce257611817575b5060405193845260208401527fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd160403394a4565b5f6118219161121e565b5f6117e3565b5f8281526004602090815260408083208684528252808320338452909152812055611774565b506020813d602011611880575b816118676020938361121e565b81010312610ced5761187b6116eb916113ee565b6116e1565b3d915061185a565b51906001600160a01b0382168203610ced57565b6001600160a01b038216929183611a5157505b5f928251602081145f1461197a57505f5460405163b9209e3360e01b81526004810192909252602090829060249082906001600160a01b03165afa908115610ce2575f91611940575b50156119255750602081805181010312610ced576001600160a01b039061192190602001611888565b1691565b92915060208151918180820193849201010312610ced575190565b90506020813d602011611972575b8161195b6020938361121e565b81010312610ced5761196c906113ee565b5f6118f8565b3d915061194e565b91949291604014611989575050565b5f5460405163b9209e3360e01b8152600481019290925292949193509091602090829060249082906001600160a01b03165afa908115610ce2575f91611a17575b50156119fd5750604081805181010312610ced5760406119ec60208301611888565b9101516001600160a01b0390911691565b919060208151918180820193849201010312610ced575190565b90506020813d602011611a49575b81611a326020938361121e565b81010312610ced57611a43906113ee565b5f6119ca565b3d9150611a25565b90506118af565b6001600160a01b03165f8181526002602090815260408083208584528252808320338452909152902054611a8e9084111561157e565b5f8181526004602090815260408083208584528252808320338452909152902054611abb9042101561160d565b805f52600260205260405f20825f5260205260405f2060018060a01b0333165f5260205260405f20611aee848254611659565b90555f818152600260209081526040808320858452825280832033845290915290205415611ba3575b803b15610ced57604051637921219560e11b815230600482015233602482015282604482015283606482015260a060848201525f60a48201525f8160c48183865af18015610ce257611b93575b506040519283527fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a4565b5f611b9d9161121e565b5f611b64565b5f8181526004602090815260408083208584528252808320338452909152812055611b17565b15611bd057565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b6001600160a01b039081165f818152600160209081526040808320868452909152812054909392611c3891163314611bc9565b805f52600360205260405f20825f52602052611c5a60405f205442101561160d565b805f52600160205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055803b15610ced57604051632142170760e11b8152306004820152336024820152604481018390525f8160648183865af18015610ce257611ce8575b507f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06339380a4565b611cf59193505f9061121e565b5f915f611cc0565b60018060a01b0316805f52600160205260405f20825f52602052611d2e60018060a01b0360405f2054163314611bc9565b5f5460405163b9209e3360e01b81526001600160a01b039485166004820181905294909160209183916024918391165afa8015610ce2575f90611e6b575b611d7691506115c1565b805f52600360205260405f20825f52602052611d9860405f205442101561160d565b805f52600160205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b815416905560405133602082015260208152611ddb60408261121e565b813b15610ced575f611e1b9160405180938192635c46a7ef60e11b83523060048401528860248401528760448401526080606484015260848301906114ec565b038183865af18015610ce257611e5b575b506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a4565b5f611e659161121e565b5f611e2c565b506020813d602011611e9e575b81611e856020938361121e565b81010312610ced57611e99611d76916113ee565b611d6c565b3d9150611e7856fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a26469706673582212202424c73ac8b6638fcaf540be03e2ab9ff1eb683620990ef4554f79d304df464764736f6c634300081c0033"
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
      "bytecode": "0x608034608557601f6104e338819003918201601f19168301916001600160401b038311848410176089578084926040948552833981010312608557604b6020604583609d565b9201609d565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560405161043290816100b18239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b038216820360855756fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146102a2575080631afed875146100a2578063abc8c7af1461007b5763d56d229d0361000f57346100785780600319360112610078576001546040516001600160a01b039091168152602090f35b80fd5b5034610078578060031936011261007857546040516001600160a01b039091168152602090f35b5034610078576040366003190112610078578054604051633013ce2960e01b815282916024359190602090829060049082906001600160a01b03165afa90811561022b57839161025c575b506040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03919091169060208160648187865af1801561025157610173926020928592610236575b50855460405163095ea7b360e01b81526001600160a01b039091166004820152602481019290925290928391908290879082906044820190565b03925af1801561022b576101fe575b5081546001546001600160a01b0391821692911690823b156101f95760848492836040519586948593636c4c557960e11b8552600485015260043560248501526001604485015260648401525af180156101ee576101dd5750f35b816101e7916103ae565b6100785780f35b6040513d84823e3d90fd5b505050fd5b61021f9060203d602011610224575b61021781836103ae565b8101906103e4565b610182565b503d61020d565b6040513d85823e3d90fd5b61024c90843d86116102245761021781836103ae565b610139565b6040513d86823e3d90fd5b90506020813d60201161029a575b81610277602093836103ae565b8101031261029657516001600160a01b0381168103610296575f6100ed565b5050fd5b3d915061026a565b3461037e57608036600319011261037e576102bb610382565b506102c4610398565b5060643567ffffffffffffffff811161037e573660238201121561037e57806004013567ffffffffffffffff811161037e573691016024011161037e575f546001546001600160a01b039182169116813b1561037e5763016295ab60e21b83526001600160a01b031660048301526044803560248401525f91839190829084905af1801561037357610363575b604051630a85bd0160e11b8152602090f35b5f61036d916103ae565b5f610351565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b038216820361037e57565b602435906001600160a01b038216820361037e57565b90601f8019910116810190811067ffffffffffffffff8211176103d057604052565b634e487b7160e01b5f52604160045260245ffd5b9081602091031261037e5751801515810361037e579056fea264697066735822122056afe029237cf8ee46a2597e36d8cae106d39757dd05155e528d30806a56b8f264736f6c634300081c0033"
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
              "indexed": false,
              "internalType": "uint256",
              "name": "newMinPrice",
              "type": "uint256"
            }
          ],
          "name": "MinOfferPriceUpdated",
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
          "inputs": [],
          "name": "minOfferPrice",
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
              "name": "_minPrice",
              "type": "uint256"
            }
          ],
          "name": "setMinOfferPrice",
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
      "bytecode": "0x60a0346100fc57601f611e7938819003918201601f19168301916001600160401b038311848410176101005780849260409485528339810103126100fc5780610056602061004f6100a494610114565b9201610114565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556001600160a01b03908116608052600380546001600160a01b031916918316919091179055610128565b50604051611ca790816101b28239608051818181610261015281816105c901528181610856015281816108ee01528181610c3a01528181610f5401528181610fc6015281816110040152818161145b01526115b40152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036100fc57565b6001600160a01b0381165f9081525f516020611e595f395f51905f52602052604090205460ff166101ac576001600160a01b03165f8181525f516020611e595f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a71461165657508063058a56ac146114f9578063248a9ca3146114c75780632f2ff15d1461148a5780633013ce291461144657806335659fb81461142957806336568abe146113e35780633bbb280614610cfa5780634690484014610cd15780635536372414610b00578063787dce3d14610a6b5780637c3ae2be14610a4d57806391d1485414610a04578063a217fddf146109e8578063c7fff719146107d6578063cddc1bc114610498578063d3f494cc14610438578063d547741f146103f1578063d898aaf2146101f6578063e74b981b146101555763ef71f54114610105575f80fd5b34610152576020366003190112610152577f10193dbcebb4fb14296dde54dc81a0ad8dfabf0b1a2b0f441a138414645a33506020600435610144611a59565b80600455604051908152a180f35b80fd5b50346101525760203660031901126101525761016f6116a9565b610177611a59565b6001600160a01b031680156101bf57600380546001600160a01b031916821790557f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc28280a280f35b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b50346101525761020536611740565b9261020e6119a0565b83156103a15761022260045485101561195e565b811561035c576001600160a01b03168085526001602090815260408087208588528252808720335f9081529252902054909190610320576102858430337f0000000000000000000000000000000000000000000000000000000000000000611be8565b6040516102918161176e565b8481526002602082018381526040830190428252858952600160205260408920878a526020526040892060018060a01b0333165f5260205260405f20935184555160018401555191015560405193845260208401527f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf760403394a460015f516020611c525f395f51905f525580f35b60405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606490fd5b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b60405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608490fd5b5034610152576040366003190112610152576104346004356104116116bf565b9061042f61042a825f525f602052600160405f20015490565b611aa8565b611b68565b5080f35b5034610152576040610449366116d5565b939160018060a01b031682526001602052828220908252602052209060018060a01b03165f52602052606060405f20805490600260018201549101549060405192835260208301526040820152f35b5034610152576104a7366116d5565b916104b06119a0565b60018060a01b03168084526001602052604084208285526020526040842060018060a01b0384165f5260205260405f20604051906104ed8261176e565b61051281548084526002600184015493602086019485520154604085015215156117c0565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa9081156107415787916107b7575b501561068957506040516331a9108f60e11b81526004810184905290602082602481865afa91821561067e578692610639575b506105ed9161058f906001600160a01b031633146118cd565b8286526001602052604086208487526020526040862060018060a01b0386165f526020525f600260408220828155826001820155015551847f00000000000000000000000000000000000000000000000000000000000000006119d8565b6040513381526001600160a01b03909316927f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd3090602090a460015f516020611c525f395f51905f525580f35b91506020823d602011610676575b816106546020938361179e565b810103126106725761058f61066b6105ed936118b9565b9250610576565b8580fd5b3d9150610647565b6040513d88823e3d90fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152909190602081602481875afa908115610741578791610788575b501561074c57604051627eeac760e11b815233600482015260248101859052602081604481875afa908115610741578791610709575b50610704906105ed9351111561181c565b61058f565b90506020813d602011610739575b816107246020938361179e565b8101031261073557516105ed6106f3565b5f80fd5b3d9150610717565b6040513d89823e3d90fd5b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606490fd5b6107aa915060203d6020116107b0575b6107a2818361179e565b810190611804565b5f6106bd565b503d610798565b6107d0915060203d6020116107b0576107a2818361179e565b5f610543565b5034610152576107e536611740565b926107ee6119a0565b6001600160a01b03168085526001602090815260408087208588528252808720335f90815292529020805491929180156109ac5785156109685761083660045487101561195e565b82156109195785818111156108ce5761087a9161085291611919565b30337f0000000000000000000000000000000000000000000000000000000000000000611be8565b84815581600182015560024291015560405193845260208401527ffe240e6b60fba78dcf5eae78fca1a9b6ceaf51429c5036812d6b4f2f0a2dfada60403394a460015f516020611c525f395f51905f525580f35b908082106108de575b505061087a565b610912916108eb91611919565b337f00000000000000000000000000000000000000000000000000000000000000006119d8565b845f6108d7565b60405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4e6577207072696365206d7573742062652067726561746572207468616e20306044820152fd5b60405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606490fd5b5034610152578060031936011261015257602090604051908152f35b5034610152576040366003190112610152576040610a206116bf565b91600435815280602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346101525780600319360112610152576020600454604051908152f35b503461015257602036600319011261015257600435610a88611a59565b6103e88111610ac3576020817fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de4092600255604051908152a180f35b60405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b6044820152606490fd5b50346101525760403660031901126101525760043567ffffffffffffffff8111610ccd57610b3290369060040161170f565b60243567ffffffffffffffff8111610cc957610b5290369060040161170f565b9290610b5c6119a0565b838303610c90579091339190855b818110610b86578660015f516020611c525f395f51905f525580f35b610b9181838761193a565b356001600160a01b0381169190829003610c8c57600191610bb382898761193a565b35818a528360205260408a20818b5260205260408a20875f5260205260405f2060405190610be08261176e565b600281549182845287810154602085015201546040830152610c06575b50505001610b6a565b610c5e90838c528560205260408c20838d5260205260408c20895f526020525f6002604082208281558289820155015551337f00000000000000000000000000000000000000000000000000000000000000006119d8565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d08b80a45f8080610bfd565b8780fd5b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b8380fd5b5080fd5b50346101525780600319360112610152576003546040516001600160a01b039091168152602090f35b503461073557610d09366116d5565b91610d126119a0565b60018060a01b0316805f52600160205260405f20825f5260205260405f2060018060a01b0384165f5260205260405f209260405190610d508261176e565b610d7585548084526002600188015497602086019889520154604085015215156117c0565b825f52600160205260405f20845f5260205260405f2060018060a01b0382165f526020525f60026040822082815582600182015501556040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa908115611347575f916113c4575b50156112255760018551036111e05785906040516331a9108f60e11b8152856004820152602081602481885afa801561117b5783906111a5575b610e2b91506001600160a01b031633146118cd565b60405163e985e9c560e01b8152336004820152306024820152602081604481885afa90811561117b578391611186575b5080156110ff575b610e6c9061185f565b833b15610ccd57604051632142170760e11b81523360048201526001600160a01b03909116602482015260448101859052818160648183885af180156110f4576110db575b50505b8051600254908181029181830414901517156110c757612710900485869083516040519063152a902d60e11b82528760048301526024820152604081604481895afa808a928b92611081575b50611067575b5050808301808411611053579083610f789493928651809111611042575b5081610f34610f39928851611919565b611919565b928015158061102e575b610ff1575b5080610fc0575b5050337f00000000000000000000000000000000000000000000000000000000000000006119d8565b51925160405193845260208401527f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a360403394a460015f516020611c525f395f51905f525580f35b610fea917f00000000000000000000000000000000000000000000000000000000000000006119d8565b5f80610f4f565b60035461102891906001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006119d8565b5f610f48565b506003546001600160a01b03161515610f43565b61104c9250611919565b825f610f24565b634e487b7160e01b89526011600452602489fd5b6001600160a01b03821615610f0657915091505f80610f06565b925090506040823d6040116110bf575b8161109e6040938361179e565b810103126110bb5760206110b1836118b9565b920151905f610f00565b8980fd5b3d9150611091565b634e487b7160e01b86526011600452602486fd5b816110e59161179e565b6110f057845f610eb1565b8480fd5b6040513d84823e3d90fd5b5060405163020604bf60e21b815260048101869052602081602481885afa801561117b57839061113c575b6001600160a01b031630149050610e63565b506020813d602011611173575b816111566020938361179e565b8101031261116f5761116a610e6c916118b9565b61112a565b8280fd5b3d9150611149565b6040513d85823e3d90fd5b61119f915060203d6020116107b0576107a2818361179e565b5f610e5b565b506020813d6020116111d8575b816111bf6020938361179e565b8101031261116f576111d3610e2b916118b9565b610e16565b3d91506111b2565b60405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e742031006044820152606490fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481875afa908115611347575f916113a5575b501561074c57604051627eeac760e11b815233600482015260248101859052602081604481875afa8015611347575f90611371575b61129991508651111561181c565b60405163e985e9c560e01b8152336004820152306024820152602081604481875afa8015611347576112d2915f91611352575b5061185f565b8451833b1561073557604051637921219560e11b81523360048201526001600160a01b03909216602483015260448201859052606482015260a060848201525f60a482018190528160c48183875af1801561134757611332575b50610eb4565b61133f9195505f9061179e565b5f935f61132c565b6040513d5f823e3d90fd5b61136b915060203d6020116107b0576107a2818361179e565b5f6112cc565b506020813d60201161139d575b8161138b6020938361179e565b8101031261073557611299905161128b565b3d915061137e565b6113be915060203d6020116107b0576107a2818361179e565b5f611256565b6113dd915060203d6020116107b0576107a2818361179e565b5f610ddc565b34610735576040366003190112610735576113fc6116bf565b336001600160a01b0382160361141a5761141890600435611b68565b005b63334bd91960e11b5f5260045ffd5b34610735575f366003190112610735576020600254604051908152f35b34610735575f366003190112610735576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610735576040366003190112610735576114186004356114a96116bf565b906114c261042a825f525f602052600160405f20015490565b611ae0565b346107355760203660031901126107355760206114f16004355f525f602052600160405f20015490565b604051908152f35b34610735576040366003190112610735576115126116a9565b6024359061151e6119a0565b6001600160a01b03165f8181526001602090815260408083208584528252808320338452909152908190209051919291906115588261176e565b6002815491828452600181015460208501520154604083015215611611576115d890835f52600160205260405f20835f5260205260405f2060018060a01b0333165f526020525f600260408220828155826001820155015551337f00000000000000000000000000000000000000000000000000000000000000006119d8565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a460015f516020611c525f395f51905f5255005b60405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606490fd5b34610735576020366003190112610735576004359063ffffffff60e01b821680920361073557602091637965db0b60e01b8114908115611698575b5015158152f35b6301ffc9a760e01b14905083611691565b600435906001600160a01b038216820361073557565b602435906001600160a01b038216820361073557565b6060906003190112610735576004356001600160a01b03811681036107355790602435906044356001600160a01b03811681036107355790565b9181601f840112156107355782359167ffffffffffffffff8311610735576020808501948460051b01011161073557565b6080906003190112610735576004356001600160a01b03811681036107355790602435906044359060643590565b6060810190811067ffffffffffffffff82111761178a57604052565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff82111761178a57604052565b156117c757565b60405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606490fd5b90816020910312610735575180151581036107355790565b1561182357565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b1561186657565b60405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b6064820152608490fd5b51906001600160a01b038216820361073557565b156118d457565b60405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606490fd5b9190820391821161192657565b634e487b7160e01b5f52601160045260245ffd5b919081101561194a5760051b0190565b634e487b7160e01b5f52603260045260245ffd5b1561196557565b60405162461bcd60e51b815260206004820152601360248201527250726963652062656c6f77206d696e696d756d60681b6044820152606490fd5b60025f516020611c525f395f51905f5254146119c95760025f516020611c525f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f5114821615611a38575b60405215611a185750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b906001811516611a5057823b15153d15161690611a0d565b503d5f823e3d90fd5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff1615611a9157565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff1615611aca5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16611b62575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615611b62575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b6040516323b872dd60e01b5f9081526001600160a01b039384166004529290931660245260449390935260209060648180865af19060015f5114821615611c39575b6040525f60605215611a185750565b906001811516611a5057823b15153d15161690611c2a56fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a26469706673582212205cca8c0a33fe7f2efd4bb444a03346d202adf92a8c01392f08fcbccda8502b1264736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034606f57601f61031c38819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b03191691909117905560405161029490816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146101035750806351e36167146100dc57639e5faafc0361000f57806003193601126100cb57805481906001600160a01b0316803b156100d9578160c491604051928380926334e4cf0760e21b825260606004830152600660648301526561747461636b60d01b608483015260a060248301528460a483015284604483015234905af180156100ce576100ba5750f35b816100c491610228565b6100cb5780f35b80fd5b6040513d84823e3d90fd5b50fd5b50346100cb57806003193601126100cb57546040516001600160a01b039091168152602090f35b346101f85760803660031901126101f85761011c6101fc565b50610125610212565b5060643567ffffffffffffffff81116101f857366023820112156101f857806004013567ffffffffffffffff81116101f857369101602401116101f8575f546001600160a01b0316803b156101f8578160c48167016345785d8a00005f946334e4cf0760e21b83526060600484015260076064840152663932b2b73a32b960c91b608484015260a060248401528560a48401528560448401525af180156101ed576101dd575b604051630a85bd0160e11b8152602090f35b5f6101e791610228565b5f6101cb565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b03821682036101f857565b602435906001600160a01b03821682036101f857565b90601f8019910116810190811067ffffffffffffffff82111761024a57604052565b634e487b7160e01b5f52604160045260245ffdfea2646970667358221220aece31d70e9fab2bb73f2d57ba4ecc5166f38f60b351e056ba66a1f676220cbb64736f6c634300081c0033"
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
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "indexed": false,
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "indexed": false,
              "internalType": "bytes[]",
              "name": "datas",
              "type": "bytes[]"
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
            }
          ],
          "name": "getProposal",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "datas",
              "type": "bytes[]"
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
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "datas",
              "type": "bytes[]"
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
      "bytecode": "0x60a06040523461029a57611fdf80380380610019816102b2565b928339810160608282031261029a5781516001600160401b03811161029a5782019080601f8301121561029a578151916001600160401b03831161029e578260051b9060208061006a8185016102b2565b80968152019282010192831161029a57602001905b8282106102825750505061009a6040602084015193016102d7565b815115610248578215158061023d575b15610204576001600160a01b03169182156101ca575f5b825181101561015c57600581901b8301602001516001600160a01b031690811561012757816100f16001936102eb565b6100fd575b50016100c1565b7f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a25f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600255608052604051908152a1604051611c86908161035982396080518181816101cc015281816105a001528181610c2501528181610f550152818161106001526117f10152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b6020809161028f846102d7565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b0381118382101761029e57604052565b51906001600160a01b038216820361029a57565b805f52600160205260405f2054155f14610353575f546801000000000000000081101561029e5760018101805f5581101561033f5781905f805260205f2001555f54905f52600160205260405f2055600190565b634e487b7160e01b5f52603260045260245ffd5b505f9056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa8951461141b578063013cf08b146113be57806301ffc9a7146113685780630d61b519146111fc578063150b7a02146111a75780631626ba7e14611156578063173825d9146110da57806319822f7c146110245780632358d5a814610fd85780632f54bf6e14610f965780633e1b081214610f0c57806342cde4e814610eef5780635d35a3d914610df3578063694e80c314610d905780637065cb4814610cfc57806374420f4c14610bea5780639330a22214610659578063a0e67e2b146105cf578063b0d691fe1461058b578063bc197c81146104f6578063c7f758a81461024c578063d087d2881461019b578063da35c6641461017e5763f23a6e610361000e573461017a5760a036600319011261017a5761013e6114e2565b506101476114f8565b506084356001600160401b03811161017a57610167903690600401611580565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b3461017a575f36600319011261017a576020600554604051908152f35b3461017a575f36600319011261017a57604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610241575f9061020e575b604051908152602090f35b506020813d602011610239575b816102286020938361150e565b8101031261017a5760209051610203565b3d915061021b565b6040513d5f823e3d90fd5b3461017a57602036600319011261017a576004356005548110156104e7575f52600460205260405f206001810190600281016003820154600483015490604051808560208297549384815201905f5260205f20925f5b8181106104c55750506102b79250038561150e565b604051808160208854928381520180985f5260205f20925f5b8181106104ac5750506102e59250038261150e565b8354906102f182611637565b916102ff604051938461150e565b808352602083019081965f5260205f20915f905b828210610409575050505060206103356040519760e0895260e08901906115fb565b918783038289015251918281520196905f5b8181106103f357505050848603604086015251808652602086019060208160051b88010194915f905b8282106103b05760ff808616151560608a0152600886901c1615156080890152601085901c6001600160a01b031660a089015260c0880186905287870388f35b9091929560208080600193601f198d8203018652818b518051918291828552018484015e5f828201840152601f01601f1916010198019493919091019101610370565b8251895260209889019890920191600101610347565b6040515f8554610418816116d4565b80845290600181169081156104895750600114610452575b50600192826104448594602094038261150e565b815201940191019092610313565b5f878152602081209092505b81831061047357505081016020016001610430565b600181602092548386880101520192019161045e565b60ff191660208581019190915291151560051b8401909101915060019050610430565b84548352600194850194869450602090930192016102d0565b84546001600160a01b03168352600194850194899450602090930192016102a2565b63635e873760e01b5f5260045ffd5b3461017a5760a036600319011261017a5761050f6114e2565b506105186114f8565b506044356001600160401b03811161017a5761053890369060040161164e565b506064356001600160401b03811161017a5761055890369060040161164e565b506084356001600160401b03811161017a57610578903690600401611580565b5060405163bc197c8160e01b8152602090f35b3461017a575f36600319011261017a576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461017a575f36600319011261017a576040518060205f549182815201905f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563905f5b8181106106435761063f8561062b8187038261150e565b6040519182916020835260208301906115fb565b0390f35b8254845260209093019260019283019201610614565b3461017a57608036600319011261017a576004356001600160401b03811161017a576106899036906004016115cb565b6024356001600160401b03811161017a576106a89036906004016115cb565b9290916044356001600160401b03811161017a576106ca9036906004016115cb565b6064356106de6106d9826117ee565b6119f0565b8315610baf5786841480610ba6575b15610b6d576106fb906117ee565b946005549461070986611793565b600555855f52600460205260405f20976001600160401b038611610aa957600160401b8611610aa957610741868a54818c558b6117cb565b5f8981526020812090835b888210610b4857505050600189016001600160401b038211610aa957600160401b8211610aa957610782828254818455836117cb565b83905f5260205f20905f5b838110610b345750505060028901600160401b8511610aa9578054858255808610610abd575b505f9081526020812090865b86821061098e5750505060038901805462010000600160b01b03191660108a901b62010000600160b01b0316179055604051606080825281018790526001600160a01b039890981697956080870192905f905b8082106109645750505085820360208701528082526001600160fb1b03811161017a5760059493941b809260208301370191806020840160208686030160408701525260408301906020808260051b8601010193835f91601e1982360301905b8484106108f45750505060208888600160048d84847f517fcb891178a767bf117b06ea6a469bfc3e466970227b0bce7cab47f6f5b7d48e808f0390a3845f5260058101865260405f208360ff19825416179055015560405191817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a38152f35b90919293949596601f19601f198383030101875287358381121561017a57840190602082359201916001600160401b03811161017a57803603831361017a576020828280600196849695859652848401375f828201840152601f01601f1916010199019701959401929190610872565b90919384359060018060a01b03821680920361017a57602081600193829352019501920190610812565b6109988189611761565b906001600160401b038211610aa9576109b185546116d4565b601f8111610a6e575b505f90601f8311600114610a045792826001949360209386955f926109f9575b50505f19600383901b1c191690841b1786555b019301910190916107bf565b013590505f806109da565b601f19831691865f5260205f20925f5b818110610a565750936020936001969387969383889510610a3d575b505050811b0186556109ed565b01355f19600384901b60f8161c191690555f8080610a30565b91936020600181928787013581550195019201610a14565b610a9990865f5260205f20601f850160051c81019160208610610a9f575b601f0160051c01906117b5565b8e6109ba565b9091508190610a8c565b634e487b7160e01b5f52604160045260245ffd5b815f528560205f2091820191015b818110610ad857506107b3565b80610ae5600192546116d4565b80610af2575b5001610acb565b601f81118314610b0757505f81555b8d610aeb565b610b2390825f5283601f60205f20920160051c820191016117b5565b805f525f6020812081835555610b01565b60019060208335930192818501550161078d565b8035916001600160a01b038316830361017a576020600192019281850155019061074c565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b508187146106ed565b60405162461bcd60e51b8152602060048201526013602482015272139bc81d185c99d95d1cc81c1c9bdd9a591959606a1b6044820152606490fd5b3461017a57608036600319011261017a57610c036114e2565b6044356001600160401b03811161017a57610c2290369060040161159e565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614929091908315610ccf57600160025403610cc0575f9283925b81604051928392833781018481520391602435905af1610c8561170c565b5015610cb157610c9157005b6064355f90815260036020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b90303303610ce2575b905f928392610c67565b90610cec336119f0565b600160025403610cc05790610cd8565b3461017a57602036600319011261017a57610d156114e2565b303303610d7d576001600160a01b03168015610d6e57610d3481611b1d565b15610d5f577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b3461017a57602036600319011261017a57600435303303610d7d5780158015610de9575b610cc0576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600255604051908152a1005b505f548111610db4565b3461017a57610e18610e04366114cc565b610e136106d9829493946117ee565b6117ee565b6005548210156104e757815f52600460205260405f20600381015460ff8116610ee05760081c60ff16610ed157600581019060018060a01b0383165f528160205260ff60405f205416610ec25760049160018060a01b0384165f5260205260405f20600160ff1982541617905501610e908154611793565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b3461017a575f36600319011261017a576020600254604051908152f35b3461017a57602036600319011261017a576004356001600160c01b0381169081900361017a57604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610241575f9061020e57604051908152602090f35b3461017a57602036600319011261017a576020610fce6001600160a01b03610fbc6114e2565b165f52600160205260405f2054151590565b6040519015158152f35b3461017a57604036600319011261017a57610ff16114f8565b6004355f526004602052600560405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461017a57606036600319011261017a576004356001600160401b03811161017a578060040190610120600319823603011261017a57604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610d7d576020926110a26101046110ac930182611761565b91602435906118d0565b90806110bc575b50604051908152f35b5f80808093816040516110cf898261150e565b52335af150826110b3565b3461017a57602036600319011261017a576110f36114e2565b303303610d7d576001600160a01b031661110c81611a0e565b15611147575f546002548110610cc05715610cc0577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b3461017a57604036600319011261017a576024356001600160401b03811161017a5761119461118b602092369060040161159e565b9060043561173b565b6040516001600160e01b03199091168152f35b3461017a57608036600319011261017a576111c06114e2565b506111c96114f8565b506064356001600160401b03811161017a576111e9903690600401611580565b50604051630a85bd0160e11b8152602090f35b602036600319011261017a576004356005548110156104e757805f52600460205260405f2060038101805460ff8116610ee05760ff8160081c16610ed1576004830154600254116113595760019060ff19161790555f600182019160028101915b81548110156113325761127081836116ab565b905460039190911b1c6001600160a01b031661128c82866116ab565b90549060031b1c61129d83866116ab565b5090604051915f908054906112b1826116d4565b916001811690811561131b57506001146112e9575b5050915f939181859403925af16112db61170c565b5015610cb15760010161125d565b9091505f5260205f205f905b828210611307575050820181836112c6565b6001816020925484880152019101906112f5565b60ff191686525050801515028301905081836112c6565b847fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b6359fa4a9360e01b5f5260045ffd5b3461017a57602036600319011261017a5760043563ffffffff60e01b811680910361017a57602090630271189760e51b81149081156113ad575b506040519015158152f35b6301ffc9a760e01b149050826113a2565b3461017a57602036600319011261017a576004355f526004602052608060405f20600460038201549101546040519160ff81161515835260ff8160081c161515602084015260018060a01b039060101c1660408301526060820152f35b3461017a5761143461142c366114cc565b9190916117ee565b6005548210156104e757815f526004602052600360405f20019081549060ff8216610ee05760ff8260081c16610ed157601082901c6001600160a01b0390811691161415806114c2575b6114b35761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b503033141561147e565b604090600319011261017a576004359060243590565b600435906001600160a01b038216820361017a57565b602435906001600160a01b038216820361017a57565b90601f801991011681019081106001600160401b03821117610aa957604052565b6001600160401b038111610aa957601f01601f191660200190565b9291926115568261152f565b91611564604051938461150e565b82948184528183011161017a578281602093845f960137010152565b9080601f8301121561017a5781602061159b9335910161154a565b90565b9181601f8401121561017a578235916001600160401b03831161017a576020838186019501011161017a57565b9181601f8401121561017a578235916001600160401b03831161017a576020808501948460051b01011161017a57565b90602080835192838152019201905f5b8181106116185750505090565b82516001600160a01b031684526020938401939092019160010161160b565b6001600160401b038111610aa95760051b60200190565b9080601f8301121561017a57813561166581611637565b92611673604051948561150e565b81845260208085019260051b82010192831161017a57602001905b82821061169b5750505090565b813581526020918201910161168e565b80548210156116c0575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b90600182811c92168015611702575b60208310146116ee57565b634e487b7160e01b5f52602260045260245ffd5b91607f16916116e3565b3d15611736573d9061171d8261152f565b9161172b604051938461150e565b82523d5f602084013e565b606090565b90611746929161183d565b611756576001600160e01b031990565b630b135d3f60e11b90565b903590601e198136030182121561017a57018035906001600160401b03821161017a5760200191813603831361017a57565b5f1981146117a15760010190565b634e487b7160e01b5f52601160045260245ffd5b8181106117c0575050565b5f81556001016117b5565b918181106117d857505050565b6117ec925f5260205f2091820191016117b5565b565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461182357503390565b5f908152600360205260409020546001600160a01b031690565b9061187d61186161185861185236878661154a565b85611ae3565b90929192611b6e565b6001600160a01b03165f90815260016020526040902054151590565b6118c85761159b926118c261185892611861947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f2092369161154a565b90611ae3565b505050600190565b919290926118e261185236848461154a565b509490809560048110156119bd5715908115916119d1575b50611935575b505050602001355f52600360205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b611972939450906118c2917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f2092369161154a565b509190809260048110156119bd57159081159161199e575b50611997575f8080611900565b5050600190565b6001600160a01b03165f9081526001602052604081205415915061198a565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f908152600160205260408120541591506118fa565b6001600160a01b03165f908152600160205260409020541561114757565b5f818152600160205260409020548015611add575f1981018181116117a1575f545f198101919082116117a157818103611a91575b5050505f548015611a7d575f1901611a5b815f6116ab565b8154905f199060031b1b191690555f555f5260016020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b611ac7611aa1611ab1935f6116ab565b90549060031b1c9283925f6116ab565b819391549060031b91821b915f19901b19161790565b90555f52600160205260405f20555f8080611a43565b50505f90565b8151919060418303611b1357611b0c9250602082015190606060408401519301515f1a90611bce565b9192909190565b50505f9160029190565b805f52600160205260405f2054155f14611b69575f54600160401b811015610aa957611b53611ab18260018594015f555f6116ab565b90555f54905f52600160205260405f2055600190565b505f90565b60048110156119bd5780611b80575050565b60018103611b975763f645eedf60e01b5f5260045ffd5b60028103611bb2575063fce698f760e01b5f5260045260245ffd5b600314611bbc5750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611c45579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15610241575f516001600160a01b03811615611c3b57905f905f90565b505f906001905f90565b5050505f916003919056fea2646970667358221220e95702a37ebbaa079339c2f780cba75a4311fddb1bb9be428df445bb6c2d5eb164736f6c634300081c0033"
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
      "bytecode": "0x6080806040523460155761230a908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806389ac7d8b146100f55763c70d2a031461002f575f80fd5b346100f15761003d366101d5565b9060409392935190611fdf8083019183831067ffffffffffffffff8411176100dd5786868594610071946102f687396102c8565b03905ff59182156100d257604080518181526020946001600160a01b03169384937fb5cc75a3ec5831cf7ae127c1015a65f6f9168790072deb73f8345f14acd50e9b9383926100c29184019061028c565b90878301520390a2604051908152f35b6040513d5f823e3d90fd5b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b346100f1576020600b61018461010a366101d5565b9390919286611fdf9161015360405196610126848601896101b3565b848852838801946102f6863961014560405197889286840195866102c8565b03601f1981018752866101b3565b60405194859383850197518091895e840190838201905f8252519283915e01015f815203601f1981018352826101b3565b51902090604051916040830152838201523081520160ff8153605590206040516001600160a01b039091168152f35b90601f8019910116810190811067ffffffffffffffff8211176100dd57604052565b60806003198201126100f15760043567ffffffffffffffff81116100f157816023820112156100f15780600401359167ffffffffffffffff83116100dd578260051b916040519361022960208501866101b3565b8452602460208501938201019182116100f157602401915b81831061026c57509192602435925090506044356001600160a01b03811681036100f1579060643590565b82356001600160a01b03811681036100f157815260209283019201610241565b90602080835192838152019201905f5b8181106102a95750505090565b82516001600160a01b031684526020938401939092019160010161029c565b9193926102df60409260608552606085019061028c565b60208401959095526001600160a01b031691015256fe60a06040523461029a57611fdf80380380610019816102b2565b928339810160608282031261029a5781516001600160401b03811161029a5782019080601f8301121561029a578151916001600160401b03831161029e578260051b9060208061006a8185016102b2565b80968152019282010192831161029a57602001905b8282106102825750505061009a6040602084015193016102d7565b815115610248578215158061023d575b15610204576001600160a01b03169182156101ca575f5b825181101561015c57600581901b8301602001516001600160a01b031690811561012757816100f16001936102eb565b6100fd575b50016100c1565b7f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a25f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600255608052604051908152a1604051611c86908161035982396080518181816101cc015281816105a001528181610c2501528181610f550152818161106001526117f10152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b6020809161028f846102d7565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b0381118382101761029e57604052565b51906001600160a01b038216820361029a57565b805f52600160205260405f2054155f14610353575f546801000000000000000081101561029e5760018101805f5581101561033f5781905f805260205f2001555f54905f52600160205260405f2055600190565b634e487b7160e01b5f52603260045260245ffd5b505f9056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa8951461141b578063013cf08b146113be57806301ffc9a7146113685780630d61b519146111fc578063150b7a02146111a75780631626ba7e14611156578063173825d9146110da57806319822f7c146110245780632358d5a814610fd85780632f54bf6e14610f965780633e1b081214610f0c57806342cde4e814610eef5780635d35a3d914610df3578063694e80c314610d905780637065cb4814610cfc57806374420f4c14610bea5780639330a22214610659578063a0e67e2b146105cf578063b0d691fe1461058b578063bc197c81146104f6578063c7f758a81461024c578063d087d2881461019b578063da35c6641461017e5763f23a6e610361000e573461017a5760a036600319011261017a5761013e6114e2565b506101476114f8565b506084356001600160401b03811161017a57610167903690600401611580565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b3461017a575f36600319011261017a576020600554604051908152f35b3461017a575f36600319011261017a57604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610241575f9061020e575b604051908152602090f35b506020813d602011610239575b816102286020938361150e565b8101031261017a5760209051610203565b3d915061021b565b6040513d5f823e3d90fd5b3461017a57602036600319011261017a576004356005548110156104e7575f52600460205260405f206001810190600281016003820154600483015490604051808560208297549384815201905f5260205f20925f5b8181106104c55750506102b79250038561150e565b604051808160208854928381520180985f5260205f20925f5b8181106104ac5750506102e59250038261150e565b8354906102f182611637565b916102ff604051938461150e565b808352602083019081965f5260205f20915f905b828210610409575050505060206103356040519760e0895260e08901906115fb565b918783038289015251918281520196905f5b8181106103f357505050848603604086015251808652602086019060208160051b88010194915f905b8282106103b05760ff808616151560608a0152600886901c1615156080890152601085901c6001600160a01b031660a089015260c0880186905287870388f35b9091929560208080600193601f198d8203018652818b518051918291828552018484015e5f828201840152601f01601f1916010198019493919091019101610370565b8251895260209889019890920191600101610347565b6040515f8554610418816116d4565b80845290600181169081156104895750600114610452575b50600192826104448594602094038261150e565b815201940191019092610313565b5f878152602081209092505b81831061047357505081016020016001610430565b600181602092548386880101520192019161045e565b60ff191660208581019190915291151560051b8401909101915060019050610430565b84548352600194850194869450602090930192016102d0565b84546001600160a01b03168352600194850194899450602090930192016102a2565b63635e873760e01b5f5260045ffd5b3461017a5760a036600319011261017a5761050f6114e2565b506105186114f8565b506044356001600160401b03811161017a5761053890369060040161164e565b506064356001600160401b03811161017a5761055890369060040161164e565b506084356001600160401b03811161017a57610578903690600401611580565b5060405163bc197c8160e01b8152602090f35b3461017a575f36600319011261017a576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461017a575f36600319011261017a576040518060205f549182815201905f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563905f5b8181106106435761063f8561062b8187038261150e565b6040519182916020835260208301906115fb565b0390f35b8254845260209093019260019283019201610614565b3461017a57608036600319011261017a576004356001600160401b03811161017a576106899036906004016115cb565b6024356001600160401b03811161017a576106a89036906004016115cb565b9290916044356001600160401b03811161017a576106ca9036906004016115cb565b6064356106de6106d9826117ee565b6119f0565b8315610baf5786841480610ba6575b15610b6d576106fb906117ee565b946005549461070986611793565b600555855f52600460205260405f20976001600160401b038611610aa957600160401b8611610aa957610741868a54818c558b6117cb565b5f8981526020812090835b888210610b4857505050600189016001600160401b038211610aa957600160401b8211610aa957610782828254818455836117cb565b83905f5260205f20905f5b838110610b345750505060028901600160401b8511610aa9578054858255808610610abd575b505f9081526020812090865b86821061098e5750505060038901805462010000600160b01b03191660108a901b62010000600160b01b0316179055604051606080825281018790526001600160a01b039890981697956080870192905f905b8082106109645750505085820360208701528082526001600160fb1b03811161017a5760059493941b809260208301370191806020840160208686030160408701525260408301906020808260051b8601010193835f91601e1982360301905b8484106108f45750505060208888600160048d84847f517fcb891178a767bf117b06ea6a469bfc3e466970227b0bce7cab47f6f5b7d48e808f0390a3845f5260058101865260405f208360ff19825416179055015560405191817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a38152f35b90919293949596601f19601f198383030101875287358381121561017a57840190602082359201916001600160401b03811161017a57803603831361017a576020828280600196849695859652848401375f828201840152601f01601f1916010199019701959401929190610872565b90919384359060018060a01b03821680920361017a57602081600193829352019501920190610812565b6109988189611761565b906001600160401b038211610aa9576109b185546116d4565b601f8111610a6e575b505f90601f8311600114610a045792826001949360209386955f926109f9575b50505f19600383901b1c191690841b1786555b019301910190916107bf565b013590505f806109da565b601f19831691865f5260205f20925f5b818110610a565750936020936001969387969383889510610a3d575b505050811b0186556109ed565b01355f19600384901b60f8161c191690555f8080610a30565b91936020600181928787013581550195019201610a14565b610a9990865f5260205f20601f850160051c81019160208610610a9f575b601f0160051c01906117b5565b8e6109ba565b9091508190610a8c565b634e487b7160e01b5f52604160045260245ffd5b815f528560205f2091820191015b818110610ad857506107b3565b80610ae5600192546116d4565b80610af2575b5001610acb565b601f81118314610b0757505f81555b8d610aeb565b610b2390825f5283601f60205f20920160051c820191016117b5565b805f525f6020812081835555610b01565b60019060208335930192818501550161078d565b8035916001600160a01b038316830361017a576020600192019281850155019061074c565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b508187146106ed565b60405162461bcd60e51b8152602060048201526013602482015272139bc81d185c99d95d1cc81c1c9bdd9a591959606a1b6044820152606490fd5b3461017a57608036600319011261017a57610c036114e2565b6044356001600160401b03811161017a57610c2290369060040161159e565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614929091908315610ccf57600160025403610cc0575f9283925b81604051928392833781018481520391602435905af1610c8561170c565b5015610cb157610c9157005b6064355f90815260036020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b90303303610ce2575b905f928392610c67565b90610cec336119f0565b600160025403610cc05790610cd8565b3461017a57602036600319011261017a57610d156114e2565b303303610d7d576001600160a01b03168015610d6e57610d3481611b1d565b15610d5f577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b3461017a57602036600319011261017a57600435303303610d7d5780158015610de9575b610cc0576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600255604051908152a1005b505f548111610db4565b3461017a57610e18610e04366114cc565b610e136106d9829493946117ee565b6117ee565b6005548210156104e757815f52600460205260405f20600381015460ff8116610ee05760081c60ff16610ed157600581019060018060a01b0383165f528160205260ff60405f205416610ec25760049160018060a01b0384165f5260205260405f20600160ff1982541617905501610e908154611793565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b3461017a575f36600319011261017a576020600254604051908152f35b3461017a57602036600319011261017a576004356001600160c01b0381169081900361017a57604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa8015610241575f9061020e57604051908152602090f35b3461017a57602036600319011261017a576020610fce6001600160a01b03610fbc6114e2565b165f52600160205260405f2054151590565b6040519015158152f35b3461017a57604036600319011261017a57610ff16114f8565b6004355f526004602052600560405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461017a57606036600319011261017a576004356001600160401b03811161017a578060040190610120600319823603011261017a57604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610d7d576020926110a26101046110ac930182611761565b91602435906118d0565b90806110bc575b50604051908152f35b5f80808093816040516110cf898261150e565b52335af150826110b3565b3461017a57602036600319011261017a576110f36114e2565b303303610d7d576001600160a01b031661110c81611a0e565b15611147575f546002548110610cc05715610cc0577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b3461017a57604036600319011261017a576024356001600160401b03811161017a5761119461118b602092369060040161159e565b9060043561173b565b6040516001600160e01b03199091168152f35b3461017a57608036600319011261017a576111c06114e2565b506111c96114f8565b506064356001600160401b03811161017a576111e9903690600401611580565b50604051630a85bd0160e11b8152602090f35b602036600319011261017a576004356005548110156104e757805f52600460205260405f2060038101805460ff8116610ee05760ff8160081c16610ed1576004830154600254116113595760019060ff19161790555f600182019160028101915b81548110156113325761127081836116ab565b905460039190911b1c6001600160a01b031661128c82866116ab565b90549060031b1c61129d83866116ab565b5090604051915f908054906112b1826116d4565b916001811690811561131b57506001146112e9575b5050915f939181859403925af16112db61170c565b5015610cb15760010161125d565b9091505f5260205f205f905b828210611307575050820181836112c6565b6001816020925484880152019101906112f5565b60ff191686525050801515028301905081836112c6565b847fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b6359fa4a9360e01b5f5260045ffd5b3461017a57602036600319011261017a5760043563ffffffff60e01b811680910361017a57602090630271189760e51b81149081156113ad575b506040519015158152f35b6301ffc9a760e01b149050826113a2565b3461017a57602036600319011261017a576004355f526004602052608060405f20600460038201549101546040519160ff81161515835260ff8160081c161515602084015260018060a01b039060101c1660408301526060820152f35b3461017a5761143461142c366114cc565b9190916117ee565b6005548210156104e757815f526004602052600360405f20019081549060ff8216610ee05760ff8260081c16610ed157601082901c6001600160a01b0390811691161415806114c2575b6114b35761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b503033141561147e565b604090600319011261017a576004359060243590565b600435906001600160a01b038216820361017a57565b602435906001600160a01b038216820361017a57565b90601f801991011681019081106001600160401b03821117610aa957604052565b6001600160401b038111610aa957601f01601f191660200190565b9291926115568261152f565b91611564604051938461150e565b82948184528183011161017a578281602093845f960137010152565b9080601f8301121561017a5781602061159b9335910161154a565b90565b9181601f8401121561017a578235916001600160401b03831161017a576020838186019501011161017a57565b9181601f8401121561017a578235916001600160401b03831161017a576020808501948460051b01011161017a57565b90602080835192838152019201905f5b8181106116185750505090565b82516001600160a01b031684526020938401939092019160010161160b565b6001600160401b038111610aa95760051b60200190565b9080601f8301121561017a57813561166581611637565b92611673604051948561150e565b81845260208085019260051b82010192831161017a57602001905b82821061169b5750505090565b813581526020918201910161168e565b80548210156116c0575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b90600182811c92168015611702575b60208310146116ee57565b634e487b7160e01b5f52602260045260245ffd5b91607f16916116e3565b3d15611736573d9061171d8261152f565b9161172b604051938461150e565b82523d5f602084013e565b606090565b90611746929161183d565b611756576001600160e01b031990565b630b135d3f60e11b90565b903590601e198136030182121561017a57018035906001600160401b03821161017a5760200191813603831361017a57565b5f1981146117a15760010190565b634e487b7160e01b5f52601160045260245ffd5b8181106117c0575050565b5f81556001016117b5565b918181106117d857505050565b6117ec925f5260205f2091820191016117b5565b565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461182357503390565b5f908152600360205260409020546001600160a01b031690565b9061187d61186161185861185236878661154a565b85611ae3565b90929192611b6e565b6001600160a01b03165f90815260016020526040902054151590565b6118c85761159b926118c261185892611861947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f2092369161154a565b90611ae3565b505050600190565b919290926118e261185236848461154a565b509490809560048110156119bd5715908115916119d1575b50611935575b505050602001355f52600360205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b611972939450906118c2917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f2092369161154a565b509190809260048110156119bd57159081159161199e575b50611997575f8080611900565b5050600190565b6001600160a01b03165f9081526001602052604081205415915061198a565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f908152600160205260408120541591506118fa565b6001600160a01b03165f908152600160205260409020541561114757565b5f818152600160205260409020548015611add575f1981018181116117a1575f545f198101919082116117a157818103611a91575b5050505f548015611a7d575f1901611a5b815f6116ab565b8154905f199060031b1b191690555f555f5260016020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b611ac7611aa1611ab1935f6116ab565b90549060031b1c9283925f6116ab565b819391549060031b91821b915f19901b19161790565b90555f52600160205260405f20555f8080611a43565b50505f90565b8151919060418303611b1357611b0c9250602082015190606060408401519301515f1a90611bce565b9192909190565b50505f9160029190565b805f52600160205260405f2054155f14611b69575f54600160401b811015610aa957611b53611ab18260018594015f555f6116ab565b90555f54905f52600160205260405f2055600190565b505f90565b60048110156119bd5780611b80575050565b60018103611b975763f645eedf60e01b5f5260045ffd5b60028103611bb2575063fce698f760e01b5f5260045260245ffd5b600314611bbc5750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611c45579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa15610241575f516001600160a01b03811615611c3b57905f905f90565b505f906001905f90565b5050505f916003919056fea2646970667358221220e95702a37ebbaa079339c2f780cba75a4311fddb1bb9be428df445bb6c2d5eb164736f6c634300081c0033a26469706673582212200eefee007a8104da030c8c2894b888b9da0935e51ac6aaf42dcc0b0b99a6dc5164736f6c634300081c0033"
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