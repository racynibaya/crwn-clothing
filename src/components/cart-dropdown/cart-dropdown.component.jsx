import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles.jsx';

import Button from '../button/button.component';

import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate('/checkout');
  };

  //   if (!items) return;

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <>
            <EmptyMessage>
              Empty Cart
              <br />
              <MdOutlineRemoveShoppingCart />
            </EmptyMessage>
          </>
        )}
      </CartItems>

      <Button onClick={goToCheckOutHandler}>Go to CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
