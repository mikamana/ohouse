import { useEffect, useState } from "react";
import ShopitemContents from "../shopitem/ShopitemContents";
import ShopcateContentsItem from "./components/contents/ShopcateContentsItem";

export default function ShopcateContents(){
  const [shopArray,setShopArray] = useState([]);
  useEffect(()=>{
    fetch('/db/shopbest.json')
    .then(res=>res.json())
    .then(data=>{setShopArray(data)})
  },[])
  return(
    <div className="shopcate_contents">
      {shopArray.map((list,i)=>{
      return <ShopcateContentsItem key={i}>
        <ShopitemContents
          shopitemList={list}
          index={i+1}
        />
      </ShopcateContentsItem>
      })} 
    </div>
  );
}