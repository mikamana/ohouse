import React from "react";
import "../../../../css/sub/topics/channel/channel.css";
import { Link } from "react-router-dom";

export default function Channel(){
  return(
    <>
      <div className="channel_container inner">
        <h2>마음에 드는 채널을 골라보세요</h2>
        <Link to={''}>
          <div className="channel_title_box">
            <p className="channel_title_hash">#나도있다크리스마스템</p>
            <div className="channel_title_sub">
              <span>700명 활동 중</span>・<span>1,944개의 콘텐츠</span>
            </div>
          </div>
          <div className="channel_image_box">
            <div>
              <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/170012089869577813.png?w=256&h=341.3333333333333&c=c" alt="" />
            </div>
            <div>
              <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/170012089869577813.png?w=256&h=341.3333333333333&c=c" alt="" />
            </div>
            <div>
              <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/170012089869577813.png?w=256&h=341.3333333333333&c=c" alt="" />
            </div>
            <div>
              <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/170012089869577813.png?w=256&h=341.3333333333333&c=c" alt="" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}