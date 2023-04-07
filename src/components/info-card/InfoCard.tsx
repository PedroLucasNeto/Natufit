import React from "react";
import { TbShieldCheck, TbShoppingCartPlus, TbStar } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Video } from "../../types/Video";

import "./InfoCard.scss";

interface InfoCardProps {
  index: number;
  video: Video;
}

const InfoCard = ({ index, video }: InfoCardProps) => {
  return (
    <div className="card">
      <video src={`${video.link}`} controls></video>
    </div>
  );
};

export default InfoCard;
