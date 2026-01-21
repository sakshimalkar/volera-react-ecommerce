import React from 'react';
import heroImg from '../assets/banner.jpeg';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        height: '70vh',
        background: `url(${heroImg}) center/cover no-repeat`,
      }}
    >
      <h1 className="display-4 fw-bold">Timeless Elegance</h1>
      <p className="fs-5">Discover our curated collection of refined essentials, crafted for the modern wardrobe.</p>
      <button
        className="btn btn-light text-dark mt-3"
        onClick={() => navigate('/shop')}
      >
        Shop Collection
      </button>
    </section>
  );
};

export default HeroSection;
