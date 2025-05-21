import React from 'react'
import Left from './assets/chevron-left.png'
import grocery from './assets/grocery-cart.png'
import './Orders.css'
import Button from './Button'
function Orders() {
  return (
    <div className='Centralized' >
      <div className="text-icon">
            <img src={Left} alt="" />
            <h2>Orders</h2>
        </div>

        <div className='contents' >
          <div>
          <img src={grocery} alt="grocery" />

          </div>
          <h2>No orders yet</h2>
          <p>Hit the orange button down
           below to Create an order</p>
        </div>

        <div className='Bottom'>
          <Button className='btns' buttonText='Start Odering' />
        </div>
    </div>
  )
}

export default Orders
