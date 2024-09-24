import React from 'react';
import './Badges.css';

const badges = [
  "Excellent Culture & Environment",
  "Relax & Sports zone",
  "Meals, Coffee & Snacks",
  "Dual Festival Bonuses",
  "Annual Pleasure Tour",
  "Muslim Prayer Zone",
  "Gym Facilities",
  "Leave Encashment",
  "Free Shuttle Service",
  "Loyalty Bonus",
  "Work Experience Gains"
];

const Badges = () => {
  return (
    <div className="badges-container container" data-aos="fade-down">
      {badges.map((badge, index) => (
        <div key={index} className="badge">
          {badge}
        </div>
      ))}
    </div>
  );
};

export default Badges;
