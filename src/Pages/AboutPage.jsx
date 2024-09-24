import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Title from '../Components/Title/Title'
import img1 from '../assets/img1.png'
import AboutBox from '../Components/AboutBox/AboutBox'
import img2 from '../assets/img2.png'
import Number from '../Components/Number/Number'
import Footer from '../Components/Footer/Footer'
import CoreValue from '../Components/CoreValue/CoreValue'
import Team from '../Components/Team/Team'

const AboutPage = () => {
  return (
    <div className='container'>
      <Navbar></Navbar>
      <Title subTitle={"About Ollyo"}/>
      <AboutBox text={"We dream, design, develop, and dare to challenge the status quo and make a difference. We strive to develop a rich culture by expanding our horizons and bringing you ideas outside of the box."} img={img1}/>
      <hr/>
      <Title subTitle={"Ollyo's Vision"}/>
      <AboutBox img={img2} text={"Our vision is to empower every business with technology, unlocking their fullest potential seamlessly and efficiently."} />
      <hr/>
      <Number/>
      <Title subTitle={'Core Values'} par={"Our core values of integrity, innovation, collaboration, and excellence drive everything we do."}/>
      <CoreValue></CoreValue>
      <Title subTitle={"Leadership Team"} par={"Our commitment is to build a diverse team in every aspect. With radical candor, we admit we’re not there yet. To achieve this, we need talented people like you."}/>
      <button className="btn dark-btn">Learn more</button>
      <Team/>
      <hr />
      <Footer/>
      </div>
  )
}
export default AboutPage