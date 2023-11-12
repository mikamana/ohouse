import React from "react";
import Header from "./header/Header";
import Header_logo from "./header/Header_logo";
import Header_nav from "./header/Header_nav";
import Footer from "./footer/Footer";
import Contents from "./contents/Contents";
import Banner from "./banner/Banner";
import { Outlet } from 'react-router-dom';

export default function Main() {

  return (

    <>
      <Banner />
      <Header>
        <Header_logo />
        <Header_nav />
      </Header>
      <Outlet />
      <Footer>

      </Footer>
    </>

  );

}