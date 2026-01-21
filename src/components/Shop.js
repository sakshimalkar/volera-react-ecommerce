import React from 'react';
import FeaturedProducts from './FeaturedProducts';

const Shop = ({ addToCart }) => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 display-5">Shop All Products</h2>
      <FeaturedProducts addToCart={addToCart} />
    </section>
  );
};

export default Shop;
