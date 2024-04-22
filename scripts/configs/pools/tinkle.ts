import { ChainId } from '@bgd-labs/js-utils';
import { PoolConfig } from '../types';

export const tinkleProtoV3: PoolConfig = {
  name: 'Tinkle',
  chainId: 31337 as unknown as typeof ChainId,
  POOL_ADDRESSES_PROVIDER: '0xF688EE64450B3a9024CD7922a5E88D11e85E9861',
  additionalAddresses: {
    // FAUCET: '0x54972D20eD12baFEe74947BE4024A8EC8e347722',
    UI_INCENTIVE_DATA_PROVIDER: '0xCcdc1e940307b727c891ffe67A44eEfB7e939545',
    UI_POOL_DATA_PROVIDER: '0x4dc6F79EF3F655BC5ee7AebC37F15beA38aFAA39',
    WALLET_BALANCE_PROVIDER: '0x01C784eb4Dc264eA8093f263570B839d7B9b4E64',
    WETH_GATEWAY: '0x3153F3073f1621c3b0b9d7FB0594184E3a510439',
  },
};