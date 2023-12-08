import React, { useEffect, useState } from 'react'

export default function ProductionsInfoQty(props) {

  let [qty, setQty] = useState(props.qty);
  let [price, setPrice] = useState(props.price);

  const handlerQty = (checkFlag) => {

    if (checkFlag === "minus") {
      if (qty > 1) {
        setQty(--qty)
      } else {
        alert('최소 수량은 1개 입니다.')
      }
    }

    if (checkFlag === "plus") {
      if (qty < 10) {
        setQty(++qty)
      } else {
        alert('최대 수량은 10개 입니다.')
      }
    }

    let prc = props.price * qty;
    console.log(props.qty);
    setPrice(prc)
    props.getQty({ qty: qty, price: price });

  }

  useEffect(() => {

    setQty(props.qty)

  }, [props.qty]);

  return (
    <>
      <div className="production_qty_wrap">
        <p className='production_qty_sub_title'>{props.subTitle}</p>
        <div className='production_qty_price_wrap'>
          <div className='production_qty_btn_wrap'>
            <span className='production_qty_btn_total' onClick={() => {
              handlerQty("minus")
            }}>-</span>
            <span className='production_qty_btn_length'>{qty}</span>
            <span className='production_qty_btn_total' onClick={() => {
              handlerQty("plus")
            }}>+</span>
          </div>
          <span className='production_qty_price'>{props.price ? props.price : props.priceOrigin} 원</span>
        </div>
      </div>
    </>
  )
}
