import React from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Qui sommes-nous ?', href: '/about' },
    { name: 'Événements', href: '/events' },
    { name: 'Ressources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-emerald-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-emerald-800">
                Grison Club
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-base font-medium text-gray-700 hover:text-emerald-800">
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/login">
              <a className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-800 hover:bg-emerald-700">
                Se connecter
              </a>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-800 hover:bg-gray-50">
                    {link.name}
                  </a>
                </Link>
              ))}
              <Link href="/login">
                <a className="block w-full px-4 py-2 text-center font-medium text-white bg-emerald-800 hover:bg-emerald-700 rounded-md">
                  Se connecter
                </a>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;