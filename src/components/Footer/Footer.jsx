import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container text-light py-5">
      <div className="container-custom ">
        <div className="row text-start">
          {/* Column 1 */}
          <div className="col-md-4 mb-4">
            <h2 className="fw-bold">StorePulse</h2>
            <p>
              StorePulse turns your CCTV cameras into a smart analytics tool. Identify missed sales, <br />
              optimize customer flow, and drive conversions with AI-powered insights.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Email</h5>
            <p className="mb-1">info@storepulse.ai</p>
            <p>sales2@storepulse.ai</p>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-semibold">Address</h5>
            <p className="mb-1">23A, Shivaji Marg, Moti Nagar,</p>
            <p className="mb-1">Karampura Industrial Area,</p>
            <p>New Delhi, 110015</p>
          </div>
        </div>

        {/* Bottom line */}
        <hr className="border-top-light" />
        <p className="text-center mb-0 small">
          2024 @ StorePulse | Powered by Transcline Technologies Limited
        </p>
      </div>
    </div>
  );
};

export default Footer;
