import { Outlet } from 'react-router-dom';
import './navigation.styles.scss';
const Navigation = () => {
  return (
    <div>
      <div className='main-navigation'>
        <div className='links'>
          <a href='home' className='home'>
            Home
          </a>
          <a href='about' className='about'>
            About
          </a>
          <a href='contact' className='contact'>
            Contact
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Navigation;
