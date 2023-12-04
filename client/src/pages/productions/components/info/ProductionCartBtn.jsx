import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../../utill/sessionStorage.js";
import axios from "axios";
import { useEffect } from "react";

export default function ProductionCartBtn(props) {
  // const navigate = useNavigate();
  const params = useParams();
  const userInfo = getUser();
  const [list, setList] = useState([]);

  let handlerFetch = () => {

    const cartProduct = {
      id: userInfo.id,
      pid: params.pid,
      qty: props.qty,
      price: props.price
    };


    axios({

      method: "post",
      url: `http://127.0.0.1:8000/cart/new`,
      data: cartProduct

    }).then((result) => {

      setList(result.data)

    })


  }




  return (
    <>
      <p className="production_selling_button_wrap">
        <button className="production_selling_button_cart" onClick={handlerFetch}>장바구니</button>
        <button className="production_selling_button_buy">바로구매</button>
      </p>
    </>


  );
}