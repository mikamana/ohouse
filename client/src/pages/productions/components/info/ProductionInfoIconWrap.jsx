import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../../utill/sessionStorage";

export default function ProductionInfoIconWrap() {
  const [toggle, setToggle] = useState(false);
  const params = useParams();
  const userInfo = getUser();


  useEffect(() => {

    axios({

      method: "get",
      url: `http://127.0.0.1:8000/scrap/product/${params.pid}`

    }).then((result) => {

      console.log(result);

    })

  }, [])

  useEffect(() => {


    if (toggle === true) {

      axios({

        method: "post",
        url: `http://127.0.0.1:8000/scrap/product`,
        data: { pid: params.pid, mid: userInfo.id }
      }).then((result) => {

        console.log(result);

      })
    }



  }, [toggle])




  return (

    <>
      <p className="production_selling_info_title_div">
        <Link to="#" className={toggle ? "production_selling_scrap_icon active" : "production_selling_scrap_icon"} onClick={() => {

          setToggle((toggle) => !toggle)

        }}>
          <svg className="icon--stroke active" aria-label="스크랩" width="24" height="24" fill="currentColor" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path></svg>
          <span>223</span>
        </Link>
        <Link to="#" className="production_selling_scrap_icon">
          <svg className="icon" aria-label="공유하기" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M9.64 14.646a4.5 4.5 0 1 1 0-5.292l4.54-2.476a4.5 4.5 0 1 1 .63.795l-4.675 2.55c.235.545.365 1.146.365 1.777s-.13 1.232-.365 1.777l4.675 2.55a4.5 4.5 0 1 1-.63.795l-4.54-2.476zM18 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM6 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM18 23a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path></svg>
        </Link>
      </p>
    </>

  );

}