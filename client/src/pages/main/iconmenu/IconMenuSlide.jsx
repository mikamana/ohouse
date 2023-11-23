import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import IconMenuContent from "./components/IconMenuContent";
import { useEffect, useState } from "react";

export default function IconMenuSlide() {
  const [iconMenuSlide, setIconMenuSlide] = useState([]);
  useEffect(() => {
    fetch(`data/iconMenuSlide.json`)
      .then((res) => res.json())
      .then((data) => setIconMenuSlide(data));
  });
  return (
    <>
      <div className="iconmenu_inner_wrap inner">
        <div className="main_visual_swiper_wrap">
          <Swiper
            slidesPerView={14}
            spaceBetween={10}
            slidesPerGroup={5}
            navigation={{
              prevEl: ".prev_btn_icon",
              nextEl: ".next_btn_icon",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {iconMenuSlide.map((icon) => (
              <SwiperSlide key={icon.id} className="iconmenu iconmenu_slide" style={{ width: 'auto' }}>
                <IconMenuContent image={icon.image} name={icon.name} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="prev_btn_icon prev_style"></button>
          <button className="next_btn_icon next_style"></button>
        </div>
      </div>
    </>
  );
}