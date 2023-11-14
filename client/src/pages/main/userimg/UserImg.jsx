import React from "react";
import Userimg_Image from './components/UserImg_Imag';
import UserImg_Title from './components/UserImg_Title';
import UserImg_Text from './components/UserImg_Text';
import SubtitleMore from "../subtitle_more/Subtitle_more";

export default function UserImg() {

  return (
    <>
      <SubtitleMore title={"유저들의 인테리어 시공 리뷰"} />
      <div className="userimg inner">

        <div className="userimg_form">
          <Userimg_Image />
          <UserImg_Title name="userimg_title" />
          <UserImg_Text />
        </div>

        <div className="userimg_form">
          <Userimg_Image />
          <UserImg_Title name="userimg_title" />
          <UserImg_Text />
        </div>

        <div className="userimg_form">
          <Userimg_Image />
          <UserImg_Title name="userimg_title" />
          <UserImg_Text />
        </div>

      </div>
    </>

  );
}