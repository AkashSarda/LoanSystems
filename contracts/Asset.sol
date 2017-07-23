pragma solidity ^0.4.4;

contract Asset{
  address public owner;
  struct structAsset{
    address asset_owner;
    bool leased;
  }
  mapping (bytes32 => structAsset) asset_docs;

  function Asset(){
    owner = msg.sender;
  }

  function storeProof(bytes32 dochash){
    asset_docs[dochash].asset_owner = msg.sender;
    asset_docs[dochash].leased = false;
  }
  function verify(bytes32 dochash) public returns(bool){
      if(asset_docs[dochash].asset_owner == msg.sender){
        return true;
      }
      else{
        return false;
      }
  }
}
