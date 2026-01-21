import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-light py-5 mt-5">
    <div className="container d-flex flex-wrap justify-content-between gap-3">
      <div className="flex-fill" style={{ minWidth: '200px' }}>
        <h5>VOLERA</h5>
        <p>Timeless pieces crafted with care.<br />Sustainable luxury for the modern wardrobe.</p>
      </div>
      <div className="flex-fill" style={{ minWidth: '200px' }}>
        <h5>Shop</h5>
        <a href="/" className="d-block text-light">All Products</a>
        <a href="/" className="d-block text-light">Outerwear</a>
        <a href="/" className="d-block text-light">Knitwear</a>
        <a href="/" className="d-block text-light">Accessories</a>
      </div>
      <div className="flex-fill" style={{ minWidth: '200px' }}>
        <h5>Help</h5>
        <a href="/" className="d-block text-light">Shipping & Returns</a>
        <a href="/" className="d-block text-light">Size Guide</a>
        <a href="/" className="d-block text-light">Contact Us</a>
        <a href="/" className="d-block text-light">FAQ</a>
      </div>
      <div className="flex-fill" style={{ minWidth: '200px' }}>
        <h5>Newsletter</h5>
        <div className="d-flex">
          <input type="email" className="form-control me-2" placeholder="Enter your email" />
          <button className="btn btn-light text-dark">Subscribe</button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
