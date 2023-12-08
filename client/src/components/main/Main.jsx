import React from "react";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from 'react-router-dom';
import "../../css/layout/banner.css";
import "../../css/layout/footer.css";
import "../../css/layout/header.css";

export default function Main() {

  const getSearch = (e) => {



  }

  return (
    <>
      <Banner />
      <Header getSearch={getSearch} />
      <Outlet />
      <Footer />
    </>

  );
}
