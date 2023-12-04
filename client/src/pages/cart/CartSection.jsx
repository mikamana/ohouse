import React, { useEffect, useState } from "react";
import CartContentsWrap from './CartContentsWrap';
import CartSidebarsWrap from './CartSidebarWrap';
import axios from "axios";
import { getUser } from "../utill/sessionStorage";

export default function CartSection(){
  const userInfo = getUser();
  const [cartList,setCartList] = useState([]);
  const checkList = [
  ]
  console.log(userInfo);
  useEffect(()=>{
    axios(`http://127.0.0.1:8000/cart/${userInfo.id}`)
    .then(result=>{
      setCartList(result.data)
      console.log(result.data);
      console.log(cartList);
      cartList.map((item)=>{
        checkList.push({id : item.check_id})
        console.log(checkList);
      })
    });
  },[])

  const [checkedItems, setCheckedItems] = useState([])

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckedItems((prev) => [...prev, id])
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== id))
    }
  }

  const allCheckedHandler = (e) => {
    if (e.target.checked) {
      setCheckedItems(checkList.map((item) => item.id))
    } else {
      setCheckedItems([]);
    }
  }
  function handleOrder() {
    if (!checkedItems.length) {
      return alert('장바구니가 비어있습니다.')
    }
  }
  return (
    <div className='cart_section sub_inner'>
      <div className='cart_section_container'>
        <CartContentsWrap
          allCheckedHandler={allCheckedHandler}
          checkedItemHandler={checkedItemHandler}
          checkedItems={checkedItems}
          checkList={checkList}
        />
        <CartSidebarsWrap
          handleOrder={handleOrder}
        />
      </div>
    </div>
  );
}