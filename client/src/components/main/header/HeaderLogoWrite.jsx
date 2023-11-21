import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import HeaderLogoWritePopup from "./HeaderLogoWritePopup";

export default function HeaderLogoWrite({getWrite}) {
  const [showWrite, setShowWrite] = useState("header_nav_popup_write");
  const toggleWriteMenu = (e) => {
    if (showWrite === "header_nav_popup_write") {
      setShowWrite("header_nav_popup_write active")
    } else {
      setShowWrite("header_nav_popup_write")
    }
  }

  return (
    <div className="header_logo_write">
      <button type="button" onClick={toggleWriteMenu}>
        <span>글쓰기</span><FiChevronDown className="header_logo_write_icon" />
      </button>
      {/* "header_nav_popup_write" */}
      <div className={showWrite}>
        <HeaderLogoWritePopup />
      </div>
    </div>
  );
}