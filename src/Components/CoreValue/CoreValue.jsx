import React, { useState } from "react";
import './CoreValue.css';
import upArrow from '../../assets/up.png'
import downArrow from '../../assets/down.png'
import 'aos/dist/aos.css';
import AOS from 'aos';

function CoreValue() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" data-aos="fade-right">
      {/* FAQ 1 */}
      <div className="faq-item">
        <button
          className={`faq-question ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => toggleFaq(1)}
        >
          EXCELLENCE IN QUALITY
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
          Committing to the highest standards in our products and processes, with a relentless pursuit of innovation and improvement.
          </p>
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="faq-item">
        <button
          className={`faq-question ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => toggleFaq(2)}
        >
          EMPATHY AND SUPPORT
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
          Emphasizing understanding and consideration in our diverse and inclusive culture.
          </p>
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="faq-item">
        <button
          className={`faq-question ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => toggleFaq(3)}
        >
          GROWTH AND ACCOUNTABILITY
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
          Encouraging personal and professional advancement through proactive learning and collaboration.
          </p>
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="faq-item">
        <button
          className={`faq-question ${activeIndex === 4 ? 'active' : ''}`}
          onClick={() => toggleFaq(4)}
        >
          COLLABORATIVE WORK ENVIRONMENT
          <span>
            <img
              src={activeIndex === 4 ? upArrow : downArrow}
              alt={activeIndex === 4 ? "Up arrow" : "Down arrow"}
              width="12"
            />
          </span>
        </button>
        <div className={`faq-answer ${activeIndex === 4 ? 'show' : ''}`}>
          <p>
          Valuing cooperative efforts and shared achievements for greater success.
          </p>
        </div>
    </div>
    </div>
  );
}

export default CoreValue;