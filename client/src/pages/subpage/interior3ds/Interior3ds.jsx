import React, { useState } from "react";
import Userimg_Image from '../../main/userimg/components/UserImg_Imag';
import UserImg_Title from '../../main/userimg/components/UserImg_Title';
import UserImg_SubText from './components/UserImg_SubText';
import { useEffect } from "react";
import axios from "axios";
import '../../../css/sub/interior3ds/interior3ds.css'
import { IoIosArrowDown } from "react-icons/io";

export default function Interior3ds() {
  const [interiorList, setInteriorList] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/house")
      .then(result => setInteriorList(result.data))
  }, [])

  const handleClick = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }

  const asc = () => {
    axios.get("http://127.0.0.1:8000/house/first")
      .then(result => setInteriorList(result.data))
  }

  const dsc = () => {
    axios.get("http://127.0.0.1:8000/house/last")
      .then(result => setInteriorList(result.data))
  }

  return (
    <div className="interior3ds inner">
      <div className="interior3dsNav">
        <span>3D 인테리어 하러가기</span>
        <span>내 프로젝트 공유하기</span>
        <span>서비스 알아보기</span>
      </div>
      <div className="interior3dsOption">
        <span onClick={handleClick}>정렬 <IoIosArrowDown /></span>
        <span>주거형태 <IoIosArrowDown /></span>
        <span>전용면적 <IoIosArrowDown /></span>
        <span>방개수 <IoIosArrowDown /></span>
        <span>베이수 <IoIosArrowDown /></span>
        <span>가족형태 <IoIosArrowDown /></span>
        <span>스타일 <IoIosArrowDown /></span>
        {modal &&
          <div className="interior3dsModal">
            <p onClick={asc}>최신순</p>
            <p onClick={dsc}>과거순</p>
          </div>
        }
      </div>

      <div className="interior3dsDiv">전체 31</div>
      <div className="interior3dsMain">
        {interiorList.map(list =>
          <div className="interior3ds_form" key={list.hid}>
            <Userimg_Image img={list.house_img} />
            <UserImg_Title name="interior3ds_subtitle" title={list.house_title} />
            <UserImg_SubText address={"인천광역시 중구 삼안해피하우징 77"} rewie={list.house_content} />
          </div>
        )}
      </div>
    </div>
  );
}