import React, { Children } from "react";


export default function Contents({ children }) {

  return (

    <>
      <main className="main_contents inner">
        {children}
        가나
      </main>
    </>

  );

};