import React from "react";
import {Link} from "react-router-dom"

export default function SubtitleMore(){
  return(
  <div className="inner">
    <div className="subtitle_more">
        <div className="subtitle_more_text">
        <div className="subtitle_more_title">
          이런 사진 찾고 있나요?
        </div>

        <div className="subtitle_more_sub">
          좋아하실 만한 인테리어 콘텐츠를 추천해드려요
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