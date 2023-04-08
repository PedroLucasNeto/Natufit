import "./VideosSection.scss";

import VideoCard from "../video-card/VideoCard";

import { videos } from "../../utils/videos";

const VideosSection = () => {
  return (
    <section className="video-section">
      <div className="video-titles">
        <h1>Conheça nossa linha de produtos</h1>
        <span>SUPREMO!</span>
        <p>
          Descubra a exclusividade e excelência da linha de temperos Supremo da Natufit.
          Feitos a partir da combinação dos mais finos temperos, cada pote de Supremo é
          uma experiência única e incomparável para o seu paladar. Com ingredientes
          selecionados e processos artesanais, nossa linha de temperos Supremo eleva o
          sabor de suas receitas a um nível superior. Experimente agora e descubra por si
          mesmo por que Supremo é a escolha de quem busca a perfeição em cada prato.
        </p>
      </div>
      <div className="video-wrapper">
        {videos.map((video, index) => {
          return <VideoCard key={index} index={index} video={video} />;
        })}
      </div>
    </section>
  );
};

export default VideosSection;
