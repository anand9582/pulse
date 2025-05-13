import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = ({ DataArr }) => {
  const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
  };

  return (
    <Slider {...settings}>
      {DataArr.map(({ id, heading, subtext }) => (
        <div key={id} className="slider-slide" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              padding: '30px',
              borderRadius: '10px',
              color: '#fff',
              maxWidth: '80%',
            }}
          >
            <h2 style={{ margin: 0 }}>{heading}</h2>
            <p style={{ marginTop: '10px', fontSize: '18px' }}>{subtext}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
