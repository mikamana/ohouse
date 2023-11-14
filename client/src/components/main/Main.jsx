import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Contents from "./contents/Contents";
import Banner from "./banner/Banner";
<<<<<<< HEAD
import ShopitemSection from "../../pages/main/shopitem/ShopitemSection";
// merge하기 전 Main 컴포넌트 지우거나 정리하고 하기
import MainVisual from "../../pages/main/visual/components/MainVisual";
import SnsImg from "../../pages/main/snsimg/components/SnsImg";
import SubtitleMore from './../../pages/main/subtitle_more/Subtitle_more';
import UserImg from './../../pages/main/userimg/UserImg';



=======
import { Outlet } from 'react-router-dom';
>>>>>>> work/하나

export default function Main() {

  return (

    <>
      <Banner />
      <Header>

      </Header>
<<<<<<< HEAD
      <Contents>
        <MainVisual />
        <SnsImg />
        <ShopitemSection />
        <SubtitleMore />
        <UserImg />
      </Contents>
=======
      <Outlet />
>>>>>>> work/하나
      <Footer>
      </Footer>
    </>

  );

}