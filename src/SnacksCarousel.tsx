import CustomCarousel from './CustomCarousel';
import NigerianSnacksArray from './snacks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
function SnacksCarousel() {
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
 {NigerianSnacksArray.map((food) => (
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

export default SnacksCarousel
