import React, { useEffect, useState } from 'react'
import ShopitemContents from '../../../../main/shopitem/ShopitemContents';
import StoreHomeFilterBar from './components/StoreHomeFilterBar';
import "../../../../../css/sub/store/storehome/popularproducts/storehomepopularproducts.css";
import axios from 'axios';

export default function StoreHomePopularProductsSection() {
  const [shopArray, setShopArray] = useState([]);
  useEffect(() => {
    axios('http://127.0.0.1:8000/product/popular')
      .then(result => setShopArray(result.data))
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
    </div>
  );
}

