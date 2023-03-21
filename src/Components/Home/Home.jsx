import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
       <div className='left'>
        <button className="btn">
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