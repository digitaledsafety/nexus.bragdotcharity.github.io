import { deploy } from './web3-lib'

(async () => {
  try {
    // Constructor arguments for Reward: address payable _wallet, uint256 _minimumDonation, uint256 _maxId
    // Using placeholder values as per plan:
    // Wallet: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B" (Vitalik's address as a known placeholder)
    // Minimum Donation: 1000000000000000 (0.001 Ether in wei)
    // Max ID (supply): 100
    const constructorArgs = ["0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", "1000000000000000", 100];
    const result = await deploy('Reward', constructorArgs)
    console.log(`address: ${result.address}`)
  } catch (e) {
    console.log(e.message)
  }
})()