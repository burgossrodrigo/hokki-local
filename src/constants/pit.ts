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
      tokens: getPairTokensWithDefaults(ChainId.MAINNET, 'HOKK/WETH')
    }
  ],
  [ChainId.ROPSTEN]: [
    {
      pid: 0,
      tokens: getPairTokensWithDefaults(ChainId.ROPSTEN, 'HOKK/WETH')
    }
  ]
}
