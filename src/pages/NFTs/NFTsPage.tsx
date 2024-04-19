import collectionImage from '@/assets/images/jeeter-collection.jpg';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useGetNFTsPrice } from './utils/hooks';

export const NFTsPage = () => {
  const {} = useGetNFTsPrice();
  return (
    <div>
      <div
        key='1'
        className='flex flex-col items-center justify-center min-h-screen '
      >
        <div className='max-w-2xl w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
          <h1 className='text-3xl font-bold text-center mb-4 dark:text-white'>
            JEETER NFT 1/100
          </h1>
          <p className='text-gray-600 dark:text-gray-300 text-center mb-4'>
            100 cool pfp NFTs ready to JEET. Buy with $JEET token. NFT holders
            get revenue share from the upcoming DEX.
          </p>
          <div className='flex justify-center mb-4'>
            <img
              alt='JEETER NFT 1/100'
              className='aspect-square object-cover rounded-lg'
              height={500}
              src={collectionImage}
              width={500}
            />
          </div>
          <div className='mb-4'>
            <Progress
              className='h-2 rounded-lg bg-gray-200 dark:bg-gray-700'
              value={70}
            />
            <div className='flex justify-between text-sm font-medium mt-2'>
              <span className='text-gray-600 dark:text-gray-300'>70% Sold</span>
              <span className='text-gray-600 dark:text-gray-300'>
                30% Available
              </span>
            </div>
          </div>
          <div className='flex justify-center'>
            <Button className='w-full sm:w-auto'>Purchase</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
