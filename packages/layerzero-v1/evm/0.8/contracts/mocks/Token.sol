// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    event tried();
    event caught();

    constructor() ERC20("test", "test") {
        _mint(msg.sender, 10_000_000_000 * 10 ** 18);
    }

    // not supported by zksync
    //    function selfDestruct() public {
    //        selfdestruct(payable(address(0x0)));
    //    }

    function tryCatch(address _tokenAddress) public {
        try ERC20(_tokenAddress).totalSupply() {
            emit tried();
        } catch {
            emit caught();
        }
    }
}
