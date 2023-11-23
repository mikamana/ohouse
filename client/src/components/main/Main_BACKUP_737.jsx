import React from "react";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from 'react-router-dom';



export default function Main() {

  return (
    <>
      <Banner />
<<<<<<< HEAD
      <Header>
        
      </Header>
      <Contents>
      <Cart/>
      </Contents>
      <Footer>

      </Footer>
=======
      <Header />
      <Outlet />
      <Footer />
>>>>>>> test
    </>

  );
}
