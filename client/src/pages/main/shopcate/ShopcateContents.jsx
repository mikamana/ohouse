import { useEffect, useState } from "react";
import ShopitemContents from "../shopitem/ShopitemContents";
import ShopcateContentsItem from "./components/contents/ShopcateContentsItem";
import axios from "axios";

export default function ShopcateContents({shopArray}){
  return(
    <div className="shopcate_contents">
      {shopArray.map((list,i)=>{
      return <ShopcateContentsItem key={i}>
        <ShopitemContents
          shopitemList={list}
          index={i+1}
          best={true}
        />
      </ShopcateContentsItem>
      })} 
    </div>
  );
}