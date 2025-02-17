import React, { useState, useEffect } from 'react';
import './navbar.styles.scss';
import LogoImage from '/src/assets/images/global/LogoNoText.png'; // Update with your actual logo path

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Sections configuration
  const sections = [
    'WhyUs', 'Testimonials', 'FAQ', 'About', 'Contact'
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  // Handle scroll event for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down from the top
      setIsScrolled(window.scrollY > 0);

      // Determine active section
      const scrollPosition = window.scrollY;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop - 100 && 
          scrollPosition < offsetTop + offsetHeight - 100
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : 'navbar--top'}`}>
      <div className="navbar__container">
        <div 
          className={`navbar__logo ${activeSection === 'home' ? 'navbar__logo--active' : ''}`}
          onClick={() => scrollToSection('home')}
        >
          <img 
            src={LogoImage} 
            alt="macroVision Logo" 
            className="navbar__logo-image"
          />
          <span className="navbar__logo-text">MacroVision</span>
        </div>

        {/* Hamburger Icon */}
        <div 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`hamburger__line ${isMenuOpen ? 'hamburger__line--open' : ''}`} />
          <div className={`hamburger__line ${isMenuOpen ? 'hamburger__line--open' : ''}`} />
          <div className={`hamburger__line ${isMenuOpen ? 'hamburger__line--open' : ''}`} />
        </div>

        {/* Navigation Links */}
        <div className={`navbar__navigation ${isMenuOpen ? 'navbar__navigation--open' : ''}`}>
          {[
            { id: 'WhyUs', label: 'Why Us?' },
            { id: 'Testimonials', label: 'Testimonials' },
            { id: 'FAQ', label: 'FAQ' },
            { id: 'About', label: 'About' },
            { id: 'Contact', label: 'Contact Us' }
          ].map(({ id, label }) => (
            <span 
              key={id}
              className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;