import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Contents from "./contents/Contents";
import Banner from "./banner/Banner";
import IconMenu from "../../pages/main/iconmenu/IconMenu";
import IconMenuSlide from "../../pages/main/iconmenu/IconMenuSlide";


export default function Main() {

  return (
    <>
      <Banner />
      <Header>
      </Header>
      <Contents>
        <IconMenu />
        <IconMenuSlide />
      </Contents>
      <Footer>

      </Footer>
    </>

  );
}