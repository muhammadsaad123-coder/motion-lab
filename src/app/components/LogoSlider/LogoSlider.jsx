'use client';

import React from 'react';
import './LogoSlider.css'; // You’ll create this for animation

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
    <div className="logo-slider-wrapper overflow-hidden bg-white py-6">
      <div className="logo-slider-track flex animate-scroll gap-12">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-40 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
            <img src={logo} alt={`Logo ${index}`} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
