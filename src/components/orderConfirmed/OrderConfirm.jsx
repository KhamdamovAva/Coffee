import React from 'react'
import './style.scss'
import truck from '../../assets/img/delivery.svg'
import Navbar from '../navbar/Navbar'
function OrderConfirm() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className='orderConfirm'>
          <h2 className='text-[32px] text-amber-600 font-bold'>Uhu! Pedido confirmado</h2>
          <p className='text-lg'>Agora é só aguardar que logo o café chegará até você</p>
          <img className='orderConfirm__icon' src={truck} alt="Delivery truck" />
        </div>
      </div>
    </>

  )
}

export default OrderConfirm
