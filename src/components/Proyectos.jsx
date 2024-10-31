import "../styles/proyectos.css";

import p1 from "../assets/grilla/galeria1.webp";
import p2 from "../assets/grilla/galeria2.webp";
import p3 from "../assets/grilla/galeria3.webp";
import p4 from "../assets/grilla/galeria4.webp";
import p5 from "../assets/grilla/galeria5.webp";
import p6 from "../assets/grilla/galeria6.webp";
import p7 from "../assets/grilla/galeria7.webp";
import p8 from "../assets/grilla/galeria8.webp";
import p9 from "../assets/grilla/galeria9.webp";


const galeria= [
    { id: 1, image: p1, name: 'RESIDENCIA H-10', description: '2 pisos - 170m2 - estructura metálica con paneles SIP' },
    { id: 2, image: p2, name: 'RESIDENCIA H-1', description: '2 pisos - 210m2 - estructura dormido armado con mampostería' },
    { id: 3, image: p3, name: 'RESIDENCIA B-1', description: '2pisos -170m2- estructura metálica con paneles SIP y revestimiento con siding blanco' },
    { id: 4, image: p4, name: 'RESIDENCIA B-10', description: 'Living 140m2 - 1 piso estructura de hormigón con mampostería' },
    { id: 5, image: p5, name: 'RESIDENCIA H-5', description: 'cocina 130m2- 2 pisos estructura hormigón armado con ladrillos hueco' },
    { id: 6, image: p6, name: 'RESIDENCIA B-10', description: 'living - 150m2 - 1 piso estructura de hormigón armado con ladrillos huecos' },
    { id: 7, image: p7, name: 'DEPARTAMENTOS', description: '1500m2 - 4 pisos estructura de hormigón armado' },
    { id: 8, image: p8, name: 'HOTEL', description: '330m2 - 5 pisos con estructura metálica' },
    { id: 9, image: p9, name: 'PARQUE INDUSTRIAL', description: '8879m2 - 2 pisos estructura metálica con paneles siding' }
  ];

const Proyectos = () => {
  return (
    <div className='proyectos' id="proyectos">
        <div className='title'>
            <h2 data-aos="fade-up">PROYECTOS</h2>
        </div>
        <div className='grid-container'>
            {galeria.map((gallery) => (
            <div className="box-proyectos" key={gallery.id}>
                <img src={gallery.image} alt={gallery.image}/>
                <div className="capa">
                  <div className="capa-content">
                    <h3>{gallery.name}</h3>
                    <p>{gallery.description}</p> 
                  </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Proyectos