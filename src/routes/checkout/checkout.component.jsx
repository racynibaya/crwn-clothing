import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from 'react-icons/io';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const {
    prices,
    cartItems,
    addItemToCart,
    removeItemToCart,
    removeOrderToOrders,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const goToHomeHandler = () => {
    navigate('/');
  };

  const calculateTheTotalHandler = () => {
    return prices
      .map(price => price.price * price.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <>
      <CrwnLogo onClick={goToHomeHandler} style={{ cursor: 'pointer' }} />
      <div className='orders-container'>
        <nav className='checkout-navigation'>
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </nav>

        <div className='orders'>
          {cartItems.length <= 0 ? (
            <h1>Cart is empty</h1>
          ) : (
            cartItems.map(cartItem => {
              const { imageUrl, name, id, quantity, price } = cartItem;
              return (
                <div key={id}>
                  <div className='orders-details'>
                    <img src={imageUrl} alt={`${name}`} className='product' />
                    <span className='order-name'>{name}</span>

                    <div className='quantity'>
                      <IoIosArrowBack
                        style={{ cursor: 'pointer' }}
                        className='arr-decrement'
                        onClick={() => removeItemToCart(cartItem)}
                      />
                      <span className='count'>{quantity}</span>
                      <IoIosArrowForward
                        style={{ cursor: 'pointer' }}
                        className='arr-increment'
                        onClick={() => addItemToCart(cartItem)}
                      />
                    </div>

                    <span className='price'>${price * quantity}</span>
                    <IoMdClose
                      style={{ cursor: 'pointer' }}
                      className='remove'
                      onClick={() => removeOrderToOrders(cartItem)}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className='total'>
          <p>
            TOTAL: <span>${calculateTheTotalHandler()}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Checkout;
