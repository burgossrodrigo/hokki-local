import { useMemo } from 'react'
import { StakingInfo } from '../state/stake/hooks'
import useTotalTVL from './useTotalTVL'

export default function useTotalCombinedTVL(stakingInfos: StakingInfo[]): Record<string, any> {
  const totalStakingPoolTVL = useTotalTVL(stakingInfos)

  return useMemo(() => {
    return {
      stakingPoolTVL: totalStakingPoolTVL ? totalStakingPoolTVL : undefined,
      
    }
  }, [totalStakingPoolTVL])
}
