import React, { Children } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Contents({ children }) {

  return (
    <>
      <main className="main_contents inner">
        {children}
        {/* <div className="main_visual_swiper_wrap">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                prevEl: '.prev',
                nextEl: '.next',
              }}
              pagination={{
                type: 'fraction',
              }}
              modules={[Navigation, Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169900383000090225.png?w=360" alt="슬라이드이미지1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169900383000090225.png?w=360" alt="슬라이드이미지1" />
              </SwiperSlide>
            </Swiper >
            <div className="prev"></div>
            <div className="next"></div>
        </div>

        <div className="main_visual_swiper_wrap swiper_wrap">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                prevEl: '.prev1',
                nextEl: '.next1',
              }}
              pagination={{
                type: 'fraction',
              }}
              modules={[Navigation, Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169900383000090225.png?w=360" alt="슬라이드이미지1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169900383000090225.png?w=360" alt="슬라이드이미지1" />
              </SwiperSlide>
            </Swiper >
            <div className="prev1 prev_style_opactiy"></div>
            <div className="next1 next_style"></div>
        </div>
        <button className="sky_btn">버튼</button> */}
      </main>
    </>

  );

};