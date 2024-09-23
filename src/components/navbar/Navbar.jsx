import React from 'react';
import './style.scss';
import logo from "../../assets/img/logo.svg";
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

function Navbar() {
  const { getCartItemCount } = useCart();

  return (
    <div className="menu__bg">
      <nav className="menu">
        <Link to="/">
          <div className="menu__logo">
            <img className="menu__logo-icon" src={logo} alt="Logotype" />
          </div>
        </Link>

        <div className="menuBtn">
          <button className="menuBtn__location">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.2,83.4,134.6a8.3,8.3,0,0,0,9.2,0C136,236.2,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
            </svg>
            <p>Fortaleza, CE</p>
          </button>
          <Link to='/order' className="menuBtn__cart">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="rgb(196, 127, 23)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
              />
            </svg>
            <span className="menuBtn__cart-counter">{getCartItemCount()}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
