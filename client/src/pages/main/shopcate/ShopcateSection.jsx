import SubtitleMore from "../subtitle_more/Subtitle_more";
import ShopcateCategory from "./ShopcateCategory";
import ShopcateContents from "./ShopcateContents";
import "../../../css/main/shopcate/shopcate.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ShopcateSection() {
  const [shopArray, setShopArray] = useState([]);
  const [catelist, setCatelist] = useState([]);
  useEffect(() => {
    axios.get('http://192.168.50.31:8001/product/bestitem')
      .then(result => { setShopArray(result.data) })

    axios.get('http://192.168.50.31:8001/category')
      .then(result => setCatelist(result.data))
  }, [])

  function getCategoryItem(category_id) {

    if (category_id === 0) {
      axios.get('http://192.168.50.31:8001/product/bestitem')
        .then(result => setShopArray(result.data))
    } else {
      axios.get(`http://192.168.50.31:8001/product/bestitem/${category_id}`)
        .then(result => setShopArray(result.data))
    }
  }

  return (
    <>
      <SubtitleMore title={"베스트"} link={'/store/ranks'}/>
      <div className="shopcate_section inner">
        <ShopcateCategory
          catelist={catelist}
          getCategoryItem={getCategoryItem}
        />
        <ShopcateContents
          shopArray={shopArray}
        />
      </div>
    </>

  );
}