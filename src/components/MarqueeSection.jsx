// components/MarqueeSection.jsx
import React from 'react';
import Marquee from "./Marquee"
import cobb from '../assets/cobb-min.png'
import columbia from '../assets/columbia-min.png'
import pnl from '../assets/pnl-min.png'
import spicejet from '../assets/spicejet-min.png'

const MarqueeSection = () => {
  const topImages = [
    spicejet, pnl, columbia, cobb, columbia, spicejet, pnl, columbia, cobb, columbia
  ];

  const bottomImages = [
    columbia, spicejet, pnl, columbia, cobb, columbia, spicejet, pnl, columbia, cobb,
  ];




  return (
    <div className="container py-4 mt-4 ">
      <h6
        style={{
          fontFamily: 'Inter, sans-serif  ',
          fontWeight: '400',
          fontSize: '1.8rem',
          letterSpacing: '2px',
          color: '#3366ff',
          textAlign: 'center',
          marginTop: "3%",
        }}
      >
       Our Partners
      </h6>
      <h6
        style={{
          fontFamily: 'Inter, sans-serif  ',
          fontWeight: '600',
          fontSize: '2.8rem',
          letterSpacing: '2px',
          color: '#1A1A1A',
          textAlign: 'center',
          marginTop: "1%",
        }}
      >
        Trusted by Leading Brands
      </h6>


      <div style={{ marginTop: '5%' }}>
        <Marquee images={topImages} direction="left" />
      </div>
      <div style={{ marginTop: '2.5%' }}>
        <Marquee images={bottomImages} direction="right" />
      </div>

    </div>
  );
};

export default MarqueeSection;
