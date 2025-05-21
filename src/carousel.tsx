// import React from 'react'
import CustomCarousel from './CustomCarousel';
import FoodArray from './FoodArray';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
function Carousel() {
  return (
    <div>
      <Swiper
        // modules={[Navigation]}
        // navigation={true}
          style={{ height: '220px' }}

         modules={[Autoplay]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className='contain'>
 {FoodArray.map((food) => (
          <SwiperSlide key={food.id}>
            <CustomCarousel
              src={food.image}
              NameOfFood={food.name}
              Price={food.price}
              
            />
          </SwiperSlide>
        ))}
        </div>
       
      </Swiper>
    </div>
  )
}

export default Carousel


