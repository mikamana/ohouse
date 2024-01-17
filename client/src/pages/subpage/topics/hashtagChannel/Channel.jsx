import React, { useEffect, useState } from "react";
import "../../../../css/sub/topics/channel/channel.css";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Channel() {
  const [channelList, setListChannel] = useState([]);
  useEffect(() => {
    axios.get('http://192.168.50.31:8001/channel')
      .then(result => {
        const channelImg = result.data.map(channel => {
          const imageArray = channel.channel_image.split(',');
          return { ...channel, channel_image: imageArray };
        })
        setListChannel(channelImg);
      })
  }, []);

  return (
    <>
      <div className="channel_container inner">
        <h2>마음에 드는 채널을 골라보세요</h2>
        <div>
          {channelList.map((channel) =>
            <div key={channel.channel_id} className="channel_content">
              <Link to={''}>
                <div className="channel_title_box">
                  <p className="channel_title_hash">{channel.channel_title}</p>
                  <div className="channel_title_sub">
                    <span>{channel.channel_member}명 활동 중</span>・<span>{channel.channel_content}개의 콘텐츠</span>
                  </div>
                </div>
                <div className="channel_image_box">
                  <div style={{ backgroundImage: `url(${channel.channel_image[0]})` }}></div>
                  <div style={{ backgroundImage: `url(${channel.channel_image[1]})` }}></div>
                  <div style={{ backgroundImage: `url(${channel.channel_image[2]})` }}></div>
                  <div style={{ backgroundImage: `url(${channel.channel_image[3]})` }}></div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}