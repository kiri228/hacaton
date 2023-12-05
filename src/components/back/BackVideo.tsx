import React from "react";
import style from "./back.module.css";

const BackVideo = () => {
  return (
    <>
      <video autoPlay muted loop className={style.video}>
        <source
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default BackVideo;
