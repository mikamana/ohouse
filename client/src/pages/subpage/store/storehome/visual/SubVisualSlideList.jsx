import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";

export default function SubVisualSlideList() {

  return (

    <>
      <ul className="sub_visual_list_ul">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
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
          <li className="sub_visual_list_li">
            <SwiperSlide key={123}>
              <Link to="#">
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169960560152478453.png?w=1920" alt="슬라이드이미지1" />
              </Link>
            </SwiperSlide>
          </li>
          <li className="sub_visual_list_li">
            <SwiperSlide key={456}>
              <Link to="#">
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/170012982237802200.png?w=1920" alt="슬라이드이미지1" />
              </Link>
            </SwiperSlide>
          </li>
          <li className="sub_visual_list_li">
            <SwiperSlide >
              <Link to="#">
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/169995935837483041.png?w=1920" alt="슬라이드이미지1" />
              </Link>
            </SwiperSlide>
          </li>
        </Swiper >
      </ul>
      <div className="sub_visual_inner inner">
        <button className="prev_btn"></button>
        <button className="next_btn"></button>
      </div>
    </>

  )


}