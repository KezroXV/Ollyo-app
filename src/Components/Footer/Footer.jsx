import React, { useState } from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import linkedin from '../../assets/Linkedin.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <footer className='container'>
      <div class="row">
        <div class="col">
          <img src={logo} alt=""/>

        </div>
        <div class="col">
          <h3>Office</h3>
          <p class="text4">1 Quantum Drive,   </p>
          <p class="text4">Patira, Dhaka -</p>
          <p class="text4"> 1229  </p>
          <p class="text4">Bangladesh</p>
          <p class="email-id">hello@ollyo.com</p>
          <h4 class="number">+880 17 4293 3775</h4>
        </div>
        <div class="col">
          <h3>Brands</h3>
          <ul>
            <li><a href="index.html">JoomShaper</a></li>
            <li><a href="About.html">Themeum</a></li>
            <li><a href="Solutions.html">Droip</a></li>
            <li><a href="News.html">IcoFont</a></li>
          </ul>
        </div>
        <div class="col">
          <h3>Company</h3>
          <ul >
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/Brands"}>Brands</Link></li>
          <li><Link to={"/About"}>About</Link></li>
          <li><Link to={"/Blog"}>Blog</Link></li>
          </ul>
        </div>
        <div class="col">
          <h3>Follow us</h3>
          <form action="">
            <input type="email" placeholder="Enter your E-mail" required/>
            <button type="submit">subscribe</button>
          </form>
          <div class="social">
            <img src={linkedin} alt=""/>
            <img src={twitter} alt=""/>
            
          </div>
        </div>
      </div>
      <hr/>
      <div class="end">
      <p class="copyright">© 2024 Ollyo. All rights reserved.</p>
        <ul >
          <li className='li-pp'><a href="">Privacy Policy</a></li>
          <li className='li-pp'><a href="">Legal Notice</a></li>
        </ul>
    </div>
    </footer>
  )
}

export default Footer