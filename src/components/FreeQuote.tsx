
import React, { useState } from 'react';

const FreeQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    poolSize: 'small',
    service: 'cleaning',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          poolSize: 'small',
          service: 'cleaning',
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="free-quote" className="section-padding relative">
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-15"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to receive a personalized quote for your pool maintenance needs.
              </p>
            </div>
            
            {formSubmitted ? (
              <div className="text-center py-8 animate-fade-in">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">We've received your request and are preparing your personalized quote.</p>
                <p className="text-gray-600">Our representative will contact you within 24 hours with your free, no-obligation quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-poolblue focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-poolblue focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-poolblue focus:border-transparent"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="poolSize" className="block text-gray-700 font-medium mb-2">Pool Size</label>
                    <select
                      id="poolSize"
                      name="poolSize"
                      value={formData.poolSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-poolblue focus:border-transparent"
                      required
                    >
                      <option value="small">Small (up to 10,000 gallons)</option>
                      <option value="medium">Medium (10,000 - 20,000 gallons)</option>
                      <option value="large">Large (20,000+ gallons)</option>
                      <option value="unknown">I don't know</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-poolblue focus:border-transparent"
                      required
                    >
                      <option value="cleaning">Regular Cleaning</option>
                      <option value="repair">Repairs</option>
                      <option value="maintenance">One-time Maintenance</option>
                      <option value="opening">Pool Opening</option>
                      <option value="closing">Pool Closing</option>
                      <option value="inspection">Inspection</option>
                    </select>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-poolblue text-white font-medium py-3 px-6 rounded-md hover:bg-poolblue-dark transition-all duration-300 ease-in-out text-lg
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeQuote;
