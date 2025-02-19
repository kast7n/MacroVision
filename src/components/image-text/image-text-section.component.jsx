import React from 'react';
import './image-text-section.styles.scss'; // Correct import for SCSS

const ImageTextSection = ({ imageUrl, title, description, layout }) => {
  return (
    <section className={`section ${layout === 'image-text' ? 'imageText' : 'textImage'}`}>
      <div className="imageContainer">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="textContainer">
        <h2> <span className='highlight'>{title}</span></h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ImageTextSection;