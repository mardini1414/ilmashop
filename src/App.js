import React, { useEffect } from 'react';
import About from './components/About';
import Category from './components/Category';
import Discount from './components/Discount';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import './App.scss';
import 'bootstrap';
import '@popperjs/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Discount />
      <Category />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
