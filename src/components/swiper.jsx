// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Slidebar=()=> {
    
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/hero-bg.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/hero-bg2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/hero-bg3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/hero-bg4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/hero-bg5.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
