import React, { useRef, useState } from 'react';

const Services: React.FC = () => {

  const serviceItems = [
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Pool Cleaning',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Water Testing',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Equipment Repair',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Pool Opening',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Pool Closing',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Green Pool Recovery',
    },
  ];

  // --- NEW: Handle mouse movement over comparison
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState(50); // default to 50% split

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container) {
      const bounds = container.getBoundingClientRect();
      const x = ((e.clientX - bounds.left) / bounds.width) * 100;
      setSliderX(Math.max(0, Math.min(100, x)));
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container && e.touches.length > 0) {
      const bounds = container.getBoundingClientRect();
      const x = ((e.touches[0].clientX - bounds.left) / bounds.width) * 100;
      setSliderX(Math.max(0, Math.min(100, x)));
    }
  };

  return (
    <section
      id="services"
      className="section-padding bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/path/to/your/background/image.jpg)' }}
    >
      <div className="container mx-auto px-4 md:px-6 bg-white bg-opacity-75 rounded-lg shadow-lg p-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of pool maintenance services to keep your pool in pristine condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-poolblue-light p-2 mr-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Before & After Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Before &amp; After Pool Transformation</h3>

          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full max-w-2xl mx-auto aspect-video overflow-hidden rounded-lg shadow-lg cursor-ew-resize select-none"
          >
            {/* Before Image */}
            <img
              src="blue.jpg"
              alt="After"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* After Image with clip */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderX}%` }}
            >
              <img
                src="green.jpg"
                alt="Before"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0"
              style={{ left: `${sliderX}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-1 bg-poolblue h-full shadow-sm" />
              <div className="w-5 h-5 bg-white border border-gray-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
