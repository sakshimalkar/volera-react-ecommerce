import React from 'react';

const Cart = ({ cart }) => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="border p-3 mb-3 d-flex align-items-center">
            <img src={item.img} alt={item.title} width="80" className="me-3" />
            <div>
              <h5>{item.title}</h5>
              <p>{item.price}</p>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Cart;
