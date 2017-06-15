pragma solidity ^0.4.0;

contract System{
    struct Lenders{
      uint balance;
      uint timestamp_of_creation;
    }

    struct Borrowers{
      uint amount;
      uint timestamp;
      uint timestamp_of_creation;
      bool borrowed;
    }

    // mapping stores
    mapping(address => Lenders) lenders;
    mapping(address => Borrowers) borrowers;

    event Deposit(address lender, uint amount);
    event DebtPaid(uint contract_bal,address sender_addrs,uint sender_bal);
    event Money_Borrowed(uint contract_bal,address sender_addrs,uint sender_bal);
    bool valid;

    address public owner;

    function System(){
      owner = msg.sender;
    }

    function registerLender(){
      lenders[msg.sender].balance = 0;
      lenders[msg.sender].timestamp_of_creation = now;
    }

    function registerBorrower(){
      borrowers[msg.sender].amount = 0;
      borrowers[msg.sender].timestamp_of_creation = now;
      borrowers[msg.sender].borrowed = false;
    }

    function lend() payable{
      lenders[msg.sender].balance += msg.value;
      Deposit(msg.sender, msg.value);
    }

    function borrow_money(uint money) returns (bool) {
      if(borrowers[msg.sender].borrowed == false) {
        if(msg.sender.send(money)){
          valid = true;
//          lenders[lender_address] -= money;
          borrowers[msg.sender].borrowed = true;
          borrowers[msg.sender].amount += money;
          borrowers[msg.sender].timestamp = now;
          Money_Borrowed(this.balance,msg.sender,msg.sender.balance);
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

    function pay_debts() payable returns (bool){
      if (borrowers[msg.sender].borrowed == true) {
          borrowers[msg.sender].amount -= msg.value;
          if (borrowers[msg.sender].amount == 0){
            borrowers[msg.sender].borrowed = false;
          }

          valid = true;
          DebtPaid(this.balance,msg.sender,msg.value);

          return valid;

      }else{

        return false;

      }
    }


    function withdrawFunds(uint money) returns  (bool) {
      if (lenders[msg.sender].balance >= money){
        valid = false;
        if(msg.sender.send(money)){
          valid = true;
          lenders[msg.sender].balance -= money;
        }else{
          valid = false;
        }

        return valid;
      }else{
        return false;
      }

    }
}
