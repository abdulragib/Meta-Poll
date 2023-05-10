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
          <button className="btn btn-right">Voter List</button>
          <button className="btn btn-right">Election Details</button>
        </div>
        <div className="right-cc-data-container">
            <div className="right-cc-data-container-item">
              <div className="right-cc-data-container-item-data">
                <div>1. AMIT SHARAMA</div>
                <div>2. PRIYA SINGH</div>
                <div>3. RAHUL GUPTA</div>
                <div>4. ANJALI NAYAR</div>
                <div>5. VIJARY IYER</div>
              </div>
              <button class="btn right-cc-data-container-item-btn">Add Candidate</button>
            </div>

            <div className="right-cc-data-container-item">
                  <div className="right-cc-data-container-item-data-2">
                    <div>1.SBT-V1RAK</div>
                    <div>2.SBT-V2SMI</div>
                    <div>3.SBT-V3DEE</div>
                    <div>4.SBT-V4PRE</div>
                    <div>5.SBT-V5ERT</div>
                    <div>6.SBT-V6WER</div>
                    <div>7.SBT-V7EYT</div>
                    <div>8.SBT-V8NGH</div>
                    <div>9.SBT-V9DRE</div>
                    <div>10.SBT-V10DIO</div>
                  </div>

                  <button class="btn right-cc-data-container-item-btn">Add Votes</button>
            </div>

            <div className="right-cc-data-container-item">
                  <div className="right-cc-data-container-item-data">
                    <div>Election Name: 2023 College Class Representative (CR) Nomination</div>
                    <div>Election Date: September 10, 2023</div>
                    <div>College: ABC University</div>
                    <div>Department: Computer Science</div>
                    <div>Class Section: CS-101</div>
                  </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
