pragma solidity ^0.4.4;

contract POE {
  bytes32[] private proofs;
  address public owner;

  function POE() {
    // constructor
    owner = msg.sender;
  }

  function storeProof(){

  }

  function notarize(string document)  {
      var proof = calculateProof(document);
      storeProof(proof);
  }

  function storeProof(bytes32 proof){
      proofs.push(proof);
  }

  function calculateProof(string document) constant returns (bytes32){
      return sha256(document);
  }

  function checkDocument(string document) constant returns (bool) {
      var proof = calculateProof(document);
      return hasProof(proof);
  }

  function hasProof(bytes32 proof) constant returns (bool){
      for (var i = 0; i < proofs.length; i++) {
      if (proofs[i] == proof) {
        return true;
      }
    }
    return false;
  }
}
