import React from "react";
import ProductionContainerImageThumb from "./ProductionContainerImageThumb";
import ProductionContainerImageList from "./ProductionContainerImageList";

export default function ProductionContainerImageBox() {

  return (

    <>
      <fieldset className="production_selling_container_image_box">
        <ProductionContainerImageList />
        <ProductionContainerImageThumb />
      </fieldset>
    </>

  );

}