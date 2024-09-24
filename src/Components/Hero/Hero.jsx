import React, { useEffect } from 'react';
import './Hero.css'
import line from '../../assets/Line-1.png'
import brands from '../../assets/brands.png'
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Hero = () => {
  return (
    <div className='hero container' data-aos="fade-right">
      <h1>Shaping the Future of the Web</h1>
      <p>"Olly: Powering Your Digital World, Without Code ."</p>
      <div className="trusted">
        <img src={line} alt="" />
        <h3>Trusted by Leading Brands Everywhere.</h3>
        <img src={line} alt="" />
      </div>
      <img src={brands} alt="" className='brands'/>
      <Link to={"./brands"}><button className="btn dark-btn">Learn more</button></Link>
    </div>
  )
}

export default Hero