import React from 'react';
import demoImage from '../assets/pnl-min.png'
import StorePulseSlider from './StorePulseSlider';
import './StorePulseSection.css';



const StorePulseSection = () => {
    return (
        <div className="container-fluid py-5 custom-margin">
            <div className="row align-items-center ">
                <div
                    className="col-md-6 mb-4 mb-md-0 d-flex flex-column "
                    data-aos="fade-right"
                    style={{
                        // width: '426px',
                        // marginTop: '38px',
                        // marginLeft: '120px',
                        gap: '26px',
                    }}
                >
                    <h2
                        className="fw-bold"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            marginBottom: '0',
                            font: 'inter',
                            fontWeight: 700,
                            fontSize: '28px',
                            lineHeight: '50px'
                        }}
                    >
                        Introducing StorePulse
                    </h2>

                    <p style={{
                        lineHeight: '1.5', marginBottom: '0',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '20px',
                        //  lineHeight:'25px',
                        // letterSpacing: '0px',
                        color:'#171717'
                    }}>
                        StorePulse is an AI-driven platform that transforms real-time video feeds into actionable insights, enhancing operational efficiency across retail, food & beverage, and manufacturing sectors.
                    </p>

                    <button
                        className="btn btn-primary"
                        style={{
                            width: '150px',
                            height: '50px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            fontSize: '18px',
                            lineHeight: '30px',
                            letterSpacing: '0px',
                            padding: '0',
                            textAlign: 'center'
                        }}
                    >
                        Book Demo
                    </button>

                </div>



                <div className="col-md-6" data-aos="fade-left">
                    <StorePulseSlider />
                </div>
            </div>
        </div>
    );
};

export default StorePulseSection;
