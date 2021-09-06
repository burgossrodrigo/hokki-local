import { useMemo } from 'react'
import { TokenAmount, Fraction } from '@uniswap/sdk'
import { useTokenBalance } from '../state/wallet/hooks'
import usePitToken from './usePitToken'
import { GOVERNANCE_TOKEN_INTERFACE } from '../abi/governanceToken'
import useGovernanceToken from '../hooks/useGovernanceToken'
import useUSDCPrice from '../utils/useUSDCPrice'

export default function usePitTVL(): Fraction | undefined {
  const govToken = useGovernanceToken()
  const govTokenBusdPrice = useUSDCPrice(govToken)
  const pit = usePitToken()
  const pitGovTokenBalance: TokenAmount | undefined = useTokenBalance(
    pit && pit.address,
    govToken,
    'balanceOf',
    GOVERNANCE_TOKEN_INTERFACE
  )

  return useMemo(() => {
    return govTokenBusdPrice ? pitGovTokenBalance?.multiply(govTokenBusdPrice?.raw) : undefined
  }, [govTokenBusdPrice, pitGovTokenBalance])
}
