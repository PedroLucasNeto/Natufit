import React from "react";
import { TbShieldCheck, TbShoppingCartPlus, TbStar } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CompanyValue } from "../../types/CompanyValue";

import "./InfoCard.scss";

interface InfoCardProps {
  companyValue: CompanyValue;
  index: number;
}

const InfoCard = ({ companyValue, index }: InfoCardProps) => {
  return (
    <div className={index % 2 == 0 ? `card-container` : "card-container reverse"}>
      <div className="card">
        <h2>{companyValue.title}</h2>
        <p>{companyValue.description}</p>
        <Link to={"/products"}>{companyValue.button}</Link>
      </div>
      <video controls>
        <source src={companyValue.video} type="video/mp4" />
      </video>
    </div>
  );
};

export default InfoCard;
