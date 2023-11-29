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
            <svg xmlns={list.svg} width="36" height="36" fill="none"><rect width="27" height="29" x="6.54" y="3.59" fill="#DBDBDB" stroke="#000" strokeLinejoin="round" rx="2.5" transform="rotate(4 6.54 3.6)"></rect><rect width="27" height="29" x="2.5" y="1.5" fill="#fff" stroke="#000" strokeLinejoin="round" rx="2.5"></rect><rect width="22" height="22" x="5" y="4" fill="#FFE2C7" rx="1"></rect><path fill="#fff" fillRule="evenodd" d="m14 7 5 .45v3.5l-5-.45V7zm0 4.5V15l5 .45v-3.5l-5-.45zm6 .55v3.5l5 .45v-3.5l-5-.45zm5-.55V8l-5-.45v3.5l5 .45z" clipRule="evenodd"></path><path fill="#E6A87C" fillRule="evenodd" d="m5 19 22 2v7L5 26v-7z" clipRule="evenodd"></path><path fill="#F1C8A3" fillRule="evenodd" d="M5 3.45h5v16l-5 4v-20z" clipRule="evenodd"></path></svg>
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