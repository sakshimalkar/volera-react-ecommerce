import React from 'react';
import outerwearImg from '../assets/out1.jpeg';
import knitwearImg from '../assets/knit2.jpeg';
import accessoriesImg from '../assets/access.jpeg';

const collections = [
  { name: 'Outerwear', img: outerwearImg },
  { name: 'Knitwear', img: knitwearImg },
  { name: 'Accessories', img: accessoriesImg },
];

const Collections = () => (
  <section className="container my-5">
    <h2 className="text-center mb-4 display-6">Explore Collections</h2>
    <div className="row g-4">
      {collections.map((col, index) => (
        <div className="col-md-4" key={index}>
          <div className="card h-100">
            <div style={{ height: '250px', overflow: 'hidden' }}>
              <img
                src={col.img}
                alt={col.name}
                className="card-img-top"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{col.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Collections;
