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
      "bytecode": "0x60a060405234801561000f575f5ffd5b50604051610743380380610743833981810160405281019061003191906100c9565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506100f4565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100988261006f565b9050919050565b6100a88161008e565b81146100b2575f5ffd5b50565b5f815190506100c38161009f565b92915050565b5f602082840312156100de576100dd61006b565b5b5f6100eb848285016100b5565b91505092915050565b6080516106316101125f395f81816074015261013601526106315ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c806389a3027114610038578063b792eca114610056575b5f5ffd5b610040610072565b60405161004d9190610326565b60405180910390f35b610070600480360381019061006b91906103fd565b610096565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b8181905084849050146100de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100d5906104d5565b60405180910390fd5b5f5f90505b848490508110156101885761017b33868684818110610105576101046104f3565b5b905060200201602081019061011a919061055b565b85858581811061012d5761012c6104f3565b5b905060200201357f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661018f909392919063ffffffff16565b80806001019150506100e3565b5050505050565b61020b848573ffffffffffffffffffffffffffffffffffffffff166323b872dd8686866040516024016101c4939291906105ad565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610211565b50505050565b5f5f60205f8451602086015f885af180610230576040513d5f823e3d81fd5b3d92505f519150505f8214610249576001811415610264565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b156102a657836040517f5274afe700000000000000000000000000000000000000000000000000000000815260040161029d91906105e2565b60405180910390fd5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f6102ee6102e96102e4846102ac565b6102cb565b6102ac565b9050919050565b5f6102ff826102d4565b9050919050565b5f610310826102f5565b9050919050565b61032081610306565b82525050565b5f6020820190506103395f830184610317565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f84011261036857610367610347565b5b8235905067ffffffffffffffff8111156103855761038461034b565b5b6020830191508360208202830111156103a1576103a061034f565b5b9250929050565b5f5f83601f8401126103bd576103bc610347565b5b8235905067ffffffffffffffff8111156103da576103d961034b565b5b6020830191508360208202830111156103f6576103f561034f565b5b9250929050565b5f5f5f5f604085870312156104155761041461033f565b5b5f85013567ffffffffffffffff81111561043257610431610343565b5b61043e87828801610353565b9450945050602085013567ffffffffffffffff81111561046157610460610343565b5b61046d878288016103a8565b925092505092959194509250565b5f82825260208201905092915050565b7f4d69736d617463686564206172726179730000000000000000000000000000005f82015250565b5f6104bf60118361047b565b91506104ca8261048b565b602082019050919050565b5f6020820190508181035f8301526104ec816104b3565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f61052a826102ac565b9050919050565b61053a81610520565b8114610544575f5ffd5b50565b5f8135905061055581610531565b92915050565b5f602082840312156105705761056f61033f565b5b5f61057d84828501610547565b91505092915050565b61058f81610520565b82525050565b5f819050919050565b6105a781610595565b82525050565b5f6060820190506105c05f830186610586565b6105cd6020830185610586565b6105da604083018461059e565b949350505050565b5f6020820190506105f55f830184610586565b9291505056fea26469706673582212205825e7505a9e44daaf464eab12e5d2aa66159483cad4bfe056c8e3be7cb4de4b64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051614ecb380380614ecb833981810160405281019061003191906102ea565b826040518060400160405280600781526020017f427261674e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f425241474e465400000000000000000000000000000000000000000000000000815250815f90816100ac919061056e565b5080600190816100bc919061056e565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361012f575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610126919061064c565b60405180910390fd5b61013e8161019660201b60201c565b50600160088190555081600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600b81905550505050610665565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102868261025d565b9050919050565b6102968161027c565b81146102a0575f5ffd5b50565b5f815190506102b18161028d565b92915050565b5f819050919050565b6102c9816102b7565b81146102d3575f5ffd5b50565b5f815190506102e4816102c0565b92915050565b5f5f5f6060848603121561030157610300610259565b5b5f61030e868287016102a3565b935050602061031f868287016102a3565b9250506040610330868287016102d6565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806103b557607f821691505b6020821081036103c8576103c7610371565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261042a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826103ef565b61043486836103ef565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61046f61046a610465846102b7565b61044c565b6102b7565b9050919050565b5f819050919050565b61048883610455565b61049c61049482610476565b8484546103fb565b825550505050565b5f5f905090565b6104b36104a4565b6104be81848461047f565b505050565b5b818110156104e1576104d65f826104ab565b6001810190506104c4565b5050565b601f821115610526576104f7816103ce565b610500846103e0565b8101602085101561050f578190505b61052361051b856103e0565b8301826104c3565b50505b505050565b5f82821c905092915050565b5f6105465f198460080261052b565b1980831691505092915050565b5f61055e8383610537565b9150826002028217905092915050565b6105778261033a565b67ffffffffffffffff8111156105905761058f610344565b5b61059a825461039e565b6105a58282856104e5565b5f60209050601f8311600181146105d6575f84156105c4578287015190505b6105ce8582610553565b865550610635565b601f1984166105e4866103ce565b5f5b8281101561060b578489015182556001820191506020850194506020810190506105e6565b868310156106285784890151610624601f891682610537565b8355505b6001600288020188555050505b505050505050565b6106468161027c565b82525050565b5f60208201905061065f5f83018461063d565b92915050565b614859806106725f395ff3fe6080604052600436106101cc575f3560e01c806383943dc8116100f6578063c631724711610094578063da183afb11610063578063da183afb14610624578063e985e9c514610660578063f0f442601461069c578063f2fde38b146106c4576101cc565b8063c63172471461057a578063c87b56dd146105a2578063d3933c1c146105de578063d435b3a3146105fa576101cc565b806396d8f4f3116100d057806396d8f4f3146104e4578063a22cb4651461050e578063a6719b3a14610536578063b88d4fde14610552576101cc565b806383943dc8146104665780638da5cb5b1461049057806395d89b41146104ba576101cc565b806323b872dd1161016e5780636352211e1161013d5780636352211e1461039c57806364cb7e9c146103d857806370a0823114610414578063715018a614610450576101cc565b806323b872dd146102fa5780632eb9313e1461032257806342842e0e1461034a57806361d027b314610372576101cc565b8063095ea7b3116101aa578063095ea7b3146102725780630fd973ce1461029a5780631653441c146102b657806319bcef6d146102d2576101cc565b806301ffc9a7146101d057806306fdde031461020c578063081812fc14610236575b5f5ffd5b3480156101db575f5ffd5b506101f660048036038101906101f19190612d9a565b6106ec565b6040516102039190612ddf565b60405180910390f35b348015610217575f5ffd5b5061022061074c565b60405161022d9190612e68565b60405180910390f35b348015610241575f5ffd5b5061025c60048036038101906102579190612ebb565b6107db565b6040516102699190612f25565b60405180910390f35b34801561027d575f5ffd5b5061029860048036038101906102939190612f68565b6107f6565b005b6102b460048036038101906102af9190613007565b61080c565b005b6102d060048036038101906102cb9190613098565b610831565b005b3480156102dd575f5ffd5b506102f860048036038101906102f39190613116565b610855565b005b348015610305575f5ffd5b50610320600480360381019061031b9190613141565b6108a0565b005b34801561032d575f5ffd5b5061034860048036038101906103439190613116565b61099f565b005b348015610355575f5ffd5b50610370600480360381019061036b9190613141565b6109ea565b005b34801561037d575f5ffd5b50610386610a09565b6040516103939190612f25565b60405180910390f35b3480156103a7575f5ffd5b506103c260048036038101906103bd9190612ebb565b610a2e565b6040516103cf9190612f25565b60405180910390f35b3480156103e3575f5ffd5b506103fe60048036038101906103f99190612ebb565b610a3f565b60405161040b9190612e68565b60405180910390f35b34801561041f575f5ffd5b5061043a60048036038101906104359190613116565b610ada565b60405161044791906131a0565b60405180910390f35b34801561045b575f5ffd5b50610464610b90565b005b348015610471575f5ffd5b5061047a610ba3565b6040516104879190613214565b60405180910390f35b34801561049b575f5ffd5b506104a4610bc8565b6040516104b19190612f25565b60405180910390f35b3480156104c5575f5ffd5b506104ce610bf0565b6040516104db9190612e68565b60405180910390f35b3480156104ef575f5ffd5b506104f8610c80565b60405161050591906131a0565b60405180910390f35b348015610519575f5ffd5b50610534600480360381019061052f9190613257565b610c86565b005b610550600480360381019061054b9190613295565b610c9c565b005b34801561055d575f5ffd5b5061057860048036038101906105739190613460565b610cc2565b005b348015610585575f5ffd5b506105a0600480360381019061059b9190612ebb565b610ce7565b005b3480156105ad575f5ffd5b506105c860048036038101906105c39190612ebb565b610cf9565b6040516105d59190612e68565b60405180910390f35b6105f860048036038101906105f391906134e0565b610fd8565b005b348015610605575f5ffd5b5061060e610ffd565b60405161061b9190613591565b60405180910390f35b34801561062f575f5ffd5b5061064a60048036038101906106459190612ebb565b611022565b60405161065791906131a0565b60405180910390f35b34801561066b575f5ffd5b50610686600480360381019061068191906135aa565b611037565b6040516106939190612ddf565b60405180910390f35b3480156106a7575f5ffd5b506106c260048036038101906106bd9190613116565b6110c5565b005b3480156106cf575f5ffd5b506106ea60048036038101906106e59190613116565b61117e565b005b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610745575061074482611202565b5b9050919050565b60605f805461075a90613615565b80601f016020809104026020016040519081016040528092919081815260200182805461078690613615565b80156107d15780601f106107a8576101008083540402835291602001916107d1565b820191905f5260205f20905b8154815290600101906020018083116107b457829003601f168201915b5050505050905090565b5f6107e5826112e3565b506107ef82611369565b9050919050565b61080882826108036113a2565b6113a9565b5050565b6108146113bb565b61082285858585855f611401565b61082a61183f565b5050505050565b6108396113bb565b61084733858585855f611401565b61084f61183f565b50505050565b61085d611849565b80600c5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610910575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016109079190612f25565b60405180910390fd5b5f610923838361091e6113a2565b6118d0565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610999578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161099093929190613645565b60405180910390fd5b50505050565b6109a7611849565b80600d5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610a0483838360405180602001604052805f815250610cc2565b505050565b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f610a38826112e3565b9050919050565b600f602052805f5260405f205f915090508054610a5b90613615565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8790613615565b8015610ad25780601f10610aa957610100808354040283529160200191610ad2565b820191905f5260205f20905b815481529060010190602001808311610ab557829003601f168201915b505050505081565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b4b575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610b429190612f25565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610b98611849565b610ba15f611adb565b565b600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610bff90613615565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2b90613615565b8015610c765780601f10610c4d57610100808354040283529160200191610c76565b820191905f5260205f20905b815481529060010190602001808311610c5957829003601f168201915b5050505050905090565b600b5481565b610c98610c916113a2565b8383611b9e565b5050565b610ca46113bb565b610cb2868686868686611401565b610cba61183f565b505050505050565b610ccd8484846108a0565b610ce1610cd86113a2565b85858585611d07565b50505050565b610cef611849565b80600b8190555050565b6060610d04826112e3565b505f600e5f8481526020019081526020015f205490505f60405180602001604052805f81525090505f73ffffffffffffffffffffffffffffffffffffffff16600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e2657600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b63e6ac3836040518263ffffffff1660e01b8152600401610dda91906131a0565b5f60405180830381865afa925050508015610e1757506040513d5f823e3d601f19601f82011682018060405250810190610e1491906137d9565b60015b15610e255780606001519150505b5b60605f600f5f8781526020019081526020015f208054610e4590613615565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7190613615565b8015610ebc5780601f10610e9357610100808354040283529160200191610ebc565b820191905f5260205f20905b815481529060010190602001808311610e9f57829003601f168201915b505050505090505f81511115610ed457809150610f27565b5f610ede87611eb3565b90505f81511115610ef157809250610f25565b610f03610efe8886611fbe565b612023565b604051602001610f1391906138a4565b60405160208183030381529060405292505b505b5f610faa610f3488612050565b5f865111610f505760405180602001604052805f815250610f79565b610f598661211a565b604051602001610f69919061390f565b6040516020818303038152906040525b85610f838861211a565b604051602001610f969493929190613aee565b604051602081830303815290604052612023565b905080604051602001610fbd9190613bac565b60405160208183030381529060405295505050505050919050565b610fe06113bb565b610fee338686868686611401565b610ff661183f565b5050505050565b600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600e602052805f5260405f205f915090505481565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b6110cd611849565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361113b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113290613c17565b60405180910390fd5b80600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611186611849565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036111f6575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016111ed9190612f25565b60405180910390fd5b6111ff81611adb565b50565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806112cc57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806112dc57506112db82612467565b5b9050919050565b5f5f6112ee836124d0565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361136057826040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161135791906131a0565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b6113b68383836001612509565b505050565b6002600854036113f7576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600881905550565b5f73ffffffffffffffffffffffffffffffffffffffff16600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611490576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148790613c7f565b60405180910390fd5b600b543410156114d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114cc90613ce7565b60405180910390fd5b5f60095f8154809291906114e890613d32565b919050559050811561151a578383600f5f8481526020019081526020015f209182611514929190613f1a565b50611574565b5f848490501115611573576115728185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050506126c8565b5b5b5f600c5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d3fc986433348a8a6040518563ffffffff1660e01b81526004016115d59493929190614013565b6020604051808303815f875af11580156115f1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116159190614051565b905080600e5f8481526020019081526020015f20819055506116378883612722565b5f73ffffffffffffffffffffffffffffffffffffffff16600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461171557600d5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933346040518363ffffffff1660e01b81526004016116e792919061407c565b5f604051808303815f87803b1580156116fe575f5ffd5b505af1158015611710573d5f5f3e3d5ffd5b505050505b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163460405161175b906140d0565b5f6040518083038185875af1925050503d805f8114611795576040519150601f19603f3d011682016040523d82523d5f602084013e61179a565b606091505b50509050806117de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d59061412e565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f3773485858c8c60405161182c95949392919061414c565b60405180910390a2505050505050505050565b6001600881905550565b6118516113a2565b73ffffffffffffffffffffffffffffffffffffffff1661186f610bc8565b73ffffffffffffffffffffffffffffffffffffffff16146118ce576118926113a2565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016118c59190612f25565b60405180910390fd5b565b5f5f6118db846124d0565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461191c5761191b81848661273f565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146119a75761195b5f855f5f612509565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611a2657600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611c0e57816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401611c059190612f25565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611cfa9190612ddf565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115611eac578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401611d6594939291906141ea565b6020604051808303815f875af1925050508015611da057506040513d601f19601f82011682018060405250810190611d9d9190614248565b60015b611e21573d805f8114611dce576040519150601f19603f3d011682016040523d82523d5f602084013e611dd3565b606091505b505f815103611e1957836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611e109190612f25565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611eaa57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611ea19190612f25565b60405180910390fd5b505b5050505050565b6060611ebe826112e3565b505f60065f8481526020019081526020015f208054611edc90613615565b80601f0160208091040260200160405190810160405280929190818152602001828054611f0890613615565b8015611f535780601f10611f2a57610100808354040283529160200191611f53565b820191905f5260205f20905b815481529060010190602001808311611f3657829003601f168201915b505050505090505f611f63612802565b90505f815103611f77578192505050611fb9565b5f82511115611fab578082604051602001611f93929190614273565b60405160208183030381529060405292505050611fb9565b611fb484612818565b925050505b919050565b60605f5f835111611ff657611fd284612050565b604051602001611fe291906142e0565b604051602081830303815290604052611ff8565b825b90508060405160200161200b91906145c9565b60405160208183030381529060405291505092915050565b6060612049826040518060600160405280604081526020016147e460409139600161287e565b9050919050565b60605f600161205e84612a0d565b0190505f8167ffffffffffffffff81111561207c5761207b61333c565b5b6040519080825280601f01601f1916602001820160405280156120ae5781602001600182028036833780820191505090505b5090505f82602083010190505b60011561210f578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161210457612103614616565b5b0494505f85036120bb575b819350505050919050565b60605f8290505f815190505f5f90505f5f90505b82811015612222577f220000000000000000000000000000000000000000000000000000000000000084828151811061216a57612169614643565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061220157507f5c000000000000000000000000000000000000000000000000000000000000008482815181106121d2576121d1614643565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561221557818061221190613d32565b9250505b808060010191505061212e565b505f810361223557849350505050612462565b5f81836122429190614670565b67ffffffffffffffff81111561225b5761225a61333c565b5b6040519080825280601f01601f19166020018201604052801561228d5781602001600182028036833780820191505090505b5090505f5f90505f5f90505b84811015612458577f22000000000000000000000000000000000000000000000000000000000000008682815181106122d5576122d4614643565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061236c57507f5c0000000000000000000000000000000000000000000000000000000000000086828151811061233d5761233c614643565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156123e0577f5c0000000000000000000000000000000000000000000000000000000000000083838061239e90613d32565b9450815181106123b1576123b0614643565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505b8581815181106123f3576123f2614643565b5b602001015160f81c60f81b83838061240a90613d32565b94508151811061241d5761241c614643565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053508080600101915050612299565b5081955050505050505b919050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061254157505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15612673575f612550846112e3565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156125ba57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156125cd57506125cb8184611037565b155b1561260f57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016126069190612f25565b60405180910390fd5b811561267157838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b8060065f8481526020019081526020015f2090816126e691906146a3565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce78260405161271691906131a0565b60405180910390a15050565b61273b828260405180602001604052805f815250612b5e565b5050565b61274a838383612b81565b6127fd575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036127be57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016127b591906131a0565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016127f492919061407c565b60405180910390fd5b505050565b606060405180602001604052805f815250905090565b6060612823826112e3565b505f61282d612802565b90505f81511161284b5760405180602001604052805f815250612876565b8061285584612050565b604051602001612866929190614273565b6040516020818303038152906040525b915050919050565b60605f84510361289e5760405180602001604052805f8152509050612a06565b5f826128cf5760036002865160046128b69190614772565b6128c09190614670565b6128ca91906147b3565b6128f6565b6003600286516128df9190614670565b6128e991906147b3565b60046128f59190614772565b5b90505f8167ffffffffffffffff8111156129135761291261333c565b5b6040519080825280601f01601f1916602001820160405280156129455781602001600182028036833780820191505090505b509050600185016020820187885189016020810180515f82525b828410156129ba576003840193508351603f8160121c168701518653600186019550603f81600c1c168701518653600186019550603f8160061c168701518653600186019550603f811687015186536001860195505061295f565b80825289156129fa5760038c5106600181146129dd57600281146129f0576129f8565b603d6001870353603d60028703536129f8565b603d60018703535b505b50505050505080925050505b9392505050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612a69577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612a5f57612a5e614616565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612aa6576d04ee2d6d415b85acef81000000008381612a9c57612a9b614616565b5b0492506020810190505b662386f26fc100008310612ad557662386f26fc100008381612acb57612aca614616565b5b0492506010810190505b6305f5e1008310612afe576305f5e1008381612af457612af3614616565b5b0492506008810190505b6127108310612b23576127108381612b1957612b18614616565b5b0492506004810190505b60648310612b465760648381612b3c57612b3b614616565b5b0492506002810190505b600a8310612b55576001810190505b80915050919050565b612b688383612c41565b612b7c612b736113a2565b5f858585611d07565b505050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612c3857508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612bf95750612bf88484611037565b5b80612c3757508273ffffffffffffffffffffffffffffffffffffffff16612c1f83611369565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612cb1575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612ca89190612f25565b60405180910390fd5b5f612cbd83835f6118d0565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612d2f575f6040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401612d269190612f25565b60405180910390fd5b505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612d7981612d45565b8114612d83575f5ffd5b50565b5f81359050612d9481612d70565b92915050565b5f60208284031215612daf57612dae612d3d565b5b5f612dbc84828501612d86565b91505092915050565b5f8115159050919050565b612dd981612dc5565b82525050565b5f602082019050612df25f830184612dd0565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f612e3a82612df8565b612e448185612e02565b9350612e54818560208601612e12565b612e5d81612e20565b840191505092915050565b5f6020820190508181035f830152612e808184612e30565b905092915050565b5f819050919050565b612e9a81612e88565b8114612ea4575f5ffd5b50565b5f81359050612eb581612e91565b92915050565b5f60208284031215612ed057612ecf612d3d565b5b5f612edd84828501612ea7565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f612f0f82612ee6565b9050919050565b612f1f81612f05565b82525050565b5f602082019050612f385f830184612f16565b92915050565b612f4781612f05565b8114612f51575f5ffd5b50565b5f81359050612f6281612f3e565b92915050565b5f5f60408385031215612f7e57612f7d612d3d565b5b5f612f8b85828601612f54565b9250506020612f9c85828601612ea7565b9150509250929050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f840112612fc757612fc6612fa6565b5b8235905067ffffffffffffffff811115612fe457612fe3612faa565b5b60208301915083600182028301111561300057612fff612fae565b5b9250929050565b5f5f5f5f5f606086880312156130205761301f612d3d565b5b5f61302d88828901612f54565b955050602086013567ffffffffffffffff81111561304e5761304d612d41565b5b61305a88828901612fb2565b9450945050604086013567ffffffffffffffff81111561307d5761307c612d41565b5b61308988828901612fb2565b92509250509295509295909350565b5f5f5f5f604085870312156130b0576130af612d3d565b5b5f85013567ffffffffffffffff8111156130cd576130cc612d41565b5b6130d987828801612fb2565b9450945050602085013567ffffffffffffffff8111156130fc576130fb612d41565b5b61310887828801612fb2565b925092505092959194509250565b5f6020828403121561312b5761312a612d3d565b5b5f61313884828501612f54565b91505092915050565b5f5f5f6060848603121561315857613157612d3d565b5b5f61316586828701612f54565b935050602061317686828701612f54565b925050604061318786828701612ea7565b9150509250925092565b61319a81612e88565b82525050565b5f6020820190506131b35f830184613191565b92915050565b5f819050919050565b5f6131dc6131d76131d284612ee6565b6131b9565b612ee6565b9050919050565b5f6131ed826131c2565b9050919050565b5f6131fe826131e3565b9050919050565b61320e816131f4565b82525050565b5f6020820190506132275f830184613205565b92915050565b61323681612dc5565b8114613240575f5ffd5b50565b5f813590506132518161322d565b92915050565b5f5f6040838503121561326d5761326c612d3d565b5b5f61327a85828601612f54565b925050602061328b85828601613243565b9150509250929050565b5f5f5f5f5f5f608087890312156132af576132ae612d3d565b5b5f6132bc89828a01612f54565b965050602087013567ffffffffffffffff8111156132dd576132dc612d41565b5b6132e989828a01612fb2565b9550955050604087013567ffffffffffffffff81111561330c5761330b612d41565b5b61331889828a01612fb2565b9350935050606061332b89828a01613243565b9150509295509295509295565b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61337282612e20565b810181811067ffffffffffffffff821117156133915761339061333c565b5b80604052505050565b5f6133a3612d34565b90506133af8282613369565b919050565b5f67ffffffffffffffff8211156133ce576133cd61333c565b5b6133d782612e20565b9050602081019050919050565b828183375f83830152505050565b5f6134046133ff846133b4565b61339a565b9050828152602081018484840111156134205761341f613338565b5b61342b8482856133e4565b509392505050565b5f82601f83011261344757613446612fa6565b5b81356134578482602086016133f2565b91505092915050565b5f5f5f5f6080858703121561347857613477612d3d565b5b5f61348587828801612f54565b945050602061349687828801612f54565b93505060406134a787828801612ea7565b925050606085013567ffffffffffffffff8111156134c8576134c7612d41565b5b6134d487828801613433565b91505092959194509250565b5f5f5f5f5f606086880312156134f9576134f8612d3d565b5b5f86013567ffffffffffffffff81111561351657613515612d41565b5b61352288828901612fb2565b9550955050602086013567ffffffffffffffff81111561354557613544612d41565b5b61355188828901612fb2565b9350935050604061356488828901613243565b9150509295509295909350565b5f61357b826131e3565b9050919050565b61358b81613571565b82525050565b5f6020820190506135a45f830184613582565b92915050565b5f5f604083850312156135c0576135bf612d3d565b5b5f6135cd85828601612f54565b92505060206135de85828601612f54565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061362c57607f821691505b60208210810361363f5761363e6135e8565b5b50919050565b5f6060820190506136585f830186612f16565b6136656020830185613191565b6136726040830184612f16565b949350505050565b5f5ffd5b5f5ffd5b5f8151905061369081612f3e565b92915050565b5f815190506136a481612e91565b92915050565b5f67ffffffffffffffff8211156136c4576136c361333c565b5b6136cd82612e20565b9050602081019050919050565b5f6136ec6136e7846136aa565b61339a565b90508281526020810184848401111561370857613707613338565b5b613713848285612e12565b509392505050565b5f82601f83011261372f5761372e612fa6565b5b815161373f8482602086016136da565b91505092915050565b5f6080828403121561375d5761375c61367a565b5b613767608061339a565b90505f61377684828501613682565b5f83015250602061378984828501613696565b602083015250604061379d84828501613696565b604083015250606082015167ffffffffffffffff8111156137c1576137c061367e565b5b6137cd8482850161371b565b60608301525092915050565b5f602082840312156137ee576137ed612d3d565b5b5f82015167ffffffffffffffff81111561380b5761380a612d41565b5b61381784828501613748565b91505092915050565b5f81905092915050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c0000000000005f82015250565b5f61385e601a83613820565b91506138698261382a565b601a82019050919050565b5f61387e82612df8565b6138888185613820565b9350613898818560208601612e12565b80840191505092915050565b5f6138ae82613852565b91506138ba8284613874565b915081905092915050565b7f3a200000000000000000000000000000000000000000000000000000000000005f82015250565b5f6138f9600283613820565b9150613904826138c5565b600282019050919050565b5f613919826138ed565b91506139258284613874565b915081905092915050565b7f7b226e616d65223a2022427261674e46542023000000000000000000000000005f82015250565b5f613964601383613820565b915061396f82613930565b601382019050919050565b7f222c20226465736372697074696f6e223a2022427261672e43686172697479205f8201527f446f6e6174696f6e204e46540000000000000000000000000000000000000000602082015250565b5f6139d4602c83613820565b91506139df8261397a565b602c82019050919050565b7f222c2022696d616765223a2022000000000000000000000000000000000000005f82015250565b5f613a1e600d83613820565b9150613a29826139ea565b600d82019050919050565b7f222c202261747472696275746573223a205b7b2274726169745f74797065223a5f8201527f20224d657373616765222c202276616c7565223a202200000000000000000000602082015250565b5f613a8e603683613820565b9150613a9982613a34565b603682019050919050565b7f227d5d7d000000000000000000000000000000000000000000000000000000005f82015250565b5f613ad8600483613820565b9150613ae382613aa4565b600482019050919050565b5f613af882613958565b9150613b048287613874565b9150613b0f826139c8565b9150613b1b8286613874565b9150613b2682613a12565b9150613b328285613874565b9150613b3d82613a82565b9150613b498284613874565b9150613b5482613acc565b915081905095945050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c0000005f82015250565b5f613b96601d83613820565b9150613ba182613b62565b601d82019050919050565b5f613bb682613b8a565b9150613bc28284613874565b915081905092915050565b7f496e76616c6964207472656173757279206164647265737300000000000000005f82015250565b5f613c01601883612e02565b9150613c0c82613bcd565b602082019050919050565b5f6020820190508181035f830152613c2e81613bf5565b9050919050565b7f5265636569707420636f6e7472616374206e6f742073657400000000000000005f82015250565b5f613c69601883612e02565b9150613c7482613c35565b602082019050919050565b5f6020820190508181035f830152613c9681613c5d565b9050919050565b7f446f6e6174696f6e2062656c6f77206d696e696d756d000000000000000000005f82015250565b5f613cd1601683612e02565b9150613cdc82613c9d565b602082019050919050565b5f6020820190508181035f830152613cfe81613cc5565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f613d3c82612e88565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613d6e57613d6d613d05565b5b600182019050919050565b5f82905092915050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302613ddf7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613da4565b613de98683613da4565b95508019841693508086168417925050509392505050565b5f613e1b613e16613e1184612e88565b6131b9565b612e88565b9050919050565b5f819050919050565b613e3483613e01565b613e48613e4082613e22565b848454613db0565b825550505050565b5f5f905090565b613e5f613e50565b613e6a818484613e2b565b505050565b5b81811015613e8d57613e825f82613e57565b600181019050613e70565b5050565b601f821115613ed257613ea381613d83565b613eac84613d95565b81016020851015613ebb578190505b613ecf613ec785613d95565b830182613e6f565b50505b505050565b5f82821c905092915050565b5f613ef25f1984600802613ed7565b1980831691505092915050565b5f613f0a8383613ee3565b9150826002028217905092915050565b613f248383613d79565b67ffffffffffffffff811115613f3d57613f3c61333c565b5b613f478254613615565b613f52828285613e91565b5f601f831160018114613f7f575f8415613f6d578287013590505b613f778582613eff565b865550613fde565b601f198416613f8d86613d83565b5f5b82811015613fb457848901358255600182019150602085019450602081019050613f8f565b86831015613fd15784890135613fcd601f891682613ee3565b8355505b6001600288020188555050505b50505050505050565b5f613ff28385612e02565b9350613fff8385846133e4565b61400883612e20565b840190509392505050565b5f6060820190506140265f830187612f16565b6140336020830186613191565b8181036040830152614046818486613fe7565b905095945050505050565b5f6020828403121561406657614065612d3d565b5b5f61407384828501613696565b91505092915050565b5f60408201905061408f5f830185612f16565b61409c6020830184613191565b9392505050565b5f81905092915050565b50565b5f6140bb5f836140a3565b91506140c6826140ad565b5f82019050919050565b5f6140da826140b0565b9150819050919050565b7f5472616e7366657220746f207472656173757279206661696c656400000000005f82015250565b5f614118601b83612e02565b9150614123826140e4565b602082019050919050565b5f6020820190508181035f8301526141458161410c565b9050919050565b5f60808201905061415f5f830188613191565b61416c6020830187613191565b6141796040830186613191565b818103606083015261418c818486613fe7565b90509695505050505050565b5f81519050919050565b5f82825260208201905092915050565b5f6141bc82614198565b6141c681856141a2565b93506141d6818560208601612e12565b6141df81612e20565b840191505092915050565b5f6080820190506141fd5f830187612f16565b61420a6020830186612f16565b6142176040830185613191565b818103606083015261422981846141b2565b905095945050505050565b5f8151905061424281612d70565b92915050565b5f6020828403121561425d5761425c612d3d565b5b5f61426a84828501614234565b91505092915050565b5f61427e8285613874565b915061428a8284613874565b91508190509392505050565b7f427261674e4654202300000000000000000000000000000000000000000000005f82015250565b5f6142ca600983613820565b91506142d582614296565b600982019050919050565b5f6142ea826142be565b91506142f68284613874565b915081905092915050565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f32305f8201527f30302f73766722207072657365727665417370656374526174696f3d22784d6960208201527f6e594d696e206d656574222076696577426f783d22302030203335302033353060408201527f223e000000000000000000000000000000000000000000000000000000000000606082015250565b5f6143a7606283613820565b91506143b282614301565b606282019050919050565b7f3c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e745f8201527f2d66616d696c793a2073616e732d73657269663b20666f6e742d73697a653a2060208201527f323070783b20666f6e742d7765696768743a20626f6c643b207d3c2f7374796c60408201527f653e000000000000000000000000000000000000000000000000000000000000606082015250565b5f614463606283613820565b915061446e826143bd565b606282019050919050565b7f3c726563742077696474683d223130302522206865696768743d2231303025225f8201527f2066696c6c3d222336333636663122202f3e0000000000000000000000000000602082015250565b5f6144d3603283613820565b91506144de82614479565b603282019050919050565b7f3c7465787420783d223530252220793d223530252220636c6173733d226261735f8201527f652220646f6d696e616e742d626173656c696e653d226d6964646c652220746560208201527f78742d616e63686f723d226d6964646c65223e00000000000000000000000000604082015250565b5f614569605383613820565b9150614574826144e9565b605382019050919050565b7f3c2f746578743e3c2f7376673e000000000000000000000000000000000000005f82015250565b5f6145b3600d83613820565b91506145be8261457f565b600d82019050919050565b5f6145d38261439b565b91506145de82614457565b91506145e9826144c7565b91506145f48261455d565b91506146008284613874565b915061460b826145a7565b915081905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f61467a82612e88565b915061468583612e88565b925082820190508082111561469d5761469c613d05565b5b92915050565b6146ac82612df8565b67ffffffffffffffff8111156146c5576146c461333c565b5b6146cf8254613615565b6146da828285613e91565b5f60209050601f83116001811461470b575f84156146f9578287015190505b6147038582613eff565b86555061476a565b601f19841661471986613d83565b5f5b828110156147405784890151825560018201915060208501945060208101905061471b565b8683101561475d5784890151614759601f891682613ee3565b8355505b6001600288020188555050505b505050505050565b5f61477c82612e88565b915061478783612e88565b925082820261479581612e88565b915082820484148315176147ac576147ab613d05565b5b5092915050565b5f6147bd82612e88565b91506147c883612e88565b9250826147d8576147d7614616565b5b82820490509291505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212204ada901db4b4f4c3fdfd6634544cb34d3cc0fb9e295f48dbb7286631f45a9b6264736f6c634300081c0033"
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
      "bytecode": "0x610160604052348015610010575f5ffd5b5060405161432b38038061432b83398181016040528101906100329190610495565b806040518060400160405280600a81526020017f4272616720546f6b656e00000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600a81526020017f4272616720546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4252414700000000000000000000000000000000000000000000000000000000815250816003908161011b91906106fd565b50806004908161012b91906106fd565b50505061014260058361025f60201b90919060201c565b610120818152505061015e60068261025f60201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a0818152505061019b6102ac60201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250505050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610249575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161024091906107db565b60405180910390fd5b6102588161030660201b60201c565b5050610985565b5f60208351101561028057610279836103c960201b60201c565b90506102a6565b826102908361042e60201b60201c565b5f01908161029e91906106fd565b5060ff5f1b90505b92915050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e0516101005146306040516020016102eb95949392919061081b565b60405160208183030381529060405280519060200120905090565b5f600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5f829050601f8151111561041557826040517f305a27a900000000000000000000000000000000000000000000000000000000815260040161040c91906108d2565b60405180910390fd5b8051816104219061091f565b5f1c175f1b915050919050565b5f819050919050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6104648261043b565b9050919050565b6104748161045a565b811461047e575f5ffd5b50565b5f8151905061048f8161046b565b92915050565b5f602082840312156104aa576104a9610437565b5b5f6104b784828501610481565b91505092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061053b57607f821691505b60208210810361054e5761054d6104f7565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026105b07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610575565b6105ba8683610575565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f6105fe6105f96105f4846105d2565b6105db565b6105d2565b9050919050565b5f819050919050565b610617836105e4565b61062b61062382610605565b848454610581565b825550505050565b5f5f905090565b610642610633565b61064d81848461060e565b505050565b5b81811015610670576106655f8261063a565b600181019050610653565b5050565b601f8211156106b55761068681610554565b61068f84610566565b8101602085101561069e578190505b6106b26106aa85610566565b830182610652565b50505b505050565b5f82821c905092915050565b5f6106d55f19846008026106ba565b1980831691505092915050565b5f6106ed83836106c6565b9150826002028217905092915050565b610706826104c0565b67ffffffffffffffff81111561071f5761071e6104ca565b5b6107298254610524565b610734828285610674565b5f60209050601f831160018114610765575f8415610753578287015190505b61075d85826106e2565b8655506107c4565b601f19841661077386610554565b5f5b8281101561079a57848901518255600182019150602085019450602081019050610775565b868310156107b757848901516107b3601f8916826106c6565b8355505b6001600288020188555050505b505050505050565b6107d58161045a565b82525050565b5f6020820190506107ee5f8301846107cc565b92915050565b5f819050919050565b610806816107f4565b82525050565b610815816105d2565b82525050565b5f60a08201905061082e5f8301886107fd565b61083b60208301876107fd565b61084860408301866107fd565b610855606083018561080c565b61086260808301846107cc565b9695505050505050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6108a4826104c0565b6108ae818561086c565b93506108be81856020860161087c565b6108c78161088a565b840191505092915050565b5f6020820190508181035f8301526108ea818461089a565b905092915050565b5f81519050919050565b5f819050602082019050919050565b5f61091682516107f4565b80915050919050565b5f610929826108f2565b82610933846108fc565b905061093e8161090b565b9250602082101561097e576109797fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802610575565b831692505b5050919050565b60805160a05160c05160e0516101005161012051610140516139556109d65f395f61155101525f61151601525f61195901525f61193801525f610fb101525f61100701525f61103001526139555ff3fe608060405234801561000f575f5ffd5b50600436106101a7575f3560e01c8063715018a6116100f75780639ab24eb011610095578063d505accf1161006f578063d505accf146104fd578063dd62ed3e14610519578063f1127ed814610549578063f2fde38b14610579576101a7565b80639ab24eb014610481578063a9059cbb146104b1578063c3cda520146104e1576101a7565b80638da5cb5b116100d15780638da5cb5b146103f75780638e539e8c1461041557806391ddadf41461044557806395d89b4114610463576101a7565b8063715018a6146103995780637ecebe00146103a357806384b0196e146103d3576101a7565b80633a46b1a811610164578063587cde1e1161013e578063587cde1e146102ed5780635c19a95c1461031d5780636fcfff451461033957806370a0823114610369576101a7565b80633a46b1a81461028357806340c10f19146102b35780634bf5d7e9146102cf576101a7565b806306fdde03146101ab578063095ea7b3146101c957806318160ddd146101f957806323b872dd14610217578063313ce567146102475780633644e51514610265575b5f5ffd5b6101b3610595565b6040516101c09190612c78565b60405180910390f35b6101e360048036038101906101de9190612d29565b610625565b6040516101f09190612d81565b60405180910390f35b610201610647565b60405161020e9190612da9565b60405180910390f35b610231600480360381019061022c9190612dc2565b610650565b60405161023e9190612d81565b60405180910390f35b61024f61067e565b60405161025c9190612e2d565b60405180910390f35b61026d610686565b60405161027a9190612e5e565b60405180910390f35b61029d60048036038101906102989190612d29565b610694565b6040516102aa9190612da9565b60405180910390f35b6102cd60048036038101906102c89190612d29565b610710565b005b6102d7610726565b6040516102e49190612c78565b60405180910390f35b61030760048036038101906103029190612e77565b6107ba565b6040516103149190612eb1565b60405180910390f35b61033760048036038101906103329190612e77565b61081f565b005b610353600480360381019061034e9190612e77565b610838565b6040516103609190612ee8565b60405180910390f35b610383600480360381019061037e9190612e77565b610849565b6040516103909190612da9565b60405180910390f35b6103a161088e565b005b6103bd60048036038101906103b89190612e77565b6108a1565b6040516103ca9190612da9565b60405180910390f35b6103db6108b2565b6040516103ee9796959493929190612ff2565b60405180910390f35b6103ff610957565b60405161040c9190612eb1565b60405180910390f35b61042f600480360381019061042a9190613074565b61097f565b60405161043c9190612da9565b60405180910390f35b61044d6109bf565b60405161045a91906130bf565b60405180910390f35b61046b6109cd565b6040516104789190612c78565b60405180910390f35b61049b60048036038101906104969190612e77565b610a5d565b6040516104a89190612da9565b60405180910390f35b6104cb60048036038101906104c69190612d29565b610ac6565b6040516104d89190612d81565b60405180910390f35b6104fb60048036038101906104f6919061312c565b610ae8565b005b610517600480360381019061051291906131b5565b610bad565b005b610533600480360381019061052e9190613252565b610cf2565b6040516105409190612da9565b60405180910390f35b610563600480360381019061055e91906132ba565b610d74565b6040516105709190613368565b60405180910390f35b610593600480360381019061058e9190612e77565b610d8e565b005b6060600380546105a4906133ae565b80601f01602080910402602001604051908101604052809291908181526020018280546105d0906133ae565b801561061b5780601f106105f25761010080835404028352916020019161061b565b820191905f5260205f20905b8154815290600101906020018083116105fe57829003601f168201915b5050505050905090565b5f5f61062f610e12565b905061063c818585610e19565b600191505092915050565b5f600254905090565b5f5f61065a610e12565b9050610667858285610e2b565b610672858585610ebe565b60019150509392505050565b5f6012905090565b5f61068f610fae565b905090565b5f6106ec6106a183611064565b60095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206110cf90919063ffffffff16565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16905092915050565b6107186111bf565b6107228282611246565b5050565b60606107306112c5565b65ffffffffffff166107406109bf565b65ffffffffffff161461077f576040517f6ff0714000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040518060400160405280601d81526020017f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000815250905090565b5f60085f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f610828610e12565b905061083481836112d4565b5050565b5f610842826113e4565b9050919050565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6108966111bf565b61089f5f611439565b565b5f6108ab826114fc565b9050919050565b5f6060805f5f5f60606108c361150d565b6108cb611548565b46305f5f1b5f67ffffffffffffffff8111156108ea576108e96133de565b5b6040519080825280602002602001820160405280156109185781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b5f600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f61099c61098c83611064565b600a6110cf90919063ffffffff16565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff169050919050565b5f6109c86112c5565b905090565b6060600480546109dc906133ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610a08906133ae565b8015610a535780601f10610a2a57610100808354040283529160200191610a53565b820191905f5260205f20905b815481529060010190602001808311610a3657829003601f168201915b5050505050905090565b5f610aa360095f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20611583565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff169050919050565b5f5f610ad0610e12565b9050610add818585610ebe565b600191505092915050565b83421115610b2d57836040517f4683af0e000000000000000000000000000000000000000000000000000000008152600401610b249190612da9565b60405180910390fd5b5f610b8e610b867fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf898989604051602001610b6b949392919061340b565b604051602081830303815290604052805190602001206115e5565b8585856115fe565b9050610b9a818761162c565b610ba481886112d4565b50505050505050565b83421115610bf257836040517f62791302000000000000000000000000000000000000000000000000000000008152600401610be99190612da9565b60405180910390fd5b5f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610c208c611683565b89604051602001610c369695949392919061344e565b6040516020818303038152906040528051906020012090505f610c58826115e5565b90505f610c67828787876115fe565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610cdb57808a6040517f4b800e46000000000000000000000000000000000000000000000000000000008152600401610cd29291906134ad565b60405180910390fd5b610ce68a8a8a610e19565b50505050505050505050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b610d7c612bcc565b610d8683836116d6565b905092915050565b610d966111bf565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e06575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610dfd9190612eb1565b60405180910390fd5b610e0f81611439565b50565b5f33905090565b610e268383836001611735565b505050565b5f610e368484610cf2565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811015610eb85781811015610ea9578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610ea0939291906134d4565b60405180910390fd5b610eb784848484035f611735565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f2e575f6040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610f259190612eb1565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f9e575f6040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610f959190612eb1565b60405180910390fd5b610fa9838383611904565b505050565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561102957507f000000000000000000000000000000000000000000000000000000000000000046145b15611056577f00000000000000000000000000000000000000000000000000000000000000009050611061565b61105e611914565b90505b90565b5f5f61106e6109bf565b90508065ffffffffffff1683106110be5782816040517fecd3f81e0000000000000000000000000000000000000000000000000000000081526004016110b5929190613509565b60405180910390fd5b6110c7836119a9565b915050919050565b5f5f835f018054905090505f5f90505f8290506005831115611153575f6110f584611a02565b84611100919061355d565b905061110e875f0182611b9c565b5f015f9054906101000a900465ffffffffffff1665ffffffffffff168665ffffffffffff16101561114157809150611151565b60018161114e9190613590565b92505b505b5f611162875f01878585611bae565b90505f81146111b157611183875f0160018361117e919061355d565b611b9c565b5f0160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff166111b3565b5f5b94505050505092915050565b6111c7610e12565b73ffffffffffffffffffffffffffffffffffffffff166111e5610957565b73ffffffffffffffffffffffffffffffffffffffff161461124457611208610e12565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161123b9190612eb1565b60405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036112b6575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016112ad9190612eb1565b60405180910390fd5b6112c15f8383611904565b5050565b5f6112cf436119a9565b905090565b5f6112de836107ba565b90508160085f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a46113df81836113da86611c23565b611c34565b505050565b5f61143261142d60095f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20611ea4565b611eb3565b9050919050565b5f600b5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f61150682611f0a565b9050919050565b606061154360057f0000000000000000000000000000000000000000000000000000000000000000611f5090919063ffffffff16565b905090565b606061157e60067f0000000000000000000000000000000000000000000000000000000000000000611f5090919063ffffffff16565b905090565b5f5f825f018054905090505f81146115db576115ad835f016001836115a8919061355d565b611b9c565b5f0160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff166115dd565b5f5b915050919050565b5f6115f76115f1610fae565b83611ffd565b9050919050565b5f5f5f5f61160e8888888861203d565b92509250925061161e8282612124565b829350505050949350505050565b5f61163683611683565b905080821461167e5782816040517f752d88c00000000000000000000000000000000000000000000000000000000081526004016116759291906135c3565b60405180910390fd5b505050565b5f60075f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f815480929190600101919050559050919050565b6116de612bcc565b61172d8260095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2061228690919063ffffffff16565b905092915050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036117a5575f6040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161179c9190612eb1565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611815575f6040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161180c9190612eb1565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555080156118fe578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516118f59190612da9565b60405180910390a35b50505050565b61190f838383612355565b505050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000463060405160200161198e9594939291906135ea565b60405160208183030381529060405280519060200120905090565b5f65ffffffffffff80168211156119fa576030826040517f6dfcc6500000000000000000000000000000000000000000000000000000000081526004016119f192919061367d565b60405180910390fd5b819050919050565b5f60018211611a1357819050611b97565b5f8290505f600190507001000000000000000000000000000000008210611a4357608082901c9150604081901b90505b680100000000000000008210611a6257604082901c9150602081901b90505b6401000000008210611a7d57602082901c9150601081901b90505b620100008210611a9657601082901c9150600881901b90505b6101008210611aae57600882901c9150600481901b90505b60108210611ac557600482901c9150600281901b90505b60048210611ad557600181901b90505b600181600302901c90506001818581611af157611af06136a4565b5b048201901c90506001818581611b0a57611b096136a4565b5b048201901c90506001818581611b2357611b226136a4565b5b048201901c90506001818581611b3c57611b3b6136a4565b5b048201901c90506001818581611b5557611b546136a4565b5b048201901c90506001818581611b6e57611b6d6136a4565b5b048201901c9050611b90818581611b8857611b876136a4565b5b048211612403565b8103925050505b919050565b5f825f528160205f2001905092915050565b5f5b81831015611c18575f611bc3848461240e565b90508465ffffffffffff16611bd88783611b9c565b5f015f9054906101000a900465ffffffffffff1665ffffffffffff161115611c0257809250611c12565b600181611c0f9190613590565b93505b50611bb0565b819050949350505050565b5f611c2d82610849565b9050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611c6f57505f81115b15611e9f575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611d89575f5f611cfa60095f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20612433611cf586612448565b6124b5565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611d7e9291906136d1565b60405180910390a250505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611e9e575f5f611e0f60095f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206124f4611e0a86612448565b6124b5565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611e939291906136d1565b60405180910390a250505b5b505050565b5f815f01805490509050919050565b5f63ffffffff8016821115611f02576020826040517f6dfcc650000000000000000000000000000000000000000000000000000000008152600401611ef9929190613731565b60405180910390fd5b819050919050565b5f60075f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b606060ff5f1b8314611f6c57611f6583612509565b9050611ff7565b818054611f78906133ae565b80601f0160208091040260200160405190810160405280929190818152602001828054611fa4906133ae565b8015611fef5780601f10611fc657610100808354040283529160200191611fef565b820191905f5260205f20905b815481529060010190602001808311611fd257829003601f168201915b505050505090505b92915050565b5f6040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b5f5f5f7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0845f1c1115612079575f60038592509250925061211a565b5f6001888888886040515f815260200160405260405161209c9493929190613758565b6020604051602081039080840390855afa1580156120bc573d5f5f3e3d5ffd5b5050506020604051035190505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361210d575f60015f5f1b9350935093505061211a565b805f5f5f1b935093509350505b9450945094915050565b5f60038111156121375761213661379b565b5b82600381111561214a5761214961379b565b5b031561228257600160038111156121645761216361379b565b5b8260038111156121775761217661379b565b5b036121ae576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600260038111156121c2576121c161379b565b5b8260038111156121d5576121d461379b565b5b0361221957805f1c6040517ffce698f70000000000000000000000000000000000000000000000000000000081526004016122109190612da9565b60405180910390fd5b60038081111561222c5761222b61379b565b5b82600381111561223f5761223e61379b565b5b0361228157806040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004016122789190612e5e565b60405180910390fd5b5b5050565b61228e612bcc565b825f018263ffffffff16815481106122a9576122a86137c8565b5b905f5260205f20016040518060400160405290815f82015f9054906101000a900465ffffffffffff1665ffffffffffff1665ffffffffffff1681526020015f820160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b61236083838361257b565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036123f3575f61239c610647565b90505f6123a7612794565b9050808211156123f05781816040517f1cb15d260000000000000000000000000000000000000000000000000000000081526004016123e79291906136d1565b60405180910390fd5b50505b6123fe8383836127b7565b505050565b5f8115159050919050565b5f600282841861241e91906137f5565b82841661242b9190613590565b905092915050565b5f81836124409190613825565b905092915050565b5f79ffffffffffffffffffffffffffffffffffffffffffffffffffff80168211156124ad5760d0826040517f6dfcc6500000000000000000000000000000000000000000000000000000000081526004016124a49291906138ab565b60405180910390fd5b819050919050565b5f5f6124e86124c26109bf565b6124d86124ce88611583565b868863ffffffff16565b8761286f9092919063ffffffff16565b91509150935093915050565b5f818361250191906138d2565b905092915050565b60605f6125158361288a565b90505f602067ffffffffffffffff811115612533576125326133de565b5b6040519080825280601f01601f1916602001820160405280156125655781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036125cb578060025f8282546125bf9190613590565b92505081905550612699565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015612654578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161264b939291906134d4565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036126e0578060025f828254039250508190555061272a565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516127879190612da9565b60405180910390a3505050565b5f79ffffffffffffffffffffffffffffffffffffffffffffffffffff8016905090565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361280357612800600a6124f46127fb84612448565b6124b5565b50505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361284f5761284c600a61243361284784612448565b6124b5565b50505b61286a61285b846107ba565b612864846107ba565b83611c34565b505050565b5f5f61287e855f0185856128d8565b91509150935093915050565b5f5f60ff835f1c169050601f8111156128cf576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b5f5f5f858054905090505f811115612ae4575f612901876001846128fc919061355d565b611b9c565b90505f815f015f9054906101000a900465ffffffffffff1690505f825f0160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1690508765ffffffffffff168265ffffffffffff161115612992576040517f2520601d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8765ffffffffffff168265ffffffffffff16036129fc5786835f0160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550612ad5565b8860405180604001604052808a65ffffffffffff1681526020018979ffffffffffffffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003905f5260205f20015f909190919091505f820151815f015f6101000a81548165ffffffffffff021916908365ffffffffffff1602179055506020820151815f0160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b80879550955050505050612bc4565b8560405180604001604052808765ffffffffffff1681526020018679ffffffffffffffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003905f5260205f20015f909190919091505f820151815f015f6101000a81548165ffffffffffff021916908365ffffffffffff1602179055506020820151815f0160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505f8492509250505b935093915050565b60405180604001604052805f65ffffffffffff1681526020015f79ffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f612c4a82612c08565b612c548185612c12565b9350612c64818560208601612c22565b612c6d81612c30565b840191505092915050565b5f6020820190508181035f830152612c908184612c40565b905092915050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f612cc582612c9c565b9050919050565b612cd581612cbb565b8114612cdf575f5ffd5b50565b5f81359050612cf081612ccc565b92915050565b5f819050919050565b612d0881612cf6565b8114612d12575f5ffd5b50565b5f81359050612d2381612cff565b92915050565b5f5f60408385031215612d3f57612d3e612c98565b5b5f612d4c85828601612ce2565b9250506020612d5d85828601612d15565b9150509250929050565b5f8115159050919050565b612d7b81612d67565b82525050565b5f602082019050612d945f830184612d72565b92915050565b612da381612cf6565b82525050565b5f602082019050612dbc5f830184612d9a565b92915050565b5f5f5f60608486031215612dd957612dd8612c98565b5b5f612de686828701612ce2565b9350506020612df786828701612ce2565b9250506040612e0886828701612d15565b9150509250925092565b5f60ff82169050919050565b612e2781612e12565b82525050565b5f602082019050612e405f830184612e1e565b92915050565b5f819050919050565b612e5881612e46565b82525050565b5f602082019050612e715f830184612e4f565b92915050565b5f60208284031215612e8c57612e8b612c98565b5b5f612e9984828501612ce2565b91505092915050565b612eab81612cbb565b82525050565b5f602082019050612ec45f830184612ea2565b92915050565b5f63ffffffff82169050919050565b612ee281612eca565b82525050565b5f602082019050612efb5f830184612ed9565b92915050565b5f7fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b612f3581612f01565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b612f6d81612cf6565b82525050565b5f612f7e8383612f64565b60208301905092915050565b5f602082019050919050565b5f612fa082612f3b565b612faa8185612f45565b9350612fb583612f55565b805f5b83811015612fe5578151612fcc8882612f73565b9750612fd783612f8a565b925050600181019050612fb8565b5085935050505092915050565b5f60e0820190506130055f83018a612f2c565b81810360208301526130178189612c40565b9050818103604083015261302b8188612c40565b905061303a6060830187612d9a565b6130476080830186612ea2565b61305460a0830185612e4f565b81810360c08301526130668184612f96565b905098975050505050505050565b5f6020828403121561308957613088612c98565b5b5f61309684828501612d15565b91505092915050565b5f65ffffffffffff82169050919050565b6130b98161309f565b82525050565b5f6020820190506130d25f8301846130b0565b92915050565b6130e181612e12565b81146130eb575f5ffd5b50565b5f813590506130fc816130d8565b92915050565b61310b81612e46565b8114613115575f5ffd5b50565b5f8135905061312681613102565b92915050565b5f5f5f5f5f5f60c0878903121561314657613145612c98565b5b5f61315389828a01612ce2565b965050602061316489828a01612d15565b955050604061317589828a01612d15565b945050606061318689828a016130ee565b935050608061319789828a01613118565b92505060a06131a889828a01613118565b9150509295509295509295565b5f5f5f5f5f5f5f60e0888a0312156131d0576131cf612c98565b5b5f6131dd8a828b01612ce2565b97505060206131ee8a828b01612ce2565b96505060406131ff8a828b01612d15565b95505060606132108a828b01612d15565b94505060806132218a828b016130ee565b93505060a06132328a828b01613118565b92505060c06132438a828b01613118565b91505092959891949750929550565b5f5f6040838503121561326857613267612c98565b5b5f61327585828601612ce2565b925050602061328685828601612ce2565b9150509250929050565b61329981612eca565b81146132a3575f5ffd5b50565b5f813590506132b481613290565b92915050565b5f5f604083850312156132d0576132cf612c98565b5b5f6132dd85828601612ce2565b92505060206132ee858286016132a6565b9150509250929050565b6133018161309f565b82525050565b5f79ffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b61333581613307565b82525050565b604082015f82015161334f5f8501826132f8565b506020820151613362602085018261332c565b50505050565b5f60408201905061337b5f83018461333b565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806133c557607f821691505b6020821081036133d8576133d7613381565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f60808201905061341e5f830187612e4f565b61342b6020830186612ea2565b6134386040830185612d9a565b6134456060830184612d9a565b95945050505050565b5f60c0820190506134615f830189612e4f565b61346e6020830188612ea2565b61347b6040830187612ea2565b6134886060830186612d9a565b6134956080830185612d9a565b6134a260a0830184612d9a565b979650505050505050565b5f6040820190506134c05f830185612ea2565b6134cd6020830184612ea2565b9392505050565b5f6060820190506134e75f830186612ea2565b6134f46020830185612d9a565b6135016040830184612d9a565b949350505050565b5f60408201905061351c5f830185612d9a565b61352960208301846130b0565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61356782612cf6565b915061357283612cf6565b925082820390508181111561358a57613589613530565b5b92915050565b5f61359a82612cf6565b91506135a583612cf6565b92508282019050808211156135bd576135bc613530565b5b92915050565b5f6040820190506135d65f830185612ea2565b6135e36020830184612d9a565b9392505050565b5f60a0820190506135fd5f830188612e4f565b61360a6020830187612e4f565b6136176040830186612e4f565b6136246060830185612d9a565b6136316080830184612ea2565b9695505050505050565b5f819050919050565b5f819050919050565b5f61366761366261365d8461363b565b613644565b612e12565b9050919050565b6136778161364d565b82525050565b5f6040820190506136905f83018561366e565b61369d6020830184612d9a565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6040820190506136e45f830185612d9a565b6136f16020830184612d9a565b9392505050565b5f819050919050565b5f61371b613716613711846136f8565b613644565b612e12565b9050919050565b61372b81613701565b82525050565b5f6040820190506137445f830185613722565b6137516020830184612d9a565b9392505050565b5f60808201905061376b5f830187612e4f565b6137786020830186612e1e565b6137856040830185612e4f565b6137926060830184612e4f565b95945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6137ff82612cf6565b915061380a83612cf6565b92508261381a576138196136a4565b5b828204905092915050565b5f61382f82613307565b915061383a83613307565b9250828203905079ffffffffffffffffffffffffffffffffffffffffffffffffffff81111561386c5761386b613530565b5b92915050565b5f819050919050565b5f61389561389061388b84613872565b613644565b612e12565b9050919050565b6138a58161387b565b82525050565b5f6040820190506138be5f83018561389c565b6138cb6020830184612d9a565b9392505050565b5f6138dc82613307565b91506138e783613307565b9250828201905079ffffffffffffffffffffffffffffffffffffffffffffffffffff81111561391957613918613530565b5b9291505056fea2646970667358221220ba2ca83b8d3a0e9b167ac22a101cd7bbf4220bca693fe2d75ae513811a0d830c64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516131ba3803806131ba83398181016040528101906100319190610266565b806040518060400160405280600f81526020017f446f6e6174696f6e5265636569707400000000000000000000000000000000008152506040518060400160405280600b81526020017f4252414752454345495054000000000000000000000000000000000000000000815250815f90816100ac91906104ce565b5080600190816100bc91906104ce565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361012f575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161012691906105ac565b60405180910390fd5b61013e8161014560201b60201c565b50506105c5565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102358261020c565b9050919050565b6102458161022b565b811461024f575f5ffd5b50565b5f815190506102608161023c565b92915050565b5f6020828403121561027b5761027a610208565b5b5f61028884828501610252565b91505092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061030c57607f821691505b60208210810361031f5761031e6102c8565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026103817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610346565b61038b8683610346565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f6103cf6103ca6103c5846103a3565b6103ac565b6103a3565b9050919050565b5f819050919050565b6103e8836103b5565b6103fc6103f4826103d6565b848454610352565b825550505050565b5f5f905090565b610413610404565b61041e8184846103df565b505050565b5b81811015610441576104365f8261040b565b600181019050610424565b5050565b601f8211156104865761045781610325565b61046084610337565b8101602085101561046f578190505b61048361047b85610337565b830182610423565b50505b505050565b5f82821c905092915050565b5f6104a65f198460080261048b565b1980831691505092915050565b5f6104be8383610497565b9150826002028217905092915050565b6104d782610291565b67ffffffffffffffff8111156104f0576104ef61029b565b5b6104fa82546102f5565b610505828285610445565b5f60209050601f831160018114610536575f8415610524578287015190505b61052e85826104b3565b865550610595565b601f19841661054486610325565b5f5b8281101561056b57848901518255600182019150602085019450602081019050610546565b868310156105885784890151610584601f891682610497565b8355505b6001600288020188555050505b505050505050565b6105a68161022b565b82525050565b5f6020820190506105bf5f83018461059d565b92915050565b612be8806105d25f395ff3fe608060405234801561000f575f5ffd5b5060043610610135575f3560e01c80638da5cb5b116100b6578063c87b56dd1161007a578063c87b56dd1461034c578063cf456ae71461037c578063d3fc986414610398578063e985e9c5146103c8578063f2fde38b146103f8578063f46eccc41461041457610135565b80638da5cb5b146102a857806395d89b41146102c6578063a22cb465146102e4578063b63e6ac314610300578063b88d4fde1461033057610135565b806323b872dd116100fd57806323b872dd1461020657806342842e0e146102225780636352211e1461023e57806370a082311461026e578063715018a61461029e57610135565b806301ffc9a71461013957806306fdde0314610169578063081812fc14610187578063095ea7b3146101b75780630f7ee1ec146101d3575b5f5ffd5b610153600480360381019061014e9190611ebc565b610444565b6040516101609190611f01565b60405180910390f35b610171610525565b60405161017e9190611f8a565b60405180910390f35b6101a1600480360381019061019c9190611fdd565b6105b4565b6040516101ae9190612047565b60405180910390f35b6101d160048036038101906101cc919061208a565b6105cf565b005b6101ed60048036038101906101e89190611fdd565b6105e5565b6040516101fd94939291906120d7565b60405180910390f35b610220600480360381019061021b9190612121565b6106b6565b005b61023c60048036038101906102379190612121565b6107b5565b005b61025860048036038101906102539190611fdd565b6107d4565b6040516102659190612047565b60405180910390f35b61028860048036038101906102839190612171565b6107e5565b604051610295919061219c565b60405180910390f35b6102a661089b565b005b6102b06108ae565b6040516102bd9190612047565b60405180910390f35b6102ce6108d6565b6040516102db9190611f8a565b60405180910390f35b6102fe60048036038101906102f991906121df565b610966565b005b61031a60048036038101906103159190611fdd565b61097c565b60405161032791906122e3565b60405180910390f35b61034a6004803603810190610345919061242f565b610aa9565b005b61036660048036038101906103619190611fdd565b610ace565b6040516103739190611f8a565b60405180910390f35b610396600480360381019061039191906121df565b610b34565b005b6103b260048036038101906103ad919061250c565b610b94565b6040516103bf919061219c565b60405180910390f35b6103e260048036038101906103dd919061257d565b610d98565b6040516103ef9190611f01565b60405180910390f35b610412600480360381019061040d9190612171565b610e26565b005b61042e60048036038101906104299190612171565b610eaa565b60405161043b9190611f01565b60405180910390f35b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061050e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061051e575061051d82610ec7565b5b9050919050565b60605f8054610533906125e8565b80601f016020809104026020016040519081016040528092919081815260200182805461055f906125e8565b80156105aa5780601f10610581576101008083540402835291602001916105aa565b820191905f5260205f20905b81548152906001019060200180831161058d57829003601f168201915b5050505050905090565b5f6105be82610f30565b506105c882610fb6565b9050919050565b6105e182826105dc610fef565b610ff6565b5050565b6008602052805f5260405f205f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806002015490806003018054610635906125e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610661906125e8565b80156106ac5780601f10610683576101008083540402835291602001916106ac565b820191905f5260205f20905b81548152906001019060200180831161068f57829003601f168201915b5050505050905084565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610726575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161071d9190612047565b60405180910390fd5b5f6107398383610734610fef565b611008565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107af578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016107a693929190612618565b60405180910390fd5b50505050565b6107cf83838360405180602001604052805f815250610aa9565b505050565b5f6107de82610f30565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610856575f6040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161084d9190612047565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6108a36110d2565b6108ac5f611159565b565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546108e5906125e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610911906125e8565b801561095c5780601f106109335761010080835404028352916020019161095c565b820191905f5260205f20905b81548152906001019060200180831161093f57829003601f168201915b5050505050905090565b610978610971610fef565b838361121c565b5050565b610984611e1b565b61098d82610f30565b5060085f8381526020019081526020015f206040518060800160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382018054610a22906125e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4e906125e8565b8015610a995780601f10610a7057610100808354040283529160200191610a99565b820191905f5260205f20905b815481529060010190602001808311610a7c57829003601f168201915b5050505050815250509050919050565b610ab48484846106b6565b610ac8610abf610fef565b85858585611385565b50505050565b6060610ad982610f30565b505f610ae3611531565b90505f815111610b015760405180602001604052805f815250610b2c565b80610b0b84611547565b604051602001610b1c929190612687565b6040516020818303038152906040525b915050919050565b610b3c6110d2565b8060095f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055505050565b5f60095f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16610c1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c15906126f4565b60405180910390fd5b5f60075f815480929190610c319061273f565b91905055905060405180608001604052808773ffffffffffffffffffffffffffffffffffffffff16815260200186815260200142815260200185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081525060085f8381526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201556060820151816003019081610d2f9190612926565b50905050610d3d8682611611565b8573ffffffffffffffffffffffffffffffffffffffff16817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea587604051610d84919061219c565b60405180910390a380915050949350505050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b610e2e6110d2565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e9e575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610e959190612047565b60405180910390fd5b610ea781611159565b50565b6009602052805f5260405f205f915054906101000a900460ff1681565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f5f610f3b8361162e565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610fad57826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610fa4919061219c565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b6110038383836001611667565b505050565b5f5f6110138461162e565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561107d57505f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156110bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b490612a65565b60405180910390fd5b6110c8858585611826565b9150509392505050565b6110da610fef565b73ffffffffffffffffffffffffffffffffffffffff166110f86108ae565b73ffffffffffffffffffffffffffffffffffffffff16146111575761111b610fef565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161114e9190612047565b60405180910390fd5b565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361128c57816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016112839190612047565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113789190611f01565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b111561152a578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b81526004016113e39493929190612ad5565b6020604051808303815f875af192505050801561141e57506040513d601f19601f8201168201806040525081019061141b9190612b33565b60015b61149f573d805f811461144c576040519150601f19603f3d011682016040523d82523d5f602084013e611451565b606091505b505f81510361149757836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161148e9190612047565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461152857836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161151f9190612047565b60405180910390fd5b505b5050505050565b606060405180602001604052805f815250905090565b60605f600161155584611a31565b0190505f8167ffffffffffffffff8111156115735761157261230b565b5b6040519080825280601f01601f1916602001820160405280156115a55781602001600182028036833780820191505090505b5090505f82602083010190505b600115611606578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816115fb576115fa612b5e565b5b0494505f85036115b2575b819350505050919050565b61162a828260405180602001604052805f815250611b82565b5050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061169f57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156117d1575f6116ae84610f30565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561171857508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561172b57506117298184610d98565b155b1561176d57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016117649190612047565b60405180910390fd5b81156117cf57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f5f6118318461162e565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461187257611871818486611ba5565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146118fd576118b15f855f5f611667565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461197c57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611a8d577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611a8357611a82612b5e565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611aca576d04ee2d6d415b85acef81000000008381611ac057611abf612b5e565b5b0492506020810190505b662386f26fc100008310611af957662386f26fc100008381611aef57611aee612b5e565b5b0492506010810190505b6305f5e1008310611b22576305f5e1008381611b1857611b17612b5e565b5b0492506008810190505b6127108310611b47576127108381611b3d57611b3c612b5e565b5b0492506004810190505b60648310611b6a5760648381611b6057611b5f612b5e565b5b0492506002810190505b600a8310611b79576001810190505b80915050919050565b611b8c8383611c68565b611ba0611b97610fef565b5f858585611385565b505050565b611bb0838383611d5b565b611c63575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611c2457806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611c1b919061219c565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611c5a929190612b8b565b60405180910390fd5b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611cd8575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611ccf9190612047565b60405180910390fd5b5f611ce483835f611008565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611d56575f6040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401611d4d9190612047565b60405180910390fd5b505050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611e1257508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611dd35750611dd28484610d98565b5b80611e1157508273ffffffffffffffffffffffffffffffffffffffff16611df983610fb6565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b60405180608001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f8152602001606081525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611e9b81611e67565b8114611ea5575f5ffd5b50565b5f81359050611eb681611e92565b92915050565b5f60208284031215611ed157611ed0611e5f565b5b5f611ede84828501611ea8565b91505092915050565b5f8115159050919050565b611efb81611ee7565b82525050565b5f602082019050611f145f830184611ef2565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611f5c82611f1a565b611f668185611f24565b9350611f76818560208601611f34565b611f7f81611f42565b840191505092915050565b5f6020820190508181035f830152611fa28184611f52565b905092915050565b5f819050919050565b611fbc81611faa565b8114611fc6575f5ffd5b50565b5f81359050611fd781611fb3565b92915050565b5f60208284031215611ff257611ff1611e5f565b5b5f611fff84828501611fc9565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61203182612008565b9050919050565b61204181612027565b82525050565b5f60208201905061205a5f830184612038565b92915050565b61206981612027565b8114612073575f5ffd5b50565b5f8135905061208481612060565b92915050565b5f5f604083850312156120a05761209f611e5f565b5b5f6120ad85828601612076565b92505060206120be85828601611fc9565b9150509250929050565b6120d181611faa565b82525050565b5f6080820190506120ea5f830187612038565b6120f760208301866120c8565b61210460408301856120c8565b81810360608301526121168184611f52565b905095945050505050565b5f5f5f6060848603121561213857612137611e5f565b5b5f61214586828701612076565b935050602061215686828701612076565b925050604061216786828701611fc9565b9150509250925092565b5f6020828403121561218657612185611e5f565b5b5f61219384828501612076565b91505092915050565b5f6020820190506121af5f8301846120c8565b92915050565b6121be81611ee7565b81146121c8575f5ffd5b50565b5f813590506121d9816121b5565b92915050565b5f5f604083850312156121f5576121f4611e5f565b5b5f61220285828601612076565b9250506020612213858286016121cb565b9150509250929050565b61222681612027565b82525050565b61223581611faa565b82525050565b5f82825260208201905092915050565b5f61225582611f1a565b61225f818561223b565b935061226f818560208601611f34565b61227881611f42565b840191505092915050565b5f608083015f8301516122985f86018261221d565b5060208301516122ab602086018261222c565b5060408301516122be604086018261222c565b50606083015184820360608601526122d6828261224b565b9150508091505092915050565b5f6020820190508181035f8301526122fb8184612283565b905092915050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61234182611f42565b810181811067ffffffffffffffff821117156123605761235f61230b565b5b80604052505050565b5f612372611e56565b905061237e8282612338565b919050565b5f67ffffffffffffffff82111561239d5761239c61230b565b5b6123a682611f42565b9050602081019050919050565b828183375f83830152505050565b5f6123d36123ce84612383565b612369565b9050828152602081018484840111156123ef576123ee612307565b5b6123fa8482856123b3565b509392505050565b5f82601f83011261241657612415612303565b5b81356124268482602086016123c1565b91505092915050565b5f5f5f5f6080858703121561244757612446611e5f565b5b5f61245487828801612076565b945050602061246587828801612076565b935050604061247687828801611fc9565b925050606085013567ffffffffffffffff81111561249757612496611e63565b5b6124a387828801612402565b91505092959194509250565b5f5ffd5b5f5ffd5b5f5f83601f8401126124cc576124cb612303565b5b8235905067ffffffffffffffff8111156124e9576124e86124af565b5b602083019150836001820283011115612505576125046124b3565b5b9250929050565b5f5f5f5f6060858703121561252457612523611e5f565b5b5f61253187828801612076565b945050602061254287828801611fc9565b935050604085013567ffffffffffffffff81111561256357612562611e63565b5b61256f878288016124b7565b925092505092959194509250565b5f5f6040838503121561259357612592611e5f565b5b5f6125a085828601612076565b92505060206125b185828601612076565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806125ff57607f821691505b602082108103612612576126116125bb565b5b50919050565b5f60608201905061262b5f830186612038565b61263860208301856120c8565b6126456040830184612038565b949350505050565b5f81905092915050565b5f61266182611f1a565b61266b818561264d565b935061267b818560208601611f34565b80840191505092915050565b5f6126928285612657565b915061269e8284612657565b91508190509392505050565b7f4e6f7420617574686f72697a656420746f206d696e74207265636569707473005f82015250565b5f6126de601f83611f24565b91506126e9826126aa565b602082019050919050565b5f6020820190508181035f83015261270b816126d2565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61274982611faa565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361277b5761277a612712565b5b600182019050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026127e27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826127a7565b6127ec86836127a7565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61282761282261281d84611faa565b612804565b611faa565b9050919050565b5f819050919050565b6128408361280d565b61285461284c8261282e565b8484546127b3565b825550505050565b5f5f905090565b61286b61285c565b612876818484612837565b505050565b5b818110156128995761288e5f82612863565b60018101905061287c565b5050565b601f8211156128de576128af81612786565b6128b884612798565b810160208510156128c7578190505b6128db6128d385612798565b83018261287b565b50505b505050565b5f82821c905092915050565b5f6128fe5f19846008026128e3565b1980831691505092915050565b5f61291683836128ef565b9150826002028217905092915050565b61292f82611f1a565b67ffffffffffffffff8111156129485761294761230b565b5b61295282546125e8565b61295d82828561289d565b5f60209050601f83116001811461298e575f841561297c578287015190505b612986858261290b565b8655506129ed565b601f19841661299c86612786565b5f5b828110156129c35784890151825560018201915060208501945060208101905061299e565b868310156129e057848901516129dc601f8916826128ef565b8355505b6001600288020188555050505b505050505050565b7f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f5f8201527f756e6420616e642063616e6e6f74206265207472616e73666572726564000000602082015250565b5f612a4f603d83611f24565b9150612a5a826129f5565b604082019050919050565b5f6020820190508181035f830152612a7c81612a43565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f612aa782612a83565b612ab18185612a8d565b9350612ac1818560208601611f34565b612aca81611f42565b840191505092915050565b5f608082019050612ae85f830187612038565b612af56020830186612038565b612b0260408301856120c8565b8181036060830152612b148184612a9d565b905095945050505050565b5f81519050612b2d81611e92565b92915050565b5f60208284031215612b4857612b47611e5f565b5b5f612b5584828501612b1f565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f604082019050612b9e5f830185612038565b612bab60208301846120c8565b939250505056fea2646970667358221220698d8c20e22b0de558254c8c960498c90b6ea62aee9d1e618cec49d4be13bd0c64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611773380380611773833981810160405281019061003191906101d7565b805f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610211565b60405180910390fd5b6100b1816100b860201b60201c565b505061022a565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101a68261017d565b9050919050565b6101b68161019c565b81146101c0575f5ffd5b50565b5f815190506101d1816101ad565b92915050565b5f602082840312156101ec576101eb610179565b5b5f6101f9848285016101c3565b91505092915050565b61020b8161019c565b82525050565b5f6020820190506102245f830184610202565b92915050565b61153c806102375f395ff3fe608060405234801561000f575f5ffd5b506004361061009c575f3560e01c8063b9209e3311610064578063b9209e3314610149578063ceb68c2314610179578063d42b291c14610195578063d7bfe386146101b1578063f2fde38b146101e15761009c565b8063715018a6146100a057806374d4e491146100aa5780638da5cb5b146100c857806390229af7146100e6578063a622ee7c14610116575b5f5ffd5b6100a86101fd565b005b6100b2610210565b6040516100bf9190610c35565b60405180910390f35b6100d061021c565b6040516100dd9190610c8d565b60405180910390f35b61010060048036038101906100fb9190610cd8565b610243565b60405161010d9190610e67565b60405180910390f35b610130600480360381019061012b9190610cd8565b61040d565b6040516101409493929190610eed565b60405180910390f35b610163600480360381019061015e9190610cd8565b61055d565b6040516101709190610f3e565b60405180910390f35b610193600480360381019061018e9190610cd8565b6105b1565b005b6101af60048036038101906101aa9190610fdb565b6106e0565b005b6101cb60048036038101906101c691906110a8565b6109d5565b6040516101d89190610c8d565b60405180910390f35b6101fb60048036038101906101f69190610cd8565b610a10565b005b610205610a94565b61020e5f610b1b565b565b5f600280549050905090565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61024b610be3565b60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206040518060800160405290815f82015f9054906101000a900460ff161515151581526020015f820160019054906101000a900460ff1660048111156102d0576102cf610d1d565b5b60048111156102e2576102e1610d1d565b5b81526020016001820180546102f690611100565b80601f016020809104026020016040519081016040528092919081815260200182805461032290611100565b801561036d5780601f106103445761010080835404028352916020019161036d565b820191905f5260205f20905b81548152906001019060200180831161035057829003601f168201915b5050505050815260200160028201805461038690611100565b80601f01602080910402602001604051908101604052809291908181526020018280546103b290611100565b80156103fd5780601f106103d4576101008083540402835291602001916103fd565b820191905f5260205f20905b8154815290600101906020018083116103e057829003601f168201915b5050505050815250509050919050565b6001602052805f5260405f205f91509050805f015f9054906101000a900460ff1690805f0160019054906101000a900460ff169080600101805461045090611100565b80601f016020809104026020016040519081016040528092919081815260200182805461047c90611100565b80156104c75780601f1061049e576101008083540402835291602001916104c7565b820191905f5260205f20905b8154815290600101906020018083116104aa57829003601f168201915b5050505050908060020180546104dc90611100565b80601f016020809104026020016040519081016040528092919081815260200182805461050890611100565b80156105535780601f1061052a57610100808354040283529160200191610553565b820191905f5260205f20905b81548152906001019060200180831161053657829003601f168201915b5050505050905084565b5f60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f9054906101000a900460ff169050919050565b6105b9610a94565b60015f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f9054906101000a900460ff16610644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b9061117a565b60405180910390fd5b5f60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f6101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a60405160405180910390a250565b6106e8610a94565b5f73ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1603610756576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074d906111e2565b60405180910390fd5b60015f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f9054906101000a900460ff1661080757600286908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b604051806080016040528060011515815260200186600481111561082e5761082d610d1d565b5b815260200185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f82011690508083019250505050505050815260200183838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081525060015f8873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f820151815f015f6101000a81548160ff0219169083151502179055506020820151815f0160016101000a81548160ff0219169083600481111561094757610946610d1d565b5b0217905550604082015181600101908161096191906113cd565b50606082015181600201908161097791906113cd565b509050508573ffffffffffffffffffffffffffffffffffffffff167f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec88686866040516109c5939291906114d6565b60405180910390a2505050505050565b600281815481106109e4575f80fd5b905f5260205f20015f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610a18610a94565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a88575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a7f9190610c8d565b60405180910390fd5b610a9181610b1b565b50565b610a9c610bdc565b73ffffffffffffffffffffffffffffffffffffffff16610aba61021c565b73ffffffffffffffffffffffffffffffffffffffff1614610b1957610add610bdc565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610b109190610c8d565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b60405180608001604052805f151581526020015f6004811115610c0957610c08610d1d565b5b815260200160608152602001606081525090565b5f819050919050565b610c2f81610c1d565b82525050565b5f602082019050610c485f830184610c26565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610c7782610c4e565b9050919050565b610c8781610c6d565b82525050565b5f602082019050610ca05f830184610c7e565b92915050565b5f5ffd5b5f5ffd5b610cb781610c6d565b8114610cc1575f5ffd5b50565b5f81359050610cd281610cae565b92915050565b5f60208284031215610ced57610cec610ca6565b5b5f610cfa84828501610cc4565b91505092915050565b5f8115159050919050565b610d1781610d03565b82525050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b60058110610d5b57610d5a610d1d565b5b50565b5f819050610d6b82610d4a565b919050565b5f610d7a82610d5e565b9050919050565b610d8a81610d70565b82525050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610dd282610d90565b610ddc8185610d9a565b9350610dec818560208601610daa565b610df581610db8565b840191505092915050565b5f608083015f830151610e155f860182610d0e565b506020830151610e286020860182610d81565b5060408301518482036040860152610e408282610dc8565b91505060608301518482036060860152610e5a8282610dc8565b9150508091505092915050565b5f6020820190508181035f830152610e7f8184610e00565b905092915050565b610e9081610d03565b82525050565b610e9f81610d70565b82525050565b5f82825260208201905092915050565b5f610ebf82610d90565b610ec98185610ea5565b9350610ed9818560208601610daa565b610ee281610db8565b840191505092915050565b5f608082019050610f005f830187610e87565b610f0d6020830186610e96565b8181036040830152610f1f8185610eb5565b90508181036060830152610f338184610eb5565b905095945050505050565b5f602082019050610f515f830184610e87565b92915050565b60058110610f63575f5ffd5b50565b5f81359050610f7481610f57565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f840112610f9b57610f9a610f7a565b5b8235905067ffffffffffffffff811115610fb857610fb7610f7e565b5b602083019150836001820283011115610fd457610fd3610f82565b5b9250929050565b5f5f5f5f5f5f60808789031215610ff557610ff4610ca6565b5b5f61100289828a01610cc4565b965050602061101389828a01610f66565b955050604087013567ffffffffffffffff81111561103457611033610caa565b5b61104089828a01610f86565b9450945050606087013567ffffffffffffffff81111561106357611062610caa565b5b61106f89828a01610f86565b92509250509295509295509295565b61108781610c1d565b8114611091575f5ffd5b50565b5f813590506110a28161107e565b92915050565b5f602082840312156110bd576110bc610ca6565b5b5f6110ca84828501611094565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061111757607f821691505b60208210810361112a576111296110d3565b5b50919050565b7f5661756c74206e6f7420766572696669656400000000000000000000000000005f82015250565b5f611164601283610ea5565b915061116f82611130565b602082019050919050565b5f6020820190508181035f83015261119181611158565b9050919050565b7f496e76616c6964206164647265737300000000000000000000000000000000005f82015250565b5f6111cc600f83610ea5565b91506111d782611198565b602082019050919050565b5f6020820190508181035f8301526111f9816111c0565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026112897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261124e565b611293868361124e565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6112ce6112c96112c484610c1d565b6112ab565b610c1d565b9050919050565b5f819050919050565b6112e7836112b4565b6112fb6112f3826112d5565b84845461125a565b825550505050565b5f5f905090565b611312611303565b61131d8184846112de565b505050565b5b81811015611340576113355f8261130a565b600181019050611323565b5050565b601f821115611385576113568161122d565b61135f8461123f565b8101602085101561136e578190505b61138261137a8561123f565b830182611322565b50505b505050565b5f82821c905092915050565b5f6113a55f198460080261138a565b1980831691505092915050565b5f6113bd8383611396565b9150826002028217905092915050565b6113d682610d90565b67ffffffffffffffff8111156113ef576113ee611200565b5b6113f98254611100565b611404828285611344565b5f60209050601f831160018114611435575f8415611423578287015190505b61142d85826113b2565b865550611494565b601f1984166114438661122d565b5f5b8281101561146a57848901518255600182019150602085019450602081019050611445565b868310156114875784890151611483601f891682611396565b8355505b6001600288020188555050505b505050505050565b828183375f83830152505050565b5f6114b58385610ea5565b93506114c283858461149c565b6114cb83610db8565b840190509392505050565b5f6040820190506114e95f830186610e96565b81810360208301526114fc8184866114aa565b905094935050505056fea26469706673582212204d83ffdc71932fcf44f691d101e6727fcd38132cf6dc9a0fc9ca79e9c03c697064736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516137ae3803806137ae8339818101604052810190610031919061021f565b815f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610099919061026c565b60405180910390fd5b6100b18161010060201b60201c565b50600180819055508060025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610285565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101ee826101c5565b9050919050565b6101fe816101e4565b8114610208575f5ffd5b50565b5f81519050610219816101f5565b92915050565b5f5f60408385031215610235576102346101c1565b5b5f6102428582860161020b565b92505060206102538582860161020b565b9150509250929050565b610266816101e4565b82525050565b5f60208201905061027f5f83018461025d565b92915050565b61351c806102925f395ff3fe608060405234801561000f575f5ffd5b5060043610610114575f3560e01c806381bd34d2116100a0578063d6bd07ee1161006f578063d6bd07ee14610302578063d74238581461031e578063f07a380e1461033a578063f23a6e6114610356578063f2fde38b1461038657610114565b806381bd34d2146102685780638da5cb5b14610298578063bc197c81146102b6578063c2fe5185146102e657610114565b806335f81b87116100e757806335f81b87146101c4578063380ff999146101e05780636f39becd14610210578063715018a6146102405780637b1039991461024a57610114565b806301ffc9a7146101185780630412619614610148578063150b7a02146101785780632ff1d0f9146101a8575b5f5ffd5b610132600480360381019061012d91906124c7565b6103a2565b60405161013f919061250c565b60405180910390f35b610162600480360381019061015d91906125b2565b61041b565b60405161016f91906125ff565b60405180910390f35b610192600480360381019061018d9190612754565b61043b565b60405161019f91906127e3565b60405180910390f35b6101c260048036038101906101bd91906127fc565b610776565b005b6101de60048036038101906101d9919061284c565b610ba9565b005b6101fa60048036038101906101f591906128c3565b610bcd565b60405161020791906125ff565b60405180910390f35b61022a600480360381019061022591906125b2565b610bf8565b6040516102379190612922565b60405180910390f35b610248610c35565b005b610252610c48565b60405161025f9190612996565b60405180910390f35b610282600480360381019061027d91906128c3565b610c6d565b60405161028f91906125ff565b60405180910390f35b6102a0610c98565b6040516102ad9190612922565b60405180910390f35b6102d060048036038101906102cb9190612a73565b610cbf565b6040516102dd91906127e3565b60405180910390f35b61030060048036038101906102fb9190612b3e565b6110ea565b005b61031c60048036038101906103179190612ba2565b61110c565b005b610338600480360381019061033391906128c3565b61112f565b005b610354600480360381019061034f91906125b2565b611150565b005b610370600480360381019061036b9190612c06565b61146c565b60405161037d91906127e3565b60405180910390f35b6103a0600480360381019061039b9190612c99565b6117f9565b005b5f7f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061041457506104138261187d565b5b9050919050565b6005602052815f5260405f20602052805f5260405f205f91509150505481565b5f6104446118e6565b5f8490505f5f9050602084510361052a5760025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33876040518263ffffffff1660e01b81526004016104af9190612922565b602060405180830381865afa1580156104ca573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104ee9190612cee565b1561050e57838060200190518101906105079190612d54565b9150610525565b838060200190518101906105229190612d93565b90505b610551565b604084510361055057838060200190518101906105479190612dbe565b80925081935050505b5b8160035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8781526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f5f82116105e9575f6105f6565b81426105f59190612e29565b5b90508060055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8881526020019081526020015f20819055505f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b81526004016106a49190612922565b5f60405180830381865afa1580156106be573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906106e69190612ff3565b6040015190508373ffffffffffffffffffffffffffffffffffffffff16873373ffffffffffffffffffffffffffffffffffffffff167f2f4cd5c22e57fb489ee9ffd8e932bab5e39d63cfc84601121c15a785d5aaaad3848660405161074c92919061308c565b60405180910390a46107608989898961192c565b94505050505061076e61193f565b949350505050565b61077e6118e6565b8060045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083f90613104565b60405180910390fd5b60065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054421015610912576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109099061316c565b60405180910390fd5b8060045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546109a8919061318a565b925050819055505f60045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205403610aca575f60065f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505b8273ffffffffffffffffffffffffffffffffffffffff1663f242432a303385856040518563ffffffff1660e01b8152600401610b0994939291906131f0565b5f604051808303815f87803b158015610b20575f5ffd5b505af1158015610b32573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167fba69d4edcc7bb32e476314e9b89880fc4a94ab6398b203493266df7717e4d2f984604051610b9491906125ff565b60405180910390a4610ba461193f565b505050565b610bb16118e6565b610bbe8585858585611948565b610bc661193f565b5050505050565b6006602052825f5260405f20602052815f5260405f20602052805f5260405f205f9250925050505481565b6003602052815f5260405f20602052805f5260405f205f915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c3d611ea0565b610c465f611f27565b565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6004602052825f5260405f20602052815f5260405f20602052805f5260405f205f9250925050505481565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f610cc86118e6565b5f8590505f5f90506020845103610dae5760025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33886040518263ffffffff1660e01b8152600401610d339190612922565b602060405180830381865afa158015610d4e573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d729190612cee565b15610d925783806020019051810190610d8b9190612d54565b9150610da9565b83806020019051810190610da69190612d93565b90505b610dd5565b6040845103610dd45783806020019051810190610dcb9190612dbe565b80925081935050505b5b5f5f8211610de3575f610df0565b8142610def9190612e29565b5b90505f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b8152600401610e4d9190612922565b5f60405180830381865afa158015610e67573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f82011682018060405250810190610e8f9190612ff3565b6040015190505f5f90505b88518110156110c557878181518110610eb657610eb5613246565b5b602002602001015160045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8b8481518110610f0f57610f0e613246565b5b602002602001015181526020019081526020015f205f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254610f6d9190612e29565b925050819055508260065f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8b8481518110610fc657610fc5613246565b5b602002602001015181526020019081526020015f205f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508473ffffffffffffffffffffffffffffffffffffffff1689828151811061104457611043613246565b5b60200260200101513373ffffffffffffffffffffffffffffffffffffffff167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358b858151811061109757611096613246565b5b602002602001015186886040516110b093929190613273565b60405180910390a48080600101915050610e9a565b506110d38a8a8a8a8a611fe8565b9450505050506110e161193f565b95945050505050565b6110f26118e6565b6110fe84848484611ffc565b61110661193f565b50505050565b6111146118e6565b611121848484845f611948565b61112961193f565b50505050565b6111376118e6565b6111438383835f611ffc565b61114b61193f565b505050565b6111586118e6565b3373ffffffffffffffffffffffffffffffffffffffff1660035f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611231576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611228906132f9565b60405180910390fd5b60055f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8281526020019081526020015f20544210156112c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b79061316c565b60405180910390fd5b5f60035f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f20819055508173ffffffffffffffffffffffffffffffffffffffff166342842e0e3033846040518463ffffffff1660e01b81526004016113d893929190613317565b5f604051808303815f87803b1580156113ef575f5ffd5b505af1158015611401573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16818373ffffffffffffffffffffffffffffffffffffffff167f37cc57ec15d639567dade20c0cba7202c83ca09de66767a569acbdee54f96c0660405160405180910390a461146861193f565b5050565b5f6114756118e6565b5f8590505f5f9050602084510361155b5760025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33886040518263ffffffff1660e01b81526004016114e09190612922565b602060405180830381865afa1580156114fb573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061151f9190612cee565b1561153f57838060200190518101906115389190612d54565b9150611556565b838060200190518101906115539190612d93565b90505b611582565b604084510361158157838060200190518101906115789190612dbe565b80925081935050505b5b8460045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8881526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546116189190612e29565b925050819055505f5f821161162d575f61163a565b81426116399190612e29565b5b90508060065f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8981526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390229af7306040518263ffffffff1660e01b81526004016117239190612922565b5f60405180830381865afa15801561173d573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906117659190612ff3565b6040015190508373ffffffffffffffffffffffffffffffffffffffff16883373ffffffffffffffffffffffffffffffffffffffff167f2da090c256263cded4c3bfc095b0b755c011fb2e3804f9e049fe5e907d27fa358a85876040516117cd93929190613273565b60405180910390a46117e28a8a8a8a8a612446565b9450505050506117f061193f565b95945050505050565b611801611ea0565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611871575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016118689190612922565b60405180910390fd5b61187a81611f27565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600260015403611922576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600181905550565b5f63150b7a0260e01b9050949350505050565b60018081905550565b8260045f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015611a12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0990613104565b60405180910390fd5b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33836040518263ffffffff1660e01b8152600401611a6c9190612922565b602060405180830381865afa158015611a87573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611aab9190612cee565b611aea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ae190613396565b60405180910390fd5b60065f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054421015611bb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bab9061316c565b60405180910390fd5b8260045f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254611c4a919061318a565b925050819055505f60045f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205403611d6c575f60065f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505b60605f821115611d9f573382604051602001611d899291906133b4565b6040516020818303038152906040529050611dc2565b33604051602001611db09190612922565b60405160208183030381529060405290505b8573ffffffffffffffffffffffffffffffffffffffff1663f242432a30858888866040518663ffffffff1660e01b8152600401611e0395949392919061341d565b5f604051808303815f87803b158015611e1a575f5ffd5b505af1158015611e2c573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16858773ffffffffffffffffffffffffffffffffffffffff167fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd18787604051611e90929190613475565b60405180910390a4505050505050565b611ea861245a565b73ffffffffffffffffffffffffffffffffffffffff16611ec6610c98565b73ffffffffffffffffffffffffffffffffffffffff1614611f2557611ee961245a565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611f1c9190612922565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f63bc197c8160e01b905095945050505050565b3373ffffffffffffffffffffffffffffffffffffffff1660035f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146120d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120cc906132f9565b60405180910390fd5b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33836040518263ffffffff1660e01b815260040161212f9190612922565b602060405180830381865afa15801561214a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061216e9190612cee565b6121ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121a490613396565b60405180910390fd5b60055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205442101561223c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122339061316c565b60405180910390fd5b5f60035f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f208190555060605f82111561234a5733826040516020016123349291906133b4565b604051602081830303815290604052905061236d565b3360405160200161235b9190612922565b60405160208183030381529060405290505b8473ffffffffffffffffffffffffffffffffffffffff1663b88d4fde308587856040518563ffffffff1660e01b81526004016123ac949392919061349c565b5f604051808303815f87803b1580156123c3575f5ffd5b505af11580156123d5573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16848673ffffffffffffffffffffffffffffffffffffffff167f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d79866040516124379190612922565b60405180910390a45050505050565b5f63f23a6e6160e01b905095945050505050565b5f33905090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6124a681612472565b81146124b0575f5ffd5b50565b5f813590506124c18161249d565b92915050565b5f602082840312156124dc576124db61246a565b5b5f6124e9848285016124b3565b91505092915050565b5f8115159050919050565b612506816124f2565b82525050565b5f60208201905061251f5f8301846124fd565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61254e82612525565b9050919050565b61255e81612544565b8114612568575f5ffd5b50565b5f8135905061257981612555565b92915050565b5f819050919050565b6125918161257f565b811461259b575f5ffd5b50565b5f813590506125ac81612588565b92915050565b5f5f604083850312156125c8576125c761246a565b5b5f6125d58582860161256b565b92505060206125e68582860161259e565b9150509250929050565b6125f98161257f565b82525050565b5f6020820190506126125f8301846125f0565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61266682612620565b810181811067ffffffffffffffff8211171561268557612684612630565b5b80604052505050565b5f612697612461565b90506126a3828261265d565b919050565b5f67ffffffffffffffff8211156126c2576126c1612630565b5b6126cb82612620565b9050602081019050919050565b828183375f83830152505050565b5f6126f86126f3846126a8565b61268e565b9050828152602081018484840111156127145761271361261c565b5b61271f8482856126d8565b509392505050565b5f82601f83011261273b5761273a612618565b5b813561274b8482602086016126e6565b91505092915050565b5f5f5f5f6080858703121561276c5761276b61246a565b5b5f6127798782880161256b565b945050602061278a8782880161256b565b935050604061279b8782880161259e565b925050606085013567ffffffffffffffff8111156127bc576127bb61246e565b5b6127c887828801612727565b91505092959194509250565b6127dd81612472565b82525050565b5f6020820190506127f65f8301846127d4565b92915050565b5f5f5f606084860312156128135761281261246a565b5b5f6128208682870161256b565b93505060206128318682870161259e565b92505060406128428682870161259e565b9150509250925092565b5f5f5f5f5f60a086880312156128655761286461246a565b5b5f6128728882890161256b565b95505060206128838882890161259e565b94505060406128948882890161259e565b93505060606128a58882890161256b565b92505060806128b68882890161259e565b9150509295509295909350565b5f5f5f606084860312156128da576128d961246a565b5b5f6128e78682870161256b565b93505060206128f88682870161259e565b92505060406129098682870161256b565b9150509250925092565b61291c81612544565b82525050565b5f6020820190506129355f830184612913565b92915050565b5f819050919050565b5f61295e61295961295484612525565b61293b565b612525565b9050919050565b5f61296f82612944565b9050919050565b5f61298082612965565b9050919050565b61299081612976565b82525050565b5f6020820190506129a95f830184612987565b92915050565b5f67ffffffffffffffff8211156129c9576129c8612630565b5b602082029050602081019050919050565b5f5ffd5b5f6129f06129eb846129af565b61268e565b90508083825260208201905060208402830185811115612a1357612a126129da565b5b835b81811015612a3c5780612a28888261259e565b845260208401935050602081019050612a15565b5050509392505050565b5f82601f830112612a5a57612a59612618565b5b8135612a6a8482602086016129de565b91505092915050565b5f5f5f5f5f60a08688031215612a8c57612a8b61246a565b5b5f612a998882890161256b565b9550506020612aaa8882890161256b565b945050604086013567ffffffffffffffff811115612acb57612aca61246e565b5b612ad788828901612a46565b935050606086013567ffffffffffffffff811115612af857612af761246e565b5b612b0488828901612a46565b925050608086013567ffffffffffffffff811115612b2557612b2461246e565b5b612b3188828901612727565b9150509295509295909350565b5f5f5f5f60808587031215612b5657612b5561246a565b5b5f612b638782880161256b565b9450506020612b748782880161259e565b9350506040612b858782880161256b565b9250506060612b968782880161259e565b91505092959194509250565b5f5f5f5f60808587031215612bba57612bb961246a565b5b5f612bc78782880161256b565b9450506020612bd88782880161259e565b9350506040612be98782880161259e565b9250506060612bfa8782880161256b565b91505092959194509250565b5f5f5f5f5f60a08688031215612c1f57612c1e61246a565b5b5f612c2c8882890161256b565b9550506020612c3d8882890161256b565b9450506040612c4e8882890161259e565b9350506060612c5f8882890161259e565b925050608086013567ffffffffffffffff811115612c8057612c7f61246e565b5b612c8c88828901612727565b9150509295509295909350565b5f60208284031215612cae57612cad61246a565b5b5f612cbb8482850161256b565b91505092915050565b612ccd816124f2565b8114612cd7575f5ffd5b50565b5f81519050612ce881612cc4565b92915050565b5f60208284031215612d0357612d0261246a565b5b5f612d1084828501612cda565b91505092915050565b5f612d2382612525565b9050919050565b612d3381612d19565b8114612d3d575f5ffd5b50565b5f81519050612d4e81612d2a565b92915050565b5f60208284031215612d6957612d6861246a565b5b5f612d7684828501612d40565b91505092915050565b5f81519050612d8d81612588565b92915050565b5f60208284031215612da857612da761246a565b5b5f612db584828501612d7f565b91505092915050565b5f5f60408385031215612dd457612dd361246a565b5b5f612de185828601612d40565b9250506020612df285828601612d7f565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f612e338261257f565b9150612e3e8361257f565b9250828201905080821115612e5657612e55612dfc565b5b92915050565b5f5ffd5b5f5ffd5b5f60ff82169050919050565b612e7981612e64565b8114612e83575f5ffd5b50565b5f81519050612e9481612e70565b92915050565b5f67ffffffffffffffff821115612eb457612eb3612630565b5b612ebd82612620565b9050602081019050919050565b8281835e5f83830152505050565b5f612eea612ee584612e9a565b61268e565b905082815260208101848484011115612f0657612f0561261c565b5b612f11848285612eca565b509392505050565b5f82601f830112612f2d57612f2c612618565b5b8151612f3d848260208601612ed8565b91505092915050565b5f60808284031215612f5b57612f5a612e5c565b5b612f65608061268e565b90505f612f7484828501612cda565b5f830152506020612f8784828501612e86565b602083015250604082015167ffffffffffffffff811115612fab57612faa612e60565b5b612fb784828501612f19565b604083015250606082015167ffffffffffffffff811115612fdb57612fda612e60565b5b612fe784828501612f19565b60608301525092915050565b5f602082840312156130085761300761246a565b5b5f82015167ffffffffffffffff8111156130255761302461246e565b5b61303184828501612f46565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f61305e8261303a565b6130688185613044565b9350613078818560208601612eca565b61308181612620565b840191505092915050565b5f6040820190508181035f8301526130a48185613054565b90506130b360208301846125f0565b9392505050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f6130ee601483613044565b91506130f9826130ba565b602082019050919050565b5f6020820190508181035f83015261311b816130e2565b9050919050565b7f45786869626974696f6e206e6f742079657420657870697265640000000000005f82015250565b5f613156601a83613044565b915061316182613122565b602082019050919050565b5f6020820190508181035f8301526131838161314a565b9050919050565b5f6131948261257f565b915061319f8361257f565b92508282039050818111156131b7576131b6612dfc565b5b92915050565b5f82825260208201905092915050565b50565b5f6131db5f836131bd565b91506131e6826131cd565b5f82019050919050565b5f60a0820190506132035f830187612913565b6132106020830186612913565b61321d60408301856125f0565b61322a60608301846125f0565b818103608083015261323b816131d0565b905095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6060820190506132865f8301866125f0565b81810360208301526132988185613054565b90506132a760408301846125f0565b949350505050565b7f4e6f7420746865206f776e6572000000000000000000000000000000000000005f82015250565b5f6132e3600d83613044565b91506132ee826132af565b602082019050919050565b5f6020820190508181035f830152613310816132d7565b9050919050565b5f60608201905061332a5f830186612913565b6133376020830185612913565b61334460408301846125f0565b949350505050565b7f44657374696e6174696f6e206e6f7420766572696669656400000000000000005f82015250565b5f613380601883613044565b915061338b8261334c565b602082019050919050565b5f6020820190508181035f8301526133ad81613374565b9050919050565b5f6040820190506133c75f830185612913565b6133d460208301846125f0565b9392505050565b5f81519050919050565b5f6133ef826133db565b6133f981856131bd565b9350613409818560208601612eca565b61341281612620565b840191505092915050565b5f60a0820190506134305f830188612913565b61343d6020830187612913565b61344a60408301866125f0565b61345760608301856125f0565b818103608083015261346981846133e5565b90509695505050505050565b5f6040820190506134885f8301856125f0565b6134956020830184612913565b9392505050565b5f6080820190506134af5f830187612913565b6134bc6020830186612913565b6134c960408301856125f0565b81810360608301526134db81846133e5565b90509594505050505056fea2646970667358221220c0de5de78cb47391c6882cf4a27fb6f413867c577ccedd5a4480e0cb85e1869c64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b5060405161175c38038061175c833981810160405281019061003191906101d7565b805f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610211565b60405180910390fd5b6100b1816100b860201b60201c565b505061022a565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101a68261017d565b9050919050565b6101b68161019c565b81146101c0575f5ffd5b50565b5f815190506101d1816101ad565b92915050565b5f602082840312156101ec576101eb610179565b5b5f6101f9848285016101c3565b91505092915050565b61020b8161019c565b82525050565b5f6020820190506102245f830184610202565b92915050565b611525806102375f395ff3fe6080604052600436106100aa575f3560e01c80638da5cb5b116100635780638da5cb5b146101bb5780639ebd9115146101e5578063b61d27f61461020d578063bc197c8114610249578063f23a6e6114610285578063f2fde38b146102c1576100b1565b806301ffc9a7146100b5578063150b7a02146100f1578063256451ac1461012d5780634782f77914610155578063715018a61461017d5780637b9f76b514610193576100b1565b366100b157005b5f5ffd5b3480156100c0575f5ffd5b506100db60048036038101906100d69190610a22565b6102e9565b6040516100e89190610a67565b60405180910390f35b3480156100fc575f5ffd5b5061011760048036038101906101129190610c49565b610362565b6040516101249190610cd8565b60405180910390f35b348015610138575f5ffd5b50610153600480360381019061014e9190610cf1565b610375565b005b348015610160575f5ffd5b5061017b60048036038101906101769190610d90565b6103ef565b005b348015610188575f5ffd5b506101916104e7565b005b34801561019e575f5ffd5b506101b960048036038101906101b49190610dce565b6104fa565b005b3480156101c6575f5ffd5b506101cf610571565b6040516101dc9190610e2d565b60405180910390f35b3480156101f0575f5ffd5b5061020b60048036038101906102069190610e46565b610598565b005b348015610218575f5ffd5b50610233600480360381019061022e9190610ece565b610693565b6040516102409190610f9f565b60405180910390f35b348015610254575f5ffd5b5061026f600480360381019061026a919061107f565b610758565b60405161027c9190610cd8565b60405180910390f35b348015610290575f5ffd5b506102ab60048036038101906102a6919061114a565b61076c565b6040516102b89190610cd8565b60405180910390f35b3480156102cc575f5ffd5b506102e760048036038101906102e291906111dd565b610780565b005b5f7f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061035b575061035a82610804565b5b9050919050565b5f63150b7a0260e01b9050949350505050565b61037d61086d565b8373ffffffffffffffffffffffffffffffffffffffff1663f242432a308386866040518563ffffffff1660e01b81526004016103bc949392919061123a565b5f604051808303815f87803b1580156103d3575f5ffd5b505af11580156103e5573d5f5f3e3d5ffd5b5050505050505050565b6103f761086d565b4781111561043a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610431906112ea565b60405180910390fd5b5f8273ffffffffffffffffffffffffffffffffffffffff168260405161045f90611332565b5f6040518083038185875af1925050503d805f8114610499576040519150601f19603f3d011682016040523d82523d5f602084013e61049e565b606091505b50509050806104e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d990611390565b60405180910390fd5b505050565b6104ef61086d565b6104f85f6108f4565b565b61050261086d565b8273ffffffffffffffffffffffffffffffffffffffff166342842e0e3083856040518463ffffffff1660e01b815260040161053f939291906113ae565b5f604051808303815f87803b158015610556575f5ffd5b505af1158015610568573d5f5f3e3d5ffd5b50505050505050565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105a061086d565b5f4790505f81116105e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd9061142d565b60405180910390fd5b5f8273ffffffffffffffffffffffffffffffffffffffff168260405161060b90611332565b5f6040518083038185875af1925050503d805f8114610645576040519150601f19603f3d011682016040523d82523d5f602084013e61064a565b606091505b505090508061068e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068590611390565b60405180910390fd5b505050565b606061069d61086d565b5f5f8673ffffffffffffffffffffffffffffffffffffffff168686866040516106c792919061146f565b5f6040518083038185875af1925050503d805f8114610701576040519150601f19603f3d011682016040523d82523d5f602084013e610706565b606091505b50915091508161074b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610742906114d1565b60405180910390fd5b8092505050949350505050565b5f63bc197c8160e01b905095945050505050565b5f63f23a6e6160e01b905095945050505050565b61078861086d565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107f8575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107ef9190610e2d565b60405180910390fd5b610801816108f4565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6108756109b5565b73ffffffffffffffffffffffffffffffffffffffff16610893610571565b73ffffffffffffffffffffffffffffffffffffffff16146108f2576108b66109b5565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016108e99190610e2d565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610a01816109cd565b8114610a0b575f5ffd5b50565b5f81359050610a1c816109f8565b92915050565b5f60208284031215610a3757610a366109c5565b5b5f610a4484828501610a0e565b91505092915050565b5f8115159050919050565b610a6181610a4d565b82525050565b5f602082019050610a7a5f830184610a58565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610aa982610a80565b9050919050565b610ab981610a9f565b8114610ac3575f5ffd5b50565b5f81359050610ad481610ab0565b92915050565b5f819050919050565b610aec81610ada565b8114610af6575f5ffd5b50565b5f81359050610b0781610ae3565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610b5b82610b15565b810181811067ffffffffffffffff82111715610b7a57610b79610b25565b5b80604052505050565b5f610b8c6109bc565b9050610b988282610b52565b919050565b5f67ffffffffffffffff821115610bb757610bb6610b25565b5b610bc082610b15565b9050602081019050919050565b828183375f83830152505050565b5f610bed610be884610b9d565b610b83565b905082815260208101848484011115610c0957610c08610b11565b5b610c14848285610bcd565b509392505050565b5f82601f830112610c3057610c2f610b0d565b5b8135610c40848260208601610bdb565b91505092915050565b5f5f5f5f60808587031215610c6157610c606109c5565b5b5f610c6e87828801610ac6565b9450506020610c7f87828801610ac6565b9350506040610c9087828801610af9565b925050606085013567ffffffffffffffff811115610cb157610cb06109c9565b5b610cbd87828801610c1c565b91505092959194509250565b610cd2816109cd565b82525050565b5f602082019050610ceb5f830184610cc9565b92915050565b5f5f5f5f60808587031215610d0957610d086109c5565b5b5f610d1687828801610ac6565b9450506020610d2787828801610af9565b9350506040610d3887828801610af9565b9250506060610d4987828801610ac6565b91505092959194509250565b5f610d5f82610a80565b9050919050565b610d6f81610d55565b8114610d79575f5ffd5b50565b5f81359050610d8a81610d66565b92915050565b5f5f60408385031215610da657610da56109c5565b5b5f610db385828601610d7c565b9250506020610dc485828601610af9565b9150509250929050565b5f5f5f60608486031215610de557610de46109c5565b5b5f610df286828701610ac6565b9350506020610e0386828701610af9565b9250506040610e1486828701610ac6565b9150509250925092565b610e2781610a9f565b82525050565b5f602082019050610e405f830184610e1e565b92915050565b5f60208284031215610e5b57610e5a6109c5565b5b5f610e6884828501610d7c565b91505092915050565b5f5ffd5b5f5ffd5b5f5f83601f840112610e8e57610e8d610b0d565b5b8235905067ffffffffffffffff811115610eab57610eaa610e71565b5b602083019150836001820283011115610ec757610ec6610e75565b5b9250929050565b5f5f5f5f60608587031215610ee657610ee56109c5565b5b5f610ef387828801610ac6565b9450506020610f0487828801610af9565b935050604085013567ffffffffffffffff811115610f2557610f246109c9565b5b610f3187828801610e79565b925092505092959194509250565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f610f7182610f3f565b610f7b8185610f49565b9350610f8b818560208601610f59565b610f9481610b15565b840191505092915050565b5f6020820190508181035f830152610fb78184610f67565b905092915050565b5f67ffffffffffffffff821115610fd957610fd8610b25565b5b602082029050602081019050919050565b5f610ffc610ff784610fbf565b610b83565b9050808382526020820190506020840283018581111561101f5761101e610e75565b5b835b8181101561104857806110348882610af9565b845260208401935050602081019050611021565b5050509392505050565b5f82601f83011261106657611065610b0d565b5b8135611076848260208601610fea565b91505092915050565b5f5f5f5f5f60a08688031215611098576110976109c5565b5b5f6110a588828901610ac6565b95505060206110b688828901610ac6565b945050604086013567ffffffffffffffff8111156110d7576110d66109c9565b5b6110e388828901611052565b935050606086013567ffffffffffffffff811115611104576111036109c9565b5b61111088828901611052565b925050608086013567ffffffffffffffff811115611131576111306109c9565b5b61113d88828901610c1c565b9150509295509295909350565b5f5f5f5f5f60a08688031215611163576111626109c5565b5b5f61117088828901610ac6565b955050602061118188828901610ac6565b945050604061119288828901610af9565b93505060606111a388828901610af9565b925050608086013567ffffffffffffffff8111156111c4576111c36109c9565b5b6111d088828901610c1c565b9150509295509295909350565b5f602082840312156111f2576111f16109c5565b5b5f6111ff84828501610ac6565b91505092915050565b61121181610ada565b82525050565b50565b5f6112255f83610f49565b915061123082611217565b5f82019050919050565b5f60a08201905061124d5f830187610e1e565b61125a6020830186610e1e565b6112676040830185611208565b6112746060830184611208565b81810360808301526112858161121a565b905095945050505050565b5f82825260208201905092915050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f6112d4601483611290565b91506112df826112a0565b602082019050919050565b5f6020820190508181035f830152611301816112c8565b9050919050565b5f81905092915050565b5f61131d5f83611308565b915061132882611217565b5f82019050919050565b5f61133c82611312565b9150819050919050565b7f5472616e73666572206661696c656400000000000000000000000000000000005f82015250565b5f61137a600f83611290565b915061138582611346565b602082019050919050565b5f6020820190508181035f8301526113a78161136e565b9050919050565b5f6060820190506113c15f830186610e1e565b6113ce6020830185610e1e565b6113db6040830184611208565b949350505050565b7f4e6f2062616c616e636520746f207769746864726177000000000000000000005f82015250565b5f611417601683611290565b9150611422826113e3565b602082019050919050565b5f6020820190508181035f8301526114448161140b565b9050919050565b5f6114568385611308565b9350611463838584610bcd565b82840190509392505050565b5f61147b82848661144b565b91508190509392505050565b7f45787465726e616c2063616c6c206661696c65640000000000000000000000005f82015250565b5f6114bb601483611290565b91506114c682611487565b602082019050919050565b5f6020820190508181035f8301526114e8816114af565b905091905056fea2646970667358221220bc21e3539dd686486c6c012040578685a648a55840fb2ded55202b9d6137faa964736f6c634300081c0033"
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