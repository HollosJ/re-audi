import React from "react";
import HeroVid from "./media/herovid.mp4";
import HeroPoster from "./media/hero-poster.jpg";
import ScrollIcon from "./media/scrollicon.png";

const Hero = () => {
  return (
    <div
      id="sec1"
      className="hero container"
      style={{
        backgroundImage: `url(${HeroPoster})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="video-wrapper">
        <video src={HeroVid} loop="true" autoplay="true" />
      </div>
      <div className="hero-content">
        <h1>The new A5 family</h1>
        <div className="hero-btn">Discover the new Audi A5 range</div>
        <div className="hero-scroll">
          <a href="#sec2">Scroll down</a>
          <img
            src={ScrollIcon}
            style={{
              filter: "invert(1)",
              width: "5em",
              animationName: "up-down",
              animationDuration: "2s",
              animationIterationCount: "infinite",
            }}
            alt="Scroll to skip"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
