pragma solidity ^0.4.0;

contract System{

    // mapping stores
    mapping(address => uint) lenders;
    mapping(address => uint) borrowers;
    bool valid;

    address public owner;

    function System(){
      owner = msg.sender;
    }

    function registerLender(){
      lenders[msg.sender] = 0;
    }

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
    function getBalance(address addrs) returns(uint){
        return addrs.balance;
    }

    function pay_debts(address lender_address, uint money) returns (bool){

      if (money >= 0) {

        if(lender_address.send(money)){
          borrowers[msg.sender] -= money;
          valid = true;
        }else{
          valid = false;
        }
        return valid;

      }else{

        return false;

      }
    }
}
