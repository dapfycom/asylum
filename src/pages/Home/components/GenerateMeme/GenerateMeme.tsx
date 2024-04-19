import meme1 from '@/assets/images/memes/meme1.png';
import meme10 from '@/assets/images/memes/meme10.jpg';
import meme2 from '@/assets/images/memes/meme2.png';
import meme3 from '@/assets/images/memes/meme3.png';
import meme4 from '@/assets/images/memes/meme4.png';
import meme5 from '@/assets/images/memes/meme5.png';
import meme6 from '@/assets/images/memes/meme6.png';
import meme7 from '@/assets/images/memes/meme7.png';
import meme8 from '@/assets/images/memes/meme8.png';
import meme9 from '@/assets/images/memes/meme9.png';

import meme12 from '@/assets/images/memes/meme11.jpg';

import meme13 from '@/assets/images/memes/meme12.jpg';

import meme14 from '@/assets/images/memes/meme13.jpg';
import meme15 from '@/assets/images/memes/meme14.jpg';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
const generateRandomMeme = () => {
  const allMemes = [
    meme1,
    meme2,
    meme3,
    meme4,
    meme5,

    meme6,
    meme7,
    meme8,
    meme9,

    meme10,
    meme12,
    meme13,
    meme14,
    meme15
  ];

  const selectedMeme = allMemes[Math.floor(Math.random() * allMemes.length)];

  return selectedMeme;
};

const toDataURL = (url: string) => {
  return fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
};
const GenerateMeme = () => {
  const [meme, setMeme] = useState<string>();

  const handleMakeMeme = () => {
    const memeGenerated = generateRandomMeme();
    setMeme(memeGenerated);
  };
  const downloadMeme = async () => {
    if (!meme) return;
    const a = document.createElement('a');
    a.href = await toDataURL(meme);
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div>
      <hr className='border-gray-400 mb-6' />
      <Button onClick={handleMakeMeme}>Make meme</Button>

      {meme && (
        <div>
          <img src={meme} alt='Jeet meme' className='w-full h-auto mt-3' />

          <Button variant='outline' onClick={downloadMeme}>
            Download
          </Button>
        </div>
      )}
    </div>
  );
};

export default GenerateMeme;
