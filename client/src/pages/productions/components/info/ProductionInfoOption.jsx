import React from "react";


export default function ProductionInfoOption() {

  return (


    <>
      <p className="production_selling_select_info_wrap">
        <select name="colorSelect" className="production_selling_select">
          <option value="color">
            COLOR
          </option>
          <option value="color">
            COLOR
          </option>
          <option value="color">
            COLOR
          </option>
          <option value="color">
            COLOR
          </option>
        </select>
        <span className="production_selling_select-input__icon">
          <svg class="icon" width="10" height="10" preserveAspectRatio="xMidYMid meet"><path fill-rule="evenodd" d="M0 3l5 5 5-5z"></path></svg>
        </span>
      </p>
    </>

  );

}