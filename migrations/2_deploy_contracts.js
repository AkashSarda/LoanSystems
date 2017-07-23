var System = artifacts.require("./System.sol");
var Asset = artifacts.require("./Asset.sol");
module.exports = function(deployer) {
  deployer.deploy(System);
  deployer.deploy(Asset);
};
