pragma solidity ^0.4.4;
contract System{
    struct Lenders{
      uint balance;
    }

    struct Borrowers{
      uint amount;
      bool borrowed;
    }

    // mapping stores
    mapping(address => Lenders) public lenders;
    mapping(address => Borrowers) public borrowers;

    event Deposit(address lender, uint amount);
    event DebtPaid(uint contract_bal,address sender_addrs,uint sender_bal);
    event Money_Borrowed(uint contract_bal,address sender_addrs,uint sender_bal);
    
    address public owner;

    function System(){
      owner = msg.sender;
    }

    function registerLender(){
      lenders[msg.sender].balance = 0;
    }

    function registerBorrower(){
      borrowers[msg.sender].amount = 0;
      borrowers[msg.sender].borrowed = false;
    }

    function lend() payable public returns(uint){
      lenders[msg.sender].balance += msg.value;
      Deposit(msg.sender, msg.value);
      return lenders[msg.sender].balance;
    }

    function borrow_money(uint money) public returns (bool) {
      if(borrowers[msg.sender].borrowed == false) {
        msg.sender.transfer(money);
          borrowers[msg.sender].borrowed = true;
          borrowers[msg.sender].amount += money;
          Money_Borrowed(this.balance,msg.sender,msg.sender.balance);
        return true;
      }
      else{
        return false;
      }
    }

    function getBalance(address addr) public returns(uint){
        return addr.balance;
    }
    function lenderBalance() constant public returns(uint){
        return lenders[msg.sender].balance;
    }
    function borrowerBalance() constant public returns(uint){
        return borrowers[msg.sender].amount;
    }
    function pay_debts() payable public returns (bool){
      if (borrowers[msg.sender].borrowed == true) {
          borrowers[msg.sender].amount -= msg.value;
          if (borrowers[msg.sender].amount == 0){
            borrowers[msg.sender].borrowed = false;
          }
          DebtPaid(this.balance,msg.sender,msg.value);
          return true;
      }
      else{
        return false;
      }
    }

    function withdrawFunds(uint money) public returns  (bool) {
      if (lenders[msg.sender].balance >= money){
        msg.sender.transfer(money);
          lenders[msg.sender].balance -= money;
        return true;
      }
      else{
        return false;
      }
    }
}

