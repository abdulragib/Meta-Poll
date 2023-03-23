import React from "react";
import "./OngoingCampaign.css";
const OngoingCampaign = () => {
  return (
    <div className="ongoing-campaign">
      <div className="left">
        <button className="btn">WALLET ADDRESS</button>
      </div>
      <div className="right-oc">
          <h1 className="home-Title">MetaPoll</h1>
          <h2 className="right-oc-name">Name</h2>
          <div className="right-oc-data">
            <div className="right-oc-left">
              <button className="btn btn-right">Candidate 1</button>
              <button className="btn btn-right">Candidate 2</button>
              <button className="btn btn-right">Candidate 3</button>
              <button className="btn btn-right">Candidate 4</button>
          </div>
          <div className="right-oc-right">
            <div className="right-oc-right-item"></div>
            <div className="right-oc-right-item"></div>
            <div className="right-oc-right-item"></div>
            <div className="right-oc-right-item"></div>
          </div>
        </div>
        <button className="btn right-oc-vote">Vote</button>
      </div>
    </div>
  );
};

export default OngoingCampaign;
