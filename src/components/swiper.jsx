// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import  Image1 from '../../public/hero-bg.png';
import Image2 from '../../public/hero-bg2.png';
import Image3 from '../../public/hero-bg3.png';
import Image4 from '../../public/hero-bg4.png';
import Image5 from '../../public/hero-bg5.png';

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
        <SwiperSlide><img src={Image1} alt="image1" /></SwiperSlide>
        <SwiperSlide><img src={Image2} alt="image2" /></SwiperSlide>
        <SwiperSlide><img src={Image3} alt="image3" /></SwiperSlide>
        <SwiperSlide><img src={Image4} alt="image4" /></SwiperSlide>
        <SwiperSlide><img src={Image5} alt="image5" /></SwiperSlide>
      </Swiper>
    </>
  );
}
