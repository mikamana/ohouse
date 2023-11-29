import React from "react";
import "../../../../css/sub/competitions/event/event.css";
import { Link } from "react-router-dom";

export default function Event(){
  return(
    <>
      <ul className="event_container inner">
        <li className="event_content">
          <Link to={''}>
            <div className="event_image">
              <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/competitions/169076731385717225.jpg?gif=1&w=640&webp=1" alt="" />
            </div>
            <div className="event_title">
              <span className="event_title_now">진행중</span>
              {/* <span className="event_title_end">종료</span> */}
              <span className="event_title_date">23/11/01~23/11/30</span>
            </div>
          </Link>
        </li>
        <li className="event_content">
          <Link to={''}>
            <div className="event_image">
              <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/competitions/169076731385717225.jpg?gif=1&w=640&webp=1" alt="" />
            </div>
            <div className="event_title">
              {/* <span className="event_title_now">진행중</span> */}
              <span className="event_title_end">종료</span>
              <span className="event_title_date">23/11/01~23/11/30</span>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}