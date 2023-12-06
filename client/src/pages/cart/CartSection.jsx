import React, { useEffect, useState } from "react";
import CartContentsWrap from './CartContentsWrap';
import CartSidebarsWrap from './CartSidebarWrap';
import axios from "axios";
import { getUser } from "../utill/sessionStorage";
import { useNavigate } from "react-router-dom";

export default function CartSection() {
  const userInfo = getUser();
  const [cartList, setCartList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [count, setCount] = useState(0);
  const [sumPrice, setSumPrice] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);
  const [salePrice,setSalePrice] = useState(0);
  const cl = [];
  let totPriceOrigin = 0;
  let totPrice = 0;
  let totPriceSale = 0;
const navigate = useNavigate();

  useEffect(() => {
    axios(`http://127.0.0.1:8000/cart/${userInfo.id}`)
      .then(result => {
        if(!result.data.length){
          return navigate('/cart')
        }
        const countFlag = (result)=>{
          if(result.data.length !== 0){
            return result.data[0].cnt
          }else{
            return undefined
          }
        }
        setCartList(result.data);
        result.data.map((item) => {
          cl.push(item.cart_id);
        })
        setCheckList(cl);
        setCount(countFlag(result));
        
      })
  }, [])
useEffect(()=>{
  const newData = cartList.filter(item => checkedItems.includes(`${item.cart_id}`));
  fnCalc(newData)
},[checkedItems])

  function fnCalc(calcList){
    console.log(calcList);
    totPriceOrigin = calcList.reduce((total,item)=>total+(item.price_origin*item.qty),0)
    totPriceSale = calcList.reduce((total,item)=>total+(Math.ceil(item.price_change / 100) * 100 *item.qty),0)
    totPrice = calcList.reduce((total,item)=>total+(parseInt(item.sale_price.replace(/,/g, ''))*item.qty),0)
    setSumPrice(totPriceOrigin);
    setSalePrice(totPriceSale);
    setTotalPrice(totPrice); 
  }

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckedItems((prev) => [...prev, id])
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== id))
    }
  }


  const allCheckedHandler = (e) => {
    if (e.target.checked) {
      setCheckedItems(checkList.map((item) => `${item}`))
    } else {
      setCheckedItems([]);
    }
    console.log(`allCheck = `, e.target.checked)
  }



  const getQty = (e) =>{
    if(e.checkFlag === 'plus' && e.qtyFlag){
      setSumPrice(sumPrice + e.price_origin)
      setSalePrice(salePrice + Math.ceil(e.price_change / 100) * 100)
      setTotalPrice(totalPrice + parseInt(e.sale_price.replace(/,/g, '')))
    }else if(e.checkFlag === 'minus' && e.qtyFlag){
      setSumPrice(sumPrice - e.price_origin)
      setSalePrice(salePrice - Math.ceil(e.price_change / 100) * 100)
      setTotalPrice(totalPrice - parseInt(e.sale_price.replace(/,/g, '')))
    }
    updateCart(e.cart_id,e.qty);
  }

  function removeCart(cart_id){
    if(checkedItems.length === 0){
      console.log(cart_id);
      axios.post(`http://127.0.0.1:8000/cart/${userInfo.id}/remove`, {cart_id})
    .then(result=>{window.location.reload()})
    return
    }


  }

  function removeSelectCart(){
    axios.post(`http://127.0.0.1:8000/cart/${userInfo.id}/remove`, checkedItems)
    .then(result=>{window.location.reload()})
  }

  const updateCart = (cart_id,qty)=>{
  axios.put(`http://127.0.0.1:8000/cart/update/${cart_id}/${qty}`)
  .then(result=>{})
  };



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
              cartList={cartList}
              removeCart={removeCart}
              removeSelectCart={removeSelectCart}
              getQty={getQty}
            />
            <CartSidebarsWrap
              handleOrder={handleOrder}
              cartList={cartList}
              count={count}
              sumPrice={sumPrice}
              totalPrice={totalPrice}
              salePrice={salePrice}
            />
          </div>
        </div>
  );
}