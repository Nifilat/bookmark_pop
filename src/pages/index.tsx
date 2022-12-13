import type { NextPage } from 'next';
import { Header, Footer } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <div className="max-w-[90%] mx-auto">
        <Header />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
