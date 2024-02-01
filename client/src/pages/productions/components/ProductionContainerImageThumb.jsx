import React, { useState } from "react";
import ShopitemTimeCount from "../../main/shopitem/components/ImageWrap/ShopitemTimeCount";


export default function ProductionContainerImageThumb(props) {

  // const [thumbClass, setThumbClass] = useState(false)
  const [thumbClass, setThumbClass] = useState('production_selling_container_image_thumb_wrap')

  const removeClass = (e) => {

    e.target.classList.remove('active')

  }

  //production_selling_container_image_thumb_wrap active

  function fnThumbClass() {

    if (thumbClass === 'production_selling_container_image_thumb_wrap') {

      setThumbClass('production_selling_container_image_thumb_wrap active')

    } else {

      setThumbClass('production_selling_container_image_thumb_wrap')

    }

  }

  return (

    <>
      <div className={thumbClass}
        onClick={() => { fnThumbClass() }}
        tabIndex={0}
        onBlur={removeClass}
      >
        <fieldset className="production_selling_container_image_thumb">
          <img srcSet={props.prdImg} alt="상품상세페이지썸네일" />
          <ShopitemTimeCount isNew={true} />
        </fieldset>
      </div>
    </>

  );

}