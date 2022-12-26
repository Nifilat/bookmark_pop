import Link from 'next/link';
import { Button } from '../index';
import Logo from '../icons/logo';
import { Dispatch, SetStateAction, useState } from 'react';

const navigation = [
  { name: 'About Us', href: '/about', current: false },
  { name: 'Features', href: '#', current: false },
  { name: 'Privacy Policy', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
];

interface IHamburger {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
  setIsMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = ({
  isMenuOpen,
  onToggleMenu,
  setIsMenuIsOpen,
}: IHamburger) => {
  return (
    <>
      {isMenuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => setIsMenuIsOpen(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => onToggleMenu()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between">
      <Logo />
      <nav className="items-center gap-x-8 hidden">
        {navigation.map(({ name, href, current }, i) => (
          <Link key={i} href={href} className="text-lg">
            {name}
          </Link>
        ))}
      </nav>
      <div>
        <Button title="Get Started" variant="primary" size="sm" />
      </div>

      {/* === MOBILE MENU START ==== */}
      <div className="hidden">
        {isMenuOpen && (
          <div className="absolute right-0 mt-8 p-8 bg-white rounded-lg shadow-xl flex flex-col gap-y-4">
            <div className=" flex items-center justify-center flex-col gap-y-4">
              {navigation.map(({ name, href, current }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                >
                  <span onClick={() => closeMenu()}>{name}</span>
                </Link>
              ))}
            </div>
            <Button
              title="Get Started"
              variant="primary"
              size="sm"
              onClick={() => closeMenu()}
            />
          </div>
        )}
        <Hamburger
          onToggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          setIsMenuIsOpen={setIsMenuOpen}
        />
      </div>
      {/* === MOBILE MENU END ==== */}
    </div>
  );
};

export default Header;
