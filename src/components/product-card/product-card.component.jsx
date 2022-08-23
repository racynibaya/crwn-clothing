import { useContext } from 'react';

import { CartItemsContext } from '../../contexts/cart-items.context';

import './product-card.styles.scss';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { items, setItems } = useContext(CartItemsContext);

  const addToCartHandler = () => {
    const itemsArr = [...items];
    itemsArr.push(product);
    setItems(itemsArr);
  };

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />

      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>

      <Button buttonType='inverted' onClick={addToCartHandler}>
        Add to Cart
      </Button>
    </div>
  );
};
export default ProductCard;
