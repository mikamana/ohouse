import React from "react";
import ShopitemTodayStart from "../../../main/shopitem/components/Info/ShopitemTodayStart";


export default function ProductionInfoPriBox(props) {



  return (

    <>
      <p className="production_selling_price_info_wrap">
        <span className="production_selling_price_info_span"><span>{parseInt(props.price).toLocaleString()} 원</span></span>
        <svg className="icon" aria-label="특가" width="30" height="20" viewBox="0 0 30 20" preserveAspectRatio="xMidYMid meet"><rect width="30" height="20" fill="#F77" rx="4"></rect><path fill="#fff" d="M12.83 7.93v-.97H7.93v-.555h5.228v-.991H6.655v4.063h6.59v-.992H7.928V7.93h4.901zm-6.295 3.747v1.002h5.326v2.037h1.274v-3.04h-6.6zm7.733-.588v-1.024H5.5v1.024h8.768zM23.91 9.782V8.725h-1.405V5H21.24v9.705h1.264V9.782h1.405zm-3.954-3.79h-4.53v1.056h3.147c-.174 1.938-1.623 3.975-3.736 4.945l.773.958c2.974-1.612 4.259-4.03 4.346-6.96z"></path></svg>
        <svg className="icon" width="53" height="20" fill="none" preserveAspectRatio="xMidYMid meet"><rect width="53" height="20" fill="#fff" fillOpacity=".7" rx="4"></rect><path fill="#828C94" d="M7.67 6.55v.23c0 .75-.89 1.58-2.92 1.78l.47 1.03c2.38-.23 3.63-1.4 3.63-2.81v-.23H7.67Zm.65 0v.23c0 1.42 1.26 2.58 3.63 2.81l.47-1.03C10.39 8.37 9.5 7.53 9.5 6.78v-.23H8.32Zm-3.16-.54v1.05h6.86V6.01H5.16ZM4.4 9.97v1.05h8.38V9.97H4.4Zm.93 1.71v1.05h5.1v2.16h1.33v-3.21H5.33Zm10.23-5.34v1.35c0 1.8-.76 3.58-2.37 4.28l.79 1.1c1.84-.85 2.66-3 2.66-5.38V6.34h-1.08Zm.26 0v1.35c0 2.28.82 4.34 2.61 5.16l.78-1.07c-1.58-.68-2.31-2.38-2.31-4.09V6.34h-1.08Zm3.83-.72v9.29h1.34V5.62h-1.34Zm8.508 0v5h1.33v-5h-1.33Zm.8 1.98v1.08h1.76V7.6h-1.76Zm-5.59 3.39v.96h4.81v.49h-4.79v1.74h1.32v-.84h4.78v-2.35h-6.12Zm.02 2.86v.98h6.37v-.98h-6.37Zm-1.19-7.54v1h5.45v-1h-5.45Zm2.73 1.22c-1.38 0-2.28.59-2.28 1.52s.9 1.5 2.28 1.5c1.37 0 2.27-.57 2.27-1.5s-.9-1.52-2.27-1.52Zm0 .93c.62 0 1 .2 1 .59 0 .37-.38.57-1 .57s-1-.2-1-.57c0-.39.38-.59 1-.59Zm-.67-2.9v1.46h1.33V5.56h-1.33Zm13.2.08v6.65h1.34V5.64h-1.34Zm-4.83 8.03v1.06h6.4v-1.06h-6.4Zm0-2.05v2.48h1.33v-2.48h-1.33Zm1.13-5.4c-1.42 0-2.52.98-2.52 2.35 0 1.36 1.1 2.35 2.52 2.35s2.51-.99 2.51-2.35c0-1.37-1.09-2.35-2.51-2.35Zm0 1.15c.68 0 1.21.44 1.21 1.2 0 .75-.53 1.19-1.21 1.19-.69 0-1.22-.44-1.22-1.19 0-.76.53-1.2 1.22-1.2Zm12.159-1.75v9.26h1.34V5.62h-1.34Zm.99 3.54v1.09h1.63V9.16h-1.63Zm-3.42-2.58v.23c0 2.51-1.15 4.21-3.58 5.47l.74 1.01c3.08-1.55 4.14-3.93 4.14-6.71h-1.3Zm-3.07 0v1.07h3.75V6.58h-3.75Z"></path><rect width="52" height="19" x=".5" y=".5" stroke="#000" strokeOpacity=".08" rx="3.5"></rect></svg>
        <ShopitemTodayStart ts={"ohouseDelivery"}
        // furnitureDelivery
        // ohouseDelivery
        />
      </p>
    </>

  );

}