import React, { useState, useEffect, useRef } from 'react';
import ExpandableCard from '../expandable-card/expandable-card.component';
import './faq.styles.scss';

const faqData = [
    {
      id: 1,
      question: "What services does MacroVision offer?",
      answer: "MacroVision specializes in advanced data analysis, predictive modeling, business intelligence, and data visualization. We help businesses make data-driven decisions through custom analytics solutions."
    },
    {
      id: 2,
      question: "How does MacroVision ensure data security?",
      answer: "We prioritize data security with end-to-end encryption, secure cloud storage, and compliance with industry standards like GDPR and ISO 27001. Our systems are regularly audited to ensure maximum protection."
    },
    {
      id: 3,
      question: "Can MacroVision integrate with our existing systems?",
      answer: "Yes, our solutions are designed to integrate seamlessly with various databases, cloud platforms, and enterprise software, including AWS, Azure, Google Cloud, and on-premise systems."
    },
    {
      id: 4,
      question: "How can I get a custom data analysis solution?",
      answer: "You can contact our team through our website or schedule a consultation. We assess your needs, define key metrics, and develop a tailored data analytics solution for your business."
    }
];

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger animation once
        }
      },
      {
        threshold: 0.2 // Trigger when 20% of the component is visible
      }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div  id='FAQ'
      ref={faqRef} 
      className={`faq-container partial-component ${isVisible ? 'visible' : ''}`}
    >
      <div className="faq-header">
        <h2 className="faq-header__title">Frequently Asked Questions</h2>
        <p className="faq-header__description">
          Find answers to common questions about our products and services.
        </p>
      </div>
     
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div 
            key={item.id} 
            className="faq-item"
            style={{ 
              animationDelay: isVisible ? `${index * 0.1}s` : '0s'
            }}
          >
            <ExpandableCard
              title={item.question}
              description={item.answer}
              isExpanded={expandedId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;