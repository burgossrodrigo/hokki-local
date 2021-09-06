import { ChainId } from '@uniswap/sdk'
import { Blockchain } from './Blockchain'

export default function getBlockchain(chainId: ChainId | undefined): Blockchain {
  switch (chainId) {
    case ChainId.MAINNET:
    case ChainId.ROPSTEN:
    case ChainId.RINKEBY:
    case ChainId.GÖRLI:
    case ChainId.KOVAN:
      return Blockchain.ETHEREUM
    default:
      return Blockchain.ETHEREUM
  }
}
