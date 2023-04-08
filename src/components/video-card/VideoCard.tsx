import React from "react";
import { TbShieldCheck, TbShoppingCartPlus, TbStar } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Video } from "../../types/Video";

import "./VideoCard.scss";

interface InfoCardProps {
  index: number;
  video: Video;
}

const VideoCard = ({ index, video }: InfoCardProps) => {
  return (
    <div className="video-card">
      <h1>{video.description}</h1>
      <video src={`${video.link}`} controls></video>
    </div>
  );
};

export default VideoCard;
