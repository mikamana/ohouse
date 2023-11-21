import { VscClose } from "react-icons/vsc";
export default function RemoveBtn({weight}){
  return(
    <button className={'remove_btn_' + weight} type="button">
      <VscClose/>
      {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path fillRule="nonzero" d="M6 4.6L10.3.3l1.4 1.4L7.4 6l4.3 4.3-1.4 1.4L6 7.4l-4.3 4.3-1.4-1.4L4.6 6 .3 1.7 1.7.3 6 4.6z"></path></svg> */}
    </button>
  );
}