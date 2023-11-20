import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Banner from "./banner/Banner";
import { Outlet } from "react-router-dom";

// import MainVisual from "../../pages/main/visual/components/MainVisual";
// import SnsImg from "../../pages/main/snsimg/components/SnsImg";

export default function Main() {

  return (

    <>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </>

  );

}
