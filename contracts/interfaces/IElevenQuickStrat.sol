// SPDX-License-Identifier: MIT
pragma solidity 0.7.3;

interface IElevenQuickStrat {
    function WITHDRAWAL_FEE() external view returns (uint);
    function WITHDRAWAL_MAX() external view returns (uint);
}