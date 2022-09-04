import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.jsx';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import {
  CheckoutNavigation,
  OrdersContainer,
  Orders,
  H2Container,
  Total,
} from './checkout.styles.jsx';

const Checkout = () => {
  const { prices, cartItems } = useContext(CartContext);

  // const navigate = useNavigate();

  // const goToHomeHandler = () => {
  //   navigate('/');
  // };

  const calculateTheTotalHandler = () => {
    return prices
      .map(price => price.price * price.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <>
      <OrdersContainer>
        <CheckoutNavigation>
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </CheckoutNavigation>

        <Orders>
          {cartItems.length <= 0 ? (
            <H2Container>
              cart empty <br />
              <MdOutlineRemoveShoppingCart />
            </H2Container>
          ) : (
            cartItems.map(cartItem => {
              return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
            })
          )}
        </Orders>
        <Total>
          <p>
            TOTAL: <span>${calculateTheTotalHandler()}</span>
          </p>
        </Total>
      </OrdersContainer>
    </>
  );
};

export default Checkout;
