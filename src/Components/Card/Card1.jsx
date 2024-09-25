import React from "react";
import './Card.css'; // Ensure to style images in your CSS if necessary

import soft from '../../assets/diam.png'
import ui from '../../assets/Circles.png'
import ai from '../../assets/squares.png'
import project from '../../assets/syn.png'
import marketing from '../../assets/Grown.png'
import support from '../../assets/support.png'
import research from '../../assets/Heart.png'
import security from '../../assets/tri.png'


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
        title="Excellence & innovation"
        description="Prioritizing continuous improvement and creative solutions in our products and services."
        imgSrc={soft}
      />

      <Card
        title="Empathy and respect"
        description="Emphasizing understanding and consideration in our diverse and inclusive culture."
        imgSrc={ui}
      />

      <Card
        title="Integrity & accountability"
        description="Committing to ethical practices and taking responsibility for our actions."
        imgSrc={ai}
      />

      <Card
        title="Synergy & collaboration"
        description="Valuing cooperative efforts and shared achievements for greater success."
        imgSrc={project}
      />

      <Card
        title="Growth & development"
        description="Encouraging personal and professional advancement through proactive learning and collaboration."
        imgSrc={marketing}
      />

      <Card
        title="Supportive culture"
        description="Focusing on helping each other and our customers with a proactive and caring approach."
        imgSrc={support}
      />

      <Card
        title="Joy & engagement"
        description="Creating a vibrant atmosphere where passion and interests contribute to a fulfilling work experience."
        imgSrc={research}
      />

      <Card
        title="Adaptability & agility"
        description="Embracing change and responding swiftly to evolving business and customer needs."
        imgSrc={security}
      />
    </div>
  );
};

export default Cards;
