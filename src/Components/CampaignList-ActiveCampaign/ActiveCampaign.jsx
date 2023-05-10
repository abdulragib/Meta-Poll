import React from 'react'
import './ActiveCampaign.css'

const ActiveCampaign = () => {
  
  return (
    <div className="active-campaign">
       <div className='left'>
        <button className="btn">
            WALLET ADDRESS
        </button>
        </div>
       <div className='right-ac'>
        <h1 className="home-Title">MetaPoll</h1>
        <h2 className="home-Title-description">NAME</h2>
        <div className='right-ac-data'>
        <div className='right-ac-data-btn-group'>
            <button className='btn btn-right'>Total Votes</button>
            <button className='btn btn-right'>Ending Time</button>
        </div>
        <div className="right-ac-data-container">
            <div className='right-ac-data-container-item'>500</div>
            <div className='right-ac-data-container-item'>13 May 2023</div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default ActiveCampaign