// AutoScrollSlider.jsx

import React, { useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const AutoScrollSlider = ({ slides }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="auto-scroll-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Splide
        options={{
          type: "loop",
          gap: "6rem",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 5,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 1
          },
          breakpoints: {
            600: {
              perPage: 2, // Ajusta el número de diapositivas para pantallas más pequeñas
              gap: "6rem", // Ajusta el espacio entre las diapositivas para pantallas más pequeñas
            },
            768: {
              perPage: 3, // Puedes ajustar el número de diapositivas para una pantalla de tamaño mediano
              gap: "6rem", // Ajusta el espacio entre las diapositivas para una pantalla de tamaño mediano
            },
            // Agrega más breakpoints según sea necesario
          },
        }}
        extensions={{ AutoScroll }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            {/* Wrap the image with an anchor tag */}
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.image} alt={`Development ${index + 1}`} />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default AutoScrollSlider;
