import ProductCard from '../product-card/product-card.component';

import { ProductContainer } from './product.styles';

const Product = ({ products, title }) => {
  if (typeof products === 'undefined') return;
  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {title.toUpperCase()}
      </h2>
      <ProductContainer>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductContainer>
    </>
  );
};

export default Product;
