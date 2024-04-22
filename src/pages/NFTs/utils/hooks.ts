import { useAppSelector } from '@/hooks';
import { selectUserAddress } from '@/redux/dapp/dapp-slice';
import { fetchScSimpleData } from '@/services/sc/query';
import { adaptTokenPayment } from '@/utils/adapters';
import { Address, AddressValue } from '@multiversx/sdk-core/out';
import BigNumber from 'bignumber.js';
import useSWR from 'swr';

export const useGetNFTsPrice = () => {
  const { data, error, mutate } = useSWR('minJeeter:getNftPrice', async (key) =>
    adaptTokenPayment(await fetchScSimpleData(key))
  );

  return {
    data,
    error,
    mutate
  };
};

export const useGetMaxAllowedToMint = () => {
  const { data, error, isLoading, mutate } = useSWR(
    'minJeeter:getTokensLimitPerAddressTotal',
    async (key) => {
      const res: BigNumber = await fetchScSimpleData(key);

      return res.toNumber();
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate
  };
};

export const useGetUserMinted = () => {
  const address = useAppSelector(selectUserAddress);

  const { data, error, isLoading, mutate } = useSWR(
    'minJeeter:getMintedPerAddressTotal:' + address,
    async (key) => {
      const res: BigNumber = await fetchScSimpleData(key, [
        new AddressValue(Address.fromBech32(address))
      ]);
      return res.toNumber();
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate
  };
};

export const useGetMaxUserAllowedToBuy = () => {
  const {
    data: limitPerAddress,
    error: errorLimitPerAddress,
    isLoading: isLoadingLimitPerAddress
  } = useGetMaxAllowedToMint();
  const { data: mintedPerAddress, error, isLoading } = useGetUserMinted();

  return {
    tokensLeftToMint: (limitPerAddress || 0) - (mintedPerAddress || 0),
    error: errorLimitPerAddress || error,
    isLoading: isLoadingLimitPerAddress || isLoading
  };
};

export const useGetLeftToMint = () => {
  const { data, error, isLoading, mutate } = useSWR(
    'minJeeter:getTotalTokensLeft',
    async () => {
      const res: BigNumber = await fetchScSimpleData(
        'minJeeter:getTotalTokensLeft'
      );
      return res.toNumber();
    }
  );

  return {
    data: data || 0,
    error,
    isLoading,
    mutate
  };
};
