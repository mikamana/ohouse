import React, { useEffect, useState } from 'react'
import ShopitemContents from '../../../../main/shopitem/ShopitemContents';
import StoreHomeFilterBar from './components/StoreHomeFilterBar';
import "../../../../../css/sub/store/storehome/popularproducts/storehomepopularproducts.css";

export default function StoreHomePopularProductsSection() {
  const [shopArray, setShopArray] = useState([]);
  useEffect(() => {
    fetch('db/shopitem.json')
      .then(res => res.json())
      .then(data => setShopArray(data))
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

