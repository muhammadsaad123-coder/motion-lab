'use client';

import React from 'react';
import './LogoSlider.css';

const logos = [
  '/images/logo1.png',
  '/images/logo1.png',
  '/images/logo1.png',
  '/images/logo1.png',
  '/images/logo1.png',
  '/images/logo1.png',
  '/images/logo1.png',
  '/images/logo1.png',
  '/images/logo1.png',
];

const LogoSlider = () => {
  return (
    <div className="logo-slider-wrapper">
      <div className="logo-slider-track">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="logo-item"
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="logo-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
