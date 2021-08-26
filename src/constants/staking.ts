import {
  ChainId,
  Token
} from '@uniswap/sdk'
import getPairTokensWithDefaults from '../utils/getPairTokensWithDefaults'

export interface StakingRewardsInfo {
  pid: number
  tokens: [Token, Token]
  active: boolean
}

export const STAKING_REWARDS_INFO: {
  [chainId in ChainId] ? : StakingRewardsInfo[]
} = {
  [ChainId.MAINNET]: [{
      pid: 1,
      tokens: getPairTokensWithDefaults(ChainId.MAINNET, 'HokkFi/USDC'),
      active: true
    },
    {
      pid: 1,
      tokens: getPairTokensWithDefaults(ChainId.MAINNET, 'WONE/VIPER'),
      active: true
    },
    {
      pid: 2,
      tokens: getPairTokensWithDefaults(ChainId.MAINNET, 'WONE/1ETH'),
      active: true
    },
    {
      pid: 3,
      tokens: getPairTokensWithDefaults(ChainId.MAINNET, 'BUSD/VIPER'),
      active: true
    },
  ],
  [ChainId.ROPSTEN]: [
    {
    pid: 0,
    tokens: getPairTokensWithDefaults(ChainId.ROPSTEN, 'Hokk/WETH'),
    active: true
  }
 ]
}