import React, { Children } from "react";
import UserImg from './../../../pages/main/userimg/UserImg';
import UserImg_sub from "../../../pages/main/userimg/UserImg_sub";


export default function Contents({ children }) {

  return (

    <>
      <main className="main_contents">
        {children}
        가나
        <UserImg_sub/>
      </main>
    </>

  );

};