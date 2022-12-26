const About = () => {
  return (
    <div>
      <div className="text-center flex items-center justify-center phone:items-start phone:text-left flex-col gap-y-4 py-4">
        <h3 className="font-bold text-3xl phone:text-xl text-[#131330]">
          About Bookmark Pop
        </h3>
        <p className="max-w-6xl text-xl phone:text-base text-[#131330] opacity-60">
          There is a need every user has - The ability to go back to something
          for reference purposes. And of course with utmost ease. Bookmark Pop
          seeks to bridge that gap for regular Twitter users. We provide the
          tools, features and relatable interface to allow users bookmark
          tweets, organize them and access them in one place.
        </p>
      </div>
    </div>
  );
};

export default About;
