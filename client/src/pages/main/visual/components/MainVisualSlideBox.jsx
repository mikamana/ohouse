import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function MainVisualSlideBox() {
  return (
    <>
      <div className="main_visual_swiper_wrap">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          // navigation={true}
          pagination={{
            type: 'fraction',
          }}
          navigation={{
            prevEl: ".prev_btn",
            nextEl: ".next_btn",
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169900383000090225.png?w=360" alt="슬라이드이미지1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169431911828293866.jpg?w=360" alt="슬라이드이미지1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/168016842438804733.png?w=360" alt="슬라이드이미지1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169900287105005230.png?w=360" alt="슬라이드이미지1" />
          </SwiperSlide>
        </Swiper >
        <button className="prev_btn"></button>
        <button className="next_btn"></button>
      </div >
    </>

  );

}