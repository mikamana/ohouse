import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Contents from "./contents/Contents";
import Banner from "./banner/Banner";
import ShopitemSection from "../../pages/main/shopitem/ShopitemSection";
import ShopcateSection from "../../pages/main/shopcate/ShopcateSection";
// merge하기 전 Main 컴포넌트 지우거나 정리하고 하기
import MainVisual from "../../pages/main/visual/components/MainVisual";
import SnsImg from "../../pages/main/snsimg/components/SnsImg";
import UserImg from './../../pages/main/userimg/UserImg';
import { Outlet } from 'react-router-dom';

export default function Main() {

  return (

    <>
      <Banner />
      <Header>
      </Header>
      <Contents>
        <MainVisual />
        <SnsImg />
        <ShopitemSection />
        <ShopcateSection />
        <UserImg />
      </Contents>
      <Outlet />
      <Footer>
      </Footer>
    </>

  );

}