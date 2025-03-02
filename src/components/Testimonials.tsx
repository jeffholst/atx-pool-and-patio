
import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      text: 'ATX Pool and Patio has transformed our backyard pool experience. Their attention to detail and professional service is second to none. Our pool has never looked better!',
      avatar: 'avatar1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Property Manager',
      text: 'Managing multiple properties with pools used to be a headache until we found ATX Pool and Patio. Their flexible scheduling and reliable service have made my job much easier.',
      avatar: 'avatar3.jpg'
    },
    {
      name: 'Emily Davis',
      role: 'Homeowner',
      text: "We've tried several pool services in the past, but none compare to the quality and value that ATX Pool and Patio provides. They're our go-to pool professionals now.",
      avatar: 'avatar2.jpg'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-poolblue-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="mb-6">
                      <svg className="w-12 h-12 mx-auto text-poolblue opacity-25" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8v6a6 6 0 01-6 6H8a6 6 0 016 6v-6a6 6 0 01-6-6h4zm12 0v6a6 6 0 01-6 6h4a6 6 0 016 6v-6a6 6 0 01-6-6h4z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
                    <div className="flex items-center justify-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full border-4 border-poolblue-light"
                      />
                      <div className="ml-4 text-left">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-poolblue scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
