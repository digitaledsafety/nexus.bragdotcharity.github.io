const CONTRACT_DATA = {
  "contracts": {
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
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516131a63803806131a6833981810160405281019061003191906102e2565b826040518060400160405280600781526020017f427261674e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4252414700000000000000000000000000000000000000000000000000000000815250815f90816100ac9190610566565b5080600190816100bc9190610566565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361012f575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101269190610644565b60405180910390fd5b61013e8161018e60201b60201c565b508160085f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060098190555050505061065d565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61027e82610255565b9050919050565b61028e81610274565b8114610298575f5ffd5b50565b5f815190506102a981610285565b92915050565b5f819050919050565b6102c1816102af565b81146102cb575f5ffd5b50565b5f815190506102dc816102b8565b92915050565b5f5f5f606084860312156102f9576102f8610251565b5b5f6103068682870161029b565b93505060206103178682870161029b565b9250506040610328868287016102ce565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806103ad57607f821691505b6020821081036103c0576103bf610369565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026104227fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826103e7565b61042c86836103e7565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61046761046261045d846102af565b610444565b6102af565b9050919050565b5f819050919050565b6104808361044d565b61049461048c8261046e565b8484546103f3565b825550505050565b5f5f905090565b6104ab61049c565b6104b6818484610477565b505050565b5b818110156104d9576104ce5f826104a3565b6001810190506104bc565b5050565b601f82111561051e576104ef816103c6565b6104f8846103d8565b81016020851015610507578190505b61051b610513856103d8565b8301826104bb565b50505b505050565b5f82821c905092915050565b5f61053e5f1984600802610523565b1980831691505092915050565b5f610556838361052f565b9150826002028217905092915050565b61056f82610332565b67ffffffffffffffff8111156105885761058761033c565b5b6105928254610396565b61059d8282856104dd565b5f60209050601f8311600181146105ce575f84156105bc578287015190505b6105c6858261054b565b86555061062d565b601f1984166105dc866103c6565b5f5b82811015610603578489015182556001820191506020850194506020810190506105de565b86831015610620578489015161061c601f89168261052f565b8355505b6001600288020188555050505b505050505050565b61063e81610274565b82525050565b5f6020820190506106575f830184610635565b92915050565b612b3c8061066a5f395ff3fe608060405260043610610165575f3560e01c80638da5cb5b116100d0578063c631724711610089578063da183afb11610063578063da183afb146104f7578063e985e9c514610533578063f0f442601461056f578063f2fde38b1461059757610165565b8063c631724714610469578063c87b56dd14610491578063d435b3a3146104cd57610165565b80638da5cb5b1461037f57806395d89b41146103a957806396d8f4f3146103d3578063a22cb465146103fd578063b5aebc8014610425578063b88d4fde1461044157610165565b80633a50d04a116101225780633a50d04a1461028357806342842e0e1461029f57806361d027b3146102c75780636352211e146102f157806370a082311461032d578063715018a61461036957610165565b806301ffc9a71461016957806306fdde03146101a5578063081812fc146101cf578063095ea7b31461020b57806319bcef6d1461023357806323b872dd1461025b575b5f5ffd5b348015610174575f5ffd5b5061018f600480360381019061018a9190611f24565b6105bf565b60405161019c9190611f69565b60405180910390f35b3480156101b0575f5ffd5b506101b96106a0565b6040516101c69190611ff2565b60405180910390f35b3480156101da575f5ffd5b506101f560048036038101906101f09190612045565b61072f565b60405161020291906120af565b60405180910390f35b348015610216575f5ffd5b50610231600480360381019061022c91906120f2565b61074a565b005b34801561023e575f5ffd5b5061025960048036038101906102549190612130565b610760565b005b348015610266575f5ffd5b50610281600480360381019061027c919061215b565b6107ab565b005b61029d6004803603810190610298919061220c565b6108aa565b005b3480156102aa575f5ffd5b506102c560048036038101906102c0919061215b565b6108ba565b005b3480156102d2575f5ffd5b506102db6108d9565b6040516102e891906120af565b60405180910390f35b3480156102fc575f5ffd5b5061031760048036038101906103129190612045565b6108fe565b60405161032491906120af565b60405180910390f35b348015610338575f5ffd5b50610353600480360381019061034e9190612130565b61090f565b6040516103609190612278565b60405180910390f35b348015610374575f5ffd5b5061037d6109c5565b005b34801561038a575f5ffd5b506103936109d8565b6040516103a091906120af565b60405180910390f35b3480156103b4575f5ffd5b506103bd610a00565b6040516103ca9190611ff2565b60405180910390f35b3480156103de575f5ffd5b506103e7610a90565b6040516103f49190612278565b60405180910390f35b348015610408575f5ffd5b50610423600480360381019061041e91906122bb565b610a96565b005b61043f600480360381019061043a91906122f9565b610aac565b005b34801561044c575f5ffd5b506104676004803603810190610462919061246c565b610abb565b005b348015610474575f5ffd5b5061048f600480360381019061048a9190612045565b610ae0565b005b34801561049c575f5ffd5b506104b760048036038101906104b29190612045565b610af2565b6040516104c49190611ff2565b60405180910390f35b3480156104d8575f5ffd5b506104e1610b58565b6040516104ee9190612547565b60405180910390f35b348015610502575f5ffd5b5061051d60048036038101906105189190612045565b610b7d565b60405161052a9190612278565b60405180910390f35b34801561053e575f5ffd5b5061055960048036038101906105549190612560565b610b92565b6040516105669190611f69565b60405180910390f35b34801561057a575f5ffd5b5061059560048036038101906105909190612130565b610c20565b005b3480156105a2575f5ffd5b506105bd60048036038101906105b89190612130565b610cd9565b005b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061068957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610699575061069882610d5d565b5b9050919050565b60605f80546106ae906125cb565b80601f01602080910402602001604051908101604052809291908181526020018280546106da906125cb565b80156107255780601f106106fc57610100808354040283529160200191610725565b820191905f5260205f20905b81548152906001019060200180831161070857829003601f168201915b5050505050905090565b5f61073982610dc6565b5061074382610e4c565b9050919050565b61075c8282610757610e85565b610e8c565b5050565b610768610e9e565b80600a5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361081b575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161081291906120af565b60405180910390fd5b5f61082e8383610829610e85565b610f25565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108a4578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161089b939291906125fb565b60405180910390fd5b50505050565b6108b5838383611130565b505050565b6108d483838360405180602001604052805f815250610abb565b505050565b60085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f61090882610dc6565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610980575f6040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161097791906120af565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6109cd610e9e565b6109d65f611407565b565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610a0f906125cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3b906125cb565b8015610a865780601f10610a5d57610100808354040283529160200191610a86565b820191905f5260205f20905b815481529060010190602001808311610a6957829003601f168201915b5050505050905090565b60095481565b610aa8610aa1610e85565b83836114ca565b5050565b610ab7338383611130565b5050565b610ac68484846107ab565b610ada610ad1610e85565b85858585611633565b50505050565b610ae8610e9e565b8060098190555050565b6060610afd82610dc6565b505f610b076117df565b90505f815111610b255760405180602001604052805f815250610b50565b80610b2f846117f5565b604051602001610b4092919061266a565b6040516020818303038152906040525b915050919050565b600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b602052805f5260405f205f915090505481565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b610c28610e9e565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8d906126d7565b60405180910390fd5b8060085f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610ce1610e9e565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d51575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610d4891906120af565b60405180910390fd5b610d5a81611407565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f5f610dd1836118bf565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e4357826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610e3a9190612278565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b610e9983838360016118f8565b505050565b610ea6610e85565b73ffffffffffffffffffffffffffffffffffffffff16610ec46109d8565b73ffffffffffffffffffffffffffffffffffffffff1614610f2357610ee7610e85565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610f1a91906120af565b60405180910390fd5b565b5f5f610f30846118bf565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610f7157610f70818486611ab7565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ffc57610fb05f855f5f6118f8565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461107b57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b5f73ffffffffffffffffffffffffffffffffffffffff16600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036111bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b69061273f565b60405180910390fd5b600954341015611204576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111fb906127a7565b60405180910390fd5b5f60075f815480929190611217906127f2565b9190505590506112278482611b7a565b5f600a5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d3fc9864333487876040518563ffffffff1660e01b81526004016112889493929190612865565b6020604051808303815f875af11580156112a4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112c891906128b7565b905080600b5f8481526020019081526020015f20819055505f60085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16346040516113269061290f565b5f6040518083038185875af1925050503d805f8114611360576040519150601f19603f3d011682016040523d82523d5f602084013e611365565b606091505b50509050806113a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a09061296d565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167feb817a126be2ea5e14670f4e86ee9d207217af94254ecbc87f03b49566d2f37734858589896040516113f795949392919061298b565b60405180910390a2505050505050565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361153a57816040517f5b08ba1800000000000000000000000000000000000000000000000000000000815260040161153191906120af565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516116269190611f69565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b11156117d8578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b81526004016116919493929190612a29565b6020604051808303815f875af19250505080156116cc57506040513d601f19601f820116820180604052508101906116c99190612a87565b60015b61174d573d805f81146116fa576040519150601f19603f3d011682016040523d82523d5f602084013e6116ff565b606091505b505f81510361174557836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161173c91906120af565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146117d657836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016117cd91906120af565b60405180910390fd5b505b5050505050565b606060405180602001604052805f815250905090565b60605f600161180384611b97565b0190505f8167ffffffffffffffff81111561182157611820612348565b5b6040519080825280601f01601f1916602001820160405280156118535781602001600182028036833780820191505090505b5090505f82602083010190505b6001156118b4578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816118a9576118a8612ab2565b5b0494505f8503611860575b819350505050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061193057505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611a62575f61193f84610dc6565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156119a957508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156119bc57506119ba8184610b92565b155b156119fe57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016119f591906120af565b60405180910390fd5b8115611a6057838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611ac2838383611ce8565b611b75575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611b3657806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611b2d9190612278565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611b6c929190612adf565b60405180910390fd5b505050565b611b93828260405180602001604052805f815250611da8565b5050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611bf3577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611be957611be8612ab2565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611c30576d04ee2d6d415b85acef81000000008381611c2657611c25612ab2565b5b0492506020810190505b662386f26fc100008310611c5f57662386f26fc100008381611c5557611c54612ab2565b5b0492506010810190505b6305f5e1008310611c88576305f5e1008381611c7e57611c7d612ab2565b5b0492506008810190505b6127108310611cad576127108381611ca357611ca2612ab2565b5b0492506004810190505b60648310611cd05760648381611cc657611cc5612ab2565b5b0492506002810190505b600a8310611cdf576001810190505b80915050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611d9f57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611d605750611d5f8484610b92565b5b80611d9e57508273ffffffffffffffffffffffffffffffffffffffff16611d8683610e4c565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b611db28383611dcb565b611dc6611dbd610e85565b5f858585611633565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611e3b575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611e3291906120af565b60405180910390fd5b5f611e4783835f610f25565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611eb9575f6040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401611eb091906120af565b60405180910390fd5b505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611f0381611ecf565b8114611f0d575f5ffd5b50565b5f81359050611f1e81611efa565b92915050565b5f60208284031215611f3957611f38611ec7565b5b5f611f4684828501611f10565b91505092915050565b5f8115159050919050565b611f6381611f4f565b82525050565b5f602082019050611f7c5f830184611f5a565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611fc482611f82565b611fce8185611f8c565b9350611fde818560208601611f9c565b611fe781611faa565b840191505092915050565b5f6020820190508181035f83015261200a8184611fba565b905092915050565b5f819050919050565b61202481612012565b811461202e575f5ffd5b50565b5f8135905061203f8161201b565b92915050565b5f6020828403121561205a57612059611ec7565b5b5f61206784828501612031565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61209982612070565b9050919050565b6120a98161208f565b82525050565b5f6020820190506120c25f8301846120a0565b92915050565b6120d18161208f565b81146120db575f5ffd5b50565b5f813590506120ec816120c8565b92915050565b5f5f6040838503121561210857612107611ec7565b5b5f612115858286016120de565b925050602061212685828601612031565b9150509250929050565b5f6020828403121561214557612144611ec7565b5b5f612152848285016120de565b91505092915050565b5f5f5f6060848603121561217257612171611ec7565b5b5f61217f868287016120de565b9350506020612190868287016120de565b92505060406121a186828701612031565b9150509250925092565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126121cc576121cb6121ab565b5b8235905067ffffffffffffffff8111156121e9576121e86121af565b5b602083019150836001820283011115612205576122046121b3565b5b9250929050565b5f5f5f6040848603121561222357612222611ec7565b5b5f612230868287016120de565b935050602084013567ffffffffffffffff81111561225157612250611ecb565b5b61225d868287016121b7565b92509250509250925092565b61227281612012565b82525050565b5f60208201905061228b5f830184612269565b92915050565b61229a81611f4f565b81146122a4575f5ffd5b50565b5f813590506122b581612291565b92915050565b5f5f604083850312156122d1576122d0611ec7565b5b5f6122de858286016120de565b92505060206122ef858286016122a7565b9150509250929050565b5f5f6020838503121561230f5761230e611ec7565b5b5f83013567ffffffffffffffff81111561232c5761232b611ecb565b5b612338858286016121b7565b92509250509250929050565b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61237e82611faa565b810181811067ffffffffffffffff8211171561239d5761239c612348565b5b80604052505050565b5f6123af611ebe565b90506123bb8282612375565b919050565b5f67ffffffffffffffff8211156123da576123d9612348565b5b6123e382611faa565b9050602081019050919050565b828183375f83830152505050565b5f61241061240b846123c0565b6123a6565b90508281526020810184848401111561242c5761242b612344565b5b6124378482856123f0565b509392505050565b5f82601f830112612453576124526121ab565b5b81356124638482602086016123fe565b91505092915050565b5f5f5f5f6080858703121561248457612483611ec7565b5b5f612491878288016120de565b94505060206124a2878288016120de565b93505060406124b387828801612031565b925050606085013567ffffffffffffffff8111156124d4576124d3611ecb565b5b6124e08782880161243f565b91505092959194509250565b5f819050919050565b5f61250f61250a61250584612070565b6124ec565b612070565b9050919050565b5f612520826124f5565b9050919050565b5f61253182612516565b9050919050565b61254181612527565b82525050565b5f60208201905061255a5f830184612538565b92915050565b5f5f6040838503121561257657612575611ec7565b5b5f612583858286016120de565b9250506020612594858286016120de565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806125e257607f821691505b6020821081036125f5576125f461259e565b5b50919050565b5f60608201905061260e5f8301866120a0565b61261b6020830185612269565b61262860408301846120a0565b949350505050565b5f81905092915050565b5f61264482611f82565b61264e8185612630565b935061265e818560208601611f9c565b80840191505092915050565b5f612675828561263a565b9150612681828461263a565b91508190509392505050565b7f496e76616c6964207472656173757279206164647265737300000000000000005f82015250565b5f6126c1601883611f8c565b91506126cc8261268d565b602082019050919050565b5f6020820190508181035f8301526126ee816126b5565b9050919050565b7f5265636569707420636f6e7472616374206e6f742073657400000000000000005f82015250565b5f612729601883611f8c565b9150612734826126f5565b602082019050919050565b5f6020820190508181035f8301526127568161271d565b9050919050565b7f446f6e6174696f6e2062656c6f77206d696e696d756d000000000000000000005f82015250565b5f612791601683611f8c565b915061279c8261275d565b602082019050919050565b5f6020820190508181035f8301526127be81612785565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6127fc82612012565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361282e5761282d6127c5565b5b600182019050919050565b5f6128448385611f8c565b93506128518385846123f0565b61285a83611faa565b840190509392505050565b5f6060820190506128785f8301876120a0565b6128856020830186612269565b8181036040830152612898818486612839565b905095945050505050565b5f815190506128b18161201b565b92915050565b5f602082840312156128cc576128cb611ec7565b5b5f6128d9848285016128a3565b91505092915050565b5f81905092915050565b50565b5f6128fa5f836128e2565b9150612905826128ec565b5f82019050919050565b5f612919826128ef565b9150819050919050565b7f5472616e7366657220746f207472656173757279206661696c656400000000005f82015250565b5f612957601b83611f8c565b915061296282612923565b602082019050919050565b5f6020820190508181035f8301526129848161294b565b9050919050565b5f60808201905061299e5f830188612269565b6129ab6020830187612269565b6129b86040830186612269565b81810360608301526129cb818486612839565b90509695505050505050565b5f81519050919050565b5f82825260208201905092915050565b5f6129fb826129d7565b612a0581856129e1565b9350612a15818560208601611f9c565b612a1e81611faa565b840191505092915050565b5f608082019050612a3c5f8301876120a0565b612a4960208301866120a0565b612a566040830185612269565b8181036060830152612a6881846129f1565b905095945050505050565b5f81519050612a8181611efa565b92915050565b5f60208284031215612a9c57612a9b611ec7565b5b5f612aa984828501612a73565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f604082019050612af25f8301856120a0565b612aff6020830184612269565b939250505056fea2646970667358221220313d8f6dbb22aa9ad9692a4765fb0d758bb875dd505560b1f15cdecdc696130c64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611447380380611447833981810160405281019061003191906101d7565b805f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610211565b60405180910390fd5b6100b1816100b860201b60201c565b505061022a565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101a68261017d565b9050919050565b6101b68161019c565b81146101c0575f5ffd5b50565b5f815190506101d1816101ad565b92915050565b5f602082840312156101ec576101eb610179565b5b5f6101f9848285016101c3565b91505092915050565b61020b8161019c565b82525050565b5f6020820190506102245f830184610202565b92915050565b611210806102375f395ff3fe608060405234801561000f575f5ffd5b5060043610610091575f3560e01c8063b9209e3311610064578063b9209e331461010e578063ceb68c231461013e578063d42b291c1461015a578063d7bfe38614610176578063f2fde38b146101a657610091565b8063715018a61461009557806374d4e4911461009f5780638da5cb5b146100bd578063a622ee7c146100db575b5f5ffd5b61009d6101c2565b005b6100a76101d5565b6040516100b491906109f6565b60405180910390f35b6100c56101e1565b6040516100d29190610a4e565b60405180910390f35b6100f560048036038101906100f09190610a99565b610208565b6040516101059493929190610bc1565b60405180910390f35b61012860048036038101906101239190610a99565b610358565b6040516101359190610c12565b60405180910390f35b61015860048036038101906101539190610a99565b6103ac565b005b610174600480360381019061016f9190610caf565b6104db565b005b610190600480360381019061018b9190610d7c565b6107d0565b60405161019d9190610a4e565b60405180910390f35b6101c060048036038101906101bb9190610a99565b61080b565b005b6101ca61088f565b6101d35f610916565b565b5f600280549050905090565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6001602052805f5260405f205f91509050805f015f9054906101000a900460ff1690805f0160019054906101000a900460ff169080600101805461024b90610dd4565b80601f016020809104026020016040519081016040528092919081815260200182805461027790610dd4565b80156102c25780601f10610299576101008083540402835291602001916102c2565b820191905f5260205f20905b8154815290600101906020018083116102a557829003601f168201915b5050505050908060020180546102d790610dd4565b80601f016020809104026020016040519081016040528092919081815260200182805461030390610dd4565b801561034e5780601f106103255761010080835404028352916020019161034e565b820191905f5260205f20905b81548152906001019060200180831161033157829003601f168201915b5050505050905084565b5f60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f9054906101000a900460ff169050919050565b6103b461088f565b60015f8273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f9054906101000a900460ff1661043f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043690610e4e565b60405180910390fd5b5f60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f6101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167fe71f3a50e5ad81964f352c411f1d45e35438ecd1acecef59ac81d9fbbf6cbc0a60405160405180910390a250565b6104e361088f565b5f73ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1603610551576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054890610eb6565b60405180910390fd5b60015f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f9054906101000a900460ff1661060257600286908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b604051806080016040528060011515815260200186600481111561062957610628610ade565b5b815260200185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f82011690508083019250505050505050815260200183838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081525060015f8873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f820151815f015f6101000a81548160ff0219169083151502179055506020820151815f0160016101000a81548160ff0219169083600481111561074257610741610ade565b5b0217905550604082015181600101908161075c91906110a1565b50606082015181600201908161077291906110a1565b509050508573ffffffffffffffffffffffffffffffffffffffff167f2fd0700714a414f11b346377d8d0293efd61f31a73553a5dd655fae3c7838ec88686866040516107c0939291906111aa565b60405180910390a2505050505050565b600281815481106107df575f80fd5b905f5260205f20015f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61081361088f565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610883575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161087a9190610a4e565b60405180910390fd5b61088c81610916565b50565b6108976109d7565b73ffffffffffffffffffffffffffffffffffffffff166108b56101e1565b73ffffffffffffffffffffffffffffffffffffffff1614610914576108d86109d7565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161090b9190610a4e565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b5f819050919050565b6109f0816109de565b82525050565b5f602082019050610a095f8301846109e7565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a3882610a0f565b9050919050565b610a4881610a2e565b82525050565b5f602082019050610a615f830184610a3f565b92915050565b5f5ffd5b5f5ffd5b610a7881610a2e565b8114610a82575f5ffd5b50565b5f81359050610a9381610a6f565b92915050565b5f60208284031215610aae57610aad610a67565b5b5f610abb84828501610a85565b91505092915050565b5f8115159050919050565b610ad881610ac4565b82525050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b60058110610b1c57610b1b610ade565b5b50565b5f819050610b2c82610b0b565b919050565b5f610b3b82610b1f565b9050919050565b610b4b81610b31565b82525050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610b9382610b51565b610b9d8185610b5b565b9350610bad818560208601610b6b565b610bb681610b79565b840191505092915050565b5f608082019050610bd45f830187610acf565b610be16020830186610b42565b8181036040830152610bf38185610b89565b90508181036060830152610c078184610b89565b905095945050505050565b5f602082019050610c255f830184610acf565b92915050565b60058110610c37575f5ffd5b50565b5f81359050610c4881610c2b565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f840112610c6f57610c6e610c4e565b5b8235905067ffffffffffffffff811115610c8c57610c8b610c52565b5b602083019150836001820283011115610ca857610ca7610c56565b5b9250929050565b5f5f5f5f5f5f60808789031215610cc957610cc8610a67565b5b5f610cd689828a01610a85565b9650506020610ce789828a01610c3a565b955050604087013567ffffffffffffffff811115610d0857610d07610a6b565b5b610d1489828a01610c5a565b9450945050606087013567ffffffffffffffff811115610d3757610d36610a6b565b5b610d4389828a01610c5a565b92509250509295509295509295565b610d5b816109de565b8114610d65575f5ffd5b50565b5f81359050610d7681610d52565b92915050565b5f60208284031215610d9157610d90610a67565b5b5f610d9e84828501610d68565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610deb57607f821691505b602082108103610dfe57610dfd610da7565b5b50919050565b7f5661756c74206e6f7420766572696669656400000000000000000000000000005f82015250565b5f610e38601283610b5b565b9150610e4382610e04565b602082019050919050565b5f6020820190508181035f830152610e6581610e2c565b9050919050565b7f496e76616c6964206164647265737300000000000000000000000000000000005f82015250565b5f610ea0600f83610b5b565b9150610eab82610e6c565b602082019050919050565b5f6020820190508181035f830152610ecd81610e94565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302610f5d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610f22565b610f678683610f22565b95508019841693508086168417925050509392505050565b5f819050919050565b5f610fa2610f9d610f98846109de565b610f7f565b6109de565b9050919050565b5f819050919050565b610fbb83610f88565b610fcf610fc782610fa9565b848454610f2e565b825550505050565b5f5f905090565b610fe6610fd7565b610ff1818484610fb2565b505050565b5b81811015611014576110095f82610fde565b600181019050610ff7565b5050565b601f8211156110595761102a81610f01565b61103384610f13565b81016020851015611042578190505b61105661104e85610f13565b830182610ff6565b50505b505050565b5f82821c905092915050565b5f6110795f198460080261105e565b1980831691505092915050565b5f611091838361106a565b9150826002028217905092915050565b6110aa82610b51565b67ffffffffffffffff8111156110c3576110c2610ed4565b5b6110cd8254610dd4565b6110d8828285611018565b5f60209050601f831160018114611109575f84156110f7578287015190505b6111018582611086565b865550611168565b601f19841661111786610f01565b5f5b8281101561113e57848901518255600182019150602085019450602081019050611119565b8683101561115b5784890151611157601f89168261106a565b8355505b6001600288020188555050505b505050505050565b828183375f83830152505050565b5f6111898385610b5b565b9350611196838584611170565b61119f83610b79565b840190509392505050565b5f6040820190506111bd5f830186610b42565b81810360208301526111d081848661117e565b905094935050505056fea26469706673582212203aabaefb141956df659da534e746580bf8c524e5bd1e1d874f40b99cc7a8205464736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051612a98380380612a988339818101604052810190610031919061021f565b815f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610099919061026c565b60405180910390fd5b6100b18161010060201b60201c565b50600180819055508060025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610285565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101ee826101c5565b9050919050565b6101fe816101e4565b8114610208575f5ffd5b50565b5f81519050610219816101f5565b92915050565b5f5f60408385031215610235576102346101c1565b5b5f6102428582860161020b565b92505060206102538582860161020b565b9150509250929050565b610266816101e4565b82525050565b5f60208201905061027f5f83018461025d565b92915050565b612806806102925f395ff3fe608060405234801561000f575f5ffd5b50600436106100fe575f3560e01c80638da5cb5b11610095578063e3aa594511610064578063e3aa5945146102a8578063f07a380e146102c4578063f23a6e61146102e0578063f2fde38b14610310576100fe565b80638da5cb5b14610222578063bc197c8114610240578063d6bd07ee14610270578063d74238581461028c576100fe565b8063715018a6116100d1578063715018a6146101ae578063736616e5146101b85780637b103999146101d457806381bd34d2146101f2576100fe565b806301ffc9a714610102578063150b7a02146101325780632ff1d0f9146101625780636f39becd1461017e575b5f5ffd5b61011c60048036038101906101179190611b9d565b61032c565b6040516101299190611be2565b60405180910390f35b61014c60048036038101906101479190611dc4565b6103a5565b6040516101599190611e53565b60405180910390f35b61017c60048036038101906101779190611e6c565b610568565b005b61019860048036038101906101939190611ebc565b6107b6565b6040516101a59190611f09565b60405180910390f35b6101b66107f3565b005b6101d260048036038101906101cd9190611f22565b610806565b005b6101dc6109e8565b6040516101e99190611ff4565b60405180910390f35b61020c6004803603810190610207919061200d565b610a0d565b604051610219919061206c565b60405180910390f35b61022a610a38565b6040516102379190611f09565b60405180910390f35b61025a60048036038101906102559190612149565b610a5f565b6040516102679190611e53565b60405180910390f35b61028a60048036038101906102859190612214565b610cc6565b005b6102a660048036038101906102a1919061200d565b611010565b005b6102c260048036038101906102bd919061200d565b611351565b005b6102de60048036038101906102d99190611ebc565b611452565b005b6102fa60048036038101906102f59190612278565b61168e565b6040516103079190611e53565b60405180910390f35b61032a6004803603810190610325919061230b565b611871565b005b5f7f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061039e575061039d826118f5565b5b9050919050565b5f5f84905060025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33866040518263ffffffff1660e01b81526004016104049190611f09565b602060405180830381865afa15801561041f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104439190612360565b8015610450575060208351145b1561046c578280602001905181019061046991906123c6565b90505b8060035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16843373ffffffffffffffffffffffffffffffffffffffff167fa349089d44ee0cba13ab0db2f1b5d165ea1ecc08bf03fbeca19528f3a8d6158e60405160405180910390a461055d8686868661195e565b915050949350505050565b610570611971565b8060045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054101561063a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106319061244b565b60405180910390fd5b8060045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546106d09190612496565b925050819055508273ffffffffffffffffffffffffffffffffffffffff1663f242432a303385856040518563ffffffff1660e01b815260040161071694939291906124fc565b5f604051808303815f87803b15801561072d575f5ffd5b505af115801561073f573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167faa34c4000e873f79481cfa2eb5c4240deebba80b6c80db2400bc381346bd476c846040516107a1919061206c565b60405180910390a46107b16119b7565b505050565b6003602052815f5260405f20602052805f5260405f205f915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6107fb6119c0565b6108045f611a47565b565b61080e6119c0565b8260045f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205410156108d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108cf9061244b565b60405180910390fd5b8260045f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461096e9190612496565b925050819055508473ffffffffffffffffffffffffffffffffffffffff1663f242432a308387876040518563ffffffff1660e01b81526004016109b494939291906124fc565b5f604051808303815f87803b1580156109cb575f5ffd5b505af11580156109dd573d5f5f3e3d5ffd5b505050505050505050565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6004602052825f5260405f20602052815f5260405f20602052805f5260405f205f9250925050505481565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f5f85905060025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33876040518263ffffffff1660e01b8152600401610abe9190611f09565b602060405180830381865afa158015610ad9573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610afd9190612360565b8015610b0a575060208351145b15610b265782806020019051810190610b2391906123c6565b90505b5f5f90505b8551811015610cac57848181518110610b4757610b46612552565b5b602002602001015160045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f888481518110610ba057610b9f612552565b5b602002602001015181526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254610bfe919061257f565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16868281518110610c2f57610c2e612552565b5b60200260200101513373ffffffffffffffffffffffffffffffffffffffff167fc6aeb16b3b1e633a76505aeab4fa027af5a0b07bbb7f887db0d5540f134b23e2888581518110610c8257610c81612552565b5b6020026020010151604051610c97919061206c565b60405180910390a48080600101915050610b2b565b50610cba8787878787611b08565b91505095945050505050565b610cce611971565b8160045f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610d98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8f9061244b565b60405180910390fd5b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33826040518263ffffffff1660e01b8152600401610df29190611f09565b602060405180830381865afa158015610e0d573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e319190612360565b610e70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e67906125fc565b60405180910390fd5b8160045f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8581526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f828254610f069190612496565b925050819055508373ffffffffffffffffffffffffffffffffffffffff1663f242432a3083868633604051602001610f3e9190611f09565b6040516020818303038152906040526040518663ffffffff1660e01b8152600401610f6d95949392919061266a565b5f604051808303815f87803b158015610f84575f5ffd5b505af1158015610f96573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16838573ffffffffffffffffffffffffffffffffffffffff167fd582bedecbd2dd155388cbc6af3e7daa8e04e74c73a249bae6ccd77469fafcd18585604051610ffa9291906126c2565b60405180910390a461100a6119b7565b50505050565b611018611971565b3373ffffffffffffffffffffffffffffffffffffffff1660035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146110f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e890612733565b60405180910390fd5b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33826040518263ffffffff1660e01b815260040161114b9190611f09565b602060405180830381865afa158015611166573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061118a9190612360565b6111c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c0906125fc565b60405180910390fd5b5f60035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff1663b88d4fde308385336040516020016112839190611f09565b6040516020818303038152906040526040518563ffffffff1660e01b81526004016112b19493929190612751565b5f604051808303815f87803b1580156112c8575f5ffd5b505af11580156112da573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167f9b34ec19b103f833128943e3a55d52b7c85ebe22d50e8b2cc0e300c0192b7d798460405161133c9190611f09565b60405180910390a461134c6119b7565b505050565b6113596119c0565b5f60035f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff166342842e0e3083856040518463ffffffff1660e01b81526004016114209392919061279b565b5f604051808303815f87803b158015611437575f5ffd5b505af1158015611449573d5f5f3e3d5ffd5b50505050505050565b61145a611971565b3373ffffffffffffffffffffffffffffffffffffffff1660035f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152a90612733565b60405180910390fd5b5f60035f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff166342842e0e3033846040518463ffffffff1660e01b81526004016115fa9392919061279b565b5f604051808303815f87803b158015611611575f5ffd5b505af1158015611623573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff16818373ffffffffffffffffffffffffffffffffffffffff167fc21cae409cff297c64f8c28b3373b843939c0228b3c1e11580a310cef0c819dc60405160405180910390a461168a6119b7565b5050565b5f5f85905060025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b9209e33876040518263ffffffff1660e01b81526004016116ed9190611f09565b602060405180830381865afa158015611708573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061172c9190612360565b8015611739575060208351145b15611755578280602001905181019061175291906123c6565b90505b8360045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8781526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546117eb919061257f565b925050819055508073ffffffffffffffffffffffffffffffffffffffff16853373ffffffffffffffffffffffffffffffffffffffff167fc6aeb16b3b1e633a76505aeab4fa027af5a0b07bbb7f887db0d5540f134b23e287604051611850919061206c565b60405180910390a46118658787878787611b1c565b91505095945050505050565b6118796119c0565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036118e9575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016118e09190611f09565b60405180910390fd5b6118f281611a47565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f63150b7a0260e01b9050949350505050565b6002600154036119ad576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600181905550565b60018081905550565b6119c8611b30565b73ffffffffffffffffffffffffffffffffffffffff166119e6610a38565b73ffffffffffffffffffffffffffffffffffffffff1614611a4557611a09611b30565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611a3c9190611f09565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f63bc197c8160e01b905095945050505050565b5f63f23a6e6160e01b905095945050505050565b5f33905090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611b7c81611b48565b8114611b86575f5ffd5b50565b5f81359050611b9781611b73565b92915050565b5f60208284031215611bb257611bb1611b40565b5b5f611bbf84828501611b89565b91505092915050565b5f8115159050919050565b611bdc81611bc8565b82525050565b5f602082019050611bf55f830184611bd3565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611c2482611bfb565b9050919050565b611c3481611c1a565b8114611c3e575f5ffd5b50565b5f81359050611c4f81611c2b565b92915050565b5f819050919050565b611c6781611c55565b8114611c71575f5ffd5b50565b5f81359050611c8281611c5e565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b611cd682611c90565b810181811067ffffffffffffffff82111715611cf557611cf4611ca0565b5b80604052505050565b5f611d07611b37565b9050611d138282611ccd565b919050565b5f67ffffffffffffffff821115611d3257611d31611ca0565b5b611d3b82611c90565b9050602081019050919050565b828183375f83830152505050565b5f611d68611d6384611d18565b611cfe565b905082815260208101848484011115611d8457611d83611c8c565b5b611d8f848285611d48565b509392505050565b5f82601f830112611dab57611daa611c88565b5b8135611dbb848260208601611d56565b91505092915050565b5f5f5f5f60808587031215611ddc57611ddb611b40565b5b5f611de987828801611c41565b9450506020611dfa87828801611c41565b9350506040611e0b87828801611c74565b925050606085013567ffffffffffffffff811115611e2c57611e2b611b44565b5b611e3887828801611d97565b91505092959194509250565b611e4d81611b48565b82525050565b5f602082019050611e665f830184611e44565b92915050565b5f5f5f60608486031215611e8357611e82611b40565b5b5f611e9086828701611c41565b9350506020611ea186828701611c74565b9250506040611eb286828701611c74565b9150509250925092565b5f5f60408385031215611ed257611ed1611b40565b5b5f611edf85828601611c41565b9250506020611ef085828601611c74565b9150509250929050565b611f0381611c1a565b82525050565b5f602082019050611f1c5f830184611efa565b92915050565b5f5f5f5f5f60a08688031215611f3b57611f3a611b40565b5b5f611f4888828901611c41565b9550506020611f5988828901611c74565b9450506040611f6a88828901611c74565b9350506060611f7b88828901611c41565b9250506080611f8c88828901611c41565b9150509295509295909350565b5f819050919050565b5f611fbc611fb7611fb284611bfb565b611f99565b611bfb565b9050919050565b5f611fcd82611fa2565b9050919050565b5f611fde82611fc3565b9050919050565b611fee81611fd4565b82525050565b5f6020820190506120075f830184611fe5565b92915050565b5f5f5f6060848603121561202457612023611b40565b5b5f61203186828701611c41565b935050602061204286828701611c74565b925050604061205386828701611c41565b9150509250925092565b61206681611c55565b82525050565b5f60208201905061207f5f83018461205d565b92915050565b5f67ffffffffffffffff82111561209f5761209e611ca0565b5b602082029050602081019050919050565b5f5ffd5b5f6120c66120c184612085565b611cfe565b905080838252602082019050602084028301858111156120e9576120e86120b0565b5b835b8181101561211257806120fe8882611c74565b8452602084019350506020810190506120eb565b5050509392505050565b5f82601f8301126121305761212f611c88565b5b81356121408482602086016120b4565b91505092915050565b5f5f5f5f5f60a0868803121561216257612161611b40565b5b5f61216f88828901611c41565b955050602061218088828901611c41565b945050604086013567ffffffffffffffff8111156121a1576121a0611b44565b5b6121ad8882890161211c565b935050606086013567ffffffffffffffff8111156121ce576121cd611b44565b5b6121da8882890161211c565b925050608086013567ffffffffffffffff8111156121fb576121fa611b44565b5b61220788828901611d97565b9150509295509295909350565b5f5f5f5f6080858703121561222c5761222b611b40565b5b5f61223987828801611c41565b945050602061224a87828801611c74565b935050604061225b87828801611c74565b925050606061226c87828801611c41565b91505092959194509250565b5f5f5f5f5f60a0868803121561229157612290611b40565b5b5f61229e88828901611c41565b95505060206122af88828901611c41565b94505060406122c088828901611c74565b93505060606122d188828901611c74565b925050608086013567ffffffffffffffff8111156122f2576122f1611b44565b5b6122fe88828901611d97565b9150509295509295909350565b5f602082840312156123205761231f611b40565b5b5f61232d84828501611c41565b91505092915050565b61233f81611bc8565b8114612349575f5ffd5b50565b5f8151905061235a81612336565b92915050565b5f6020828403121561237557612374611b40565b5b5f6123828482850161234c565b91505092915050565b5f61239582611bfb565b9050919050565b6123a58161238b565b81146123af575f5ffd5b50565b5f815190506123c08161239c565b92915050565b5f602082840312156123db576123da611b40565b5b5f6123e8848285016123b2565b91505092915050565b5f82825260208201905092915050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f6124356014836123f1565b915061244082612401565b602082019050919050565b5f6020820190508181035f83015261246281612429565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6124a082611c55565b91506124ab83611c55565b92508282039050818111156124c3576124c2612469565b5b92915050565b5f82825260208201905092915050565b50565b5f6124e75f836124c9565b91506124f2826124d9565b5f82019050919050565b5f60a08201905061250f5f830187611efa565b61251c6020830186611efa565b612529604083018561205d565b612536606083018461205d565b8181036080830152612547816124dc565b905095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f61258982611c55565b915061259483611c55565b92508282019050808211156125ac576125ab612469565b5b92915050565b7f44657374696e6174696f6e206e6f7420766572696669656400000000000000005f82015250565b5f6125e66018836123f1565b91506125f1826125b2565b602082019050919050565b5f6020820190508181035f830152612613816125da565b9050919050565b5f81519050919050565b8281835e5f83830152505050565b5f61263c8261261a565b61264681856124c9565b9350612656818560208601612624565b61265f81611c90565b840191505092915050565b5f60a08201905061267d5f830188611efa565b61268a6020830187611efa565b612697604083018661205d565b6126a4606083018561205d565b81810360808301526126b68184612632565b90509695505050505050565b5f6040820190506126d55f83018561205d565b6126e26020830184611efa565b9392505050565b7f4e6f7420746865206f776e6572000000000000000000000000000000000000005f82015250565b5f61271d600d836123f1565b9150612728826126e9565b602082019050919050565b5f6020820190508181035f83015261274a81612711565b9050919050565b5f6080820190506127645f830187611efa565b6127716020830186611efa565b61277e604083018561205d565b81810360608301526127908184612632565b905095945050505050565b5f6060820190506127ae5f830186611efa565b6127bb6020830185611efa565b6127c8604083018461205d565b94935050505056fea264697066735822122075ae49415b3b9bcfd1ed1889444f44b592c5c75f4b20c68d85c37cb91a2033ca64736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b50604051611fd1380380611fd1833981810160405281019061003191906101de565b805f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a2575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100999190610218565b60405180910390fd5b6100b1816100bf60201b60201c565b506001808190555050610231565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101ad82610184565b9050919050565b6101bd816101a3565b81146101c7575f5ffd5b50565b5f815190506101d8816101b4565b92915050565b5f602082840312156101f3576101f2610180565b5b5f610200848285016101ca565b91505092915050565b610212816101a3565b82525050565b5f60208201905061022b5f830184610209565b92915050565b611d938061023e5f395ff3fe608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c8063715018a61161006f578063715018a6146101c25780638da5cb5b146101cc578063bc197c81146101ea578063d18ff60d1461021a578063f23a6e6114610250578063f2fde38b14610280576100b2565b806301ffc9a7146100b65780630cbe4dba146100e6578063150b7a02146101165780632dabbeed146101465780633c58e54d14610162578063552e612214610192575b5f5ffd5b6100d060048036038101906100cb9190611209565b61029c565b6040516100dd919061124e565b60405180910390f35b61010060048036038101906100fb91906112f4565b610315565b60405161010d9190611353565b60405180910390f35b610130600480360381019061012b91906114a8565b6105dd565b60405161013d9190611537565b60405180910390f35b610160600480360381019061015b9190611550565b6105f0565b005b61017c60048036038101906101779190611550565b610987565b6040516101899190611634565b60405180910390f35b6101ac60048036038101906101a7919061164d565b610aae565b6040516101b99190611353565b60405180910390f35b6101ca610dbb565b005b6101d4610dce565b6040516101e191906116c0565b60405180910390f35b61020460048036038101906101ff919061179d565b610df5565b6040516102119190611537565b60405180910390f35b610234600480360381019061022f9190611550565b610e09565b6040516102479796959493929190611868565b60405180910390f35b61026a600480360381019061026591906118d5565b610e9e565b6040516102779190611537565b60405180910390f35b61029a60048036038101906102959190611968565b610eb2565b005b5f7f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061030e575061030d82610f36565b5b9050919050565b5f61031e610f9f565b5f8211610360576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610357906119ed565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff166342842e0e3330866040518463ffffffff1660e01b815260040161039d93929190611a0b565b5f604051808303815f87803b1580156103b4575f5ffd5b505af11580156103c6573d5f5f3e3d5ffd5b505050505f60025f8154809291906103dd90611a6d565b9190505590506040518060e001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200160018152602001844261043f9190611ab4565b81526020015f151581526020016001151581525060035f8381526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015f6101000a81548160ff02191690831515021790555060c08201518160050160016101000a81548160ff0219169083151502179055509050508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16827fec0f8fed70f265f73b45dd74259056ae4acd043642455aa46d24f48df057fe9e8760035f8781526020019081526020015f20600401546040516105c2929190611ae7565b60405180910390a4809150506105d6610fe5565b9392505050565b5f63150b7a0260e01b9050949350505050565b6105f8610f9f565b5f60035f8381526020019081526020015f2090508060050160019054906101000a900460ff1661065d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065490611b58565b60405180910390fd5b80600401544210156106a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069b90611be6565b60405180910390fd5b805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806107325750610703610dce565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610771576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076890611c4e565b60405180910390fd5b5f8160050160016101000a81548160ff021916908315150217905550806005015f9054906101000a900460ff161561086157806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a30835f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846002015485600301546040518563ffffffff1660e01b815260040161082f9493929190611c9f565b5f604051808303815f87803b158015610846575f5ffd5b505af1158015610858573d5f5f3e3d5ffd5b50505050610915565b806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e30835f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600201546040518463ffffffff1660e01b81526004016108e793929190611a0b565b5f604051808303815f87803b1580156108fe575f5ffd5b505af1158015610910573d5f5f3e3d5ffd5b505050505b805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16827fad9cdcb2840b4617f049a64be1811ef181a6c0925da58f0a537a37c93052bdd360405160405180910390a350610984610fe5565b50565b61098f61113d565b60035f8381526020019081526020015f206040518060e00160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582015f9054906101000a900460ff161515151581526020016005820160019054906101000a900460ff1615151515815250509050919050565b5f610ab7610f9f565b5f8211610af9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af0906119ed565b60405180910390fd5b5f8311610b3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3290611d3f565b60405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff1663f242432a333087876040518563ffffffff1660e01b8152600401610b7a9493929190611c9f565b5f604051808303815f87803b158015610b91575f5ffd5b505af1158015610ba3573d5f5f3e3d5ffd5b505050505f60025f815480929190610bba90611a6d565b9190505590506040518060e001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018442610c1b9190611ab4565b81526020016001151581526020016001151581525060035f8381526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005015f6101000a81548160ff02191690831515021790555060c08201518160050160016101000a81548160ff0219169083151502179055509050508573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16827fec0f8fed70f265f73b45dd74259056ae4acd043642455aa46d24f48df057fe9e8860035f8781526020019081526020015f2060040154604051610d9f929190611ae7565b60405180910390a480915050610db3610fe5565b949350505050565b610dc3610fee565b610dcc5f611075565b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f63bc197c8160e01b905095945050505050565b6003602052805f5260405f205f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002015490806003015490806004015490806005015f9054906101000a900460ff16908060050160019054906101000a900460ff16905087565b5f63f23a6e6160e01b905095945050505050565b610eba610fee565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f2a575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610f2191906116c0565b60405180910390fd5b610f3381611075565b50565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600260015403610fdb576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600181905550565b60018081905550565b610ff6611136565b73ffffffffffffffffffffffffffffffffffffffff16611014610dce565b73ffffffffffffffffffffffffffffffffffffffff161461107357611037611136565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161106a91906116c0565b60405180910390fd5b565b5f5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050815f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f33905090565b6040518060e001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f81526020015f151581526020015f151581525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6111e8816111b4565b81146111f2575f5ffd5b50565b5f81359050611203816111df565b92915050565b5f6020828403121561121e5761121d6111ac565b5b5f61122b848285016111f5565b91505092915050565b5f8115159050919050565b61124881611234565b82525050565b5f6020820190506112615f83018461123f565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61129082611267565b9050919050565b6112a081611286565b81146112aa575f5ffd5b50565b5f813590506112bb81611297565b92915050565b5f819050919050565b6112d3816112c1565b81146112dd575f5ffd5b50565b5f813590506112ee816112ca565b92915050565b5f5f5f6060848603121561130b5761130a6111ac565b5b5f611318868287016112ad565b9350506020611329868287016112e0565b925050604061133a868287016112e0565b9150509250925092565b61134d816112c1565b82525050565b5f6020820190506113665f830184611344565b92915050565b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6113ba82611374565b810181811067ffffffffffffffff821117156113d9576113d8611384565b5b80604052505050565b5f6113eb6111a3565b90506113f782826113b1565b919050565b5f67ffffffffffffffff82111561141657611415611384565b5b61141f82611374565b9050602081019050919050565b828183375f83830152505050565b5f61144c611447846113fc565b6113e2565b90508281526020810184848401111561146857611467611370565b5b61147384828561142c565b509392505050565b5f82601f83011261148f5761148e61136c565b5b813561149f84826020860161143a565b91505092915050565b5f5f5f5f608085870312156114c0576114bf6111ac565b5b5f6114cd878288016112ad565b94505060206114de878288016112ad565b93505060406114ef878288016112e0565b925050606085013567ffffffffffffffff8111156115105761150f6111b0565b5b61151c8782880161147b565b91505092959194509250565b611531816111b4565b82525050565b5f60208201905061154a5f830184611528565b92915050565b5f60208284031215611565576115646111ac565b5b5f611572848285016112e0565b91505092915050565b61158481611286565b82525050565b611593816112c1565b82525050565b6115a281611234565b82525050565b60e082015f8201516115bc5f85018261157b565b5060208201516115cf602085018261157b565b5060408201516115e2604085018261158a565b5060608201516115f5606085018261158a565b506080820151611608608085018261158a565b5060a082015161161b60a0850182611599565b5060c082015161162e60c0850182611599565b50505050565b5f60e0820190506116475f8301846115a8565b92915050565b5f5f5f5f60808587031215611665576116646111ac565b5b5f611672878288016112ad565b9450506020611683878288016112e0565b9350506040611694878288016112e0565b92505060606116a5878288016112e0565b91505092959194509250565b6116ba81611286565b82525050565b5f6020820190506116d35f8301846116b1565b92915050565b5f67ffffffffffffffff8211156116f3576116f2611384565b5b602082029050602081019050919050565b5f5ffd5b5f61171a611715846116d9565b6113e2565b9050808382526020820190506020840283018581111561173d5761173c611704565b5b835b81811015611766578061175288826112e0565b84526020840193505060208101905061173f565b5050509392505050565b5f82601f8301126117845761178361136c565b5b8135611794848260208601611708565b91505092915050565b5f5f5f5f5f60a086880312156117b6576117b56111ac565b5b5f6117c3888289016112ad565b95505060206117d4888289016112ad565b945050604086013567ffffffffffffffff8111156117f5576117f46111b0565b5b61180188828901611770565b935050606086013567ffffffffffffffff811115611822576118216111b0565b5b61182e88828901611770565b925050608086013567ffffffffffffffff81111561184f5761184e6111b0565b5b61185b8882890161147b565b9150509295509295909350565b5f60e08201905061187b5f83018a6116b1565b61188860208301896116b1565b6118956040830188611344565b6118a26060830187611344565b6118af6080830186611344565b6118bc60a083018561123f565b6118c960c083018461123f565b98975050505050505050565b5f5f5f5f5f60a086880312156118ee576118ed6111ac565b5b5f6118fb888289016112ad565b955050602061190c888289016112ad565b945050604061191d888289016112e0565b935050606061192e888289016112e0565b925050608086013567ffffffffffffffff81111561194f5761194e6111b0565b5b61195b8882890161147b565b9150509295509295909350565b5f6020828403121561197d5761197c6111ac565b5b5f61198a848285016112ad565b91505092915050565b5f82825260208201905092915050565b7f4475726174696f6e206d75737420626520706f736974697665000000000000005f82015250565b5f6119d7601983611993565b91506119e2826119a3565b602082019050919050565b5f6020820190508181035f830152611a04816119cb565b9050919050565b5f606082019050611a1e5f8301866116b1565b611a2b60208301856116b1565b611a386040830184611344565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f611a77826112c1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611aa957611aa8611a40565b5b600182019050919050565b5f611abe826112c1565b9150611ac9836112c1565b9250828201905080821115611ae157611ae0611a40565b5b92915050565b5f604082019050611afa5f830185611344565b611b076020830184611344565b9392505050565b7f45786869626974696f6e206e6f742061637469766500000000000000000000005f82015250565b5f611b42601583611993565b9150611b4d82611b0e565b602082019050919050565b5f6020820190508181035f830152611b6f81611b36565b9050919050565b7f45786869626974696f6e20706572696f64206e6f7420796574206578706972655f8201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b5f611bd0602183611993565b9150611bdb82611b76565b604082019050919050565b5f6020820190508181035f830152611bfd81611bc4565b9050919050565b7f4f6e6c79206f776e6572206f722061646d696e2063616e207265636c61696d005f82015250565b5f611c38601f83611993565b9150611c4382611c04565b602082019050919050565b5f6020820190508181035f830152611c6581611c2c565b9050919050565b5f82825260208201905092915050565b50565b5f611c8a5f83611c6c565b9150611c9582611c7c565b5f82019050919050565b5f60a082019050611cb25f8301876116b1565b611cbf60208301866116b1565b611ccc6040830185611344565b611cd96060830184611344565b8181036080830152611cea81611c7f565b905095945050505050565b7f416d6f756e74206d75737420626520706f7369746976650000000000000000005f82015250565b5f611d29601783611993565b9150611d3482611cf5565b602082019050919050565b5f6020820190508181035f830152611d5681611d1d565b905091905056fea2646970667358221220fc2cafcb7cd24613205ff50f918ed046dbbd7797f7f00b609f6a8b71243a996964736f6c634300081c0033"
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
      "bytecode": "0x608060405262093a806001553480156015575f5ffd5b506114be806100235f395ff3fe60806040526004361061006f575f3560e01c8063a6a3b5b41161004d578063a6a3b5b4146100df578063aa1a841114610109578063b1b9e78d14610147578063dda0d76c1461016f5761006f565b8063058a56ac14610073578063746538d91461009b57806399652de7146100b7575b5f5ffd5b34801561007e575f5ffd5b5061009960048036038101906100949190610f24565b610197565b005b6100b560048036038101906100b09190610f24565b6103f2565b005b3480156100c2575f5ffd5b506100dd60048036038101906100d89190610f24565b61064f565b005b3480156100ea575f5ffd5b506100f361090d565b6040516101009190610f71565b60405180910390f35b348015610114575f5ffd5b5061012f600480360381019061012a9190610f24565b610913565b60405161013e93929190610f99565b60405180910390f35b348015610152575f5ffd5b5061016d60048036038101906101689190610f24565b610962565b005b34801561017a575f5ffd5b5061019560048036038101906101909190610fce565b610e89565b005b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f206040518060600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505090503373ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff16146102c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c090611053565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc826020015190811502906040515f60405180830381858888f19350505050158015610310573d5f5f3e3d5ffd5b505f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f5f82015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f905550503373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167f2067c3c1b93d59a0414fb205a0e71a832980282ff4ebd1e51cf3ac0a3c6c34d060405160405180910390a4505050565b5f3411610434576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042b906110e1565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff165f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461050e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050590611149565b60405180910390fd5b60405180606001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001348152602001428152505f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201559050503373ffffffffffffffffffffffffffffffffffffffff16818373ffffffffffffffffffffffffffffffffffffffff167fd46a008cac1cb5ec453d4928e646f936b6d11b8ec6b488f00a55bd90eda74a73346040516106439190610f71565b60405180910390a45050565b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f206040518060600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505090503373ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff1614610781576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077890611053565b60405180910390fd5b60015481604001516107939190611194565b4211156107d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cc90611211565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc826020015190811502906040515f60405180830381858888f1935050505015801561081c573d5f5f3e3d5ffd5b505f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f205f5f82015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f905550503373ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff167f6b2d7d3541d77e4ba894942103bb7bff8611a2fe5a6c6660870f0c15ab75c2d384602001516040516109009190610f71565b60405180910390a4505050565b60015481565b5f602052815f5260405f20602052805f5260405f205f9150915050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f206040518060600160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505090505f73ffffffffffffffffffffffffffffffffffffffff16815f015173ffffffffffffffffffffffffffffffffffffffff1603610a94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8b90611279565b60405180910390fd5b5f8390503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16636352211e856040518263ffffffff1660e01b8152600401610ae89190610f71565b602060405180830381865afa158015610b03573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b2791906112ab565b73ffffffffffffffffffffffffffffffffffffffff1614610b7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7490611320565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b8152600401610bb892919061133e565b602060405180830381865afa158015610bd3573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bf7919061139a565b80610ca457503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663081812fc856040518263ffffffff1660e01b8152600401610c4d9190610f71565b602060405180830381865afa158015610c68573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c8c91906112ab565b73ffffffffffffffffffffffffffffffffffffffff16145b610ce3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cda90611435565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166342842e0e33845f0151866040518463ffffffff1660e01b8152600401610d2393929190611453565b5f604051808303815f87803b158015610d3a575f5ffd5b505af1158015610d4c573d5f5f3e3d5ffd5b505050503373ffffffffffffffffffffffffffffffffffffffff166108fc836020015190811502906040515f60405180830381858888f19350505050158015610d97573d5f5f3e3d5ffd5b505f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8481526020019081526020015f205f5f82015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f9055600282015f905550503373ffffffffffffffffffffffffffffffffffffffff16838573ffffffffffffffffffffffffffffffffffffffff167fa994d1bf7c4f40ea558b18bf79efbc7bc38b5d5f72aa2fec5a69cdb31be161328560200151604051610e7b9190610f71565b60405180910390a450505050565b8060018190555050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610ec082610e97565b9050919050565b610ed081610eb6565b8114610eda575f5ffd5b50565b5f81359050610eeb81610ec7565b92915050565b5f819050919050565b610f0381610ef1565b8114610f0d575f5ffd5b50565b5f81359050610f1e81610efa565b92915050565b5f5f60408385031215610f3a57610f39610e93565b5b5f610f4785828601610edd565b9250506020610f5885828601610f10565b9150509250929050565b610f6b81610ef1565b82525050565b5f602082019050610f845f830184610f62565b92915050565b610f9381610eb6565b82525050565b5f606082019050610fac5f830186610f8a565b610fb96020830185610f62565b610fc66040830184610f62565b949350505050565b5f60208284031215610fe357610fe2610e93565b5b5f610ff084828501610f10565b91505092915050565b5f82825260208201905092915050565b7f596f7520646964206e6f74206d616b652074686973206f6666657200000000005f82015250565b5f61103d601b83610ff9565b915061104882611009565b602082019050919050565b5f6020820190508181035f83015261106a81611031565b9050919050565b7f4f66666572207072696365206d7573742062652067726561746572207468616e5f8201527f2030000000000000000000000000000000000000000000000000000000000000602082015250565b5f6110cb602283610ff9565b91506110d682611071565b604082019050919050565b5f6020820190508181035f8301526110f8816110bf565b9050919050565b7f4f6666657220616c7265616479206578697374730000000000000000000000005f82015250565b5f611133601483610ff9565b915061113e826110ff565b602082019050919050565b5f6020820190508181035f83015261116081611127565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61119e82610ef1565b91506111a983610ef1565b92508282019050808211156111c1576111c0611167565b5b92915050565b7f526566756e6420706572696f64206861732065787069726564000000000000005f82015250565b5f6111fb601983610ff9565b9150611206826111c7565b602082019050919050565b5f6020820190508181035f830152611228816111ef565b9050919050565b7f4e6f2076616c6964206f666665722065786973747300000000000000000000005f82015250565b5f611263601583610ff9565b915061126e8261122f565b602082019050919050565b5f6020820190508181035f83015261129081611257565b9050919050565b5f815190506112a581610ec7565b92915050565b5f602082840312156112c0576112bf610e93565b5b5f6112cd84828501611297565b91505092915050565b7f596f7520646f206e6f74206f776e2074686973204e46540000000000000000005f82015250565b5f61130a601783610ff9565b9150611315826112d6565b602082019050919050565b5f6020820190508181035f830152611337816112fe565b9050919050565b5f6040820190506113515f830185610f8a565b61135e6020830184610f8a565b9392505050565b5f8115159050919050565b61137981611365565b8114611383575f5ffd5b50565b5f8151905061139481611370565b92915050565b5f602082840312156113af576113ae610e93565b5b5f6113bc84828501611386565b91505092915050565b7f436f6e7472616374206e6f7420617070726f76656420746f207472616e7366655f8201527f72204e4654000000000000000000000000000000000000000000000000000000602082015250565b5f61141f602583610ff9565b915061142a826113c5565b604082019050919050565b5f6020820190508181035f83015261144c81611413565b9050919050565b5f6060820190506114665f830186610f8a565b6114736020830185610f8a565b6114806040830184610f62565b94935050505056fea2646970667358221220575869100be95bcd77f4b57231be1c7e3476e56bf6bc7578d621e4f9163eb0f964736f6c634300081c0033"
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
      "bytecode": "0x608060405234801561000f575f5ffd5b506040516131ba3803806131ba83398181016040528101906100319190610266565b806040518060400160405280600f81526020017f446f6e6174696f6e5265636569707400000000000000000000000000000000008152506040518060400160405280600781526020017f5245434549505400000000000000000000000000000000000000000000000000815250815f90816100ac91906104ce565b5080600190816100bc91906104ce565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361012f575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161012691906105ac565b60405180910390fd5b61013e8161014560201b60201c565b50506105c5565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6102358261020c565b9050919050565b6102458161022b565b811461024f575f5ffd5b50565b5f815190506102608161023c565b92915050565b5f6020828403121561027b5761027a610208565b5b5f61028884828501610252565b91505092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061030c57607f821691505b60208210810361031f5761031e6102c8565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026103817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610346565b61038b8683610346565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f6103cf6103ca6103c5846103a3565b6103ac565b6103a3565b9050919050565b5f819050919050565b6103e8836103b5565b6103fc6103f4826103d6565b848454610352565b825550505050565b5f5f905090565b610413610404565b61041e8184846103df565b505050565b5b81811015610441576104365f8261040b565b600181019050610424565b5050565b601f8211156104865761045781610325565b61046084610337565b8101602085101561046f578190505b61048361047b85610337565b830182610423565b50505b505050565b5f82821c905092915050565b5f6104a65f198460080261048b565b1980831691505092915050565b5f6104be8383610497565b9150826002028217905092915050565b6104d782610291565b67ffffffffffffffff8111156104f0576104ef61029b565b5b6104fa82546102f5565b610505828285610445565b5f60209050601f831160018114610536575f8415610524578287015190505b61052e85826104b3565b865550610595565b601f19841661054486610325565b5f5b8281101561056b57848901518255600182019150602085019450602081019050610546565b868310156105885784890151610584601f891682610497565b8355505b6001600288020188555050505b505050505050565b6105a68161022b565b82525050565b5f6020820190506105bf5f83018461059d565b92915050565b612be8806105d25f395ff3fe608060405234801561000f575f5ffd5b5060043610610135575f3560e01c80638da5cb5b116100b6578063c87b56dd1161007a578063c87b56dd1461034c578063cf456ae71461037c578063d3fc986414610398578063e985e9c5146103c8578063f2fde38b146103f8578063f46eccc41461041457610135565b80638da5cb5b146102a857806395d89b41146102c6578063a22cb465146102e4578063b63e6ac314610300578063b88d4fde1461033057610135565b806323b872dd116100fd57806323b872dd1461020657806342842e0e146102225780636352211e1461023e57806370a082311461026e578063715018a61461029e57610135565b806301ffc9a71461013957806306fdde0314610169578063081812fc14610187578063095ea7b3146101b75780630f7ee1ec146101d3575b5f5ffd5b610153600480360381019061014e9190611ebc565b610444565b6040516101609190611f01565b60405180910390f35b610171610525565b60405161017e9190611f8a565b60405180910390f35b6101a1600480360381019061019c9190611fdd565b6105b4565b6040516101ae9190612047565b60405180910390f35b6101d160048036038101906101cc919061208a565b6105cf565b005b6101ed60048036038101906101e89190611fdd565b6105e5565b6040516101fd94939291906120d7565b60405180910390f35b610220600480360381019061021b9190612121565b6106b6565b005b61023c60048036038101906102379190612121565b6107b5565b005b61025860048036038101906102539190611fdd565b6107d4565b6040516102659190612047565b60405180910390f35b61028860048036038101906102839190612171565b6107e5565b604051610295919061219c565b60405180910390f35b6102a661089b565b005b6102b06108ae565b6040516102bd9190612047565b60405180910390f35b6102ce6108d6565b6040516102db9190611f8a565b60405180910390f35b6102fe60048036038101906102f991906121df565b610966565b005b61031a60048036038101906103159190611fdd565b61097c565b60405161032791906122e3565b60405180910390f35b61034a6004803603810190610345919061242f565b610aa9565b005b61036660048036038101906103619190611fdd565b610ace565b6040516103739190611f8a565b60405180910390f35b610396600480360381019061039191906121df565b610b34565b005b6103b260048036038101906103ad919061250c565b610b94565b6040516103bf919061219c565b60405180910390f35b6103e260048036038101906103dd919061257d565b610d98565b6040516103ef9190611f01565b60405180910390f35b610412600480360381019061040d9190612171565b610e26565b005b61042e60048036038101906104299190612171565b610eaa565b60405161043b9190611f01565b60405180910390f35b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061050e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061051e575061051d82610ec7565b5b9050919050565b60605f8054610533906125e8565b80601f016020809104026020016040519081016040528092919081815260200182805461055f906125e8565b80156105aa5780601f10610581576101008083540402835291602001916105aa565b820191905f5260205f20905b81548152906001019060200180831161058d57829003601f168201915b5050505050905090565b5f6105be82610f30565b506105c882610fb6565b9050919050565b6105e182826105dc610fef565b610ff6565b5050565b6008602052805f5260405f205f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806002015490806003018054610635906125e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610661906125e8565b80156106ac5780601f10610683576101008083540402835291602001916106ac565b820191905f5260205f20905b81548152906001019060200180831161068f57829003601f168201915b5050505050905084565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610726575f6040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161071d9190612047565b60405180910390fd5b5f6107398383610734610fef565b611008565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107af578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016107a693929190612618565b60405180910390fd5b50505050565b6107cf83838360405180602001604052805f815250610aa9565b505050565b5f6107de82610f30565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610856575f6040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161084d9190612047565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6108a36110d2565b6108ac5f611159565b565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546108e5906125e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610911906125e8565b801561095c5780601f106109335761010080835404028352916020019161095c565b820191905f5260205f20905b81548152906001019060200180831161093f57829003601f168201915b5050505050905090565b610978610971610fef565b838361121c565b5050565b610984611e1b565b61098d82610f30565b5060085f8381526020019081526020015f206040518060800160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382018054610a22906125e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4e906125e8565b8015610a995780601f10610a7057610100808354040283529160200191610a99565b820191905f5260205f20905b815481529060010190602001808311610a7c57829003601f168201915b5050505050815250509050919050565b610ab48484846106b6565b610ac8610abf610fef565b85858585611385565b50505050565b6060610ad982610f30565b505f610ae3611531565b90505f815111610b015760405180602001604052805f815250610b2c565b80610b0b84611547565b604051602001610b1c929190612687565b6040516020818303038152906040525b915050919050565b610b3c6110d2565b8060095f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055505050565b5f60095f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16610c1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c15906126f4565b60405180910390fd5b5f60075f815480929190610c319061273f565b91905055905060405180608001604052808773ffffffffffffffffffffffffffffffffffffffff16815260200186815260200142815260200185858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081525060085f8381526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201556060820151816003019081610d2f9190612926565b50905050610d3d8682611611565b8573ffffffffffffffffffffffffffffffffffffffff16817f3c411ec189ba4fe4396832c91b79e00de004de7ee8de4039111c6761bef1fea587604051610d84919061219c565b60405180910390a380915050949350505050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b610e2e6110d2565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e9e575f6040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610e959190612047565b60405180910390fd5b610ea781611159565b50565b6009602052805f5260405f205f915054906101000a900460ff1681565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f5f610f3b8361162e565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610fad57826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610fa4919061219c565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b6110038383836001611667565b505050565b5f5f6110138461162e565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561107d57505f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156110bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b490612a65565b60405180910390fd5b6110c8858585611826565b9150509392505050565b6110da610fef565b73ffffffffffffffffffffffffffffffffffffffff166110f86108ae565b73ffffffffffffffffffffffffffffffffffffffff16146111575761111b610fef565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161114e9190612047565b60405180910390fd5b565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361128c57816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016112839190612047565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113789190611f01565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b111561152a578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b81526004016113e39493929190612ad5565b6020604051808303815f875af192505050801561141e57506040513d601f19601f8201168201806040525081019061141b9190612b33565b60015b61149f573d805f811461144c576040519150601f19603f3d011682016040523d82523d5f602084013e611451565b606091505b505f81510361149757836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161148e9190612047565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461152857836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161151f9190612047565b60405180910390fd5b505b5050505050565b606060405180602001604052805f815250905090565b60605f600161155584611a31565b0190505f8167ffffffffffffffff8111156115735761157261230b565b5b6040519080825280601f01601f1916602001820160405280156115a55781602001600182028036833780820191505090505b5090505f82602083010190505b600115611606578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816115fb576115fa612b5e565b5b0494505f85036115b2575b819350505050919050565b61162a828260405180602001604052805f815250611b82565b5050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061169f57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156117d1575f6116ae84610f30565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561171857508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561172b57506117298184610d98565b155b1561176d57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016117649190612047565b60405180910390fd5b81156117cf57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f5f6118318461162e565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461187257611871818486611ba5565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146118fd576118b15f855f5f611667565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461197c57600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611a8d577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611a8357611a82612b5e565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611aca576d04ee2d6d415b85acef81000000008381611ac057611abf612b5e565b5b0492506020810190505b662386f26fc100008310611af957662386f26fc100008381611aef57611aee612b5e565b5b0492506010810190505b6305f5e1008310611b22576305f5e1008381611b1857611b17612b5e565b5b0492506008810190505b6127108310611b47576127108381611b3d57611b3c612b5e565b5b0492506004810190505b60648310611b6a5760648381611b6057611b5f612b5e565b5b0492506002810190505b600a8310611b79576001810190505b80915050919050565b611b8c8383611c68565b611ba0611b97610fef565b5f858585611385565b505050565b611bb0838383611d5b565b611c63575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611c2457806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611c1b919061219c565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611c5a929190612b8b565b60405180910390fd5b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611cd8575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611ccf9190612047565b60405180910390fd5b5f611ce483835f611008565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611d56575f6040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401611d4d9190612047565b60405180910390fd5b505050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611e1257508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611dd35750611dd28484610d98565b5b80611e1157508273ffffffffffffffffffffffffffffffffffffffff16611df983610fb6565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b60405180608001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f8152602001606081525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611e9b81611e67565b8114611ea5575f5ffd5b50565b5f81359050611eb681611e92565b92915050565b5f60208284031215611ed157611ed0611e5f565b5b5f611ede84828501611ea8565b91505092915050565b5f8115159050919050565b611efb81611ee7565b82525050565b5f602082019050611f145f830184611ef2565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611f5c82611f1a565b611f668185611f24565b9350611f76818560208601611f34565b611f7f81611f42565b840191505092915050565b5f6020820190508181035f830152611fa28184611f52565b905092915050565b5f819050919050565b611fbc81611faa565b8114611fc6575f5ffd5b50565b5f81359050611fd781611fb3565b92915050565b5f60208284031215611ff257611ff1611e5f565b5b5f611fff84828501611fc9565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61203182612008565b9050919050565b61204181612027565b82525050565b5f60208201905061205a5f830184612038565b92915050565b61206981612027565b8114612073575f5ffd5b50565b5f8135905061208481612060565b92915050565b5f5f604083850312156120a05761209f611e5f565b5b5f6120ad85828601612076565b92505060206120be85828601611fc9565b9150509250929050565b6120d181611faa565b82525050565b5f6080820190506120ea5f830187612038565b6120f760208301866120c8565b61210460408301856120c8565b81810360608301526121168184611f52565b905095945050505050565b5f5f5f6060848603121561213857612137611e5f565b5b5f61214586828701612076565b935050602061215686828701612076565b925050604061216786828701611fc9565b9150509250925092565b5f6020828403121561218657612185611e5f565b5b5f61219384828501612076565b91505092915050565b5f6020820190506121af5f8301846120c8565b92915050565b6121be81611ee7565b81146121c8575f5ffd5b50565b5f813590506121d9816121b5565b92915050565b5f5f604083850312156121f5576121f4611e5f565b5b5f61220285828601612076565b9250506020612213858286016121cb565b9150509250929050565b61222681612027565b82525050565b61223581611faa565b82525050565b5f82825260208201905092915050565b5f61225582611f1a565b61225f818561223b565b935061226f818560208601611f34565b61227881611f42565b840191505092915050565b5f608083015f8301516122985f86018261221d565b5060208301516122ab602086018261222c565b5060408301516122be604086018261222c565b50606083015184820360608601526122d6828261224b565b9150508091505092915050565b5f6020820190508181035f8301526122fb8184612283565b905092915050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61234182611f42565b810181811067ffffffffffffffff821117156123605761235f61230b565b5b80604052505050565b5f612372611e56565b905061237e8282612338565b919050565b5f67ffffffffffffffff82111561239d5761239c61230b565b5b6123a682611f42565b9050602081019050919050565b828183375f83830152505050565b5f6123d36123ce84612383565b612369565b9050828152602081018484840111156123ef576123ee612307565b5b6123fa8482856123b3565b509392505050565b5f82601f83011261241657612415612303565b5b81356124268482602086016123c1565b91505092915050565b5f5f5f5f6080858703121561244757612446611e5f565b5b5f61245487828801612076565b945050602061246587828801612076565b935050604061247687828801611fc9565b925050606085013567ffffffffffffffff81111561249757612496611e63565b5b6124a387828801612402565b91505092959194509250565b5f5ffd5b5f5ffd5b5f5f83601f8401126124cc576124cb612303565b5b8235905067ffffffffffffffff8111156124e9576124e86124af565b5b602083019150836001820283011115612505576125046124b3565b5b9250929050565b5f5f5f5f6060858703121561252457612523611e5f565b5b5f61253187828801612076565b945050602061254287828801611fc9565b935050604085013567ffffffffffffffff81111561256357612562611e63565b5b61256f878288016124b7565b925092505092959194509250565b5f5f6040838503121561259357612592611e5f565b5b5f6125a085828601612076565b92505060206125b185828601612076565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806125ff57607f821691505b602082108103612612576126116125bb565b5b50919050565b5f60608201905061262b5f830186612038565b61263860208301856120c8565b6126456040830184612038565b949350505050565b5f81905092915050565b5f61266182611f1a565b61266b818561264d565b935061267b818560208601611f34565b80840191505092915050565b5f6126928285612657565b915061269e8284612657565b91508190509392505050565b7f4e6f7420617574686f72697a656420746f206d696e74207265636569707473005f82015250565b5f6126de601f83611f24565b91506126e9826126aa565b602082019050919050565b5f6020820190508181035f83015261270b816126d2565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61274982611faa565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361277b5761277a612712565b5b600182019050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026127e27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826127a7565b6127ec86836127a7565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61282761282261281d84611faa565b612804565b611faa565b9050919050565b5f819050919050565b6128408361280d565b61285461284c8261282e565b8484546127b3565b825550505050565b5f5f905090565b61286b61285c565b612876818484612837565b505050565b5b818110156128995761288e5f82612863565b60018101905061287c565b5050565b601f8211156128de576128af81612786565b6128b884612798565b810160208510156128c7578190505b6128db6128d385612798565b83018261287b565b50505b505050565b5f82821c905092915050565b5f6128fe5f19846008026128e3565b1980831691505092915050565b5f61291683836128ef565b9150826002028217905092915050565b61292f82611f1a565b67ffffffffffffffff8111156129485761294761230b565b5b61295282546125e8565b61295d82828561289d565b5f60209050601f83116001811461298e575f841561297c578287015190505b612986858261290b565b8655506129ed565b601f19841661299c86612786565b5f5b828110156129c35784890151825560018201915060208501945060208101905061299e565b868310156129e057848901516129dc601f8916826128ef565b8355505b6001600288020188555050505b505050505050565b7f446f6e6174696f6e526563656970743a20546f6b656e20697320736f756c626f5f8201527f756e6420616e642063616e6e6f74206265207472616e73666572726564000000602082015250565b5f612a4f603d83611f24565b9150612a5a826129f5565b604082019050919050565b5f6020820190508181035f830152612a7c81612a43565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f612aa782612a83565b612ab18185612a8d565b9350612ac1818560208601611f34565b612aca81611f42565b840191505092915050565b5f608082019050612ae85f830187612038565b612af56020830186612038565b612b0260408301856120c8565b8181036060830152612b148184612a9d565b905095945050505050565b5f81519050612b2d81611e92565b92915050565b5f60208284031215612b4857612b47611e5f565b5b5f612b5584828501612b1f565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f604082019050612b9e5f830185612038565b612bab60208301846120c8565b939250505056fea2646970667358221220930c8bc4b0253c5785e9bb5c6b1f8d0d09d4df6764aabcab2a5a306bde8109f564736f6c634300081c0033"
    }
  },
  "deployments": {}
};