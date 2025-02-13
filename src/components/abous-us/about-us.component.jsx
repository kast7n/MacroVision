import React, { useEffect, useRef, useState } from 'react';
import './about-us.styles.scss';
import { CheckCircle, CreditCard, MessageCircle } from 'lucide-react';

const AboutBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutBoxRef = useRef(null);

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

    if (aboutBoxRef.current) {
      observer.observe(aboutBoxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`about-box partial-component ${isVisible ? 'about-box-visible' : ''}`}
      ref={aboutBoxRef}
    >
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>Helping companies <span className="about-highlight">evolve</span></h1>
          <p>Join Macro Vision and improve your business. Get in-depth insights, video updates, and expert analysis.</p>
        </div>
        <div className="about-hero-image">
          <img src="/src/assets/images/components/about-us/What_is_Data_Analysis.jpg" alt="Trading Illustration" />
        </div>
      </div>
      
      <hr className="about-section-divider" />
      
      {/* How We Work Section */}
      <div className="about-how-we-work">
        <h2>HOW <span className="about-highlight">WE WORK</span></h2>
        <p className="about-description">We provide expert market insights, real-time Q&A sessions, and a strong community to enhance your trading skills. Our team of professionals is dedicated to helping you achieve your financial goals through comprehensive analysis and personalized support.</p>
      </div>
      
      <hr className="about-section-divider" />
      
      {/* Get Started Section */}
      <div className="about-get-started">
        <h2>Get started <span className="about-highlight">for free</span></h2>
        <div className="about-steps-wrapper">
          <div className="about-steps-container">
            <div className="about-steps">
              <div className="about-step">
                <CheckCircle className="step-icon" />
                <h3>Step #1</h3>
                <p>Select a plan</p>
              </div>
              <div className="about-step-arrow">→</div>
              <div className="about-step">
                <CreditCard className="step-icon" />
                <h3>Step #2</h3>
                <p>Purchase subscription</p>
              </div>
              <div className="about-step-arrow">→</div>
              <div className="about-step">
                <MessageCircle className="step-icon" />
                <h3>Step #3</h3>
                <p>Join our Discord</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <hr className="about-section-divider" />
      
      {/* Ready To Go Section */}
      <div className="about-ready-to-go">
        <h2>Ready to go?</h2>
        <div className="about-buttons">
          <button className="about-secondary-button" onClick={() => document.getElementById('contact-us').scrollIntoView()}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
