import "../styles/servicios.css";
import React, { useState } from 'react';

import edificio from "../assets/servicios.webp";


const services = [
  { id: 1, name: 'DISEÑO ARQUITECTÓNICO PERSONALIZADO', description: 'Diseñamos espacios a medida que reflejan tu estilo y optimizan la funcionalidad, cuidando cada detalle estético.' },
  { id: 2, name: 'MODELO 3D y RENDERS PROFESIONALES', description: 'Visualiza tu proyecto con precisión, gracias a imágenes en 3D que muestran cada aspecto antes de construir.' },
  { id: 3, name: 'DESARROLLOS INMOBILIARIOS', description: 'Planificamos, diseñamos y gestionamos desarrollos inmobiliarios que maximizan el valor de tu inversión. Nos ocupamos de la ejecución completa, asegurando calidad y cumplimiento en cada etapa.' },
  { id: 4, name: 'CONSULTORÍA Y GESTIÓN INTEGRAL DE PROYECTOS', description: 'Nos encargamos de todo el proceso, desde la planificación hasta la ejecución, coordinando a los profesionales necesarios para que el resultado final sea impecable.' },
  { id: 5, name: 'REFORMAS y AMPLIACIONES', description: 'Renovamos y ampliamos espacios, creando soluciones que combinan modernización y eficiencia, siempre adaptadas a tus necesidades.' },
];

const Servicios = () => {


  const [visibleService, setVisibleService] = useState(null);

  const toggleDescription = (id) => {
    setVisibleService(visibleService === id ? null : id);
  };


  return (
    <div className='servicios' id="servicios">
      <section>
        <div className='title'>
              <h2>SERVICIOS</h2>
              <p>INNOVACIÓN EN CADA DETALLE, VALOR EN CADA PROYECTO</p>
          </div>
          <div className='content'>
                  {services.map((service) => (
                <div className="item" key={service.id}>
                  <div className="service-name">
                    <h3>{service.name}</h3>
                    <div className="wrapper">
                    <input type="checkbox" checked={visibleService === service.id} onChange={() => toggleDescription(service.id)} />
                      <div className="btn"></div>
                    </div>
                  </div>
                  {visibleService === service.id && <p>{service.description}</p>}
                </div>
              ))}
          </div>
      </section>
      <aside>
        <div className="image-container">
          <img src={edificio} alt="edificio" />
        </div>
      </aside>
        
    </div>
  )
}

export default Servicios