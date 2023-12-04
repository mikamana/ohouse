import React, { useEffect, useState } from "react";
import "../../../../css/sub/competitions/event/event.css";
import { Link } from "react-router-dom";

export default function Event(){
  const [eventList, setEventList] = useState([]);
  useEffect(()=>{
    fetch(`/data/event/event.json`)
    .then((res) => res.json())
    .then((data) => setEventList(data));
  }, []);

  return(
    <>
      <ul className="event_container inner">
        {eventList.map((event) => (
          <li className='event_content' key={event.id}>
            <Link to={''}>
              <div className="event_image">
                <img src={event.image} alt="" />
              </div>
              <div className="event_title">
                <span className={`event_title_status ${event.status === "now" ? "event_title_now" : "event_title_end"}`}>
                  {event.status === "now" ? "진행중" : "종료"}
                </span>
                <span className="event_title_date">{event.date}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}