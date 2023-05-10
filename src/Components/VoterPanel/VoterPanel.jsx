import React from "react";
import { useNavigate } from "react-router-dom";
import "./VoterPanel.css";

const VoterPanel = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/user/ongoing-campaign");
  };

  const handleClickOne = () => {
    Navigate("/user/ended-campaign");
  };
  return (
    <div className="check-progress">
      <div className="left">
        <button className="btn">WALLET ADDRESS</button>
      </div>
      <div className="right-vp">
        <h1 className="home-Title">MetaPoll</h1>
        <div className="right-vp-btn-group">
          <button className="btn btn-right" onClick={handleClick}>
           Ongoing Campaign
          </button>
          <button className="btn btn-right" onClick={handleClickOne}>
            Ended Campaign
          </button>
        </div>
        <div className="right-vp-data-container">
          <div className="right-vp-data-container-one">
            <div className="right-vp-data-container-item">CR NOMINATION</div>
            <div className="right-vp-data-container-item">CLUB PRESIDENT</div>
            <div className="right-vp-data-container-item">SCHOOL MONITOR</div>
          </div>

          <div className="right-vp-data-container-two">
            <div className="right-vp-data-container-item">..........</div>
            <div className="right-vp-data-container-item">..........</div>
            <div className="right-vp-data-container-item">..........</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterPanel;
