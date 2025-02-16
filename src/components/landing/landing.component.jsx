import React from 'react';
import './landing.styles.scss';
import LandingReview from '../landing-review/landing-review.component';
import VideoPlayer from '../video-player/video-player.component';

const LandingPage = () => {
  const testimonialData = {
    rating: 5,
    testimonial: "I have done multiple projects with Mitch and honestly wish there were 6 stars that I could rate his work! I am able to give Mitch a concept of what I am wanting and he's very good at putting the scope of work together and building out the application to accomplish the mission. He is very timely and covers everything extremely well. I highly recommend using Mitch for any data type projects you have!",
    authorName: "Speck Hansen",
    authorTitle: "CEO, InfoStructure",
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-page__container">
        {/* Left Column - Text Content */}
        <div className="landing-page__content">
          <h1 className="landing-page__title">
            Supercharge Your Business with Custom No-Code Automations
          </h1>
          
          <div className="landing-page__text-content">
            <p>
              Are you a business owner tired of drowning in repetitive tasks and 
              complicated workflows? Imagine focusing solely on growing your business 
              without the constant distraction of manual processes.
            </p>
            
            <p>
              Introducing our No-Code Developer Subscription Service – the game-changer 
              you've been waiting for. Say goodbye to inefficiency and hello to 
              streamlined operations. With the power of Make.com and Bubble.io, 
              we craft custom apps specifically designed for your business needs, 
              ensuring everything runs effortlessly. Reclaim your time and watch 
              your business thrive!
            </p>
          </div>
          
          <button className="landing-page__cta-button" onClick={scrollToContact}>
            Contact Us
          </button>
        </div>

        {/* Right Column - Video and Testimonial */}
        <div className="landing-page__media">
          {/* Video Section */}
          <div className="landing-page__video-container">
            <VideoPlayer videoUrl="./src/assets/videos/videoplayertest.webm" />
          </div>

          {/* Testimonial Section */}
          <div className="landing-page__testimonial">
            <LandingReview {...testimonialData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;