import React, { useState, useEffect, useRef } from 'react';
import ImageTextSection from '../image-text/image-text-section.component';
import './why-choose-us.styles.scss';

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            id='WhyUs'
            ref={sectionRef}
            className={`container partial-component ${isVisible ? 'visible' : ''}`}
        >
            <h2 className="heading">Why Choose Us?</h2>
   
            <ImageTextSection
                imageUrl="./src/assets/images/components/why-choose-us/application.webp"
                title="Expert Team"
                description="Our team of experts is dedicated to delivering top-notch solutions tailored to your needs."
                layout="image-text"
                className="section-item"
            />
   
            <ImageTextSection
                imageUrl="./src/assets/images/components/why-choose-us/application2.webp"
                title="Innovative Solutions"
                description="We leverage the latest technologies to provide innovative and scalable solutions for your business."
                layout="text-image"
                className="section-item"
            />
   
            <ImageTextSection
                imageUrl="./src/assets/images/components/why-choose-us/application3.webp"
                title="Customer-Centric Approach"
                description="We prioritize your needs and ensure seamless communication throughout the project lifecycle."
                layout="image-text"
                className="section-item"
            />
        </div>
    );
};

export default WhyChooseUs;