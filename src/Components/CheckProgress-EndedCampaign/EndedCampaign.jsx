import React from "react";
import "./EndedCampaign.css";

const EndedCampaign = () => {
  return (
    <div className="ended-campaign">
      <div className="left">
        <button className="btn">WALLET ADDRESS</button>
      </div>
      <div className="right-ec">
        <h1 className="home-Title">MetaPoll</h1>
        {/* <div className='btn btn-right'>Create Campaign</div>
        <div className='btn btn-right'>Check Progress</div> */}
        <div className="right-ec-data">
          {/* Data container one */}
          <div className="right-ec-data-container-one">
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

          {/* Data container two */}
          <div className="right-ec-data-container-two">
            <div className="right-ac-data">
              <div className="right-ac-data-btn-group">
                <button className="btn btn-right">Total Votes</button>
                <button className="btn btn-right">Ending Time</button>
              </div>
              <div className="right-ac-data-container">
                <div className="right-ac-data-container-item"></div>
                <div className="right-ac-data-container-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndedCampaign;
