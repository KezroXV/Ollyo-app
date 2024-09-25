import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Title from '../Components/Title/Title'
import BrandsBox from '../Components/BrandsBox/BrandsBox'
import Footer from '../Components/Footer/Footer'
const BrandsPage = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Title subTitle={'Our Trusted Brands Network'} par={'"Discover the brands that trust us to deliver innovative solutions and drive success. We’re proud to collaborate with industry leaders and pioneers across various sectors."'} ></Title>
      <BrandsBox></BrandsBox>
      <hr />
      <Footer></Footer>
    </div>
  )
}

export default BrandsPage