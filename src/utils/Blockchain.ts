import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum Blockchain {
  ETHEREUM = 1,
  BINANCE_SMART_CHAIN = 2,
  HARMONY = 3
}