import React, { useEffect } from 'react';
import img1 from '../../assets/img1.png'
import Title from '../Title/Title'
import './AboutBox.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
const AboutBox = ({text,img}) => {
  return (
    <div className='aboutBox container' data-aos="fade-right">
      <div className="box">
        <p className='p3'>{text}</p>
        <img src={img} alt=""/>
      </div>
    </div>
  )
}

export default AboutBox