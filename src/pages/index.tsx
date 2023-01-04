import {
  Button,
  DownloadCard,
  Footer,
  NotificationCard,
  OrganizeCard,
  PageWrapper,
  PersonCard,
} from '../components';
import BalanceText from 'react-wrap-balancer';
import Image from 'next/image';
import VidIcon from '../components/icons/video';

const Home = () => {
  return (
    <PageWrapper>
      <section className="hero py-4 flex items-center justify-between">
        <div className="max-w-lg">
          <h2 className="font-bold sm:text-3xl text-2xl sm:text-left text-center">
            <BalanceText ratio={0.5}>
              {' '}
              A stress-free way of organizing and accessing{' '}
              <span className="text-primary">bookmarked</span> Tweets
            </BalanceText>
          </h2>
          <p className="pt-4 text-center sm:text-left">
            <BalanceText ratio={0.5}>
              All in one tweet bookmark manager that allows you to bookmark
              tweets, organize and access them in one place.
            </BalanceText>
          </p>

          <button className="heroBtn sm:mx-0 mx-auto flex items-center gap-x-4 mt-4 text-white px-[24px] py-[16px] bg-primary rounded-lg">
            <VidIcon />
            <button>How it works</button>
          </button>
        </div>

        <div className="heroImg sm:block hidden">
          <Image
            src={'/heroImg.svg'}
            alt="book icon representing bookmark pop"
            width={611}
            height={400}
          />
        </div>
      </section>

      <section className="py-4">
        <div className="text-center sm:max-w-2xl sm:mx-auto mb-4">
          <h2 className="font-bold sm:text-2xl text-lg text-primary mb-4">
            Do more than just bookmark tweets
          </h2>
          <p>
            <BalanceText ratio={0.5}>
              {
                "You bookmarked tweets can be overwhelming to manage with so many tweets to navigate without any control.Bookmark Pop eases this process and makes sure you don't miss anything"
              }
            </BalanceText>
          </p>
        </div>

        <div className="flex items-center sm:flex-row flex-col sm:gap-x-8 gap-y-8">
          <div className="bg-featuresBg flex items-center flex-col justify-center text-center py-2 flex-1  h-[567px]">
            <h3 className="font-bold text-lg">Personalized Dashboard</h3>
            <p className="my-2">
              <BalanceText>
                {' '}
                Access bookmarks seamlessly on a personalized dashboard that
                allows you to manage tweets according to preferences giving you
                absolute control of your tweets
              </BalanceText>
            </p>
            <PersonCard />
          </div>
          <div className="bg-featuresBg flex items-center flex-col justify-center text-center py-2 flex-1  h-[567px]">
            <h3 className="font-bold text-lg">Organize with Ease</h3>
            <p className="my-2">
              <BalanceText>
                {' '}
                Search, sort and create collections in organized and acccessible
                formats using tags. Add up to seven tags and arrange them
                however you see fit.
              </BalanceText>
            </p>
            <OrganizeCard />
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col sm:gap-x-8 gap-y-8 mt-8">
          <div className="bg-featuresBg flex items-center flex-col justify-center text-center py-2 flex-1  h-[567px]">
            <h3 className="font-bold text-lg">Notifications</h3>
            <p className="my-2">
              <BalanceText>
                {' '}
                Get notified of important Tweets by adding them to Google
                calendar. Bookmark Pop ensures you do not miss any important
                tweets
              </BalanceText>
            </p>
            <NotificationCard />
          </div>
          <div className="bg-featuresBg flex items-center flex-col justify-center text-center py-2 flex-1  h-[567px]">
            <h3 className="font-bold text-lg">Download Bookmarked Tweets</h3>
            <p className="my-2">
              <BalanceText>
                {' '}
                Download bookmarked tweets in various formats and access on the
                go
              </BalanceText>
            </p>
            <DownloadCard />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
