import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkyImgImage from "./SkyImgImage";
import SkyImgText from './SkyImgText';

export default function SkyImgContent() {
  const [skyImgContent, setSkyImgContent] = useState([]);
  useEffect(() => {
    fetch('/data/SkyImg/SkyImgContent.json')
      .then((res) => res.json())
      .then((skyImgContent) => {
        setSkyImgContent(skyImgContent);
      })
      .catch((err) => console.err);
  }, [])

  return (
    <>
      {skyImgContent.map((content)=>
      <Link to="/img" className="skyimg_section_linkBox" key={content.url}>
        <SkyImgImage 
          url = {content.url}
        />
        <SkyImgText 
          skytext = {content.skytext}
          text = {content.text}
        />
      </Link>
      )}
    </>
  );
}