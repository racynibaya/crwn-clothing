import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';
const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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

          {currentUser ? (
            <Link className='nav-link' to={'/auth'} onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}

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
