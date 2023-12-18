import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../../utill/sessionStorage";
import "../../../../css/production/production.css";

export default function ProductionScrapBtn() {

  const [toggle, setToggle] = useState(false);
  const params = useParams();
  const userInfo = getUser();
  const [scrapCount, setScrapCount] = useState([]);

  useEffect(() => {

    axios({

      method: "get",
      url: `http://127.0.0.1:8000/scrap/product/${params.pid}/${userInfo.id}`

    }).then((result) => {

      if (result.data.length === 1) {

        setToggle(true);

      }

      if (result.data.length === 0) {

        setToggle(false);

      }

    })

  }, []);

  useEffect(() => {

    axios({

      method: "get",
      url: `http://127.0.0.1:8000/scrap/prdcount/${params.pid}`

    }).then((result) => {
      if (result.data.length !== 0) {
        setScrapCount(result.data[0]);
      } else {
        setScrapCount(0);
      }

    })

  }, [scrapCount])

  function handleToggle() {

    if (toggle === false) {

      axios({

        method: "post",
        url: `http://127.0.0.1:8000/scrap/product`,
        data: { pid: params.pid, mid: userInfo.id }

      }).then((result) => {

        console.log("스크랩추가성공");

      })

    }

    if (toggle === true) {

      axios({

        method: "delete",
        url: `http://127.0.0.1:8000/scrap/product`,
        data: { pid: params.pid, mid: userInfo.id }

      }).then((result) => {

        console.log("삭제성공");

      })

    }

  }

  return (
    <>
      <button to="#" className={toggle ? "production_selling_scrap_icon active" : "production_selling_scrap_icon"} onClick={() => {
        handleToggle();
        setToggle((toggle) => !toggle);
      }}>
        <svg className="icon--stroke active" aria-label="스크랩" width="24" height="24" fill="currentColor" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path></svg>
        <span>{scrapCount.cnt}</span>
      </button>
    </>
  );
}

