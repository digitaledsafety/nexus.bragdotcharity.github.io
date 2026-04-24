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
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "DistributionFailed",
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
          "name": "distributeETHNonAtomic",
          "outputs": [],
          "stateMutability": "payable",
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
      "bytecode": "0x60803461006857601f610ae838819003918201601f19168301916001600160401b0383118484101761006c5780849260209460405283398101031261006857516001600160a01b03811681036100685761005890610080565b506040516109be908161010a8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6001600160a01b0381165f9081525f516020610ac85f395f51905f52602052604090205460ff16610104576001600160a01b03165f8181525f516020610ac85f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561001c575b50361561001a575f80fd5b005b5f3560e01c90816301ffc9a71461050e5750806315270ace146104635780631ce5f72814610388578063227a75581461033a578063248a9ca3146103085780632f2ff15d146102d957806336568abe146102a35780637402c05a146101d157806391d1485414610196578063a217fddf1461017c578063d547741f146101445763f8b7fabf146100ac575f61000f565b6100b5366105f9565b906100c3828495941461066d565b5f805b858210610124576100d991503414610706565b5f5b8481106100e457005b8061011e5f8080806101016100fc6001988d8d6106ad565b6106d1565b61010c878b8b6106ad565b35905af1610118610752565b506107b7565b016100db565b61013c6001916101358487876106ad565b35906106e5565b9101906100c6565b346101785761001a61015536610647565b9061017361016e825f525f602052600160405f20015490565b610848565b610908565b5f80fd5b34610178575f3660031901126101785760206040515f8152f35b34610178576101a436610647565b905f525f60205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610178576101df36610592565b9290916101ea6107f9565b6101f584821461066d565b5f5b81811061020057005b61020e6100fc8284866106ad565b6102198287876106ad565b60405163a9059cbb60e01b5f9081526001600160a01b03909316600452903560245290602090604481808b5af19060015f5114821615610282575b60405215610264576001016101f7565b635274afe760e01b5f9081526001600160a01b038716600452602490fd5b90600181151661029a57873b15153d15161690610254565b503d5f823e3d90fd5b34610178576102b136610647565b336001600160a01b038216036102ca5761001a91610908565b63334bd91960e11b5f5260045ffd5b346101785761001a6102ea36610647565b9061030361016e825f525f602052600160405f20015490565b610880565b346101785760203660031901126101785760206103326004355f525f602052600160405f20015490565b604051908152f35b3461017857610348366105f9565b906103549392936107f9565b61035f82851461066d565b5f5b84811061036a57005b806103825f8080806101016100fc6001988d8d6106ad565b01610361565b610391366105f9565b61039e818495941461066d565b5f805b85821061044a576103b491503414610706565b5f5b8481106103bf57005b805f8080806103d46100fc6001978c8c6106ad565b6103df86898b6106ad565b35905af16103eb610752565b50156103f8575b016103b6565b6104066100fc8288886106ad565b7fde8579262fcb2d1163177c317c51de94ee1f7f5475e2ac16298614fe5280972b60206104348487896106ad565b3592604051938452858060a01b031692a26103f2565b61045b6001916101358486886106ad565b9101906103a1565b346101785761047136610592565b92909161047f84821461066d565b5f5b81811061048a57005b6104986100fc8284866106ad565b6104a38287876106ad565b6040516323b872dd60e01b5f908152336004526001600160a01b03909316602452903560445290602090606481808b5af19060015f51148216156104f6575b6040525f6060521561026457600101610481565b90600181151661029a57873b15153d151616906104e2565b34610178576020366003190112610178576004359063ffffffff60e01b821680920361017857602091637965db0b60e01b8114908115610550575b5015158152f35b6301ffc9a760e01b14905083610549565b9181601f840112156101785782359167ffffffffffffffff8311610178576020808501948460051b01011161017857565b906060600319830112610178576004356001600160a01b0381168103610178579160243567ffffffffffffffff811161017857816105d291600401610561565b929092916044359067ffffffffffffffff8211610178576105f591600401610561565b9091565b60406003198201126101785760043567ffffffffffffffff8111610178578161062491600401610561565b929092916024359067ffffffffffffffff8211610178576105f591600401610561565b604090600319011261017857600435906024356001600160a01b03811681036101785790565b1561067457565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156106bd5760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036101785790565b919082018092116106f257565b634e487b7160e01b5f52601160045260245ffd5b1561070d57565b60405162461bcd60e51b815260206004820152601960248201527f496e636f72726563742045544820616d6f756e742073656e74000000000000006044820152606490fd5b3d156107b2573d9067ffffffffffffffff821161079e5760405191601f8101601f19908116603f0116830167ffffffffffffffff81118482101761079e5760405282523d5f602084013e565b634e487b7160e01b5f52604160045260245ffd5b606090565b156107be57565b60405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606490fd5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff161561083157565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff161561086a5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16610902575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615610902575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a460019056fea2646970667358221220cf918df89648ab4100a7bee8b7ad55fa65f7c5cbf8503e9d14fccbb74e5166a964736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "topUpWithBrag",
          "outputs": [],
          "stateMutability": "nonpayable",
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
      "bytecode": "0x6080604052346103c2576150e66080813803918261001c816103c6565b9384928339810103126103c257610032816103eb565b9061003f602082016103eb565b6100506060604084015193016103eb565b9261005b60406103c6565b6007815266109c9859d3919560ca1b602082015261007960406103c6565b600781526610949051d3919560ca1b6020820152815190916001600160401b0382116102c9575f5490600182811c921680156103b8575b60208310146102ab5781601f84931161034b575b50602090601f83116001146102e8575f926102dd575b50508160011b915f199060031b1c1916175f555b8051906001600160401b0382116102c957600154600181811c911680156102bf575b60208210146102ab57601f8111610248575b50602090601f83116001146101df5761017d9392915f91836101d4575b50508160011b915f199060031b1c1916176001555b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556103ff565b50600a80546001600160a01b03199081166001600160a01b03938416908117909255600b80548216909217909155600c92909255600e805490921692169190911790556064600955604051614c3d90816104898239f35b015190505f8061013f565b90601f1983169160015f52815f20925f5b818110610230575091600193918561017d97969410610218575b505050811b01600155610154565b01515f1960f88460031b161c191690555f808061020a565b929360206001819287860151815501950193016101f0565b60015f527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6601f840160051c810191602085106102a1575b601f0160051c01905b8181106102965750610122565b5f8155600101610289565b9091508190610280565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610110565b634e487b7160e01b5f52604160045260245ffd5b015190505f806100da565b5f8080528281209350601f198516905b818110610333575090846001959493921061031b575b505050811b015f556100ee565b01515f1960f88460031b161c191690555f808061030e565b929360206001819287860151815501950193016102f8565b5f80529091507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563601f840160051c810191602085106103ae575b90601f859493920160051c01905b8181106103a057506100c4565b5f8155849350600101610393565b9091508190610385565b91607f16916100b0565b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176102c957604052565b51906001600160a01b03821682036103c257565b6001600160a01b0381165f9081525f5160206150c65f395f51905f52602052604090205460ff16610483576001600160a01b03165f8181525f5160206150c65f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe608080604052600436101561007a575b50361561001a575f80fd5b6100226125a2565b6100676040516100336040826121b6565b600f81526e2234b932b1ba103237b730ba34b7b760891b60208201526040519061005e6020836121b6565b5f8252336125e8565b60015f516020614bc85f395f51905f5255005b5f905f3560e01c90816301ffc9a714611fc55750806302d95a5214611f9d57806306fdde0314611ed6578063081812fc14611e9a578063095ea7b314611db05780630fd973ce146117775780631653441c1461170f57806318160ddd1461119657806323b872dd146116f7578063248a9ca3146116c35780632a55205a146116635780632eb9313e146116235780632f2ff15d146115e457806336568abe1461159f57806341e42f301461150957806342842e0e146114d957806349c657db146114bc5780634c00de821461149357806350017f3e1461131857806361d027b3146112ef5780636352211e146112be57806364cb7e9c146112935780636f8b44b01461127057806370a082311461121d578063724e78da146111dd578063741bef1a146111b457806375794a3c1461119657806383943dc81461116d578063892e9c3514611143578063916221aa146110f957806391a6262f146110ca57806391d148541461108057806395d89b4114610f9d5780639604d47814610df657806396d8f4f314610dd8578063a217fddf14610dbc578063a22cb46514610d04578063a6719b3a14610c80578063ab2a6f7014610bea578063b88d4fde14610b77578063c631724714610b54578063c87b56dd14610477578063d3933c1c146103d3578063d547741f1461038b578063d5abeb011461036d578063e985e9c5146103155763f0f442600361000f5734610312576020366003190112610312576102a06120ba565b6102a8613147565b6001600160a01b031680156102cd576001600160601b0360a01b600a541617600a5580f35b60405162461bcd60e51b815260206004820152601860248201527f496e76616c6964207472656173757279206164647265737300000000000000006044820152606490fd5b80fd5b50346103125760403660031901126103125760406103316120ba565b9161033a6120d0565b9260018060a01b031681526005602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b50346103125780600319360112610312576020600954604051908152f35b5034610312576040366003190112610312576103cf6004356103ab6120d0565b906103ca6103c5825f526007602052600160405f20015490565b613196565b61325c565b5080f35b506060366003190112610312576004356001600160401b038111610473576103ff9036906004016120fc565b906024356001600160401b03811161046f5761041f9036906004016120fc565b909160443592831515840361046b5761044861045092610457966104416125a2565b3691612292565b923691612292565b9033612ab8565b60015f516020614bc85f395f51905f525580f35b8580fd5b8380fd5b5080fd5b503461031257602036600319011261031257600435906104968261256e565b50818152600f602052604081206040516104af8161219b565b81546001600160a01b031681526001820154602082015260028201546040820152600382015460608201929060ff166004811015610b405783526104f5906004016121d7565b9160808201928352610506856122d5565b946060818652601160205261051d604087206121d7565b90815115610b2f575b815115610b1157610536826139d4565b15610b0957509260206105a2603a61055761055289518761357b565b614a59565b6040519384917f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000828401528051918291018484015e81018a838201520301601f1981018352826121b6565b925b602097886040516105b582826121b6565b898152968051610aac575b50506105cc8751614324565b92516001600160a01b031691826105e3602a612277565b936105f160405195866121b6565b602a85526105ff602a612277565b601f190136868e0137845115610a985760308c860153845160011015610a98576078602186015360295b60018111610a2f5750610a185750516004811015610a0457898088818099818e819b8f999b83809c81859f61065e829e614552565b90156109e157816040516106736040826121b6565b600381526259657360e81b82820152935b6040519e8f978189017f7b2274726169745f74797065223a20224d657373616765222c202276616c7565905263111d101160e11b60408a015280519182910160448a015e62089f4b60ea1b6044918901918201527f7b2274726169745f74797065223a20224f726967696e616c20446f6e6f72222c60478201526a10113b30b63ab2911d101160a91b60678201528151929091839101607283015e016044019062089f4b60ea1b602e830152603182017f7b2274726169745f74797065223a202254617820537461747573222c20227661905266363ab2911d101160c91b6051830152805192839101605883015e01602e019062089f4b60ea1b602a830152602d82017f7b2274726169745f74797065223a2022476c6f77696e67222c202276616c7565905263111d101160e11b604d830152805192839101605183015e01602a0161227d60f01b602782015203602701601d19810189526002016107e990896121b6565b6107f290614607565b895151909990156109c657610842602261084893610811869451614324565b906040519485926101d160f51b828501528051918291018585015e820190838201520301601f1981018352826121b6565b92614324565b91604051998a99727b226e616d65223a2022427261674e4654202360681b828c015280519182910160338c015e890190603382017f222c20226465736372697074696f6e223a2022427261672e4368617269747920905260538201754475616c2d537461746520436f6c6c65637469626c6560501b9052805192839101606983015e01603301906c1116101134b6b0b3b2911d101160991b6036830152805192839101604383015e0160360190600d8201888152815193849201905e01600d019071222c202261747472696275746573223a205b60701b8252805192839101601283015e0160128101615d7d60f01b905203601201601d198101825260020161095190826121b6565b61095a90614a59565b6040517f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000008582015281519094859392829101603d85015e820190603d82015203603d01601f19810183526109ae90836121b6565b60405191818392835282016109c291612096565b0390f35b50506108486040516109d883826121b6565b8b815292614324565b816040516109f06040826121b6565b60028152614e6f60f01b8282015293610684565b634e487b7160e01b89526021600452602489fd5b63e22e27eb60e01b8a526004526014602452604489fd5b90600f81166010811015610a84576f181899199a1a9b1b9c1cb0b131b232b360811b901a610a5d83886139af565b5360041c908015610a70575f1901610629565b634e487b7160e01b8c52601160045260248cfd5b634e487b7160e01b8d52603260045260248dfd5b634e487b7160e01b8b52603260045260248bfd5b610b0191929750610abe603591614324565b604051741116101130b734b6b0ba34b7b72fbab936111d101160591b858201528151909485928291018484015e81018b838201520301601f1981018352826121b6565b94885f6105c0565b9390926105a4565b9390506020610b29603a61055761055289518761357b565b926105a4565b9050610b3a826134cb565b90610526565b634e487b7160e01b85526021600452602485fd5b503461031257602036600319011261031257610b6e613147565b600435600c5580f35b503461031257608036600319011261031257610b916120ba565b610b996120d0565b90604435606435926001600160401b038411610be65736602385011215610be657610bd1610be3943690602481600401359101612292565b92610bdd8383836122f4565b336133ee565b80f35b8480fd5b5034610312576020366003190112610312576004358152600f602052604081209060018060a01b03825416916001810154916002820154610c35600460ff60038601541694016121d7565b93604051958652602086015260408501526004821015610c6c575082916109c291606084015260a0608084015260a0830190612096565b634e487b7160e01b81526021600452602490fd5b50608036600319011261031257610c956120ba565b6024356001600160401b038111610d0057610cb49036906004016120fc565b916044356001600160401b038111610be657610cd49036906004016120fc565b9092606435938415158503610cfc57610448610cf692610457976104416125a2565b91612ab8565b8680fd5b8280fd5b503461031257604036600319011261031257610d1e6120ba565b60243590811515809203610d00573315610da8576001600160a01b0316908115610d9457338352600560205260408320825f5260205260405f2060ff1981541660ff83161790556040519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b630b61174360e31b83526004829052602483fd5b63a9fbf51f60e01b83526004839052602483fd5b5034610312578060031936011261031257602090604051908152f35b50346103125780600319360112610312576020600c54604051908152f35b503461031257602036600319011261031257600435610e136125a2565b610e1c8161256e565b50600d546001600160a01b03168015610f6357600a546040516323b872dd60e01b81523360048201526001600160a01b03909116602482015269152d02c7e14af68000006044820152906020908290606490829087905af1908115610f58578391610f1d575b5015610ee15780825260106020524260408320556040519069152d02c7e14af680000082527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f516020614bc85f395f51905f525580f35b60405162461bcd60e51b815260206004820152601460248201527310949051c81d1c985b9cd9995c8819985a5b195960621b6044820152606490fd5b90506020813d602011610f50575b81610f38602093836121b6565b81010312610d0057518015158103610d00575f610e82565b3d9150610f2b565b6040513d85823e3d90fd5b60405162461bcd60e51b815260206004820152601260248201527110949051c81d1bdad95b881b9bdd081cd95d60721b6044820152606490fd5b5034610312578060031936011261031257604051908060015490610fc082612163565b80855291600181169081156110595750600114610ffc575b6109c284610fe8818603826121b6565b604051918291602083526020830190612096565b600181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6939250905b80821061103f57509091508101602001610fe882610fd8565b919260018160209254838588010152019101909291611026565b60ff191660208087019190915292151560051b85019092019250610fe89150839050610fd8565b503461031257604036600319011261031257604061109c6120d0565b9160043581526007602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b5034610312576060366003190112610312576110e46120d0565b506110ed6120e6565b50602060405160018152f35b5034610312576040366003190112610312576004356024356004811015610d0057610be391611126613147565b61112f8161256e565b508352600f60205260036040842001612556565b50346103125760203660031901126103125760406020916004358152601083522054604051908152f35b5034610312578060031936011261031257600d546040516001600160a01b039091168152602090f35b50346103125780600319360112610312576020600854604051908152f35b5034610312578060031936011261031257600e546040516001600160a01b039091168152602090f35b5034610312576020366003190112610312576111f76120ba565b6111ff613147565b60018060a01b03166001600160601b0360a01b600e541617600e5580f35b5034610312576020366003190112610312576001600160a01b0361123f6120ba565b16801561125c578160409160209352600383522054604051908152f35b6322718ad960e21b82526004829052602482fd5b50346103125760203660031901126103125761128a613147565b60043560095580f35b503461031257602036600319011261031257610fe860406109c29260043581526011602052206121d7565b50346103125760203660031901126103125760206112dd60043561256e565b6040516001600160a01b039091168152f35b5034610312578060031936011261031257600a546040516001600160a01b039091168152602090f35b506020366003190112610312576004356113306125a2565b6113398161256e565b50600e546305f5e1009083906001600160a01b031680611412575b50106113cd57808252601060205242604083205561138c8280808060018060a01b03600a541634905af16113866124db565b5061250a565b604051903482527ff48072c26ccf8eabc8b4a08b1bd58ca12ca92af2f4e166684fff180d46c7223660203393a360015f516020614bc85f395f51905f525580f35b60405162461bcd60e51b815260206004820152601960248201527f546f702d75702072657175697265732024312e303020555344000000000000006044820152606490fd5b60a060049160405192838092633fabe5a360e21b82525afa85918161145d575b5015611354578481131561135457670de0b6b3a7640000915061145690349061247c565b045f611354565b61148091925060a03d60a01161148c575b61147881836121b6565b8101906124a6565b5050509050905f611432565b503d61146e565b5034610312578060031936011261031257600b546040516001600160a01b039091168152602090f35b503461031257806003193601126103125760206040516103208152f35b503461031257610be36114eb36612129565b90604051926114fb6020856121b6565b858452610bdd8383836122f4565b5034610312576020366003190112610312576115236120ba565b61152b613147565b6001600160a01b03168015611550576001600160601b0360a01b600b541617600b5580f35b60405162461bcd60e51b815260206004820152602160248201527f496e76616c696420726f79616c747920726563697069656e74206164647265736044820152607360f81b6064820152608490fd5b5034610312576040366003190112610312576115b96120d0565b336001600160a01b038216036115d5576103cf9060043561325c565b63334bd91960e11b8252600482fd5b5034610312576040366003190112610312576103cf6004356116046120d0565b9061161e6103c5825f526007602052600160405f20015490565b6131d0565b50346103125760203660031901126103125761163d6120ba565b611645613147565b60018060a01b03166001600160601b0360a01b600d541617600d5580f35b5034610312576040366003190112610312576024359061032082029180830461032014901517156116af57600b54604080516001600160a01b0390921682526127108404602083015290f35b634e487b7160e01b81526011600452602490fd5b50346103125760203660031901126103125760206116ef6004355f526007602052600160405f20015490565b604051908152f35b503461031257610be361170936612129565b916122f4565b506040366003190112610312576004356001600160401b0381116104735761173b9036906004016120fc565b906024356001600160401b03811161046f57610457926104486117656117709336906004016120fc565b9490926104416125a2565b90336125e8565b506060366003190112611a4d5761178c6120ba565b6024356001600160401b038111611a4d576117ab9036906004016120fc565b604492919235906001600160401b038211611a4d576117df6117d46117e79336906004016120fc565b9590926104416125a2565b933691612292565b90600c543410611d725760085490600954821015611d3857611808826125da565b600855600e545f93906001600160a01b031680611cc5575b5060405161182d8161219b565b33815260208082018681524260408085019182525f60608601818152608087018c81528a8352600f909652919020945185546001600160a01b0319166001600160a01b0391909116178555915160018501555160028401555190916004821015611cb1576118a060049260038301612556565b0190518051906001600160401b038211611bdf5781906118c08454612163565b601f8111611c61575b50602090601f8311600114611bfe575f92611bf3575b50508160011b915f199060031b1c19161790555b8051611a94575b506040516119096020826121b6565b5f81526001600160a01b03821615611a81576001600160a01b0361192d8484613088565b16611a6e578261193d92336132e0565b600d546001600160a01b031680151580611a65575b6119c4575b50905f516020614be85f395f51905f5291611985858080803460018060a01b03600a54165af16113866124db565b604051913483526020830152604082015260806060820152806119ad33946080830190612096565b0390a260015f516020614bc85f395f51905f525580f35b66038d7ea4c6800083029083820466038d7ea4c680001484151715611a5157803b15611a4d576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af18015611a425715611957575f516020614be85f395f51905f52929194505f611a39916121b6565b5f939091611957565b6040513d5f823e3d90fd5b5f80fd5b634e487b7160e01b5f52601160045260245ffd5b50821515611952565b6339e3563760e11b5f525f60045260245ffd5b633250574960e11b5f525f60045260245ffd5b825f52600660205260405f20908051906001600160401b038211611bdf578190611abe8454612163565b601f8111611b8f575b50602090601f8311600114611b2c575f92611b21575b50508160011b915f199060031b1c19161790555b7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce76020604051848152a15f6118fa565b015190505f80611add565b5f8581528281209350601f198516905b818110611b775750908460019594939210611b5f575b505050811b019055611af1565b01515f1960f88460031b161c191690555f8080611b52565b92936020600181928786015181550195019301611b3c565b909150835f5260205f20601f840160051c81019160208510611bd5575b90601f859493920160051c01905b818110611bc75750611ac7565b5f8155849350600101611bba565b9091508190611bac565b634e487b7160e01b5f52604160045260245ffd5b015190505f806118df565b5f8581528281209350601f198516905b818110611c495750908460019594939210611c31575b505050811b0190556118f3565b01515f1960f88460031b161c191690555f8080611c24565b92936020600181928786015181550195019301611c0e565b909150835f5260205f20601f840160051c81019160208510611ca7575b90601f859493920160051c01905b818110611c9957506118c9565b5f8155849350600101611c8c565b9091508190611c7e565b634e487b7160e01b5f52602160045260245ffd5b60a060049160405192838092633fabe5a360e21b82525afa5f9181611d12575b5015611820575f81131561182057670de0b6b3a7640000919450611d0a90349061247c565b04925f611820565b611d2c91925060a03d60a01161148c5761147881836121b6565b5050509050905f611ce5565b60405162461bcd60e51b815260206004820152601260248201527113585e081cdd5c1c1b1e481c995858da195960721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526016602482015275446f6e6174696f6e2062656c6f77206d696e696d756d60501b6044820152606490fd5b34611a4d576040366003190112611a4d57611dc96120ba565b602435611dd58161256e565b33151580611e87575b80611e5a575b611e475781906001600160a01b0384811691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9255f80a45f90815260046020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b63a9fbf51f60e01b5f523360045260245ffd5b506001600160a01b0381165f90815260056020908152604080832033845290915290205460ff1615611de4565b506001600160a01b038116331415611dde565b34611a4d576020366003190112611a4d57600435611eb78161256e565b505f526004602052602060018060a01b0360405f205416604051908152f35b34611a4d575f366003190112611a4d576040515f5f54611ef581612163565b8084529060018116908115611f795750600114611f1d575b6109c283610fe8818503826121b6565b5f8080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563939250905b808210611f5f57509091508101602001610fe8611f0d565b919260018160209254838588010152019101909291611f47565b60ff191660208086019190915291151560051b84019091019150610fe89050611f0d565b34611a4d576020366003190112611a4d576020611fbb6004356122d5565b6040519015158152f35b34611a4d576020366003190112611a4d576004359063ffffffff60e01b8216809203611a4d5760209163152a902d60e11b8114908115612085575b811561200e575b5015158152f35b637965db0b60e01b811491508115612028575b5083612007565b632483248360e11b811491508115612042575b5083612021565b6380ac58cd60e01b811491508115612074575b8115612063575b508361203b565b6301ffc9a760e01b1490508361205c565b635b5e139f60e01b81149150612055565b6391a6262f60e01b81149150612000565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b600435906001600160a01b0382168203611a4d57565b602435906001600160a01b0382168203611a4d57565b604435906001600160a01b0382168203611a4d57565b9181601f84011215611a4d578235916001600160401b038311611a4d5760208381860195010111611a4d57565b6060906003190112611a4d576004356001600160a01b0381168103611a4d57906024356001600160a01b0381168103611a4d579060443590565b90600182811c92168015612191575b602083101461217d57565b634e487b7160e01b5f52602260045260245ffd5b91607f1691612172565b60a081019081106001600160401b03821117611bdf57604052565b90601f801991011681019081106001600160401b03821117611bdf57604052565b9060405191825f8254926121ea84612163565b80845293600181169081156122555750600114612211575b5061220f925003836121b6565b565b90505f9291925260205f20905f915b81831061223957505090602061220f928201015f612202565b6020919350806001915483858901015201910190918492612220565b90506020925061220f94915060ff191682840152151560051b8201015f612202565b6001600160401b038111611bdf57601f01601f191660200190565b92919261229e82612277565b916122ac60405193846121b6565b829481845281830111611a4d578281602093845f960137010152565b91908201809211611a5157565b5f52601060205260405f205462278d008101809111611a515742111590565b6001600160a01b0390911691908215611a81575f828152600260205260409020546001600160a01b0316928290331515806123e7575b50846123b4575b805f52600360205260405f2060018154019055815f52600260205260405f20816001600160601b0360a01b825416179055847fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a46001600160a01b031680830361239c57505050565b6364283d7b60e01b5f5260045260245260445260645ffd5b5f82815260046020526040902080546001600160a01b0319169055845f52600360205260405f205f198154019055612331565b9091508061242b575b156123fd5782905f61232a565b828461241557637e27328960e01b5f5260045260245ffd5b63177e802f60e01b5f523360045260245260445ffd5b50338414801561245a575b806123f057505f838152600460205260409020546001600160a01b031633146123f0565b505f84815260056020908152604080832033845290915290205460ff16612436565b81810292918115918404141715611a5157565b519069ffffffffffffffffffff82168203611a4d57565b908160a0910312611a4d576124ba8161248f565b916020820151916040810151916124d860806060840151930161248f565b90565b3d15612505573d906124ec82612277565b916124fa60405193846121b6565b82523d5f602084013e565b606090565b1561251157565b60405162461bcd60e51b815260206004820152601b60248201527f5472616e7366657220746f207472656173757279206661696c656400000000006044820152606490fd5b906004811015611cb15760ff80198354169116179055565b5f818152600260205260409020546001600160a01b0316908115612590575090565b637e27328960e01b5f5260045260245ffd5b60025f516020614bc85f395f51905f5254146125cb5760025f516020614bc85f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b5f198114611a515760010190565b9091600c543410611d725760085491600954831015611d385761260a836125da565b600855600e545f92906001600160a01b031680612a45575b5060405161262f8161219b565b33815260208082018581524260408085019182525f60608601818152608087018c81528b8352600f909652919020945185546001600160a01b0319166001600160a01b0391909116178555915160018501555160028401555190916004821015611cb1576126a260049260038301612556565b0190518051906001600160401b038211611bdf5781906126c28454612163565b601f81116129f5575b50602090601f8311600114612992575f92612987575b50508160011b915f199060031b1c19161790555b805161283c575b5060405161270b6020826121b6565b5f81526001600160a01b03821615611a81576001600160a01b0361272f8584613088565b16611a6e578361273f92336132e0565b600d546001600160a01b03169182151580612833575b6127b4575b5f516020614be85f395f51905f5292506127875f8080803460018060a01b03600a54165af16113866124db565b604051913483526020830152604082015260806060820152806127af33946080830190612096565b0390a2565b66038d7ea4c6800082029282840466038d7ea4c680001483151715611a5157803b15611a4d576040516340c10f1960e01b815233600482015260248101949094525f908490604490829084905af1928315611a42575f516020614be85f395f51905f5293612823575b5061275a565b5f61282d916121b6565b5f61281d565b50811515612755565b835f52600660205260405f20908051906001600160401b038211611bdf5781906128668454612163565b601f8111612937575b50602090601f83116001146128d4575f926128c9575b50508160011b915f199060031b1c19161790555b7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce76020604051858152a15f6126fc565b015190505f80612885565b5f8581528281209350601f198516905b81811061291f5750908460019594939210612907575b505050811b019055612899565b01515f1960f88460031b161c191690555f80806128fa565b929360206001819287860151815501950193016128e4565b909150835f5260205f20601f840160051c8101916020851061297d575b90601f859493920160051c01905b81811061296f575061286f565b5f8155849350600101612962565b9091508190612954565b015190505f806126e1565b5f8581528281209350601f198516905b8181106129dd57509084600195949392106129c5575b505050811b0190556126f5565b01515f1960f88460031b161c191690555f80806129b8565b929360206001819287860151815501950193016129a2565b909150835f5260205f20601f840160051c81019160208510612a3b575b90601f859493920160051c01905b818110612a2d57506126cb565b5f8155849350600101612a20565b9091508190612a12565b60a060049160405192838092633fabe5a360e21b82525afa5f9181612a92575b5015612622575f81131561262257670de0b6b3a7640000919350612a8a90349061247c565b04915f612622565b612aac91925060a03d60a01161148c5761147881836121b6565b5050509050905f612a65565b91929092600c54925f933410611d725760085491600954831015611d3857612adf836125da565b600855600e545f94906001600160a01b031680613015575b50604051612b048161219b565b33815260208082018781524260408085019182525f60608601818152608087018e81528b8352600f909652919020945185546001600160a01b0319166001600160a01b0391909116178555915160018501555160028401555190916004821015611cb157612b7760049260038301612556565b0190518051906001600160401b038211611bdf578190612b978454612163565b601f8111612fc5575b50602090601f8311600114612f62575f92612f57575b50508160011b915f199060031b1c19161790555b15612dff57825f52601160205260405f20908051906001600160401b038211611bdf578190612bf98454612163565b601f8111612daf575b50602090601f8311600114612d4c575f92612d41575b50508160011b915f199060031b1c19161790555b604051612c3a6020826121b6565b5f81526001600160a01b03821615611a81576001600160a01b03612c5e8484613088565b16611a6e5782612c6e92336132e0565b600d546001600160a01b031680151580612d38575b612cb4575b506127878380805f516020614be85f395f51905f52963460018060a01b03600a54165af16113866124db565b66038d7ea4c6800083029083820466038d7ea4c680001484151715611a5157803b15611a4d576040516340c10f1960e01b815233600482015260248101929092525f908290604490829084905af1938415611a42575f516020614be85f395f51905f5294612d24575b9350612c88565b505f612d2f916121b6565b6127875f612d1d565b50821515612c83565b015190505f80612c18565b5f8581528281209350601f198516905b818110612d975750908460019594939210612d7f575b505050811b019055612c2c565b01515f1960f88460031b161c191690555f8080612d72565b92936020600181928786015181550195019301612d5c565b909150835f5260205f20601f840160051c81019160208510612df5575b90601f859493920160051c01905b818110612de75750612c02565b5f8155849350600101612dda565b9091508190612dcc565b8051612e0c575b50612c2c565b825f52600660205260405f20908051906001600160401b038211611bdf578190612e368454612163565b601f8111612f07575b50602090601f8311600114612ea4575f92612e99575b50508160011b915f199060031b1c19161790555b7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce76020604051848152a15f612e06565b015190505f80612e55565b5f8581528281209350601f198516905b818110612eef5750908460019594939210612ed7575b505050811b019055612e69565b01515f1960f88460031b161c191690555f8080612eca565b92936020600181928786015181550195019301612eb4565b909150835f5260205f20601f840160051c81019160208510612f4d575b90601f859493920160051c01905b818110612f3f5750612e3f565b5f8155849350600101612f32565b9091508190612f24565b015190505f80612bb6565b5f8581528281209350601f198516905b818110612fad5750908460019594939210612f95575b505050811b019055612bca565b01515f1960f88460031b161c191690555f8080612f88565b92936020600181928786015181550195019301612f72565b909150835f5260205f20601f840160051c8101916020851061300b575b90601f859493920160051c01905b818110612ffd5750612ba0565b5f8155849350600101612ff0565b9091508190612fe2565b60a060049160405192838092633fabe5a360e21b82525afa5f9181613062575b5015612af7575f811315612af757670de0b6b3a764000091955061305a90349061247c565b04935f612af7565b61307c91925060a03d60a01161148c5761147881836121b6565b5050509050905f613035565b5f828152600260205260409020546001600160a01b0316919082613114575b6001600160a01b0316806130fc575b815f52600260205260405f20816001600160601b0360a01b825416179055827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5f80a490565b805f52600360205260405f20600181540190556130b6565b5f82815260046020526040902080546001600160a01b0319169055825f52600360205260405f205f1981540190556130a7565b335f9081527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df602052604090205460ff161561317f57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f81815260076020908152604080832033845290915290205460ff16156131ba5750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff16613256575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f8181526007602090815260408083206001600160a01b038616845290915290205460ff1615613256575f8181526007602090815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b9291813b6132ef575b50505050565b604051630a85bd0160e11b81526001600160a01b0394851660048201525f6024820152604481019190915260806064820152921691906020908290819061333a906084830190612096565b03815f865af15f91816133a9575b5061337657506133566124db565b805190816133715782633250574960e11b5f5260045260245ffd5b602001fd5b6001600160e01b03191663757a42ff60e11b0161339757505f8080806132e9565b633250574960e11b5f5260045260245ffd5b9091506020813d6020116133e6575b816133c5602093836121b6565b81010312611a4d57516001600160e01b031981168103611a4d57905f613348565b3d91506133b8565b823b6133fc575b5050505050565b604051630a85bd0160e11b81526001600160a01b039182166004820152918116602483015260448201939093526080606482015291169160209082908190613448906084830190612096565b03815f865af15f9181613486575b5061346457506133566124db565b6001600160e01b03191663757a42ff60e11b0161339757505f808080806133f5565b9091506020813d6020116134c3575b816134a2602093836121b6565b81010312611a4d57516001600160e01b031981168103611a4d57905f613456565b3d9150613495565b6134d48161256e565b506020906040516134e583826121b6565b5f8152815f52600683526134fb60405f206121d7565b8151156135745780849151613539575050506135169061256e565b505f60405161352583826121b6565b5261353360405191826121b6565b5f815290565b6124d8935081906040519584879551918291018487015e8401908282015f8152815193849201905e01015f815203601f1981018352826121b6565b9250505090565b601160536124d89261358c816122d5565b855190959015613961576135a0915061476f565b935b602094856040516135b382826121b6565b5f8152916040516135c56080826121b6565b604981528281017f66696c6c3a2077686974653b20666f6e742d66616d696c793a2073616e732d7381527f657269663b20666f6e742d73697a653a20323070783b20666f6e742d776569676040830152856868743a20626f6c643b60b81b6060840152613849575b600f9160828592603c97985f146138265760405161364c6040826121b6565b601781527f3c672066696c7465723d2275726c2823676c6f7729223e00000000000000000085820152925b6040519d8e9a7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f3230828d01527f30302f73766722207072657365727665417370656374526174696f3d22784d6960408d01527f6e594d696e206d656574222076696577426f783d22302030203335302033353060608d015261111f60f11b60808d0152805191829101858d015e8a01906e01e39ba3cb6329f173130b9b2903d9608d1b84830152518092609183015e01019069103e9e17b9ba3cb6329f60b11b848301527f3c726563742077696474683d223130302522206865696768743d223130302522601983015271103334b6361e91119b199b1b33189110179f60711b6039830152805192839101604b83015e0101907f3c7465787420783d223530252220793d223530252220636c6173733d22626173848301527f652220646f6d696e616e742d626173656c696e653d226d6964646c6522207465605c830152723c3a16b0b731b437b91e9136b4b2323632911f60691b607c830152805192839101608f83015e0101701e17ba32bc3a1f1e17b39f1e17b9bb339f60791b838201520301600e198101845201826121b6565b6040516138346040826121b6565b60038152621e339f60e91b8582015292613677565b603c9450600f916082859261010061386460405191826121b6565b60c181527f3c646566733e3c66696c7465722069643d22676c6f772220783d222d32302522858201527f20793d222d323025222077696474683d223134302522206865696768743d223160408201527f343025223e3c6665476175737369616e426c757220737464446576696174696f60608201527f6e3d22352220726573756c743d22626c7572222f3e3c6665436f6d706f73697460808201527f6520696e3d22536f75726365477261706869632220696e323d22626c7572222060a08201527f6f70657261746f723d226f766572222f3e3c2f66696c7465723e3c2f6465667360c0820152601f60f91b60e08201529750925050915061362d565b506139a96029613972602093614607565b60405193849168427261674e4654202360b81b828401528051918291018484015e81015f838201520301601f1981018352826121b6565b936135a2565b9081518110156139c0570160200190565b634e487b7160e01b5f52603260045260245ffd5b8051906004821061325657600b821015613ea0575b6003198201828111611a5157601760f91b6001600160f81b0319613a0d83856139af565b511614613b63575b600583101580613b34575b613a2c575b5050505f90565b613a4b906001600160f81b031990613a4490846139af565b5116614b88565b906002198301838111611a5157613a70906001600160f81b031990613a4490846139af565b926001198101818111611a5157613a95906001600160f81b031990613a4490856139af565b915f198201918211611a5157613a44613ab39260ff60f81b926139af565b6001600160f81b0319909216607760f81b149283613b1c575b5082613b04575b5081613aec575b50613ae7575f8080613a25565b600190565b6001600160f81b031916606d60f81b1490505f613ada565b6001600160f81b031916603160f91b1491505f613ad3565b6001600160f81b031916606560f81b1492505f613acc565b506004198301838111611a5157601760f91b906001600160f81b031990613b5b90856139af565b511614613a20565b6002198301838111611a5157613b87906001600160f81b031990613a4490856139af565b6001198401848111611a5157613bab906001600160f81b031990613a4490866139af565b905f198501858111611a5157613bcf906001600160f81b031990613a4490876139af565b906001600160f81b031916606d60f81b81148080613e89575b80613e72575b613d1757607760f81b821480613e5b575b80613e44575b613d1757606f60f81b82148080613e2d575b80613e16575b613d51578180613dff575b80613de8575b613d5157606160f81b831480613dd1575b80613dba575b613d51578180613da3575b80613d8c575b613d51578180613d75575b80613d5e575b613d515780613d3a575b80613d23575b613d175780613d00575b80613ce9575b613cde57606760f81b149182613cc6575b5081613cae575b5015613a15575b505050600190565b6001600160f81b031916603360f91b1490505f613c9f565b6001600160f81b031916606960f81b1491505f613c98565b505050505050600190565b506001600160f81b03198216603b60f91b14613c87565b506001600160f81b03198316600d60fa1b14613c81565b50505050505050600190565b506001600160f81b03198316603b60f91b14613c77565b506001600160f81b03198416606760f81b14613c71565b5050505050505050600190565b506001600160f81b03198416603b60f91b14613c67565b506001600160f81b03198516606f60f81b14613c61565b506001600160f81b03198416600d60fa1b14613c56565b506001600160f81b03198516600760fc1b14613c50565b506001600160f81b03198416606360f81b14613c45565b506001600160f81b03198516606160f81b14613c3f565b506001600160f81b03198416606160f81b14613c2e565b506001600160f81b03198516600d60fa1b14613c28565b506001600160f81b03198416606760f81b14613c1d565b506001600160f81b03198516606760f81b14613c17565b506001600160f81b03198316603b60f91b14613c05565b506001600160f81b03198416606160f81b14613bff565b506001600160f81b03198316603360f81b14613bee565b506001600160f81b03198416600760fc1b14613be8565b81156139c05760208101516001600160f81b031916601960fa1b14806142cd575b806142a8575b80614283575b8061425e575b156139e9578051600510156139c0576025810180516001600160f81b031916606160f81b1480614239575b80614214575b806141ef575b806141ca575b806141a5575b613ca6578151600510156139c05780516001600160f81b031916603b60f91b1480614180575b8061415b575b80614136575b80614111575b806140ec575b613ca657600e83101590816140c9575b50806140a4575b8061407f575b8061405a575b80614035575b80614010575b80613feb575b80613fc6575b80613fa1575b156139e9575050600190565b508051600d10156139c057602d8101516001600160f81b031916603360f91b14613f95565b508051600c10156139c057602c8101516001600160f81b031916606960f81b14613f8f565b508051600b10156139c057602b8101516001600160f81b031916606760f81b14613f89565b508051600a10156139c057602a8101516001600160f81b031916602f60f81b14613f83565b508051600910156139c05760298101516001600160f81b031916606560f81b14613f7d565b508051600810156139c05760288101516001600160f81b031916606760f81b14613f77565b508051600710156139c05760278101516001600160f81b031916606160f81b14613f71565b508051600610156139c05760268101516001600160f81b031916606d60f81b14613f6b565b90508151600510156139c057516001600160f81b031916606960f81b145f613f64565b508151600a10156139c057602a8201516001600160f81b031916602f60f81b14613f54565b508151600910156139c05760298201516001600160f81b031916606f60f81b14613f4e565b508151600810156139c05760288201516001600160f81b031916606560f81b14613f48565b508151600710156139c05760278201516001600160f81b031916601960fa1b14613f42565b508151600610156139c05760268201516001600160f81b031916606960f81b14613f3c565b508151600a10156139c057602a8201516001600160f81b031916602f60f81b14613f16565b508151600910156139c05760298201516001600160f81b031916606f60f81b14613f10565b508151600810156139c05760288201516001600160f81b031916606960f81b14613f0a565b508151600710156139c05760278201516001600160f81b031916601960fa1b14613f04565b508151600610156139c05760268201516001600160f81b031916607560f81b14613efe565b508051600410156139c05760248101516001600160f81b031916601d60f91b14613ed3565b508051600310156139c05760238101516001600160f81b031916606160f81b14613ecd565b508051600210156139c05760228101516001600160f81b031916601d60fa1b14613ec7565b508051600110156139c05760218101516001600160f81b031916606160f81b14613ec1565b906142fc82612277565b61430960405191826121b6565b828152809261431a601f1991612277565b0190602036910137565b80515f5f5b8281106144c5575080156144c05761434461434991836122c8565b6142f2565b915f5f915b83831061435c575050505090565b61436683826139af565b51928360f81c6022811480156144b6575b156143c1575082605c61439661438f600195966125da565b92896139af565b536143b76143a3826125da565b956001600160f81b0319165f1a91886139af565b535b01919061434e565b60208110156144a4576144858495605c6143e76143e0600197986125da565b988b6139af565b5360756143f66143e0896125da565b5360306144056143e0896125da565b5360306144146143e0896125da565b53604090614424825192836121b6565b601082526f181899199a1a9b1b9c1cb0b131b232b360811b60208301526001600160f81b0319906144589060fc1c836139af565b511696614471614467826125da565b985f1a918b6139af565b536001600160f81b031992600f16906139af565b51169361449e614494826125da565b955f1a91886139af565b536143b9565b508261449e6143a360019495926125da565b50605c8114614377565b505090565b90601160f91b6001600160f81b03196144de84876139af565b5116148015614531575b15614500576144f86001916125da565b915b01614329565b90602061450d82866139af565b5160f81c1061451f575b6001906144fa565b9060058101809111611a515790614517565b50601760fa1b6001600160f81b031961454a84876139af565b5116146144e8565b6004811015611cb15780156145e157600181146145ba576002146145955760405161457e6040826121b6565b6007815266119b1859d9d95960ca1b602082015290565b6040516145a36040826121b6565b600781526610db185a5b595960ca1b602082015290565b506040516145c96040826121b6565b600881526715995c9a599a595960c21b602082015290565b506040516145f06040826121b6565b600781526650656e64696e6760c81b602082015290565b805f9172184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b82101561474c575b806d04ee2d6d415b85acef8100000000600a921015614731575b662386f26fc1000081101561471d575b6305f5e10081101561470c575b6127108110156146fd575b60648110156146ef575b10156146e4575b600a6021600184019361468e85612277565b9461469c60405196876121b6565b8086526146ab601f1991612277565b013660208701378401015b5f1901916f181899199a1a9b1b9c1cb0b131b232b360811b8282061a83530480156144c057600a90916146b6565b60019091019061467c565b606460029104930192614675565b6127106004910493019261466b565b6305f5e10060089104930192614660565b662386f26fc1000060109104930192614653565b6d04ee2d6d415b85acef810000000060209104930192614643565b506040915072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8104614629565b80515f5f5b82811061494f575080156144c05761434461478f91836122c8565b915f905f5b8381106147a2575050505090565b6001600160f81b03196147b582846139af565b5116601360f91b810361481f575060019060266147db6147d4866125da565b95886139af565b5360616147ea6147d4866125da565b53606d6147f96147d4866125da565b5360706148086147d4866125da565b53603b6148176147d4866125da565b535b01614794565b600f60fa1b810361486f5750600190602661483c6147d4866125da565b53606c61484b6147d4866125da565b53607461485a6147d4866125da565b53603b6148696147d4866125da565b53614819565b601f60f91b810361489b5750600190602661488c6147d4866125da565b53606761484b6147d4866125da565b601160f91b81036148e5575060019060266148b86147d4866125da565b5360716148c76147d4866125da565b5360756148d66147d4866125da565b53606f61484b6147d4866125da565b602760f81b810361493e575060019060266149026147d4866125da565b5360616149116147d4866125da565b5360706149206147d4866125da565b53606f61492f6147d4866125da565b53607361485a6147d4866125da565b9260019190614869614494826125da565b90601360f91b6001600160f81b031961496884876139af565b5116036149855760048101809111611a5157600190915b01614774565b600f60fa1b6001600160f81b031961499d84876139af565b5116036149b85760038101809111611a51576001909161497f565b601f60f91b6001600160f81b03196149d084876139af565b5116036149eb5760038101809111611a51576001909161497f565b601160f91b6001600160f81b0319614a0384876139af565b511603614a1e5760058101809111611a51576001909161497f565b90602760f81b6001600160f81b0319614a3783876139af565b511614614a47575b60019061497f565b9060058101809111611a515790614a3f565b90815115614b7857815160028101809111611a515760039004600281901b91906001600160fe1b03811603611a5157604051917f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f603f52602083018480518101602081018051915f82525b808910614b3c5750602095969750906003929152510680600114614b2757600214614b1a575b50808452830101604052565b603d905f1901535f614b0e565b50603d90815f1982015360011901535f614b0e565b939760036004910198603f8a51818160121c165183538181600c1c16516001840153818160061c16516002840153165160038201530193614ae8565b90506040516135336020826121b6565b8060f81c604181101580614bbc575b614b9f575090565b602091500160ff8111611a515760f81b6001600160f81b03191690565b50605a811115614b9756fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00eb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f377a264697066735822122085630c42cf9c056578a0d5e3a1f00025722c148f41bbbd23f166cd99121639b964736f6c634300081c00336d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df"
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
              "name": "nftContract",
              "type": "address"
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
          "name": "moveBatch1155",
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
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "moveBatch1155WithDuration",
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
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "nftContract",
              "type": "address"
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
            }
          ],
          "name": "withdrawBatch1155",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "bytecode": "0x608034609357601f612bd838819003918201601f19168301916001600160401b03831184841017609757808492602094604052833981010312609357516001600160a01b0381169081900360935760017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00555f80546001600160a01b031916919091179055604051612b2c90816100ac8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a714611ec657508063025f75ac14611dce5780630412619614611d8a578063150b7a0214611a275780632f3ef602146117535780632ff1d0f914611721578063358d48d91461167257806335f81b87146113dd578063380ff999146113945780635daa63c7146111755780636f39becd146111295780637b103999146111025780637b606fdc1461101457806381bd34d214610fcb578063bc197c8114610bc8578063c10e515314610b0c578063c2fe5185146108e4578063c555abb414610587578063d6bd07ee1461054c578063d74238581461052c578063f07a380e146104ea5763f23a6e6114610110575f80fd5b346104e75760a03660031901126104e757610129611f5f565b610131611f75565b60443591606435916084356001600160401b0381116104c957610158903690600401611ff1565b916101616123ba565b6001600160a01b03821691826104e057505b85918351602081145f146103f95750865460405163b9209e3360e01b81526004810192909252602090829060249082906001600160a01b03165afa9081156103ee5787916103b0575b501561038d5750602082805181010312610389576024916001600160a01b03906101e89060200161215d565b16905b3386526002602052604086208587526020526040862060018060a01b0383165f5260205260405f2061021e85825461218e565b9055801561038257610230904261218e565b3386526004602052604086208587526020526040862060018060a01b0383165f5260205260405f20548111610353575b5084546040516390229af760e01b815230600482015292869184919082906001600160a01b03165afa801561034857604080917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa35948891610326575b5001519533815260046020528181208682526020522060018060a01b0382165f5260205260405f20549061030060405192839260018060a01b031697339684612398565b0390a460015f516020612ab75f395f51905f525560405163f23a6e6160e01b8152602090f35b61034291503d808a833e61033a8183611fa1565b8101906121f5565b5f6102bc565b6040513d87823e3d90fd5b3386526004602052604086208587526020526040862060018060a01b0383165f5260205260405f20555f610260565b5084610230565b8480fd5b9050602082519281808201948592010103126103ac57602491516101eb565b5f80fd5b90506020813d6020116103e6575b816103cb60209383611fa1565b810103126103e2576103dc90612150565b5f6101bc565b8680fd5b3d91506103be565b6040513d89823e3d90fd5b91929160401461040e575b50602492506101eb565b865460405163b9209e3360e01b81526004810192909252909150602090829060249082906001600160a01b03165afa9081156104d5578691610497575b501561047a575061046781602080602494518301019101612171565b6001600160a01b03909116905b5f610404565b602082519281808201948592010103126103ac5760249151610474565b90506020813d6020116104cd575b816104b260209383611fa1565b810103126104c9576104c390612150565b5f61044b565b8580fd5b3d91506104a5565b6040513d88823e3d90fd5b9050610173565b80fd5b50346104e75760403660031901126104e757610518610507611f5f565b61050f6123ba565b60243590612815565b60015f516020612ab75f395f51905f525580f35b50346104e75761051861053e36612037565b916105476123ba565b61290d565b50346104e75760803660031901126104e757610518610569611f5f565b610571611f49565b9061057a6123ba565b604435906024359061243e565b50346104e75760a03660031901126104e7576105a1611f5f565b906024356001600160401b0381116108e0576105c1903690600401611f19565b90926044356001600160401b0381116108dc576105e2903690600401611f19565b9490926105ed611f49565b906084356105f96123ba565b6106048883146120d8565b865460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa80156108d1578990610892575b61064e91509491946123f2565b6001600160a01b039093169233885b84811061076d575050509686978015155f1461074e57604080513360208201529081019190915261069b81606081015b03601f198101835282611fa1565b945b833b1561074a5761070688966106f46106e29989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a4890191612360565b86810360031901606488015291612360565b838103600319016084850152906122a0565b03925af1801561073f5761072a575b5060015f516020612ab75f395f51905f525580f35b8161073491611fa1565b6104e757805f610715565b6040513d84823e3d90fd5b8780fd5b5060405133602082015260208152610767604082611fa1565b9461069d565b808b610788826107806001958a8d612118565b35928d612118565b3590888d5260026020528c8160408220915260205260408d20855f526020526107b78260405f205410156122c4565b888d5260046020528c8160408220915260205260408d20855f526020526107e460405f2054421015612307565b888d5260026020528c8160408220915260205260408d20855f5260205260405f20610810838254612353565b9055888d5260026020528c8160408220915260205260408d20855f5260205260405f20541561086a575b604080519283526001600160a01b038716602084015233928a915f516020612ad75f395f51905f5291a40161065d565b888d5260046020528c8160408220915260205260408d20855f526020528c60405f205561083a565b506020813d6020116108c9575b816108ac60209383611fa1565b810103126108c5576108c061064e91612150565b610641565b8880fd5b3d915061089f565b6040513d8b823e3d90fd5b8380fd5b5080fd5b50346104e75760803660031901126104e7576108fe611f5f565b602435610909611f8b565b9183606435916109176123ba565b60018060a01b03169182825260016020526040822084835260205261094960018060a01b0360408420541633146127d9565b815460405163b9209e3360e01b81526001600160a01b039687166004820181905296909160209183916024918391165afa8015610b01578390610ac2575b61099191506123f2565b8282526003602052604082208483526020526109b36040832054421015612307565b828252600160209081526040808420868552909152822080546001600160a01b03191690558015610aa45760408051336020820152908101919091526109fc816060810161068d565b823b156108e05781610a3c9160405180938192635c46a7ef60e11b83523060048401528960248401528860448401526080606484015260848301906122a0565b038183875af1801561073f57610a8f575b50506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a460015f516020612ab75f395f51905f525580f35b81610a9991611fa1565b6108dc57835f610a4d565b5060405133602082015260208152610abd604082611fa1565b6109fc565b506020813d602011610af9575b81610adc60209383611fa1565b81010312610af557610af061099191612150565b610987565b8280fd5b3d9150610acf565b6040513d85823e3d90fd5b50346104e75760603660031901126104e7576004356001600160401b0381116108e057610b3d903690600401611f19565b6024356001600160401b0381116108dc57610b5c903690600401611f19565b610b64611f8b565b92610b6d6123ba565b610b788282146120d8565b855b818110610b96578660015f516020612ab75f395f51905f525580f35b80610bc286610bb0610bab600195878c612118565b61213c565b610bbb84888a612118565b359061290d565b01610b7a565b50346104e75760a03660031901126104e757610be2611f5f565b90610beb611f75565b906044356001600160401b0381116108e057610c0b903690600401612071565b926064356001600160401b038111610af557610c2b903690600401612071565b906084356001600160401b0381116108dc57610c4b903690600401611ff1565b90610c546123ba565b6001600160a01b0385169485610fc457505b83948251602081145f14610ef25750845460405163b9209e3360e01b81526004810192909252602090829060249082906001600160a01b03165afa908115610348578591610eb8575b5015610e9c5750602081805181010312610af5576001600160a01b0390610cd89060200161215d565b16925b8015610e9557610ceb904261218e565b82546040516390229af760e01b8152306004820152908490829060249082906001600160a01b03165afa908115610e8a57906040918591610e70575b50015192805b8651811015610e4d5780610d4360019289612384565b51610d4e8287612384565b519033855260026020526040852081865260205260408520848060a01b038a165f5260205260405f20610d8283825461218e565b905533855260046020526040852081865260205260408520848060a01b038a165f5260205260405f20548611610e1f575b33855260046020526040852081865260205260408520848060a01b038a165f5260205260405f2054917f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa3560405180610e168d898060a01b0316968d339684612398565b0390a401610d2d565b33855260046020526040852081865260205260408520848060a01b038a165f526020528560405f2055610db3565b60015f516020612ab75f395f51905f525560405163bc197c8160e01b8152602090f35b610e8491503d8087833e61033a8183611fa1565b5f610d27565b6040513d86823e3d90fd5b5081610ceb565b9350602081519181808201938492010103126103ac5751610cdb565b90506020813d602011610eea575b81610ed360209383611fa1565b8101031261038957610ee490612150565b5f610caf565b3d9150610ec6565b91959291604014610f05575b5050610cdb565b9092949150602060018060a01b038554169160246040518094819363b9209e3360e01b835260048301525afa908115610e8a578491610f8a575b5015610f6e575080602080610f5993518301019101612171565b6001600160a01b0390911692905b5f80610efe565b9290602081519181808201938492010103126103ac5751610f67565b90506020813d602011610fbc575b81610fa560209383611fa1565b810103126108dc57610fb690612150565b5f610f3f565b3d9150610f98565b9050610c66565b50346104e7576040610fdc36612037565b939160018060a01b031682526002602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346104e75760603660031901126104e7576004356001600160401b0381116108e057611045903690600401611f19565b6024356001600160401b0381116108dc57611064903690600401611f19565b6044929192356001600160401b0381116104c957611086903690600401611f19565b9190926110916123ba565b818114806110f9575b6110a3906120d8565b865b8181106110c1578760015f516020612ab75f395f51905f525580f35b806110f36110d5610bab600194868c612118565b6110e083878b612118565b356110ec84898b612118565b3591612668565b016110a5565b5081831461109a565b50346104e757806003193601126104e757546040516001600160a01b039091168152602090f35b50346104e75760403660031901126104e7576020906001600160a01b0361114e611f5f565b168152600182526040812060243582528252604060018060a01b0391205416604051908152f35b50346104e75760603660031901126104e75761118f611f5f565b906024356001600160401b0381116108e0576111af903690600401611f19565b6044356001600160401b0381116108dc576111ce903690600401611f19565b9290916111d96123ba565b6111e48482146120d8565b33956001600160a01b031690855b8181106112725750859650813b156104c95785602061123f82966106e298604051998a988997631759616b60e11b89523060048a01523360248a015260a060448a015260a4890191612360565b8284820391600319830160848701525201925af1801561073f5761072a575060015f516020612ab75f395f51905f525580f35b806112806001928487612118565b3561128c828989612118565b3590858a52600260205260408a20818b5260205260408a208b5f526020526112ba8260405f205410156122c4565b858a52600460205260408a20818b5260205260408a208b5f526020526112e660405f2054421015612307565b858a52600260205260408a20818b5260205260408a208b5f5260205260405f20611311838254612353565b9055858a52600260205260408a20818b5260205260408a208b5f5260205260405f20541561136d575b604051918252857fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a4016111f2565b858a52600460205260408a20818b5260205260408a208b5f526020528960405f205561133a565b50346104e75760406113a536612037565b939160018060a01b031682526004602052828220908252602052209060018060a01b03165f52602052602060405f2054604051908152f35b50346104e75760a03660031901126104e7576113f7611f5f565b60243560443591611406611f49565b84608435926114136123ba565b6001600160a01b03168082526002602090815260408084208785528252808420335f908152925290205490939061144c908711156122c4565b815460405163b9209e3360e01b81526001600160a01b0385811660048301819052939260209183916024918391165afa8015610e8a578490611637575b61149391506123f2565b8483526004602090815260408085208886528252808520335f90815292529020546114c090421015612307565b8483526002602052604083208684526020526040832060018060a01b0333165f5260205260405f206114f3888254612353565b90558483526002602090815260408085208886528252808520335f90815292529020541561160f575b80156115f0576040805133602082015290810191909152611540816060810161068d565b905b843b15610af5576115899183916040519384928392637921219560e11b845230600485015260248401528960448401528a606484015260a0608484015260a48301906122a0565b038183885af1801561073f576115db575b5050604080519485526001600160a01b0391909116602085015233935f516020612ad75f395f51905f529190a460015f516020612ab75f395f51905f525580f35b816115e591611fa1565b61038957845f61159a565b5060405133602082015260208152611609604082611fa1565b90611542565b8483526004602090815260408085208886528252808520335f9081529252902083905561151c565b506020813d60201161166a575b8161165160209383611fa1565b810103126108dc5761166561149391612150565b611489565b3d9150611644565b50346104e75760403660031901126104e7576004356001600160401b0381116108e0576116a3903690600401611f19565b6024356001600160401b0381116108dc576116c2903690600401611f19565b90916116cc6123ba565b6116d78282146120d8565b845b8181106116f5578560015f516020612ab75f395f51905f525580f35b8061171b611709610bab600194868a612118565b611714838789612118565b3590612815565b016116d9565b50346104e75760603660031901126104e75761051861173e611f5f565b6117466123ba565b6044359060243590612668565b50346103ac5760803660031901126103ac5761176d611f5f565b6024356001600160401b0381116103ac5761178c903690600401611f19565b91906044356001600160401b0381116103ac576117ad903690600401611f19565b90936117b7611f49565b916117c06123ba565b6117cb8183146120d8565b5f5460405163b9209e3360e01b81526001600160a01b0385811660048301819052979260209183916024918391165afa80156118c2575f906119ec575b61181591509491946123f2565b6001600160a01b0390931692335f5b8481106118cd575050506040519433602087015260208652611847604087611fa1565b833b156103ac5761188c5f966106f46106e29989956040519b8c9a8b998a98631759616b60e11b8a523060048b015260248a015260a060448a015260a4890191612360565b03925af180156118c2576118af575060015f516020612ab75f395f51905f525580f35b6118bb91505f90611fa1565b5f5f610715565b6040513d5f823e3d90fd5b806118db600192878a612118565b356118e782878d612118565b3590885f52600260205260405f20815f5260205260405f20855f526020526119158260405f205410156122c4565b885f52600460205260405f20815f5260205260405f20855f5260205261194160405f2054421015612307565b885f52600260205260405f20815f5260205260405f20855f5260205260405f2061196c838254612353565b9055885f52600260205260405f20815f5260205260405f20855f5260205260405f2054156119c5575b604080519283526001600160a01b038716602084015233928a915f516020612ad75f395f51905f5291a401611824565b885f52600460205260405f20815f5260205260405f20855f526020525f6040812055611995565b506020813d602011611a1f575b81611a0660209383611fa1565b810103126103ac57611a1a61181591612150565b611808565b3d91506119f9565b346103ac5760803660031901126103ac57611a40611f5f565b611a48611f75565b90604435906064356001600160401b0381116103ac57611a6c903690600401611ff1565b90611a756123ba565b6001600160a01b0384169384611d8357505b5f938251602081145f14611cae57505f5460405163b9209e3360e01b81526004810192909252602090829060249082906001600160a01b03165afa9081156118c2575f91611c74575b5015611c5857506020818051810103126103ac576001600160a01b0390611af99060200161215d565b16915b335f908152600160209081526040808320858452909152902080546001600160a01b0319166001600160a01b0390941693841790558015611c5157611b41904261218e565b335f52600360205260405f20825f5260205260405f20548111611c34575b505f80546040516390229af760e01b81523060048201529190829060249082906001600160a01b03165afa80156118c2576040915f91611c1a575b500151335f52600360205260405f20825f526020527f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad360405f205491611beb604051916040835260408301906122a0565b9260208201528033930390a460015f516020612ab75f395f51905f5255604051630a85bd0160e11b8152602090f35b611c2e91503d805f833e61033a8183611fa1565b84611b9a565b335f52600360205260405f20825f5260205260405f205582611b5f565b505f611b41565b9250602081519181808201938492010103126103ac5751611afc565b90506020813d602011611ca6575b81611c8f60209383611fa1565b810103126103ac57611ca090612150565b85611ad0565b3d9150611c82565b91949291604014611cc1575b5050611afc565b5f5460405163b9209e3360e01b8152600481019290925291925090602090829060249082906001600160a01b03165afa9081156118c2575f91611d49575b5015611d2f57611d1a91925060208082518301019101612171565b6001600160a01b0390911691905b8380611cba565b602081519181808201938492010103126103ac5751611d28565b90506020813d602011611d7b575b81611d6460209383611fa1565b810103126103ac57611d7590612150565b84611cff565b3d9150611d57565b9050611a87565b346103ac5760403660031901126103ac576001600160a01b03611dab611f5f565b165f52600360205260405f206024355f52602052602060405f2054604051908152f35b346103ac5760803660031901126103ac576004356001600160401b0381116103ac57611dfe903690600401611f19565b906024356001600160401b0381116103ac57611e1e903690600401611f19565b9190926044356001600160401b0381116103ac57611e40903690600401611f19565b9490611e4a611f49565b92611e536123ba565b85811480611ebd575b611e65906120d8565b5f5b818110611e815760015f516020612ab75f395f51905f5255005b80611eb786898b611eb085611ea881611ea18f60019b8d610bab92612118565b958d612118565b35928a612118565b359161243e565b01611e67565b50858714611e5c565b346103ac5760203660031901126103ac576004359063ffffffff60e01b82168092036103ac57602091630271189760e51b8114908115611f08575b5015158152f35b6301ffc9a760e01b14905083611f01565b9181601f840112156103ac578235916001600160401b0383116103ac576020808501948460051b0101116103ac57565b606435906001600160a01b03821682036103ac57565b600435906001600160a01b03821682036103ac57565b602435906001600160a01b03821682036103ac57565b604435906001600160a01b03821682036103ac57565b90601f801991011681019081106001600160401b03821117611fc257604052565b634e487b7160e01b5f52604160045260245ffd5b6001600160401b038111611fc257601f01601f191660200190565b81601f820112156103ac5780359061200882611fd6565b926120166040519485611fa1565b828452602083830101116103ac57815f926020809301838601378301015290565b60609060031901126103ac576004356001600160a01b03811681036103ac5790602435906044356001600160a01b03811681036103ac5790565b9080601f830112156103ac578135916001600160401b038311611fc2578260051b90604051936120a46020840186611fa1565b84526020808501928201019283116103ac57602001905b8282106120c85750505090565b81358152602091820191016120bb565b156120df57565b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b91908110156121285760051b0190565b634e487b7160e01b5f52603260045260245ffd5b356001600160a01b03811681036103ac5790565b519081151582036103ac57565b51906001600160a01b03821682036103ac57565b91908260409103126103ac5760206121888361215d565b92015190565b9190820180921161219b57565b634e487b7160e01b5f52601160045260245ffd5b81601f820112156103ac578051906121c682611fd6565b926121d46040519485611fa1565b828452602083830101116103ac57815f9260208093018386015e8301015290565b6020818303126103ac578051906001600160401b0382116103ac57016080818303126103ac5760405191608083018381106001600160401b03821117611fc25760405261224182612150565b8352602082015160ff811681036103ac57602084015260408201516001600160401b0381116103ac57816122769184016121af565b604084015260608201516001600160401b0381116103ac5761229892016121af565b606082015290565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b156122cb57565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b1561230e57565b60405162461bcd60e51b815260206004820152601a60248201527f45786869626974696f6e206e6f742079657420657870697265640000000000006044820152606490fd5b9190820391821161219b57565b81835290916001600160fb1b0383116103ac5760209260051b809284830137010190565b80518210156121285760209160051b010190565b9392916123b59060409286526060602087015260608601906122a0565b930152565b60025f516020612ab75f395f51905f5254146123e35760025f516020612ab75f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b156123f957565b60405162461bcd60e51b815260206004820152601860248201527f44657374696e6174696f6e206e6f7420766572696669656400000000000000006044820152606490fd5b6001600160a01b03165f81815260026020908152604080832085845282528083203384529091529020549293919290919061247b908511156122c4565b5f5460405163b9209e3360e01b81526001600160a01b0383811660048301819052939260209183916024918391165afa80156118c2575f9061262d575b6124c291506123f2565b5f83815260046020908152604080832087845282528083203384529091529020546124ef90421015612307565b825f52600260205260405f20845f5260205260405f2060018060a01b0333165f5260205260405f20612522868254612353565b90555f838152600260209081526040808320878452825280832033845290915290205415612607575b6040519133602084015260208352612564604084611fa1565b833b156103ac576125ab925f916040519485928392637921219560e11b8452306004850152602484015288604484015289606484015260a0608484015260a48301906122a0565b038183875af19081156118c2575f516020612ad75f395f51905f52926125f2926125f7575b50604080519687526001600160a01b0390911660208701523395918291820190565b0390a4565b5f61260191611fa1565b5f6125d0565b5f838152600460209081526040808320878452825280832033845290915281205561254b565b506020813d602011612660575b8161264760209383611fa1565b810103126103ac5761265b6124c291612150565b6124b8565b3d915061263a565b6001600160a01b03165f818152600260209081526040808320858452825280832033845290915290205461269e908411156122c4565b5f81815260046020908152604080832085845282528083203384529091529020546126cb90421015612307565b805f52600260205260405f20825f5260205260405f2060018060a01b0333165f5260205260405f206126fe848254612353565b90555f8181526002602090815260408083208584528252808320338452909152902054156127b3575b803b156103ac57604051637921219560e11b815230600482015233602482015282604482015283606482015260a060848201525f60a48201525f8160c48183865af180156118c2576127a3575b506040519283527fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f960203394a4565b5f6127ad91611fa1565b5f612774565b5f8181526004602090815260408083208584528252808320338452909152812055612727565b156127e057565b60405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b6044820152606490fd5b6001600160a01b039081165f818152600160209081526040808320868452909152812054909392612848911633146127d9565b805f52600360205260405f20825f5260205261286a60405f2054421015612307565b805f52600160205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055803b156103ac57604051632142170760e11b8152306004820152336024820152604481018390525f8160648183865af180156118c2576128f8575b507f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c06339380a4565b6129059193505f90611fa1565b5f915f6128d0565b60018060a01b0316805f52600160205260405f20825f5260205261293e60018060a01b0360405f20541633146127d9565b5f5460405163b9209e3360e01b81526001600160a01b039485166004820181905294909160209183916024918391165afa80156118c2575f90612a7b575b61298691506123f2565b805f52600360205260405f20825f526020526129a860405f2054421015612307565b805f52600160205260405f20825f5260205260405f206bffffffffffffffffffffffff60a01b8154169055604051336020820152602081526129eb604082611fa1565b813b156103ac575f612a2b9160405180938192635c46a7ef60e11b83523060048401528860248401528760448401526080606484015260848301906122a0565b038183865af180156118c257612a6b575b506040519283527f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d7960203394a4565b5f612a7591611fa1565b5f612a3c565b506020813d602011612aae575b81612a9560209383611fa1565b810103126103ac57612aa961298691612150565b61297c565b3d9150612a8856fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00d582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd1a26469706673582212203b20ab08ab6b7bc625c37bd87681beb4a9e6c96e268f1def7fd652e3f71d0ef264736f6c634300081c0033"
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
      "bytecode": "0x608034608557601f61051738819003918201601f19168301916001600160401b038311848410176089578084926040948552833981010312608557604b6020604583609d565b9201609d565b5f80546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560405161046690816100b18239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b038216820360855756fe6080806040526004361015610050575b50361561001a575f80fd5b60405162461bcd60e51b815260206004820152600e60248201526d4920616d206d616c6963696f757360901b6044820152606490fd5b5f905f3560e01c908163150b7a02146102d6575080631afed875146100d6578063abc8c7af146100af5763d56d229d0361000f57346100ac57806003193601126100ac576001546040516001600160a01b039091168152602090f35b80fd5b50346100ac57806003193601126100ac57546040516001600160a01b039091168152602090f35b50346100ac5760403660031901126100ac578054604051633013ce2960e01b815282916024359190602090829060049082906001600160a01b03165afa90811561025f578391610290575b506040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03919091169060208160648187865af18015610285576101a792602092859261026a575b50855460405163095ea7b360e01b81526001600160a01b039091166004820152602481019290925290928391908290879082906044820190565b03925af1801561025f57610232575b5081546001546001600160a01b0391821692911690823b1561022d5760848492836040519586948593636c4c557960e11b8552600485015260043560248501526001604485015260648401525af18015610222576102115750f35b8161021b916103e2565b6100ac5780f35b6040513d84823e3d90fd5b505050fd5b6102539060203d602011610258575b61024b81836103e2565b810190610418565b6101b6565b503d610241565b6040513d85823e3d90fd5b61028090843d86116102585761024b81836103e2565b61016d565b6040513d86823e3d90fd5b90506020813d6020116102ce575b816102ab602093836103e2565b810103126102ca57516001600160a01b03811681036102ca575f610121565b5050fd5b3d915061029e565b346103b25760803660031901126103b2576102ef6103b6565b506102f86103cc565b5060643567ffffffffffffffff81116103b257366023820112156103b257806004013567ffffffffffffffff81116103b257369101602401116103b2575f546001546001600160a01b039182169116813b156103b25763016295ab60e21b83526001600160a01b031660048301526044803560248401525f91839190829084905af180156103a757610397575b604051630a85bd0160e11b8152602090f35b5f6103a1916103e2565b5f610385565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b03821682036103b257565b602435906001600160a01b03821682036103b257565b90601f8019910116810190811067ffffffffffffffff82111761040457604052565b634e487b7160e01b5f52604160045260245ffd5b908160209103126103b2575180151581036103b2579056fea2646970667358221220f55c4e90b4dbec63b579aa34ba7c35865a89152aa721f49cc4ffa971715f4e4564736f6c634300081c0033"
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
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "mintBatch",
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
      "bytecode": "0x6080346100e75760208101906001600160401b038211818310176100d3575f9160405252600254600181811c911680156100c9575b60208210146100b557601f811161006d575b5f600255610053336100eb565b5061005d33610161565b506040516115d390816101f58239f35b60025f52601f0160051c7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101905b8181106100aa5750610046565b5f815560010161009d565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610034565b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b6001600160a01b0381165f9081525f5160206118085f395f51905f52602052604090205460ff1661015c576001600160a01b03165f8181525f5160206118085f395f51905f5260205260408120805460ff191660011790553391905f5160206117c85f395f51905f528180a4600190565b505f90565b6001600160a01b0381165f9081525f5160206117e85f395f51905f52602052604090205460ff1661015c576001600160a01b03165f8181525f5160206117e85f395f51905f5260205260408120805460ff191660011790553391907f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6905f5160206117c85f395f51905f529080a460019056fe60806040526004361015610011575f80fd5b5f3560e01c8062fdd58e1461012357806301ffc9a71461011e5780630e89341c14610119578063156e29f614610114578063248a9ca31461010f5780632eb2c2d61461010a5780632f2ff15d1461010557806336568abe146101005780634e1273f4146100fb57806391d14854146100f6578063a217fddf146100f1578063a22cb465146100ec578063d5391393146100e7578063d547741f146100e2578063d81d0a15146100dd578063e985e9c5146100d85763f242432a146100d3575f80fd5b610b14565b610ac4565b610a39565b6109fb565b6109c1565b6108f4565b6108da565b61088b565b6107ca565b610742565b6106ff565b610672565b61052d565b61037b565b610287565b6101c6565b61016c565b600435906001600160a01b038216820361013e57565b5f80fd5b602435906001600160a01b038216820361013e57565b35906001600160a01b038216820361013e57565b3461013e57604036600319011261013e5760206101ab61018a610128565b6024355f525f835260405f209060018060a01b03165f5260205260405f2090565b54604051908152f35b6001600160e01b031981160361013e57565b3461013e57602036600319011261013e576004356101e3816101b4565b63ffffffff60e01b16637965db0b60e01b811490811561020c575b506040519015158152602090f35b636cdb3d1360e11b81149150811561023e575b811561022d575b505f6101fe565b6301ffc9a760e01b1490505f610226565b6303a24d0760e21b8114915061021f565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b90602061028492818152019061024f565b90565b3461013e57602036600319011261013e576040515f6002548060011c9060018116908115610371575b60208310821461035d57828552602085019190811561034457506001146102f2575b6102ee846102e281860382610574565b60405191829182610273565b0390f35b60025f9081529250907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b818410610330575050016102e2826102d2565b80548484015260209093019260010161031d565b60ff191682525090151560051b0190506102e2826102d2565b634e487b7160e01b5f52602260045260245ffd5b91607f16916102b0565b3461013e57606036600319011261013e57610394610128565b6024356044356103a2610e01565b602091604051916103b38484610574565b5f83526001600160a01b0385161561051a576103ec60405192600184526020840152604083019160018352606084015260808301604052565b81518151929592908181036105055750506001600160a01b03821693841515935f5b875181101561047b578086868a868060019660051b809301015191890101519261043c575b5050500161040e565b61047191610454610469925f525f60205260405f2090565b9060018060a01b03165f5260205260405f2090565b9182546112b3565b90555f8681610433565b5093869560018751145f146104dd575f838801515f51602061157e5f395f51905f526104bf8688015160405191829133958360209093929193604081019481520152565b0390a45b6104c957005b806104db950151910151915f33611376565b005b5f6040515f51602061155e5f395f51905f523391806104fd898d836112d4565b0390a46104c3565b635b05999160e01b5f5260045260245260445ffd5b632bfa23e760e11b5f525f60045260245ffd5b3461013e57602036600319011261013e5760206105586004355f526003602052600160405f20015490565b604051908152f35b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff82111761059657604052565b610560565b67ffffffffffffffff81116105965760051b60200190565b9080601f8301121561013e5781356105ca8161059b565b926105d86040519485610574565b81845260208085019260051b82010192831161013e57602001905b8282106106005750505090565b81358152602091820191016105f3565b67ffffffffffffffff811161059657601f01601f191660200190565b81601f8201121561013e5780359061064382610610565b926106516040519485610574565b8284526020838301011161013e57815f926020809301838601378301015290565b3461013e5760a036600319011261013e5761068b610128565b610693610142565b9060443567ffffffffffffffff811161013e576106b49036906004016105b3565b60643567ffffffffffffffff811161013e576106d49036906004016105b3565b906084359367ffffffffffffffff851161013e576106f96104db95369060040161062c565b93610bcb565b3461013e57604036600319011261013e576104db60043561071e610142565b9061073d610738825f526003602052600160405f20015490565b610e70565b610f10565b3461013e57604036600319011261013e5760043561075e610142565b336001600160a01b03821603610777576104db91610fa0565b63334bd91960e11b5f5260045ffd5b90602080835192838152019201905f5b8181106107a35750505090565b8251845260209384019390920191600101610796565b906020610284928181520190610786565b3461013e57604036600319011261013e5760043567ffffffffffffffff811161013e573660238201121561013e578060040135906108078261059b565b916108156040519384610574565b8083526024602084019160051b8301019136831161013e57602401905b828210610873578360243567ffffffffffffffff811161013e576102ee916108616108679236906004016105b3565b90610d4d565b604051918291826107b9565b6020809161088084610158565b815201910190610832565b3461013e57604036600319011261013e57602060ff6108ce6004356108ae610142565b905f526003845260405f209060018060a01b03165f5260205260405f2090565b54166040519015158152f35b3461013e575f36600319011261013e5760206040515f8152f35b3461013e57604036600319011261013e5761090d610128565b602435801515810361013e5733156109ae576001600160a01b03821691821561099c578161095961096a92335f52600160205260405f209060018060a01b03165f5260205260405f2090565b9060ff801983541691151516179055565b604051901515815233907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190602090a3005b62ced3e160e81b5f525f60045260245ffd5b631f18c42760e11b5f525f60045260245ffd5b3461013e575f36600319011261013e5760206040517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b3461013e57604036600319011261013e576104db600435610a1a610142565b90610a34610738825f526003602052600160405f20015490565b610fa0565b3461013e57606036600319011261013e57610a52610128565b60243567ffffffffffffffff811161013e57610a729036906004016105b3565b60443567ffffffffffffffff811161013e57610a929036906004016105b3565b610a9a610e01565b60405191610aa9602084610574565b5f83526001600160a01b0384161561051a576104db93611028565b3461013e57604036600319011261013e57602060ff6108ce610ae4610128565b610aec610142565b6001600160a01b039182165f9081526001865260408082209290931681526020919091522090565b3461013e5760a036600319011261013e57610b2d610128565b610b35610142565b604435906064359260843567ffffffffffffffff811161013e57610b5d90369060040161062c565b92610b688233610eaa565b6001600160a01b0383161561051a576001600160a01b03821615610bb9576104db94610bb160405192600184526020840152604083019160018352606084015260808301604052565b92909161111d565b626a0d4560e21b5f525f60045260245ffd5b92919094610bd98433610eaa565b6001600160a01b03861694851561051a576001600160a01b038516958615610bb95783518551908181036105055750505f5b8451811015610cb8578060051b6020808288010151918801015190610c3b89610454835f525f60205260405f2090565b54828110610c81576104698c61045485948d610c6b60019998610c79970391610454845f525f60205260405f2090565b555f525f60205260405f2090565b905501610c0b565b6040516303dee4c560e01b81526001600160a01b038b16600482015260248101919091526044810183905260648101829052608490fd5b50610cfc9697929795919560018551145f14610cfe5760208581015187820151604080519283529282015233915f51602061157e5f395f51905f5291a45b336114bf565b565b6040515f51602061155e5f395f51905f52339180610d1d8a8a836112d4565b0390a4610cf6565b8051821015610d395760209160051b010190565b634e487b7160e01b5f52603260045260245ffd5b91909180518351808203610dec575050805190610d698261059b565b91610d776040519384610574565b808352610d86601f199161059b565b013660208401375f5b8151811015610de55780610dd460019260051b60208082870101519189010151905f918252602082815260408084206001600160a01b03909316845291905290205490565b610dde8286610d25565b5201610d8f565b5090925050565b635b05999160e01b5f5260045260245260445ffd5b335f9081527f5562e70da342db81569f3094d36be279beaca7ad8e08f434ea188e79d2bfe10c602052604090205460ff1615610e3957565b63e2517d3f60e01b5f52336004527f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660245260445ffd5b5f81815260036020908152604080832033845290915290205460ff1615610e945750565b63e2517d3f60e01b5f523360045260245260445ffd5b6001600160a01b0391821691811690828214159081610ee2575b50610ecd575050565b63711bec9160e11b5f5260045260245260445ffd5b5f8481526001602090815260408083206001600160a01b0390941683529290522060ff91505416155f610ec4565b5f8181526003602090815260408083206001600160a01b038616845290915290205460ff16610f9a575f8181526003602090815260408083206001600160a01b03861684529091529020805460ff1916600117905533916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b50505f90565b5f8181526003602090815260408083206001600160a01b038616845290915290205460ff1615610f9a575f8181526003602090815260408083206001600160a01b03861684529091529020805460ff1916905533916001600160a01b0316907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4600190565b9392919080518251908181036105055750506001600160a01b03851693841515935f5b835181101561109b5780868960019360051b602080828a010151918a01015192611079575b5050500161104b565b61109191610454610469925f525f60205260405f2090565b90555f8981611070565b509390959460018351145f146110f5576020838101518582015160408051928352928201525f9133915f51602061157e5f395f51905f529190a45b6110e1575b50505050565b6110ec935f336114bf565b5f8080806110db565b5f6040515f51602061155e5f395f51905f523391806111158989836112d4565b0390a46110d6565b94939290919384518251908181036105055750506001600160a01b038681169586151595918516801515939192905f5b8451811015611226578060051b90898988602080868b010151958c010151926111a5575b93600194611183575b5050500161114d565b61119b91610454610469925f525f60205260405f2090565b90555f898161117a565b505090916111be8d610454835f525f60205260405f2090565b548281106111ef578291898f6111e6600197968f950391610454855f525f60205260405f2090565b55909450611171565b6040516303dee4c560e01b81526001600160a01b038f16600482015260248101919091526044810183905260648101829052608490fd5b5091989593929790965060018851145f1461128c5760208881015186820151604080519283529282015233915f51602061157e5f395f51905f5291a45b61126f575b5050505050565b6020806112829601519201519233611376565b5f80808080611268565b6040515f51602061155e5f395f51905f523391806112ab898d836112d4565b0390a4611263565b919082018092116112c057565b634e487b7160e01b5f52601160045260245ffd5b90916112eb61028493604084526040840190610786565b916020818403910152610786565b9081602091031261013e5751610284816101b4565b6001600160a01b039182168152911660208201526040810191909152606081019190915260a0608082018190526102849291019061024f565b3d15611371573d9061135882610610565b916113666040519384610574565b82523d5f602084013e565b606090565b9091949293853b61138a575b505050505050565b6020936113ac91604051968795869563f23a6e6160e01b87526004870161130e565b03815f6001600160a01b0387165af15f918161143b575b506113fd57506113d1611347565b80519190826113f657632bfa23e760e11b5f526001600160a01b03821660045260245ffd5b6020915001fd5b6001600160e01b031916630dc5919f60e01b0161142057505f8080808080611382565b632bfa23e760e11b5f526001600160a01b031660045260245ffd5b61145e91925060203d602011611465575b6114568183610574565b8101906112f9565b905f6113c3565b503d61144c565b6001600160a01b0391821681529116602082015260a06040820181905261028494919391926114b192916114a39190860190610786565b908482036060860152610786565b91608081840391015261024f565b9091949293853b6114d257505050505050565b6020936114f491604051968795869563bc197c8160e01b87526004870161146c565b03815f6001600160a01b0387165af15f918161153c575b5061151957506113d1611347565b6001600160e01b0319166343e6837f60e01b0161142057505f8080808080611382565b61155691925060203d602011611465576114568183610574565b905f61150b56fe4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fbc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62a2646970667358221220d0113972dd15d787419382d77a8008fc6c02674a8f7aaf76230e59ca95fc4bf464736f6c634300081c00332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5562e70da342db81569f3094d36be279beaca7ad8e08f434ea188e79d2bfe10c3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff"
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
      "bytecode": "0x60a0346100fc57601f611da438819003918201601f19168301916001600160401b038311848410176101005780849260409485528339810103126100fc5780610056602061004f6100a494610114565b9201610114565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00556001600160a01b03908116608052600380546001600160a01b031916918316919091179055610128565b50604051611bd290816101b282396080518181816101ef01528181610557015281816107d60152818161086e01528181610b9c01528181610f0301528181610f3301528181610f71015281816113c801526115210152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036100fc57565b6001600160a01b0381165f9081525f516020611d845f395f51905f52602052604090205460ff166101ac576001600160a01b03165f8181525f516020611d845f395f51905f5260205260408120805460ff191660011790553391907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f9056fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301ffc9a7146115c357508063058a56ac14611466578063248a9ca3146114345780632f2ff15d146113f75780633013ce29146113b357806335659fb81461139657806336568abe146113505780633bbb280614610c5c5780634690484014610c335780635536372414610a62578063787dce3d146109cd57806391d1485414610984578063a217fddf14610968578063c7fff71914610764578063cddc1bc114610426578063d3f494cc146103c6578063d547741f1461037f578063d898aaf2146101925763e74b981b146100ef575f80fd5b3461018f57602036600319011261018f57610108611616565b610110611984565b6001600160a01b0316801561015857600380546001600160a01b031916821790557f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc28280a280f35b60405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b6044820152606490fd5b80fd5b503461018f576101a1366116ad565b926101aa6118cb565b831561032f5781156102ea576001600160a01b03168085526001602090815260408087208588528252808720335f90815292529020549091906102ae576102138430337f0000000000000000000000000000000000000000000000000000000000000000611b13565b60405161021f816116db565b8481526002602082018381526040830190428252858952600160205260408920878a526020526040892060018060a01b0333165f5260205260405f20935184555160018401555191015560405193845260208401527f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf760403394a460015f516020611b7d5f395f51905f525580f35b60405162461bcd60e51b81526020600482015260146024820152734f6666657220616c72656164792065786973747360601b6044820152606490fd5b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b60405162461bcd60e51b815260206004820152602260248201527f4f66666572207072696365206d7573742062652067726561746572207468616e604482015261020360f41b6064820152608490fd5b503461018f57604036600319011261018f576103c260043561039f61162c565b906103bd6103b8825f525f602052600160405f20015490565b6119d3565b611a93565b5080f35b503461018f5760406103d736611642565b939160018060a01b031682526001602052828220908252602052209060018060a01b03165f52602052606060405f20805490600260018201549101549060405192835260208301526040820152f35b503461018f5761043536611642565b9161043e6118cb565b60018060a01b03168084526001602052604084208285526020526040842060018060a01b0384165f5260205260405f206040519061047b826116db565b6104a0815480845260026001840154936020860194855201546040850152151561172d565b6040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa9081156106cf578791610745575b501561061757506040516331a9108f60e11b81526004810184905290602082602481865afa91821561060c5786926105c7575b5061057b9161051d906001600160a01b0316331461183a565b8286526001602052604086208487526020526040862060018060a01b0386165f526020525f600260408220828155826001820155015551847f0000000000000000000000000000000000000000000000000000000000000000611903565b6040513381526001600160a01b03909316927f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd3090602090a460015f516020611b7d5f395f51905f525580f35b91506020823d602011610604575b816105e26020938361170b565b810103126106005761051d6105f961057b93611826565b9250610504565b8580fd5b3d91506105d5565b6040513d88823e3d90fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152909190602081602481875afa9081156106cf578791610716575b50156106da57604051627eeac760e11b815233600482015260248101859052602081604481875afa9081156106cf578791610697575b506106929061057b93511115611789565b61051d565b90506020813d6020116106c7575b816106b26020938361170b565b810103126106c3575161057b610681565b5f80fd5b3d91506106a5565b6040513d89823e3d90fd5b60405162461bcd60e51b8152602060048201526014602482015273556e737570706f72746564204e4654207479706560601b6044820152606490fd5b610738915060203d60201161073e575b610730818361170b565b810190611771565b5f61064b565b503d610726565b61075e915060203d60201161073e57610730818361170b565b5f6104d1565b503461018f57610773366116ad565b9261077c6118cb565b6001600160a01b03168085526001602090815260408087208588528252808720335f908152925290208054919291801561092c5785156108e857821561089957858181111561084e576107fa916107d291611886565b30337f0000000000000000000000000000000000000000000000000000000000000000611b13565b84815581600182015560024291015560405193845260208401527ffe240e6b60fba78dcf5eae78fca1a9b6ceaf51429c5036812d6b4f2f0a2dfada60403394a460015f516020611b7d5f395f51905f525580f35b9080821061085e575b50506107fa565b6108929161086b91611886565b337f0000000000000000000000000000000000000000000000000000000000000000611903565b845f610857565b60405162461bcd60e51b815260206004820152602160248201527f4e657720616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4e6577207072696365206d7573742062652067726561746572207468616e20306044820152fd5b60405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b6044820152606490fd5b503461018f578060031936011261018f57602090604051908152f35b503461018f57604036600319011261018f5760406109a061162c565b91600435815280602052209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b503461018f57602036600319011261018f576004356109ea611984565b6103e88111610a25576020817fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de4092600255604051908152a180f35b60405162461bcd60e51b81526020600482015260156024820152744665652063616e6e6f74206578636565642031302560581b6044820152606490fd5b503461018f57604036600319011261018f5760043567ffffffffffffffff8111610c2f57610a9490369060040161167c565b60243567ffffffffffffffff8111610c2b57610ab490369060040161167c565b9290610abe6118cb565b838303610bf2579091339190855b818110610ae8578660015f516020611b7d5f395f51905f525580f35b610af38183876118a7565b356001600160a01b0381169190829003610bee57600191610b158289876118a7565b35818a528360205260408a20818b5260205260408a20875f5260205260405f2060405190610b42826116db565b600281549182845287810154602085015201546040830152610b68575b50505001610acc565b610bc090838c528560205260408c20838d5260205260408c20895f526020525f6002604082208281558289820155015551337f0000000000000000000000000000000000000000000000000000000000000000611903565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d08b80a45f8080610b5f565b8780fd5b60405162461bcd60e51b81526020600482015260116024820152704d69736d6174636865642061727261797360781b6044820152606490fd5b8380fd5b5080fd5b503461018f578060031936011261018f576003546040516001600160a01b039091168152602090f35b50346106c357610c6b36611642565b91610c746118cb565b60018060a01b0316805f52600160205260405f20825f5260205260405f2060018060a01b0384165f5260205260405f209260405190610cb2826116db565b610cd7855480845260026001880154976020860198895201546040850152151561172d565b825f52600160205260405f20845f5260205260405f2060018060a01b0382165f526020525f60026040822082815582600182015501556040516301ffc9a760e01b81526380ac58cd60e01b6004820152602081602481875afa9081156112b4575f91611331575b501561119257600185510361114d5785906040516331a9108f60e11b8152856004820152602081602481885afa80156110e8578390611112575b610d8d91506001600160a01b0316331461183a565b60405163e985e9c560e01b8152336004820152306024820152602081604481885afa9081156110e85783916110f3575b50801561106c575b610dce906117cc565b833b15610c2f57604051632142170760e11b81523360048201526001600160a01b03909116602482015260448101859052818160648183885af1801561106157611048575b50505b80516002549081810291818304149015171561103457612710900485869083516040519063152a902d60e11b82528760048301526024820152604081604481895afa808a928b92610fee575b50610fd4575b5050808301808411610fc05783908551809111610faf575b5081610e90610e95928751611886565b611886565b9280151580610f9b575b610f5e575b5080610f2d575b505080610efc575b5051925160405193845260208401527f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a360403394a460015f516020611b7d5f395f51905f525580f35b610f2790337f0000000000000000000000000000000000000000000000000000000000000000611903565b5f610eb3565b610f57917f0000000000000000000000000000000000000000000000000000000000000000611903565b5f80610eab565b600354610f9591906001600160a01b03167f0000000000000000000000000000000000000000000000000000000000000000611903565b5f610ea4565b506003546001600160a01b03161515610e9f565b610fb99250611886565b825f610e80565b634e487b7160e01b89526011600452602489fd5b6001600160a01b03821615610e6857915091505f80610e68565b925090506040823d60401161102c575b8161100b6040938361170b565b8101031261102857602061101e83611826565b920151905f610e62565b8980fd5b3d9150610ffe565b634e487b7160e01b86526011600452602486fd5b816110529161170b565b61105d57845f610e13565b8480fd5b6040513d84823e3d90fd5b5060405163020604bf60e21b815260048101869052602081602481885afa80156110e85783906110a9575b6001600160a01b031630149050610dc5565b506020813d6020116110e0575b816110c36020938361170b565b810103126110dc576110d7610dce91611826565b611097565b8280fd5b3d91506110b6565b6040513d85823e3d90fd5b61110c915060203d60201161073e57610730818361170b565b5f610dbd565b506020813d602011611145575b8161112c6020938361170b565b810103126110dc57611140610d8d91611826565b610d78565b3d915061111f565b60405162461bcd60e51b815260206004820152601f60248201527f455243373231206f66666572206d757374206861766520616d6f756e742031006044820152606490fd5b6040516301ffc9a760e01b8152636cdb3d1360e11b6004820152602081602481875afa9081156112b4575f91611312575b50156106da57604051627eeac760e11b815233600482015260248101859052602081604481875afa80156112b4575f906112de575b611206915086511115611789565b60405163e985e9c560e01b8152336004820152306024820152602081604481875afa80156112b45761123f915f916112bf575b506117cc565b8451833b156106c357604051637921219560e11b81523360048201526001600160a01b03909216602483015260448201859052606482015260a060848201525f60a482018190528160c48183875af180156112b45761129f575b50610e16565b6112ac9195505f9061170b565b5f935f611299565b6040513d5f823e3d90fd5b6112d8915060203d60201161073e57610730818361170b565b5f611239565b506020813d60201161130a575b816112f86020938361170b565b810103126106c35761120690516111f8565b3d91506112eb565b61132b915060203d60201161073e57610730818361170b565b5f6111c3565b61134a915060203d60201161073e57610730818361170b565b5f610d3e565b346106c35760403660031901126106c35761136961162c565b336001600160a01b038216036113875761138590600435611a93565b005b63334bd91960e11b5f5260045ffd5b346106c3575f3660031901126106c3576020600254604051908152f35b346106c3575f3660031901126106c3576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346106c35760403660031901126106c35761138560043561141661162c565b9061142f6103b8825f525f602052600160405f20015490565b611a0b565b346106c35760203660031901126106c357602061145e6004355f525f602052600160405f20015490565b604051908152f35b346106c35760403660031901126106c35761147f611616565b6024359061148b6118cb565b6001600160a01b03165f8181526001602090815260408083208584528252808320338452909152908190209051919291906114c5826116db565b600281549182845260018101546020850152015460408301521561157e5761154590835f52600160205260405f20835f5260205260405f2060018060a01b0333165f526020525f600260408220828155826001820155015551337f0000000000000000000000000000000000000000000000000000000000000000611903565b33917f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d05f80a460015f516020611b7d5f395f51905f5255005b60405162461bcd60e51b815260206004820152601b60248201527f596f7520646964206e6f74206d616b652074686973206f6666657200000000006044820152606490fd5b346106c35760203660031901126106c3576004359063ffffffff60e01b82168092036106c357602091637965db0b60e01b8114908115611605575b5015158152f35b6301ffc9a760e01b149050836115fe565b600435906001600160a01b03821682036106c357565b602435906001600160a01b03821682036106c357565b60609060031901126106c3576004356001600160a01b03811681036106c35790602435906044356001600160a01b03811681036106c35790565b9181601f840112156106c35782359167ffffffffffffffff83116106c3576020808501948460051b0101116106c357565b60809060031901126106c3576004356001600160a01b03811681036106c35790602435906044359060643590565b6060810190811067ffffffffffffffff8211176116f757604052565b634e487b7160e01b5f52604160045260245ffd5b90601f8019910116810190811067ffffffffffffffff8211176116f757604052565b1561173457565b60405162461bcd60e51b81526020600482015260156024820152744e6f2076616c6964206f666665722065786973747360581b6044820152606490fd5b908160209103126106c3575180151581036106c35790565b1561179057565b60405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606490fd5b156117d357565b60405162461bcd60e51b815260206004820152602560248201527f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366656044820152641c8813919560da1b6064820152608490fd5b51906001600160a01b03821682036106c357565b1561184157565b60405162461bcd60e51b815260206004820152601760248201527f596f7520646f206e6f74206f776e2074686973204e46540000000000000000006044820152606490fd5b9190820391821161189357565b634e487b7160e01b5f52601160045260245ffd5b91908110156118b75760051b0190565b634e487b7160e01b5f52603260045260245ffd5b60025f516020611b7d5f395f51905f5254146118f45760025f516020611b7d5f395f51905f5255565b633ee5aeb560e01b5f5260045ffd5b916040519163a9059cbb60e01b5f5260018060a01b031660045260245260205f60448180865af19060015f5114821615611963575b604052156119435750565b635274afe760e01b5f9081526001600160a01b0391909116600452602490fd5b90600181151661197b57823b15153d15161690611938565b503d5f823e3d90fd5b335f9081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604090205460ff16156119bc57565b63e2517d3f60e01b5f52336004525f60245260445ffd5b5f8181526020818152604080832033845290915290205460ff16156119f55750565b63e2517d3f60e01b5f523360045260245260445ffd5b5f818152602081815260408083206001600160a01b038616845290915290205460ff16611a8d575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19166001179055339291907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9080a4600190565b50505f90565b5f818152602081815260408083206001600160a01b038616845290915290205460ff1615611a8d575f818152602081815260408083206001600160a01b0395909516808452949091528120805460ff19169055339291907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9080a4600190565b6040516323b872dd60e01b5f9081526001600160a01b039384166004529290931660245260449390935260209060648180865af19060015f5114821615611b64575b6040525f606052156119435750565b90600181151661197b57823b15153d15161690611b5556fe9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00a2646970667358221220aacece5c6c2ff95da3bcad7523ee44a921c5b55662639dff062f80b91dc0d41c64736f6c634300081c0033ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5"
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
      "bytecode": "0x608034606f57601f61031c38819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b03191691909117905560405161029490816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe608080604052600436101561001c575b50361561001a575f80fd5b005b5f905f3560e01c908163150b7a02146101035750806351e36167146100dc57639e5faafc0361000f57806003193601126100cb57805481906001600160a01b0316803b156100d9578160c491604051928380926334e4cf0760e21b825260606004830152600660648301526561747461636b60d01b608483015260a060248301528460a483015284604483015234905af180156100ce576100ba5750f35b816100c491610228565b6100cb5780f35b80fd5b6040513d84823e3d90fd5b50fd5b50346100cb57806003193601126100cb57546040516001600160a01b039091168152602090f35b346101f85760803660031901126101f85761011c6101fc565b50610125610212565b5060643567ffffffffffffffff81116101f857366023820112156101f857806004013567ffffffffffffffff81116101f857369101602401116101f8575f546001600160a01b0316803b156101f8578160c48167016345785d8a00005f946334e4cf0760e21b83526060600484015260076064840152663932b2b73a32b960c91b608484015260a060248401528560a48401528560448401525af180156101ed576101dd575b604051630a85bd0160e11b8152602090f35b5f6101e791610228565b5f6101cb565b6040513d5f823e3d90fd5b5f80fd5b600435906001600160a01b03821682036101f857565b602435906001600160a01b03821682036101f857565b90601f8019910116810190811067ffffffffffffffff82111761024a57604052565b634e487b7160e01b5f52604160045260245ffdfea26469706673582212204b3b857695c97e7b038909af3e737fc2e6be0897f428692070f032a43f5febf964736f6c634300081c0033"
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
          "name": "AlreadyRejected",
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
          "name": "Rejected",
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
          "name": "hasRejected",
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
            },
            {
              "internalType": "uint256",
              "name": "rejectionCount",
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
          "name": "rejectProposal",
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
      "bytecode": "0x60a06040523461029a57611c2c80380380610019816102b2565b928339810160608282031261029a5781516001600160401b03811161029a5782019080601f8301121561029a578151916001600160401b03831161029e578260051b9060208061006a8185016102b2565b80968152019282010192831161029a57602001905b8282106102825750505061009a6040602084015193016102d7565b815115610248578215158061023d575b15610204576001600160a01b03169182156101ca575f5b825181101561015c57600581901b8301602001516001600160a01b031690811561012757816100f16001936102eb565b6100fd575b50016100c1565b7f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a25f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600255608052604051908152a16040516118d3908161035982396080518181816101d701528181610301015281816103ff0152818161088d01528181610c6b01526114100152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b6020809161028f846102d7565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b0381118382101761029e57604052565b51906001600160a01b038216820361029a57565b805f52600160205260405f2054155f14610353575f546801000000000000000081101561029e5760018101805f5581101561033f5781905f805260205f2001555f54905f52600160205260405f2055600190565b634e487b7160e01b5f52603260045260245ffd5b505f9056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa895146110fd578063013cf08b14610fb657806301ffc9a714610f605780630d61b51914610e32578063150b7a0214610ddd5780631626ba7e14610d8c578063173825d914610d1057806319822f7c14610c3357806320fb562914610be75780632358d5a814610b9b5780632f54bf6e14610b595780633b8ba862146108ce5780633e1b08121461084457806342cde4e814610827578063477034da146107095780635d35a3d9146105c9578063694e80c3146105665780637065cb48146104d257806374420f4c146103ed578063a0e67e2b14610330578063b0d691fe146102ec578063bc197c8114610257578063d087d288146101a6578063da35c664146101895763f23a6e610361000e57346101855760a03660031901126101855761014961121d565b50610152611233565b506084356001600160401b0381116101855761017290369060040161129a565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b34610185575f366003190112610185576020600554604051908152f35b34610185575f36600319011261018557604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa801561024c575f90610219575b604051908152602090f35b506020813d602011610244575b81610233602093836111fc565b81010312610185576020905161020e565b3d9150610226565b6040513d5f823e3d90fd5b346101855760a03660031901126101855761027061121d565b50610279611233565b506044356001600160401b0381116101855761029990369060040161132f565b506064356001600160401b038111610185576102b990369060040161132f565b506084356001600160401b038111610185576102d990369060040161129a565b5060405163bc197c8160e01b8152602090f35b34610185575f366003190112610185576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610185575f366003190112610185576040518060205f54928381520180925f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563905f5b8181106103d7575050508161038c9103826111fc565b604051918291602083019060208452518091526040830191905f5b8181106103b5575050500390f35b82516001600160a01b03168452859450602093840193909201916001016103a7565b8254845260209093019260019283019201610376565b34610185576103fb366112e5565b93337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161493929184156104a157600160025403610492575f9384935b826040519384928337810185815203925af161045a611396565b50156104835761046657005b5f90815260036020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b90913033036104b6575b905f93849392610440565b91906104c13361160f565b6001600254036104925790916104ab565b34610185576020366003190112610185576104eb61121d565b303303610553576001600160a01b031680156105445761050a81611765565b15610535577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b346101855760203660031901126101855760043530330361055357801580156105bf575b610492576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600255604051908152a1005b505f54811161058a565b34610185576105f36105da366111ae565b6105ee6105e98294939461140d565b61160f565b61140d565b6005548210156106fa57815f52600460205260405f20600381015460ff81166106eb5760081c60ff166106dc57600681019060018060a01b0383165f528160205260ff60405f2054166106cd576001600160a01b0383165f90815260078201602052604090205460ff166106be5760049160018060a01b0384165f5260205260405f20600160ff198254161790550161068c81546113eb565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b6324db0ba560e01b5f5260045ffd5b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b63635e873760e01b5f5260045ffd5b346101855761071a6105da366111ae565b6005548210156106fa57815f52600460205260405f20906003820191825460ff81166106eb5760081c60ff166106dc576001600160a01b0382165f90815260068201602052604090205460ff166106cd57600781019060018060a01b0383165f528160205260ff60405f2054166106be5760059160018060a01b0384165f5260205260405f20600160ff1982541617905501906107b782546113eb565b918290556001600160a01b0316837fbaccaaec0e0ded96134440c58c7614efc37a48ee86401b402ff6772832942e6d5f80a360025411156107f457005b805461ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b34610185575f366003190112610185576020600254604051908152f35b34610185576020366003190112610185576004356001600160c01b0381169081900361018557604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa801561024c575f9061021957604051908152602090f35b34610185576108f16108df366112e5565b6105ee6105e98297939496959761140d565b600554926108fe846113eb565b6005555f84815260046020526040902080546001600160a01b0319166001600160a01b0383161781556001810187905592600284016001600160401b038211610b455761094b81546111c4565b601f8111610b00575b50916020979186935f601f8311600114610a6b5760019795938360049896937f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c76812956080945f91610a60575b505f19600384901b1c1916828c1b1790555b80600389019c8b8060a01b0389169d8e99815490620100008f60b01b039060101b1690620100008f60b01b0319161790556040519586948d8060a01b031685528f85015260606040850152816060850152848401375f828201840152601f01601f19168101030190a3845f5260068101865260405f208360ff19825416179055015560405191817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a38152f35b90508d01358f61099f565b89601f19841691835f528c5f20925f5b818110610ae457509360809360019b99979387937f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c768129860049d9b9810610acb575b5050508a82811b0190556109b1565b01355f19600385901b60f8161c191690558e8d81610abc565b9282013584558b98506001909301928c92918e01918e01610a7b565b815f5260205f20601f840160051c81019160208510610b3b575b601f0160051c01905b818110610b305750610954565b5f8155600101610b23565b9091508190610b1a565b634e487b7160e01b5f52604160045260245ffd5b34610185576020366003190112610185576020610b916001600160a01b03610b7f61121d565b165f52600160205260405f2054151590565b6040519015158152f35b3461018557604036600319011261018557610bb4611233565b6004355f526004602052600660405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461018557604036600319011261018557610c00611233565b6004355f526004602052600760405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610185576060366003190112610185576004356001600160401b0381116101855780360361012060031982011261018557604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610553576101048301359060221901811215610185578201916004830135926001600160401b0384116101855760240192803603841361018557602093610ce292602435906004016114ef565b9080610cf2575b50604051908152f35b5f8080809381604051610d0589826111fc565b52335af15082610ce9565b3461018557602036600319011261018557610d2961121d565b303303610553576001600160a01b0316610d4281611656565b15610d7d575f5460025481106104925715610492577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b34610185576040366003190112610185576024356001600160401b03811161018557610dca610dc160209236906004016112b8565b906004356113c5565b6040516001600160e01b03199091168152f35b3461018557608036600319011261018557610df661121d565b50610dff611233565b506064356001600160401b03811161018557610e1f90369060040161129a565b50604051630a85bd0160e11b8152602090f35b6020366003190112610185576004356005548110156106fa57805f52600460205260405f2060038101805460ff81166106eb5760ff8160081c166106dc57600483015460025411610f515760ff19166001908117909155815490820154604051600290930180546001600160a01b039390931693925f91610eb2826111c4565b9160018116908115610f3a5750600114610f08575b5050915f939181859403925af1610edc611396565b5015610483577fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b9091505f5260205f205f905b828210610f2657505082018183610ec7565b600181602092548488015201910190610f14565b60ff19168652505080151502830190508183610ec7565b6359fa4a9360e01b5f5260045ffd5b346101855760203660031901126101855760043563ffffffff60e01b811680910361018557602090630271189760e51b8114908115610fa5575b506040519015158152f35b6301ffc9a760e01b14905082610f9a565b34610185576020366003190112610185576004355f52600460205260405f2060018060a01b03815416600182015490600283016040515f94825492610ffa846111c4565b9081845260208401946001811690815f146110e057506001146110a6575b505061102a82610120969703836111fc565b60038101546005600483015492015492604051978896875260208701526101006040870152518094816101008801528787015e5f85850187015260ff81811615156060870152600882901c161515608086015260101c6001600160a01b031660a085015260c084015260e0830152601f01601f19168101030190f35b9096505f5260205f205f905b8782106110ca57508201602001955061102a82611018565b60018160209254838588010152019101906110b2565b60ff191686525050151560051b8201602001955061102a82611018565b346101855761111661110e366111ae565b91909161140d565b6005548210156106fa57815f526004602052600360405f20019081549060ff82166106eb5760ff8260081c166106dc57601082901c6001600160a01b0390811691161415806111a4575b6111955761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b5030331415611160565b6040906003190112610185576004359060243590565b90600182811c921680156111f2575b60208310146111de57565b634e487b7160e01b5f52602260045260245ffd5b91607f16916111d3565b90601f801991011681019081106001600160401b03821117610b4557604052565b600435906001600160a01b038216820361018557565b602435906001600160a01b038216820361018557565b6001600160401b038111610b4557601f01601f191660200190565b92919261127082611249565b9161127e60405193846111fc565b829481845281830111610185578281602093845f960137010152565b9080601f83011215610185578160206112b593359101611264565b90565b9181601f84011215610185578235916001600160401b038311610185576020838186019501011161018557565b6080600319820112610185576004356001600160a01b0381168103610185579160243591604435906001600160401b03821161018557611327916004016112b8565b909160643590565b9080601f83011215610185578135916001600160401b038311610b45578260051b906040519361136260208401866111fc565b845260208085019282010192831161018557602001905b8282106113865750505090565b8135815260209182019101611379565b3d156113c0573d906113a782611249565b916113b560405193846111fc565b82523d5f602084013e565b606090565b906113d0929161145c565b6113e0576001600160e01b031990565b630b135d3f60e11b90565b5f1981146113f95760010190565b634e487b7160e01b5f52601160045260245ffd5b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461144257503390565b5f908152600360205260409020546001600160a01b031690565b9061149c611480611477611471368786611264565b8561172b565b909291926117bb565b6001600160a01b03165f90815260016020526040902054151590565b6114e7576112b5926114e161147792611480947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611264565b9061172b565b505050600190565b91929092611501611471368484611264565b509490809560048110156115dc5715908115916115f0575b50611554575b505050602001355f52600360205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b611591939450906114e1917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611264565b509190809260048110156115dc5715908115916115bd575b506115b6575f808061151f565b5050600190565b6001600160a01b03165f908152600160205260408120541591506115a9565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f90815260016020526040812054159150611519565b6001600160a01b03165f9081526001602052604090205415610d7d57565b8054821015611642575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b5f818152600160205260409020548015611725575f1981018181116113f9575f545f198101919082116113f9578181036116d9575b5050505f5480156116c5575f19016116a3815f61162d565b8154905f199060031b1b191690555f555f5260016020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b61170f6116e96116f9935f61162d565b90549060031b1c9283925f61162d565b819391549060031b91821b915f19901b19161790565b90555f52600160205260405f20555f808061168b565b50505f90565b815191906041830361175b576117549250602082015190606060408401519301515f1a9061181b565b9192909190565b50505f9160029190565b805f52600160205260405f2054155f146117b6575f5468010000000000000000811015610b45576117a06116f98260018594015f555f61162d565b90555f54905f52600160205260405f2055600190565b505f90565b60048110156115dc57806117cd575050565b600181036117e45763f645eedf60e01b5f5260045ffd5b600281036117ff575063fce698f760e01b5f5260045260245ffd5b6003146118095750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611892579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa1561024c575f516001600160a01b0381161561188857905f905f90565b505f906001905f90565b5050505f916003919056fea26469706673582212202ec5be4800e5d08c7b565d9846f75acb3abacf71e800113a1909d46db2cea1dc64736f6c634300081c0033"
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
      "bytecode": "0x60808060405234601557611f57908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806389ac7d8b146100f55763c70d2a031461002f575f80fd5b346100f15761003d366101d5565b9060409392935190611c2c8083019183831067ffffffffffffffff8411176100dd5786868594610071946102f687396102c8565b03905ff59182156100d257604080518181526020946001600160a01b03169384937fb5cc75a3ec5831cf7ae127c1015a65f6f9168790072deb73f8345f14acd50e9b9383926100c29184019061028c565b90878301520390a2604051908152f35b6040513d5f823e3d90fd5b634e487b7160e01b5f52604160045260245ffd5b5f80fd5b346100f1576020600b61018461010a366101d5565b9390919286611c2c9161015360405196610126848601896101b3565b848852838801946102f6863961014560405197889286840195866102c8565b03601f1981018752866101b3565b60405194859383850197518091895e840190838201905f8252519283915e01015f815203601f1981018352826101b3565b51902090604051916040830152838201523081520160ff8153605590206040516001600160a01b039091168152f35b90601f8019910116810190811067ffffffffffffffff8211176100dd57604052565b60806003198201126100f15760043567ffffffffffffffff81116100f157816023820112156100f15780600401359167ffffffffffffffff83116100dd578260051b916040519361022960208501866101b3565b8452602460208501938201019182116100f157602401915b81831061026c57509192602435925090506044356001600160a01b03811681036100f1579060643590565b82356001600160a01b03811681036100f157815260209283019201610241565b90602080835192838152019201905f5b8181106102a95750505090565b82516001600160a01b031684526020938401939092019160010161029c565b9193926102df60409260608552606085019061028c565b60208401959095526001600160a01b031691015256fe60a06040523461029a57611c2c80380380610019816102b2565b928339810160608282031261029a5781516001600160401b03811161029a5782019080601f8301121561029a578151916001600160401b03831161029e578260051b9060208061006a8185016102b2565b80968152019282010192831161029a57602001905b8282106102825750505061009a6040602084015193016102d7565b815115610248578215158061023d575b15610204576001600160a01b03169182156101ca575f5b825181101561015c57600581901b8301602001516001600160a01b031690811561012757816100f16001936102eb565b6100fd575b50016100c1565b7f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a25f6100f6565b60405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b21037bbb732b960991b6044820152606490fd5b7f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa6020838681600255608052604051908152a16040516118d3908161035982396080518181816101d701528181610301015281816103ff0152818161088d01528181610c6b01526114100152f35b60405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908115b9d1c9e541bda5b9d60721b6044820152606490fd5b60405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081d1a1c995cda1bdb19607a1b6044820152606490fd5b5081518311156100aa565b60405162461bcd60e51b8152602060048201526012602482015271139bc81bdddb995c9cc81c1c9bdd9a59195960721b6044820152606490fd5b6020809161028f846102d7565b81520191019061007f565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b0381118382101761029e57604052565b51906001600160a01b038216820361029a57565b805f52600160205260405f2054155f14610353575f546801000000000000000081101561029e5760018101805f5581101561033f5781905f805260205f2001555f54905f52600160205260405f2055600190565b634e487b7160e01b5f52603260045260245ffd5b505f9056fe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8062efa895146110fd578063013cf08b14610fb657806301ffc9a714610f605780630d61b51914610e32578063150b7a0214610ddd5780631626ba7e14610d8c578063173825d914610d1057806319822f7c14610c3357806320fb562914610be75780632358d5a814610b9b5780632f54bf6e14610b595780633b8ba862146108ce5780633e1b08121461084457806342cde4e814610827578063477034da146107095780635d35a3d9146105c9578063694e80c3146105665780637065cb48146104d257806374420f4c146103ed578063a0e67e2b14610330578063b0d691fe146102ec578063bc197c8114610257578063d087d288146101a6578063da35c664146101895763f23a6e610361000e57346101855760a03660031901126101855761014961121d565b50610152611233565b506084356001600160401b0381116101855761017290369060040161129a565b5060405163f23a6e6160e01b8152602090f35b5f80fd5b34610185575f366003190112610185576020600554604051908152f35b34610185575f36600319011261018557604051631aab3f0d60e11b81523060048201525f60248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa801561024c575f90610219575b604051908152602090f35b506020813d602011610244575b81610233602093836111fc565b81010312610185576020905161020e565b3d9150610226565b6040513d5f823e3d90fd5b346101855760a03660031901126101855761027061121d565b50610279611233565b506044356001600160401b0381116101855761029990369060040161132f565b506064356001600160401b038111610185576102b990369060040161132f565b506084356001600160401b038111610185576102d990369060040161129a565b5060405163bc197c8160e01b8152602090f35b34610185575f366003190112610185576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610185575f366003190112610185576040518060205f54928381520180925f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563905f5b8181106103d7575050508161038c9103826111fc565b604051918291602083019060208452518091526040830191905f5b8181106103b5575050500390f35b82516001600160a01b03168452859450602093840193909201916001016103a7565b8254845260209093019260019283019201610376565b34610185576103fb366112e5565b93337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161493929184156104a157600160025403610492575f9384935b826040519384928337810185815203925af161045a611396565b50156104835761046657005b5f90815260036020526040902080546001600160a01b0319169055005b632b3f6d1160e21b5f5260045ffd5b63aabd5a0960e01b5f5260045ffd5b90913033036104b6575b905f93849392610440565b91906104c13361160f565b6001600254036104925790916104ab565b34610185576020366003190112610185576104eb61121d565b303303610553576001600160a01b031680156105445761050a81611765565b15610535577f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c35f80a2005b63600acf0760e11b5f5260045ffd5b6349e27cff60e01b5f5260045ffd5b637cf8632b60e01b5f523360045260245ffd5b346101855760203660031901126101855760043530330361055357801580156105bf575b610492576020817f6c4ce60fd690e1216286a10b875c5662555f10774484e58142cedd7a90781baa92600255604051908152a1005b505f54811161058a565b34610185576105f36105da366111ae565b6105ee6105e98294939461140d565b61160f565b61140d565b6005548210156106fa57815f52600460205260405f20600381015460ff81166106eb5760081c60ff166106dc57600681019060018060a01b0383165f528160205260ff60405f2054166106cd576001600160a01b0383165f90815260078201602052604090205460ff166106be5760049160018060a01b0384165f5260205260405f20600160ff198254161790550161068c81546113eb565b90556001600160a01b0316907f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a3005b6324db0ba560e01b5f5260045ffd5b63080fc0bd60e11b5f5260045ffd5b632583715b60e11b5f5260045ffd5b630dc1019760e01b5f5260045ffd5b63635e873760e01b5f5260045ffd5b346101855761071a6105da366111ae565b6005548210156106fa57815f52600460205260405f20906003820191825460ff81166106eb5760081c60ff166106dc576001600160a01b0382165f90815260068201602052604090205460ff166106cd57600781019060018060a01b0383165f528160205260ff60405f2054166106be5760059160018060a01b0384165f5260205260405f20600160ff1982541617905501906107b782546113eb565b918290556001600160a01b0316837fbaccaaec0e0ded96134440c58c7614efc37a48ee86401b402ff6772832942e6d5f80a360025411156107f457005b805461ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b34610185575f366003190112610185576020600254604051908152f35b34610185576020366003190112610185576004356001600160c01b0381169081900361018557604051631aab3f0d60e11b815230600482015260248101919091526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa801561024c575f9061021957604051908152602090f35b34610185576108f16108df366112e5565b6105ee6105e98297939496959761140d565b600554926108fe846113eb565b6005555f84815260046020526040902080546001600160a01b0319166001600160a01b0383161781556001810187905592600284016001600160401b038211610b455761094b81546111c4565b601f8111610b00575b50916020979186935f601f8311600114610a6b5760019795938360049896937f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c76812956080945f91610a60575b505f19600384901b1c1916828c1b1790555b80600389019c8b8060a01b0389169d8e99815490620100008f60b01b039060101b1690620100008f60b01b0319161790556040519586948d8060a01b031685528f85015260606040850152816060850152848401375f828201840152601f01601f19168101030190a3845f5260068101865260405f208360ff19825416179055015560405191817f7b39c92a7e1a86e846edaeff6eba715a046352c596794c2a374269c126a997685f80a38152f35b90508d01358f61099f565b89601f19841691835f528c5f20925f5b818110610ae457509360809360019b99979387937f8e2ff4d1327c6cd7f9902203974d854b5e7fd6b5fcf69a22a3ae8154c8c768129860049d9b9810610acb575b5050508a82811b0190556109b1565b01355f19600385901b60f8161c191690558e8d81610abc565b9282013584558b98506001909301928c92918e01918e01610a7b565b815f5260205f20601f840160051c81019160208510610b3b575b601f0160051c01905b818110610b305750610954565b5f8155600101610b23565b9091508190610b1a565b634e487b7160e01b5f52604160045260245ffd5b34610185576020366003190112610185576020610b916001600160a01b03610b7f61121d565b165f52600160205260405f2054151590565b6040519015158152f35b3461018557604036600319011261018557610bb4611233565b6004355f526004602052600660405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b3461018557604036600319011261018557610c00611233565b6004355f526004602052600760405f20019060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610185576060366003190112610185576004356001600160401b0381116101855780360361012060031982011261018557604435907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610553576101048301359060221901811215610185578201916004830135926001600160401b0384116101855760240192803603841361018557602093610ce292602435906004016114ef565b9080610cf2575b50604051908152f35b5f8080809381604051610d0589826111fc565b52335af15082610ce9565b3461018557602036600319011261018557610d2961121d565b303303610553576001600160a01b0316610d4281611656565b15610d7d575f5460025481106104925715610492577f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da5f80a2005b6330cd747160e01b5f5260045ffd5b34610185576040366003190112610185576024356001600160401b03811161018557610dca610dc160209236906004016112b8565b906004356113c5565b6040516001600160e01b03199091168152f35b3461018557608036600319011261018557610df661121d565b50610dff611233565b506064356001600160401b03811161018557610e1f90369060040161129a565b50604051630a85bd0160e11b8152602090f35b6020366003190112610185576004356005548110156106fa57805f52600460205260405f2060038101805460ff81166106eb5760ff8160081c166106dc57600483015460025411610f515760ff19166001908117909155815490820154604051600290930180546001600160a01b039390931693925f91610eb2826111c4565b9160018116908115610f3a5750600114610f08575b5050915f939181859403925af1610edc611396565b5015610483577fbcf6a68a2f901be4a23a41b53acd7697893a7e34def4e28acba584da75283b675f80a2005b9091505f5260205f205f905b828210610f2657505082018183610ec7565b600181602092548488015201910190610f14565b60ff19168652505080151502830190508183610ec7565b6359fa4a9360e01b5f5260045ffd5b346101855760203660031901126101855760043563ffffffff60e01b811680910361018557602090630271189760e51b8114908115610fa5575b506040519015158152f35b6301ffc9a760e01b14905082610f9a565b34610185576020366003190112610185576004355f52600460205260405f2060018060a01b03815416600182015490600283016040515f94825492610ffa846111c4565b9081845260208401946001811690815f146110e057506001146110a6575b505061102a82610120969703836111fc565b60038101546005600483015492015492604051978896875260208701526101006040870152518094816101008801528787015e5f85850187015260ff81811615156060870152600882901c161515608086015260101c6001600160a01b031660a085015260c084015260e0830152601f01601f19168101030190f35b9096505f5260205f205f905b8782106110ca57508201602001955061102a82611018565b60018160209254838588010152019101906110b2565b60ff191686525050151560051b8201602001955061102a82611018565b346101855761111661110e366111ae565b91909161140d565b6005548210156106fa57815f526004602052600360405f20019081549060ff82166106eb5760ff8260081c166106dc57601082901c6001600160a01b0390811691161415806111a4575b6111955761ff0019166101001790557f829a8683c544ad289ce92d3ce06e9ebad69b18a6916e60ec766c2c217461d8e95f80a2005b637d1b73b960e01b5f5260045ffd5b5030331415611160565b6040906003190112610185576004359060243590565b90600182811c921680156111f2575b60208310146111de57565b634e487b7160e01b5f52602260045260245ffd5b91607f16916111d3565b90601f801991011681019081106001600160401b03821117610b4557604052565b600435906001600160a01b038216820361018557565b602435906001600160a01b038216820361018557565b6001600160401b038111610b4557601f01601f191660200190565b92919261127082611249565b9161127e60405193846111fc565b829481845281830111610185578281602093845f960137010152565b9080601f83011215610185578160206112b593359101611264565b90565b9181601f84011215610185578235916001600160401b038311610185576020838186019501011161018557565b6080600319820112610185576004356001600160a01b0381168103610185579160243591604435906001600160401b03821161018557611327916004016112b8565b909160643590565b9080601f83011215610185578135916001600160401b038311610b45578260051b906040519361136260208401866111fc565b845260208085019282010192831161018557602001905b8282106113865750505090565b8135815260209182019101611379565b3d156113c0573d906113a782611249565b916113b560405193846111fc565b82523d5f602084013e565b606090565b906113d0929161145c565b6113e0576001600160e01b031990565b630b135d3f60e11b90565b5f1981146113f95760010190565b634e487b7160e01b5f52601160045260245ffd5b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461144257503390565b5f908152600360205260409020546001600160a01b031690565b9061149c611480611477611471368786611264565b8561172b565b909291926117bb565b6001600160a01b03165f90815260016020526040902054151590565b6114e7576112b5926114e161147792611480947f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611264565b9061172b565b505050600190565b91929092611501611471368484611264565b509490809560048110156115dc5715908115916115f0575b50611554575b505050602001355f52600360205260405f209060018060a01b03166bffffffffffffffffffffffff60a01b8254161790555f90565b611591939450906114e1917f19457468657265756d205369676e6564204d6573736167653a0a3332000000005f52601c52603c5f20923691611264565b509190809260048110156115dc5715908115916115bd575b506115b6575f808061151f565b5050600190565b6001600160a01b03165f908152600160205260408120541591506115a9565b634e487b7160e01b5f52602160045260245ffd5b6001600160a01b03165f90815260016020526040812054159150611519565b6001600160a01b03165f9081526001602052604090205415610d7d57565b8054821015611642575f5260205f2001905f90565b634e487b7160e01b5f52603260045260245ffd5b5f818152600160205260409020548015611725575f1981018181116113f9575f545f198101919082116113f9578181036116d9575b5050505f5480156116c5575f19016116a3815f61162d565b8154905f199060031b1b191690555f555f5260016020525f6040812055600190565b634e487b7160e01b5f52603160045260245ffd5b61170f6116e96116f9935f61162d565b90549060031b1c9283925f61162d565b819391549060031b91821b915f19901b19161790565b90555f52600160205260405f20555f808061168b565b50505f90565b815191906041830361175b576117549250602082015190606060408401519301515f1a9061181b565b9192909190565b50505f9160029190565b805f52600160205260405f2054155f146117b6575f5468010000000000000000811015610b45576117a06116f98260018594015f555f61162d565b90555f54905f52600160205260405f2055600190565b505f90565b60048110156115dc57806117cd575050565b600181036117e45763f645eedf60e01b5f5260045ffd5b600281036117ff575063fce698f760e01b5f5260045260245ffd5b6003146118095750565b6335e2f38360e21b5f5260045260245ffd5b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611892579160209360809260ff5f9560405194855216868401526040830152606082015282805260015afa1561024c575f516001600160a01b0381161561188857905f905f90565b505f906001905f90565b5050505f916003919056fea26469706673582212202ec5be4800e5d08c7b565d9846f75acb3abacf71e800113a1909d46db2cea1dc64736f6c634300081c0033a26469706673582212205c3604ac46ebfb5faf5eab5b9271b42ac5e08edaa3266cf686ca6daa1a04713964736f6c634300081c0033"
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