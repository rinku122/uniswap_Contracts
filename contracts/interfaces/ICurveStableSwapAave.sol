// SPDX-License-Identifier: MIT
pragma solidity 0.7.3;

interface ICurveStableSwapAave {
    function calc_token_amount(uint256[3] memory _amounts, bool _is_deposit) external view returns(uint);
    function add_liquidity(uint256[3] memory _amounts, uint256 _min_mint_amount, bool _use_underlying) external returns(uint);
    function underlying_coins(uint index) external view returns(address);
}