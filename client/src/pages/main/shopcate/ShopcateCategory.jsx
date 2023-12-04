import ShopcateCategoryAll from "./components/category/ShopcateCategoryAll";
import ShopcateCategoryItem from "./components/category/ShopcateCategoryItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
export default function ShopcateCategory({catelist,getCategoryItem}){
  const [activeBtn,SetActiveBtn] = useState(0)
function handleClick(category_id){
  SetActiveBtn(category_id)
}
  return(
    <>
    <div className="shopcate_category">
      <Swiper
                slidesPerView={'auto'}
                slidesPerGroup={11}
                spaceBetween={5}
                navigation={{
                  prevEl: ".prev_btn2",
                  nextEl: ".next_btn2",
                }}
                modules={[Navigation]}
                className="mySwiper2"
        >
        <SwiperSlide style={{ width: 'auto' }}>
          <ShopcateCategoryAll
          getCategoryItem={getCategoryItem}
          handleClick={handleClick}
          activeBtn={activeBtn}
          />
        </SwiperSlide>
        {
          catelist.map((list)=>
        {return <SwiperSlide key={list.category_id} style={{ width: 'auto' }}>
          <ShopcateCategoryItem
          category_name={list.category_name}
          category_id={list.category_id}
          getCategoryItem={getCategoryItem}
          handleClick={handleClick}
          activeBtn={activeBtn}
          />
        </SwiperSlide>}
          )
        }
        </Swiper>
        <button className="prev_btn2"></button>
        <button className="next_btn2"></button>
      </div>
    </>
  );
}