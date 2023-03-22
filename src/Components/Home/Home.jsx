import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/admin");
  };

  const handleClickOne=()=>{
    Navigate("/user");
  }
  return (
    <div className="home">
      <div className="left left-btn">
        <button className="btn">
          CONNECT WALLET
        </button>
        <button className="btn" onClick={handleClick}>Admin Panel</button>
        <button className="btn" onClick={handleClickOne}>User Panel</button>
      </div>
      <div className="right-h">
        <h1 className="home-Title">MetaPoll</h1>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.<br></br>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,<br></br>
          when an unknown printer took a galley
        </span>
      </div>
    </div>
  );
};

export default Home;
