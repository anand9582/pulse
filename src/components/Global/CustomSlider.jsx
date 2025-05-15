import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Left Arrow
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

// Right Arrow
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const CustomSlider = ({
  DataArr,
  reverse = false,
  showImage = true,
  showText = true,
  singleColumn = false
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Slider {...settings}>
      {DataArr.map(({ id, heading, subtext, image }, index) => {
        const isReverse = reverse && index % 2 !== 0;
        return (
          <div key={id} className="container">
            <div className="slider-slide">
              <div
                className="row align-items-center justify-content-center"
                style={{
                  flexDirection: isReverse ? 'row-reverse' : 'row',
                }}
              >
                {showImage && !singleColumn && (
                  <div className="col-md-7">
                    <img
                      src={image}
                      alt={heading}
                      className="img-fluid rounded"
                      style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
                    />
                  </div>
                )}

                {showText && (
                  <div className={singleColumn ? 'col-md-12' : 'col-md-5 text-white'}>
                    <div>
                      <h2 className='mt-4'>{heading}</h2>
                      <p style={{ fontSize: '16px', marginTop: '10px' }}>{subtext}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default CustomSlider;
