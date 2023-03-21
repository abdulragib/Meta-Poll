import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Home.css';

const Home = () => {
  const Navigate=useNavigate();
  const handleClick=()=>{
    Navigate('/admin')
  }
  return (
    <div className="home">
       <div className='left'>
        <button className="btn" onClick={handleClick}>
            CONNECT WALLET
        </button>
        </div>
       <div className='right-h'>
        <h1 className="home-Title">MetaPoll</h1>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br>
            when an unknown printer took a galley</span>
       </div>
    </div>
  )
}

export default Home