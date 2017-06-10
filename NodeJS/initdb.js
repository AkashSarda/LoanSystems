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

/*connection.query("CREATE DATABASE Loansystem", function (err, result) {
   if (err) throw err;
   console.log("Database created");
 });*/
  //var sel_db = "USE DATABASE Loansystem";
  var tbl1 = "CREATE TABLE lenders (address VARCHAR(255) primary key,time_stamp DATE, balance INTEGER)";
  var tbl2 = "CREATE TABLE deposits (address VARCHAR(255) primary key, time_stamp DATE, amount INTEGER)";
  var tbl3 = "CREATE TABLE withdraws (address VARCHAR(255) primary key, time_stamp DATE, amount INTEGER)";
  var tbl4 = "CREATE TABLE mapping (name VARCHAR(255),address VARCHAR(255))";

/*connection.query(sel_db, function (err, result) {
     if (err) throw err;
     console.log("DB selected.");
});*/

connection.query(tbl1, function (err, result) {
   if (err) throw err;
   console.log("lenders Table created");
 });

connection.query(tbl2, function (err, result) {
    if (err) throw err;
    console.log("deposits Table created");
  });

connection.query(tbl3, function (err, result) {
     if (err) throw err;
     console.log("withdraws Table created");
   });

connection.query(tbl4, function (err, result) {
      if (err) throw err;
      console.log("mapping Table created");
    });
connection.end();
});
