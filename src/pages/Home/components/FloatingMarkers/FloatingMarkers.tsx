import { RouteNamesEnum } from '@/localConstants';
import { Tweet } from 'react-twitter-widgets';
import GenerateMeme from '../GenerateMeme/GenerateMeme';
import SingleMarker from './SingleMarker';
const FloatingMarkers = () => {
  return (
    <div className='absolute'>
      <SingleMarker
        className={' sm:top-[70%] sm:left-[20%] top-[65%] left-[3%]'}
        label='DEX'
        description={
          'Lightweight DEX specifically designed for trading meme tokens. Tokens can be paired only with JEET. 100% Permission-less.'
        }
        path={RouteNamesEnum.swap}
      />

      <SingleMarker
        className={'sm:top-[50%] sm:left-[28%] top-[50%] left-[5%]'}
        label='Meme Generator'
        description={<GenerateMeme />}
        noBUtton={true}
        path={RouteNamesEnum.swap}
        noSoon={true}
      />
      <SingleMarker
        className={'top-[40%] left-[40%]'}
        label='Burn'
        description={
          'Effortlessly burn JEET tokens using Burnify, now featuring JEET for an enhanced token burning experience.'
        }
        path={RouteNamesEnum.burn}
      />
      <SingleMarker
        className={'sm:top-[45%] sm:left-[55%] top-[45%] left-[62%]'}
        label='Story'
        noSoon={true}
        description={
          <div className='flex flex-col gap-3'>
            <p>It’s literally just a meme bruv</p>
            <Tweet tweetId='1777032886782144838' />
          </div>
        }
        noBUtton={true}
      />
      <SingleMarker
        className={'sm:top-[45%] sm:left-[65%] top-[50%] left-[80%]'}
        label='NFTs'
        description={
          <ul>
            <li>100 cool pfp NFTs ready to JEET</li>
            <li>Buy with $JEET</li>
            <li>NFT holders get revenue share from DEX</li>
          </ul>
        }
        path={RouteNamesEnum.nfts}
        noSoon={true}
      />
      <SingleMarker
        className={'sm:top-[52%] sm:left-[85%] top-[65%] left-[80%]'}
        label='Dust'
        description={
          'Convert your small token balances into JEET seamlessly with our Dust-to-JEET feature.'
        }
        path={RouteNamesEnum.dust}
      />
    </div>
  );
};

export default FloatingMarkers;
