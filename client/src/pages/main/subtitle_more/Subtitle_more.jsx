import React from "react";
import { Link } from "react-router-dom";
import "../../../css/main/subtitle_more/subtitle_more.css";

export default function SubtitleMore({ title, subTitle }) {
  return (
    <div className="inner">
      <div className="subtitle_more">
        <div className="subtitle_more_text">
          <div className="subtitle_more_title">
            {title}
          </div>
          <div className="subtitle_more_sub">
            {subTitle && <div className="subtitle_more_sub">{subTitle}</div>}
          </div>
        </div>
        <div>
          <Link to={``}>
            <button className="subtitle_more_button" type="button">더보기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}