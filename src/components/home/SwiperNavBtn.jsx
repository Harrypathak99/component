import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SwiperNavBtn() {
  const swiper = useSwiper();

  return (
    <>
    <div>
    <button onClick={() => swiper.slideNext()}>Next slide</button>
    <button onClick={() => swiper.slidePrev()}>Previous slide</button>
    </div>
    </>
  );
}