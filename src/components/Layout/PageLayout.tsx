import { Footer, Header } from '../index';

interface LayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="max-w-[90%] mx-auto mb-4">
        <Header />
      </div>
      <main className="max-w-[90%] mx-auto">{children}</main>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
