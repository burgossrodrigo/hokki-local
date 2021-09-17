import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum Blockchain {
  BINANCE_SMART_CHAIN = 1,
  TESTNET_SMART_CHAIN = 2
}