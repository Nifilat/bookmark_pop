import type { NextPage } from 'next';
import { Fragment } from 'react';
import { PageSEO } from '../components';
import {
  Hero,
  Features,
  AboutBookmarkPop,
} from '../components/HomePageComponents';

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
      <Hero />
      <div className="text-center flex items-center justify-center phone:items-start phone:text-left flex-col gap-y-4 py-4">
        <h3 className="font-bold text-3xl phone:text-xl text-[#131330]">
          Do more with Bookmark Pop
        </h3>
        <p className="max-w-6xl text-xl phone:text-base text-[#131330] opacity-60">
          Your bookmarked tweets can be overwhelming, so many tweets to go back
          to without a control over them. Bookmark Pop has a lot of features
          that helps ease tweets bookmarking so that you never miss anything.
        </p>
      </div>
      <Features />
      <AboutBookmarkPop />
    </Fragment>
  );
};

export default Home;
