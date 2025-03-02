
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import FreeQuote from '../components/FreeQuote';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <FreeQuote />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
