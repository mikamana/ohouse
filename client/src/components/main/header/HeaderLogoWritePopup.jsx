import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderLogoWrite() {
  const [popupWriteList, SetPopupWriteList] = useState([]);

  useEffect(() => {
    fetch('/data/header/Popup_write.json')
      .then((res) => res.json())
      .then((data) => {
        SetPopupWriteList(data)
      })
      .catch((err) => console.err)
  }, [])

  return (
    <ul className="header_nav_popup_write_ul">
      {popupWriteList.map(list =>
        <li key={list.id}>
          <Link to="/" className="header_nav_popup_write_ul_li_a">
            <img src={list.img} alt="" />
            <div className="textBox">
              <div className="info">{list.info}</div>
              <div className="detail">{list.detail}</div>
            </div>
          </Link>
        </li>
      )}
    </ul>
  );
}