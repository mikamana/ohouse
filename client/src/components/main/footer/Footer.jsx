import React, { Children } from "react";


export default function Footer({ children }) {


  return (

    <>
      <footer className="main_footer">
        <div className="main_footer_layout inner">
          {children}
          푸터
        </div>
      </footer>
    </>

  );

}