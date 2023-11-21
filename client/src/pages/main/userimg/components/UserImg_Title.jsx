import React from "react";

export default function UserImg_Title({name, title}){
  return(
    <div>
      <p className={name}>{title}</p>
    </div>
  );
}