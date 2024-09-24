import React, { useRef } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AboutBox from '../Components/AboutBox/AboutBox';
import img3 from '../assets/img3.png';
import Title from '../Components/Title/Title';
import Badges from '../Components/Badges/Badges';
import Footer from '../Components/Footer/Footer';
import Card1 from '../Components/Card/Card1';
import Jobs from '../Components/Jobs/Jobs';

const CareersPage = () => {
  // Créer une référence pour la section "Current Openings"
  const openingsRef = useRef(null);

  // Fonction pour scroller jusqu'à "Current Openings"
  const scrollToOpenings = () => {
    if (openingsRef.current) {
      // Utiliser 'scrollIntoView' avec des options pour forcer le défilement fluide
      openingsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <Navbar />
      <Title subTitle={"Ollyo Careers"} />
      <AboutBox text={"Driven by an endless curiosity, we offer the freedom to forge new paths and the support to grow at your own pace. Embrace continuous learning and explore the vast opportunities ahead."} img={img3} />
      
      {/* Bouton qui scrolle vers "Current Openings" */}
      <button className='btn dark-btn' onClick={scrollToOpenings}>See pricing</button>

      <hr />

      <Title subTitle={"Benefits"} par={"Working at Ollyo offers you a lot of benefits."} />
      <Badges />

      <Title subTitle={"Our Values"} par={"We value a people-first culture, quality craftsmanship, unwavering support, respectful interactions, and a commitment to growth & responsibility. Together, we cultivate an inclusive workplace where innovation thrives and fun flourishes."} />
      <Card1 />

      {/* Section "Current Openings" avec la référence */}
      <div ref={openingsRef}>
        <Title subTitle={"Current Openings"} par={"Join our team and contribute to shaping the future of technology. We're looking for passionate, innovative, and dedicated individuals to fill the following roles."} />
        <Jobs />
      </div>

      <Footer />
    </div>
  );
};

export default CareersPage;
