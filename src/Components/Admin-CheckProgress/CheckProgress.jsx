import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckProgress.css";

const CheckProgress = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/admin/check-progress/active-campaign");
  };

  const handleClickOne = () => {
    Navigate("/admin/check-progress/Ended-campaign");
  };
  return (
    <div className="check-progress">
      <div className="left">
        <button className="btn">WALLET ADDRESS</button>
      </div>
      <div className="right-cp">
        <h1 className="home-Title">MetaPoll</h1>
        <div className="right-cp-btn-group">
          <button className="btn btn-right" onClick={handleClick}>
            Active Campaign
          </button>
          <button className="btn btn-right" onClick={handleClickOne}>
            Ended Campaign
          </button>
        </div>
        <div className="right-cp-data-container">
          <div className="right-cp-data-container-one">
            <div className="right-cp-data-container-item"></div>
            <div className="right-cp-data-container-item"></div>
            <div className="right-cp-data-container-item"></div>
          </div>

          <div className="right-cp-data-container-two">
            <div className="right-cp-data-container-item"></div>
            <div className="right-cp-data-container-item"></div>
            <div className="right-cp-data-container-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckProgress;
