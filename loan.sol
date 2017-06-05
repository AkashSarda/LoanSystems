// contract simulating a third party loan system.
pragma solidity ^0.4.0;

/*

Model : We take money from people as ether, list it as ethers. This will be stored in the contract.
Any borrower will take money from the contract and will repay it within a deadline.
He will pay 1% (say) to us, the owner of the contract and 2% to the lender.
Win, Win. Right?

*/

contract System{

    // mapping stores
    mapping(address => uint) lenders;
    mapping(address => uint) borrowers;
    bool valid;

    address public owner;

    function System(){
      owner = msg.sender;
    }

// initialising a lender
    function registerLender(){
      lenders[msg.sender] = 0;
    }
// initialising a borrower
    function registerBorrower(){
      borrowers[msg.sender] = 0;
    }

    function lend(uint money) payable{
      lenders[msg.sender] += money;
    }

    function borrow_money(uint money, address lender_address) returns (bool) {
      if(lenders[lender_address] > money) {
        if(msg.sender.send(money)){
          valid = true;
          lenders[lender_address] -= money;
          borrowers[msg.sender] += money;
        }else{
          valid = false;
        }

        return valid;
      }
      else{
        return false;
      }
    }


}
