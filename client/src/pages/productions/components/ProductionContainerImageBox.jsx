import React from "react";
import ProductionContainerImageThumb from "./ProductionContainerImageThumb";
import ProductionContainerImageList from "./ProductionContainerImageList";

export default function ProductionContainerImageBox(props) {

  console.log(props.onClick);



  // function handleClick() {

  //   setThumbClass(5)
  //   // console.log("33");

  // }


  return (

    <>
      <fieldset className="production_selling_container_image_box">
        <ProductionContainerImageList />
        <ProductionContainerImageThumb onClick={props.onClick} />
      </fieldset>
    </>

  );

}