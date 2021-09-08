import {
  ALPHA,
  AMPL,
  BAB,
  BAC,
  BSC,
  CREAM,
  CRV,
  CVXCRV,
  DAI,
  DOUGH,
  DPI,
  DUCK,
  ETH2X_FLI,
  FEI,
  FRAX,
  FXS,
  HBTC,
  IBETH,
  LFBTC,
  LIFT,
  MIR,
  NFTX,
  PLAY,
  PONT,
  PWING,
  RENBTC,
  RUNE,
  STETH,
  SUSHI,
  UMA,
  USDC,
  USDP,
  USDT,
  UST,
  WBTC,
  XSUSHI,
} from './tokens'
// a list of tokens by chain
import { ChainId, Token, WNATIVE } from '@sushiswap/sdk'

type ChainTokenList = {
  readonly [chainId: number]: Token[]
}

// List of all mirror's assets addresses.
// Last pulled from : https://whitelist.mirror.finance/eth/tokenlists.json
// TODO: Generate this programmatically ?
const MIRROR_ADDITIONAL_BASES: { [tokenAddress: string]: Token[] } = {
  [UST.address]: [MIR],
  [MIR.address]: [UST],
  '0xd36932143F6eBDEDD872D5Fb0651f4B72Fd15a84': [MIR, UST], // mAAPL
  '0x59A921Db27Dd6d4d974745B7FfC5c33932653442': [MIR, UST], // mGOOGL
  '0x21cA39943E91d704678F5D00b6616650F066fD63': [MIR, UST], // mTSLA
  '0xC8d674114bac90148d11D3C1d33C61835a0F9DCD': [MIR, UST], // mNFLX
  '0x13B02c8dE71680e71F0820c996E4bE43c2F57d15': [MIR, UST], // mQQQ
  '0xEdb0414627E6f1e3F082DE65cD4F9C693D78CCA9': [MIR, UST], // mTWTR
  '0x41BbEDd7286dAab5910a1f15d12CBda839852BD7': [MIR, UST], // mMSFT
  '0x0cae9e4d663793c2a2A0b211c1Cf4bBca2B9cAa7': [MIR, UST], // mAMZN
  '0x56aA298a19C93c6801FDde870fA63EF75Cc0aF72': [MIR, UST], // mBABA
  '0x1d350417d9787E000cc1b95d70E9536DcD91F373': [MIR, UST], // mIAU
  '0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676': [MIR, UST], // mSLV
  '0x31c63146a635EB7465e5853020b39713AC356991': [MIR, UST], // mUSO
  '0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86': [MIR, UST], // mVIXY
}

// TODO: SDK should have two maps, WETH map and WNATIVE map.
const WRAPPED_NATIVE_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WNATIVE[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WNATIVE[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WNATIVE[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WNATIVE[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WNATIVE[ChainId.KOVAN]],
  [ChainId.BSC]: [WNATIVE[ChainId.BSC]],
  [ChainId.BSC_TESTNET]: [WNATIVE[ChainId.BSC_TESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WRAPPED_NATIVE_ONLY,
  [ChainId.MAINNET]: [...WRAPPED_NATIVE_ONLY[ChainId.MAINNET], DAI, USDC, USDT, WBTC, RUNE, NFTX, STETH],
  [ChainId.BSC]: [...WRAPPED_NATIVE_ONLY[ChainId.BSC], BSC.DAI, BSC.USD, BSC.USDC, BSC.USDT, BSC.BTCB, BSC.WETH],
  
}

export const ADDITIONAL_BASES: {
  [chainId: number]: { [tokenAddress: string]: Token[] }
} = {
  [ChainId.MAINNET]: {
    ...MIRROR_ADDITIONAL_BASES,
    '0xF16E4d813f4DcfDe4c5b44f305c908742De84eF0': [ETH2X_FLI],
    '0xe379a60A8FC7C9DD161887fFADF3054790576c8D': [XSUSHI], // XSUSHI 25 Call [30 June 2021]
    '0xB46F57e7Ce3a284d74b70447Ef9352B5E5Df8963': [UMA], // UMA 25 Call [30 June 2021]
    [FEI.address]: [DPI],
    [FRAX.address]: [FXS],
    [FXS.address]: [FRAX],
    [WBTC.address]: [RENBTC],
    [RENBTC.address]: [WBTC],
    [PONT.address]: [PWING],
    [PWING.address]: [PONT],
    [PLAY.address]: [DOUGH],
    [DOUGH.address]: [PLAY],
    [IBETH.address]: [ALPHA],
    [ALPHA.address]: [IBETH],
    [HBTC.address]: [CREAM],
    [CREAM.address]: [HBTC],
    [DUCK.address]: [USDP],
    [USDP.address]: [DUCK],
    [BAB.address]: [BAC],
    [BAC.address]: [BAB],
    [LIFT.address]: [LFBTC],
    [LFBTC.address]: [LIFT],
    [CVXCRV.address]: [CRV],
    [CRV.address]: [CVXCRV],
  },
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: {
  [chainId: number]: { [tokenAddress: string]: Token[] }
} = {
  [ChainId.MAINNET]: {
    [AMPL.address]: [DAI, WNATIVE[ChainId.MAINNET]],
  }
}

/**
 * Shows up in the currency select for swap and add liquidity
 */
export const COMMON_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [
    
    ...WRAPPED_NATIVE_ONLY[ChainId.MAINNET], 
    DAI, 
    USDC, 
    USDT, 
    WBTC, 
],


  [ChainId.BSC]: [
    ...WRAPPED_NATIVE_ONLY[ChainId.BSC],
    BSC.DAI,
    BSC.USD,
    BSC.USDC,
    BSC.USDT,
    BSC.BTCB,
    BSC.WETH,
  ]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WRAPPED_NATIVE_ONLY,
  [ChainId.MAINNET]: [...WRAPPED_NATIVE_ONLY[ChainId.MAINNET], DAI, USDC, USDT, WBTC],
  [ChainId.BSC]: [...WRAPPED_NATIVE_ONLY[ChainId.BSC], BSC.DAI, BSC.USD, BSC.USDC, BSC.USDT, BSC.BTCB, BSC.WETH]
}

export const PINNED_PAIRS: {
  readonly [chainId in ChainId]?: [Token, Token][]
} = {
  [ChainId.MAINNET]: [
    [SUSHI[ChainId.MAINNET], WNATIVE[ChainId.MAINNET]],
    [
      new Token(ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
      new Token(ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin'),
    ],
    [USDC, USDT],
    [DAI, USDT],
  ],
}
