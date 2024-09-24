import React, { useState , useEffect} from "react";
import './Contact.css';
import img4 from '../../assets/img4.png';
import emailIcon from '../../assets/email-icon.png';
import phoneIcon from '../../assets/phone-icon.png';
import locationIcon from '../../assets/location-icon.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Contact = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = () => {
    // Logique d'envoi du message ici
    setIsMessageSent(true);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh(); // Rafraîchit les animations après le chargement initial
  }, []);
    
  return (
    <div className="contact-container container" >
      <div className="contact-left form container" data-aos="fade-right">
        <h4>Contact us</h4>
        <h1 className="title">Get in Touch</h1>
        <label>Last Name First Name</label>
        <input type="text" placeholder="Enter Your LastName and First Name" required/>
        <label>Email</label>
        <input type="text" placeholder="Enter Your Email" required/>
        <label>Subject</label>
        <input type="text" placeholder="Enter The Subject Title" required/>
        <label>Message</label>
        <div className="contact-form">
          <textarea
            className="question-input A"
            placeholder="Ask us what you want to know..."
          required />
          <div className="send">
            <p className="response-time">
              We will answer your question via email within 48 hours.
            </p>
            <button className="btn " onClick={handleSubmit}>Send</button>
          </div>
          {isMessageSent && (
          <p className="response-time success-message">
            Your message has been successfully sent!
          </p>
        )}
        </div>
      </div>
      <div className="contact-right" data-aos="fade-left">
        <img src={img4} alt="Contact illustration" className="contact-image" data-aos="fade-left"/>
        <div className="contact-box" >
          <img src={emailIcon} alt="Email Icon" className="contact-icon" />
          <div>
            <p className="contact-label" >Email</p>
            <p className="contact-text">hello@ollyo.com</p>
          </div>
        </div>
        <div className="contact-box" >
          <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
          <div>
            <p className="contact-label">Phone</p>
            <p className="contact-text">+880 17 4293 3775</p>
          </div>
        </div>
        <div className="contact-box" >
          <img src={locationIcon} alt="Location Icon" className="contact-icon" />
          <div>
            <p className="contact-label">Localisation</p>
            <p className="contact-text">
              1 Quantum Drive, Patira, Dhaka - 1229 Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
