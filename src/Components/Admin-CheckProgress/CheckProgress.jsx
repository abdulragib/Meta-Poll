import React from 'react'
import './CheckProgress.css'

const CheckProgress = () => {
  return (
    <div className="check-progress">
       <div className='left'>
        <button className="btn">
            WALLET ADDRESS
        </button>
        </div>
       <div className='right-cp'>
        <h1 className="home-Title">MetaPoll</h1>
        <div className="right-cp-btn-group">
          <button className='btn btn-right' onClick={""}>Active Campaign</button>
          <button className='btn btn-right'>Ended Campaign</button>
        </div>
        <div className="right-cp-data-container">
          <div className="right-cp-data-container-one">
            <div className='right-cp-data-container-item'></div>
            <div className='right-cp-data-container-item'></div>
            <div className='right-cp-data-container-item'></div>
          </div>

          <div className="right-cp-data-container-two">
            <div className='right-cp-data-container-item'></div>
            <div className='right-cp-data-container-item'></div>
            <div className='right-cp-data-container-item'></div>
          </div>
          
        </div>
       </div>
    </div>
  )
}

export default CheckProgress