import { WETH } from '@uniswap/sdk'
import { useMemo } from 'react'
// import getToken from '../utils/getToken'
import { useActiveWeb3React } from './index'

export default function useTokensWithWethPrices(): Record<string, any> {
  const { chainId } = useActiveWeb3React()
  // const blockchain = chainId

  const weth = chainId && WETH[chainId]


  // const BUSDTicker = chainId !== ChainId.ROPSTEN ? 'BUSD' : 'BUSD'
  // const BUSD: Token | undefined = getToken(chainId, BUSDTicker)
  // const BUSDWETHPrice = useTokenWethPrice(BUSD)

  // const USDCTicker = chainId === ChainId.ROPSTEN ? 'USDC' : 'USDC'
  // const USDC: Token | undefined = getToken(chainId, USDCTicker)
  // const USDCWETHPrice = useTokenWethPrice(USDC)

  // // Harmony specific tokens
  // const bscBUSD: Token | undefined = chainId === ChainId.ROPSTEN ? getToken(chainId, 'bscBUSD') : undefined
  // const bscBUSDWETHPrice = useTokenWethPrice(bscBUSD)

  // const bridgedETH: Token | undefined = ChainId.ROPSTEN ? getToken(chainId, 'ETH') : undefined
  // const bridgedETHWETHPrice = useTokenWethPrice(bridgedETH)

  return useMemo(() => {
    return {
      WETH: { token: weth, price: undefined },
      // BUSD: { token: BUSD, price: BUSDWETHPrice },
      // USDC: { token: USDC, price: USDCWETHPrice },
      // bscBUSD: { token: bscBUSD, price: bscBUSDWETHPrice },
      // bridgedETH: { token: bridgedETH, price: bridgedETHWETHPrice }
    }
  }, [
    // chainId,
    // blockchain,
    weth
    // BUSD,
    // BUSDWETHPrice,
    // USDC,
    // USDCWETHPrice,
    // bscBUSD,
    // bscBUSDWETHPrice,
    // bridgedETH,
    // bridgedETHWETHPrice
  ])
}
