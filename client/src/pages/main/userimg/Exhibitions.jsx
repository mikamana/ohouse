import React, { useEffect, useState } from "react";
import SubtitleMore from './../subtitle_more/Subtitle_more';
import Userimg_Image from './components/UserImg_Imag';
import UserImg_Text from "./components/UserImg_Text";
import UserImg_Title from './components/UserImg_Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from "axios";

export default function Exhibitions(){
  const [exhibitionsList, setExhibitionsList] = useState([])

  useEffect(()=>{
    axios.get("data/userimg/exhibitions.json")
    .then(result => setExhibitionsList(result.data))
  },[])

  return(
  <>
    <SubtitleMore title={"오늘의 기획전"}/>
    <div className="inner exhibitions_main">

    <div className="main_visual_swiper_wrap">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          // navigation={true}
          navigation={{
            prevEl: ".prev_btn",
            nextEl: ".next_btn",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >

      <div className="exhibitionsform">
      {exhibitionsList.map(list =>
      <SwiperSlide key={list.text}> 
        <div className="exhibitions">
          <Userimg_Image img={list.image}/>
          <UserImg_Text text={list.text}/>
          <UserImg_Title name={"exhibitions_title"} title={list.title}/>
        </div>
      </SwiperSlide>
      )}
      
      <SwiperSlide> 
      <div className="exhibitions_button_wrap">
        <button className="exhibitions_list_button"></button>
        <span className="exhibitions_img_list_button_span">더보기</span>
      </div>
      </SwiperSlide>
      
      </div>

      </Swiper >
        <button className="prev_btn"></button>
        <button className="next_btn"></button>
      </div >

    </div>
  </>
  );
}