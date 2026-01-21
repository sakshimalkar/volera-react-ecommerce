import React from 'react';
import philosophyImg from '../assets/phil.jpeg';

const Philosophy = () => (
  <section className="container my-5 d-flex flex-wrap align-items-center gap-4">
    <div className="flex-fill">
      <h2 className="fw-bold mb-3">Less, but Better</h2>
      <p>We believe in creating pieces that transcend seasons and trends. Each garment is thoughtfully designed with attention to detail, using only the finest sustainable materials.</p>
      <p>Our commitment to quality means fewer, better things—pieces you'll reach for again and again, building a wardrobe that lasts.</p>
      <button className="btn btn-dark mt-2">Discover More</button>
    </div>
    <img src={philosophyImg} className="img-fluid rounded" alt="Our Philosophy" style={{ maxWidth: '500px' }} />
  </section>
);

export default Philosophy;
