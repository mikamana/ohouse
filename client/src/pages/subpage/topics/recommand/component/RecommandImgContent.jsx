import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecommandImgImage from "./RecommandImgImage";
import RecommandImgText from "./RecommandImgText";
import RecommandImgId from "./RecommandImgId";

export default function RecommandImgContent() {
  const [recommandContent, SetRecommandContent] = useState([]);
  useEffect(() => {
    fetch('/data/topics/recommandContent.json')
      .then((res) => res.json())
      .then((recommandContent) => {
        SetRecommandContent(recommandContent);
      })
      .catch((err) => console.err);
  }, [])

  return (
    <div className="topics_recommand_content_section inner">

      <div className="recommand_contents">
        {recommandContent.map((content) =>
          <div className="recommand_section" key={content.url}>
            <Link to="#" className="recommand_section_linkBox" key={content.url}>
              <RecommandImgImage
                url={content.url}
                text={content.text}
              />
              <RecommandImgText
                text={content.text}
              />
            </Link>
            <RecommandImgId
              idimg={content.idimg}
              id={content.id}
              likenum={content.likenum}
            />
          </div>
        )}
      </div>
    </div>
  );
}