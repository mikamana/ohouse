import React from "react";
import { Link } from "react-router-dom";

export default function ProductionsCate() {

  return (
    <>
      <nav className="production_selling_category_gnb">
        <ul className="production_selling_category_list">
          <li className="production_selling_category_list_li">
            <Link to="#" className="production_selling_category_list_link">
              데코•식물
            </Link>
          </li>
          <li className="production_selling_category_list_li">
            <Link to="#" className="production_selling_category_list_link">
              크리스마스
            </Link>
          </li>
          <li className="production_selling_category_list_li">
            <Link to="#" className="production_selling_category_list_link">
              트리•오너먼트
            </Link>
          </li>
          <li className="production_selling_category_list_li">
            <Link to="#" className="production_selling_category_list_link">
              무장식트리
            </Link>
          </li>
        </ul>
      </nav>
    </>

  );

}