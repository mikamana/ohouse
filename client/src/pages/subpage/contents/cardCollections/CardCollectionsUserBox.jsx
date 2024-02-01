import React from 'react'
import { Link } from "react-router-dom";

export default function cardCollectionsUserBox(props) {
  return (
    <>
      <Link to="#" className="card_collections_house_list_user_info_p">
        <img src={props.userImg} alt="유저이미지" />
        <div className='card_collections_house_list_user_info_div'>
          <p className='card_collections_house_list_user_info_name'>{props.nickName}<span className='house_user_info_flw'> * 팔로우</span></p>
          <span className='card_collections_house_list_user_info_content'>{props.userId}</span>
        </div>
      </Link>
    </>
  )
}
