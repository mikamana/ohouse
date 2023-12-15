import React, { useState, useEffect } from "react";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from 'react-router-dom';
import "../../css/layout/banner.css";
import "../../css/layout/footer.css";
import "../../css/layout/header.css";
import { useOutletContext } from 'react-router-dom';

export default function Main() {
  const searchKeyword = useOutletContext();
  const [data, setData] = useState('');

  const handleDataChange = (value) => {
    setData(value);
    console.log(value);
  };


  return (
    <>
      <Banner />
      <Header onDataChange={handleDataChange}/>
      <Outlet context={data}/>
      <Footer />
    </>

  );
}
