pragma solidity ^0.5.0;

contract SampleToken is ERC20, ERC20Detailed {

    string private _name = "SAMPLE";
    string private _symbol = "SPT";
    uint8 private _decimals = 18;

    address account = msg.sender;
    uint value = 100 * 10 ** 18;
    
    address counterContract = 0x142Bf45F652733Ce6383F8B8C49aa15df02D606B;

    constructor() ERC20Detailed( _name, _symbol, _decimals) public {
        _mint(account, value);
    }
    
    function transfer_increment(address receipient, uint256 amount) public {
        Counter counter = Counter(address(counterContract));
        counter.increment();
        
        super.transfer(receipient, amount * 10 ** 18);
    }
    
}