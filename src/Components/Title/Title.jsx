import './Title.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';

const Title = ({subsubTitle,subTitle, title,par,BTN}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Rafraîchit les animations après le chargement initial
  }, []);
    
  return (
    <div className='title' data-aos="fade">
      <p className='p2'>{subsubTitle}</p>
      <h1>{subTitle}</h1>
      <h2>{title}</h2>
      <p className="p3">{par}</p>
    </div>
  )
}

export default Title