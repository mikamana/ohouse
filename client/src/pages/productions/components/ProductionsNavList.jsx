import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductionsNavList(props) {
  const [showList, setShowList] = useState(0);
  const [scrollList, setScrollList] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    //시작위치 정해주기
    window.addEventListener("scroll", fnScroll)
  }, [])

  function fnScroll(e) {

    let scry = window.scrollY

    if (scry >= 1000 && scry < 3800) {

      setShowList(0)

    }

    if (scry >= 3800 && scry < 6000) {

      setShowList(1)

    }

  }

  function handleScroll(scry) {

    setScrollList(scry)

  }

  useEffect(() => {

    window.scrollTo({
      top: scrollList
    });

  }, [scrollList]);

  return (

    <>
      <ul className="production_selling_navigion_list">
        <li className={showList === 0 ? 'production_selling_navigion_list_li active' : 'production_selling_navigion_list_li'} onClick={() => {
          setShowList(0)
          handleScroll(1000)
        }}>
          <Link to="#" className="production_selling_navigion_link">
            <span className="production_selling_navigion_info_text">상품정보</span>
          </Link>
        </li>
        <li className={showList === 1 ? 'production_selling_navigion_list_li active' : 'production_selling_navigion_list_li'} onClick={() => {
          setShowList(1)
          handleScroll(3800)
        }}>
          <Link to="#" className="production_selling_navigion_link">
            <span className="production_selling_navigion_info_text">리뷰<span className="production_selling_navigion_point"> {props.count}</span></span>
          </Link>
        </li>
      </ul>
    </>

  );

}