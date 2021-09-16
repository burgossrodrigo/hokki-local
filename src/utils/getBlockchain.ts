import { ChainId } from '@uniswap/sdk'
import { Blockchain } from './Blockchain'

export default function getBlockchain(chainId: ChainId | undefined): Blockchain {
  switch (chainId) {
    case ChainId.MAINNET:

      return Blockchain.BINANCE_SMART_CHAIN
    default:
      return Blockchain.BINANCE_SMART_CHAIN
  }
}
