import React from "react";
import ProductionsCate from "./components/ProductionsCate";
import ProductionsContainer from "./components/ProductionsContainer";
import ProductionsNav from "./components/ProductionsNav";
import ProductionsPrdWrap from "./components/ProductionsPrdWrap";
import "../../css/production/production.css";
export default function Productions() {



  return (

    <>
      <section className="production_selling_wrap">
        <div className="production_selling_inner inner">
          <ProductionsCate />
          <ProductionsContainer />
        </div>
        <ProductionsNav />
        <ProductionsPrdWrap />
      </section >
    </>

  )

}