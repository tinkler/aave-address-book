import {ChainId} from '@bgd-labs/js-utils';
import {GovernanceConfig} from '../types';

export const governanceConfigFuji: GovernanceConfig = {
  name: 'Fuji',
  CHAIN_ID: ChainId.fuji,
  ADDRESSES: {
    CROSS_CHAIN_CONTROLLER: '0x5488A48E5C22175548E8d68622211F5928cBbf23',
    VOTING_MACHINE: '0x79Edd77c76F95b6b69907CaD1d8241F9DB0e3FD0',
    PAYLOADS_CONTROLLER: '0xf1842f9D6C3D9ec1153d7afCBb9cDBC537Ea5d15',
  },
};