import React from 'react';
import ImageTextSection from '../image-text/image-text-section.component';
import './why-choose-us.styles.scss';


const WhyChooseUs = () => {
    return (
        <div id='WhyUs' className="container partial-component">
          <h2 className="heading">Why Choose Us?</h2>
    
          {/* Image - Text */}
          <ImageTextSection
            imageUrl="/src/assets/images/components/why-choose-us/application.webp"
            title="Expert Team"
            description="Our team of experts is dedicated to delivering top-notch solutions tailored to your needs."
            layout="image-text"
          />
    
          {/* Text - Image */}
          <ImageTextSection
            imageUrl="/src/assets/images/components/why-choose-us/application2.webp"
            title="Innovative Solutions"
            description="We leverage the latest technologies to provide innovative and scalable solutions for your business."
            layout="text-image"
          />
    
          {/* Image - Text */}
          <ImageTextSection
            imageUrl="/src/assets/images/components/why-choose-us/application3.webp"
            title="Customer-Centric Approach"
            description="We prioritize your needs and ensure seamless communication throughout the project lifecycle."
            layout="image-text"
          />
        </div>
      );
    };

export default WhyChooseUs;