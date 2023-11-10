import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ShopitemContents from './ShopitemContents';
import React, { useEffect, useState } from 'react'
export default function ShopitemSection(){
  const [shopArray,setShopArray] = useState([]);
  useEffect(()=>{
    fetch('db/shopitem.json')
    .then(res=>res.json())
    .then(data=>setShopArray(data))
  },[])
  return(
    <div className="shopitem_section inner">
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
          shopArray.map((list)=>
        <SwiperSlide>
          <ShopitemContents
          shopitemList={list}
          />
        </SwiperSlide>
          )
        }
        <SwiperSlide>
          <div>button</div>
        </SwiperSlide>
      </Swiper>
      <button className="prev_btn"></button>
      <button className="next_btn"></button>
    </div>
  );
}

      