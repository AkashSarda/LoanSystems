var json = require("./build/contracts/MyContract.json");
var contract = require("truffle-contract");
var MyContract = contract(json);
var http = require('http');
var Web3 = require('web3');
const fs = require('fs');
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
if(!web3.isConnected()) {
    console.error("Ethereum - no conection to RPC server");
} else {
    console.log("Ethereum - connected to RPC server");
}

var bytecode = "6060604052341561000c57fe5b5b33600260016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b610acf8061005f6000396000f300606060405236156100a2576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063155dd5ee146100a457806328fd10d7146100dc578063545d76ef1461012657806358c1fca7146101485780637df21f7a146101805780638da5cb5b1461019257806397dffc61146101e4578063bf5d50c4146101ee578063e831878d14610243578063f8b2cb4f14610255575bfe5b34156100ac57fe5b6100c2600480803590602001909190505061029f565b604051808215151515815260200191505060405180910390f35b34156100e457fe5b610110600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103f6565b6040518082815260200191505060405180910390f35b61012e610414565b604051808215151515815260200191505060405180910390f35b341561015057fe5b6101666004808035906020019091905050610632565b604051808215151515815260200191505060405180910390f35b341561018857fe5b61019061087b565b005b341561019a57fe5b6101a26108c6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101ec6108ec565b005b34156101f657fe5b610222600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109aa565b60405180838152602001821515151581526020019250505060405180910390f35b341561024b57fe5b6102536109db565b005b341561025d57fe5b610289600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a81565b6040518082815260200191505060405180910390f35b600081600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541015156103e7576000600260006101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051809050600060405180830381858888f19350505050156103b4576001600260006101000a81548160ff02191690831515021790555081600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825403925050819055506103d0565b6000600260006101000a81548160ff0219169083151502179055505b600260009054906101000a900460ff1690506103f1565b600090506103f1565b5b919050565b60006020528060005260406000206000915090508060000154905081565b600060011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16151514156106255734600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825403925050819055506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541415610569576000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055505b6001600260006101000a81548160ff0219169083151502179055507f6fd35d1b6cd68e55a24e529d104fa6abdfa8cd0304a3b5225b49638097e821d83073ffffffffffffffffffffffffffffffffffffffff16313334604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600260009054906101000a900460ff16905061062f565b6000905061062f565b5b90565b600060001515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161515141561086c573373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051809050600060405180830381858888f1935050505015610839576001600260006101000a81548160ff0219169083151502179055506001600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff02191690831515021790555081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825401925050819055507f1c1d473706cc1c7bdd354594c816f5b52fc974e5574911c6206ab4cfffa043a93073ffffffffffffffffffffffffffffffffffffffff1631333373ffffffffffffffffffffffffffffffffffffffff1631604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1610855565b6000600260006101000a81548160ff0219169083151502179055505b600260009054906101000a900460ff169050610876565b60009050610876565b5b919050565b6000600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055505b565b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b34600060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825401925050819055507fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff0219169083151502179055505b565b60008173ffffffffffffffffffffffffffffffffffffffff163190505b9190505600a165627a7a72305820d2751b01432d4f001d6eb132061a9e2c1b843744eb4ac497adf133c170c29e830029";
var ab = [{"constant":false,"inputs":[{"name":"money","type":"uint256"}],"name":"withdrawFunds","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lenders","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"pay_debts","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"money","type":"uint256"}],"name":"borrow_money","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"registerLender","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"lend","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"borrowers","outputs":[{"name":"amount","type":"uint256"},{"name":"borrowed","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"registerBorrower","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addrs","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"lender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contract_bal","type":"uint256"},{"indexed":false,"name":"sender_addrs","type":"address"},{"indexed":false,"name":"sender_bal","type":"uint256"}],"name":"DebtPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contract_bal","type":"uint256"},{"indexed":false,"name":"sender_addrs","type":"address"},{"indexed":false,"name":"sender_bal","type":"uint256"}],"name":"Money_Borrowed","type":"event"}];

var contract_address = '0xda11ca2684bd18a4e4c6a18fe568ec627c86bd1f';
var contract_data = {
    abi: ab,
    binary: bytecode
};
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(" "+web3.eth.getBalance(contract_address)+" ");
  response.end();
});
var port = 8000;
server.listen(port, function() {
  console.log('Server working at http://localhost:' + port);
});
