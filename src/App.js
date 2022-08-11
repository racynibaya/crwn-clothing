import CategoriesList from './components/categories-list/categories-list.component';
import categories from './components/categories-data/categories';

console.log(categories);

const App = () => {
  return <CategoriesList categories={categories} />;
};

export default App;
