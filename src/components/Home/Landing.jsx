import { useEffect, useState } from 'react';
import Button from '../Global/Button';
import LandingExplore from '../../data/LandingExplore';
import stateicon from "../../assets/images/banner/state-icon.svg";
import cameraIcon from "../../assets/images/banner/state-icon-two.svg";
import IncdentIcon from "../../assets/images/banner/state-icon-three.svg";
import millionIcon from "../../assets/images/banner/state-icon-fourth.svg";
import OutletIcon from "../../assets/images/banner/state-icon-fivth.svg";
import RevenueIcon from "../../assets/images/banner/state-icon-sixth.svg";
import HygieneIcon from "../../assets/images/banner/state-icon-seventh.svg";
import RatingIcon from "../../assets/images/banner/state-icon-eigth.svg";
import Hygieneicon from "../../assets/images/banner/state-icon-ninth.svg";

const Landing = () => {
  const [indexes, setIndexes] = useState(
    LandingExplore.map(() => 0)
  );

  const iconMap = {
    "Partners": stateicon,
    "Cameras Integrated": cameraIcon,
    "Incident Alerts": IncdentIcon,
     "Footfalls Analysed": millionIcon,
    "Outlets Monitored": OutletIcon,
    "Revenue Uptick": RevenueIcon,
    "Restaurants Secured": HygieneIcon,
    "Better Rating": RatingIcon,
    "Hygiene Adherence": Hygieneicon
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prevIndexes) =>
        prevIndexes.map((currentIdx, i) => {
          const totalTexts = LandingExplore[i].texts.length;
          return (currentIdx + 1) % totalTexts;
        })
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="landing"
      id="landing"
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh', // full screen
        width: '100%',
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="landing-video-bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0, // Make sure the video stays at the back
        }}
      >
        <source src="/assets/images/vedios/storepulse-vedio.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
         background: 'linear-gradient(to bottom, #000319, #00031966)', 
          zIndex: 1,
        }}
      ></div>

      {/* Content inside the overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          padding: '20px 0',
          zIndex: 2, // Content above the overlay
        }}
      >
        <div className="container">
          <div className="landing__explore" style={{ marginBottom: '20px' }}>
            {LandingExplore.map(({ id, texts }, i) => {
                const currentText = texts[indexes[i]]; 
                const currentIcon = iconMap[currentText.itemTitle] || stateicon; 

                return (
                  <div className="landing__explore__item" key={id}>
                    <img src={currentIcon} alt={currentText.itemTitle} width={56} height={56} />
                    <div className="landing__explore__item__info">
                      <span className="landing__explore__item__number">{currentText.itemNumber}</span>
                      <span className="landing__explore__item__title">{currentText.itemTitle}</span>
                    </div>
                  </div>
                );
              })}
      <div className="landing__explore__item">
                <Button
                  urlValue="/about"
                  valueText="Book Demo"
                  className="btn-url"
                  second={true}
                  btnCard={false}
                  thirdType={false}
                  fourthType={false}
                />
                </div>
          </div>

          <div
            style={{
              borderTop: '2px solid #212121',
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              textAlign: 'center',
              gap: '20px',
              color: '#fff',
            }}
            className='retail_box'
          >
            <div style={{ flex: 1 }}>
              <h4>Retail</h4>
            </div>
            <div style={{ flex: 1 }}>
              <h4>F&B</h4>
            </div>
            <div style={{ flex: 1 }}>
              <h4>Manufacturing</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
