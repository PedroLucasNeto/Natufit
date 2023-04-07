import React from "react";
import "./CompanyValues.scss";

import { companyValues } from "../../utils/companyValues";

const CompanyValues = () => {
  return (
    <div className="values-wrapper">
      {companyValues.map((value, index) => {
        return (
          <div className="value-card">
            <h1>{value.title}</h1>
            <p>{value.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyValues;
