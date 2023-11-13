import ShopcateCategoryAll from "./components/category/ShopcateCategoryAll";
import ShopcateCategoryItem from "./components/category/ShopcateCategoryItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
export default function ShopcateCategory(){
  const [catelist,setCatelist] = useState([]);
  useEffect(()=>{
    fetch('/db/shopcate.json')
    .then(res=>res.json())
    .then(data=>setCatelist(data))
  },[])
  return(
    <>
    <div className="shopcate_category inner">
      <Swiper
                slidesPerView={11}
                slidesPerGroup={11}
                spaceBetween={0}
                navigation={{
                  prevEl: ".prev_btn2",
                  nextEl: ".next_btn2",
                }}
                modules={[Navigation]}
                className="mySwiper2"
        >
        <SwiperSlide>
          <ShopcateCategoryAll/>
        </SwiperSlide>
        {
          catelist.map((list)=>
        {return <SwiperSlide>
          <ShopcateCategoryItem
          category_name={list.category_name}
          />
        </SwiperSlide>}
          )
        }
        </Swiper>
      </div>
        <button className="prev_btn2"></button>
        <button className="next_btn2"></button>
    </>
  );
}