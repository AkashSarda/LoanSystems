var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12422',
  database : 'Loansystem'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);

  function addLender(address,time_stamp,balance){
    var query = "INSERT INTO lenders (address,time_stamp,balance) VALUES (address,time_stamp,balance)";
    connection.query(query,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
  }
  function addDeposit(address,time_stamp,amount){
    var query = "INSERT INTO deposits (address,time_stamp,amount) VALUES (address,time_stamp,amount)";
    connection.query(query,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
  }
  function addWithdraw(address,time_stamp,amount){
    var query = "INSERT INTO withdraws (address,time_stamp,amount) VALUES (address,time_stamp,amount)";
    connection.query(query,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
  }
  function addMapping(name,address){
    var query = "INSERT INTO mapping (name,address) VALUES (name,address)";
    connection.query(query,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    });
  }
  console.log(addMapping('vijesh','54646257987854123135'));
  connection.query("select * from mapping",function(err,result){
    if(err) throw err;
    console.log(result);
  })

  connection.end();
});
