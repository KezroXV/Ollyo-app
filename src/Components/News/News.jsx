import React, { useEffect } from 'react';
import './News.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

const News = ({title, date,image,C1,C2,C3}) => {
  return (
    <div className='news container' data-aos="fade-up">
      <div className='news-box'>
        <img src={image} alt="" />
        <h1 className="title-news">{title}</h1>
        <p className="p4">{date}</p>
        {C1 && <p className=" green">{C1}</p>}
      {C2 && <p className=" green">{C2}</p>}
      {C3 && <p className=" green">{C3}</p>}
      </div>
    </div>
  )
}

export default News