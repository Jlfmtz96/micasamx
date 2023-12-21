// CityCard.js
import React, { useState, useRef } from 'react';


const CityCard = ({ id, name, image, location, onToggle, onMouseOver, onMouseOut }) => {
  const [isInfoVisible, setInfoVisible] = useState(false);
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      tabIndex="0"
      className="w-full md:w-1/2 lg:w-1/3 border rounded-lg overflow-hidden relative cursor-pointer mb-4 md:mb-0"
      onMouseOver={() => {
        setInfoVisible(true);
        onMouseOver(id);
      }}
      onMouseOut={() => {
        setInfoVisible(false);
        onMouseOut(id);
      }}
      onClick={() => onToggle(id, cardRef)}
    >
      <div
        style={{
          transition: 'transform 0.5s ease-out',
          transform: isInfoVisible ? 'translateY(-24px)' : 'translateY(0)',
        }}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      {isInfoVisible && (
        <div
          className="bg-blue-900 absolute bottom-0 left-0 right-0 p-2 estado-info text-center"
          style={{ transition: 'transform 0.5s ease-out' }}
        >
          <h3 className="uppercase text-white text-xl font-semibold" style={{ letterSpacing: '2px' }}>
            {name}
          </h3>
          <p className="text-white">{location}</p>
        </div>
      )}
    </div>
  );
};

export default CityCard;
