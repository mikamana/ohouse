import ShopcateCategory from "./ShopcateCategory";
import ShopcateContents from "./ShopcateContents";

export default function ShopcateSection(){
  return(
    <div className="shopcate_section inner">
      <ShopcateCategory/>
      <ShopcateContents/>
    </div>
  );
}