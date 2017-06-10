pragma solidity ^0.4.4;

// This is contract is assumed to be maintained globally for verification purposes.

contract POE {
  address public owner;
  struct Asset{
    address asset_owner;
    bool leased = false;
  }
  mapping (bytes32 => Asset) asset_docs;

  function POE() {
    // constructor
    owner = msg.sender;
  }

// to add someone's asset.
  function storeProof(address asset_owner, bytes32 dochash){
    asset_docs[dochash].asset_owner = asset_owner;
  }

// the bank will verify the ownership and then proceed with the loan.
  function verify(address asset_owner, bytes32 dochash) constant returns (bool){
    if (asset_docs[dochash].asset_owner == asset_owner) {
      return true;
    }else{
      return false;
    }
  }

// to be fired when the deadline of the loan exceeds
  function changeOwnership returns (bool)(address new_owner, bytes32 dochash){
    if (asset_docs[dochash] == msg.sender) {
      asset_docs[new_owner] = dochash;
      return true;
    }else{
      return false;
    }
  }

// give on leased
  function giveOnLease(bytes32 dochash) returns (bool){
    if (msg.sender == asset_docs[dochash].asset_owner) {
      asset_docs[dochash].leased = true;
      return true;
    }else{
      return false;
    }
  }
  
}
