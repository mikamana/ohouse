import React, { useEffect, useRef, useState } from 'react'
import ShopitemContents from '../../../../main/shopitem/ShopitemContents';
import StoreHomeFilterBar from './components/StoreHomeFilterBar';
import "../../../../../css/sub/store/storehome/popularproducts/storehomepopularproducts.css";
import axios from 'axios';

export default function StoreHomePopularProductsSection() {
  const popularLine = useRef(null)
  const [loading, setLoading] = useState(false);
  const [shopArray, setShopArray] = useState([]);
  let page = useRef(1)
  const callback = (entries, observer) => {
    if (!entries[0].isIntersecting) return
    if (loading) return
    getItem();
    page.current += 1;
  }

  const observer = new IntersectionObserver(callback);

  function getItem() {
    setLoading(true)
    axios.get(`http://127.0.0.1:8000/product/popular/${page.current}`)
      .then(result => {
        setShopArray(prev => [...prev, ...result.data])
      })
    setLoading(false)
  }
  useEffect(() => {
    if (popularLine.current) {
      observer.observe(popularLine.current)
    }
  }, [])

  return (
    <div key="store_home_popularproducts_section" className="store_home_popularproducts_section sub_inner">
      <h1>인기 상품</h1>
      <StoreHomeFilterBar />
      <div className='store_home_popularproducts_container'>
        {
          shopArray.map((list, i) =>
            <ShopitemContents
              shopitemList={list}
              key={i}
            />
          )
        }
      </div>
      <div className='observe_line' ref={popularLine}></div>
    </div>
  );
}

