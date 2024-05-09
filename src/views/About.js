import React from 'react';
import Navbar from '../components/Navbar';
import './About.scss'; 

const About = () => {
  return(
    <>
      <Navbar className="color-about" />
      <div className='main-tab-about'>
      <div className='content'>
      <h1>ITS <span className="italic">PRIS.</span></h1>
      <p> PRISCILLA CABRERA IS AN ARTIST BASED IN NEW JERSEY. SHE SPECIALIZES IN EDITORIAL PHOTOGRAPHY AND EVENT PHOTOGRAPHY. </p>
      <p>PRISPRODUCED INSPIRED BY AUTHENTICITY, STYLE, AND COLOR, PRISCILLA’S WORK IS ROOTED IN CONFIDENCE AND GLAMOR WHILE REMAINING FRESH AND RAW.</p>
      </div>
      </div>
    </>
  );
};

export default About;
