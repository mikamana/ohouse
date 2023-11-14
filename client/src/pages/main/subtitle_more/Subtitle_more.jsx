import React from "react";
import { Link } from "react-router-dom"

export default function SubtitleMore(props) {
  return (
    <div className="inner">
      <div className="subtitle_more">
        <div className="subtitle_more_text">
          <div className="subtitle_more_title">
            {/* 이런 사진 찾고있나요? */}
            {props.title}
          </div>
          {props.subTitle && <div className="subtitle_more_sub">{props.subTitle}</div>}
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