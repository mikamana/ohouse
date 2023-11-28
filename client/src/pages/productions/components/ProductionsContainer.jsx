import React from "react";
import ProductionContainerImageBox from "./ProductionContainerImageBox";
import ProductionContainerInfoList from "./ProductionContainerInfoList";
export default function ProductionsContainer() {

  return (

    <>
      <div className="production_selling_container">
        <div className="production_selling_container_left">
          <ProductionContainerImageBox />
        </div>
        <div className="production_selling_container_right">
          <ProductionContainerInfoList />
        </div>
      </div>
    </>


  );

}