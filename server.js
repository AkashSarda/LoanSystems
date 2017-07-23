var express = require('express');
var Web3 = require('web3');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //extension of views
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 8000);
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

app.get('/lender', function(req,res){
    res.render('lender');
});
app.get('/borrower',function(req,res){
    res.render('borrower');
});
app.get('/asset',function(req,res){
      res.render('asset');
  });
  app.post('/asset',urlencodedParser,function(req,res){
      console.log(req.body);
      var hash = web3.sha3(req.body.firstName + req.body.lastName + req.body.hashValue + req.body.date + req.body.secId);
      console.log(hash);
      res.render('asset');
  });
app.get('/verify',function(req,res){
  res.render('verify');
});
// custom 404 page
app.use(function(req, res){
res.type('text/plain');
res.status(404);
res.send('404 - Not Found');
});
// custom 500 page
app.use(function(err, req, res, next){
console.error(err.stack);
res.type('text/plain');
res.status(500);
res.send('500 - Server Error');
});
app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
app.get('port') + '; press Ctrl-C to terminate.' );
});
