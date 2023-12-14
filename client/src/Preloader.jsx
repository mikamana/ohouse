import "./css/layout/preloader.css"
import { useEffect } from "react"

export default function Preloader(){
  useEffect(() => {
    const handleLoad = () => {
      document.querySelector(".preloader").style.display = 'none';
      document.body.style.overflow = 'auto';
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return(
    <>
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-text">loading</div>
      <div id="link">오늘의집</div>
      </div>
    </div>
    </>
  );
}
