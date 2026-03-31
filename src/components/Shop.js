import React from 'react';

import outerwearImg from '../assets/out.jpeg';
import knitwearImg from '../assets/knit.jpeg';
import bottomsImg from '../assets/suit.jpeg';
import topsImg from '../assets/tops.jpeg';

import trenchCoatImg from '../assets/Classic Trench Coat.jpeg';
import woolSweaterImg from '../assets/Soft Wool Sweater.jpeg';
import slimPantsImg from '../assets/Formal Slim Pants.jpeg';
import casualShirtImg from '../assets/Cotton Casual Shirt.jpeg';

import winterJacketImg from '../assets/Winter Long Jacket.jpeg';
import chunkySweaterImg from '../assets/Chunky Knit Sweater.jpeg';
import relaxedJeansImg from '../assets/Relaxed Fit Jeans.jpeg';
import satinTopImg from '../assets/Elegant Satin Top.jpeg';

const products = [
  { id: 1, category: 'Outerwear', title: 'Oversized Wool Coat', price: '$289', img: outerwearImg },
  { id: 2, category: 'Knitwear', title: 'Cashmere Turtleneck', price: '$195', img: knitwearImg },
  { id: 3, category: 'Bottoms', title: 'Wide Leg Trousers', price: '$145', img: bottomsImg },
  { id: 4, category: 'Tops', title: 'Silk Blend Blouse', price: '$165', img: topsImg },

  { id: 5, category: 'Outerwear', title: 'Classic Trench Coat', price: '$220', img: trenchCoatImg },
  { id: 6, category: 'Knitwear', title: 'Soft Wool Sweater', price: '$160', img: woolSweaterImg },
  { id: 7, category: 'Bottoms', title: 'Formal Slim Pants', price: '$130', img: slimPantsImg },
  { id: 8, category: 'Tops', title: 'Cotton Casual Shirt', price: '$95', img: casualShirtImg },

  { id: 9, category: 'Outerwear', title: 'Winter Long Jacket', price: '$310', img: winterJacketImg },
  { id: 10, category: 'Knitwear', title: 'Chunky Knit Sweater', price: '$180', img: chunkySweaterImg },
  { id: 11, category: 'Bottoms', title: 'Relaxed Fit Jeans', price: '$150', img: relaxedJeansImg },
  { id: 12, category: 'Tops', title: 'Elegant Satin Top', price: '$140', img: satinTopImg },
];

const Shop = ({ addToCart }) => (
  <section className="container my-5">
    <h2 className="text-center mb-4">Shop Collection</h2>

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

              <button className="btn btn-dark" onClick={() => addToCart(prod)}>
                Add to Cart
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Shop;