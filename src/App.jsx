import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Who from './Components/Who/Who';
import Number from './Components/Number/Number';
import Title from './Components/Title/Title';
import Cards from './Components/Card/Card';
import FAQComponent from './Components/faq/faq';
import Footer from './Components/Footer/Footer';
import './Components/Bubbles/Bubbles.css';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Rafraîchit les animations après le chargement initial
  }, []);
    
  return (
    <div>   
      
      <Navbar/>
        <Hero />
        <Who />
      <Title subsubTitle='Numbers' />  
        <Number/> 
      <Title subTitle='Find Your Shine ' />
      <Cards/>
      <Title 
        subTitle='Become a part of Ollyo' 
        par={'Join our team and unleash your talents in a dynamic and supportive environment. We offer diverse opportunities across various departments where you can make a real impact and grow professionally. Explore our teams and find your place with us today.'} 
      />
      <Link to={"/Careers"}>
        <button className='btn'>Careers</button>
      </Link>
      <FAQComponent/>
      <hr />
      <Footer/>
    </div>
  );
};

export default App;
