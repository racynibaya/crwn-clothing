import DirectoryItem from '../directory-item/directory-item.component';

import './directory.component';

import { CategoriesListContainer } from './directory.styles';

const Directory = ({ categories }) => {
  return (
    <CategoriesListContainer>
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesListContainer>
  );
};

export default Directory;
