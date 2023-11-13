import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Contents from "./contents/Contents";
import Banner from "./banner/Banner";
import { Outlet } from 'react-router-dom';

export default function Main() {

  return (

    <>
      <Banner />
      <Header>
      </Header>
      <Outlet />
      <Footer>

      </Footer>
    </>

  );

}