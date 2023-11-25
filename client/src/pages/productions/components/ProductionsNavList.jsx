import React, { useState } from "react";
import { Link } from "react-router-dom";



export default function ProductionsNavList() {
  const [showList, setShowList] = useState(0)

  return (

    <>
      <ul className="production_selling_navigion_list">
        <li className={showList === 0 ? 'production_selling_navigion_list_li active' : 'production_selling_navigion_list_li'} onClick={() => setShowList(0)}>
          <Link to="#" className="production_selling_navigion_link">
            <span className="production_selling_navigion_info_text">상품정보</span>
          </Link>
        </li>
        <li className={showList === 1 ? 'production_selling_navigion_list_li active' : 'production_selling_navigion_list_li'} onClick={() => setShowList(1)}>
          <Link to="#" className="production_selling_navigion_link">
            <span className="production_selling_navigion_info_text">리뷰<span className="production_selling_navigion_point"> 282</span></span>
          </Link>
        </li>
        <li className={showList === 2 ? 'production_selling_navigion_list_li active' : 'production_selling_navigion_list_li'} onClick={() => setShowList(2)}>
          <Link to="#" className="production_selling_navigion_link">
            <span className="production_selling_navigion_info_text">문의<span className="production_selling_navigion_point"> 27</span></span>
          </Link>
        </li>
        <li className={showList === 3 ? 'production_selling_navigion_list_li active' : 'production_selling_navigion_list_li'} onClick={() => setShowList(3)}>
          <Link to="#" className="production_selling_navigion_link">
            <span className="production_selling_navigion_info_text">배송/환불</span>
          </Link>
        </li>
        <li className={showList === 4 ? 'production_selling_navigion_list_li active' : 'production_selling_navigion_list_li'} onClick={() => setShowList(4)}>
          <Link to="#" className="production_selling_navigion_link">
            <span className="production_selling_navigion_info_text">추천</span>
          </Link>
        </li>
      </ul>
    </>

  );

}