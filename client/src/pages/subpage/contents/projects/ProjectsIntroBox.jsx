import React from 'react'
import ProductionsPrdReviewUserItem from '../../../productions/components/prd/review/ProductionsPrdReviewUserItem'

export default function ProjectsIntroBox(props) {

  return (
    <>
      <div className='projects_house_intro_box'>
        <fieldset className='projects_house_intro_img_wrap'>
          <img src={props.houseImg} alt="유저인테리어이미지1" />
          <span className='projects_house_intro_img_span_new'>NEW</span>
          {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20 2.75H4C3.44772 2.75 3 3.19771 3 3.75V20.8228C3 21.1988 3.39948 21.4403 3.73242 21.2655L11.5352 17.169C11.8262 17.0162 12.1738 17.0162 12.4648 17.169L20.2676 21.2655C20.6005 21.4403 21 21.1988 21 20.8228V3.75C21 3.19772 20.5523 2.75 20 2.75Z" fill="#35C5F0"></path></svg> */}
          <span className='projects_house_intro_img_span_svg'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_15409_67579)"><g filter="url(#filter0_d_15409_67579)"><path d="M4.3 4.05V19.4992L10.9309 16.018C11.6003 15.6666 12.3997 15.6666 13.0691 16.018L19.7 19.4992V4.05H4.3ZM4 2.75H20C20.5523 2.75 21 3.19772 21 3.75V20.8228C21 21.1988 20.6005 21.4403 20.2676 21.2655L12.4648 17.169C12.1738 17.0162 11.8262 17.0162 11.5352 17.169L3.73242 21.2655C3.39948 21.4403 3 21.1988 3 20.8228V3.75C3 3.19771 3.44772 2.75 4 2.75Z" fill="white"></path><path d="M4.3 4.05V19.4992L10.9309 16.018C11.6003 15.6666 12.3997 15.6666 13.0691 16.018L19.7 19.4992V4.05H4.3Z" fill="white" fillOpacity="0.5"></path></g></g><defs><filter id="filter0_d_15409_67579" x="-2" y="-0.25" width="28" height="28.5735" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="2.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.278431 0 0 0 0 0.301961 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15409_67579"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15409_67579" result="shape"></feBlend></filter></defs></svg>
          </span>
        </fieldset>
        <p className='projects_house_intro_info'>
          {props.houseTitle}
        </p>
        <ProductionsPrdReviewUserItem isNew={false}
          userImg={props.userImg}
          mid={props.mid}
        />
        <p className='projects_house_intro_scrap'>
          스크랩 33 ＊ 조회1,603
        </p>
      </div>
    </>
  )
}
