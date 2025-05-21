// import React from 'react'
import FoodArray from './FoodArray';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
 import './AddToCartFoodCarousel.css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle'

function AddToCartFoodCarousel() {

  return (
    <div className='top'>
        <Swiper
        modules={[Pagination]}
        pagination={{ 
  clickable: true, 
  dynamicBullets: true,
  dynamicMainBullets: 2 
}}

        spaceBetween={50}
        slidesPerView={1}
        >
      {FoodArray.map((food)=>(
          <SwiperSlide key={food.id}>
         <div className='add-to-cart-display'>
       <img src={food.image} alt="" />
            <h5>{food.name}</h5>
        {food.price !== undefined && (
          <span>₦{food.price.toLocaleString()}</span>
        )}
      </div>
          </SwiperSlide>

        ))}

          
        </Swiper>

       
      
    </div>
  )
}

export default AddToCartFoodCarousel