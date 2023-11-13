import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Contents from "./contents/Contents";
import Banner from "./banner/Banner";
import MainVisual from "../../pages/main/visual/components/MainVisual";
import SnsImg from "../../pages/main/snsimg/components/SnsImg";

export default function Main() {

  return (

    <>
      <Banner />
      <Header>
      </Header>
      <Contents>
        <MainVisual />
        <SnsImg />
      </Contents>
      <Footer>
      </Footer>
    </>

  );

}