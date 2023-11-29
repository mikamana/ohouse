import React from 'react';
import ProductionsPrdReviewUserItem from '../../../productions/components/prd/review/ProductionsPrdReviewUserItem';
import "../../../../css/sub/contents/projects/projects.css";


export default function ProjectsWrap() {
    return (
        <>
            <div className='projects_wrap'>
                <div className="projects_inner_wrap inner">
                    <ul className='house_cate_list'>
                        <li className="house_cate_list_li">
                            <div className='house_cate_list_box'>
                                <button className='house_cate_list_btn'>
                                    <span className='house_cate_list_span'>정렬</span>
                                </button>
                            </div>
                        </li>
                        <li className="house_cate_list_li">
                            <div className='house_cate_list_box'>
                                <button className='house_cate_list_btn'>
                                    <span className='house_cate_list_span'>동영상</span>
                                </button>
                            </div>
                        </li>
                        <li className="house_cate_list_li">
                            <div className='house_cate_list_box'>
                                <button className='house_cate_list_btn'>
                                    <span className='house_cate_list_span'>주거형태</span>
                                </button>
                            </div>
                        </li>
                        <li className="house_cate_list_li">
                            <div className='house_cate_list_box'>
                                <button className='house_cate_list_btn'>
                                    <span className='house_cate_list_span'>공간</span>
                                </button>
                            </div>
                        </li>
                        <li className="house_cate_list_li">
                            <div className='house_cate_list_box'>
                                <button className='house_cate_list_btn'>
                                    <span className='house_cate_list_span'>평수</span>
                                </button>
                            </div>
                        </li>
                        <li className="house_cate_list_li">
                            <div className='house_cate_list_box'>
                                <button className='house_cate_list_btn'>
                                    <span className='house_cate_list_span'>스타일</span>
                                </button>
                            </div>
                        </li>
                        <li className="house_cate_list_li">
                            <div className='house_cate_list_box'>
                                <button className='house_cate_list_btn'>
                                    <span className='house_cate_list_span'>컬러</span>
                                </button>
                            </div>
                        </li>
                        <li className="house_cate_list_li">
                            <div className='house_cate_list_box'>
                                <button className='house_cate_list_btn'>
                                    <span className='house_cate_list_span'>셀프/전문</span>
                                </button>
                            </div>
                        </li>
                        <li className="house_cate_list_li">
                            <div className='house_cate_list_box'>
                                <button className='house_cate_list_btn'>
                                    <span className='house_cate_list_span'>제품정보</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                    <div className='projects_all_count_wrap'>
                        <span className='projects_all_count_text'>
                            전체 11,994
                        </span>
                    </div>
                    <div className="projects_house_intro_wrap">
                        <div className='projects_house_intro_box'>
                            <fieldset className='projects_house_intro_img_wrap'>
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/project/169916905993162984.jpg?w=480&h=321&c=c" alt="유저인테리어이미지1" />
                                <span className='projects_house_intro_img_span_new'>NEW</span>
                                {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20 2.75H4C3.44772 2.75 3 3.19771 3 3.75V20.8228C3 21.1988 3.39948 21.4403 3.73242 21.2655L11.5352 17.169C11.8262 17.0162 12.1738 17.0162 12.4648 17.169L20.2676 21.2655C20.6005 21.4403 21 21.1988 21 20.8228V3.75C21 3.19772 20.5523 2.75 20 2.75Z" fill="#35C5F0"></path></svg> */}
                                <span className='projects_house_intro_img_span_svg'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_15409_67579)"><g filter="url(#filter0_d_15409_67579)"><path d="M4.3 4.05V19.4992L10.9309 16.018C11.6003 15.6666 12.3997 15.6666 13.0691 16.018L19.7 19.4992V4.05H4.3ZM4 2.75H20C20.5523 2.75 21 3.19772 21 3.75V20.8228C21 21.1988 20.6005 21.4403 20.2676 21.2655L12.4648 17.169C12.1738 17.0162 11.8262 17.0162 11.5352 17.169L3.73242 21.2655C3.39948 21.4403 3 21.1988 3 20.8228V3.75C3 3.19771 3.44772 2.75 4 2.75Z" fill="white"></path><path d="M4.3 4.05V19.4992L10.9309 16.018C11.6003 15.6666 12.3997 15.6666 13.0691 16.018L19.7 19.4992V4.05H4.3Z" fill="white" fillOpacity="0.5"></path></g></g><defs><filter id="filter0_d_15409_67579" x="-2" y="-0.25" width="28" height="28.5735" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15409_67579"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15409_67579" result="shape"></feBlend></filter></defs></svg>
                                </span>
                            </fieldset>
                            <p className='projects_house_intro_info'>
                                다양한 주거 경험을 거쳐, 우리에게 꼭 맞는 주택으로!
                            </p>
                            <ProductionsPrdReviewUserItem isNew={false} />
                            <p className='projects_house_intro_scrap'>
                                스크랩 33 ＊ 조회1,603
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

