import React from "react";
import "./CreateCampaign.css";

const CreateCampaign = () => {
  return (
    <div className="create-campaign">
      <div className="left">
        <button className="btn">WALLET ADDRESS</button>
      </div>
      <div className="right-cc">
        <h1 className="home-Title right-home-title">MetaPoll</h1>
        <div className="right-cc-btn-group">
          <button className="btn btn-right">Create Campaign</button>
          <button className="btn btn-right">Check Progress</button>
          <button className="btn btn-right">Election Details</button>
        </div>
        <div className="right-cc-data-container">
            <div className="right-cc-data-container-item"></div>
            <div className="right-cc-data-container-item"></div>
            <div className="right-cc-data-container-item"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
