import { ChainId, JSBI } from '@uniswap/sdk'

export default function getBlocksPerYear(chainId: ChainId | undefined): JSBI {
  const blockchainSettings = 13
  const blocksPerMinute =
    blockchainSettings && blockchainSettings
      ? JSBI.divide(JSBI.BigInt(60), JSBI.BigInt(blockchainSettings))
      : JSBI.BigInt(0)
  const blocksPerHour = JSBI.multiply(blocksPerMinute, JSBI.BigInt(60))
  const blocksPerDay = JSBI.multiply(blocksPerHour, JSBI.BigInt(24))
  const blocksPerYear = JSBI.multiply(blocksPerDay, JSBI.BigInt(365))

  return blocksPerYear
}
