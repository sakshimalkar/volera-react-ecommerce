import React from 'react';
import outerwearImg from '../assets/out.jpeg';
import knitwearImg from '../assets/knit.jpeg';
import bottomsImg from '../assets/suit.jpeg';
import topsImg from '../assets/tops.jpeg';

const products = [
  { id: 1, category: 'Outerwear', title: 'Oversized Wool Coat', price: '$289', img: outerwearImg },
  { id: 2, category: 'Knitwear', title: 'Cashmere Turtleneck', price: '$195', img: knitwearImg },
  { id: 3, category: 'Bottoms', title: 'Wide Leg Trousers', price: '$145', img: bottomsImg },
  { id: 4, category: 'Tops', title: 'Silk Blend Blouse', price: '$165', img: topsImg },
];

const FeaturedProducts = ({ addToCart }) => (
  <section className="container my-5">
    <h2 className="text-center mb-4 display-6">Featured Pieces</h2>
    <div className="row g-4">
      {products.map((prod) => (
        <div className="col-md-3" key={prod.id}>
          <div className="card h-100">
            <div style={{ height: '250px', overflow: 'hidden' }}>
              <img
                src={prod.img}
                alt={prod.title}
                className="card-img-top"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body text-center">
              <h5>{prod.title}</h5>
              <p className="fw-bold">{prod.price}</p>
              <button
                className="btn btn-dark"
                onClick={() => addToCart(prod)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedProducts;
