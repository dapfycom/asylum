import { soundoff, soundon } from '@/assets/icons';
import sakura from '@/assets/sakura.mp3';
import { useEffect, useRef, useState } from 'react';
import JeeterCalling from './JeeterCalling';
const JeeterCallingContainer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <div>
      {' '}
      <div className='absolute bottom-2 left-2 z-10'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
      <JeeterCalling
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAccept={() => {
          setIsPlayingMusic(true);
          setIsOpen(false);
        }}
        onDecline={() => setIsOpen(false)}
      />
    </div>
  );
};

export default JeeterCallingContainer;
