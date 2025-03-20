import React from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [, setLocation] = useLocation();

  const navigation = [
    { name: 'Qui sommes-nous ?', href: '/about' },
    { name: 'Actu', href: '/news' },
    { name: 'Événements', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false); // Ferme le menu mobile
    setLocation(href); // Navigation vers la nouvelle page
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between border-b border-emerald-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <img 
                  src="/img/Logo-removebg-preview.png" 
                  alt="Grison Club Logo" 
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    console.error('Error loading logo');
                    e.currentTarget.src = 'https://via.placeholder.com/160x60?text=Grison+Club';
                  }}
                />
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className="text-base font-medium text-gray-700 hover:text-emerald-800"
                onClick={() => handleNavigation(link.href)}
              >
                {link.name}
              </Button>
            ))}
            <Button
              variant="default"
              className="ml-4 bg-emerald-800 hover:bg-emerald-700 text-white"
              onClick={() => handleNavigation('/login')}
            >
              Se connecter
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="w-full justify-start text-left text-gray-700 hover:text-emerald-800 hover:bg-gray-50"
                  onClick={() => handleNavigation(link.href)}
                >
                  {link.name}
                </Button>
              ))}
              <Button
                variant="default"
                className="w-full bg-emerald-800 hover:bg-emerald-700 text-white mt-2"
                onClick={() => handleNavigation('/login')}
              >
                Se connecter
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;