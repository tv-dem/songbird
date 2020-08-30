import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Info({ info }) {
  return !info.isBegin ? (
    <div className="info">
      <div className="top">
        <img className="left" src={info.image} alt="..." />
        <div className="right">
          <h2>{info.name}</h2>
          <hr />
          {info.latinName}
          <hr />
          <AudioPlayer
            autoPlayAfterSrcChange={false}
            showJumpControls={false}
            showFilledProgress={false}
            customAdditionalControls={[]}
            layout='horizontal-reverse'
            src={info.audio}
          />
        </div>
      </div>
      <div className="bottom">{info.description}</div>
    </div>
  ) : (
    <div className="info">Послушайте аудио. Выберите птицу из списка</div>
  );
}
