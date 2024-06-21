import React from "react";
import "./Appdownload.css";
import { assets } from "../../assets/assets";

const APpdownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> foodZap App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default APpdownload;
