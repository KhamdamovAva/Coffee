import React from 'react';
import { Coffees } from '../../data.js';
import { useCart } from '../Context/CartContext.jsx';
import "./style.scss"

function List() {
  const { increment, decrement, removeFromCart, counts } = useCart();

  const calculateTotalPrice = () => {
    return Coffees.reduce((total, item) => {
      if (counts[item.id]) {
        return total + item.price * counts[item.id];
      }
      return total;
    }, 0);
  };

  const deliveryFee = 3.50;
  const total = parseFloat(calculateTotalPrice().toFixed(2)); 

  return (
    <>
      {Coffees.map((item) => (
        <div key={item.id} className="lists">
          {counts[item.id] ? (
            <div className="list">
              <div className="list__item">
                <img
                  className="list__item-img"
                  src={item.image}
                  alt={item.title}
                />
                <div className="list__order">
                  <p>{item.title}</p>
                  <div className="list__btns">
                    <button
                      className="decrement"
                      onClick={() => decrement(item.id)}
                    >
                      -
                    </button>
                    <p className="value">{counts[item.id] || 1}</p>
                    <button
                      className="increment"
                      onClick={() => increment(item.id)}
                    >
                      +
                    </button>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <p>{parseFloat((item.price * counts[item.id]).toFixed(2))}</p>
            </div>
          ) : null}
        </div>
      ))}
      <div className="total__wrapper">
        <div className="wrapper__title">
          <p className="wrapper__text">Total de itens</p>
          <p className="wrapper__text">Entrega</p>
          <strong className="wrapper__text text-lg">Total</strong>
        </div>
        <div className="wrapper__values">
          <p className="wrapper__text price">R$ {total}</p>
          <p className="wrapper__text">R$ {deliveryFee.toFixed(2)}</p>
          <strong className="wrapper__text text-[20px] total-price">
            R$ {(total + deliveryFee).toFixed(2)}
          </strong>
        </div>
      </div>
    </>
  );
}

export default List;
