import { ChainId, Ether, SUSHI_ADDRESS, Token, WETH9, WNATIVE } from '@sushiswap/sdk'

export const BSC: { [key: string]: Token } = {
  DAI: new Token(ChainId.BSC, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin'),
  USD: new Token(ChainId.BSC, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD'),
  USDC: new Token(ChainId.BSC, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USD Coin'),
  USDT: new Token(ChainId.BSC, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD'),
  BTCB: new Token(ChainId.BSC, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Bitcoin'),
  WETH: new Token(ChainId.BSC, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'WETH', 'Wrapped Ether'),
  HOKK: new Token(ChainId.BSC, '0x36A92f809Da8c2072B090a9e3322226C5376B207', 18, 'HOKK', 'Hokkaidu Inu'),
}

// Default Ethereum chain tokens
export const HOKK = new Token(ChainId.MAINNET, '0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e', 18, 'Hokk', 'Hokkaidu Inu')
export const ALPHA = new Token(ChainId.MAINNET, '0xa1faa113cbE53436Df28FF0aEe54275c13B40975', 18, 'ALPHA', 'AlphaToken')
export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')
export const BAB = new Token(ChainId.MAINNET, '0xC36824905dfF2eAAEE7EcC09fCC63abc0af5Abc5', 18, 'BAB', 'BAB')
export const BAC = new Token(ChainId.MAINNET, '0x3449FC1Cd036255BA1EB19d65fF4BA2b8903A69a', 18, 'BAC', 'Basis Cash')
export const CREAM = new Token(ChainId.MAINNET, '0x2ba592F78dB6436527729929AAf6c908497cB200', 18, 'CREAM', 'Cream')
export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
export const DOUGH = new Token(
  ChainId.MAINNET,
  '0xad32A8e6220741182940c5aBF610bDE99E737b2D',
  18,
  'DOUGH',
  'PieDAO Dough v2'
)

export const SHIB = new Token(ChainId.MAINNET, '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce', 18, 'SHIB', 'Shiba Inu')

export const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')
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

export const DPI = new Token(ChainId.MAINNET, '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b', 18, 'DefiPulse', 'DPI')

type ChainTokenMap = {
  readonly [chainId in ChainId]?: Token
}

// SUSHI
export const SUSHI: ChainTokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, SUSHI_ADDRESS[ChainId.MAINNET], 18, 'SUSHI', 'SushiToken'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, SUSHI_ADDRESS[ChainId.ROPSTEN], 18, 'SUSHI', 'SushiToken'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, SUSHI_ADDRESS[ChainId.RINKEBY], 18, 'SUSHI', 'SushiToken'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, SUSHI_ADDRESS[ChainId.GÖRLI], 18, 'SUSHI', 'SushiToken'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, SUSHI_ADDRESS[ChainId.KOVAN], 18, 'SUSHI', 'SushiToken'),
  [ChainId.BSC]: new Token(ChainId.BSC, SUSHI_ADDRESS[ChainId.BSC], 18, 'SUSHI', 'SushiToken'),
}
