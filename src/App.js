import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Reviews from './components/Reviews';
import Listings from './components/Listings';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Slider />
      <Reviews />
      <Listings />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;