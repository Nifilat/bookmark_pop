import { Button } from '../../components';
import ChevronRight from '../icons/chevronRight';
import VidIcon from '../icons/video';

const Hero = () => {
  return (
    <div className="mt-8 py-8">
      <h2 className="text-4xl phone:text-2xl font-bold max-w-2xl text-[#131330] mb-4">
        A stress-free way of organizing and accessing bookmarked Tweets
      </h2>
      <p className="text-2xl phone:text-lg max-w-xl text-[#131330] opacity-60 mb-4">
        All in one tweet bookmark manager that allows you bookmark tweets,
        organize them and access them in one place.
      </p>
      <div className="flex items-center gap-x-4">
        <Button
          title="Get Started"
          size="sm"
          icon={ChevronRight}
          iconPosition="right"
        />

        <Button
          title="How it Works"
          icon={VidIcon}
          iconPosition="left"
          type="button"
          variant="plain"
        />
      </div>
    </div>
  );
};

export default Hero;
