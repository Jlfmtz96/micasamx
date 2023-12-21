import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import CityCard from "./CityCard";
import CityDetails from "./CityDetails";
import CityOverlay from "./CityOverlay";
import LoadingSpinner from './LoadingSpinner';


export const Ciudades = () => {
  const cities = [
      {
        id: 'ags',
        name: 'Aguascalientes',
        location: 'San Gerardo',
        image: 'https://comebi.mx/wp-content/uploads/2022/01/Aguascalientes.png',
        images: [
          'https://comebi.mx/wp-content/uploads/2020/06/AGUAS2.jpg',
          'https://comebi.mx/wp-content/uploads/2020/06/AGUAS1.jpg',
          'https://comebi.mx/wp-content/uploads/2020/06/AGUAS-3.jpg',
          // Agrega más URL de imágenes según sea necesario
        ],
        description: 'La ciudad de Aguascalientes se ha colocado como una de las mejores ciudades para vivir por la calidad de sus servicios públicos, el fomento que tiene hacia el sector turístico, buena calidad en el sector educativo privado y público, buena oferta inmobiliaria, centros de salud, lugares de diversión y entretenimiento. El crecimiento económico de la población facilita la demanda de productos, servicios y lugares de esparcimiento, permitiendo que se pueda invertir en bienes raíces.',
        buttons: [
          { label: 'San Gerardo', link: 'https://enlace1.com' },
        ],
      },
      {
        id: 'gto',
        name: 'Guanajuato',
        location: 'Villas de Guanajuato',
        image: 'https://comebi.mx/wp-content/uploads/2022/01/Guanajuato.png',
        images: [
          'https://comebi.mx/wp-content/uploads/2020/06/Gto3-.jpg',
          'https://comebi.mx/wp-content/uploads/2020/06/Gto3-.jpg',
          'https://comebi.mx/wp-content/uploads/2020/06/Gto1-.jpg',
          // Agrega más URL de imágenes según sea necesario
        ],
        description: 'La ciudad de Guanajuato ofrece un estilo de vida relajado y un ambiente tranquilo para las familias. Cuenta con una amplia oferta de museos, teatros y centros culturales. Está conectada con una amplia red de vialidades que la mantienen comunicada, además de carreteras que enlazan con otras entidades Jalisco, Zacatecas, Aguascalientes, San Luis Potosí, Querétaro y la Ciudad de México. La demanda inmobiliaria se concentra en esta ciudad por a la buena calidad de vida.',
        buttons: [
          { label: 'Villas de Guanajuato', link: 'https://enlace1.com' },
        ],
      },
      {
        id: 'ipto',
        name: 'Irapuato',
        location: 'Godai / Horizontes',
        image: 'https://comebi.mx/wp-content/uploads/2022/01/Irapuato.png',
        images: [
          'https://comebi.mx/wp-content/uploads/2020/06/Irapuato-2-.jpg',
          'https://comebi.mx/wp-content/uploads/2020/06/Irapuato-3-.jpg',
          'https://comebi.mx/wp-content/uploads/2020/06/Irapuato_godai.jpg',
          // Agrega más URL de imágenes según sea necesario
        ],
        description: 'La ciudad de Irapuato atrae gracias a la alta calidad de sus áreas residenciales, tiene magníficas vías carreteras que lo comunican con las principales ciudades del estado y su capital. La zona central o bajío del país se ha ido consolidando como un lugar con una economía dinámica y una excelente oportunidad para la inversión inmobiliaria.',
        buttons: [
          { label: 'Godai', link: 'https://enlace1.com' },
          { label: 'Horizontes', link: 'https://enlace2.com' },
        ],
      },
      // Add more cities as needed
  ];

  const cities2 = [
    {
        id: 'qro',
        name: 'Querétaro',
        location: 'Cumbres del Marqués / Puertas de San Miguel',
        image: 'https://comebi.mx/wp-content/uploads/2022/01/Queretaro.png',
        images: [
          'https://micasamx.com/imagenes/Areas%20verdes%20San%20Miguel.jpg',
          'https://micasamx.com/imagenes/Tren%20de%20vivienda%20San%20Miguel.jpg',
          'https://micasamx.com/imagenes/1280X822%20(CUMBRES%20MALAGA).jpg',
          'https://micasamx.com/imagenes/1280X822%20(CUMBRES%20ACCESO).jpg',
          'https://micasamx.com/imagenes/Master%20plan%20CDM.jpg',
          // Agrega más URL de imágenes según sea necesario
        ],
        description: 'Actualmente, el estado de Querétaro se posiciona como el segundo más rentable de todo el país, capaz de crear un buen ambiente para la inversión, de atraerlo y mantenerlo por largo tiempo. Esto se debe a la gran diversidad comercial e industrial de la ciudad, que provee productividad y bienestar al mismo tiempo para todos los habitantes.',
        buttons: [
          { label: 'Cumbres del Marqués', link: 'https://enlace1.com' },
          { label: 'Puertas de San Miguel', link: 'https://enlace2.com' },
        ],
      },
      {
        id: 'sal',
        name: 'Salamanca',
        location: 'Villa Diamante',
        image: 'https://comebi.mx/wp-content/uploads/2022/01/Salamanca.png',
        images: [
          'https://comebi.mx/wp-content/uploads/2020/06/Salamanca-3.jpg',
          'https://comebi.mx/wp-content/uploads/2020/06/Salamanca-2.jpg',
          // Agrega más URL de imágenes según sea necesario
        ],
        description: 'Salamanca es una de las principales ciudades del corredor industrial del Bajío, cuenta con una Ubicación privilegiada ya que se encuentra en la región central del estado de Guanajuato, entre Irapuato y Celaya y muy cerca de León y de Guanajuato. Su crecimiento en la economía permite que sea una gran oportunidad de inversión en residenciales donde brindan seguridad y la tranquilidad para formar un patrimonio.',
        buttons: [
          { label: 'Villa Diamante', link: 'https://enlace1.com' },
        ],
      },
      {
        id: 'slp',
        name: 'San Luis Potosí',
        location: 'Los Lagos / Arcano / Valle de la Palma',
        image: 'https://comebi.mx/wp-content/uploads/2022/01/San-Luis-Potosi.png',
        images: [
          'https://comebi.mx/wp-content/uploads/2020/06/San-Luis-3.jpg',
          'https://comebi.mx/wp-content/uploads/2020/06/San-Luis-2.jpg',
          'https://comebi.mx/wp-content/uploads/2020/06/San-Luis-1.jpg',
          // Agrega más URL de imágenes según sea necesario
        ],
        description: 'La ciudad de San Luis Potosí está considerada como una de las mejores zonas para vivir en el centro de México. Las características culturales y educativas hacen de esta ciudad un lugar ideal para invertir, cuenta con reconocidos centros educativo, ha tenido un aumento en su plusvalía gracias al desarrollo económico de la región, especialmente por el establecimiento de numerosas regiones y parques industriales alrededor de la ciudad. El crecimiento de la ciudad hace que la oferta de vivienda sea muy variada, dando así la oportunidad de poder elegir el mejor patrimonio para invertir.',
        buttons: [
          { label: 'Los Lagos', link: 'https://enlace1.com' },
          { label: 'Arcano', link: 'https://enlace2.com' },
          { label: 'Valle de la Palma', link: 'https://enlace3.com' },
        ],
      },
    // Add more cities as needed
  ];

  const [loading, setLoading] = useState(false);
  const [selectedCityCities1, setSelectedCityCities1] = useState(null);
  const [selectedCityCities2, setSelectedCityCities2] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cityCardRef, setCityCardRef] = useState(null);

  useEffect(() => {
    // Guarda la posición actual del scroll al abrir el overlay
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
      
  const toggleCity = (id, cardRef) => {
    setLoading(true);
    // Guarda la referencia a la CityCard seleccionada
    setCityCardRef(cardRef);

    const cityInCities1 = cities.find((city) => city.id === id);
    const cityInCities2 = cities2.find((city) => city.id === id);
    
    if (cityInCities1) {
      setSelectedCityCities1(id);
    } else if (cityInCities2) {
      setSelectedCityCities2(id);
    }

    // Simula un retraso en la carga (puedes reemplazar esto con la lógica real de carga de datos)
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Ajusta la duración según sea necesario
  };
  
  const closeDetails = () => {
      setSelectedCityCities1(null);
      setSelectedCityCities2(null);

      // Regresa a la posición original del scroll al cerrar el CityOverlay
      scroll.scrollTo(scrollPosition, { smooth: 'easeInOutQuart' });

      // Enfoca la CityCard seleccionada para volver a mostrar el efecto onMouseOver
      if (cityCardRef && cityCardRef.current) {
        cityCardRef.current.focus();
      }
    };    

  return (
    <section id="ciudades" className='mx-8 lg:mx-0'>
      <h2 className="font-bold text-3xl lg:text-4xl text-center mt-10 lg:mt-40">Proyectamos una vida mejor en el centro del país</h2>
      <hr className='border-b-8 border-sky-700 w-80 lg:w-96 mx-auto mt-2'/>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {cities.map((city) => (
          <CityCard
            key={city.id}
            {...city}
            onToggle={toggleCity}
            isSelected={selectedCityCities1 === city.id}
          />
        ))}
      </div>
      {selectedCityCities1 && (
        <CityOverlay onClose={closeDetails}>
          {loading ? <LoadingSpinner /> : <CityDetails {...cities.find((city) => city.id === selectedCityCities1)} />}
        </CityOverlay>
      )}

      <div className="flex flex-wrap">
        {cities2.map((city) => (
          <CityCard
            key={city.id}
            {...city}
            onToggle={toggleCity}
            isSelected={selectedCityCities2 === city.id}
          />
        ))}
      </div>
      {selectedCityCities2 && (
        <CityOverlay onClose={closeDetails}>
          {loading ? <LoadingSpinner /> : <CityDetails {...cities2.find((city) => city.id === selectedCityCities2)} />}
        </CityOverlay>
      )}
      
    </section>
  );
}