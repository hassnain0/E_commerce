import React from "react";
import video from "../Assets/video.mp4";
import "./Background.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

export const Background = () => {
  return (
    <div>
      <video src={video} autoPlay loop muted className="background">
        <h2 className="text">New Arrivals Only</h2>
        </video>
      <div className="hero-left">
        <h2>New ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
};
