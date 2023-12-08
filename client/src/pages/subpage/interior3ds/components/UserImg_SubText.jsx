import React from "react";

export default function UserImg_SubText({address, rewie}){
  return(
    <div>
      <p className="userimg_address">{address}</p>
      <p className="userimg_rewie">{rewie}</p>
    </div>
  );
}