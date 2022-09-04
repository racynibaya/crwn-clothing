import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer } from './category.styles.jsx';
import ProductCard from '../../components/product-card/product-card.component';
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2
        className='category-title'
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: '38px',
          marginBottom: '25px',
        }}
      >
        {category}
      </h2>
      <CategoryContainer>
        {products &&
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
