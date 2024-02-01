
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductionScrapBtn from "./ProductionScrapBtn";
import { getUser } from "../../../utill/sessionStorage";
import ModalToggle from "../ModalToggle";

export default function ProductionInfoIconWrap() {

  const userInfo = getUser();
  const [toggle, setToggle] = useState(false);

  const fnToggle = (e) => {

    setToggle(!e)

  }

  return (
    <>
      {userInfo ?
        <p className="production_selling_info_title_div">
          {toggle ?
            <ModalToggle text={"스크랩 하였습니다."} toggle={toggle} />
            : null
          }
          <ProductionScrapBtn fnToggle={fnToggle} />
          <Link to="#" className="production_selling_scrap_icon">
            <svg className="icon" aria-label="공유하기" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M9.64 14.646a4.5 4.5 0 1 1 0-5.292l4.54-2.476a4.5 4.5 0 1 1 .63.795l-4.675 2.55c.235.545.365 1.146.365 1.777s-.13 1.232-.365 1.777l4.675 2.55a4.5 4.5 0 1 1-.63.795l-4.54-2.476zM18 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM6 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM18 23a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path></svg>
          </Link>
        </p>
        : null
      }
    </>
  );

}