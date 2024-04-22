import { socialLinks } from '@/localConstants';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='text-center pb-6 '>
      <div className='footer-container'>
        <p>
          © {new Date().getFullYear()} <strong>Dapfy team</strong>. All rights
          reserved.
        </p>

        <div className='flex gap-3 justify-center items-center mt-4'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              {link.icon({
                height: '20',
                width: '20'
              })}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
