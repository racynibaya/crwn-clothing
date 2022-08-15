import { Outlet, Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';
const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          <Link className='nav-link' to='/shop'>
            CONTACT
          </Link>

          <Link className='nav-link' to='/shop'>
            SIGN IN
          </Link>

          <Link className='nav-link' to='/shop'>
            <HiOutlineShoppingBag className='shopping-bag-logo' />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
