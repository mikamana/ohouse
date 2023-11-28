import React, { useState } from "react";
import ProductionContainerImageBox from "./ProductionContainerImageBox";
import ProductionContainerInfoList from "./ProductionContainerInfoList";
export default function ProductionsContainer(props) {

  const [thumbClass, setThumbClass] = useState(10)

  function handleClick() {

    setThumbClass(5)
    // console.log("33");
  }



  return (

    <>
      <div className="production_selling_container" onClick={() => {

        handleClick()

      }}>
        <div className="production_selling_container_left">
          <ProductionContainerImageBox onClick={handleClick} />
        </div>
        <div className="production_selling_container_right">
          <ProductionContainerInfoList />
        </div>
      </div>
    </>


  );

}