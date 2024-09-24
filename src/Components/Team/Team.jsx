import React, { useEffect } from 'react';
import './Team.css'
import member1 from '../../assets/member1.png'
import member2 from '../../assets/member2.png'
import member3 from '../../assets/member3.png'
import member4 from '../../assets/member4.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
const Team = () => {
  return (
    <div className='Team container' >
      <div className="Team-elt" data-aos="fade">
      <img src={member1} alt="" />
      <h4>Founder & ceo</h4>
      </div>
      <div className="Team-elt" data-aos="fade">
      <img src={member2} alt="" />
      <h4>Director of design</h4>
      </div>
      <div className="Team-elt" data-aos="fade">
      <img src={member3} alt="" />
      <h4>Principal soft-ware enginner</h4>
      </div><div className="Team-elt" data-aos="fade">
      <img src={member4} alt="" />
      <h4>Vp of product</h4>
      </div>
    </div>
  )
}

export default Team