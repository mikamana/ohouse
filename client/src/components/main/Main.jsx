import React, { useState, useEffect } from "react";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from 'react-router-dom';
import "../../css/layout/banner.css";
import "../../css/layout/footer.css";
import "../../css/layout/header.css";
import { UsersContext } from "../../context/UsersContext";
import { useOutletContext } from 'react-router-dom';

export default function Main() {
  console.log(`
                                                                          ,,
                                                                       /  ,
                                                                      /   /
                                                                     /   /
                                                                    /   /
    ___________________________                                    /   /
    ⎢                         ⎥                                   /   /
    ⎢    오늘의집 5조 화이팅   ⎥                                  /   /
    ⎢____    _________________⎥                                 /   /
          \\/    ,      ,,                                      /   /
               /\x1b[91m@\x1b[0m\\____/\x1b[91m@\x1b[0m \\                                ____/   /             
              /           \\                         _____/        /__
        /" \\ / •    •      \\                     __/             /  \x1b[91m@@\x1b[0m"\\
        \\    \x1b[91m@@\x1b[0m  ㅅ  \x1b[91m@@\x1b[0m    /___             ___/                /    _/
       /" \\   \\                 \\__________/                    |__/ "\\
       \\   \\                                                   /      /
        \\    \\  __                                                  _/
         \\                                                       __/                     
           \\_                                             ______/
              \\ ___                                    __/
                    \\__                             __/
                        \\_____                _____/
                              \\______________/                                                                                                                                                                                                                                                                                                                                                                                                                           

`)
  const getSearch = (e) => {



  }



  const searchKeyword = useOutletContext();
  const [data, setData] = useState('');

  const handleDataChange = (value) => {
    setData(value);
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
