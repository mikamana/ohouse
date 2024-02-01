import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import IconMenuContent from "./components/IconMenuContent";
import SubtitleMore from "../subtitle_more/Subtitle_more";
import { useEffect, useState } from "react";

export default function IconMenuSlide() {
  const [iconMenu, setIconMenu] = useState([]);
  useEffect(() => {
    fetch(`data/iconMenu/iconMenu.json`)
      .then((res) => res.json())
      .then((data) => {
        const iconMenuSlice = data.slice(11, 28);
          setIconMenu(iconMenuSlice);
      });
  });
  return (
    <>
      <SubtitleMore title={'카테고리별 상품 찾기'}/>
      <div className="main_visual_swiper_wrap inner">
        <Swiper
          slidesPerView={13}
          spaceBetween={10}
          slidesPerGroup={5}
          navigation={{
            prevEl: ".prev_btn_icon",
            nextEl: ".next_btn_icon",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {iconMenu.map((icon) =>(
            <SwiperSlide className="iconMenu iconMenu_slide" key={icon.id} style={{ width: 'auto' }}> 
              <IconMenuContent image={icon.image} name={icon.name}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="prev_btn_icon prev_style"></button>
        <button className="next_btn_icon next_style"></button>
      </div>
    </>
  );
}