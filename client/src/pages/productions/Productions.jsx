import React, { useEffect, useState, createContext } from "react";
import ProductionsCate from "./components/ProductionsCate";
import ProductionsContainer from "./components/ProductionsContainer";
import ProductionsNav from "./components/ProductionsNav";
import ProductionsPrdWrap from "./components/ProductionsPrdWrap";
import "../../css/production/production.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductContext, prdContext } from "../../context/ProductContext";
export default function Productions() {

  const [count, setCount] = useState('');
  const [quiryCount, setQuiryCount] = useState('');
  const [list, setList] = useState([]);
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [priceOrigin, setPriceOrigin] = useState(0);
  const params = useParams();
  const [qtyFlag, setQtyFlag] = useState(false);
  //scroll
  const [scroll, setScroll] = useState(false);



  const getCount = (e) => {

    setCount(e.sum.sum)

  }

  const getQuiryCount = (e) => {

    setQuiryCount(e)

  }

  const getPrice = (e) => {

    setPrice(list.sale_price * e.qty)
    setQty(e.qty)
    setQtyFlag(e.qtyFlag)

  }

  useEffect(() => {

    axios({

      method: "get",
      url: `http://192.168.50.31:8001/production/${params.pid}`

    }).then((result) => {

      setList(result.data[0])

    })

  }, [])

  let scry;

  useEffect(() => {
    window.scrollTo(0, 0);
    //시작위치 정해주기
    window.addEventListener("scroll", fnScroll)
  }, [])

  const fnScroll = (e) => {

    scry = window.scrollY

    if (scry > 200) {

      setScroll(true)

    } else {
      setScroll(false)
    }

  }

  const fnToScroll = (e) => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  return (

    <ProductContext>
      <section className="production_selling_wrap">
        <div className="production_selling_inner inner">
          <ProductionsCate />
          <ProductionsContainer count={count}
            getPrice={getPrice}
            price={price}
            qty={qty}
            qtyFlag={qtyFlag}
          />
        </div>
        <ProductionsNav count={count}
          quiryCount={quiryCount}
        />
        <ProductionsPrdWrap
          getCount={getCount}
          getQuiryCount={getQuiryCount}
          price={price}
          priceOrigin={list.sale_price}
          subTitle={list.product_name}
          getPrice={getPrice}
          qty={qty}
          qtyFlag={qtyFlag}
        />
        {scroll ? <button className="production_scroll_btn" onClick={fnToScroll}></button> : null}
      </section >
    </ProductContext>

  )

}