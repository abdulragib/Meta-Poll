import React from "react";
import { useNavigate } from "react-router-dom";
import "./CampaignList.css";

const CheckProgress = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/admin/campaign-list/active-campaign");
  };

  const handleClickOne = () => {
    Navigate("/admin/campaign-list/ended-campaign");
  };
  return (
    <div className="campaign-list">
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
            <div className="right-cp-data-container-item">CR NOMINATION</div>
            <div className="right-cp-data-container-item">CLUB PRESIDENT</div>
            <div className="right-cp-data-container-item">SCHOOL MONITOR</div>
          </div>

          <div className="right-cp-data-container-two">
            <div className="right-cp-data-container-item">............</div>
            <div className="right-cp-data-container-item">............</div>
            <div className="right-cp-data-container-item">............</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckProgress;
