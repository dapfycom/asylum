import store from '@/redux/store';
import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <div className='bg-blue-200'>
        <main className='w-full '>{children}</main>
      </div>
    </Provider>
  );
};
