import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import HeaderLogoWritePopup from "./HeaderLogoWritePopup";

export default function HeaderLogoWrite({handleClick, showWrite}) {
  

  return (
    <div className="header_logo_write">
      <button type="button" onClick={(e)=>handleClick(e)} id='write'>
        <span>글쓰기</span><FiChevronDown className="header_logo_write_icon" />
      </button>
      {/* "header_nav_popup_write" */}
      <div className={showWrite}>
        <HeaderLogoWritePopup />
      </div>
    </div>
  );
}