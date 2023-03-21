import React from "react";
import "./ActiveCampaign.css";

const ActiveCampaign = () => {
  return (
    <div className="active-campaign">
      <div className="left">
        <button className="btn">WALLET ADDRESS</button>
      </div>
      <div className="right-ac">
        <h1 className="home-Title right-home-title">MetaPoll</h1>
        <div className="right-ac-btn-group">
          <button className="btn btn-right">Create Campaign</button>
          <button className="btn btn-right">Check Progress</button>
          <button className="btn btn-right">Election Details</button>
        </div>
        <div className="right-ac-data-container">
            <div className="right-ac-data-container-item"></div>
            <div className="right-ac-data-container-item"></div>
            <div className="right-ac-data-container-item"></div>
          </div>
      </div>
    </div>
  );
};

export default ActiveCampaign;
