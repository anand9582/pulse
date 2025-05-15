import React from 'react';
import './CertificationCards.css';
import isoIcon from '../../assets/iso.png'; // adjust path as needed

const certifications = [
  { title: 'ISO/IEC 27001:2013', type: 'ISO' },
  { title: 'CMMI Maturity Level 5', type: 'CMMI' },
  { title: 'ISO 9001:2015', type: 'ISO' },
  { title: 'ISO 14001:2015', type: 'ISO' },
  { title: 'ISO/IEC 20000-1:2018', type: 'ISO' },
];

const CertificationCards = () => {
  return (
    <div className="text-center my-5">
      <div className="titlee">VERIFIED BY INDUSTRY AUTHORITIES</div>
      <h2 className="head">Our Certifications</h2>
      <div className="row justify-content-center">
        {certifications.map((cert, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-2 mb-4">
            <div className="cert-card hover-effect">
              <img src={isoIcon} alt={`${cert.type} badge`} className="cert-icon" />
              <div className="cert-title">{cert.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationCards;
