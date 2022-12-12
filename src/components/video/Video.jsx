import React from 'react';
import RICK from "../../img/rickroll.jpg";

const Video = () => {
  return (
    <div className="container">
        <div className="title"><h1>RickRoll</h1></div>
        <div className="video">
            <img src={RICK} alt="le goat" />
        </div>
    </div>
  )
}

export default Video