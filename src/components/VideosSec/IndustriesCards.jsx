import React, { useEffect, useRef, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './IndustriesCards.css';

import haircross from '../../assets/entypo_hair-cross.png';
import truckDelivery from '../../assets/tabler_truck-delivery.png';
import careStaffArea from '../../assets/medical-icon_care-staff-area.png';
import racingHelmet from '../../assets/mdi_racing-helmet.png';
import bagHandle from '../../assets/famicons_bag-handle.png';
import shopTime from '../../assets/mdi_shop-time.png';
import vegetarian from '../../assets/mdi_lacto-vegetarian.png';
import truckBag from '../../assets/fluent_vehicle-truck-bag-20-filled.png';
import chartData from '../../assets/material-symbols-light_chart-data-rounded.png';
import maleFemale from '../../assets/mdi_human-male-female.png';
import footprint from '../../assets/mdi_foot-print.png';
import solidTime from '../../assets/icon-park-solid_time.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const iconMatrix = [
  [solidTime, footprint, maleFemale, chartData],
  [haircross, truckBag,  vegetarian,shopTime ],
  [bagHandle,  racingHelmet,careStaffArea, truckDelivery ]
];

const data = [
  {
    title: 'Retail Enterprises',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    points: [
      'Opening and closing time',
      'Footfall and conversion tracking',
      'Customer Gender & Age Group Segmentation',
      'Hourly, daily and monthly insights',
    ],
  },
  {
    title: 'Food & Beverage',
    video: 'https://www.w3schools.com/html/movie.mp4',
    points: [
      'Hairnet Compliance',
      'Delay Detection for Delivery Partner',
      'Veg & Non-Veg Cross-contamination Detection',
      'Wait-time Monitoring for Diner',
    ],
  },
  {
    title: 'Manufacturing',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    points: [
      'Sack-Bag Counter',
      'Helmet & PPE Kit Compliance',
      'Staff Absence Detection in Heavy Machinery Zones',
      'Vehicle In & Out Movements',
    ],
  },
];

const IndustriesCards = () => {
  const videoRefs = useRef([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);


  const handleMouseEnter = async (index) => {
    const vid = videoRefs.current[index];
    if (vid) {
      try {
        vid.currentTime = 0;
        await vid.play();
        setHoverIndex(index);
      } catch (err) {
        console.error(`Video play failed for index ${index}:`, err);
      }
    }
  };

  const handleMouseLeave = (index) => {
    const vid = videoRefs.current[index];
    if (vid && !vid.paused) {
      vid.pause();
    }
    setHoverIndex(null);
  };

  return (
    <Container className="py-5 mt-5">

      <h2 className="text-center mb-4" style={{
        fontFamily: 'Inter, sans-serif  ',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#3F78E0',
        // letterSpacing: '2px',
        // marginTop: "50px",
        // marginBottom: "50px",
        // textAlign: 'center'
      }}>AI THAT WORKS WHERE YOU DO</h2>

      <h2 className="text-center mb-4"
        style={{

          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '28px',
          lineHeight: '44px',
          // letter-spacing: 0%
          textAlign: 'center',
          textTransform: 'capitalize'

        }}
      >Industries We Serve</h2>
      <Row className="gx-4 gy-5">
        {data.map((item, idx) => (
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
            <Card
              className={`industry-card  border-0 p-3 ${hoverIndex === idx ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <div className="video-wrapper">
                <video
                  className="card-video"
                  src={item.video}
                  muted
                  loop
                  ref={(el) => (videoRefs.current[idx] = el)}
                  preload="metadata"
                />
                <div className="play-icon">&#9658;</div>
              </div>
              <Card.Body className="card-content">
                <Card.Title>{item.title}</Card.Title>
                <ul className="list-item list-unstyled">
                  {item.points.map((point, i) => (
                    <li key={i} className="mb-2 d-flex align-items-center">
                      <img
                        src={iconMatrix[idx][i]}
                        alt="icon"
                        className='icon'
                        
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container >
  );
};

export default IndustriesCards;
