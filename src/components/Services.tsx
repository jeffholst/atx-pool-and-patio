import React, { useRef, useState } from 'react';

type CompareItem = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  caption?: string;
  initial?: number; // starting split %
};

const BeforeAfterCompare: React.FC<CompareItem> = ({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  caption,
  initial = 50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState<number>(initial);

  const clamp = (v: number) => Math.max(0, Math.min(100, v));

  const posToPct = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return sliderX;
    const rect = el.getBoundingClientRect();
    return clamp(((clientX - rect.left) / rect.width) * 100);
  };

  const onPointerMove = (clientX: number) => {
    setSliderX(posToPct(clientX));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.buttons & 1) !== 1) return; // only when primary mouse button down
    onPointerMove(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    onPointerMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) onPointerMove(e.touches[0].clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Left/Right arrow keys adjust by 2%, Shift+Arrow by 10%
    const step = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowLeft') setSliderX((v) => clamp(v - step));
    if (e.key === 'ArrowRight') setSliderX((v) => clamp(v + step));
  };

  return (
    <figure className="w-full max-w-2xl mx-auto">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-label="Before and after slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderX)}
        tabIndex={0}
        className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg cursor-ew-resize select-none"
      >
        {/* After image (full background) */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before image (clipped to sliderX %) */}
        <div
          className="absolute inset-0 h-full overflow-hidden pointer-events-none"
          style={{ width: `${sliderX}%` }}
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider line + handle */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: `${sliderX}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-1 bg-poolblue h-full shadow-sm" />
          <div className="w-5 h-5 bg-white border border-gray-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md" />
        </div>

        {/* Labels (optional, subtle) */}
        <div className="absolute left-3 top-3 text-xs px-2 py-1 rounded bg-black/40 text-white">
          {beforeAlt}
        </div>
        <div className="absolute right-3 top-3 text-xs px-2 py-1 rounded bg-black/40 text-white">
          {afterAlt}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

const Services: React.FC = () => {
  const serviceItems = [
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Pool Cleaning',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Water Testing',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Equipment Repair',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Pool Opening',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Pool Closing',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-poolblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Green Pool Recovery',
    },
  ];

  // Add as many transformations as you like:
  const transformations: CompareItem[] = [
    {
      beforeSrc: 'green.webp',
      afterSrc: 'blue.jpg',
      beforeAlt: 'Before',
      afterAlt: 'After',
      caption: '',
      initial: 60,
    },
    {
      beforeSrc: 'green2.jpg',
      afterSrc: 'blue2.jpg',
      beforeAlt: 'Before',
      afterAlt: 'After',
      caption: '',
      initial: 60,
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(HeroImage04.webp)' }}
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

        {/* Multiple Before & After Sections */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Before &amp; After Transformations</h3>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {transformations.map((t, i) => (
              <BeforeAfterCompare key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
