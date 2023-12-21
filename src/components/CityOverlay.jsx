// CityOverlay.jsx
import React, { useEffect, useRef } from 'react';

const CityOverlay = ({ children, onClose }) => {
    const overlayRef = useRef(null);

    useEffect(() => {
        // Agregar clase al body para aplicar un fondo con opacidad
        document.body.classList.add('overlay-open');
    
        // Hacer scroll hacia el CityOverlay
        if (overlayRef.current) {
          overlayRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    
        return () => {
          // Remover la clase y el div adicional al desmontar el componente
          document.body.classList.remove('overlay-open');
        };
      }, []);

  return (
    <div ref={overlayRef} className=" w-full h-full bg-opacity-70 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md relative" style={{ width: '100%' }}>
        <button className="absolute top-2 right-2 p-2 cursor-pointer" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default CityOverlay;
