import { logo } from '@/assets/images';
import { routes } from '@/routes';
import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import { MxLink } from '../MxLink';
import { Footer } from './Footer';

const PagesLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
      <div className='absolute top-0 left-0 w-full'>
        <div className='flex items-center justify-between w-full p-6 shadow-md'>
          <div>
            <NavLink to='/'>
              <img
                src={logo}
                alt='logo'
                className='w-16 h-1w-16 object-contain rounded-full'
              />
            </NavLink>
          </div>
          <div>
            {routes.map((route) => (
              <MxLink
                key={`route-key-'${route.path}`}
                to={route.path}
                className='mr-4'
              >
                {route.title}
              </MxLink>
            ))}
          </div>
          <Login />
        </div>
      </div>
      <div className='container '>
        <div className=' '>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default PagesLayout;
