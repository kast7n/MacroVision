import React from 'react';
import './footer.styles.scss';
import { Linkedin, Instagram } from 'lucide-react';
import LogoImage from '/src/assets/images/global/MacroVision 2025-10.png'; // Update with your actual logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={LogoImage} alt="MacroVision Logo" />
          <span className="footer__text">MacroVision</span>
        </div>
        <div className="footer__social">
          <a href="https://www.linkedin.com/company/macrovision-tech/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="footer__icon" />
          </a>
          <a href="https://www.instagram.com/macrovision.io" target="_blank" rel="noopener noreferrer">
            <Instagram className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;