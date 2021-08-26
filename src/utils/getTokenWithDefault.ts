import { ChainId, Token, WETH } from '@uniswap/sdk'
import { TOKENS } from './extrasdk'
import { ZERO_ADDRESS } from '../constants/index'

export default function getTokenWithDefault(chainId: ChainId, symbol: string): Token {
  symbol = symbol.toUpperCase()
  let token: Token

  switch (symbol) {
    case 'WETH':
      token = WETH[chainId]
      break
    default:
      const retrievedToken = TOKENS[chainId].firstBySymbol(symbol)
      token = retrievedToken ? retrievedToken : new Token(chainId, ZERO_ADDRESS, 18, symbol, symbol)
      break
  }

  return token
}