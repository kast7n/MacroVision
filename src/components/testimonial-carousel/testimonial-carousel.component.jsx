import React from 'react';

import { useState, useEffect } from 'react';
import TestimonialCard from '../testimonial-card/testimonial-card.component';
import './testimonial-carousel.styles.scss';

const TestimonialCarousel = () => {
    const testimonials = [
      {
        id: 1,
        name: "Sarah Johnson",
        text: "This product has completely transformed how we work. The efficiency gains have been remarkable.",
        date: "February 10, 2025"
      },
      {
        id: 2,
        name: "Michael Chen",
        text: "The best solution I've found in years. The interface is intuitive and the support is outstanding.",
        date: "February 8, 2025"
      },
      {
        id: 3,
        name: "Emma Wilson",
        text: "We've seen a 40% increase in productivity since implementing this solution. Highly recommended!",
        date: "February 5, 2025"
      },
      {
        id: 4,
        name: "David Kumar",
        text: "The attention to detail and customer support make this product stand out from the competition.",
        date: "February 3, 2025"
      }
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const goToNext = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const goToPrevious = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }, [currentIndex]);
  
    const getPositionClass = (index) => {
      const positions = ['left', 'center', 'right', 'hidden', 'hidden'];
      const normalizedIndex = (index - currentIndex + testimonials.length) % testimonials.length;
      return positions[normalizedIndex] || 'hidden';
    };
  
    return (
      <div className="testimonial-carousel">
        <div className="testimonial-carousel-container">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              name={testimonial.name}
              text={testimonial.text}
              date={testimonial.date}
              position={getPositionClass(index)}
            />
          ))}
        </div>
  
        <div className="testimonial-navigation">
          <button
            onClick={goToPrevious}
            className="testimonial-nav-button testimonial-prev"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className="testimonial-nav-button testimonial-next"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            →
          </button>
        </div>
      </div>
    );
  };
  
  export default TestimonialCarousel;