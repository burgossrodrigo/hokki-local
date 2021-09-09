import { ChainId, SUSHI_ADDRESS, Token } from '@sushiswap/sdk'







export const BSC: { [key: string]: Token } = {
  DAI: new Token(ChainId.BSC, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin'),
  USD: new Token(ChainId.BSC, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD'),
  USDC: new Token(ChainId.BSC, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USD Coin'),
  USDT: new Token(ChainId.BSC, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD'),
  BTCB: new Token(ChainId.BSC, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Bitcoin'),
  WETH: new Token(ChainId.BSC, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'WETH', 'Wrapped Ether'),
}

// Default Ethereum chain tokens
export const ALPHA = new Token(ChainId.MAINNET, '0xa1faa113cbE53436Df28FF0aEe54275c13B40975', 18, 'ALPHA', 'AlphaToken')
export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')
export const BAB = new Token(ChainId.MAINNET, '0xC36824905dfF2eAAEE7EcC09fCC63abc0af5Abc5', 18, 'BAB', 'BAB')
export const BAC = new Token(ChainId.MAINNET, '0x3449FC1Cd036255BA1EB19d65fF4BA2b8903A69a', 18, 'BAC', 'Basis Cash')
export const CREAM = new Token(ChainId.MAINNET, '0x2ba592F78dB6436527729929AAf6c908497cB200', 18, 'CREAM', 'Cream')
export const DAI = new Token(ChainId.MAINNET, '0x6b175474e89094c44da98b954eedeac495271d0f', 18, 'DAI', 'Dai Stablecoin')
export const DOUGH = new Token(ChainId.MAINNET, '0xad32A8e6220741182940c5aBF610bDE99E737b2D', 18, 'DOUGH', 'PieDAO Dough v2')
export const DUCK = new Token(ChainId.MAINNET, '0x92E187a03B6CD19CB6AF293ba17F2745Fd2357D5', 18, 'DUCK', 'DUCK')
export const ETH2X_FLI = new Token(ChainId.MAINNET, '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD', 18, 'ETH2x-FLI', 'ETH 2x Flexible Leverage Index'
)
export const FEI = new Token(ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD')
export const FRAX = new Token(ChainId.MAINNET, '0x853d955aCEf822Db058eb8505911ED77F175b99e', 18, 'FRAX', 'FRAX')
export const FXS = new Token(ChainId.MAINNET, '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0', 18, 'FXS', 'Frax Share')
export const HBTC = new Token(ChainId.MAINNET, '0x0316EB71485b0Ab14103307bf65a021042c6d380', 18, 'HBTC', 'Huobi BTC')
export const IBETH = new Token(
  ChainId.MAINNET,
  '0xeEa3311250FE4c3268F8E684f7C87A82fF183Ec1',
  8,
  'ibETHv2',
  'Interest Bearing Ether v2'
)
export const MEOW = new Token(ChainId.MAINNET, '0x650F44eD6F1FE0E1417cb4b3115d52494B4D9b6D', 18, 'MEOW', 'Meowshi')
export const MIR = new Token(ChainId.MAINNET, '0x09a3EcAFa817268f77BE1283176B946C4ff2E608', 18, 'MIR', 'Wrapped MIR')
export const NFTX = new Token(ChainId.MAINNET, '0x87d73E916D7057945c9BcD8cdd94e42A6F47f776', 18, 'NFTX', 'NFTX')
export const PLAY = new Token(
  ChainId.MAINNET,
  '0x33e18a092a93ff21aD04746c7Da12e35D34DC7C4',
  18,
  'PLAY',
  'Metaverse NFT Index'
)
export const PONT = new Token(
  ChainId.MAINNET,
  '0xcb46C550539ac3DB72dc7aF7c89B11c306C727c2',
  9,
  'pONT',
  'Poly Ontology Token'
)
export const PWING = new Token(
  ChainId.MAINNET,
  '0xDb0f18081b505A7DE20B18ac41856BCB4Ba86A1a',
  9,
  'pWING',
  'Poly Ontology Wing Token'
)
export const RENBTC = new Token(1, '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D', 8, 'renBTC', 'renBTC')
export const RUNE = new Token(ChainId.MAINNET, '0x3155BA85D5F96b2d030a4966AF206230e46849cb', 18, 'RUNE', 'RUNE.ETH')
export const STETH = new Token(ChainId.MAINNET, '0xDFe66B14D37C77F4E9b180cEb433d1b164f0281D', 18, 'stETH', 'stakedETH')
export const TRIBE = new Token(ChainId.MAINNET, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', 18, 'TRIBE', 'Tribe')
export const UMA = new Token(ChainId.MAINNET, '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828', 18, 'UMA', 'UMA')
export const UMA_CALL = new Token(
  ChainId.MAINNET,
  '0x1062aD0E59fa67fa0b27369113098cC941Dd0D5F',
  18,
  'UMA',
  'UMA 35 Call [30 Apr 2021]'
)
export const USDC = new Token(ChainId.MAINNET, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 6, 'USDC', 'USD Coin')
export const USDP = new Token(
  ChainId.MAINNET,
  '0x1456688345527bE1f37E9e627DA0837D6f08C925',
  18,
  'USDP',
  'USDP Stablecoin'
)
export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const UST = new Token(ChainId.MAINNET, '0xa47c8bf37f92aBed4A126BDA807A7b7498661acD', 18, 'UST', 'Wrapped UST')
export const XSUSHI_CALL = new Token(
  ChainId.MAINNET,
  '0xada279f9301C01A4eF914127a6C2a493Ad733924',
  18,
  'XSUc25-0531',
  'XSUSHI 25 Call [31 May 2021]'
)
export const WBTC = new Token(ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC')

export const XSUSHI = new Token(ChainId.MAINNET, '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272', 18, 'xSUSHI', 'SushiBar')

export const LIFT = new Token(ChainId.MAINNET, '0xf9209d900f7ad1DC45376a2caA61c78f6dEA53B6', 18, 'LIFT', 'LiftKitchen')
export const LFBTC = new Token(
  ChainId.MAINNET,
  '0xafcE9B78D409bF74980CACF610AFB851BF02F257',
  18,
  'LFBTC',
  'LiftKitchen BTC'
)
export const CVXCRV = new Token(ChainId.MAINNET, '0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7', 18, 'cvxCRV', 'cvxCRV')
export const CRV = new Token(ChainId.MAINNET, '0xD533a949740bb3306d119CC777fa900bA034cd52', 18, 'CRV', 'Curve')

export const CRXSUSHI = new Token(
  ChainId.MAINNET,
  '0x228619cca194fbe3ebeb2f835ec1ea5080dafbb2',
  8,
  'crXSUSHI',
  'Cream SushiBar'
)
export const AXSUSHI = new Token(
  ChainId.MAINNET,
  '0xf256cc7847e919fac9b808cc216cac87ccf2f47a',
  18,
  'aXSUSHI',
  'Aave interest bearing XSUSHI'
)

export const DPI = new Token(ChainId.MAINNET, '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b', 18, 'DefiPulse', 'DPI')

type ChainTokenMap = {
  readonly [chainId in ChainId]?: Token
}

// SUSHI
export const HOKK: ChainTokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e', 18, 'HOKK', 'Hokkaidu Inu'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, '0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e', 18, 'HOKK', 'Hokkaidu InU'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, '0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e', 18, 'HOKK', 'Hokkaidu Inu'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, '0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e', 18, 'HOKK', 'Hokkaidu Inu'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e', 18, 'HOKK', 'Hokkaidu Inu'),
  [ChainId.BSC]: new Token(ChainId.BSC, '0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e', 18, 'HOKK', 'Hokkaidu Inu'),
}
