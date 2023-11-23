import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


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
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169954136277703289.jpeg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169954136277703289.jpeg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169954136277703289.jpeg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169954136277703289.jpeg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-a0qkmc" />
                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169970727417297039.jpeg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169970727417297039.jpeg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169970727417297039.jpeg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169970727417297039.jpeg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-a0qkmc" />
                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169969839556687836.jpeg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169969839556687836.jpeg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169969839556687836.jpeg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169969839556687836.jpeg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-gnpvt2" />
                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971897729518267.jpeg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971897729518267.jpeg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971897729518267.jpeg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971897729518267.jpeg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-gnpvt2" />
                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971465378575552.jpeg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971465378575552.jpeg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971465378575552.jpeg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971465378575552.jpeg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-gnpvt2" />
                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169970541748189290.jpg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169970541748189290.jpg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169970541748189290.jpg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169970541748189290.jpg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-gnpvt2" />
                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169970847570765210.jpeg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169970847570765210.jpeg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169970847570765210.jpeg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169970847570765210.jpeg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-gnpvt2" />
                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971455528093147.jpeg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971455528093147.jpeg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971455528093147.jpeg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971455528093147.jpeg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-gnpvt2" />
                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169954136277703289.jpeg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169954136277703289.jpeg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169954136277703289.jpeg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169954136277703289.jpeg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-a0qkmc" />
                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169970541748189290.jpg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169970541748189290.jpg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169970541748189290.jpg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/169970541748189290.jpg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-gnpvt2" />

                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                    <div className="snsimg_img_list_div">
                        <fieldset className="snsimg_img_fieldset">
                            <Link to="#" className="snsimg_img_list_link">
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971093942682046.jpeg?w=256&amp;h=341.3333333333333&amp;c=c" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971093942682046.jpeg?w=384&amp;h=512&amp;c=c 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971093942682046.jpeg?w=512&amp;h=682.6666666666666&amp;c=c 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169971093942682046.jpeg?w=768&amp;h=1024&amp;c=c 3x" class="e193wc2k2 css-gnpvt2" />
                                <p className="snsimg_img_list_user">
                                    <span className="snsimg_img_list_user_img">
                                        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=36" srcset="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=54 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=72 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images1577181681_416337.jpeg?w=108 3x" class="e1fm144d5 css-1auwp8u" />
                                    </span>
                                    <span className="snsimg_img_list_user_text">
                                        예진문
                                    </span>
                                    <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
                                </p>
                            </Link>
                        </fieldset>
                    </div>
                    <div className="snsimg_img_list_button_wrap">
                        <button className="snsimg_img_list_button">

                        </button>
                        <span className="snsimg_img_list_button_span">더보기</span>
                    </div>
                </SwiperSlide>
            </Swiper >
            <button className="sns_next_btn"></button>
            <button className="sns_prev_btn"></button>
        </>

    )


}