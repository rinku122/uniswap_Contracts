// SPDX-License-Identifier: MIT
pragma solidity 0.7.3;

interface IAxialChef {
    function deposit(uint256 _pid, uint256 _amount) external;

    function withdraw(uint256 _pid, uint256 _amount) external;

    function emergencyWithdraw(uint256 _pid) external;

    function pendingTokens(uint256 _pid, address _user)
        external
        view
        returns (
            uint256 pendingAxial,
            address bonusTokenAddress,
            string memory bonusTokenSymbol,
            uint256 pendingBonusToken
        );

    function userInfo(uint256 _pid, address _user) external view returns (uint256 amount, uint256 rewardDebt);
}
