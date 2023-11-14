import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Contents from "./contents/Contents";
import Banner from "./banner/Banner";
import SubtitleMore from './../../pages/main/subtitle_more/Subtitle_more';
import UserImg from './../../pages/main/userimg/UserImg';




export default function Main() {

  return (

    <>
      <Banner />
      <Header>
      </Header>
      <Contents>
        <SubtitleMore />
        <UserImg />
      </Contents>
      <Footer>

      </Footer>
    </>

  );

}