import React from "react";
import ProductionsCate from "./components/ProductionsCate";
import ProductionsContainer from "./components/ProductionsContainer";
import ProductionsNav from "./components/ProductionsNav";

export default function Productions() {


  return (

    <>
      <section className="production_selling_wrap">
        <div className="production_selling_inner inner">
          <ProductionsCate />
          <ProductionsContainer />
        </div>
        <ProductionsNav />
        <div className="ddd">
          가나
        </div>
      </section >
    </>

  )

}