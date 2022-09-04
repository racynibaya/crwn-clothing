import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.jsx';

import {
  ProductCardContainer,
  Image,
  ProductCardButton,
  ProductCardFooter,
  Name,
  Price,
} from './product-card.styles.jsx';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />

      <ProductCardFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </ProductCardFooter>

      <ProductCardButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </ProductCardButton>
    </ProductCardContainer>
  );
};
export default ProductCard;
