import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiHeartLight } from "react-icons/pi";

export default function RecommandImgId(props) {
  const [likeClick, setLikeClick] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setLikeClick(!likeClick)
  }//handleClick

  return (
    <div className="recommand_id_wrap">
      <Link className="recommand_id_linkBox" to="#">
        <span className="recommand_id_idimg_wrap">
          <img className="recommand_id_idimg" src={props.idimg} alt="프로필사진" />
        </span>
        <p className="recommand_id_content">
          {props.id}
        </p>
      </Link>
      <div className="recommand_id_likebtn" onClick={handleClick}>
        <PiHeartLight className="recommand_id_likebtn_heart" />
        <span className="recommand_id_likenum">
          {props.likenum}
        </span>
      </div>
    </div>
  );
}