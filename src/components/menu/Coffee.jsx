import React from 'react';
import './style.scss';
import { Coffees } from '../../data.js';
import { useCart } from '../Context/CartContext.jsx';

function Coffee() {
  const { addToCart, increment, decrement, counts } = useCart();

  return (
    <div className="container">
      <main>
        <h1 className='titles'>Nossos cafés</h1>
        <div className="cards">
          {Coffees.map((item) => (
            <div key={item.id} className="card">
              <img className='card__img' src={item.image} alt="coffee" />
              <span className='card__span'>{item.span1}</span>
              <h1 className='card__title'>{item.title}</h1>
              <p className='card__descr'>{item.descr}</p>
              <div className="card__footer">
                <div className="card__footer-price">
                  <p className='card__footer-currency'>{item.currency}</p>
                  <strong className='card__footer-valyuta'>{item.price}</strong>
                </div>
                <div className="card__footer-order">
                  <div className="card__footer-order--number">
                    <button className="decrement" onClick={() => decrement(item.id)}>-</button>
                    <p className="value">{counts[item.id] || 1}</p>
                    <button className="increment" onClick={() => increment(item.id)}>+</button>
                  </div>
                  <button className="card__footer-cart" onClick={() => addToCart(item)}>
                    <svg className="w-8 h-8 text-gray-800 dark:text-white bg-[rgb(75,41,149)] rounded-[5px] p-[5px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Coffee;
