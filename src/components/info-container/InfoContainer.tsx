import "./InfoContainer.scss";
import Banner from "../banner/Banner";
import { companyValues } from "../../utils/companyValues";
import InfoCard from "../info-card/InfoCard";

const InfoContainer = () => {
  return (
    <>
      <Banner />
      <section className="card-section">
        {companyValues.map((value, index) => {
          return <InfoCard key={index} index={index} companyValue={value} />;
        })}
      </section>
    </>
  );
};

export default InfoContainer;
