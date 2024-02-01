import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProductionsPrdSwiperBox() {


    return (

        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    prevEl: ".prev_btn",
                    nextEl: ".next_btn",
                }}
                pagination={{
                    clickable: true,
                    el: ".pagination_bullet"
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide tag={'ul'}>
                    <li className="production_selling_prd_userimg_list_li">
                        <Link to="#" className="production_selling_prd_userimg_list_link">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/167906204196197005.jpeg?gif=1&w=360&webp=1" alt="유저상품스타일링1" />
                        </Link>
                    </li>
                    <li className="production_selling_prd_userimg_list_li">
                        <Link to="#" className="production_selling_prd_userimg_list_link">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/168161785731736213.jpeg?gif=1&w=360&webp=1" alt="유저상품스타일링1" />
                        </Link>
                    </li>
                    <li className="production_selling_prd_userimg_list_li">
                        <Link to="#" className="production_selling_prd_userimg_list_link">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/168490738207782485.jpg?gif=1&w=480&webp=1" alt="유저상품스타일링1" />
                        </Link>
                    </li>
                    <li className="production_selling_prd_userimg_list_li">
                        <Link to="#" className="production_selling_prd_userimg_list_link">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/166764883632712030.jpg?gif=1&w=360&webp=1" alt="유저상품스타일링1" />
                        </Link>
                    </li>
                </SwiperSlide>
                <SwiperSlide tag={'ul'}>
                    <li className="production_selling_prd_userimg_list_li">
                        <Link to="#" className="production_selling_prd_userimg_list_link">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/167906204196197005.jpeg?gif=1&w=360&webp=1" alt="유저상품스타일링1" />
                        </Link>
                    </li>
                    <li className="production_selling_prd_userimg_list_li">
                        <Link to="#" className="production_selling_prd_userimg_list_link">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/167906204196197005.jpeg?gif=1&w=360&webp=1" alt="유저상품스타일링1" />
                        </Link>
                    </li>
                    <li className="production_selling_prd_userimg_list_li">
                        <Link to="#" className="production_selling_prd_userimg_list_link">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/167906204196197005.jpeg?gif=1&w=360&webp=1" alt="유저상품스타일링1" />
                        </Link>
                    </li>
                    <li className="production_selling_prd_userimg_list_li">
                        <Link to="#" className="production_selling_prd_userimg_list_link">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/167906204196197005.jpeg?gif=1&w=360&webp=1" alt="유저상품스타일링1" />
                        </Link>
                    </li>
                </SwiperSlide>
            </Swiper >
            <button className="prev_btn"></button>
            <button className="next_btn"></button>
            <span className="pagination_bullet"></span>
        </>

    );

}