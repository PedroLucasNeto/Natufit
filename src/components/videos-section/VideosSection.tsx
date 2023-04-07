import "./VideosSection.scss";

import VideoCard from "../video-card/VideoCard";

import { videos } from "../../utils/videos";

const VideosSection = () => {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        {videos.map((video, index) => {
          return <VideoCard key={index} index={index} video={video} />;
        })}
      </div>
    </section>
  );
};

export default VideosSection;
