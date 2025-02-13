import React from 'react';
import './partner-carousel.styles.scss';

const PartnerCarousel = () => {
  const partners = [
    { id: 1, src: 'src/assets/images/components/partner-carousel/MacroVision1.png', alt: 'MacroVision 1' },
    { id: 2, src: 'src/assets/images/components/partner-carousel/MacroVision2.png', alt: 'MacroVision 2' },
    { id: 3, src: 'src/assets/images/components/partner-carousel/MacroVision3.png', alt: 'MacroVision 3' },
    { id: 4, src: 'src/assets/images/components/partner-carousel/MacroVision4.png', alt: 'MacroVision 4' },
    { id: 5, src: 'src/assets/images/components/partner-carousel/MacroVision5.png', alt: 'MacroVision 5' },
    { id: 6, src: 'src/assets/images/components/partner-carousel/MacroVision6.png', alt: 'MacroVision 6' }
  ];



  return (
    <div  className="carousel-container">
      <h2 className="heading">Our Partners</h2>
      <div className="carousel-track">
        {partners.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
      <div className="carousel-track">
        {partners.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
      <div className="carousel-track">
        {partners.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;
