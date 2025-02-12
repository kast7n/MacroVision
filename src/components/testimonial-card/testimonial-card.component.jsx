import React from 'react';
import './Testimonial-Card.styles.scss';

const TestimonialCard = ({ name, text, date }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="quote">{text}</p>
        <div className="info">
          <p className="name">{name}</p>
          <p className="date">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;