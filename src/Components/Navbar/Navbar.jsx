import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <nav className='container'>
      <Link to={"/"}><img src={logo} alt="" className='logo'></img></Link>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/Brands"}>Brands</Link></li>
        <li><Link to={"/About"}>About</Link></li>
        <li><Link to={"/Blog"}>Blog</Link></li>
        <li><Link to={"/Contact"}>Contact</Link></li>
        <li><Link to={"/Careers"}><button className='btn'>Careers</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar