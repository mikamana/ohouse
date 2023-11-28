import React, { useState } from "react";
import ShopitemTimeCount from "../../main/shopitem/components/ImageWrap/ShopitemTimeCount";


export default function ProductionContainerImageThumb() {

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
          <img srcSet="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/164032981730100118.jpg?gif=1&w=640&h=640&c=c&webp=1" alt="상품상세페이지썸네일" />
          <ShopitemTimeCount isNew={true} />
        </fieldset>
      </div>
    </>

  );

}