import React from 'react';
import './partner-carousel.styles.scss';

import MacroVision1 from '/src/assets/images/components/partner-carousel/MacroVision1.png';
import MacroVision2 from '/src/assets/images/components/partner-carousel/MacroVision2.png';
import MacroVision3 from '/src/assets/images/components/partner-carousel/MacroVision3.png';
import MacroVision4 from '/src/assets/images/components/partner-carousel/MacroVision4.png';
import MacroVision5 from '/src/assets/images/components/partner-carousel/MacroVision5.png';
import MacroVision6 from '/src/assets/images/components/partner-carousel/MacroVision6.png';



const PartnerCarousel = () => {
  const partners = [
    { id: 1, src: MacroVision1, alt: 'MacroVision 1' },
    { id: 2, src: MacroVision2, alt: 'MacroVision 2' },
    { id: 3, src: MacroVision3, alt: 'MacroVision 3' },
    { id: 4, src: MacroVision4, alt: 'MacroVision 4' },
    { id: 5, src: MacroVision5, alt: 'MacroVision 5' },
    { id: 6, src: MacroVision6, alt: 'MacroVision 6' }
  ];



  return (
    <div  className="carousel-container">
      <h2 className="heading">Our  <span className='highlight'>Partners</span></h2>
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
