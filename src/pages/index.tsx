import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Button, Input, PageSEO } from '../components';
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
      <div className="flex items-center justify-center flex-col mt-4 py-8">
        <h3 className="font-bold text-3xl phone:text-xl text-[#131330] mb-4">
          Launching soon!
        </h3>

        <p>Subscribe to get notified when we launch</p>

        <div className="flex items-center justify-between border-2 border-[#338df74d] border-solid rounded-t-[8px] rounded-b-[8px] w-[580px] h-[50px] phone:w-[300px] pl-2 mt-4">
          <input
            type="email"
            placeholder="Your email"
            className="focus:outline-none focus:border-none focus-within:outline-none focus-within:border-none"
          />
          <button className="bg-primary phone:text-base text-white h-[100%] w-[40%] rounded-r-[8px]">
            Join the waiting list
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
