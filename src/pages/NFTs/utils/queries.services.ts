import { scQuery } from '@/services/sc/query';

export const fetchMintedNFTs = async () => {
  const res = await scQuery('minJeeter', '');

  return res?.firstValue?.valueOf();
};

export const fetchTotalToMintNFTs = async () => {
  const res = await scQuery('minJeeter', '');

  return res?.firstValue?.valueOf();
};

export const fetchNFTPrice = async () => {
  const res = await scQuery('minJeeter', '');

  return res?.firstValue?.valueOf();
};

export const fetchReadyToMint = async () => {
  const res = await scQuery('minJeeter', '');

  return res?.firstValue?.valueOf();
};
