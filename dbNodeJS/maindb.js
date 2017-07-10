var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12345',
  database : 'Loansystem'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);

  function addLender(address,time_stamp,balance){
    var query = "INSERT INTO lenders (address,time_stamp,balance) VALUES ('"+address+"','"+time_stamp+"','"+balance+"')";
    connection.query(query,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
  }
  function addDeposit(address,time_stamp,amount){
    var query = "INSERT INTO deposits (address,time_stamp,amount) VALUES  ( '"+ address +"', '" + time_stamp + "', '" + amount + "')";
    connection.query(query,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
  }
  function addWithdraw(address,time_stamp,amount){
    var query = "INSERT INTO withdraws (address,time_stamp,amount) VALUES ('"+address+"','"+time_stamp+"','"+amount+"')";
    connection.query(query,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
  }
  function addMapping(name,address){
    var query = "INSERT INTO mapping (name,address) VALUES ('"+ name + "','"+ address+"')";
    console.log(query);
    connection.query(query,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
  }
  function addBorrower(address,time_stamp,deadline,balance){
    var query = "INSERT INTO Borrower (address,time_stamp,Deadline,balance) VALUES ('"+address+"','"+time_stamp+"','"+deadline+"','"+balance+"')";
    console.log(query);
    connection.query(query,function(err,result){
      if(err) throw err;
      console.log("Number of records inserted:" + result.affectedRows);
    });
  }

  function addLoan(loan_id,address,amount,loan_cash,time_stamp){
    var query = "INSERT INTO Loan (loan_id,address,amount,loan_cash,time_stamp) VALUES ('"+loan_id+"','"+address+"','"+amount+"','"+loan_cash+"','"+time_stamp+"')";
    console.log(query);
    connection.query(query,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
  }
  function addPayback(address,amount,loan_id,loan_cash,time_stamp){
    var query = "INSERT INTO Loan (address,amount,loan_id,loan_cash,time_stamp) VALUES ('"+address+"','"+amount+"','"+loan_id+"','"+loan_cash+"','"+time_stamp+"')";
    console.log(query);
    connection.query(query,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
  }

  console.log(addMapping("Alice","9850056502"));
  connection.query("SELECT * FROM mapping", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  connection.end();
});
