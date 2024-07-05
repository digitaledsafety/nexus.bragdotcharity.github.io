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
}