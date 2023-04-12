import React from 'react'
import './UserEndedCampaign.css'

const UserEndedCampaign = () => {
  return (
    <div className="user-ended-campaign">
      <div className="left">
        <button className="btn">WALLET ADDRESS</button>
      </div>
      <div className="right-uec">
        <h1 className="home-Title">MetaPoll</h1>
        <h2 className='home-Title-Description'>Name</h2>
         {/* Data container two */}
      <div className="right-uec-part-two">
            <div className="right-uec-part-two-btn-group">
              <div className="btn btn-right">TOTAL VOTES</div>
              <div className="btn btn-right">WINNER</div>
              <div className="btn btn-right">END DATE</div>
            </div>
            <div className="right-uec-data-container-two">
              <div className="right-uec-data-container-item-two"></div>
              <div  className="right-uec-data-container-item-two"></div>
              <div  className="right-uec-data-container-item-two"></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default UserEndedCampaign