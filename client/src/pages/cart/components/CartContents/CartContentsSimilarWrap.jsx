import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react'
import ShopitemContents from '../../../main/shopitem/ShopitemContents';
import axios from 'axios'
export default function CartContentsSimilarWrap() {
  const [shopArray, setShopArray] = useState([]);
  useEffect(() => {
    axios('http://127.0.0.1:8000/product/shopitem')
      .then(result => setShopArray(result.data.slice(0, 9)))
  }, [])

  return (
    <div className="cart_contents_similar_wrap">
      <h2 className='cart_contents_similar_title'>다른 고객이 함께 구매한 상품</h2>
      <div className='cart_contents_similar_container'>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
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
                />
              </SwiperSlide>
            )
          }
        </Swiper>
        <button className="prev_btn prev_style_opactiy"></button>
        <button className="next_btn next_style_opactiy"></button>
      </div>
    </div>
  );
}