import React from 'react'
import { AutoColumn } from '../../components/Column'
import { ButtonLight } from '../../components/Button'
import styled from 'styled-components'
import { useStakingInfo } from '../../state/stake/hooks'
import { STAKING_REWARDS_INFO } from '../../constants/staking'
import { TYPE, ExternalLink } from '../../theme'
import PoolCard from '../../components/earn/PoolCard'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earn/styled'
// import { Countdown } from './Countdown'
import Loader from '../../components/Loader'
import { useActiveWeb3React } from '../../hooks'
// import { JSBI } from '@uniswap/sdk'
// import { BIG_INT_ZERO } from '../../constants'
import { OutlineCard } from '../../components/Card'
import useTotalCombinedTVL from '../../utils/useTotalCombinedTVL'
import { useWalletModalToggle } from '../../state/application/hooks'


const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const PoolSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 15px;
  width: 100%;
  justify-self: center;
`

const DataRow = styled(RowBetween)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
flex-direction: column;
`};
`

export default function Earn() {
  const { chainId, account } = useActiveWeb3React()
  
  const toggleWalletModal = useWalletModalToggle()

  // staking info for connected account
  const stakingInfos = useStakingInfo()

  /**
   * only show staking cards with balance
   * @todo only account for this if rewards are inactive
   */
  const stakingInfosWithBalance = stakingInfos?.filter(s => s.active)

  // toggle copy if rewards are inactive
  const stakingRewardsExist = Boolean(typeof chainId === 'number' && (STAKING_REWARDS_INFO[chainId]?.length ?? 0) > 0)

  const TVLs = useTotalCombinedTVL(stakingInfos)
 
  return (
    
    <PageWrapper gap="lg" justify="center">
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>HOKKFi Staking (Liquidity Mining)</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                Deposit your Liquidity Provider (LP) tokens to receive $HOKKFi, the $HOKK ecosystem utility and governance token.
                </TYPE.white>
              </RowBetween>{' '}
              <ExternalLink
                style={{ color: 'white', textDecoration: 'underline' }}
                href="#"
                // target="_blank"
              >
                <TYPE.white fontSize={14}>HOKKFi Staking coming soon</TYPE.white>
              </ExternalLink>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <DataRow style={{ alignItems: 'baseline' }}>
          <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>Participating pools</TYPE.mediumHeader>
          {/* <Countdown exactEnd={stakingInfos?.[0]?.periodFinish} /> */}
          <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>              
          {TVLs?.stakingPoolTVL?TVLs.stakingPoolTVL.toSignificant(3, {groupSeparator: ','}): '-'} ETH
                </TYPE.mediumHeader>
        </DataRow>


        {!account ? (
          <ButtonLight onClick={toggleWalletModal}>Connect Wallet</ButtonLight>
        ) : 
        <PoolSection>
          {stakingRewardsExist && stakingInfos?.length === 0 ? (
            <Loader style={{ margin: 'auto' }} />
          ) : !stakingRewardsExist ? (
            <OutlineCard>No active pools</OutlineCard>
          ) : stakingInfos?.length !== 0 && stakingInfosWithBalance.length === 0 ? (
            <OutlineCard>No active pools</OutlineCard>
          ) : (
            stakingInfosWithBalance?.map(stakingInfo => {
              // need to sort by added liquidity here
              return <PoolCard key={stakingInfo.pid} stakingInfo={stakingInfo} isArchived={false}/>
            })
          )}
        </PoolSection>
      }

      </AutoColumn>
    </PageWrapper>
  )
}
