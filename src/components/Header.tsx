
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'py-2 glass shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-poolblue font-bold text-2xl tracking-tight flex items-center">
              <span className="text-3xl mr-1">💧</span> ATX Pool and Patio
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
