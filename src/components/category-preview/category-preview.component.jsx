import { useNavigate } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`${title}`);
  };

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title>{title}</Title>
      </h2>

      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
