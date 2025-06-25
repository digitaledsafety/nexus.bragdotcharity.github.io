// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "remix_tests.sol";
import "remix_accounts.sol";
import "../contracts/Reward.sol";

contract RewardTest {

    Reward s;

    address acc0;
    address acc1;
    address acc2;
    
    /// Initiate accounts variable
    function beforeAll() public {
        acc0 = TestsAccounts.getAccount(0); 
        acc1 = TestsAccounts.getAccount(1);
        acc2 = TestsAccounts.getAccount(2);

        s = new Reward(payable(acc1), 500, 3);
    }

    function testTokenNameAndSymbol () public {
        Assert.equal(s.name(), "Digital Education & Safety Foundation Donation", "token name did not match");
        Assert.equal(s.symbol(), "DESF", "token symbol did not match");
    }

    function testSuccessfulDonation() public {
        uint256 initialWalletBalance = acc1.balance;
        uint256 donationAmount = 600; // More than minimumDonation (500)
        uint256 initialTokenId = s.nextTokenId(); // s.nextTokenId is not standard, assuming it's available from contract or made public for test
                                               // If nextTokenId is private, we test its effect via ownerOf(expectedTokenId)

        // acc0 makes a donation
        (bool success, ) = address(s).call{value: donationAmount}(abi.encodeWithSignature("donate()"));
        Assert.ok(success, "Donation transaction failed");

        // 1. Check NFT minting and ownership
        // Assuming nextTokenId was 0 before this donation if this is the first donation.
        // The actual token ID minted would be `initialTokenId`.
        Assert.equal(s.ownerOf(initialTokenId), acc0, "Donor (acc0) should own the new NFT");
        Assert.equal(s.balanceOf(acc0), 1, "Donor (acc0) NFT balance should be 1");

        // 2. Check nextTokenId increment (indirectly, by trying to predict next one or checking current state if public)
        // If nextTokenId was made public for testing or there's a getter:
        // Assert.equal(s.nextTokenId(), initialTokenId + 1, "nextTokenId should have incremented");
        // For this test, we've confirmed ownership of initialTokenId, implying it was used.

        // 3. Check wallet balance increase
        Assert.equal(acc1.balance, initialWalletBalance + donationAmount, "Wallet (acc1) balance should increase by donation amount");
    }

    function testFailDonationBelowMinimum() public {
        uint256 donationAmount = 100; // Less than minimumDonation (500)
        uint256 initialDonorNftBalance = s.balanceOf(acc2);

        // Attempt donation from acc2
        (bool success, ) = address(s).call{value: donationAmount}(abi.encodeWithSignature("donate()"));

        // In Remix, a revert due to require() makes 'success' false.
        // We can't easily check the revert message directly with Assert.sol in older Remix versions.
        Assert.isFalse(success, "Donation should have failed (reverted) due to amount below minimum");

        // Verify no NFT was minted to the donor
        Assert.equal(s.balanceOf(acc2), initialDonorNftBalance, "Donor (acc2) NFT balance should not change on failed donation");

        // Verify nextTokenId did not increment
        // uint256 currentTokenId = s.getNextTokenId(); // Assuming getNextTokenId() was added from previous step
        // Assert.equal(s.getNextTokenId(), currentTokenId, "nextTokenId should not change on failed donation");
        // Note: Checking nextTokenId might be tricky if the state is not easily comparable or if previous tests modified it.
        // The primary check is that the transaction 'failed' and no NFT was minted.
    }
}