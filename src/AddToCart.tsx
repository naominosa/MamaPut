// import React from 'react'
import Left from './assets/chevron-left.png'
import heart from './assets/heart.png'
import './AddToCart.css'
import Button from './Button'
import AddToCartFoodCarousel from './AddToCartCarousel'
// import { addToCart } from './AddToCartService'
// import type { CartItem } from './AddToCartService'
// import Carousel from './carousel'
function AddToCart() {
// const userId = "demoUserId"

// const foodItem: CartItem = {
//     name: "Jollof Rice",
//     price: 2000,
//     quantity: 1,
//     imageUrl: "https://example.com/jollof.jpg",
//   };
//  const handleAddToCart = async () => {
//     try {
//       await addToCart(userId, foodItem);
//       alert("Item added to cart!");
//       Optionally, redirect or update state
//     } catch (err) {
//       alert("Failed to add item to cart");
//       console.error(err);
//     }
//     console.log("userId", userId);
// console.log("item", item);
//   };
  return (
    <div className='over'>
      <div className='top-content' >
        <img src={Left} alt="Go BACK" />
        <img src={heart} alt="Heart" />
      </div>
      <div>
        <AddToCartFoodCarousel/>
      </div>
     

      <div className='add-text'>
        <h4>Delivery info</h4>
        <p>Delivered between monday to sundays from 8pm to 12pm</p>
      <h4>Return policy</h4>
      <p>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</p>
      </div>

  <div className='Bottom'>
          <Button  className='btns' buttonText='Add to cart' />
        </div>
    </div>
  )
}

export default AddToCart
