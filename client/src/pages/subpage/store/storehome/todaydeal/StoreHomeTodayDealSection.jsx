import React, { useEffect, useState } from 'react'
import ShopitemContents from '../../../../main/shopitem/ShopitemContents';
import "../../../../../css/sub/store/storehome/todaydeal/storehometodaydeal.css";
// import "../../../../../css/main/shopitem/shopitem.css";

export default function StoreHomeTodayDealSection() {
  const [shopArray, setShopArray] = useState([]);
  useEffect(() => {
    fetch('db/shopitem.json')
      .then(res => res.json())
      .then(data => setShopArray(data))
  }, [])
  return (
    <div key="store_todaydeal_section" className="store_todaydeal_section sub_inner">
      {
        shopArray.slice(0, 4).map((list, i) =>
          <ShopitemContents
            shopitemList={list}
            key={i}
          />
        )
      }
    </div>
  );
}

