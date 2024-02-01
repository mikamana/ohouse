import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SnsImgImgBox from "../SnsImgImgBox";
import axios from "axios";




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
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164846729210826030.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://images.unsplash.com/photo-1700123287437-e56517cb594e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                    />
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/1609552915_sTfmm.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://images.unsplash.com/photo-1699955980432-a2cebbbdd887?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                    />
                    < SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170107026175186042.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://images.unsplash.com/photo-1697664210419-63958ebae181?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                    />
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170158278970708944.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://images.unsplash.com/photo-1624274515979-32afb09402a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                    />
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170108934471292814.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://images.unsplash.com/photo-1700587511615-ff4dd96a23c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                    />
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170133232083771132.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://images.unsplash.com/photo-1700558057017-650f081dad60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" />
                </SwiperSlide>
                <SwiperSlide>
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170158278970708944.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://images.unsplash.com/photo-1699890767879-d56e745efb09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" />
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170108934471292814.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://plus.unsplash.com/premium_photo-1701065893190-46f44657fbee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                    />
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164846729210826030.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://images.unsplash.com/photo-1700575019340-5ddcc1f4f31d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                    />
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170133232083771132.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://plus.unsplash.com/premium_photo-1701108112570-4413a5ae7090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                    />
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/170108934471292814.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://images.unsplash.com/photo-1603560723083-ef52b8597e2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                    />
                    <SnsImgImgBox img="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/1609552915_sTfmm.jpeg?w=256&h=341.3333333333333&c=c"
                        userImg="https://images.unsplash.com/photo-1594188459847-b845413f6882?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                    />
                </SwiperSlide>

            </Swiper >
            <button className="sns_next_btn"></button>
            <button className="sns_prev_btn"></button>
        </>

    )


}