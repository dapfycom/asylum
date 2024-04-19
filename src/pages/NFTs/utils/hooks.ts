import { fetchScSimpleData } from '@/services/sc/query';
import { adaptTokenPayment } from '@/utils/adapters';
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
