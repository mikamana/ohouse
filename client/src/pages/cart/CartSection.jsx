import React, { useEffect, useState } from "react";
import CartContentsWrap from './CartContentsWrap';
import CartSidebarsWrap from './CartSidebarWrap';
import axios from "axios";
import { getUser } from "../utill/sessionStorage";

export default function CartSection(){
  const userInfo = getUser();
  console.log(userInfo);
  useEffect(()=>{
    axios(`http://127.0.0.1:8000/cart/${userInfo.id}`)
    .then(result=>console.log(result.data));
  },[])
  const checkList = [
    {
      id: '체크1',
    }, 
    {
      id: '체크2',
    }, 
    {
      id: '체크3',
    }, 
    {
      id: '체크4',
    }, 
  ]
  const [checkedItems, setCheckedItems] = useState([])

  const checkedItemHandler = (id, isChecked) =>{
    if(isChecked){
      setCheckedItems((prev) => [...prev, id])
      console.log(checkedItems);
    }else{
      setCheckedItems(checkedItems.filter((item)=>item !== id))
      console.log(checkedItems);
    }
  }

  const allCheckedHandler = (e) => {
    if (e.target.checked) { 
      setCheckedItems(checkList.map((item) => item.id))
    } else {
      setCheckedItems([]);
    }
    console.log(`allCheck = `, e.target.checked)
  }
  function handleOrder(){
    if(!checkedItems.length){
      return alert('장바구니가 비어있습니다.')
    }
    console.log(checkedItems);
  }
  return(
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