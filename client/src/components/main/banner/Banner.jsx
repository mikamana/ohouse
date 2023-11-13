import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {

  return (
    <>
      <div className="banner_wrap">
        <Link to="#" className="banner_wrap_left"></Link>
        <Link to="#" className="banner_wrap_right"></Link>
      </div>
    </>
  );
}