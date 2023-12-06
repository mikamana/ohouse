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
  const [allCheck,setAllCheck] = useState(false);
  const [sumCheck,setSumCheck] = useState(false);
  const [trueCheck,setTrueCheck] = useState(false);
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
        // totPriceOrigin = result.data.reduce((total,item)=>total+(item.price_origin*item.qty),0)
        // totPriceSale = result.data.reduce((total,item)=>total+(Math.ceil(item.price_change / 100) * 100 *item.qty),0)
        // totPrice = result.data.reduce((total,item)=>total+(parseInt(item.sale_price.replace(/,/g, ''))*item.qty),0)
        // setSumPrice(totPriceOrigin);
        // setSalePrice(totPriceSale);
        // setTotalPrice(totPrice);
      })
      // cartList.map((item) => {
      //   setCheckList((checkList)=>[...checkList, { id: item.cart_id }])
      //   console.log(cl);
      //   console.log(checkList.length);
      //   console.log(checkList);
      // })
  }, [])

  function fnPriceSum(id){
    let priceArr = [...cartList]
    const filterdArr = priceArr.filter((item)=> item.cart_id === parseInt(id))
    filterdArr.map((item)=>{
      setSumPrice((prev)=>prev + item.price_origin)
      setSalePrice((prev)=>prev + Math.ceil(item.price_change / 100) * 100)
      setTotalPrice((prev)=>prev + parseInt(item.sale_price.replace(/,/g, '')))
    })
  }
  function fnPriceSubtract(id){
    let priceArr = [...cartList]
    const filterdArr = priceArr.filter((item)=> item.cart_id === parseInt(id))
    filterdArr.map((item)=>{
      setSumPrice((prev)=>prev - item.price_origin)
      setSalePrice((prev)=>prev - Math.ceil(item.price_change / 100) * 100)
      setTotalPrice((prev)=>prev - parseInt(item.sale_price.replace(/,/g, '')))
    })
  }

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckedItems((prev) => [...prev, id])
      fnPriceSum(id)
      setTrueCheck(true);
      console.log('checkhandler O');
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== id))
      fnPriceSubtract(id)
      setTrueCheck(false);
      console.log('checkhandler X');
    }
  }

  const checkAllCheck = async ()=>{
    setCheckedItems(checkList.map((item) => `${item}`))
    checkedItems.map((item)=>{
      fnPriceSum(item)
    })
  }

    


  useEffect(()=>{
    console.log(checkedItems);
      checkedItems.map((item)=>{
        fnPriceSum(item)
      })
    
  },[allCheck])

  // useEffect(()=>{
  //   console.log('빼기이펙트');
  //   console.log(checkedItems);
  //   checkedItems.map((item)=>{
  //     fnPriceSubtract(item)
  //   })
  // },[sumCheck])

  const allCheckedHandler = (e) => {
    if (e.target.checked) {
      if(trueCheck){

      }else{
        setAllCheck(!allCheck);
      }
      setCheckedItems(checkList.map((item) => `${item}`))
      console.log('allcheckhandler O');
    } else {
      checkedItems.map((item)=>{
        fnPriceSubtract(item)
      })
      setCheckedItems([]);
      setTrueCheck(false)
      console.log('allcheckhandler X');
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
    if(!checkedItems.length){
      console.log(cart_id);
      axios.post(`http://127.0.0.1:8000/cart/${userInfo.id}/remove`, {cart_id})
    .then(result=>{window.location.reload()})
    return
    }
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