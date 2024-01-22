import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getUser } from '../../../../utill/sessionStorage';

export default function ProductionsPrdReviewUpdateBtn(props) {

  const [toggle, setToggle] = useState(false);
  const userInfo = getUser();
  const params = useParams();

  useEffect(() => {

    props.onClick(toggle)

  }, [toggle])

  const fnDelete = (kind) => {



    if (!userInfo) {

      return false

    }

    if (kind === "review") {

      axios({

        method: "delete",
        url: `http://127.0.0.1:8000/review/product`,
        data: { mid: userInfo.id, pid: params.pid }

      }).then((result) => {

        alert('리뷰가 삭제되었습니다.')
        window.location.reload()

      })

    }

    if (kind === "inquiry") {

      axios({

        method: "delete",
        url: `http://127.0.0.1:8000/inquiry`,
        data: { mid: userInfo.id, pid: params.pid }

      }).then((result) => {

        alert('문의가 삭제되었습니다.')
        window.location.reload()

      })

    }

  }

  return (
    <>
      <span className="production_selling_prd_review_item_user_info_update" onClick={() => {
        setToggle((toggle) => !toggle);
      }}>수정</span>
      <span className="production_selling_prd_review_item_user_info_delete" onClick={() => {
        fnDelete(props.kind);
      }}>삭제</span>
    </>
  );
}

