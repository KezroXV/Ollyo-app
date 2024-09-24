import React, { useState } from "react";
import './faq.css';
import upArrow from '../../assets/up.png';
import downArrow from '../../assets/down.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

function FAQComponent() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = () => {
    // Logique d'envoi du message ici
    setIsMessageSent(true);
  };

  return (
    <div className="faq-container" data-aos="fade-right">
      {/* FAQ 1 */}
      <div className="faq-item">
        <button
          className={`faq-question ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => toggleFaq(1)}
        >
          HOW TO APPLY AT OLLYO?
          <span>
            <img
              src={activeIndex === 1 ? upArrow : downArrow}
              alt={activeIndex === 1 ? "Up arrow" : "Down arrow"}
              width="12"
            />
          </span>
        </button>
        <div className={`faq-answer ${activeIndex === 1 ? 'show' : ''}`}>
          <p>
            To apply, review our current openings to find a role that aligns
            with your skills and expertise. Start by providing your email
            address. After verification, you'll receive a link to proceed with
            your application.
          </p>
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="faq-item">
        <button
          className={`faq-question ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => toggleFaq(2)}
        >
          WHAT ARE THE STEPS INVOLVED?
          <span>
            <img
              src={activeIndex === 2 ? upArrow : downArrow}
              alt={activeIndex === 2 ? "Up arrow" : "Down arrow"}
              width="12"
            />
          </span>
        </button>
        <div className={`faq-answer ${activeIndex === 2 ? 'show' : ''}`}>
          <p>
            The steps include submitting your resume, an interview process,
            and a final review of your application.
          </p>
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="faq-item">
        <button
          className={`faq-question ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => toggleFaq(3)}
        >
          WHEN DOES THE APPLICATION PROCESS START?
          <span>
            <img
              src={activeIndex === 3 ? upArrow : downArrow}
              alt={activeIndex === 3 ? "Up arrow" : "Down arrow"}
              width="12"
            />
          </span>
        </button>
        <div className={`faq-answer ${activeIndex === 3 ? 'show' : ''}`}>
          <p>
            The process starts as soon as you submit your application. We will
            review and get back to you within 48 hours.
          </p>
        </div>
      </div>

      {/* Contact form */}
      <div className="contact-form">
        <textarea
          className="question-input"
          placeholder="Ask us what you want to know..."
        />
        <div className="send">
          <p className="response-time">
            We will answer your question via email within 48 hours.
          </p>
          <button className="btn" onClick={handleSubmit}>Send</button>
        </div>
        
        {isMessageSent && (
          <p className="response-time success-message">
            Your message has been successfully sent!
          </p>
        )}
      </div>
    </div>
  );
}

export default FAQComponent;
