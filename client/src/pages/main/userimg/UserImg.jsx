import React from "react";
import Userimg_Image from './components/UserImg_Imag';
import UserImg_Title from './components/UserImg_Title';
import UserImg_Text from './components/UserImg_Text';

export default function UserImg(){

  return(
    <div className="userimg inner">

      <div className="userimg_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_title" title={"에스제이디자인"}/>
        <UserImg_Text  text={"가장 좋았던 점은 실장님과 소장님 모두 빠르게 소통해주셨던 거였어요"}/>
      </div>

      <div className="userimg_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_title" title={"에스제이디자인"}/>
        <UserImg_Text  text={"가장 좋았던 점은 실장님과 소장님 모두 빠르게 소통해주셨던 거였어요"}/>
      </div>

      <div className="userimg_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_title" title={"에스제이디자인"}/>
        <UserImg_Text  text={"가장 좋았던 점은 실장님과 소장님 모두 빠르게 소통해주셨던 거였어요"}/>
      </div>

    </div>
  );
}