// CityDetails.jsx
import React, { useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CityDetails = ({ id, name, location, images, onClose, description, buttons }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={`edo-container ${id}`}>
      <div className="w-full lg:w-1/2 float-left pr-4">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full lg:w-1/2 float-left px-2">
        <h3 className="font-black text-xl">{name}</h3>
        <p className="mt-2 text-sm">{location}</p>
        <p className="my-6 text-lg">{description}</p>
        <div className="flex space-x-4">
          {/* Mapear los botones */}
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              target="_blank" // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer"
              className="border border-blue-900 hover:bg-sky-700 hover:text-white transition-colors cursor-pointer uppercase font-bold p-4 block text-sky-700"
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
