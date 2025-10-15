import React from 'react';

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

  return (
    <section id="services" className="section-padding bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/your/background/image.jpg)' }}>
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

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Before &amp; After Pool Transformation</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-md mb-2 text-gray-700">Before</span>
              <img
                src="before.webp"
                alt="Pool before cleaning"
                className="w-64 h-960 object-cover rounded-lg shadow"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-md mb-2 text-gray-700">After</span>
              <img
                src="after.webp
                "
                alt="Pool after cleaning"
                className="w-64 h-960 object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
