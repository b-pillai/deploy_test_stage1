
/* const TestContract = artifacts.require("TestContract");

module.exports = function(deployer) {
  //deploy the testConyract
   deployer.deploy(TestContract);
}; */

const Token = artifacts.require("Token");
const TestContract = artifacts.require("TestContract");

module.exports = async function(deployer) {
  // Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed()

  // Deploy EthSwap -- the contract takes the token address
  await deployer.deploy(TestContract, token.address);
  const testContract = await TestContract.deployed()

  // Transfer all tokens to EthSwap (1 million)
  await token.transfer(testContract.address, '1000000000000000000000000')
};
