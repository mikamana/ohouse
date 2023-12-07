import React, { useState } from 'react'

export default function ProductionsInfoQty(props) {

  let [qty, setQty] = useState(props.qty);
  let [price, setPrice] = useState(props.price);

  const handlerQty = (checkFlag) => {

    let qtyFlag = false;

    if (checkFlag === "minus") {
      if (qty > 1) {
        qtyFlag = true
        setQty(--qty)
      } else {
        alert('최소 수량은 1개 입니다.')
      }
    }

    if (checkFlag === "plus") {
      if (qty < 10) {
        qtyFlag = true
        setQty(++qty)
      } else {
        alert('최대 수량은 10개 입니다.')
      }
    }


    // let prc = props.price.replace(/,/g, "") * qty;
    let prc = props.price * qty;

    setPrice(prc)
    // let prc = parseInt(props.price) * qty;
    props.getQty({ qtyFlag: qtyFlag, qty: qty, price: price });

  }

  return (
    <>
      <div className="production_qty_wrap">
        <p className='production_qty_sub_title'>{props.subTitle}</p>
        <div className='production_qty_price_wrap'>
          <div className='production_qty_btn_wrap'>
            <span className='production_qty_btn_total' onClick={() => {
              handlerQty("minus")
            }}>-</span>
            <span className='production_qty_btn_length'>{props.qty}</span>
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
