import React, { useEffect, useState } from 'react';
import "../../../css/mypage/profile/profile.css";
import ProductionsPrdTitleBox from '../../productions/components/prd/userstyle/ProductionsPrdTitleBox';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getUser } from '../../utill/sessionStorage';
export default function Profile() {

  const userInfo = getUser();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (userInfo) {

      axios({

        method: "get",
        url: `http://127.0.0.1:8000/users/profile/${userInfo.id}`

      }).then((result) => {

        setList(result.data[0]);
        setLoading(false); // 로딩 상태 업데이트
      })

    }

  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='profile_wrap'>
        <div className='profile_inner inner'>
          <div className="profile_info">
            <div className='profile_info_wrap'>
              <div className='profile_info_image_wrap'>
                <img src={list.userimg === null ? "https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=640&h=640&c=c&webp=1" : "http://127.0.0.1:8000/" + list.userimg} alt="#" />
              </div>
              <h3 className='profile_user_name'>
                {list.nickname}
              </h3>
              <p className='profile_follow_wrap'>
                <span className='profile_follower_span'>팔로워 0 </span>
                <span className='profile_following_span'>팔로잉 0</span>
              </p>
              <div className="profile_setting">
                <span className='profile_setting_span'>
                  설정
                </span>
              </div>
              <ul className='profile_scrap_list_wrap'>
                <li className='profile_scrap_list_li'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path fillRule="evenodd" transform="matrix(1 0 0 -1 0 23.033)" d="M12.943 6.342a2 2 0 0 1-1.886 0L3 2.032V20.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V2.033l-8.057 4.309zm-.471-.882l8.056-4.31A1 1 0 0 1 22 2.034V20.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 20.5V2.033a1 1 0 0 1 1.472-.882l8.056 4.31a1 1 0 0 0 .944 0z"></path></svg>
                  <span className='profile_scrap_first_span'>
                    스크랩북
                  </span>
                  <em>{list.cnt}</em>
                </li>
                <li className='profile_scrap_list_li'>
                  <svg width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" d="M22.971 7.638c-.548-5.17-7.119-7.135-10.57-2.488a.5.5 0 0 1-.802 0C8.148.503 1.577 2.469 1.029 7.625.642 12.451 3.897 17.183 12 21.436c8.104-4.252 11.36-8.984 10.972-13.798zm.996-.093c.428 5.319-3.137 10.446-11.738 14.899a.5.5 0 0 1-.46 0C3.169 17.99-.395 12.864.034 7.532.656 1.67 7.904-.683 12 4.052 16.096-.683 23.344 1.67 23.967 7.545z"></path></svg>
                  <span className='profile_scrap_first_span'>
                    좋아요
                  </span>
                  <em>0</em>
                </li>
                <li className='profile_scrap_list_li'>
                  <svg width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path fill="#424242" fillRule="nonzero" d="M22.588 3H1.413C.633 3 0 3.638 0 4.426L0 9.53l.605-.088c.12-.017.243-.026.367-.026 1.413 0 2.558 1.157 2.558 2.584S2.385 14.584.972 14.584c-.124 0-.247-.009-.367-.026L0 14.47l.001 5.104C.001 20.362.633 21 1.413 21h21.175c.78 0 1.412-.638 1.412-1.426V4.426C24 3.638 23.368 3 22.588 3zM1.413 4.07h21.175c.195 0 .353.159.353.356v15.148c0 .197-.158.357-.353.357H1.413l-.071-.008c-.161-.033-.282-.176-.282-.349l-.002-3.923-.086.002c1.997 0 3.617-1.635 3.617-3.653l-.004-.182C4.493 9.945 3.006 8.443 1.152 8.35l-.094-.003.002-3.922c0-.197.158-.357.353-.357zm14.646 2.138c.293 0 .53.237.53.53v1.614c0 .292-.237.53-.53.53-.292 0-.53-.238-.53-.53V6.737c0-.292.238-.53.53-.53zm0 4.455c.293 0 .53.237.53.53v1.614c0 .293-.237.53-.53.53-.292 0-.53-.237-.53-.53v-1.614c0-.293.238-.53.53-.53zm0 4.456c.293 0 .53.237.53.53v1.614c0 .292-.237.53-.53.53-.292 0-.53-.238-.53-.53v-1.615c0-.292.238-.53.53-.53z"></path></svg>
                  <span className='profile_scrap_first_span'>
                    내쿠폰
                  </span>
                  <em>0</em>
                </li>
              </ul>
            </div>
            <Link to="#" className='profile_info_link'>
              <p>취향 공유하고 <span>리워드 받기</span></p>
            </Link>
          </div>
          <div className="profile_image">
            <div className='profile_image_capture_wrap'>
              <ProductionsPrdTitleBox title={"사진"}
                more={"전체보기"}>
              </ProductionsPrdTitleBox>
              <ul className='profile_image_capture_list'>
                <li className='profile_image_capture_list_li'>

                </li>
                <li className='profile_image_capture_list_li'>

                </li>
                <li className='profile_image_capture_list_li'>

                </li>
                <li className='profile_image_capture_list_li'>

                </li>
              </ul>
              <button className='profile_image_upload_button'>
                + 사진 올리기
              </button>
            </div>
            <div className='profile_image_house_wrap'>
              <ProductionsPrdTitleBox title={"집들이"}
                more={"전체보기"}>
              </ProductionsPrdTitleBox>
              <Link className='profile_image_house_link'>
                + 첫 번째 집들이를 올려보세요
              </Link>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

