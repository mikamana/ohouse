import React from "react";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from 'react-router-dom';
import "../../css/layout/banner.css";
import "../../css/layout/footer.css";
import "../../css/layout/header.css";

export default function Main() {
  console.log(`
                                                                          ,,
                                                                       /  ,
                                                                      /   /
                                                                     /   /
                                                                    /   /
    ___________________________                                    /   /
    ⎢                         ⎥                                   /   /
    ⎢   5조 화이팅 오늘의집    ⎥                                  /   /
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
  
\x1b[91m \x1b[0m
`)
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
