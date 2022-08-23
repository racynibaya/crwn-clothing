import { useContext } from 'react';

import { CartItemsContext } from '../../contexts/cart-items.context';

import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  const { items } = useContext(CartItemsContext);

  if (!items) return;

  return (
    <div className='cart-dropdown-container'>
      {items.map(item => {
        const { id, imageUrl, name, price } = item;
        return (
          <div className='cart-items' key={id}>
            <img src={imageUrl} alt={name} />
            <span>{name}</span>
            <span>{price}</span>
          </div>
        );
      })}

      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
