import { logo } from '@/assets/images';
import { MxLink } from '@/components/MxLink';
import { socialLinks } from '@/localConstants';

export const Header = () => {
  return (
    <header className='flex items-center justify-end container absolute top-10 left-0 right-0 z-10'>
      <div className='absolute w-full top-0 left-0 flex justify-center'>
        <MxLink to='/' className='relative z-30'>
          <img
            src={logo}
            alt='logo'
            className='w-28 h-1w-28 object-contain rounded-full'
          />
        </MxLink>
      </div>
      <div className='absolute z-10 bottom-[-230px] md:bottom-[-100px] left-0 right-0 container flex justify-around items-center w-full text-2xl md:text-4xl text-center  flex-col xs:flex-row text-yellow-500'>
        <a
          href='https://xexchange.com/swap'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          Buy $JEET
        </a>
        <a
          href='https://dexscreener.com/multiversx/erd1qqqqqqqqqqqqqpgqyx43t88dek9yr4889ykzx0wuz3kfwd4a2jps9xnxhm'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline'
        >
          $JEET Chart
        </a>
      </div>
      <div className='absolute bottom-[-100px] left-0 right-0 container flex justify-between items-center w-full '>
        {socialLinks.map((s) => (
          <a
            href={s.link}
            target='_blank'
            className='text-xl relative z-20'
            key={s.name}
          >
            {s.icon({ height: '60', width: '60' })}
          </a>
        ))}
      </div>
    </header>
  );
};
