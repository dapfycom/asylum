import mintJeeterAbi from '@/assets/abis/mint_jeeter.abi.json';
import { scAddress } from '@/config';
import { Address } from '@multiversx/sdk-core/out';
import { SmartContractInteraction } from './call';

export const smartContractsConfig = {
  minJeeter: {
    simpleAddress: scAddress.mintJeeter,
    address: new Address(scAddress.mintJeeter),
    abi: mintJeeterAbi
  },
  wrapEGLDShard0: {
    simpleAddress: scAddress.wrapEGLDShard0,
    address: new Address(scAddress.wrapEGLDShard0),
    abi: null
  },
  wrapEGLDShard1: {
    simpleAddress: scAddress.wrapEGLDShard1,
    address: new Address(scAddress.wrapEGLDShard1),
    abi: null
  },
  wrapEGLDShard2: {
    simpleAddress: scAddress.wrapEGLDShard2,
    address: new Address(scAddress.wrapEGLDShard2),
    abi: null
  }
};

export type SmartContractConfigTypes = keyof typeof smartContractsConfig;

export const interactions: {
  [key in SmartContractConfigTypes]: SmartContractInteraction;
} = {
  minJeeter: new SmartContractInteraction(
    smartContractsConfig.minJeeter.simpleAddress,
    smartContractsConfig.minJeeter.abi
  ),
  wrapEGLDShard0: new SmartContractInteraction(
    smartContractsConfig.wrapEGLDShard0.simpleAddress
  ),
  wrapEGLDShard1: new SmartContractInteraction(
    smartContractsConfig.wrapEGLDShard1.simpleAddress
  ),
  wrapEGLDShard2: new SmartContractInteraction(
    smartContractsConfig.wrapEGLDShard2.simpleAddress
  )
};
