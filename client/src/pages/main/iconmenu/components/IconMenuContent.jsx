// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IconMenuContent({image, name}){
  return (
    <>
      <Link to="#">
        <img src={image} className="iconmenu_img" alt="" />
        <p>{name}</p>
      </Link>
    </>
  );
}