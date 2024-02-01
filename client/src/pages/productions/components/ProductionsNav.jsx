import React from "react";
import ProductionsNavList from "./ProductionsNavList";

export default function ProductionsNav(props) {


  return (

    <>
      <div className="production_selling_navigion_wrap">
        <div className="production_selling_navigion_inner inner">
          <nav className="production_selling_navigion">
            <ProductionsNavList count={props.count}
              quiryCount={props.quiryCount}
            />
          </nav>
        </div>
      </div>
    </>

  );

}