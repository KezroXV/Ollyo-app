import React, { useEffect } from 'react';
import './Who.css';
import line2 from '../../assets/Line-2.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Who = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='who container' data-aos='fade'>
      <h1>Who is <span>Ollyo</span></h1>
      <div className="text">
        <p>We dream, design, develop, and dare to challenge the status quo and make a difference. We strive to develop a rich culture by expanding our horizons and bringing you ideas outside of the box.</p>
        <img src={line2} alt="" />
        <p>We transform web solutions with our innovative and future-proof software products, empowering businesses to thrive and scale in the ever-evolving digital landscape.</p>
        <img src={line2} alt="" />
        <p>We bring together a team of experts with the latest technologies to build high-quality software solutions for businesses.</p>
      </div>
      <hr />
    </div>
  );
};

export default Who;
