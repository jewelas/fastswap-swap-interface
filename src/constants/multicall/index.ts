import { ChainId } from '@fastswap-libs'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.BSCTESTNET]: `${process.env.REACT_APP_MULTI_CALL_TEST}`,
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
