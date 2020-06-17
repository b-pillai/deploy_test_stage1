Set up the environment for an ethereum based blockchain smart contract testing.
I wanted to test out some of the concept I come up with for cross-blockchain asset transfer. I am planning to develop it with a smart contract to test out the concept. For that I need to set up the working environment first.
First dependency to install is Truffle framework – is a is a development environment and a testing framework for Ethereum based blockchain network.
Truffle is a framework that allow us to create decentralise applications on ethereum network. It is giving us a set of tools which allow us to wright our smart code using a solidity programming language. It also gives us a tool to deploy and test our smart contract on a blockchain network. We can also develop out client-side application inside the truffle framework. 
https://www.trufflesuite.com/
npm install -g truffle

Node.js
https://nodejs.org/en/
https://www.youtube.com/watch?v=3681ZYbDSSk&feature=youtu.be&t=8m53s
Ganache – local instance of blockchain to run tests, execute commands, and inspect state.
https://www.trufflesuite.com/ganache
https://www.youtube.com/watch?v=8wMKq7HvbKw
run the ganache

create a simple smart contract
-------------------
pragma solidity >=0.4.21 <0.7.0;
contract TestContract {}
----------------------------
Create the migration file
--------------- 
const testContract = artifacts.require("TestContract");
module.exports = function(deployer) {
  deployer.deploy(testContract);
};
-------------------
create the test file
------------
const TestContract = artifacts.require('TestContract');
contract('TestSmartContract', () => {
  it('should be deployed', async () => {
    const testContract = await TestContract.deployed();
    assert(testContract.address !== '');
  });
});
---------------

Run the ganache
ganache-cli

deploy the contract

truffle migrate

truffle migrate –reset

run the test

truffle test

Test is very simple whether the address is not an empty string (https://youtu.be/8wMKq7HvbKw?t=1827).
