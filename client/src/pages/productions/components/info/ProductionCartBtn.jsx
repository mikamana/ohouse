import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../../utill/sessionStorage.js";
import axios from "axios";
import { useEffect } from "react";

export default function ProductionCartBtn(props) {
  const navigate = useNavigate();
  const params = useParams();
  const userInfo = getUser();

  const handlerFetch = () => {

    if (userInfo) {


      const cartProduct = {

        id: userInfo.id,
        pid: params.pid,
        qty: props.qty,
        price: props.price

      };
      let cartClick;

      axios({

        method: "post",
        url: `http://127.0.0.1:8000/cart/new`,
        data: cartProduct

      }).then((result) => {

        if (result.data === "ok") {
          alert("장바구니에 추가되었습니다.")
          cartClick = window.confirm("장바구니로 이동 하시겠습니까?")
          if (cartClick) {
            navigate(`/cart/${userInfo.id}`)
            window.location.reload()

          } else {

          navigate(`/cart/${userInfo.id}`)
          window.location.reload()

          }
        } else {

          alert("이미 추가된 상품입니다. 상품의 개수가 변경되었습니다.")

          cartClick = window.confirm("장바구니로 이동 하시겠습니까?")

          if (cartClick) {
            navigate(`/cart/${userInfo.id}`)

          } else {

            window.location.reload()

          }


        }


      })



    } else {

      alert("로그인 후 이용 가능합니다.")
      navigate("/login")

    }




  }

  const fnpurchase = () => {

    if (userInfo) {


      alert("결제 페이지로 이동합니다.")
      navigate("/orders")


    } else {
      alert("로그인 후 이용 가능합니다.")
      navigate("/login")
    }


  }

  return (
    <>
      <p className="production_selling_button_wrap">
        <button className="production_selling_button_cart" onClick={handlerFetch}>장바구니</button>
        <button className="production_selling_button_buy" onClick={fnpurchase}>바로구매</button>
      </p>
    </>


  );
}