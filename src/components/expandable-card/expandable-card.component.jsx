import React from 'react';
import { ChevronDown } from 'lucide-react';
import './expandable-card.styles.scss';

const ExpandableCard = ({ 
  title, 
  description, 
  isExpanded, 
  onToggle 
}) => {
  return (
    <div className="expandable-card">
      <div 
        className={`expandable-card__header ${
          isExpanded ? 'expandable-card__header--expanded' : ''
        }`}
        onClick={onToggle}
      >
        <div className="expandable-card__header-content">
          <h3 className="expandable-card__title">{title}</h3>
          <ChevronDown 
            size={20}
            className={`expandable-card__icon ${
              isExpanded ? 'expandable-card__icon--expanded' : ''
            }`}
          />
        </div>
      </div>
      
      <div
        className={`expandable-card__content ${
          isExpanded ? 'expandable-card__content--expanded' : ''
        }`}
      >
        <p className="expandable-card__paragraph">{description}</p>
      </div>
    </div>
  );
};

export default ExpandableCard;