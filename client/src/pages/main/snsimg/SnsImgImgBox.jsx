import React from 'react'
import { Link } from 'react-router-dom';
export default function SnsImgImgBox(props) {
  console.log(props.img);
  return (
    <>
      <div className="snsimg_img_list_div">
        <fieldset className="snsimg_img_fieldset">
          <Link to="#" className="snsimg_img_list_link">
            <img src={props.img} />
            <p className="snsimg_img_list_user">
              <span className="snsimg_img_list_user_img">
                <img src={props.userImg} />
              </span>
              <span className="snsimg_img_list_user_text">
                예진문
              </span>
              <svg className="shopitem_mark" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" fillRule="nonzero" d="M12.472 17.07a.999.999 0 0 0-.944 0l-7.056 3.811A.999.999 0 0 1 3 19.998V4.502C3 3.672 3.672 3 4.5 3h15c.828 0 1.5.673 1.5 1.502v15.496a1 1 0 0 1-1.472.883l-7.056-3.811z"></path></svg>
            </p>
          </Link>
        </fieldset>
      </div>
    </>
  )
}
