import React, { useEffect, useState } from 'react'
import ShopitemContents from '../../../../main/shopitem/ShopitemContents';
import "../../../../../css/sub/store/storehome/todaydeal/storehometodaydeal.css";
import axios from 'axios';
import SubtitleMore from '../../../../main/subtitle_more/Subtitle_more';
// import "../../../../../css/main/shopitem/shopitem.css";

export default function StoreHomeTodayDealSection() {
  const [shopArray, setShopArray] = useState([]);
  useEffect(() => {
    axios('http://127.0.0.1:8000/product/shopitem')
      .then(result => setShopArray(result.data))
  }, [])
  return (
    <>
      <SubtitleMore
      title={'오늘의딜'}
      />
      <div key="store_todaydeal_section" className="store_todaydeal_section sub_inner">
        {
          shopArray.slice(0, 4).map((list, i) =>
            <ShopitemContents
              shopitemList={list}
              timecount={true}
              key={i}
            />
          )
        }
      </div>
    </>
    );
}

