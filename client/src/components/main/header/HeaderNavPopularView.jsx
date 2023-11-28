import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderNavPopularView() {
  const [popularList, SetPopularList] = useState([]);

  useEffect(() => {
    fetch('data/header/Popularview_list.json')
      .then((res) => res.json())
      .then((data) => {
        SetPopularList(data)
      })
      .catch((err) => console.err)
  }, [])

  return (
    <ul>
      {popularList.map(list =>
        <li key={list.num}>
          <Link to="/" className="header_nav_popular_view_popup">
            <div className="header_nav_popular_view_list">
              <span>{list.num}</span>
              <span><img src={list.img} alt="" /></span>
              <span>{list.item}</span>
            </div>
          </Link>
        </li>
      )}
    </ul>
  );
}