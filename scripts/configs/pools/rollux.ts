import { PoolConfig } from "../types";
import {ChainId} from '@bgd-labs/js-utils';

export const tanenbaumV3: PoolConfig = {
  name: 'Tanenbaum',
  chainId: 57000 as unknown as typeof ChainId,
  POOL_ADDRESSES_PROVIDER: '0x86B02a0513d883dbEEF1ECF9c54aAa933f014759',
  additionalAddresses: {
    UI_INCENTIVE_DATA_PROVIDER: '0xbAbE69ba2292e7297480282390ee712d10B2a06E',
    UI_POOL_DATA_PROVIDER: '0x885912f4e648ff71AB9914295eCC7FD7BDF1F2Fe',
    WALLET_BALANCE_PROVIDER: '0x2979f1dfec495A6f661D03aa49bE05514Eb33FFD',
    WETH_GATEWAY: '0xe7036E7258Ccc423123eD24358f9861Fb54f323D',
  },
}