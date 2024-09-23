import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import List from '../OrderList/List';
import { Link } from 'react-router-dom';
import "./style.scss";

function Order() {
  const [form, setForm] = useState({
    firstName: '',
    secondName: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    secondName: false,
    address: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentError, setPaymentError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
    validateForm();
  };

  const validateForm = () => {
    const isValid = Object.values(form).every(value => value.trim() !== '') && paymentMethod !== '';
    setIsFormValid(isValid);
    setErrors({
      firstName: !form.firstName.trim(),
      secondName: !form.secondName.trim(),
      address: !form.address.trim(),
    });
    setPaymentError(paymentMethod === '');
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.id);
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (isFormValid) {
      alert("Form is valid and ready to submit");
    }
  };

  const updateTotalPrice = (price) => {
    setTotalPrice(price);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="order">
          <div className="form">
            <strong className='form__title'>
              <h3 className='text-lg'>Complete seu pedido</h3>
            </strong>
            <form className='form__wrapper' onSubmit={handleSubmit}>
              {/* Form Inputs */}
              <input
                className={`form__input ${errors.firstName ? 'error' : ''}`}
                type="text"
                name="firstName"
                placeholder='FirstName'
                value={form.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className='error__message'>Fill in this field</p>}

              <input
                className={`form__input ${errors.secondName ? 'error' : ''}`}
                type="text"
                name="secondName"
                placeholder='SecondName'
                value={form.secondName}
                onChange={handleChange}
              />
              {errors.secondName && <p className='error__message'>Fill in this field</p>}

              <input
                className={`form__input ${errors.address ? 'error' : ''}`}
                type="text"
                name="address"
                placeholder='Address'
                value={form.address}
                onChange={handleChange}
              />
              {errors.address && <p className='error__message'>Fill in this field</p>}
            </form>

            <div className="payment">
              <div className="payment__wrapper">
                <label htmlFor="credit">
                  <input type="radio" id="credit" name="payment" onChange={handlePaymentChange} />
                  <div className='payment__inp'>
                    Cartão de Crédito
                  </div>
                </label>
                <label htmlFor="debit">
                  <input type="radio" id="debit" name="payment" onChange={handlePaymentChange} />
                  <div className='payment__inp'>
                    Cartão de Débito
                  </div>
                </label>
                <label htmlFor="money">
                  <input type="radio" id="money" name="payment" onChange={handlePaymentChange} />
                  <div className='payment__inp'>
                    Dinheiro
                  </div>
                </label>
              </div>
              {paymentError && <p className='error__position'>Select sending method</p>}
            </div>
          </div>

          {/* Total Calculation */}
          <div className="total">
            <strong className='form__title'>
              <h3 className='text-lg'>Cafés selecionados</h3>
            </strong>
            <div className="total__main">
              <List updateTotalPrice={updateTotalPrice} />
              <Link to="/confirm">
                <button className='wrapper__btn' disabled={!isFormValid}>Confirmar pedido</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
