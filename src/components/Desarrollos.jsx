import React from 'react';
import AutoScrollSlider from './AutoScrollSlider';

const developments = [
    {
    image:'https://comebi.mx/wp-content/uploads/2022/01/Logo_Villas_GTO.png',
    link: 'https://www.ejemplo.com/desarrollo1',
    },
    {
    image: 'https://comebi.mx/wp-content/uploads/2022/01/logo-los-lagos-residencial-v1-color.png',
    link: 'https://www.ejemplo.com/desarrollo1',
    },
    {
    image: 'https://comebi.mx/wp-content/uploads/2022/01/logo-arcano-v1-color.png',
    link: 'https://www.ejemplo.com/desarrollo1',
    },
    {
    image: 'https://comebi.mx/wp-content/uploads/2022/01/logo-valle-de-la-palma-v1-color.png',
    link: 'https://www.ejemplo.com/desarrollo1',
    },
    {
    image: 'https://comebi.mx/wp-content/uploads/2022/01/logo-puertas-de-san-miguel-v1-color.png',
    link: 'https://www.ejemplo.com/desarrollo1',
    },
    {
    image: 'https://comebi.mx/wp-content/uploads/2022/01/logo-villa-diamante-v1-color.png',
    link: 'https://www.ejemplo.com/desarrollo1',
    },
    {
    image: 'https://comebi.mx/wp-content/uploads/2022/03/Cumbres_logo_amarillo.png',
    link: 'https://www.ejemplo.com/desarrollo1',
    },
    {
    image: 'https://comebi.mx/wp-content/uploads/2022/01/logo-godai-v1-color.png',
    link: 'https://www.ejemplo.com/desarrollo1',
    },
    {
    image: 'https://comebi.mx/wp-content/uploads/2022/01/logo-horizontes-v1-color.png',
    link: 'https://www.ejemplo.com/desarrollo1',
    },
    {
    image: 'https://comebi.mx/wp-content/uploads/2022/01/logo-san-gerardo-residencial-v1-color.png',
    link: 'https://www.ejemplo.com/desarrollo1',
    },
    // Agrega más URLs de imágenes según sea necesario
  ];

export const Desarrollos = () => {
  return (
    <section>
        <div className="mt-20 text-center">
            <h3 className="font-bold text-3xl lg:text-4xl">Conoce nuestros desarrollos</h3>
            <hr className='border-b-8 border-sky-700 w-80 mx-auto mt-2'/>
            <div className='mt-20'>
              <AutoScrollSlider slides={developments} />
            </div>
        </div>
    </section>
  );
}