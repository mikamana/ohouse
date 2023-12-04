import React, { useEffect, useState } from "react";
import CartContentsWrap from './CartContentsWrap';
import CartSidebarsWrap from './CartSidebarWrap';
import axios from "axios";
import { getUser } from "../utill/sessionStorage";

export default function CartSection() {
  const userInfo = getUser();
  const [cartList, setCartList] = useState([]);

  const [checkedItems, setCheckedItems] = useState([]);

  const [checkList, setCheckList] = useState([]);
  const cl = [];

  useEffect(() => {
    axios(`http://127.0.0.1:8000/cart/${userInfo.id}`)
      .then(result => {
        setCartList(result.data);
        console.log(result.data);
        result.data.map((item) => {
          cl.push(item.cart_id);
          console.log(cl);
        })
        setCheckList(cl);
        
      })
      // cartList.map((item) => {
      //   setCheckList((checkList)=>[...checkList, { id: item.cart_id }])
      //   console.log(cl);
      //   console.log(checkList.length);
      //   console.log(checkList);
      // })
  }, [])
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckedItems((prev) => [...prev, id])
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== id))
    }
  }

  const allCheckedHandler = (e) => {
    if (e.target.checked) {
      console.log(checkList);
      setCheckedItems(checkList.map((item) => `${item}`))
    } else {
      setCheckedItems([]);
    }
    console.log(`allCheck = `, e.target.checked)
  }
  function handleOrder() {
    if (!checkedItems.length) {
      return alert('장바구니가 비어있습니다.')
    }
  }
  function ListCheck() {
    if (checkList) {
      return (
        <div className='cart_section sub_inner'>
          <div className='cart_section_container'>
            <CartContentsWrap
              allCheckedHandler={allCheckedHandler}
              checkedItemHandler={checkedItemHandler}
              checkedItems={checkedItems}
              checkList={checkList}
              cartList={cartList && cartList}
            />
            <CartSidebarsWrap
              handleOrder={handleOrder}
              cartList={cartList && cartList}
            />
          </div>
        </div>
      );
    }
  }
  return (
    ListCheck()
    /*      <div className='cart_section sub_inner'>
          <div className='cart_section_container'>
            <CartContentsWrap
              allCheckedHandler={allCheckedHandler}
              checkedItemHandler={checkedItemHandler}
              checkedItems={checkedItems}
              checkList={checkList}
              cartList={cartList && cartList}
            />
            <CartSidebarsWrap
              handleOrder={handleOrder}
              cartList={cartList && cartList}
            />
          </div>
        </div> */
  );
}