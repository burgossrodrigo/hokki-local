import React from 'react'
/*
import { useActiveWeb3React } from '../../hooks'
import useTotalCombinedTVL from '../../utils/useTotalCombinedTVL'
import { CustomMouseoverTooltip } from '../Tooltip/custom'
*/
export default function CombinedTVL() {
 
 /*
  const { chainId } = useActiveWeb3React()
  const isActive = true
  const TVLs = useTotalCombinedTVL(filteredStakingInfos)

  */
  

  return (

    <>
      { /* TVLs?.stakingPoolTVL?.greaterThan('0') && (
        <CustomMouseoverTooltip
          element={
            <>
              {TVLs.stakingPoolTVL?.greaterThan('0') && (
                <>
                  <b>Staking:</b> $
                  {TVLs.stakingPoolTVL.toSignificant(8, {
                    groupSeparator: ','
                  })}
                  <br />
                </>
              )}
              {TVLs.totalPitTVL?.greaterThan('0') && (
                <>
                  <b>{pitSettings?.name}:</b> ${TVLs.totalPitTVL.toSignificant(8, { groupSeparator: ',' })}
                  <br />
                </>
              )}
              {TVLs.totalCombinedTVL?.greaterThan('0') && (
                <>
                  <b>Total:</b> ${TVLs.totalCombinedTVL.toSignificant(8, { groupSeparator: ',' })}
                </>
              )}
            </>
          }
        >
          {TVLs.totalCombinedTVL?.greaterThan('0') && (
            <>TVL: ${TVLs.totalCombinedTVL.toSignificant(8, { groupSeparator: ',' })}</>
          )}
        </CustomMouseoverTooltip>
          ) */}
    </>
  )
}


