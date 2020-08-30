import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function CurrQuestion({ name, bird, img }) {
  return  (
    <div className="curr-question">
      <img src={img} alt="..." />
      <div className="curr-question__info">
        <h2>{name}</h2>
        <hr></hr>
        <div style={{width: '100%'}}>
          <AudioPlayer src={bird.audio}
            autoPlayAfterSrcChange={false}
            showJumpControls={false}
            showFilledProgress={false}
            customAdditionalControls={[]}
            layout='horizontal-reverse'
            />
        </div>
      </div>
    </div>
  );
}
