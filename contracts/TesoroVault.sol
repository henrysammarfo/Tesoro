// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title TesoroVault
 * @dev Treasury vault for automated yield generation on stablecoins
 * @notice This contract manages deposits, withdrawals, and yield distribution
 */
contract TesoroVault is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    // Supported stablecoins
    mapping(address => bool) public supportedTokens;
    
    // User balances per token
    mapping(address => mapping(address => uint256)) public userBalances;
    
    // Total deposits per token
    mapping(address => uint256) public totalDeposits;
    
    // Yield generated per user per token
    mapping(address => mapping(address => uint256)) public yieldGenerated;
    
    // Protocol fee (10% of yield = 1000 basis points)
    uint256 public constant PROTOCOL_FEE = 1000;
    uint256 public constant FEE_DENOMINATOR = 10000;
    
    // Events
    event Deposit(address indexed user, address indexed token, uint256 amount);
    event Withdraw(address indexed user, address indexed token, uint256 amount);
    event YieldDistributed(address indexed user, address indexed token, uint256 amount);
    event TokenAdded(address indexed token);
    event TokenRemoved(address indexed token);

    constructor() Ownable(msg.sender) {
        // Initialize with common stablecoins (addresses would be set for mainnet)
        // These are placeholder addresses
    }

    /**
     * @dev Add supported stablecoin
     */
    function addSupportedToken(address token) external onlyOwner {
        require(token != address(0), "Invalid token address");
        supportedTokens[token] = true;
        emit TokenAdded(token);
    }

    /**
     * @dev Remove supported stablecoin
     */
    function removeSupportedToken(address token) external onlyOwner {
        supportedTokens[token] = false;
        emit TokenRemoved(token);
    }

    /**
     * @dev Deposit stablecoins into vault
     */
    function deposit(address token, uint256 amount) external nonReentrant {
        require(supportedTokens[token], "Token not supported");
        require(amount > 0, "Amount must be greater than 0");

        IERC20(token).safeTransferFrom(msg.sender, address(this), amount);
        
        userBalances[msg.sender][token] += amount;
        totalDeposits[token] += amount;

        emit Deposit(msg.sender, token, amount);
    }

    /**
     * @dev Withdraw stablecoins from vault
     */
    function withdraw(address token, uint256 amount) external nonReentrant {
        require(supportedTokens[token], "Token not supported");
        require(amount > 0, "Amount must be greater than 0");
        require(userBalances[msg.sender][token] >= amount, "Insufficient balance");

        userBalances[msg.sender][token] -= amount;
        totalDeposits[token] -= amount;

        IERC20(token).safeTransfer(msg.sender, amount);

        emit Withdraw(msg.sender, token, amount);
    }

    /**
     * @dev Distribute yield to user (called by yield router)
     */
    function distributeYield(
        address user,
        address token,
        uint256 yieldAmount
    ) external onlyOwner {
        require(supportedTokens[token], "Token not supported");
        
        // Calculate protocol fee
        uint256 fee = (yieldAmount * PROTOCOL_FEE) / FEE_DENOMINATOR;
        uint256 userYield = yieldAmount - fee;

        // Update user balance and yield tracking
        userBalances[user][token] += userYield;
        yieldGenerated[user][token] += userYield;

        emit YieldDistributed(user, token, userYield);
    }

    /**
     * @dev Get user's total balance including yield
     */
    function getUserBalance(address user, address token) external view returns (uint256) {
        return userBalances[user][token];
    }

    /**
     * @dev Get user's total yield earned
     */
    function getUserYield(address user, address token) external view returns (uint256) {
        return yieldGenerated[user][token];
    }

    /**
     * @dev Emergency withdraw (owner only)
     */
    function emergencyWithdraw(address token, uint256 amount) external onlyOwner {
        IERC20(token).safeTransfer(owner(), amount);
    }
}
