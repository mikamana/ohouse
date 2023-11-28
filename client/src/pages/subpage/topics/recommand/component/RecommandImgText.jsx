import React from "react";

export default function RecommandImgText(props) {
  return (
    <div className="recommand_text_wrap">
      <p className="recommand_text_content">
        <pre> {props.text} </pre>
      </p>
    </div>
  );
}