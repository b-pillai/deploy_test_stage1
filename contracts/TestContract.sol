pragma solidity >=0.4.21 <0.7.0;

//impiort the token contract
import "./Token.sol";

contract TestContract {

    //state variables
    string public name ="babu";

    //create an instance of the token contract
    Token public token;
    uint public rate = 100;
    
//constructor takes the token contract address
constructor(Token _token) public{
    token = _token;
}

function buyToken() public payable{
    uint tokenAmount = msg.value * rate;
    token.transfer (msg.sender, tokenAmount);
}

}
