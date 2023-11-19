import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Contents from "./contents/Contents";
import Banner from "./banner/Banner";
import ShopitemSection from "../../pages/main/shopitem/ShopitemSection";
import ShopcateSection from "../../pages/main/shopcate/ShopcateSection";
import Cart from '../../pages/cart/Cart';
// merge하기 전 Main 컴포넌트 지우거나 정리하고 하기

export default function Main() {

  return (

    <>
      <Banner />
      <Header>
        
      </Header>
      <Contents>
      {/* <ShopitemSection/> */}
      {/* <ShopcateSection/> */}
      <Cart/>
      </Contents>
      <Footer>

      </Footer>
    </>

  );

}