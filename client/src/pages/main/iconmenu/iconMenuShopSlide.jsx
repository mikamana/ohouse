import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import IconMenuContent from "./components/IconMenuContent";
import SubtitleMore from "../subtitle_more/Subtitle_more";
import { useEffect, useState } from "react";

export default function IconMenuSlide(){
  const [iconMenuSlide, setIconMenuSlide] = useState([]);
  useEffect(()=>{
    fetch(`data/iconMenu/iconMenuShopSlide.json`)
    .then((res)=>res.json())
    .then((data)=>setIconMenuSlide(data));
  });
  return(
    <>
      <SubtitleMore title={'카테고리'}/>
      <div className="iconMenu_inner_wrap inner">
        <div className="main_visual_swiper_wrap">
          <Swiper
            slidesPerView={10}
            spaceBetween={10}
            slidesPerGroup={5}
            navigation={{
              prevEl: ".prev_btn_icon_shop",
              nextEl: ".next_btn_icon_shop",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {iconMenuSlide.map((icon) =>(
              <SwiperSlide key={icon.imssID} className="iconMenu iconMenuShop_slide" style={{ width: 'auto' }}> 
                <IconMenuContent image={icon.image} name={icon.name}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="prev_btn_icon_shop"></button>
          <button className="next_btn_icon_shop"></button>
        </div>
      </div>
    </>
  );
}