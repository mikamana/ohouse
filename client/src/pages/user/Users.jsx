import React, { Children, useEffect, useState } from 'react';
import "../../css/mypage/mypage.css";
import { getUser } from '../utill/sessionStorage';
import { Link } from 'react-router-dom';
import Error from '../../Error';
// import { useLocation } from 'react-router-dom';
// import { userContext } from '../../context/UsersContext';

export default function Users({ children }) {

  const userInfo = getUser();
  const [menuList, setMenuList] = useState([{ profile: "프로필" }, { myshop: "나의 쇼핑" }, { edit: "회원정보수정" }, { editpassword: "비밀번호 변경" }, { prdinquiry: "나의 문의" }, { prdreview: "나의 리뷰" }, { withdrawals: "회원탈퇴" }]);
  const [active, setActive] = useState(0);

  // const location = useLocation();

  // const { fnActive } = userContext();

  // fnActive(active);

  /*   useEffect(() => {
  
      if (location === "/users/profile") {
        setActive(0)
      } else if (location === "/users/shopping") {
        setActive(1)
      } else if (location === "/users/edit") {
        setActive(2)
      } else if (location === "/users/editpassword") {
        setActive(3)
      } else if (location === "/users/prdinquiry") {
        setActive(4)
      } else if (location === "/user/prdreview") {
        setActive(5)
      } else if (location === "/users/withdrawals") {
        setActive(6)
      }
  
    }, [location]) */




  return (
    <>
      {userInfo ?
        <div className='mypage_wrap'>
          <nav className='mypage_gnb'>
            <div className="mypage_inner inner">
              <ul className='mypage_gnb_list'>
                {
                  menuList.map((menu, idx) => (
                    <li key={idx} className='mypage_gnb_li'>
                      <Link className={active === idx ? "mypage_gnb_link active" : "mypage_gnb_link"} to={"/users/" + Object.keys(menu)} onClick={() => {
                        setActive(idx)
                      }}>
                        {Object.values(menu)}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </nav>
          <div className='mypage_contents'>
            {children}
          </div>
        </div >
        : <Error />
      }

    </>
  );
}

