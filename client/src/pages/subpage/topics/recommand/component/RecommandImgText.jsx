import React from "react";

export default function RecommandImgText(props) {
  return (
    <div className="recommand_text_wrap">
      <pre className="recommand_text_content">
        {props.text}
      </pre>
    </div>
  );
}