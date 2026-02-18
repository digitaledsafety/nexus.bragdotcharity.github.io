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
        }
      ],
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516158a53803806158a58339818101604052810190610031919061031a565b6040518060400160405280600781526020017f427261674e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f425241474e465400000000000000000000000000000000000000000000000000815250815f90816100ab919061059e565b5080600190816100bb919061059e565b50505060016008819055506100d85f5f1b8461012860201b60201c565b5081600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600b8190555050505061066d565b5f610139838361021e60201b60201c565b61021457600160075f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506101b161028260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610218565b5f90505b92915050565b5f60075f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102b68261028d565b9050919050565b6102c6816102ac565b81146102d0575f5ffd5b50565b5f815190506102e1816102bd565b92915050565b5f819050919050565b6102f9816102e7565b8114610303575f5ffd5b50565b5f81519050610314816102f0565b92915050565b5f5f5f6060848603121561033157610330610289565b5b5f61033e868287016102d3565b935050602061034f868287016102d3565b925050604061036086828701610306565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806103e557607f821691505b6020821081036103f8576103f76103a1565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261045a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261041f565b610464868361041f565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61049f61049a610495846102e7565b61047c565b6102e7565b9050919050565b5f819050919050565b6104b883610485565b6104cc6104c4826104a6565b84845461042b565b825550505050565b5f5f905090565b6104e36104d4565b6104ee8184846104af565b505050565b5b81811015610511576105065f826104db565b6001810190506104f4565b5050565b601f82111561055657610527816103fe565b61053084610410565b8101602085101561053f578190505b61055361054b85610410565b8301826104f3565b50505b505050565b5f82821c905092915050565b5f6105765f198460080261055b565b1980831691505092915050565b5f61058e8383610567565b9150826002028217905092915050565b6105a78261036a565b67ffffffffffffffff8111156105c0576105bf610374565b5b6105ca82546103ce565b6105d5828285610515565b5f60209050601f831160018114610606575f84156105f4578287015190505b6105fe8582610583565b865550610665565b601f198416610614866103fe565b5f5b8281101561063b57848901518255600182019150602085019450602081019050610616565b868310156106585784890151610654601f891682610567565b8355505b6001600288020188555050505b505050505050565b61522b8061067a5f395ff3fe6080604052600436106101ed575f3560e01c806370a082311161010c578063b88d4fde1161009f578063d435b3a31161006e578063d435b3a3146106cd578063d547741f146106f7578063da183afb1461071f578063e985e9c51461075b578063f0f4426014610797576101ed565b8063b88d4fde14610625578063c63172471461064d578063c87b56dd14610675578063d3933c1c146106b1576101ed565b806396d8f4f3116100db57806396d8f4f31461058d578063a217fddf146105b7578063a22cb465146105e1578063a6719b3a14610609576101ed565b806370a08231146104c157806383943dc8146104fd57806391d148541461052757806395d89b4114610563576101ed565b8063248a9ca31161018457806342842e0e1161015357806342842e0e146103f757806361d027b31461041f5780636352211e1461044957806364cb7e9c14610485576101ed565b8063248a9ca3146103435780632eb9313e1461037f5780632f2ff15d146103a757806336568abe146103cf576101ed565b80630fd973ce116101c05780630fd973ce146102bb5780631653441c146102d757806319bcef6d146102f357806323b872dd1461031b576101ed565b806301ffc9a7146101f157806306fdde031461022d578063081812fc14610257578063095ea7b314610293575b5f5ffd5b3480156101fc575f5ffd5b5061021760048036038101906102129190613609565b6107bf565b604051610224919061364e565b60405180910390f35b348015610238575f5ffd5b506102416107d0565b60405161024e91906136d7565b60405180910390f35b348015610262575f5ffd5b5061027d6004803603810190610278919061372a565b61085f565b60405161028a9190613794565b60405180910390f35b34801561029e575f5ffd5b506102b960048036038101906102b491906137d7565b61087a565b005b6102d560048036038101906102d09190613876565b610890565b005b6102f160048036038101906102ec9190613907565b6108b5565b005b3480156102fe575f5ffd5b5061031960048036038101906103149190613985565b6108d9565b005b348015610326575f5ffd5b50610341600480360381019061033c91906139b0565b610929565b005b34801561034e575f5ffd5b5061036960048036038101906103649190613a33565b610a28565b6040516103769190613a6d565b60405180910390f35b34801561038a575f5ffd5b506103a560048036038101906103a09190613985565b610a45565b005b3480156103b2575f5ffd5b506103cd60048036038101906103c89190613a86565b610a95565b005b3480156103da575f5ffd5b506103f560048036038101906103f09190613a86565b610ab7565b005b348015610402575f5ffd5b5061041d600480360381019061041891906139b0565b610b32565b005b34801561042a575f5ffd5b50610433610b51565b6040516104409190613794565b60405180910390f35b348015610454575f5ffd5b5061046f600480360381019061046a919061372a565b610b76565b60405161047c9190613794565b60405180910390f35b348015610490575f5ffd5b506104ab60048036038101906104a6919061372a565b610b87565b6040516104b891906136d7565b60405180910390f35b3480156104cc575f5ffd5b506104e760048036038101906104e29190613985565b610c22565b6040516104f49190613ad3565b60405180910390f35b348015610508575f5ffd5b50610511610cd8565b60405161051e9190613b47565b60405180910390f35b348015610532575f5ffd5b5061054d60048036038101906105489190613a86565b610cfd565b60405161055a919061364e565b60405180910390f35b34801561056e575f5ffd5b50610577610d61565b60405161058491906136d7565b60405180910390f35b348015610598575f5ffd5b506105a1610df1565b6040516105ae9190613ad3565b60405180910390f35b3480156105c2575f5ffd5b506105cb610df7565b6040516105d89190613a6d565b60405180910390f35b3480156105ec575f5ffd5b5061060760048036038101906106029190613b8a565b610dfd565b005b610623600480360381019061061e9190613bc8565b610e13565b005b348015610630575f5ffd5b5061064b60048036038101906106469190613d93565b610e39565b005b348015610658575f5ffd5b50610673600480360381019061066e919061372a565b610e5e565b005b348015610680575f5ffd5b5061069b6004803603810190610696919061372a565b610e75565b6040516106a891906136d7565b60405180910390f35b6106cb60048036038101906106c69190613e13565b61122b565b005b3480156106d8575f5ffd5b506106e1611250565b6040516106ee9190613ec4565b60405180910390f35b348015610702575f5ffd5b5061071d60048036038101906107189190613a86565b611275565b005b34801561072a575f5ffd5b506107456004803603810190610740919061372a565b611297565b6040516107529190613ad3565b60405180910390f35b348015610766575f5ffd5b50610781600480360381019061077c9190613edd565b6112ac565b60405161078e919061364e565b60405180910390f35b3480156107a2575f5ffd5b506107bd60048036038101906107b89190613985565b61133a565b005b5f6107c9826113f8565b9050919050565b60605f80546107de90613f48565b80601f016020809104026020016040519081016040528092919081815260200182805461080a90613f48565b80156108555780601f1061082c57610100808354040283529160200191610855565b820191905f5260205f20905b81548152906001019060200180831161083857829003601f168201915b5050505050905090565b5f61086982611471565b50610873826114f7565b9050919050565b61088c8282610887611530565b611537565b5050565b610898611549565b6108a685858585855f61158f565b6108ae6119cd565b5050505050565b6108bd611549565b6108cb33858585855f61158f565b6108d36119cd565b50505050565b5f5f1b6108e5816119d7565b81600c5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610999575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016109909190613794565b60405180910390fd5b5f6109ac83836109a7611530565b6119eb565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a22578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610a1993929190613f78565b60405180910390fd5b50505050565b5f60075f8381526020019081526020015f20600101549050919050565b5f5f1b610a51816119d7565b81600d5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b610a9e82610a28565b610aa7816119d7565b610ab18383611bf6565b50505050565b610abf611530565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b23576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b2d8282611ce0565b505050565b610b4c83838360405180602001604052805f815250610e39565b505050565b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f610b8082611471565b9050919050565b600f602052805f5260405f205f915090508054610ba390613f48565b80601f0160208091040260200160405190810160405280929190818152602001828054610bcf90613f48565b8015610c1a5780601f10610bf157610100808354040283529160200191610c1a565b820191905f5260205f20905b815481529060010190602001808311610bfd57829003601f168201915b505050505081565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c93575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610c8a9190613794565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f60075f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b606060018054610d7090613f48565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9c90613f48565b8015610de75780601f10610dbe57610100808354040283529160200191610de7565b820191905f5260205f20905b815481529060010190602001808311610dca57829003601f168201915b5050505050905090565b600b5481565b5f5f1b81565b610e0f610e08611530565b8383611dca565b5050565b610e1b611549565b610e2986868686868661158f565b610e316119cd565b505050505050565b610e44848484610929565b610e58610e4f611530565b85858585611f33565b50505050565b5f5f1b610e6a816119d7565b81600b819055505050565b6060610e8082611471565b505f600e5f8481526020019081526020015f205490505f60405180602001604052805f81525090505f73ffffffffffffffffffffffffffffffffffffffff16600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610fa257600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b63e6ac3836040518263ffffffff1660e01b8152600401610f569190613ad3565b5f60405180830381865afa925050508015610f9357506040513d5f823e3d601f19601f82011682018060405250810190610f90919061410c565b60015b15610fa15780606001519150505b5b6060805f600f5f8881526020019081526020015f208054610fc290613f48565b80601f0160208091040260200160405190810160405280929190818152602001828054610fee90613f48565b80156110395780601f1061101057610100808354040283529160200191611039565b820191905f5260205f20905b81548152906001019060200180831161101c57829003601f168201915b505050505090505f8151111561109b57611052816120df565b156110925780915061106c6110678886612590565b6125f5565b60405160200161107c91906141d7565b6040516020818303038152906040529250611096565b8092505b611138565b5f6110a588612622565b90505f81511115611102576110b9816120df565b156110f9578092506110d36110ce8987612590565b6125f5565b6040516020016110e391906141d7565b60405160208183030381529060405293506110fd565b8093505b611136565b61111461110f8987612590565b6125f5565b60405160200161112491906141d7565b60405160208183030381529060405293505b505b5f60405180602001604052805f81525090505f8351111561117657826040516020016111649190614242565b60405160208183030381529060405290505b5f6111fb6111838a61272d565b5f88511161119f5760405180602001604052805f8152506111c8565b6111a8886127f7565b6040516020016111b891906142ad565b6040516020818303038152906040525b87856111d38b6127f7565b6040516020016111e795949392919061448c565b6040516020818303038152906040526125f5565b90508060405160200161120e9190614557565b604051602081830303815290604052975050505050505050919050565b611233611549565b61124133868686868661158f565b6112496119cd565b5050505050565b600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61127e82610a28565b611287816119d7565b6112918383611ce0565b50505050565b600e602052805f5260405f205f915090505481565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f5f1b611346816119d7565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ab906145c2565b60405180910390fd5b81600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061146a575061146982612b44565b5b9050919050565b5f5f61147c83612ba4565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036114ee57826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016114e59190613ad3565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b6115448383836001612bdd565b505050565b600260085403611585576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600881905550565b5f73ffffffffffffffffffffffffffffffffffffffff16600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361161e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116159061462a565b60405180910390fd5b600b54341015611663576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165a90614692565b60405180910390fd5b5f60095f815480929190611676906146dd565b91905055905081156116a8578383600f5f8481526020019081526020015f2091826116a29291906148c5565b50611702565b5f848490501115611701576117008185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f82011690508083019250505050505050612d9c565b5b5b5f600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d3fc986433348a8a6040518563ffffffff1660e01b815260040161176394939291906149be565b6020604051808303815f875af115801561177f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117a391906149fc565b905080600e5f8481526020019081526020015f20819055506117c58883612df6565b5f73ffffffffffffffffffffffffffffffffffffffff16600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146118a357600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933346040518363ffffffff1660e01b8152600401611875929190614a27565b5f604051808303815f87803b15801561188c575f5ffd5b505af115801561189e573d5f5f3e3d5ffd5b505050505b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16346040516118e990614a7b565b5f6040518083038185875af1925050503d805f8114611923576040519150601f19603f3d011682016040523d82523d5f602084013e611928565b606091505b505090508061196c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196390614ad9565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858c8c6040516119ba959493929190614af7565b60405180910390a2505050505050505050565b6001600881905550565b6119e8816119e3611530565b612e13565b50565b5f5f6119f684612ba4565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611a3757611a36818486612e64565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611ac257611a765f855f5f612bdd565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611b4157600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b5f611c018383610cfd565b611cd657600160075f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550611c73611530565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050611cda565b5f90505b92915050565b5f611ceb8383610cfd565b15611dc0575f60075f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550611d5d611530565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611dc4565b5f90505b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611e3a57816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401611e319190613794565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611f26919061364e565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b11156120d8578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401611f919493929190614b95565b6020604051808303815f875af1925050508015611fcc57506040513d601f19601f82011682018060405250810190611fc99190614bf3565b60015b61204d573d805f8114611ffa576040519150601f19603f3d011682016040523d82523d5f602084013e611fff565b606091505b505f81510361204557836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161203c9190613794565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146120d657836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016120cd9190613794565b60405180910390fd5b505b5050505050565b5f5f829050600b815110156120f7575f91505061258b565b7f6400000000000000000000000000000000000000000000000000000000000000815f8151811061212b5761212a614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480156121c457507f61000000000000000000000000000000000000000000000000000000000000008160018151811061219557612194614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561222f57507f740000000000000000000000000000000000000000000000000000000000000081600281518110612200576121ff614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561229a57507f61000000000000000000000000000000000000000000000000000000000000008160038151811061226b5761226a614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561230557507f3a00000000000000000000000000000000000000000000000000000000000000816004815181106122d6576122d5614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561237057507f61000000000000000000000000000000000000000000000000000000000000008160058151811061234157612340614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80156123db57507f7500000000000000000000000000000000000000000000000000000000000000816006815181106123ac576123ab614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561244657507f64000000000000000000000000000000000000000000000000000000000000008160078151811061241757612416614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80156124b157507f69000000000000000000000000000000000000000000000000000000000000008160088151811061248257612481614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561251c57507f6f00000000000000000000000000000000000000000000000000000000000000816009815181106124ed576124ec614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561258757507f2f0000000000000000000000000000000000000000000000000000000000000081600a8151811061255857612557614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9150505b919050565b60605f5f8351116125c8576125a48461272d565b6040516020016125b49190614c95565b6040516020818303038152906040526125ca565b825b9050806040516020016125dd9190614f7e565b60405160208183030381529060405291505092915050565b606061261b826040518060600160405280604081526020016151b6604091396001612f27565b9050919050565b606061262d82611471565b505f60065f8481526020019081526020015f20805461264b90613f48565b80601f016020809104026020016040519081016040528092919081815260200182805461267790613f48565b80156126c25780601f10612699576101008083540402835291602001916126c2565b820191905f5260205f20905b8154815290600101906020018083116126a557829003601f168201915b505050505090505f6126d26130b6565b90505f8151036126e6578192505050612728565b5f8251111561271a578082604051602001612702929190614fcb565b60405160208183030381529060405292505050612728565b612723846130cc565b925050505b919050565b60605f600161273b84613132565b0190505f8167ffffffffffffffff81111561275957612758613c6f565b5b6040519080825280601f01601f19166020018201604052801561278b5781602001600182028036833780820191505090505b5090505f82602083010190505b6001156127ec578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816127e1576127e0614fee565b5b0494505f8503612798575b819350505050919050565b60605f8290505f815190505f5f90505f5f90505b828110156128ff577f220000000000000000000000000000000000000000000000000000000000000084828151811061284757612846614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806128de57507f5c000000000000000000000000000000000000000000000000000000000000008482815181106128af576128ae614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156128f25781806128ee906146dd565b9250505b808060010191505061280b565b505f810361291257849350505050612b3f565b5f818361291f919061501b565b67ffffffffffffffff81111561293857612937613c6f565b5b6040519080825280601f01601f19166020018201604052801561296a5781602001600182028036833780820191505090505b5090505f5f90505f5f90505b84811015612b35577f22000000000000000000000000000000000000000000000000000000000000008682815181106129b2576129b1614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612a4957507f5c00000000000000000000000000000000000000000000000000000000000000868281518110612a1a57612a19614c1e565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15612abd577f5c00000000000000000000000000000000000000000000000000000000000000838380612a7b906146dd565b945081518110612a8e57612a8d614c1e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505b858181518110612ad057612acf614c1e565b5b602001015160f81c60f81b838380612ae7906146dd565b945081518110612afa57612af9614c1e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053508080600101915050612976565b5081955050505050505b919050565b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612b9d5750612b9c82613283565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080612c1557505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15612d47575f612c2484611471565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612c8e57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015612ca15750612c9f81846112ac565b155b15612ce357826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401612cda9190613794565b60405180910390fd5b8115612d4557838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b8060065f8481526020019081526020015f209081612dba919061504e565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce782604051612dea9190613ad3565b60405180910390a15050565b612e0f828260405180602001604052805f815250613364565b5050565b612e1d8282610cfd565b612e605780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401612e5792919061511d565b60405180910390fd5b5050565b612e6f838383613387565b612f22575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612ee357806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401612eda9190613ad3565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612f19929190614a27565b60405180910390fd5b505050565b60605f845103612f475760405180602001604052805f81525090506130af565b5f82612f78576003600286516004612f5f9190615144565b612f69919061501b565b612f739190615185565b612f9f565b600360028651612f88919061501b565b612f929190615185565b6004612f9e9190615144565b5b90505f8167ffffffffffffffff811115612fbc57612fbb613c6f565b5b6040519080825280601f01601f191660200182016040528015612fee5781602001600182028036833780820191505090505b509050600185016020820187885189016020810180515f82525b82841015613063576003840193508351603f8160121c168701518653600186019550603f81600c1c168701518653600186019550603f8160061c168701518653600186019550603f8116870151865360018601955050613008565b80825289156130a35760038c5106600181146130865760028114613099576130a1565b603d6001870353603d60028703536130a1565b603d60018703535b505b50505050505080925050505b9392505050565b606060405180602001604052805f815250905090565b60606130d782611471565b505f6130e16130b6565b90505f8151116130ff5760405180602001604052805f81525061312a565b806131098461272d565b60405160200161311a929190614fcb565b6040516020818303038152906040525b915050919050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061318e577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161318457613183614fee565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106131cb576d04ee2d6d415b85acef810000000083816131c1576131c0614fee565b5b0492506020810190505b662386f26fc1000083106131fa57662386f26fc1000083816131f0576131ef614fee565b5b0492506010810190505b6305f5e1008310613223576305f5e100838161321957613218614fee565b5b0492506008810190505b612710831061324857612710838161323e5761323d614fee565b5b0492506004810190505b6064831061326b576064838161326157613260614fee565b5b0492506002810190505b600a831061327a576001810190505b80915050919050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061334d57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061335d575061335c82613447565b5b9050919050565b61336e83836134b0565b613382613379611530565b5f858585611f33565b505050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561343e57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806133ff57506133fe84846112ac565b5b8061343d57508273ffffffffffffffffffffffffffffffffffffffff16613425836114f7565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603613520575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016135179190613794565b60405180910390fd5b5f61352c83835f6119eb565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461359e575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016135959190613794565b60405180910390fd5b505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6135e8816135b4565b81146135f2575f5ffd5b50565b5f81359050613603816135df565b92915050565b5f6020828403121561361e5761361d6135ac565b5b5f61362b848285016135f5565b91505092915050565b5f8115159050919050565b61364881613634565b82525050565b5f6020820190506136615f83018461363f565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6136a982613667565b6136b38185613671565b93506136c3818560208601613681565b6136cc8161368f565b840191505092915050565b5f6020820190508181035f8301526136ef818461369f565b905092915050565b5f819050919050565b613709816136f7565b8114613713575f5ffd5b50565b5f8135905061372481613700565b92915050565b5f6020828403121561373f5761373e6135ac565b5b5f61374c84828501613716565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61377e82613755565b9050919050565b61378e81613774565b82525050565b5f6020820190506137a75f830184613785565b92915050565b6137b681613774565b81146137c0575f5ffd5b50565b5f813590506137d1816137ad565b92915050565b5f5f604083850312156137ed576137ec6135ac565b5b5f6137fa858286016137c3565b925050602061380b85828601613716565b9150509250929050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f84011261383657613835613815565b5b8235905067ffffffffffffffff81111561385357613852613819565b5b60208301915083600182028301111561386f5761386e61381d565b5b9250929050565b5f5f5f5f5f6060868803121561388f5761388e6135ac565b5b5f61389c888289016137c3565b955050602086013567ffffffffffffffff8111156138bd576138bc6135b0565b5b6138c988828901613821565b9450945050604086013567ffffffffffffffff8111156138ec576138eb6135b0565b5b6138f888828901613821565b92509250509295509295909350565b5f5f5f5f6040858703121561391f5761391e6135ac565b5b5f85013567ffffffffffffffff81111561393c5761393b6135b0565b5b61394887828801613821565b9450945050602085013567ffffffffffffffff81111561396b5761396a6135b0565b5b61397787828801613821565b925092505092959194509250565b5f6020828403121561399a576139996135ac565b5b5f6139a7848285016137c3565b91505092915050565b5f5f5f606084860312156139c7576139c66135ac565b5b5f6139d4868287016137c3565b93505060206139e5868287016137c3565b92505060406139f686828701613716565b9150509250925092565b5f819050919050565b613a1281613a00565b8114613a1c575f5ffd5b50565b5f81359050613a2d81613a09565b92915050565b5f60208284031215613a4857613a476135ac565b5b5f613a5584828501613a1f565b91505092915050565b613a6781613a00565b82525050565b5f602082019050613a805f830184613a5e565b92915050565b5f5f60408385031215613a9c57613a9b6135ac565b5b5f613aa985828601613a1f565b9250506020613aba858286016137c3565b9150509250929050565b613acd816136f7565b82525050565b5f602082019050613ae65f830184613ac4565b92915050565b5f819050919050565b5f613b0f613b0a613b0584613755565b613aec565b613755565b9050919050565b5f613b2082613af5565b9050919050565b5f613b3182613b16565b9050919050565b613b4181613b27565b82525050565b5f602082019050613b5a5f830184613b38565b92915050565b613b6981613634565b8114613b73575f5ffd5b50565b5f81359050613b8481613b60565b92915050565b5f5f60408385031215613ba057613b9f6135ac565b5b5f613bad858286016137c3565b9250506020613bbe85828601613b76565b9150509250929050565b5f5f5f5f5f5f60808789031215613be257613be16135ac565b5b5f613bef89828a016137c3565b965050602087013567ffffffffffffffff811115613c1057613c0f6135b0565b5b613c1c89828a01613821565b9550955050604087013567ffffffffffffffff811115613c3f57613c3e6135b0565b5b613c4b89828a01613821565b93509350506060613c5e89828a01613b76565b9150509295509295509295565b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b613ca58261368f565b810181811067ffffffffffffffff82111715613cc457613cc3613c6f565b5b80604052505050565b5f613cd66135a3565b9050613ce28282613c9c565b919050565b5f67ffffffffffffffff821115613d0157613d00613c6f565b5b613d0a8261368f565b9050602081019050919050565b828183375f83830152505050565b5f613d37613d3284613ce7565b613ccd565b905082815260208101848484011115613d5357613d52613c6b565b5b613d5e848285613d17565b509392505050565b5f82601f830112613d7a57613d79613815565b5b8135613d8a848260208601613d25565b91505092915050565b5f5f5f5f60808587031215613dab57613daa6135ac565b5b5f613db8878288016137c3565b9450506020613dc9878288016137c3565b9350506040613dda87828801613716565b925050606085013567ffffffffffffffff811115613dfb57613dfa6135b0565b5b613e0787828801613d66565b91505092959194509250565b5f5f5f5f5f60608688031215613e2c57613e2b6135ac565b5b5f86013567ffffffffffffffff811115613e4957613e486135b0565b5b613e5588828901613821565b9550955050602086013567ffffffffffffffff811115613e7857613e776135b0565b5b613e8488828901613821565b93509350506040613e9788828901613b76565b9150509295509295909350565b5f613eae82613b16565b9050919050565b613ebe81613ea4565b82525050565b5f602082019050613ed75f830184613eb5565b92915050565b5f5f60408385031215613ef357613ef26135ac565b5b5f613f00858286016137c3565b9250506020613f11858286016137c3565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680613f5f57607f821691505b602082108103613f7257613f71613f1b565b5b50919050565b5f606082019050613f8b5f830186613785565b613f986020830185613ac4565b613fa56040830184613785565b949350505050565b5f5ffd5b5f5ffd5b5f81519050613fc3816137ad565b92915050565b5f81519050613fd781613700565b92915050565b5f67ffffffffffffffff821115613ff757613ff6613c6f565b5b6140008261368f565b9050602081019050919050565b5f61401f61401a84613fdd565b613ccd565b90508281526020810184848401111561403b5761403a613c6b565b5b614046848285613681565b509392505050565b5f82601f83011261406257614061613815565b5b815161407284826020860161400d565b91505092915050565b5f608082840312156140905761408f613fad565b5b61409a6080613ccd565b90505f6140a984828501613fb5565b5f8301525060206140bc84828501613fc9565b60208301525060406140d084828501613fc9565b604083015250606082015167ffffffffffffffff8111156140f4576140f3613fb1565b5b6141008482850161404e565b60608301525092915050565b5f60208284031215614121576141206135ac565b5b5f82015167ffffffffffffffff81111561413e5761413d6135b0565b5b61414a8482850161407b565b91505092915050565b5f81905092915050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c0000000000005f82015250565b5f614191601a83614153565b915061419c8261415d565b601a82019050919050565b5f6141b182613667565b6141bb8185614153565b93506141cb818560208601613681565b80840191505092915050565b5f6141e182614185565b91506141ed82846141a7565b915081905092915050565b7f222c2022616e696d6174696f6e5f75726c223a202200000000000000000000005f82015250565b5f61422c601583614153565b9150614237826141f8565b601582019050919050565b5f61424c82614220565b915061425882846141a7565b915081905092915050565b7f3a200000000000000000000000000000000000000000000000000000000000005f82015250565b5f614297600283614153565b91506142a282614263565b600282019050919050565b5f6142b78261428b565b91506142c382846141a7565b915081905092915050565b7f7b226e616d65223a2022427261674e46542023000000000000000000000000005f82015250565b5f614302601383614153565b915061430d826142ce565b601382019050919050565b7f222c20226465736372697074696f6e223a2022427261672e43686172697479205f8201527f446f6e6174696f6e204e46540000000000000000000000000000000000000000602082015250565b5f614372602c83614153565b915061437d82614318565b602c82019050919050565b7f222c2022696d616765223a2022000000000000000000000000000000000000005f82015250565b5f6143bc600d83614153565b91506143c782614388565b600d82019050919050565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a5f8201527f20224d657373616765222c202276616c7565223a202200000000000000000000602082015250565b5f61442c603683614153565b9150614437826143d2565b603682019050919050565b7f227d5d7d000000000000000000000000000000000000000000000000000000005f82015250565b5f614476600483614153565b915061448182614442565b600482019050919050565b5f614496826142f6565b91506144a282886141a7565b91506144ad82614366565b91506144b982876141a7565b91506144c4826143b0565b91506144d082866141a7565b91506144dc82856141a7565b91506144e782614420565b91506144f382846141a7565b91506144fe8261446a565b91508190509695505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000005f82015250565b5f614541601d83614153565b915061454c8261450d565b601d82019050919050565b5f61456182614535565b915061456d82846141a7565b915081905092915050565b7f496e76616c6964207472656173757279206164647265737300000000000000005f82015250565b5f6145ac601883613671565b91506145b782614578565b602082019050919050565b5f6020820190508181035f8301526145d9816145a0565b9050919050565b7f5265636569707420636f6e7472616374206e6f742073657400000000000000005f82015250565b5f614614601883613671565b915061461f826145e0565b602082019050919050565b5f6020820190508181035f83015261464181614608565b9050919050565b7f446f6e6174696f6e2062656c6f77206d696e696d756d000000000000000000005f82015250565b5f61467c601683613671565b915061468782614648565b602082019050919050565b5f6020820190508181035f8301526146a981614670565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6146e7826136f7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614719576147186146b0565b5b600182019050919050565b5f82905092915050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261478a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261474f565b614794868361474f565b95508019841693508086168417925050509392505050565b5f6147c66147c16147bc846136f7565b613aec565b6136f7565b9050919050565b5f819050919050565b6147df836147ac565b6147f36147eb826147cd565b84845461475b565b825550505050565b5f5f905090565b61480a6147fb565b6148158184846147d6565b505050565b5b818110156148385761482d5f82614802565b60018101905061481b565b5050565b601f82111561487d5761484e8161472e565b61485784614740565b81016020851015614866578190505b61487a61487285614740565b83018261481a565b50505b505050565b5f82821c905092915050565b5f61489d5f1984600802614882565b1980831691505092915050565b5f6148b5838361488e565b9150826002028217905092915050565b6148cf8383614724565b67ffffffffffffffff8111156148e8576148e7613c6f565b5b6148f28254613f48565b6148fd82828561483c565b5f601f83116001811461492a575f8415614918578287013590505b61492285826148aa565b865550614989565b601f1984166149388661472e565b5f5b8281101561495f5784890135825560018201915060208501945060208101905061493a565b8683101561497c5784890135614978601f89168261488e565b8355505b6001600288020188555050505b50505050505050565b5f61499d8385613671565b93506149aa838584613d17565b6149b38361368f565b840190509392505050565b5f6060820190506149d15f830187613785565b6149de6020830186613ac4565b81810360408301526149f1818486614992565b905095945050505050565b5f60208284031215614a1157614a106135ac565b5b5f614a1e84828501613fc9565b91505092915050565b5f604082019050614a3a5f830185613785565b614a476020830184613ac4565b9392505050565b5f81905092915050565b50565b5f614a665f83614a4e565b9150614a7182614a58565b5f82019050919050565b5f614a8582614a5b565b9150819050919050565b7f5472616e7366657220746f207472656173757279206661696c656400000000005f82015250565b5f614ac3601b83613671565b9150614ace82614a8f565b602082019050919050565b5f6020820190508181035f830152614af081614ab7565b9050919050565b5f608082019050614b0a5f830188613ac4565b614b176020830187613ac4565b614b246040830186613ac4565b8181036060830152614b37818486614992565b90509695505050505050565b5f81519050919050565b5f82825260208201905092915050565b5f614b6782614b43565b614b718185614b4d565b9350614b81818560208601613681565b614b8a8161368f565b840191505092915050565b5f608082019050614ba85f830187613785565b614bb56020830186613785565b614bc26040830185613ac4565b8181036060830152614bd48184614b5d565b905095945050505050565b5f81519050614bed816135df565b92915050565b5f60208284031215614c0857614c076135ac565b5b5f614c1584828501614bdf565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f427261674e4654202300000000000000000000000000000000000000000000005f82015250565b5f614c7f600983614153565b9150614c8a82614c4b565b600982019050919050565b5f614c9f82614c73565b9150614cab82846141a7565b915081905092915050565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32305f8201527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d22302030203335302033353060408201527f223e000000000000000000000000000000000000000000000000000000000000606082015250565b5f614d5c606283614153565b9150614d6782614cb6565b606282019050919050565b7f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e745f8201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060208201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60408201527f653e000000000000000000000000000000000000000000000000000000000000606082015250565b5f614e18606283614153565b9150614e2382614d72565b606282019050919050565b7f3c726563742077696474683d223130302522206865696768743d2231303025225f8201527f2066696c6c3d222336333636663122202f3e0000000000000000000000000000602082015250565b5f614e88603283614153565b9150614e9382614e2e565b603282019050919050565b7f3c7465787420783d223530252220793d223530252220636c6173733d226261735f8201527f652220646f6d696e616e742d626173656c696e653d226d6964646c652220746560208201527f78742d616e63686f723d226d6964646c65223e00000000000000000000000000604082015250565b5f614f1e605383614153565b9150614f2982614e9e565b605382019050919050565b7f3c2f746578743e3c2f7376673e000000000000000000000000000000000000005f82015250565b5f614f68600d83614153565b9150614f7382614f34565b600d82019050919050565b5f614f8882614d50565b9150614f9382614e0c565b9150614f9e82614e7c565b9150614fa982614f12565b9150614fb582846141a7565b9150614fc082614f5c565b915081905092915050565b5f614fd682856141a7565b9150614fe282846141a7565b91508190509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f615025826136f7565b9150615030836136f7565b9250828201905080821115615048576150476146b0565b5b92915050565b61505782613667565b67ffffffffffffffff8111156150705761506f613c6f565b5b61507a8254613f48565b61508582828561483c565b5f60209050601f8311600181146150b6575f84156150a4578287015190505b6150ae85826148aa565b865550615115565b601f1984166150c48661472e565b5f5b828110156150eb578489015182556001820191506020850194506020810190506150c6565b868310156151085784890151615104601f89168261488e565b8355505b6001600288020188555050505b505050505050565b5f6040820190506151305f830185613785565b61513d6020830184613a5e565b9392505050565b5f61514e826136f7565b9150615159836136f7565b9250828202615167816136f7565b9150828204841483151761517e5761517d6146b0565b5b5092915050565b5f61518f826136f7565b915061519a836136f7565b9250826151aa576151a9614fee565b5b82820490509291505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212201f4082e98ac83d26640e398fe0db23d259fc01827873b360089200d247e02eeb64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516146ae3803806146ae83398181016040528101906100319190610296565b6040518060400160405280600f81526020017f446f6e6174696f6e5265636569707400000000000000000000000000000000008152506040518060400160405280600b81526020017f4252414752454345495054000000000000000000000000000000000000000000815250815f90816100ab91906104fe565b5080600190816100bb91906104fe565b5050506100d05f5f1b826100d760201b60201c565b50506105cd565b5f6100e883836101cd60201b60201c565b6101c357600160065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061016061023160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506101c7565b5f90505b92915050565b5f60065f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102658261023c565b9050919050565b6102758161025b565b811461027f575f5ffd5b50565b5f815190506102908161026c565b92915050565b5f602082840312156102ab576102aa610238565b5b5f6102b884828501610282565b91505092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061033c57607f821691505b60208210810361034f5761034e6102f8565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026103b17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610376565b6103bb8683610376565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f6103ff6103fa6103f5846103d3565b6103dc565b6103d3565b9050919050565b5f819050919050565b610418836103e5565b61042c61042482610406565b848454610382565b825550505050565b5f5f905090565b610443610434565b61044e81848461040f565b505050565b5b81811015610471576104665f8261043b565b600181019050610454565b5050565b601f8211156104b65761048781610355565b61049084610367565b8101602085101561049f578190505b6104b36104ab85610367565b830182610453565b50505b505050565b5f82821c905092915050565b5f6104d65f19846008026104bb565b1980831691505092915050565b5f6104ee83836104c7565b9150826002028217905092915050565b610507826102c1565b67ffffffffffffffff8111156105205761051f6102cb565b5b61052a8254610325565b610535828285610475565b5f60209050601f831160018114610566575f8415610554578287015190505b61055e85826104e3565b8655506105c5565b601f19841661057486610355565b5f5b8281101561059b57848901518255600182019150602085019450602081019050610576565b868310156105b857848901516105b4601f8916826104c7565b8355505b6001600288020188555050505b505050505050565b6140d4806105da5f395ff3fe608060405234801561000f575f5ffd5b5060043610610156575f3560e01c806391d14854116100c1578063c87b56dd1161007a578063c87b56dd146103fb578063cf456ae71461042b578063d3fc986414610447578063d539139314610477578063d547741f14610495578063e985e9c5146104b157610156565b806391d148541461032757806395d89b4114610357578063a217fddf14610375578063a22cb46514610393578063b63e6ac3146103af578063b88d4fde146103df57610156565b8063248a9ca311610113578063248a9ca3146102435780632f2ff15d1461027357806336568abe1461028f57806342842e0e146102ab5780636352211e146102c757806370a08231146102f757610156565b806301ffc9a71461015a57806306fdde031461018a578063081812fc146101a8578063095ea7b3146101d85780630f7ee1ec146101f457806323b872dd14610227575b5f5ffd5b610174600480360381019061016f91906126c5565b6104e1565b604051610181919061270a565b60405180910390f35b6101926104f2565b60405161019f9190612793565b60405180910390f35b6101c260048036038101906101bd91906127e6565b610581565b6040516101cf9190612850565b60405180910390f35b6101f260048036038101906101ed9190612893565b61059c565b005b61020e600480360381019061020991906127e6565b6105b2565b60405161021e94939291906128e0565b60405180910390f35b610241600480360381019061023c919061292a565b610683565b005b61025d600480360381019061025891906129ad565b610782565b60405161026a91906129e7565b60405180910390f35b61028d60048036038101906102889190612a00565b61079f565b005b6102a960048036038101906102a49190612a00565b6107c1565b005b6102c560048036038101906102c0919061292a565b61083c565b005b6102e160048036038101906102dc91906127e6565b61085b565b6040516102ee9190612850565b60405180910390f35b610311600480360381019061030c9190612a3e565b61086c565b60405161031e9190612a69565b60405180910390f35b610341600480360381019061033c9190612a00565b610922565b60405161034e919061270a565b60405180910390f35b61035f610986565b60405161036c9190612793565b60405180910390f35b61037d610a16565b60405161038a91906129e7565b60405180910390f35b6103ad60048036038101906103a89190612aac565b610a1c565b005b6103c960048036038101906103c491906127e6565b610a32565b6040516103d69190612bb0565b60405180910390f35b6103f960048036038101906103f49190612cfc565b610b5f565b005b610415600480360381019061041091906127e6565b610b84565b6040516104229190612793565b60405180910390f35b61044560048036038101906104409190612aac565b610d56565b005b610461600480360381019061045c9190612dd9565b610dc9565b60405161046e9190612a69565b60405180910390f35b61047f610f6f565b60405161048c91906129e7565b60405180910390f35b6104af60048036038101906104aa9190612a00565b610f93565b005b6104cb60048036038101906104c69190612e4a565b610fb5565b6040516104d8919061270a565b60405180910390f35b5f6104eb82611043565b9050919050565b60605f805461050090612eb5565b80601f016020809104026020016040519081016040528092919081815260200182805461052c90612eb5565b80156105775780601f1061054e57610100808354040283529160200191610577565b820191905f5260205f20905b81548152906001019060200180831161055a57829003601f168201915b5050505050905090565b5f61058b826110bc565b5061059582611142565b9050919050565b6105ae82826105a961117b565b611182565b5050565b6008602052805f5260405f205f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101549080600201549080600301805461060290612eb5565b80601f016020809104026020016040519081016040528092919081815260200182805461062e90612eb5565b80156106795780601f1061065057610100808354040283529160200191610679565b820191905f5260205f20905b81548152906001019060200180831161065c57829003601f168201915b5050505050905084565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106f3575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016106ea9190612850565b60405180910390fd5b5f610706838361070161117b565b611194565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461077c578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161077393929190612ee5565b60405180910390fd5b50505050565b5f60065f8381526020019081526020015f20600101549050919050565b6107a882610782565b6107b18161125e565b6107bb8383611272565b50505050565b6107c961117b565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461082d576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610837828261135c565b505050565b61085683838360405180602001604052805f815250610b5f565b505050565b5f610865826110bc565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108dd575f6040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016108d49190612850565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f60065f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b60606001805461099590612eb5565b80601f01602080910402602001604051908101604052809291908181526020018280546109c190612eb5565b8015610a0c5780601f106109e357610100808354040283529160200191610a0c565b820191905f5260205f20905b8154815290600101906020018083116109ef57829003601f168201915b5050505050905090565b5f5f1b81565b610a2e610a2761117b565b8383611446565b5050565b610a3a612624565b610a43826110bc565b5060085f8381526020019081526020015f206040518060800160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382018054610ad890612eb5565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0490612eb5565b8015610b4f5780601f10610b2657610100808354040283529160200191610b4f565b820191905f5260205f20905b815481529060010190602001808311610b3257829003601f168201915b5050505050815250509050919050565b610b6a848484610683565b610b7e610b7561117b565b858585856115af565b50505050565b6060610b8f826110bc565b505f60085f8481526020019081526020015f206040518060800160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382018054610c2590612eb5565b80601f0160208091040260200160405190810160405280929190818152602001828054610c5190612eb5565b8015610c9c5780601f10610c7357610100808354040283529160200191610c9c565b820191905f5260205f20905b815481529060010190602001808311610c7f57829003601f168201915b50505050508152505090505f610d2b610cb48561175b565b610cc5610cc085611825565b611885565b610ce9855f015173ffffffffffffffffffffffffffffffffffffffff1660146118b2565b610cf6866020015161175b565b610d03876040015161175b565b604051602001610d17959493929190613288565b604051602081830303815290604052611885565b905080604051602001610d3e9190613374565b60405160208183030381529060405292505050919050565b5f5f1b610d628161125e565b8115610d9857610d927f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a684611272565b50610dc4565b610dc27f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68461135c565b505b505050565b5f7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610df48161125e565b5f60075f815480929190610e07906133c2565b91905055905060405180608001604052808873ffffffffffffffffffffffffffffffffffffffff16815260200187815260200142815260200186868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081525060085f8381526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201556060820151816003019081610f0591906135a9565b50905050610f138782611af0565b8673ffffffffffffffffffffffffffffffffffffffff16817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea588604051610f5a9190612a69565b60405180910390a38092505050949350505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610f9c82610782565b610fa58161125e565b610faf838361135c565b50505050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806110b557506110b482611b0d565b5b9050919050565b5f5f6110c783611bee565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361113957826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016111309190612a69565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b61118f8383836001611c27565b505050565b5f5f61119f84611bee565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561120957505f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611249576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611240906136e8565b60405180910390fd5b611254858585611de6565b9150509392505050565b61126f8161126a61117b565b611ff1565b50565b5f61127d8383610922565b61135257600160065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506112ef61117b565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050611356565b5f90505b92915050565b5f6113678383610922565b1561143c575f60065f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506113d961117b565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611440565b5f90505b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036114b657816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016114ad9190612850565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115a2919061270a565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115611754578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b815260040161160d9493929190613758565b6020604051808303815f875af192505050801561164857506040513d601f19601f8201168201806040525081019061164591906137b6565b60015b6116c9573d805f8114611676576040519150601f19603f3d011682016040523d82523d5f602084013e61167b565b606091505b505f8151036116c157836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016116b89190612850565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461175257836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016117499190612850565b60405180910390fd5b505b5050505050565b60605f600161176984612042565b0190505f8167ffffffffffffffff81111561178757611786612bd8565b5b6040519080825280601f01601f1916602001820160405280156117b95781602001600182028036833780820191505090505b5090505f82602083010190505b60011561181a578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161180f5761180e6137e1565b5b0494505f85036117c6575b819350505050919050565b606061184b825f015173ffffffffffffffffffffffffffffffffffffffff1660146118b2565b611858836020015161175b565b836060015160405160200161186f93929190613e32565b6040516020818303038152906040529050919050565b60606118ab8260405180606001604052806040815260200161405f604091396001612193565b9050919050565b60605f8390505f60028460026118c89190613ef1565b6118d29190613f32565b67ffffffffffffffff8111156118eb576118ea612bd8565b5b6040519080825280601f01601f19166020018201604052801561191d5781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000815f8151811061195457611953613f65565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106119b7576119b6613f65565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505f60018560026119f59190613ef1565b6119ff9190613f32565b90505b6001811115611a9e577f3031323334353637383961626364656600000000000000000000000000000000600f841660108110611a4157611a40613f65565b5b1a60f81b828281518110611a5857611a57613f65565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600483901c925080611a9790613f92565b9050611a02565b505f8214611ae55784846040517fe22e27eb000000000000000000000000000000000000000000000000000000008152600401611adc929190613fb9565b60405180910390fd5b809250505092915050565b611b09828260405180602001604052805f815250612322565b5050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611bd757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611be75750611be682612345565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080611c5f57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611d91575f611c6e846110bc565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611cd857508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611ceb5750611ce98184610fb5565b155b15611d2d57826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401611d249190612850565b60405180910390fd5b8115611d8f57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f5f611df184611bee565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611e3257611e318184866123ae565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611ebd57611e715f855f5f611c27565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611f3c57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b611ffb8282610922565b61203e5780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401612035929190613fe0565b60405180910390fd5b5050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061209e577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612094576120936137e1565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106120db576d04ee2d6d415b85acef810000000083816120d1576120d06137e1565b5b0492506020810190505b662386f26fc10000831061210a57662386f26fc100008381612100576120ff6137e1565b5b0492506010810190505b6305f5e1008310612133576305f5e1008381612129576121286137e1565b5b0492506008810190505b612710831061215857612710838161214e5761214d6137e1565b5b0492506004810190505b6064831061217b5760648381612171576121706137e1565b5b0492506002810190505b600a831061218a576001810190505b80915050919050565b60605f8451036121b35760405180602001604052805f815250905061231b565b5f826121e45760036002865160046121cb9190613ef1565b6121d59190613f32565b6121df9190614007565b61220b565b6003600286516121f49190613f32565b6121fe9190614007565b600461220a9190613ef1565b5b90505f8167ffffffffffffffff81111561222857612227612bd8565b5b6040519080825280601f01601f19166020018201604052801561225a5781602001600182028036833780820191505090505b509050600185016020820187885189016020810180515f82525b828410156122cf576003840193508351603f8160121c168701518653600186019550603f81600c1c168701518653600186019550603f8160061c168701518653600186019550603f8116870151865360018601955050612274565b808252891561230f5760038c5106600181146122f257600281146123055761230d565b603d6001870353603d600287035361230d565b603d60018703535b505b50505050505080925050505b9392505050565b61232c8383612471565b61234061233761117b565b5f8585856115af565b505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6123b9838383612564565b61246c575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361242d57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016124249190612a69565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612463929190614037565b60405180910390fd5b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036124e1575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016124d89190612850565b60405180910390fd5b5f6124ed83835f611194565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461255f575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016125569190612850565b60405180910390fd5b505050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561261b57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806125dc57506125db8484610fb5565b5b8061261a57508273ffffffffffffffffffffffffffffffffffffffff1661260283611142565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b60405180608001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f8152602001606081525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6126a481612670565b81146126ae575f5ffd5b50565b5f813590506126bf8161269b565b92915050565b5f602082840312156126da576126d9612668565b5b5f6126e7848285016126b1565b91505092915050565b5f8115159050919050565b612704816126f0565b82525050565b5f60208201905061271d5f8301846126fb565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61276582612723565b61276f818561272d565b935061277f81856020860161273d565b6127888161274b565b840191505092915050565b5f6020820190508181035f8301526127ab818461275b565b905092915050565b5f819050919050565b6127c5816127b3565b81146127cf575f5ffd5b50565b5f813590506127e0816127bc565b92915050565b5f602082840312156127fb576127fa612668565b5b5f612808848285016127d2565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61283a82612811565b9050919050565b61284a81612830565b82525050565b5f6020820190506128635f830184612841565b92915050565b61287281612830565b811461287c575f5ffd5b50565b5f8135905061288d81612869565b92915050565b5f5f604083850312156128a9576128a8612668565b5b5f6128b68582860161287f565b92505060206128c7858286016127d2565b9150509250929050565b6128da816127b3565b82525050565b5f6080820190506128f35f830187612841565b61290060208301866128d1565b61290d60408301856128d1565b818103606083015261291f818461275b565b905095945050505050565b5f5f5f6060848603121561294157612940612668565b5b5f61294e8682870161287f565b935050602061295f8682870161287f565b9250506040612970868287016127d2565b9150509250925092565b5f819050919050565b61298c8161297a565b8114612996575f5ffd5b50565b5f813590506129a781612983565b92915050565b5f602082840312156129c2576129c1612668565b5b5f6129cf84828501612999565b91505092915050565b6129e18161297a565b82525050565b5f6020820190506129fa5f8301846129d8565b92915050565b5f5f60408385031215612a1657612a15612668565b5b5f612a2385828601612999565b9250506020612a348582860161287f565b9150509250929050565b5f60208284031215612a5357612a52612668565b5b5f612a608482850161287f565b91505092915050565b5f602082019050612a7c5f8301846128d1565b92915050565b612a8b816126f0565b8114612a95575f5ffd5b50565b5f81359050612aa681612a82565b92915050565b5f5f60408385031215612ac257612ac1612668565b5b5f612acf8582860161287f565b9250506020612ae085828601612a98565b9150509250929050565b612af381612830565b82525050565b612b02816127b3565b82525050565b5f82825260208201905092915050565b5f612b2282612723565b612b2c8185612b08565b9350612b3c81856020860161273d565b612b458161274b565b840191505092915050565b5f608083015f830151612b655f860182612aea565b506020830151612b786020860182612af9565b506040830151612b8b6040860182612af9565b5060608301518482036060860152612ba38282612b18565b9150508091505092915050565b5f6020820190508181035f830152612bc88184612b50565b905092915050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b612c0e8261274b565b810181811067ffffffffffffffff82111715612c2d57612c2c612bd8565b5b80604052505050565b5f612c3f61265f565b9050612c4b8282612c05565b919050565b5f67ffffffffffffffff821115612c6a57612c69612bd8565b5b612c738261274b565b9050602081019050919050565b828183375f83830152505050565b5f612ca0612c9b84612c50565b612c36565b905082815260208101848484011115612cbc57612cbb612bd4565b5b612cc7848285612c80565b509392505050565b5f82601f830112612ce357612ce2612bd0565b5b8135612cf3848260208601612c8e565b91505092915050565b5f5f5f5f60808587031215612d1457612d13612668565b5b5f612d218782880161287f565b9450506020612d328782880161287f565b9350506040612d43878288016127d2565b925050606085013567ffffffffffffffff811115612d6457612d6361266c565b5b612d7087828801612ccf565b91505092959194509250565b5f5ffd5b5f5ffd5b5f5f83601f840112612d9957612d98612bd0565b5b8235905067ffffffffffffffff811115612db657612db5612d7c565b5b602083019150836001820283011115612dd257612dd1612d80565b5b9250929050565b5f5f5f5f60608587031215612df157612df0612668565b5b5f612dfe8782880161287f565b9450506020612e0f878288016127d2565b935050604085013567ffffffffffffffff811115612e3057612e2f61266c565b5b612e3c87828801612d84565b925092505092959194509250565b5f5f60408385031215612e6057612e5f612668565b5b5f612e6d8582860161287f565b9250506020612e7e8582860161287f565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680612ecc57607f821691505b602082108103612edf57612ede612e88565b5b50919050565b5f606082019050612ef85f830186612841565b612f0560208301856128d1565b612f126040830184612841565b949350505050565b5f81905092915050565b7f7b226e616d65223a2022446f6e6174696f6e20526563656970742023000000005f82015250565b5f612f58601c83612f1a565b9150612f6382612f24565b601c82019050919050565b5f612f7882612723565b612f828185612f1a565b9350612f9281856020860161273d565b80840191505092915050565b7f222c20226465736372697074696f6e223a20224f6666696369616c20427261675f8201527f2e4368617269747920446f6e6174696f6e205265636f7264222c200000000000602082015250565b5f612ff8603b83612f1a565b915061300382612f9e565b603b82019050919050565b7f22696d616765223a2022646174613a696d6167652f7376672b786d6c3b6261735f8201527f6536342c00000000000000000000000000000000000000000000000000000000602082015250565b5f613068602483612f1a565b91506130738261300e565b602482019050919050565b7f222c202261747472696275746573223a205b00000000000000000000000000005f82015250565b5f6130b2601283612f1a565b91506130bd8261307e565b601282019050919050565b7f7b2274726169745f74797065223a2022446f6e6f72222c202276616c7565223a5f8201527f2022000000000000000000000000000000000000000000000000000000000000602082015250565b5f613122602283612f1a565b915061312d826130c8565b602282019050919050565b7f227d2c207b2274726169745f74797065223a2022416d6f756e74222c202276615f8201527f6c7565223a202200000000000000000000000000000000000000000000000000602082015250565b5f613192602783612f1a565b915061319d82613138565b602782019050919050565b7f227d2c207b2274726169745f74797065223a202254696d657374616d70222c205f8201527f22646973706c61795f74797065223a202264617465222c202276616c7565223a60208201527f2000000000000000000000000000000000000000000000000000000000000000604082015250565b5f613228604183612f1a565b9150613233826131a8565b604182019050919050565b7f7d5d7d00000000000000000000000000000000000000000000000000000000005f82015250565b5f613272600383612f1a565b915061327d8261323e565b600382019050919050565b5f61329282612f4c565b915061329e8288612f6e565b91506132a982612fec565b91506132b48261305c565b91506132c08287612f6e565b91506132cb826130a6565b91506132d682613116565b91506132e28286612f6e565b91506132ed82613186565b91506132f98285612f6e565b91506133048261321c565b91506133108284612f6e565b915061331b82613266565b91508190509695505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000005f82015250565b5f61335e601d83612f1a565b91506133698261332a565b601d82019050919050565b5f61337e82613352565b915061338a8284612f6e565b915081905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6133cc826127b3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036133fe576133fd613395565b5b600182019050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026134657fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261342a565b61346f868361342a565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6134aa6134a56134a0846127b3565b613487565b6127b3565b9050919050565b5f819050919050565b6134c383613490565b6134d76134cf826134b1565b848454613436565b825550505050565b5f5f905090565b6134ee6134df565b6134f98184846134ba565b505050565b5b8181101561351c576135115f826134e6565b6001810190506134ff565b5050565b601f8211156135615761353281613409565b61353b8461341b565b8101602085101561354a578190505b61355e6135568561341b565b8301826134fe565b50505b505050565b5f82821c905092915050565b5f6135815f1984600802613566565b1980831691505092915050565b5f6135998383613572565b9150826002028217905092915050565b6135b282612723565b67ffffffffffffffff8111156135cb576135ca612bd8565b5b6135d58254612eb5565b6135e0828285613520565b5f60209050601f831160018114613611575f84156135ff578287015190505b613609858261358e565b865550613670565b601f19841661361f86613409565b5f5b8281101561364657848901518255600182019150602085019450602081019050613621565b86831015613663578489015161365f601f891682613572565b8355505b6001600288020188555050505b505050505050565b7f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f5f8201527f756e6420616e642063616e6e6f74206265207472616e73666572726564000000602082015250565b5f6136d2603d8361272d565b91506136dd82613678565b604082019050919050565b5f6020820190508181035f8301526136ff816136c6565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f61372a82613706565b6137348185613710565b935061374481856020860161273d565b61374d8161274b565b840191505092915050565b5f60808201905061376b5f830187612841565b6137786020830186612841565b61378560408301856128d1565b81810360608301526137978184613720565b905095945050505050565b5f815190506137b08161269b565b92915050565b5f602082840312156137cb576137ca612668565b5b5f6137d8848285016137a2565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32305f8201527f30302f737667222077696474683d2233353022206865696768743d223335302260208201527f3e00000000000000000000000000000000000000000000000000000000000000604082015250565b5f61388e604183612f1a565b91506138998261380e565b604182019050919050565b7f3c726563742077696474683d223130302522206865696768743d2231303025225f8201527f2066696c6c3d222331653239336222202f3e0000000000000000000000000000602082015250565b5f6138fe603283612f1a565b9150613909826138a4565b603282019050919050565b7f3c7465787420783d223530252220793d223430222066696c6c3d2277686974655f8201527f2220666f6e742d66616d696c793d2273616e732d73657269662220666f6e742d60208201527f73697a653d2232302220746578742d616e63686f723d226d6964646c65223e4f60408201527f4646494349414c20524543454950543c2f746578743e00000000000000000000606082015250565b5f6139ba607683612f1a565b91506139c582613914565b607682019050919050565b7f3c7465787420783d2232302220793d22313030222066696c6c3d2223393461335f8201527f62382220666f6e742d66616d696c793d2273616e732d73657269662220666f6e60208201527f742d73697a653d223132223e444f4e4f523a3c2f746578743e00000000000000604082015250565b5f613a50605983612f1a565b9150613a5b826139d0565b605982019050919050565b7f3c7465787420783d2232302220793d22313230222066696c6c3d2277686974655f8201527f2220666f6e742d66616d696c793d2273616e732d73657269662220666f6e742d60208201527f73697a653d223130223e00000000000000000000000000000000000000000000604082015250565b5f613ae6604a83612f1a565b9150613af182613a66565b604a82019050919050565b7f3c2f746578743e000000000000000000000000000000000000000000000000005f82015250565b5f613b30600783612f1a565b9150613b3b82613afc565b600782019050919050565b7f3c7465787420783d2232302220793d22313630222066696c6c3d2223393461335f8201527f62382220666f6e742d66616d696c793d2273616e732d73657269662220666f6e60208201527f742d73697a653d223132223e414d4f554e543a3c2f746578743e000000000000604082015250565b5f613bc6605a83612f1a565b9150613bd182613b46565b605a82019050919050565b7f3c7465787420783d2232302220793d22313830222066696c6c3d2223363336365f8201527f66312220666f6e742d66616d696c793d2273616e732d73657269662220666f6e60208201527f742d73697a653d2231362220666f6e742d7765696768743d22626f6c64223e00604082015250565b5f613c5c605f83612f1a565b9150613c6782613bdc565b605f82019050919050565b7f205745493c2f746578743e0000000000000000000000000000000000000000005f82015250565b5f613ca6600b83612f1a565b9150613cb182613c72565b600b82019050919050565b7f3c7465787420783d2232302220793d22323230222066696c6c3d2223393461335f8201527f62382220666f6e742d66616d696c793d2273616e732d73657269662220666f6e60208201527f742d73697a653d223132223e4d4553534147453a3c2f746578743e0000000000604082015250565b5f613d3c605b83612f1a565b9150613d4782613cbc565b605b82019050919050565b7f3c7465787420783d2232302220793d22323430222066696c6c3d2277686974655f8201527f2220666f6e742d66616d696c793d2273616e732d73657269662220666f6e742d60208201527f73697a653d223132223e00000000000000000000000000000000000000000000604082015250565b5f613dd2604a83612f1a565b9150613ddd82613d52565b604a82019050919050565b7f3c2f7376673e00000000000000000000000000000000000000000000000000005f82015250565b5f613e1c600683612f1a565b9150613e2782613de8565b600682019050919050565b5f613e3c82613882565b9150613e47826138f2565b9150613e52826139ae565b9150613e5d82613a44565b9150613e6882613ada565b9150613e748286612f6e565b9150613e7f82613b24565b9150613e8a82613bba565b9150613e9582613c50565b9150613ea18285612f6e565b9150613eac82613c9a565b9150613eb782613d30565b9150613ec282613dc6565b9150613ece8284612f6e565b9150613ed982613b24565b9150613ee482613e10565b9150819050949350505050565b5f613efb826127b3565b9150613f06836127b3565b9250828202613f14816127b3565b91508282048414831517613f2b57613f2a613395565b5b5092915050565b5f613f3c826127b3565b9150613f47836127b3565b9250828201905080821115613f5f57613f5e613395565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f613f9c826127b3565b91505f8203613fae57613fad613395565b5b600182039050919050565b5f604082019050613fcc5f8301856128d1565b613fd960208301846128d1565b9392505050565b5f604082019050613ff35f830185612841565b61400060208301846129d8565b9392505050565b5f614011826127b3565b915061401c836127b3565b92508261402c5761402b6137e1565b5b828204905092915050565b5f60408201905061404a5f830185612841565b61405760208301846128d1565b939250505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220e5690751ca724510fa8b7e6efc23cf7a818de95ebe5006fe456c00fd9d1ce95e64736f6c634300081c0033"
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
            },
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161382338038061382383398181016040528101906100319190610221565b8060015f819055505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a9575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100a0919061026e565b60405180910390fd5b6100b88161010060201b60201c565b508160025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610287565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101f0826101c7565b9050919050565b610200816101e6565b811461020a575f5ffd5b50565b5f8151905061021b816101f7565b92915050565b5f5f60408385031215610237576102366101c3565b5b5f6102448582860161020d565b92505060206102558582860161020d565b9150509250929050565b610268816101e6565b82525050565b5f6020820190506102815f83018461025f565b92915050565b61358f806102945f395ff3fe608060405234801561000f575f5ffd5b506004361061011f575f3560e01c806381bd34d2116100ab578063d6bd07ee1161006f578063d6bd07ee14610329578063d742385814610345578063f07a380e14610361578063f23a6e611461037d578063f2fde38b146103ad5761011f565b806381bd34d2146102735780638da5cb5b146102a3578063a91ee0dc146102c1578063bc197c81146102dd578063c2fe51851461030d5761011f565b806335f81b87116100f257806335f81b87146101cf578063380ff999146101eb5780636f39becd1461021b578063715018a61461024b5780637b103999146102555761011f565b806301ffc9a7146101235780630412619614610153578063150b7a02146101835780632ff1d0f9146101b3575b5f5ffd5b61013d6004803603810190610138919061253a565b6103c9565b60405161014a919061257f565b60405180910390f35b61016d60048036038101906101689190612625565b610442565b60405161017a9190612672565b60405180910390f35b61019d600480360381019061019891906127c7565b610462565b6040516101aa9190612856565b60405180910390f35b6101cd60048036038101906101c8919061286f565b61079d565b005b6101e960048036038101906101e491906128bf565b610bd0565b005b61020560048036038101906102009190612936565b610bf4565b6040516102129190612672565b60405180910390f35b61023560048036038101906102309190612625565b610c1f565b6040516102429190612995565b60405180910390f35b610253610c5c565b005b61025d610c6f565b60405161026a9190612a09565b60405180910390f35b61028d60048036038101906102889190612936565b610c94565b60405161029a9190612672565b60405180910390f35b6102ab610cbf565b6040516102b89190612995565b60405180910390f35b6102db60048036038101906102d69190612a22565b610ce7565b005b6102f760048036038101906102f29190612b11565b610d32565b6040516103049190612856565b60405180910390f35b61032760048036038101906103229190612bdc565b61115d565b005b610343600480360381019061033e9190612c40565b61117f565b005b61035f600480360381019061035a9190612936565b6111a2565b005b61037b60048036038101906103769190612625565b6111c3565b005b61039760048036038101906103929190612ca4565b6114df565b6040516103a49190612856565b60405180910390f35b6103c760048036038101906103c29190612a22565b61186c565b005b5f7f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061043b575061043a826118f0565b5b9050919050565b6005602052815f5260405f20602052805f5260405f205f91509150505481565b5f61046b611959565b5f8490505f5f905060208451036105515760025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33876040518263ffffffff1660e01b81526004016104d69190612995565b602060405180830381865afa1580156104f1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105159190612d61565b15610535578380602001905181019061052e9190612dc7565b915061054c565b838060200190518101906105499190612e06565b90505b610578565b6040845103610577578380602001905181019061056e9190612e31565b80925081935050505b5b8160035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8781526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f5f8211610610575f61061d565b814261061c9190612e9c565b5b90508060055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8881526020019081526020015f20819055505f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b81526004016106cb9190612995565b5f60405180830381865afa1580156106e5573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f8201168201806040525081019061070d9190613066565b6040015190508373ffffffffffffffffffffffffffffffffffffffff16873373ffffffffffffffffffffffffffffffffffffffff167f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad384866040516107739291906130ff565b60405180910390a46107878989898961199d565b9450505050506107956119b0565b949350505050565b6107a5611959565b8060045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054101561086f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086690613177565b60405180910390fd5b60065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054421015610939576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610930906131df565b60405180910390fd5b8060045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546109cf91906131fd565b925050819055505f60045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205403610af1575f60065f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505b8273ffffffffffffffffffffffffffffffffffffffff1663f242432a303385856040518563ffffffff1660e01b8152600401610b309493929190613263565b5f604051808303815f87803b158015610b47575f5ffd5b505af1158015610b59573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f984604051610bbb9190612672565b60405180910390a4610bcb6119b0565b505050565b610bd8611959565b610be585858585856119b9565b610bed6119b0565b5050505050565b6006602052825f5260405f20602052815f5260405f20602052805f5260405f205f9250925050505481565b6003602052815f5260405f20602052805f5260405f205f915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c64611f11565b610c6d5f611f98565b565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6004602052825f5260405f20602052815f5260405f20602052805f5260405f205f9250925050505481565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610cef611f11565b8060025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b5f610d3b611959565b5f8590505f5f90506020845103610e215760025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33886040518263ffffffff1660e01b8152600401610da69190612995565b602060405180830381865afa158015610dc1573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610de59190612d61565b15610e055783806020019051810190610dfe9190612dc7565b9150610e1c565b83806020019051810190610e199190612e06565b90505b610e48565b6040845103610e475783806020019051810190610e3e9190612e31565b80925081935050505b5b5f5f8211610e56575f610e63565b8142610e629190612e9c565b5b90505f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b8152600401610ec09190612995565b5f60405180830381865afa158015610eda573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f82011682018060405250810190610f029190613066565b6040015190505f5f90505b885181101561113857878181518110610f2957610f286132b9565b5b602002602001015160045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8b8481518110610f8257610f816132b9565b5b602002602001015181526020019081526020015f205f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254610fe09190612e9c565b925050819055508260065f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8b8481518110611039576110386132b9565b5b602002602001015181526020019081526020015f205f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508473ffffffffffffffffffffffffffffffffffffffff168982815181106110b7576110b66132b9565b5b60200260200101513373ffffffffffffffffffffffffffffffffffffffff167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358b858151811061110a576111096132b9565b5b60200260200101518688604051611123939291906132e6565b60405180910390a48080600101915050610f0d565b506111468a8a8a8a8a61205b565b9450505050506111546119b0565b95945050505050565b611165611959565b6111718484848461206f565b6111796119b0565b50505050565b611187611959565b611194848484845f6119b9565b61119c6119b0565b50505050565b6111aa611959565b6111b68383835f61206f565b6111be6119b0565b505050565b6111cb611959565b3373ffffffffffffffffffffffffffffffffffffffff1660035f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146112a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129b9061336c565b60405180910390fd5b60055f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8281526020019081526020015f2054421015611333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132a906131df565b60405180910390fd5b5f60035f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f20819055508173ffffffffffffffffffffffffffffffffffffffff166342842e0e3033846040518463ffffffff1660e01b815260040161144b9392919061338a565b5f604051808303815f87803b158015611462575f5ffd5b505af1158015611474573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16818373ffffffffffffffffffffffffffffffffffffffff167f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c0660405160405180910390a46114db6119b0565b5050565b5f6114e8611959565b5f8590505f5f905060208451036115ce5760025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33886040518263ffffffff1660e01b81526004016115539190612995565b602060405180830381865afa15801561156e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115929190612d61565b156115b257838060200190518101906115ab9190612dc7565b91506115c9565b838060200190518101906115c69190612e06565b90505b6115f5565b60408451036115f457838060200190518101906115eb9190612e31565b80925081935050505b5b8460045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8881526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461168b9190612e9c565b925050819055505f5f82116116a0575f6116ad565b81426116ac9190612e9c565b5b90508060065f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8981526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b81526004016117969190612995565b5f60405180830381865afa1580156117b0573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906117d89190613066565b6040015190508373ffffffffffffffffffffffffffffffffffffffff16883373ffffffffffffffffffffffffffffffffffffffff167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358a8587604051611840939291906132e6565b60405180910390a46118558a8a8a8a8a6124b9565b9450505050506118636119b0565b95945050505050565b611874611f11565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118e4575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016118db9190612995565b60405180910390fd5b6118ed81611f98565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60025f5403611994576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f81905550565b5f63150b7a0260e01b9050949350505050565b60015f81905550565b8260045f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015611a83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a7a90613177565b60405180910390fd5b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33836040518263ffffffff1660e01b8152600401611add9190612995565b602060405180830381865afa158015611af8573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b1c9190612d61565b611b5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5290613409565b60405180910390fd5b60065f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054421015611c25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1c906131df565b60405180910390fd5b8260045f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254611cbb91906131fd565b925050819055505f60045f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205403611ddd575f60065f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505b60605f821115611e10573382604051602001611dfa929190613427565b6040516020818303038152906040529050611e33565b33604051602001611e219190612995565b60405160208183030381529060405290505b8573ffffffffffffffffffffffffffffffffffffffff1663f242432a30858888866040518663ffffffff1660e01b8152600401611e74959493929190613490565b5f604051808303815f87803b158015611e8b575f5ffd5b505af1158015611e9d573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16858773ffffffffffffffffffffffffffffffffffffffff167fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd18787604051611f019291906134e8565b60405180910390a4505050505050565b611f196124cd565b73ffffffffffffffffffffffffffffffffffffffff16611f37610cbf565b73ffffffffffffffffffffffffffffffffffffffff1614611f9657611f5a6124cd565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611f8d9190612995565b60405180910390fd5b565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f63bc197c8160e01b905095945050505050565b3373ffffffffffffffffffffffffffffffffffffffff1660035f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612148576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161213f9061336c565b60405180910390fd5b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33836040518263ffffffff1660e01b81526004016121a29190612995565b602060405180830381865afa1580156121bd573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121e19190612d61565b612220576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161221790613409565b60405180910390fd5b60055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f20544210156122af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122a6906131df565b60405180910390fd5b5f60035f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f208190555060605f8211156123bd5733826040516020016123a7929190613427565b60405160208183030381529060405290506123e0565b336040516020016123ce9190612995565b60405160208183030381529060405290505b8473ffffffffffffffffffffffffffffffffffffffff1663b88d4fde308587856040518563ffffffff1660e01b815260040161241f949392919061350f565b5f604051808303815f87803b158015612436575f5ffd5b505af1158015612448573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16848673ffffffffffffffffffffffffffffffffffffffff167f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d79866040516124aa9190612995565b60405180910390a45050505050565b5f63f23a6e6160e01b905095945050505050565b5f33905090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612519816124e5565b8114612523575f5ffd5b50565b5f8135905061253481612510565b92915050565b5f6020828403121561254f5761254e6124dd565b5b5f61255c84828501612526565b91505092915050565b5f8115159050919050565b61257981612565565b82525050565b5f6020820190506125925f830184612570565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6125c182612598565b9050919050565b6125d1816125b7565b81146125db575f5ffd5b50565b5f813590506125ec816125c8565b92915050565b5f819050919050565b612604816125f2565b811461260e575f5ffd5b50565b5f8135905061261f816125fb565b92915050565b5f5f6040838503121561263b5761263a6124dd565b5b5f612648858286016125de565b925050602061265985828601612611565b9150509250929050565b61266c816125f2565b82525050565b5f6020820190506126855f830184612663565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6126d982612693565b810181811067ffffffffffffffff821117156126f8576126f76126a3565b5b80604052505050565b5f61270a6124d4565b905061271682826126d0565b919050565b5f67ffffffffffffffff821115612735576127346126a3565b5b61273e82612693565b9050602081019050919050565b828183375f83830152505050565b5f61276b6127668461271b565b612701565b9050828152602081018484840111156127875761278661268f565b5b61279284828561274b565b509392505050565b5f82601f8301126127ae576127ad61268b565b5b81356127be848260208601612759565b91505092915050565b5f5f5f5f608085870312156127df576127de6124dd565b5b5f6127ec878288016125de565b94505060206127fd878288016125de565b935050604061280e87828801612611565b925050606085013567ffffffffffffffff81111561282f5761282e6124e1565b5b61283b8782880161279a565b91505092959194509250565b612850816124e5565b82525050565b5f6020820190506128695f830184612847565b92915050565b5f5f5f60608486031215612886576128856124dd565b5b5f612893868287016125de565b93505060206128a486828701612611565b92505060406128b586828701612611565b9150509250925092565b5f5f5f5f5f60a086880312156128d8576128d76124dd565b5b5f6128e5888289016125de565b95505060206128f688828901612611565b945050604061290788828901612611565b9350506060612918888289016125de565b925050608061292988828901612611565b9150509295509295909350565b5f5f5f6060848603121561294d5761294c6124dd565b5b5f61295a868287016125de565b935050602061296b86828701612611565b925050604061297c868287016125de565b9150509250925092565b61298f816125b7565b82525050565b5f6020820190506129a85f830184612986565b92915050565b5f819050919050565b5f6129d16129cc6129c784612598565b6129ae565b612598565b9050919050565b5f6129e2826129b7565b9050919050565b5f6129f3826129d8565b9050919050565b612a03816129e9565b82525050565b5f602082019050612a1c5f8301846129fa565b92915050565b5f60208284031215612a3757612a366124dd565b5b5f612a44848285016125de565b91505092915050565b5f67ffffffffffffffff821115612a6757612a666126a3565b5b602082029050602081019050919050565b5f5ffd5b5f612a8e612a8984612a4d565b612701565b90508083825260208201905060208402830185811115612ab157612ab0612a78565b5b835b81811015612ada5780612ac68882612611565b845260208401935050602081019050612ab3565b5050509392505050565b5f82601f830112612af857612af761268b565b5b8135612b08848260208601612a7c565b91505092915050565b5f5f5f5f5f60a08688031215612b2a57612b296124dd565b5b5f612b37888289016125de565b9550506020612b48888289016125de565b945050604086013567ffffffffffffffff811115612b6957612b686124e1565b5b612b7588828901612ae4565b935050606086013567ffffffffffffffff811115612b9657612b956124e1565b5b612ba288828901612ae4565b925050608086013567ffffffffffffffff811115612bc357612bc26124e1565b5b612bcf8882890161279a565b9150509295509295909350565b5f5f5f5f60808587031215612bf457612bf36124dd565b5b5f612c01878288016125de565b9450506020612c1287828801612611565b9350506040612c23878288016125de565b9250506060612c3487828801612611565b91505092959194509250565b5f5f5f5f60808587031215612c5857612c576124dd565b5b5f612c65878288016125de565b9450506020612c7687828801612611565b9350506040612c8787828801612611565b9250506060612c98878288016125de565b91505092959194509250565b5f5f5f5f5f60a08688031215612cbd57612cbc6124dd565b5b5f612cca888289016125de565b9550506020612cdb888289016125de565b9450506040612cec88828901612611565b9350506060612cfd88828901612611565b925050608086013567ffffffffffffffff811115612d1e57612d1d6124e1565b5b612d2a8882890161279a565b9150509295509295909350565b612d4081612565565b8114612d4a575f5ffd5b50565b5f81519050612d5b81612d37565b92915050565b5f60208284031215612d7657612d756124dd565b5b5f612d8384828501612d4d565b91505092915050565b5f612d9682612598565b9050919050565b612da681612d8c565b8114612db0575f5ffd5b50565b5f81519050612dc181612d9d565b92915050565b5f60208284031215612ddc57612ddb6124dd565b5b5f612de984828501612db3565b91505092915050565b5f81519050612e00816125fb565b92915050565b5f60208284031215612e1b57612e1a6124dd565b5b5f612e2884828501612df2565b91505092915050565b5f5f60408385031215612e4757612e466124dd565b5b5f612e5485828601612db3565b9250506020612e6585828601612df2565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f612ea6826125f2565b9150612eb1836125f2565b9250828201905080821115612ec957612ec8612e6f565b5b92915050565b5f5ffd5b5f5ffd5b5f60ff82169050919050565b612eec81612ed7565b8114612ef6575f5ffd5b50565b5f81519050612f0781612ee3565b92915050565b5f67ffffffffffffffff821115612f2757612f266126a3565b5b612f3082612693565b9050602081019050919050565b8281835e5f83830152505050565b5f612f5d612f5884612f0d565b612701565b905082815260208101848484011115612f7957612f7861268f565b5b612f84848285612f3d565b509392505050565b5f82601f830112612fa057612f9f61268b565b5b8151612fb0848260208601612f4b565b91505092915050565b5f60808284031215612fce57612fcd612ecf565b5b612fd86080612701565b90505f612fe784828501612d4d565b5f830152506020612ffa84828501612ef9565b602083015250604082015167ffffffffffffffff81111561301e5761301d612ed3565b5b61302a84828501612f8c565b604083015250606082015167ffffffffffffffff81111561304e5761304d612ed3565b5b61305a84828501612f8c565b60608301525092915050565b5f6020828403121561307b5761307a6124dd565b5b5f82015167ffffffffffffffff811115613098576130976124e1565b5b6130a484828501612fb9565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f6130d1826130ad565b6130db81856130b7565b93506130eb818560208601612f3d565b6130f481612693565b840191505092915050565b5f6040820190508181035f83015261311781856130c7565b90506131266020830184612663565b9392505050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f6131616014836130b7565b915061316c8261312d565b602082019050919050565b5f6020820190508181035f83015261318e81613155565b9050919050565b7f45786869626974696f6e206e6f742079657420657870697265640000000000005f82015250565b5f6131c9601a836130b7565b91506131d482613195565b602082019050919050565b5f6020820190508181035f8301526131f6816131bd565b9050919050565b5f613207826125f2565b9150613212836125f2565b925082820390508181111561322a57613229612e6f565b5b92915050565b5f82825260208201905092915050565b50565b5f61324e5f83613230565b915061325982613240565b5f82019050919050565b5f60a0820190506132765f830187612986565b6132836020830186612986565b6132906040830185612663565b61329d6060830184612663565b81810360808301526132ae81613243565b905095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6060820190506132f95f830186612663565b818103602083015261330b81856130c7565b905061331a6040830184612663565b949350505050565b7f4e6f7420746865206f776e6572000000000000000000000000000000000000005f82015250565b5f613356600d836130b7565b915061336182613322565b602082019050919050565b5f6020820190508181035f8301526133838161334a565b9050919050565b5f60608201905061339d5f830186612986565b6133aa6020830185612986565b6133b76040830184612663565b949350505050565b7f44657374696e6174696f6e206e6f7420766572696669656400000000000000005f82015250565b5f6133f36018836130b7565b91506133fe826133bf565b602082019050919050565b5f6020820190508181035f830152613420816133e7565b9050919050565b5f60408201905061343a5f830185612986565b6134476020830184612663565b9392505050565b5f81519050919050565b5f6134628261344e565b61346c8185613230565b935061347c818560208601612f3d565b61348581612693565b840191505092915050565b5f60a0820190506134a35f830188612986565b6134b06020830187612986565b6134bd6040830186612663565b6134ca6060830185612663565b81810360808301526134dc8184613458565b90509695505050505050565b5f6040820190506134fb5f830185612663565b6135086020830184612986565b9392505050565b5f6080820190506135225f830187612986565b61352f6020830186612986565b61353c6040830185612663565b818103606083015261354e8184613458565b90509594505050505056fea26469706673582212201107af178057669041eb02ed33a01ae3c3a6665ed55a614a84a3c2b60cfd440f64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161070d38038061070d83398181016040528101906100319190610115565b815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610153565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100e4826100bb565b9050919050565b6100f4816100da565b81146100fe575f5ffd5b50565b5f8151905061010f816100eb565b92915050565b5f5f6040838503121561012b5761012a6100b7565b5b5f61013885828601610101565b925050602061014985828601610101565b9150509250929050565b6105ad806101605f395ff3fe608060405260043610610042575f3560e01c8063150b7a021461004d578063a269993d14610089578063abc8c7af146100a5578063d56d229d146100cf57610049565b3661004957005b5f5ffd5b348015610058575f5ffd5b50610073600480360381019061006e91906103a3565b6100f9565b6040516100809190610461565b60405180910390f35b6100a3600480360381019061009e919061047a565b6101b6565b005b3480156100b0575f5ffd5b506100b9610264565b6040516100c69190610500565b60405180910390f35b3480156100da575f5ffd5b506100e3610288565b6040516100f09190610528565b60405180910390f35b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663058a56ac60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518363ffffffff1660e01b8152600401610176929190610550565b5f604051808303815f87803b15801561018d575f5ffd5b505af115801561019f573d5f5f3e3d5ffd5b5050505063150b7a0260e01b905095945050505050565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663746538d93460015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b8152600401610233929190610550565b5f604051808303818588803b15801561024a575f5ffd5b505af115801561025c573d5f5f3e3d5ffd5b505050505050565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102de826102b5565b9050919050565b6102ee816102d4565b81146102f8575f5ffd5b50565b5f81359050610309816102e5565b92915050565b5f819050919050565b6103218161030f565b811461032b575f5ffd5b50565b5f8135905061033c81610318565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f84011261036357610362610342565b5b8235905067ffffffffffffffff8111156103805761037f610346565b5b60208301915083600182028301111561039c5761039b61034a565b5b9250929050565b5f5f5f5f5f608086880312156103bc576103bb6102ad565b5b5f6103c9888289016102fb565b95505060206103da888289016102fb565b94505060406103eb8882890161032e565b935050606086013567ffffffffffffffff81111561040c5761040b6102b1565b5b6104188882890161034e565b92509250509295509295909350565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61045b81610427565b82525050565b5f6020820190506104745f830184610452565b92915050565b5f6020828403121561048f5761048e6102ad565b5b5f61049c8482850161032e565b91505092915050565b5f819050919050565b5f6104c86104c36104be846102b5565b6104a5565b6102b5565b9050919050565b5f6104d9826104ae565b9050919050565b5f6104ea826104cf565b9050919050565b6104fa816104e0565b82525050565b5f6020820190506105135f8301846104f1565b92915050565b610522816102d4565b82525050565b5f60208201905061053b5f830184610519565b92915050565b61054a8161030f565b82525050565b5f6040820190506105635f830185610519565b6105706020830184610541565b939250505056fea264697066735822122041b6505a7b5c683f640c9beea8e6013ff681a58014b175f8c351aff98a158aee64736f6c634300081c0033"
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
      "bytecode": "0x60a060405234801561000f575f5ffd5b5060405161181f38038061181f8339818101604052810190610031919061007d565b60015f819055508060808181525050506100a8565b5f5ffd5b5f819050919050565b61005c8161004a565b8114610066575f5ffd5b50565b5f8151905061007781610053565b92915050565b5f6020828403121561009257610091610046565b5b5f61009f84828501610069565b91505092915050565b6080516117586100c75f395f81816107d201526109ea01526117585ff3fe608060405260043610610054575f3560e01c8063058a56ac14610058578063746538d91461008057806399652de71461009c578063a6a3b5b4146100c4578063aa1a8411146100ee578063b1b9e78d1461012c575b5f5ffd5b348015610063575f5ffd5b5061007e600480360381019061007991906110d8565b610154565b005b61009a600480360381019061009591906110d8565b610426565b005b3480156100a7575f5ffd5b506100c260048036038101906100bd91906110d8565b610695565b005b3480156100cf575f5ffd5b506100d86109e8565b6040516100e59190611125565b60405180910390f35b3480156100f9575f5ffd5b50610114600480360381019061010f91906110d8565b610a0c565b6040516101239392919061114d565b60405180910390f35b348015610137575f5ffd5b50610152600480360381019061014d91906110d8565b610a5c565b005b61015c610ffa565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f206040518060600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505090503373ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff161461028f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610286906111dc565b60405180910390fd5b60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f5f82015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f905550505f3373ffffffffffffffffffffffffffffffffffffffff16826020015160405161033a90611227565b5f6040518083038185875af1925050503d805f8114610374576040519150601f19603f3d011682016040523d82523d5f602084013e610379565b606091505b50509050806103bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b490611285565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16838573ffffffffffffffffffffffffffffffffffffffff167f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d060405160405180910390a4505061042261103e565b5050565b61042e610ffa565b5f3411610470576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046790611313565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff1660015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461054b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105429061137b565b60405180910390fd5b60405180606001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020013481526020014281525060015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201559050503373ffffffffffffffffffffffffffffffffffffffff16818373ffffffffffffffffffffffffffffffffffffffff167fd46a008cac1cb5ec453d4928e646f936b6d11b8ec6b488f00a55bd90eda74a73346040516106819190611125565b60405180910390a461069161103e565b5050565b61069d610ffa565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f206040518060600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505090503373ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff16146107d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c7906111dc565b60405180910390fd5b7f0000000000000000000000000000000000000000000000000000000000000000816040015161080091906113c6565b421115610842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083990611443565b60405180910390fd5b60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f5f82015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f905550505f3373ffffffffffffffffffffffffffffffffffffffff1682602001516040516108ed90611227565b5f6040518083038185875af1925050503d805f8114610927576040519150601f19603f3d011682016040523d82523d5f602084013e61092c565b606091505b5050905080610970576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096790611285565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16838573ffffffffffffffffffffffffffffffffffffffff167f6b2d7d3541d77e4ba894942103bb7bff8611a2fe5a6c6660870f0c15ab75c2d385602001516040516109d29190611125565b60405180910390a450506109e461103e565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001602052815f5260405f20602052805f5260405f205f9150915050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b610a64610ffa565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f206040518060600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505090505f73ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff1603610b97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8e906114ab565b60405180910390fd5b5f8390503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610beb9190611125565b602060405180830381865afa158015610c06573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c2a91906114dd565b73ffffffffffffffffffffffffffffffffffffffff1614610c80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7790611552565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b8152600401610cbb929190611570565b602060405180830381865afa158015610cd6573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cfa91906115cc565b80610da757503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663081812fc856040518263ffffffff1660e01b8152600401610d509190611125565b602060405180830381865afa158015610d6b573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d8f91906114dd565b73ffffffffffffffffffffffffffffffffffffffff16145b610de6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ddd90611667565b60405180910390fd5b60015f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f5f82015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f905550508073ffffffffffffffffffffffffffffffffffffffff166342842e0e33845f0151866040518463ffffffff1660e01b8152600401610ea893929190611685565b5f604051808303815f87803b158015610ebf575f5ffd5b505af1158015610ed1573d5f5f3e3d5ffd5b505050505f3373ffffffffffffffffffffffffffffffffffffffff168360200151604051610efe90611227565b5f6040518083038185875af1925050503d805f8114610f38576040519150601f19603f3d011682016040523d82523d5f602084013e610f3d565b606091505b5050905080610f81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7890611704565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16848673ffffffffffffffffffffffffffffffffffffffff167fa994d1bf7c4f40ea558b18bf79efbc7bc38b5d5f72aa2fec5a69cdb31be161328660200151604051610fe39190611125565b60405180910390a4505050610ff661103e565b5050565b60025f5403611035576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f81905550565b60015f81905550565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6110748261104b565b9050919050565b6110848161106a565b811461108e575f5ffd5b50565b5f8135905061109f8161107b565b92915050565b5f819050919050565b6110b7816110a5565b81146110c1575f5ffd5b50565b5f813590506110d2816110ae565b92915050565b5f5f604083850312156110ee576110ed611047565b5b5f6110fb85828601611091565b925050602061110c858286016110c4565b9150509250929050565b61111f816110a5565b82525050565b5f6020820190506111385f830184611116565b92915050565b6111478161106a565b82525050565b5f6060820190506111605f83018661113e565b61116d6020830185611116565b61117a6040830184611116565b949350505050565b5f82825260208201905092915050565b7f596f7520646964206e6f74206d616b652074686973206f6666657200000000005f82015250565b5f6111c6601b83611182565b91506111d182611192565b602082019050919050565b5f6020820190508181035f8301526111f3816111ba565b9050919050565b5f81905092915050565b50565b5f6112125f836111fa565b915061121d82611204565b5f82019050919050565b5f61123182611207565b9150819050919050565b7f526566756e6420746f206275796572206661696c6564000000000000000000005f82015250565b5f61126f601683611182565b915061127a8261123b565b602082019050919050565b5f6020820190508181035f83015261129c81611263565b9050919050565b7f4f66666572207072696365206d7573742062652067726561746572207468616e5f8201527f2030000000000000000000000000000000000000000000000000000000000000602082015250565b5f6112fd602283611182565b9150611308826112a3565b604082019050919050565b5f6020820190508181035f83015261132a816112f1565b9050919050565b7f4f6666657220616c7265616479206578697374730000000000000000000000005f82015250565b5f611365601483611182565b915061137082611331565b602082019050919050565b5f6020820190508181035f83015261139281611359565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6113d0826110a5565b91506113db836110a5565b92508282019050808211156113f3576113f2611399565b5b92915050565b7f526566756e6420706572696f64206861732065787069726564000000000000005f82015250565b5f61142d601983611182565b9150611438826113f9565b602082019050919050565b5f6020820190508181035f83015261145a81611421565b9050919050565b7f4e6f2076616c6964206f666665722065786973747300000000000000000000005f82015250565b5f611495601583611182565b91506114a082611461565b602082019050919050565b5f6020820190508181035f8301526114c281611489565b9050919050565b5f815190506114d78161107b565b92915050565b5f602082840312156114f2576114f1611047565b5b5f6114ff848285016114c9565b91505092915050565b7f596f7520646f206e6f74206f776e2074686973204e46540000000000000000005f82015250565b5f61153c601783611182565b915061154782611508565b602082019050919050565b5f6020820190508181035f83015261156981611530565b9050919050565b5f6040820190506115835f83018561113e565b611590602083018461113e565b9392505050565b5f8115159050919050565b6115ab81611597565b81146115b5575f5ffd5b50565b5f815190506115c6816115a2565b92915050565b5f602082840312156115e1576115e0611047565b5b5f6115ee848285016115b8565b91505092915050565b7f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366655f8201527f72204e4654000000000000000000000000000000000000000000000000000000602082015250565b5f611651602583611182565b915061165c826115f7565b604082019050919050565b5f6020820190508181035f83015261167e81611645565b9050919050565b5f6060820190506116985f83018661113e565b6116a5602083018561113e565b6116b26040830184611116565b949350505050565b7f5472616e7366657220746f2073656c6c6572206661696c6564000000000000005f82015250565b5f6116ee601983611182565b91506116f9826116ba565b602082019050919050565b5f6020820190508181035f83015261171b816116e2565b905091905056fea26469706673582212200ca0da68bd8f9a67b1816a993321b339cc64df2e9f787031741f667d286e0ad064736f6c634300081c0033"
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
      "NFTMarketplace": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "Treasury": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "BragNFT": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3"
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