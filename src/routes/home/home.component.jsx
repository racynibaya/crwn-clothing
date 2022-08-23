import Directory from '../../components/directory/directory.component';
import categories from '../../components/categories-data/categories';

const Home = () => {
  return (
    <div>
      <Directory categories={categories} />)
    </div>
  );
};

export default Home;
