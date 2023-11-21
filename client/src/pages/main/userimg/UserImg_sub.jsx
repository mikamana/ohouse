import React from "react";
import Userimg_Image from './components/UserImg_Imag';
import UserImg_Title from "./components/UserImg_Title";
import UserImg_SubText from "./components/UserImg_SubText";


export default function UserImgSub(){
  return(
    <div className="userimg_sub inner">

      <div className="userimg_sub_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_subtitle" title={"미드센트리 모던 무드 5평 원룸의 낮과 밤"}/>
        <UserImg_SubText address={"인천광역시 중구 삼안해피하우징 77"} rewie={"좋아요 68 . 조회 20,353"}/>
      </div>
      
      <div className="userimg_sub_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_subtitle" title={"미드센트리 모던 무드 5평 원룸의 낮과 밤"}/>
        <UserImg_SubText address={"인천광역시 중구 삼안해피하우징 77"} rewie={"좋아요 68 . 조회 20,353"}/>
      </div>

      <div className="userimg_sub_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_subtitle" title={"미드센트리 모던 무드 5평 원룸의 낮과 밤"}/>
        <UserImg_SubText address={"인천광역시 중구 삼안해피하우징 77"} rewie={"좋아요 68 . 조회 20,353"}/>
      </div>

      <div className="userimg_sub_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_subtitle" title={"미드센트리 모던 무드 5평 원룸의 낮과 밤"}/>
        <UserImg_SubText address={"인천광역시 중구 삼안해피하우징 77"} rewie={"좋아요 68 . 조회 20,353"}/>
      </div>

    </div>
  );
}