pragma solidity ^0.4.4;

contract POE {
  address public owner;

  mapping (address => bytes32[]) asset_docs;

  function POE() {
    // constructor
    owner = msg.sender;
  }

  function storeProof(address owner, bytes32 dochash){
    asset_docs[owner] = dochash;
  }

  function verify(address owner, bytes32 dochash) returns (bool){
    if (asset_docs[owner] == dochash) {
      return true;
    }else{
      return false;
    }
  }

}
