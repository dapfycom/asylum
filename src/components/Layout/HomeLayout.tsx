import type { PropsWithChildren } from 'react';
import { Header } from './Header';

export const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div className='w-full'>{children}</div>
    </div>
  );
};
