import React from 'react';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import Philosophy from './Philosophy';
import Collections from './Collections';

const Home = ({ addToCart }) => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts addToCart={addToCart} />
      <Philosophy />
      <Collections />
    </>
  );
};

export default Home;
