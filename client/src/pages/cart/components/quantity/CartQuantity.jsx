import { useState } from "react";
import { FiMinus,FiPlus} from "react-icons/fi";
// 오늘의집에는 button이 클릭이 가능하고, 클릭하면 수량을 바꾸는 모달이 뜨는데 이를 구현하지는 않을 예정
export default function CartQuantity({cart_id,getQty,qty,price_origin,sale_price,price_change}){
  let itemQty;
  (qty === undefined) ? itemQty = 1 : itemQty = qty;
  let [count,setCount] = useState(itemQty)
  let qtyFlag = false
  const quantityCheck = ((checkFlag)=>{
    if(checkFlag === 'minus'){
      if(count <= 1){
        alert('1개 이상 구매 가능합니다')
      }else{
        setCount(--count)
        qtyFlag = true;
      }
    }else{
      if(count >= 10){
        alert('10개를 초과하여 구매할 수 없습니다.')
      }else{
        setCount(++count)
        qtyFlag = true;
        console.log(sale_price);
      }
    }
    console.log(price_origin);
    getQty({qty:count,cart_id:cart_id,checkFlag:checkFlag,qtyFlag,qtyFlag,price_origin:price_origin,sale_price:sale_price,price_change:price_change});
  })

  return(
    <div className="carted_product_quantity_wrap">
      <span className="carted_product_quantity_span" onClick={()=>quantityCheck("minus")}><FiMinus/></span>
      <button className="carted_product_quantity_btn">{count}</button>
      <span className="carted_product_quantity_span" onClick={()=>quantityCheck("plus")}><FiPlus/></span>
    </div>
  );
}