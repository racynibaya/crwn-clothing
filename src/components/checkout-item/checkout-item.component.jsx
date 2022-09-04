import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  IoIosArrowBack,
  IoIosArrowForward /*IoMdClose*/,
} from 'react-icons/io';
import './checkout-item.styles.jsx';
import {
  OrderName,
  OrdersDetails,
  Product,
  Remove,
} from './checkout-item.styles.jsx';

const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, removeItemToCart, removeOrderToOrders } =
    useContext(CartContext);

  // Function handler: Events
  const addItemToCartHandler = () => addItemToCart(cartItem);

  const removeItemToCartHandler = () => removeItemToCart(cartItem);

  const removeOrderToOrdersHandler = () => removeOrderToOrders(cartItem);

  return (
    <div>
      <OrdersDetails>
        <Product src={imageUrl} />
        <OrderName>{name}</OrderName>

        <div className='quantity'>
          <IoIosArrowBack
            style={{ cursor: 'pointer' }}
            className='arr-decrement'
            onClick={removeItemToCartHandler}
          />
          <span className='count'>{quantity}</span>
          <IoIosArrowForward
            style={{ cursor: 'pointer' }}
            className='arr-increment'
            onClick={addItemToCartHandler}
          />
        </div>

        <span className='price'>${price * quantity}</span>
        <Remove onClick={removeOrderToOrdersHandler} />
      </OrdersDetails>
    </div>
  );
};

export default CheckOutItem;
