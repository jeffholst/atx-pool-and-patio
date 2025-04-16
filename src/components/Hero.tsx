
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: 'url("HeroImage03.jpg")',
          ...parallaxStyle
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-poolblue-dark/30"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-6 md:max-w-4xl">
          <div className="glass rounded-2xl p-8 md:p-10 backdrop-blur-sm bg-white/30 border border-white/30">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 animate-slide-down">
              Pools and Patios <span className="text-poolblue-light">Reimagined</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 animate-slide-down" style={{ animationDelay: '0.1s' }}>
              Professional pool cleaning and maintenance services for a pristine swimming experience. We take care of your pool, so you can enjoy it worry-free.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-down" style={{ animationDelay: '0.2s' }}>
              <a 
                href="#services" 
                className="bg-poolblue text-white font-medium py-3 px-6 rounded-lg hover:bg-poolblue-dark transition-all duration-300 ease-in-out text-center"
              >
                Our Services
              </a>
              <a 
                href="#free-quote" 
                className="bg-white text-poolblue font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out text-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="text-white animate-bounce"
          aria-label="Scroll down"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
