import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../testimonial-card/testimonial-card.component';
import './testimonial-carousel.styles.scss';

const testimonials = [
    {
      name: "Sarah Chen",
      description: "The customer support team went above and beyond to help me resolve my issue. Not only did they fix the problem quickly, but they also provided additional tips to prevent similar issues in the future.",
      date: "March 8, 2024"
    },
    {
      name: "Michael Rodriguez",
      description: "I was skeptical at first, but after using this service for three months, I can confidently say it has transformed how we handle our project management. The efficiency gains are remarkable.",
      date: "March 2, 2024"
    },
    {
      name: "Emily Thompson",
      description: "The attention to detail and quality of work exceeded my expectations. What impressed me most was how they took the time to understand our unique needs and tailored their solution accordingly.",
      date: "February 28, 2024"
    },
    {
      name: "David Patel",
      description: "Implementation was seamless, and the ROI was evident within weeks. Our team's productivity has increased by 40%, and we're now able to handle twice the workload with the same resources.",
      date: "February 25, 2024"
    },
    {
      name: "Alexandra Wright",
      description: "The innovative approach and user-friendly interface make this platform stand out from competitors. It's refreshing to find a solution that combines powerful features with simplicity of use.",
      date: "February 20, 2024"
    }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);
  const slideWidth = 350; // Width of each slide in pixels

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((current) => {
      const newIndex = current === 0 ? testimonials.length - 1 : current - 1;
      return newIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((current) => {
      const newIndex = current === testimonials.length - 1 ? 0 : current + 1;
      return newIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    const totalItems = testimonials.length;
    
    // Create array of indices for visible cards
    for (let i = -2; i <= 2; i++) {
      let index = activeIndex + i;
      
      // Handle wrapping
      if (index < 0) index = totalItems + index;
      if (index >= totalItems) index = index - totalItems;
      
      result.push({
        index,
        offset: i,
        testimonial: testimonials[index]
      });
    }
    
    return result;
  };

  return (
    <div 
    id='Testimonials'
      className={`testimonial-carousel-wrapper partial-component ${isVisible ? 'testimonial-carousel-visible' : ''}`}
      ref={carouselRef}
    >
      <div className="testimonial-carousel-container">
        <button 
          className="testimonial-carousel-arrow testimonial-carousel-arrow-left"
          onClick={handlePrevious}
          disabled={isAnimating}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="testimonial-carousel-track">
          {getVisibleTestimonials().map(({ index, offset, testimonial }) => (
            <div
              key={index}
              className={`testimonial-carousel-slide ${offset === 0 ? 'active' : ''}`}
              style={{
                '--slide-offset': offset,
              }}
            >
              <TestimonialCard
                {...testimonial}
                isActive={offset === 0}
              />
            </div>
          ))}
        </div>

        <button 
          className="testimonial-carousel-arrow testimonial-carousel-arrow-right"
          onClick={handleNext}
          disabled={isAnimating}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="testimonial-carousel-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-carousel-indicator ${index === activeIndex ? 'testimonial-carousel-indicator-active' : ''}`}
            onClick={() => !isAnimating && setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;