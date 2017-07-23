contract_address = '0x669bdc6d2b9e160a1db3ddf344af8533b1d33d86';
var contractInstance;
function initContract() {
	instance.owner = web3.eth.accounts[0];
	console.log(instance.owner);
	$("#contractAddress").html(contract_address);
	$("#contractOwner").html(instance.owner);
}
function registerAsset(address,hashSha3){
  instance.storeProof(hashSha3,{from: address},function(){
    $("#getSubmitResult").html("Asset Registered Successfully...!!!");
  });
}
window.onload = function() {
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
	ab ='[{"constant":false,"inputs":[{"name":"dochash","type":"bytes32"}],"name":"verify","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"dochash","type":"bytes32"}],"name":"storeProof","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]';

	abi = JSON.parse(ab);
	console.log(abi);
	SystemContract = web3.eth.contract(abi);
	instance = SystemContract.at(contract_address);
	console.log(web3.eth.accounts)
  initContract();

	$("#Submit").click(function() {
		var FirstName = $("#firstName").val();
    var LastName = $("#lastName").val();
    //var PropAddress = $("#propAddress").val();
    var EthAddress = $("#ethAddress").val();
    var Email = $("#email").val();
    var HashValue = $("#hashValue").val();
    var RegDate = $("#date").val();
    var SocialSecId = $("#secId").val();
    var hashSha3 = web3.sha3(FirstName + LastName + HashValue + RegDate + SocialSecId);
		console.log(hashSha3);
		if(web3.isAddress(EthAddress)){
    	registerAsset(EthAddress,hashSha3);
			console.log("dfsag");
		}
		else{
			$("#notify").html("Please enter valid address...!!!");
		}
	});
};
