import React from 'react';
import Navbar from '../components/Navbar';
import './Work.scss'; 

const Work = () => {
  return(
    <>
      <Navbar className="color-work" />
      <div className='main-tab-work'>
        <h1>EDITORIAL EVENTS</h1>
        <h1>EXTRA</h1>
      </div>
    </>
  );
};

export default Work;
