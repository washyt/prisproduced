import React from 'react';
import Navbar from '../components/Navbar';
import './Editorial.scss'; // Path to your SCSS file for this view

const Editorial = () => {
  return (
    <div>
      <Navbar className="color-about" />
      <div className = 'spacer'/> 
      <div className="grid-container">
        <img src={`${process.env.PUBLIC_URL}/imgs/edit1.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit2.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit3.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit4.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit5.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit6.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit7.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit8.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit9.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit10.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit11.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit12.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit13.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit14.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit15.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit16.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit17.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit18.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit19.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit20.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit21.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit22.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit23.jpg`} alt="Example" />
        <img src={`${process.env.PUBLIC_URL}/imgs/edit24.jpg`} alt="Example" />
        

      </div>
      <div className="bottom-link-editorial">
        <a href="/events">Events &#8250; </a>
      </div>
    </div>
  );
};

export default Editorial;