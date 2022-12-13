import Link from 'next/link';
import { useState } from 'react';
import Button from '../Button/Button';
import Logo from '../icons/logo';

const navigation = [
  { name: 'About Us', href: '#', current: false },
  { name: 'Features', href: '#', current: false },
  { name: 'Privacy Policy', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
];

const Header = () => {
  const [navigationItems, setNavigationItems] = useState(navigation);
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <nav className="flex items-center gap-x-8">
        {navigation.map(({ name, href, current }, i) => (
          <Link key={i} href={href} className="text-lg">
            {name}
          </Link>
        ))}
      </nav>
      <Button title="Get Started" variant="primary" size="sm" />
    </div>
  );
};

export default Header;
