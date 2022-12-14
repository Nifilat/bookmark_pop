import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Button, PageSEO } from '../components';

const homeSEOConfig = {
  title: 'Bookmark Pop | All Your Twitter bookmarks in one place',
  description:
    'All in one tweet bookmark manager that allows you bookmark tweets, organize them and access them in one place.',
};

const Home: NextPage = () => {
  return (
    <Fragment>
      <PageSEO
        description={homeSEOConfig.description}
        title={homeSEOConfig.title}
      />
      <div>
        <h2>A stress-free way of organizing and accessing bookmarked Tweets</h2>
        <p>
          All in one tweet bookmark manager that allows you bookmark tweets,
          organize them and access them in one place.
        </p>
        <div>
          <Button title="Get Started" size="sm" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
