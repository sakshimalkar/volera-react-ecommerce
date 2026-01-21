import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold fs-3">
          VOLERA
        </NavLink>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link fw-semibold">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link fw-semibold">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link fw-semibold">
                Cart ({cartCount})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
