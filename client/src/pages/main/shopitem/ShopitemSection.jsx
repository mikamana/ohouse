import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ShopitemContents from './ShopitemContents';
import React, { useEffect, useState } from 'react'
import ShopitemMore from './ShopitemMore';
import SubtitleMore from '../subtitle_more/Subtitle_more';
import "../../../css/main/shopitem/shopitem.css";
import axios from 'axios'
export default function ShopitemSection() {
  const [shopArray, setShopArray] = useState([]);
  useEffect(() => {
    axios('http://127.0.0.1:8000/product/shopitem')
      .then(result => {
        console.log(result);
        setShopArray(result.data)}
        )
  }, [])
  return (
    <>
      <SubtitleMore title={"오늘의딜"} />
      <div key="shopitem_section" className="shopitem_section inner">
        <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          spaceBetween={25}
          navigation={{
            prevEl: ".prev_btn",
            nextEl: ".next_btn",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {
            shopArray.map((list, i) =>
              <SwiperSlide key={i}>
                <ShopitemContents
                  shopitemList={list}
                  timecount={true}
                />
              </SwiperSlide>
            )
          }
          <SwiperSlide>
            <ShopitemMore />
          </SwiperSlide>
        </Swiper>
        <button className="prev_btn prev_style_opactiy"></button>
        <button className="next_btn next_style_opactiy"></button>
      </div>
    </>

  );

}

