import { React, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Cards from './Cards';



const Carousels = () =>  {
 
  return (
    <>

    <Swiper
    style={{  
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        
    navigation={true}
    modules={[Navigation, Pagination, Scrollbar, A11y ]}
    spaceBetween={20}
    slidesPerView={1.5}
    breakpoints={{
          550: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        }}
    className='mySwiper'
  
  >
   
    <SwiperSlide><Cards /></SwiperSlide>
    <SwiperSlide><Cards /></SwiperSlide>
    <SwiperSlide><Cards /></SwiperSlide>
    <SwiperSlide><Cards /></SwiperSlide>
    <SwiperSlide><Cards /></SwiperSlide>
    <SwiperSlide><Cards /></SwiperSlide>
    
  </Swiper>
  <div>

      </div>
  </>
    );
}
export default Carousels