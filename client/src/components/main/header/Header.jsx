import React, { Children } from "react";


export default function Header({ children }) {

  return (
    <>
      <header className="main_header">
        <div className="main_header_layout inner">
          {children}
        </div>
      </header>
    </>
  );

}