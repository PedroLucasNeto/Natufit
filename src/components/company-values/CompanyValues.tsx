import React from "react";
import "./CompanyValues.scss";

import { companyValues } from "../../utils/companyValues";

const CompanyValues = () => {
  return (
    <section className="values-section">
      <h1>Sobre a Natufit Especiarias!</h1>
      <div className="values-wrapper">
        {companyValues.map((value, index) => {
          return (
            <div key={index} className="value-card">
              <h1>{value.title}</h1>
              <></>
              <p>{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CompanyValues;
