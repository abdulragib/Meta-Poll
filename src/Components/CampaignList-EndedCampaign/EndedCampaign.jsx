import React from "react";
import "./EndedCampaign.css";

const EndedCampaign = () => {
  return (
    <div className="ended-campaign">
      <div className="left">
        <button className="btn">WALLET ADDRESS</button>
      </div>
      <div className="right-ec">
        <h1 className="ec-Title">MetaPoll</h1>
        <h2 className="home-Title-description">NAME</h2>
        <div className="right-ec-data">
          {/* Data container one */}
          <div className="right-ec-part-one">
            <div className="right-ec-btn-group">
              <button className="btn btn-right">CANDIDATE LIST</button>
              <button className="btn btn-right">NUMBER OF VOTES</button>
            </div>
            <div className="right-ec-data-container-one">
              <div className="right-ec-data-container-item-one">
                 <div>1. Isha</div>
                 <div>2. Simran</div>
                 <div>3. Jayant</div>
                 <div>4. Radhika</div>
                 <div>5. Abdul Ragib</div>
              </div>
              <div className="right-ec-data-container-item-one two">
                <div>1100</div>
                <div>900</div>
                <div>1500</div>
                <div>700</div>
                <div>800</div>
              </div>
            </div>
          </div>

          {/* Data container two */}
          <div className="right-ec-part-two">
            <div className="right-ec-part-two-btn-group">
              <div className="btn btn-right">TOTAL VOTES</div>
              <div className="btn btn-right">WINNER</div>
              <div className="btn btn-right">END DATE</div>
            </div>
            <div className="right-ec-data-container-two">
              <div className="right-ec-data-container-item-two">
                 5000
              </div>

              <div className="right-ec-data-container-item-two">
                 Jayant
              </div>
              <div className="right-ec-data-container-item-two">
                  15 Dec 2021
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndedCampaign;
