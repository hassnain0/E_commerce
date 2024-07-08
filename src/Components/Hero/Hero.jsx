import React from "react";
import "./Hero.css";
import arrow_icon from '../Assets/arrow.png'
import hand_icon from "../Assets/hand_icon.png";
const Hero = () => {
  <div className="hero">
    <div className="hero-left">
      <h2>New ARRIVALS ONLY</h2>
      <div>
        <div className="hand-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>collection</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest">
        <div>Latest Collection</div>
        <img src={} alt="" />
      </div>
    </div>
    <div className="hero-right"></div>
  </div>;
};
export default Hero;
