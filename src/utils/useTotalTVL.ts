import { useMemo } from 'react'
import { Fraction, JSBI } from '@uniswap/sdk'
import { StakingInfo } from '../state/stake/hooks'

export default function useTotalTVL(stakingInfos: StakingInfo[]): Fraction {
  return useMemo(() => {
    return stakingInfos.reduce<Fraction>((memo, stakingInfo) => {
      if (stakingInfo && stakingInfo.valueOfTotalStakedAmountInWeth) {
        if (stakingInfo.valueOfTotalStakedAmountInWeth) {
          memo = memo.add(stakingInfo.valueOfTotalStakedAmountInWeth)
        }
      }
      return memo
    }, new Fraction(JSBI.BigInt(0), JSBI.BigInt(1)))
  }, [stakingInfos])
}
