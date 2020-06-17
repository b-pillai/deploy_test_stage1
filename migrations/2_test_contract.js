const testContract = artifacts.require("TestContract");

module.exports = function(deployer) {
  deployer.deploy(testContract);
};