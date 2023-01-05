import Link from 'next/link';
import { useState } from 'react';
import { Button, PopLogo } from '../..';
import Hamburger from '../../icons/Hamburger';

const navItems = [
  {
    href: 'about',
    name: 'About Us',
  },
  {
    href: 'features',
    name: 'Features',
  },
  {
    href: 'contact',
    name: 'Contact Us',
  },
  {
    href: 'policy',
    name: 'Privacy Policy',
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav>
      <Hamburger
        onToggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        setIsMenuIsOpen={setIsMenuOpen}
      />
      {isMenuOpen && (
        <div className="bg-white z-50 absolute right-0 shadow-2xl p-4 max-w-[200px] flex items-start flex-col gap-y-4">
          <div
            className="flex items-start flex-col"
            onClick={() => closeMenu()}
          >
            {navItems.map((nav) => (
              <Link
                key={nav.href}
                href={`/${nav.href}`}
                className="my-4 first:my-0"
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <Button title="Get Started" />
        </div>
      )}
    </nav>
  );
}
