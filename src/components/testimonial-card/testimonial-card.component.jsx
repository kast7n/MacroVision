import React from 'react';
import './testimonial-card.styles.scss';

const TestimonialCard = ({ name, description, date, isActive = false }) => {
  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
      <div className="testimonial-content">
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-description">{description}</p>
        <span className="testimonial-date">{date}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;