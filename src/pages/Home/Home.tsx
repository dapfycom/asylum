import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';

import fuckerImg from '@/assets/images/fucker.png';
import { Sky, Village } from '@/models';
import { Loader } from '../../components';
import FloatingMarkers from './components/FloatingMarkers/FloatingMarkers';
import JeeterCallingContainer from './components/JeeterCalling/JeeterCallingContainer';
export const Home = () => {
  console.log('render home');

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -42.4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [skyRotation, setSkyRotation] = useState();
  return (
    <section className='w-full h-screen relative'>
      <FloatingMarkers />
      <img
        src={fuckerImg}
        alt='Asylum Jeeter fucker'
        className='w-64 h-4w-64 object-contain absolute z-20 top-[60%] left-[20%] sm:left-[42%]'
      />
      <JeeterCallingContainer />
      <Canvas
        className={`w-full h-screen bg-transparent z-0 `}
        camera={{ near: 0.1, far: 1000, fov: 100, position: [0, 0, 10] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight groundColor='#000000' intensity={1} />

          <Sky />
          <Village
            // @ts-ignore
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};
