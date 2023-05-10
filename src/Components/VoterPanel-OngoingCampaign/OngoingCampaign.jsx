import React, { useState } from "react";
import "./OngoingCampaign.css";
const OngoingCampaign = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("");

  const handleCandidateSelection = (e) => {
    setSelectedCandidate(e.target.value);
  };
  return (
    <div className="ongoing-campaign">
      <div className="left">
        <button className="btn">WALLET ADDRESS</button>
      </div>
      <div className="right-oc">
        <h1 className="home-Title">MetaPoll</h1>
        <h2 className="right-oc-name">CR NOMINATION D2001</h2>
        <div className="right-oc-data">
          <div className="right-oc-left">
            <button className="btn btn-right">Rahul Kumar</button>
            <button className="btn btn-right">Vidhan Chandra</button>
            <button className="btn btn-right">Gaurav Kumar</button>
            <button className="btn btn-right">Samrat Mandal</button>
          </div>
          <div className="right-oc-right">
            <input
              type="checkbox"
              className="right-oc-right-item"
              value="Candidate 1"
              checked={selectedCandidate === "Candidate 1"}
              onChange={handleCandidateSelection}
            ></input>
            <input
              type="checkbox"
              className="right-oc-right-item"
              value="Candidate 2"
              checked={selectedCandidate === "Candidate 2"}
              onChange={handleCandidateSelection}
            ></input>
            <input
              type="checkbox"
              className="right-oc-right-item"
              value="Candidate 3"
              checked={selectedCandidate === "Candidate 3"}
              onChange={handleCandidateSelection}
            ></input>
            <input
              type="checkbox"
              className="right-oc-right-item"
              value="Candidate 4"
              checked={selectedCandidate === "Candidate 4"}
              onChange={handleCandidateSelection}
            ></input>
          </div>
        </div>
        <button className="btn right-oc-vote">Vote</button>
      </div>
    </div>
  );
};

export default OngoingCampaign;
