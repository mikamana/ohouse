import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function MainVisual() {

  return (
    <>
      <section className="main_visual_section">
        <div className="main_visual_inner inner">
          <fieldset className="main_visual_img_wrap">
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169383928345530679.jpg?w=850&h=509.79929161747344&c=c" alt="메인사진" />
          </fieldset>
          <div className="main_visual_swiper_wrap">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169900383000090225.png?w=360" alt="슬라이드이미지1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/169900383000090225.png?w=360" alt="슬라이드이미지1" />
              </SwiperSlide>
            </Swiper >
          </div>
        </div>
      </section>
    </>

  )

};