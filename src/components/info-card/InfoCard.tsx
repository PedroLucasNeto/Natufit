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
    <div key={index} className={`card-container`}>
      <div className="card">
        <h2>{companyValue.title}</h2>
        <p>{companyValue.description}</p>
        <Link to={"/products"}>{companyValue.button}</Link>
      </div>
    </div>
  );
};

export default InfoCard;
