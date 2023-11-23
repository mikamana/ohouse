import SubtitleMore from "../subtitle_more/Subtitle_more";
import ShopcateCategory from "./ShopcateCategory";
import ShopcateContents from "./ShopcateContents";

export default function ShopcateSection() {
  return (
    <>
      <SubtitleMore title={"베스트"} />
      <div className="shopcate_section inner">
        <ShopcateCategory />
        <ShopcateContents />
      </div>
    </>

  );
}