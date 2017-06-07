pragma solidity ^0.4.0;

contract System{
    uint256 loanid;

    struct Loan{
      uint timestamp;
      uint amount;
      bool active;
    }

    struct AccountEntry{
      uint timestamp;
      uint amount;
    }


    struct Lenders{
      uint balance;
      uint timestamp_of_creation;
      AccountEntry[] deposits;
      AccountEntry[] withdrawals;
    }

    struct Borrowers{
      uint amount;
      uint timestamp;
      bool borrowed;
      mapping(uint256 => Loan) loans;
      AccountsEntry[] moneygivenback;
    }

    // mapping stores
    mapping(address => Lenders) lenders;
    mapping(address => Borrowers) borrowers;

    event Deposit(address lender, uint amount);
    event DebtPaid(address lender_addrs, uint lender_bal,address sender_addrs,uint sender_bal);
    event Money_Borrowed(address lender_addrs, uint lender_bal,address sender_addrs,uint sender_bal);
    bool valid;

    address public owner;

    function System(){
      owner = msg.sender;
      loanid = 0;
    }

    function registerLender(){
      lenders[msg.sender].balance = 0;
      lenders[msg.sender].timestamp_of_creation = now;
    }

    function registerBorrower(){
      borrowers[msg.sender].amount = 0
      borrowers[msg.sender].timestamp_of_creation = now;
      borrowers[msg.sender].borrowed = false;
    }

    function lend(uint money) payable{
      lenders[msg.sender].balance += money;
      lenders[msg.sender].deposits.push(AccountEntry(now, money));
      Desposit(msg.sender, money);
    }

    function borrow_money(uint money, address lender_address) returns (bool) {
      if(lenders[lender_address] > money && borrowers[msg.sender].borrowed == false) {
        if(msg.sender.send(money)){
          valid = true;
//          lenders[lender_address] -= money;
          borrowers[msg.sender].borrowed = true;
          borrowers[msg.sender].amount += money;
          borrowers[msg.sender].loans[loanid].amount = money;
          borrowers[msg.sender].timestamp = now;
          Money_Borrowed(lender_address,lender_address.balance,msg.sender,msg.sender.balance);
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

    function pay_debts(address lender_address, uint money) payable returns (bool){
      if (money >= 0 && borrowers[msg.sender].borrowed == true) {

        if(lender_address.send(money)){

          borrowers[msg.sender].amount -= money;

          if (borrowers[msg.sender].amount == 0){
            borrowers[msg.sender].borrowed = false;
          }

          valid = true;
          DebtPaid(lender_address,lender_address.balance,msg.sender,msg.sender.balance);

        }else{
          valid = false;
        }
        return valid;

      }else{

        return false;

      }
    }


    function withdrawFunds(uint money) returns  (bool) {

      if (lenders[msg.sender] >= money){
        valid = false;
        if(msg.sender.send(money)){
          valid = true;
          lenders[msg.sender] -= money;
        }else{
          valid = false;
        }

        return false;
      }else{
        return false;
      }

    }

}
