import { ChainId, Token } from '@uniswap/sdk'
import getPairTokensWithDefaults from '../utils/getPairTokensWithDefaults'

export const PIT_POOLS: {
  [chainId in ChainId]?: {
    pid: number
    tokens: [Token, Token]
  }[]
} = {
  [ChainId.MAINNET]: [
    {
      pid: 0,
      tokens: getPairTokensWithDefaults(ChainId.MAINNET, 'WONE/BUSD')
    },
    {
      pid: 1,
      tokens: getPairTokensWithDefaults(ChainId.MAINNET, 'WONE/VIPER')
    },
    {
      pid: 2,
      tokens: getPairTokensWithDefaults(ChainId.MAINNET, 'WONE/1ETH')
    },
    {
      pid: 3,
      tokens: getPairTokensWithDefaults(ChainId.MAINNET, 'BUSD/VIPER')
    },
    {
      pid: 4,
      tokens: getPairTokensWithDefaults(ChainId.MAINNET, 'BUSD/bscBUSD')
    }
  ],
  [ChainId.ROPSTEN]: [
    {
      pid: 0,
      tokens: getPairTokensWithDefaults(ChainId.ROPSTEN, 'HOKK/WETH')
    }
  ]
}
