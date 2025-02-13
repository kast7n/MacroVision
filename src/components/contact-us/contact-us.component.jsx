import React, { useEffect, useRef } from 'react';
import './contact-us.styles.scss';

const ContactUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        section.classList.add('contact-us--visible');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='Contact' className="contact-us" ref={sectionRef}>
      <div className="contact-us__container">
        <div className="contact-us__info">
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to discuss a project, please fill out the form below and we will get back to you as soon as possible.</p>
        </div>
        <div className="contact-us__form">
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="projectDetails">Project Details</label>
              <textarea id="projectDetails" name="projectDetails" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;