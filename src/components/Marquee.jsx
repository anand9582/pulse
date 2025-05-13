import React from 'react';
import './marquee.css'; 

const Marquee = ({ images = [], direction = 'left' }) => {
  const animationClass = direction === 'right' ? 'marquee-content-reverse' : 'marquee-content';

  return (
    <div className="marquee-container ">
      <div className={animationClass}>
        {images.map((src, index) => (
          <img src={src} alt={`marquee-${index}`} className="marquee-image" key={index}
        //   style={{ width: '150px', height: '70px', objectFit: 'contain', marginRight: '20px' }}
          />
        ))}
      </div>
    </div>
  );
};


export default Marquee;
