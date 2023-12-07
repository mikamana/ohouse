import React, { useEffect, useState } from "react";
import Userimg_Image from './components/UserImg_Imag';
import UserImg_Title from './components/UserImg_Title';
import UserImg_Text from './components/UserImg_Text';
import SubtitleMore from "../subtitle_more/Subtitle_more";
import "../../../css/main/userimg/userimg.css";
import  axios  from 'axios';
export default function UserImg() {
  const [userimgList, setUsersimgList] = useState([])

  useEffect(() => {
    axios.get("data/userimg/userimg.json")
    .then(result => setUsersimgList(result.data))
  } ,[])

  return (
    <>
      <SubtitleMore title={"유저들의 인테리어 시공 리뷰"} />
      <div className="userimg inner">
        {userimgList.map(list =>
        <div className="userimg_form" key={list.title}>
          <Userimg_Image img={list.Image}/>
          <UserImg_Title name="userimg_title" title={list.title} />
          <UserImg_Text text={list.text} />
        </div>
        )}
      </div>
    </>)
    ;
}