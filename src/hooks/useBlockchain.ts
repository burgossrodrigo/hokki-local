import { Blockchain } from '../utils/Blockchain'
import getBlockchain from '../utils/getBlockchain'
import { useActiveWeb3React } from './index'

export default function useBlockchain(): Blockchain {
  const { chainId } = useActiveWeb3React()
  return getBlockchain(chainId)
}
