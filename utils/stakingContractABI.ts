export const STAKING_CONTRACT_ABI = [
    {
      "type": "constructor",
      "name": "",
      "inputs": [
        {
          "type": "address",
          "name": "_nativeTokenWrapper",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "ContractURIUpdated",
      "inputs": [
        {
          "type": "string",
          "name": "prevURI",
          "indexed": false,
          "internalType": "string"
        },
        {
          "type": "string",
          "name": "newURI",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Initialized",
      "inputs": [
        {
          "type": "uint8",
          "name": "version",
          "indexed": false,
          "internalType": "uint8"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardTokensDepositedByAdmin",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardTokensWithdrawnByAdmin",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardsClaimed",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "rewardAmount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleAdminChanged",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "previousAdminRole",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "newAdminRole",
          "indexed": true,
          "internalType": "bytes32"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleGranted",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RoleRevoked",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "sender",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokensStaked",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokensWithdrawn",
      "inputs": [
        {
          "type": "address",
          "name": "staker",
          "indexed": true,
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpdatedMinStakeAmount",
      "inputs": [
        {
          "type": "uint256",
          "name": "oldAmount",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "newAmount",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpdatedRewardRatio",
      "inputs": [
        {
          "type": "uint256",
          "name": "oldNumerator",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "newNumerator",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "oldDenominator",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "newDenominator",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "UpdatedTimeUnit",
      "inputs": [
        {
          "type": "uint256",
          "name": "oldTimeUnit",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "newTimeUnit",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "claimRewards",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "contractType",
      "inputs": [],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "contractURI",
      "inputs": [],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "contractVersion",
      "inputs": [],
      "outputs": [
        {
          "type": "uint8",
          "name": "",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "depositRewardTokens",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "getRewardRatio",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "_numerator",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_denominator",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRewardTokenBalance",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleAdmin",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleMember",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "uint256",
          "name": "index",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "member",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoleMemberCount",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "count",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getStakeInfo",
      "inputs": [
        {
          "type": "address",
          "name": "_staker",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint256",
          "name": "_tokensStaked",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_rewards",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getTimeUnit",
      "inputs": [],
      "outputs": [
        {
          "type": "uint80",
          "name": "_timeUnit",
          "internalType": "uint80"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grantRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "hasRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "hasRoleWithSwitch",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "initialize",
      "inputs": [
        {
          "type": "address",
          "name": "_defaultAdmin",
          "internalType": "address"
        },
        {
          "type": "string",
          "name": "_contractURI",
          "internalType": "string"
        },
        {
          "type": "address[]",
          "name": "_trustedForwarders",
          "internalType": "address[]"
        },
        {
          "type": "address",
          "name": "_rewardToken",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "_stakingToken",
          "internalType": "address"
        },
        {
          "type": "uint80",
          "name": "_timeUnit",
          "internalType": "uint80"
        },
        {
          "type": "uint256",
          "name": "_rewardRatioNumerator",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_rewardRatioDenominator",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isTrustedForwarder",
      "inputs": [
        {
          "type": "address",
          "name": "forwarder",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "bool",
          "name": "",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "multicall",
      "inputs": [
        {
          "type": "bytes[]",
          "name": "data",
          "internalType": "bytes[]"
        }
      ],
      "outputs": [
        {
          "type": "bytes[]",
          "name": "results",
          "internalType": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "renounceRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "revokeRole",
      "inputs": [
        {
          "type": "bytes32",
          "name": "role",
          "internalType": "bytes32"
        },
        {
          "type": "address",
          "name": "account",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "rewardToken",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "rewardTokenDecimals",
      "inputs": [],
      "outputs": [
        {
          "type": "uint16",
          "name": "",
          "internalType": "uint16"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setContractURI",
      "inputs": [
        {
          "type": "string",
          "name": "_uri",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setRewardRatio",
      "inputs": [
        {
          "type": "uint256",
          "name": "_numerator",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "_denominator",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setTimeUnit",
      "inputs": [
        {
          "type": "uint80",
          "name": "_timeUnit",
          "internalType": "uint80"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "stake",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "stakers",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "type": "uint128",
          "name": "timeOfLastUpdate",
          "internalType": "uint128"
        },
        {
          "type": "uint64",
          "name": "conditionIdOflastUpdate",
          "internalType": "uint64"
        },
        {
          "type": "uint256",
          "name": "amountStaked",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "unclaimedRewards",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "stakersArray",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "stakingToken",
      "inputs": [],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "stakingTokenBalance",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "stakingTokenDecimals",
      "inputs": [],
      "outputs": [
        {
          "type": "uint16",
          "name": "",
          "internalType": "uint16"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawRewardTokens",
      "inputs": [
        {
          "type": "uint256",
          "name": "_amount",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "receive",
      "name": "",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    }
  ] as const;