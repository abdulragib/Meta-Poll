import React from 'react'
import './Admin.css'
const Admin = () => {
  return (
    <div className="admin">
       <div className='left'>
        <button className="btn">
            WALLET ADDRESS
        </button>
        </div>
       <div className='right-a'>
        <h1 className="home-Title">MetaPoll</h1>
        <button className='btn btn-right'>Create Campaign</button>
        <button className='btn btn-right'>Check Progress</button>
       </div>
    </div>
  )
}

export default Admin