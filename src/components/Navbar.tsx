
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <button
        type="button"
        className="md:hidden text-poolblue"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-poolblue hover:text-white transition-all duration-300 ease-in-out"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#free-quote"
          className="ml-2 px-4 py-2 text-sm font-medium text-white bg-poolblue rounded-md hover:bg-poolblue-dark transition-all duration-300 ease-in-out"
        >
          Free Quote
        </a>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="absolute top-10 right-0 w-48 mt-2 glass rounded-md shadow-lg md:hidden animate-fade-in">
          <div className="py-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-poolblue hover:text-white transition-all duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#free-quote"
              className="block px-4 py-2 mt-1 text-sm text-white bg-poolblue hover:bg-poolblue-dark transition-all duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
