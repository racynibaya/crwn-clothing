import CategoryItem from '../category-item/category-item.component';

import './categories-list.component';

import './categories-list.styles.scss';

const CategoriesList = ({ categories }) => {
  console.log(categories);
  return (
    <div className='categories-list-container'>
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
