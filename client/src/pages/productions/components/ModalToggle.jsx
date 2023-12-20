import React, { useEffect, useRef } from 'react';
import "../../../css/production/togmodal.css";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";


export default function ModalToggle(props) {
  const modRef = useRef(null);

  useEffect(() => {

    gsap.set(modRef.current, { left: 50 + "%", top: 1000 + "px" })

    if (props.toggle) {

      gsap.to(modRef.current, { left: 50 + "%", top: 85 + "vh" })

      setTimeout(() => {

        gsap.set(modRef.current, { left: 50 + "%", top: 105 + "vh" })

      }, 2000);

    }

  }, [props.toggle]);

  return (
    <>
      <div className='modal_toggle_wrap' ref={modRef}>
        <div className={props.toggle ? 'modal_toggle_text_wrap active' : 'modal_toggle_text_wrap'}>
          <span className='modal_toggle_span'>{props.text}</span>
          {props.toggle ?
            < div className="modal_toggle_text">
              <Link to="#" className="modal_toggle_link">
                스크랩북 보기
              </Link>
            </div> : null}
        </div>
      </div>
    </>
  );
}

