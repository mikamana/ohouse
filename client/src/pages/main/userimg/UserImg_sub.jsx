import React from "react";
import Userimg_Image from './components/UserImg_Imag';
import UserImg_Title from "./components/UserImg_Title";
import UserImg_SubText from "./components/UserImg_SubText";


export default function UserImg_sub(){
  return(
    <div className="userimg_sub inner">

      <div className="userimg_sub_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_subtitle"/>
        <UserImg_SubText />
      </div>
      <div className="userimg_sub_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_subtitle"/>
        <UserImg_SubText />
      </div>
      <div className="userimg_sub_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_subtitle"/>
        <UserImg_SubText />
      </div>
      <div className="userimg_sub_form">
        <Userimg_Image />
        <UserImg_Title name="userimg_subtitle"/>
        <UserImg_SubText />
      </div>

    </div>
  );
}