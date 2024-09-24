import React, { useEffect } from 'react';
import './Card.css'; // Ensure to style images in your CSS if necessary

import soft from '../../assets/Software.png'
import ui from '../../assets/ui.png'
import ai from '../../assets/ai.png'
import project from '../../assets/project.png'
import marketing from '../../assets/marketing.png'
import sales from '../../assets/sales.png'
import research from '../../assets/Research.png'
import security from '../../assets/security.png'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Card = ({ title, description, imgSrc }) => (
  <div className="card">
    <div className="icon">
      <img src={imgSrc} alt={title} className="icon-image" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);


const Cards = () => {
  return (
    <div className="container1" data-aos="fade-right">
      <Card
        title="Software Engineering"
        description="Dive into complex challenges with a top-tier engineering team, crafting innovative software solutions."
        imgSrc={soft}
      />

      <Card
        title="UI & UX"
        description="Collaborate with creative minds to design captivating user experiences and interfaces that stand out."
        imgSrc={ui}
      />

      <Card
        title="Artificial Intelligence"
        description="Push the boundaries of AI, developing cutting-edge applications that redefine what's possible."
        imgSrc={ai}
      />

      <Card
        title="Project Management"
        description="Lead projects from concept to completion, ensuring seamless execution and outstanding results."
        imgSrc={project}
      />

      <Card
        title="Marketing"
        description="Propel our brand forward by crafting compelling narratives and strategies that capture and engage our audience."
        imgSrc={marketing}
      />

      <Card
        title="Sales"
        description="Excel in a dynamic sales environment, connecting with global clients to deliver tech solutions that meet their needs."
        imgSrc={sales}
      />

      <Card
        title="Research"
        description="Contribute to groundbreaking research, exploring new technologies and methodologies to fuel innovation."
        imgSrc={research}
      />

      <Card
        title="Security"
        description="Safeguard our digital assets, ensuring the highest levels of security and resilience against evolving threats."
        imgSrc={security}
      />
    </div>
  );
};

export default Cards;
