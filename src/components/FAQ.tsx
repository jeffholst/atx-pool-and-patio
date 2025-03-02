
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: 'How often should I have my pool professionally cleaned?',
      answer: 'For most residential pools, we recommend professional cleaning every 1-2 weeks, depending on usage, environment, and weather conditions. Regular maintenance helps prevent algae growth and keeps your pool water balanced and safe.'
    },
    {
      question: 'What services are included in your regular pool maintenance?',
      answer: 'Our standard maintenance includes water testing and chemical balancing, skimming the surface, vacuuming the pool floor, cleaning the walls, brushing tiles, emptying skimmer and pump baskets, checking equipment functionality, and inspecting for any potential issues.'
    },
    {
      question: 'Do I need to be home when you service my pool?',
      answer: 'No, you don't need to be present for routine maintenance. As long as we have access to your pool area, we can perform our services while you're away. We'll leave a report detailing what was done and any recommendations.'
    },
    {
      question: 'How long does a typical pool cleaning service take?',
      answer: 'A standard service visit typically takes 45-60 minutes, depending on the pool size and condition. Larger pools or those requiring extra attention may take longer.'
    },
    {
      question: 'What chemicals do you use, and are they safe?',
      answer: 'We use professional-grade, EPA-approved chemicals that are safe when properly applied. Our technicians are trained in proper chemical handling and application. We also offer eco-friendly options upon request.'
    },
    {
      question: 'Do you offer one-time cleaning services or only recurring services?',
      answer: 'We offer both one-time services and regular maintenance plans. Whether you need a single cleaning before a special event or ongoing maintenance, we can accommodate your needs.'
    }
  ];

  return (
    <section id="faqs" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our pool cleaning and maintenance services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out"
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-lg">{item.question}</span>
                  <svg 
                    className={`w-5 h-5 text-poolblue transition-transform duration-300 ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 pt-0 border-t">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <a
              href="#contact"
              className="inline-flex items-center text-poolblue hover:text-poolblue-dark font-medium"
            >
              <span>Contact our support team</span>
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
