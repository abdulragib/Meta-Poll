import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/admin/create-campaign");
  };

  const handleClickTwo = () => {
    Navigate("/admin/check-progress");
  };
  return (
    <div className="admin">
      <div className="left">
        <button className="btn">WALLET ADDRESS</button>
      </div>
      <div className="right-a">
        <h1 className="home-Title">MetaPoll</h1>
        <button className="btn btn-right" onClick={handleClick}>
          Create Campaign
        </button>
        <button className="btn btn-right" onClick={handleClickTwo}>
          Check Progress
        </button>
      </div>
    </div>
  );
};

export default Admin;
