import "./CardsSection.scss";

import InfoCard from "../info-card/InfoCard";

import { videos } from "../../utils/videos";

const CardsSection = () => {
  return (
    <section className="card-section">
      <div className="card-section">
        {videos.map((video, index) => {
          return <InfoCard key={index} index={index} video={video} />;
        })}
      </div>
    </section>
  );
};

export default CardsSection;
