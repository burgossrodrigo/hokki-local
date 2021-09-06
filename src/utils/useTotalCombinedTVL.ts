import { useMemo } from 'react'
import { StakingInfo } from '../state/stake/hooks'
import useTotalTVL from './useTotalTVL'
import usePitTVL from '../hooks/usePitTVL'

export default function useTotalCombinedTVL(stakingInfos: StakingInfo[]): Record<string, any> {
  const totalStakingPoolTVL = useTotalTVL(stakingInfos)
  const totalPitTVL = usePitTVL()

  return useMemo(() => {
    return {
      stakingPoolTVL: totalStakingPoolTVL ? totalStakingPoolTVL : undefined,
      totalPitTVL: totalPitTVL ? totalPitTVL : undefined,
      totalCombinedTVL: totalStakingPoolTVL && totalPitTVL ? totalStakingPoolTVL.add(totalPitTVL) : undefined
    }
  }, [totalStakingPoolTVL, totalPitTVL])
}
