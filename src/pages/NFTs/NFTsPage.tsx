import collectionImage from '@/assets/images/jeeter-collection.jpg';
import MintButton from './components/MintButton/MintButton';
import ProgressMint from './components/Progress/ProgressMint';
import Title from './components/Title/Title';

export const NFTsPage = () => {
  return (
    <div>
      <div
        key='1'
        className='flex flex-col items-center justify-center min-h-screen '
      >
        <div className='max-w-2xl w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
          <Title />
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

          <ProgressMint />
          <MintButton />
        </div>
      </div>
    </div>
  );
};
