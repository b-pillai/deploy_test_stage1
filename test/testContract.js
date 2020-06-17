const TestContract = artifacts.require('TestContract');
contract('TestSmartContract', () => {
  it('should be deployed', async () => {
    const testContract = await TestContract.deployed();
    assert(testContract.address !== '');
  });
});
