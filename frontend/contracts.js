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
        }
      ],
      "bytecode": "0x6080604052348015600e575f5ffd5b506109968061001c5f395ff3fe608060405260043610610028575f3560e01c806315270ace1461002c578063f8b7fabf14610054575b5f5ffd5b348015610037575f5ffd5b50610052600480360381019061004d9190610571565b610070565b005b61006e60048036038101906100699190610602565b61014a565b005b8181905084849050146100b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100af906106da565b60405180910390fd5b5f5f90505b8484905081101561014257610135338686848181106100df576100de6106f8565b5b90506020020160208101906100f4919061074f565b858585818110610107576101066106f8565b5b905060200201358973ffffffffffffffffffffffffffffffffffffffff1661032b909392919063ffffffff16565b80806001019150506100bd565b505050505050565b818190508484905014610192576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610189906106da565b60405180910390fd5b5f5f90505f5f90505b858590508110156101da578383828181106101b9576101b86106f8565b5b90506020020135826101cb91906107b0565b9150808060010191505061019b565b5080341461021d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102149061082d565b60405180910390fd5b5f5f90505b85859050811015610323575f868683818110610241576102406106f8565b5b9050602002016020810190610256919061074f565b73ffffffffffffffffffffffffffffffffffffffff1685858481811061027f5761027e6106f8565b5b9050602002013560405161029290610878565b5f6040518083038185875af1925050503d805f81146102cc576040519150601f19603f3d011682016040523d82523d5f602084013e6102d1565b606091505b5050905080610315576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030c906108d6565b60405180910390fd5b508080600101915050610222565b505050505050565b6103a7848573ffffffffffffffffffffffffffffffffffffffff166323b872dd86868660405160240161036093929190610912565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506103ad565b50505050565b5f5f60205f8451602086015f885af1806103cc576040513d5f823e3d81fd5b3d92505f519150505f82146103e5576001811415610400565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561044257836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016104399190610947565b60405180910390fd5b50505050565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61047982610450565b9050919050565b5f61048a8261046f565b9050919050565b61049a81610480565b81146104a4575f5ffd5b50565b5f813590506104b581610491565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126104dc576104db6104bb565b5b8235905067ffffffffffffffff8111156104f9576104f86104bf565b5b602083019150836020820283011115610515576105146104c3565b5b9250929050565b5f5f83601f840112610531576105306104bb565b5b8235905067ffffffffffffffff81111561054e5761054d6104bf565b5b60208301915083602082028301111561056a576105696104c3565b5b9250929050565b5f5f5f5f5f6060868803121561058a57610589610448565b5b5f610597888289016104a7565b955050602086013567ffffffffffffffff8111156105b8576105b761044c565b5b6105c4888289016104c7565b9450945050604086013567ffffffffffffffff8111156105e7576105e661044c565b5b6105f38882890161051c565b92509250509295509295909350565b5f5f5f5f6040858703121561061a57610619610448565b5b5f85013567ffffffffffffffff8111156106375761063661044c565b5b610643878288016104c7565b9450945050602085013567ffffffffffffffff8111156106665761066561044c565b5b6106728782880161051c565b925092505092959194509250565b5f82825260208201905092915050565b7f4d69736d617463686564206172726179730000000000000000000000000000005f82015250565b5f6106c4601183610680565b91506106cf82610690565b602082019050919050565b5f6020820190508181035f8301526106f1816106b8565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b61072e8161046f565b8114610738575f5ffd5b50565b5f8135905061074981610725565b92915050565b5f6020828403121561076457610763610448565b5b5f6107718482850161073b565b91505092915050565b5f819050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6107ba8261077a565b91506107c58361077a565b92508282019050808211156107dd576107dc610783565b5b92915050565b7f496e636f72726563742045544820616d6f756e742073656e74000000000000005f82015250565b5f610817601983610680565b9150610822826107e3565b602082019050919050565b5f6020820190508181035f8301526108448161080b565b9050919050565b5f81905092915050565b50565b5f6108635f8361084b565b915061086e82610855565b5f82019050919050565b5f61088282610858565b9150819050919050565b7f455448207472616e73666572206661696c6564000000000000000000000000005f82015250565b5f6108c0601383610680565b91506108cb8261088c565b602082019050919050565b5f6020820190508181035f8301526108ed816108b4565b9050919050565b6108fd8161046f565b82525050565b61090c8161077a565b82525050565b5f6060820190506109255f8301866108f4565b61093260208301856108f4565b61093f6040830184610903565b949350505050565b5f60208201905061095a5f8301846108f4565b9291505056fea2646970667358221220110921d438544e5e0cfff44f9ef1f476629285a3353b80517329f520a47ccbe464736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051615e1b380380615e1b83398181016040528101906100319190610323565b6040518060400160405280600781526020017f427261674e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f425241474e465400000000000000000000000000000000000000000000000000815250815f90816100ab91906105a7565b5080600190816100bb91906105a7565b50505060016008819055506100d85f5f1b8461013160201b60201c565b5081600b5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600c81905550612710600a81905550505050610676565b5f610142838361022760201b60201c565b61021d57600160075f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506101ba61028b60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610221565b5f90505b92915050565b5f60075f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102bf82610296565b9050919050565b6102cf816102b5565b81146102d9575f5ffd5b50565b5f815190506102ea816102c6565b92915050565b5f819050919050565b610302816102f0565b811461030c575f5ffd5b50565b5f8151905061031d816102f9565b92915050565b5f5f5f6060848603121561033a57610339610292565b5b5f610347868287016102dc565b9350506020610358868287016102dc565b92505060406103698682870161030f565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806103ee57607f821691505b602082108103610401576104006103aa565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026104637fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610428565b61046d8683610428565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6104a86104a361049e846102f0565b610485565b6102f0565b9050919050565b5f819050919050565b6104c18361048e565b6104d56104cd826104af565b848454610434565b825550505050565b5f5f905090565b6104ec6104dd565b6104f78184846104b8565b505050565b5b8181101561051a5761050f5f826104e4565b6001810190506104fd565b5050565b601f82111561055f5761053081610407565b61053984610419565b81016020851015610548578190505b61055c61055485610419565b8301826104fc565b50505b505050565b5f82821c905092915050565b5f61057f5f1984600802610564565b1980831691505092915050565b5f6105978383610570565b9150826002028217905092915050565b6105b082610373565b67ffffffffffffffff8111156105c9576105c861037d565b5b6105d382546103d7565b6105de82828561051e565b5f60209050601f83116001811461060f575f84156105fd578287015190505b610607858261058c565b86555061066e565b601f19841661061d86610407565b5f5b828110156106445784890151825560018201915060208501945060208101905061061f565b86831015610661578489015161065d601f891682610570565b8355505b6001600288020188555050505b505050505050565b615798806106835f395ff3fe608060405260043610610212575f3560e01c806370a0823111610117578063c63172471161009f578063d547741f1161006e578063d547741f146107d4578063d5abeb01146107fc578063da183afb14610826578063e985e9c514610862578063f0f442601461089e57610278565b8063c63172471461072a578063c87b56dd14610752578063d3933c1c1461078e578063d435b3a3146107aa57610278565b806396d8f4f3116100e657806396d8f4f31461066a578063a217fddf14610694578063a22cb465146106be578063a6719b3a146106e6578063b88d4fde1461070257610278565b806370a082311461059e57806383943dc8146105da57806391d148541461060457806395d89b411461064057610278565b8063248a9ca31161019a57806342842e0e1161016957806342842e0e146104ac57806361d027b3146104d45780636352211e146104fe57806364cb7e9c1461053a5780636f8b44b01461057657610278565b8063248a9ca3146103f85780632eb9313e146104345780632f2ff15d1461045c57806336568abe1461048457610278565b80630fd973ce116101e15780630fd973ce146103465780631653441c1461036257806318160ddd1461037e57806319bcef6d146103a857806323b872dd146103d057610278565b806301ffc9a71461027c57806306fdde03146102b8578063081812fc146102e2578063095ea7b31461031e57610278565b366102785761021f6108c6565b61026e336040518060400160405280600f81526020017f44697265637420646f6e6174696f6e000000000000000000000000000000000081525060405180602001604052805f8152505f61090c565b610276610d43565b005b5f5ffd5b348015610287575f5ffd5b506102a2600480360381019061029d9190613c15565b610d4d565b6040516102af9190613c5a565b60405180910390f35b3480156102c3575f5ffd5b506102cc610d5e565b6040516102d99190613ce3565b60405180910390f35b3480156102ed575f5ffd5b5061030860048036038101906103039190613d36565b610ded565b6040516103159190613da0565b60405180910390f35b348015610329575f5ffd5b50610344600480360381019061033f9190613de3565b610e08565b005b610360600480360381019061035b9190613e82565b610e1e565b005b61037c60048036038101906103779190613f13565b610ec7565b005b348015610389575f5ffd5b50610392610f6f565b60405161039f9190613fa0565b60405180910390f35b3480156103b3575f5ffd5b506103ce60048036038101906103c99190613fb9565b610f78565b005b3480156103db575f5ffd5b506103f660048036038101906103f19190613fe4565b610fc8565b005b348015610403575f5ffd5b5061041e60048036038101906104199190614067565b6110c7565b60405161042b91906140a1565b60405180910390f35b34801561043f575f5ffd5b5061045a60048036038101906104559190613fb9565b6110e4565b005b348015610467575f5ffd5b50610482600480360381019061047d91906140ba565b611134565b005b34801561048f575f5ffd5b506104aa60048036038101906104a591906140ba565b611156565b005b3480156104b7575f5ffd5b506104d260048036038101906104cd9190613fe4565b6111d1565b005b3480156104df575f5ffd5b506104e86111f0565b6040516104f59190613da0565b60405180910390f35b348015610509575f5ffd5b50610524600480360381019061051f9190613d36565b611215565b6040516105319190613da0565b60405180910390f35b348015610545575f5ffd5b50610560600480360381019061055b9190613d36565b611226565b60405161056d9190613ce3565b60405180910390f35b348015610581575f5ffd5b5061059c60048036038101906105979190613d36565b6112c1565b005b3480156105a9575f5ffd5b506105c460048036038101906105bf9190613fb9565b6112d8565b6040516105d19190613fa0565b60405180910390f35b3480156105e5575f5ffd5b506105ee61138e565b6040516105fb9190614153565b60405180910390f35b34801561060f575f5ffd5b5061062a600480360381019061062591906140ba565b6113b3565b6040516106379190613c5a565b60405180910390f35b34801561064b575f5ffd5b50610654611417565b6040516106619190613ce3565b60405180910390f35b348015610675575f5ffd5b5061067e6114a7565b60405161068b9190613fa0565b60405180910390f35b34801561069f575f5ffd5b506106a86114ad565b6040516106b591906140a1565b60405180910390f35b3480156106c9575f5ffd5b506106e460048036038101906106df9190614196565b6114b3565b005b61070060048036038101906106fb91906141d4565b6114c9565b005b34801561070d575f5ffd5b506107286004803603810190610723919061439f565b611573565b005b348015610735575f5ffd5b50610750600480360381019061074b9190613d36565b611598565b005b34801561075d575f5ffd5b5061077860048036038101906107739190613d36565b6115af565b6040516107859190613ce3565b60405180910390f35b6107a860048036038101906107a3919061441f565b611965565b005b3480156107b5575f5ffd5b506107be611a0e565b6040516107cb91906144d0565b60405180910390f35b3480156107df575f5ffd5b506107fa60048036038101906107f591906140ba565b611a33565b005b348015610807575f5ffd5b50610810611a55565b60405161081d9190613fa0565b60405180910390f35b348015610831575f5ffd5b5061084c60048036038101906108479190613d36565b611a5b565b6040516108599190613fa0565b60405180910390f35b34801561086d575f5ffd5b50610888600480360381019061088391906144e9565b611a70565b6040516108959190613c5a565b60405180910390f35b3480156108a9575f5ffd5b506108c460048036038101906108bf9190613fb9565b611afe565b005b600260085403610902576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600881905550565b5f73ffffffffffffffffffffffffffffffffffffffff16600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361099b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099290614571565b60405180910390fd5b600c543410156109e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d7906145d9565b60405180910390fd5b600a5460095410610a26576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1d90614641565b60405180910390fd5b5f60095f815480929190610a399061468c565b9190505590508115610a69578260105f8381526020019081526020015f209081610a6391906148c7565b50610a7e565b5f83511115610a7d57610a7c8184611bbc565b5b5b5f600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d3fc98643334886040518463ffffffff1660e01b8152600401610add93929190614996565b6020604051808303815f875af1158015610af9573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b1d91906149e6565b905080600f5f8481526020019081526020015f2081905550610b3f8683611c16565b5f73ffffffffffffffffffffffffffffffffffffffff16600e5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c1d57600e5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933346040518363ffffffff1660e01b8152600401610bef929190614a11565b5f604051808303815f87803b158015610c06575f5ffd5b505af1158015610c18573d5f5f3e3d5ffd5b505050505b5f600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1634604051610c6390614a65565b5f6040518083038185875af1925050503d805f8114610c9d576040519150601f19603f3d011682016040523d82523d5f602084013e610ca2565b606091505b5050905080610ce6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cdd90614ac3565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858a604051610d329493929190614ae1565b60405180910390a250505050505050565b6001600881905550565b5f610d5782611c33565b9050919050565b60605f8054610d6c90614700565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9890614700565b8015610de35780601f10610dba57610100808354040283529160200191610de3565b820191905f5260205f20905b815481529060010190602001808311610dc657829003601f168201915b5050505050905090565b5f610df782611cac565b50610e0182611d32565b9050919050565b610e1a8282610e15611d6b565b611d72565b5050565b610e266108c6565b610eb88585858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505084848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050505f61090c565b610ec0610d43565b5050505050565b610ecf6108c6565b610f613385858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505084848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050505f61090c565b610f69610d43565b50505050565b5f600954905090565b5f5f1b610f8481611d84565b81600d5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611038575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161102f9190613da0565b60405180910390fd5b5f61104b8383611046611d6b565b611d98565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110c1578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016110b893929190614b2b565b60405180910390fd5b50505050565b5f60075f8381526020019081526020015f20600101549050919050565b5f5f1b6110f081611d84565b81600e5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b61113d826110c7565b61114681611d84565b6111508383611fa3565b50505050565b61115e611d6b565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111c2576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111cc828261208d565b505050565b6111eb83838360405180602001604052805f815250611573565b505050565b600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f61121f82611cac565b9050919050565b6010602052805f5260405f205f91509050805461124290614700565b80601f016020809104026020016040519081016040528092919081815260200182805461126e90614700565b80156112b95780601f10611290576101008083540402835291602001916112b9565b820191905f5260205f20905b81548152906001019060200180831161129c57829003601f168201915b505050505081565b5f5f1b6112cd81611d84565b81600a819055505050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611349575f6040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016113409190613da0565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b600e5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f60075f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b60606001805461142690614700565b80601f016020809104026020016040519081016040528092919081815260200182805461145290614700565b801561149d5780601f106114745761010080835404028352916020019161149d565b820191905f5260205f20905b81548152906001019060200180831161148057829003601f168201915b5050505050905090565b600c5481565b5f5f1b81565b6114c56114be611d6b565b8383612177565b5050565b6114d16108c6565b6115638686868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050508461090c565b61156b610d43565b505050505050565b61157e848484610fc8565b611592611589611d6b565b858585856122e0565b50505050565b5f5f1b6115a481611d84565b81600c819055505050565b60606115ba82611cac565b505f600f5f8481526020019081526020015f205490505f60405180602001604052805f81525090505f73ffffffffffffffffffffffffffffffffffffffff16600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146116dc57600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b63e6ac3836040518263ffffffff1660e01b81526004016116909190613fa0565b5f60405180830381865afa9250505080156116cd57506040513d5f823e3d601f19601f820116820180604052508101906116ca9190614cab565b60015b156116db5780606001519150505b5b6060805f60105f8881526020019081526020015f2080546116fc90614700565b80601f016020809104026020016040519081016040528092919081815260200182805461172890614700565b80156117735780601f1061174a57610100808354040283529160200191611773565b820191905f5260205f20905b81548152906001019060200180831161175657829003601f168201915b505050505090505f815111156117d55761178c8161248c565b156117cc578091506117a66117a1888661293d565b6129a2565b6040516020016117b69190614d76565b60405160208183030381529060405292506117d0565b8092505b611872565b5f6117df886129cf565b90505f8151111561183c576117f38161248c565b156118335780925061180d611808898761293d565b6129a2565b60405160200161181d9190614d76565b6040516020818303038152906040529350611837565b8093505b611870565b61184e611849898761293d565b6129a2565b60405160200161185e9190614d76565b60405160208183030381529060405293505b505b5f60405180602001604052805f81525090505f835111156118b0578260405160200161189e9190614de1565b60405160208183030381529060405290505b5f6119356118bd8a612ada565b5f8851116118d95760405180602001604052805f815250611902565b6118e288612ba4565b6040516020016118f29190614e4c565b6040516020818303038152906040525b878561190d8b612ba4565b60405160200161192195949392919061502b565b6040516020818303038152906040526129a2565b90508060405160200161194891906150f6565b604051602081830303815290604052975050505050505050919050565b61196d6108c6565b6119ff3386868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050508461090c565b611a07610d43565b5050505050565b600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611a3c826110c7565b611a4581611d84565b611a4f838361208d565b50505050565b600a5481565b600f602052805f5260405f205f915090505481565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f5f1b611b0a81611d84565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b6f90615161565b60405180910390fd5b81600b5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b8060065f8481526020019081526020015f209081611bda91906148c7565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce782604051611c0a9190613fa0565b60405180910390a15050565b611c2f828260405180602001604052805f8152506131c7565b5050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611ca55750611ca4826131ea565b5b9050919050565b5f5f611cb78361324a565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611d2957826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611d209190613fa0565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b611d7f8383836001613283565b505050565b611d9581611d90611d6b565b613442565b50565b5f5f611da38461324a565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611de457611de3818486613493565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611e6f57611e235f855f5f613283565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611eee57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b5f611fae83836113b3565b61208357600160075f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550612020611d6b565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050612087565b5f90505b92915050565b5f61209883836113b3565b1561216d575f60075f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061210a611d6b565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050612171565b5f90505b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036121e757816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016121de9190613da0565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516122d39190613c5a565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115612485578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b815260040161233e94939291906151d1565b6020604051808303815f875af192505050801561237957506040513d601f19601f82011682018060405250810190612376919061522f565b60015b6123fa573d805f81146123a7576040519150601f19603f3d011682016040523d82523d5f602084013e6123ac565b606091505b505f8151036123f257836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016123e99190613da0565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461248357836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161247a9190613da0565b60405180910390fd5b505b5050505050565b5f5f829050600b815110156124a4575f915050612938565b7f6400000000000000000000000000000000000000000000000000000000000000815f815181106124d8576124d761525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614801561257157507f6100000000000000000000000000000000000000000000000000000000000000816001815181106125425761254161525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80156125dc57507f7400000000000000000000000000000000000000000000000000000000000000816002815181106125ad576125ac61525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561264757507f6100000000000000000000000000000000000000000000000000000000000000816003815181106126185761261761525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80156126b257507f3a00000000000000000000000000000000000000000000000000000000000000816004815181106126835761268261525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561271d57507f6100000000000000000000000000000000000000000000000000000000000000816005815181106126ee576126ed61525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561278857507f7500000000000000000000000000000000000000000000000000000000000000816006815181106127595761275861525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80156127f357507f6400000000000000000000000000000000000000000000000000000000000000816007815181106127c4576127c361525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561285e57507f69000000000000000000000000000000000000000000000000000000000000008160088151811061282f5761282e61525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80156128c957507f6f000000000000000000000000000000000000000000000000000000000000008160098151811061289a5761289961525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b801561293457507f2f0000000000000000000000000000000000000000000000000000000000000081600a815181106129055761290461525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9150505b919050565b60605f5f8351116129755761295184612ada565b60405160200161296191906152d1565b604051602081830303815290604052612977565b825b90508060405160200161298a91906155ba565b60405160208183030381529060405291505092915050565b60606129c882604051806060016040528060408152602001615723604091396001613556565b9050919050565b60606129da82611cac565b505f60065f8481526020019081526020015f2080546129f890614700565b80601f0160208091040260200160405190810160405280929190818152602001828054612a2490614700565b8015612a6f5780601f10612a4657610100808354040283529160200191612a6f565b820191905f5260205f20905b815481529060010190602001808311612a5257829003601f168201915b505050505090505f612a7f6136e5565b90505f815103612a93578192505050612ad5565b5f82511115612ac7578082604051602001612aaf929190615607565b60405160208183030381529060405292505050612ad5565b612ad0846136fb565b925050505b919050565b60605f6001612ae884613761565b0190505f8167ffffffffffffffff811115612b0657612b0561427b565b5b6040519080825280601f01601f191660200182016040528015612b385781602001600182028036833780820191505090505b5090505f82602083010190505b600115612b99578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612b8e57612b8d61562a565b5b0494505f8503612b45575b819350505050919050565b60605f8290505f815190505f5f90505f5f90505b82811015612ced577f2200000000000000000000000000000000000000000000000000000000000000848281518110612bf457612bf361525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612c8b57507f5c00000000000000000000000000000000000000000000000000000000000000848281518110612c5c57612c5b61525a565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15612ca3578180612c9b9061468c565b925050612ce0565b6020848281518110612cb857612cb761525a565b5b602001015160f81c60f81b60f81c60ff161015612cdf57600582612cdc9190615657565b91505b5b8080600101915050612bb8565b505f8103612d00578493505050506131c2565b5f8183612d0d9190615657565b67ffffffffffffffff811115612d2657612d2561427b565b5b6040519080825280601f01601f191660200182016040528015612d585781602001600182028036833780820191505090505b5090505f5f90505f5f90505b848110156131b8575f868281518110612d8057612d7f61525a565b5b602001015160f81c60f81b60f81c905060228160ff161480612da55750605c8160ff16145b15612e6e577f5c00000000000000000000000000000000000000000000000000000000000000848480612dd79061468c565b955081518110612dea57612de961525a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053508060f81b848480612e289061468c565b955081518110612e3b57612e3a61525a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053506131aa565b60208160ff161015613157577f5c00000000000000000000000000000000000000000000000000000000000000848480612ea79061468c565b955081518110612eba57612eb961525a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053507f7500000000000000000000000000000000000000000000000000000000000000848480612f159061468c565b955081518110612f2857612f2761525a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053507f3000000000000000000000000000000000000000000000000000000000000000848480612f839061468c565b955081518110612f9657612f9561525a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053507f3000000000000000000000000000000000000000000000000000000000000000848480612ff19061468c565b9550815181106130045761300361525a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505f6040518060400160405280601081526020017f303132333435363738396162636465660000000000000000000000000000000081525090508060048360ff16901c60ff16815181106130885761308761525a565b5b602001015160f81c60f81b85858061309f9061468c565b9650815181106130b2576130b161525a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a90535080600f831660ff16815181106130f9576130f861525a565b5b602001015160f81c60f81b8585806131109061468c565b9650815181106131235761312261525a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350506131a9565b8060f81b8484806131679061468c565b95508151811061317a5761317961525a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505b5b508080600101915050612d64565b5081955050505050505b919050565b6131d183836138b2565b6131e56131dc611d6b565b5f8585856122e0565b505050565b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806132435750613242826139a5565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806132bb57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156133ed575f6132ca84611cac565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561333457508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561334757506133458184611a70565b155b1561338957826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016133809190613da0565b60405180910390fd5b81156133eb57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b61344c82826113b3565b61348f5780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161348692919061568a565b60405180910390fd5b5050565b61349e838383613a86565b613551575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361351257806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016135099190613fa0565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401613548929190614a11565b60405180910390fd5b505050565b60605f8451036135765760405180602001604052805f81525090506136de565b5f826135a757600360028651600461358e91906156b1565b6135989190615657565b6135a291906156f2565b6135ce565b6003600286516135b79190615657565b6135c191906156f2565b60046135cd91906156b1565b5b90505f8167ffffffffffffffff8111156135eb576135ea61427b565b5b6040519080825280601f01601f19166020018201604052801561361d5781602001600182028036833780820191505090505b509050600185016020820187885189016020810180515f82525b82841015613692576003840193508351603f8160121c168701518653600186019550603f81600c1c168701518653600186019550603f8160061c168701518653600186019550603f8116870151865360018601955050613637565b80825289156136d25760038c5106600181146136b557600281146136c8576136d0565b603d6001870353603d60028703536136d0565b603d60018703535b505b50505050505080925050505b9392505050565b606060405180602001604052805f815250905090565b606061370682611cac565b505f6137106136e5565b90505f81511161372e5760405180602001604052805f815250613759565b8061373884612ada565b604051602001613749929190615607565b6040516020818303038152906040525b915050919050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106137bd577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816137b3576137b261562a565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106137fa576d04ee2d6d415b85acef810000000083816137f0576137ef61562a565b5b0492506020810190505b662386f26fc10000831061382957662386f26fc10000838161381f5761381e61562a565b5b0492506010810190505b6305f5e1008310613852576305f5e10083816138485761384761562a565b5b0492506008810190505b612710831061387757612710838161386d5761386c61562a565b5b0492506004810190505b6064831061389a57606483816138905761388f61562a565b5b0492506002810190505b600a83106138a9576001810190505b80915050919050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603613922575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016139199190613da0565b60405180910390fd5b5f61392e83835f611d98565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146139a0575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016139979190613da0565b60405180910390fd5b505050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480613a6f57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80613a7f5750613a7e82613b46565b5b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015613b3d57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480613afe5750613afd8484611a70565b5b80613b3c57508273ffffffffffffffffffffffffffffffffffffffff16613b2483611d32565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613bf481613bc0565b8114613bfe575f5ffd5b50565b5f81359050613c0f81613beb565b92915050565b5f60208284031215613c2a57613c29613bb8565b5b5f613c3784828501613c01565b91505092915050565b5f8115159050919050565b613c5481613c40565b82525050565b5f602082019050613c6d5f830184613c4b565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f613cb582613c73565b613cbf8185613c7d565b9350613ccf818560208601613c8d565b613cd881613c9b565b840191505092915050565b5f6020820190508181035f830152613cfb8184613cab565b905092915050565b5f819050919050565b613d1581613d03565b8114613d1f575f5ffd5b50565b5f81359050613d3081613d0c565b92915050565b5f60208284031215613d4b57613d4a613bb8565b5b5f613d5884828501613d22565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f613d8a82613d61565b9050919050565b613d9a81613d80565b82525050565b5f602082019050613db35f830184613d91565b92915050565b613dc281613d80565b8114613dcc575f5ffd5b50565b5f81359050613ddd81613db9565b92915050565b5f5f60408385031215613df957613df8613bb8565b5b5f613e0685828601613dcf565b9250506020613e1785828601613d22565b9150509250929050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f840112613e4257613e41613e21565b5b8235905067ffffffffffffffff811115613e5f57613e5e613e25565b5b602083019150836001820283011115613e7b57613e7a613e29565b5b9250929050565b5f5f5f5f5f60608688031215613e9b57613e9a613bb8565b5b5f613ea888828901613dcf565b955050602086013567ffffffffffffffff811115613ec957613ec8613bbc565b5b613ed588828901613e2d565b9450945050604086013567ffffffffffffffff811115613ef857613ef7613bbc565b5b613f0488828901613e2d565b92509250509295509295909350565b5f5f5f5f60408587031215613f2b57613f2a613bb8565b5b5f85013567ffffffffffffffff811115613f4857613f47613bbc565b5b613f5487828801613e2d565b9450945050602085013567ffffffffffffffff811115613f7757613f76613bbc565b5b613f8387828801613e2d565b925092505092959194509250565b613f9a81613d03565b82525050565b5f602082019050613fb35f830184613f91565b92915050565b5f60208284031215613fce57613fcd613bb8565b5b5f613fdb84828501613dcf565b91505092915050565b5f5f5f60608486031215613ffb57613ffa613bb8565b5b5f61400886828701613dcf565b935050602061401986828701613dcf565b925050604061402a86828701613d22565b9150509250925092565b5f819050919050565b61404681614034565b8114614050575f5ffd5b50565b5f813590506140618161403d565b92915050565b5f6020828403121561407c5761407b613bb8565b5b5f61408984828501614053565b91505092915050565b61409b81614034565b82525050565b5f6020820190506140b45f830184614092565b92915050565b5f5f604083850312156140d0576140cf613bb8565b5b5f6140dd85828601614053565b92505060206140ee85828601613dcf565b9150509250929050565b5f819050919050565b5f61411b61411661411184613d61565b6140f8565b613d61565b9050919050565b5f61412c82614101565b9050919050565b5f61413d82614122565b9050919050565b61414d81614133565b82525050565b5f6020820190506141665f830184614144565b92915050565b61417581613c40565b811461417f575f5ffd5b50565b5f813590506141908161416c565b92915050565b5f5f604083850312156141ac576141ab613bb8565b5b5f6141b985828601613dcf565b92505060206141ca85828601614182565b9150509250929050565b5f5f5f5f5f5f608087890312156141ee576141ed613bb8565b5b5f6141fb89828a01613dcf565b965050602087013567ffffffffffffffff81111561421c5761421b613bbc565b5b61422889828a01613e2d565b9550955050604087013567ffffffffffffffff81111561424b5761424a613bbc565b5b61425789828a01613e2d565b9350935050606061426a89828a01614182565b9150509295509295509295565b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6142b182613c9b565b810181811067ffffffffffffffff821117156142d0576142cf61427b565b5b80604052505050565b5f6142e2613baf565b90506142ee82826142a8565b919050565b5f67ffffffffffffffff82111561430d5761430c61427b565b5b61431682613c9b565b9050602081019050919050565b828183375f83830152505050565b5f61434361433e846142f3565b6142d9565b90508281526020810184848401111561435f5761435e614277565b5b61436a848285614323565b509392505050565b5f82601f83011261438657614385613e21565b5b8135614396848260208601614331565b91505092915050565b5f5f5f5f608085870312156143b7576143b6613bb8565b5b5f6143c487828801613dcf565b94505060206143d587828801613dcf565b93505060406143e687828801613d22565b925050606085013567ffffffffffffffff81111561440757614406613bbc565b5b61441387828801614372565b91505092959194509250565b5f5f5f5f5f6060868803121561443857614437613bb8565b5b5f86013567ffffffffffffffff81111561445557614454613bbc565b5b61446188828901613e2d565b9550955050602086013567ffffffffffffffff81111561448457614483613bbc565b5b61449088828901613e2d565b935093505060406144a388828901614182565b9150509295509295909350565b5f6144ba82614122565b9050919050565b6144ca816144b0565b82525050565b5f6020820190506144e35f8301846144c1565b92915050565b5f5f604083850312156144ff576144fe613bb8565b5b5f61450c85828601613dcf565b925050602061451d85828601613dcf565b9150509250929050565b7f5265636569707420636f6e7472616374206e6f742073657400000000000000005f82015250565b5f61455b601883613c7d565b915061456682614527565b602082019050919050565b5f6020820190508181035f8301526145888161454f565b9050919050565b7f446f6e6174696f6e2062656c6f77206d696e696d756d000000000000000000005f82015250565b5f6145c3601683613c7d565b91506145ce8261458f565b602082019050919050565b5f6020820190508181035f8301526145f0816145b7565b9050919050565b7f4d617820737570706c79207265616368656400000000000000000000000000005f82015250565b5f61462b601283613c7d565b9150614636826145f7565b602082019050919050565b5f6020820190508181035f8301526146588161461f565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61469682613d03565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036146c8576146c761465f565b5b600182019050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061471757607f821691505b60208210810361472a576147296146d3565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261478c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614751565b6147968683614751565b95508019841693508086168417925050509392505050565b5f6147c86147c36147be84613d03565b6140f8565b613d03565b9050919050565b5f819050919050565b6147e1836147ae565b6147f56147ed826147cf565b84845461475d565b825550505050565b5f5f905090565b61480c6147fd565b6148178184846147d8565b505050565b5b8181101561483a5761482f5f82614804565b60018101905061481d565b5050565b601f82111561487f5761485081614730565b61485984614742565b81016020851015614868578190505b61487c61487485614742565b83018261481c565b50505b505050565b5f82821c905092915050565b5f61489f5f1984600802614884565b1980831691505092915050565b5f6148b78383614890565b9150826002028217905092915050565b6148d082613c73565b67ffffffffffffffff8111156148e9576148e861427b565b5b6148f38254614700565b6148fe82828561483e565b5f60209050601f83116001811461492f575f841561491d578287015190505b61492785826148ac565b86555061498e565b601f19841661493d86614730565b5f5b828110156149645784890151825560018201915060208501945060208101905061493f565b86831015614981578489015161497d601f891682614890565b8355505b6001600288020188555050505b505050505050565b5f6060820190506149a95f830186613d91565b6149b66020830185613f91565b81810360408301526149c88184613cab565b9050949350505050565b5f815190506149e081613d0c565b92915050565b5f602082840312156149fb576149fa613bb8565b5b5f614a08848285016149d2565b91505092915050565b5f604082019050614a245f830185613d91565b614a316020830184613f91565b9392505050565b5f81905092915050565b50565b5f614a505f83614a38565b9150614a5b82614a42565b5f82019050919050565b5f614a6f82614a45565b9150819050919050565b7f5472616e7366657220746f207472656173757279206661696c656400000000005f82015250565b5f614aad601b83613c7d565b9150614ab882614a79565b602082019050919050565b5f6020820190508181035f830152614ada81614aa1565b9050919050565b5f608082019050614af45f830187613f91565b614b016020830186613f91565b614b0e6040830185613f91565b8181036060830152614b208184613cab565b905095945050505050565b5f606082019050614b3e5f830186613d91565b614b4b6020830185613f91565b614b586040830184613d91565b949350505050565b5f5ffd5b5f5ffd5b5f81519050614b7681613db9565b92915050565b5f67ffffffffffffffff821115614b9657614b9561427b565b5b614b9f82613c9b565b9050602081019050919050565b5f614bbe614bb984614b7c565b6142d9565b905082815260208101848484011115614bda57614bd9614277565b5b614be5848285613c8d565b509392505050565b5f82601f830112614c0157614c00613e21565b5b8151614c11848260208601614bac565b91505092915050565b5f60808284031215614c2f57614c2e614b60565b5b614c3960806142d9565b90505f614c4884828501614b68565b5f830152506020614c5b848285016149d2565b6020830152506040614c6f848285016149d2565b604083015250606082015167ffffffffffffffff811115614c9357614c92614b64565b5b614c9f84828501614bed565b60608301525092915050565b5f60208284031215614cc057614cbf613bb8565b5b5f82015167ffffffffffffffff811115614cdd57614cdc613bbc565b5b614ce984828501614c1a565b91505092915050565b5f81905092915050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c0000000000005f82015250565b5f614d30601a83614cf2565b9150614d3b82614cfc565b601a82019050919050565b5f614d5082613c73565b614d5a8185614cf2565b9350614d6a818560208601613c8d565b80840191505092915050565b5f614d8082614d24565b9150614d8c8284614d46565b915081905092915050565b7f222c2022616e696d6174696f6e5f75726c223a202200000000000000000000005f82015250565b5f614dcb601583614cf2565b9150614dd682614d97565b601582019050919050565b5f614deb82614dbf565b9150614df78284614d46565b915081905092915050565b7f3a200000000000000000000000000000000000000000000000000000000000005f82015250565b5f614e36600283614cf2565b9150614e4182614e02565b600282019050919050565b5f614e5682614e2a565b9150614e628284614d46565b915081905092915050565b7f7b226e616d65223a2022427261674e46542023000000000000000000000000005f82015250565b5f614ea1601383614cf2565b9150614eac82614e6d565b601382019050919050565b7f222c20226465736372697074696f6e223a2022427261672e43686172697479205f8201527f446f6e6174696f6e204e46540000000000000000000000000000000000000000602082015250565b5f614f11602c83614cf2565b9150614f1c82614eb7565b602c82019050919050565b7f222c2022696d616765223a2022000000000000000000000000000000000000005f82015250565b5f614f5b600d83614cf2565b9150614f6682614f27565b600d82019050919050565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a5f8201527f20224d657373616765222c202276616c7565223a202200000000000000000000602082015250565b5f614fcb603683614cf2565b9150614fd682614f71565b603682019050919050565b7f227d5d7d000000000000000000000000000000000000000000000000000000005f82015250565b5f615015600483614cf2565b915061502082614fe1565b600482019050919050565b5f61503582614e95565b91506150418288614d46565b915061504c82614f05565b91506150588287614d46565b915061506382614f4f565b915061506f8286614d46565b915061507b8285614d46565b915061508682614fbf565b91506150928284614d46565b915061509d82615009565b91508190509695505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000005f82015250565b5f6150e0601d83614cf2565b91506150eb826150ac565b601d82019050919050565b5f615100826150d4565b915061510c8284614d46565b915081905092915050565b7f496e76616c6964207472656173757279206164647265737300000000000000005f82015250565b5f61514b601883613c7d565b915061515682615117565b602082019050919050565b5f6020820190508181035f8301526151788161513f565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f6151a38261517f565b6151ad8185615189565b93506151bd818560208601613c8d565b6151c681613c9b565b840191505092915050565b5f6080820190506151e45f830187613d91565b6151f16020830186613d91565b6151fe6040830185613f91565b81810360608301526152108184615199565b905095945050505050565b5f8151905061522981613beb565b92915050565b5f6020828403121561524457615243613bb8565b5b5f6152518482850161521b565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f427261674e4654202300000000000000000000000000000000000000000000005f82015250565b5f6152bb600983614cf2565b91506152c682615287565b600982019050919050565b5f6152db826152af565b91506152e78284614d46565b915081905092915050565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32305f8201527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d22302030203335302033353060408201527f223e000000000000000000000000000000000000000000000000000000000000606082015250565b5f615398606283614cf2565b91506153a3826152f2565b606282019050919050565b7f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e745f8201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060208201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60408201527f653e000000000000000000000000000000000000000000000000000000000000606082015250565b5f615454606283614cf2565b915061545f826153ae565b606282019050919050565b7f3c726563742077696474683d223130302522206865696768743d2231303025225f8201527f2066696c6c3d222336333636663122202f3e0000000000000000000000000000602082015250565b5f6154c4603283614cf2565b91506154cf8261546a565b603282019050919050565b7f3c7465787420783d223530252220793d223530252220636c6173733d226261735f8201527f652220646f6d696e616e742d626173656c696e653d226d6964646c652220746560208201527f78742d616e63686f723d226d6964646c65223e00000000000000000000000000604082015250565b5f61555a605383614cf2565b9150615565826154da565b605382019050919050565b7f3c2f746578743e3c2f7376673e000000000000000000000000000000000000005f82015250565b5f6155a4600d83614cf2565b91506155af82615570565b600d82019050919050565b5f6155c48261538c565b91506155cf82615448565b91506155da826154b8565b91506155e58261554e565b91506155f18284614d46565b91506155fc82615598565b915081905092915050565b5f6156128285614d46565b915061561e8284614d46565b91508190509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f61566182613d03565b915061566c83613d03565b92508282019050808211156156845761568361465f565b5b92915050565b5f60408201905061569d5f830185613d91565b6156aa6020830184614092565b9392505050565b5f6156bb82613d03565b91506156c683613d03565b92508282026156d481613d03565b915082820484148315176156eb576156ea61465f565b5b5092915050565b5f6156fc82613d03565b915061570783613d03565b9250826157175761571661562a565b5b82820490509291505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa264697066735822122024ce4fb676e794008fd4444a5e429031413f0c5fa1043f8fda87fb913d2f0d1864736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516135bf3803806135bf833981810160405281019061003191906100dc565b60015f819055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610107565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100ab82610082565b9050919050565b6100bb816100a1565b81146100c5575f5ffd5b50565b5f815190506100d6816100b2565b92915050565b5f602082840312156100f1576100f061007e565b5b5f6100fe848285016100c8565b91505092915050565b6134ab806101145f395ff3fe608060405234801561000f575f5ffd5b50600436106100f3575f3560e01c80637b10399911610095578063d6bd07ee11610064578063d6bd07ee146102b9578063d7423858146102d5578063f07a380e146102f1578063f23a6e611461030d576100f3565b80637b1039991461021f57806381bd34d21461023d578063bc197c811461026d578063c2fe51851461029d576100f3565b80632ff1d0f9116100d15780632ff1d0f91461018757806335f81b87146101a3578063380ff999146101bf5780636f39becd146101ef576100f3565b806301ffc9a7146100f75780630412619614610127578063150b7a0214610157575b5f5ffd5b610111600480360381019061010c9190612481565b61033d565b60405161011e91906124c6565b60405180910390f35b610141600480360381019061013c919061256c565b6103b6565b60405161014e91906125b9565b60405180910390f35b610171600480360381019061016c919061270e565b6103d6565b60405161017e919061279d565b60405180910390f35b6101a1600480360381019061019c91906127b6565b6107cb565b005b6101bd60048036038101906101b89190612806565b610bfe565b005b6101d960048036038101906101d4919061287d565b610c22565b6040516101e691906125b9565b60405180910390f35b6102096004803603810190610204919061256c565b610c4d565b60405161021691906128dc565b60405180910390f35b610227610c8a565b6040516102349190612950565b60405180910390f35b6102576004803603810190610252919061287d565b610caf565b60405161026491906125b9565b60405180910390f35b61028760048036038101906102829190612a2d565b610cda565b604051610294919061279d565b60405180910390f35b6102b760048036038101906102b29190612af8565b6111bf565b005b6102d360048036038101906102ce9190612b5c565b6111e1565b005b6102ef60048036038101906102ea919061287d565b611204565b005b61030b6004803603810190610306919061256c565b611225565b005b61032760048036038101906103229190612bc0565b611541565b604051610334919061279d565b60405180910390f35b5f7f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103af57506103ae82611988565b5b9050919050565b6004602052815f5260405f20602052805f5260405f205f91509150505481565b5f6103df6119f1565b5f8490505f5f905060208451036104c55760015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33876040518263ffffffff1660e01b815260040161044a91906128dc565b602060405180830381865afa158015610465573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104899190612c7d565b156104a957838060200190518101906104a29190612ce3565b91506104c0565b838060200190518101906104bd9190612d22565b90505b6105a6565b60408451036105a55760015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33876040518263ffffffff1660e01b815260040161052891906128dc565b602060405180830381865afa158015610543573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105679190612c7d565b1561058d57838060200190518101906105809190612d4d565b80925081935050506105a4565b838060200190518101906105a19190612d22565b90505b5b5b8160025f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8781526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f5f821161063e575f61064b565b814261064a9190612db8565b5b90508060045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8881526020019081526020015f20819055505f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b81526004016106f991906128dc565b5f60405180830381865afa158015610713573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f8201168201806040525081019061073b9190612f82565b6040015190508373ffffffffffffffffffffffffffffffffffffffff16873373ffffffffffffffffffffffffffffffffffffffff167f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad384866040516107a192919061301b565b60405180910390a46107b589898989611a35565b9450505050506107c3611a48565b949350505050565b6107d36119f1565b8060035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054101561089d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089490613093565b60405180910390fd5b60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054421015610967576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095e906130fb565b60405180910390fd5b8060035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546109fd9190613119565b925050819055505f60035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205403610b1f575f60055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505b8273ffffffffffffffffffffffffffffffffffffffff1663f242432a303385856040518563ffffffff1660e01b8152600401610b5e949392919061317f565b5f604051808303815f87803b158015610b75575f5ffd5b505af1158015610b87573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f984604051610be991906125b9565b60405180910390a4610bf9611a48565b505050565b610c066119f1565b610c138585858585611a51565b610c1b611a48565b5050505050565b6005602052825f5260405f20602052815f5260405f20602052805f5260405f205f9250925050505481565b6002602052815f5260405f20602052805f5260405f205f915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6003602052825f5260405f20602052815f5260405f20602052805f5260405f205f9250925050505481565b5f610ce36119f1565b5f8590505f5f90506020845103610dc95760015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33886040518263ffffffff1660e01b8152600401610d4e91906128dc565b602060405180830381865afa158015610d69573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d8d9190612c7d565b15610dad5783806020019051810190610da69190612ce3565b9150610dc4565b83806020019051810190610dc19190612d22565b90505b610eaa565b6040845103610ea95760015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33886040518263ffffffff1660e01b8152600401610e2c91906128dc565b602060405180830381865afa158015610e47573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e6b9190612c7d565b15610e915783806020019051810190610e849190612d4d565b8092508193505050610ea8565b83806020019051810190610ea59190612d22565b90505b5b5b5f5f8211610eb8575f610ec5565b8142610ec49190612db8565b5b90505f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b8152600401610f2291906128dc565b5f60405180830381865afa158015610f3c573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f82011682018060405250810190610f649190612f82565b6040015190505f5f90505b885181101561119a57878181518110610f8b57610f8a6131d5565b5b602002602001015160035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8b8481518110610fe457610fe36131d5565b5b602002602001015181526020019081526020015f205f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546110429190612db8565b925050819055508260055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8b848151811061109b5761109a6131d5565b5b602002602001015181526020019081526020015f205f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508473ffffffffffffffffffffffffffffffffffffffff16898281518110611119576111186131d5565b5b60200260200101513373ffffffffffffffffffffffffffffffffffffffff167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358b858151811061116c5761116b6131d5565b5b6020026020010151868860405161118593929190613202565b60405180910390a48080600101915050610f6f565b506111a88a8a8a8a8a611fa9565b9450505050506111b6611a48565b95945050505050565b6111c76119f1565b6111d384848484611fbd565b6111db611a48565b50505050565b6111e96119f1565b6111f6848484845f611a51565b6111fe611a48565b50505050565b61120c6119f1565b6112188383835f611fbd565b611220611a48565b505050565b61122d6119f1565b3373ffffffffffffffffffffffffffffffffffffffff1660025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611306576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112fd90613288565b60405180910390fd5b60045f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8281526020019081526020015f2054421015611395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138c906130fb565b60405180910390fd5b5f60025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60045f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f20819055508173ffffffffffffffffffffffffffffffffffffffff166342842e0e3033846040518463ffffffff1660e01b81526004016114ad939291906132a6565b5f604051808303815f87803b1580156114c4575f5ffd5b505af11580156114d6573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16818373ffffffffffffffffffffffffffffffffffffffff167f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c0660405160405180910390a461153d611a48565b5050565b5f61154a6119f1565b5f8590505f5f905060208451036116305760015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33886040518263ffffffff1660e01b81526004016115b591906128dc565b602060405180830381865afa1580156115d0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115f49190612c7d565b15611614578380602001905181019061160d9190612ce3565b915061162b565b838060200190518101906116289190612d22565b90505b611711565b60408451036117105760015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33886040518263ffffffff1660e01b815260040161169391906128dc565b602060405180830381865afa1580156116ae573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116d29190612c7d565b156116f857838060200190518101906116eb9190612d4d565b809250819350505061170f565b8380602001905181019061170c9190612d22565b90505b5b5b8460035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8881526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546117a79190612db8565b925050819055505f5f82116117bc575f6117c9565b81426117c89190612db8565b5b90508060055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8981526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b81526004016118b291906128dc565b5f60405180830381865afa1580156118cc573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906118f49190612f82565b6040015190508373ffffffffffffffffffffffffffffffffffffffff16883373ffffffffffffffffffffffffffffffffffffffff167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358a858760405161195c93929190613202565b60405180910390a46119718a8a8a8a8a612407565b94505050505061197f611a48565b95945050505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60025f5403611a2c576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f81905550565b5f63150b7a0260e01b9050949350505050565b60015f81905550565b8260035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015611b1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b1290613093565b60405180910390fd5b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33836040518263ffffffff1660e01b8152600401611b7591906128dc565b602060405180830381865afa158015611b90573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611bb49190612c7d565b611bf3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bea90613325565b60405180910390fd5b60055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054421015611cbd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cb4906130fb565b60405180910390fd5b8260035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254611d539190613119565b925050819055505f60035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205403611e75575f60055f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505b60605f821115611ea8573382604051602001611e92929190613343565b6040516020818303038152906040529050611ecb565b33604051602001611eb991906128dc565b60405160208183030381529060405290505b8573ffffffffffffffffffffffffffffffffffffffff1663f242432a30858888866040518663ffffffff1660e01b8152600401611f0c9594939291906133ac565b5f604051808303815f87803b158015611f23575f5ffd5b505af1158015611f35573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16858773ffffffffffffffffffffffffffffffffffffffff167fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd18787604051611f99929190613404565b60405180910390a4505050505050565b5f63bc197c8160e01b905095945050505050565b3373ffffffffffffffffffffffffffffffffffffffff1660025f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161208d90613288565b60405180910390fd5b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33836040518263ffffffff1660e01b81526004016120f091906128dc565b602060405180830381865afa15801561210b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061212f9190612c7d565b61216e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161216590613325565b60405180910390fd5b60045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f20544210156121fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121f4906130fb565b60405180910390fd5b5f60025f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60045f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f208190555060605f82111561230b5733826040516020016122f5929190613343565b604051602081830303815290604052905061232e565b3360405160200161231c91906128dc565b60405160208183030381529060405290505b8473ffffffffffffffffffffffffffffffffffffffff1663b88d4fde308587856040518563ffffffff1660e01b815260040161236d949392919061342b565b5f604051808303815f87803b158015612384575f5ffd5b505af1158015612396573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16848673ffffffffffffffffffffffffffffffffffffffff167f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d79866040516123f891906128dc565b60405180910390a45050505050565b5f63f23a6e6160e01b905095945050505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6124608161242c565b811461246a575f5ffd5b50565b5f8135905061247b81612457565b92915050565b5f6020828403121561249657612495612424565b5b5f6124a38482850161246d565b91505092915050565b5f8115159050919050565b6124c0816124ac565b82525050565b5f6020820190506124d95f8301846124b7565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f612508826124df565b9050919050565b612518816124fe565b8114612522575f5ffd5b50565b5f813590506125338161250f565b92915050565b5f819050919050565b61254b81612539565b8114612555575f5ffd5b50565b5f8135905061256681612542565b92915050565b5f5f6040838503121561258257612581612424565b5b5f61258f85828601612525565b92505060206125a085828601612558565b9150509250929050565b6125b381612539565b82525050565b5f6020820190506125cc5f8301846125aa565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b612620826125da565b810181811067ffffffffffffffff8211171561263f5761263e6125ea565b5b80604052505050565b5f61265161241b565b905061265d8282612617565b919050565b5f67ffffffffffffffff82111561267c5761267b6125ea565b5b612685826125da565b9050602081019050919050565b828183375f83830152505050565b5f6126b26126ad84612662565b612648565b9050828152602081018484840111156126ce576126cd6125d6565b5b6126d9848285612692565b509392505050565b5f82601f8301126126f5576126f46125d2565b5b81356127058482602086016126a0565b91505092915050565b5f5f5f5f6080858703121561272657612725612424565b5b5f61273387828801612525565b945050602061274487828801612525565b935050604061275587828801612558565b925050606085013567ffffffffffffffff81111561277657612775612428565b5b612782878288016126e1565b91505092959194509250565b6127978161242c565b82525050565b5f6020820190506127b05f83018461278e565b92915050565b5f5f5f606084860312156127cd576127cc612424565b5b5f6127da86828701612525565b93505060206127eb86828701612558565b92505060406127fc86828701612558565b9150509250925092565b5f5f5f5f5f60a0868803121561281f5761281e612424565b5b5f61282c88828901612525565b955050602061283d88828901612558565b945050604061284e88828901612558565b935050606061285f88828901612525565b925050608061287088828901612558565b9150509295509295909350565b5f5f5f6060848603121561289457612893612424565b5b5f6128a186828701612525565b93505060206128b286828701612558565b92505060406128c386828701612525565b9150509250925092565b6128d6816124fe565b82525050565b5f6020820190506128ef5f8301846128cd565b92915050565b5f819050919050565b5f61291861291361290e846124df565b6128f5565b6124df565b9050919050565b5f612929826128fe565b9050919050565b5f61293a8261291f565b9050919050565b61294a81612930565b82525050565b5f6020820190506129635f830184612941565b92915050565b5f67ffffffffffffffff821115612983576129826125ea565b5b602082029050602081019050919050565b5f5ffd5b5f6129aa6129a584612969565b612648565b905080838252602082019050602084028301858111156129cd576129cc612994565b5b835b818110156129f657806129e28882612558565b8452602084019350506020810190506129cf565b5050509392505050565b5f82601f830112612a1457612a136125d2565b5b8135612a24848260208601612998565b91505092915050565b5f5f5f5f5f60a08688031215612a4657612a45612424565b5b5f612a5388828901612525565b9550506020612a6488828901612525565b945050604086013567ffffffffffffffff811115612a8557612a84612428565b5b612a9188828901612a00565b935050606086013567ffffffffffffffff811115612ab257612ab1612428565b5b612abe88828901612a00565b925050608086013567ffffffffffffffff811115612adf57612ade612428565b5b612aeb888289016126e1565b9150509295509295909350565b5f5f5f5f60808587031215612b1057612b0f612424565b5b5f612b1d87828801612525565b9450506020612b2e87828801612558565b9350506040612b3f87828801612525565b9250506060612b5087828801612558565b91505092959194509250565b5f5f5f5f60808587031215612b7457612b73612424565b5b5f612b8187828801612525565b9450506020612b9287828801612558565b9350506040612ba387828801612558565b9250506060612bb487828801612525565b91505092959194509250565b5f5f5f5f5f60a08688031215612bd957612bd8612424565b5b5f612be688828901612525565b9550506020612bf788828901612525565b9450506040612c0888828901612558565b9350506060612c1988828901612558565b925050608086013567ffffffffffffffff811115612c3a57612c39612428565b5b612c46888289016126e1565b9150509295509295909350565b612c5c816124ac565b8114612c66575f5ffd5b50565b5f81519050612c7781612c53565b92915050565b5f60208284031215612c9257612c91612424565b5b5f612c9f84828501612c69565b91505092915050565b5f612cb2826124df565b9050919050565b612cc281612ca8565b8114612ccc575f5ffd5b50565b5f81519050612cdd81612cb9565b92915050565b5f60208284031215612cf857612cf7612424565b5b5f612d0584828501612ccf565b91505092915050565b5f81519050612d1c81612542565b92915050565b5f60208284031215612d3757612d36612424565b5b5f612d4484828501612d0e565b91505092915050565b5f5f60408385031215612d6357612d62612424565b5b5f612d7085828601612ccf565b9250506020612d8185828601612d0e565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f612dc282612539565b9150612dcd83612539565b9250828201905080821115612de557612de4612d8b565b5b92915050565b5f5ffd5b5f5ffd5b5f60ff82169050919050565b612e0881612df3565b8114612e12575f5ffd5b50565b5f81519050612e2381612dff565b92915050565b5f67ffffffffffffffff821115612e4357612e426125ea565b5b612e4c826125da565b9050602081019050919050565b8281835e5f83830152505050565b5f612e79612e7484612e29565b612648565b905082815260208101848484011115612e9557612e946125d6565b5b612ea0848285612e59565b509392505050565b5f82601f830112612ebc57612ebb6125d2565b5b8151612ecc848260208601612e67565b91505092915050565b5f60808284031215612eea57612ee9612deb565b5b612ef46080612648565b90505f612f0384828501612c69565b5f830152506020612f1684828501612e15565b602083015250604082015167ffffffffffffffff811115612f3a57612f39612def565b5b612f4684828501612ea8565b604083015250606082015167ffffffffffffffff811115612f6a57612f69612def565b5b612f7684828501612ea8565b60608301525092915050565b5f60208284031215612f9757612f96612424565b5b5f82015167ffffffffffffffff811115612fb457612fb3612428565b5b612fc084828501612ed5565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f612fed82612fc9565b612ff78185612fd3565b9350613007818560208601612e59565b613010816125da565b840191505092915050565b5f6040820190508181035f8301526130338185612fe3565b905061304260208301846125aa565b9392505050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f61307d601483612fd3565b915061308882613049565b602082019050919050565b5f6020820190508181035f8301526130aa81613071565b9050919050565b7f45786869626974696f6e206e6f742079657420657870697265640000000000005f82015250565b5f6130e5601a83612fd3565b91506130f0826130b1565b602082019050919050565b5f6020820190508181035f830152613112816130d9565b9050919050565b5f61312382612539565b915061312e83612539565b925082820390508181111561314657613145612d8b565b5b92915050565b5f82825260208201905092915050565b50565b5f61316a5f8361314c565b91506131758261315c565b5f82019050919050565b5f60a0820190506131925f8301876128cd565b61319f60208301866128cd565b6131ac60408301856125aa565b6131b960608301846125aa565b81810360808301526131ca8161315f565b905095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6060820190506132155f8301866125aa565b81810360208301526132278185612fe3565b905061323660408301846125aa565b949350505050565b7f4e6f7420746865206f776e6572000000000000000000000000000000000000005f82015250565b5f613272600d83612fd3565b915061327d8261323e565b602082019050919050565b5f6020820190508181035f83015261329f81613266565b9050919050565b5f6060820190506132b95f8301866128cd565b6132c660208301856128cd565b6132d360408301846125aa565b949350505050565b7f44657374696e6174696f6e206e6f7420766572696669656400000000000000005f82015250565b5f61330f601883612fd3565b915061331a826132db565b602082019050919050565b5f6020820190508181035f83015261333c81613303565b9050919050565b5f6040820190506133565f8301856128cd565b61336360208301846125aa565b9392505050565b5f81519050919050565b5f61337e8261336a565b613388818561314c565b9350613398818560208601612e59565b6133a1816125da565b840191505092915050565b5f60a0820190506133bf5f8301886128cd565b6133cc60208301876128cd565b6133d960408301866125aa565b6133e660608301856125aa565b81810360808301526133f88184613374565b90509695505050505050565b5f6040820190506134175f8301856125aa565b61342460208301846128cd565b9392505050565b5f60808201905061343e5f8301876128cd565b61344b60208301866128cd565b61345860408301856125aa565b818103606083015261346a8184613374565b90509594505050505056fea26469706673582212200b2d73f164bc6138e52904221fa5768e7e2837268ed78721b09b25d1ae335d5164736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051610a52380380610a5283398181016040528101906100319190610115565b815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610153565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100e4826100bb565b9050919050565b6100f4816100da565b81146100fe575f5ffd5b50565b5f8151905061010f816100eb565b92915050565b5f5f6040838503121561012b5761012a6100b7565b5b5f61013885828601610101565b925050602061014985828601610101565b9150509250929050565b6108f2806101605f395ff3fe608060405260043610610042575f3560e01c8063150b7a021461004d5780631afed87514610089578063abc8c7af146100b1578063d56d229d146100db57610049565b3661004957005b5f5ffd5b348015610058575f5ffd5b50610073600480360381019061006e919061055e565b610105565b604051610080919061061c565b60405180910390f35b348015610094575f5ffd5b506100af60048036038101906100aa9190610635565b6101c2565b005b3480156100bc575f5ffd5b506100c561041f565b6040516100d291906106ce565b60405180910390f35b3480156100e6575f5ffd5b506100ef610443565b6040516100fc91906106f6565b60405180910390f35b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663058a56ac60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866040518363ffffffff1660e01b815260040161018292919061071e565b5f604051808303815f87803b158015610199575f5ffd5b505af11580156101ab573d5f5f3e3d5ffd5b5050505063150b7a0260e01b905095945050505050565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633013ce296040518163ffffffff1660e01b8152600401602060405180830381865afa15801561022c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102509190610780565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161028f939291906107ab565b6020604051808303815f875af11580156102ab573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102cf9190610815565b508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b35f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b815260040161032b92919061071e565b6020604051808303815f875af1158015610347573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061036b9190610815565b505f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d898aaf260015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856001866040518563ffffffff1660e01b81526004016103ed9493929190610879565b5f604051808303815f87803b158015610404575f5ffd5b505af1158015610416573d5f5f3e3d5ffd5b50505050505050565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61049982610470565b9050919050565b6104a98161048f565b81146104b3575f5ffd5b50565b5f813590506104c4816104a0565b92915050565b5f819050919050565b6104dc816104ca565b81146104e6575f5ffd5b50565b5f813590506104f7816104d3565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f84011261051e5761051d6104fd565b5b8235905067ffffffffffffffff81111561053b5761053a610501565b5b60208301915083600182028301111561055757610556610505565b5b9250929050565b5f5f5f5f5f6080868803121561057757610576610468565b5b5f610584888289016104b6565b9550506020610595888289016104b6565b94505060406105a6888289016104e9565b935050606086013567ffffffffffffffff8111156105c7576105c661046c565b5b6105d388828901610509565b92509250509295509295909350565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610616816105e2565b82525050565b5f60208201905061062f5f83018461060d565b92915050565b5f5f6040838503121561064b5761064a610468565b5b5f610658858286016104e9565b9250506020610669858286016104e9565b9150509250929050565b5f819050919050565b5f61069661069161068c84610470565b610673565b610470565b9050919050565b5f6106a78261067c565b9050919050565b5f6106b88261069d565b9050919050565b6106c8816106ae565b82525050565b5f6020820190506106e15f8301846106bf565b92915050565b6106f08161048f565b82525050565b5f6020820190506107095f8301846106e7565b92915050565b610718816104ca565b82525050565b5f6040820190506107315f8301856106e7565b61073e602083018461070f565b9392505050565b5f61074f8261048f565b9050919050565b61075f81610745565b8114610769575f5ffd5b50565b5f8151905061077a81610756565b92915050565b5f6020828403121561079557610794610468565b5b5f6107a28482850161076c565b91505092915050565b5f6060820190506107be5f8301866106e7565b6107cb60208301856106e7565b6107d8604083018461070f565b949350505050565b5f8115159050919050565b6107f4816107e0565b81146107fe575f5ffd5b50565b5f8151905061080f816107eb565b92915050565b5f6020828403121561082a57610829610468565b5b5f61083784828501610801565b91505092915050565b5f819050919050565b5f61086361085e61085984610840565b610673565b6104ca565b9050919050565b61087381610849565b82525050565b5f60808201905061088c5f8301876106e7565b610899602083018661070f565b6108a6604083018561086a565b6108b3606083018461070f565b9594505050505056fea26469706673582212200392cfcb29f7477625147fb583efedec2ae071b34506b26f2652fc66cf6989fe64736f6c634300081c0033"
    },
    "MockERC1155": {
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051612b06380380612b068339818101604052810190610031919061023b565b60405180602001604052805f81525061004f8161006960201b60201c565b506100625f5f1b8261007c60201b60201c565b5050610572565b806002908161007891906104a3565b5050565b5f61008d838361017260201b60201c565b61016857600160035f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506101056101d660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061016c565b5f90505b92915050565b5f60035f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61020a826101e1565b9050919050565b61021a81610200565b8114610224575f5ffd5b50565b5f8151905061023581610211565b92915050565b5f602082840312156102505761024f6101dd565b5b5f61025d84828501610227565b91505092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806102e157607f821691505b6020821081036102f4576102f361029d565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026103567fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261031b565b610360868361031b565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f6103a461039f61039a84610378565b610381565b610378565b9050919050565b5f819050919050565b6103bd8361038a565b6103d16103c9826103ab565b848454610327565b825550505050565b5f5f905090565b6103e86103d9565b6103f38184846103b4565b505050565b5b818110156104165761040b5f826103e0565b6001810190506103f9565b5050565b601f82111561045b5761042c816102fa565b6104358461030c565b81016020851015610444578190505b6104586104508561030c565b8301826103f8565b50505b505050565b5f82821c905092915050565b5f61047b5f1984600802610460565b1980831691505092915050565b5f610493838361046c565b9150826002028217905092915050565b6104ac82610266565b67ffffffffffffffff8111156104c5576104c4610270565b5b6104cf82546102ca565b6104da82828561041a565b5f60209050601f83116001811461050b575f84156104f9578287015190505b6105038582610488565b86555061056a565b601f198416610519866102fa565b5f5b828110156105405784890151825560018201915060208501945060208101905061051b565b8683101561055d5784890151610559601f89168261046c565b8355505b6001600288020188555050505b505050505050565b6125878061057f5f395ff3fe608060405234801561000f575f5ffd5b50600436106100f2575f3560e01c806336568abe11610095578063a22cb46511610064578063a22cb465146102a4578063d547741f146102c0578063e985e9c5146102dc578063f242432a1461030c576100f2565b806336568abe1461020a5780634e1273f41461022657806391d1485414610256578063a217fddf14610286576100f2565b8063156e29f6116100d1578063156e29f614610186578063248a9ca3146101a25780632eb2c2d6146101d25780632f2ff15d146101ee576100f2565b8062fdd58e146100f657806301ffc9a7146101265780630e89341c14610156575b5f5ffd5b610110600480360381019061010b919061191a565b610328565b60405161011d9190611967565b60405180910390f35b610140600480360381019061013b91906119d5565b61037d565b60405161014d9190611a1a565b60405180910390f35b610170600480360381019061016b9190611a33565b61038e565b60405161017d9190611ace565b60405180910390f35b6101a0600480360381019061019b9190611aee565b610420565b005b6101bc60048036038101906101b79190611b71565b61044c565b6040516101c99190611bab565b60405180910390f35b6101ec60048036038101906101e79190611db4565b610469565b005b61020860048036038101906102039190611e7f565b610510565b005b610224600480360381019061021f9190611e7f565b610532565b005b610240600480360381019061023b9190611f7d565b6105ad565b60405161024d91906120aa565b60405180910390f35b610270600480360381019061026b9190611e7f565b6106b7565b60405161027d9190611a1a565b60405180910390f35b61028e61071b565b60405161029b9190611bab565b60405180910390f35b6102be60048036038101906102b991906120f4565b610721565b005b6102da60048036038101906102d59190611e7f565b610737565b005b6102f660048036038101906102f19190612132565b610759565b6040516103039190611a1a565b60405180910390f35b61032660048036038101906103219190612170565b6107e7565b005b5f5f5f8381526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b5f6103878261088e565b9050919050565b60606002805461039d90612230565b80601f01602080910402602001604051908101604052809291908181526020018280546103c990612230565b80156104145780601f106103eb57610100808354040283529160200191610414565b820191905f5260205f20905b8154815290600101906020018083116103f757829003601f168201915b50505050509050919050565b5f5f1b61042c81610907565b61044684848460405180602001604052805f81525061091b565b50505050565b5f60035f8381526020019081526020015f20600101549050919050565b5f6104726109b0565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16141580156104b757506104b58682610759565b155b156104fb5780866040517fe237d9220000000000000000000000000000000000000000000000000000000081526004016104f292919061226f565b60405180910390fd5b61050886868686866109b7565b505050505050565b6105198261044c565b61052281610907565b61052c8383610aab565b50505050565b61053a6109b0565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461059e576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105a88282610b95565b505050565b606081518351146105f957815183516040517f5b0599910000000000000000000000000000000000000000000000000000000081526004016105f0929190612296565b60405180910390fd5b5f835167ffffffffffffffff81111561061557610614611bc8565b5b6040519080825280602002602001820160405280156106435781602001602082028036833780820191505090505b5090505f5f90505b84518110156106ac5761068261066a8287610c7f90919063ffffffff16565b61067d8387610c9290919063ffffffff16565b610328565b828281518110610695576106946122bd565b5b60200260200101818152505080600101905061064b565b508091505092915050565b5f60035f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f5f1b81565b61073361072c6109b0565b8383610ca5565b5050565b6107408261044c565b61074981610907565b6107538383610b95565b50505050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f6107f06109b0565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415801561083557506108338682610759565b155b156108795780866040517fe237d92200000000000000000000000000000000000000000000000000000000815260040161087092919061226f565b60405180910390fd5b6108868686868686610e0e565b505050505050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061090057506108ff82610f14565b5b9050919050565b610918816109136109b0565b610ff5565b50565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361098b575f6040517f57f447ce00000000000000000000000000000000000000000000000000000000815260040161098291906122ea565b60405180910390fd5b5f5f6109978585611046565b915091506109a85f87848487611076565b505050505050565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610a27575f6040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401610a1e91906122ea565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610a97575f6040517f01a83514000000000000000000000000000000000000000000000000000000008152600401610a8e91906122ea565b60405180910390fd5b610aa48585858585611076565b5050505050565b5f610ab683836106b7565b610b8b57600160035f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550610b286109b0565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610b8f565b5f90505b92915050565b5f610ba083836106b7565b15610c75575f60035f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550610c126109b0565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050610c79565b5f90505b92915050565b5f60208202602084010151905092915050565b5f60208202602084010151905092915050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d15575f6040517fced3e100000000000000000000000000000000000000000000000000000000008152600401610d0c91906122ea565b60405180910390fd5b8060015f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e019190611a1a565b60405180910390a3505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610e7e575f6040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401610e7591906122ea565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610eee575f6040517f01a83514000000000000000000000000000000000000000000000000000000008152600401610ee591906122ea565b60405180910390fd5b5f5f610efa8585611046565b91509150610f0b8787848487611076565b50505050505050565b5f7fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610fde57507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610fee5750610fed82611122565b5b9050919050565b610fff82826106b7565b6110425780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401611039929190612303565b60405180910390fd5b5050565b60608060405191506001825283602083015260408201905060018152826020820152604081016040529250929050565b6110828585858561118b565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461111b575f6110be6109b0565b9050600184510361110a575f6110dd5f86610c9290919063ffffffff16565b90505f6110f35f86610c9290919063ffffffff16565b905061110383898985858961151e565b5050611119565b6111188187878787876116cd565b5b505b5050505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b80518251146111d557815181516040517f5b0599910000000000000000000000000000000000000000000000000000000081526004016111cc929190612296565b60405180910390fd5b5f6111de6109b0565b90505f5f90505b83518110156113dd575f6112028286610c9290919063ffffffff16565b90505f6112188386610c9290919063ffffffff16565b90505f73ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff161461133b575f5f5f8481526020019081526020015f205f8a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156112e757888183856040517f03dee4c50000000000000000000000000000000000000000000000000000000081526004016112de949392919061232a565b60405180910390fd5b8181035f5f8581526020019081526020015f205f8b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16146113d057805f5f8481526020019081526020015f205f8973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546113c8919061239a565b925050819055505b50508060010190506111e5565b506001835103611498575f6113fb5f85610c9290919063ffffffff16565b90505f6114115f85610c9290919063ffffffff16565b90508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051611489929190612296565b60405180910390a45050611517565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb868660405161150e9291906123cd565b60405180910390a45b5050505050565b5f8473ffffffffffffffffffffffffffffffffffffffff163b11156116c5578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b815260040161157e959493929190612454565b6020604051808303815f875af19250505080156115b957506040513d601f19601f820116820180604052508101906115b691906124c0565b60015b61163a573d805f81146115e7576040519150601f19603f3d011682016040523d82523d5f602084013e6115ec565b606091505b505f81510361163257846040517f57f447ce00000000000000000000000000000000000000000000000000000000815260040161162991906122ea565b60405180910390fd5b805160208201fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146116c357846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016116ba91906122ea565b60405180910390fd5b505b505050505050565b5f8473ffffffffffffffffffffffffffffffffffffffff163b1115611874578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b815260040161172d9594939291906124eb565b6020604051808303815f875af192505050801561176857506040513d601f19601f8201168201806040525081019061176591906124c0565b60015b6117e9573d805f8114611796576040519150601f19603f3d011682016040523d82523d5f602084013e61179b565b606091505b505f8151036117e157846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016117d891906122ea565b60405180910390fd5b805160208201fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461187257846040517f57f447ce00000000000000000000000000000000000000000000000000000000815260040161186991906122ea565b60405180910390fd5b505b505050505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6118b68261188d565b9050919050565b6118c6816118ac565b81146118d0575f5ffd5b50565b5f813590506118e1816118bd565b92915050565b5f819050919050565b6118f9816118e7565b8114611903575f5ffd5b50565b5f81359050611914816118f0565b92915050565b5f5f604083850312156119305761192f611885565b5b5f61193d858286016118d3565b925050602061194e85828601611906565b9150509250929050565b611961816118e7565b82525050565b5f60208201905061197a5f830184611958565b92915050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6119b481611980565b81146119be575f5ffd5b50565b5f813590506119cf816119ab565b92915050565b5f602082840312156119ea576119e9611885565b5b5f6119f7848285016119c1565b91505092915050565b5f8115159050919050565b611a1481611a00565b82525050565b5f602082019050611a2d5f830184611a0b565b92915050565b5f60208284031215611a4857611a47611885565b5b5f611a5584828501611906565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611aa082611a5e565b611aaa8185611a68565b9350611aba818560208601611a78565b611ac381611a86565b840191505092915050565b5f6020820190508181035f830152611ae68184611a96565b905092915050565b5f5f5f60608486031215611b0557611b04611885565b5b5f611b12868287016118d3565b9350506020611b2386828701611906565b9250506040611b3486828701611906565b9150509250925092565b5f819050919050565b611b5081611b3e565b8114611b5a575f5ffd5b50565b5f81359050611b6b81611b47565b92915050565b5f60208284031215611b8657611b85611885565b5b5f611b9384828501611b5d565b91505092915050565b611ba581611b3e565b82525050565b5f602082019050611bbe5f830184611b9c565b92915050565b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b611bfe82611a86565b810181811067ffffffffffffffff82111715611c1d57611c1c611bc8565b5b80604052505050565b5f611c2f61187c565b9050611c3b8282611bf5565b919050565b5f67ffffffffffffffff821115611c5a57611c59611bc8565b5b602082029050602081019050919050565b5f5ffd5b5f611c81611c7c84611c40565b611c26565b90508083825260208201905060208402830185811115611ca457611ca3611c6b565b5b835b81811015611ccd5780611cb98882611906565b845260208401935050602081019050611ca6565b5050509392505050565b5f82601f830112611ceb57611cea611bc4565b5b8135611cfb848260208601611c6f565b91505092915050565b5f5ffd5b5f67ffffffffffffffff821115611d2257611d21611bc8565b5b611d2b82611a86565b9050602081019050919050565b828183375f83830152505050565b5f611d58611d5384611d08565b611c26565b905082815260208101848484011115611d7457611d73611d04565b5b611d7f848285611d38565b509392505050565b5f82601f830112611d9b57611d9a611bc4565b5b8135611dab848260208601611d46565b91505092915050565b5f5f5f5f5f60a08688031215611dcd57611dcc611885565b5b5f611dda888289016118d3565b9550506020611deb888289016118d3565b945050604086013567ffffffffffffffff811115611e0c57611e0b611889565b5b611e1888828901611cd7565b935050606086013567ffffffffffffffff811115611e3957611e38611889565b5b611e4588828901611cd7565b925050608086013567ffffffffffffffff811115611e6657611e65611889565b5b611e7288828901611d87565b9150509295509295909350565b5f5f60408385031215611e9557611e94611885565b5b5f611ea285828601611b5d565b9250506020611eb3858286016118d3565b9150509250929050565b5f67ffffffffffffffff821115611ed757611ed6611bc8565b5b602082029050602081019050919050565b5f611efa611ef584611ebd565b611c26565b90508083825260208201905060208402830185811115611f1d57611f1c611c6b565b5b835b81811015611f465780611f3288826118d3565b845260208401935050602081019050611f1f565b5050509392505050565b5f82601f830112611f6457611f63611bc4565b5b8135611f74848260208601611ee8565b91505092915050565b5f5f60408385031215611f9357611f92611885565b5b5f83013567ffffffffffffffff811115611fb057611faf611889565b5b611fbc85828601611f50565b925050602083013567ffffffffffffffff811115611fdd57611fdc611889565b5b611fe985828601611cd7565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b612025816118e7565b82525050565b5f612036838361201c565b60208301905092915050565b5f602082019050919050565b5f61205882611ff3565b6120628185611ffd565b935061206d8361200d565b805f5b8381101561209d578151612084888261202b565b975061208f83612042565b925050600181019050612070565b5085935050505092915050565b5f6020820190508181035f8301526120c2818461204e565b905092915050565b6120d381611a00565b81146120dd575f5ffd5b50565b5f813590506120ee816120ca565b92915050565b5f5f6040838503121561210a57612109611885565b5b5f612117858286016118d3565b9250506020612128858286016120e0565b9150509250929050565b5f5f6040838503121561214857612147611885565b5b5f612155858286016118d3565b9250506020612166858286016118d3565b9150509250929050565b5f5f5f5f5f60a0868803121561218957612188611885565b5b5f612196888289016118d3565b95505060206121a7888289016118d3565b94505060406121b888828901611906565b93505060606121c988828901611906565b925050608086013567ffffffffffffffff8111156121ea576121e9611889565b5b6121f688828901611d87565b9150509295509295909350565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061224757607f821691505b60208210810361225a57612259612203565b5b50919050565b612269816118ac565b82525050565b5f6040820190506122825f830185612260565b61228f6020830184612260565b9392505050565b5f6040820190506122a95f830185611958565b6122b66020830184611958565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6020820190506122fd5f830184612260565b92915050565b5f6040820190506123165f830185612260565b6123236020830184611b9c565b9392505050565b5f60808201905061233d5f830187612260565b61234a6020830186611958565b6123576040830185611958565b6123646060830184611958565b95945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6123a4826118e7565b91506123af836118e7565b92508282019050808211156123c7576123c661236d565b5b92915050565b5f6040820190508181035f8301526123e5818561204e565b905081810360208301526123f9818461204e565b90509392505050565b5f81519050919050565b5f82825260208201905092915050565b5f61242682612402565b612430818561240c565b9350612440818560208601611a78565b61244981611a86565b840191505092915050565b5f60a0820190506124675f830188612260565b6124746020830187612260565b6124816040830186611958565b61248e6060830185611958565b81810360808301526124a0818461241c565b90509695505050505050565b5f815190506124ba816119ab565b92915050565b5f602082840312156124d5576124d4611885565b5b5f6124e2848285016124ac565b91505092915050565b5f60a0820190506124fe5f830188612260565b61250b6020830187612260565b818103604083015261251d818661204e565b90508181036060830152612531818561204e565b90508181036080830152612545818461241c565b9050969550505050505056fea2646970667358221220b3de28f25da3d88a643015a4cf3c18e697c482e23224cf52fe788fc08bd83b5764736f6c634300081c0033"
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
              "internalType": "address",
              "name": "_initialOwner",
              "type": "address"
            },
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
        }
      ],
      "bytecode": "0x60c060405234801561000f575f5ffd5b50604051613225380380613225833981810160405281019061003191906102c0565b60015f8190555061004a5f5f1b846100cf60201b60201c565b5081608081815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508260045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050610310565b5f6100e083836101c460201b60201c565b6101ba576001805f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061015761022860201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506101be565b5f90505b92915050565b5f60015f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61025c82610233565b9050919050565b61026c81610252565b8114610276575f5ffd5b50565b5f8151905061028781610263565b92915050565b5f819050919050565b61029f8161028d565b81146102a9575f5ffd5b50565b5f815190506102ba81610296565b92915050565b5f5f5f606084860312156102d7576102d661022f565b5b5f6102e486828701610279565b93505060206102f5868287016102ac565b925050604061030686828701610279565b9150509250925092565b60805160a051612eca61035b5f395f81816105960152818161068301528181610fb5015281816110010152818161169d015261191201525f818161047e01526111e80152612eca5ff3fe608060405234801561000f575f5ffd5b5060043610610114575f3560e01c8063787dce3d116100a0578063cddc1bc11161006f578063cddc1bc1146102ca578063d3f494cc146102e6578063d547741f14610318578063d898aaf214610334578063e74b981b1461035057610114565b8063787dce3d1461024257806391d148541461025e578063a217fddf1461028e578063a6a3b5b4146102ac57610114565b80633013ce29116100e75780633013ce29146101b057806335659fb8146101ce57806336568abe146101ec5780633bbb280614610208578063469048401461022457610114565b806301ffc9a714610118578063058a56ac14610148578063248a9ca3146101645780632f2ff15d14610194575b5f5ffd5b610132600480360381019061012d91906120f2565b61036c565b60405161013f9190612137565b60405180910390f35b610162600480360381019061015d91906121dd565b61037d565b005b61017e6004803603810190610179919061224e565b610642565b60405161018b9190612288565b60405180910390f35b6101ae60048036038101906101a991906122a1565b61065f565b005b6101b8610681565b6040516101c5919061233a565b60405180910390f35b6101d66106a5565b6040516101e39190612362565b60405180910390f35b610206600480360381019061020191906122a1565b6106ab565b005b610222600480360381019061021d919061237b565b610726565b005b61022c6110c4565b60405161023991906123da565b60405180910390f35b61025c600480360381019061025791906123f3565b6110e9565b005b610278600480360381019061027391906122a1565b61117c565b6040516102859190612137565b60405180910390f35b6102966111e0565b6040516102a39190612288565b60405180910390f35b6102b46111e6565b6040516102c19190612362565b60405180910390f35b6102e460048036038101906102df919061237b565b61120a565b005b61030060048036038101906102fb919061237b565b611755565b60405161030f9392919061241e565b60405180910390f35b610332600480360381019061032d91906122a1565b611791565b005b61034e60048036038101906103499190612453565b6117b3565b005b61036a600480360381019061036591906124b7565b611a8e565b005b5f61037682611b8f565b9050919050565b610385611c08565b5f60025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206040518060600160405290815f82015481526020016001820154815260200160028201548152505090505f815f01511161047c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104739061253c565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081604001516104ac9190612587565b4210156104ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e590612604565b60405180910390fd5b60025f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f5f82015f9055600182015f9055600282015f905550506105da33825f01517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611c4c9092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d060405160405180910390a45061063e611ccb565b5050565b5f60015f8381526020019081526020015f20600101549050919050565b61066882610642565b61067181611cd4565b61067b8383611ce8565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60035481565b6106b3611dd1565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610717576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107218282611dd8565b505050565b61072e611c08565b5f60025f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206040518060600160405290815f82015481526020016001820154815260200160028201548152505090505f815f015111610825576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081c9061266c565b60405180910390fd5b60025f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f5f82015f9055600182015f9055600282015f905550508373ffffffffffffffffffffffffffffffffffffffff166301ffc9a76380ac58cd6040518263ffffffff1660e01b815260040161090091906126cf565b602060405180830381865afa15801561091b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061093f9190612712565b15610c4a57600181602001511461098b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098290612787565b60405180910390fd5b5f8490503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e866040518263ffffffff1660e01b81526004016109df9190612362565b602060405180830381865afa1580156109fa573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a1e91906127b9565b73ffffffffffffffffffffffffffffffffffffffff1614610a74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6b9061282e565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b8152600401610aaf92919061284c565b602060405180830381865afa158015610aca573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aee9190612712565b80610b9b57503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663081812fc866040518263ffffffff1660e01b8152600401610b449190612362565b602060405180830381865afa158015610b5f573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b8391906127b9565b73ffffffffffffffffffffffffffffffffffffffff16145b610bda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd1906128e3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166342842e0e3385876040518463ffffffff1660e01b8152600401610c1793929190612901565b5f604051808303815f87803b158015610c2e575f5ffd5b505af1158015610c40573d5f5f3e3d5ffd5b5050505050610ef9565b8373ffffffffffffffffffffffffffffffffffffffff166301ffc9a763d9b67a266040518263ffffffff1660e01b8152600401610c87919061296f565b602060405180830381865afa158015610ca2573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cc69190612712565b15610ebd575f84905081602001518173ffffffffffffffffffffffffffffffffffffffff1662fdd58e33876040518363ffffffff1660e01b8152600401610d0e929190612988565b602060405180830381865afa158015610d29573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d4d91906129c3565b1015610d8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8590612a38565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b8152600401610dc992919061284c565b602060405180830381865afa158015610de4573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e089190612712565b610e47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3e906128e3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663f242432a33858786602001516040518563ffffffff1660e01b8152600401610e8a9493929190612a89565b5f604051808303815f87803b158015610ea1575f5ffd5b505af1158015610eb3573d5f5f3e3d5ffd5b5050505050610ef8565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eef90612b29565b60405180910390fd5b5b5f612710600354835f0151610f0e9190612b47565b610f189190612bb5565b90505f81835f0151610f2a9190612be5565b90505f82118015610f8857505f73ffffffffffffffffffffffffffffffffffffffff1660045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b15610ffa57610ff960045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611c4c9092919063ffffffff16565b5b61104533827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611c4c9092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff16858773ffffffffffffffffffffffffffffffffffffffff167f638ccc33f01dbe1c8984fad210388d471140a38a383ddf1b14eab37ffdc533a3865f015187602001516040516110ac929190612c18565b60405180910390a45050506110bf611ccb565b505050565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f5f1b6110f581611cd4565b6103e882111561113a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113190612c89565b60405180910390fd5b816003819055507fd10d75876659a287a59a6ccfa2e3fff42f84d94b542837acd30bc184d562de40826040516111709190612362565b60405180910390a15050565b5f60015f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f5f1b81565b7f000000000000000000000000000000000000000000000000000000000000000081565b611212611c08565b5f60025f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206040518060600160405290815f82015481526020016001820154815260200160028201548152505090505f815f015111611309576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113009061266c565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff166301ffc9a76380ac58cd6040518263ffffffff1660e01b815260040161134691906126cf565b602060405180830381865afa158015611361573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113859190612712565b15611474573373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b81526004016113da9190612362565b602060405180830381865afa1580156113f5573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061141991906127b9565b73ffffffffffffffffffffffffffffffffffffffff161461146f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114669061282e565b60405180910390fd5b6115f5565b8373ffffffffffffffffffffffffffffffffffffffff166301ffc9a763d9b67a266040518263ffffffff1660e01b81526004016114b1919061296f565b602060405180830381865afa1580156114cc573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114f09190612712565b156115b95780602001518473ffffffffffffffffffffffffffffffffffffffff1662fdd58e33866040518363ffffffff1660e01b8152600401611534929190612988565b602060405180830381865afa15801561154f573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061157391906129c3565b10156115b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ab90612a38565b60405180910390fd5b6115f4565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115eb90612b29565b60405180910390fd5b5b60025f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f5f82015f9055600182015f9055600282015f905550506116e182825f01517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611c4c9092919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff16838573ffffffffffffffffffffffffffffffffffffffff167f5afbd91effca7118fb7b366108af8d39212ec8090bfa6913bfbf48552455bd303360405161173f91906123da565b60405180910390a450611750611ccb565b505050565b6002602052825f5260405f20602052815f5260405f20602052805f5260405f205f925092505050805f0154908060010154908060020154905083565b61179a82610642565b6117a381611cd4565b6117ad8383611dd8565b50505050565b6117bb611c08565b5f81116117fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f490612d17565b60405180910390fd5b5f821161183f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183690612d7f565b60405180910390fd5b5f60025f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f01541461190a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190190612de7565b60405180910390fd5b6119573330837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16611ec2909392919063ffffffff16565b60405180606001604052808281526020018381526020014281525060025f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f820151815f015560208201518160010155604082015181600201559050503373ffffffffffffffffffffffffffffffffffffffff16838573ffffffffffffffffffffffffffffffffffffffff167f47945eee7842e358dc0711bce7311e7dd82694f55b0851ddef3a399d172a8cf78486604051611a78929190612c18565b60405180910390a4611a88611ccb565b50505050565b5f5f1b611a9a81611cd4565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aff90612e4f565b60405180910390fd5b8160045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff167f7a7b5a0a132f9e0581eb8527f66eae9ee89c2a3e79d4ac7e41a1f1f4d48a7fc260405160405180910390a25050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611c015750611c0082611f44565b5b9050919050565b60025f5403611c43576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f81905550565b611cc6838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401611c7f929190612988565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611fad565b505050565b60015f81905550565b611ce581611ce0611dd1565b612048565b50565b5f611cf3838361117c565b611dc7576001805f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550611d64611dd1565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050611dcb565b5f90505b92915050565b5f33905090565b5f611de3838361117c565b15611eb8575f60015f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550611e55611dd1565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a460019050611ebc565b5f90505b92915050565b611f3e848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401611ef793929190612901565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611fad565b50505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f5f60205f8451602086015f885af180611fcc576040513d5f823e3d81fd5b3d92505f519150505f8214611fe5576001811415612000565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b1561204257836040517f5274afe700000000000000000000000000000000000000000000000000000000815260040161203991906123da565b60405180910390fd5b50505050565b612052828261117c565b6120955780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161208c929190612e6d565b60405180910390fd5b5050565b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6120d18161209d565b81146120db575f5ffd5b50565b5f813590506120ec816120c8565b92915050565b5f6020828403121561210757612106612099565b5b5f612114848285016120de565b91505092915050565b5f8115159050919050565b6121318161211d565b82525050565b5f60208201905061214a5f830184612128565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61217982612150565b9050919050565b6121898161216f565b8114612193575f5ffd5b50565b5f813590506121a481612180565b92915050565b5f819050919050565b6121bc816121aa565b81146121c6575f5ffd5b50565b5f813590506121d7816121b3565b92915050565b5f5f604083850312156121f3576121f2612099565b5b5f61220085828601612196565b9250506020612211858286016121c9565b9150509250929050565b5f819050919050565b61222d8161221b565b8114612237575f5ffd5b50565b5f8135905061224881612224565b92915050565b5f6020828403121561226357612262612099565b5b5f6122708482850161223a565b91505092915050565b6122828161221b565b82525050565b5f60208201905061229b5f830184612279565b92915050565b5f5f604083850312156122b7576122b6612099565b5b5f6122c48582860161223a565b92505060206122d585828601612196565b9150509250929050565b5f819050919050565b5f6123026122fd6122f884612150565b6122df565b612150565b9050919050565b5f612313826122e8565b9050919050565b5f61232482612309565b9050919050565b6123348161231a565b82525050565b5f60208201905061234d5f83018461232b565b92915050565b61235c816121aa565b82525050565b5f6020820190506123755f830184612353565b92915050565b5f5f5f6060848603121561239257612391612099565b5b5f61239f86828701612196565b93505060206123b0868287016121c9565b92505060406123c186828701612196565b9150509250925092565b6123d48161216f565b82525050565b5f6020820190506123ed5f8301846123cb565b92915050565b5f6020828403121561240857612407612099565b5b5f612415848285016121c9565b91505092915050565b5f6060820190506124315f830186612353565b61243e6020830185612353565b61244b6040830184612353565b949350505050565b5f5f5f5f6080858703121561246b5761246a612099565b5b5f61247887828801612196565b9450506020612489878288016121c9565b935050604061249a878288016121c9565b92505060606124ab878288016121c9565b91505092959194509250565b5f602082840312156124cc576124cb612099565b5b5f6124d984828501612196565b91505092915050565b5f82825260208201905092915050565b7f596f7520646964206e6f74206d616b652074686973206f6666657200000000005f82015250565b5f612526601b836124e2565b9150612531826124f2565b602082019050919050565b5f6020820190508181035f8301526125538161251a565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f612591826121aa565b915061259c836121aa565b92508282019050808211156125b4576125b361255a565b5b92915050565b7f526566756e6420706572696f64206e6f742079657420656c61707365640000005f82015250565b5f6125ee601d836124e2565b91506125f9826125ba565b602082019050919050565b5f6020820190508181035f83015261261b816125e2565b9050919050565b7f4e6f2076616c6964206f666665722065786973747300000000000000000000005f82015250565b5f6126566015836124e2565b915061266182612622565b602082019050919050565b5f6020820190508181035f8301526126838161264a565b9050919050565b5f819050919050565b5f8160e01b9050919050565b5f6126b96126b46126af8461268a565b612693565b61209d565b9050919050565b6126c98161269f565b82525050565b5f6020820190506126e25f8301846126c0565b92915050565b6126f18161211d565b81146126fb575f5ffd5b50565b5f8151905061270c816126e8565b92915050565b5f6020828403121561272757612726612099565b5b5f612734848285016126fe565b91505092915050565b7f455243373231206f66666572206d757374206861766520616d6f756e742031005f82015250565b5f612771601f836124e2565b915061277c8261273d565b602082019050919050565b5f6020820190508181035f83015261279e81612765565b9050919050565b5f815190506127b381612180565b92915050565b5f602082840312156127ce576127cd612099565b5b5f6127db848285016127a5565b91505092915050565b7f596f7520646f206e6f74206f776e2074686973204e46540000000000000000005f82015250565b5f6128186017836124e2565b9150612823826127e4565b602082019050919050565b5f6020820190508181035f8301526128458161280c565b9050919050565b5f60408201905061285f5f8301856123cb565b61286c60208301846123cb565b9392505050565b7f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366655f8201527f72204e4654000000000000000000000000000000000000000000000000000000602082015250565b5f6128cd6025836124e2565b91506128d882612873565b604082019050919050565b5f6020820190508181035f8301526128fa816128c1565b9050919050565b5f6060820190506129145f8301866123cb565b61292160208301856123cb565b61292e6040830184612353565b949350505050565b5f819050919050565b5f61295961295461294f84612936565b612693565b61209d565b9050919050565b6129698161293f565b82525050565b5f6020820190506129825f830184612960565b92915050565b5f60408201905061299b5f8301856123cb565b6129a86020830184612353565b9392505050565b5f815190506129bd816121b3565b92915050565b5f602082840312156129d8576129d7612099565b5b5f6129e5848285016129af565b91505092915050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f612a226014836124e2565b9150612a2d826129ee565b602082019050919050565b5f6020820190508181035f830152612a4f81612a16565b9050919050565b5f82825260208201905092915050565b50565b5f612a745f83612a56565b9150612a7f82612a66565b5f82019050919050565b5f60a082019050612a9c5f8301876123cb565b612aa960208301866123cb565b612ab66040830185612353565b612ac36060830184612353565b8181036080830152612ad481612a69565b905095945050505050565b7f556e737570706f72746564204e465420747970650000000000000000000000005f82015250565b5f612b136014836124e2565b9150612b1e82612adf565b602082019050919050565b5f6020820190508181035f830152612b4081612b07565b9050919050565b5f612b51826121aa565b9150612b5c836121aa565b9250828202612b6a816121aa565b91508282048414831517612b8157612b8061255a565b5b5092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f612bbf826121aa565b9150612bca836121aa565b925082612bda57612bd9612b88565b5b828204905092915050565b5f612bef826121aa565b9150612bfa836121aa565b9250828203905081811115612c1257612c1161255a565b5b92915050565b5f604082019050612c2b5f830185612353565b612c386020830184612353565b9392505050565b7f4665652063616e6e6f74206578636565642031302500000000000000000000005f82015250565b5f612c736015836124e2565b9150612c7e82612c3f565b602082019050919050565b5f6020820190508181035f830152612ca081612c67565b9050919050565b7f4f66666572207072696365206d7573742062652067726561746572207468616e5f8201527f2030000000000000000000000000000000000000000000000000000000000000602082015250565b5f612d016022836124e2565b9150612d0c82612ca7565b604082019050919050565b5f6020820190508181035f830152612d2e81612cf5565b9050919050565b7f416d6f756e74206d7573742062652067726561746572207468616e20300000005f82015250565b5f612d69601d836124e2565b9150612d7482612d35565b602082019050919050565b5f6020820190508181035f830152612d9681612d5d565b9050919050565b7f4f6666657220616c7265616479206578697374730000000000000000000000005f82015250565b5f612dd16014836124e2565b9150612ddc82612d9d565b602082019050919050565b5f6020820190508181035f830152612dfe81612dc5565b9050919050565b7f496e76616c6964206164647265737300000000000000000000000000000000005f82015250565b5f612e39600f836124e2565b9150612e4482612e05565b602082019050919050565b5f6020820190508181035f830152612e6681612e2d565b9050919050565b5f604082019050612e805f8301856123cb565b612e8d6020830184612279565b939250505056fea264697066735822122008d3f4df7fc34a2560095b507930f005be6c6454bb9894710dab01477aaa002964736f6c634300081c0033"
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
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
    },
    "chain-31337": {
      "BragToken": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "DonationReceipt": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      "ExhibitRegistry": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      "Treasury": "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      "BragNFT": "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      "NFTMarketplace": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
    }
  }
};