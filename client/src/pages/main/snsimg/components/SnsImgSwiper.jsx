import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SnsImgImgBox from "../SnsImgImgBox";


export default function SnsImgSwiper() {

    return (

        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    prevEl: ".sns_prev_btn",
                    nextEl: ".sns_next_btn",
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SnsImgImgBox />
                    <SnsImgImgBox />
                    <SnsImgImgBox />
                    <SnsImgImgBox />
                    <SnsImgImgBox />
                    <SnsImgImgBox />
                </SwiperSlide>
                <SwiperSlide>
                    <SnsImgImgBox />
                    <SnsImgImgBox />
                    <SnsImgImgBox />
                    <SnsImgImgBox />
                    <SnsImgImgBox />
                    <SnsImgImgBox />
                </SwiperSlide>

            </Swiper >
            <button className="sns_next_btn"></button>
            <button className="sns_prev_btn"></button>
        </>

    )


}