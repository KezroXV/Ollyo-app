import React, { useEffect } from 'react';
import './BrandsBox.css'
import logo1 from '../../assets/themeum-logo.png'
import illu1 from '../../assets/themeum-illu.png'
import logo2 from '../../assets/JOOMSHAPER-logo.png'
import illu2 from '../../assets/JOOMSHAPER-illu.png'
import logo3 from '../../assets/ICOFONT-logo.png'
import illu3 from '../../assets/ICOFONT-illu.png'
import logo4 from '../../assets/Droip-logo.png'
import illu4 from '../../assets/Droip-illu.png'
import { Link } from "react-router-dom";

const BrandsBox = () => {
  return (
    <div className='BrandsBox container'  >
      <div className="element" data-aos="fade-right">
        <div className="brandinfo">
         <div className="brand">
         <img className='brandLogo' src={logo1} alt="" />
          <h1 className="brandName">themeum</h1>
          </div>
          <div className="tt">
            <div><p className="desc">Themeum is a versatile and powerful WordPress-based platform that we utilize in our enterprise to create dynamic, feature-rich websites and eLearning solutions. It empowers our team with a wide range of tools for building custom themes, managing content, and integrating eCommerce, all without the need for extensive coding. By leveraging Themeum, we streamline web development, enhance user experiences, and deliver scalable, professional-grade digital products.</p>
            <Link  href="themeum.com"><button className="btn dark-btn link">themeum</button></Link>
            </div>
            
        <img src={illu1} alt="" className='illu1'/>
        </div>
       </div>
      </div>
      <div className="element" data-aos="fade-right">
        <div className="brandinfo">
         <div className="brand">
         <img className='brandLogo' src={logo2} alt="" />
          <h1 className="brandName">JOOMSHAPER</h1>
          </div>
          <div className="tt">
            <div>
            <p className="desc">JoomShaper is a cutting-edge Joomla-based platform we use to develop robust, flexible, and visually appealing websites for our enterprise. Its intuitive drag-and-drop page builder, extensive template library, and customizable extensions allow us to create professional websites with ease. By leveraging JoomShaper, we enhance our web development process, offering scalable, feature-rich solutions tailored to our clients' needs while maintaining high performance and design quality.</p>
            <button className="btn dark-btn link"><a href="joomshaper.com">JOOMSHAPER</a></button>
            </div>
          <img src={illu2} alt="" className='illu1'/>  
          </div>
          
        </div>
        
      </div>
      <div className="element" data-aos="fade-right">
        <div className="brandinfo">
         <div className="brand">
         <img className='brandLogo' src={logo3} alt="" />
          <h1 className="brandName">ICOFONT</h1>
          </div>
          <div className="tt">
            <div>
            <p className="desc">ICOFONT is a comprehensive icon library that we integrate into our enterprise projects to enhance visual communication and user interface design. With over 2,100 scalable vector icons, ICOFONT allows us to easily add visually appealing, high-quality icons across websites, apps, and digital products. This tool helps us create more intuitive, user-friendly experiences while maintaining a cohesive and modern design aesthetic.</p>
            <button className="btn dark-btn link"><a href="icofont.com">ICOFONT</a></button>
            </div>

        <img src={illu3} alt="" className='illu1'/> 
        </div>
          
        </div>
        
      </div>
      <div className="element" data-aos="fade-right">
        <div className="brandinfo">
         <div className="brand">
         <img className='brandLogo' src={logo4} alt="" />
          </div>
          <div className="tt">
            <div>
            <p className="desc">Droip is a cutting-edge platform we use to streamline automation and integration in our enterprise operations. It enables us to build, manage, and optimize workflows across various apps and services without needing extensive coding. By utilizing Droip, we can efficiently automate repetitive tasks, enhance collaboration, and improve productivity, all while delivering scalable, customized solutions for our business needs.</p>
            <button className="btn dark-btn link"><a href="www.droip.com">Droip</a></button>
            </div>
         <img src={illu4} alt="" className='illu1'/> 
         </div>
          
        </div>
        
      </div>
    </div>
    
  )
}

export default BrandsBox