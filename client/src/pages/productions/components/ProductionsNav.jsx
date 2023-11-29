import React from "react";
import ProductionsNavList from "./ProductionsNavList";

export default function ProductionsNav() {


  return (

    <>
      <div className="production_selling_navigion_wrap">
        <div className="production_selling_navigion_inner inner">
          <nav className="production_selling_navigion">
            <ProductionsNavList />
          </nav>
        </div>
      </div>
    </>

  );

}