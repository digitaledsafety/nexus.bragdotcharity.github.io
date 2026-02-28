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
      "bytecode": "0x6080604052348015600e575f5ffd5b5061059f8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610029575f3560e01c806315270ace1461002d575b5f5ffd5b61004760048036038101906100429190610369565b610049565b005b818190508484905014610091576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161008890610454565b60405180910390fd5b5f5f90505b8484905081101561011b5761010e338686848181106100b8576100b7610472565b5b90506020020160208101906100cd91906104c9565b8585858181106100e0576100df610472565b5b905060200201358973ffffffffffffffffffffffffffffffffffffffff16610123909392919063ffffffff16565b8080600101915050610096565b505050505050565b61019f848573ffffffffffffffffffffffffffffffffffffffff166323b872dd8686866040516024016101589392919061051b565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506101a5565b50505050565b5f5f60205f8451602086015f885af1806101c4576040513d5f823e3d81fd5b3d92505f519150505f82146101dd5760018114156101f8565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561023a57836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016102319190610550565b60405180910390fd5b50505050565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61027182610248565b9050919050565b5f61028282610267565b9050919050565b61029281610278565b811461029c575f5ffd5b50565b5f813590506102ad81610289565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126102d4576102d36102b3565b5b8235905067ffffffffffffffff8111156102f1576102f06102b7565b5b60208301915083602082028301111561030d5761030c6102bb565b5b9250929050565b5f5f83601f840112610329576103286102b3565b5b8235905067ffffffffffffffff811115610346576103456102b7565b5b602083019150836020820283011115610362576103616102bb565b5b9250929050565b5f5f5f5f5f6060868803121561038257610381610240565b5b5f61038f8882890161029f565b955050602086013567ffffffffffffffff8111156103b0576103af610244565b5b6103bc888289016102bf565b9450945050604086013567ffffffffffffffff8111156103df576103de610244565b5b6103eb88828901610314565b92509250509295509295909350565b5f82825260208201905092915050565b7f4d69736d617463686564206172726179730000000000000000000000000000005f82015250565b5f61043e6011836103fa565b91506104498261040a565b602082019050919050565b5f6020820190508181035f83015261046b81610432565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b6104a881610267565b81146104b2575f5ffd5b50565b5f813590506104c38161049f565b92915050565b5f602082840312156104de576104dd610240565b5b5f6104eb848285016104b5565b91505092915050565b6104fd81610267565b82525050565b5f819050919050565b61051581610503565b82525050565b5f60608201905061052e5f8301866104f4565b61053b60208301856104f4565b610548604083018461050c565b949350505050565b5f6020820190506105635f8301846104f4565b9291505056fea2646970667358221220187a7be3f0685ffb3e92b25ad5fdc6dc0ee9fd23d307bd2e09c41ad278aa23a264736f6c634300081c0033"
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
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516159cb3803806159cb8339818101604052810190610031919061031a565b6040518060400160405280600781526020017f427261674e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f425241474e465400000000000000000000000000000000000000000000000000815250815f90816100ab919061059e565b5080600190816100bb919061059e565b50505060016008819055506100d85f5f1b8461012860201b60201c565b5081600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600b8190555050505061066d565b5f610139838361021e60201b60201c565b61021457600160075f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506101b161028260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610218565b5f90505b92915050565b5f60075f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102b68261028d565b9050919050565b6102c6816102ac565b81146102d0575f5ffd5b50565b5f815190506102e1816102bd565b92915050565b5f819050919050565b6102f9816102e7565b8114610303575f5ffd5b50565b5f81519050610314816102f0565b92915050565b5f5f5f6060848603121561033157610330610289565b5b5f61033e868287016102d3565b935050602061034f868287016102d3565b925050604061036086828701610306565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806103e557607f821691505b6020821081036103f8576103f76103a1565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261045a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261041f565b610464868361041f565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61049f61049a610495846102e7565b61047c565b6102e7565b9050919050565b5f819050919050565b6104b883610485565b6104cc6104c4826104a6565b84845461042b565b825550505050565b5f5f905090565b6104e36104d4565b6104ee8184846104af565b505050565b5b81811015610511576105065f826104db565b6001810190506104f4565b5050565b601f82111561055657610527816103fe565b61053084610410565b8101602085101561053f578190505b61055361054b85610410565b8301826104f3565b50505b505050565b5f82821c905092915050565b5f6105765f198460080261055b565b1980831691505092915050565b5f61058e8383610567565b9150826002028217905092915050565b6105a78261036a565b67ffffffffffffffff8111156105c0576105bf610374565b5b6105ca82546103ce565b6105d5828285610515565b5f60209050601f831160018114610606575f84156105f4578287015190505b6105fe8582610583565b865550610665565b601f198416610614866103fe565b5f5b8281101561063b57848901518255600182019150602085019450602081019050610616565b868310156106585784890151610654601f891682610567565b8355505b6001600288020188555050505b505050505050565b6153518061067a5f395ff3fe6080604052600436106101f1575f3560e01c806370a082311161010c578063b88d4fde1161009f578063d435b3a31161006e578063d435b3a314610737578063d547741f14610761578063da183afb14610789578063e985e9c5146107c5578063f0f442601461080157610257565b8063b88d4fde1461068f578063c6317247146106b7578063c87b56dd146106df578063d3933c1c1461071b57610257565b806396d8f4f3116100db57806396d8f4f3146105f7578063a217fddf14610621578063a22cb4651461064b578063a6719b3a1461067357610257565b806370a082311461052b57806383943dc81461056757806391d148541461059157806395d89b41146105cd57610257565b8063248a9ca31161018457806342842e0e1161015357806342842e0e1461046157806361d027b3146104895780636352211e146104b357806364cb7e9c146104ef57610257565b8063248a9ca3146103ad5780632eb9313e146103e95780632f2ff15d1461041157806336568abe1461043957610257565b80630fd973ce116101c05780630fd973ce146103255780631653441c1461034157806319bcef6d1461035d57806323b872dd1461038557610257565b806301ffc9a71461025b57806306fdde0314610297578063081812fc146102c1578063095ea7b3146102fd57610257565b36610257576101fe610829565b61024d336040518060400160405280600f81526020017f44697265637420646f6e6174696f6e000000000000000000000000000000000081525060405180602001604052805f8152505f61086f565b610255610c60565b005b5f5ffd5b348015610266575f5ffd5b50610281600480360381019061027c9190613836565b610c6a565b60405161028e919061387b565b60405180910390f35b3480156102a2575f5ffd5b506102ab610c7b565b6040516102b89190613904565b60405180910390f35b3480156102cc575f5ffd5b506102e760048036038101906102e29190613957565b610d0a565b6040516102f491906139c1565b60405180910390f35b348015610308575f5ffd5b50610323600480360381019061031e9190613a04565b610d25565b005b61033f600480360381019061033a9190613aa3565b610d3b565b005b61035b60048036038101906103569190613b34565b610de4565b005b348015610368575f5ffd5b50610383600480360381019061037e9190613bb2565b610e8c565b005b348015610390575f5ffd5b506103ab60048036038101906103a69190613bdd565b610edc565b005b3480156103b8575f5ffd5b506103d360048036038101906103ce9190613c60565b610fdb565b6040516103e09190613c9a565b60405180910390f35b3480156103f4575f5ffd5b5061040f600480360381019061040a9190613bb2565b610ff8565b005b34801561041c575f5ffd5b5061043760048036038101906104329190613cb3565b611048565b005b348015610444575f5ffd5b5061045f600480360381019061045a9190613cb3565b61106a565b005b34801561046c575f5ffd5b5061048760048036038101906104829190613bdd565b6110e5565b005b348015610494575f5ffd5b5061049d611104565b6040516104aa91906139c1565b60405180910390f35b3480156104be575f5ffd5b506104d960048036038101906104d49190613957565b611129565b6040516104e691906139c1565b60405180910390f35b3480156104fa575f5ffd5b5061051560048036038101906105109190613957565b61113a565b6040516105229190613904565b60405180910390f35b348015610536575f5ffd5b50610551600480360381019061054c9190613bb2565b6111d5565b60405161055e9190613d00565b60405180910390f35b348015610572575f5ffd5b5061057b61128b565b6040516105889190613d74565b60405180910390f35b34801561059c575f5ffd5b506105b760048036038101906105b29190613cb3565b6112b0565b6040516105c4919061387b565b60405180910390f35b3480156105d8575f5ffd5b506105e1611314565b6040516105ee9190613904565b60405180910390f35b348015610602575f5ffd5b5061060b6113a4565b6040516106189190613d00565b60405180910390f35b34801561062c575f5ffd5b506106356113aa565b6040516106429190613c9a565b60405180910390f35b348015610656575f5ffd5b50610671600480360381019061066c9190613db7565b6113b0565b005b61068d60048036038101906106889190613df5565b6113c6565b005b34801561069a575f5ffd5b506106b560048036038101906106b09190613fc0565b611470565b005b3480156106c2575f5ffd5b506106dd60048036038101906106d89190613957565b611495565b005b3480156106ea575f5ffd5b5061070560048036038101906107009190613957565b6114ac565b6040516107129190613904565b60405180910390f35b61073560048036038101906107309190614040565b611862565b005b348015610742575f5ffd5b5061074b61190b565b60405161075891906140f1565b60405180910390f35b34801561076c575f5ffd5b5061078760048036038101906107829190613cb3565b611930565b005b348015610794575f5ffd5b506107af60048036038101906107aa9190613957565b611952565b6040516107bc9190613d00565b60405180910390f35b3480156107d0575f5ffd5b506107eb60048036038101906107e6919061410a565b611967565b6040516107f8919061387b565b60405180910390f35b34801561080c575f5ffd5b5061082760048036038101906108229190613bb2565b6119f5565b005b600260085403610865576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600881905550565b5f73ffffffffffffffffffffffffffffffffffffffff16600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036108fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f590614192565b60405180910390fd5b600b54341015610943576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093a906141fa565b60405180910390fd5b5f60095f81548092919061095690614245565b91905055905081156109865782600f5f8381526020019081526020015f2090816109809190614480565b5061099b565b5f8351111561099a576109998184611ab3565b5b5b5f600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d3fc98643334886040518463ffffffff1660e01b81526004016109fa9392919061454f565b6020604051808303815f875af1158015610a16573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a3a919061459f565b905080600e5f8481526020019081526020015f2081905550610a5c8683611b0d565b5f73ffffffffffffffffffffffffffffffffffffffff16600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b3a57600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933346040518363ffffffff1660e01b8152600401610b0c9291906145ca565b5f604051808303815f87803b158015610b23575f5ffd5b505af1158015610b35573d5f5f3e3d5ffd5b505050505b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1634604051610b809061461e565b5f6040518083038185875af1925050503d805f8114610bba576040519150601f19603f3d011682016040523d82523d5f602084013e610bbf565b606091505b5050905080610c03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfa9061467c565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858a604051610c4f949392919061469a565b60405180910390a250505050505050565b6001600881905550565b5f610c7482611b2a565b9050919050565b60605f8054610c89906142b9565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb5906142b9565b8015610d005780601f10610cd757610100808354040283529160200191610d00565b820191905f5260205f20905b815481529060010190602001808311610ce357829003601f168201915b5050505050905090565b5f610d1482611ba3565b50610d1e82611c29565b9050919050565b610d378282610d32611c62565b611c69565b5050565b610d43610829565b610dd58585858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505084848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050505f61086f565b610ddd610c60565b5050505050565b610dec610829565b610e7e3385858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505084848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050505f61086f565b610e86610c60565b50505050565b5f5f1b610e9881611c7b565b81600c5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f4c575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610f4391906139c1565b60405180910390fd5b5f610f5f8383610f5a611c62565b611c8f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fd5578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610fcc939291906146e4565b60405180910390fd5b50505050565b5f60075f8381526020019081526020015f20600101549050919050565b5f5f1b61100481611c7b565b81600d5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b61105182610fdb565b61105a81611c7b565b6110648383611e9a565b50505050565b611072611c62565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110d6576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110e08282611f84565b505050565b6110ff83838360405180602001604052805f815250611470565b505050565b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f61113382611ba3565b9050919050565b600f602052805f5260405f205f915090508054611156906142b9565b80601f0160208091040260200160405190810160405280929190818152602001828054611182906142b9565b80156111cd5780601f106111a4576101008083540402835291602001916111cd565b820191905f5260205f20905b8154815290600101906020018083116111b057829003601f168201915b505050505081565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611246575f6040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161123d91906139c1565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f60075f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b606060018054611323906142b9565b80601f016020809104026020016040519081016040528092919081815260200182805461134f906142b9565b801561139a5780601f106113715761010080835404028352916020019161139a565b820191905f5260205f20905b81548152906001019060200180831161137d57829003601f168201915b5050505050905090565b600b5481565b5f5f1b81565b6113c26113bb611c62565b838361206e565b5050565b6113ce610829565b6114608686868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050508461086f565b611468610c60565b505050505050565b61147b848484610edc565b61148f611486611c62565b858585856121d7565b50505050565b5f5f1b6114a181611c7b565b81600b819055505050565b60606114b782611ba3565b505f600e5f8481526020019081526020015f205490505f60405180602001604052805f81525090505f73ffffffffffffffffffffffffffffffffffffffff16600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146115d957600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b63e6ac3836040518263ffffffff1660e01b815260040161158d9190613d00565b5f60405180830381865afa9250505080156115ca57506040513d5f823e3d601f19601f820116820180604052508101906115c79190614864565b60015b156115d85780606001519150505b5b6060805f600f5f8881526020019081526020015f2080546115f9906142b9565b80601f0160208091040260200160405190810160405280929190818152602001828054611625906142b9565b80156116705780601f1061164757610100808354040283529160200191611670565b820191905f5260205f20905b81548152906001019060200180831161165357829003601f168201915b505050505090505f815111156116d25761168981612383565b156116c9578091506116a361169e8886612834565b612899565b6040516020016116b3919061492f565b60405160208183030381529060405292506116cd565b8092505b61176f565b5f6116dc886128c6565b90505f81511115611739576116f081612383565b156117305780925061170a6117058987612834565b612899565b60405160200161171a919061492f565b6040516020818303038152906040529350611734565b8093505b61176d565b61174b6117468987612834565b612899565b60405160200161175b919061492f565b60405160208183030381529060405293505b505b5f60405180602001604052805f81525090505f835111156117ad578260405160200161179b919061499a565b60405160208183030381529060405290505b5f6118326117ba8a6129d1565b5f8851116117d65760405180602001604052805f8152506117ff565b6117df88612a9b565b6040516020016117ef9190614a05565b6040516020818303038152906040525b878561180a8b612a9b565b60405160200161181e959493929190614be4565b604051602081830303815290604052612899565b9050806040516020016118459190614caf565b604051602081830303815290604052975050505050505050919050565b61186a610829565b6118fc3386868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050508461086f565b611904610c60565b5050505050565b600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61193982610fdb565b61194281611c7b565b61194c8383611f84565b50505050565b600e602052805f5260405f205f915090505481565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f5f1b611a0181611c7b565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611a6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a6690614d1a565b60405180910390fd5b81600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b8060065f8481526020019081526020015f209081611ad19190614480565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce782604051611b019190613d00565b60405180910390a15050565b611b26828260405180602001604052805f815250612de8565b5050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611b9c5750611b9b82612e0b565b5b9050919050565b5f5f611bae83612e6b565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611c2057826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611c179190613d00565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b611c768383836001612ea4565b505050565b611c8c81611c87611c62565b613063565b50565b5f5f611c9a84612e6b565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611cdb57611cda8184866130b4565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611d6657611d1a5f855f5f612ea4565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611de557600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b5f611ea583836112b0565b611f7a57600160075f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550611f17611c62565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050611f7e565b5f90505b92915050565b5f611f8f83836112b0565b15612064575f60075f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550612001611c62565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050612068565b5f90505b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036120de57816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016120d591906139c1565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516121ca919061387b565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b111561237c578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b81526004016122359493929190614d8a565b6020604051808303815f875af192505050801561227057506040513d601f19601f8201168201806040525081019061226d9190614de8565b60015b6122f1573d805f811461229e576040519150601f19603f3d011682016040523d82523d5f602084013e6122a3565b606091505b505f8151036122e957836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016122e091906139c1565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461237a57836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161237191906139c1565b60405180910390fd5b505b5050505050565b5f5f829050600b8151101561239b575f91505061282f565b7f6400000000000000000000000000000000000000000000000000000000000000815f815181106123cf576123ce614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614801561246857507f61000000000000000000000000000000000000000000000000000000000000008160018151811061243957612438614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80156124d357507f7400000000000000000000000000000000000000000000000000000000000000816002815181106124a4576124a3614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561253e57507f61000000000000000000000000000000000000000000000000000000000000008160038151811061250f5761250e614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80156125a957507f3a000000000000000000000000000000000000000000000000000000000000008160048151811061257a57612579614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561261457507f6100000000000000000000000000000000000000000000000000000000000000816005815181106125e5576125e4614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561267f57507f7500000000000000000000000000000000000000000000000000000000000000816006815181106126505761264f614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80156126ea57507f6400000000000000000000000000000000000000000000000000000000000000816007815181106126bb576126ba614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561275557507f69000000000000000000000000000000000000000000000000000000000000008160088151811061272657612725614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80156127c057507f6f000000000000000000000000000000000000000000000000000000000000008160098151811061279157612790614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561282b57507f2f0000000000000000000000000000000000000000000000000000000000000081600a815181106127fc576127fb614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9150505b919050565b60605f5f83511161286c57612848846129d1565b6040516020016128589190614e8a565b60405160208183030381529060405261286e565b825b9050806040516020016128819190615173565b60405160208183030381529060405291505092915050565b60606128bf826040518060600160405280604081526020016152dc604091396001613177565b9050919050565b60606128d182611ba3565b505f60065f8481526020019081526020015f2080546128ef906142b9565b80601f016020809104026020016040519081016040528092919081815260200182805461291b906142b9565b80156129665780601f1061293d57610100808354040283529160200191612966565b820191905f5260205f20905b81548152906001019060200180831161294957829003601f168201915b505050505090505f612976613306565b90505f81510361298a5781925050506129cc565b5f825111156129be5780826040516020016129a69291906151c0565b604051602081830303815290604052925050506129cc565b6129c78461331c565b925050505b919050565b60605f60016129df84613382565b0190505f8167ffffffffffffffff8111156129fd576129fc613e9c565b5b6040519080825280601f01601f191660200182016040528015612a2f5781602001600182028036833780820191505090505b5090505f82602083010190505b600115612a90578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612a8557612a846151e3565b5b0494505f8503612a3c575b819350505050919050565b60605f8290505f815190505f5f90505f5f90505b82811015612ba3577f2200000000000000000000000000000000000000000000000000000000000000848281518110612aeb57612aea614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612b8257507f5c00000000000000000000000000000000000000000000000000000000000000848281518110612b5357612b52614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15612b96578180612b9290614245565b9250505b8080600101915050612aaf565b505f8103612bb657849350505050612de3565b5f8183612bc39190615210565b67ffffffffffffffff811115612bdc57612bdb613e9c565b5b6040519080825280601f01601f191660200182016040528015612c0e5781602001600182028036833780820191505090505b5090505f5f90505f5f90505b84811015612dd9577f2200000000000000000000000000000000000000000000000000000000000000868281518110612c5657612c55614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612ced57507f5c00000000000000000000000000000000000000000000000000000000000000868281518110612cbe57612cbd614e13565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15612d61577f5c00000000000000000000000000000000000000000000000000000000000000838380612d1f90614245565b945081518110612d3257612d31614e13565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505b858181518110612d7457612d73614e13565b5b602001015160f81c60f81b838380612d8b90614245565b945081518110612d9e57612d9d614e13565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053508080600101915050612c1a565b5081955050505050505b919050565b612df283836134d3565b612e06612dfd611c62565b5f8585856121d7565b505050565b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612e645750612e63826135c6565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080612edc57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561300e575f612eeb84611ba3565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612f5557508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015612f685750612f668184611967565b155b15612faa57826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401612fa191906139c1565b60405180910390fd5b811561300c57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b61306d82826112b0565b6130b05780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016130a7929190615243565b60405180910390fd5b5050565b6130bf8383836136a7565b613172575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361313357806040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161312a9190613d00565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016131699291906145ca565b60405180910390fd5b505050565b60605f8451036131975760405180602001604052805f81525090506132ff565b5f826131c85760036002865160046131af919061526a565b6131b99190615210565b6131c391906152ab565b6131ef565b6003600286516131d89190615210565b6131e291906152ab565b60046131ee919061526a565b5b90505f8167ffffffffffffffff81111561320c5761320b613e9c565b5b6040519080825280601f01601f19166020018201604052801561323e5781602001600182028036833780820191505090505b509050600185016020820187885189016020810180515f82525b828410156132b3576003840193508351603f8160121c168701518653600186019550603f81600c1c168701518653600186019550603f8160061c168701518653600186019550603f8116870151865360018601955050613258565b80825289156132f35760038c5106600181146132d657600281146132e9576132f1565b603d6001870353603d60028703536132f1565b603d60018703535b505b50505050505080925050505b9392505050565b606060405180602001604052805f815250905090565b606061332782611ba3565b505f613331613306565b90505f81511161334f5760405180602001604052805f81525061337a565b80613359846129d1565b60405160200161336a9291906151c0565b6040516020818303038152906040525b915050919050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106133de577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816133d4576133d36151e3565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061341b576d04ee2d6d415b85acef81000000008381613411576134106151e3565b5b0492506020810190505b662386f26fc10000831061344a57662386f26fc1000083816134405761343f6151e3565b5b0492506010810190505b6305f5e1008310613473576305f5e1008381613469576134686151e3565b5b0492506008810190505b612710831061349857612710838161348e5761348d6151e3565b5b0492506004810190505b606483106134bb57606483816134b1576134b06151e3565b5b0492506002810190505b600a83106134ca576001810190505b80915050919050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603613543575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161353a91906139c1565b60405180910390fd5b5f61354f83835f611c8f565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146135c1575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016135b891906139c1565b60405180910390fd5b505050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061369057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806136a0575061369f82613767565b5b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561375e57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061371f575061371e8484611967565b5b8061375d57508273ffffffffffffffffffffffffffffffffffffffff1661374583611c29565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613815816137e1565b811461381f575f5ffd5b50565b5f813590506138308161380c565b92915050565b5f6020828403121561384b5761384a6137d9565b5b5f61385884828501613822565b91505092915050565b5f8115159050919050565b61387581613861565b82525050565b5f60208201905061388e5f83018461386c565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6138d682613894565b6138e0818561389e565b93506138f08185602086016138ae565b6138f9816138bc565b840191505092915050565b5f6020820190508181035f83015261391c81846138cc565b905092915050565b5f819050919050565b61393681613924565b8114613940575f5ffd5b50565b5f813590506139518161392d565b92915050565b5f6020828403121561396c5761396b6137d9565b5b5f61397984828501613943565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6139ab82613982565b9050919050565b6139bb816139a1565b82525050565b5f6020820190506139d45f8301846139b2565b92915050565b6139e3816139a1565b81146139ed575f5ffd5b50565b5f813590506139fe816139da565b92915050565b5f5f60408385031215613a1a57613a196137d9565b5b5f613a27858286016139f0565b9250506020613a3885828601613943565b9150509250929050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f840112613a6357613a62613a42565b5b8235905067ffffffffffffffff811115613a8057613a7f613a46565b5b602083019150836001820283011115613a9c57613a9b613a4a565b5b9250929050565b5f5f5f5f5f60608688031215613abc57613abb6137d9565b5b5f613ac9888289016139f0565b955050602086013567ffffffffffffffff811115613aea57613ae96137dd565b5b613af688828901613a4e565b9450945050604086013567ffffffffffffffff811115613b1957613b186137dd565b5b613b2588828901613a4e565b92509250509295509295909350565b5f5f5f5f60408587031215613b4c57613b4b6137d9565b5b5f85013567ffffffffffffffff811115613b6957613b686137dd565b5b613b7587828801613a4e565b9450945050602085013567ffffffffffffffff811115613b9857613b976137dd565b5b613ba487828801613a4e565b925092505092959194509250565b5f60208284031215613bc757613bc66137d9565b5b5f613bd4848285016139f0565b91505092915050565b5f5f5f60608486031215613bf457613bf36137d9565b5b5f613c01868287016139f0565b9350506020613c12868287016139f0565b9250506040613c2386828701613943565b9150509250925092565b5f819050919050565b613c3f81613c2d565b8114613c49575f5ffd5b50565b5f81359050613c5a81613c36565b92915050565b5f60208284031215613c7557613c746137d9565b5b5f613c8284828501613c4c565b91505092915050565b613c9481613c2d565b82525050565b5f602082019050613cad5f830184613c8b565b92915050565b5f5f60408385031215613cc957613cc86137d9565b5b5f613cd685828601613c4c565b9250506020613ce7858286016139f0565b9150509250929050565b613cfa81613924565b82525050565b5f602082019050613d135f830184613cf1565b92915050565b5f819050919050565b5f613d3c613d37613d3284613982565b613d19565b613982565b9050919050565b5f613d4d82613d22565b9050919050565b5f613d5e82613d43565b9050919050565b613d6e81613d54565b82525050565b5f602082019050613d875f830184613d65565b92915050565b613d9681613861565b8114613da0575f5ffd5b50565b5f81359050613db181613d8d565b92915050565b5f5f60408385031215613dcd57613dcc6137d9565b5b5f613dda858286016139f0565b9250506020613deb85828601613da3565b9150509250929050565b5f5f5f5f5f5f60808789031215613e0f57613e0e6137d9565b5b5f613e1c89828a016139f0565b965050602087013567ffffffffffffffff811115613e3d57613e3c6137dd565b5b613e4989828a01613a4e565b9550955050604087013567ffffffffffffffff811115613e6c57613e6b6137dd565b5b613e7889828a01613a4e565b93509350506060613e8b89828a01613da3565b9150509295509295509295565b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b613ed2826138bc565b810181811067ffffffffffffffff82111715613ef157613ef0613e9c565b5b80604052505050565b5f613f036137d0565b9050613f0f8282613ec9565b919050565b5f67ffffffffffffffff821115613f2e57613f2d613e9c565b5b613f37826138bc565b9050602081019050919050565b828183375f83830152505050565b5f613f64613f5f84613f14565b613efa565b905082815260208101848484011115613f8057613f7f613e98565b5b613f8b848285613f44565b509392505050565b5f82601f830112613fa757613fa6613a42565b5b8135613fb7848260208601613f52565b91505092915050565b5f5f5f5f60808587031215613fd857613fd76137d9565b5b5f613fe5878288016139f0565b9450506020613ff6878288016139f0565b935050604061400787828801613943565b925050606085013567ffffffffffffffff811115614028576140276137dd565b5b61403487828801613f93565b91505092959194509250565b5f5f5f5f5f60608688031215614059576140586137d9565b5b5f86013567ffffffffffffffff811115614076576140756137dd565b5b61408288828901613a4e565b9550955050602086013567ffffffffffffffff8111156140a5576140a46137dd565b5b6140b188828901613a4e565b935093505060406140c488828901613da3565b9150509295509295909350565b5f6140db82613d43565b9050919050565b6140eb816140d1565b82525050565b5f6020820190506141045f8301846140e2565b92915050565b5f5f604083850312156141205761411f6137d9565b5b5f61412d858286016139f0565b925050602061413e858286016139f0565b9150509250929050565b7f5265636569707420636f6e7472616374206e6f742073657400000000000000005f82015250565b5f61417c60188361389e565b915061418782614148565b602082019050919050565b5f6020820190508181035f8301526141a981614170565b9050919050565b7f446f6e6174696f6e2062656c6f77206d696e696d756d000000000000000000005f82015250565b5f6141e460168361389e565b91506141ef826141b0565b602082019050919050565b5f6020820190508181035f830152614211816141d8565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61424f82613924565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361428157614280614218565b5b600182019050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806142d057607f821691505b6020821081036142e3576142e261428c565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026143457fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261430a565b61434f868361430a565b95508019841693508086168417925050509392505050565b5f61438161437c61437784613924565b613d19565b613924565b9050919050565b5f819050919050565b61439a83614367565b6143ae6143a682614388565b848454614316565b825550505050565b5f5f905090565b6143c56143b6565b6143d0818484614391565b505050565b5b818110156143f3576143e85f826143bd565b6001810190506143d6565b5050565b601f82111561443857614409816142e9565b614412846142fb565b81016020851015614421578190505b61443561442d856142fb565b8301826143d5565b50505b505050565b5f82821c905092915050565b5f6144585f198460080261443d565b1980831691505092915050565b5f6144708383614449565b9150826002028217905092915050565b61448982613894565b67ffffffffffffffff8111156144a2576144a1613e9c565b5b6144ac82546142b9565b6144b78282856143f7565b5f60209050601f8311600181146144e8575f84156144d6578287015190505b6144e08582614465565b865550614547565b601f1984166144f6866142e9565b5f5b8281101561451d578489015182556001820191506020850194506020810190506144f8565b8683101561453a5784890151614536601f891682614449565b8355505b6001600288020188555050505b505050505050565b5f6060820190506145625f8301866139b2565b61456f6020830185613cf1565b818103604083015261458181846138cc565b9050949350505050565b5f815190506145998161392d565b92915050565b5f602082840312156145b4576145b36137d9565b5b5f6145c18482850161458b565b91505092915050565b5f6040820190506145dd5f8301856139b2565b6145ea6020830184613cf1565b9392505050565b5f81905092915050565b50565b5f6146095f836145f1565b9150614614826145fb565b5f82019050919050565b5f614628826145fe565b9150819050919050565b7f5472616e7366657220746f207472656173757279206661696c656400000000005f82015250565b5f614666601b8361389e565b915061467182614632565b602082019050919050565b5f6020820190508181035f8301526146938161465a565b9050919050565b5f6080820190506146ad5f830187613cf1565b6146ba6020830186613cf1565b6146c76040830185613cf1565b81810360608301526146d981846138cc565b905095945050505050565b5f6060820190506146f75f8301866139b2565b6147046020830185613cf1565b61471160408301846139b2565b949350505050565b5f5ffd5b5f5ffd5b5f8151905061472f816139da565b92915050565b5f67ffffffffffffffff82111561474f5761474e613e9c565b5b614758826138bc565b9050602081019050919050565b5f61477761477284614735565b613efa565b90508281526020810184848401111561479357614792613e98565b5b61479e8482856138ae565b509392505050565b5f82601f8301126147ba576147b9613a42565b5b81516147ca848260208601614765565b91505092915050565b5f608082840312156147e8576147e7614719565b5b6147f26080613efa565b90505f61480184828501614721565b5f8301525060206148148482850161458b565b60208301525060406148288482850161458b565b604083015250606082015167ffffffffffffffff81111561484c5761484b61471d565b5b614858848285016147a6565b60608301525092915050565b5f60208284031215614879576148786137d9565b5b5f82015167ffffffffffffffff811115614896576148956137dd565b5b6148a2848285016147d3565b91505092915050565b5f81905092915050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c0000000000005f82015250565b5f6148e9601a836148ab565b91506148f4826148b5565b601a82019050919050565b5f61490982613894565b61491381856148ab565b93506149238185602086016138ae565b80840191505092915050565b5f614939826148dd565b915061494582846148ff565b915081905092915050565b7f222c2022616e696d6174696f6e5f75726c223a202200000000000000000000005f82015250565b5f6149846015836148ab565b915061498f82614950565b601582019050919050565b5f6149a482614978565b91506149b082846148ff565b915081905092915050565b7f3a200000000000000000000000000000000000000000000000000000000000005f82015250565b5f6149ef6002836148ab565b91506149fa826149bb565b600282019050919050565b5f614a0f826149e3565b9150614a1b82846148ff565b915081905092915050565b7f7b226e616d65223a2022427261674e46542023000000000000000000000000005f82015250565b5f614a5a6013836148ab565b9150614a6582614a26565b601382019050919050565b7f222c20226465736372697074696f6e223a2022427261672e43686172697479205f8201527f446f6e6174696f6e204e46540000000000000000000000000000000000000000602082015250565b5f614aca602c836148ab565b9150614ad582614a70565b602c82019050919050565b7f222c2022696d616765223a2022000000000000000000000000000000000000005f82015250565b5f614b14600d836148ab565b9150614b1f82614ae0565b600d82019050919050565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a5f8201527f20224d657373616765222c202276616c7565223a202200000000000000000000602082015250565b5f614b846036836148ab565b9150614b8f82614b2a565b603682019050919050565b7f227d5d7d000000000000000000000000000000000000000000000000000000005f82015250565b5f614bce6004836148ab565b9150614bd982614b9a565b600482019050919050565b5f614bee82614a4e565b9150614bfa82886148ff565b9150614c0582614abe565b9150614c1182876148ff565b9150614c1c82614b08565b9150614c2882866148ff565b9150614c3482856148ff565b9150614c3f82614b78565b9150614c4b82846148ff565b9150614c5682614bc2565b91508190509695505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000005f82015250565b5f614c99601d836148ab565b9150614ca482614c65565b601d82019050919050565b5f614cb982614c8d565b9150614cc582846148ff565b915081905092915050565b7f496e76616c6964207472656173757279206164647265737300000000000000005f82015250565b5f614d0460188361389e565b9150614d0f82614cd0565b602082019050919050565b5f6020820190508181035f830152614d3181614cf8565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f614d5c82614d38565b614d668185614d42565b9350614d768185602086016138ae565b614d7f816138bc565b840191505092915050565b5f608082019050614d9d5f8301876139b2565b614daa60208301866139b2565b614db76040830185613cf1565b8181036060830152614dc98184614d52565b905095945050505050565b5f81519050614de28161380c565b92915050565b5f60208284031215614dfd57614dfc6137d9565b5b5f614e0a84828501614dd4565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f427261674e4654202300000000000000000000000000000000000000000000005f82015250565b5f614e746009836148ab565b9150614e7f82614e40565b600982019050919050565b5f614e9482614e68565b9150614ea082846148ff565b915081905092915050565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32305f8201527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d22302030203335302033353060408201527f223e000000000000000000000000000000000000000000000000000000000000606082015250565b5f614f516062836148ab565b9150614f5c82614eab565b606282019050919050565b7f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e745f8201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060208201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60408201527f653e000000000000000000000000000000000000000000000000000000000000606082015250565b5f61500d6062836148ab565b915061501882614f67565b606282019050919050565b7f3c726563742077696474683d223130302522206865696768743d2231303025225f8201527f2066696c6c3d222336333636663122202f3e0000000000000000000000000000602082015250565b5f61507d6032836148ab565b915061508882615023565b603282019050919050565b7f3c7465787420783d223530252220793d223530252220636c6173733d226261735f8201527f652220646f6d696e616e742d626173656c696e653d226d6964646c652220746560208201527f78742d616e63686f723d226d6964646c65223e00000000000000000000000000604082015250565b5f6151136053836148ab565b915061511e82615093565b605382019050919050565b7f3c2f746578743e3c2f7376673e000000000000000000000000000000000000005f82015250565b5f61515d600d836148ab565b915061516882615129565b600d82019050919050565b5f61517d82614f45565b915061518882615001565b915061519382615071565b915061519e82615107565b91506151aa82846148ff565b91506151b582615151565b915081905092915050565b5f6151cb82856148ff565b91506151d782846148ff565b91508190509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f61521a82613924565b915061522583613924565b925082820190508082111561523d5761523c614218565b5b92915050565b5f6040820190506152565f8301856139b2565b6152636020830184613c8b565b9392505050565b5f61527482613924565b915061527f83613924565b925082820261528d81613924565b915082820484148315176152a4576152a3614218565b5b5092915050565b5f6152b582613924565b91506152c083613924565b9250826152d0576152cf6151e3565b5b82820490509291505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220d556747afd15f49153e4429a00158610599fad359b651e4e8a0ce4fe526c821564736f6c634300081c0033"
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
      "bytecode": "0x610180604052348015610010575f5ffd5b50604051615af8380380615af883398181016040528101906100329190611217565b6040518060400160405280600a81526020017f4272616720546f6b656e00000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600a81526020017f4272616720546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4252414700000000000000000000000000000000000000000000000000000000815250816003908161011a919061149b565b50806004908161012a919061149b565b50505061014160058361028960201b90919060201c565b610120818152505061015d60068261028960201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a0818152505061019a6102d660201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250505050508181101561021b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610212906115ea565b60405180910390fd5b8061016081815250506102365f5f1b8461033060201b60201c565b506102677f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68461033060201b60201c565b505f82111561028157610280838361042660201b60201c565b5b505050611a44565b5f6020835110156102aa576102a3836104ab60201b60201c565b90506102d0565b826102ba8361051060201b60201c565b5f0190816102c8919061149b565b5060ff5f1b90505b92915050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e05161010051463060405160200161031595949392919061163e565b60405160208183030381529060405280519060200120905090565b5f610341838361051960201b60201c565b61041c576001600b5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506103b961057d60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610420565b5f90505b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610496575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161048d919061168f565b60405180910390fd5b6104a75f838361058460201b60201c565b5050565b5f5f829050601f815111156104f757826040517f305a27a90000000000000000000000000000000000000000000000000000000081526004016104ee91906116fe565b60405180910390fd5b8051816105039061174b565b5f1c175f1b915050919050565b5f819050919050565b5f600b5f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b61059583838361059a60201b60201c565b505050565b6105ab83838361066060201b60201c565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361064a575f6105ed61087960201b60201c565b90505f6105fe61088260201b60201c565b9050808211156106475781816040517f1cb15d2600000000000000000000000000000000000000000000000000000000815260040161063e9291906117b1565b60405180910390fd5b50505b61065b8383836108a560201b60201c565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106b0578060025f8282546106a49190611805565b9250508190555061077e565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610739578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161073093929190611838565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107c5578060025f828254039250508190555061080f565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161086c919061186d565b60405180910390a3505050565b5f600254905090565b5f79ffffffffffffffffffffffffffffffffffffffffffffffffffff8016905090565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361090457610901600a61099560201b6111c0176108f6846109aa60201b60201c565b610a1760201b60201c565b50505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361096357610960600a610a5f60201b6111d517610955846109aa60201b60201c565b610a1760201b60201c565b50505b61099061097584610a7460201b60201c565b61098484610a7460201b60201c565b83610ad960201b60201c565b505050565b5f81836109a291906118ab565b905092915050565b5f79ffffffffffffffffffffffffffffffffffffffffffffffffffff8016821115610a0f5760d0826040517f6dfcc650000000000000000000000000000000000000000000000000000000008152600401610a0692919061193d565b60405180910390fd5b819050919050565b5f5f610a53610a2a610d6f60201b60201c565b610a43610a3c88610d8360201b60201c565b868860201c565b87610deb60201b9092919060201c565b91509150935093915050565b5f8183610a6c9190611964565b905092915050565b5f60085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015610b1457505f81115b15610d6a575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610c41575f5f610bb260095f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20610a5f60201b6111d517610ba7866109aa60201b60201c565b610a1760201b60201c565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051610c369291906117b1565b60405180910390a250505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610d69575f5f610cda60095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2061099560201b6111c017610ccf866109aa60201b60201c565b610a1760201b60201c565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051610d5e9291906117b1565b60405180910390a250505b5b505050565b5f610d7e610e0c60201b60201c565b905090565b5f5f825f018054905090505f8114610de157610db3835f01600183610da891906119b1565b610e2160201b60201c565b5f0160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff16610de3565b5f5b915050919050565b5f5f610e00855f018585610e3360201b60201c565b91509150935093915050565b5f610e1c4361112d60201b60201c565b905090565b5f825f528160205f2001905092915050565b5f5f5f858054905090505f811115611045575f610e6287600184610e5791906119b1565b610e2160201b60201c565b90505f815f015f9054906101000a900465ffffffffffff1690505f825f0160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1690508765ffffffffffff168265ffffffffffff161115610ef3576040517f2520601d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff1603610f5d5786835f0160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550611036565b8860405180604001604052808a65ffffffffffff1681526020018979ffffffffffffffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003905f5260205f20015f909190919091505f820151815f015f6101000a81548165ffffffffffff021916908365ffffffffffff1602179055506020820151815f0160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b80879550955050505050611125565b8560405180604001604052808765ffffffffffff1681526020018679ffffffffffffffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003905f5260205f20015f909190919091505f820151815f015f6101000a81548165ffffffffffff021916908365ffffffffffff1602179055506020820151815f0160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505f8492509250505b935093915050565b5f65ffffffffffff801682111561117e576030826040517f6dfcc650000000000000000000000000000000000000000000000000000000008152600401611175929190611a1d565b60405180910390fd5b819050919050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6111b38261118a565b9050919050565b6111c3816111a9565b81146111cd575f5ffd5b50565b5f815190506111de816111ba565b92915050565b5f819050919050565b6111f6816111e4565b8114611200575f5ffd5b50565b5f81519050611211816111ed565b92915050565b5f5f5f6060848603121561122e5761122d611186565b5b5f61123b868287016111d0565b935050602061124c86828701611203565b925050604061125d86828701611203565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806112e257607f821691505b6020821081036112f5576112f461129e565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026113577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261131c565b611361868361131c565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61139c611397611392846111e4565b611379565b6111e4565b9050919050565b5f819050919050565b6113b583611382565b6113c96113c1826113a3565b848454611328565b825550505050565b5f5f905090565b6113e06113d1565b6113eb8184846113ac565b505050565b5b8181101561140e576114035f826113d8565b6001810190506113f1565b5050565b601f82111561145357611424816112fb565b61142d8461130d565b8101602085101561143c578190505b6114506114488561130d565b8301826113f0565b50505b505050565b5f82821c905092915050565b5f6114735f1984600802611458565b1980831691505092915050565b5f61148b8383611464565b9150826002028217905092915050565b6114a482611267565b67ffffffffffffffff8111156114bd576114bc611271565b5b6114c782546112cb565b6114d2828285611412565b5f60209050601f831160018114611503575f84156114f1578287015190505b6114fb8582611480565b865550611562565b601f198416611511866112fb565b5f5b8281101561153857848901518255600182019150602085019450602081019050611513565b868310156115555784890151611551601f891682611464565b8355505b6001600288020188555050505b505050505050565b5f82825260208201905092915050565b7f4d617820737570706c79206d757374206265203e3d20696e697469616c2073755f8201527f70706c7900000000000000000000000000000000000000000000000000000000602082015250565b5f6115d460248361156a565b91506115df8261157a565b604082019050919050565b5f6020820190508181035f830152611601816115c8565b9050919050565b5f819050919050565b61161a81611608565b82525050565b611629816111e4565b82525050565b611638816111a9565b82525050565b5f60a0820190506116515f830188611611565b61165e6020830187611611565b61166b6040830186611611565b6116786060830185611620565b611685608083018461162f565b9695505050505050565b5f6020820190506116a25f83018461162f565b92915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6116d082611267565b6116da818561156a565b93506116ea8185602086016116a8565b6116f3816116b6565b840191505092915050565b5f6020820190508181035f83015261171681846116c6565b905092915050565b5f81519050919050565b5f819050602082019050919050565b5f6117428251611608565b80915050919050565b5f6117558261171e565b8261175f84611728565b905061176a81611737565b925060208210156117aa576117a57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080261131c565b831692505b5050919050565b5f6040820190506117c45f830185611620565b6117d16020830184611620565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61180f826111e4565b915061181a836111e4565b9250828201905080821115611832576118316117d8565b5b92915050565b5f60608201905061184b5f83018661162f565b6118586020830185611620565b6118656040830184611620565b949350505050565b5f6020820190506118805f830184611620565b92915050565b5f79ffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6118b582611886565b91506118c083611886565b9250828201905079ffffffffffffffffffffffffffffffffffffffffffffffffffff8111156118f2576118f16117d8565b5b92915050565b5f819050919050565b5f60ff82169050919050565b5f61192761192261191d846118f8565b611379565b611901565b9050919050565b6119378161190d565b82525050565b5f6040820190506119505f83018561192e565b61195d6020830184611620565b9392505050565b5f61196e82611886565b915061197983611886565b9250828203905079ffffffffffffffffffffffffffffffffffffffffffffffffffff8111156119ab576119aa6117d8565b5b92915050565b5f6119bb826111e4565b91506119c6836111e4565b92508282039050818111156119de576119dd6117d8565b5b92915050565b5f819050919050565b5f611a07611a026119fd846119e4565b611379565b611901565b9050919050565b611a17816119ed565b82525050565b5f604082019050611a305f830185611a0e565b611a3d6020830184611620565b9392505050565b60805160a05160c05160e05161010051610120516101405161016051614052611aa65f395f8181610a09015261110201525f611aaf01525f611a7401525f611f0801525f611ee701525f6114f001525f61154601525f61156f01526140525ff3fe608060405234801561000f575f5ffd5b506004361061020f575f3560e01c806370a0823111610123578063a217fddf116100ab578063d53913931161007a578063d539139314610677578063d547741f14610695578063d5abeb01146106b1578063dd62ed3e146106cf578063f1127ed8146106ff5761020f565b8063a217fddf146105f1578063a9059cbb1461060f578063c3cda5201461063f578063d505accf1461065b5761020f565b80638e539e8c116100f25780638e539e8c1461052557806391d148541461055557806391ddadf41461058557806395d89b41146105a35780639ab24eb0146105c15761020f565b806370a082311461048557806379cc6790146104b55780637ecebe00146104d157806384b0196e146105015761020f565b80633644e515116101a657806342966c681161017557806342966c68146103cf5780634bf5d7e9146103eb578063587cde1e146104095780635c19a95c146104395780636fcfff45146104555761020f565b80633644e5151461034957806336568abe146103675780633a46b1a81461038357806340c10f19146103b35761020f565b806323b872dd116101e257806323b872dd146102af578063248a9ca3146102df5780632f2ff15d1461030f578063313ce5671461032b5761020f565b806301ffc9a71461021357806306fdde0314610243578063095ea7b31461026157806318160ddd14610291575b5f5ffd5b61022d600480360381019061022891906131e6565b61072f565b60405161023a919061322b565b60405180910390f35b61024b6107a8565b60405161025891906132b4565b60405180910390f35b61027b60048036038101906102769190613361565b610838565b604051610288919061322b565b60405180910390f35b61029961085a565b6040516102a691906133ae565b60405180910390f35b6102c960048036038101906102c491906133c7565b610863565b6040516102d6919061322b565b60405180910390f35b6102f960048036038101906102f4919061344a565b610891565b6040516103069190613484565b60405180910390f35b6103296004803603810190610324919061349d565b6108ae565b005b6103336108d0565b60405161034091906134f6565b60405180910390f35b6103516108d8565b60405161035e9190613484565b60405180910390f35b610381600480360381019061037c919061349d565b6108e6565b005b61039d60048036038101906103989190613361565b610961565b6040516103aa91906133ae565b60405180910390f35b6103cd60048036038101906103c89190613361565b6109dd565b005b6103e960048036038101906103e4919061350f565b610a8b565b005b6103f3610a9f565b60405161040091906132b4565b60405180910390f35b610423600480360381019061041e919061353a565b610b33565b6040516104309190613574565b60405180910390f35b610453600480360381019061044e919061353a565b610b98565b005b61046f600480360381019061046a919061353a565b610bb1565b60405161047c91906135ab565b60405180910390f35b61049f600480360381019061049a919061353a565b610bc2565b6040516104ac91906133ae565b60405180910390f35b6104cf60048036038101906104ca9190613361565b610c07565b005b6104eb60048036038101906104e6919061353a565b610c27565b6040516104f891906133ae565b60405180910390f35b610509610c38565b60405161051c97969594939291906136b5565b60405180910390f35b61053f600480360381019061053a919061350f565b610cdd565b60405161054c91906133ae565b60405180910390f35b61056f600480360381019061056a919061349d565b610d1d565b60405161057c919061322b565b60405180910390f35b61058d610d81565b60405161059a9190613757565b60405180910390f35b6105ab610d8f565b6040516105b891906132b4565b60405180910390f35b6105db60048036038101906105d6919061353a565b610e1f565b6040516105e891906133ae565b60405180910390f35b6105f9610e88565b6040516106069190613484565b60405180910390f35b61062960048036038101906106249190613361565b610e8e565b604051610636919061322b565b60405180910390f35b6106596004803603810190610654919061379a565b610eb0565b005b61067560048036038101906106709190613823565b610f75565b005b61067f6110ba565b60405161068c9190613484565b60405180910390f35b6106af60048036038101906106aa919061349d565b6110de565b005b6106b9611100565b6040516106c691906133ae565b60405180910390f35b6106e960048036038101906106e491906138c0565b611124565b6040516106f691906133ae565b60405180910390f35b61071960048036038101906107149190613928565b6111a6565b60405161072691906139d6565b60405180910390f35b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107a157506107a0826111ea565b5b9050919050565b6060600380546107b790613a1c565b80601f01602080910402602001604051908101604052809291908181526020018280546107e390613a1c565b801561082e5780601f106108055761010080835404028352916020019161082e565b820191905f5260205f20905b81548152906001019060200180831161081157829003601f168201915b5050505050905090565b5f5f610842611253565b905061084f81858561125a565b600191505092915050565b5f600254905090565b5f5f61086d611253565b905061087a85828561126c565b6108858585856112ff565b60019150509392505050565b5f600b5f8381526020019081526020015f20600101549050919050565b6108b782610891565b6108c0816113ef565b6108ca8383611403565b50505050565b5f6012905090565b5f6108e16114ed565b905090565b6108ee611253565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610952576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61095c82826115a3565b505050565b5f6109b961096e8361168d565b60095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206116f890919063ffffffff16565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16905092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610a07816113ef565b7f000000000000000000000000000000000000000000000000000000000000000082610a3161085a565b610a3b9190613a79565b1115610a7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7390613af6565b60405180910390fd5b610a8683836117e8565b505050565b610a9c610a96611253565b82611867565b50565b6060610aa96118e6565b65ffffffffffff16610ab9610d81565b65ffffffffffff1614610af8576040517f6ff0714000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040518060400160405280601d81526020017f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000815250905090565b5f60085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f610ba1611253565b9050610bad81836118f5565b5050565b5f610bbb82611a05565b9050919050565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610c1982610c13611253565b8361126c565b610c238282611867565b5050565b5f610c3182611a5a565b9050919050565b5f6060805f5f5f6060610c49611a6b565b610c51611aa6565b46305f5f1b5f67ffffffffffffffff811115610c7057610c6f613b14565b5b604051908082528060200260200182016040528015610c9e5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b5f610cfa610cea8361168d565b600a6116f890919063ffffffff16565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff169050919050565b5f600b5f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f610d8a6118e6565b905090565b606060048054610d9e90613a1c565b80601f0160208091040260200160405190810160405280929190818152602001828054610dca90613a1c565b8015610e155780601f10610dec57610100808354040283529160200191610e15565b820191905f5260205f20905b815481529060010190602001808311610df857829003601f168201915b5050505050905090565b5f610e6560095f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20611ae1565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff169050919050565b5f5f1b81565b5f5f610e98611253565b9050610ea58185856112ff565b600191505092915050565b83421115610ef557836040517f4683af0e000000000000000000000000000000000000000000000000000000008152600401610eec91906133ae565b60405180910390fd5b5f610f56610f4e7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf898989604051602001610f339493929190613b41565b60405160208183030381529060405280519060200120611b43565b858585611b5c565b9050610f628187611b8a565b610f6c81886118f5565b50505050505050565b83421115610fba57836040517f62791302000000000000000000000000000000000000000000000000000000008152600401610fb191906133ae565b60405180910390fd5b5f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610fe88c611be1565b89604051602001610ffe96959493929190613b84565b6040516020818303038152906040528051906020012090505f61102082611b43565b90505f61102f82878787611b5c565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110a357808a6040517f4b800e4600000000000000000000000000000000000000000000000000000000815260040161109a929190613be3565b60405180910390fd5b6110ae8a8a8a61125a565b50505050505050505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6110e782610891565b6110f0816113ef565b6110fa83836115a3565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b6111ae613151565b6111b88383611c34565b905092915050565b5f81836111cd9190613c0a565b905092915050565b5f81836111e29190613c57565b905092915050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f33905090565b6112678383836001611c93565b505050565b5f6112778484611124565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156112f957818110156112ea578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016112e193929190613ca4565b60405180910390fd5b6112f884848484035f611c93565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361136f575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016113669190613574565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113df575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016113d69190613574565b60405180910390fd5b6113ea838383611e62565b505050565b611400816113fb611253565b611e72565b50565b5f61140e8383610d1d565b6114e3576001600b5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550611480611253565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506114e7565b5f90505b92915050565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561156857507f000000000000000000000000000000000000000000000000000000000000000046145b15611595577f000000000000000000000000000000000000000000000000000000000000000090506115a0565b61159d611ec3565b90505b90565b5f6115ae8383610d1d565b15611683575f600b5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550611620611253565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611687565b5f90505b92915050565b5f5f611697610d81565b90508065ffffffffffff1683106116e75782816040517fecd3f81e0000000000000000000000000000000000000000000000000000000081526004016116de929190613cd9565b60405180910390fd5b6116f083611f58565b915050919050565b5f5f835f018054905090505f5f90505f829050600583111561177c575f61171e84611fb1565b846117299190613d00565b9050611737875f018261214b565b5f015f9054906101000a900465ffffffffffff1665ffffffffffff168665ffffffffffff16101561176a5780915061177a565b6001816117779190613a79565b92505b505b5f61178b875f0187858561215d565b90505f81146117da576117ac875f016001836117a79190613d00565b61214b565b5f0160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff166117dc565b5f5b94505050505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611858575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161184f9190613574565b60405180910390fd5b6118635f8383611e62565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036118d7575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016118ce9190613574565b60405180910390fd5b6118e2825f83611e62565b5050565b5f6118f043611f58565b905090565b5f6118ff83610b33565b90508160085f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4611a0081836119fb866121d2565b6121e3565b505050565b5f611a53611a4e60095f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20612453565b612462565b9050919050565b5f611a64826124b9565b9050919050565b6060611aa160057f00000000000000000000000000000000000000000000000000000000000000006124ff90919063ffffffff16565b905090565b6060611adc60067f00000000000000000000000000000000000000000000000000000000000000006124ff90919063ffffffff16565b905090565b5f5f825f018054905090505f8114611b3957611b0b835f01600183611b069190613d00565b61214b565b5f0160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff16611b3b565b5f5b915050919050565b5f611b55611b4f6114ed565b836125ac565b9050919050565b5f5f5f5f611b6c888888886125ec565b925092509250611b7c82826126d3565b829350505050949350505050565b5f611b9483611be1565b9050808214611bdc5782816040517f752d88c0000000000000000000000000000000000000000000000000000000008152600401611bd3929190613d33565b60405180910390fd5b505050565b5f60075f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f815480929190600101919050559050919050565b611c3c613151565b611c8b8260095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2061283590919063ffffffff16565b905092915050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611d03575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401611cfa9190613574565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611d73575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401611d6a9190613574565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015611e5c578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051611e5391906133ae565b60405180910390a35b50505050565b611e6d838383612904565b505050565b611e7c8282610d1d565b611ebf5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401611eb6929190613d5a565b60405180910390fd5b5050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001611f3d959493929190613d81565b60405160208183030381529060405280519060200120905090565b5f65ffffffffffff8016821115611fa9576030826040517f6dfcc650000000000000000000000000000000000000000000000000000000008152600401611fa0929190613e14565b60405180910390fd5b819050919050565b5f60018211611fc257819050612146565b5f8290505f600190507001000000000000000000000000000000008210611ff257608082901c9150604081901b90505b68010000000000000000821061201157604082901c9150602081901b90505b640100000000821061202c57602082901c9150601081901b90505b62010000821061204557601082901c9150600881901b90505b610100821061205d57600882901c9150600481901b90505b6010821061207457600482901c9150600281901b90505b6004821061208457600181901b90505b600181600302901c905060018185816120a05761209f613e3b565b5b048201901c905060018185816120b9576120b8613e3b565b5b048201901c905060018185816120d2576120d1613e3b565b5b048201901c905060018185816120eb576120ea613e3b565b5b048201901c9050600181858161210457612103613e3b565b5b048201901c9050600181858161211d5761211c613e3b565b5b048201901c905061213f81858161213757612136613e3b565b5b0482116129b2565b8103925050505b919050565b5f825f528160205f2001905092915050565b5f5b818310156121c7575f61217284846129bd565b90508465ffffffffffff16612187878361214b565b5f015f9054906101000a900465ffffffffffff1665ffffffffffff1611156121b1578092506121c1565b6001816121be9190613a79565b93505b5061215f565b819050949350505050565b5f6121dc82610bc2565b9050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561221e57505f81115b1561244e575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612338575f5f6122a960095f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206111d56122a4866129e2565b612a4f565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161232d929190613e68565b60405180910390a250505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461244d575f5f6123be60095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206111c06123b9866129e2565b612a4f565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051612442929190613e68565b60405180910390a250505b5b505050565b5f815f01805490509050919050565b5f63ffffffff80168211156124b1576020826040517f6dfcc6500000000000000000000000000000000000000000000000000000000081526004016124a8929190613ec8565b60405180910390fd5b819050919050565b5f60075f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b606060ff5f1b831461251b5761251483612a8e565b90506125a6565b81805461252790613a1c565b80601f016020809104026020016040519081016040528092919081815260200182805461255390613a1c565b801561259e5780601f106125755761010080835404028352916020019161259e565b820191905f5260205f20905b81548152906001019060200180831161258157829003601f168201915b505050505090505b92915050565b5f6040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b5f5f5f7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0845f1c1115612628575f6003859250925092506126c9565b5f6001888888886040515f815260200160405260405161264b9493929190613eef565b6020604051602081039080840390855afa15801561266b573d5f5f3e3d5ffd5b5050506020604051035190505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036126bc575f60015f5f1b935093509350506126c9565b805f5f5f1b935093509350505b9450945094915050565b5f60038111156126e6576126e5613f32565b5b8260038111156126f9576126f8613f32565b5b0315612831576001600381111561271357612712613f32565b5b82600381111561272657612725613f32565b5b0361275d576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600381111561277157612770613f32565b5b82600381111561278457612783613f32565b5b036127c857805f1c6040517ffce698f70000000000000000000000000000000000000000000000000000000081526004016127bf91906133ae565b60405180910390fd5b6003808111156127db576127da613f32565b5b8260038111156127ee576127ed613f32565b5b0361283057806040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004016128279190613484565b60405180910390fd5b5b5050565b61283d613151565b825f018263ffffffff168154811061285857612857613f5f565b5b905f5260205f20016040518060400160405290815f82015f9054906101000a900465ffffffffffff1665ffffffffffff1665ffffffffffff1681526020015f820160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b61290f838383612b00565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036129a2575f61294b61085a565b90505f612956612d19565b90508082111561299f5781816040517f1cb15d26000000000000000000000000000000000000000000000000000000008152600401612996929190613e68565b60405180910390fd5b50505b6129ad838383612d3c565b505050565b5f8115159050919050565b5f60028284186129cd9190613f8c565b8284166129da9190613a79565b905092915050565b5f79ffffffffffffffffffffffffffffffffffffffffffffffffffff8016821115612a475760d0826040517f6dfcc650000000000000000000000000000000000000000000000000000000008152600401612a3e929190613ff5565b60405180910390fd5b819050919050565b5f5f612a82612a5c610d81565b612a72612a6888611ae1565b868863ffffffff16565b87612df49092919063ffffffff16565b91509150935093915050565b60605f612a9a83612e0f565b90505f602067ffffffffffffffff811115612ab857612ab7613b14565b5b6040519080825280601f01601f191660200182016040528015612aea5781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612b50578060025f828254612b449190613a79565b92505081905550612c1e565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015612bd9578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401612bd093929190613ca4565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612c65578060025f8282540392505081905550612caf565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612d0c91906133ae565b60405180910390a3505050565b5f79ffffffffffffffffffffffffffffffffffffffffffffffffffff8016905090565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612d8857612d85600a6111c0612d80846129e2565b612a4f565b50505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612dd457612dd1600a6111d5612dcc846129e2565b612a4f565b50505b612def612de084610b33565b612de984610b33565b836121e3565b505050565b5f5f612e03855f018585612e5d565b91509150935093915050565b5f5f60ff835f1c169050601f811115612e54576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b5f5f5f858054905090505f811115613069575f612e8687600184612e819190613d00565b61214b565b90505f815f015f9054906101000a900465ffffffffffff1690505f825f0160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1690508765ffffffffffff168265ffffffffffff161115612f17576040517f2520601d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff1603612f815786835f0160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555061305a565b8860405180604001604052808a65ffffffffffff1681526020018979ffffffffffffffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003905f5260205f20015f909190919091505f820151815f015f6101000a81548165ffffffffffff021916908365ffffffffffff1602179055506020820151815f0160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b80879550955050505050613149565b8560405180604001604052808765ffffffffffff1681526020018679ffffffffffffffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003905f5260205f20015f909190919091505f820151815f015f6101000a81548165ffffffffffff021916908365ffffffffffff1602179055506020820151815f0160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505f8492509250505b935093915050565b60405180604001604052805f65ffffffffffff1681526020015f79ffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6131c581613191565b81146131cf575f5ffd5b50565b5f813590506131e0816131bc565b92915050565b5f602082840312156131fb576131fa61318d565b5b5f613208848285016131d2565b91505092915050565b5f8115159050919050565b61322581613211565b82525050565b5f60208201905061323e5f83018461321c565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61328682613244565b613290818561324e565b93506132a081856020860161325e565b6132a98161326c565b840191505092915050565b5f6020820190508181035f8301526132cc818461327c565b905092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6132fd826132d4565b9050919050565b61330d816132f3565b8114613317575f5ffd5b50565b5f8135905061332881613304565b92915050565b5f819050919050565b6133408161332e565b811461334a575f5ffd5b50565b5f8135905061335b81613337565b92915050565b5f5f604083850312156133775761337661318d565b5b5f6133848582860161331a565b92505060206133958582860161334d565b9150509250929050565b6133a88161332e565b82525050565b5f6020820190506133c15f83018461339f565b92915050565b5f5f5f606084860312156133de576133dd61318d565b5b5f6133eb8682870161331a565b93505060206133fc8682870161331a565b925050604061340d8682870161334d565b9150509250925092565b5f819050919050565b61342981613417565b8114613433575f5ffd5b50565b5f8135905061344481613420565b92915050565b5f6020828403121561345f5761345e61318d565b5b5f61346c84828501613436565b91505092915050565b61347e81613417565b82525050565b5f6020820190506134975f830184613475565b92915050565b5f5f604083850312156134b3576134b261318d565b5b5f6134c085828601613436565b92505060206134d18582860161331a565b9150509250929050565b5f60ff82169050919050565b6134f0816134db565b82525050565b5f6020820190506135095f8301846134e7565b92915050565b5f602082840312156135245761352361318d565b5b5f6135318482850161334d565b91505092915050565b5f6020828403121561354f5761354e61318d565b5b5f61355c8482850161331a565b91505092915050565b61356e816132f3565b82525050565b5f6020820190506135875f830184613565565b92915050565b5f63ffffffff82169050919050565b6135a58161358d565b82525050565b5f6020820190506135be5f83018461359c565b92915050565b5f7fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6135f8816135c4565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b6136308161332e565b82525050565b5f6136418383613627565b60208301905092915050565b5f602082019050919050565b5f613663826135fe565b61366d8185613608565b935061367883613618565b805f5b838110156136a857815161368f8882613636565b975061369a8361364d565b92505060018101905061367b565b5085935050505092915050565b5f60e0820190506136c85f83018a6135ef565b81810360208301526136da818961327c565b905081810360408301526136ee818861327c565b90506136fd606083018761339f565b61370a6080830186613565565b61371760a0830185613475565b81810360c08301526137298184613659565b905098975050505050505050565b5f65ffffffffffff82169050919050565b61375181613737565b82525050565b5f60208201905061376a5f830184613748565b92915050565b613779816134db565b8114613783575f5ffd5b50565b5f8135905061379481613770565b92915050565b5f5f5f5f5f5f60c087890312156137b4576137b361318d565b5b5f6137c189828a0161331a565b96505060206137d289828a0161334d565b95505060406137e389828a0161334d565b94505060606137f489828a01613786565b935050608061380589828a01613436565b92505060a061381689828a01613436565b9150509295509295509295565b5f5f5f5f5f5f5f60e0888a03121561383e5761383d61318d565b5b5f61384b8a828b0161331a565b975050602061385c8a828b0161331a565b965050604061386d8a828b0161334d565b955050606061387e8a828b0161334d565b945050608061388f8a828b01613786565b93505060a06138a08a828b01613436565b92505060c06138b18a828b01613436565b91505092959891949750929550565b5f5f604083850312156138d6576138d561318d565b5b5f6138e38582860161331a565b92505060206138f48582860161331a565b9150509250929050565b6139078161358d565b8114613911575f5ffd5b50565b5f81359050613922816138fe565b92915050565b5f5f6040838503121561393e5761393d61318d565b5b5f61394b8582860161331a565b925050602061395c85828601613914565b9150509250929050565b61396f81613737565b82525050565b5f79ffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b6139a381613975565b82525050565b604082015f8201516139bd5f850182613966565b5060208201516139d0602085018261399a565b50505050565b5f6040820190506139e95f8301846139a9565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680613a3357607f821691505b602082108103613a4657613a456139ef565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f613a838261332e565b9150613a8e8361332e565b9250828201905080821115613aa657613aa5613a4c565b5b92915050565b7f45786365656473206d6178537570706c790000000000000000000000000000005f82015250565b5f613ae060118361324e565b9150613aeb82613aac565b602082019050919050565b5f6020820190508181035f830152613b0d81613ad4565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f608082019050613b545f830187613475565b613b616020830186613565565b613b6e604083018561339f565b613b7b606083018461339f565b95945050505050565b5f60c082019050613b975f830189613475565b613ba46020830188613565565b613bb16040830187613565565b613bbe606083018661339f565b613bcb608083018561339f565b613bd860a083018461339f565b979650505050505050565b5f604082019050613bf65f830185613565565b613c036020830184613565565b9392505050565b5f613c1482613975565b9150613c1f83613975565b9250828201905079ffffffffffffffffffffffffffffffffffffffffffffffffffff811115613c5157613c50613a4c565b5b92915050565b5f613c6182613975565b9150613c6c83613975565b9250828203905079ffffffffffffffffffffffffffffffffffffffffffffffffffff811115613c9e57613c9d613a4c565b5b92915050565b5f606082019050613cb75f830186613565565b613cc4602083018561339f565b613cd1604083018461339f565b949350505050565b5f604082019050613cec5f83018561339f565b613cf96020830184613748565b9392505050565b5f613d0a8261332e565b9150613d158361332e565b9250828203905081811115613d2d57613d2c613a4c565b5b92915050565b5f604082019050613d465f830185613565565b613d53602083018461339f565b9392505050565b5f604082019050613d6d5f830185613565565b613d7a6020830184613475565b9392505050565b5f60a082019050613d945f830188613475565b613da16020830187613475565b613dae6040830186613475565b613dbb606083018561339f565b613dc86080830184613565565b9695505050505050565b5f819050919050565b5f819050919050565b5f613dfe613df9613df484613dd2565b613ddb565b6134db565b9050919050565b613e0e81613de4565b82525050565b5f604082019050613e275f830185613e05565b613e34602083018461339f565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f604082019050613e7b5f83018561339f565b613e88602083018461339f565b9392505050565b5f819050919050565b5f613eb2613ead613ea884613e8f565b613ddb565b6134db565b9050919050565b613ec281613e98565b82525050565b5f604082019050613edb5f830185613eb9565b613ee8602083018461339f565b9392505050565b5f608082019050613f025f830187613475565b613f0f60208301866134e7565b613f1c6040830185613475565b613f296060830184613475565b95945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f613f968261332e565b9150613fa18361332e565b925082613fb157613fb0613e3b565b5b828204905092915050565b5f819050919050565b5f613fdf613fda613fd584613fbc565b613ddb565b6134db565b9050919050565b613fef81613fc5565b82525050565b5f6040820190506140085f830185613fe6565b614015602083018461339f565b939250505056fea26469706673582212203a7f86502aff131fcc723352ce37f90b8f5ead59b4e259f374c899693ee7870d64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161349e38038061349e83398181016040528101906100319190610296565b6040518060400160405280600f81526020017f446f6e6174696f6e5265636569707400000000000000000000000000000000008152506040518060400160405280600b81526020017f4252414752454345495054000000000000000000000000000000000000000000815250815f90816100ab91906104fe565b5080600190816100bb91906104fe565b5050506100d05f5f1b826100d760201b60201c565b50506105cd565b5f6100e883836101cd60201b60201c565b6101c357600160065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061016061023160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506101c7565b5f90505b92915050565b5f60065f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102658261023c565b9050919050565b6102758161025b565b811461027f575f5ffd5b50565b5f815190506102908161026c565b92915050565b5f602082840312156102ab576102aa610238565b5b5f6102b884828501610282565b91505092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061033c57607f821691505b60208210810361034f5761034e6102f8565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026103b17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610376565b6103bb8683610376565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f6103ff6103fa6103f5846103d3565b6103dc565b6103d3565b9050919050565b5f819050919050565b610418836103e5565b61042c61042482610406565b848454610382565b825550505050565b5f5f905090565b610443610434565b61044e81848461040f565b505050565b5b81811015610471576104665f8261043b565b600181019050610454565b5050565b601f8211156104b65761048781610355565b61049084610367565b8101602085101561049f578190505b6104b36104ab85610367565b830182610453565b50505b505050565b5f82821c905092915050565b5f6104d65f19846008026104bb565b1980831691505092915050565b5f6104ee83836104c7565b9150826002028217905092915050565b610507826102c1565b67ffffffffffffffff8111156105205761051f6102cb565b5b61052a8254610325565b610535828285610475565b5f60209050601f831160018114610566575f8415610554578287015190505b61055e85826104e3565b8655506105c5565b601f19841661057486610355565b5f5b8281101561059b57848901518255600182019150602085019450602081019050610576565b868310156105b857848901516105b4601f8916826104c7565b8355505b6001600288020188555050505b505050505050565b612ec4806105da5f395ff3fe608060405234801561000f575f5ffd5b5060043610610156575f3560e01c806391d14854116100c1578063c87b56dd1161007a578063c87b56dd146103fb578063cf456ae71461042b578063d3fc986414610447578063d539139314610477578063d547741f14610495578063e985e9c5146104b157610156565b806391d148541461032757806395d89b4114610357578063a217fddf14610375578063a22cb46514610393578063b63e6ac3146103af578063b88d4fde146103df57610156565b8063248a9ca311610113578063248a9ca3146102435780632f2ff15d1461027357806336568abe1461028f57806342842e0e146102ab5780636352211e146102c757806370a08231146102f757610156565b806301ffc9a71461015a57806306fdde031461018a578063081812fc146101a8578063095ea7b3146101d85780630f7ee1ec146101f457806323b872dd14610227575b5f5ffd5b610174600480360381019061016f9190612115565b6104e1565b604051610181919061215a565b60405180910390f35b6101926104f2565b60405161019f91906121e3565b60405180910390f35b6101c260048036038101906101bd9190612236565b610581565b6040516101cf91906122a0565b60405180910390f35b6101f260048036038101906101ed91906122e3565b61059c565b005b61020e60048036038101906102099190612236565b6105b2565b60405161021e9493929190612330565b60405180910390f35b610241600480360381019061023c919061237a565b610683565b005b61025d600480360381019061025891906123fd565b610782565b60405161026a9190612437565b60405180910390f35b61028d60048036038101906102889190612450565b61079f565b005b6102a960048036038101906102a49190612450565b6107c1565b005b6102c560048036038101906102c0919061237a565b61083c565b005b6102e160048036038101906102dc9190612236565b61085b565b6040516102ee91906122a0565b60405180910390f35b610311600480360381019061030c919061248e565b61086c565b60405161031e91906124b9565b60405180910390f35b610341600480360381019061033c9190612450565b610922565b60405161034e919061215a565b60405180910390f35b61035f610986565b60405161036c91906121e3565b60405180910390f35b61037d610a16565b60405161038a9190612437565b60405180910390f35b6103ad60048036038101906103a891906124fc565b610a1c565b005b6103c960048036038101906103c49190612236565b610a32565b6040516103d69190612600565b60405180910390f35b6103f960048036038101906103f4919061274c565b610b5f565b005b61041560048036038101906104109190612236565b610b84565b60405161042291906121e3565b60405180910390f35b610445600480360381019061044091906124fc565b610bea565b005b610461600480360381019061045c9190612829565b610c5d565b60405161046e91906124b9565b60405180910390f35b61047f610e03565b60405161048c9190612437565b60405180910390f35b6104af60048036038101906104aa9190612450565b610e27565b005b6104cb60048036038101906104c6919061289a565b610e49565b6040516104d8919061215a565b60405180910390f35b5f6104eb82610ed7565b9050919050565b60605f805461050090612905565b80601f016020809104026020016040519081016040528092919081815260200182805461052c90612905565b80156105775780601f1061054e57610100808354040283529160200191610577565b820191905f5260205f20905b81548152906001019060200180831161055a57829003601f168201915b5050505050905090565b5f61058b82610f50565b5061059582610fd6565b9050919050565b6105ae82826105a961100f565b611016565b5050565b6008602052805f5260405f205f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101549080600201549080600301805461060290612905565b80601f016020809104026020016040519081016040528092919081815260200182805461062e90612905565b80156106795780601f1061065057610100808354040283529160200191610679565b820191905f5260205f20905b81548152906001019060200180831161065c57829003601f168201915b5050505050905084565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106f3575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016106ea91906122a0565b60405180910390fd5b5f610706838361070161100f565b611028565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461077c578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161077393929190612935565b60405180910390fd5b50505050565b5f60065f8381526020019081526020015f20600101549050919050565b6107a882610782565b6107b1816110f2565b6107bb8383611106565b50505050565b6107c961100f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461082d576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61083782826111f0565b505050565b61085683838360405180602001604052805f815250610b5f565b505050565b5f61086582610f50565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108dd575f6040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016108d491906122a0565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f60065f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b60606001805461099590612905565b80601f01602080910402602001604051908101604052809291908181526020018280546109c190612905565b8015610a0c5780601f106109e357610100808354040283529160200191610a0c565b820191905f5260205f20905b8154815290600101906020018083116109ef57829003601f168201915b5050505050905090565b5f5f1b81565b610a2e610a2761100f565b83836112da565b5050565b610a3a612074565b610a4382610f50565b5060085f8381526020019081526020015f206040518060800160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382018054610ad890612905565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0490612905565b8015610b4f5780601f10610b2657610100808354040283529160200191610b4f565b820191905f5260205f20905b815481529060010190602001808311610b3257829003601f168201915b5050505050815250509050919050565b610b6a848484610683565b610b7e610b7561100f565b85858585611443565b50505050565b6060610b8f82610f50565b505f610b996115ef565b90505f815111610bb75760405180602001604052805f815250610be2565b80610bc184611605565b604051602001610bd29291906129a4565b6040516020818303038152906040525b915050919050565b5f5f1b610bf6816110f2565b8115610c2c57610c267f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a684611106565b50610c58565b610c567f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6846111f0565b505b505050565b5f7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610c88816110f2565b5f60075f815480929190610c9b906129f4565b91905055905060405180608001604052808873ffffffffffffffffffffffffffffffffffffffff16815260200187815260200142815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081525060085f8381526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201556060820151816003019081610d999190612bdb565b50905050610da787826116cf565b8673ffffffffffffffffffffffffffffffffffffffff16817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea588604051610dee91906124b9565b60405180910390a38092505050949350505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610e3082610782565b610e39816110f2565b610e4383836111f0565b50505050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610f495750610f48826116ec565b5b9050919050565b5f5f610f5b836117cd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610fcd57826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610fc491906124b9565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b6110238383836001611806565b505050565b5f5f611033846117cd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561109d57505f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156110dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d490612d1a565b60405180910390fd5b6110e88585856119c5565b9150509392505050565b611103816110fe61100f565b611bd0565b50565b5f6111118383610922565b6111e657600160065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061118361100f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506111ea565b5f90505b92915050565b5f6111fb8383610922565b156112d0575f60065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061126d61100f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a4600190506112d4565b5f90505b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361134a57816040517f5b08ba1800000000000000000000000000000000000000000000000000000000815260040161134191906122a0565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611436919061215a565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b11156115e8578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b81526004016114a19493929190612d8a565b6020604051808303815f875af19250505080156114dc57506040513d601f19601f820116820180604052508101906114d99190612de8565b60015b61155d573d805f811461150a576040519150601f19603f3d011682016040523d82523d5f602084013e61150f565b606091505b505f81510361155557836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161154c91906122a0565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146115e657836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016115dd91906122a0565b60405180910390fd5b505b5050505050565b606060405180602001604052805f815250905090565b60605f600161161384611c21565b0190505f8167ffffffffffffffff81111561163157611630612628565b5b6040519080825280601f01601f1916602001820160405280156116635781602001600182028036833780820191505090505b5090505f82602083010190505b6001156116c4578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816116b9576116b8612e13565b5b0494505f8503611670575b819350505050919050565b6116e8828260405180602001604052805f815250611d72565b5050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806117b657507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806117c657506117c582611d95565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061183e57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611970575f61184d84610f50565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156118b757508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156118ca57506118c88184610e49565b155b1561190c57826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161190391906122a0565b60405180910390fd5b811561196e57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f5f6119d0846117cd565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611a1157611a10818486611dfe565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611a9c57611a505f855f5f611806565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611b1b57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b611bda8282610922565b611c1d5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401611c14929190612e40565b60405180910390fd5b5050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611c7d577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611c7357611c72612e13565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611cba576d04ee2d6d415b85acef81000000008381611cb057611caf612e13565b5b0492506020810190505b662386f26fc100008310611ce957662386f26fc100008381611cdf57611cde612e13565b5b0492506010810190505b6305f5e1008310611d12576305f5e1008381611d0857611d07612e13565b5b0492506008810190505b6127108310611d37576127108381611d2d57611d2c612e13565b5b0492506004810190505b60648310611d5a5760648381611d5057611d4f612e13565b5b0492506002810190505b600a8310611d69576001810190505b80915050919050565b611d7c8383611ec1565b611d90611d8761100f565b5f858585611443565b505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611e09838383611fb4565b611ebc575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611e7d57806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611e7491906124b9565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611eb3929190612e67565b60405180910390fd5b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611f31575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611f2891906122a0565b60405180910390fd5b5f611f3d83835f611028565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611faf575f6040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401611fa691906122a0565b60405180910390fd5b505050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561206b57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061202c575061202b8484610e49565b5b8061206a57508273ffffffffffffffffffffffffffffffffffffffff1661205283610fd6565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b60405180608001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f8152602001606081525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6120f4816120c0565b81146120fe575f5ffd5b50565b5f8135905061210f816120eb565b92915050565b5f6020828403121561212a576121296120b8565b5b5f61213784828501612101565b91505092915050565b5f8115159050919050565b61215481612140565b82525050565b5f60208201905061216d5f83018461214b565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6121b582612173565b6121bf818561217d565b93506121cf81856020860161218d565b6121d88161219b565b840191505092915050565b5f6020820190508181035f8301526121fb81846121ab565b905092915050565b5f819050919050565b61221581612203565b811461221f575f5ffd5b50565b5f813590506122308161220c565b92915050565b5f6020828403121561224b5761224a6120b8565b5b5f61225884828501612222565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61228a82612261565b9050919050565b61229a81612280565b82525050565b5f6020820190506122b35f830184612291565b92915050565b6122c281612280565b81146122cc575f5ffd5b50565b5f813590506122dd816122b9565b92915050565b5f5f604083850312156122f9576122f86120b8565b5b5f612306858286016122cf565b925050602061231785828601612222565b9150509250929050565b61232a81612203565b82525050565b5f6080820190506123435f830187612291565b6123506020830186612321565b61235d6040830185612321565b818103606083015261236f81846121ab565b905095945050505050565b5f5f5f60608486031215612391576123906120b8565b5b5f61239e868287016122cf565b93505060206123af868287016122cf565b92505060406123c086828701612222565b9150509250925092565b5f819050919050565b6123dc816123ca565b81146123e6575f5ffd5b50565b5f813590506123f7816123d3565b92915050565b5f60208284031215612412576124116120b8565b5b5f61241f848285016123e9565b91505092915050565b612431816123ca565b82525050565b5f60208201905061244a5f830184612428565b92915050565b5f5f60408385031215612466576124656120b8565b5b5f612473858286016123e9565b9250506020612484858286016122cf565b9150509250929050565b5f602082840312156124a3576124a26120b8565b5b5f6124b0848285016122cf565b91505092915050565b5f6020820190506124cc5f830184612321565b92915050565b6124db81612140565b81146124e5575f5ffd5b50565b5f813590506124f6816124d2565b92915050565b5f5f60408385031215612512576125116120b8565b5b5f61251f858286016122cf565b9250506020612530858286016124e8565b9150509250929050565b61254381612280565b82525050565b61255281612203565b82525050565b5f82825260208201905092915050565b5f61257282612173565b61257c8185612558565b935061258c81856020860161218d565b6125958161219b565b840191505092915050565b5f608083015f8301516125b55f86018261253a565b5060208301516125c86020860182612549565b5060408301516125db6040860182612549565b50606083015184820360608601526125f38282612568565b9150508091505092915050565b5f6020820190508181035f83015261261881846125a0565b905092915050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61265e8261219b565b810181811067ffffffffffffffff8211171561267d5761267c612628565b5b80604052505050565b5f61268f6120af565b905061269b8282612655565b919050565b5f67ffffffffffffffff8211156126ba576126b9612628565b5b6126c38261219b565b9050602081019050919050565b828183375f83830152505050565b5f6126f06126eb846126a0565b612686565b90508281526020810184848401111561270c5761270b612624565b5b6127178482856126d0565b509392505050565b5f82601f83011261273357612732612620565b5b81356127438482602086016126de565b91505092915050565b5f5f5f5f60808587031215612764576127636120b8565b5b5f612771878288016122cf565b9450506020612782878288016122cf565b935050604061279387828801612222565b925050606085013567ffffffffffffffff8111156127b4576127b36120bc565b5b6127c08782880161271f565b91505092959194509250565b5f5ffd5b5f5ffd5b5f5f83601f8401126127e9576127e8612620565b5b8235905067ffffffffffffffff811115612806576128056127cc565b5b602083019150836001820283011115612822576128216127d0565b5b9250929050565b5f5f5f5f60608587031215612841576128406120b8565b5b5f61284e878288016122cf565b945050602061285f87828801612222565b935050604085013567ffffffffffffffff8111156128805761287f6120bc565b5b61288c878288016127d4565b925092505092959194509250565b5f5f604083850312156128b0576128af6120b8565b5b5f6128bd858286016122cf565b92505060206128ce858286016122cf565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061291c57607f821691505b60208210810361292f5761292e6128d8565b5b50919050565b5f6060820190506129485f830186612291565b6129556020830185612321565b6129626040830184612291565b949350505050565b5f81905092915050565b5f61297e82612173565b612988818561296a565b935061299881856020860161218d565b80840191505092915050565b5f6129af8285612974565b91506129bb8284612974565b91508190509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6129fe82612203565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612a3057612a2f6129c7565b5b600182019050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302612a977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612a5c565b612aa18683612a5c565b95508019841693508086168417925050509392505050565b5f819050919050565b5f612adc612ad7612ad284612203565b612ab9565b612203565b9050919050565b5f819050919050565b612af583612ac2565b612b09612b0182612ae3565b848454612a68565b825550505050565b5f5f905090565b612b20612b11565b612b2b818484612aec565b505050565b5b81811015612b4e57612b435f82612b18565b600181019050612b31565b5050565b601f821115612b9357612b6481612a3b565b612b6d84612a4d565b81016020851015612b7c578190505b612b90612b8885612a4d565b830182612b30565b50505b505050565b5f82821c905092915050565b5f612bb35f1984600802612b98565b1980831691505092915050565b5f612bcb8383612ba4565b9150826002028217905092915050565b612be482612173565b67ffffffffffffffff811115612bfd57612bfc612628565b5b612c078254612905565b612c12828285612b52565b5f60209050601f831160018114612c43575f8415612c31578287015190505b612c3b8582612bc0565b865550612ca2565b601f198416612c5186612a3b565b5f5b82811015612c7857848901518255600182019150602085019450602081019050612c53565b86831015612c955784890151612c91601f891682612ba4565b8355505b6001600288020188555050505b505050505050565b7f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f5f8201527f756e6420616e642063616e6e6f74206265207472616e73666572726564000000602082015250565b5f612d04603d8361217d565b9150612d0f82612caa565b604082019050919050565b5f6020820190508181035f830152612d3181612cf8565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f612d5c82612d38565b612d668185612d42565b9350612d7681856020860161218d565b612d7f8161219b565b840191505092915050565b5f608082019050612d9d5f830187612291565b612daa6020830186612291565b612db76040830185612321565b8181036060830152612dc98184612d52565b905095945050505050565b5f81519050612de2816120eb565b92915050565b5f60208284031215612dfd57612dfc6120b8565b5b5f612e0a84828501612dd4565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f604082019050612e535f830185612291565b612e606020830184612428565b9392505050565b5f604082019050612e7a5f830185612291565b612e876020830184612321565b939250505056fea26469706673582212201219a7bb73fcac3c45019787df5e31b4817ddceeebff29a3ae469f9af0a4d1d864736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611d0b380380611d0b83398181016040528101906100319190610238565b6100435f5f1b8261007b60201b60201c565b506100747f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea098261007b60201b60201c565b5050610263565b5f61008c838361017060201b60201c565b6101665760015f5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506101036101d360201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061016a565b5f90505b92915050565b5f5f5f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610207826101de565b9050919050565b610217816101fd565b8114610221575f5ffd5b50565b5f815190506102328161020e565b92915050565b5f6020828403121561024d5761024c6101da565b5b5f61025a84828501610224565b91505092915050565b611a9b806102705f395ff3fe608060405234801561000f575f5ffd5b50600436106100f3575f3560e01c8063a217fddf11610095578063d42b291c11610064578063d42b291c146102aa578063d547741f146102c6578063d7bfe386146102e2578063e7705db614610312576100f3565b8063a217fddf1461020d578063a622ee7c1461022b578063b9209e331461025e578063ceb68c231461028e576100f3565b806336568abe116100d157806336568abe1461017357806374d4e4911461018f57806390229af7146101ad57806391d14854146101dd576100f3565b806301ffc9a7146100f7578063248a9ca3146101275780632f2ff15d14610157575b5f5ffd5b610111600480360381019061010c919061106e565b610330565b60405161011e91906110b3565b60405180910390f35b610141600480360381019061013c91906110ff565b6103a9565b60405161014e9190611139565b60405180910390f35b610171600480360381019061016c91906111ac565b6103c5565b005b61018d600480360381019061018891906111ac565b6103e7565b005b610197610462565b6040516101a49190611202565b60405180910390f35b6101c760048036038101906101c2919061121b565b61046e565b6040516101d4919061139f565b60405180910390f35b6101f760048036038101906101f291906111ac565b610638565b60405161020491906110b3565b60405180910390f35b61021561069b565b6040516102229190611139565b60405180910390f35b6102456004803603810190610240919061121b565b6106a1565b6040516102559493929190611416565b60405180910390f35b6102786004803603810190610273919061121b565b6107f1565b60405161028591906110b3565b60405180910390f35b6102a860048036038101906102a3919061121b565b610845565b005b6102c460048036038101906102bf91906114eb565b610997565b005b6102e060048036038101906102db91906111ac565b610caf565b005b6102fc60048036038101906102f791906115b8565b610cd1565b60405161030991906115f2565b60405180910390f35b61031a610d0c565b6040516103279190611139565b60405180910390f35b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103a257506103a182610d30565b5b9050919050565b5f5f5f8381526020019081526020015f20600101549050919050565b6103ce826103a9565b6103d781610d99565b6103e18383610dad565b50505050565b6103ef610e96565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610453576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61045d8282610e9d565b505050565b5f600280549050905090565b610476610fd7565b60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206040518060800160405290815f82015f9054906101000a900460ff161515151581526020015f820160019054906101000a900460ff1660048111156104fb576104fa611255565b5b600481111561050d5761050c611255565b5b815260200160018201805461052190611638565b80601f016020809104026020016040519081016040528092919081815260200182805461054d90611638565b80156105985780601f1061056f57610100808354040283529160200191610598565b820191905f5260205f20905b81548152906001019060200180831161057b57829003601f168201915b505050505081526020016002820180546105b190611638565b80601f01602080910402602001604051908101604052809291908181526020018280546105dd90611638565b80156106285780601f106105ff57610100808354040283529160200191610628565b820191905f5260205f20905b81548152906001019060200180831161060b57829003601f168201915b5050505050815250509050919050565b5f5f5f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f5f1b81565b6001602052805f5260405f205f91509050805f015f9054906101000a900460ff1690805f0160019054906101000a900460ff16908060010180546106e490611638565b80601f016020809104026020016040519081016040528092919081815260200182805461071090611638565b801561075b5780601f106107325761010080835404028352916020019161075b565b820191905f5260205f20905b81548152906001019060200180831161073e57829003601f168201915b50505050509080600201805461077090611638565b80601f016020809104026020016040519081016040528092919081815260200182805461079c90611638565b80156107e75780601f106107be576101008083540402835291602001916107e7565b820191905f5260205f20905b8154815290600101906020018083116107ca57829003601f168201915b5050505050905084565b5f60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f9054906101000a900460ff169050919050565b7f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0961086f81610d99565b60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f9054906101000a900460ff166108fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f1906116b2565b60405180910390fd5b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff167fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a60405160405180910390a25050565b7f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea096109c181610d99565b5f73ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1603610a2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a269061171a565b60405180910390fd5b60015f8873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f9054906101000a900460ff16610ae057600287908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b6040518060800160405280600115158152602001876004811115610b0757610b06611255565b5b815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f82011690508083019250505050505050815260200184848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081525060015f8973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f820151815f015f6101000a81548160ff0219169083151502179055506020820151815f0160016101000a81548160ff02191690836004811115610c2057610c1f611255565b5b02179055506040820151816001019081610c3a9190611905565b506060820151816002019081610c509190611905565b509050508673ffffffffffffffffffffffffffffffffffffffff167f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec8878787604051610c9e93929190611a0e565b60405180910390a250505050505050565b610cb8826103a9565b610cc181610d99565b610ccb8383610e9d565b50505050565b60028181548110610ce0575f80fd5b905f5260205f20015f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f0ce23c3e399818cfee81a7ab0880f714e53d7672b08df0fa62f2843416e1ea0981565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610daa81610da5610e96565b610f86565b50565b5f610db88383610638565b610e8c5760015f5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550610e29610e96565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610e90565b5f90505b92915050565b5f33905090565b5f610ea88383610638565b15610f7c575f5f5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550610f19610e96565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050610f80565b5f90505b92915050565b610f908282610638565b610fd35780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401610fca929190611a3e565b60405180910390fd5b5050565b60405180608001604052805f151581526020015f6004811115610ffd57610ffc611255565b5b815260200160608152602001606081525090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61104d81611019565b8114611057575f5ffd5b50565b5f8135905061106881611044565b92915050565b5f6020828403121561108357611082611011565b5b5f6110908482850161105a565b91505092915050565b5f8115159050919050565b6110ad81611099565b82525050565b5f6020820190506110c65f8301846110a4565b92915050565b5f819050919050565b6110de816110cc565b81146110e8575f5ffd5b50565b5f813590506110f9816110d5565b92915050565b5f6020828403121561111457611113611011565b5b5f611121848285016110eb565b91505092915050565b611133816110cc565b82525050565b5f60208201905061114c5f83018461112a565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61117b82611152565b9050919050565b61118b81611171565b8114611195575f5ffd5b50565b5f813590506111a681611182565b92915050565b5f5f604083850312156111c2576111c1611011565b5b5f6111cf858286016110eb565b92505060206111e085828601611198565b9150509250929050565b5f819050919050565b6111fc816111ea565b82525050565b5f6020820190506112155f8301846111f3565b92915050565b5f602082840312156112305761122f611011565b5b5f61123d84828501611198565b91505092915050565b61124f81611099565b82525050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b6005811061129357611292611255565b5b50565b5f8190506112a382611282565b919050565b5f6112b282611296565b9050919050565b6112c2816112a8565b82525050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61130a826112c8565b61131481856112d2565b93506113248185602086016112e2565b61132d816112f0565b840191505092915050565b5f608083015f83015161134d5f860182611246565b50602083015161136060208601826112b9565b50604083015184820360408601526113788282611300565b915050606083015184820360608601526113928282611300565b9150508091505092915050565b5f6020820190508181035f8301526113b78184611338565b905092915050565b6113c8816112a8565b82525050565b5f82825260208201905092915050565b5f6113e8826112c8565b6113f281856113ce565b93506114028185602086016112e2565b61140b816112f0565b840191505092915050565b5f6080820190506114295f8301876110a4565b61143660208301866113bf565b818103604083015261144881856113de565b9050818103606083015261145c81846113de565b905095945050505050565b60058110611473575f5ffd5b50565b5f8135905061148481611467565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126114ab576114aa61148a565b5b8235905067ffffffffffffffff8111156114c8576114c761148e565b5b6020830191508360018202830111156114e4576114e3611492565b5b9250929050565b5f5f5f5f5f5f6080878903121561150557611504611011565b5b5f61151289828a01611198565b965050602061152389828a01611476565b955050604087013567ffffffffffffffff81111561154457611543611015565b5b61155089828a01611496565b9450945050606087013567ffffffffffffffff81111561157357611572611015565b5b61157f89828a01611496565b92509250509295509295509295565b611597816111ea565b81146115a1575f5ffd5b50565b5f813590506115b28161158e565b92915050565b5f602082840312156115cd576115cc611011565b5b5f6115da848285016115a4565b91505092915050565b6115ec81611171565b82525050565b5f6020820190506116055f8301846115e3565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061164f57607f821691505b6020821081036116625761166161160b565b5b50919050565b7f5661756c74206e6f7420766572696669656400000000000000000000000000005f82015250565b5f61169c6012836113ce565b91506116a782611668565b602082019050919050565b5f6020820190508181035f8301526116c981611690565b9050919050565b7f496e76616c6964206164647265737300000000000000000000000000000000005f82015250565b5f611704600f836113ce565b915061170f826116d0565b602082019050919050565b5f6020820190508181035f830152611731816116f8565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026117c17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611786565b6117cb8683611786565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6118066118016117fc846111ea565b6117e3565b6111ea565b9050919050565b5f819050919050565b61181f836117ec565b61183361182b8261180d565b848454611792565b825550505050565b5f5f905090565b61184a61183b565b611855818484611816565b505050565b5b818110156118785761186d5f82611842565b60018101905061185b565b5050565b601f8211156118bd5761188e81611765565b61189784611777565b810160208510156118a6578190505b6118ba6118b285611777565b83018261185a565b50505b505050565b5f82821c905092915050565b5f6118dd5f19846008026118c2565b1980831691505092915050565b5f6118f583836118ce565b9150826002028217905092915050565b61190e826112c8565b67ffffffffffffffff81111561192757611926611738565b5b6119318254611638565b61193c82828561187c565b5f60209050601f83116001811461196d575f841561195b578287015190505b61196585826118ea565b8655506119cc565b601f19841661197b86611765565b5f5b828110156119a25784890151825560018201915060208501945060208101905061197d565b868310156119bf57848901516119bb601f8916826118ce565b8355505b6001600288020188555050505b505050505050565b828183375f83830152505050565b5f6119ed83856113ce565b93506119fa8385846119d4565b611a03836112f0565b840190509392505050565b5f604082019050611a215f8301866113bf565b8181036020830152611a348184866119e2565b9050949350505050565b5f604082019050611a515f8301856115e3565b611a5e602083018461112a565b939250505056fea2646970667358221220d1ecc8869cfd7a2b6669928a18464e1aa530a6a3443e64ff81eb7580729261f664736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051613391380380613391833981810160405281019061003191906100dc565b60015f819055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610107565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100ab82610082565b9050919050565b6100bb816100a1565b81146100c5575f5ffd5b50565b5f815190506100d6816100b2565b92915050565b5f602082840312156100f1576100f061007e565b5b5f6100fe848285016100c8565b91505092915050565b61327d806101145f395ff3fe608060405234801561000f575f5ffd5b50600436106100f3575f3560e01c80637b10399911610095578063d6bd07ee11610064578063d6bd07ee146102b9578063d7423858146102d5578063f07a380e146102f1578063f23a6e611461030d576100f3565b80637b1039991461021f57806381bd34d21461023d578063bc197c811461026d578063c2fe51851461029d576100f3565b80632ff1d0f9116100d15780632ff1d0f91461018757806335f81b87146101a3578063380ff999146101bf5780636f39becd146101ef576100f3565b806301ffc9a7146100f75780630412619614610127578063150b7a0214610157575b5f5ffd5b610111600480360381019061010c9190612253565b61033d565b60405161011e9190612298565b60405180910390f35b610141600480360381019061013c919061233e565b6103b6565b60405161014e919061238b565b60405180910390f35b610171600480360381019061016c91906124e0565b6103d6565b60405161017e919061256f565b60405180910390f35b6101a1600480360381019061019c9190612588565b610711565b005b6101bd60048036038101906101b891906125d8565b610b44565b005b6101d960048036038101906101d4919061264f565b610b68565b6040516101e6919061238b565b60405180910390f35b6102096004803603810190610204919061233e565b610b93565b60405161021691906126ae565b60405180910390f35b610227610bd0565b6040516102349190612722565b60405180910390f35b6102576004803603810190610252919061264f565b610bf5565b604051610264919061238b565b60405180910390f35b610287600480360381019061028291906127ff565b610c20565b604051610294919061256f565b60405180910390f35b6102b760048036038101906102b291906128ca565b61104b565b005b6102d360048036038101906102ce919061292e565b61106d565b005b6102ef60048036038101906102ea919061264f565b611090565b005b61030b6004803603810190610306919061233e565b6110b1565b005b61032760048036038101906103229190612992565b6113cd565b604051610334919061256f565b60405180910390f35b5f7f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103af57506103ae8261175a565b5b9050919050565b6004602052815f5260405f20602052805f5260405f205f91509150505481565b5f6103df6117c3565b5f8490505f5f905060208451036104c55760015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33876040518263ffffffff1660e01b815260040161044a91906126ae565b602060405180830381865afa158015610465573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104899190612a4f565b156104a957838060200190518101906104a29190612ab5565b91506104c0565b838060200190518101906104bd9190612af4565b90505b6104ec565b60408451036104eb57838060200190518101906104e29190612b1f565b80925081935050505b5b8160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8781526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f5f8211610584575f610591565b81426105909190612b8a565b5b90508060045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8881526020019081526020015f20819055505f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b815260040161063f91906126ae565b5f60405180830381865afa158015610659573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906106819190612d54565b6040015190508373ffffffffffffffffffffffffffffffffffffffff16873373ffffffffffffffffffffffffffffffffffffffff167f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad384866040516106e7929190612ded565b60405180910390a46106fb89898989611807565b94505050505061070961181a565b949350505050565b6107196117c3565b8060035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205410156107e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107da90612e65565b60405180910390fd5b60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20544210156108ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a490612ecd565b60405180910390fd5b8060035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546109439190612eeb565b925050819055505f60035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205403610a65575f60055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505b8273ffffffffffffffffffffffffffffffffffffffff1663f242432a303385856040518563ffffffff1660e01b8152600401610aa49493929190612f51565b5f604051808303815f87803b158015610abb575f5ffd5b505af1158015610acd573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f984604051610b2f919061238b565b60405180910390a4610b3f61181a565b505050565b610b4c6117c3565b610b598585858585611823565b610b6161181a565b5050505050565b6005602052825f5260405f20602052815f5260405f20602052805f5260405f205f9250925050505481565b6002602052815f5260405f20602052805f5260405f205f915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6003602052825f5260405f20602052815f5260405f20602052805f5260405f205f9250925050505481565b5f610c296117c3565b5f8590505f5f90506020845103610d0f5760015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33886040518263ffffffff1660e01b8152600401610c9491906126ae565b602060405180830381865afa158015610caf573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cd39190612a4f565b15610cf35783806020019051810190610cec9190612ab5565b9150610d0a565b83806020019051810190610d079190612af4565b90505b610d36565b6040845103610d355783806020019051810190610d2c9190612b1f565b80925081935050505b5b5f5f8211610d44575f610d51565b8142610d509190612b8a565b5b90505f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b8152600401610dae91906126ae565b5f60405180830381865afa158015610dc8573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f82011682018060405250810190610df09190612d54565b6040015190505f5f90505b885181101561102657878181518110610e1757610e16612fa7565b5b602002602001015160035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8b8481518110610e7057610e6f612fa7565b5b602002602001015181526020019081526020015f205f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254610ece9190612b8a565b925050819055508260055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8b8481518110610f2757610f26612fa7565b5b602002602001015181526020019081526020015f205f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508473ffffffffffffffffffffffffffffffffffffffff16898281518110610fa557610fa4612fa7565b5b60200260200101513373ffffffffffffffffffffffffffffffffffffffff167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358b8581518110610ff857610ff7612fa7565b5b6020026020010151868860405161101193929190612fd4565b60405180910390a48080600101915050610dfb565b506110348a8a8a8a8a611d7b565b94505050505061104261181a565b95945050505050565b6110536117c3565b61105f84848484611d8f565b61106761181a565b50505050565b6110756117c3565b611082848484845f611823565b61108a61181a565b50505050565b6110986117c3565b6110a48383835f611d8f565b6110ac61181a565b505050565b6110b96117c3565b3373ffffffffffffffffffffffffffffffffffffffff1660025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611192576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111899061305a565b60405180910390fd5b60045f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8281526020019081526020015f2054421015611221576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121890612ecd565b60405180910390fd5b5f60025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60045f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f20819055508173ffffffffffffffffffffffffffffffffffffffff166342842e0e3033846040518463ffffffff1660e01b815260040161133993929190613078565b5f604051808303815f87803b158015611350575f5ffd5b505af1158015611362573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16818373ffffffffffffffffffffffffffffffffffffffff167f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c0660405160405180910390a46113c961181a565b5050565b5f6113d66117c3565b5f8590505f5f905060208451036114bc5760015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33886040518263ffffffff1660e01b815260040161144191906126ae565b602060405180830381865afa15801561145c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114809190612a4f565b156114a057838060200190518101906114999190612ab5565b91506114b7565b838060200190518101906114b49190612af4565b90505b6114e3565b60408451036114e257838060200190518101906114d99190612b1f565b80925081935050505b5b8460035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8881526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546115799190612b8a565b925050819055505f5f821161158e575f61159b565b814261159a9190612b8a565b5b90508060055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8981526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b815260040161168491906126ae565b5f60405180830381865afa15801561169e573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906116c69190612d54565b6040015190508373ffffffffffffffffffffffffffffffffffffffff16883373ffffffffffffffffffffffffffffffffffffffff167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358a858760405161172e93929190612fd4565b60405180910390a46117438a8a8a8a8a6121d9565b94505050505061175161181a565b95945050505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60025f54036117fe576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f81905550565b5f63150b7a0260e01b9050949350505050565b60015f81905550565b8260035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205410156118ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e490612e65565b60405180910390fd5b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33836040518263ffffffff1660e01b815260040161194791906126ae565b602060405180830381865afa158015611962573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119869190612a4f565b6119c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119bc906130f7565b60405180910390fd5b60055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054421015611a8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a8690612ecd565b60405180910390fd5b8260035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254611b259190612eeb565b925050819055505f60035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205403611c47575f60055f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505b60605f821115611c7a573382604051602001611c64929190613115565b6040516020818303038152906040529050611c9d565b33604051602001611c8b91906126ae565b60405160208183030381529060405290505b8573ffffffffffffffffffffffffffffffffffffffff1663f242432a30858888866040518663ffffffff1660e01b8152600401611cde95949392919061317e565b5f604051808303815f87803b158015611cf5575f5ffd5b505af1158015611d07573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16858773ffffffffffffffffffffffffffffffffffffffff167fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd18787604051611d6b9291906131d6565b60405180910390a4505050505050565b5f63bc197c8160e01b905095945050505050565b3373ffffffffffffffffffffffffffffffffffffffff1660025f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611e68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e5f9061305a565b60405180910390fd5b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33836040518263ffffffff1660e01b8152600401611ec291906126ae565b602060405180830381865afa158015611edd573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f019190612a4f565b611f40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f37906130f7565b60405180910390fd5b60045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f2054421015611fcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fc690612ecd565b60405180910390fd5b5f60025f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60045f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f208190555060605f8211156120dd5733826040516020016120c7929190613115565b6040516020818303038152906040529050612100565b336040516020016120ee91906126ae565b60405160208183030381529060405290505b8473ffffffffffffffffffffffffffffffffffffffff1663b88d4fde308587856040518563ffffffff1660e01b815260040161213f94939291906131fd565b5f604051808303815f87803b158015612156575f5ffd5b505af1158015612168573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16848673ffffffffffffffffffffffffffffffffffffffff167f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d79866040516121ca91906126ae565b60405180910390a45050505050565b5f63f23a6e6160e01b905095945050505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612232816121fe565b811461223c575f5ffd5b50565b5f8135905061224d81612229565b92915050565b5f60208284031215612268576122676121f6565b5b5f6122758482850161223f565b91505092915050565b5f8115159050919050565b6122928161227e565b82525050565b5f6020820190506122ab5f830184612289565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6122da826122b1565b9050919050565b6122ea816122d0565b81146122f4575f5ffd5b50565b5f81359050612305816122e1565b92915050565b5f819050919050565b61231d8161230b565b8114612327575f5ffd5b50565b5f8135905061233881612314565b92915050565b5f5f60408385031215612354576123536121f6565b5b5f612361858286016122f7565b92505060206123728582860161232a565b9150509250929050565b6123858161230b565b82525050565b5f60208201905061239e5f83018461237c565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6123f2826123ac565b810181811067ffffffffffffffff82111715612411576124106123bc565b5b80604052505050565b5f6124236121ed565b905061242f82826123e9565b919050565b5f67ffffffffffffffff82111561244e5761244d6123bc565b5b612457826123ac565b9050602081019050919050565b828183375f83830152505050565b5f61248461247f84612434565b61241a565b9050828152602081018484840111156124a05761249f6123a8565b5b6124ab848285612464565b509392505050565b5f82601f8301126124c7576124c66123a4565b5b81356124d7848260208601612472565b91505092915050565b5f5f5f5f608085870312156124f8576124f76121f6565b5b5f612505878288016122f7565b9450506020612516878288016122f7565b93505060406125278782880161232a565b925050606085013567ffffffffffffffff811115612548576125476121fa565b5b612554878288016124b3565b91505092959194509250565b612569816121fe565b82525050565b5f6020820190506125825f830184612560565b92915050565b5f5f5f6060848603121561259f5761259e6121f6565b5b5f6125ac868287016122f7565b93505060206125bd8682870161232a565b92505060406125ce8682870161232a565b9150509250925092565b5f5f5f5f5f60a086880312156125f1576125f06121f6565b5b5f6125fe888289016122f7565b955050602061260f8882890161232a565b94505060406126208882890161232a565b9350506060612631888289016122f7565b92505060806126428882890161232a565b9150509295509295909350565b5f5f5f60608486031215612666576126656121f6565b5b5f612673868287016122f7565b93505060206126848682870161232a565b9250506040612695868287016122f7565b9150509250925092565b6126a8816122d0565b82525050565b5f6020820190506126c15f83018461269f565b92915050565b5f819050919050565b5f6126ea6126e56126e0846122b1565b6126c7565b6122b1565b9050919050565b5f6126fb826126d0565b9050919050565b5f61270c826126f1565b9050919050565b61271c81612702565b82525050565b5f6020820190506127355f830184612713565b92915050565b5f67ffffffffffffffff821115612755576127546123bc565b5b602082029050602081019050919050565b5f5ffd5b5f61277c6127778461273b565b61241a565b9050808382526020820190506020840283018581111561279f5761279e612766565b5b835b818110156127c857806127b4888261232a565b8452602084019350506020810190506127a1565b5050509392505050565b5f82601f8301126127e6576127e56123a4565b5b81356127f684826020860161276a565b91505092915050565b5f5f5f5f5f60a08688031215612818576128176121f6565b5b5f612825888289016122f7565b9550506020612836888289016122f7565b945050604086013567ffffffffffffffff811115612857576128566121fa565b5b612863888289016127d2565b935050606086013567ffffffffffffffff811115612884576128836121fa565b5b612890888289016127d2565b925050608086013567ffffffffffffffff8111156128b1576128b06121fa565b5b6128bd888289016124b3565b9150509295509295909350565b5f5f5f5f608085870312156128e2576128e16121f6565b5b5f6128ef878288016122f7565b94505060206129008782880161232a565b9350506040612911878288016122f7565b92505060606129228782880161232a565b91505092959194509250565b5f5f5f5f60808587031215612946576129456121f6565b5b5f612953878288016122f7565b94505060206129648782880161232a565b93505060406129758782880161232a565b9250506060612986878288016122f7565b91505092959194509250565b5f5f5f5f5f60a086880312156129ab576129aa6121f6565b5b5f6129b8888289016122f7565b95505060206129c9888289016122f7565b94505060406129da8882890161232a565b93505060606129eb8882890161232a565b925050608086013567ffffffffffffffff811115612a0c57612a0b6121fa565b5b612a18888289016124b3565b9150509295509295909350565b612a2e8161227e565b8114612a38575f5ffd5b50565b5f81519050612a4981612a25565b92915050565b5f60208284031215612a6457612a636121f6565b5b5f612a7184828501612a3b565b91505092915050565b5f612a84826122b1565b9050919050565b612a9481612a7a565b8114612a9e575f5ffd5b50565b5f81519050612aaf81612a8b565b92915050565b5f60208284031215612aca57612ac96121f6565b5b5f612ad784828501612aa1565b91505092915050565b5f81519050612aee81612314565b92915050565b5f60208284031215612b0957612b086121f6565b5b5f612b1684828501612ae0565b91505092915050565b5f5f60408385031215612b3557612b346121f6565b5b5f612b4285828601612aa1565b9250506020612b5385828601612ae0565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f612b948261230b565b9150612b9f8361230b565b9250828201905080821115612bb757612bb6612b5d565b5b92915050565b5f5ffd5b5f5ffd5b5f60ff82169050919050565b612bda81612bc5565b8114612be4575f5ffd5b50565b5f81519050612bf581612bd1565b92915050565b5f67ffffffffffffffff821115612c1557612c146123bc565b5b612c1e826123ac565b9050602081019050919050565b8281835e5f83830152505050565b5f612c4b612c4684612bfb565b61241a565b905082815260208101848484011115612c6757612c666123a8565b5b612c72848285612c2b565b509392505050565b5f82601f830112612c8e57612c8d6123a4565b5b8151612c9e848260208601612c39565b91505092915050565b5f60808284031215612cbc57612cbb612bbd565b5b612cc6608061241a565b90505f612cd584828501612a3b565b5f830152506020612ce884828501612be7565b602083015250604082015167ffffffffffffffff811115612d0c57612d0b612bc1565b5b612d1884828501612c7a565b604083015250606082015167ffffffffffffffff811115612d3c57612d3b612bc1565b5b612d4884828501612c7a565b60608301525092915050565b5f60208284031215612d6957612d686121f6565b5b5f82015167ffffffffffffffff811115612d8657612d856121fa565b5b612d9284828501612ca7565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f612dbf82612d9b565b612dc98185612da5565b9350612dd9818560208601612c2b565b612de2816123ac565b840191505092915050565b5f6040820190508181035f830152612e058185612db5565b9050612e14602083018461237c565b9392505050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f612e4f601483612da5565b9150612e5a82612e1b565b602082019050919050565b5f6020820190508181035f830152612e7c81612e43565b9050919050565b7f45786869626974696f6e206e6f742079657420657870697265640000000000005f82015250565b5f612eb7601a83612da5565b9150612ec282612e83565b602082019050919050565b5f6020820190508181035f830152612ee481612eab565b9050919050565b5f612ef58261230b565b9150612f008361230b565b9250828203905081811115612f1857612f17612b5d565b5b92915050565b5f82825260208201905092915050565b50565b5f612f3c5f83612f1e565b9150612f4782612f2e565b5f82019050919050565b5f60a082019050612f645f83018761269f565b612f71602083018661269f565b612f7e604083018561237c565b612f8b606083018461237c565b8181036080830152612f9c81612f31565b905095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f606082019050612fe75f83018661237c565b8181036020830152612ff98185612db5565b9050613008604083018461237c565b949350505050565b7f4e6f7420746865206f776e6572000000000000000000000000000000000000005f82015250565b5f613044600d83612da5565b915061304f82613010565b602082019050919050565b5f6020820190508181035f83015261307181613038565b9050919050565b5f60608201905061308b5f83018661269f565b613098602083018561269f565b6130a5604083018461237c565b949350505050565b7f44657374696e6174696f6e206e6f7420766572696669656400000000000000005f82015250565b5f6130e1601883612da5565b91506130ec826130ad565b602082019050919050565b5f6020820190508181035f83015261310e816130d5565b9050919050565b5f6040820190506131285f83018561269f565b613135602083018461237c565b9392505050565b5f81519050919050565b5f6131508261313c565b61315a8185612f1e565b935061316a818560208601612c2b565b613173816123ac565b840191505092915050565b5f60a0820190506131915f83018861269f565b61319e602083018761269f565b6131ab604083018661237c565b6131b8606083018561237c565b81810360808301526131ca8184613146565b90509695505050505050565b5f6040820190506131e95f83018561237c565b6131f6602083018461269f565b9392505050565b5f6080820190506132105f83018761269f565b61321d602083018661269f565b61322a604083018561237c565b818103606083015261323c8184613146565b90509594505050505056fea2646970667358221220e8580ac4fc184f6d1f42e3190fbdd316a852aaba8ad29e5defb56773c86032e864736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051610a52380380610a5283398181016040528101906100319190610115565b815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610153565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100e4826100bb565b9050919050565b6100f4816100da565b81146100fe575f5ffd5b50565b5f8151905061010f816100eb565b92915050565b5f5f6040838503121561012b5761012a6100b7565b5b5f61013885828601610101565b925050602061014985828601610101565b9150509250929050565b6108f2806101605f395ff3fe608060405260043610610042575f3560e01c8063150b7a021461004d5780631afed87514610089578063abc8c7af146100b1578063d56d229d146100db57610049565b3661004957005b5f5ffd5b348015610058575f5ffd5b50610073600480360381019061006e919061055e565b610105565b604051610080919061061c565b60405180910390f35b348015610094575f5ffd5b506100af60048036038101906100aa9190610635565b6101c2565b005b3480156100bc575f5ffd5b506100c561041f565b6040516100d291906106ce565b60405180910390f35b3480156100e6575f5ffd5b506100ef610443565b6040516100fc91906106f6565b60405180910390f35b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663058a56ac60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518363ffffffff1660e01b815260040161018292919061071e565b5f604051808303815f87803b158015610199575f5ffd5b505af11580156101ab573d5f5f3e3d5ffd5b5050505063150b7a0260e01b905095945050505050565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633013ce296040518163ffffffff1660e01b8152600401602060405180830381865afa15801561022c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102509190610780565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161028f939291906107ab565b6020604051808303815f875af11580156102ab573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102cf9190610815565b508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b35f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b815260040161032b92919061071e565b6020604051808303815f875af1158015610347573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061036b9190610815565b505f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d898aaf260015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856001866040518563ffffffff1660e01b81526004016103ed9493929190610879565b5f604051808303815f87803b158015610404575f5ffd5b505af1158015610416573d5f5f3e3d5ffd5b50505050505050565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61049982610470565b9050919050565b6104a98161048f565b81146104b3575f5ffd5b50565b5f813590506104c4816104a0565b92915050565b5f819050919050565b6104dc816104ca565b81146104e6575f5ffd5b50565b5f813590506104f7816104d3565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f84011261051e5761051d6104fd565b5b8235905067ffffffffffffffff81111561053b5761053a610501565b5b60208301915083600182028301111561055757610556610505565b5b9250929050565b5f5f5f5f5f6080868803121561057757610576610468565b5b5f610584888289016104b6565b9550506020610595888289016104b6565b94505060406105a6888289016104e9565b935050606086013567ffffffffffffffff8111156105c7576105c661046c565b5b6105d388828901610509565b92509250509295509295909350565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610616816105e2565b82525050565b5f60208201905061062f5f83018461060d565b92915050565b5f5f6040838503121561064b5761064a610468565b5b5f610658858286016104e9565b9250506020610669858286016104e9565b9150509250929050565b5f819050919050565b5f61069661069161068c84610470565b610673565b610470565b9050919050565b5f6106a78261067c565b9050919050565b5f6106b88261069d565b9050919050565b6106c8816106ae565b82525050565b5f6020820190506106e15f8301846106bf565b92915050565b6106f08161048f565b82525050565b5f6020820190506107095f8301846106e7565b92915050565b610718816104ca565b82525050565b5f6040820190506107315f8301856106e7565b61073e602083018461070f565b9392505050565b5f61074f8261048f565b9050919050565b61075f81610745565b8114610769575f5ffd5b50565b5f8151905061077a81610756565b92915050565b5f6020828403121561079557610794610468565b5b5f6107a28482850161076c565b91505092915050565b5f6060820190506107be5f8301866106e7565b6107cb60208301856106e7565b6107d8604083018461070f565b949350505050565b5f8115159050919050565b6107f4816107e0565b81146107fe575f5ffd5b50565b5f8151905061080f816107eb565b92915050565b5f6020828403121561082a57610829610468565b5b5f61083784828501610801565b91505092915050565b5f819050919050565b5f61086361085e61085984610840565b610673565b6104ca565b9050919050565b61087381610849565b82525050565b5f60808201905061088c5f8301876106e7565b610899602083018661070f565b6108a6604083018561086a565b6108b3606083018461070f565b9594505050505056fea2646970667358221220b246dd5ce89d807310419def4466acad8a28c12e6f4d8ba0386f6924c210141864736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b503360405180602001604052805f81525061002f816100b560201b60201c565b505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a0575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161009791906101ca565b60405180910390fd5b6100af816100c860201b60201c565b506104ef565b80600290816100c49190610420565b5050565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101b48261018b565b9050919050565b6101c4816101aa565b82525050565b5f6020820190506101dd5f8301846101bb565b92915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061025e57607f821691505b6020821081036102715761027061021a565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026102d37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610298565b6102dd8683610298565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61032161031c610317846102f5565b6102fe565b6102f5565b9050919050565b5f819050919050565b61033a83610307565b61034e61034682610328565b8484546102a4565b825550505050565b5f5f905090565b610365610356565b610370818484610331565b505050565b5b81811015610393576103885f8261035d565b600181019050610376565b5050565b601f8211156103d8576103a981610277565b6103b284610289565b810160208510156103c1578190505b6103d56103cd85610289565b830182610375565b50505b505050565b5f82821c905092915050565b5f6103f85f19846008026103dd565b1980831691505092915050565b5f61041083836103e9565b9150826002028217905092915050565b610429826101e3565b67ffffffffffffffff811115610442576104416101ed565b5b61044c8254610247565b610457828285610397565b5f60209050601f831160018114610488575f8415610476578287015190505b6104808582610405565b8655506104e7565b601f19841661049686610277565b5f5b828110156104bd57848901518255600182019150602085019450602081019050610498565b868310156104da57848901516104d6601f8916826103e9565b8355505b6001600288020188555050505b505050505050565b6121f3806104fc5f395ff3fe608060405234801561000f575f5ffd5b50600436106100b1575f3560e01c8063715018a61161006f578063715018a6146101ad5780638da5cb5b146101b7578063a22cb465146101d5578063e985e9c5146101f1578063f242432a14610221578063f2fde38b1461023d576100b1565b8062fdd58e146100b557806301ffc9a7146100e55780630e89341c14610115578063156e29f6146101455780632eb2c2d6146101615780634e1273f41461017d575b5f5ffd5b6100cf60048036038101906100ca9190611646565b610259565b6040516100dc9190611693565b60405180910390f35b6100ff60048036038101906100fa9190611701565b6102ae565b60405161010c9190611746565b60405180910390f35b61012f600480360381019061012a919061175f565b61038f565b60405161013c91906117fa565b60405180910390f35b61015f600480360381019061015a919061181a565b610421565b005b61017b60048036038101906101769190611a5a565b610448565b005b61019760048036038101906101929190611be5565b6104ef565b6040516101a49190611d12565b60405180910390f35b6101b56105f9565b005b6101bf61060c565b6040516101cc9190611d41565b60405180910390f35b6101ef60048036038101906101ea9190611d84565b610634565b005b61020b60048036038101906102069190611dc2565b61064a565b6040516102189190611746565b60405180910390f35b61023b60048036038101906102369190611e00565b6106d8565b005b61025760048036038101906102529190611e93565b61077f565b005b5f5f5f8381526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f7fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061037857507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610388575061038782610803565b5b9050919050565b60606002805461039e90611eeb565b80601f01602080910402602001604051908101604052809291908181526020018280546103ca90611eeb565b80156104155780601f106103ec57610100808354040283529160200191610415565b820191905f5260205f20905b8154815290600101906020018083116103f857829003601f168201915b50505050509050919050565b61042961086c565b61044383838360405180602001604052805f8152506108f3565b505050565b5f610451610988565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16141580156104965750610494868261064a565b155b156104da5780866040517fe237d9220000000000000000000000000000000000000000000000000000000081526004016104d1929190611f1b565b60405180910390fd5b6104e7868686868661098f565b505050505050565b6060815183511461053b57815183516040517f5b059991000000000000000000000000000000000000000000000000000000008152600401610532929190611f42565b60405180910390fd5b5f835167ffffffffffffffff8111156105575761055661186e565b5b6040519080825280602002602001820160405280156105855781602001602082028036833780820191505090505b5090505f5f90505b84518110156105ee576105c46105ac8287610a8390919063ffffffff16565b6105bf8387610a9690919063ffffffff16565b610259565b8282815181106105d7576105d6611f69565b5b60200260200101818152505080600101905061058d565b508091505092915050565b61060161086c565b61060a5f610aa9565b565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61064661063f610988565b8383610b6c565b5050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f6106e1610988565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16141580156107265750610724868261064a565b155b1561076a5780866040517fe237d922000000000000000000000000000000000000000000000000000000008152600401610761929190611f1b565b60405180910390fd5b6107778686868686610cd5565b505050505050565b61078761086c565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107f7575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107ee9190611d41565b60405180910390fd5b61080081610aa9565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610874610988565b73ffffffffffffffffffffffffffffffffffffffff1661089261060c565b73ffffffffffffffffffffffffffffffffffffffff16146108f1576108b5610988565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016108e89190611d41565b60405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610963575f6040517f57f447ce00000000000000000000000000000000000000000000000000000000815260040161095a9190611d41565b60405180910390fd5b5f5f61096f8585610ddb565b915091506109805f87848487610e0b565b505050505050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036109ff575f6040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016109f69190611d41565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610a6f575f6040517f01a83514000000000000000000000000000000000000000000000000000000008152600401610a669190611d41565b60405180910390fd5b610a7c8585858585610e0b565b5050505050565b5f60208202602084010151905092915050565b5f60208202602084010151905092915050565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bdc575f6040517fced3e100000000000000000000000000000000000000000000000000000000008152600401610bd39190611d41565b60405180910390fd5b8060015f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610cc89190611746565b60405180910390a3505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610d45575f6040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401610d3c9190611d41565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610db5575f6040517f01a83514000000000000000000000000000000000000000000000000000000008152600401610dac9190611d41565b60405180910390fd5b5f5f610dc18585610ddb565b91509150610dd28787848487610e0b565b50505050505050565b60608060405191506001825283602083015260408201905060018152826020820152604081016040529250929050565b610e1785858585610eb7565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614610eb0575f610e53610988565b90506001845103610e9f575f610e725f86610a9690919063ffffffff16565b90505f610e885f86610a9690919063ffffffff16565b9050610e9883898985858961124a565b5050610eae565b610ead8187878787876113f9565b5b505b5050505050565b8051825114610f0157815181516040517f5b059991000000000000000000000000000000000000000000000000000000008152600401610ef8929190611f42565b60405180910390fd5b5f610f0a610988565b90505f5f90505b8351811015611109575f610f2e8286610a9690919063ffffffff16565b90505f610f448386610a9690919063ffffffff16565b90505f73ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614611067575f5f5f8481526020019081526020015f205f8a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490508181101561101357888183856040517f03dee4c500000000000000000000000000000000000000000000000000000000815260040161100a9493929190611f96565b60405180910390fd5b8181035f5f8581526020019081526020015f205f8b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16146110fc57805f5f8481526020019081526020015f205f8973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546110f49190612006565b925050819055505b5050806001019050610f11565b5060018351036111c4575f6111275f85610a9690919063ffffffff16565b90505f61113d5f85610a9690919063ffffffff16565b90508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6285856040516111b5929190611f42565b60405180910390a45050611243565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb868660405161123a929190612039565b60405180910390a45b5050505050565b5f8473ffffffffffffffffffffffffffffffffffffffff163b11156113f1578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b81526004016112aa9594939291906120c0565b6020604051808303815f875af19250505080156112e557506040513d601f19601f820116820180604052508101906112e2919061212c565b60015b611366573d805f8114611313576040519150601f19603f3d011682016040523d82523d5f602084013e611318565b606091505b505f81510361135e57846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016113559190611d41565b60405180910390fd5b805160208201fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146113ef57846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016113e69190611d41565b60405180910390fd5b505b505050505050565b5f8473ffffffffffffffffffffffffffffffffffffffff163b11156115a0578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401611459959493929190612157565b6020604051808303815f875af192505050801561149457506040513d601f19601f82011682018060405250810190611491919061212c565b60015b611515573d805f81146114c2576040519150601f19603f3d011682016040523d82523d5f602084013e6114c7565b606091505b505f81510361150d57846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016115049190611d41565b60405180910390fd5b805160208201fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461159e57846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016115959190611d41565b60405180910390fd5b505b505050505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6115e2826115b9565b9050919050565b6115f2816115d8565b81146115fc575f5ffd5b50565b5f8135905061160d816115e9565b92915050565b5f819050919050565b61162581611613565b811461162f575f5ffd5b50565b5f813590506116408161161c565b92915050565b5f5f6040838503121561165c5761165b6115b1565b5b5f611669858286016115ff565b925050602061167a85828601611632565b9150509250929050565b61168d81611613565b82525050565b5f6020820190506116a65f830184611684565b92915050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6116e0816116ac565b81146116ea575f5ffd5b50565b5f813590506116fb816116d7565b92915050565b5f60208284031215611716576117156115b1565b5b5f611723848285016116ed565b91505092915050565b5f8115159050919050565b6117408161172c565b82525050565b5f6020820190506117595f830184611737565b92915050565b5f60208284031215611774576117736115b1565b5b5f61178184828501611632565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6117cc8261178a565b6117d68185611794565b93506117e68185602086016117a4565b6117ef816117b2565b840191505092915050565b5f6020820190508181035f83015261181281846117c2565b905092915050565b5f5f5f60608486031215611831576118306115b1565b5b5f61183e868287016115ff565b935050602061184f86828701611632565b925050604061186086828701611632565b9150509250925092565b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6118a4826117b2565b810181811067ffffffffffffffff821117156118c3576118c261186e565b5b80604052505050565b5f6118d56115a8565b90506118e1828261189b565b919050565b5f67ffffffffffffffff821115611900576118ff61186e565b5b602082029050602081019050919050565b5f5ffd5b5f611927611922846118e6565b6118cc565b9050808382526020820190506020840283018581111561194a57611949611911565b5b835b81811015611973578061195f8882611632565b84526020840193505060208101905061194c565b5050509392505050565b5f82601f8301126119915761199061186a565b5b81356119a1848260208601611915565b91505092915050565b5f5ffd5b5f67ffffffffffffffff8211156119c8576119c761186e565b5b6119d1826117b2565b9050602081019050919050565b828183375f83830152505050565b5f6119fe6119f9846119ae565b6118cc565b905082815260208101848484011115611a1a57611a196119aa565b5b611a258482856119de565b509392505050565b5f82601f830112611a4157611a4061186a565b5b8135611a518482602086016119ec565b91505092915050565b5f5f5f5f5f60a08688031215611a7357611a726115b1565b5b5f611a80888289016115ff565b9550506020611a91888289016115ff565b945050604086013567ffffffffffffffff811115611ab257611ab16115b5565b5b611abe8882890161197d565b935050606086013567ffffffffffffffff811115611adf57611ade6115b5565b5b611aeb8882890161197d565b925050608086013567ffffffffffffffff811115611b0c57611b0b6115b5565b5b611b1888828901611a2d565b9150509295509295909350565b5f67ffffffffffffffff821115611b3f57611b3e61186e565b5b602082029050602081019050919050565b5f611b62611b5d84611b25565b6118cc565b90508083825260208201905060208402830185811115611b8557611b84611911565b5b835b81811015611bae5780611b9a88826115ff565b845260208401935050602081019050611b87565b5050509392505050565b5f82601f830112611bcc57611bcb61186a565b5b8135611bdc848260208601611b50565b91505092915050565b5f5f60408385031215611bfb57611bfa6115b1565b5b5f83013567ffffffffffffffff811115611c1857611c176115b5565b5b611c2485828601611bb8565b925050602083013567ffffffffffffffff811115611c4557611c446115b5565b5b611c518582860161197d565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b611c8d81611613565b82525050565b5f611c9e8383611c84565b60208301905092915050565b5f602082019050919050565b5f611cc082611c5b565b611cca8185611c65565b9350611cd583611c75565b805f5b83811015611d05578151611cec8882611c93565b9750611cf783611caa565b925050600181019050611cd8565b5085935050505092915050565b5f6020820190508181035f830152611d2a8184611cb6565b905092915050565b611d3b816115d8565b82525050565b5f602082019050611d545f830184611d32565b92915050565b611d638161172c565b8114611d6d575f5ffd5b50565b5f81359050611d7e81611d5a565b92915050565b5f5f60408385031215611d9a57611d996115b1565b5b5f611da7858286016115ff565b9250506020611db885828601611d70565b9150509250929050565b5f5f60408385031215611dd857611dd76115b1565b5b5f611de5858286016115ff565b9250506020611df6858286016115ff565b9150509250929050565b5f5f5f5f5f60a08688031215611e1957611e186115b1565b5b5f611e26888289016115ff565b9550506020611e37888289016115ff565b9450506040611e4888828901611632565b9350506060611e5988828901611632565b925050608086013567ffffffffffffffff811115611e7a57611e796115b5565b5b611e8688828901611a2d565b9150509295509295909350565b5f60208284031215611ea857611ea76115b1565b5b5f611eb5848285016115ff565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611f0257607f821691505b602082108103611f1557611f14611ebe565b5b50919050565b5f604082019050611f2e5f830185611d32565b611f3b6020830184611d32565b9392505050565b5f604082019050611f555f830185611684565b611f626020830184611684565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f608082019050611fa95f830187611d32565b611fb66020830186611684565b611fc36040830185611684565b611fd06060830184611684565b95945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61201082611613565b915061201b83611613565b925082820190508082111561203357612032611fd9565b5b92915050565b5f6040820190508181035f8301526120518185611cb6565b905081810360208301526120658184611cb6565b90509392505050565b5f81519050919050565b5f82825260208201905092915050565b5f6120928261206e565b61209c8185612078565b93506120ac8185602086016117a4565b6120b5816117b2565b840191505092915050565b5f60a0820190506120d35f830188611d32565b6120e06020830187611d32565b6120ed6040830186611684565b6120fa6060830185611684565b818103608083015261210c8184612088565b90509695505050505050565b5f81519050612126816116d7565b92915050565b5f60208284031215612141576121406115b1565b5b5f61214e84828501612118565b91505092915050565b5f60a08201905061216a5f830188611d32565b6121776020830187611d32565b81810360408301526121898186611cb6565b9050818103606083015261219d8185611cb6565b905081810360808301526121b18184612088565b9050969550505050505056fea26469706673582212204f154973fab5488c204b031d88ea6063cb02bdad5d83f7b2090aa8a9a225e62f64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b506040518060400160405280600981526020017f4d6f636b205553444300000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f6d55534443000000000000000000000000000000000000000000000000000000815250816003908161008b91906102e0565b50806004908161009b91906102e0565b5050506103af565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061011e57607f821691505b602082108103610131576101306100da565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026101937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610158565b61019d8683610158565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f6101e16101dc6101d7846101b5565b6101be565b6101b5565b9050919050565b5f819050919050565b6101fa836101c7565b61020e610206826101e8565b848454610164565b825550505050565b5f5f905090565b610225610216565b6102308184846101f1565b505050565b5b81811015610253576102485f8261021d565b600181019050610236565b5050565b601f8211156102985761026981610137565b61027284610149565b81016020851015610281578190505b61029561028d85610149565b830182610235565b50505b505050565b5f82821c905092915050565b5f6102b85f198460080261029d565b1980831691505092915050565b5f6102d083836102a9565b9150826002028217905092915050565b6102e9826100a3565b67ffffffffffffffff811115610302576103016100ad565b5b61030c8254610107565b610317828285610257565b5f60209050601f831160018114610348575f8415610336578287015190505b61034085826102c5565b8655506103a7565b601f19841661035686610137565b5f5b8281101561037d57848901518255600182019150602085019450602081019050610358565b8683101561039a5784890151610396601f8916826102a9565b8355505b6001600288020188555050505b505050505050565b610e96806103bc5f395ff3fe608060405234801561000f575f5ffd5b506004361061009c575f3560e01c806340c10f191161006457806340c10f191461015a57806370a082311461017657806395d89b41146101a6578063a9059cbb146101c4578063dd62ed3e146101f45761009c565b806306fdde03146100a0578063095ea7b3146100be57806318160ddd146100ee57806323b872dd1461010c578063313ce5671461013c575b5f5ffd5b6100a8610224565b6040516100b59190610b0f565b60405180910390f35b6100d860048036038101906100d39190610bc0565b6102b4565b6040516100e59190610c18565b60405180910390f35b6100f66102d6565b6040516101039190610c40565b60405180910390f35b61012660048036038101906101219190610c59565b6102df565b6040516101339190610c18565b60405180910390f35b61014461030d565b6040516101519190610cc4565b60405180910390f35b610174600480360381019061016f9190610bc0565b610315565b005b610190600480360381019061018b9190610cdd565b610323565b60405161019d9190610c40565b60405180910390f35b6101ae610368565b6040516101bb9190610b0f565b60405180910390f35b6101de60048036038101906101d99190610bc0565b6103f8565b6040516101eb9190610c18565b60405180910390f35b61020e60048036038101906102099190610d08565b61041a565b60405161021b9190610c40565b60405180910390f35b60606003805461023390610d73565b80601f016020809104026020016040519081016040528092919081815260200182805461025f90610d73565b80156102aa5780601f10610281576101008083540402835291602001916102aa565b820191905f5260205f20905b81548152906001019060200180831161028d57829003601f168201915b5050505050905090565b5f5f6102be61049c565b90506102cb8185856104a3565b600191505092915050565b5f600254905090565b5f5f6102e961049c565b90506102f68582856104b5565b610301858585610548565b60019150509392505050565b5f6012905090565b61031f8282610638565b5050565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b60606004805461037790610d73565b80601f01602080910402602001604051908101604052809291908181526020018280546103a390610d73565b80156103ee5780601f106103c5576101008083540402835291602001916103ee565b820191905f5260205f20905b8154815290600101906020018083116103d157829003601f168201915b5050505050905090565b5f5f61040261049c565b905061040f818585610548565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f33905090565b6104b083838360016106b7565b505050565b5f6104c0848461041a565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156105425781811015610533578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161052a93929190610db2565b60405180910390fd5b61054184848484035f6106b7565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105b8575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105af9190610de7565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610628575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161061f9190610de7565b60405180910390fd5b610633838383610886565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106a8575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161069f9190610de7565b60405180910390fd5b6106b35f8383610886565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610727575f6040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161071e9190610de7565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610797575f6040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161078e9190610de7565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610880578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516108779190610c40565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108d6578060025f8282546108ca9190610e2d565b925050819055506109a4565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490508181101561095f578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161095693929190610db2565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109eb578060025f8282540392505081905550610a35565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a929190610c40565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610ae182610a9f565b610aeb8185610aa9565b9350610afb818560208601610ab9565b610b0481610ac7565b840191505092915050565b5f6020820190508181035f830152610b278184610ad7565b905092915050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610b5c82610b33565b9050919050565b610b6c81610b52565b8114610b76575f5ffd5b50565b5f81359050610b8781610b63565b92915050565b5f819050919050565b610b9f81610b8d565b8114610ba9575f5ffd5b50565b5f81359050610bba81610b96565b92915050565b5f5f60408385031215610bd657610bd5610b2f565b5b5f610be385828601610b79565b9250506020610bf485828601610bac565b9150509250929050565b5f8115159050919050565b610c1281610bfe565b82525050565b5f602082019050610c2b5f830184610c09565b92915050565b610c3a81610b8d565b82525050565b5f602082019050610c535f830184610c31565b92915050565b5f5f5f60608486031215610c7057610c6f610b2f565b5b5f610c7d86828701610b79565b9350506020610c8e86828701610b79565b9250506040610c9f86828701610bac565b9150509250925092565b5f60ff82169050919050565b610cbe81610ca9565b82525050565b5f602082019050610cd75f830184610cb5565b92915050565b5f60208284031215610cf257610cf1610b2f565b5b5f610cff84828501610b79565b91505092915050565b5f5f60408385031215610d1e57610d1d610b2f565b5b5f610d2b85828601610b79565b9250506020610d3c85828601610b79565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610d8a57607f821691505b602082108103610d9d57610d9c610d46565b5b50919050565b610dac81610b52565b82525050565b5f606082019050610dc55f830186610da3565b610dd26020830185610c31565b610ddf6040830184610c31565b949350505050565b5f602082019050610dfa5f830184610da3565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610e3782610b8d565b9150610e4283610b8d565b9250828201905080821115610e5a57610e59610e00565b5b9291505056fea2646970667358221220e04276eb6eac038bce68787c5a3afdeab8a0d92ec02187d664646012cb3abf4d64736f6c634300081c0033"
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
      "bytecode": "0x60c060405234801561000f575f5ffd5b506040516121763803806121768339818101604052810190610031919061010c565b60015f8190555081608081815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050505061014a565b5f5ffd5b5f819050919050565b6100918161007f565b811461009b575f5ffd5b50565b5f815190506100ac81610088565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100db826100b2565b9050919050565b6100eb816100d1565b81146100f5575f5ffd5b50565b5f81519050610106816100e2565b92915050565b5f5f604083850312156101225761012161007b565b5b5f61012f8582860161009e565b9250506020610140858286016100f8565b9150509250929050565b60805160a051611fe861018e5f395f8181610337015281816103e50152818161065201528181610f9c01526111cc01525f818161054e015261070f0152611fe85ff3fe608060405234801561000f575f5ffd5b506004361061007b575f3560e01c8063a6a3b5b411610059578063a6a3b5b4146100d5578063aa1a8411146100f3578063b1b9e78d14610126578063d898aaf2146101425761007b565b8063058a56ac1461007f5780633013ce291461009b57806399652de7146100b9575b5f5ffd5b610099600480360381019061009491906115e9565b61015e565b005b6100a36103e3565b6040516100b09190611682565b60405180910390f35b6100d360048036038101906100ce91906115e9565b610407565b005b6100dd61070d565b6040516100ea91906116aa565b60405180910390f35b61010d600480360381019061010891906115e9565b610731565b60405161011d94939291906116d2565b60405180910390f35b610140600480360381019061013b91906115e9565b610787565b005b61015c60048036038101906101579190611715565b61105d565b005b61016661136f565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f206040518060800160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152505090503373ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff16146102a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029a906117d3565b60405180910390fd5b60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f5f82015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f9055600382015f9055505061037b3382602001517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166113b39092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d060405160405180910390a4506103df611432565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61040f61136f565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f206040518060800160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152505090503373ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff161461054c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610543906117d3565b60405180910390fd5b7f0000000000000000000000000000000000000000000000000000000000000000816060015161057c919061181e565b4211156105be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b59061189b565b60405180910390fd5b60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f5f82015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f9055600382015f905550506106963382602001517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166113b39092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167f6b2d7d3541d77e4ba894942103bb7bff8611a2fe5a6c6660870f0c15ab75c2d384602001516040516106f891906116aa565b60405180910390a450610709611432565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001602052815f5260405f20602052805f5260405f205f9150915050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154905084565b61078f61136f565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f206040518060800160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815260200160038201548152505090505f73ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff16036108cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c390611903565b60405180910390fd5b60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f5f82015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f9055600382015f905550508273ffffffffffffffffffffffffffffffffffffffff166301ffc9a76380ac58cd6040518263ffffffff1660e01b81526004016109929190611991565b602060405180830381865afa1580156109ad573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109d191906119df565b15610cdf576001816040015114610a1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1490611a54565b60405180910390fd5b5f8390503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610a7191906116aa565b602060405180830381865afa158015610a8c573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ab09190611a86565b73ffffffffffffffffffffffffffffffffffffffff1614610b06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610afd90611afb565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b8152600401610b41929190611b19565b602060405180830381865afa158015610b5c573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b8091906119df565b80610c2d57503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663081812fc856040518263ffffffff1660e01b8152600401610bd691906116aa565b602060405180830381865afa158015610bf1573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c159190611a86565b73ffffffffffffffffffffffffffffffffffffffff16145b610c6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6390611bb0565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166342842e0e33845f0151866040518463ffffffff1660e01b8152600401610cac93929190611bce565b5f604051808303815f87803b158015610cc3575f5ffd5b505af1158015610cd5573d5f5f3e3d5ffd5b5050505050610f91565b8273ffffffffffffffffffffffffffffffffffffffff166301ffc9a763d9b67a266040518263ffffffff1660e01b8152600401610d1c9190611c3c565b602060405180830381865afa158015610d37573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d5b91906119df565b15610f55575f83905081604001518173ffffffffffffffffffffffffffffffffffffffff1662fdd58e33866040518363ffffffff1660e01b8152600401610da3929190611c55565b602060405180830381865afa158015610dbe573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610de29190611c90565b1015610e23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1a90611d05565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b8152600401610e5e929190611b19565b602060405180830381865afa158015610e79573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e9d91906119df565b610edc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed390611bb0565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663f242432a33845f01518686604001516040518563ffffffff1660e01b8152600401610f229493929190611d56565b5f604051808303815f87803b158015610f39575f5ffd5b505af1158015610f4b573d5f5f3e3d5ffd5b5050505050610f90565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8790611df6565b60405180910390fd5b5b610fe03382602001517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166113b39092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a384602001518560400151604051611048929190611e14565b60405180910390a450611059611432565b5050565b61106561136f565b5f81116110a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109e90611eab565b60405180910390fd5b5f82116110e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e090611f13565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff1660015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146111c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bb90611f7b565b60405180910390fd5b6112113330837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661143b909392919063ffffffff16565b60405180608001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020018381526020014281525060015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301559050503373ffffffffffffffffffffffffffffffffffffffff16838573ffffffffffffffffffffffffffffffffffffffff167f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf78486604051611359929190611e14565b60405180910390a4611369611432565b50505050565b60025f54036113aa576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f81905550565b61142d838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040516024016113e6929190611c55565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506114bd565b505050565b60015f81905550565b6114b7848573ffffffffffffffffffffffffffffffffffffffff166323b872dd86868660405160240161147093929190611bce565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506114bd565b50505050565b5f5f60205f8451602086015f885af1806114dc576040513d5f823e3d81fd5b3d92505f519150505f82146114f5576001811415611510565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561155257836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016115499190611f99565b60405180910390fd5b50505050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6115858261155c565b9050919050565b6115958161157b565b811461159f575f5ffd5b50565b5f813590506115b08161158c565b92915050565b5f819050919050565b6115c8816115b6565b81146115d2575f5ffd5b50565b5f813590506115e3816115bf565b92915050565b5f5f604083850312156115ff576115fe611558565b5b5f61160c858286016115a2565b925050602061161d858286016115d5565b9150509250929050565b5f819050919050565b5f61164a6116456116408461155c565b611627565b61155c565b9050919050565b5f61165b82611630565b9050919050565b5f61166c82611651565b9050919050565b61167c81611662565b82525050565b5f6020820190506116955f830184611673565b92915050565b6116a4816115b6565b82525050565b5f6020820190506116bd5f83018461169b565b92915050565b6116cc8161157b565b82525050565b5f6080820190506116e55f8301876116c3565b6116f2602083018661169b565b6116ff604083018561169b565b61170c606083018461169b565b95945050505050565b5f5f5f5f6080858703121561172d5761172c611558565b5b5f61173a878288016115a2565b945050602061174b878288016115d5565b935050604061175c878288016115d5565b925050606061176d878288016115d5565b91505092959194509250565b5f82825260208201905092915050565b7f596f7520646964206e6f74206d616b652074686973206f6666657200000000005f82015250565b5f6117bd601b83611779565b91506117c882611789565b602082019050919050565b5f6020820190508181035f8301526117ea816117b1565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f611828826115b6565b9150611833836115b6565b925082820190508082111561184b5761184a6117f1565b5b92915050565b7f526566756e6420706572696f64206861732065787069726564000000000000005f82015250565b5f611885601983611779565b915061189082611851565b602082019050919050565b5f6020820190508181035f8301526118b281611879565b9050919050565b7f4e6f2076616c6964206f666665722065786973747300000000000000000000005f82015250565b5f6118ed601583611779565b91506118f8826118b9565b602082019050919050565b5f6020820190508181035f83015261191a816118e1565b9050919050565b5f819050919050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b5f8160e01b9050919050565b5f61197b61197661197184611921565b611955565b61192a565b9050919050565b61198b81611961565b82525050565b5f6020820190506119a45f830184611982565b92915050565b5f8115159050919050565b6119be816119aa565b81146119c8575f5ffd5b50565b5f815190506119d9816119b5565b92915050565b5f602082840312156119f4576119f3611558565b5b5f611a01848285016119cb565b91505092915050565b7f455243373231206f66666572206d757374206861766520616d6f756e742031005f82015250565b5f611a3e601f83611779565b9150611a4982611a0a565b602082019050919050565b5f6020820190508181035f830152611a6b81611a32565b9050919050565b5f81519050611a808161158c565b92915050565b5f60208284031215611a9b57611a9a611558565b5b5f611aa884828501611a72565b91505092915050565b7f596f7520646f206e6f74206f776e2074686973204e46540000000000000000005f82015250565b5f611ae5601783611779565b9150611af082611ab1565b602082019050919050565b5f6020820190508181035f830152611b1281611ad9565b9050919050565b5f604082019050611b2c5f8301856116c3565b611b3960208301846116c3565b9392505050565b7f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366655f8201527f72204e4654000000000000000000000000000000000000000000000000000000602082015250565b5f611b9a602583611779565b9150611ba582611b40565b604082019050919050565b5f6020820190508181035f830152611bc781611b8e565b9050919050565b5f606082019050611be15f8301866116c3565b611bee60208301856116c3565b611bfb604083018461169b565b949350505050565b5f819050919050565b5f611c26611c21611c1c84611c03565b611955565b61192a565b9050919050565b611c3681611c0c565b82525050565b5f602082019050611c4f5f830184611c2d565b92915050565b5f604082019050611c685f8301856116c3565b611c75602083018461169b565b9392505050565b5f81519050611c8a816115bf565b92915050565b5f60208284031215611ca557611ca4611558565b5b5f611cb284828501611c7c565b91505092915050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f611cef601483611779565b9150611cfa82611cbb565b602082019050919050565b5f6020820190508181035f830152611d1c81611ce3565b9050919050565b5f82825260208201905092915050565b50565b5f611d415f83611d23565b9150611d4c82611d33565b5f82019050919050565b5f60a082019050611d695f8301876116c3565b611d7660208301866116c3565b611d83604083018561169b565b611d90606083018461169b565b8181036080830152611da181611d36565b905095945050505050565b7f556e737570706f72746564204e465420747970650000000000000000000000005f82015250565b5f611de0601483611779565b9150611deb82611dac565b602082019050919050565b5f6020820190508181035f830152611e0d81611dd4565b9050919050565b5f604082019050611e275f83018561169b565b611e34602083018461169b565b9392505050565b7f4f66666572207072696365206d7573742062652067726561746572207468616e5f8201527f2030000000000000000000000000000000000000000000000000000000000000602082015250565b5f611e95602283611779565b9150611ea082611e3b565b604082019050919050565b5f6020820190508181035f830152611ec281611e89565b9050919050565b7f416d6f756e74206d7573742062652067726561746572207468616e20300000005f82015250565b5f611efd601d83611779565b9150611f0882611ec9565b602082019050919050565b5f6020820190508181035f830152611f2a81611ef1565b9050919050565b7f4f6666657220616c7265616479206578697374730000000000000000000000005f82015250565b5f611f65601483611779565b9150611f7082611f31565b602082019050919050565b5f6020820190508181035f830152611f9281611f59565b9050919050565b5f602082019050611fac5f8301846116c3565b9291505056fea2646970667358221220c95508a18533b8e35caa4c9730bdeade54f7f6398b73b93483f7f756e4295f2d64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611c18380380611c1883398181016040528101906100319190610238565b6100435f5f1b8261007b60201b60201c565b506100747fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca98261007b60201b60201c565b5050610263565b5f61008c838361017060201b60201c565b6101665760015f5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506101036101d360201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061016a565b5f90505b92915050565b5f5f5f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610207826101de565b9050919050565b610217816101fd565b8114610221575f5ffd5b50565b5f815190506102328161020e565b92915050565b5f6020828403121561024d5761024c6101da565b5b5f61025a84828501610224565b91505092915050565b6119a8806102705f395ff3fe6080604052600436106100f6575f3560e01c806391d1485411610089578063bc197c8111610058578063bc197c8114610347578063d11a57ec14610383578063d547741f146103ad578063f23a6e61146103d5576100fd565b806391d148541461027d5780639ebd9115146102b9578063a217fddf146102e1578063b61d27f61461030b576100fd565b80632f2ff15d116100c55780632f2ff15d146101dd57806336568abe146102055780634782f7791461022d5780637b9f76b514610255576100fd565b806301ffc9a714610101578063150b7a021461013d578063248a9ca314610179578063256451ac146101b5576100fd565b366100fd57005b5f5ffd5b34801561010c575f5ffd5b5061012760048036038101906101229190610dfe565b610411565b6040516101349190610e43565b60405180910390f35b348015610148575f5ffd5b50610163600480360381019061015e9190611025565b610422565b60405161017091906110b4565b60405180910390f35b348015610184575f5ffd5b5061019f600480360381019061019a9190611100565b610435565b6040516101ac919061113a565b60405180910390f35b3480156101c0575f5ffd5b506101db60048036038101906101d69190611153565b610451565b005b3480156101e8575f5ffd5b5061020360048036038101906101fe91906111b7565b6104ee565b005b348015610210575f5ffd5b5061022b600480360381019061022691906111b7565b610510565b005b348015610238575f5ffd5b50610253600480360381019061024e9190611230565b61058b565b005b348015610260575f5ffd5b5061027b6004803603810190610276919061126e565b6106a6565b005b348015610288575f5ffd5b506102a3600480360381019061029e91906111b7565b610740565b6040516102b09190610e43565b60405180910390f35b3480156102c4575f5ffd5b506102df60048036038101906102da91906112be565b6107a3565b005b3480156102ec575f5ffd5b506102f56108c1565b604051610302919061113a565b60405180910390f35b348015610316575f5ffd5b50610331600480360381019061032c9190611346565b6108c7565b60405161033e9190611417565b60405180910390f35b348015610352575f5ffd5b5061036d600480360381019061036891906114f7565b610991565b60405161037a91906110b4565b60405180910390f35b34801561038e575f5ffd5b506103976109a5565b6040516103a4919061113a565b60405180910390f35b3480156103b8575f5ffd5b506103d360048036038101906103ce91906111b7565b6109c9565b005b3480156103e0575f5ffd5b506103fb60048036038101906103f691906115c2565b6109eb565b60405161040891906110b4565b60405180910390f35b5f61041b826109ff565b9050919050565b5f63150b7a0260e01b9050949350505050565b5f5f5f8381526020019081526020015f20600101549050919050565b7fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca961047b81610a78565b8473ffffffffffffffffffffffffffffffffffffffff1663f242432a308487876040518563ffffffff1660e01b81526004016104ba9493929190611696565b5f604051808303815f87803b1580156104d1575f5ffd5b505af11580156104e3573d5f5f3e3d5ffd5b505050505050505050565b6104f782610435565b61050081610a78565b61050a8383610a8c565b50505050565b610518610b75565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461057c576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105868282610b7c565b505050565b7fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca96105b581610a78565b478211156105f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ef90611746565b60405180910390fd5b5f8373ffffffffffffffffffffffffffffffffffffffff168360405161061d9061178e565b5f6040518083038185875af1925050503d805f8114610657576040519150601f19603f3d011682016040523d82523d5f602084013e61065c565b606091505b50509050806106a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610697906117ec565b60405180910390fd5b50505050565b7fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca96106d081610a78565b8373ffffffffffffffffffffffffffffffffffffffff166342842e0e3084866040518463ffffffff1660e01b815260040161070d9392919061180a565b5f604051808303815f87803b158015610724575f5ffd5b505af1158015610736573d5f5f3e3d5ffd5b5050505050505050565b5f5f5f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b7fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca96107cd81610a78565b5f4790505f8111610813576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080a90611889565b60405180910390fd5b5f8373ffffffffffffffffffffffffffffffffffffffff16826040516108389061178e565b5f6040518083038185875af1925050503d805f8114610872576040519150601f19603f3d011682016040523d82523d5f602084013e610877565b606091505b50509050806108bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b2906117ec565b60405180910390fd5b50505050565b5f5f1b81565b60605f5f1b6108d581610a78565b5f5f8773ffffffffffffffffffffffffffffffffffffffff168787876040516108ff9291906118cb565b5f6040518083038185875af1925050503d805f8114610939576040519150601f19603f3d011682016040523d82523d5f602084013e61093e565b606091505b509150915081610983576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097a9061192d565b60405180910390fd5b809350505050949350505050565b5f63bc197c8160e01b905095945050505050565b7fe1dcbdb91df27212a29bc27177c840cf2f819ecf2187432e1fac86c2dd5dfca981565b6109d282610435565b6109db81610a78565b6109e58383610b7c565b50505050565b5f63f23a6e6160e01b905095945050505050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a715750610a7082610c65565b5b9050919050565b610a8981610a84610b75565b610cde565b50565b5f610a978383610740565b610b6b5760015f5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550610b08610b75565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610b6f565b5f90505b92915050565b5f33905090565b5f610b878383610740565b15610c5b575f5f5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550610bf8610b75565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050610c5f565b5f90505b92915050565b5f7f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610cd75750610cd682610d2f565b5b9050919050565b610ce88282610740565b610d2b5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401610d2292919061194b565b60405180910390fd5b5050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610ddd81610da9565b8114610de7575f5ffd5b50565b5f81359050610df881610dd4565b92915050565b5f60208284031215610e1357610e12610da1565b5b5f610e2084828501610dea565b91505092915050565b5f8115159050919050565b610e3d81610e29565b82525050565b5f602082019050610e565f830184610e34565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610e8582610e5c565b9050919050565b610e9581610e7b565b8114610e9f575f5ffd5b50565b5f81359050610eb081610e8c565b92915050565b5f819050919050565b610ec881610eb6565b8114610ed2575f5ffd5b50565b5f81359050610ee381610ebf565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610f3782610ef1565b810181811067ffffffffffffffff82111715610f5657610f55610f01565b5b80604052505050565b5f610f68610d98565b9050610f748282610f2e565b919050565b5f67ffffffffffffffff821115610f9357610f92610f01565b5b610f9c82610ef1565b9050602081019050919050565b828183375f83830152505050565b5f610fc9610fc484610f79565b610f5f565b905082815260208101848484011115610fe557610fe4610eed565b5b610ff0848285610fa9565b509392505050565b5f82601f83011261100c5761100b610ee9565b5b813561101c848260208601610fb7565b91505092915050565b5f5f5f5f6080858703121561103d5761103c610da1565b5b5f61104a87828801610ea2565b945050602061105b87828801610ea2565b935050604061106c87828801610ed5565b925050606085013567ffffffffffffffff81111561108d5761108c610da5565b5b61109987828801610ff8565b91505092959194509250565b6110ae81610da9565b82525050565b5f6020820190506110c75f8301846110a5565b92915050565b5f819050919050565b6110df816110cd565b81146110e9575f5ffd5b50565b5f813590506110fa816110d6565b92915050565b5f6020828403121561111557611114610da1565b5b5f611122848285016110ec565b91505092915050565b611134816110cd565b82525050565b5f60208201905061114d5f83018461112b565b92915050565b5f5f5f5f6080858703121561116b5761116a610da1565b5b5f61117887828801610ea2565b945050602061118987828801610ed5565b935050604061119a87828801610ed5565b92505060606111ab87828801610ea2565b91505092959194509250565b5f5f604083850312156111cd576111cc610da1565b5b5f6111da858286016110ec565b92505060206111eb85828601610ea2565b9150509250929050565b5f6111ff82610e5c565b9050919050565b61120f816111f5565b8114611219575f5ffd5b50565b5f8135905061122a81611206565b92915050565b5f5f6040838503121561124657611245610da1565b5b5f6112538582860161121c565b925050602061126485828601610ed5565b9150509250929050565b5f5f5f6060848603121561128557611284610da1565b5b5f61129286828701610ea2565b93505060206112a386828701610ed5565b92505060406112b486828701610ea2565b9150509250925092565b5f602082840312156112d3576112d2610da1565b5b5f6112e08482850161121c565b91505092915050565b5f5ffd5b5f5ffd5b5f5f83601f84011261130657611305610ee9565b5b8235905067ffffffffffffffff811115611323576113226112e9565b5b60208301915083600182028301111561133f5761133e6112ed565b5b9250929050565b5f5f5f5f6060858703121561135e5761135d610da1565b5b5f61136b87828801610ea2565b945050602061137c87828801610ed5565b935050604085013567ffffffffffffffff81111561139d5761139c610da5565b5b6113a9878288016112f1565b925092505092959194509250565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f6113e9826113b7565b6113f381856113c1565b93506114038185602086016113d1565b61140c81610ef1565b840191505092915050565b5f6020820190508181035f83015261142f81846113df565b905092915050565b5f67ffffffffffffffff82111561145157611450610f01565b5b602082029050602081019050919050565b5f61147461146f84611437565b610f5f565b90508083825260208201905060208402830185811115611497576114966112ed565b5b835b818110156114c057806114ac8882610ed5565b845260208401935050602081019050611499565b5050509392505050565b5f82601f8301126114de576114dd610ee9565b5b81356114ee848260208601611462565b91505092915050565b5f5f5f5f5f60a086880312156115105761150f610da1565b5b5f61151d88828901610ea2565b955050602061152e88828901610ea2565b945050604086013567ffffffffffffffff81111561154f5761154e610da5565b5b61155b888289016114ca565b935050606086013567ffffffffffffffff81111561157c5761157b610da5565b5b611588888289016114ca565b925050608086013567ffffffffffffffff8111156115a9576115a8610da5565b5b6115b588828901610ff8565b9150509295509295909350565b5f5f5f5f5f60a086880312156115db576115da610da1565b5b5f6115e888828901610ea2565b95505060206115f988828901610ea2565b945050604061160a88828901610ed5565b935050606061161b88828901610ed5565b925050608086013567ffffffffffffffff81111561163c5761163b610da5565b5b61164888828901610ff8565b9150509295509295909350565b61165e81610e7b565b82525050565b61166d81610eb6565b82525050565b50565b5f6116815f836113c1565b915061168c82611673565b5f82019050919050565b5f60a0820190506116a95f830187611655565b6116b66020830186611655565b6116c36040830185611664565b6116d06060830184611664565b81810360808301526116e181611676565b905095945050505050565b5f82825260208201905092915050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f6117306014836116ec565b915061173b826116fc565b602082019050919050565b5f6020820190508181035f83015261175d81611724565b9050919050565b5f81905092915050565b5f6117795f83611764565b915061178482611673565b5f82019050919050565b5f6117988261176e565b9150819050919050565b7f5472616e73666572206661696c656400000000000000000000000000000000005f82015250565b5f6117d6600f836116ec565b91506117e1826117a2565b602082019050919050565b5f6020820190508181035f830152611803816117ca565b9050919050565b5f60608201905061181d5f830186611655565b61182a6020830185611655565b6118376040830184611664565b949350505050565b7f4e6f2062616c616e636520746f207769746864726177000000000000000000005f82015250565b5f6118736016836116ec565b915061187e8261183f565b602082019050919050565b5f6020820190508181035f8301526118a081611867565b9050919050565b5f6118b28385611764565b93506118bf838584610fa9565b82840190509392505050565b5f6118d78284866118a7565b91508190509392505050565b7f45787465726e616c2063616c6c206661696c65640000000000000000000000005f82015250565b5f6119176014836116ec565b9150611922826118e3565b602082019050919050565b5f6020820190508181035f8301526119448161190b565b9050919050565b5f60408201905061195e5f830185611655565b61196b602083018461112b565b939250505056fea26469706673582212201c77d9e0094a4b692a7d0174e623166ba2bc338c7ea17dff0e6c271c7ffbc2a064736f6c634300081c0033"
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